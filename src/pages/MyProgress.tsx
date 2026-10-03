import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Loader2, TrendingUp, ListChecks } from 'lucide-react';

interface Completion {
  id: string;
  exercise_type: string;
  exercise_title: string;
  level: string | null;
  score: number;
  total_questions: number;
  correct_answers: number;
  curriculum_overall_percent: number | null;
  curriculum_level_percent: number | null;
  created_at: string;
}

const scoreTone = (score: number) =>
  score >= 80 ? 'default' : score >= 60 ? 'secondary' : 'destructive';

export default function MyProgress() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState<Completion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from('exercise_completions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(200);
      if (!error && data) setRows(data as Completion[]);
      setLoading(false);
    };
    load();
  }, [user]);

  const avgScore = rows.length
    ? Math.round(rows.reduce((sum, r) => sum + r.score, 0) / rows.length)
    : 0;
  const latestCurriculum = rows.find((r) => r.curriculum_overall_percent !== null)
    ?.curriculum_overall_percent ?? 0;

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Home
        </Button>

        <div>
          <h1 className="text-3xl font-bold">My Progress</h1>
          <p className="text-muted-foreground">
            Every section you complete, with your score and curriculum progress.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Sections completed</CardDescription>
              <CardTitle className="text-3xl">{rows.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average score</CardDescription>
              <CardTitle className="text-3xl">{avgScore}%</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Curriculum progress</CardDescription>
              <CardTitle className="text-3xl">{latestCurriculum}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={latestCurriculum} />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="w-5 h-5" /> Completion history
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            ) : rows.length === 0 ? (
              <p className="text-muted-foreground py-6 text-center">
                No completed sections yet. Finish any exercise and it will appear here.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr className="border-b">
                      <th className="py-2 pr-4">Date</th>
                      <th className="py-2 pr-4">Section</th>
                      <th className="py-2 pr-4">Level</th>
                      <th className="py-2 pr-4">Score</th>
                      <th className="py-2 pr-4">Curriculum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.id} className="border-b last:border-0">
                        <td className="py-2 pr-4 whitespace-nowrap">
                          {new Date(r.created_at).toLocaleString()}
                        </td>
                        <td className="py-2 pr-4">
                          <div className="font-medium">{r.exercise_title}</div>
                          <div className="text-muted-foreground text-xs">{r.exercise_type}</div>
                        </td>
                        <td className="py-2 pr-4">{r.level || '—'}</td>
                        <td className="py-2 pr-4">
                          <Badge variant={scoreTone(r.score)}>
                            {r.score}% ({r.correct_answers}/{r.total_questions})
                          </Badge>
                        </td>
                        <td className="py-2 pr-4">
                          <span className="inline-flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {r.curriculum_overall_percent ?? 0}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
