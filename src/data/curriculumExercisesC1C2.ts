// C1 & C2 Level Comprehensive Curriculum Exercises
import { Exercise } from "./exercisesData";
import { c1StrategyExercisesNew } from "./c1StrategyExercises";
import { c2StrategyExercisesNew } from "./c2StrategyExercises";

// C1 Strategy Exercises (Pragmatic and Metacognitive Skills)
const c1StrategyExercises: Record<string, Exercise[]> = c1StrategyExercisesNew;

// C2 Strategy Exercises (Sociocultural and Metacognitive Competence)
const c2StrategyExercises: Record<string, Exercise[]> = c2StrategyExercisesNew;

// C1 Vocabulary Exercises
const c1VocabExercises: Record<string, Exercise[]> = {
  "c1-vocab-1": [ // Vocabulario especializado
    {
      id: "c1-v1-e1",
      type: "multiple-choice",
      question: "The economic _____ suggests a recession is imminent.",
      options: ["forecast", "forecastle", "foresight", "forestall"],
      correctAnswer: "forecast",
      explanation: "'Forecast' = a prediction, especially about weather or economy.",
      difficulty: 3,
      tags: ["specialized", "c1"]
    },
    {
      id: "c1-v1-e2",
      type: "multiple-choice",
      question: "The company's _____ approach to sustainability impressed investors.",
      options: ["comprehensive", "comprehend", "compress", "comprise"],
      correctAnswer: "comprehensive",
      explanation: "'Comprehensive' = complete, including all elements.",
      difficulty: 3,
      tags: ["specialized", "c1"]
    },
    {
      id: "c1-v1-e3",
      type: "fill-blank",
      question: "The _____ of this policy remains to be seen.",
      options: ["efficacy", "effect", "effective", "affecting"],
      correctAnswer: "efficacy",
      explanation: "'Efficacy' = the ability to produce a desired result (formal).",
      difficulty: 3,
      tags: ["specialized", "c1"]
    },
  ],
  "c1-vocab-2": [ // Collocations avanzadas
    {
      id: "c1-v2-e1",
      type: "multiple-choice",
      question: "The decision had _____ consequences for the company.",
      options: ["far-reaching", "far-going", "far-touching", "far-extending"],
      correctAnswer: "far-reaching",
      explanation: "'Far-reaching' = having wide influence or effects.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
    {
      id: "c1-v2-e2",
      type: "multiple-choice",
      question: "She has a _____ interest in environmental issues.",
      options: ["vested", "invested", "divested", "requested"],
      correctAnswer: "vested",
      explanation: "'Vested interest' = a personal stake in something.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
  ],
  "c1-vocab-3": [ // Registro formal
    {
      id: "c1-v3-e1",
      type: "multiple-choice",
      question: "Formal: 'I am writing to _____ about the delay.'",
      options: ["inquire", "ask", "wonder", "question"],
      correctAnswer: "inquire",
      explanation: "'Inquire' is more formal than 'ask'.",
      difficulty: 3,
      tags: ["register", "c1"]
    },
    {
      id: "c1-v3-e2",
      type: "multiple-choice",
      question: "Formal alternative to 'get': 'We hope to _____ a response soon.'",
      options: ["obtain", "get", "grab", "take"],
      correctAnswer: "obtain",
      explanation: "'Obtain' = formal version of 'get'.",
      difficulty: 3,
      tags: ["register", "c1"]
    },
  ],
};

// C1 Grammar Exercises
const c1GrammarExercises: Record<string, Exercise[]> = {
  "c1-gram-1": [ // Inversions
    {
      id: "c1-g1-e1",
      type: "multiple-choice",
      question: "_____ had I arrived when the meeting started.",
      options: ["Hardly", "Hard", "Harder", "Hardest"],
      correctAnswer: "Hardly",
      explanation: "'Hardly had I...' = Inversion with negative adverb.",
      difficulty: 3,
      tags: ["inversions", "c1"]
    },
    {
      id: "c1-g1-e2",
      type: "multiple-choice",
      question: "Not only _____ late, but she also forgot the documents.",
      options: ["was she", "she was", "she is", "is she"],
      correctAnswer: "was she",
      explanation: "'Not only' triggers subject-auxiliary inversion.",
      difficulty: 3,
      tags: ["inversions", "c1"]
    },
    {
      id: "c1-g1-e3",
      type: "fill-blank",
      question: "Never before _____ such a magnificent performance.",
      options: ["have I seen", "I have seen", "I saw", "did I seen"],
      correctAnswer: "have I seen",
      explanation: "'Never before' requires inversion: have I seen.",
      difficulty: 3,
      tags: ["inversions", "c1"]
    },
    {
      id: "c1-g1-e4",
      type: "multiple-choice",
      question: "Seldom _____ such rudeness in a professional setting.",
      options: ["do we encounter", "we encounter", "we do encounter", "encounter we"],
      correctAnswer: "do we encounter",
      explanation: "'Seldom' is a negative adverb requiring inversion.",
      difficulty: 3,
      tags: ["inversions", "c1"]
    },
  ],
  "c1-gram-2": [ // Cleft sentences
    {
      id: "c1-g2-e1",
      type: "multiple-choice",
      question: "_____ the CEO who made the final decision.",
      options: ["It was", "There was", "That was", "This was"],
      correctAnswer: "It was",
      explanation: "It-cleft: 'It was X who/that...' for emphasis.",
      difficulty: 3,
      tags: ["cleft", "c1"]
    },
    {
      id: "c1-g2-e2",
      type: "multiple-choice",
      question: "_____ I need is a good night's sleep.",
      options: ["What", "Which", "That", "It"],
      correctAnswer: "What",
      explanation: "Wh-cleft: 'What I need is...' for emphasis.",
      difficulty: 3,
      tags: ["cleft", "c1"]
    },
    {
      id: "c1-g2-e3",
      type: "fill-blank",
      question: "_____ she said was completely unexpected.",
      options: ["What", "Which", "That", "When"],
      correctAnswer: "What",
      explanation: "Wh-cleft with 'what' for emphasis on the object.",
      difficulty: 3,
      tags: ["cleft", "c1"]
    },
  ],
  "c1-gram-3": [ // Participle clauses
    {
      id: "c1-g3-e1",
      type: "multiple-choice",
      question: "_____ the instructions, he started the experiment.",
      options: ["Having read", "Have read", "Reading", "To read"],
      correctAnswer: "Having read",
      explanation: "Perfect participle for action completed before main verb.",
      difficulty: 3,
      tags: ["participles", "c1"]
    },
    {
      id: "c1-g3-e2",
      type: "multiple-choice",
      question: "_____ by her parents, she felt confident.",
      options: ["Encouraged", "Encouraging", "To encourage", "Encourage"],
      correctAnswer: "Encouraged",
      explanation: "Past participle for passive meaning.",
      difficulty: 3,
      tags: ["participles", "c1"]
    },
    {
      id: "c1-g3-e3",
      type: "fill-blank",
      question: "_____ (not/know) the answer, she remained silent.",
      options: ["Not knowing", "Not known", "Not to know", "Not knew"],
      correctAnswer: "Not knowing",
      explanation: "Negative participle clause: Not + -ing.",
      difficulty: 3,
      tags: ["participles", "c1"]
    },
  ],
  "c1-gram-4": [ // Modal perfects
    {
      id: "c1-g4-e1",
      type: "multiple-choice",
      question: "She _____ the train; she was at the station on time.",
      options: ["must have caught", "can't have caught", "might have caught", "should catch"],
      correctAnswer: "must have caught",
      explanation: "'Must have' = certain deduction about the past.",
      difficulty: 3,
      tags: ["modals", "c1"]
    },
    {
      id: "c1-g4-e2",
      type: "multiple-choice",
      question: "He _____ the email; his inbox shows it was never opened.",
      options: ["can't have received", "must have received", "might have received", "should have received"],
      correctAnswer: "can't have received",
      explanation: "'Can't have' = certain the opposite happened.",
      difficulty: 3,
      tags: ["modals", "c1"]
    },
    {
      id: "c1-g4-e3",
      type: "fill-blank",
      question: "You _____ earlier; now we're late.",
      options: ["should have left", "must have left", "can have left", "would leave"],
      correctAnswer: "should have left",
      explanation: "'Should have' = criticism/regret about past action.",
      difficulty: 3,
      tags: ["modals", "c1"]
    },
  ],
};

// C1 Speaking Exercises
const c1SpeakingExercises: Record<string, Exercise[]> = {
  "c1-speak-1": [ // Discourse markers
    {
      id: "c1-s1-e1",
      type: "multiple-choice",
      question: "To introduce a contrasting point: '_____,  the economy grew last year.'",
      options: ["Nonetheless", "Therefore", "Furthermore", "Moreover"],
      correctAnswer: "Nonetheless",
      explanation: "'Nonetheless' = despite what has been said.",
      difficulty: 3,
      tags: ["discourse", "c1"]
    },
    {
      id: "c1-s1-e2",
      type: "multiple-choice",
      question: "To add emphasis: 'The policy is, _____, a failure.'",
      options: ["in effect", "in addition", "in contrast", "in summary"],
      correctAnswer: "in effect",
      explanation: "'In effect' = essentially, in reality.",
      difficulty: 3,
      tags: ["discourse", "c1"]
    },
  ],
  "c1-speak-2": [ // Hedging
    {
      id: "c1-s2-e1",
      type: "multiple-choice",
      question: "Academic hedging: 'This _____ suggest a correlation.'",
      options: ["would seem to", "definitely", "absolutely", "certainly"],
      correctAnswer: "would seem to",
      explanation: "'Would seem to' = cautious, academic language.",
      difficulty: 3,
      tags: ["hedging", "c1"]
    },
  ],
};

// C1 Writing Exercises
const c1WritingExercises: Record<string, Exercise[]> = {
  "c1-write-1": [ // Nominalisation
    {
      id: "c1-w1-e1",
      type: "multiple-choice",
      question: "Nominalise: 'We analyzed the data' → 'The _____ of the data...'",
      options: ["analysis", "analyzing", "analyzed", "analytical"],
      correctAnswer: "analysis",
      explanation: "Nominalisation uses noun forms for academic style.",
      difficulty: 3,
      tags: ["nominalisation", "c1"]
    },
    {
      id: "c1-w1-e2",
      type: "multiple-choice",
      question: "Nominalise: 'The population grew' → 'The _____ in population...'",
      options: ["growth", "growing", "grew", "grower"],
      correctAnswer: "growth",
      explanation: "'Growth' = noun form of 'grow'.",
      difficulty: 3,
      tags: ["nominalisation", "c1"]
    },
  ],
  "c1-write-2": [ // Academic writing
    {
      id: "c1-w2-e1",
      type: "multiple-choice",
      question: "Academic hedging: 'The results _____ indicate a trend.'",
      options: ["appear to", "definitely", "absolutely", "surely"],
      correctAnswer: "appear to",
      explanation: "'Appear to' = cautious claim in academic writing.",
      difficulty: 3,
      tags: ["academic", "c1"]
    },
  ],
};

// C2 Vocabulary Exercises
const c2VocabExercises: Record<string, Exercise[]> = {
  "c2-vocab-1": [ // Nuances semánticas
    {
      id: "c2-v1-e1",
      type: "multiple-choice",
      question: "Which word means 'to steal' in formal register?",
      options: ["misappropriate", "nick", "swipe", "nab"],
      correctAnswer: "misappropriate",
      explanation: "'Misappropriate' = formal/legal term for stealing.",
      difficulty: 3,
      tags: ["nuance", "c2"]
    },
    {
      id: "c2-v1-e2",
      type: "multiple-choice",
      question: "'Ubiquitous' means:",
      options: ["Found everywhere", "Rare", "Harmful", "Unknown"],
      correctAnswer: "Found everywhere",
      explanation: "'Ubiquitous' = present everywhere.",
      difficulty: 3,
      tags: ["nuance", "c2"]
    },
    {
      id: "c2-v1-e3",
      type: "fill-blank",
      question: "Her _____ arguments won over the skeptics.",
      options: ["cogent", "coherent", "constant", "content"],
      correctAnswer: "cogent",
      explanation: "'Cogent' = clear, logical, and convincing.",
      difficulty: 3,
      tags: ["nuance", "c2"]
    },
  ],
  "c2-vocab-2": [ // Expresiones literarias
    {
      id: "c2-v2-e1",
      type: "multiple-choice",
      question: "'To throw in the towel' means:",
      options: ["To give up", "To clean", "To start", "To fight"],
      correctAnswer: "To give up",
      explanation: "From boxing: to throw in the towel = surrender.",
      difficulty: 3,
      tags: ["expressions", "c2"]
    },
    {
      id: "c2-v2-e2",
      type: "multiple-choice",
      question: "'A Pyrrhic victory' is:",
      options: ["A win at too great a cost", "A complete victory", "A minor win", "A draw"],
      correctAnswer: "A win at too great a cost",
      explanation: "From King Pyrrhus - a victory with devastating losses.",
      difficulty: 3,
      tags: ["expressions", "c2"]
    },
  ],
};

// C2 Grammar Exercises
const c2GrammarExercises: Record<string, Exercise[]> = {
  "c2-gram-1": [ // Subjunctive
    {
      id: "c2-g1-e1",
      type: "multiple-choice",
      question: "The committee demanded that he _____ immediately.",
      options: ["resign", "resigns", "resigned", "resigning"],
      correctAnswer: "resign",
      explanation: "Subjunctive after 'demand': base form without -s.",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
    {
      id: "c2-g1-e2",
      type: "multiple-choice",
      question: "It is essential that she _____ informed.",
      options: ["be", "is", "was", "being"],
      correctAnswer: "be",
      explanation: "Subjunctive uses 'be' regardless of subject.",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
    {
      id: "c2-g1-e3",
      type: "fill-blank",
      question: "I suggest that he _____ more carefully.",
      options: ["consider", "considers", "considered", "considering"],
      correctAnswer: "consider",
      explanation: "After 'suggest', use subjunctive (base form).",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
  ],
  "c2-gram-2": [ // Complex inversions
    {
      id: "c2-g2-e1",
      type: "multiple-choice",
      question: "Little _____ that the decision would change everything.",
      options: ["did she know", "she knew", "she did know", "knew she"],
      correctAnswer: "did she know",
      explanation: "'Little' (negative) triggers inversion.",
      difficulty: 3,
      tags: ["inversions", "c2"]
    },
    {
      id: "c2-g2-e2",
      type: "multiple-choice",
      question: "Under no circumstances _____ this document be shared.",
      options: ["should", "it should", "should it", "shouldn't"],
      correctAnswer: "should",
      explanation: "'Under no circumstances' requires inversion.",
      difficulty: 3,
      tags: ["inversions", "c2"]
    },
  ],
  "c2-gram-3": [ // Ellipsis and substitution
    {
      id: "c2-g3-e1",
      type: "multiple-choice",
      question: "'Would you like to come?' 'I'd love _____.'",
      options: ["to", "it", "that", "so"],
      correctAnswer: "to",
      explanation: "Ellipsis: 'I'd love to' (come is implied).",
      difficulty: 3,
      tags: ["ellipsis", "c2"]
    },
    {
      id: "c2-g3-e2",
      type: "multiple-choice",
      question: "'Is it raining?' 'I think _____.'",
      options: ["so", "it", "that", "this"],
      correctAnswer: "so",
      explanation: "'I think so' = substitution for 'it is raining'.",
      difficulty: 3,
      tags: ["ellipsis", "c2"]
    },
  ],
};

// Export functions
export function getC1CurriculumExercisesBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...c1VocabExercises,
    ...c1GrammarExercises,
    ...c1SpeakingExercises,
    ...c1WritingExercises,
    ...c1StrategyExercises,
  };
  return allExercises[skillId] || [];
}

export function getC2CurriculumExercisesBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...c2VocabExercises,
    ...c2GrammarExercises,
    ...c2StrategyExercises,
  };
  return allExercises[skillId] || [];
}

export const allC1CurriculumExercises = {
  vocabulary: c1VocabExercises,
  grammar: c1GrammarExercises,
  speaking: c1SpeakingExercises,
  writing: c1WritingExercises,
  strategy: c1StrategyExercises,
};

export const allC2CurriculumExercises = {
  vocabulary: c2VocabExercises,
  grammar: c2GrammarExercises,
  strategy: c2StrategyExercises,
};
