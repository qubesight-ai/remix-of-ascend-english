import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Calendar, BarChart3, Trash2, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Conversation {
  id: string;
  scenario_id: string;
  scenario_title: string;
  started_at: string;
  message_count: number;
  avg_pronunciation_score: number | null;
}

export default function ConversationHistory() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchConversations();
  }, [user, navigate]);

  const fetchConversations = async () => {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .order('started_at', { ascending: false });

      if (error) throw error;
      setConversations(data || []);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      toast({
        title: 'Error',
        description: 'Could not load conversations',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteConversation = async (id: string) => {
    try {
      const { error } = await supabase
        .from('conversations')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setConversations(prev => prev.filter(c => c.id !== id));
      toast({
        title: 'Conversation deleted',
        description: 'The conversation has been successfully deleted',
      });
    } catch (error) {
      console.error('Error deleting conversation:', error);
      toast({
        title: 'Error',
        description: 'Could not delete the conversation',
        variant: 'destructive',
      });
    }
  };

  const getScoreColor = (score: number | null) => {
    if (!score) return 'text-muted-foreground';
    if (score >= 0.8) return 'text-green-500';
    if (score >= 0.6) return 'text-yellow-500';
    return 'text-orange-500';
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => navigate('/conversation')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Conversations
          </Button>
          
          <h1 className="font-display font-bold text-3xl text-foreground">
            Conversation History
          </h1>
          <p className="text-muted-foreground">
            Review your past conversations and progress
          </p>
        </div>

        {conversations.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-2">No conversations yet</h3>
              <p className="text-muted-foreground mb-4">
                Start a conversation with the AI tutor to see it here
              </p>
              <Button onClick={() => navigate('/conversation')}>
                Start Conversation
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {conversations.map((conversation) => (
              <Card 
                key={conversation.id} 
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/conversation/history/${conversation.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{conversation.scenario_title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(conversation.started_at), "MMMM d, yyyy - HH:mm")}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {conversation.message_count} messages
                        </span>
                        {conversation.avg_pronunciation_score !== null && (
                          <span className={`flex items-center gap-1 ${getScoreColor(conversation.avg_pronunciation_score)}`}>
                            <BarChart3 className="w-4 h-4" />
                            {Math.round(conversation.avg_pronunciation_score * 100)}% pronunciation
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteConversation(conversation.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Stats Summary */}
        {conversations.length > 0 && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">📊 Summary</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">{conversations.length}</p>
                  <p className="text-sm text-muted-foreground">Conversations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {conversations.reduce((sum, c) => sum + c.message_count, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Messages</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {(() => {
                      const scores = conversations
                        .filter(c => c.avg_pronunciation_score !== null)
                        .map(c => c.avg_pronunciation_score as number);
                      if (scores.length === 0) return '-';
                      return Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100) + '%';
                    })()}
                  </p>
                  <p className="text-sm text-muted-foreground">Average Pronunciation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}