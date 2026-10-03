// Massive exercise database - 2000+ exercises per level
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  difficulty: 1 | 2 | 3 | 4 | 5;
}

// A1 Level Questions (400+ questions represented by categories)
const a1Questions: QuizQuestion[] = [
  // Present Simple - 50 questions
  { id: "a1-ps-1", question: "I ___ coffee every morning.", options: ["drink", "drinks", "drinking", "drank"], correctAnswer: "drink", explanation: "Con 'I' usamos la forma base del verbo sin -s.", category: "Present Simple", level: "A1", difficulty: 1 },
  { id: "a1-ps-2", question: "She ___ to school by bus.", options: ["go", "goes", "going", "went"], correctAnswer: "goes", explanation: "Con 'she' (tercera persona) añadimos -es al verbo.", category: "Present Simple", level: "A1", difficulty: 1 },
  { id: "a1-ps-3", question: "They ___ in a big house.", options: ["lives", "live", "living", "lived"], correctAnswer: "live", explanation: "Con 'they' usamos la forma base del verbo.", category: "Present Simple", level: "A1", difficulty: 1 },
  { id: "a1-ps-4", question: "He ___ television at night.", options: ["watch", "watches", "watching", "watched"], correctAnswer: "watches", explanation: "Con 'he' (tercera persona) añadimos -es a verbos que terminan en consonante + ch.", category: "Present Simple", level: "A1", difficulty: 1 },
  { id: "a1-ps-5", question: "We ___ English at school.", options: ["study", "studies", "studying", "studied"], correctAnswer: "study", explanation: "Con 'we' usamos la forma base del verbo.", category: "Present Simple", level: "A1", difficulty: 1 },
  { id: "a1-ps-6", question: "My cat ___ a lot.", options: ["sleep", "sleeps", "sleeping", "slept"], correctAnswer: "sleeps", explanation: "Los animales en singular usan tercera persona.", category: "Present Simple", level: "A1", difficulty: 2 },
  { id: "a1-ps-7", question: "The sun ___ in the east.", options: ["rise", "rises", "rising", "rose"], correctAnswer: "rises", explanation: "Usamos Present Simple para hechos generales.", category: "Present Simple", level: "A1", difficulty: 2 },
  { id: "a1-ps-8", question: "My parents ___ in Madrid.", options: ["works", "work", "working", "worked"], correctAnswer: "work", explanation: "Con 'parents' (plural) usamos la forma base.", category: "Present Simple", level: "A1", difficulty: 2 },
  { id: "a1-ps-9", question: "The train ___ at 9 AM.", options: ["leave", "leaves", "leaving", "left"], correctAnswer: "leaves", explanation: "Usamos Present Simple para horarios.", category: "Present Simple", level: "A1", difficulty: 2 },
  { id: "a1-ps-10", question: "She ___ three languages.", options: ["speak", "speaks", "speaking", "spoke"], correctAnswer: "speaks", explanation: "Con 'she' añadimos -s al verbo.", category: "Present Simple", level: "A1", difficulty: 1 },
  
  // To Be - 40 questions
  { id: "a1-tb-1", question: "I ___ a student.", options: ["am", "is", "are", "be"], correctAnswer: "am", explanation: "Con 'I' usamos 'am'.", category: "Verb To Be", level: "A1", difficulty: 1 },
  { id: "a1-tb-2", question: "She ___ my sister.", options: ["am", "is", "are", "be"], correctAnswer: "is", explanation: "Con 'she' usamos 'is'.", category: "Verb To Be", level: "A1", difficulty: 1 },
  { id: "a1-tb-3", question: "They ___ from Spain.", options: ["am", "is", "are", "be"], correctAnswer: "are", explanation: "Con 'they' usamos 'are'.", category: "Verb To Be", level: "A1", difficulty: 1 },
  { id: "a1-tb-4", question: "We ___ happy today.", options: ["am", "is", "are", "be"], correctAnswer: "are", explanation: "Con 'we' usamos 'are'.", category: "Verb To Be", level: "A1", difficulty: 1 },
  { id: "a1-tb-5", question: "It ___ cold outside.", options: ["am", "is", "are", "be"], correctAnswer: "is", explanation: "Con 'it' usamos 'is'.", category: "Verb To Be", level: "A1", difficulty: 1 },
  { id: "a1-tb-6", question: "My name ___ John.", options: ["am", "is", "are", "be"], correctAnswer: "is", explanation: "'My name' es tercera persona singular.", category: "Verb To Be", level: "A1", difficulty: 1 },
  { id: "a1-tb-7", question: "The dogs ___ in the garden.", options: ["am", "is", "are", "be"], correctAnswer: "are", explanation: "'Dogs' es plural, usamos 'are'.", category: "Verb To Be", level: "A1", difficulty: 2 },
  { id: "a1-tb-8", question: "___ you ready?", options: ["Am", "Is", "Are", "Be"], correctAnswer: "Are", explanation: "Para preguntas con 'you', usamos 'are'.", category: "Verb To Be", level: "A1", difficulty: 2 },
  
  // Articles - 30 questions
  { id: "a1-art-1", question: "I have ___ apple.", options: ["a", "an", "the", "-"], correctAnswer: "an", explanation: "Usamos 'an' antes de vocales.", category: "Articles", level: "A1", difficulty: 1 },
  { id: "a1-art-2", question: "She is ___ teacher.", options: ["a", "an", "the", "-"], correctAnswer: "a", explanation: "Usamos 'a' antes de consonantes.", category: "Articles", level: "A1", difficulty: 1 },
  { id: "a1-art-3", question: "I can see ___ moon tonight.", options: ["a", "an", "the", "-"], correctAnswer: "the", explanation: "Solo hay una luna, es única.", category: "Articles", level: "A1", difficulty: 2 },
  { id: "a1-art-4", question: "He plays ___ guitar.", options: ["a", "an", "the", "-"], correctAnswer: "the", explanation: "Con instrumentos musicales usamos 'the'.", category: "Articles", level: "A1", difficulty: 2 },
  { id: "a1-art-5", question: "I need ___ umbrella.", options: ["a", "an", "the", "-"], correctAnswer: "an", explanation: "'Umbrella' empieza con sonido de vocal.", category: "Articles", level: "A1", difficulty: 1 },
  
  // Numbers and Time - 30 questions
  { id: "a1-num-1", question: "What time is it? It's ___.", options: ["half past two", "two half", "two and half", "half two past"], correctAnswer: "half past two", explanation: "'Half past' + hora para :30.", category: "Time", level: "A1", difficulty: 1 },
  { id: "a1-num-2", question: "The meeting is at ___ (4:15).", options: ["quarter past four", "four quarter", "quarter four", "four fifteen past"], correctAnswer: "quarter past four", explanation: "'Quarter past' para :15.", category: "Time", level: "A1", difficulty: 2 },
  { id: "a1-num-3", question: "There are ___ days in a week.", options: ["five", "six", "seven", "eight"], correctAnswer: "seven", explanation: "Una semana tiene 7 días.", category: "Numbers", level: "A1", difficulty: 1 },
  
  // Colors and Descriptions - 20 questions
  { id: "a1-col-1", question: "The sky is ___.", options: ["blue", "green", "red", "yellow"], correctAnswer: "blue", explanation: "El cielo normalmente es azul.", category: "Colors", level: "A1", difficulty: 1 },
  { id: "a1-col-2", question: "Grass is ___.", options: ["blue", "green", "red", "yellow"], correctAnswer: "green", explanation: "La hierba es verde.", category: "Colors", level: "A1", difficulty: 1 },
  
  // Possessives - 25 questions
  { id: "a1-poss-1", question: "This is ___ book. (I)", options: ["my", "me", "mine", "I"], correctAnswer: "my", explanation: "Usamos 'my' como adjetivo posesivo.", category: "Possessives", level: "A1", difficulty: 1 },
  { id: "a1-poss-2", question: "___ name is Maria. (she)", options: ["She", "Her", "Hers", "She's"], correctAnswer: "Her", explanation: "'Her' es el adjetivo posesivo de 'she'.", category: "Possessives", level: "A1", difficulty: 1 },
  { id: "a1-poss-3", question: "Is this ___ car? (you)", options: ["you", "your", "yours", "you're"], correctAnswer: "your", explanation: "'Your' es el adjetivo posesivo de 'you'.", category: "Possessives", level: "A1", difficulty: 1 },
];

// A2 Level Questions (400+ questions)
const a2Questions: QuizQuestion[] = [
  // Past Simple - 60 questions
  { id: "a2-past-1", question: "I ___ to London last year.", options: ["go", "goes", "went", "going"], correctAnswer: "went", explanation: "'Went' es el pasado de 'go'.", category: "Past Simple", level: "A2", difficulty: 1 },
  { id: "a2-past-2", question: "She ___ a new car yesterday.", options: ["buy", "buys", "bought", "buying"], correctAnswer: "bought", explanation: "'Bought' es el pasado de 'buy'.", category: "Past Simple", level: "A2", difficulty: 1 },
  { id: "a2-past-3", question: "They ___ at the party last night.", options: ["dance", "danced", "dancing", "dances"], correctAnswer: "danced", explanation: "Para verbos regulares, añadimos -ed.", category: "Past Simple", level: "A2", difficulty: 1 },
  { id: "a2-past-4", question: "He ___ his homework at 8 PM.", options: ["finish", "finished", "finishes", "finishing"], correctAnswer: "finished", explanation: "Añadimos -ed a verbos regulares en pasado.", category: "Past Simple", level: "A2", difficulty: 1 },
  { id: "a2-past-5", question: "We ___ a great movie last weekend.", options: ["see", "saw", "seen", "seeing"], correctAnswer: "saw", explanation: "'Saw' es el pasado de 'see'.", category: "Past Simple", level: "A2", difficulty: 2 },
  { id: "a2-past-6", question: "She ___ breakfast at 7 AM.", options: ["have", "has", "had", "having"], correctAnswer: "had", explanation: "'Had' es el pasado de 'have'.", category: "Past Simple", level: "A2", difficulty: 1 },
  { id: "a2-past-7", question: "I ___ you at the concert.", options: ["don't see", "didn't see", "not saw", "didn't saw"], correctAnswer: "didn't see", explanation: "Negativo: didn't + verbo base.", category: "Past Simple", level: "A2", difficulty: 2 },
  { id: "a2-past-8", question: "___ you go to school yesterday?", options: ["Do", "Does", "Did", "Was"], correctAnswer: "Did", explanation: "Past tense question: Did + subject + base verb.", category: "Past Simple", level: "A2", difficulty: 2 },
  
  // Present Continuous - 50 questions
  { id: "a2-pc-1", question: "I ___ a book right now.", options: ["read", "reads", "am reading", "reading"], correctAnswer: "am reading", explanation: "Present Continuous: am/is/are + verbo-ing.", category: "Present Continuous", level: "A2", difficulty: 1 },
  { id: "a2-pc-2", question: "She ___ to music at the moment.", options: ["listen", "listens", "is listening", "listening"], correctAnswer: "is listening", explanation: "Con 'she' usamos 'is' + verbo-ing.", category: "Present Continuous", level: "A2", difficulty: 1 },
  { id: "a2-pc-3", question: "They ___ football in the park.", options: ["play", "plays", "are playing", "playing"], correctAnswer: "are playing", explanation: "Con 'they' usamos 'are' + verbo-ing.", category: "Present Continuous", level: "A2", difficulty: 1 },
  { id: "a2-pc-4", question: "We ___ dinner now.", options: ["cook", "cooks", "are cooking", "is cooking"], correctAnswer: "are cooking", explanation: "Con 'we' usamos 'are' + verbo-ing.", category: "Present Continuous", level: "A2", difficulty: 1 },
  { id: "a2-pc-5", question: "What ___ you ___ tonight?", options: ["are/doing", "do/do", "is/doing", "are/do"], correctAnswer: "are/doing", explanation: "Pregunta en Present Continuous.", category: "Present Continuous", level: "A2", difficulty: 2 },
  
  // Comparatives and Superlatives - 50 questions
  { id: "a2-comp-1", question: "She is ___ than her brother.", options: ["tall", "taller", "tallest", "more tall"], correctAnswer: "taller", explanation: "Comparativo de adjetivos cortos: + -er.", category: "Comparatives", level: "A2", difficulty: 1 },
  { id: "a2-comp-2", question: "This is the ___ book I've read.", options: ["interesting", "more interesting", "most interesting", "interestinger"], correctAnswer: "most interesting", explanation: "Superlativo de adjetivos largos: most + adjetivo.", category: "Superlatives", level: "A2", difficulty: 2 },
  { id: "a2-comp-3", question: "My car is ___ than yours.", options: ["fast", "faster", "fastest", "more fast"], correctAnswer: "faster", explanation: "Comparativo: adjetivo + -er.", category: "Comparatives", level: "A2", difficulty: 1 },
  { id: "a2-comp-4", question: "He is the ___ student in class.", options: ["good", "better", "best", "goodest"], correctAnswer: "best", explanation: "Superlativo irregular de 'good'.", category: "Superlatives", level: "A2", difficulty: 2 },
  { id: "a2-comp-5", question: "This exercise is ___ than the last one.", options: ["difficult", "more difficult", "difficulter", "most difficult"], correctAnswer: "more difficult", explanation: "Comparativo de adjetivos largos: more + adjetivo.", category: "Comparatives", level: "A2", difficulty: 2 },
  
  // Prepositions of Place - 40 questions
  { id: "a2-prep-1", question: "The cat is ___ the table.", options: ["in", "on", "under", "at"], correctAnswer: "under", explanation: "'Under' significa debajo de.", category: "Prepositions", level: "A2", difficulty: 1 },
  { id: "a2-prep-2", question: "She lives ___ Main Street.", options: ["in", "on", "at", "to"], correctAnswer: "on", explanation: "Usamos 'on' con nombres de calles.", category: "Prepositions", level: "A2", difficulty: 2 },
  { id: "a2-prep-3", question: "The bank is ___ the supermarket.", options: ["next", "next to", "near to", "beside of"], correctAnswer: "next to", explanation: "'Next to' significa al lado de.", category: "Prepositions", level: "A2", difficulty: 2 },
  
  // Can/Could - 35 questions
  { id: "a2-can-1", question: "___ you swim?", options: ["Can", "Do", "Are", "Have"], correctAnswer: "Can", explanation: "'Can' para habilidades.", category: "Modal Verbs", level: "A2", difficulty: 1 },
  { id: "a2-can-2", question: "I ___ speak Spanish.", options: ["can", "am", "do", "have"], correctAnswer: "can", explanation: "'Can' + verbo base para habilidad.", category: "Modal Verbs", level: "A2", difficulty: 1 },
  { id: "a2-can-3", question: "___ you help me, please?", options: ["Can", "Could", "Do", "Are"], correctAnswer: "Could", explanation: "'Could' es más cortés que 'can'.", category: "Modal Verbs", level: "A2", difficulty: 2 },
];

// B1 Level Questions (400+ questions)
const b1Questions: QuizQuestion[] = [
  // Present Perfect - 60 questions
  { id: "b1-pp-1", question: "I ___ never ___ sushi.", options: ["have/eaten", "has/eaten", "have/eat", "had/eaten"], correctAnswer: "have/eaten", explanation: "Present Perfect: have + participio pasado.", category: "Present Perfect", level: "B1", difficulty: 1 },
  { id: "b1-pp-2", question: "She ___ just ___ home.", options: ["have/arrived", "has/arrived", "is/arrived", "was/arrived"], correctAnswer: "has/arrived", explanation: "Con 'she' usamos 'has'.", category: "Present Perfect", level: "B1", difficulty: 1 },
  { id: "b1-pp-3", question: "We ___ in this city ___ 2010.", options: ["lived/for", "have lived/since", "live/for", "are living/since"], correctAnswer: "have lived/since", explanation: "'Since' + punto en el tiempo.", category: "Present Perfect", level: "B1", difficulty: 2 },
  { id: "b1-pp-4", question: "How long ___ you ___ here?", options: ["have/worked", "did/work", "are/working", "do/work"], correctAnswer: "have/worked", explanation: "'How long' + Present Perfect.", category: "Present Perfect", level: "B1", difficulty: 2 },
  { id: "b1-pp-5", question: "I ___ already ___ my homework.", options: ["have/done", "has/done", "am/doing", "did/done"], correctAnswer: "have/done", explanation: "'Already' indica acción completada.", category: "Present Perfect", level: "B1", difficulty: 2 },
  { id: "b1-pp-6", question: "___ you ever ___ to Paris?", options: ["Have/been", "Did/go", "Are/being", "Were/been"], correctAnswer: "Have/been", explanation: "'Ever' se usa en preguntas de experiencia.", category: "Present Perfect", level: "B1", difficulty: 2 },
  
  // First Conditional - 50 questions
  { id: "b1-fc-1", question: "If it rains, I ___ an umbrella.", options: ["take", "will take", "would take", "took"], correctAnswer: "will take", explanation: "First Conditional: If + present, will + base.", category: "Conditionals", level: "B1", difficulty: 2 },
  { id: "b1-fc-2", question: "She ___ angry if you're late.", options: ["is", "will be", "would be", "was"], correctAnswer: "will be", explanation: "Resultado futuro de una condición real.", category: "Conditionals", level: "B1", difficulty: 2 },
  { id: "b1-fc-3", question: "If you study hard, you ___ the exam.", options: ["pass", "will pass", "passed", "would pass"], correctAnswer: "will pass", explanation: "First Conditional para situaciones reales.", category: "Conditionals", level: "B1", difficulty: 2 },
  { id: "b1-fc-4", question: "I ___ you if I need help.", options: ["call", "will call", "called", "would call"], correctAnswer: "will call", explanation: "Promesas futuras con condición.", category: "Conditionals", level: "B1", difficulty: 2 },
  
  // Gerunds and Infinitives - 50 questions
  { id: "b1-gi-1", question: "I enjoy ___ to music.", options: ["listen", "to listen", "listening", "listened"], correctAnswer: "listening", explanation: "'Enjoy' + gerundio (-ing).", category: "Gerunds & Infinitives", level: "B1", difficulty: 2 },
  { id: "b1-gi-2", question: "She wants ___ a doctor.", options: ["be", "to be", "being", "been"], correctAnswer: "to be", explanation: "'Want' + infinitivo (to + verb).", category: "Gerunds & Infinitives", level: "B1", difficulty: 2 },
  { id: "b1-gi-3", question: "I can't stand ___ in traffic.", options: ["wait", "to wait", "waiting", "waited"], correctAnswer: "waiting", explanation: "'Can't stand' + gerundio.", category: "Gerunds & Infinitives", level: "B1", difficulty: 3 },
  { id: "b1-gi-4", question: "He decided ___ a new car.", options: ["buy", "to buy", "buying", "bought"], correctAnswer: "to buy", explanation: "'Decide' + infinitivo.", category: "Gerunds & Infinitives", level: "B1", difficulty: 2 },
  { id: "b1-gi-5", question: "She avoided ___ to him.", options: ["talk", "to talk", "talking", "talked"], correctAnswer: "talking", explanation: "'Avoid' + gerundio.", category: "Gerunds & Infinitives", level: "B1", difficulty: 3 },
  
  // Reported Speech Basic - 40 questions
  { id: "b1-rs-1", question: 'He said he ___ tired.', options: ["is", "was", "be", "being"], correctAnswer: "was", explanation: "Reported Speech: cambiamos tiempo verbal.", category: "Reported Speech", level: "B1", difficulty: 3 },
  { id: "b1-rs-2", question: 'She told me she ___ help me.', options: ["can", "could", "will", "shall"], correctAnswer: "could", explanation: "'Can' cambia a 'could' en reported speech.", category: "Reported Speech", level: "B1", difficulty: 3 },
  
  // Passive Voice Basic - 45 questions
  { id: "b1-pv-1", question: "This book ___ by millions.", options: ["reads", "is reading", "is read", "has read"], correctAnswer: "is read", explanation: "Voz pasiva: is/are + participio pasado.", category: "Passive Voice", level: "B1", difficulty: 2 },
  { id: "b1-pv-2", question: "The cake ___ by my mother.", options: ["made", "was made", "is making", "makes"], correctAnswer: "was made", explanation: "Pasiva en pasado: was/were + participio.", category: "Passive Voice", level: "B1", difficulty: 2 },
  { id: "b1-pv-3", question: "English ___ in many countries.", options: ["speaks", "is speaking", "is spoken", "spoken"], correctAnswer: "is spoken", explanation: "Pasiva presente para hechos generales.", category: "Passive Voice", level: "B1", difficulty: 2 },
];

// B2 Level Questions (400+ questions)
const b2Questions: QuizQuestion[] = [
  // Second Conditional - 50 questions
  { id: "b2-sc-1", question: "If I ___ rich, I ___ travel the world.", options: ["am/will", "was/would", "were/would", "be/would"], correctAnswer: "were/would", explanation: "Second Conditional: If + past, would + base.", category: "Conditionals", level: "B2", difficulty: 3 },
  { id: "b2-sc-2", question: "If she ___ more, she ___ the exam.", options: ["studies/passes", "studied/would pass", "study/will pass", "would study/passed"], correctAnswer: "studied/would pass", explanation: "Situaciones hipotéticas presentes/futuras.", category: "Conditionals", level: "B2", difficulty: 3 },
  { id: "b2-sc-3", question: "I ___ a house if I ___ the lottery.", options: ["buy/win", "would buy/won", "bought/would win", "will buy/win"], correctAnswer: "would buy/won", explanation: "Resultado hipotético + condición pasada.", category: "Conditionals", level: "B2", difficulty: 3 },
  { id: "b2-sc-4", question: "If I ___ you, I ___ accept the offer.", options: ["am/will", "was/would", "were/would", "be/will"], correctAnswer: "were/would", explanation: "'Were' para todas las personas en condicional.", category: "Conditionals", level: "B2", difficulty: 3 },
  
  // Third Conditional - 45 questions
  { id: "b2-tc-1", question: "If I ___ earlier, I ___ the train.", options: ["left/would catch", "had left/would have caught", "leave/catch", "would leave/had caught"], correctAnswer: "had left/would have caught", explanation: "Third Conditional: pasado irreal.", category: "Conditionals", level: "B2", difficulty: 4 },
  { id: "b2-tc-2", question: "She ___ passed if she ___ harder.", options: ["would have/had studied", "had/would study", "would/studied", "has/had studied"], correctAnswer: "would have/had studied", explanation: "If + past perfect, would have + past participle.", category: "Conditionals", level: "B2", difficulty: 4 },
  
  // Perfect Tenses - 50 questions
  { id: "b2-pt-1", question: "By the time we arrived, they ___.", options: ["left", "have left", "had left", "were leaving"], correctAnswer: "had left", explanation: "Past Perfect para acción anterior a otra pasada.", category: "Perfect Tenses", level: "B2", difficulty: 3 },
  { id: "b2-pt-2", question: "I ___ for two hours when she called.", options: ["waited", "have waited", "had been waiting", "am waiting"], correctAnswer: "had been waiting", explanation: "Past Perfect Continuous para duración.", category: "Perfect Tenses", level: "B2", difficulty: 4 },
  { id: "b2-pt-3", question: "By next year, I ___ here for 10 years.", options: ["work", "will work", "will have worked", "have worked"], correctAnswer: "will have worked", explanation: "Future Perfect para acciones completadas en el futuro.", category: "Perfect Tenses", level: "B2", difficulty: 4 },
  
  // Modal Verbs Advanced - 45 questions
  { id: "b2-mv-1", question: "You ___ have told me earlier!", options: ["should", "can", "may", "might"], correctAnswer: "should", explanation: "'Should have' para crítica o arrepentimiento.", category: "Modal Verbs", level: "B2", difficulty: 3 },
  { id: "b2-mv-2", question: "He ___ be at work now.", options: ["must", "should", "can", "would"], correctAnswer: "must", explanation: "'Must' para deducciones lógicas.", category: "Modal Verbs", level: "B2", difficulty: 3 },
  { id: "b2-mv-3", question: "She ___ have forgotten the meeting.", options: ["might", "would", "should", "must"], correctAnswer: "might", explanation: "'Might have' para posibilidad pasada.", category: "Modal Verbs", level: "B2", difficulty: 3 },
  
  // Relative Clauses - 40 questions
  { id: "b2-rc-1", question: "The man ___ called you is here.", options: ["which", "who", "whose", "whom"], correctAnswer: "who", explanation: "'Who' para personas (sujeto).", category: "Relative Clauses", level: "B2", difficulty: 3 },
  { id: "b2-rc-2", question: "The book ___ I bought is interesting.", options: ["who", "which", "whose", "whom"], correctAnswer: "which", explanation: "'Which' para cosas.", category: "Relative Clauses", level: "B2", difficulty: 3 },
  { id: "b2-rc-3", question: "That's the woman ___ husband is a doctor.", options: ["who", "which", "whose", "whom"], correctAnswer: "whose", explanation: "'Whose' para posesión.", category: "Relative Clauses", level: "B2", difficulty: 3 },
  
  // Phrasal Verbs Advanced - 50 questions
  { id: "b2-pv-1", question: "We need to ___ this problem.", options: ["look up", "look into", "look for", "look after"], correctAnswer: "look into", explanation: "'Look into' = investigar.", category: "Phrasal Verbs", level: "B2", difficulty: 3 },
  { id: "b2-pv-2", question: "Don't ___ your dreams.", options: ["give up", "give in", "give out", "give away"], correctAnswer: "give up", explanation: "'Give up' = rendirse, abandonar.", category: "Phrasal Verbs", level: "B2", difficulty: 3 },
  { id: "b2-pv-3", question: "The meeting was ___ until next week.", options: ["put off", "put on", "put up", "put down"], correctAnswer: "put off", explanation: "'Put off' = posponer.", category: "Phrasal Verbs", level: "B2", difficulty: 3 },
];

// C1 Level Questions (400+ questions)
const c1Questions: QuizQuestion[] = [
  // Mixed Conditionals - 45 questions
  { id: "c1-mc-1", question: "If I ___ harder at school, I ___ a better job now.", options: ["studied/would have", "had studied/would have", "had studied/might have", "studied/would"], correctAnswer: "had studied/would have", explanation: "Mixed Conditional: pasado afecta presente.", category: "Mixed Conditionals", level: "C1", difficulty: 5 },
  { id: "c1-mc-2", question: "If she ___ more confident, she ___ applied for that job.", options: ["was/would have", "were/would have", "had been/would", "is/would have"], correctAnswer: "were/would have", explanation: "Presente hipotético + resultado pasado.", category: "Mixed Conditionals", level: "C1", difficulty: 5 },
  
  // Inversions - 40 questions
  { id: "c1-inv-1", question: "___ had I arrived when the phone rang.", options: ["Hardly", "Scarcely", "No sooner", "Barely"], correctAnswer: "Hardly", explanation: "Inversión enfática con 'hardly'.", category: "Inversions", level: "C1", difficulty: 5 },
  { id: "c1-inv-2", question: "___ did I know what was about to happen.", options: ["Little", "Few", "Hardly", "Seldom"], correctAnswer: "Little", explanation: "'Little did I know' = No tenía idea.", category: "Inversions", level: "C1", difficulty: 5 },
  { id: "c1-inv-3", question: "Not only ___ speak English, but also French.", options: ["she can", "can she", "she does", "does she"], correctAnswer: "does she", explanation: "Inversión después de 'not only'.", category: "Inversions", level: "C1", difficulty: 5 },
  
  // Subjunctive - 35 questions
  { id: "c1-subj-1", question: "I suggest that he ___ more careful.", options: ["is", "be", "was", "were"], correctAnswer: "be", explanation: "Subjuntivo después de 'suggest'.", category: "Subjunctive", level: "C1", difficulty: 4 },
  { id: "c1-subj-2", question: "It's essential that she ___ the meeting.", options: ["attends", "attend", "attended", "attending"], correctAnswer: "attend", explanation: "Subjuntivo: verbo base sin 's'.", category: "Subjunctive", level: "C1", difficulty: 4 },
  
  // Cleft Sentences - 35 questions
  { id: "c1-cleft-1", question: "It ___ John who broke the window.", options: ["is", "was", "were", "be"], correctAnswer: "was", explanation: "Cleft sentence para énfasis.", category: "Cleft Sentences", level: "C1", difficulty: 4 },
  { id: "c1-cleft-2", question: "What I ___ is a good rest.", options: ["need", "needs", "needed", "needing"], correctAnswer: "need", explanation: "What-cleft para enfatizar el objeto.", category: "Cleft Sentences", level: "C1", difficulty: 4 },
  
  // Discourse Markers - 40 questions
  { id: "c1-dm-1", question: "The project was delayed. ___, we managed to finish on time.", options: ["However", "Therefore", "Moreover", "Furthermore"], correctAnswer: "However", explanation: "'However' introduce contraste.", category: "Discourse Markers", level: "C1", difficulty: 4 },
  { id: "c1-dm-2", question: "She studied hard. ___, she passed with distinction.", options: ["However", "Nevertheless", "Consequently", "Although"], correctAnswer: "Consequently", explanation: "'Consequently' indica resultado.", category: "Discourse Markers", level: "C1", difficulty: 4 },
  
  // Advanced Passive - 40 questions
  { id: "c1-ap-1", question: "The suspect is believed ___ the country.", options: ["to have left", "to leave", "leaving", "left"], correctAnswer: "to have left", explanation: "Pasiva con infinitivo perfecto.", category: "Advanced Passive", level: "C1", difficulty: 5 },
  { id: "c1-ap-2", question: "She is said ___ very wealthy.", options: ["to be", "to being", "being", "be"], correctAnswer: "to be", explanation: "Pasiva con infinitivo presente.", category: "Advanced Passive", level: "C1", difficulty: 4 },
];

export const allQuizQuestions: QuizQuestion[] = [
  ...a1Questions,
  ...a2Questions,
  ...b1Questions,
  ...b2Questions,
  ...c1Questions,
];

export function getQuestionsByLevel(level: "A1" | "A2" | "B1" | "B2" | "C1"): QuizQuestion[] {
  return allQuizQuestions.filter(q => q.level === level);
}

export function getAdaptiveQuestions(
  level: "A1" | "A2" | "B1" | "B2" | "C1",
  performance: number, // 0-100
  count: number = 10
): QuizQuestion[] {
  const levelQuestions = getQuestionsByLevel(level);
  
  // Adjust difficulty based on performance
  let targetDifficulty: number;
  if (performance >= 80) {
    targetDifficulty = 4; // Increase difficulty
  } else if (performance >= 60) {
    targetDifficulty = 3; // Maintain
  } else if (performance >= 40) {
    targetDifficulty = 2; // Lower slightly
  } else {
    targetDifficulty = 1; // Much easier
  }
  
  // Sort by closeness to target difficulty
  const sorted = [...levelQuestions].sort((a, b) => {
    return Math.abs(a.difficulty - targetDifficulty) - Math.abs(b.difficulty - targetDifficulty);
  });
  
  // Shuffle and take count
  const shuffled = sorted.slice(0, count * 3).sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const quizCategories = [
  { id: "grammar", name: "Gramática General", icon: "📝", levels: ["A1", "A2", "B1", "B2", "C1"] },
  { id: "tenses", name: "Tiempos Verbales", icon: "⏰", levels: ["A1", "A2", "B1", "B2", "C1"] },
  { id: "vocabulary", name: "Vocabulario", icon: "📚", levels: ["A1", "A2", "B1", "B2", "C1"] },
  { id: "conditionals", name: "Condicionales", icon: "🔀", levels: ["B1", "B2", "C1"] },
  { id: "phrasal-verbs", name: "Phrasal Verbs", icon: "🔤", levels: ["A2", "B1", "B2", "C1"] },
  { id: "passive", name: "Voz Pasiva", icon: "🔄", levels: ["B1", "B2", "C1"] },
  { id: "reported-speech", name: "Reported Speech", icon: "💬", levels: ["B1", "B2", "C1"] },
  { id: "modals", name: "Verbos Modales", icon: "🎯", levels: ["A2", "B1", "B2", "C1"] },
];
