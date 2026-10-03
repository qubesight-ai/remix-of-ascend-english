import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, TrendingUp, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface GrammarError {
  error: string;
  correction: string;
  explanation: string;
  count: number;
}

interface GrammarCategory {
  category: string;
  icon: string;
  errors: GrammarError[];
  totalCount: number;
}

// Parse feedback from message content
function extractErrors(content: string): Array<{ error: string; correction: string; explanation: string }> {
  const errors: Array<{ error: string; correction: string; explanation: string }> = [];
  
  const feedbackRegex = /---FEEDBACK---([\s\S]*?)---END FEEDBACK---/g;
  const matches = content.match(feedbackRegex);
  
  if (!matches) {
    // Try old format with 💡 **Correction**
    const oldFormatRegex = /💡\s*\*?\*?Correction\*?\*?:\s*"([^"]+)"\s*→\s*"([^"]+)"\s*-?\s*([^\n]*)/gi;
    let match;
    while ((match = oldFormatRegex.exec(content)) !== null) {
      errors.push({
        error: match[1],
        correction: match[2],
        explanation: match[3] || ''
      });
    }
    return errors;
  }
  
  for (const match of matches) {
    const feedbackContent = match.replace('---FEEDBACK---', '').replace('---END FEEDBACK---', '');
    
    // Skip success messages
    if (feedbackContent.includes('✨')) continue;
    
    const errorBlocks = feedbackContent.split(/(?=🔴 ERROR:)/g).filter(s => s.includes('🔴 ERROR:'));
    
    for (const block of errorBlocks) {
      const errorMatch = block.match(/🔴 ERROR:\s*"([^"]+)"/);
      const correctionMatch = block.match(/✅ CORRECTION:\s*"([^"]+)"/);
      const explanationMatch = block.match(/📖 EXPLANATION:\s*([^\n]+)/);
      
      if (errorMatch && correctionMatch) {
        errors.push({
          error: errorMatch[1],
          correction: correctionMatch[1],
          explanation: explanationMatch?.[1] || ''
        });
      }
    }
  }
  
  return errors;
}

// Categorize errors by grammar type
function categorizeError(explanation: string, error: string): string {
  const lowerExplanation = explanation.toLowerCase();
  const lowerError = error.toLowerCase();
  
  if (lowerExplanation.includes('past') || lowerExplanation.includes('pasado') || 
      lowerExplanation.includes('went') || lowerExplanation.includes('did')) {
    return 'Verb Tenses';
  }
  if (lowerExplanation.includes('article') || lowerExplanation.includes('artículo') ||
      lowerError.includes(' a ') || lowerError.includes(' an ') || lowerError.includes(' the ')) {
    return 'Articles';
  }
  if (lowerExplanation.includes('preposition') || lowerExplanation.includes('preposición') ||
      /\b(in|on|at|to|for|with|by)\b/.test(lowerError)) {
    return 'Prepositions';
  }
  if (lowerExplanation.includes('subject') || lowerExplanation.includes('verb') || 
      lowerExplanation.includes('agreement') || lowerExplanation.includes('concordancia')) {
    return 'Subject-Verb Agreement';
  }
  if (lowerExplanation.includes('spelling') || lowerExplanation.includes('ortografía')) {
    return 'Spelling';
  }
  if (lowerExplanation.includes('word order') || lowerExplanation.includes('orden')) {
    return 'Word Order';
  }
  if (lowerExplanation.includes('vocabulary') || lowerExplanation.includes('vocabulario') ||
      lowerExplanation.includes('word choice')) {
    return 'Vocabulary';
  }
  return 'General Grammar';
}

const categoryIcons: Record<string, string> = {
  'Verb Tenses': '⏰',
  'Articles': '📝',
  'Prepositions': '📍',
  'Subject-Verb Agreement': '🔗',
  'Spelling': '✏️',
  'Word Order': '🔀',
  'Vocabulary': '📚',
  'General Grammar': '📖'
};

export function GrammarTips() {
  const { user } = useAuth();
  const [categories, setCategories] = useState<GrammarCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchAndAnalyzeErrors();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchAndAnalyzeErrors = async () => {
    try {
      // Fetch all conversation messages for the user
      const { data: conversations } = await supabase
        .from('conversations')
        .select('id')
        .eq('user_id', user!.id);

      if (!conversations || conversations.length === 0) {
        setLoading(false);
        return;
      }

      const conversationIds = conversations.map(c => c.id);

      const { data: messages } = await supabase
        .from('conversation_messages')
        .select('content, role')
        .in('conversation_id', conversationIds)
        .eq('role', 'assistant');

      if (!messages) {
        setLoading(false);
        return;
      }

      // Extract and categorize errors
      const errorMap = new Map<string, GrammarError>();
      const categoryMap = new Map<string, GrammarError[]>();

      for (const message of messages) {
        const errors = extractErrors(message.content);
        
        for (const err of errors) {
          const category = categorizeError(err.explanation, err.error);
          const key = `${err.error.toLowerCase()}|${err.correction.toLowerCase()}`;
          
          if (errorMap.has(key)) {
            errorMap.get(key)!.count++;
          } else {
            const grammarError: GrammarError = {
              error: err.error,
              correction: err.correction,
              explanation: err.explanation,
              count: 1
            };
            errorMap.set(key, grammarError);
            
            if (!categoryMap.has(category)) {
              categoryMap.set(category, []);
            }
            categoryMap.get(category)!.push(grammarError);
          }
        }
      }

      // Build categories sorted by total count
      const cats: GrammarCategory[] = [];
      for (const [category, errors] of categoryMap) {
        const totalCount = errors.reduce((sum, e) => sum + e.count, 0);
        cats.push({
          category,
          icon: categoryIcons[category] || '📖',
          errors: errors.sort((a, b) => b.count - a.count).slice(0, 5),
          totalCount
        });
      }

      cats.sort((a, b) => b.totalCount - a.totalCount);
      setCategories(cats);
    } catch (error) {
      console.error('Error fetching grammar tips:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <Card className="mb-6">
        <CardContent className="p-4 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  const topCategories = expanded ? categories : categories.slice(0, 3);

  return (
    <Card className="mb-6 overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h3 className="font-display font-semibold">Areas to Improve</h3>
            </div>
            <span className="text-xs text-muted-foreground">
              Based on {categories.reduce((sum, c) => sum + c.totalCount, 0)} errors
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 space-y-3">
          {topCategories.map((cat) => (
            <div key={cat.category}>
              <button
                onClick={() => setSelectedCategory(selectedCategory === cat.category ? null : cat.category)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-lg transition-colors",
                  selectedCategory === cat.category 
                    ? "bg-primary/10" 
                    : "bg-secondary/50 hover:bg-secondary"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <div className="text-left">
                    <p className="font-medium text-sm">{cat.category}</p>
                    <p className="text-xs text-muted-foreground">
                      {cat.totalCount} error{cat.totalCount !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(Math.min(cat.totalCount, 5))].map((_, i) => (
                      <AlertCircle 
                        key={i} 
                        className={cn(
                          "w-3 h-3 -ml-1 first:ml-0",
                          cat.totalCount >= 5 ? "text-red-500" :
                          cat.totalCount >= 3 ? "text-orange-500" : "text-yellow-500"
                        )} 
                      />
                    ))}
                  </div>
                  {selectedCategory === cat.category ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Expanded error details */}
              {selectedCategory === cat.category && (
                <div className="mt-2 ml-4 space-y-2">
                  {cat.errors.map((err, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-background border text-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium">
                          {err.error}
                        </span>
                        <span className="text-muted-foreground">→</span>
                        <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium">
                          {err.correction}
                        </span>
                        {err.count > 1 && (
                          <span className="text-xs text-muted-foreground">
                            ({err.count}x)
                          </span>
                        )}
                      </div>
                      {err.explanation && (
                        <p className="text-xs text-muted-foreground">
                          📖 {err.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show more/less button */}
        {categories.length > 3 && (
          <div className="px-4 pb-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show {categories.length - 3} More Categories
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}