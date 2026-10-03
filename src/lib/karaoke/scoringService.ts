import { KaraokeScore, PronunciationFeedback, LyricLine } from './types';

export const calculateLineScore = (
  lineIndex: number,
  currentTime: number,
  expectedStartTime: number,
  isRecording: boolean
): KaraokeScore => {
  const timingScore = calculateTimingScore(currentTime, expectedStartTime);
  const pronunciationScore = isRecording ? calculatePronunciationScore() : 75;
  const completenessScore = 100;

  const total = Math.round(
    timingScore * 0.4 + pronunciationScore * 0.4 + completenessScore * 0.2
  );

  return {
    timing: timingScore,
    pronunciation: pronunciationScore,
    completeness: completenessScore,
    total,
  };
};

const calculateTimingScore = (currentTime: number, expectedStartTime: number): number => {
  const timeDifference = Math.abs(currentTime - expectedStartTime);

  if (timeDifference < 0.5) return 100;
  if (timeDifference < 1) return 95;
  if (timeDifference < 1.5) return 90;
  if (timeDifference < 2) return 85;
  if (timeDifference < 3) return 75;
  if (timeDifference < 4) return 65;
  return 50;
};

const calculatePronunciationScore = (): number => {
  // Simulated pronunciation score - in production this would use speech recognition
  return Math.floor(Math.random() * 20) + 75; // 75-95
};

export const analyzePronunciation = (lyricLine: LyricLine): PronunciationFeedback[] => {
  const words = lyricLine.text.toLowerCase().split(' ');
  const feedback: PronunciationFeedback[] = [];

  words.forEach((word, index) => {
    const cleanWord = word.replace(/[^a-z]/g, '');
    
    if (cleanWord.includes('th')) {
      feedback.push({
        lineIndex: index,
        word: cleanWord,
        feedback: `Practica el sonido "th" en "${cleanWord}" - coloca la lengua entre los dientes`,
        score: 80,
      });
    }
    
    if (cleanWord.includes('r') && cleanWord.length > 3) {
      feedback.push({
        lineIndex: index,
        word: cleanWord,
        feedback: `El sonido "r" en "${cleanWord}" es diferente al español`,
        score: 75,
      });
    }
    
    if (cleanWord.endsWith('ed')) {
      feedback.push({
        lineIndex: index,
        word: cleanWord,
        feedback: `Terminación "-ed" en "${cleanWord}" - puede sonar como /t/, /d/ o /ɪd/`,
        score: 85,
      });
    }
    
    if (cleanWord.includes('tion')) {
      feedback.push({
        lineIndex: index,
        word: cleanWord,
        feedback: `"-tion" en "${cleanWord}" se pronuncia como "shun"`,
        score: 85,
      });
    }
  });

  return feedback.slice(0, 3); // Max 3 tips per line
};

export const calculateSessionScore = (lineScores: KaraokeScore[]): KaraokeScore => {
  if (lineScores.length === 0) {
    return { timing: 0, pronunciation: 0, completeness: 0, total: 0 };
  }

  const avgTiming = Math.round(
    lineScores.reduce((sum, s) => sum + s.timing, 0) / lineScores.length
  );
  const avgPronunciation = Math.round(
    lineScores.reduce((sum, s) => sum + s.pronunciation, 0) / lineScores.length
  );
  const avgCompleteness = Math.round(
    lineScores.reduce((sum, s) => sum + s.completeness, 0) / lineScores.length
  );
  const avgTotal = Math.round(
    lineScores.reduce((sum, s) => sum + s.total, 0) / lineScores.length
  );

  return {
    timing: avgTiming,
    pronunciation: avgPronunciation,
    completeness: avgCompleteness,
    total: avgTotal,
  };
};

export const getScoreEmoji = (score: number): string => {
  // Handle edge cases: NaN, undefined, null
  if (score == null || isNaN(score)) return '💪';
  if (score >= 95) return '🌟';
  if (score >= 85) return '⭐';
  if (score >= 75) return '👍';
  if (score >= 60) return '👌';
  return '💪';
};

export const getScoreMessage = (score: number): string => {
  // Handle edge cases: NaN, undefined, null - return empty string to avoid TTS issues
  if (score == null || isNaN(score)) return '';
  if (score >= 95) return 'Incredible! You are a star!';
  if (score >= 85) return 'Excellent work!';
  if (score >= 75) return 'Very good! Keep practicing';
  if (score >= 60) return 'Good try! You can improve';
  return "Don't give up! Practice makes perfect";
};
