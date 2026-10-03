import { Mic, MicOff, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { KaraokeScore } from '@/lib/karaoke/types';
import { getScoreEmoji, getScoreMessage } from '@/lib/karaoke/scoringService';
import { cn } from '@/lib/utils';

interface KaraokeScorePanelProps {
  score: KaraokeScore;
  isRecording: boolean;
  userAudioUrl: string | null;
  onToggleRecording: () => void;
  linesCompleted: number;
  totalLines: number;
}

export function KaraokeScorePanel({
  score,
  isRecording,
  userAudioUrl,
  onToggleRecording,
  linesCompleted,
  totalLines,
}: KaraokeScorePanelProps) {
  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Your Score</h3>
        <span className="text-3xl">{getScoreEmoji(score.total)}</span>
      </div>

      {/* Main Score */}
      <div className="text-center py-4">
        <div className="text-5xl font-bold text-primary">{score.total}</div>
        <p className="text-sm text-muted-foreground mt-1">
          {getScoreMessage(score.total)}
        </p>
      </div>

      {/* Score Breakdown */}
      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Timing</span>
            <span className="font-medium">{score.timing}%</span>
          </div>
          <Progress value={score.timing} className="h-2" />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Pronunciation</span>
            <span className="font-medium">{score.pronunciation}%</span>
          </div>
          <Progress value={score.pronunciation} className="h-2" />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Completeness</span>
            <span className="font-medium">{score.completeness}%</span>
          </div>
          <Progress value={score.completeness} className="h-2" />
        </div>
      </div>

      {/* Progress */}
      <div className="pt-2 border-t">
        <div className="flex justify-between text-sm text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{linesCompleted} / {totalLines} lines</span>
        </div>
        <Progress value={totalLines > 0 ? (linesCompleted / totalLines) * 100 : 0} className="h-2" />
        {totalLines === 0 && (
          <p className="text-xs text-muted-foreground mt-2">
            Choose a song from the <strong>Library</strong> tab for synchronized lyrics and scoring.
          </p>
        )}
      </div>

      {/* Recording Controls */}
      <div className="pt-4 border-t space-y-3">
        <Button
          onClick={onToggleRecording}
          variant={isRecording ? 'destructive' : 'default'}
          className={cn('w-full', isRecording && 'animate-pulse')}
        >
          {isRecording ? (
            <>
              <MicOff className="h-4 w-4 mr-2" />
              Stop Recording
            </>
          ) : (
            <>
              <Mic className="h-4 w-4 mr-2" />
              Record My Voice
            </>
          )}
        </Button>

        {userAudioUrl && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Your recording:</p>
            <audio src={userAudioUrl} controls className="w-full h-10" />
          </div>
        )}
      </div>
    </div>
  );
}