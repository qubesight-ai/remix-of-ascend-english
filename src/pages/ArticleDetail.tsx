import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, BookOpen, Clock, CheckCircle2, XCircle, 
  Lightbulb, AlertTriangle, BookText, ChevronRight,
  Volume2, GraduationCap, Headphones, Loader2, Square
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getArticleById, Article, getArticlesByTag } from "@/data/articlesData";
import { ArticleAudioQuiz } from "@/components/articles/ArticleAudioQuiz";
import { useElevenLabsTTS } from "@/hooks/useElevenLabsTTS";
import { useExerciseFeedback } from "@/hooks/useExerciseFeedback";
const levelColors: Record<string, string> = {
  A1: "bg-level-a1",
  A2: "bg-level-a2",
  B1: "bg-level-b1",
  B2: "bg-level-b2",
  C1: "bg-level-c1",
  C2: "bg-level-c2",
};

const levelLabels: Record<string, string> = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper Intermediate",
  C1: "Advanced",
  C2: "Mastery",
};

// speakText is now handled by the useElevenLabsTTS hook inside the component

export default function ArticleDetail() {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showPracticeAnswers, setShowPracticeAnswers] = useState<Record<number, boolean>>({});
  const { sendExerciseResultEmail } = useExerciseFeedback();
  
  // ElevenLabs TTS for natural voice
  const { speak, stopAudio, isLoading: isSpeaking, isPlaying } = useElevenLabsTTS();
  
  const speakText = (text: string) => {
    if (isPlaying) {
      stopAudio();
    } else {
      speak(text);
    }
  };

  useEffect(() => {
    if (articleId) {
      const found = getArticleById(articleId);
      if (found) {
        setArticle(found);
        // Get related articles
        if (found.relatedArticles && found.relatedArticles.length > 0) {
          const related = found.relatedArticles
            .map(id => getArticleById(id))
            .filter(Boolean) as Article[];
          setRelatedArticles(related);
        }
      } else {
        navigate("/articles");
      }
    }
  }, [articleId, navigate]);

  if (!article) {
    return null;
  }

  const togglePracticeAnswer = (index: number) => {
    setShowPracticeAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/articles")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Library
        </Button>

        <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          {/* Main Content */}
          <div>
            {/* Article Header */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge 
                    className={cn(
                      "text-sm text-white",
                      levelColors[article.level]
                    )}
                  >
                    {article.level} - {levelLabels[article.level]}
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {article.estimatedReadTime} min read
                  </div>
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  {article.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {article.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {article.introduction}
                </p>
              </CardContent>
            </Card>

            {/* Sections */}
            {article.sections.map((section, index) => (
              <Card key={index} className="mb-6" id={`section-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose prose-slate dark:prose-invert max-w-none"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {section.content.split('\n').map((paragraph, pIndex) => {
                      // Handle markdown-like formatting
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h4 key={pIndex} className="font-semibold text-foreground mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith('| ')) {
                        return null;
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <li key={pIndex} className="ml-4 text-foreground">
                            {paragraph.substring(2)}
                          </li>
                        );
                      }
                      if (paragraph.trim() === '') {
                        return <br key={pIndex} />;
                      }
                      return (
                        <p key={pIndex} className="text-foreground mb-2">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Audio Listening Quiz - placed AFTER reading content */}
            <ArticleAudioQuiz 
              articleTitle={article.title}
              articleContent={`${article.introduction}\n\n${article.sections.map(s => `${s.title}\n${s.content}`).join('\n\n')}`}
              onComplete={(score, total) => {
                console.log(`Quiz completed: ${score}/${total}`);
                const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
                sendExerciseResultEmail({
                  exerciseType: "Article Audio Quiz",
                  exerciseTitle: article.title,
                  level: article.level,
                  score: percentage,
                  totalQuestions: total,
                  correctAnswers: score,
                  incorrectAnswers: [],
                });
              }}
            />


            {/* Examples */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-warning" />
                  Practical Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {article.examples.map((example, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-primary">
                              {example.english}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => speakText(example.english)}
                              disabled={isSpeaking}
                              className={cn("h-6 w-6 p-0", isPlaying && "text-primary")}
                            >
                              {isSpeaking ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : isPlaying ? (
                                <Square className="w-4 h-4" />
                              ) : (
                                <Volume2 className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {example.context}
                          </p>
                          {example.explanation && (
                            <p className="text-xs text-primary/80 mt-2 italic">
                              💡 {example.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Common Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {article.commonMistakes.map((mistake, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl border"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="line-through text-destructive">
                            {mistake.mistake}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-success font-medium">
                            {mistake.correction}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground ml-8">
                        {mistake.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Practice Exercises */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookText className="w-5 h-5 text-primary" />
                  Practice Exercises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {article.practiceExercises.map((exercise, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-muted/50 border"
                    >
                      <p className="font-medium mb-2">
                        {index + 1}. {exercise.question}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        💡 Hint: {exercise.hint}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => togglePracticeAnswer(index)}
                      >
                        {showPracticeAnswers[index] ? "Hide Answer" : "Show Answer"}
                      </Button>
                      {showPracticeAnswers[index] && (
                        <div className="mt-3 p-3 bg-success/10 rounded-lg border border-success/20">
                          <span className="text-success font-medium">
                            Answer: {exercise.answer}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {article.summary}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Contents</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ScrollArea className="h-[300px]">
                    <nav className="space-y-1">
                      <a 
                        href="#" 
                        className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        Introduction
                      </a>
                      {article.sections.map((section, index) => (
                        <a
                          key={index}
                          href={`#section-${index}`}
                          className={cn(
                            "block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors",
                            activeSection === `section-${index}` && "text-primary font-medium"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(`section-${index}`)?.scrollIntoView({ 
                              behavior: 'smooth' 
                            });
                          }}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {relatedArticles.map(related => (
                        <Button
                          key={related.id}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-left h-auto py-2"
                          onClick={() => navigate(`/articles/${related.id}`)}
                        >
                          <div className="flex items-center gap-2">
                            <Badge 
                              className={cn(
                                "text-xs text-white h-5",
                                levelColors[related.level]
                              )}
                            >
                              {related.level}
                            </Badge>
                            <span className="text-xs truncate">
                              {related.title}
                            </span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Actions */}
              <Card>
                <CardContent className="p-4">
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => navigate("/curriculum")}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Practice with Exercises
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}