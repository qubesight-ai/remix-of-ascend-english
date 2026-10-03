import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, AlertCircle, BookOpen, Mic, Headphones, PenTool, TrendingUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useLearningErrors, LearningError } from "@/hooks/useLearningErrors";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const ErrorHistory = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { errors, isLoading, stats, deleteError, clearAllErrors } = useLearningErrors();
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [filterPhase, setFilterPhase] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Sign In Required</h2>
            <p className="text-muted-foreground mb-4">You need to sign in to view your error history.</p>
            <Button onClick={() => navigate("/auth")}>Sign In</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case "SPEAK": return <Mic className="w-4 h-4" />;
      case "LISTEN": return <Headphones className="w-4 h-4" />;
      case "PRACTICE": return <PenTool className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "SPEAK": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "LISTEN": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "PRACTICE": return "bg-green-500/10 text-green-500 border-green-500/20";
      default: return "bg-orange-500/10 text-orange-500 border-orange-500/20";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "A1": return "bg-emerald-500/10 text-emerald-500";
      case "A2": return "bg-teal-500/10 text-teal-500";
      case "B1": return "bg-amber-500/10 text-amber-500";
      case "B2": return "bg-orange-500/10 text-orange-500";
      case "C1": return "bg-red-500/10 text-red-500";
      case "C2": return "bg-rose-500/10 text-rose-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredErrors = errors.filter((error) => {
    if (filterLevel !== "all" && error.level !== filterLevel) return false;
    if (filterPhase !== "all" && error.phase !== filterPhase) return false;
    if (filterType !== "all" && error.error_type !== filterType) return false;
    return true;
  });

  const uniqueLevels = [...new Set(errors.map((e) => e.level))];
  const uniquePhases = [...new Set(errors.map((e) => e.phase))];
  const uniqueTypes = [...new Set(errors.map((e) => e.error_type))];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Error History</h1>
              <p className="text-muted-foreground text-sm">Track your learning progress</p>
            </div>
          </div>
          {errors.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete all history?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. All recorded errors will be deleted.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => clearAllErrors.mutate()}>
                    Delete All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <div>
                  <p className="text-2xl font-bold">{stats.totalErrors}</p>
                  <p className="text-xs text-muted-foreground">Total Errors</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.byPhase["SPEAK"] || 0}</p>
                  <p className="text-xs text-muted-foreground">Speak</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.byPhase["LISTEN"] || 0}</p>
                  <p className="text-xs text-muted-foreground">Listen</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.byPhase["PRACTICE"] || 0}</p>
                  <p className="text-xs text-muted-foreground">Practice</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        {errors.length > 0 && (
          <Card className="mb-6">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Select value={filterLevel} onValueChange={setFilterLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {uniqueLevels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterPhase} onValueChange={setFilterPhase}>
                  <SelectTrigger>
                    <SelectValue placeholder="Phase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Phases</SelectItem>
                    {uniquePhases.map((phase) => (
                      <SelectItem key={phase} value={phase}>{phase}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {uniqueTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error List */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground">Loading history...</p>
          </div>
        ) : filteredErrors.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {errors.length === 0 ? "No Errors Recorded!" : "No errors match these filters"}
              </h3>
              <p className="text-muted-foreground">
                {errors.length === 0 
                  ? "Errors from your conversations and exams will appear here."
                  : "Try adjusting the filters to see more results."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <ScrollArea className="h-[calc(100vh-400px)]">
            <div className="space-y-3">
              {filteredErrors.map((error) => (
                <ErrorCard 
                  key={error.id} 
                  error={error} 
                  onDelete={() => deleteError.mutate(error.id)}
                  getPhaseIcon={getPhaseIcon}
                  getPhaseColor={getPhaseColor}
                  getLevelColor={getLevelColor}
                />
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

interface ErrorCardProps {
  error: LearningError;
  onDelete: () => void;
  getPhaseIcon: (phase: string) => React.ReactNode;
  getPhaseColor: (phase: string) => string;
  getLevelColor: (level: string) => string;
}

const ErrorCard = ({ error, onDelete, getPhaseIcon, getPhaseColor, getLevelColor }: ErrorCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="outline" className={getLevelColor(error.level)}>
                {error.level}
              </Badge>
              <Badge variant="outline" className={getPhaseColor(error.phase)}>
                <span className="mr-1">{getPhaseIcon(error.phase)}</span>
                {error.phase}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {error.error_type}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {error.question_text}
            </p>

            {expanded && (
              <div className="space-y-3 mt-3 pt-3 border-t">
                <div>
                  <p className="text-xs font-medium text-destructive mb-1">Your Answer:</p>
                  <p className="text-sm bg-destructive/10 p-2 rounded">{error.user_response}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-green-600 mb-1">Correct Answer:</p>
                  <p className="text-sm bg-green-500/10 p-2 rounded">{error.correct_response}</p>
                </div>
                {error.recommendation && (
                  <div>
                    <p className="text-xs font-medium text-blue-600 mb-1">Recommendation:</p>
                    <p className="text-sm bg-blue-500/10 p-2 rounded">{error.recommendation}</p>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-muted-foreground">
                {format(new Date(error.created_at), "d MMM yyyy, HH:mm", { locale: enUS })}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Show More"}
              </Button>
            </div>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this error?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default ErrorHistory;
