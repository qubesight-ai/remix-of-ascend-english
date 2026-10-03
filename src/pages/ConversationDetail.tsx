import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, MessageSquare, BarChart3, Sparkles, Loader2, Square } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useElevenLabsTTS } from '@/hooks/useElevenLabsTTS';

interface Message {
  id: string;
  role: string;
  content: string;
  pronunciation_score: number | null;
  created_at: string;
}

interface ConversationData {
  id: string;
  scenario_id: string;
  scenario_title: string;
  started_at: string;
  message_count: number;
  avg_pronunciation_score: number | null;
}

export default function ConversationDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [conversation, setConversation] = useState<ConversationData | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  
  // ElevenLabs TTS
  const { speak, stopAudio, isLoading: isSpeaking, isPlaying } = useElevenLabsTTS();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (id) {
      fetchConversationDetails();
    }
  }, [user, id, navigate]);

  const fetchConversationDetails = async () => {
    try {
      // Fetch conversation and messages in parallel
      const [conversationResult, messagesResult] = await Promise.all([
        supabase
          .from('conversations')
          .select('*')
          .eq('id', id)
          .maybeSingle(),
        supabase
          .from('conversation_messages')
          .select('*')
          .eq('conversation_id', id)
          .order('created_at', { ascending: true })
      ]);

      if (conversationResult.error) throw conversationResult.error;
      if (messagesResult.error) throw messagesResult.error;

      if (!conversationResult.data) {
        toast({
          title: 'Error',
          description: 'Conversation not found',
          variant: 'destructive',
        });
        navigate('/conversation/history');
        return;
      }

      setConversation(conversationResult.data);
      setMessages(messagesResult.data || []);
    } catch (error) {
      console.error('Error fetching conversation details:', error);
      toast({
        title: 'Error',
        description: 'Could not load conversation details',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getPronunciationFeedback = (score: number) => {
    if (score >= 0.9) return { label: "Excellent", color: "text-green-500", bgColor: "bg-green-500/10", emoji: "🌟" };
    if (score >= 0.75) return { label: "Very Good", color: "text-emerald-500", bgColor: "bg-emerald-500/10", emoji: "👍" };
    if (score >= 0.6) return { label: "Good", color: "text-yellow-500", bgColor: "bg-yellow-500/10", emoji: "👌" };
    if (score >= 0.4) return { label: "Keep Practicing", color: "text-orange-500", bgColor: "bg-orange-500/10", emoji: "💪" };
    return { label: "Try Again", color: "text-red-500", bgColor: "bg-red-500/10", emoji: "🔄" };
  };

  const speakText = (text: string) => {
    const cleanText = text.replace(/\*\*.*?\*\*/g, '').replace(/💡.*$/gm, '');
    if (isPlaying) {
      stopAudio();
    } else {
      speak(cleanText);
    }
  };

  const extractCorrections = (content: string) => {
    // Look for correction patterns in the message
    const corrections: string[] = [];
    
    // Pattern 1: **Correction:** or **Tip:**
    const tipMatches = content.match(/\*\*(?:Correction|Tip|Note|Grammar):\*\*[^*]+/gi);
    if (tipMatches) {
      corrections.push(...tipMatches.map(m => m.replace(/\*\*/g, '')));
    }
    
    // Pattern 2: 💡 emoji tips
    const emojiMatches = content.match(/💡[^\n]+/g);
    if (emojiMatches) {
      corrections.push(...emojiMatches);
    }
    
    return corrections;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </main>
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <p className="text-center text-muted-foreground">Conversation not found</p>
        </main>
      </div>
    );
  }

  // Collect all corrections from assistant messages
  const allCorrections = messages
    .filter(m => m.role === 'assistant')
    .flatMap(m => extractCorrections(m.content))
    .filter((c, i, arr) => arr.indexOf(c) === i); // Remove duplicates

  // Get user messages with pronunciation scores
  const userMessagesWithScores = messages.filter(
    m => m.role === 'user' && m.pronunciation_score !== null
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => navigate('/conversation/history')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to History
          </Button>
          
          {/* Conversation Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-info flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-2xl text-foreground">
                {conversation.scenario_title}
              </h1>
              <p className="text-muted-foreground">
                {format(new Date(conversation.started_at), "MMMM d, yyyy - HH:mm")}
              </p>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <MessageSquare className="w-6 h-6 mx-auto text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">{messages.length}</p>
                <p className="text-sm text-muted-foreground">Messages</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-6 h-6 mx-auto text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">
                  {conversation.avg_pronunciation_score 
                    ? `${Math.round(conversation.avg_pronunciation_score * 100)}%`
                    : '-'}
                </p>
                <p className="text-sm text-muted-foreground">Pronunciation</p>
              </CardContent>
            </Card>
            <Card className="col-span-2 md:col-span-1">
              <CardContent className="p-4 text-center">
                <span className="text-2xl mb-2 block">💡</span>
                <p className="text-2xl font-bold text-foreground">{allCorrections.length}</p>
                <p className="text-sm text-muted-foreground">Corrections</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Corrections Summary */}
        {allCorrections.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                📝 Corrections Summary
              </h3>
              <ul className="space-y-2">
                {allCorrections.map((correction, index) => (
                  <li 
                    key={index}
                    className="p-3 rounded-lg bg-muted/50 text-sm"
                  >
                    {correction}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Pronunciation Scores Summary */}
        {userMessagesWithScores.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                🎤 Pronunciation Scores
              </h3>
              <div className="space-y-3">
                {userMessagesWithScores.map((message, index) => {
                  const feedback = getPronunciationFeedback(message.pronunciation_score!);
                  return (
                    <div 
                      key={message.id}
                      className={cn(
                        "p-3 rounded-lg flex items-center justify-between",
                        feedback.bgColor
                      )}
                    >
                      <span className="text-sm truncate flex-1 mr-4">
                        "{message.content.slice(0, 50)}{message.content.length > 50 ? '...' : ''}"
                      </span>
                      <span className={cn("font-semibold text-sm whitespace-nowrap", feedback.color)}>
                        {feedback.emoji} {Math.round(message.pronunciation_score! * 100)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Full Conversation */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              💬 Full Conversation
            </h3>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gradient-to-br from-primary to-info"
                    )}
                  >
                    {message.role === "user" ? "👤" : <Sparkles className="w-4 h-4 text-white" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl p-4",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    
                    {/* Pronunciation score for user messages */}
                    {message.role === "user" && message.pronunciation_score !== null && (
                      <div className={cn(
                        "mt-2 pt-2 border-t text-xs flex items-center gap-2",
                        message.role === "user" ? "border-primary-foreground/20" : "border-border"
                      )}>
                        {(() => {
                          const feedback = getPronunciationFeedback(message.pronunciation_score);
                          return (
                            <>
                              <span>{feedback.emoji}</span>
                              <span>Pronunciation: {Math.round(message.pronunciation_score * 100)}%</span>
                            </>
                          );
                        })()}
                      </div>
                    )}
                    
                    {/* Speak button for assistant messages */}
                    {message.role === "assistant" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn("mt-2 h-7 text-xs", isPlaying && "text-primary")}
                        onClick={() => speakText(message.content)}
                        disabled={isSpeaking}
                      >
                        {isSpeaking ? (
                          <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                        ) : isPlaying ? (
                          <Square className="w-3 h-3 mr-1" />
                        ) : (
                          <Volume2 className="w-3 h-3 mr-1" />
                        )}
                        {isPlaying ? "Stop" : "Listen"}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Button 
            className="flex-1"
            onClick={() => navigate('/conversation')}
          >
            New Conversation
          </Button>
          <Button 
            variant="outline"
            className="flex-1"
            onClick={() => navigate('/conversation/history')}
          >
            View History
          </Button>
        </div>
      </main>
    </div>
  );
}