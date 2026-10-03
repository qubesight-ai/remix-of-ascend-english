import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Volume2, Mic, MicOff, Square, Loader2, 
  CheckCircle2, XCircle, RotateCcw
} from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { useElevenLabsTTS } from "@/hooks/useElevenLabsTTS";
import { toast } from "@/hooks/use-toast";

interface SpeakingExerciseProps {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  onAnswer: (answer: string, isCorrect: boolean) => void;
  showExplanation: boolean;
  selectedAnswer: string | null;
}

export function SpeakingExercise({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
  showExplanation,
  selectedAnswer,
}: SpeakingExerciseProps) {
  const displayOptions = useMemo(() => {
    if (!options.length) return [];
    return shuffleArray(options);
  }, [question, JSON.stringify(options)]);

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recordingStatus, setRecordingStatus] = useState<"idle" | "recording" | "processing">("idle");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  
  // ElevenLabs TTS for high-quality voice
  const { speak, stopAudio, isLoading: isTTSLoading, isPlaying } = useElevenLabsTTS();

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  // Clean text for TTS
  const cleanTextForTTS = (text: string): string => {
    return text
      .replace(/___+/g, "blank")
      .replace(/\(([^)]+)\)/g, "") // Remove hint text in parentheses
      .replace(/->|→/g, "becomes")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  // Listen to question
  const handleListenQuestion = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      speak(cleanTextForTTS(question));
    }
  };

  // Listen to correct answer
  const handleListenAnswer = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      speak(cleanTextForTTS(correctAnswer));
    }
  };

  // Start voice recording using Web Speech API
  const startRecording = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognitionAPI) {
      toast({
        variant: "destructive",
        title: "Not Supported",
        description: "Voice recognition is not supported in your browser. Please use Chrome or Edge.",
      });
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsRecording(true);
      setRecordingStatus("recording");
      setTranscript("");
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptPart = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptPart;
        } else {
          interimTranscript += transcriptPart;
        }
      }

      setTranscript(finalTranscript || interimTranscript);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
      setRecordingStatus("idle");
      
      if (event.error === "not-allowed") {
        toast({
          variant: "destructive",
          title: "Microphone Access Denied",
          description: "Please allow microphone access to use voice practice.",
        });
      }
    };

    recognition.onend = () => {
      setIsRecording(false);
      setRecordingStatus("idle");
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, []);

  // Stop voice recording
  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsRecording(false);
    setRecordingStatus("idle");
  }, []);

  // Check if spoken answer matches any option
  const checkSpokenAnswer = useCallback(() => {
    if (!transcript.trim()) return;

    const normalizedTranscript = transcript.toLowerCase().trim();
    
    // Find best matching option
    let bestMatch: string | null = null;
    let bestScore = 0;

    options.forEach(option => {
      const normalizedOption = option.toLowerCase().trim();
      
      // Check for exact match
      if (normalizedTranscript === normalizedOption) {
        bestMatch = option;
        bestScore = 1;
        return;
      }
      
      // Check if transcript contains the option
      if (normalizedTranscript.includes(normalizedOption)) {
        const score = normalizedOption.length / normalizedTranscript.length;
        if (score > bestScore) {
          bestMatch = option;
          bestScore = score;
        }
      }
      
      // Check if option contains the transcript
      if (normalizedOption.includes(normalizedTranscript)) {
        const score = normalizedTranscript.length / normalizedOption.length;
        if (score > bestScore) {
          bestMatch = option;
          bestScore = score;
        }
      }
    });

    if (bestMatch && bestScore > 0.3) {
      onAnswer(bestMatch, bestMatch === correctAnswer);
    } else {
      toast({
        title: "Try Again",
        description: `I heard: "${transcript}". Please try speaking more clearly or select an option.`,
      });
    }
  }, [transcript, options, correctAnswer, onAnswer]);

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="space-y-6">
      {/* Question Card */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-2">
                🎤 Speaking Practice
              </Badge>
              <h2 className="text-xl font-bold leading-relaxed">{question}</h2>
            </div>
          </div>
          
          {/* TTS Controls */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleListenQuestion}
              disabled={isTTSLoading}
              className={cn(isPlaying && "border-primary bg-primary/10")}
            >
              {isTTSLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : isPlaying ? (
                <Square className="w-4 h-4 mr-2" />
              ) : (
                <Volume2 className="w-4 h-4 mr-2" />
              )}
              {isPlaying ? "Stop" : "Listen to Question"}
            </Button>
            
            {showExplanation && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleListenAnswer}
                disabled={isTTSLoading}
                className="border-success/50 text-success hover:bg-success/10"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Listen to Answer
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Voice Practice Section */}
      {!showExplanation && (
        <Card className="border-2 border-accent/30">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h3 className="font-semibold text-lg flex items-center justify-center gap-2">
                <Mic className="w-5 h-5 text-accent" />
                Practice Speaking
              </h3>
              <p className="text-sm text-muted-foreground">
                Press the microphone to practice saying your answer, or select an option below.
              </p>
              
              {/* Recording Button */}
              <div className="flex justify-center">
                <Button
                  variant={isRecording ? "destructive" : "default"}
                  size="lg"
                  className={cn(
                    "rounded-full w-20 h-20 p-0 transition-all",
                    isRecording && "animate-pulse"
                  )}
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  {isRecording ? (
                    <MicOff className="w-8 h-8" />
                  ) : (
                    <Mic className="w-8 h-8" />
                  )}
                </Button>
              </div>
              
              {recordingStatus === "recording" && (
                <div className="flex items-center justify-center gap-2 text-destructive">
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Recording...</span>
                </div>
              )}

              {/* Transcript Display */}
              {transcript && (
                <div className="mt-4 p-4 rounded-lg bg-secondary/50 border">
                  <p className="text-sm text-muted-foreground mb-1">You said:</p>
                  <p className="font-medium text-lg">"{transcript}"</p>
                  <div className="flex justify-center gap-2 mt-3">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={checkSpokenAnswer}
                    >
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Check Answer
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTranscript("")}
                    >
                      <RotateCcw className="w-4 h-4 mr-1" />
                      Try Again
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Options - Still available for selection */}
      <div className="grid gap-3">
        {displayOptions.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === correctAnswer;
          
          return (
            <button
              key={option}
              className={cn(
                "p-4 rounded-xl border-2 text-left font-medium transition-all flex items-center justify-between",
                !showExplanation && "hover:border-primary hover:bg-primary/5 hover:translate-x-1",
                !showExplanation && isSelected && "border-primary bg-primary/10",
                showExplanation && isCorrectOption && "border-success bg-success/10",
                showExplanation && isSelected && !isCorrect && "border-destructive bg-destructive/10"
              )}
              onClick={() => !showExplanation && onAnswer(option, option === correctAnswer)}
              disabled={showExplanation}
            >
              <div className="flex items-center gap-3">
                <span>{option}</span>
                
                {/* Listen to option button */}
                {!showExplanation && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(option);
                    }}
                  >
                    <Volume2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </Button>
                )}
              </div>
              
              {showExplanation && isCorrectOption && (
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              )}
              {showExplanation && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <Card className={cn(
          "border-2",
          isCorrect ? "border-success/50 bg-success/5" : "border-destructive/50 bg-destructive/5"
        )}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-medium mb-1">
                  {isCorrect ? "Correct! 🎉" : "Not quite right"}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{explanation}</p>
                
                {/* Practice pronunciation */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleListenAnswer}
                    disabled={isTTSLoading}
                    className="text-xs"
                  >
                    <Volume2 className="w-3 h-3 mr-1" />
                    Listen & Repeat: "{correctAnswer}"
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
