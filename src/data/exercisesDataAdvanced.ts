// Advanced Exercises for A2-C2 levels
// Comprehensive exercise database continuation

import { CEFRLevel } from "./curriculumData";
import { Exercise } from "./exercisesData";

// =====================================================
// A2 GRAMMAR EXERCISES
// =====================================================

export const a2GrammarExercises: Record<string, Exercise[]> = {
  // Past Simple
  "a2-gram-1": [
    {
      id: "a2-g1-1",
      type: "multiple-choice",
      question: "I ___ to the cinema yesterday.",
      options: ["go", "goes", "went", "going"],
      correctAnswer: "went",
      explanation: "Past Simple of 'go' is 'went' (irregular verb).",
      explanationSpanish: "El pasado simple de 'go' es 'went' (verbo irregular).",
      difficulty: 1,
      tags: ["past-simple", "irregular"]
    },
    {
      id: "a2-g1-2",
      type: "multiple-choice",
      question: "She ___ her homework last night.",
      options: ["finish", "finishes", "finished", "finishing"],
      correctAnswer: "finished",
      explanation: "Regular verbs: add -ed for past simple (finish → finished).",
      explanationSpanish: "Verbos regulares: añade -ed para el pasado simple (finish → finished).",
      difficulty: 1,
      tags: ["past-simple", "regular"]
    },
    {
      id: "a2-g1-3",
      type: "multiple-choice",
      question: "They ___ not come to the party.",
      options: ["do", "does", "did", "was"],
      correctAnswer: "did",
      explanation: "Negative in Past Simple: did not (didn't) + base verb.",
      explanationSpanish: "Negativo en Past Simple: did not (didn't) + verbo base.",
      difficulty: 1,
      tags: ["past-simple", "negative"]
    },
    {
      id: "a2-g1-4",
      type: "multiple-choice",
      question: "___ you see the movie?",
      options: ["Do", "Does", "Did", "Was"],
      correctAnswer: "Did",
      explanation: "Questions in Past Simple: Did + subject + base verb?",
      explanationSpanish: "Preguntas en Past Simple: Did + sujeto + verbo base?",
      difficulty: 1,
      tags: ["past-simple", "questions"]
    },
    {
      id: "a2-g1-5",
      type: "multiple-choice",
      question: "The children ___ football in the park.",
      options: ["play", "plays", "played", "playing"],
      correctAnswer: "played",
      explanation: "Past Simple for completed actions in the past.",
      explanationSpanish: "Past Simple para acciones completadas en el pasado.",
      difficulty: 1,
      tags: ["past-simple", "regular"]
    },
    {
      id: "a2-g1-6",
      type: "multiple-choice",
      question: "He ___ his keys this morning.",
      options: ["lose", "loses", "lost", "losing"],
      correctAnswer: "lost",
      explanation: "'Lose' is irregular: lose → lost → lost",
      explanationSpanish: "'Lose' es irregular: lose → lost → lost",
      difficulty: 2,
      tags: ["past-simple", "irregular"]
    },
    {
      id: "a2-g1-7",
      type: "multiple-choice",
      question: "We ___ a great time at the beach.",
      options: ["have", "has", "had", "having"],
      correctAnswer: "had",
      explanation: "'Have' is irregular: have → had → had",
      explanationSpanish: "'Have' es irregular: have → had → had",
      difficulty: 1,
      tags: ["past-simple", "irregular"]
    },
    {
      id: "a2-g1-8",
      type: "multiple-choice",
      question: "The train ___ at 9 o'clock.",
      options: ["arrive", "arrives", "arrived", "arriving"],
      correctAnswer: "arrived",
      explanation: "Past Simple of 'arrive' is 'arrived'.",
      explanationSpanish: "El Past Simple de 'arrive' es 'arrived'.",
      difficulty: 1,
      tags: ["past-simple", "regular"]
    },
    {
      id: "a2-g1-9",
      type: "multiple-choice",
      question: "She ___ the answer to the question.",
      options: ["know", "knows", "knew", "knowing"],
      correctAnswer: "knew",
      explanation: "'Know' is irregular: know → knew → known",
      explanationSpanish: "'Know' es irregular: know → knew → known",
      difficulty: 2,
      tags: ["past-simple", "irregular"]
    },
    {
      id: "a2-g1-10",
      type: "multiple-choice",
      question: "They ___ in Paris for two years.",
      options: ["live", "lives", "lived", "living"],
      correctAnswer: "lived",
      explanation: "Past Simple for a completed period of time.",
      explanationSpanish: "Past Simple para un período de tiempo completado.",
      difficulty: 1,
      tags: ["past-simple", "duration"]
    },
    {
      id: "a2-g1-11",
      type: "true-false",
      question: "'She goed to school' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct: 'She went to school'. 'Go' is irregular (went, not goed).",
      explanationSpanish: "Correcto: 'She went to school'. 'Go' es irregular (went, no goed).",
      difficulty: 1,
      tags: ["past-simple", "error-correction"]
    },
    {
      id: "a2-g1-12",
      type: "multiple-choice",
      question: "I ___ my grandmother last weekend.",
      options: ["visit", "visits", "visited", "visiting"],
      correctAnswer: "visited",
      explanation: "Regular verb + -ed for past simple.",
      explanationSpanish: "Verbo regular + -ed para past simple.",
      difficulty: 1,
      tags: ["past-simple", "regular"]
    },
    {
      id: "a2-g1-13",
      type: "multiple-choice",
      question: "He ___ to music while studying.",
      options: ["listen", "listens", "listened", "listening"],
      correctAnswer: "listened",
      explanation: "Past Simple of 'listen' is 'listened'.",
      explanationSpanish: "El Past Simple de 'listen' es 'listened'.",
      difficulty: 1,
      tags: ["past-simple", "regular"]
    },
    {
      id: "a2-g1-14",
      type: "multiple-choice",
      question: "The book ___ very interesting.",
      options: ["is", "are", "was", "were"],
      correctAnswer: "was",
      explanation: "Past Simple of 'to be': was (singular), were (plural).",
      explanationSpanish: "Past Simple de 'to be': was (singular), were (plural).",
      difficulty: 1,
      tags: ["past-simple", "to-be"]
    },
    {
      id: "a2-g1-15",
      type: "multiple-choice",
      question: "What ___ you do last summer?",
      options: ["do", "does", "did", "doing"],
      correctAnswer: "did",
      explanation: "WH-questions in Past Simple: What did you + base verb?",
      explanationSpanish: "Preguntas WH en Past Simple: What did you + verbo base?",
      difficulty: 2,
      tags: ["past-simple", "wh-questions"]
    },
  ],

  // Present Perfect
  "a2-gram-2": [
    {
      id: "a2-g2-1",
      type: "multiple-choice",
      question: "I ___ never been to Japan.",
      options: ["am", "was", "have", "has"],
      correctAnswer: "have",
      explanation: "Present Perfect: have/has + past participle. I/you/we/they → have",
      explanationSpanish: "Present Perfect: have/has + participio pasado. I/you/we/they → have",
      difficulty: 1,
      tags: ["present-perfect", "experience"]
    },
    {
      id: "a2-g2-2",
      type: "multiple-choice",
      question: "She ___ already finished her work.",
      options: ["have", "has", "had", "having"],
      correctAnswer: "has",
      explanation: "Present Perfect with he/she/it: has + past participle",
      explanationSpanish: "Present Perfect con he/she/it: has + participio pasado",
      difficulty: 1,
      tags: ["present-perfect", "already"]
    },
    {
      id: "a2-g2-3",
      type: "multiple-choice",
      question: "Have you ever ___ sushi?",
      options: ["eat", "ate", "eaten", "eating"],
      correctAnswer: "eaten",
      explanation: "'Eat' is irregular: eat → ate → eaten",
      explanationSpanish: "'Eat' es irregular: eat → ate → eaten",
      difficulty: 2,
      tags: ["present-perfect", "ever", "irregular"]
    },
    {
      id: "a2-g2-4",
      type: "multiple-choice",
      question: "They have ___ arrived at the airport.",
      options: ["just", "yet", "never", "ever"],
      correctAnswer: "just",
      explanation: "'Just' = very recently. It goes between have/has and the past participle.",
      explanationSpanish: "'Just' = muy recientemente. Va entre have/has y el participio pasado.",
      difficulty: 2,
      tags: ["present-perfect", "just"]
    },
    {
      id: "a2-g2-5",
      type: "multiple-choice",
      question: "I haven't seen that movie ___.",
      options: ["just", "already", "yet", "ever"],
      correctAnswer: "yet",
      explanation: "'Yet' is used in negatives and questions at the end of the sentence.",
      explanationSpanish: "'Yet' se usa en negativos y preguntas al final de la oración.",
      difficulty: 2,
      tags: ["present-perfect", "yet"]
    },
    {
      id: "a2-g2-6",
      type: "multiple-choice",
      question: "He has ___ three books this year.",
      options: ["read", "reads", "reading", "readed"],
      correctAnswer: "read",
      explanation: "'Read' is irregular but the past participle looks the same: read → read → read (pronunciation changes).",
      explanationSpanish: "'Read' es irregular pero el participio se ve igual: read → read → read (la pronunciación cambia).",
      difficulty: 2,
      tags: ["present-perfect", "irregular"]
    },
    {
      id: "a2-g2-7",
      type: "multiple-choice",
      question: "We have ___ here for five years.",
      options: ["live", "lived", "living", "lives"],
      correctAnswer: "lived",
      explanation: "Present Perfect for actions that started in the past and continue now.",
      explanationSpanish: "Present Perfect para acciones que empezaron en el pasado y continúan ahora.",
      difficulty: 2,
      tags: ["present-perfect", "duration"]
    },
    {
      id: "a2-g2-8",
      type: "multiple-choice",
      question: "___ she ever visited London?",
      options: ["Have", "Has", "Did", "Does"],
      correctAnswer: "Has",
      explanation: "Questions: Have/Has + subject + past participle?",
      explanationSpanish: "Preguntas: Have/Has + sujeto + participio pasado?",
      difficulty: 1,
      tags: ["present-perfect", "questions"]
    },
    {
      id: "a2-g2-9",
      type: "multiple-choice",
      question: "I have ___ my homework.",
      options: ["do", "does", "did", "done"],
      correctAnswer: "done",
      explanation: "'Do' is irregular: do → did → done",
      explanationSpanish: "'Do' es irregular: do → did → done",
      difficulty: 1,
      tags: ["present-perfect", "irregular"]
    },
    {
      id: "a2-g2-10",
      type: "multiple-choice",
      question: "They have ___ to that restaurant many times.",
      options: ["go", "went", "gone", "going"],
      correctAnswer: "gone",
      explanation: "'Go' is irregular: go → went → gone",
      explanationSpanish: "'Go' es irregular: go → went → gone",
      difficulty: 2,
      tags: ["present-perfect", "irregular"]
    },
    {
      id: "a2-g2-11",
      type: "true-false",
      question: "'I have saw the movie' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct: 'I have seen the movie'. Past participle of 'see' is 'seen'.",
      explanationSpanish: "Correcto: 'I have seen the movie'. El participio de 'see' es 'seen'.",
      difficulty: 1,
      tags: ["present-perfect", "error-correction"]
    },
    {
      id: "a2-g2-12",
      type: "multiple-choice",
      question: "She has never ___ a lie.",
      options: ["tell", "tells", "told", "telling"],
      correctAnswer: "told",
      explanation: "'Tell' is irregular: tell → told → told",
      explanationSpanish: "'Tell' es irregular: tell → told → told",
      difficulty: 2,
      tags: ["present-perfect", "never", "irregular"]
    },
    {
      id: "a2-g2-13",
      type: "multiple-choice",
      question: "Have you ___ your keys?",
      options: ["find", "found", "finding", "founded"],
      correctAnswer: "found",
      explanation: "'Find' is irregular: find → found → found",
      explanationSpanish: "'Find' es irregular: find → found → found",
      difficulty: 2,
      tags: ["present-perfect", "questions", "irregular"]
    },
    {
      id: "a2-g2-14",
      type: "multiple-choice",
      question: "I ___ already ___ breakfast.",
      options: ["have, ate", "have, eaten", "has, eaten", "had, eaten"],
      correctAnswer: "have, eaten",
      explanation: "Present Perfect: I have + past participle (eaten).",
      explanationSpanish: "Present Perfect: I have + participio pasado (eaten).",
      difficulty: 2,
      tags: ["present-perfect", "already"]
    },
    {
      id: "a2-g2-15",
      type: "multiple-choice",
      question: "How long ___ you known him?",
      options: ["do", "did", "have", "are"],
      correctAnswer: "have",
      explanation: "Present Perfect for duration: How long have you + past participle?",
      explanationSpanish: "Present Perfect para duración: How long have you + participio pasado?",
      difficulty: 2,
      tags: ["present-perfect", "duration", "how-long"]
    },
  ],

  // Comparatives and Superlatives
  "a2-gram-6": [
    {
      id: "a2-g6-1",
      type: "multiple-choice",
      question: "This book is ___ than that one.",
      options: ["interesting", "more interesting", "most interesting", "interestinger"],
      correctAnswer: "more interesting",
      explanation: "Long adjectives (3+ syllables): more + adjective for comparative.",
      explanationSpanish: "Adjetivos largos (3+ sílabas): more + adjetivo para comparativo.",
      difficulty: 1,
      tags: ["comparatives", "long-adjectives"]
    },
    {
      id: "a2-g6-2",
      type: "multiple-choice",
      question: "She is ___ girl in the class.",
      options: ["tall", "taller", "the tallest", "more tall"],
      correctAnswer: "the tallest",
      explanation: "Superlative: the + adjective-est (short adjectives).",
      explanationSpanish: "Superlativo: the + adjetivo-est (adjetivos cortos).",
      difficulty: 1,
      tags: ["superlatives"]
    },
    {
      id: "a2-g6-3",
      type: "multiple-choice",
      question: "A car is ___ than a bicycle.",
      options: ["fast", "faster", "fastest", "more fast"],
      correctAnswer: "faster",
      explanation: "Short adjectives: add -er for comparative (fast → faster).",
      explanationSpanish: "Adjetivos cortos: añade -er para comparativo (fast → faster).",
      difficulty: 1,
      tags: ["comparatives", "short-adjectives"]
    },
    {
      id: "a2-g6-4",
      type: "multiple-choice",
      question: "This is the ___ movie I've ever seen.",
      options: ["bad", "worse", "worst", "more bad"],
      correctAnswer: "worst",
      explanation: "Irregular: bad → worse → worst",
      explanationSpanish: "Irregular: bad → worse → worst",
      difficulty: 2,
      tags: ["superlatives", "irregular"]
    },
    {
      id: "a2-g6-5",
      type: "multiple-choice",
      question: "She speaks English ___ than me.",
      options: ["good", "better", "best", "more good"],
      correctAnswer: "better",
      explanation: "Irregular: good → better → best",
      explanationSpanish: "Irregular: good → better → best",
      difficulty: 2,
      tags: ["comparatives", "irregular"]
    },
    {
      id: "a2-g6-6",
      type: "multiple-choice",
      question: "Mount Everest is the ___ mountain in the world.",
      options: ["high", "higher", "highest", "more high"],
      correctAnswer: "highest",
      explanation: "Superlative of 'high': highest",
      explanationSpanish: "Superlativo de 'high': highest",
      difficulty: 1,
      tags: ["superlatives"]
    },
    {
      id: "a2-g6-7",
      type: "multiple-choice",
      question: "This exercise is ___ than the last one.",
      options: ["easy", "easier", "easiest", "more easy"],
      correctAnswer: "easier",
      explanation: "Adjectives ending in -y: change y to i and add -er (easy → easier).",
      explanationSpanish: "Adjetivos terminados en -y: cambia y por i y añade -er (easy → easier).",
      difficulty: 2,
      tags: ["comparatives", "spelling"]
    },
    {
      id: "a2-g6-8",
      type: "multiple-choice",
      question: "He is the ___ person I know.",
      options: ["funny", "funnier", "funniest", "more funny"],
      correctAnswer: "funniest",
      explanation: "Superlative of 'funny': funniest (y → iest).",
      explanationSpanish: "Superlativo de 'funny': funniest (y → iest).",
      difficulty: 2,
      tags: ["superlatives", "spelling"]
    },
    {
      id: "a2-g6-9",
      type: "multiple-choice",
      question: "The weather today is ___ than yesterday.",
      options: ["bad", "worse", "worst", "more bad"],
      correctAnswer: "worse",
      explanation: "Irregular comparative: bad → worse",
      explanationSpanish: "Comparativo irregular: bad → worse",
      difficulty: 2,
      tags: ["comparatives", "irregular"]
    },
    {
      id: "a2-g6-10",
      type: "multiple-choice",
      question: "This is the ___ restaurant in the city.",
      options: ["expensive", "more expensive", "most expensive", "expensivest"],
      correctAnswer: "most expensive",
      explanation: "Long adjectives: the most + adjective for superlative.",
      explanationSpanish: "Adjetivos largos: the most + adjetivo para superlativo.",
      difficulty: 1,
      tags: ["superlatives", "long-adjectives"]
    },
    {
      id: "a2-g6-11",
      type: "true-false",
      question: "'She is more taller than him' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct: 'She is taller than him'. Don't use 'more' with -er adjectives.",
      explanationSpanish: "Correcto: 'She is taller than him'. No uses 'more' con adjetivos -er.",
      difficulty: 1,
      tags: ["comparatives", "error-correction"]
    },
    {
      id: "a2-g6-12",
      type: "multiple-choice",
      question: "My house is ___ from the school than yours.",
      options: ["far", "farther", "farthest", "more far"],
      correctAnswer: "farther",
      explanation: "Irregular: far → farther/further → farthest/furthest",
      explanationSpanish: "Irregular: far → farther/further → farthest/furthest",
      difficulty: 2,
      tags: ["comparatives", "irregular"]
    },
    {
      id: "a2-g6-13",
      type: "multiple-choice",
      question: "This is ___ book I've ever read.",
      options: ["the better", "the best", "the gooder", "the more good"],
      correctAnswer: "the best",
      explanation: "Superlative of 'good': the best",
      explanationSpanish: "Superlativo de 'good': the best",
      difficulty: 2,
      tags: ["superlatives", "irregular"]
    },
    {
      id: "a2-g6-14",
      type: "multiple-choice",
      question: "A plane is ___ than a train.",
      options: ["quick", "quicker", "quickest", "more quicker"],
      correctAnswer: "quicker",
      explanation: "Short adjective: quick → quicker → quickest",
      explanationSpanish: "Adjetivo corto: quick → quicker → quickest",
      difficulty: 1,
      tags: ["comparatives"]
    },
    {
      id: "a2-g6-15",
      type: "multiple-choice",
      question: "Summer is ___ season of the year.",
      options: ["hot", "hotter", "the hottest", "the most hot"],
      correctAnswer: "the hottest",
      explanation: "Superlative of 'hot': the hottest (double the consonant).",
      explanationSpanish: "Superlativo de 'hot': the hottest (dobla la consonante).",
      difficulty: 2,
      tags: ["superlatives", "spelling"]
    },
  ],
};

// =====================================================
// B1 GRAMMAR EXERCISES
// =====================================================

export const b1GrammarExercises: Record<string, Exercise[]> = {
  // Past Continuous
  "b1-gram-1": [
    {
      id: "b1-g1-1",
      type: "multiple-choice",
      question: "I ___ watching TV when you called.",
      options: ["am", "was", "were", "been"],
      correctAnswer: "was",
      explanation: "Past Continuous: was/were + verb-ing. 'I' uses 'was'.",
      explanationSpanish: "Past Continuous: was/were + verbo-ing. 'I' usa 'was'.",
      difficulty: 1,
      tags: ["past-continuous", "structure"]
    },
    {
      id: "b1-g1-2",
      type: "multiple-choice",
      question: "They ___ sleeping when the alarm rang.",
      options: ["was", "were", "are", "been"],
      correctAnswer: "were",
      explanation: "Past Continuous with 'they': were + verb-ing.",
      explanationSpanish: "Past Continuous con 'they': were + verbo-ing.",
      difficulty: 1,
      tags: ["past-continuous", "plural"]
    },
    {
      id: "b1-g1-3",
      type: "multiple-choice",
      question: "While she was ___, the phone rang.",
      options: ["cook", "cooks", "cooking", "cooked"],
      correctAnswer: "cooking",
      explanation: "Past Continuous: was/were + verb-ing",
      explanationSpanish: "Past Continuous: was/were + verbo-ing",
      difficulty: 1,
      tags: ["past-continuous", "while"]
    },
    {
      id: "b1-g1-4",
      type: "multiple-choice",
      question: "What ___ you doing at 8 PM yesterday?",
      options: ["was", "were", "are", "did"],
      correctAnswer: "were",
      explanation: "Questions: What were you doing?",
      explanationSpanish: "Preguntas: What were you doing?",
      difficulty: 2,
      tags: ["past-continuous", "questions"]
    },
    {
      id: "b1-g1-5",
      type: "multiple-choice",
      question: "He wasn't ___ attention during the class.",
      options: ["pay", "pays", "paying", "paid"],
      correctAnswer: "paying",
      explanation: "Negative Past Continuous: wasn't/weren't + verb-ing",
      explanationSpanish: "Negativo Past Continuous: wasn't/weren't + verbo-ing",
      difficulty: 2,
      tags: ["past-continuous", "negative"]
    },
    {
      id: "b1-g1-6",
      type: "multiple-choice",
      question: "The sun ___ shining when we left the house.",
      options: ["is", "was", "were", "been"],
      correctAnswer: "was",
      explanation: "'The sun' is singular, so we use 'was'.",
      explanationSpanish: "'The sun' es singular, así que usamos 'was'.",
      difficulty: 1,
      tags: ["past-continuous", "third-person"]
    },
    {
      id: "b1-g1-7",
      type: "multiple-choice",
      question: "While I ___ reading, my brother was playing video games.",
      options: ["am", "was", "were", "is"],
      correctAnswer: "was",
      explanation: "Two actions happening at the same time in the past.",
      explanationSpanish: "Dos acciones ocurriendo al mismo tiempo en el pasado.",
      difficulty: 2,
      tags: ["past-continuous", "simultaneous"]
    },
    {
      id: "b1-g1-8",
      type: "multiple-choice",
      question: "The children ___ playing in the garden.",
      options: ["was", "were", "is", "are"],
      correctAnswer: "were",
      explanation: "'Children' is plural, so we use 'were'.",
      explanationSpanish: "'Children' es plural, así que usamos 'were'.",
      difficulty: 1,
      tags: ["past-continuous", "plural"]
    },
    {
      id: "b1-g1-9",
      type: "multiple-choice",
      question: "I fell asleep while I ___ studying.",
      options: ["am", "was", "were", "been"],
      correctAnswer: "was",
      explanation: "One action interrupted another in the past.",
      explanationSpanish: "Una acción interrumpió otra en el pasado.",
      difficulty: 2,
      tags: ["past-continuous", "interruption"]
    },
    {
      id: "b1-g1-10",
      type: "true-false",
      question: "'She were waiting for the bus' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct: 'She was waiting for the bus'. Use 'was' with he/she/it.",
      explanationSpanish: "Correcto: 'She was waiting for the bus'. Usa 'was' con he/she/it.",
      difficulty: 1,
      tags: ["past-continuous", "error-correction"]
    },
    {
      id: "b1-g1-11",
      type: "multiple-choice",
      question: "At this time last year, we ___ in Spain.",
      options: ["live", "lived", "were living", "are living"],
      correctAnswer: "were living",
      explanation: "Past Continuous for actions in progress at a specific past time.",
      explanationSpanish: "Past Continuous para acciones en progreso en un momento específico del pasado.",
      difficulty: 2,
      tags: ["past-continuous", "specific-time"]
    },
    {
      id: "b1-g1-12",
      type: "multiple-choice",
      question: "___ it raining when you left work?",
      options: ["Was", "Were", "Is", "Did"],
      correctAnswer: "Was",
      explanation: "Questions: Was + subject + verb-ing? (singular)",
      explanationSpanish: "Preguntas: Was + sujeto + verbo-ing? (singular)",
      difficulty: 2,
      tags: ["past-continuous", "questions"]
    },
    {
      id: "b1-g1-13",
      type: "multiple-choice",
      question: "She was talking on the phone ___ I arrived.",
      options: ["while", "when", "during", "for"],
      correctAnswer: "when",
      explanation: "'When' for a short action that interrupts a longer action.",
      explanationSpanish: "'When' para una acción corta que interrumpe una acción más larga.",
      difficulty: 2,
      tags: ["past-continuous", "when-while"]
    },
    {
      id: "b1-g1-14",
      type: "multiple-choice",
      question: "___ she was shopping, I was cleaning the house.",
      options: ["When", "While", "During", "For"],
      correctAnswer: "While",
      explanation: "'While' for two parallel actions happening at the same time.",
      explanationSpanish: "'While' para dos acciones paralelas que ocurren al mismo tiempo.",
      difficulty: 2,
      tags: ["past-continuous", "when-while"]
    },
    {
      id: "b1-g1-15",
      type: "multiple-choice",
      question: "The birds ___ singing when I woke up.",
      options: ["was", "were", "is", "are"],
      correctAnswer: "were",
      explanation: "'Birds' is plural, so we use 'were'.",
      explanationSpanish: "'Birds' es plural, así que usamos 'were'.",
      difficulty: 1,
      tags: ["past-continuous", "plural"]
    },
  ],

  // First Conditional
  "b1-gram-3": [
    {
      id: "b1-g3-1",
      type: "multiple-choice",
      question: "If it ___, we will stay at home.",
      options: ["rain", "rains", "will rain", "rained"],
      correctAnswer: "rains",
      explanation: "First Conditional: If + Present Simple, will + base verb",
      explanationSpanish: "First Conditional: If + Present Simple, will + verbo base",
      difficulty: 1,
      tags: ["first-conditional", "structure"]
    },
    {
      id: "b1-g3-2",
      type: "multiple-choice",
      question: "If you study hard, you ___ pass the exam.",
      options: ["pass", "passing", "will pass", "passed"],
      correctAnswer: "will pass",
      explanation: "First Conditional: If-clause (present) + main clause (will + verb)",
      explanationSpanish: "First Conditional: cláusula If (presente) + cláusula principal (will + verbo)",
      difficulty: 1,
      tags: ["first-conditional", "will"]
    },
    {
      id: "b1-g3-3",
      type: "multiple-choice",
      question: "She will be angry if you ___ late.",
      options: ["are", "will be", "were", "been"],
      correctAnswer: "are",
      explanation: "First Conditional: Use present simple after 'if', even for future meaning.",
      explanationSpanish: "First Conditional: Usa present simple después de 'if', incluso para significado futuro.",
      difficulty: 2,
      tags: ["first-conditional", "present-after-if"]
    },
    {
      id: "b1-g3-4",
      type: "multiple-choice",
      question: "If I see him, I ___ him your message.",
      options: ["give", "gave", "will give", "giving"],
      correctAnswer: "will give",
      explanation: "First Conditional for real/possible future situations.",
      explanationSpanish: "First Conditional para situaciones futuras reales/posibles.",
      difficulty: 1,
      tags: ["first-conditional", "will"]
    },
    {
      id: "b1-g3-5",
      type: "multiple-choice",
      question: "We won't go to the beach if the weather ___ bad.",
      options: ["is", "will be", "was", "were"],
      correctAnswer: "is",
      explanation: "Present simple in the if-clause, even when talking about the future.",
      explanationSpanish: "Present simple en la cláusula if, incluso cuando hablamos del futuro.",
      difficulty: 2,
      tags: ["first-conditional", "negative"]
    },
    {
      id: "b1-g3-6",
      type: "multiple-choice",
      question: "If he ___ early, we can go to the cinema.",
      options: ["arrive", "arrives", "will arrive", "arrived"],
      correctAnswer: "arrives",
      explanation: "Third person singular: arrives (with -s)",
      explanationSpanish: "Tercera persona singular: arrives (con -s)",
      difficulty: 2,
      tags: ["first-conditional", "third-person"]
    },
    {
      id: "b1-g3-7",
      type: "multiple-choice",
      question: "What will you do if you ___ the lottery?",
      options: ["win", "wins", "will win", "won"],
      correctAnswer: "win",
      explanation: "First Conditional question: If + present simple",
      explanationSpanish: "Pregunta First Conditional: If + present simple",
      difficulty: 2,
      tags: ["first-conditional", "questions"]
    },
    {
      id: "b1-g3-8",
      type: "multiple-choice",
      question: "If they don't hurry, they ___ the train.",
      options: ["miss", "missed", "will miss", "missing"],
      correctAnswer: "will miss",
      explanation: "Negative if-clause: If + don't/doesn't + base verb",
      explanationSpanish: "Cláusula if negativa: If + don't/doesn't + verbo base",
      difficulty: 2,
      tags: ["first-conditional", "negative"]
    },
    {
      id: "b1-g3-9",
      type: "true-false",
      question: "'If it will rain, I will stay home' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct: 'If it rains, I will stay home'. Don't use 'will' in the if-clause.",
      explanationSpanish: "Correcto: 'If it rains, I will stay home'. No uses 'will' en la cláusula if.",
      difficulty: 2,
      tags: ["first-conditional", "error-correction"]
    },
    {
      id: "b1-g3-10",
      type: "multiple-choice",
      question: "Unless you hurry, you ___ be late.",
      options: ["won't", "will", "don't", "can"],
      correctAnswer: "will",
      explanation: "'Unless' = 'if not'. Unless you hurry = If you don't hurry",
      explanationSpanish: "'Unless' = 'if not'. Unless you hurry = If you don't hurry",
      difficulty: 3,
      tags: ["first-conditional", "unless"]
    },
    {
      id: "b1-g3-11",
      type: "multiple-choice",
      question: "If you heat water to 100°C, it ___.",
      options: ["boil", "boils", "will boil", "boiled"],
      correctAnswer: "boils",
      explanation: "Zero Conditional for facts: If + present, present (always true).",
      explanationSpanish: "Zero Conditional para hechos: If + presente, presente (siempre verdad).",
      difficulty: 2,
      tags: ["zero-conditional", "facts"]
    },
    {
      id: "b1-g3-12",
      type: "multiple-choice",
      question: "I'll call you if I ___ any problems.",
      options: ["have", "has", "will have", "having"],
      correctAnswer: "have",
      explanation: "Present simple after 'if'.",
      explanationSpanish: "Present simple después de 'if'.",
      difficulty: 1,
      tags: ["first-conditional", "structure"]
    },
    {
      id: "b1-g3-13",
      type: "multiple-choice",
      question: "If she ___ time, she will help you.",
      options: ["have", "has", "will have", "having"],
      correctAnswer: "has",
      explanation: "Third person singular (she) + present simple = has",
      explanationSpanish: "Tercera persona singular (she) + present simple = has",
      difficulty: 2,
      tags: ["first-conditional", "third-person"]
    },
    {
      id: "b1-g3-14",
      type: "multiple-choice",
      question: "You will feel better if you ___ some rest.",
      options: ["get", "gets", "will get", "getting"],
      correctAnswer: "get",
      explanation: "'You' uses the base form of the verb (get).",
      explanationSpanish: "'You' usa la forma base del verbo (get).",
      difficulty: 1,
      tags: ["first-conditional", "structure"]
    },
    {
      id: "b1-g3-15",
      type: "multiple-choice",
      question: "If I ___ you, I would accept the job. (Second Conditional)",
      options: ["am", "was", "were", "be"],
      correctAnswer: "were",
      explanation: "Second Conditional: If + Past Simple (were for all persons in formal usage).",
      explanationSpanish: "Second Conditional: If + Past Simple (were para todas las personas en uso formal).",
      difficulty: 3,
      tags: ["second-conditional", "structure"]
    },
  ],
};

// =====================================================
// B2 GRAMMAR EXERCISES
// =====================================================

export const b2GrammarExercises: Record<string, Exercise[]> = {
  // Mixed Conditionals
  "b2-gram-2": [
    {
      id: "b2-g2-1",
      type: "multiple-choice",
      question: "If I ___ harder last year, I would have a better job now.",
      options: ["study", "studied", "had studied", "would study"],
      correctAnswer: "had studied",
      explanation: "Mixed Conditional (3rd → 2nd): If + Past Perfect, would + base verb (past cause, present result).",
      explanationSpanish: "Mixed Conditional (3° → 2°): If + Past Perfect, would + verbo base (causa pasada, resultado presente).",
      difficulty: 3,
      tags: ["mixed-conditionals", "third-to-second"]
    },
    {
      id: "b2-g2-2",
      type: "multiple-choice",
      question: "If she were more careful, she ___ the accident yesterday.",
      options: ["won't have", "wouldn't have had", "didn't have", "wouldn't have"],
      correctAnswer: "wouldn't have had",
      explanation: "Mixed Conditional (2nd → 3rd): If + Past Simple, would have + past participle (general condition, past result).",
      explanationSpanish: "Mixed Conditional (2° → 3°): If + Past Simple, would have + participio pasado (condición general, resultado pasado).",
      difficulty: 3,
      tags: ["mixed-conditionals", "second-to-third"]
    },
    {
      id: "b2-g2-3",
      type: "multiple-choice",
      question: "If I had saved more money, I ___ afford to travel now.",
      options: ["can", "could", "could have", "will"],
      correctAnswer: "could",
      explanation: "Mixed Conditional: past condition → present result. Use 'could' for present ability.",
      explanationSpanish: "Mixed Conditional: condición pasada → resultado presente. Usa 'could' para habilidad presente.",
      difficulty: 3,
      tags: ["mixed-conditionals", "modal-verbs"]
    },
    {
      id: "b2-g2-4",
      type: "multiple-choice",
      question: "He wouldn't be so tired if he ___ so late last night.",
      options: ["doesn't stay", "didn't stay", "hadn't stayed", "wouldn't stay"],
      correctAnswer: "hadn't stayed",
      explanation: "Past cause affecting present state: If + Past Perfect, would + base verb.",
      explanationSpanish: "Causa pasada que afecta el estado presente: If + Past Perfect, would + verbo base.",
      difficulty: 3,
      tags: ["mixed-conditionals", "structure"]
    },
    {
      id: "b2-g2-5",
      type: "multiple-choice",
      question: "If you were a better driver, you ___ that car last month.",
      options: ["wouldn't crash", "wouldn't have crashed", "didn't crash", "haven't crashed"],
      correctAnswer: "wouldn't have crashed",
      explanation: "General trait → past consequence. Would have + past participle for past result.",
      explanationSpanish: "Rasgo general → consecuencia pasada. Would have + participio pasado para resultado pasado.",
      difficulty: 3,
      tags: ["mixed-conditionals", "second-to-third"]
    },
    {
      id: "b2-g2-6",
      type: "multiple-choice",
      question: "If I ___ you, I wouldn't have said that.",
      options: ["am", "was", "were", "had been"],
      correctAnswer: "were",
      explanation: "If I were you (subjunctive) for hypothetical advice about past action.",
      explanationSpanish: "If I were you (subjuntivo) para consejo hipotético sobre acción pasada.",
      difficulty: 2,
      tags: ["conditionals", "subjunctive"]
    },
    {
      id: "b2-g2-7",
      type: "multiple-choice",
      question: "She would be fluent in English now if she ___ studying it as a child.",
      options: ["starts", "started", "had started", "would start"],
      correctAnswer: "had started",
      explanation: "Past action affecting present state.",
      explanationSpanish: "Acción pasada que afecta el estado presente.",
      difficulty: 3,
      tags: ["mixed-conditionals", "third-to-second"]
    },
    {
      id: "b2-g2-8",
      type: "multiple-choice",
      question: "If they ___ rich, they would have bought that house last year.",
      options: ["are", "were", "had been", "would be"],
      correctAnswer: "were",
      explanation: "Permanent state → past action. Use Past Simple (were) for the condition.",
      explanationSpanish: "Estado permanente → acción pasada. Usa Past Simple (were) para la condición.",
      difficulty: 3,
      tags: ["mixed-conditionals", "second-to-third"]
    },
    {
      id: "b2-g2-9",
      type: "true-false",
      question: "'If I would have studied, I would pass the exam' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct: 'If I had studied, I would have passed/would pass'. Don't use 'would' in the if-clause.",
      explanationSpanish: "Correcto: 'If I had studied, I would have passed/would pass'. No uses 'would' en la cláusula if.",
      difficulty: 2,
      tags: ["conditionals", "error-correction"]
    },
    {
      id: "b2-g2-10",
      type: "multiple-choice",
      question: "I wouldn't be here today if my parents ___ emigrated.",
      options: ["didn't", "don't", "hadn't", "wouldn't"],
      correctAnswer: "hadn't",
      explanation: "Third conditional structure: If + had(n't) + past participle.",
      explanationSpanish: "Estructura third conditional: If + had(n't) + participio pasado.",
      difficulty: 2,
      tags: ["third-conditional", "negative"]
    },
    {
      id: "b2-g2-11",
      type: "multiple-choice",
      question: "If he ___ a doctor, he would have helped the injured man.",
      options: ["is", "was", "were", "had been"],
      correctAnswer: "were",
      explanation: "General condition (he's not a doctor) → past result.",
      explanationSpanish: "Condición general (él no es médico) → resultado pasado.",
      difficulty: 3,
      tags: ["mixed-conditionals", "second-to-third"]
    },
    {
      id: "b2-g2-12",
      type: "multiple-choice",
      question: "If I had known about the party, I ___ you a gift.",
      options: ["bring", "brought", "would bring", "would have brought"],
      correctAnswer: "would have brought",
      explanation: "Third Conditional for unreal past: would have + past participle.",
      explanationSpanish: "Third Conditional para pasado irreal: would have + participio pasado.",
      difficulty: 2,
      tags: ["third-conditional", "structure"]
    },
    {
      id: "b2-g2-13",
      type: "multiple-choice",
      question: "Had I known earlier, I ___ differently.",
      options: ["act", "acted", "would act", "would have acted"],
      correctAnswer: "would have acted",
      explanation: "Inverted conditional: Had I known = If I had known.",
      explanationSpanish: "Condicional invertido: Had I known = If I had known.",
      difficulty: 3,
      tags: ["conditionals", "inversion"]
    },
    {
      id: "b2-g2-14",
      type: "multiple-choice",
      question: "Were she here, she ___ what to do.",
      options: ["knows", "knew", "would know", "would have known"],
      correctAnswer: "would know",
      explanation: "Inverted second conditional: Were she = If she were.",
      explanationSpanish: "Second conditional invertido: Were she = If she were.",
      difficulty: 3,
      tags: ["second-conditional", "inversion"]
    },
    {
      id: "b2-g2-15",
      type: "multiple-choice",
      question: "If you had followed my advice, you ___ in trouble now.",
      options: ["aren't", "weren't", "wouldn't be", "won't be"],
      correctAnswer: "wouldn't be",
      explanation: "Mixed conditional: past condition → present result.",
      explanationSpanish: "Mixed conditional: condición pasada → resultado presente.",
      difficulty: 3,
      tags: ["mixed-conditionals", "third-to-second"]
    },
  ],
};

// Helper function to get exercises for a skill
export function getAdvancedExercisesBySkillId(skillId: string, level: CEFRLevel): Exercise[] {
  switch (level) {
    case 'A2':
      return a2GrammarExercises[skillId] || [];
    case 'B1':
      return b1GrammarExercises[skillId] || [];
    case 'B2':
      return b2GrammarExercises[skillId] || [];
    default:
      return [];
  }
}

export const allAdvancedExercises = {
  a2Grammar: a2GrammarExercises,
  b1Grammar: b1GrammarExercises,
  b2Grammar: b2GrammarExercises,
};
