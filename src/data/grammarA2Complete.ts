// Comprehensive A2 Elementary Grammar Exercises
// Covering: Past simple, comparatives/superlatives, going to future, could/should, first conditional
// Topics: Daily routines, jobs, shopping, simple descriptions

import { GrammarExercise } from './grammarExercisesExpanded';

// ==================== PAST SIMPLE - REGULAR VERBS ====================
export const a2PastSimpleRegularExercises: GrammarExercise[] = [
  {
    id: "a2-psr-1",
    type: "multiple-choice",
    question: "I ___ my room yesterday.",
    options: ["clean", "cleaned", "cleaning", "cleans"],
    correctAnswer: "cleaned",
    explanation: "Regular verbs add -ed in past simple. 'Yesterday' indicates past.",
    explanationSpanish: "Los verbos regulares añaden -ed en pasado simple. 'Yesterday' indica pasado.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-2",
    type: "multiple-choice",
    question: "She ___ to music all morning.",
    options: ["listen", "listened", "listening", "listens"],
    correctAnswer: "listened",
    explanation: "Past simple of 'listen' is 'listened' (add -ed).",
    explanationSpanish: "El pasado simple de 'listen' es 'listened' (añadir -ed).",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-3",
    type: "multiple-choice",
    question: "We ___ football in the park last Sunday.",
    options: ["play", "played", "playing", "plays"],
    correctAnswer: "played",
    explanation: "'Last Sunday' indicates past time - use past simple.",
    explanationSpanish: "'Last Sunday' indica tiempo pasado - usar pasado simple.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-4",
    type: "multiple-choice",
    question: "They ___ for three hours yesterday.",
    options: ["work", "worked", "working", "works"],
    correctAnswer: "worked",
    explanation: "Regular verb 'work' becomes 'worked' in past simple.",
    explanationSpanish: "El verbo regular 'work' se convierte en 'worked' en pasado simple.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-5",
    type: "multiple-choice",
    question: "The movie ___ at 8 o'clock.",
    options: ["start", "started", "starting", "starts"],
    correctAnswer: "started",
    explanation: "Past simple for completed actions - add -ed to 'start'.",
    explanationSpanish: "Pasado simple para acciones completadas - añadir -ed a 'start'.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-6",
    type: "multiple-choice",
    question: "I ___ my grandmother last week.",
    options: ["visit", "visited", "visiting", "visits"],
    correctAnswer: "visited",
    explanation: "'Last week' indicates past - use 'visited'.",
    explanationSpanish: "'Last week' indica pasado - usar 'visited'.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-7",
    type: "multiple-choice",
    question: "He ___ the door quietly.",
    options: ["open", "opened", "opening", "opens"],
    correctAnswer: "opened",
    explanation: "Past simple narrative - 'opened' describes a completed action.",
    explanationSpanish: "Narrativa en pasado simple - 'opened' describe una acción completada.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
  {
    id: "a2-psr-8",
    type: "multiple-choice",
    question: "The children ___ in the garden all afternoon.",
    options: ["play", "played", "playing", "plays"],
    correctAnswer: "played",
    explanation: "'All afternoon' with past context requires past simple.",
    explanationSpanish: "'All afternoon' con contexto pasado requiere pasado simple.",
    category: "past-simple-regular",
    difficulty: "easy"
  },
];

// ==================== PAST SIMPLE - IRREGULAR VERBS ====================
export const a2PastSimpleIrregularExercises: GrammarExercise[] = [
  {
    id: "a2-psi-1",
    type: "multiple-choice",
    question: "I ___ to the supermarket this morning.",
    options: ["go", "went", "gone", "going"],
    correctAnswer: "went",
    explanation: "'Go' is irregular: go → went → gone.",
    explanationSpanish: "'Go' es irregular: go → went → gone.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
  {
    id: "a2-psi-2",
    type: "multiple-choice",
    question: "She ___ a delicious cake for the party.",
    options: ["make", "made", "making", "makes"],
    correctAnswer: "made",
    explanation: "'Make' is irregular: make → made → made.",
    explanationSpanish: "'Make' es irregular: make → made → made.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
  {
    id: "a2-psi-3",
    type: "multiple-choice",
    question: "We ___ coffee together yesterday.",
    options: ["have", "had", "having", "has"],
    correctAnswer: "had",
    explanation: "'Have' is irregular: have → had → had.",
    explanationSpanish: "'Have' es irregular: have → had → had.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
  {
    id: "a2-psi-4",
    type: "multiple-choice",
    question: "He ___ me about the problem.",
    options: ["tell", "told", "telling", "tells"],
    correctAnswer: "told",
    explanation: "'Tell' is irregular: tell → told → told.",
    explanationSpanish: "'Tell' es irregular: tell → told → told.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
  {
    id: "a2-psi-5",
    type: "multiple-choice",
    question: "They ___ a new car last month.",
    options: ["buy", "bought", "buying", "buys"],
    correctAnswer: "bought",
    explanation: "'Buy' is irregular: buy → bought → bought.",
    explanationSpanish: "'Buy' es irregular: buy → bought → bought.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
  {
    id: "a2-psi-6",
    type: "multiple-choice",
    question: "I ___ the answer to the question.",
    options: ["know", "knew", "known", "knowing"],
    correctAnswer: "knew",
    explanation: "'Know' is irregular: know → knew → known.",
    explanationSpanish: "'Know' es irregular: know → knew → known.",
    category: "past-simple-irregular",
    difficulty: "medium"
  },
  {
    id: "a2-psi-7",
    type: "multiple-choice",
    question: "She ___ a beautiful song at the concert.",
    options: ["sing", "sang", "sung", "singing"],
    correctAnswer: "sang",
    explanation: "'Sing' is irregular: sing → sang → sung.",
    explanationSpanish: "'Sing' es irregular: sing → sang → sung.",
    category: "past-simple-irregular",
    difficulty: "medium"
  },
  {
    id: "a2-psi-8",
    type: "multiple-choice",
    question: "We ___ a lot of interesting people at the party.",
    options: ["meet", "met", "meeting", "meets"],
    correctAnswer: "met",
    explanation: "'Meet' is irregular: meet → met → met.",
    explanationSpanish: "'Meet' es irregular: meet → met → met.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
  {
    id: "a2-psi-9",
    type: "multiple-choice",
    question: "He ___ his keys on the table.",
    options: ["put", "putted", "putting", "puts"],
    correctAnswer: "put",
    explanation: "'Put' doesn't change: put → put → put.",
    explanationSpanish: "'Put' no cambia: put → put → put.",
    category: "past-simple-irregular",
    difficulty: "medium"
  },
  {
    id: "a2-psi-10",
    type: "multiple-choice",
    question: "I ___ a strange noise last night.",
    options: ["hear", "heard", "hearing", "hears"],
    correctAnswer: "heard",
    explanation: "'Hear' is irregular: hear → heard → heard.",
    explanationSpanish: "'Hear' es irregular: hear → heard → heard.",
    category: "past-simple-irregular",
    difficulty: "easy"
  },
];

// ==================== PAST SIMPLE - NEGATIVES & QUESTIONS ====================
export const a2PastSimpleNegQuestExercises: GrammarExercise[] = [
  {
    id: "a2-psnq-1",
    type: "multiple-choice",
    question: "I ___ go to work yesterday. I was sick.",
    options: ["didn't", "don't", "wasn't", "not"],
    correctAnswer: "didn't",
    explanation: "Past simple negative: didn't + base verb.",
    explanationSpanish: "Negativo en pasado simple: didn't + verbo base.",
    category: "past-simple-negative",
    difficulty: "easy"
  },
  {
    id: "a2-psnq-2",
    type: "multiple-choice",
    question: "___ you see the accident?",
    options: ["Did", "Do", "Does", "Was"],
    correctAnswer: "Did",
    explanation: "Past simple questions use 'Did' + subject + base verb.",
    explanationSpanish: "Las preguntas en pasado simple usan 'Did' + sujeto + verbo base.",
    category: "past-simple-questions",
    difficulty: "easy"
  },
  {
    id: "a2-psnq-3",
    type: "multiple-choice",
    question: "She ___ like the movie. It was boring.",
    options: ["didn't", "don't", "doesn't", "wasn't"],
    correctAnswer: "didn't",
    explanation: "Negative past: didn't + base verb (like, not liked).",
    explanationSpanish: "Pasado negativo: didn't + verbo base (like, no liked).",
    category: "past-simple-negative",
    difficulty: "easy"
  },
  {
    id: "a2-psnq-4",
    type: "multiple-choice",
    question: "Where ___ you go on holiday?",
    options: ["did", "do", "does", "were"],
    correctAnswer: "did",
    explanation: "Wh-questions in past: Wh-word + did + subject + base verb.",
    explanationSpanish: "Preguntas Wh- en pasado: Palabra Wh- + did + sujeto + verbo base.",
    category: "past-simple-questions",
    difficulty: "easy"
  },
  {
    id: "a2-psnq-5",
    type: "multiple-choice",
    question: "They ___ come to the meeting. They were busy.",
    options: ["didn't", "don't", "not", "weren't"],
    correctAnswer: "didn't",
    explanation: "Past negative with action verbs uses 'didn't'.",
    explanationSpanish: "El negativo pasado con verbos de acción usa 'didn't'.",
    category: "past-simple-negative",
    difficulty: "easy"
  },
  {
    id: "a2-psnq-6",
    type: "multiple-choice",
    question: "What time ___ the train arrive?",
    options: ["did", "do", "does", "was"],
    correctAnswer: "did",
    explanation: "Past simple question about time: did + subject + base verb.",
    explanationSpanish: "Pregunta en pasado simple sobre tiempo: did + sujeto + verbo base.",
    category: "past-simple-questions",
    difficulty: "easy"
  },
];

// ==================== COMPARATIVES ====================
export const a2ComparativeExercises: GrammarExercise[] = [
  {
    id: "a2-comp-1",
    type: "multiple-choice",
    question: "My house is ___ than yours.",
    options: ["bigger", "more big", "biggest", "big"],
    correctAnswer: "bigger",
    explanation: "Short adjectives: add -er. 'Big' doubles the consonant: bigger.",
    explanationSpanish: "Adjetivos cortos: añadir -er. 'Big' dobla la consonante: bigger.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-2",
    type: "multiple-choice",
    question: "This exercise is ___ than the last one.",
    options: ["more difficult", "difficulter", "most difficult", "difficult"],
    correctAnswer: "more difficult",
    explanation: "Long adjectives use 'more' for comparatives.",
    explanationSpanish: "Los adjetivos largos usan 'more' para comparativos.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-3",
    type: "multiple-choice",
    question: "She is ___ than her sister.",
    options: ["taller", "more tall", "tallest", "tall"],
    correctAnswer: "taller",
    explanation: "One-syllable adjectives add -er: tall → taller.",
    explanationSpanish: "Adjetivos de una sílaba añaden -er: tall → taller.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-4",
    type: "multiple-choice",
    question: "This book is ___ than that one.",
    options: ["more interesting", "interestinger", "most interesting", "interesting"],
    correctAnswer: "more interesting",
    explanation: "Three-syllable adjectives use 'more' + adjective.",
    explanationSpanish: "Adjetivos de tres sílabas usan 'more' + adjetivo.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-5",
    type: "multiple-choice",
    question: "Today is ___ than yesterday.",
    options: ["hotter", "more hot", "hottest", "hot"],
    correctAnswer: "hotter",
    explanation: "'Hot' doubles the final consonant: hot → hotter.",
    explanationSpanish: "'Hot' dobla la consonante final: hot → hotter.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-comp-6",
    type: "multiple-choice",
    question: "This coffee is ___ than the other one.",
    options: ["better", "gooder", "more good", "best"],
    correctAnswer: "better",
    explanation: "'Good' is irregular: good → better → best.",
    explanationSpanish: "'Good' es irregular: good → better → best.",
    category: "comparatives",
    difficulty: "medium"
  },
  {
    id: "a2-comp-7",
    type: "multiple-choice",
    question: "The weather today is ___ than last week.",
    options: ["worse", "badder", "more bad", "worst"],
    correctAnswer: "worse",
    explanation: "'Bad' is irregular: bad → worse → worst.",
    explanationSpanish: "'Bad' es irregular: bad → worse → worst.",
    category: "comparatives",
    difficulty: "medium"
  },
  {
    id: "a2-comp-8",
    type: "multiple-choice",
    question: "My car is ___ than yours.",
    options: ["faster", "more fast", "fastest", "fast"],
    correctAnswer: "faster",
    explanation: "One-syllable adjectives: add -er for comparatives.",
    explanationSpanish: "Adjetivos de una sílaba: añadir -er para comparativos.",
    category: "comparatives",
    difficulty: "easy"
  },
];

// ==================== SUPERLATIVES ====================
export const a2SuperlativeExercises: GrammarExercise[] = [
  {
    id: "a2-super-1",
    type: "multiple-choice",
    question: "This is ___ restaurant in the city.",
    options: ["the best", "the better", "the good", "the most good"],
    correctAnswer: "the best",
    explanation: "'Good' is irregular: good → better → best. Use 'the' before superlatives.",
    explanationSpanish: "'Good' es irregular: good → better → best. Usar 'the' antes de superlativos.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-super-2",
    type: "multiple-choice",
    question: "She is ___ student in the class.",
    options: ["the smartest", "the more smart", "the smarter", "smartest"],
    correctAnswer: "the smartest",
    explanation: "Short adjectives: the + adjective + -est. Always use 'the'.",
    explanationSpanish: "Adjetivos cortos: the + adjetivo + -est. Siempre usar 'the'.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-super-3",
    type: "multiple-choice",
    question: "It was ___ day of the year.",
    options: ["the hottest", "the more hot", "the hotter", "hottest"],
    correctAnswer: "the hottest",
    explanation: "'Hot' doubles the consonant: the hottest.",
    explanationSpanish: "'Hot' dobla la consonante: the hottest.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-super-4",
    type: "multiple-choice",
    question: "This is ___ movie I've ever seen.",
    options: ["the most exciting", "the excitingest", "the more exciting", "most exciting"],
    correctAnswer: "the most exciting",
    explanation: "Long adjectives: the most + adjective.",
    explanationSpanish: "Adjetivos largos: the most + adjetivo.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-super-5",
    type: "multiple-choice",
    question: "He is ___ person I know.",
    options: ["the funniest", "the funnier", "the most funny", "funniest"],
    correctAnswer: "the funniest",
    explanation: "'Funny' ends in -y, change to -iest: funniest.",
    explanationSpanish: "'Funny' termina en -y, cambiar a -iest: funniest.",
    category: "superlatives",
    difficulty: "medium"
  },
  {
    id: "a2-super-6",
    type: "multiple-choice",
    question: "That was ___ mistake of my life.",
    options: ["the worst", "the baddest", "the more bad", "worst"],
    correctAnswer: "the worst",
    explanation: "'Bad' is irregular: bad → worse → worst.",
    explanationSpanish: "'Bad' es irregular: bad → worse → worst.",
    category: "superlatives",
    difficulty: "medium"
  },
  {
    id: "a2-super-7",
    type: "multiple-choice",
    question: "The Nile is ___ river in Africa.",
    options: ["the longest", "the longer", "the most long", "longest"],
    correctAnswer: "the longest",
    explanation: "One-syllable adjectives: the + adjective + -est.",
    explanationSpanish: "Adjetivos de una sílaba: the + adjetivo + -est.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-super-8",
    type: "multiple-choice",
    question: "This is ___ book in the library.",
    options: ["the oldest", "the older", "the most old", "oldest"],
    correctAnswer: "the oldest",
    explanation: "Superlative of 'old': the oldest.",
    explanationSpanish: "Superlativo de 'old': the oldest.",
    category: "superlatives",
    difficulty: "easy"
  },
];

// ==================== GOING TO FUTURE ====================
export const a2GoingToExercises: GrammarExercise[] = [
  {
    id: "a2-goto-1",
    type: "multiple-choice",
    question: "I ___ visit my parents this weekend.",
    options: ["am going to", "going to", "am go to", "go to"],
    correctAnswer: "am going to",
    explanation: "Going to future: am/is/are + going to + verb.",
    explanationSpanish: "Futuro con going to: am/is/are + going to + verbo.",
    category: "going-to-future",
    difficulty: "easy"
  },
  {
    id: "a2-goto-2",
    type: "multiple-choice",
    question: "She ___ start a new job next month.",
    options: ["is going to", "are going to", "going to", "am going to"],
    correctAnswer: "is going to",
    explanation: "Use 'is going to' with he/she/it.",
    explanationSpanish: "Usar 'is going to' con he/she/it.",
    category: "going-to-future",
    difficulty: "easy"
  },
  {
    id: "a2-goto-3",
    type: "multiple-choice",
    question: "They ___ buy a new house.",
    options: ["are going to", "is going to", "going to", "am going to"],
    correctAnswer: "are going to",
    explanation: "Use 'are going to' with they/we/you.",
    explanationSpanish: "Usar 'are going to' con they/we/you.",
    category: "going-to-future",
    difficulty: "easy"
  },
  {
    id: "a2-goto-4",
    type: "multiple-choice",
    question: "Look at those clouds! It ___ rain.",
    options: ["is going to", "going to", "will going to", "are going to"],
    correctAnswer: "is going to",
    explanation: "'Going to' for predictions based on evidence (clouds).",
    explanationSpanish: "'Going to' para predicciones basadas en evidencia (nubes).",
    category: "going-to-future",
    difficulty: "easy"
  },
  {
    id: "a2-goto-5",
    type: "multiple-choice",
    question: "What ___ you ___ do after class?",
    options: ["are / going to", "is / going to", "do / going to", "are / going"],
    correctAnswer: "are / going to",
    explanation: "Question form: am/is/are + subject + going to + verb.",
    explanationSpanish: "Forma interrogativa: am/is/are + sujeto + going to + verbo.",
    category: "going-to-future",
    difficulty: "medium"
  },
  {
    id: "a2-goto-6",
    type: "multiple-choice",
    question: "We ___ not going to travel this summer.",
    options: ["are", "is", "am", "be"],
    correctAnswer: "are",
    explanation: "Negative: subject + am/is/are + not + going to + verb.",
    explanationSpanish: "Negativo: sujeto + am/is/are + not + going to + verbo.",
    category: "going-to-future",
    difficulty: "easy"
  },
  {
    id: "a2-goto-7",
    type: "multiple-choice",
    question: "He ___ study medicine at university.",
    options: ["is going to", "are going to", "am going to", "going to"],
    correctAnswer: "is going to",
    explanation: "Planned decision: is going to + verb.",
    explanationSpanish: "Decisión planeada: is going to + verbo.",
    category: "going-to-future",
    difficulty: "easy"
  },
  {
    id: "a2-goto-8",
    type: "multiple-choice",
    question: "Be careful! You ___ fall!",
    options: ["are going to", "is going to", "going to", "will going to"],
    correctAnswer: "are going to",
    explanation: "Prediction based on present evidence - 'going to'.",
    explanationSpanish: "Predicción basada en evidencia presente - 'going to'.",
    category: "going-to-future",
    difficulty: "medium"
  },
];

// ==================== COULD & SHOULD ====================
export const a2CouldShouldExercises: GrammarExercise[] = [
  {
    id: "a2-cs-1",
    type: "multiple-choice",
    question: "___ you help me with this, please?",
    options: ["Could", "Should", "Must", "Have"],
    correctAnswer: "Could",
    explanation: "'Could' for polite requests.",
    explanationSpanish: "'Could' para peticiones educadas.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-2",
    type: "multiple-choice",
    question: "You ___ see a doctor. You look ill.",
    options: ["should", "could", "would", "might"],
    correctAnswer: "should",
    explanation: "'Should' for advice and recommendations.",
    explanationSpanish: "'Should' para consejos y recomendaciones.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-3",
    type: "multiple-choice",
    question: "When I was young, I ___ run very fast.",
    options: ["could", "should", "would", "can"],
    correctAnswer: "could",
    explanation: "'Could' for past ability.",
    explanationSpanish: "'Could' para habilidad en el pasado.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-4",
    type: "multiple-choice",
    question: "You ___ eat more vegetables. They're healthy.",
    options: ["should", "could", "would", "might"],
    correctAnswer: "should",
    explanation: "'Should' for giving advice about health.",
    explanationSpanish: "'Should' para dar consejos sobre salud.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-5",
    type: "multiple-choice",
    question: "___ I borrow your pen?",
    options: ["Could", "Should", "Must", "Shall"],
    correctAnswer: "Could",
    explanation: "'Could' for asking permission politely.",
    explanationSpanish: "'Could' para pedir permiso educadamente.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-6",
    type: "multiple-choice",
    question: "You ___ study harder if you want to pass.",
    options: ["should", "could", "would", "might"],
    correctAnswer: "should",
    explanation: "'Should' for strong recommendations.",
    explanationSpanish: "'Should' para recomendaciones fuertes.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-7",
    type: "multiple-choice",
    question: "She ___ swim when she was five years old.",
    options: ["could", "should", "can", "must"],
    correctAnswer: "could",
    explanation: "'Could' describes past ability at a specific age.",
    explanationSpanish: "'Could' describe habilidad pasada a una edad específica.",
    category: "could-should",
    difficulty: "easy"
  },
  {
    id: "a2-cs-8",
    type: "multiple-choice",
    question: "You ___ be more careful when driving.",
    options: ["should", "could", "would", "might"],
    correctAnswer: "should",
    explanation: "'Should' for advice about behavior.",
    explanationSpanish: "'Should' para consejos sobre comportamiento.",
    category: "could-should",
    difficulty: "easy"
  },
];

// ==================== FIRST CONDITIONAL ====================
export const a2FirstConditionalExercises: GrammarExercise[] = [
  {
    id: "a2-fc-1",
    type: "multiple-choice",
    question: "If it ___ tomorrow, we will stay home.",
    options: ["rains", "will rain", "rain", "rained"],
    correctAnswer: "rains",
    explanation: "First conditional: If + present simple, will + infinitive.",
    explanationSpanish: "Primera condicional: If + presente simple, will + infinitivo.",
    category: "first-conditional",
    difficulty: "easy"
  },
  {
    id: "a2-fc-2",
    type: "multiple-choice",
    question: "If you study hard, you ___ pass the exam.",
    options: ["will", "would", "can", "are"],
    correctAnswer: "will",
    explanation: "Result clause uses 'will' + infinitive.",
    explanationSpanish: "La cláusula de resultado usa 'will' + infinitivo.",
    category: "first-conditional",
    difficulty: "easy"
  },
  {
    id: "a2-fc-3",
    type: "multiple-choice",
    question: "She ___ be late if she doesn't hurry.",
    options: ["will", "would", "is", "was"],
    correctAnswer: "will",
    explanation: "First conditional for possible future situations.",
    explanationSpanish: "Primera condicional para situaciones futuras posibles.",
    category: "first-conditional",
    difficulty: "easy"
  },
  {
    id: "a2-fc-4",
    type: "multiple-choice",
    question: "If we ___ a taxi, we'll arrive on time.",
    options: ["take", "will take", "took", "taking"],
    correctAnswer: "take",
    explanation: "If-clause uses present simple, not 'will'.",
    explanationSpanish: "La cláusula con if usa presente simple, no 'will'.",
    category: "first-conditional",
    difficulty: "medium"
  },
  {
    id: "a2-fc-5",
    type: "multiple-choice",
    question: "If he ___ me, I'll tell him the news.",
    options: ["calls", "will call", "called", "calling"],
    correctAnswer: "calls",
    explanation: "Present simple in the if-clause for first conditional.",
    explanationSpanish: "Presente simple en la cláusula if para primera condicional.",
    category: "first-conditional",
    difficulty: "easy"
  },
  {
    id: "a2-fc-6",
    type: "multiple-choice",
    question: "I ___ help you if you ask nicely.",
    options: ["will", "would", "am", "do"],
    correctAnswer: "will",
    explanation: "Main clause uses 'will' for likely future results.",
    explanationSpanish: "La cláusula principal usa 'will' para resultados futuros probables.",
    category: "first-conditional",
    difficulty: "easy"
  },
  {
    id: "a2-fc-7",
    type: "multiple-choice",
    question: "If the weather ___ nice, we'll have a picnic.",
    options: ["is", "will be", "was", "would be"],
    correctAnswer: "is",
    explanation: "Condition (if-clause) uses present simple.",
    explanationSpanish: "La condición (cláusula if) usa presente simple.",
    category: "first-conditional",
    difficulty: "easy"
  },
  {
    id: "a2-fc-8",
    type: "multiple-choice",
    question: "They won't come if they ___ busy.",
    options: ["are", "will be", "were", "would be"],
    correctAnswer: "are",
    explanation: "Present simple in if-clause, even with negative main clause.",
    explanationSpanish: "Presente simple en cláusula if, incluso con cláusula principal negativa.",
    category: "first-conditional",
    difficulty: "medium"
  },
];

// ==================== DAILY ROUTINES & HABITS ====================
export const a2DailyRoutinesExercises: GrammarExercise[] = [
  {
    id: "a2-dr-1",
    type: "multiple-choice",
    question: "I ___ wake up at 6 AM. I love sleeping late.",
    options: ["never", "always", "usually", "often"],
    correctAnswer: "never",
    explanation: "'Never' = 0% frequency. The second sentence confirms no early waking.",
    explanationSpanish: "'Never' = 0% frecuencia. La segunda oración confirma que no despierta temprano.",
    category: "daily-routines",
    difficulty: "easy"
  },
  {
    id: "a2-dr-2",
    type: "multiple-choice",
    question: "She ___ drinks coffee in the morning. She can't function without it.",
    options: ["always", "never", "rarely", "seldom"],
    correctAnswer: "always",
    explanation: "'Always' = 100% frequency. She needs it every day.",
    explanationSpanish: "'Always' = 100% frecuencia. Lo necesita todos los días.",
    category: "daily-routines",
    difficulty: "easy"
  },
  {
    id: "a2-dr-3",
    type: "multiple-choice",
    question: "They ___ go to the gym - about 3 times a week.",
    options: ["often", "never", "always", "rarely"],
    correctAnswer: "often",
    explanation: "'Often' = frequently, about 60-80% of the time.",
    explanationSpanish: "'Often' = frecuentemente, aproximadamente 60-80% del tiempo.",
    category: "daily-routines",
    difficulty: "easy"
  },
  {
    id: "a2-dr-4",
    type: "multiple-choice",
    question: "We ___ eat out. Maybe once a month.",
    options: ["rarely", "always", "often", "usually"],
    correctAnswer: "rarely",
    explanation: "'Rarely' = not often, about 10-20% of the time.",
    explanationSpanish: "'Rarely' = no muy a menudo, aproximadamente 10-20% del tiempo.",
    category: "daily-routines",
    difficulty: "easy"
  },
  {
    id: "a2-dr-5",
    type: "multiple-choice",
    question: "He ___ takes the bus to work, but sometimes he drives.",
    options: ["usually", "never", "always", "rarely"],
    correctAnswer: "usually",
    explanation: "'Usually' = most of the time, but not always.",
    explanationSpanish: "'Usually' = la mayoría del tiempo, pero no siempre.",
    category: "daily-routines",
    difficulty: "easy"
  },
  {
    id: "a2-dr-6",
    type: "multiple-choice",
    question: "I ___ check my email before breakfast.",
    options: ["sometimes", "never sometimes", "time sometimes", "some time"],
    correctAnswer: "sometimes",
    explanation: "'Sometimes' = occasionally, about 40-50% of the time.",
    explanationSpanish: "'Sometimes' = ocasionalmente, aproximadamente 40-50% del tiempo.",
    category: "daily-routines",
    difficulty: "easy"
  },
];

// ==================== DESCRIBING PEOPLE & PLACES ====================
export const a2DescribingExercises: GrammarExercise[] = [
  {
    id: "a2-desc-1",
    type: "multiple-choice",
    question: "She has ___ hair and blue eyes.",
    options: ["long brown", "brown long", "long and brown", "browns long"],
    correctAnswer: "long brown",
    explanation: "Adjective order: size (long) before color (brown).",
    explanationSpanish: "Orden de adjetivos: tamaño (long) antes de color (brown).",
    category: "describing-people",
    difficulty: "medium"
  },
  {
    id: "a2-desc-2",
    type: "multiple-choice",
    question: "He is very ___. He always helps others.",
    options: ["kind", "tall", "short", "young"],
    correctAnswer: "kind",
    explanation: "'Kind' describes personality - helpful and caring.",
    explanationSpanish: "'Kind' describe personalidad - amable y cariñoso.",
    category: "describing-people",
    difficulty: "easy"
  },
  {
    id: "a2-desc-3",
    type: "multiple-choice",
    question: "It's a ___ old Italian restaurant.",
    options: ["beautiful", "Italy", "beautifuly", "beauty"],
    correctAnswer: "beautiful",
    explanation: "Adjective order: opinion (beautiful) + age (old) + origin (Italian).",
    explanationSpanish: "Orden de adjetivos: opinión (beautiful) + edad (old) + origen (Italian).",
    category: "describing-places",
    difficulty: "medium"
  },
  {
    id: "a2-desc-4",
    type: "multiple-choice",
    question: "The city is very ___ and exciting.",
    options: ["modern", "moderns", "modernly", "modernest"],
    correctAnswer: "modern",
    explanation: "Use adjective form after 'is' - not adverb or plural.",
    explanationSpanish: "Usar forma de adjetivo después de 'is' - no adverbio o plural.",
    category: "describing-places",
    difficulty: "easy"
  },
  {
    id: "a2-desc-5",
    type: "multiple-choice",
    question: "My brother is ___. He makes everyone laugh.",
    options: ["funny", "serious", "quiet", "shy"],
    correctAnswer: "funny",
    explanation: "'Funny' = someone who makes people laugh.",
    explanationSpanish: "'Funny' = alguien que hace reír a la gente.",
    category: "describing-people",
    difficulty: "easy"
  },
  {
    id: "a2-desc-6",
    type: "multiple-choice",
    question: "The beach was ___ and quiet.",
    options: ["peaceful", "peacefull", "peacefully", "peace"],
    correctAnswer: "peaceful",
    explanation: "Adjective form: peaceful (not peacefull or peacefully).",
    explanationSpanish: "Forma de adjetivo: peaceful (no peacefull o peacefully).",
    category: "describing-places",
    difficulty: "easy"
  },
];

// ==================== SHOPPING & WORK LANGUAGE ====================
export const a2ShoppingWorkExercises: GrammarExercise[] = [
  {
    id: "a2-sw-1",
    type: "multiple-choice",
    question: "How much ___ these shoes?",
    options: ["are", "is", "do", "does"],
    correctAnswer: "are",
    explanation: "'Shoes' is plural, so use 'are' with 'How much'.",
    explanationSpanish: "'Shoes' es plural, así que usar 'are' con 'How much'.",
    category: "shopping",
    difficulty: "easy"
  },
  {
    id: "a2-sw-2",
    type: "multiple-choice",
    question: "A: What do you do? B: I ___ a teacher.",
    options: ["am", "work", "do", "have"],
    correctAnswer: "am",
    explanation: "To state your job: I am + profession.",
    explanationSpanish: "Para indicar tu trabajo: I am + profesión.",
    category: "jobs",
    difficulty: "easy"
  },
  {
    id: "a2-sw-3",
    type: "multiple-choice",
    question: "Can I ___ by credit card?",
    options: ["pay", "paying", "paid", "pays"],
    correctAnswer: "pay",
    explanation: "After 'can', use base form of verb.",
    explanationSpanish: "Después de 'can', usar forma base del verbo.",
    category: "shopping",
    difficulty: "easy"
  },
  {
    id: "a2-sw-4",
    type: "multiple-choice",
    question: "She ___ in an office downtown.",
    options: ["works", "work", "working", "worked"],
    correctAnswer: "works",
    explanation: "Present simple with 'she' - add -s to verb.",
    explanationSpanish: "Presente simple con 'she' - añadir -s al verbo.",
    category: "jobs",
    difficulty: "easy"
  },
  {
    id: "a2-sw-5",
    type: "multiple-choice",
    question: "Do you have this ___ a smaller size?",
    options: ["in", "on", "at", "with"],
    correctAnswer: "in",
    explanation: "'In a size' is the correct preposition for clothing sizes.",
    explanationSpanish: "'In a size' es la preposición correcta para tallas de ropa.",
    category: "shopping",
    difficulty: "easy"
  },
  {
    id: "a2-sw-6",
    type: "multiple-choice",
    question: "He is ___ for customer service.",
    options: ["responsible", "responsibility", "responsibly", "response"],
    correctAnswer: "responsible",
    explanation: "'Responsible for' = in charge of something.",
    explanationSpanish: "'Responsible for' = a cargo de algo.",
    category: "jobs",
    difficulty: "medium"
  },
  {
    id: "a2-sw-7",
    type: "multiple-choice",
    question: "I'd like to ___ this on, please.",
    options: ["try", "trying", "tried", "tries"],
    correctAnswer: "try",
    explanation: "After 'would like to', use base form of verb.",
    explanationSpanish: "Después de 'would like to', usar forma base del verbo.",
    category: "shopping",
    difficulty: "easy"
  },
  {
    id: "a2-sw-8",
    type: "multiple-choice",
    question: "What time do you ___ work?",
    options: ["finish", "finishing", "finished", "finishes"],
    correctAnswer: "finish",
    explanation: "After 'do you', use base form of verb.",
    explanationSpanish: "Después de 'do you', usar forma base del verbo.",
    category: "jobs",
    difficulty: "easy"
  },
];

// ==================== AGGREGATE ALL A2 EXERCISES ====================
export const allA2CompleteExercises: GrammarExercise[] = [
  ...a2PastSimpleRegularExercises,
  ...a2PastSimpleIrregularExercises,
  ...a2PastSimpleNegQuestExercises,
  ...a2ComparativeExercises,
  ...a2SuperlativeExercises,
  ...a2GoingToExercises,
  ...a2CouldShouldExercises,
  ...a2FirstConditionalExercises,
  ...a2DailyRoutinesExercises,
  ...a2DescribingExercises,
  ...a2ShoppingWorkExercises,
];

// Helper to get exercises by category
export function getA2CompleteExercisesByCategory(category: string): GrammarExercise[] {
  return allA2CompleteExercises.filter(ex => 
    ex.category === category || ex.category.includes(category)
  );
}

// Stats for A2 exercises
export const a2CompleteStats = {
  pastSimpleRegular: a2PastSimpleRegularExercises.length,
  pastSimpleIrregular: a2PastSimpleIrregularExercises.length,
  pastSimpleNegQuest: a2PastSimpleNegQuestExercises.length,
  comparatives: a2ComparativeExercises.length,
  superlatives: a2SuperlativeExercises.length,
  goingTo: a2GoingToExercises.length,
  couldShould: a2CouldShouldExercises.length,
  firstConditional: a2FirstConditionalExercises.length,
  dailyRoutines: a2DailyRoutinesExercises.length,
  describing: a2DescribingExercises.length,
  shoppingWork: a2ShoppingWorkExercises.length,
  total: allA2CompleteExercises.length,
};
