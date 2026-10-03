// C1 Level - Complete Exercises for All Curriculum Skills
import { Exercise } from "./exercisesData";
import { c1StrategyExercisesNew } from "./c1StrategyExercises";

// ============= VOCABULARY EXERCISES =============

const c1VocabExercises: Record<string, Exercise[]> = {
  // c1-vocab-1: Fine-grained meaning differences
  "c1-vocab-1": [
    {
      id: "c1-v1-1",
      type: "multiple-choice",
      question: "Choose the word that means 'to make something less severe': The medication helped to _____ the symptoms.",
      options: ["alleviate", "aggravate", "accelerate", "accumulate"],
      correctAnswer: "alleviate",
      explanation: "'Alleviate' means to make something less severe. 'Aggravate' means the opposite.",
      difficulty: 3,
      tags: ["vocabulary", "synonyms", "c1"]
    },
    {
      id: "c1-v1-2",
      type: "multiple-choice",
      question: "Which word describes someone who is 'careful with money without being cheap'?",
      options: ["frugal", "stingy", "miserly", "tight-fisted"],
      correctAnswer: "frugal",
      explanation: "'Frugal' has a positive connotation (wise with money), while 'stingy' and 'miserly' are negative.",
      difficulty: 3,
      tags: ["vocabulary", "connotation", "c1"]
    },
    {
      id: "c1-v1-3",
      type: "multiple-choice",
      question: "The subtle difference: 'She _____ that she might be late' (suggested indirectly).",
      options: ["implied", "inferred", "indicated", "informed"],
      correctAnswer: "implied",
      explanation: "'Imply' = the speaker suggests. 'Infer' = the listener deduces. Critical distinction!",
      difficulty: 3,
      tags: ["vocabulary", "usage", "c1"]
    },
    {
      id: "c1-v1-4",
      type: "multiple-choice",
      question: "Choose the correct word: 'The policy will _____ major changes in how we operate.'",
      options: ["entail", "detail", "retail", "curtail"],
      correctAnswer: "entail",
      explanation: "'Entail' means to involve as a necessary consequence.",
      difficulty: 3,
      tags: ["vocabulary", "formal", "c1"]
    },
    {
      id: "c1-v1-5",
      type: "multiple-choice",
      question: "'Continual' vs 'Continuous': The machine made a _____ humming noise (without any breaks).",
      options: ["continuous", "continual", "constant", "consecutive"],
      correctAnswer: "continuous",
      explanation: "'Continuous' = without interruption. 'Continual' = repeated but with breaks.",
      difficulty: 3,
      tags: ["vocabulary", "confusables", "c1"]
    },
  ],

  // c1-vocab-2: Abstract and technical vocabulary
  "c1-vocab-2": [
    {
      id: "c1-v2-1",
      type: "multiple-choice",
      question: "The economic _____ suggests a recession is imminent.",
      options: ["forecast", "forecastle", "foresight", "forestall"],
      correctAnswer: "forecast",
      explanation: "'Forecast' = a prediction, especially about weather or economy.",
      difficulty: 3,
      tags: ["vocabulary", "technical", "c1"]
    },
    {
      id: "c1-v2-2",
      type: "multiple-choice",
      question: "The company's _____ approach to sustainability impressed investors.",
      options: ["comprehensive", "comprehend", "compress", "comprise"],
      correctAnswer: "comprehensive",
      explanation: "'Comprehensive' = complete, including all elements.",
      difficulty: 3,
      tags: ["vocabulary", "abstract", "c1"]
    },
    {
      id: "c1-v2-3",
      type: "multiple-choice",
      question: "The _____ of this policy remains to be seen.",
      options: ["efficacy", "efficiency", "effectiveness", "effort"],
      correctAnswer: "efficacy",
      explanation: "'Efficacy' = the ability to produce a desired result (formal/academic term).",
      difficulty: 3,
      tags: ["vocabulary", "academic", "c1"]
    },
    {
      id: "c1-v2-4",
      type: "multiple-choice",
      question: "The study examined the _____ between social media use and mental health.",
      options: ["correlation", "causation", "combination", "cooperation"],
      correctAnswer: "correlation",
      explanation: "'Correlation' = a statistical relationship between two variables.",
      difficulty: 3,
      tags: ["vocabulary", "academic", "c1"]
    },
    {
      id: "c1-v2-5",
      type: "multiple-choice",
      question: "The new regulations aim to _____ environmental damage.",
      options: ["mitigate", "mediate", "migrate", "militate"],
      correctAnswer: "mitigate",
      explanation: "'Mitigate' = to make less severe or serious.",
      difficulty: 3,
      tags: ["vocabulary", "formal", "c1"]
    },
  ],

  // c1-vocab-3: Idioms and fixed expressions
  "c1-vocab-3": [
    {
      id: "c1-v3-1",
      type: "multiple-choice",
      question: "'To cut corners' means:",
      options: ["To do something in the easiest or cheapest way", "To turn quickly", "To reduce staff", "To make something smaller"],
      correctAnswer: "To do something in the easiest or cheapest way",
      explanation: "'Cut corners' = to save money/effort by doing something less thoroughly.",
      difficulty: 3,
      tags: ["idioms", "c1"]
    },
    {
      id: "c1-v3-2",
      type: "multiple-choice",
      question: "'The ball is in your court' means:",
      options: ["It's your turn to take action", "You need to play sports", "The decision is final", "Time is running out"],
      correctAnswer: "It's your turn to take action",
      explanation: "From tennis - the ball is in your court means it's your responsibility to act.",
      difficulty: 3,
      tags: ["idioms", "c1"]
    },
    {
      id: "c1-v3-3",
      type: "multiple-choice",
      question: "If something is 'a blessing in disguise', it means:",
      options: ["Something bad that turns out to be good", "A hidden gift", "A secret blessing", "A religious ceremony"],
      correctAnswer: "Something bad that turns out to be good",
      explanation: "A situation that seems bad at first but results in something good.",
      difficulty: 3,
      tags: ["idioms", "c1"]
    },
    {
      id: "c1-v3-4",
      type: "multiple-choice",
      question: "'To bite off more than you can chew' means:",
      options: ["To take on more than you can handle", "To eat too much", "To speak rudely", "To make promises"],
      correctAnswer: "To take on more than you can handle",
      explanation: "Taking on a task that is too big to manage.",
      difficulty: 3,
      tags: ["idioms", "c1"]
    },
    {
      id: "c1-v3-5",
      type: "multiple-choice",
      question: "'To be barking up the wrong tree' means:",
      options: ["To be completely mistaken", "To make noise", "To climb incorrectly", "To annoy animals"],
      correctAnswer: "To be completely mistaken",
      explanation: "To be pursuing a mistaken or misguided line of thought.",
      difficulty: 3,
      tags: ["idioms", "c1"]
    },
  ],

  // c1-vocab-4: Advanced collocations
  "c1-vocab-4": [
    {
      id: "c1-v4-1",
      type: "multiple-choice",
      question: "The decision had _____ consequences for the company.",
      options: ["far-reaching", "far-going", "far-touching", "far-extending"],
      correctAnswer: "far-reaching",
      explanation: "'Far-reaching' = having wide influence or effects.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
    {
      id: "c1-v4-2",
      type: "multiple-choice",
      question: "She has a _____ interest in environmental issues.",
      options: ["vested", "invested", "divested", "requested"],
      correctAnswer: "vested",
      explanation: "'Vested interest' = a personal stake in something.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
    {
      id: "c1-v4-3",
      type: "multiple-choice",
      question: "The report provides a _____ analysis of the situation.",
      options: ["thorough", "through", "though", "thought"],
      correctAnswer: "thorough",
      explanation: "'Thorough analysis' = complete and careful examination.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
    {
      id: "c1-v4-4",
      type: "multiple-choice",
      question: "The government made a _____ attempt to solve the crisis.",
      options: ["concerted", "concerned", "concrete", "concluded"],
      correctAnswer: "concerted",
      explanation: "'Concerted effort/attempt' = a joint, coordinated effort.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
    {
      id: "c1-v4-5",
      type: "multiple-choice",
      question: "It is of _____ importance that we act now.",
      options: ["paramount", "parallel", "partial", "parental"],
      correctAnswer: "paramount",
      explanation: "'Paramount importance' = of the greatest importance.",
      difficulty: 3,
      tags: ["collocations", "c1"]
    },
  ],

  // c1-vocab-5: Register control
  "c1-vocab-5": [
    {
      id: "c1-v5-1",
      type: "multiple-choice",
      question: "Formal: 'I am writing to _____ about the delay.'",
      options: ["inquire", "ask", "wonder", "question"],
      correctAnswer: "inquire",
      explanation: "'Inquire' is more formal than 'ask'.",
      difficulty: 3,
      tags: ["register", "formal", "c1"]
    },
    {
      id: "c1-v5-2",
      type: "multiple-choice",
      question: "Formal alternative to 'get': 'We hope to _____ a response soon.'",
      options: ["obtain", "get", "grab", "take"],
      correctAnswer: "obtain",
      explanation: "'Obtain' = formal version of 'get'.",
      difficulty: 3,
      tags: ["register", "formal", "c1"]
    },
    {
      id: "c1-v5-3",
      type: "multiple-choice",
      question: "Formal: 'We would like to _____ our apologies for the inconvenience.'",
      options: ["extend", "give", "say", "show"],
      correctAnswer: "extend",
      explanation: "'Extend apologies' is the formal expression.",
      difficulty: 3,
      tags: ["register", "formal", "c1"]
    },
    {
      id: "c1-v5-4",
      type: "multiple-choice",
      question: "Formal alternative to 'help': 'We are here to _____ you with your inquiry.'",
      options: ["assist", "help", "aid", "support"],
      correctAnswer: "assist",
      explanation: "'Assist' is more formal than 'help'.",
      difficulty: 3,
      tags: ["register", "c1"]
    },
    {
      id: "c1-v5-5",
      type: "multiple-choice",
      question: "Formal: 'Please _____ the attached document for your reference.'",
      options: ["find", "look at", "check out", "see"],
      correctAnswer: "find",
      explanation: "'Please find attached' is standard formal email language.",
      difficulty: 3,
      tags: ["register", "formal", "c1"]
    },
  ],

  // c1-vocab-6: Connotation and tone
  "c1-vocab-6": [
    {
      id: "c1-v6-1",
      type: "multiple-choice",
      question: "Which word has a POSITIVE connotation for 'thin'?",
      options: ["slender", "skinny", "scrawny", "gaunt"],
      correctAnswer: "slender",
      explanation: "'Slender' is positive; 'skinny', 'scrawny', and 'gaunt' are negative.",
      difficulty: 3,
      tags: ["connotation", "c1"]
    },
    {
      id: "c1-v6-2",
      type: "multiple-choice",
      question: "Which word has a NEGATIVE connotation for 'careful with money'?",
      options: ["miserly", "frugal", "thrifty", "economical"],
      correctAnswer: "miserly",
      explanation: "'Miserly' is negative; the others are neutral or positive.",
      difficulty: 3,
      tags: ["connotation", "c1"]
    },
    {
      id: "c1-v6-3",
      type: "multiple-choice",
      question: "Choose the NEUTRAL word for 'old person':",
      options: ["elderly", "ancient", "decrepit", "senile"],
      correctAnswer: "elderly",
      explanation: "'Elderly' is respectful and neutral; the others are negative.",
      difficulty: 3,
      tags: ["connotation", "c1"]
    },
    {
      id: "c1-v6-4",
      type: "multiple-choice",
      question: "Which is a DIPLOMATIC way to say 'wrong'?",
      options: ["not entirely accurate", "completely wrong", "mistaken", "incorrect"],
      correctAnswer: "not entirely accurate",
      explanation: "'Not entirely accurate' is the most diplomatic hedging phrase.",
      difficulty: 3,
      tags: ["tone", "diplomatic", "c1"]
    },
    {
      id: "c1-v6-5",
      type: "multiple-choice",
      question: "Which intensifier is LEAST strong?",
      options: ["somewhat", "extremely", "absolutely", "utterly"],
      correctAnswer: "somewhat",
      explanation: "'Somewhat' = slightly. The others are much stronger.",
      difficulty: 3,
      tags: ["intensifiers", "c1"]
    },
  ],

  // c1-vocab-7: Word formation
  "c1-vocab-7": [
    {
      id: "c1-v7-1",
      type: "multiple-choice",
      question: "Form a noun from 'implement':",
      options: ["implementation", "implementary", "implementive", "implementing"],
      correctAnswer: "implementation",
      explanation: "-ation suffix creates nouns from verbs.",
      difficulty: 3,
      tags: ["word-formation", "c1"]
    },
    {
      id: "c1-v7-2",
      type: "multiple-choice",
      question: "Form an adjective from 'controversy':",
      options: ["controversial", "controversive", "controversary", "controverse"],
      correctAnswer: "controversial",
      explanation: "-ial suffix creates adjectives.",
      difficulty: 3,
      tags: ["word-formation", "c1"]
    },
    {
      id: "c1-v7-3",
      type: "multiple-choice",
      question: "The prefix 'counter-' in 'counterproductive' means:",
      options: ["against", "together", "after", "before"],
      correctAnswer: "against",
      explanation: "'Counter-' = against, opposite. Counterproductive = working against productivity.",
      difficulty: 3,
      tags: ["prefixes", "c1"]
    },
    {
      id: "c1-v7-4",
      type: "multiple-choice",
      question: "Form a noun meaning 'the state of being flexible':",
      options: ["flexibility", "flexibleness", "flexation", "flexivity"],
      correctAnswer: "flexibility",
      explanation: "-ity suffix creates abstract nouns from adjectives.",
      difficulty: 3,
      tags: ["word-formation", "c1"]
    },
    {
      id: "c1-v7-5",
      type: "multiple-choice",
      question: "'Pseudo-' in 'pseudoscience' means:",
      options: ["false", "after", "before", "super"],
      correctAnswer: "false",
      explanation: "'Pseudo-' = false, pretended. Pseudoscience = false science.",
      difficulty: 3,
      tags: ["prefixes", "c1"]
    },
  ],
};

// ============= GRAMMAR EXERCISES =============

const c1GrammarExercises: Record<string, Exercise[]> = {
  // c1-gram-1: Complex clause structures
  "c1-gram-1": [
    {
      id: "c1-g1-1",
      type: "multiple-choice",
      question: "Choose the correct complex clause: 'The report, _____ was submitted last week, needs revision.'",
      options: ["which", "that", "what", "where"],
      correctAnswer: "which",
      explanation: "Non-defining relative clauses use 'which' (with commas), not 'that'.",
      difficulty: 3,
      tags: ["grammar", "clauses", "c1"]
    },
    {
      id: "c1-g1-2",
      type: "multiple-choice",
      question: "_____ the instructions carefully, he managed to assemble the furniture.",
      options: ["Having read", "Have read", "Reading", "To read"],
      correctAnswer: "Having read",
      explanation: "Perfect participle for action completed before the main verb.",
      difficulty: 3,
      tags: ["grammar", "participles", "c1"]
    },
    {
      id: "c1-g1-3",
      type: "multiple-choice",
      question: "The problem, _____ I had mentioned earlier, remains unsolved.",
      options: ["which", "that", "what", "whom"],
      correctAnswer: "which",
      explanation: "Non-defining relative clause referring to 'the problem'.",
      difficulty: 3,
      tags: ["grammar", "clauses", "c1"]
    },
    {
      id: "c1-g1-4",
      type: "multiple-choice",
      question: "_____ from that height, the city looks magnificent.",
      options: ["Seen", "Seeing", "Having seen", "To see"],
      correctAnswer: "Seen",
      explanation: "Past participle for passive meaning: 'When it is seen from...'",
      difficulty: 3,
      tags: ["grammar", "participles", "c1"]
    },
    {
      id: "c1-g1-5",
      type: "multiple-choice",
      question: "The book, _____ I bought last month, has become a bestseller.",
      options: ["which", "that", "what", "whose"],
      correctAnswer: "which",
      explanation: "Non-defining relative clause with commas requires 'which'.",
      difficulty: 3,
      tags: ["grammar", "clauses", "c1"]
    },
  ],

  // c1-gram-2: Subordination and embedding
  "c1-gram-2": [
    {
      id: "c1-g2-1",
      type: "multiple-choice",
      question: "_____ she said surprised everyone at the meeting.",
      options: ["What", "That", "Which", "Where"],
      correctAnswer: "What",
      explanation: "'What' introduces a noun clause meaning 'the thing that'.",
      difficulty: 3,
      tags: ["grammar", "noun-clauses", "c1"]
    },
    {
      id: "c1-g2-2",
      type: "multiple-choice",
      question: "The fact _____ he lied is unacceptable.",
      options: ["that", "which", "what", "who"],
      correctAnswer: "that",
      explanation: "'That' introduces an appositive clause explaining 'the fact'.",
      difficulty: 3,
      tags: ["grammar", "noun-clauses", "c1"]
    },
    {
      id: "c1-g2-3",
      type: "multiple-choice",
      question: "I wasn't aware _____ the meeting had been cancelled.",
      options: ["that", "of that", "which", "what"],
      correctAnswer: "that",
      explanation: "'Aware that...' introduces a noun clause.",
      difficulty: 3,
      tags: ["grammar", "embedding", "c1"]
    },
    {
      id: "c1-g2-4",
      type: "multiple-choice",
      question: "_____ happens next depends entirely on you.",
      options: ["Whatever", "However", "Wherever", "Whoever"],
      correctAnswer: "Whatever",
      explanation: "'Whatever' = anything that. Subject of the sentence.",
      difficulty: 3,
      tags: ["grammar", "noun-clauses", "c1"]
    },
    {
      id: "c1-g2-5",
      type: "multiple-choice",
      question: "The question of _____ to proceed remains open.",
      options: ["whether", "if", "that", "which"],
      correctAnswer: "whether",
      explanation: "After 'of', use 'whether' (not 'if') to introduce alternatives.",
      difficulty: 3,
      tags: ["grammar", "embedding", "c1"]
    },
  ],

  // c1-gram-3: All conditionals (including mixed)
  "c1-gram-3": [
    {
      id: "c1-g3-1",
      type: "multiple-choice",
      question: "Mixed conditional: 'If I _____ harder at school, I would have a better job now.'",
      options: ["had worked", "worked", "have worked", "would work"],
      correctAnswer: "had worked",
      explanation: "Mixed: past unreal condition → present result. If + past perfect, would + infinitive.",
      difficulty: 3,
      tags: ["grammar", "conditionals", "mixed", "c1"]
    },
    {
      id: "c1-g3-2",
      type: "multiple-choice",
      question: "Mixed conditional: 'If she _____ fluent in Spanish, she would have gotten that job.'",
      options: ["were", "was", "had been", "is"],
      correctAnswer: "were",
      explanation: "Mixed: present unreal condition → past result. Were + would have + past participle.",
      difficulty: 3,
      tags: ["grammar", "conditionals", "mixed", "c1"]
    },
    {
      id: "c1-g3-3",
      type: "multiple-choice",
      question: "Third conditional: 'If they _____ earlier, they wouldn't have missed the flight.'",
      options: ["had left", "left", "have left", "would leave"],
      correctAnswer: "had left",
      explanation: "Third conditional: If + past perfect, would have + past participle.",
      difficulty: 3,
      tags: ["grammar", "conditionals", "c1"]
    },
    {
      id: "c1-g3-4",
      type: "multiple-choice",
      question: "With alternative modal: 'If I had known, I _____ told you.'",
      options: ["could have", "can have", "could", "will have"],
      correctAnswer: "could have",
      explanation: "Alternative modals in conditionals: could/might/should have + past participle.",
      difficulty: 3,
      tags: ["grammar", "conditionals", "modals", "c1"]
    },
    {
      id: "c1-g3-5",
      type: "multiple-choice",
      question: "Inverted conditional: '_____ I known about the problem, I would have helped.'",
      options: ["Had", "Have", "If", "Would"],
      correctAnswer: "Had",
      explanation: "Inverted conditional: Had I known = If I had known.",
      difficulty: 3,
      tags: ["grammar", "conditionals", "inversion", "c1"]
    },
  ],

  // c1-gram-4: Advanced passive constructions
  "c1-gram-4": [
    {
      id: "c1-g4-1",
      type: "multiple-choice",
      question: "Passive with reporting verb: 'It _____ that the CEO will resign.'",
      options: ["is believed", "believes", "is believing", "believed"],
      correctAnswer: "is believed",
      explanation: "Impersonal passive: It is believed/thought/said that...",
      difficulty: 3,
      tags: ["grammar", "passive", "c1"]
    },
    {
      id: "c1-g4-2",
      type: "multiple-choice",
      question: "Passive with infinitive: 'She _____ to be the best candidate.'",
      options: ["is said", "says", "is saying", "said"],
      correctAnswer: "is said",
      explanation: "Subject + is said/thought/believed + to infinitive.",
      difficulty: 3,
      tags: ["grammar", "passive", "c1"]
    },
    {
      id: "c1-g4-3",
      type: "multiple-choice",
      question: "Causative passive: 'I need to get my car _____.'",
      options: ["repaired", "repair", "repairing", "repairs"],
      correctAnswer: "repaired",
      explanation: "Causative: have/get + object + past participle.",
      difficulty: 3,
      tags: ["grammar", "causative", "c1"]
    },
    {
      id: "c1-g4-4",
      type: "multiple-choice",
      question: "Impersonal passive: 'It _____ that negotiations are progressing.'",
      options: ["is reported", "reports", "is reporting", "reported"],
      correctAnswer: "is reported",
      explanation: "Impersonal passive for news/reports: It is reported that...",
      difficulty: 3,
      tags: ["grammar", "passive", "c1"]
    },
    {
      id: "c1-g4-5",
      type: "multiple-choice",
      question: "Perfect passive infinitive: 'He is thought _____ the company last year.'",
      options: ["to have left", "to leave", "leaving", "left"],
      correctAnswer: "to have left",
      explanation: "To have + past participle for past action with present reporting.",
      difficulty: 3,
      tags: ["grammar", "passive", "c1"]
    },
  ],

  // c1-gram-5: Nominalization
  "c1-gram-5": [
    {
      id: "c1-g5-1",
      type: "multiple-choice",
      question: "Nominalise: 'We analyzed the data' → 'The _____ of the data...'",
      options: ["analysis", "analyzing", "analyzed", "analytical"],
      correctAnswer: "analysis",
      explanation: "Nominalisation uses noun forms for academic style.",
      difficulty: 3,
      tags: ["grammar", "nominalisation", "c1"]
    },
    {
      id: "c1-g5-2",
      type: "multiple-choice",
      question: "Nominalise: 'The population grew' → 'The _____ in population...'",
      options: ["growth", "growing", "grew", "grower"],
      correctAnswer: "growth",
      explanation: "'Growth' = noun form of 'grow'.",
      difficulty: 3,
      tags: ["grammar", "nominalisation", "c1"]
    },
    {
      id: "c1-g5-3",
      type: "multiple-choice",
      question: "Nominalise: 'They decided to merge' → 'The _____ to merge...'",
      options: ["decision", "deciding", "decide", "decisive"],
      correctAnswer: "decision",
      explanation: "'Decision' = noun form of 'decide'.",
      difficulty: 3,
      tags: ["grammar", "nominalisation", "c1"]
    },
    {
      id: "c1-g5-4",
      type: "multiple-choice",
      question: "Nominalise: 'The economy developed' → 'The _____ of the economy...'",
      options: ["development", "developing", "developed", "developer"],
      correctAnswer: "development",
      explanation: "'Development' = noun form of 'develop'.",
      difficulty: 3,
      tags: ["grammar", "nominalisation", "c1"]
    },
    {
      id: "c1-g5-5",
      type: "multiple-choice",
      question: "Nominalise: 'They failed to comply' → 'Their _____ to comply...'",
      options: ["failure", "failing", "failed", "fail"],
      correctAnswer: "failure",
      explanation: "'Failure' = noun form of 'fail'.",
      difficulty: 3,
      tags: ["grammar", "nominalisation", "c1"]
    },
  ],

  // c1-gram-6: Inversion and emphasis
  "c1-gram-6": [
    {
      id: "c1-g6-1",
      type: "multiple-choice",
      question: "_____ had I arrived when the meeting started.",
      options: ["Hardly", "Hard", "Harder", "Hardest"],
      correctAnswer: "Hardly",
      explanation: "'Hardly had I...' = Inversion with negative adverb.",
      difficulty: 3,
      tags: ["grammar", "inversion", "c1"]
    },
    {
      id: "c1-g6-2",
      type: "multiple-choice",
      question: "Not only _____ late, but she also forgot the documents.",
      options: ["was she", "she was", "she is", "is she"],
      correctAnswer: "was she",
      explanation: "'Not only' triggers subject-auxiliary inversion.",
      difficulty: 3,
      tags: ["grammar", "inversion", "c1"]
    },
    {
      id: "c1-g6-3",
      type: "multiple-choice",
      question: "Never before _____ such a magnificent performance.",
      options: ["have I seen", "I have seen", "I saw", "did I seen"],
      correctAnswer: "have I seen",
      explanation: "'Never before' requires inversion.",
      difficulty: 3,
      tags: ["grammar", "inversion", "c1"]
    },
    {
      id: "c1-g6-4",
      type: "multiple-choice",
      question: "Cleft sentence: '_____ the CEO who made the final decision.'",
      options: ["It was", "There was", "That was", "This was"],
      correctAnswer: "It was",
      explanation: "It-cleft: 'It was X who/that...' for emphasis.",
      difficulty: 3,
      tags: ["grammar", "cleft", "c1"]
    },
    {
      id: "c1-g6-5",
      type: "multiple-choice",
      question: "Wh-cleft: '_____ I need is a good night's sleep.'",
      options: ["What", "Which", "That", "It"],
      correctAnswer: "What",
      explanation: "Wh-cleft: 'What I need is...' for emphasis.",
      difficulty: 3,
      tags: ["grammar", "cleft", "c1"]
    },
  ],

  // c1-gram-7: Ellipsis and substitution
  "c1-gram-7": [
    {
      id: "c1-g7-1",
      type: "multiple-choice",
      question: "'Would you like to come?' 'I'd love _____.'",
      options: ["to", "it", "that", "so"],
      correctAnswer: "to",
      explanation: "Ellipsis: 'I'd love to' (come is implied).",
      difficulty: 3,
      tags: ["grammar", "ellipsis", "c1"]
    },
    {
      id: "c1-g7-2",
      type: "multiple-choice",
      question: "'Is it raining?' 'I think _____.'",
      options: ["so", "it", "that", "this"],
      correctAnswer: "so",
      explanation: "'I think so' = substitution for 'it is raining'.",
      difficulty: 3,
      tags: ["grammar", "substitution", "c1"]
    },
    {
      id: "c1-g7-3",
      type: "multiple-choice",
      question: "'I can swim.' 'So _____ I.'",
      options: ["can", "do", "am", "have"],
      correctAnswer: "can",
      explanation: "'So can I' mirrors the auxiliary in the first sentence.",
      difficulty: 3,
      tags: ["grammar", "ellipsis", "c1"]
    },
    {
      id: "c1-g7-4",
      type: "multiple-choice",
      question: "'Which car do you want?' 'The red _____.'",
      options: ["one", "it", "that", "car"],
      correctAnswer: "one",
      explanation: "'One' substitutes for 'car' to avoid repetition.",
      difficulty: 3,
      tags: ["grammar", "substitution", "c1"]
    },
    {
      id: "c1-g7-5",
      type: "multiple-choice",
      question: "'Did she pass the exam?' 'I hope _____.'",
      options: ["so", "it", "that", "yes"],
      correctAnswer: "so",
      explanation: "'I hope so' = I hope she passed the exam.",
      difficulty: 3,
      tags: ["grammar", "substitution", "c1"]
    },
  ],

  // c1-gram-8: Discourse-level grammar
  "c1-gram-8": [
    {
      id: "c1-g8-1",
      type: "multiple-choice",
      question: "Anaphoric reference: 'John arrived late. _____ had missed the train.'",
      options: ["He", "John", "They", "It"],
      correctAnswer: "He",
      explanation: "'He' refers back to 'John' (anaphoric reference).",
      difficulty: 3,
      tags: ["grammar", "discourse", "c1"]
    },
    {
      id: "c1-g8-2",
      type: "multiple-choice",
      question: "Choose the best discourse connector: 'The plan failed; _____, we need a new approach.'",
      options: ["consequently", "moreover", "similarly", "namely"],
      correctAnswer: "consequently",
      explanation: "'Consequently' shows cause-effect relationship.",
      difficulty: 3,
      tags: ["grammar", "connectors", "c1"]
    },
    {
      id: "c1-g8-3",
      type: "multiple-choice",
      question: "Cataphoric reference: '_____ what he said: the project is cancelled.'",
      options: ["This is", "That was", "Here is", "There was"],
      correctAnswer: "This is",
      explanation: "'This' refers forward to what follows (cataphoric).",
      difficulty: 3,
      tags: ["grammar", "discourse", "c1"]
    },
    {
      id: "c1-g8-4",
      type: "multiple-choice",
      question: "Cohesion: 'The company grew. _____ growth was unexpected.'",
      options: ["This", "These", "Those", "That"],
      correctAnswer: "This",
      explanation: "'This' creates cohesion by referring to the previous sentence.",
      difficulty: 3,
      tags: ["grammar", "cohesion", "c1"]
    },
    {
      id: "c1-g8-5",
      type: "multiple-choice",
      question: "Best connector for adding contrast: 'Profits rose; _____, costs increased.'",
      options: ["however", "therefore", "furthermore", "likewise"],
      correctAnswer: "however",
      explanation: "'However' shows contrast between two ideas.",
      difficulty: 3,
      tags: ["grammar", "connectors", "c1"]
    },
  ],

  // c1-gram-9: Accurate punctuation for meaning
  "c1-gram-9": [
    {
      id: "c1-g9-1",
      type: "multiple-choice",
      question: "Which is correct? 'I have three goals_____ to learn, to grow, and to succeed.'",
      options: [":", ";", ",", "-"],
      correctAnswer: ":",
      explanation: "Colon introduces a list or explanation.",
      difficulty: 3,
      tags: ["punctuation", "c1"]
    },
    {
      id: "c1-g9-2",
      type: "multiple-choice",
      question: "Semicolon usage: 'She loves reading_____ he prefers movies.'",
      options: [";", ":", ",", "."],
      correctAnswer: ";",
      explanation: "Semicolon connects two related independent clauses.",
      difficulty: 3,
      tags: ["punctuation", "c1"]
    },
    {
      id: "c1-g9-3",
      type: "multiple-choice",
      question: "Dash for emphasis: 'The answer_____ if you can believe it_____ is no.'",
      options: ["—...—", ",...,", ";...;", ":...:"],
      correctAnswer: "—...—",
      explanation: "Dashes add emphasis to parenthetical information.",
      difficulty: 3,
      tags: ["punctuation", "c1"]
    },
    {
      id: "c1-g9-4",
      type: "multiple-choice",
      question: "Apostrophe: 'The _____ meeting is at 3pm.' (referring to one boss)",
      options: ["boss's", "bosses'", "boss'", "bosses"],
      correctAnswer: "boss's",
      explanation: "Singular possessive: boss's (even though it ends in s).",
      difficulty: 3,
      tags: ["punctuation", "apostrophe", "c1"]
    },
    {
      id: "c1-g9-5",
      type: "multiple-choice",
      question: "Which shows correct comma use? 'My sister_____ who lives in Paris_____ is visiting.'",
      options: [", ... ,", "... ...", "; ... ;", ": ... :"],
      correctAnswer: ", ... ,",
      explanation: "Non-defining relative clauses require commas.",
      difficulty: 3,
      tags: ["punctuation", "c1"]
    },
  ],
};

// ============= SPEAKING EXERCISES =============

const c1SpeakingExercises: Record<string, Exercise[]> = {
  // c1-speak-1: Express ideas spontaneously
  "c1-speak-1": [
    {
      id: "c1-sp1-1",
      type: "multiple-choice",
      question: "Which phrase best introduces an unprepared response on a complex topic?",
      options: ["That's an interesting point. Off the top of my head, I'd say...", "I don't know.", "Let me read my notes.", "I prepared this earlier."],
      correctAnswer: "That's an interesting point. Off the top of my head, I'd say...",
      explanation: "This shows spontaneity while maintaining fluency.",
      difficulty: 3,
      tags: ["speaking", "spontaneity", "c1"]
    },
    {
      id: "c1-sp1-2",
      type: "multiple-choice",
      question: "When self-correcting, which is most fluent?",
      options: ["...or rather, I should say...", "Wait, I was wrong.", "No, no, no, that's not right.", "Um... uh... I mean..."],
      correctAnswer: "...or rather, I should say...",
      explanation: "'Or rather' smoothly corrects without disrupting flow.",
      difficulty: 3,
      tags: ["speaking", "self-correction", "c1"]
    },
    {
      id: "c1-sp1-3",
      type: "multiple-choice",
      question: "To find a precise word quickly: 'The word I'm looking for is... what's it called... ah yes, _____'",
      options: ["serendipity", "thing", "stuff", "whatever"],
      correctAnswer: "serendipity",
      explanation: "Demonstrates finding precise vocabulary mid-speech.",
      difficulty: 3,
      tags: ["speaking", "precision", "c1"]
    },
  ],

  // c1-speak-2: Develop extended arguments
  "c1-speak-2": [
    {
      id: "c1-sp2-1",
      type: "multiple-choice",
      question: "To structure an argument logically, begin with:",
      options: ["First and foremost, let me outline my main points...", "I think maybe...", "So basically...", "You know..."],
      correctAnswer: "First and foremost, let me outline my main points...",
      explanation: "Signals a structured, logical argument is coming.",
      difficulty: 3,
      tags: ["speaking", "argumentation", "c1"]
    },
    {
      id: "c1-sp2-2",
      type: "multiple-choice",
      question: "To introduce evidence: 'This is supported by _____'",
      options: ["recent research which shows...", "what I think", "my opinion that", "the feeling that"],
      correctAnswer: "recent research which shows...",
      explanation: "References evidence to support arguments.",
      difficulty: 3,
      tags: ["speaking", "evidence", "c1"]
    },
    {
      id: "c1-sp2-3",
      type: "multiple-choice",
      question: "To anticipate a counter-argument:",
      options: ["Some might argue that..., however...", "Nobody would say that.", "I don't care what others think.", "That's stupid."],
      correctAnswer: "Some might argue that..., however...",
      explanation: "Acknowledges opposing views before countering them.",
      difficulty: 3,
      tags: ["speaking", "counter-arguments", "c1"]
    },
  ],

  // c1-speak-3: Persuade, negotiate, hypothesize
  "c1-speak-3": [
    {
      id: "c1-sp3-1",
      type: "multiple-choice",
      question: "Persuasion technique: 'Consider the benefits: _____'",
      options: ["not only would this save costs, but it would also...", "just do it", "I said so", "because I want to"],
      correctAnswer: "not only would this save costs, but it would also...",
      explanation: "Highlights multiple benefits persuasively.",
      difficulty: 3,
      tags: ["speaking", "persuasion", "c1"]
    },
    {
      id: "c1-sp3-2",
      type: "multiple-choice",
      question: "Negotiation: 'I understand your position. Perhaps we could _____'",
      options: ["find a middle ground", "ignore your concerns", "do what I want", "forget about it"],
      correctAnswer: "find a middle ground",
      explanation: "Shows willingness to compromise.",
      difficulty: 3,
      tags: ["speaking", "negotiation", "c1"]
    },
    {
      id: "c1-sp3-3",
      type: "multiple-choice",
      question: "Hypothesizing: 'If we were to implement this policy, _____'",
      options: ["we might see significant improvements", "nothing would happen", "I don't know", "who cares"],
      correctAnswer: "we might see significant improvements",
      explanation: "Uses conditional structure to speculate.",
      difficulty: 3,
      tags: ["speaking", "hypothesizing", "c1"]
    },
  ],

  // c1-speak-4: Adapt speech to audience
  "c1-speak-4": [
    {
      id: "c1-sp4-1",
      type: "multiple-choice",
      question: "To a specialist audience: 'The methodology employs _____'",
      options: ["a multi-factorial regression analysis", "some math stuff", "things with numbers", "complicated things"],
      correctAnswer: "a multi-factorial regression analysis",
      explanation: "Technical language for expert audience.",
      difficulty: 3,
      tags: ["speaking", "audience", "c1"]
    },
    {
      id: "c1-sp4-2",
      type: "multiple-choice",
      question: "To a general audience: 'Put simply, _____'",
      options: ["this means we're comparing two groups", "the epistemological framework suggests...", "utilizing paradigmatic shifts...", "the hermeneutic analysis indicates..."],
      correctAnswer: "this means we're comparing two groups",
      explanation: "Simplified language for non-specialists.",
      difficulty: 3,
      tags: ["speaking", "simplification", "c1"]
    },
  ],

  // c1-speak-5: Manage complex turn-taking
  "c1-speak-5": [
    {
      id: "c1-sp5-1",
      type: "multiple-choice",
      question: "To interrupt politely:",
      options: ["Sorry to interrupt, but I'd like to add...", "Shut up!", "Stop talking.", "Whatever."],
      correctAnswer: "Sorry to interrupt, but I'd like to add...",
      explanation: "Polite interruption maintains professional tone.",
      difficulty: 3,
      tags: ["speaking", "turn-taking", "c1"]
    },
    {
      id: "c1-sp5-2",
      type: "multiple-choice",
      question: "To hold the floor under pressure:",
      options: ["If I may just finish my point...", "Don't interrupt me!", "I'M TALKING!", "Listen to me!"],
      correctAnswer: "If I may just finish my point...",
      explanation: "Politely maintains speaking turn.",
      difficulty: 3,
      tags: ["speaking", "floor-holding", "c1"]
    },
    {
      id: "c1-sp5-3",
      type: "multiple-choice",
      question: "To yield gracefully:",
      options: ["That's all from me. What do you think, Sarah?", "I'm done.", "Whatever.", "Fine, you talk."],
      correctAnswer: "That's all from me. What do you think, Sarah?",
      explanation: "Politely hands over the speaking turn.",
      difficulty: 3,
      tags: ["speaking", "yielding", "c1"]
    },
  ],

  // c1-speak-6: Use hedging, emphasis, nuance
  "c1-speak-6": [
    {
      id: "c1-sp6-1",
      type: "multiple-choice",
      question: "Academic hedging: 'This _____ suggest a correlation.'",
      options: ["would seem to", "definitely", "absolutely", "certainly"],
      correctAnswer: "would seem to",
      explanation: "'Would seem to' = cautious, academic language.",
      difficulty: 3,
      tags: ["speaking", "hedging", "c1"]
    },
    {
      id: "c1-sp6-2",
      type: "multiple-choice",
      question: "For emphasis: 'What I'm trying to say is _____'",
      options: ["absolutely crucial", "kind of important", "maybe relevant", "somewhat interesting"],
      correctAnswer: "absolutely crucial",
      explanation: "Strong emphasis with intensifier + strong adjective.",
      difficulty: 3,
      tags: ["speaking", "emphasis", "c1"]
    },
  ],

  // c1-speak-7: Convey stance and subtle disagreement
  "c1-speak-7": [
    {
      id: "c1-sp7-1",
      type: "multiple-choice",
      question: "Express subtle disagreement: 'I see your point, but _____'",
      options: ["I'm not entirely convinced that...", "you're wrong", "that's stupid", "no way"],
      correctAnswer: "I'm not entirely convinced that...",
      explanation: "Diplomatic disagreement without confrontation.",
      difficulty: 3,
      tags: ["speaking", "disagreement", "c1"]
    },
    {
      id: "c1-sp7-2",
      type: "multiple-choice",
      question: "Express skepticism diplomatically:",
      options: ["I wonder if that's the complete picture...", "That's nonsense.", "You're lying.", "I don't believe you."],
      correctAnswer: "I wonder if that's the complete picture...",
      explanation: "Questions without directly accusing.",
      difficulty: 3,
      tags: ["speaking", "skepticism", "c1"]
    },
  ],

  // c1-speak-8: Maintain coherence in extended speech
  "c1-speak-8": [
    {
      id: "c1-sp8-1",
      type: "multiple-choice",
      question: "Signal structure in long speech: 'I'd like to cover three main points. _____'",
      options: ["Firstly... Secondly... Finally...", "And... And... And...", "So... So... So...", "Um... Um... Um..."],
      correctAnswer: "Firstly... Secondly... Finally...",
      explanation: "Clear signposting maintains coherence.",
      difficulty: 3,
      tags: ["speaking", "coherence", "c1"]
    },
    {
      id: "c1-sp8-2",
      type: "multiple-choice",
      question: "To summarize previous points: 'As I mentioned earlier, _____'",
      options: ["the key issue is...", "whatever", "you know", "stuff"],
      correctAnswer: "the key issue is...",
      explanation: "References back to maintain coherence.",
      difficulty: 3,
      tags: ["speaking", "summary", "c1"]
    },
  ],
};

// ============= LISTENING EXERCISES =============

const c1ListeningExercises: Record<string, Exercise[]> = {
  "c1-list-1": [
    {
      id: "c1-l1-1",
      type: "multiple-choice",
      question: "In fast, natural speech, 'going to' often sounds like:",
      options: ["gonna", "going to", "go to", "gotto"],
      correctAnswer: "gonna",
      explanation: "Connected speech: 'going to' → 'gonna' in natural fast speech.",
      difficulty: 3,
      tags: ["listening", "connected-speech", "c1"]
    },
    {
      id: "c1-l1-2",
      type: "multiple-choice",
      question: "'Want to' in rapid speech often becomes:",
      options: ["wanna", "want to", "wan to", "wanto"],
      correctAnswer: "wanna",
      explanation: "Common reduction in native speech.",
      difficulty: 3,
      tags: ["listening", "connected-speech", "c1"]
    },
  ],

  "c1-list-2": [
    {
      id: "c1-l2-1",
      type: "multiple-choice",
      question: "In academic lectures, a speaker saying 'Now, turning to our next point...' is:",
      options: ["Signposting a transition", "Ending the lecture", "Asking a question", "Starting a debate"],
      correctAnswer: "Signposting a transition",
      explanation: "Discourse markers help follow lecture structure.",
      difficulty: 3,
      tags: ["listening", "academic", "c1"]
    },
  ],

  "c1-list-3": [
    {
      id: "c1-l3-1",
      type: "multiple-choice",
      question: "In a professional meeting, 'Let's table this for now' means:",
      options: ["Postpone the discussion", "Put it on the table", "Discuss immediately", "Cancel completely"],
      correctAnswer: "Postpone the discussion",
      explanation: "Business English: 'table' (US) = postpone.",
      difficulty: 3,
      tags: ["listening", "business", "c1"]
    },
  ],

  "c1-list-4": [
    {
      id: "c1-l4-1",
      type: "multiple-choice",
      question: "Media debates: When a speaker says 'With all due respect...', they usually:",
      options: ["Are about to disagree", "Are being very polite", "Agree completely", "Are ending the discussion"],
      correctAnswer: "Are about to disagree",
      explanation: "This phrase often precedes disagreement despite appearing respectful.",
      difficulty: 3,
      tags: ["listening", "pragmatics", "c1"]
    },
  ],

  "c1-list-5": [
    {
      id: "c1-l5-1",
      type: "multiple-choice",
      question: "'She's as sharp as a tack' means she is:",
      options: ["Very intelligent", "Very dangerous", "Very small", "Very pointed"],
      correctAnswer: "Very intelligent",
      explanation: "Idiomatic expression for high intelligence.",
      difficulty: 3,
      tags: ["listening", "idioms", "c1"]
    },
  ],

  "c1-list-6": [
    {
      id: "c1-l6-1",
      type: "multiple-choice",
      question: "British understatement: 'That's quite good' often means:",
      options: ["It's excellent", "It's average", "It's bad", "It's acceptable"],
      correctAnswer: "It's excellent",
      explanation: "British understatement: 'quite good' often = very good.",
      difficulty: 3,
      tags: ["listening", "understatement", "c1"]
    },
  ],

  "c1-list-7": [
    {
      id: "c1-l7-1",
      type: "multiple-choice",
      question: "A speaker sighing before answering usually indicates:",
      options: ["Reluctance or frustration", "Happiness", "Agreement", "Confusion"],
      correctAnswer: "Reluctance or frustration",
      explanation: "Paralinguistic cues reveal speaker attitude.",
      difficulty: 3,
      tags: ["listening", "attitude", "c1"]
    },
  ],
};

// ============= READING EXERCISES =============

const c1ReadingExercises: Record<string, Exercise[]> = {
  "c1-read-1": [
    {
      id: "c1-r1-1",
      type: "multiple-choice",
      question: "In academic articles, 'It has been argued that...' indicates:",
      options: ["Previous research or opinions exist", "The author's own view", "A fact", "A new discovery"],
      correctAnswer: "Previous research or opinions exist",
      explanation: "Academic hedging attributing ideas to others.",
      difficulty: 3,
      tags: ["reading", "academic", "c1"]
    },
  ],

  "c1-read-2": [
    {
      id: "c1-r2-1",
      type: "multiple-choice",
      question: "In research papers, 'the findings suggest' vs 'the findings prove'—which is more cautious?",
      options: ["suggest", "prove", "Both equal", "Neither"],
      correctAnswer: "suggest",
      explanation: "'Suggest' is hedged language; 'prove' is too strong for most research.",
      difficulty: 3,
      tags: ["reading", "research", "c1"]
    },
  ],

  "c1-read-3": [
    {
      id: "c1-r3-1",
      type: "multiple-choice",
      question: "Editorials often use 'One might argue...' to:",
      options: ["Present a counterargument they'll refute", "State their main point", "End the article", "Introduce data"],
      correctAnswer: "Present a counterargument they'll refute",
      explanation: "Common rhetorical structure: acknowledge then counter.",
      difficulty: 3,
      tags: ["reading", "editorials", "c1"]
    },
  ],

  "c1-read-4": [
    {
      id: "c1-r4-1",
      type: "multiple-choice",
      question: "In policy documents, 'stakeholders' refers to:",
      options: ["All parties affected by a decision", "Shareholders only", "Employees only", "Customers only"],
      correctAnswer: "All parties affected by a decision",
      explanation: "Policy jargon: stakeholders = all interested/affected parties.",
      difficulty: 3,
      tags: ["reading", "policy", "c1"]
    },
  ],

  "c1-read-5": [
    {
      id: "c1-r5-1",
      type: "multiple-choice",
      question: "In long-form journalism, a 'lede' (or lead) is:",
      options: ["The opening paragraph that hooks the reader", "The conclusion", "The headline", "The byline"],
      correctAnswer: "The opening paragraph that hooks the reader",
      explanation: "Journalism term for the opening hook.",
      difficulty: 3,
      tags: ["reading", "journalism", "c1"]
    },
  ],

  "c1-read-6": [
    {
      id: "c1-r6-1",
      type: "multiple-choice",
      question: "Literary device: 'The silence was deafening' is an example of:",
      options: ["Oxymoron", "Simile", "Metaphor", "Alliteration"],
      correctAnswer: "Oxymoron",
      explanation: "Oxymoron: combining contradictory terms for effect.",
      difficulty: 3,
      tags: ["reading", "literature", "c1"]
    },
  ],

  "c1-read-7": [
    {
      id: "c1-r7-1",
      type: "multiple-choice",
      question: "Identifying implicit arguments: If a text says 'Studies show X leads to Y' without citing sources, this suggests:",
      options: ["The claim may be questionable", "The claim is definitely true", "More research is needed", "The author is an expert"],
      correctAnswer: "The claim may be questionable",
      explanation: "Critical reading: unsourced claims require skepticism.",
      difficulty: 3,
      tags: ["reading", "critical-thinking", "c1"]
    },
  ],

  "c1-read-8": [
    {
      id: "c1-r8-1",
      type: "multiple-choice",
      question: "Evaluating claims: An 'ad hominem' fallacy attacks:",
      options: ["The person making the argument, not the argument itself", "The logic of the argument", "The evidence", "The conclusion"],
      correctAnswer: "The person making the argument, not the argument itself",
      explanation: "Logical fallacy: attacking the person instead of the idea.",
      difficulty: 3,
      tags: ["reading", "fallacies", "c1"]
    },
  ],

  "c1-read-9": [
    {
      id: "c1-r9-1",
      type: "multiple-choice",
      question: "When synthesizing sources, 'Source A claims X, while Source B contends...' shows:",
      options: ["Comparison of different viewpoints", "Agreement between sources", "A single viewpoint", "No connection"],
      correctAnswer: "Comparison of different viewpoints",
      explanation: "Synthesis involves comparing and contrasting multiple sources.",
      difficulty: 3,
      tags: ["reading", "synthesis", "c1"]
    },
  ],
};

// ============= WRITING EXERCISES =============

const c1WritingExercises: Record<string, Exercise[]> = {
  "c1-write-1": [
    {
      id: "c1-w1-1",
      type: "multiple-choice",
      question: "Academic essay: A thesis statement should appear:",
      options: ["At the end of the introduction", "At the start of the conclusion", "In the middle of the essay", "In every paragraph"],
      correctAnswer: "At the end of the introduction",
      explanation: "Conventional placement: thesis ends the introduction.",
      difficulty: 3,
      tags: ["writing", "academic", "c1"]
    },
  ],

  "c1-write-2": [
    {
      id: "c1-w2-1",
      type: "multiple-choice",
      question: "Reports: The executive summary should:",
      options: ["Summarize key findings and recommendations briefly", "Contain all details", "Be the longest section", "Include methodology only"],
      correctAnswer: "Summarize key findings and recommendations briefly",
      explanation: "Executive summary = brief overview for quick reading.",
      difficulty: 3,
      tags: ["writing", "reports", "c1"]
    },
  ],

  "c1-write-3": [
    {
      id: "c1-w3-1",
      type: "multiple-choice",
      question: "Critical reviews: 'While X has merit, it fails to address...' shows:",
      options: ["Balanced criticism", "Pure praise", "Pure criticism", "Summary only"],
      correctAnswer: "Balanced criticism",
      explanation: "Good reviews acknowledge strengths while noting weaknesses.",
      difficulty: 3,
      tags: ["writing", "reviews", "c1"]
    },
  ],

  "c1-write-4": [
    {
      id: "c1-w4-1",
      type: "multiple-choice",
      question: "Position papers: 'This paper argues that...' establishes:",
      options: ["The author's stance", "Neutral observation", "Counter-arguments", "Background information"],
      correctAnswer: "The author's stance",
      explanation: "Position papers clearly state the author's viewpoint early.",
      difficulty: 3,
      tags: ["writing", "position-paper", "c1"]
    },
  ],

  "c1-write-5": [
    {
      id: "c1-w5-1",
      type: "multiple-choice",
      question: "Formal correspondence: 'I am writing with regard to...' is used to:",
      options: ["Introduce the purpose of the letter", "Close the letter", "Make a complaint", "Request information"],
      correctAnswer: "Introduce the purpose of the letter",
      explanation: "Formal opening stating the letter's purpose.",
      difficulty: 3,
      tags: ["writing", "formal", "c1"]
    },
  ],

  "c1-write-6": [
    {
      id: "c1-w6-1",
      type: "multiple-choice",
      question: "Cohesion: To refer back to a previous point, use:",
      options: ["As mentioned above...", "In conclusion...", "On the other hand...", "For example..."],
      correctAnswer: "As mentioned above...",
      explanation: "'As mentioned above' creates backward reference for cohesion.",
      difficulty: 3,
      tags: ["writing", "cohesion", "c1"]
    },
  ],

  "c1-write-7": [
    {
      id: "c1-w7-1",
      type: "multiple-choice",
      question: "Hedging in academic writing: 'This may indicate...' is more appropriate than:",
      options: ["'This proves...'", "'This suggests...'", "'This could mean...'", "'This might show...'"],
      correctAnswer: "'This proves...'",
      explanation: "'Proves' is too strong; hedged language is preferred in academia.",
      difficulty: 3,
      tags: ["writing", "hedging", "c1"]
    },
  ],

  "c1-write-8": [
    {
      id: "c1-w8-1",
      type: "multiple-choice",
      question: "Stylistic variation: Varying sentence length creates:",
      options: ["Rhythm and reader engagement", "Confusion", "Simplicity", "Formality"],
      correctAnswer: "Rhythm and reader engagement",
      explanation: "Mixing short and long sentences improves readability.",
      difficulty: 3,
      tags: ["writing", "style", "c1"]
    },
  ],
};

// ============= PRAGMATIC SKILLS EXERCISES =============

const c1PragmaticExercises: Record<string, Exercise[]> = {
  "c1-strat-1": [
    {
      id: "c1-pr1-1",
      type: "multiple-choice",
      question: "Strategic paraphrasing: 'In other words, what you're saying is...'",
      options: ["Reformulates to confirm understanding", "Changes the subject", "Disagrees politely", "Ends the conversation"],
      correctAnswer: "Reformulates to confirm understanding",
      explanation: "Paraphrasing confirms and clarifies understanding.",
      difficulty: 3,
      tags: ["pragmatics", "paraphrasing", "c1"]
    },
  ],

  "c1-strat-2": [
    {
      id: "c1-pr2-1",
      type: "multiple-choice",
      question: "Repairing misunderstandings subtly: 'I think there may be a slight misunderstanding...'",
      options: ["Politely signals confusion without blaming", "Blames the other person", "Ends the discussion", "Changes the topic"],
      correctAnswer: "Politely signals confusion without blaming",
      explanation: "Diplomatic way to address miscommunication.",
      difficulty: 3,
      tags: ["pragmatics", "repair", "c1"]
    },
  ],

  "c1-strat-3": [
    {
      id: "c1-pr3-1",
      type: "multiple-choice",
      question: "Delivering bad news diplomatically: 'I'm afraid I have some difficult news...'",
      options: ["Prepares the listener for negative information", "Is too direct", "Avoids the issue", "Is informal"],
      correctAnswer: "Prepares the listener for negative information",
      explanation: "Pre-announcement softens the impact of bad news.",
      difficulty: 3,
      tags: ["pragmatics", "face-threatening", "c1"]
    },
  ],

  "c1-strat-4": [
    {
      id: "c1-pr4-1",
      type: "multiple-choice",
      question: "Reading social cues: If someone checks their watch repeatedly, they probably:",
      options: ["Need to leave or are impatient", "Are interested in the watch", "Want to discuss time", "Are relaxed"],
      correctAnswer: "Need to leave or are impatient",
      explanation: "Non-verbal cues indicate time pressure.",
      difficulty: 3,
      tags: ["pragmatics", "social-cues", "c1"]
    },
  ],

  "c1-strat-5": [
    {
      id: "c1-pr5-1",
      type: "multiple-choice",
      question: "Adjusting tone mid-interaction: If the other person seems offended, you should:",
      options: ["Acknowledge their feelings and soften your approach", "Ignore it and continue", "Speak louder", "End the conversation"],
      correctAnswer: "Acknowledge their feelings and soften your approach",
      explanation: "Reading reactions and adapting is key to effective communication.",
      difficulty: 3,
      tags: ["pragmatics", "tone", "c1"]
    },
  ],

  "c1-strat-6": [
    {
      id: "c1-pr6-1",
      type: "multiple-choice",
      question: "Monitoring output: 'That came out wrong. What I meant was...'",
      options: ["Shows real-time self-correction", "Is poor communication", "Should be avoided", "Is informal only"],
      correctAnswer: "Shows real-time self-correction",
      explanation: "Self-monitoring and correction is a C1 skill.",
      difficulty: 3,
      tags: ["pragmatics", "self-monitoring", "c1"]
    },
  ],
};

// ============= EXPORT FUNCTIONS =============

export function getC1CompleteExercisesBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...c1VocabExercises,
    ...c1GrammarExercises,
    ...c1SpeakingExercises,
    ...c1ListeningExercises,
    ...c1ReadingExercises,
    ...c1WritingExercises,
    ...c1PragmaticExercises,
    ...c1StrategyExercisesNew,
  };
  return allExercises[skillId] || [];
}

export const c1StrategyExercisesComplete = c1StrategyExercisesNew;

export const allC1CompleteExercises = {
  vocabulary: c1VocabExercises,
  grammar: c1GrammarExercises,
  speaking: c1SpeakingExercises,
  listening: c1ListeningExercises,
  reading: c1ReadingExercises,
  writing: c1WritingExercises,
  pragmatics: c1PragmaticExercises,
  strategy: c1StrategyExercisesComplete,
};
