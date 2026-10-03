// Complete Grammar Curriculum Exercises A1-C1
// Based on CEFR standards

import { GrammarExercise } from "./grammarExercisesExpanded";

// ============================================
// A1 BEGINNER - Basic survival grammar
// ============================================

export const a1GrammarCurriculum: GrammarExercise[] = [
  // TO BE - Affirmative
  {
    id: "a1-tobe-1",
    type: "multiple-choice",
    question: "I _____ a student.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "am",
    explanation: "Use 'am' with 'I'. I am = I'm",
    explanationSpanish: "Usa 'am' con 'I'. I am = I'm",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-2",
    type: "multiple-choice",
    question: "She _____ my teacher.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: "Use 'is' with he/she/it. She is = She's",
    explanationSpanish: "Usa 'is' con he/she/it. She is = She's",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-3",
    type: "multiple-choice",
    question: "They _____ from Mexico.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are",
    explanation: "Use 'are' with they/we/you. They are = They're",
    explanationSpanish: "Usa 'are' con they/we/you. They are = They're",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-4",
    type: "multiple-choice",
    question: "The cat _____ on the sofa.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: "Use 'is' with singular nouns (the cat = it).",
    explanationSpanish: "Usa 'is' con sustantivos singulares (the cat = it).",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-5",
    type: "multiple-choice",
    question: "We _____ happy today.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are",
    explanation: "Use 'are' with 'we'. We are = We're",
    explanationSpanish: "Usa 'are' con 'we'. We are = We're",
    category: "to-be",
    difficulty: "easy"
  },
  // TO BE - Negative
  {
    id: "a1-tobe-6",
    type: "multiple-choice",
    question: "I _____ tired. I slept well.",
    options: ["am not", "is not", "are not", "not am"],
    correctAnswer: "am not",
    explanation: "Negative with 'I': I am not = I'm not",
    explanationSpanish: "Negativo con 'I': I am not = I'm not",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-7",
    type: "multiple-choice",
    question: "He _____ at home. He's at work.",
    options: ["am not", "isn't", "aren't", "not is"],
    correctAnswer: "isn't",
    explanation: "Negative with 'he': He is not = He isn't",
    explanationSpanish: "Negativo con 'he': He is not = He isn't",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-8",
    type: "multiple-choice",
    question: "The books _____ on the table.",
    options: ["am not", "isn't", "aren't", "not are"],
    correctAnswer: "aren't",
    explanation: "Negative with plural: They are not = They aren't",
    explanationSpanish: "Negativo con plural: They are not = They aren't",
    category: "to-be",
    difficulty: "easy"
  },
  // TO BE - Questions
  {
    id: "a1-tobe-9",
    type: "multiple-choice",
    question: "_____ you a doctor?",
    options: ["Am", "Is", "Are", "Be"],
    correctAnswer: "Are",
    explanation: "Questions: Are you...? Yes, I am. / No, I'm not.",
    explanationSpanish: "Preguntas: Are you...? Yes, I am. / No, I'm not.",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-tobe-10",
    type: "multiple-choice",
    question: "_____ she your sister?",
    options: ["Am", "Is", "Are", "Be"],
    correctAnswer: "Is",
    explanation: "Questions with she/he/it: Is she...?",
    explanationSpanish: "Preguntas con she/he/it: Is she...?",
    category: "to-be",
    difficulty: "easy"
  },

  // PRESENT SIMPLE - Affirmative
  {
    id: "a1-ps-1",
    type: "multiple-choice",
    question: "I _____ coffee every morning.",
    options: ["drink", "drinks", "drinking", "drinked"],
    correctAnswer: "drink",
    explanation: "Present Simple with I/you/we/they: base form (drink).",
    explanationSpanish: "Presente Simple con I/you/we/they: forma base (drink).",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-2",
    type: "multiple-choice",
    question: "She _____ to school every day.",
    options: ["go", "goes", "going", "goed"],
    correctAnswer: "goes",
    explanation: "Present Simple with he/she/it: add -s or -es (go → goes).",
    explanationSpanish: "Presente Simple con he/she/it: añade -s o -es (go → goes).",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-3",
    type: "multiple-choice",
    question: "He _____ English very well.",
    options: ["speak", "speaks", "speaking", "speaked"],
    correctAnswer: "speaks",
    explanation: "Third person singular adds -s: he speaks.",
    explanationSpanish: "La tercera persona singular añade -s: he speaks.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-4",
    type: "multiple-choice",
    question: "They _____ football on Saturdays.",
    options: ["play", "plays", "playing", "played"],
    correctAnswer: "play",
    explanation: "With 'they', use the base form: they play.",
    explanationSpanish: "Con 'they', usa la forma base: they play.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-5",
    type: "multiple-choice",
    question: "My sister _____ in a hospital.",
    options: ["work", "works", "working", "worked"],
    correctAnswer: "works",
    explanation: "My sister = she, so we add -s: works.",
    explanationSpanish: "My sister = she, así que añadimos -s: works.",
    category: "present-simple",
    difficulty: "easy"
  },
  // PRESENT SIMPLE - Negative
  {
    id: "a1-ps-6",
    type: "multiple-choice",
    question: "I _____ meat. I'm vegetarian.",
    options: ["don't eat", "doesn't eat", "not eat", "no eat"],
    correctAnswer: "don't eat",
    explanation: "Negative with I/you/we/they: don't + base verb.",
    explanationSpanish: "Negativo con I/you/we/they: don't + verbo base.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-7",
    type: "multiple-choice",
    question: "He _____ like pizza.",
    options: ["don't", "doesn't", "not", "no"],
    correctAnswer: "doesn't",
    explanation: "Negative with he/she/it: doesn't + base verb.",
    explanationSpanish: "Negativo con he/she/it: doesn't + verbo base.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-8",
    type: "multiple-choice",
    question: "She _____ Spanish.",
    options: ["don't speak", "doesn't speak", "not speaks", "no speak"],
    correctAnswer: "doesn't speak",
    explanation: "Negative: She doesn't speak (not 'speaks').",
    explanationSpanish: "Negativo: She doesn't speak (no 'speaks').",
    category: "present-simple",
    difficulty: "easy"
  },
  // PRESENT SIMPLE - Questions
  {
    id: "a1-ps-9",
    type: "multiple-choice",
    question: "_____ you like chocolate?",
    options: ["Do", "Does", "Is", "Are"],
    correctAnswer: "Do",
    explanation: "Questions with I/you/we/they: Do + subject + base verb?",
    explanationSpanish: "Preguntas con I/you/we/they: Do + sujeto + verbo base?",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-10",
    type: "multiple-choice",
    question: "_____ she work here?",
    options: ["Do", "Does", "Is", "Are"],
    correctAnswer: "Does",
    explanation: "Questions with he/she/it: Does + subject + base verb?",
    explanationSpanish: "Preguntas con he/she/it: Does + sujeto + verbo base?",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-ps-11",
    type: "multiple-choice",
    question: "What time _____ the movie start?",
    options: ["do", "does", "is", "are"],
    correctAnswer: "does",
    explanation: "The movie = it, so use 'does' for questions.",
    explanationSpanish: "The movie = it, así que usa 'does' para preguntas.",
    category: "present-simple",
    difficulty: "easy"
  },

  // PAST SIMPLE - was/were
  {
    id: "a1-past-1",
    type: "multiple-choice",
    question: "I _____ at home yesterday.",
    options: ["was", "were", "am", "is"],
    correctAnswer: "was",
    explanation: "Past of 'am' is 'was'. I was at home.",
    explanationSpanish: "El pasado de 'am' es 'was'. I was at home.",
    category: "past-simple-be",
    difficulty: "easy"
  },
  {
    id: "a1-past-2",
    type: "multiple-choice",
    question: "They _____ very happy at the party.",
    options: ["was", "were", "are", "is"],
    correctAnswer: "were",
    explanation: "Past of 'are' is 'were'. They were happy.",
    explanationSpanish: "El pasado de 'are' es 'were'. They were happy.",
    category: "past-simple-be",
    difficulty: "easy"
  },
  {
    id: "a1-past-3",
    type: "multiple-choice",
    question: "The weather _____ beautiful last weekend.",
    options: ["was", "were", "is", "are"],
    correctAnswer: "was",
    explanation: "The weather = it, so use 'was'.",
    explanationSpanish: "The weather = it, así que usa 'was'.",
    category: "past-simple-be",
    difficulty: "easy"
  },
  {
    id: "a1-past-4",
    type: "multiple-choice",
    question: "_____ you at school yesterday?",
    options: ["Was", "Were", "Are", "Is"],
    correctAnswer: "Were",
    explanation: "Questions in past: Were you...?",
    explanationSpanish: "Preguntas en pasado: Were you...?",
    category: "past-simple-be",
    difficulty: "easy"
  },
  {
    id: "a1-past-5",
    type: "multiple-choice",
    question: "She _____ sick last week.",
    options: ["wasn't", "weren't", "isn't", "aren't"],
    correctAnswer: "wasn't",
    explanation: "Negative past with she: She wasn't (was not).",
    explanationSpanish: "Negativo pasado con she: She wasn't (was not).",
    category: "past-simple-be",
    difficulty: "easy"
  },

  // CAN/CAN'T
  {
    id: "a1-can-1",
    type: "multiple-choice",
    question: "I _____ swim very well.",
    options: ["can", "can to", "cans", "am can"],
    correctAnswer: "can",
    explanation: "Can + base verb (no 'to'). I can swim.",
    explanationSpanish: "Can + verbo base (sin 'to'). I can swim.",
    category: "can-ability",
    difficulty: "easy"
  },
  {
    id: "a1-can-2",
    type: "multiple-choice",
    question: "She _____ speak three languages.",
    options: ["can", "cans", "can to", "is can"],
    correctAnswer: "can",
    explanation: "Can is the same for all subjects: she can, I can, they can.",
    explanationSpanish: "Can es igual para todos: she can, I can, they can.",
    category: "can-ability",
    difficulty: "easy"
  },
  {
    id: "a1-can-3",
    type: "multiple-choice",
    question: "I _____ drive. I don't have a license.",
    options: ["can't", "can not to", "no can", "don't can"],
    correctAnswer: "can't",
    explanation: "Negative: can't (cannot) + base verb.",
    explanationSpanish: "Negativo: can't (cannot) + verbo base.",
    category: "can-ability",
    difficulty: "easy"
  },
  {
    id: "a1-can-4",
    type: "multiple-choice",
    question: "_____ you help me, please?",
    options: ["Can", "Do can", "Are can", "Can to"],
    correctAnswer: "Can",
    explanation: "Questions: Can + subject + base verb?",
    explanationSpanish: "Preguntas: Can + sujeto + verbo base?",
    category: "can-ability",
    difficulty: "easy"
  },
  {
    id: "a1-can-5",
    type: "multiple-choice",
    question: "My grandfather _____ use a computer. It's too difficult.",
    options: ["can't", "can", "don't can", "isn't can"],
    correctAnswer: "can't",
    explanation: "Can't = not able to do something.",
    explanationSpanish: "Can't = no poder hacer algo.",
    category: "can-ability",
    difficulty: "easy"
  },

  // POSSESSIVE ADJECTIVES
  {
    id: "a1-poss-1",
    type: "multiple-choice",
    question: "This is _____ book. (I)",
    options: ["my", "me", "I", "mine"],
    correctAnswer: "my",
    explanation: "I → my (possessive adjective before a noun).",
    explanationSpanish: "I → my (adjetivo posesivo antes de un sustantivo).",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-poss-2",
    type: "multiple-choice",
    question: "Is this _____ car? (you)",
    options: ["your", "you", "yours", "you're"],
    correctAnswer: "your",
    explanation: "You → your. Is this your car?",
    explanationSpanish: "You → your. Is this your car?",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-poss-3",
    type: "multiple-choice",
    question: "She loves _____ children.",
    options: ["her", "she", "hers", "his"],
    correctAnswer: "her",
    explanation: "She → her. She loves her children.",
    explanationSpanish: "She → her. She loves her children.",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-poss-4",
    type: "multiple-choice",
    question: "He is with _____ friends.",
    options: ["his", "he", "him", "her"],
    correctAnswer: "his",
    explanation: "He → his. He is with his friends.",
    explanationSpanish: "He → his. He is with his friends.",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-poss-5",
    type: "multiple-choice",
    question: "The dog is eating _____ food.",
    options: ["its", "it's", "his", "her"],
    correctAnswer: "its",
    explanation: "It → its (no apostrophe for possessive).",
    explanationSpanish: "It → its (sin apóstrofo para posesivo).",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-poss-6",
    type: "multiple-choice",
    question: "We love _____ new house.",
    options: ["our", "we", "us", "ours"],
    correctAnswer: "our",
    explanation: "We → our. We love our new house.",
    explanationSpanish: "We → our. We love our new house.",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-poss-7",
    type: "multiple-choice",
    question: "They are washing _____ car.",
    options: ["their", "they", "them", "theirs"],
    correctAnswer: "their",
    explanation: "They → their. They are washing their car.",
    explanationSpanish: "They → their. They are washing their car.",
    category: "possessives",
    difficulty: "easy"
  },

  // BASIC PREPOSITIONS
  {
    id: "a1-prep-1",
    type: "multiple-choice",
    question: "The book is _____ the table.",
    options: ["on", "in", "at", "to"],
    correctAnswer: "on",
    explanation: "On = on the surface of something.",
    explanationSpanish: "On = sobre la superficie de algo.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-2",
    type: "multiple-choice",
    question: "She lives _____ London.",
    options: ["in", "on", "at", "to"],
    correctAnswer: "in",
    explanation: "In = inside cities, countries, rooms.",
    explanationSpanish: "In = dentro de ciudades, países, habitaciones.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-3",
    type: "multiple-choice",
    question: "I'll meet you _____ the bus stop.",
    options: ["at", "in", "on", "to"],
    correctAnswer: "at",
    explanation: "At = specific point/location.",
    explanationSpanish: "At = punto/ubicación específica.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-4",
    type: "multiple-choice",
    question: "The cat is _____ the box.",
    options: ["in", "on", "at", "under"],
    correctAnswer: "in",
    explanation: "In = inside something.",
    explanationSpanish: "In = dentro de algo.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-5",
    type: "multiple-choice",
    question: "The picture is _____ the wall.",
    options: ["on", "in", "at", "to"],
    correctAnswer: "on",
    explanation: "On = attached to a vertical surface.",
    explanationSpanish: "On = pegado a una superficie vertical.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-6",
    type: "multiple-choice",
    question: "I wake up _____ 7 o'clock.",
    options: ["at", "in", "on", "by"],
    correctAnswer: "at",
    explanation: "At = specific time. At 7 o'clock.",
    explanationSpanish: "At = hora específica. At 7 o'clock.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-7",
    type: "multiple-choice",
    question: "My birthday is _____ June.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "in",
    explanation: "In = months, years, seasons. In June.",
    explanationSpanish: "In = meses, años, estaciones. In June.",
    category: "prepositions",
    difficulty: "easy"
  },
  {
    id: "a1-prep-8",
    type: "multiple-choice",
    question: "I have English class _____ Monday.",
    options: ["on", "in", "at", "by"],
    correctAnswer: "on",
    explanation: "On = days of the week. On Monday.",
    explanationSpanish: "On = días de la semana. On Monday.",
    category: "prepositions",
    difficulty: "easy"
  },
];

// ============================================
// A2 ELEMENTARY - Routine matters grammar
// ============================================

export const a2GrammarCurriculum: GrammarExercise[] = [
  // PAST SIMPLE - Regular verbs
  {
    id: "a2-past-reg-1",
    type: "multiple-choice",
    question: "I _____ (walk) to work yesterday.",
    options: ["walked", "walk", "walking", "walks"],
    correctAnswer: "walked",
    explanation: "Past Simple regular: add -ed. Walk → walked.",
    explanationSpanish: "Pasado Simple regular: añade -ed. Walk → walked.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-past-reg-2",
    type: "multiple-choice",
    question: "She _____ (study) English last night.",
    options: ["studied", "studyed", "studed", "study"],
    correctAnswer: "studied",
    explanation: "Verbs ending in consonant + y: change y to i, add -ed.",
    explanationSpanish: "Verbos que terminan en consonante + y: cambia y por i, añade -ed.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-past-reg-3",
    type: "multiple-choice",
    question: "They _____ (stop) at the red light.",
    options: ["stopped", "stoped", "stopd", "stops"],
    correctAnswer: "stopped",
    explanation: "Short verbs (CVC): double the last consonant + -ed.",
    explanationSpanish: "Verbos cortos (CVC): dobla la última consonante + -ed.",
    category: "past-simple",
    difficulty: "easy"
  },
  // PAST SIMPLE - Irregular verbs
  {
    id: "a2-past-irr-1",
    type: "multiple-choice",
    question: "I _____ (go) to the cinema last weekend.",
    options: ["went", "goed", "gone", "going"],
    correctAnswer: "went",
    explanation: "Go is irregular: go → went → gone.",
    explanationSpanish: "Go es irregular: go → went → gone.",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-past-irr-2",
    type: "multiple-choice",
    question: "She _____ (buy) a new dress.",
    options: ["bought", "buyed", "buyd", "buying"],
    correctAnswer: "bought",
    explanation: "Buy is irregular: buy → bought → bought.",
    explanationSpanish: "Buy es irregular: buy → bought → bought.",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-past-irr-3",
    type: "multiple-choice",
    question: "We _____ (eat) pizza for dinner.",
    options: ["ate", "eated", "eating", "eaten"],
    correctAnswer: "ate",
    explanation: "Eat is irregular: eat → ate → eaten.",
    explanationSpanish: "Eat es irregular: eat → ate → eaten.",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-past-irr-4",
    type: "multiple-choice",
    question: "He _____ (see) a famous actor at the airport.",
    options: ["saw", "seed", "seen", "seeing"],
    correctAnswer: "saw",
    explanation: "See is irregular: see → saw → seen.",
    explanationSpanish: "See es irregular: see → saw → seen.",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-past-irr-5",
    type: "multiple-choice",
    question: "I _____ (have) a great time at the party.",
    options: ["had", "haved", "having", "has"],
    correctAnswer: "had",
    explanation: "Have is irregular: have → had → had.",
    explanationSpanish: "Have es irregular: have → had → had.",
    category: "past-simple",
    difficulty: "medium"
  },
  // PAST SIMPLE - Negative & Questions
  {
    id: "a2-past-neg-1",
    type: "multiple-choice",
    question: "I _____ the movie. It was boring.",
    options: ["didn't like", "don't like", "liked not", "not liked"],
    correctAnswer: "didn't like",
    explanation: "Negative Past Simple: didn't + base verb.",
    explanationSpanish: "Negativo Pasado Simple: didn't + verbo base.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-past-neg-2",
    type: "multiple-choice",
    question: "She _____ to the party last night.",
    options: ["didn't go", "didn't went", "not went", "don't go"],
    correctAnswer: "didn't go",
    explanation: "After 'didn't', use base form (go, not went).",
    explanationSpanish: "Después de 'didn't', usa forma base (go, no went).",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-past-q-1",
    type: "multiple-choice",
    question: "_____ you _____ the email?",
    options: ["Did/send", "Did/sent", "Do/send", "Does/send"],
    correctAnswer: "Did/send",
    explanation: "Questions: Did + subject + base verb?",
    explanationSpanish: "Preguntas: Did + sujeto + verbo base?",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-past-q-2",
    type: "multiple-choice",
    question: "What time _____ you _____ home?",
    options: ["did/get", "did/got", "do/get", "were/get"],
    correctAnswer: "did/get",
    explanation: "Question word + did + subject + base verb?",
    explanationSpanish: "Palabra interrogativa + did + sujeto + verbo base?",
    category: "past-simple",
    difficulty: "medium"
  },

  // COMPARATIVES
  {
    id: "a2-comp-1",
    type: "multiple-choice",
    question: "Tokyo is _____ than London. (big)",
    options: ["bigger", "more big", "biger", "biggest"],
    correctAnswer: "bigger",
    explanation: "Short adjectives: add -er. Big → bigger (double consonant).",
    explanationSpanish: "Adjetivos cortos: añade -er. Big → bigger (dobla consonante).",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-2",
    type: "multiple-choice",
    question: "This book is _____ than that one. (interesting)",
    options: ["more interesting", "interestinger", "most interesting", "interesting"],
    correctAnswer: "more interesting",
    explanation: "Long adjectives (3+ syllables): more + adjective.",
    explanationSpanish: "Adjetivos largos (3+ sílabas): more + adjetivo.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-3",
    type: "multiple-choice",
    question: "She is _____ than her sister. (tall)",
    options: ["taller", "more tall", "tallest", "most tall"],
    correctAnswer: "taller",
    explanation: "Tall → taller. Short adjective + -er.",
    explanationSpanish: "Tall → taller. Adjetivo corto + -er.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-4",
    type: "multiple-choice",
    question: "This exercise is _____ than the last one. (easy)",
    options: ["easier", "more easy", "easyer", "easiest"],
    correctAnswer: "easier",
    explanation: "Adjectives ending in -y: change y to i, add -er.",
    explanationSpanish: "Adjetivos que terminan en -y: cambia y por i, añade -er.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-5",
    type: "multiple-choice",
    question: "English is _____ than I expected. (difficult)",
    options: ["more difficult", "difficulter", "most difficult", "difficult"],
    correctAnswer: "more difficult",
    explanation: "Difficult has 3+ syllables: more difficult.",
    explanationSpanish: "Difficult tiene 3+ sílabas: more difficult.",
    category: "comparatives",
    difficulty: "easy"
  },
  // SUPERLATIVES
  {
    id: "a2-sup-1",
    type: "multiple-choice",
    question: "Mount Everest is _____ mountain in the world. (high)",
    options: ["the highest", "the higher", "the most high", "highest"],
    correctAnswer: "the highest",
    explanation: "Superlative: the + adjective-est for short adjectives.",
    explanationSpanish: "Superlativo: the + adjetivo-est para adjetivos cortos.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-sup-2",
    type: "multiple-choice",
    question: "This is _____ movie I've ever seen. (good)",
    options: ["the best", "the goodest", "the most good", "the better"],
    correctAnswer: "the best",
    explanation: "Good is irregular: good → better → the best.",
    explanationSpanish: "Good es irregular: good → better → the best.",
    category: "superlatives",
    difficulty: "medium"
  },
  {
    id: "a2-sup-3",
    type: "multiple-choice",
    question: "She is _____ student in the class. (intelligent)",
    options: ["the most intelligent", "the intelligentest", "most intelligent", "intelligent"],
    correctAnswer: "the most intelligent",
    explanation: "Long adjectives: the most + adjective.",
    explanationSpanish: "Adjetivos largos: the most + adjetivo.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-sup-4",
    type: "multiple-choice",
    question: "This is _____ day of my life. (bad)",
    options: ["the worst", "the baddest", "the most bad", "the worse"],
    correctAnswer: "the worst",
    explanation: "Bad is irregular: bad → worse → the worst.",
    explanationSpanish: "Bad es irregular: bad → worse → the worst.",
    category: "superlatives",
    difficulty: "medium"
  },

  // GOING TO - Future
  {
    id: "a2-going-1",
    type: "multiple-choice",
    question: "I _____ visit my parents next weekend.",
    options: ["am going to", "going to", "will going to", "am going"],
    correctAnswer: "am going to",
    explanation: "Going to for planned future: am/is/are + going to + verb.",
    explanationSpanish: "Going to para futuro planeado: am/is/are + going to + verbo.",
    category: "going-to",
    difficulty: "easy"
  },
  {
    id: "a2-going-2",
    type: "multiple-choice",
    question: "She _____ study medicine next year.",
    options: ["is going to", "are going to", "going to", "will going to"],
    correctAnswer: "is going to",
    explanation: "She + is going to + verb (planned intention).",
    explanationSpanish: "She + is going to + verbo (intención planeada).",
    category: "going-to",
    difficulty: "easy"
  },
  {
    id: "a2-going-3",
    type: "multiple-choice",
    question: "Look at those clouds! It _____ rain.",
    options: ["is going to", "will", "goes to", "going to"],
    correctAnswer: "is going to",
    explanation: "Going to for predictions based on evidence.",
    explanationSpanish: "Going to para predicciones basadas en evidencia.",
    category: "going-to",
    difficulty: "medium"
  },
  {
    id: "a2-going-4",
    type: "multiple-choice",
    question: "They _____ buy a new house next month.",
    options: ["are going to", "is going to", "am going to", "will going to"],
    correctAnswer: "are going to",
    explanation: "They + are going to + verb.",
    explanationSpanish: "They + are going to + verbo.",
    category: "going-to",
    difficulty: "easy"
  },
  {
    id: "a2-going-5",
    type: "multiple-choice",
    question: "_____ you _____ come to the party?",
    options: ["Are/going to", "Is/going to", "Do/going to", "Will/going to"],
    correctAnswer: "Are/going to",
    explanation: "Questions: Are you going to + verb?",
    explanationSpanish: "Preguntas: Are you going to + verbo?",
    category: "going-to",
    difficulty: "easy"
  },

  // COULD/SHOULD
  {
    id: "a2-could-1",
    type: "multiple-choice",
    question: "When I was young, I _____ run very fast.",
    options: ["could", "can", "should", "would"],
    correctAnswer: "could",
    explanation: "Could = past ability. I could run = I was able to run.",
    explanationSpanish: "Could = habilidad pasada. I could run = Podía correr.",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a2-could-2",
    type: "multiple-choice",
    question: "_____ I borrow your pen, please?",
    options: ["Could", "Should", "Would", "Must"],
    correctAnswer: "Could",
    explanation: "Could for polite requests: Could I...?",
    explanationSpanish: "Could para peticiones educadas: Could I...?",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a2-should-1",
    type: "multiple-choice",
    question: "You _____ study more for the exam.",
    options: ["should", "could", "can", "must"],
    correctAnswer: "should",
    explanation: "Should = advice/recommendation.",
    explanationSpanish: "Should = consejo/recomendación.",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a2-should-2",
    type: "multiple-choice",
    question: "You _____ eat so much sugar. It's bad for you.",
    options: ["shouldn't", "should", "couldn't", "wouldn't"],
    correctAnswer: "shouldn't",
    explanation: "Shouldn't = advice not to do something.",
    explanationSpanish: "Shouldn't = consejo de no hacer algo.",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a2-should-3",
    type: "multiple-choice",
    question: "You look tired. You _____ go to bed early.",
    options: ["should", "shouldn't", "could", "couldn't"],
    correctAnswer: "should",
    explanation: "Should = it's a good idea to do this.",
    explanationSpanish: "Should = es buena idea hacer esto.",
    category: "modals",
    difficulty: "easy"
  },

  // FIRST CONDITIONAL
  {
    id: "a2-cond1-1",
    type: "multiple-choice",
    question: "If it _____, we will stay at home.",
    options: ["rains", "will rain", "rain", "rained"],
    correctAnswer: "rains",
    explanation: "First Conditional: If + Present Simple, will + verb.",
    explanationSpanish: "Primera Condicional: If + Presente Simple, will + verbo.",
    category: "first-conditional",
    difficulty: "medium"
  },
  {
    id: "a2-cond1-2",
    type: "multiple-choice",
    question: "She _____ angry if you arrive late.",
    options: ["will be", "is", "was", "would be"],
    correctAnswer: "will be",
    explanation: "Result clause uses will + base verb.",
    explanationSpanish: "La cláusula de resultado usa will + verbo base.",
    category: "first-conditional",
    difficulty: "medium"
  },
  {
    id: "a2-cond1-3",
    type: "multiple-choice",
    question: "If you _____ hard, you will pass the exam.",
    options: ["study", "will study", "studied", "studies"],
    correctAnswer: "study",
    explanation: "If-clause = Present Simple (study, not will study).",
    explanationSpanish: "Cláusula If = Presente Simple (study, no will study).",
    category: "first-conditional",
    difficulty: "medium"
  },
  {
    id: "a2-cond1-4",
    type: "multiple-choice",
    question: "If I see him, I _____ give him your message.",
    options: ["will", "would", "am", "do"],
    correctAnswer: "will",
    explanation: "Real possibility in future = will.",
    explanationSpanish: "Posibilidad real en futuro = will.",
    category: "first-conditional",
    difficulty: "medium"
  },
  {
    id: "a2-cond1-5",
    type: "multiple-choice",
    question: "What will you do if you _____ the lottery?",
    options: ["win", "will win", "won", "winning"],
    correctAnswer: "win",
    explanation: "If + Present Simple, even for future meaning.",
    explanationSpanish: "If + Presente Simple, incluso con significado futuro.",
    category: "first-conditional",
    difficulty: "medium"
  },
];

// ============================================
// B1 INTERMEDIATE - Main points grammar
// ============================================

export const b1GrammarCurriculum: GrammarExercise[] = [
  // PRESENT PERFECT
  {
    id: "b1-pp-1",
    type: "multiple-choice",
    question: "I _____ never _____ sushi. (try)",
    options: ["have/tried", "has/tried", "have/try", "did/try"],
    correctAnswer: "have/tried",
    explanation: "Present Perfect: have/has + past participle. For experiences.",
    explanationSpanish: "Presente Perfecto: have/has + participio pasado. Para experiencias.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-2",
    type: "multiple-choice",
    question: "She _____ to Paris three times.",
    options: ["has been", "have been", "was", "went"],
    correctAnswer: "has been",
    explanation: "She + has + past participle. Been = gone and returned.",
    explanationSpanish: "She + has + participio pasado. Been = fue y volvió.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-3",
    type: "multiple-choice",
    question: "I _____ just _____ lunch. I'm not hungry.",
    options: ["have/had", "has/had", "have/have", "did/have"],
    correctAnswer: "have/had",
    explanation: "Just = very recently. I have just had lunch.",
    explanationSpanish: "Just = muy recientemente. I have just had lunch.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-4",
    type: "multiple-choice",
    question: "_____ you ever _____ a famous person?",
    options: ["Have/met", "Has/met", "Did/meet", "Do/meet"],
    correctAnswer: "Have/met",
    explanation: "Ever = at any time in your life (Present Perfect).",
    explanationSpanish: "Ever = en algún momento de tu vida (Presente Perfecto).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-5",
    type: "multiple-choice",
    question: "I _____ lived here _____ 2015.",
    options: ["have/since", "have/for", "has/since", "am/since"],
    correctAnswer: "have/since",
    explanation: "Since = starting point. For = duration.",
    explanationSpanish: "Since = punto de inicio. For = duración.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-6",
    type: "multiple-choice",
    question: "They _____ here for ten years.",
    options: ["have lived", "has lived", "lived", "are living"],
    correctAnswer: "have lived",
    explanation: "For + period = Present Perfect for duration until now.",
    explanationSpanish: "For + período = Presente Perfecto para duración hasta ahora.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-7",
    type: "multiple-choice",
    question: "She _____ already _____ the report.",
    options: ["has/finished", "have/finished", "is/finished", "was/finished"],
    correctAnswer: "has/finished",
    explanation: "Already = before now (Present Perfect).",
    explanationSpanish: "Already = antes de ahora (Presente Perfecto).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-8",
    type: "multiple-choice",
    question: "I _____ yet _____ the email.",
    options: ["haven't/sent", "hasn't/sent", "didn't/send", "don't/send"],
    correctAnswer: "haven't/sent",
    explanation: "Yet = until now (negative sentences, end of sentence).",
    explanationSpanish: "Yet = hasta ahora (oraciones negativas, al final).",
    category: "present-perfect",
    difficulty: "medium"
  },

  // WILL vs GOING TO
  {
    id: "b1-future-1",
    type: "multiple-choice",
    question: "I think it _____ rain tomorrow. (prediction without evidence)",
    options: ["will", "is going to", "is", "does"],
    correctAnswer: "will",
    explanation: "Will for predictions based on opinion/belief.",
    explanationSpanish: "Will para predicciones basadas en opinión/creencia.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-future-2",
    type: "multiple-choice",
    question: "Look at those clouds! It _____ rain. (prediction with evidence)",
    options: ["is going to", "will", "is", "does"],
    correctAnswer: "is going to",
    explanation: "Going to for predictions based on present evidence.",
    explanationSpanish: "Going to para predicciones basadas en evidencia presente.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-future-3",
    type: "multiple-choice",
    question: "Wait, I _____ help you with that. (spontaneous decision)",
    options: ["will", "am going to", "am", "can"],
    correctAnswer: "will",
    explanation: "Will for spontaneous decisions made at the moment.",
    explanationSpanish: "Will para decisiones espontáneas tomadas en el momento.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-future-4",
    type: "multiple-choice",
    question: "I _____ study medicine next year. I've already applied.",
    options: ["am going to", "will", "am", "can"],
    correctAnswer: "am going to",
    explanation: "Going to for plans/intentions already decided.",
    explanationSpanish: "Going to para planes/intenciones ya decididas.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-future-5",
    type: "multiple-choice",
    question: "We _____ dinner at that new restaurant tonight. (arrangement)",
    options: ["are having", "will have", "have", "had"],
    correctAnswer: "are having",
    explanation: "Present Continuous for fixed future arrangements.",
    explanationSpanish: "Presente Continuo para arreglos futuros fijos.",
    category: "future-tenses",
    difficulty: "medium"
  },

  // MODAL VERBS - Deduction
  {
    id: "b1-modal-1",
    type: "multiple-choice",
    question: "He's been working all day. He _____ be tired.",
    options: ["must", "can't", "might not", "shouldn't"],
    correctAnswer: "must",
    explanation: "Must = certain deduction (I'm sure).",
    explanationSpanish: "Must = deducción segura (estoy seguro).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-modal-2",
    type: "multiple-choice",
    question: "She _____ be at work. It's Sunday!",
    options: ["can't", "must", "might", "should"],
    correctAnswer: "can't",
    explanation: "Can't = certain negative deduction (impossible).",
    explanationSpanish: "Can't = deducción negativa segura (imposible).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-modal-3",
    type: "multiple-choice",
    question: "He _____ be at home. I'm not sure.",
    options: ["might", "must", "can't", "will"],
    correctAnswer: "might",
    explanation: "Might = uncertain deduction (maybe, possibly).",
    explanationSpanish: "Might = deducción incierta (quizás, posiblemente).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-modal-4",
    type: "multiple-choice",
    question: "The traffic is terrible. We _____ be late.",
    options: ["might", "must", "can't", "won't"],
    correctAnswer: "might",
    explanation: "Might = possibility (it's possible we'll be late).",
    explanationSpanish: "Might = posibilidad (es posible que lleguemos tarde).",
    category: "modal-verbs",
    difficulty: "medium"
  },

  // SECOND CONDITIONAL
  {
    id: "b1-cond2-1",
    type: "multiple-choice",
    question: "If I _____ rich, I would buy a big house.",
    options: ["were", "was", "am", "will be"],
    correctAnswer: "were",
    explanation: "Second Conditional: If + Past Simple (were for all subjects).",
    explanationSpanish: "Segunda Condicional: If + Pasado Simple (were para todos).",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-2",
    type: "multiple-choice",
    question: "If I had more time, I _____ learn another language.",
    options: ["would", "will", "could", "can"],
    correctAnswer: "would",
    explanation: "Result clause: would + base verb.",
    explanationSpanish: "Cláusula de resultado: would + verbo base.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-3",
    type: "multiple-choice",
    question: "She _____ travel more if she _____ more money.",
    options: ["would/had", "will/has", "would/has", "will/had"],
    correctAnswer: "would/had",
    explanation: "Hypothetical/unreal present: would + base verb, if + past.",
    explanationSpanish: "Hipotético/irreal presente: would + base, if + pasado.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-4",
    type: "multiple-choice",
    question: "What would you do if you _____ the lottery?",
    options: ["won", "win", "will win", "would win"],
    correctAnswer: "won",
    explanation: "If-clause uses Past Simple for unreal situations.",
    explanationSpanish: "La cláusula If usa Pasado Simple para situaciones irreales.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-5",
    type: "multiple-choice",
    question: "If I _____ you, I _____ apologize.",
    options: ["were/would", "was/will", "am/would", "were/will"],
    correctAnswer: "were/would",
    explanation: "Common expression: If I were you (giving advice).",
    explanationSpanish: "Expresión común: If I were you (dando consejos).",
    category: "second-conditional",
    difficulty: "medium"
  },

  // PASSIVE VOICE
  {
    id: "b1-passive-1",
    type: "multiple-choice",
    question: "This wine _____ in France.",
    options: ["is made", "made", "makes", "making"],
    correctAnswer: "is made",
    explanation: "Present Passive: is/are + past participle.",
    explanationSpanish: "Pasiva Presente: is/are + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-passive-2",
    type: "multiple-choice",
    question: "The letter _____ yesterday.",
    options: ["was sent", "sent", "is sent", "has sent"],
    correctAnswer: "was sent",
    explanation: "Past Passive: was/were + past participle.",
    explanationSpanish: "Pasiva Pasado: was/were + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-passive-3",
    type: "multiple-choice",
    question: "The report _____ by the team last week.",
    options: ["was written", "wrote", "is written", "writes"],
    correctAnswer: "was written",
    explanation: "By + agent (who did it) is optional.",
    explanationSpanish: "By + agente (quién lo hizo) es opcional.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-passive-4",
    type: "multiple-choice",
    question: "The project _____ next month.",
    options: ["will be completed", "will complete", "is completing", "completes"],
    correctAnswer: "will be completed",
    explanation: "Future Passive: will be + past participle.",
    explanationSpanish: "Pasiva Futuro: will be + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-passive-5",
    type: "multiple-choice",
    question: "English _____ in many countries.",
    options: ["is spoken", "speaks", "spoke", "speaking"],
    correctAnswer: "is spoken",
    explanation: "General fact in passive: is/are + past participle.",
    explanationSpanish: "Hecho general en pasiva: is/are + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
];

// ============================================
// B2 UPPER-INTERMEDIATE - Detailed & abstract
// ============================================

export const b2GrammarCurriculum: GrammarExercise[] = [
  // THIRD CONDITIONAL
  {
    id: "b2-cond3-1",
    type: "multiple-choice",
    question: "If I _____ the alarm, I _____ been late.",
    options: ["had heard/wouldn't have", "heard/wouldn't have", "had heard/won't have", "hear/wouldn't have"],
    correctAnswer: "had heard/wouldn't have",
    explanation: "Third Conditional: If + Past Perfect, would have + past participle.",
    explanationSpanish: "Tercera Condicional: If + Pasado Perfecto, would have + participio.",
    category: "third-conditional",
    difficulty: "hard"
  },
  {
    id: "b2-cond3-2",
    type: "multiple-choice",
    question: "If she _____ harder, she _____ passed the exam.",
    options: ["had studied/would have", "studied/would have", "had studied/would", "studied/would"],
    correctAnswer: "had studied/would have",
    explanation: "Unreal past: regret about what didn't happen.",
    explanationSpanish: "Pasado irreal: arrepentimiento sobre lo que no pasó.",
    category: "third-conditional",
    difficulty: "hard"
  },
  {
    id: "b2-cond3-3",
    type: "multiple-choice",
    question: "I _____ the movie if I _____ it was so boring.",
    options: ["wouldn't have watched/had known", "wouldn't watch/knew", "hadn't watched/knew", "wouldn't have watched/knew"],
    correctAnswer: "wouldn't have watched/had known",
    explanation: "Both parts are about unreal past situations.",
    explanationSpanish: "Ambas partes son sobre situaciones pasadas irreales.",
    category: "third-conditional",
    difficulty: "hard"
  },
  {
    id: "b2-cond3-4",
    type: "multiple-choice",
    question: "If we _____ earlier, we _____ the flight.",
    options: ["had left/wouldn't have missed", "left/wouldn't miss", "had left/won't miss", "left/wouldn't have missed"],
    correctAnswer: "had left/wouldn't have missed",
    explanation: "Imagining a different past outcome.",
    explanationSpanish: "Imaginando un resultado pasado diferente.",
    category: "third-conditional",
    difficulty: "hard"
  },

  // MIXED CONDITIONALS
  {
    id: "b2-mixed-1",
    type: "multiple-choice",
    question: "If I _____ Spanish, I _____ for that job now. (general ability → present result)",
    options: ["spoke/would apply", "had spoken/would apply", "spoke/would have applied", "speak/will apply"],
    correctAnswer: "spoke/would apply",
    explanation: "Type 2 If-clause (unreal present) + Type 2 result (unreal present).",
    explanationSpanish: "Cláusula If Tipo 2 (irreal presente) + resultado Tipo 2 (irreal presente).",
    category: "mixed-conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-mixed-2",
    type: "multiple-choice",
    question: "If he _____ the lottery last year, he _____ rich now. (past → present)",
    options: ["had won/would be", "won/would be", "had won/would have been", "wins/would be"],
    correctAnswer: "had won/would be",
    explanation: "Type 3 If-clause (unreal past) + Type 2 result (unreal present).",
    explanationSpanish: "Cláusula If Tipo 3 (irreal pasado) + resultado Tipo 2 (irreal presente).",
    category: "mixed-conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-mixed-3",
    type: "multiple-choice",
    question: "If I _____ more ambitious, I _____ that opportunity. (general → past)",
    options: ["were/would have taken", "was/would take", "were/would take", "had been/would have taken"],
    correctAnswer: "were/would have taken",
    explanation: "Type 2 If-clause (general trait) + Type 3 result (past outcome).",
    explanationSpanish: "Cláusula If Tipo 2 (rasgo general) + resultado Tipo 3 (resultado pasado).",
    category: "mixed-conditionals",
    difficulty: "hard"
  },

  // PAST PERFECT
  {
    id: "b2-pp-1",
    type: "multiple-choice",
    question: "When I arrived, the movie _____ already _____.",
    options: ["had/started", "has/started", "was/starting", "have/started"],
    correctAnswer: "had/started",
    explanation: "Past Perfect: earlier past action before another past action.",
    explanationSpanish: "Pasado Perfecto: acción pasada anterior a otra acción pasada.",
    category: "past-perfect",
    difficulty: "medium"
  },
  {
    id: "b2-pp-2",
    type: "multiple-choice",
    question: "She told me she _____ to Paris before.",
    options: ["had been", "has been", "was", "went"],
    correctAnswer: "had been",
    explanation: "Reported past experience: had + past participle.",
    explanationSpanish: "Experiencia pasada reportada: had + participio pasado.",
    category: "past-perfect",
    difficulty: "medium"
  },
  {
    id: "b2-pp-3",
    type: "multiple-choice",
    question: "I _____ the book before I saw the movie.",
    options: ["had read", "have read", "read", "was reading"],
    correctAnswer: "had read",
    explanation: "First action (read book) = Past Perfect; second (saw movie) = Past Simple.",
    explanationSpanish: "Primera acción = Pasado Perfecto; segunda = Pasado Simple.",
    category: "past-perfect",
    difficulty: "medium"
  },
  {
    id: "b2-pp-4",
    type: "multiple-choice",
    question: "By the time we arrived, they _____ dinner.",
    options: ["had finished", "have finished", "finished", "were finishing"],
    correctAnswer: "had finished",
    explanation: "By the time = before that moment (Past Perfect).",
    explanationSpanish: "By the time = antes de ese momento (Pasado Perfecto).",
    category: "past-perfect",
    difficulty: "medium"
  },

  // MODALS IN THE PAST
  {
    id: "b2-modal-past-1",
    type: "multiple-choice",
    question: "She _____ the train. She was at the station on time. (certain deduction)",
    options: ["must have caught", "can't have caught", "might have caught", "should catch"],
    correctAnswer: "must have caught",
    explanation: "Must have + past participle = certain past deduction.",
    explanationSpanish: "Must have + participio = deducción pasada segura.",
    category: "modals-past",
    difficulty: "hard"
  },
  {
    id: "b2-modal-past-2",
    type: "multiple-choice",
    question: "He _____ the email. His inbox shows it was never opened. (impossible)",
    options: ["can't have received", "must have received", "might have received", "should have received"],
    correctAnswer: "can't have received",
    explanation: "Can't have = certain it didn't happen.",
    explanationSpanish: "Can't have = seguro de que no pasó.",
    category: "modals-past",
    difficulty: "hard"
  },
  {
    id: "b2-modal-past-3",
    type: "multiple-choice",
    question: "You _____ earlier. Now we're late. (criticism)",
    options: ["should have left", "must have left", "can have left", "would leave"],
    correctAnswer: "should have left",
    explanation: "Should have = you didn't do the right thing.",
    explanationSpanish: "Should have = no hiciste lo correcto.",
    category: "modals-past",
    difficulty: "hard"
  },
  {
    id: "b2-modal-past-4",
    type: "multiple-choice",
    question: "She _____ to the party. I'm not sure. (possibility)",
    options: ["might have gone", "must have gone", "can't have gone", "should have gone"],
    correctAnswer: "might have gone",
    explanation: "Might have = possible past action.",
    explanationSpanish: "Might have = acción pasada posible.",
    category: "modals-past",
    difficulty: "hard"
  },

  // COMPLEX PASSIVE FORMS
  {
    id: "b2-passive-1",
    type: "multiple-choice",
    question: "The report _____ by the time you arrive.",
    options: ["will have been completed", "will complete", "is completed", "has completed"],
    correctAnswer: "will have been completed",
    explanation: "Future Perfect Passive: will have been + past participle.",
    explanationSpanish: "Pasiva Futuro Perfecto: will have been + participio.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-passive-2",
    type: "multiple-choice",
    question: "The building _____ when I passed by.",
    options: ["was being renovated", "was renovated", "is being renovated", "has been renovated"],
    correctAnswer: "was being renovated",
    explanation: "Past Continuous Passive: was/were being + past participle.",
    explanationSpanish: "Pasiva Pasado Continuo: was/were being + participio.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-passive-3",
    type: "multiple-choice",
    question: "The contract _____ already _____ when we arrived.",
    options: ["had/been signed", "has/been signed", "was/signed", "is/being signed"],
    correctAnswer: "had/been signed",
    explanation: "Past Perfect Passive: had been + past participle.",
    explanationSpanish: "Pasiva Pasado Perfecto: had been + participio.",
    category: "passive-advanced",
    difficulty: "hard"
  },

  // REPORTED SPEECH
  {
    id: "b2-reported-1",
    type: "multiple-choice",
    question: "'I am tired' → She said she _____ tired.",
    options: ["was", "is", "were", "had been"],
    correctAnswer: "was",
    explanation: "Present → Past in reported speech.",
    explanationSpanish: "Presente → Pasado en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b2-reported-2",
    type: "multiple-choice",
    question: "'I will call you' → He said he _____ call me.",
    options: ["would", "will", "could", "should"],
    correctAnswer: "would",
    explanation: "Will → Would in reported speech.",
    explanationSpanish: "Will → Would en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b2-reported-3",
    type: "multiple-choice",
    question: "'I have finished' → She said she _____ finished.",
    options: ["had", "has", "have", "was"],
    correctAnswer: "had",
    explanation: "Present Perfect → Past Perfect in reported speech.",
    explanationSpanish: "Presente Perfecto → Pasado Perfecto en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b2-reported-4",
    type: "multiple-choice",
    question: "'I can swim' → He said he _____ swim.",
    options: ["could", "can", "would", "might"],
    correctAnswer: "could",
    explanation: "Can → Could in reported speech.",
    explanationSpanish: "Can → Could en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b2-reported-5",
    type: "multiple-choice",
    question: "'Where do you live?' → She asked me where I _____.",
    options: ["lived", "live", "was living", "had lived"],
    correctAnswer: "lived",
    explanation: "Reported questions: no question word order, tense shift.",
    explanationSpanish: "Preguntas indirectas: sin orden de pregunta, cambio de tiempo.",
    category: "reported-speech",
    difficulty: "medium"
  },
];

// ============================================
// C1 ADVANCED - Precision and flexibility
// ============================================

export const c1GrammarCurriculum: GrammarExercise[] = [
  // INVERSIONS
  {
    id: "c1-inv-1",
    type: "multiple-choice",
    question: "_____ had I arrived when the meeting started.",
    options: ["Hardly", "Hard", "Harder", "Hardest"],
    correctAnswer: "Hardly",
    explanation: "Hardly + inversion for emphasis. = As soon as I arrived...",
    explanationSpanish: "Hardly + inversión para énfasis. = Tan pronto como llegué...",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-2",
    type: "multiple-choice",
    question: "Not only _____ late, but she also forgot the documents.",
    options: ["was she", "she was", "she is", "is she"],
    correctAnswer: "was she",
    explanation: "'Not only' triggers subject-auxiliary inversion.",
    explanationSpanish: "'Not only' provoca inversión sujeto-auxiliar.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-3",
    type: "multiple-choice",
    question: "Never before _____ such a magnificent performance.",
    options: ["have I seen", "I have seen", "I saw", "did I seen"],
    correctAnswer: "have I seen",
    explanation: "'Never before' requires inversion.",
    explanationSpanish: "'Never before' requiere inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-4",
    type: "multiple-choice",
    question: "Seldom _____ such rudeness in a professional setting.",
    options: ["do we encounter", "we encounter", "we do encounter", "encounter we"],
    correctAnswer: "do we encounter",
    explanation: "'Seldom' is a negative adverb requiring inversion.",
    explanationSpanish: "'Seldom' es un adverbio negativo que requiere inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-5",
    type: "multiple-choice",
    question: "Under no circumstances _____ this document be shared.",
    options: ["should", "it should", "should it", "shouldn't"],
    correctAnswer: "should",
    explanation: "'Under no circumstances' + modal + subject + verb.",
    explanationSpanish: "'Under no circumstances' + modal + sujeto + verbo.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-6",
    type: "multiple-choice",
    question: "Little _____ that the decision would change everything.",
    options: ["did she know", "she knew", "she did know", "knew she"],
    correctAnswer: "did she know",
    explanation: "'Little' (negative adverb) triggers inversion.",
    explanationSpanish: "'Little' (adverbio negativo) provoca inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-7",
    type: "multiple-choice",
    question: "Only when I read the contract _____ the mistake.",
    options: ["did I notice", "I noticed", "I did notice", "noticed I"],
    correctAnswer: "did I notice",
    explanation: "'Only when' triggers inversion in main clause.",
    explanationSpanish: "'Only when' provoca inversión en la cláusula principal.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-inv-8",
    type: "multiple-choice",
    question: "No sooner _____ the house than it started raining.",
    options: ["had I left", "I had left", "I left", "did I leave"],
    correctAnswer: "had I left",
    explanation: "'No sooner...than' uses Past Perfect + inversion.",
    explanationSpanish: "'No sooner...than' usa Pasado Perfecto + inversión.",
    category: "inversions",
    difficulty: "hard"
  },

  // CLEFT SENTENCES
  {
    id: "c1-cleft-1",
    type: "multiple-choice",
    question: "_____ the CEO who made the final decision.",
    options: ["It was", "There was", "That was", "This was"],
    correctAnswer: "It was",
    explanation: "It-cleft: 'It was X who/that...' for emphasis.",
    explanationSpanish: "Cleft con It: 'It was X who/that...' para énfasis.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  {
    id: "c1-cleft-2",
    type: "multiple-choice",
    question: "_____ I need is a good night's sleep.",
    options: ["What", "Which", "That", "It"],
    correctAnswer: "What",
    explanation: "Wh-cleft: 'What I need is...' for emphasis.",
    explanationSpanish: "Cleft con Wh: 'What I need is...' para énfasis.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  {
    id: "c1-cleft-3",
    type: "multiple-choice",
    question: "_____ she said was completely unexpected.",
    options: ["What", "Which", "That", "When"],
    correctAnswer: "What",
    explanation: "Wh-cleft with 'what' for emphasis on the object.",
    explanationSpanish: "Cleft con 'what' para énfasis en el objeto.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  {
    id: "c1-cleft-4",
    type: "multiple-choice",
    question: "It _____ the marketing team that came up with the idea.",
    options: ["was", "were", "is", "being"],
    correctAnswer: "was",
    explanation: "It-cleft in past: It was + noun + that/who.",
    explanationSpanish: "Cleft con It en pasado: It was + sustantivo + that/who.",
    category: "cleft-sentences",
    difficulty: "hard"
  },

  // PARTICIPLE CLAUSES
  {
    id: "c1-part-1",
    type: "multiple-choice",
    question: "_____ the instructions, he started the experiment.",
    options: ["Having read", "Have read", "Reading", "To read"],
    correctAnswer: "Having read",
    explanation: "Perfect participle for action completed before main verb.",
    explanationSpanish: "Participio perfecto para acción completada antes del verbo principal.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  {
    id: "c1-part-2",
    type: "multiple-choice",
    question: "_____ by her parents, she felt confident.",
    options: ["Encouraged", "Encouraging", "To encourage", "Encourage"],
    correctAnswer: "Encouraged",
    explanation: "Past participle for passive meaning.",
    explanationSpanish: "Participio pasado para significado pasivo.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  {
    id: "c1-part-3",
    type: "multiple-choice",
    question: "_____ (not/know) the answer, she remained silent.",
    options: ["Not knowing", "Not known", "Not to know", "Not knew"],
    correctAnswer: "Not knowing",
    explanation: "Negative participle clause: Not + -ing.",
    explanationSpanish: "Cláusula de participio negativa: Not + -ing.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  {
    id: "c1-part-4",
    type: "multiple-choice",
    question: "_____ on the beach, we watched the sunset.",
    options: ["Sitting", "Sat", "Having sat", "To sit"],
    correctAnswer: "Sitting",
    explanation: "Present participle for simultaneous actions.",
    explanationSpanish: "Participio presente para acciones simultáneas.",
    category: "participle-clauses",
    difficulty: "hard"
  },

  // SUBJUNCTIVE
  {
    id: "c1-subj-1",
    type: "multiple-choice",
    question: "The committee demanded that he _____ immediately.",
    options: ["resign", "resigns", "resigned", "resigning"],
    correctAnswer: "resign",
    explanation: "Subjunctive after 'demand': base form without -s.",
    explanationSpanish: "Subjuntivo después de 'demand': forma base sin -s.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-subj-2",
    type: "multiple-choice",
    question: "It is essential that she _____ informed.",
    options: ["be", "is", "was", "being"],
    correctAnswer: "be",
    explanation: "Subjunctive uses 'be' regardless of subject.",
    explanationSpanish: "El subjuntivo usa 'be' sin importar el sujeto.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-subj-3",
    type: "multiple-choice",
    question: "I suggest that he _____ more carefully.",
    options: ["consider", "considers", "considered", "considering"],
    correctAnswer: "consider",
    explanation: "After 'suggest', use subjunctive (base form).",
    explanationSpanish: "Después de 'suggest', usa subjuntivo (forma base).",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-subj-4",
    type: "multiple-choice",
    question: "It is vital that the report _____ submitted on time.",
    options: ["be", "is", "was", "were"],
    correctAnswer: "be",
    explanation: "After adjectives like 'vital', use subjunctive 'be'.",
    explanationSpanish: "Después de adjetivos como 'vital', usa subjuntivo 'be'.",
    category: "subjunctive",
    difficulty: "hard"
  },

  // ADVANCED MODAL PERFECTS
  {
    id: "c1-modal-1",
    type: "multiple-choice",
    question: "She _____ the train. She was at the station on time.",
    options: ["must have caught", "can't have caught", "might have caught", "should catch"],
    correctAnswer: "must have caught",
    explanation: "Must have = certain deduction about the past.",
    explanationSpanish: "Must have = deducción segura sobre el pasado.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "c1-modal-2",
    type: "multiple-choice",
    question: "He _____ the email; his inbox shows it was never opened.",
    options: ["can't have received", "must have received", "might have received", "should have received"],
    correctAnswer: "can't have received",
    explanation: "Can't have = certain the opposite happened.",
    explanationSpanish: "Can't have = seguro de que lo contrario pasó.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "c1-modal-3",
    type: "multiple-choice",
    question: "You _____ earlier; now we're late.",
    options: ["should have left", "must have left", "can have left", "would leave"],
    correctAnswer: "should have left",
    explanation: "Should have = criticism/regret about past action.",
    explanationSpanish: "Should have = crítica/arrepentimiento sobre acción pasada.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "c1-modal-4",
    type: "multiple-choice",
    question: "She _____ the meeting; I'm not certain. (possibility)",
    options: ["could have attended", "must have attended", "can't have attended", "should have attended"],
    correctAnswer: "could have attended",
    explanation: "Could have = past possibility (we don't know).",
    explanationSpanish: "Could have = posibilidad pasada (no sabemos).",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "c1-modal-5",
    type: "multiple-choice",
    question: "He _____ told me! I would have helped. (missed opportunity)",
    options: ["could have", "must have", "can't have", "would have"],
    correctAnswer: "could have",
    explanation: "Could have = an opportunity that wasn't taken.",
    explanationSpanish: "Could have = una oportunidad que no se tomó.",
    category: "modal-perfects",
    difficulty: "hard"
  },

  // REGISTER & STYLE
  {
    id: "c1-register-1",
    type: "multiple-choice",
    question: "Formal: 'I am writing to _____ about the delay.'",
    options: ["inquire", "ask", "wonder", "question"],
    correctAnswer: "inquire",
    explanation: "'Inquire' is more formal than 'ask'.",
    explanationSpanish: "'Inquire' es más formal que 'ask'.",
    category: "register",
    difficulty: "hard"
  },
  {
    id: "c1-register-2",
    type: "multiple-choice",
    question: "Formal alternative to 'get': 'We hope to _____ a response soon.'",
    options: ["obtain", "get", "grab", "take"],
    correctAnswer: "obtain",
    explanation: "'Obtain' = formal version of 'get'.",
    explanationSpanish: "'Obtain' = versión formal de 'get'.",
    category: "register",
    difficulty: "hard"
  },
  {
    id: "c1-register-3",
    type: "multiple-choice",
    question: "Academic hedging: 'This _____ suggest a correlation.'",
    options: ["would seem to", "definitely", "absolutely", "certainly"],
    correctAnswer: "would seem to",
    explanation: "'Would seem to' = cautious, academic language.",
    explanationSpanish: "'Would seem to' = lenguaje cauteloso, académico.",
    category: "register",
    difficulty: "hard"
  },
  {
    id: "c1-register-4",
    type: "multiple-choice",
    question: "Nominalise: 'We analyzed the data' → 'The _____ of the data...'",
    options: ["analysis", "analyzing", "analyzed", "analytical"],
    correctAnswer: "analysis",
    explanation: "Nominalisation uses noun forms for academic style.",
    explanationSpanish: "La nominalización usa formas sustantivas para estilo académico.",
    category: "nominalisation",
    difficulty: "hard"
  },
];

// Export all curriculum exercises
export const allGrammarCurriculumExercises = {
  A1: a1GrammarCurriculum,
  A2: a2GrammarCurriculum,
  B1: b1GrammarCurriculum,
  B2: b2GrammarCurriculum,
  C1: c1GrammarCurriculum,
};

// Stats for the curriculum
export const grammarCurriculumStats = {
  A1: a1GrammarCurriculum.length,
  A2: a2GrammarCurriculum.length,
  B1: b1GrammarCurriculum.length,
  B2: b2GrammarCurriculum.length,
  C1: c1GrammarCurriculum.length,
  total: a1GrammarCurriculum.length + a2GrammarCurriculum.length + b1GrammarCurriculum.length + b2GrammarCurriculum.length + c1GrammarCurriculum.length,
};

// Get exercises by level
export function getGrammarCurriculumByLevel(level: "A1" | "A2" | "B1" | "B2" | "C1"): GrammarExercise[] {
  return allGrammarCurriculumExercises[level] || [];
}

// Get exercises by category
export function getGrammarCurriculumByCategory(level: "A1" | "A2" | "B1" | "B2" | "C1", category: string): GrammarExercise[] {
  const exercises = allGrammarCurriculumExercises[level] || [];
  return exercises.filter(ex => ex.category === category);
}
