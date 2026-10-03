// ================================================================
// C2 MASTERY LEVEL COMPREHENSIVE EXERCISES
// Complete coverage of all C2 curriculum skills
// ================================================================

import { Exercise } from "./exercisesData";
import { c2StrategyExercisesNew } from "./c2StrategyExercises";

// ================================================================
// C2 VOCABULARY EXERCISES
// ================================================================

const c2VocabExercises: Record<string, Exercise[]> = {
  // Native-level lexical precision
  "c2-vocab-1": [
    {
      id: "c2-v1-e1",
      type: "multiple-choice",
      question: "The professor's _____ analysis of the economic crisis impressed the committee.",
      options: ["perspicacious", "perspicuous", "perfunctory", "pernicious"],
      correctAnswer: "perspicacious",
      explanation: "'Perspicacious' means having keen mental perception and understanding; discerning.",
      difficulty: 3,
      tags: ["vocabulary", "c2", "precision"]
    },
    {
      id: "c2-v1-e2",
      type: "multiple-choice",
      question: "Her _____ demeanor belied the turmoil she felt inside.",
      options: ["phlegmatic", "frenetic", "mercurial", "choleric"],
      correctAnswer: "phlegmatic",
      explanation: "'Phlegmatic' = calm and unemotional, not easily disturbed.",
      difficulty: 3,
      tags: ["vocabulary", "c2", "precision"]
    },
    {
      id: "c2-v1-e3",
      type: "multiple-choice",
      question: "The witness gave a _____ account that contradicted his earlier testimony.",
      options: ["tendentious", "veracious", "mendacious", "loquacious"],
      correctAnswer: "mendacious",
      explanation: "'Mendacious' = not telling the truth; lying.",
      difficulty: 3,
      tags: ["vocabulary", "c2", "precision"]
    },
    {
      id: "c2-v1-e4",
      type: "fill-blank",
      question: "The _____ nature of the evidence made conviction difficult.",
      options: ["circumstantial", "circumstancial", "circumspect", "circuitous"],
      correctAnswer: "circumstantial",
      explanation: "'Circumstantial' evidence = indirect, based on inference rather than direct observation.",
      difficulty: 3,
      tags: ["vocabulary", "c2", "precision"]
    },
    {
      id: "c2-v1-e5",
      type: "multiple-choice",
      question: "The diplomat's response was deliberately _____.",
      options: ["equivocal", "unequivocal", "equivalent", "equitable"],
      correctAnswer: "equivocal",
      explanation: "'Equivocal' = open to more than one interpretation; ambiguous.",
      difficulty: 3,
      tags: ["vocabulary", "c2", "precision"]
    },
  ],
  
  // Advanced idiomatic expression
  "c2-vocab-2": [
    {
      id: "c2-v2-e1",
      type: "multiple-choice",
      question: "'To gild the lily' means:",
      options: ["To add unnecessary embellishment", "To improve something", "To preserve beauty", "To admire nature"],
      correctAnswer: "To add unnecessary embellishment",
      explanation: "From Shakespeare: to add decoration to something already beautiful, thus overdoing it.",
      difficulty: 3,
      tags: ["idioms", "c2"]
    },
    {
      id: "c2-v2-e2",
      type: "multiple-choice",
      question: "'A Sisyphean task' refers to:",
      options: ["An endlessly futile endeavor", "A heroic achievement", "A simple chore", "A rewarding project"],
      correctAnswer: "An endlessly futile endeavor",
      explanation: "From Greek mythology: Sisyphus was condemned to roll a boulder up a hill eternally.",
      difficulty: 3,
      tags: ["idioms", "c2"]
    },
    {
      id: "c2-v2-e3",
      type: "multiple-choice",
      question: "'Hoist with one's own petard' means:",
      options: ["Harmed by one's own scheme", "Celebrated publicly", "Lifted by friends", "Caught in a lie"],
      correctAnswer: "Harmed by one's own scheme",
      explanation: "From Shakespeare: to be injured by your own bomb (petard was a small explosive).",
      difficulty: 3,
      tags: ["idioms", "c2"]
    },
    {
      id: "c2-v2-e4",
      type: "multiple-choice",
      question: "'To shuffle off this mortal coil' means:",
      options: ["To die", "To travel", "To exercise", "To change careers"],
      correctAnswer: "To die",
      explanation: "From Hamlet: 'mortal coil' refers to the troubles of earthly life.",
      difficulty: 3,
      tags: ["idioms", "c2"]
    },
    {
      id: "c2-v2-e5",
      type: "multiple-choice",
      question: "'A Hobson's choice' is:",
      options: ["A false choice (take it or leave it)", "A difficult decision", "An easy option", "A popular selection"],
      correctAnswer: "A false choice (take it or leave it)",
      explanation: "Named after Thomas Hobson who made customers take the horse nearest the door.",
      difficulty: 3,
      tags: ["idioms", "c2"]
    },
  ],
  
  // Specialized academic vocabulary
  "c2-vocab-3": [
    {
      id: "c2-v3-e1",
      type: "multiple-choice",
      question: "The study's _____ revealed significant methodological flaws.",
      options: ["meta-analysis", "mega-analysis", "meta-synthesis", "micro-analysis"],
      correctAnswer: "meta-analysis",
      explanation: "'Meta-analysis' = statistical analysis combining results from multiple studies.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-v3-e2",
      type: "multiple-choice",
      question: "The researcher acknowledged the _____ nature of the sample size.",
      options: ["limited", "proscriptive", "prescriptive", "circumscribed"],
      correctAnswer: "circumscribed",
      explanation: "'Circumscribed' = restricted in scope; limited (more formal/academic).",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-v3-e3",
      type: "fill-blank",
      question: "The study employed a _____ approach to data collection.",
      options: ["longitudinal", "latitudinal", "horizontal", "vertical"],
      correctAnswer: "longitudinal",
      explanation: "'Longitudinal' = studying the same subjects over an extended period.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-v3-e4",
      type: "multiple-choice",
      question: "The results suggest a _____ relationship between variables.",
      options: ["correlative", "causative", "correlational", "collaborative"],
      correctAnswer: "correlational",
      explanation: "'Correlational' = showing a mutual relationship without implying causation.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-v3-e5",
      type: "multiple-choice",
      question: "The _____ implications of the findings are significant.",
      options: ["epistemological", "epidemiological", "etymological", "eschatological"],
      correctAnswer: "epistemological",
      explanation: "'Epistemological' = relating to the theory of knowledge.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
  ],
  
  // Rhetorical and literary devices
  "c2-vocab-4": [
    {
      id: "c2-v4-e1",
      type: "multiple-choice",
      question: "'The pen is mightier than the sword' is an example of:",
      options: ["Metonymy", "Metaphor", "Simile", "Hyperbole"],
      correctAnswer: "Metonymy",
      explanation: "'Pen' represents written word, 'sword' represents military force - substitution of related concepts.",
      difficulty: 3,
      tags: ["rhetoric", "c2"]
    },
    {
      id: "c2-v4-e2",
      type: "multiple-choice",
      question: "'Military intelligence' is often cited as an example of:",
      options: ["Oxymoron", "Paradox", "Irony", "Satire"],
      correctAnswer: "Oxymoron",
      explanation: "An oxymoron combines contradictory terms for rhetorical effect.",
      difficulty: 3,
      tags: ["rhetoric", "c2"]
    },
    {
      id: "c2-v4-e3",
      type: "multiple-choice",
      question: "Starting consecutive sentences with the same word is called:",
      options: ["Anaphora", "Epistrophe", "Chiasmus", "Antithesis"],
      correctAnswer: "Anaphora",
      explanation: "Anaphora = repetition of a word at the beginning of successive clauses.",
      difficulty: 3,
      tags: ["rhetoric", "c2"]
    },
    {
      id: "c2-v4-e4",
      type: "multiple-choice",
      question: "'Ask not what your country can do for you' uses:",
      options: ["Chiasmus", "Anaphora", "Epistrophe", "Parallelism"],
      correctAnswer: "Chiasmus",
      explanation: "Chiasmus = reversal of grammatical structures (ABBA pattern).",
      difficulty: 3,
      tags: ["rhetoric", "c2"]
    },
    {
      id: "c2-v4-e5",
      type: "multiple-choice",
      question: "Deliberately understating for effect is called:",
      options: ["Litotes", "Hyperbole", "Meiosis", "Bathos"],
      correctAnswer: "Litotes",
      explanation: "Litotes = understatement using double negatives ('not bad' meaning 'good').",
      difficulty: 3,
      tags: ["rhetoric", "c2"]
    },
  ],
  
  // Complete register and tone control
  "c2-vocab-5": [
    {
      id: "c2-v5-e1",
      type: "multiple-choice",
      question: "Formal alternative to 'get rid of':",
      options: ["Dispense with", "Chuck out", "Dump", "Ditch"],
      correctAnswer: "Dispense with",
      explanation: "'Dispense with' = formal/professional way to say 'get rid of'.",
      difficulty: 3,
      tags: ["register", "c2"]
    },
    {
      id: "c2-v5-e2",
      type: "multiple-choice",
      question: "In academic writing, 'shows' should be replaced with:",
      options: ["Demonstrates", "Proves", "Tells", "Makes clear"],
      correctAnswer: "Demonstrates",
      explanation: "'Demonstrates' = more formal and academic than 'shows'.",
      difficulty: 3,
      tags: ["register", "c2"]
    },
    {
      id: "c2-v5-e3",
      type: "multiple-choice",
      question: "The legal term for 'without a valid will' is:",
      options: ["Intestate", "Instate", "Interstate", "Integrate"],
      correctAnswer: "Intestate",
      explanation: "'Intestate' = dying without having made a valid will.",
      difficulty: 3,
      tags: ["register", "c2"]
    },
    {
      id: "c2-v5-e4",
      type: "multiple-choice",
      question: "Replace 'think about' with a formal term:",
      options: ["Contemplate", "Ruminate", "Cogitate", "All are correct"],
      correctAnswer: "All are correct",
      explanation: "All three are formal alternatives: contemplate, ruminate, cogitate.",
      difficulty: 3,
      tags: ["register", "c2"]
    },
    {
      id: "c2-v5-e5",
      type: "multiple-choice",
      question: "In diplomatic language, 'We disagree strongly' becomes:",
      options: ["We have reservations", "We totally oppose", "We hate this", "We refuse"],
      correctAnswer: "We have reservations",
      explanation: "Diplomatic language uses understatement: 'reservations' = strong disagreement.",
      difficulty: 3,
      tags: ["register", "c2"]
    },
  ],
  
  // Professional domain vocabulary
  "c2-vocab-6": [
    {
      id: "c2-v6-e1",
      type: "multiple-choice",
      question: "In finance, 'due diligence' refers to:",
      options: ["Careful investigation before a transaction", "Paying bills on time", "Following regulations", "Daily accounting"],
      correctAnswer: "Careful investigation before a transaction",
      explanation: "'Due diligence' = comprehensive appraisal of a business before signing a contract.",
      difficulty: 3,
      tags: ["professional", "c2"]
    },
    {
      id: "c2-v6-e2",
      type: "multiple-choice",
      question: "A legal 'injunction' is:",
      options: ["A court order to stop an action", "A sentence", "A verdict", "A legal argument"],
      correctAnswer: "A court order to stop an action",
      explanation: "'Injunction' = judicial order requiring someone to do or refrain from doing something.",
      difficulty: 3,
      tags: ["professional", "c2"]
    },
    {
      id: "c2-v6-e3",
      type: "multiple-choice",
      question: "In medicine, 'prognosis' refers to:",
      options: ["The likely course of a disease", "The diagnosis", "The symptoms", "The treatment"],
      correctAnswer: "The likely course of a disease",
      explanation: "'Prognosis' = forecast of the probable outcome of a medical condition.",
      difficulty: 3,
      tags: ["professional", "c2"]
    },
    {
      id: "c2-v6-e4",
      type: "multiple-choice",
      question: "A 'force majeure' clause covers:",
      options: ["Unforeseeable circumstances beyond control", "Major forces in business", "Primary obligations", "Strong contracts"],
      correctAnswer: "Unforeseeable circumstances beyond control",
      explanation: "'Force majeure' = events outside parties' control (war, natural disaster).",
      difficulty: 3,
      tags: ["professional", "c2"]
    },
    {
      id: "c2-v6-e5",
      type: "multiple-choice",
      question: "'Fiduciary duty' means:",
      options: ["Legal obligation to act in another's best interest", "Financial responsibility", "Trust in banks", "Duty to file taxes"],
      correctAnswer: "Legal obligation to act in another's best interest",
      explanation: "'Fiduciary' = involving trust, especially regarding managing money for others.",
      difficulty: 3,
      tags: ["professional", "c2"]
    },
  ],
};

// ================================================================
// C2 GRAMMAR EXERCISES
// ================================================================

const c2GrammarExercises: Record<string, Exercise[]> = {
  // Rare and literary grammatical structures
  "c2-gram-1": [
    {
      id: "c2-g1-e1",
      type: "multiple-choice",
      question: "The committee demanded that he _____ immediately.",
      options: ["resign", "resigns", "resigned", "should resign"],
      correctAnswer: "resign",
      explanation: "Subjunctive mood after 'demand': base form without -s.",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
    {
      id: "c2-g1-e2",
      type: "multiple-choice",
      question: "It is essential that every student _____ the guidelines.",
      options: ["follow", "follows", "following", "followed"],
      correctAnswer: "follow",
      explanation: "Subjunctive uses base form regardless of subject.",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
    {
      id: "c2-g1-e3",
      type: "multiple-choice",
      question: "_____ be the outcome, we must proceed.",
      options: ["Whatever may", "What may", "Whatever", "Whichever"],
      correctAnswer: "Whatever may",
      explanation: "Archaic/literary structure: 'Whatever may be' (inverted for emphasis).",
      difficulty: 3,
      tags: ["literary", "c2"]
    },
    {
      id: "c2-g1-e4",
      type: "fill-blank",
      question: "The director insisted that the report _____ completed by Friday.",
      options: ["be", "is", "was", "were"],
      correctAnswer: "be",
      explanation: "Subjunctive with 'insist': use 'be' for all subjects.",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
    {
      id: "c2-g1-e5",
      type: "multiple-choice",
      question: "_____ it not for your help, I would have failed.",
      options: ["Were", "Was", "Had", "If"],
      correctAnswer: "Were",
      explanation: "Formal conditional: 'Were it not for' = 'If it were not for'.",
      difficulty: 3,
      tags: ["subjunctive", "c2"]
    },
  ],
  
  // Narrative time manipulation
  "c2-gram-2": [
    {
      id: "c2-g2-e1",
      type: "multiple-choice",
      question: "Historical present: 'In 1969, Armstrong _____ on the moon.'",
      options: ["sets foot", "set foot", "had set foot", "was setting foot"],
      correctAnswer: "sets foot",
      explanation: "Historical present uses simple present for past events for dramatic effect.",
      difficulty: 3,
      tags: ["narrative", "c2"]
    },
    {
      id: "c2-g2-e2",
      type: "multiple-choice",
      question: "Future in the past: 'Little did she know that she _____ become famous.'",
      options: ["would", "will", "shall", "is going to"],
      correctAnswer: "would",
      explanation: "'Would' expresses future from a past perspective.",
      difficulty: 3,
      tags: ["narrative", "c2"]
    },
    {
      id: "c2-g2-e3",
      type: "multiple-choice",
      question: "By the time the police arrived, the thief _____.",
      options: ["had vanished", "vanished", "has vanished", "would vanish"],
      correctAnswer: "had vanished",
      explanation: "Past perfect for action completed before another past action.",
      difficulty: 3,
      tags: ["narrative", "c2"]
    },
    {
      id: "c2-g2-e4",
      type: "multiple-choice",
      question: "She _____ realize the importance until years later.",
      options: ["was not to", "did not", "had not", "would not"],
      correctAnswer: "was not to",
      explanation: "'Was to' + infinitive for future destiny from past perspective.",
      difficulty: 3,
      tags: ["narrative", "c2"]
    },
    {
      id: "c2-g2-e5",
      type: "fill-blank",
      question: "By next year, she _____ here for a decade.",
      options: ["will have been working", "will work", "has worked", "is working"],
      correctAnswer: "will have been working",
      explanation: "Future perfect continuous for duration up to a future point.",
      difficulty: 3,
      tags: ["narrative", "c2"]
    },
  ],
  
  // Advanced modality
  "c2-gram-3": [
    {
      id: "c2-g3-e1",
      type: "multiple-choice",
      question: "He _____ have known; there's no way he didn't.",
      options: ["must", "might", "could", "may"],
      correctAnswer: "must",
      explanation: "'Must have' = logical certainty about a past event.",
      difficulty: 3,
      tags: ["modality", "c2"]
    },
    {
      id: "c2-g3-e2",
      type: "multiple-choice",
      question: "You _____ have told me earlier! Now it's too late.",
      options: ["should", "must", "would", "could"],
      correctAnswer: "should",
      explanation: "'Should have' expresses regret or criticism about past.",
      difficulty: 3,
      tags: ["modality", "c2"]
    },
    {
      id: "c2-g3-e3",
      type: "multiple-choice",
      question: "She _____ have been at the meeting; I saw her at the airport.",
      options: ["can't", "mustn't", "shouldn't", "won't"],
      correctAnswer: "can't",
      explanation: "'Can't have' = certainty that something didn't happen.",
      difficulty: 3,
      tags: ["modality", "c2"]
    },
    {
      id: "c2-g3-e4",
      type: "multiple-choice",
      question: "The train _____ arrive on time, but I wouldn't count on it.",
      options: ["might well", "must", "should", "will"],
      correctAnswer: "might well",
      explanation: "'Might well' = something is quite likely but not certain.",
      difficulty: 3,
      tags: ["modality", "c2"]
    },
    {
      id: "c2-g3-e5",
      type: "fill-blank",
      question: "We _____ have left earlier, but we decided to stay.",
      options: ["could", "should", "must", "would"],
      correctAnswer: "could",
      explanation: "'Could have' = past possibility that wasn't taken.",
      difficulty: 3,
      tags: ["modality", "c2"]
    },
  ],
  
  // Advanced textual cohesion
  "c2-gram-4": [
    {
      id: "c2-g4-e1",
      type: "multiple-choice",
      question: "The former approach works; _____ does not.",
      options: ["the latter", "the later", "another", "other"],
      correctAnswer: "the latter",
      explanation: "'The former/the latter' for clear reference to two items.",
      difficulty: 3,
      tags: ["cohesion", "c2"]
    },
    {
      id: "c2-g4-e2",
      type: "multiple-choice",
      question: "'She can speak French and so _____ her brother.'",
      options: ["can", "does", "is", "has"],
      correctAnswer: "can",
      explanation: "'So can' for agreeing with a statement using the same auxiliary.",
      difficulty: 3,
      tags: ["cohesion", "c2"]
    },
    {
      id: "c2-g4-e3",
      type: "multiple-choice",
      question: "The economy is improving; _____, unemployment remains high.",
      options: ["nevertheless", "therefore", "moreover", "thus"],
      correctAnswer: "nevertheless",
      explanation: "'Nevertheless' introduces a contrasting point.",
      difficulty: 3,
      tags: ["cohesion", "c2"]
    },
    {
      id: "c2-g4-e4",
      type: "multiple-choice",
      question: "'Is he coming?' 'I believe _____.'",
      options: ["so", "it", "that", "him"],
      correctAnswer: "so",
      explanation: "'I believe so' substitutes for 'I believe he is coming'.",
      difficulty: 3,
      tags: ["cohesion", "c2"]
    },
    {
      id: "c2-g4-e5",
      type: "fill-blank",
      question: "She's more qualified than he _____.",
      options: ["is", "was", "does", "has"],
      correctAnswer: "is",
      explanation: "Ellipsis: 'than he is [qualified]' - auxiliary replaces full clause.",
      difficulty: 3,
      tags: ["cohesion", "c2"]
    },
  ],
  
  // Syntactic variation for effect
  "c2-gram-5": [
    {
      id: "c2-g5-e1",
      type: "multiple-choice",
      question: "_____ she stood, speechless.",
      options: ["There", "Here", "Thus", "So"],
      correctAnswer: "There",
      explanation: "Fronting 'there' for dramatic/literary effect.",
      difficulty: 3,
      tags: ["syntax", "c2"]
    },
    {
      id: "c2-g5-e2",
      type: "multiple-choice",
      question: "What concerns me _____ the lack of planning.",
      options: ["is", "are", "was", "were"],
      correctAnswer: "is",
      explanation: "Wh-cleft emphasizes 'the lack of planning'.",
      difficulty: 3,
      tags: ["syntax", "c2"]
    },
    {
      id: "c2-g5-e3",
      type: "multiple-choice",
      question: "Not until later _____ understand the truth.",
      options: ["did she", "she did", "she", "had she"],
      correctAnswer: "did she",
      explanation: "'Not until' triggers subject-auxiliary inversion.",
      difficulty: 3,
      tags: ["syntax", "c2"]
    },
    {
      id: "c2-g5-e4",
      type: "multiple-choice",
      question: "_____ the expense, we decided to proceed.",
      options: ["Notwithstanding", "Despite of", "Irregardless", "Without"],
      correctAnswer: "Notwithstanding",
      explanation: "'Notwithstanding' = despite (formal/literary).",
      difficulty: 3,
      tags: ["syntax", "c2"]
    },
    {
      id: "c2-g5-e5",
      type: "fill-blank",
      question: "Only after reading the letter _____ he understand.",
      options: ["did", "had", "could", "would"],
      correctAnswer: "did",
      explanation: "'Only after' requires inversion: did he understand.",
      difficulty: 3,
      tags: ["syntax", "c2"]
    },
  ],
  
  // Error-free formal writing
  "c2-gram-6": [
    {
      id: "c2-g6-e1",
      type: "multiple-choice",
      question: "Each of the students _____ responsible.",
      options: ["is", "are", "were", "be"],
      correctAnswer: "is",
      explanation: "'Each' is singular: 'Each of the students IS'.",
      difficulty: 3,
      tags: ["agreement", "c2"]
    },
    {
      id: "c2-g6-e2",
      type: "multiple-choice",
      question: "Neither the manager nor the employees _____ aware.",
      options: ["were", "was", "is", "be"],
      correctAnswer: "were",
      explanation: "With 'neither...nor', verb agrees with the nearest subject.",
      difficulty: 3,
      tags: ["agreement", "c2"]
    },
    {
      id: "c2-g6-e3",
      type: "multiple-choice",
      question: "The committee _____ divided on the issue.",
      options: ["is/are (both correct)", "are only", "is only", "were"],
      correctAnswer: "is/are (both correct)",
      explanation: "Collective nouns: 'is' (BrE/AmE) or 'are' (BrE) when referring to individuals.",
      difficulty: 3,
      tags: ["agreement", "c2"]
    },
    {
      id: "c2-g6-e4",
      type: "multiple-choice",
      question: "The data _____ that the hypothesis is correct.",
      options: ["suggest", "suggests", "is suggesting", "has suggested"],
      correctAnswer: "suggest",
      explanation: "'Data' is technically plural (datum is singular).",
      difficulty: 3,
      tags: ["agreement", "c2"]
    },
    {
      id: "c2-g6-e5",
      type: "fill-blank",
      question: "A number of issues _____ addressed.",
      options: ["were", "was", "is", "has been"],
      correctAnswer: "were",
      explanation: "'A number of' takes plural verb (meaning 'several').",
      difficulty: 3,
      tags: ["agreement", "c2"]
    },
  ],
};

// ================================================================
// C2 SPEAKING EXERCISES
// ================================================================

const c2SpeakingExercises: Record<string, Exercise[]> = {
  // Complete fluency and spontaneity
  "c2-speak-1": [
    {
      id: "c2-s1-e1",
      type: "multiple-choice",
      question: "To reformulate mid-sentence, say:",
      options: ["What I mean is...", "Like...", "Um...", "You know..."],
      correctAnswer: "What I mean is...",
      explanation: "'What I mean is...' allows elegant reformulation.",
      difficulty: 3,
      tags: ["fluency", "c2"]
    },
    {
      id: "c2-s1-e2",
      type: "multiple-choice",
      question: "To buy thinking time elegantly:",
      options: ["That's an interesting question...", "Uh...", "Well...", "Hmm..."],
      correctAnswer: "That's an interesting question...",
      explanation: "This phrase gives you time to think while sounding engaged.",
      difficulty: 3,
      tags: ["fluency", "c2"]
    },
    {
      id: "c2-s1-e3",
      type: "multiple-choice",
      question: "To return to a previous point:",
      options: ["As I was saying...", "Anyway...", "So...", "Like I said..."],
      correctAnswer: "As I was saying...",
      explanation: "'As I was saying' smoothly returns to an interrupted topic.",
      difficulty: 3,
      tags: ["fluency", "c2"]
    },
    {
      id: "c2-s1-e4",
      type: "multiple-choice",
      question: "To introduce a tangential point:",
      options: ["Incidentally...", "By the way...", "Speaking of which...", "All are appropriate"],
      correctAnswer: "All are appropriate",
      explanation: "All three work for different registers and contexts.",
      difficulty: 3,
      tags: ["fluency", "c2"]
    },
    {
      id: "c2-s1-e5",
      type: "fill-blank",
      question: "To summarize a complex argument: 'To _____ it up...'",
      options: ["sum", "wrap", "tie", "bring"],
      correctAnswer: "sum",
      explanation: "'To sum it up' = to summarize briefly.",
      difficulty: 3,
      tags: ["fluency", "c2"]
    },
  ],
  
  // Advanced oratory and presentation
  "c2-speak-2": [
    {
      id: "c2-s2-e1",
      type: "multiple-choice",
      question: "Begin a formal speech with:",
      options: ["Distinguished guests...", "Hey everyone...", "So, like...", "Okay, so..."],
      correctAnswer: "Distinguished guests...",
      explanation: "Formal address establishes gravitas and respect.",
      difficulty: 3,
      tags: ["oratory", "c2"]
    },
    {
      id: "c2-s2-e2",
      type: "multiple-choice",
      question: "The rhetorical device of asking a question you'll answer is:",
      options: ["Rhetorical question", "Hypophora", "Interrogatio", "Aporia"],
      correctAnswer: "Hypophora",
      explanation: "Hypophora = asking then immediately answering your own question.",
      difficulty: 3,
      tags: ["oratory", "c2"]
    },
    {
      id: "c2-s2-e3",
      type: "multiple-choice",
      question: "To signal a key point: '_____, this is crucial...'",
      options: ["Importantly", "Basically", "Obviously", "Frankly"],
      correctAnswer: "Importantly",
      explanation: "'Importantly' signals that what follows deserves special attention.",
      difficulty: 3,
      tags: ["oratory", "c2"]
    },
    {
      id: "c2-s2-e4",
      type: "multiple-choice",
      question: "To create suspense before a revelation:",
      options: ["And the answer is...", "So basically...", "Like I said...", "As you know..."],
      correctAnswer: "And the answer is...",
      explanation: "Pause before revelation creates dramatic effect.",
      difficulty: 3,
      tags: ["oratory", "c2"]
    },
    {
      id: "c2-s2-e5",
      type: "fill-blank",
      question: "To end powerfully: 'In _____, I urge you to act.'",
      options: ["conclusion", "summary", "closing", "ending"],
      correctAnswer: "conclusion",
      explanation: "'In conclusion' is the standard formal close before a call to action.",
      difficulty: 3,
      tags: ["oratory", "c2"]
    },
  ],
  
  // Sophisticated humor and wit
  "c2-speak-3": [
    {
      id: "c2-s3-e1",
      type: "multiple-choice",
      question: "'I'm not saying it's your fault, I'm saying I'm blaming you' is:",
      options: ["Irony", "Sarcasm", "Wordplay", "Pun"],
      correctAnswer: "Irony",
      explanation: "Irony: saying one thing while meaning the opposite.",
      difficulty: 3,
      tags: ["humor", "c2"]
    },
    {
      id: "c2-s3-e2",
      type: "multiple-choice",
      question: "'Time flies like an arrow; fruit flies like a banana' uses:",
      options: ["Pun (syntactic)", "Metaphor", "Simile", "Analogy"],
      correctAnswer: "Pun (syntactic)",
      explanation: "Exploits two meanings of 'flies' and 'like'.",
      difficulty: 3,
      tags: ["humor", "c2"]
    },
    {
      id: "c2-s3-e3",
      type: "multiple-choice",
      question: "Self-deprecating humor should:",
      options: ["Be gentle and relatable", "Be harsh and critical", "Target insecurities", "Seek sympathy"],
      correctAnswer: "Be gentle and relatable",
      explanation: "Good self-deprecation is light and creates connection.",
      difficulty: 3,
      tags: ["humor", "c2"]
    },
    {
      id: "c2-s3-e4",
      type: "multiple-choice",
      question: "British understatement: 'That's not ideal' means:",
      options: ["That's a disaster", "That's okay", "That's perfect", "That's interesting"],
      correctAnswer: "That's a disaster",
      explanation: "British understatement: 'not ideal' = serious problem.",
      difficulty: 3,
      tags: ["humor", "c2"]
    },
    {
      id: "c2-s3-e5",
      type: "fill-blank",
      question: "A witty retort requires perfect _____ to land effectively.",
      options: ["timing", "volume", "accent", "grammar"],
      correctAnswer: "timing",
      explanation: "Comedic timing is essential for wit to work.",
      difficulty: 3,
      tags: ["humor", "c2"]
    },
  ],
  
  // High-level negotiation and diplomacy
  "c2-speak-4": [
    {
      id: "c2-s4-e1",
      type: "multiple-choice",
      question: "Diplomatic: 'We cannot accept this' becomes:",
      options: ["This presents certain challenges", "This is unacceptable", "We hate this", "No way"],
      correctAnswer: "This presents certain challenges",
      explanation: "Diplomatic language softens rejection.",
      difficulty: 3,
      tags: ["diplomacy", "c2"]
    },
    {
      id: "c2-s4-e2",
      type: "multiple-choice",
      question: "To reject while leaving options open:",
      options: ["At this stage, we're unable to...", "Never", "Absolutely not", "No chance"],
      correctAnswer: "At this stage, we're unable to...",
      explanation: "'At this stage' implies future possibility.",
      difficulty: 3,
      tags: ["diplomacy", "c2"]
    },
    {
      id: "c2-s4-e3",
      type: "multiple-choice",
      question: "To express strong disagreement diplomatically:",
      options: ["With respect, I see it differently", "You're wrong", "I disagree completely", "That's ridiculous"],
      correctAnswer: "With respect, I see it differently",
      explanation: "'With respect' softens disagreement.",
      difficulty: 3,
      tags: ["diplomacy", "c2"]
    },
    {
      id: "c2-s4-e4",
      type: "multiple-choice",
      question: "To buy time in negotiations:",
      options: ["We need to consult with our team", "Wait", "Hold on", "Give us a minute"],
      correctAnswer: "We need to consult with our team",
      explanation: "Professional way to pause negotiations.",
      difficulty: 3,
      tags: ["diplomacy", "c2"]
    },
    {
      id: "c2-s4-e5",
      type: "fill-blank",
      question: "In diplomacy, 'frank discussions' means talks were _____.",
      options: ["difficult", "honest", "friendly", "quick"],
      correctAnswer: "difficult",
      explanation: "'Frank' in diplomatic speak often means contentious.",
      difficulty: 3,
      tags: ["diplomacy", "c2"]
    },
  ],
  
  // Native prosody and intonation
  "c2-speak-5": [
    {
      id: "c2-s5-e1",
      type: "multiple-choice",
      question: "Rising intonation at the end typically indicates:",
      options: ["A question or uncertainty", "A statement", "Anger", "Boredom"],
      correctAnswer: "A question or uncertainty",
      explanation: "Rising intonation signals questions or seeking confirmation.",
      difficulty: 3,
      tags: ["prosody", "c2"]
    },
    {
      id: "c2-s5-e2",
      type: "multiple-choice",
      question: "'I didn't steal the MONEY' (stress on 'money') implies:",
      options: ["I stole something else", "I didn't steal anything", "Someone else stole it", "I borrowed it"],
      correctAnswer: "I stole something else",
      explanation: "Stress on 'money' contrasts with other things possibly stolen.",
      difficulty: 3,
      tags: ["prosody", "c2"]
    },
    {
      id: "c2-s5-e3",
      type: "multiple-choice",
      question: "Falling intonation at the end typically indicates:",
      options: ["A completed statement", "A question", "Surprise", "Uncertainty"],
      correctAnswer: "A completed statement",
      explanation: "Falling intonation signals finality or completion.",
      difficulty: 3,
      tags: ["prosody", "c2"]
    },
    {
      id: "c2-s5-e4",
      type: "multiple-choice",
      question: "Linking in 'turn off' sounds like:",
      options: ["tur-noff", "turn-off", "turn off", "turnoff"],
      correctAnswer: "tur-noff",
      explanation: "In natural speech, 'n' links to 'off': tur-noff.",
      difficulty: 3,
      tags: ["prosody", "c2"]
    },
    {
      id: "c2-s5-e5",
      type: "fill-blank",
      question: "Strategic pauses in speech create _____ and emphasis.",
      options: ["suspense", "confusion", "speed", "noise"],
      correctAnswer: "suspense",
      explanation: "Pauses create anticipation and highlight key points.",
      difficulty: 3,
      tags: ["prosody", "c2"]
    },
  ],
  
  // Philosophical and abstract argumentation
  "c2-speak-6": [
    {
      id: "c2-s6-e1",
      type: "multiple-choice",
      question: "To introduce a hypothetical: 'For the _____ of argument...'",
      options: ["sake", "purpose", "point", "reason"],
      correctAnswer: "sake",
      explanation: "'For the sake of argument' introduces a hypothetical position.",
      difficulty: 3,
      tags: ["argumentation", "c2"]
    },
    {
      id: "c2-s6-e2",
      type: "multiple-choice",
      question: "To present an opposing view fairly:",
      options: ["One could argue that...", "Stupidly, some think...", "Wrong people say...", "Idiots believe..."],
      correctAnswer: "One could argue that...",
      explanation: "'One could argue' presents opposition respectfully.",
      difficulty: 3,
      tags: ["argumentation", "c2"]
    },
    {
      id: "c2-s6-e3",
      type: "multiple-choice",
      question: "A 'straw man' argument is:",
      options: ["Misrepresenting an opponent's position", "A strong argument", "A logical conclusion", "An analogy"],
      correctAnswer: "Misrepresenting an opponent's position",
      explanation: "Straw man = attacking a distorted version of opponent's view.",
      difficulty: 3,
      tags: ["argumentation", "c2"]
    },
    {
      id: "c2-s6-e4",
      type: "multiple-choice",
      question: "To acknowledge complexity: 'The issue is _____.'",
      options: ["nuanced", "simple", "clear", "obvious"],
      correctAnswer: "nuanced",
      explanation: "'Nuanced' acknowledges subtle distinctions.",
      difficulty: 3,
      tags: ["argumentation", "c2"]
    },
    {
      id: "c2-s6-e5",
      type: "fill-blank",
      question: "To synthesize views: 'There's _____ on both sides.'",
      options: ["merit", "error", "truth", "fault"],
      correctAnswer: "merit",
      explanation: "'Merit on both sides' = both arguments have value.",
      difficulty: 3,
      tags: ["argumentation", "c2"]
    },
  ],
};

// ================================================================
// C2 LISTENING EXERCISES
// ================================================================

const c2ListeningExercises: Record<string, Exercise[]> = {
  // Any variety of English
  "c2-list-1": [
    {
      id: "c2-l1-e1",
      type: "multiple-choice",
      question: "In Cockney rhyming slang, 'apples and pears' means:",
      options: ["Stairs", "Fruit", "Problems", "Friends"],
      correctAnswer: "Stairs",
      explanation: "Cockney: 'apples and pears' rhymes with 'stairs'.",
      difficulty: 3,
      tags: ["varieties", "c2"]
    },
    {
      id: "c2-l1-e2",
      type: "multiple-choice",
      question: "In Australian English, 'arvo' means:",
      options: ["Afternoon", "Morning", "Evening", "Night"],
      correctAnswer: "Afternoon",
      explanation: "Aussie abbreviation: arvo = afternoon.",
      difficulty: 3,
      tags: ["varieties", "c2"]
    },
    {
      id: "c2-l1-e3",
      type: "multiple-choice",
      question: "In Scottish English, 'wee' means:",
      options: ["Small", "Large", "Old", "New"],
      correctAnswer: "Small",
      explanation: "Scottish 'wee' = small/little.",
      difficulty: 3,
      tags: ["varieties", "c2"]
    },
    {
      id: "c2-l1-e4",
      type: "multiple-choice",
      question: "In Indian English, 'prepone' means:",
      options: ["Move to an earlier time", "Postpone", "Cancel", "Repeat"],
      correctAnswer: "Move to an earlier time",
      explanation: "'Prepone' = opposite of postpone (common in Indian English).",
      difficulty: 3,
      tags: ["varieties", "c2"]
    },
    {
      id: "c2-l1-e5",
      type: "fill-blank",
      question: "In Irish English, 'grand' typically means _____.",
      options: ["fine/okay", "large", "expensive", "important"],
      correctAnswer: "fine/okay",
      explanation: "Irish 'grand' = fine, okay, good.",
      difficulty: 3,
      tags: ["varieties", "c2"]
    },
  ],
  
  // Complex specialized content
  "c2-list-2": [
    {
      id: "c2-l2-e1",
      type: "multiple-choice",
      question: "In legal context, 'prima facie' means:",
      options: ["At first appearance", "Finally", "Previously", "Secretly"],
      correctAnswer: "At first appearance",
      explanation: "'Prima facie' = based on first impression; accepted as true until proven otherwise.",
      difficulty: 3,
      tags: ["specialized", "c2"]
    },
    {
      id: "c2-l2-e2",
      type: "multiple-choice",
      question: "In academic discourse, 'albeit' means:",
      options: ["Although", "Because", "Therefore", "However"],
      correctAnswer: "Although",
      explanation: "'Albeit' = although (formal/academic).",
      difficulty: 3,
      tags: ["specialized", "c2"]
    },
    {
      id: "c2-l2-e3",
      type: "multiple-choice",
      question: "In economics, 'stagflation' refers to:",
      options: ["Stagnation plus inflation", "Fast growth", "Deflation", "Recovery"],
      correctAnswer: "Stagnation plus inflation",
      explanation: "'Stagflation' = economic stagnation with high inflation.",
      difficulty: 3,
      tags: ["specialized", "c2"]
    },
    {
      id: "c2-l2-e4",
      type: "multiple-choice",
      question: "In philosophy, 'a priori' knowledge is gained:",
      options: ["Independent of experience", "Through experience", "By accident", "Never"],
      correctAnswer: "Independent of experience",
      explanation: "'A priori' = known through reasoning, not experience.",
      difficulty: 3,
      tags: ["specialized", "c2"]
    },
    {
      id: "c2-l2-e5",
      type: "fill-blank",
      question: "In medicine, 'idiopathic' means the cause is _____.",
      options: ["unknown", "known", "genetic", "infectious"],
      correctAnswer: "unknown",
      explanation: "'Idiopathic' = of unknown cause.",
      difficulty: 3,
      tags: ["specialized", "c2"]
    },
  ],
  
  // Implicit meaning and subtext
  "c2-list-3": [
    {
      id: "c2-l3-e1",
      type: "multiple-choice",
      question: "'That's an interesting approach' often implies:",
      options: ["Polite disagreement", "Genuine interest", "Enthusiasm", "Approval"],
      correctAnswer: "Polite disagreement",
      explanation: "'Interesting' can be diplomatic criticism.",
      difficulty: 3,
      tags: ["subtext", "c2"]
    },
    {
      id: "c2-l3-e2",
      type: "multiple-choice",
      question: "'I'll think about it' usually means:",
      options: ["Probably no", "Definitely yes", "Genuine consideration", "Immediate action"],
      correctAnswer: "Probably no",
      explanation: "'I'll think about it' often = polite refusal.",
      difficulty: 3,
      tags: ["subtext", "c2"]
    },
    {
      id: "c2-l3-e3",
      type: "multiple-choice",
      question: "'With all due respect' often precedes:",
      options: ["Disagreement or criticism", "Agreement", "Praise", "Thanks"],
      correctAnswer: "Disagreement or criticism",
      explanation: "'With all due respect' = I'm about to disagree.",
      difficulty: 3,
      tags: ["subtext", "c2"]
    },
    {
      id: "c2-l3-e4",
      type: "multiple-choice",
      question: "If someone says 'Fine' with a sigh, they likely mean:",
      options: ["They're not fine", "They're happy", "They agree fully", "They're excited"],
      correctAnswer: "They're not fine",
      explanation: "Tone and paralinguistics reveal true meaning.",
      difficulty: 3,
      tags: ["subtext", "c2"]
    },
    {
      id: "c2-l3-e5",
      type: "fill-blank",
      question: "Reading between the lines means understanding the _____ message.",
      options: ["implicit", "explicit", "written", "spoken"],
      correctAnswer: "implicit",
      explanation: "'Between the lines' = the unstated, implied meaning.",
      difficulty: 3,
      tags: ["subtext", "c2"]
    },
  ],
  
  // Unrestricted media and entertainment
  "c2-list-4": [
    {
      id: "c2-l4-e1",
      type: "multiple-choice",
      question: "In stand-up comedy, a 'callback' is:",
      options: ["Reference to an earlier joke", "Phone call", "Audience participation", "Encore"],
      correctAnswer: "Reference to an earlier joke",
      explanation: "Callback = referring back to a previous joke for extra laughs.",
      difficulty: 3,
      tags: ["entertainment", "c2"]
    },
    {
      id: "c2-l4-e2",
      type: "multiple-choice",
      question: "In film, 'mise-en-scène' refers to:",
      options: ["Everything in the frame", "The soundtrack", "Editing", "Script"],
      correctAnswer: "Everything in the frame",
      explanation: "'Mise-en-scène' = visual elements arranged in a shot.",
      difficulty: 3,
      tags: ["entertainment", "c2"]
    },
    {
      id: "c2-l4-e3",
      type: "multiple-choice",
      question: "A 'bottle episode' in TV is:",
      options: ["Low-budget, single location", "Season finale", "Pilot episode", "Action-heavy"],
      correctAnswer: "Low-budget, single location",
      explanation: "Bottle episode = confined setting, limited cast, cost-saving.",
      difficulty: 3,
      tags: ["entertainment", "c2"]
    },
    {
      id: "c2-l4-e4",
      type: "multiple-choice",
      question: "In theater, 'breaking the fourth wall' means:",
      options: ["Addressing the audience directly", "Forgetting lines", "Improvising", "Set damage"],
      correctAnswer: "Addressing the audience directly",
      explanation: "Fourth wall = imaginary barrier between performers and audience.",
      difficulty: 3,
      tags: ["entertainment", "c2"]
    },
    {
      id: "c2-l4-e5",
      type: "fill-blank",
      question: "A 'red herring' in mysteries is a _____ clue.",
      options: ["misleading", "important", "final", "hidden"],
      correctAnswer: "misleading",
      explanation: "Red herring = false clue to mislead the audience.",
      difficulty: 3,
      tags: ["entertainment", "c2"]
    },
  ],
  
  // Understanding cultural nuances
  "c2-list-5": [
    {
      id: "c2-l5-e1",
      type: "multiple-choice",
      question: "The 'American Dream' fundamentally refers to:",
      options: ["Opportunity for prosperity through hard work", "Sleeping well", "Actual dreams", "Vacation"],
      correctAnswer: "Opportunity for prosperity through hard work",
      explanation: "Cultural concept: success through effort and determination.",
      difficulty: 3,
      tags: ["culture", "c2"]
    },
    {
      id: "c2-l5-e2",
      type: "multiple-choice",
      question: "'Keeping up with the Joneses' means:",
      options: ["Competing with neighbors socially", "Watching a TV show", "Following news", "Moving house"],
      correctAnswer: "Competing with neighbors socially",
      explanation: "Cultural expression about social comparison and materialism.",
      difficulty: 3,
      tags: ["culture", "c2"]
    },
    {
      id: "c2-l5-e3",
      type: "multiple-choice",
      question: "A 'Catch-22' refers to:",
      options: ["A paradoxical situation with no escape", "A lucky number", "A game", "A celebration"],
      correctAnswer: "A paradoxical situation with no escape",
      explanation: "From Joseph Heller's novel: contradictory rules trap you.",
      difficulty: 3,
      tags: ["culture", "c2"]
    },
    {
      id: "c2-l5-e4",
      type: "multiple-choice",
      question: "'Big Brother' as a cultural reference means:",
      options: ["Government surveillance", "An older sibling", "A TV show host", "A helpful friend"],
      correctAnswer: "Government surveillance",
      explanation: "From Orwell's 1984: authoritarian surveillance.",
      difficulty: 3,
      tags: ["culture", "c2"]
    },
    {
      id: "c2-l5-e5",
      type: "fill-blank",
      question: "The 'stiff upper lip' is a British cultural value of showing _____.",
      options: ["emotional restraint", "happiness", "anger", "sadness"],
      correctAnswer: "emotional restraint",
      explanation: "Stiff upper lip = not showing emotion under stress.",
      difficulty: 3,
      tags: ["culture", "c2"]
    },
  ],
};

// ================================================================
// C2 READING EXERCISES
// ================================================================

const c2ReadingExercises: Record<string, Exercise[]> = {
  // Classic and contemporary literature
  "c2-read-1": [
    {
      id: "c2-r1-e1",
      type: "multiple-choice",
      question: "Shakespeare's 'To be or not to be' is from:",
      options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
      correctAnswer: "Hamlet",
      explanation: "Hamlet's famous soliloquy on existence.",
      difficulty: 3,
      tags: ["literature", "c2"]
    },
    {
      id: "c2-r1-e2",
      type: "multiple-choice",
      question: "'Stream of consciousness' was pioneered by:",
      options: ["James Joyce and Virginia Woolf", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "James Joyce and Virginia Woolf",
      explanation: "Modernist technique capturing inner thoughts.",
      difficulty: 3,
      tags: ["literature", "c2"]
    },
    {
      id: "c2-r1-e3",
      type: "multiple-choice",
      question: "A 'Byronic hero' is typically:",
      options: ["Dark, brooding, and rebellious", "Cheerful and optimistic", "Simple and honest", "Comic relief"],
      correctAnswer: "Dark, brooding, and rebellious",
      explanation: "Named after Lord Byron: charismatic but flawed.",
      difficulty: 3,
      tags: ["literature", "c2"]
    },
    {
      id: "c2-r1-e4",
      type: "multiple-choice",
      question: "The 'unreliable narrator' technique creates:",
      options: ["Reader uncertainty about truth", "Clear storytelling", "Historical accuracy", "Simple plot"],
      correctAnswer: "Reader uncertainty about truth",
      explanation: "Narrator whose credibility is compromised.",
      difficulty: 3,
      tags: ["literature", "c2"]
    },
    {
      id: "c2-r1-e5",
      type: "fill-blank",
      question: "'1984' by George Orwell is a _____ novel.",
      options: ["dystopian", "utopian", "romantic", "pastoral"],
      correctAnswer: "dystopian",
      explanation: "Dystopia = imagined society of great suffering/injustice.",
      difficulty: 3,
      tags: ["literature", "c2"]
    },
  ],
  
  // Academic research texts
  "c2-read-2": [
    {
      id: "c2-r2-e1",
      type: "multiple-choice",
      question: "An academic 'abstract' provides:",
      options: ["A summary of the entire paper", "The methodology only", "Just conclusions", "References"],
      correctAnswer: "A summary of the entire paper",
      explanation: "Abstract = brief summary of research paper.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-r2-e2",
      type: "multiple-choice",
      question: "Peer review means research is evaluated by:",
      options: ["Other experts in the field", "Students", "The author", "Publishers"],
      correctAnswer: "Other experts in the field",
      explanation: "Peer review = quality control by fellow academics.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-r2-e3",
      type: "multiple-choice",
      question: "A 'control group' in research:",
      options: ["Is not exposed to the variable being tested", "Gets the treatment", "Runs the experiment", "Writes the paper"],
      correctAnswer: "Is not exposed to the variable being tested",
      explanation: "Control group = baseline for comparison.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-r2-e4",
      type: "multiple-choice",
      question: "'P-value < 0.05' in research indicates:",
      options: ["Statistical significance", "No significance", "Data error", "Sample size"],
      correctAnswer: "Statistical significance",
      explanation: "P < 0.05 = results likely not due to chance.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
    {
      id: "c2-r2-e5",
      type: "fill-blank",
      question: "The _____ states what the researcher predicts will happen.",
      options: ["hypothesis", "conclusion", "abstract", "method"],
      correctAnswer: "hypothesis",
      explanation: "Hypothesis = testable prediction.",
      difficulty: 3,
      tags: ["academic", "c2"]
    },
  ],
  
  // Legal and technical documents
  "c2-read-3": [
    {
      id: "c2-r3-e1",
      type: "multiple-choice",
      question: "In legal texts, 'hereinafter' means:",
      options: ["From this point on referred to as", "Before this", "Somewhere else", "Never again"],
      correctAnswer: "From this point on referred to as",
      explanation: "'Hereinafter' introduces shortened reference terms.",
      difficulty: 3,
      tags: ["legal", "c2"]
    },
    {
      id: "c2-r3-e2",
      type: "multiple-choice",
      question: "A legal 'caveat' is:",
      options: ["A warning or caution", "An approval", "A signature", "A payment"],
      correctAnswer: "A warning or caution",
      explanation: "'Caveat' = warning, often 'caveat emptor' (buyer beware).",
      difficulty: 3,
      tags: ["legal", "c2"]
    },
    {
      id: "c2-r3-e3",
      type: "multiple-choice",
      question: "'Notwithstanding' in contracts means:",
      options: ["In spite of", "Because of", "According to", "As a result of"],
      correctAnswer: "In spite of",
      explanation: "'Notwithstanding' = despite, regardless of.",
      difficulty: 3,
      tags: ["legal", "c2"]
    },
    {
      id: "c2-r3-e4",
      type: "multiple-choice",
      question: "An 'indemnity clause' protects against:",
      options: ["Financial loss or liability", "Profit loss", "Contract renewal", "Early termination"],
      correctAnswer: "Financial loss or liability",
      explanation: "Indemnity = compensation for harm or loss.",
      difficulty: 3,
      tags: ["legal", "c2"]
    },
    {
      id: "c2-r3-e5",
      type: "fill-blank",
      question: "'Mutatis mutandis' means 'with the necessary changes having been _____.'",
      options: ["made", "deleted", "ignored", "highlighted"],
      correctAnswer: "made",
      explanation: "Legal Latin: making necessary alterations.",
      difficulty: 3,
      tags: ["legal", "c2"]
    },
  ],
  
  // Literary and critical analysis
  "c2-read-4": [
    {
      id: "c2-r4-e1",
      type: "multiple-choice",
      question: "'Foreshadowing' in literature:",
      options: ["Hints at future events", "Describes the past", "Explains characters", "Sets the scene"],
      correctAnswer: "Hints at future events",
      explanation: "Foreshadowing = clues about what will happen.",
      difficulty: 3,
      tags: ["analysis", "c2"]
    },
    {
      id: "c2-r4-e2",
      type: "multiple-choice",
      question: "A 'leitmotif' is:",
      options: ["A recurring theme or element", "The main character", "The plot", "The setting"],
      correctAnswer: "A recurring theme or element",
      explanation: "From music/literature: repeated symbolic element.",
      difficulty: 3,
      tags: ["analysis", "c2"]
    },
    {
      id: "c2-r4-e3",
      type: "multiple-choice",
      question: "'Pathetic fallacy' refers to:",
      options: ["Attributing human emotions to nature", "A logical error", "Sad characters", "Failed attempts"],
      correctAnswer: "Attributing human emotions to nature",
      explanation: "Weather reflecting character's mood, etc.",
      difficulty: 3,
      tags: ["analysis", "c2"]
    },
    {
      id: "c2-r4-e4",
      type: "multiple-choice",
      question: "A 'denouement' is:",
      options: ["The resolution after the climax", "The beginning", "The middle", "The climax itself"],
      correctAnswer: "The resolution after the climax",
      explanation: "French: 'untying' of the plot's knots.",
      difficulty: 3,
      tags: ["analysis", "c2"]
    },
    {
      id: "c2-r4-e5",
      type: "fill-blank",
      question: "A story's _____ is its underlying message or central idea.",
      options: ["theme", "plot", "setting", "character"],
      correctAnswer: "theme",
      explanation: "Theme = the 'big idea' the author explores.",
      difficulty: 3,
      tags: ["analysis", "c2"]
    },
  ],
  
  // Speed reading with full retention
  "c2-read-5": [
    {
      id: "c2-r5-e1",
      type: "multiple-choice",
      question: "Effective skimming involves:",
      options: ["Reading first/last sentences of paragraphs", "Reading every word", "Reading backwards", "Only reading titles"],
      correctAnswer: "Reading first/last sentences of paragraphs",
      explanation: "Topic sentences often contain main ideas.",
      difficulty: 3,
      tags: ["reading-skills", "c2"]
    },
    {
      id: "c2-r5-e2",
      type: "multiple-choice",
      question: "Subvocalization (reading aloud in your head) typically:",
      options: ["Slows reading speed", "Increases speed", "Improves comprehension", "Has no effect"],
      correctAnswer: "Slows reading speed",
      explanation: "Silent 'speaking' limits speed to speaking rate.",
      difficulty: 3,
      tags: ["reading-skills", "c2"]
    },
    {
      id: "c2-r5-e3",
      type: "multiple-choice",
      question: "Using a pointer while reading helps:",
      options: ["Guide eye movement and focus", "Look professional", "Mark the page", "Count lines"],
      correctAnswer: "Guide eye movement and focus",
      explanation: "Pointer reduces regression (re-reading).",
      difficulty: 3,
      tags: ["reading-skills", "c2"]
    },
    {
      id: "c2-r5-e4",
      type: "multiple-choice",
      question: "Annotation while reading:",
      options: ["Improves retention and engagement", "Slows understanding", "Is unnecessary", "Damages books"],
      correctAnswer: "Improves retention and engagement",
      explanation: "Active reading aids memory and comprehension.",
      difficulty: 3,
      tags: ["reading-skills", "c2"]
    },
    {
      id: "c2-r5-e5",
      type: "fill-blank",
      question: "Expanding peripheral vision helps take in more _____ per fixation.",
      options: ["words", "pages", "chapters", "books"],
      correctAnswer: "words",
      explanation: "Wider vision span = more words per eye stop.",
      difficulty: 3,
      tags: ["reading-skills", "c2"]
    },
  ],
  
  // Stylistic appreciation
  "c2-read-6": [
    {
      id: "c2-r6-e1",
      type: "multiple-choice",
      question: "Hemingway's style is characterized by:",
      options: ["Short, direct sentences", "Long, complex sentences", "Ornate vocabulary", "Extensive description"],
      correctAnswer: "Short, direct sentences",
      explanation: "Hemingway: 'iceberg theory' - minimal, understated.",
      difficulty: 3,
      tags: ["style", "c2"]
    },
    {
      id: "c2-r6-e2",
      type: "multiple-choice",
      question: "A 'purple prose' style is:",
      options: ["Overly ornate and elaborate", "Simple and clear", "Technical and precise", "Humorous"],
      correctAnswer: "Overly ornate and elaborate",
      explanation: "Purple prose = excessively flowery writing.",
      difficulty: 3,
      tags: ["style", "c2"]
    },
    {
      id: "c2-r6-e3",
      type: "multiple-choice",
      question: "'Authorial voice' refers to:",
      options: ["The writer's distinctive style and perspective", "Dialogue", "Narration", "Punctuation"],
      correctAnswer: "The writer's distinctive style and perspective",
      explanation: "Voice = unique personality in writing.",
      difficulty: 3,
      tags: ["style", "c2"]
    },
    {
      id: "c2-r6-e4",
      type: "multiple-choice",
      question: "Free indirect discourse blends:",
      options: ["Narrator's voice with character's thoughts", "Two characters' speech", "Past and present", "Reality and fantasy"],
      correctAnswer: "Narrator's voice with character's thoughts",
      explanation: "Technique mixing third-person narration with character's viewpoint.",
      difficulty: 3,
      tags: ["style", "c2"]
    },
    {
      id: "c2-r6-e5",
      type: "fill-blank",
      question: "A writer's _____ includes their word choice, sentence structure, and tone.",
      options: ["style", "plot", "theme", "setting"],
      correctAnswer: "style",
      explanation: "Style = how something is written, not what.",
      difficulty: 3,
      tags: ["style", "c2"]
    },
  ],
};

// ================================================================
// C2 WRITING EXERCISES
// ================================================================

const c2WritingExercises: Record<string, Exercise[]> = {
  // Publication-quality academic writing
  "c2-write-1": [
    {
      id: "c2-w1-e1",
      type: "multiple-choice",
      question: "Academic writing should avoid:",
      options: ["First person singular", "Citations", "Formal language", "Hedging"],
      correctAnswer: "First person singular",
      explanation: "Academic writing typically uses third person or 'we'.",
      difficulty: 3,
      tags: ["academic-writing", "c2"]
    },
    {
      id: "c2-w1-e2",
      type: "multiple-choice",
      question: "To introduce research findings formally:",
      options: ["The results demonstrate that...", "I found that...", "We got...", "It shows..."],
      correctAnswer: "The results demonstrate that...",
      explanation: "Formal academic phrasing for presenting findings.",
      difficulty: 3,
      tags: ["academic-writing", "c2"]
    },
    {
      id: "c2-w1-e3",
      type: "multiple-choice",
      question: "In-text citations in APA style use:",
      options: ["Author and year", "Footnotes", "Page numbers only", "Titles only"],
      correctAnswer: "Author and year",
      explanation: "APA format: (Smith, 2020).",
      difficulty: 3,
      tags: ["academic-writing", "c2"]
    },
    {
      id: "c2-w1-e4",
      type: "multiple-choice",
      question: "To acknowledge limitations professionally:",
      options: ["While this study has limitations...", "This study is bad at...", "Unfortunately we failed...", "Oops, we forgot..."],
      correctAnswer: "While this study has limitations...",
      explanation: "Academic acknowledgment of constraints.",
      difficulty: 3,
      tags: ["academic-writing", "c2"]
    },
    {
      id: "c2-w1-e5",
      type: "fill-blank",
      question: "An academic paper's _____ section describes how the study was conducted.",
      options: ["methodology", "introduction", "conclusion", "abstract"],
      correctAnswer: "methodology",
      explanation: "Methodology = detailed research methods.",
      difficulty: 3,
      tags: ["academic-writing", "c2"]
    },
  ],
  
  // Executive professional writing
  "c2-write-2": [
    {
      id: "c2-w2-e1",
      type: "multiple-choice",
      question: "Executive summaries should be:",
      options: ["Brief and action-oriented", "Detailed and technical", "Casual and friendly", "Vague and general"],
      correctAnswer: "Brief and action-oriented",
      explanation: "Executives need key points and recommendations quickly.",
      difficulty: 3,
      tags: ["professional-writing", "c2"]
    },
    {
      id: "c2-w2-e2",
      type: "multiple-choice",
      question: "A professional email closing for formal contexts:",
      options: ["Yours faithfully,", "Cheers,", "Later,", "Bye,"],
      correctAnswer: "Yours faithfully,",
      explanation: "'Yours faithfully' = formal, especially when name unknown.",
      difficulty: 3,
      tags: ["professional-writing", "c2"]
    },
    {
      id: "c2-w2-e3",
      type: "multiple-choice",
      question: "To diplomatically deliver bad news:",
      options: ["While we value your contribution...", "You're fired.", "Bad news:", "Unfortunately for you..."],
      correctAnswer: "While we value your contribution...",
      explanation: "Buffer the negative with positive recognition.",
      difficulty: 3,
      tags: ["professional-writing", "c2"]
    },
    {
      id: "c2-w2-e4",
      type: "multiple-choice",
      question: "A memorandum (memo) format includes:",
      options: ["To, From, Date, Subject", "Dear Sir,", "Once upon a time", "Chapter 1"],
      correctAnswer: "To, From, Date, Subject",
      explanation: "Standard memo header format.",
      difficulty: 3,
      tags: ["professional-writing", "c2"]
    },
    {
      id: "c2-w2-e5",
      type: "fill-blank",
      question: "Professional writing uses the active voice to show clear _____.",
      options: ["responsibility", "confusion", "passivity", "complexity"],
      correctAnswer: "responsibility",
      explanation: "Active voice: clear who does what.",
      difficulty: 3,
      tags: ["professional-writing", "c2"]
    },
  ],
  
  // Creative writing
  "c2-write-3": [
    {
      id: "c2-w3-e1",
      type: "multiple-choice",
      question: "'Show, don't tell' means:",
      options: ["Describe actions/details rather than stating emotions", "Use more dialogue", "Write longer", "Add illustrations"],
      correctAnswer: "Describe actions/details rather than stating emotions",
      explanation: "'She trembled' vs 'She was scared'.",
      difficulty: 3,
      tags: ["creative-writing", "c2"]
    },
    {
      id: "c2-w3-e2",
      type: "multiple-choice",
      question: "A 'hook' in creative writing:",
      options: ["Captures attention at the beginning", "Ends the story", "Develops character", "Describes setting"],
      correctAnswer: "Captures attention at the beginning",
      explanation: "Opening that engages readers immediately.",
      difficulty: 3,
      tags: ["creative-writing", "c2"]
    },
    {
      id: "c2-w3-e3",
      type: "multiple-choice",
      question: "Effective dialogue should:",
      options: ["Reveal character and advance plot", "Be realistic transcription", "Use said bookisms", "Include accents phonetically"],
      correctAnswer: "Reveal character and advance plot",
      explanation: "Dialogue serves story purpose.",
      difficulty: 3,
      tags: ["creative-writing", "c2"]
    },
    {
      id: "c2-w3-e4",
      type: "multiple-choice",
      question: "'In medias res' means starting:",
      options: ["In the middle of action", "At the beginning", "At the end", "With background"],
      correctAnswer: "In the middle of action",
      explanation: "Latin: 'in the midst of things'.",
      difficulty: 3,
      tags: ["creative-writing", "c2"]
    },
    {
      id: "c2-w3-e5",
      type: "fill-blank",
      question: "Varying sentence _____ creates rhythm and maintains interest.",
      options: ["length", "color", "font", "margin"],
      correctAnswer: "length",
      explanation: "Mix short and long sentences for flow.",
      difficulty: 3,
      tags: ["creative-writing", "c2"]
    },
  ],
  
  // Advanced journalistic writing
  "c2-write-4": [
    {
      id: "c2-w4-e1",
      type: "multiple-choice",
      question: "The 'inverted pyramid' structure means:",
      options: ["Most important info first", "Building to a climax", "Equal paragraphs", "Conclusion first"],
      correctAnswer: "Most important info first",
      explanation: "News: key facts first, details later.",
      difficulty: 3,
      tags: ["journalism", "c2"]
    },
    {
      id: "c2-w4-e2",
      type: "multiple-choice",
      question: "A 'lede' (lead) is:",
      options: ["The opening sentence/paragraph", "The headline", "A source", "A photo caption"],
      correctAnswer: "The opening sentence/paragraph",
      explanation: "The lead hooks readers with key information.",
      difficulty: 3,
      tags: ["journalism", "c2"]
    },
    {
      id: "c2-w4-e3",
      type: "multiple-choice",
      question: "Journalistic objectivity requires:",
      options: ["Presenting multiple perspectives fairly", "Personal opinions", "Only positive news", "Entertainment focus"],
      correctAnswer: "Presenting multiple perspectives fairly",
      explanation: "Balance and fairness in reporting.",
      difficulty: 3,
      tags: ["journalism", "c2"]
    },
    {
      id: "c2-w4-e4",
      type: "multiple-choice",
      question: "'Op-ed' stands for:",
      options: ["Opposite the editorial page", "Optional editor", "Open edition", "Opinion editing"],
      correctAnswer: "Opposite the editorial page",
      explanation: "Op-ed = opinion piece opposite the editorial.",
      difficulty: 3,
      tags: ["journalism", "c2"]
    },
    {
      id: "c2-w4-e5",
      type: "fill-blank",
      question: "Good journalism answers: who, what, when, where, why, and _____.",
      options: ["how", "whom", "which", "whose"],
      correctAnswer: "how",
      explanation: "The 5 W's and H of journalism.",
      difficulty: 3,
      tags: ["journalism", "c2"]
    },
  ],
  
  // Editing and revision
  "c2-write-5": [
    {
      id: "c2-w5-e1",
      type: "multiple-choice",
      question: "Copyediting focuses on:",
      options: ["Grammar, spelling, consistency", "Complete rewrites", "Adding content", "Layout design"],
      correctAnswer: "Grammar, spelling, consistency",
      explanation: "Copyediting = technical accuracy.",
      difficulty: 3,
      tags: ["editing", "c2"]
    },
    {
      id: "c2-w5-e2",
      type: "multiple-choice",
      question: "Substantive editing addresses:",
      options: ["Structure, content, and argument", "Spelling only", "Punctuation only", "Font choice"],
      correctAnswer: "Structure, content, and argument",
      explanation: "Substantive/developmental editing = big picture.",
      difficulty: 3,
      tags: ["editing", "c2"]
    },
    {
      id: "c2-w5-e3",
      type: "multiple-choice",
      question: "Proofreading is done:",
      options: ["After all other editing", "First", "During writing", "Instead of editing"],
      correctAnswer: "After all other editing",
      explanation: "Proofread = final check before publication.",
      difficulty: 3,
      tags: ["editing", "c2"]
    },
    {
      id: "c2-w5-e4",
      type: "multiple-choice",
      question: "To cut wordiness, replace 'due to the fact that' with:",
      options: ["Because", "Since that", "For the reason", "As a result of"],
      correctAnswer: "Because",
      explanation: "'Because' = concise version.",
      difficulty: 3,
      tags: ["editing", "c2"]
    },
    {
      id: "c2-w5-e5",
      type: "fill-blank",
      question: "Reading work aloud helps catch _____ issues.",
      options: ["rhythm and flow", "spelling", "formatting", "citation"],
      correctAnswer: "rhythm and flow",
      explanation: "Hearing text reveals awkward phrasing.",
      difficulty: 3,
      tags: ["editing", "c2"]
    },
  ],
  
  // Distinctive voice and style
  "c2-write-6": [
    {
      id: "c2-w6-e1",
      type: "multiple-choice",
      question: "Developing your writing voice requires:",
      options: ["Reading widely and writing regularly", "Copying others exactly", "Using templates only", "Avoiding practice"],
      correctAnswer: "Reading widely and writing regularly",
      explanation: "Voice develops through exposure and practice.",
      difficulty: 3,
      tags: ["voice", "c2"]
    },
    {
      id: "c2-w6-e2",
      type: "multiple-choice",
      question: "Consistent tone throughout a piece:",
      options: ["Strengthens the message", "Bores readers", "Is unnecessary", "Limits creativity"],
      correctAnswer: "Strengthens the message",
      explanation: "Tonal consistency creates coherent effect.",
      difficulty: 3,
      tags: ["voice", "c2"]
    },
    {
      id: "c2-w6-e3",
      type: "multiple-choice",
      question: "To develop a unique style, a writer should:",
      options: ["Experiment with techniques while staying authentic", "Copy famous authors", "Follow all rules strictly", "Ignore all conventions"],
      correctAnswer: "Experiment with techniques while staying authentic",
      explanation: "Style = personal expression within effective communication.",
      difficulty: 3,
      tags: ["voice", "c2"]
    },
    {
      id: "c2-w6-e4",
      type: "multiple-choice",
      question: "Diction refers to:",
      options: ["Word choice", "Sentence length", "Paragraph structure", "Page layout"],
      correctAnswer: "Word choice",
      explanation: "Diction = selection of words and phrases.",
      difficulty: 3,
      tags: ["voice", "c2"]
    },
    {
      id: "c2-w6-e5",
      type: "fill-blank",
      question: "A writer's signature _____ makes their work recognizable.",
      options: ["style", "handwriting", "pen name", "genre"],
      correctAnswer: "style",
      explanation: "Distinctive style = author's fingerprint.",
      difficulty: 3,
      tags: ["voice", "c2"]
    },
  ],
};

// ================================================================
// C2 SOCIOCULTURAL EXERCISES
// ================================================================

const c2SocioculturalExercises: Record<string, Exercise[]> = {
  // Advanced intercultural competence
  "c2-socio-1": [
    {
      id: "c2-sc1-e1",
      type: "multiple-choice",
      question: "High-context cultures rely heavily on:",
      options: ["Implicit communication and nonverbal cues", "Explicit statements", "Written contracts", "Direct confrontation"],
      correctAnswer: "Implicit communication and nonverbal cues",
      explanation: "High-context (Japan, etc.): meaning in context, not just words.",
      difficulty: 3,
      tags: ["intercultural", "c2"]
    },
    {
      id: "c2-sc1-e2",
      type: "multiple-choice",
      question: "In many Asian cultures, silence in conversation:",
      options: ["Shows respect and thoughtfulness", "Is rude", "Indicates confusion", "Means disagreement"],
      correctAnswer: "Shows respect and thoughtfulness",
      explanation: "Silence = contemplation and respect in many cultures.",
      difficulty: 3,
      tags: ["intercultural", "c2"]
    },
    {
      id: "c2-sc1-e3",
      type: "multiple-choice",
      question: "'Saving face' is particularly important in:",
      options: ["East Asian cultures", "All cultures equally", "Western cultures only", "No cultures"],
      correctAnswer: "East Asian cultures",
      explanation: "Face = social standing; losing face is serious.",
      difficulty: 3,
      tags: ["intercultural", "c2"]
    },
    {
      id: "c2-sc1-e4",
      type: "multiple-choice",
      question: "Monochronic cultures prioritize:",
      options: ["Schedules and punctuality", "Relationships over time", "Multiple tasks", "Flexibility"],
      correctAnswer: "Schedules and punctuality",
      explanation: "Monochronic (Germany, US): time is linear, punctuality matters.",
      difficulty: 3,
      tags: ["intercultural", "c2"]
    },
    {
      id: "c2-sc1-e5",
      type: "fill-blank",
      question: "Cultural _____ means recognizing that no culture is inherently superior.",
      options: ["relativism", "superiority", "isolation", "dominance"],
      correctAnswer: "relativism",
      explanation: "Cultural relativism = judging cultures by their own standards.",
      difficulty: 3,
      tags: ["intercultural", "c2"]
    },
  ],
  
  // Linguistic metacognition
  "c2-socio-2": [
    {
      id: "c2-sc2-e1",
      type: "multiple-choice",
      question: "Metalinguistic awareness means:",
      options: ["Thinking about language as an object of analysis", "Speaking many languages", "Using correct grammar", "Having a large vocabulary"],
      correctAnswer: "Thinking about language as an object of analysis",
      explanation: "Meta = about itself; analyzing language consciously.",
      difficulty: 3,
      tags: ["metacognition", "c2"]
    },
    {
      id: "c2-sc2-e2",
      type: "multiple-choice",
      question: "Self-monitoring in language learning involves:",
      options: ["Checking your own production for errors", "Learning alone", "Avoiding mistakes", "Speaking quickly"],
      correctAnswer: "Checking your own production for errors",
      explanation: "Self-monitoring = conscious error detection.",
      difficulty: 3,
      tags: ["metacognition", "c2"]
    },
    {
      id: "c2-sc2-e3",
      type: "multiple-choice",
      question: "A language learning 'plateau' is:",
      options: ["A period of no apparent progress", "Rapid improvement", "Beginner stage", "Advanced fluency"],
      correctAnswer: "A period of no apparent progress",
      explanation: "Plateaus are normal; strategies help overcome them.",
      difficulty: 3,
      tags: ["metacognition", "c2"]
    },
    {
      id: "c2-sc2-e4",
      type: "multiple-choice",
      question: "Fossilization in language learning means:",
      options: ["Errors becoming permanent despite instruction", "Achieving perfection", "Forgetting a language", "Learning quickly"],
      correctAnswer: "Errors becoming permanent despite instruction",
      explanation: "Fossilized errors persist despite correction.",
      difficulty: 3,
      tags: ["metacognition", "c2"]
    },
    {
      id: "c2-sc2-e5",
      type: "fill-blank",
      question: "_____ learning strategies involve planning, monitoring, and evaluating learning.",
      options: ["Metacognitive", "Cognitive", "Social", "Affective"],
      correctAnswer: "Metacognitive",
      explanation: "Metacognitive = thinking about thinking/learning.",
      difficulty: 3,
      tags: ["metacognition", "c2"]
    },
  ],
  
  // High-stakes communication
  "c2-socio-3": [
    {
      id: "c2-sc3-e1",
      type: "multiple-choice",
      question: "In crisis communication, first priority is:",
      options: ["Providing clear, accurate information quickly", "Assigning blame", "Avoiding the media", "Waiting for details"],
      correctAnswer: "Providing clear, accurate information quickly",
      explanation: "Speed and accuracy prevent panic and rumors.",
      difficulty: 3,
      tags: ["high-stakes", "c2"]
    },
    {
      id: "c2-sc3-e2",
      type: "multiple-choice",
      question: "When delivering bad news, you should:",
      options: ["Be direct but compassionate", "Delay indefinitely", "Use excessive jargon", "Blame others"],
      correctAnswer: "Be direct but compassionate",
      explanation: "Clarity with empathy respects recipients.",
      difficulty: 3,
      tags: ["high-stakes", "c2"]
    },
    {
      id: "c2-sc3-e3",
      type: "multiple-choice",
      question: "In legal proceedings, precise language is important because:",
      options: ["Words can have legal consequences", "Judges prefer it", "It sounds better", "It's traditional"],
      correctAnswer: "Words can have legal consequences",
      explanation: "Legal language must be exact; ambiguity = problems.",
      difficulty: 3,
      tags: ["high-stakes", "c2"]
    },
    {
      id: "c2-sc3-e4",
      type: "multiple-choice",
      question: "When facing hostile questions:",
      options: ["Stay calm and address the substance", "Get defensive", "Walk away", "Attack the questioner"],
      correctAnswer: "Stay calm and address the substance",
      explanation: "Composure and focus demonstrate competence.",
      difficulty: 3,
      tags: ["high-stakes", "c2"]
    },
    {
      id: "c2-sc3-e5",
      type: "fill-blank",
      question: "In medical contexts, clear communication can be _____ saving.",
      options: ["life", "time", "money", "face"],
      correctAnswer: "life",
      explanation: "Medical miscommunication can have fatal consequences.",
      difficulty: 3,
      tags: ["high-stakes", "c2"]
    },
  ],
  
  // Teaching and explaining language
  "c2-socio-4": [
    {
      id: "c2-sc4-e1",
      type: "multiple-choice",
      question: "When explaining grammar, start with:",
      options: ["Simple examples before rules", "Complex theory", "Exceptions first", "Technical terminology"],
      correctAnswer: "Simple examples before rules",
      explanation: "Inductive learning: examples → rule.",
      difficulty: 3,
      tags: ["teaching", "c2"]
    },
    {
      id: "c2-sc4-e2",
      type: "multiple-choice",
      question: "Effective error correction should:",
      options: ["Be selective and constructive", "Correct every error", "Be harsh", "Be ignored"],
      correctAnswer: "Be selective and constructive",
      explanation: "Overcorrection demotivates; focus on key errors.",
      difficulty: 3,
      tags: ["teaching", "c2"]
    },
    {
      id: "c2-sc4-e3",
      type: "multiple-choice",
      question: "Scaffolding in language teaching means:",
      options: ["Providing temporary support that's gradually removed", "Building classrooms", "Using textbooks", "Testing frequently"],
      correctAnswer: "Providing temporary support that's gradually removed",
      explanation: "Scaffold = support until learner is independent.",
      difficulty: 3,
      tags: ["teaching", "c2"]
    },
    {
      id: "c2-sc4-e4",
      type: "multiple-choice",
      question: "Comprehensible input (Krashen) suggests:",
      options: ["Input slightly above current level (i+1)", "Very difficult material", "Only easy material", "No input, just output"],
      correctAnswer: "Input slightly above current level (i+1)",
      explanation: "i+1 = current level plus a bit more.",
      difficulty: 3,
      tags: ["teaching", "c2"]
    },
    {
      id: "c2-sc4-e5",
      type: "fill-blank",
      question: "The _____ method emphasizes learning through communication rather than memorization.",
      options: ["communicative", "grammar-translation", "audio-lingual", "silent"],
      correctAnswer: "communicative",
      explanation: "CLT = Communicative Language Teaching.",
      difficulty: 3,
      tags: ["teaching", "c2"]
    },
  ],
  
  // Linguistic emotional intelligence
  "c2-socio-5": [
    {
      id: "c2-sc5-e1",
      type: "multiple-choice",
      question: "Active listening includes:",
      options: ["Paraphrasing and asking clarifying questions", "Planning your response while they talk", "Interrupting often", "Looking at your phone"],
      correctAnswer: "Paraphrasing and asking clarifying questions",
      explanation: "Active listening = engaged, confirming understanding.",
      difficulty: 3,
      tags: ["emotional-intelligence", "c2"]
    },
    {
      id: "c2-sc5-e2",
      type: "multiple-choice",
      question: "Empathetic language includes phrases like:",
      options: ["'I understand how you feel...'", "'You shouldn't feel that way'", "'That's not important'", "'Get over it'"],
      correctAnswer: "'I understand how you feel...'",
      explanation: "Validating feelings shows empathy.",
      difficulty: 3,
      tags: ["emotional-intelligence", "c2"]
    },
    {
      id: "c2-sc5-e3",
      type: "multiple-choice",
      question: "Using 'I statements' instead of 'you statements':",
      options: ["Reduces defensiveness", "Is passive", "Is aggressive", "Is unclear"],
      correctAnswer: "Reduces defensiveness",
      explanation: "'I feel...' vs 'You always...' = less blame.",
      difficulty: 3,
      tags: ["emotional-intelligence", "c2"]
    },
    {
      id: "c2-sc5-e4",
      type: "multiple-choice",
      question: "Reading a room means:",
      options: ["Sensing the emotional atmosphere", "Looking around", "Counting people", "Finding exits"],
      correctAnswer: "Sensing the emotional atmosphere",
      explanation: "Social awareness of group dynamics.",
      difficulty: 3,
      tags: ["emotional-intelligence", "c2"]
    },
    {
      id: "c2-sc5-e5",
      type: "fill-blank",
      question: "_____ communication involves body language, tone, and facial expressions.",
      options: ["Nonverbal", "Verbal", "Written", "Digital"],
      correctAnswer: "Nonverbal",
      explanation: "Nonverbal = without words; huge part of meaning.",
      difficulty: 3,
      tags: ["emotional-intelligence", "c2"]
    },
  ],
  
  // Translation and interpretation
  "c2-socio-6": [
    {
      id: "c2-sc6-e1",
      type: "multiple-choice",
      question: "The difference between translation and interpretation is:",
      options: ["Translation is written, interpretation is oral", "They're the same", "Translation is oral", "Interpretation is written"],
      correctAnswer: "Translation is written, interpretation is oral",
      explanation: "Translation = text; Interpretation = speech.",
      difficulty: 3,
      tags: ["translation", "c2"]
    },
    {
      id: "c2-sc6-e2",
      type: "multiple-choice",
      question: "'False friends' in translation are:",
      options: ["Words that look similar but have different meanings", "Bad translators", "Difficult words", "Slang terms"],
      correctAnswer: "Words that look similar but have different meanings",
      explanation: "False cognates: 'embarrassed' ≠ Spanish 'embarazada'.",
      difficulty: 3,
      tags: ["translation", "c2"]
    },
    {
      id: "c2-sc6-e3",
      type: "multiple-choice",
      question: "Simultaneous interpretation requires:",
      options: ["Listening and speaking at the same time", "Note-taking", "Pausing frequently", "Written preparation"],
      correctAnswer: "Listening and speaking at the same time",
      explanation: "Simultaneous = real-time, like UN interpreters.",
      difficulty: 3,
      tags: ["translation", "c2"]
    },
    {
      id: "c2-sc6-e4",
      type: "multiple-choice",
      question: "Cultural adaptation in translation means:",
      options: ["Adjusting for target culture understanding", "Word-for-word translation", "Ignoring culture", "Adding footnotes only"],
      correctAnswer: "Adjusting for target culture understanding",
      explanation: "Localization = adapting for cultural context.",
      difficulty: 3,
      tags: ["translation", "c2"]
    },
    {
      id: "c2-sc6-e5",
      type: "fill-blank",
      question: "The _____ of a translation refers to its faithfulness to the original.",
      options: ["fidelity", "fluency", "style", "length"],
      correctAnswer: "fidelity",
      explanation: "Fidelity vs fluency: accuracy vs readability.",
      difficulty: 3,
      tags: ["translation", "c2"]
    },
  ],
};

// ================================================================
// EXPORT FUNCTIONS
// ================================================================

export function getC2ExercisesCompleteBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...c2VocabExercises,
    ...c2GrammarExercises,
    ...c2SpeakingExercises,
    ...c2ListeningExercises,
    ...c2ReadingExercises,
    ...c2WritingExercises,
    ...c2SocioculturalExercises,
    ...c2StrategyExercisesNew,
  };
  return allExercises[skillId] || [];
}

export const c2StrategyExercisesComplete = c2StrategyExercisesNew;

export const allC2CompleteExercises = {
  vocabulary: c2VocabExercises,
  grammar: c2GrammarExercises,
  speaking: c2SpeakingExercises,
  listening: c2ListeningExercises,
  reading: c2ReadingExercises,
  writing: c2WritingExercises,
  sociocultural: c2SocioculturalExercises,
  strategy: c2StrategyExercisesComplete,
};

// Count of all C2 exercises
export const c2ExerciseCount = Object.values({
  ...c2VocabExercises,
  ...c2GrammarExercises,
  ...c2SpeakingExercises,
  ...c2ListeningExercises,
  ...c2ReadingExercises,
  ...c2WritingExercises,
  ...c2SocioculturalExercises,
  ...c2StrategyExercisesNew,
}).reduce((acc, exercises) => acc + exercises.length, 0);