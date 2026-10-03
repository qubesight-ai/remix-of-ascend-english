// Comprehensive Grammar Exercises - 30+ per CEFR level
// Organized by level for the Grammar section

export interface GrammarExercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  explanationSpanish: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// ==================== A1 LEVEL EXERCISES (35 exercises) ====================
export const a1GrammarExercises: GrammarExercise[] = [
  // Present Simple - Subject + Verb Agreement
  {
    id: "a1-g-1",
    type: "multiple-choice",
    question: "She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correctAnswer: "goes",
    explanation: "With third person singular (she/he/it), we add -s or -es to the verb in Present Simple.",
    explanationSpanish: "Con tercera persona singular (she/he/it), añadimos -s o -es al verbo en Present Simple.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-g-2",
    type: "multiple-choice",
    question: "I ___ coffee every morning.",
    options: ["drinks", "drink", "drinking", "drank"],
    correctAnswer: "drink",
    explanation: "With 'I', we use the base form of the verb without -s.",
    explanationSpanish: "Con 'I', usamos la forma base del verbo sin -s.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-g-3",
    type: "multiple-choice",
    question: "My dog ___ in the garden.",
    options: ["play", "plays", "playing", "played"],
    correctAnswer: "plays",
    explanation: "'My dog' is third person singular (like 'it'), so we add -s.",
    explanationSpanish: "'My dog' es tercera persona singular (como 'it'), así que añadimos -s.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-g-4",
    type: "multiple-choice",
    question: "They ___ English very well.",
    options: ["speaks", "speak", "speaking", "spoke"],
    correctAnswer: "speak",
    explanation: "With 'they' (plural), we use the base form without -s.",
    explanationSpanish: "Con 'they' (plural), usamos la forma base sin -s.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-g-5",
    type: "multiple-choice",
    question: "___ you like pizza?",
    options: ["Do", "Does", "Is", "Are"],
    correctAnswer: "Do",
    explanation: "For questions with 'you', we use 'Do' as the auxiliary.",
    explanationSpanish: "Para preguntas con 'you', usamos 'Do' como auxiliar.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-g-6",
    type: "multiple-choice",
    question: "___ she work in a hospital?",
    options: ["Do", "Does", "Is", "Are"],
    correctAnswer: "Does",
    explanation: "For questions with third person singular (she/he/it), we use 'Does'.",
    explanationSpanish: "Para preguntas con tercera persona singular (she/he/it), usamos 'Does'.",
    category: "present-simple",
    difficulty: "easy"
  },
  {
    id: "a1-g-7",
    type: "fill-blank",
    question: "He ___ (watch) TV every evening.",
    correctAnswer: "watches",
    explanation: "With 'he', we add -es to verbs ending in -ch.",
    explanationSpanish: "Con 'he', añadimos -es a verbos que terminan en -ch.",
    category: "present-simple",
    difficulty: "medium"
  },
  {
    id: "a1-g-8",
    type: "multiple-choice",
    question: "She ___ not like vegetables.",
    options: ["do", "does", "is", "are"],
    correctAnswer: "does",
    explanation: "For negatives with third person singular, we use 'does not'.",
    explanationSpanish: "Para negativos con tercera persona singular, usamos 'does not'.",
    category: "present-simple",
    difficulty: "medium"
  },
  // Present Continuous
  {
    id: "a1-g-9",
    type: "multiple-choice",
    question: "Look! The baby ___ now.",
    options: ["sleeps", "is sleeping", "sleep", "slept"],
    correctAnswer: "is sleeping",
    explanation: "'Look!' indicates something happening now - use Present Continuous.",
    explanationSpanish: "'Look!' indica algo que está pasando ahora - usamos Present Continuous.",
    category: "present-continuous",
    difficulty: "easy"
  },
  {
    id: "a1-g-10",
    type: "multiple-choice",
    question: "I ___ a book right now.",
    options: ["read", "reads", "am reading", "reading"],
    correctAnswer: "am reading",
    explanation: "'Right now' signals an action in progress - use am/is/are + -ing.",
    explanationSpanish: "'Right now' señala una acción en progreso - usamos am/is/are + -ing.",
    category: "present-continuous",
    difficulty: "easy"
  },
  {
    id: "a1-g-11",
    type: "multiple-choice",
    question: "They ___ football in the park.",
    options: ["plays", "play", "are playing", "is playing"],
    correctAnswer: "are playing",
    explanation: "With 'they', we use 'are' + verb-ing for Present Continuous.",
    explanationSpanish: "Con 'they', usamos 'are' + verbo-ing para Present Continuous.",
    category: "present-continuous",
    difficulty: "easy"
  },
  {
    id: "a1-g-12",
    type: "multiple-choice",
    question: "___ she cooking dinner?",
    options: ["Does", "Do", "Is", "Are"],
    correctAnswer: "Is",
    explanation: "For Present Continuous questions, use am/is/are at the beginning.",
    explanationSpanish: "Para preguntas en Present Continuous, usamos am/is/are al principio.",
    category: "present-continuous",
    difficulty: "medium"
  },
  // Verb To Be
  {
    id: "a1-g-13",
    type: "multiple-choice",
    question: "I ___ a student.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "am",
    explanation: "With 'I', we always use 'am'.",
    explanationSpanish: "Con 'I', siempre usamos 'am'.",
    category: "verb-to-be",
    difficulty: "easy"
  },
  {
    id: "a1-g-14",
    type: "multiple-choice",
    question: "She ___ from Spain.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: "With 'she/he/it', we use 'is'.",
    explanationSpanish: "Con 'she/he/it', usamos 'is'.",
    category: "verb-to-be",
    difficulty: "easy"
  },
  {
    id: "a1-g-15",
    type: "multiple-choice",
    question: "We ___ happy today.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are",
    explanation: "With 'we/you/they', we use 'are'.",
    explanationSpanish: "Con 'we/you/they', usamos 'are'.",
    category: "verb-to-be",
    difficulty: "easy"
  },
  {
    id: "a1-g-16",
    type: "multiple-choice",
    question: "___ you tired?",
    options: ["Am", "Is", "Are", "Be"],
    correctAnswer: "Are",
    explanation: "For questions with 'you', use 'Are'.",
    explanationSpanish: "Para preguntas con 'you', usamos 'Are'.",
    category: "verb-to-be",
    difficulty: "easy"
  },
  {
    id: "a1-g-17",
    type: "multiple-choice",
    question: "The books ___ on the table.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are",
    explanation: "'Books' is plural, so we use 'are'.",
    explanationSpanish: "'Books' es plural, así que usamos 'are'.",
    category: "verb-to-be",
    difficulty: "easy"
  },
  // Articles
  {
    id: "a1-g-18",
    type: "multiple-choice",
    question: "I have ___ apple.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "an",
    explanation: "Use 'an' before words starting with a vowel sound.",
    explanationSpanish: "Usamos 'an' antes de palabras que empiezan con sonido de vocal.",
    category: "articles",
    difficulty: "easy"
  },
  {
    id: "a1-g-19",
    type: "multiple-choice",
    question: "She is ___ doctor.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "a",
    explanation: "Use 'a' before words starting with a consonant sound.",
    explanationSpanish: "Usamos 'a' antes de palabras que empiezan con sonido de consonante.",
    category: "articles",
    difficulty: "easy"
  },
  {
    id: "a1-g-20",
    type: "multiple-choice",
    question: "___ sun is very hot today.",
    options: ["A", "An", "The", "-"],
    correctAnswer: "The",
    explanation: "Use 'the' for unique things (there's only one sun).",
    explanationSpanish: "Usamos 'the' para cosas únicas (solo hay un sol).",
    category: "articles",
    difficulty: "medium"
  },
  // Prepositions of Time
  {
    id: "a1-g-21",
    type: "multiple-choice",
    question: "I wake up ___ 7 o'clock.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "at",
    explanation: "Use 'at' for specific times.",
    explanationSpanish: "Usamos 'at' para horas específicas.",
    category: "prepositions-time",
    difficulty: "easy"
  },
  {
    id: "a1-g-22",
    type: "multiple-choice",
    question: "The party is ___ Saturday.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "on",
    explanation: "Use 'on' for days of the week.",
    explanationSpanish: "Usamos 'on' para días de la semana.",
    category: "prepositions-time",
    difficulty: "easy"
  },
  {
    id: "a1-g-23",
    type: "multiple-choice",
    question: "I was born ___ 1995.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "in",
    explanation: "Use 'in' for years, months, and long periods.",
    explanationSpanish: "Usamos 'in' para años, meses y períodos largos.",
    category: "prepositions-time",
    difficulty: "easy"
  },
  // Prepositions of Place
  {
    id: "a1-g-24",
    type: "multiple-choice",
    question: "The cat is ___ the box.",
    options: ["in", "on", "at", "under"],
    correctAnswer: "in",
    explanation: "Use 'in' for enclosed spaces.",
    explanationSpanish: "Usamos 'in' para espacios cerrados.",
    category: "prepositions-place",
    difficulty: "easy"
  },
  {
    id: "a1-g-25",
    type: "multiple-choice",
    question: "The book is ___ the table.",
    options: ["in", "on", "at", "under"],
    correctAnswer: "on",
    explanation: "Use 'on' for surfaces.",
    explanationSpanish: "Usamos 'on' para superficies.",
    category: "prepositions-place",
    difficulty: "easy"
  },
  {
    id: "a1-g-26",
    type: "multiple-choice",
    question: "She is waiting ___ the bus stop.",
    options: ["in", "on", "at", "under"],
    correctAnswer: "at",
    explanation: "Use 'at' for specific points or locations.",
    explanationSpanish: "Usamos 'at' para puntos o ubicaciones específicas.",
    category: "prepositions-place",
    difficulty: "easy"
  },
  // Personal Pronouns
  {
    id: "a1-g-27",
    type: "multiple-choice",
    question: "Can you help ___? I need your assistance.",
    options: ["I", "me", "my", "mine"],
    correctAnswer: "me",
    explanation: "Use object pronouns (me, you, him, her, it, us, them) after verbs.",
    explanationSpanish: "Usamos pronombres objeto (me, you, him, her, it, us, them) después de verbos.",
    category: "pronouns",
    difficulty: "medium"
  },
  {
    id: "a1-g-28",
    type: "multiple-choice",
    question: "___ is my sister. She is very kind.",
    options: ["Her", "She", "Hers", "Him"],
    correctAnswer: "She",
    explanation: "Use subject pronouns (I, you, he, she, it, we, they) as the subject.",
    explanationSpanish: "Usamos pronombres sujeto (I, you, he, she, it, we, they) como sujeto.",
    category: "pronouns",
    difficulty: "easy"
  },
  {
    id: "a1-g-29",
    type: "multiple-choice",
    question: "I gave ___ the book.",
    options: ["they", "them", "their", "theirs"],
    correctAnswer: "them",
    explanation: "Use 'them' as the object pronoun for 'they'.",
    explanationSpanish: "Usamos 'them' como pronombre objeto para 'they'.",
    category: "pronouns",
    difficulty: "medium"
  },
  // Can/Could for ability
  {
    id: "a1-g-30",
    type: "multiple-choice",
    question: "I ___ swim very well.",
    options: ["can", "cans", "could", "canning"],
    correctAnswer: "can",
    explanation: "Use 'can' to express present ability. Modal verbs never change form.",
    explanationSpanish: "Usamos 'can' para expresar habilidad presente. Los verbos modales nunca cambian de forma.",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a1-g-31",
    type: "multiple-choice",
    question: "___ you speak French?",
    options: ["Can", "Do can", "Are can", "Does can"],
    correctAnswer: "Can",
    explanation: "Modal verbs form questions by moving to the beginning - no 'do/does' needed.",
    explanationSpanish: "Los verbos modales forman preguntas moviéndose al principio - no se necesita 'do/does'.",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a1-g-32",
    type: "multiple-choice",
    question: "She ___ play the piano when she was five.",
    options: ["can", "could", "cans", "coulds"],
    correctAnswer: "could",
    explanation: "Use 'could' to express past ability.",
    explanationSpanish: "Usamos 'could' para expresar habilidad en el pasado.",
    category: "modals",
    difficulty: "medium"
  },
  // Plurals
  {
    id: "a1-g-33",
    type: "multiple-choice",
    question: "I have two ___.",
    options: ["child", "childs", "children", "childes"],
    correctAnswer: "children",
    explanation: "'Child' has an irregular plural: children.",
    explanationSpanish: "'Child' tiene un plural irregular: children.",
    category: "plurals",
    difficulty: "medium"
  },
  {
    id: "a1-g-34",
    type: "multiple-choice",
    question: "There are many ___ in the field.",
    options: ["sheep", "sheeps", "sheepes", "sheepies"],
    correctAnswer: "sheep",
    explanation: "'Sheep' is the same in singular and plural.",
    explanationSpanish: "'Sheep' es igual en singular y plural.",
    category: "plurals",
    difficulty: "hard"
  },
  {
    id: "a1-g-35",
    type: "multiple-choice",
    question: "I need to buy some ___.",
    options: ["tomatos", "tomatoes", "tomatoss", "tomato"],
    correctAnswer: "tomatoes",
    explanation: "Words ending in -o often add -es for plural: tomatoes.",
    explanationSpanish: "Palabras que terminan en -o a menudo añaden -es para el plural: tomatoes.",
    category: "plurals",
    difficulty: "medium"
  },
];

// ==================== A2 LEVEL EXERCISES (35 exercises) ====================
export const a2GrammarExercises: GrammarExercise[] = [
  // Past Simple - Regular verbs
  {
    id: "a2-g-1",
    type: "multiple-choice",
    question: "Yesterday, I ___ my homework.",
    options: ["finish", "finished", "finishing", "finishes"],
    correctAnswer: "finished",
    explanation: "'Yesterday' indicates past time - use Past Simple with -ed for regular verbs.",
    explanationSpanish: "'Yesterday' indica tiempo pasado - usamos Past Simple con -ed para verbos regulares.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-g-2",
    type: "multiple-choice",
    question: "She ___ to the cinema last night.",
    options: ["go", "goes", "went", "going"],
    correctAnswer: "went",
    explanation: "'Go' is irregular - its past form is 'went'.",
    explanationSpanish: "'Go' es irregular - su forma pasada es 'went'.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-g-3",
    type: "multiple-choice",
    question: "___ you see the movie?",
    options: ["Do", "Does", "Did", "Was"],
    correctAnswer: "Did",
    explanation: "Use 'Did' for Past Simple questions with all subjects.",
    explanationSpanish: "Usamos 'Did' para preguntas en Past Simple con todos los sujetos.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-g-4",
    type: "multiple-choice",
    question: "They ___ not come to the party.",
    options: ["do", "does", "did", "was"],
    correctAnswer: "did",
    explanation: "Use 'did not' (didn't) for Past Simple negatives.",
    explanationSpanish: "Usamos 'did not' (didn't) para negativos en Past Simple.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-g-5",
    type: "fill-blank",
    question: "We ___ (buy) a new car last month.",
    correctAnswer: "bought",
    explanation: "'Buy' is irregular - past form is 'bought'.",
    explanationSpanish: "'Buy' es irregular - la forma pasada es 'bought'.",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-g-6",
    type: "multiple-choice",
    question: "He ___ English when he was a child.",
    options: ["study", "studied", "studies", "studying"],
    correctAnswer: "studied",
    explanation: "'When he was a child' refers to past - use Past Simple.",
    explanationSpanish: "'When he was a child' se refiere al pasado - usamos Past Simple.",
    category: "past-simple",
    difficulty: "medium"
  },
  // Present Perfect
  {
    id: "a2-g-7",
    type: "multiple-choice",
    question: "I ___ never ___ to Japan.",
    options: ["have / been", "has / been", "have / be", "had / been"],
    correctAnswer: "have / been",
    explanation: "Use 'have + past participle' for experiences with 'I'.",
    explanationSpanish: "Usamos 'have + participio pasado' para experiencias con 'I'.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "a2-g-8",
    type: "multiple-choice",
    question: "She ___ just finished her homework.",
    options: ["have", "has", "had", "is"],
    correctAnswer: "has",
    explanation: "Use 'has' with third person singular (she/he/it).",
    explanationSpanish: "Usamos 'has' con tercera persona singular (she/he/it).",
    category: "present-perfect",
    difficulty: "easy"
  },
  {
    id: "a2-g-9",
    type: "multiple-choice",
    question: "___ you ever visited Paris?",
    options: ["Have", "Has", "Did", "Do"],
    correctAnswer: "Have",
    explanation: "Use 'Have you ever...' for life experiences.",
    explanationSpanish: "Usamos 'Have you ever...' para experiencias de vida.",
    category: "present-perfect",
    difficulty: "easy"
  },
  {
    id: "a2-g-10",
    type: "multiple-choice",
    question: "They have lived here ___ 2010.",
    options: ["for", "since", "ago", "yet"],
    correctAnswer: "since",
    explanation: "Use 'since' with specific points in time (years, dates).",
    explanationSpanish: "Usamos 'since' con puntos específicos en el tiempo (años, fechas).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "a2-g-11",
    type: "multiple-choice",
    question: "We have known each other ___ ten years.",
    options: ["for", "since", "ago", "yet"],
    correctAnswer: "for",
    explanation: "Use 'for' with periods of time (ten years, two months).",
    explanationSpanish: "Usamos 'for' con períodos de tiempo (ten years, two months).",
    category: "present-perfect",
    difficulty: "medium"
  },
  // Future with Will
  {
    id: "a2-g-12",
    type: "multiple-choice",
    question: "Don't worry, I ___ help you.",
    options: ["will", "going to", "am", "would"],
    correctAnswer: "will",
    explanation: "Use 'will' for spontaneous decisions and promises.",
    explanationSpanish: "Usamos 'will' para decisiones espontáneas y promesas.",
    category: "future-will",
    difficulty: "easy"
  },
  {
    id: "a2-g-13",
    type: "multiple-choice",
    question: "I think it ___ rain tomorrow.",
    options: ["will", "is going to", "rains", "rained"],
    correctAnswer: "will",
    explanation: "Use 'will' for predictions based on opinion (I think...).",
    explanationSpanish: "Usamos 'will' para predicciones basadas en opinión (I think...).",
    category: "future-will",
    difficulty: "medium"
  },
  {
    id: "a2-g-14",
    type: "multiple-choice",
    question: "She ___ be 25 next month.",
    options: ["will", "is", "was", "going to"],
    correctAnswer: "will",
    explanation: "Use 'will' for future facts.",
    explanationSpanish: "Usamos 'will' para hechos futuros.",
    category: "future-will",
    difficulty: "easy"
  },
  // Future with Going to
  {
    id: "a2-g-15",
    type: "multiple-choice",
    question: "Look at those clouds! It ___ rain.",
    options: ["will", "is going to", "rains", "rained"],
    correctAnswer: "is going to",
    explanation: "Use 'going to' for predictions based on present evidence.",
    explanationSpanish: "Usamos 'going to' para predicciones basadas en evidencia presente.",
    category: "future-going-to",
    difficulty: "medium"
  },
  {
    id: "a2-g-16",
    type: "multiple-choice",
    question: "I ___ visit my grandmother next weekend. (planned)",
    options: ["will", "am going to", "visited", "visit"],
    correctAnswer: "am going to",
    explanation: "Use 'going to' for planned intentions.",
    explanationSpanish: "Usamos 'going to' para intenciones planificadas.",
    category: "future-going-to",
    difficulty: "easy"
  },
  // Comparatives
  {
    id: "a2-g-17",
    type: "multiple-choice",
    question: "She is ___ than her sister.",
    options: ["tall", "taller", "tallest", "more tall"],
    correctAnswer: "taller",
    explanation: "Add -er for short adjectives in comparatives.",
    explanationSpanish: "Añadimos -er para adjetivos cortos en comparativos.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-g-18",
    type: "multiple-choice",
    question: "This book is ___ interesting than that one.",
    options: ["more", "most", "much", "very"],
    correctAnswer: "more",
    explanation: "Use 'more' before long adjectives for comparatives.",
    explanationSpanish: "Usamos 'more' antes de adjetivos largos para comparativos.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-g-19",
    type: "multiple-choice",
    question: "My car is ___ than yours.",
    options: ["good", "better", "best", "gooder"],
    correctAnswer: "better",
    explanation: "'Good' has an irregular comparative: better.",
    explanationSpanish: "'Good' tiene un comparativo irregular: better.",
    category: "comparatives",
    difficulty: "medium"
  },
  // Superlatives
  {
    id: "a2-g-20",
    type: "multiple-choice",
    question: "She is the ___ student in the class.",
    options: ["smart", "smarter", "smartest", "most smart"],
    correctAnswer: "smartest",
    explanation: "Use 'the' + -est for superlatives with short adjectives.",
    explanationSpanish: "Usamos 'the' + -est para superlativos con adjetivos cortos.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-g-21",
    type: "multiple-choice",
    question: "This is the ___ beautiful place I've ever seen.",
    options: ["more", "most", "much", "very"],
    correctAnswer: "most",
    explanation: "Use 'the most' + adjective for superlatives with long adjectives.",
    explanationSpanish: "Usamos 'the most' + adjetivo para superlativos con adjetivos largos.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-g-22",
    type: "multiple-choice",
    question: "He is the ___ player on the team.",
    options: ["bad", "worse", "worst", "baddest"],
    correctAnswer: "worst",
    explanation: "'Bad' has irregular forms: bad - worse - worst.",
    explanationSpanish: "'Bad' tiene formas irregulares: bad - worse - worst.",
    category: "superlatives",
    difficulty: "medium"
  },
  // Must / Have to
  {
    id: "a2-g-23",
    type: "multiple-choice",
    question: "You ___ wear a helmet when riding a motorcycle. (law)",
    options: ["must", "should", "can", "might"],
    correctAnswer: "must",
    explanation: "Use 'must' for strong obligation, especially laws.",
    explanationSpanish: "Usamos 'must' para obligación fuerte, especialmente leyes.",
    category: "modals",
    difficulty: "medium"
  },
  {
    id: "a2-g-24",
    type: "multiple-choice",
    question: "I ___ to work tomorrow. (external obligation)",
    options: ["must", "have", "should", "can"],
    correctAnswer: "have",
    explanation: "'Have to' expresses external obligation (rules, circumstances).",
    explanationSpanish: "'Have to' expresa obligación externa (reglas, circunstancias).",
    category: "modals",
    difficulty: "medium"
  },
  {
    id: "a2-g-25",
    type: "multiple-choice",
    question: "You ___ smoke here! It's forbidden!",
    options: ["mustn't", "don't have to", "shouldn't", "can't"],
    correctAnswer: "mustn't",
    explanation: "'Mustn't' means it's prohibited/forbidden.",
    explanationSpanish: "'Mustn't' significa que está prohibido.",
    category: "modals",
    difficulty: "medium"
  },
  {
    id: "a2-g-26",
    type: "multiple-choice",
    question: "You ___ come if you don't want to. (no obligation)",
    options: ["mustn't", "don't have to", "must", "have to"],
    correctAnswer: "don't have to",
    explanation: "'Don't have to' means it's not necessary.",
    explanationSpanish: "'Don't have to' significa que no es necesario.",
    category: "modals",
    difficulty: "hard"
  },
  // Should
  {
    id: "a2-g-27",
    type: "multiple-choice",
    question: "You look tired. You ___ get some rest.",
    options: ["must", "should", "have to", "can"],
    correctAnswer: "should",
    explanation: "Use 'should' for advice and recommendations.",
    explanationSpanish: "Usamos 'should' para consejos y recomendaciones.",
    category: "modals",
    difficulty: "easy"
  },
  {
    id: "a2-g-28",
    type: "multiple-choice",
    question: "You ___ eat more vegetables.",
    options: ["should", "must", "have to", "need"],
    correctAnswer: "should",
    explanation: "'Should' is used for giving advice about health.",
    explanationSpanish: "'Should' se usa para dar consejos sobre salud.",
    category: "modals",
    difficulty: "easy"
  },
  // Zero Conditional
  {
    id: "a2-g-29",
    type: "multiple-choice",
    question: "If you heat ice, it ___.",
    options: ["melts", "will melt", "melted", "would melt"],
    correctAnswer: "melts",
    explanation: "Zero Conditional uses present simple in both clauses for facts.",
    explanationSpanish: "El Zero Conditional usa presente simple en ambas cláusulas para hechos.",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "a2-g-30",
    type: "multiple-choice",
    question: "If I ___ coffee at night, I can't sleep.",
    options: ["drink", "drinks", "drank", "will drink"],
    correctAnswer: "drink",
    explanation: "Zero Conditional: If + present simple, present simple.",
    explanationSpanish: "Zero Conditional: If + presente simple, presente simple.",
    category: "conditionals",
    difficulty: "medium"
  },
  // First Conditional
  {
    id: "a2-g-31",
    type: "multiple-choice",
    question: "If it ___ tomorrow, I will stay home.",
    options: ["rains", "will rain", "rained", "rain"],
    correctAnswer: "rains",
    explanation: "First Conditional: If + present simple, will + infinitive.",
    explanationSpanish: "First Conditional: If + presente simple, will + infinitivo.",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "a2-g-32",
    type: "multiple-choice",
    question: "If you study hard, you ___ the exam.",
    options: ["pass", "will pass", "passed", "would pass"],
    correctAnswer: "will pass",
    explanation: "First Conditional: If + present simple, will + infinitive.",
    explanationSpanish: "First Conditional: If + presente simple, will + infinitivo.",
    category: "conditionals",
    difficulty: "medium"
  },
  // Phrasal Verbs Basic
  {
    id: "a2-g-33",
    type: "multiple-choice",
    question: "Please ___ the TV. I want to watch.",
    options: ["turn on", "turn off", "turn up", "turn down"],
    correctAnswer: "turn on",
    explanation: "'Turn on' means to start a device.",
    explanationSpanish: "'Turn on' significa encender un dispositivo.",
    category: "phrasal-verbs",
    difficulty: "easy"
  },
  {
    id: "a2-g-34",
    type: "multiple-choice",
    question: "I need to ___ early tomorrow for work.",
    options: ["wake up", "wake on", "wake off", "wake in"],
    correctAnswer: "wake up",
    explanation: "'Wake up' means to stop sleeping.",
    explanationSpanish: "'Wake up' significa dejar de dormir.",
    category: "phrasal-verbs",
    difficulty: "easy"
  },
  {
    id: "a2-g-35",
    type: "multiple-choice",
    question: "Can you ___ the music? It's too loud!",
    options: ["turn on", "turn off", "turn up", "turn down"],
    correctAnswer: "turn down",
    explanation: "'Turn down' means to reduce volume.",
    explanationSpanish: "'Turn down' significa bajar el volumen.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
];

// ==================== B1 LEVEL EXERCISES (35 exercises) ====================
export const b1GrammarExercises: GrammarExercise[] = [
  // Past Continuous
  {
    id: "b1-g-1",
    type: "multiple-choice",
    question: "What ___ you ___ at 8 PM last night?",
    options: ["were / doing", "was / doing", "did / do", "are / doing"],
    correctAnswer: "were / doing",
    explanation: "Use 'were' with 'you' for Past Continuous questions.",
    explanationSpanish: "Usamos 'were' con 'you' para preguntas en Past Continuous.",
    category: "past-continuous",
    difficulty: "medium"
  },
  {
    id: "b1-g-2",
    type: "multiple-choice",
    question: "I ___ when you called me.",
    options: ["slept", "was sleeping", "am sleeping", "sleep"],
    correctAnswer: "was sleeping",
    explanation: "Past Continuous for an action in progress interrupted by another action.",
    explanationSpanish: "Past Continuous para una acción en progreso interrumpida por otra acción.",
    category: "past-continuous",
    difficulty: "medium"
  },
  {
    id: "b1-g-3",
    type: "multiple-choice",
    question: "While she ___ dinner, the phone rang.",
    options: ["cooked", "was cooking", "cooks", "is cooking"],
    correctAnswer: "was cooking",
    explanation: "'While' + Past Continuous shows a longer action interrupted.",
    explanationSpanish: "'While' + Past Continuous muestra una acción más larga interrumpida.",
    category: "past-continuous",
    difficulty: "medium"
  },
  {
    id: "b1-g-4",
    type: "multiple-choice",
    question: "They ___ TV when the power went out.",
    options: ["watched", "were watching", "watch", "are watching"],
    correctAnswer: "were watching",
    explanation: "Past Continuous: was/were + verb-ing for actions in progress in the past.",
    explanationSpanish: "Past Continuous: was/were + verbo-ing para acciones en progreso en el pasado.",
    category: "past-continuous",
    difficulty: "easy"
  },
  // Second Conditional
  {
    id: "b1-g-5",
    type: "multiple-choice",
    question: "If I ___ rich, I would travel the world.",
    options: ["am", "was", "were", "be"],
    correctAnswer: "were",
    explanation: "In Second Conditional, use 'were' for all persons (including I, he, she, it).",
    explanationSpanish: "En Second Conditional, usamos 'were' para todas las personas (incluyendo I, he, she, it).",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "b1-g-6",
    type: "multiple-choice",
    question: "If she spoke English, she ___ get the job.",
    options: ["will", "would", "can", "is going to"],
    correctAnswer: "would",
    explanation: "Second Conditional: If + past simple, would + infinitive.",
    explanationSpanish: "Second Conditional: If + pasado simple, would + infinitivo.",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "b1-g-7",
    type: "multiple-choice",
    question: "What ___ you do if you won the lottery?",
    options: ["will", "would", "do", "did"],
    correctAnswer: "would",
    explanation: "Second Conditional for hypothetical/imaginary situations.",
    explanationSpanish: "Second Conditional para situaciones hipotéticas/imaginarias.",
    category: "conditionals",
    difficulty: "easy"
  },
  {
    id: "b1-g-8",
    type: "multiple-choice",
    question: "If I ___ you, I would apologize.",
    options: ["am", "was", "were", "be"],
    correctAnswer: "were",
    explanation: "'If I were you' is a fixed expression for giving advice.",
    explanationSpanish: "'If I were you' es una expresión fija para dar consejos.",
    category: "conditionals",
    difficulty: "easy"
  },
  // Passive Voice Present
  {
    id: "b1-g-9",
    type: "multiple-choice",
    question: "English ___ in many countries.",
    options: ["speaks", "is spoken", "is speaking", "spoke"],
    correctAnswer: "is spoken",
    explanation: "Passive voice: is/are + past participle.",
    explanationSpanish: "Voz pasiva: is/are + participio pasado.",
    category: "passive",
    difficulty: "easy"
  },
  {
    id: "b1-g-10",
    type: "multiple-choice",
    question: "The letters ___ every morning.",
    options: ["deliver", "delivers", "are delivered", "is delivered"],
    correctAnswer: "are delivered",
    explanation: "'Letters' is plural, so use 'are' + past participle.",
    explanationSpanish: "'Letters' es plural, así que usamos 'are' + participio pasado.",
    category: "passive",
    difficulty: "medium"
  },
  {
    id: "b1-g-11",
    type: "multiple-choice",
    question: "The news ___ on TV every evening.",
    options: ["broadcast", "is broadcast", "are broadcast", "broadcasts"],
    correctAnswer: "is broadcast",
    explanation: "'News' is singular, use 'is' + past participle.",
    explanationSpanish: "'News' es singular, usamos 'is' + participio pasado.",
    category: "passive",
    difficulty: "hard"
  },
  // Passive Voice Past
  {
    id: "b1-g-12",
    type: "multiple-choice",
    question: "The Mona Lisa ___ by Leonardo da Vinci.",
    options: ["painted", "was painted", "is painted", "paints"],
    correctAnswer: "was painted",
    explanation: "Past passive: was/were + past participle.",
    explanationSpanish: "Pasivo pasado: was/were + participio pasado.",
    category: "passive",
    difficulty: "easy"
  },
  {
    id: "b1-g-13",
    type: "multiple-choice",
    question: "The pyramids ___ thousands of years ago.",
    options: ["built", "were built", "are built", "building"],
    correctAnswer: "were built",
    explanation: "'Pyramids' is plural + past time = were + past participle.",
    explanationSpanish: "'Pyramids' es plural + tiempo pasado = were + participio pasado.",
    category: "passive",
    difficulty: "easy"
  },
  // Reported Speech
  {
    id: "b1-g-14",
    type: "multiple-choice",
    question: "'I am tired.' → She said she ___ tired.",
    options: ["is", "was", "am", "be"],
    correctAnswer: "was",
    explanation: "Present simple → Past simple in reported speech.",
    explanationSpanish: "Presente simple → Pasado simple en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b1-g-15",
    type: "multiple-choice",
    question: "'I will help you.' → He said he ___ help me.",
    options: ["will", "would", "can", "shall"],
    correctAnswer: "would",
    explanation: "'Will' changes to 'would' in reported speech.",
    explanationSpanish: "'Will' cambia a 'would' en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b1-g-16",
    type: "multiple-choice",
    question: "'I have finished.' → She said she ___ finished.",
    options: ["has", "have", "had", "having"],
    correctAnswer: "had",
    explanation: "'Have' changes to 'had' in reported speech.",
    explanationSpanish: "'Have' cambia a 'had' en estilo indirecto.",
    category: "reported-speech",
    difficulty: "hard"
  },
  {
    id: "b1-g-17",
    type: "multiple-choice",
    question: "'I can swim.' → He said he ___ swim.",
    options: ["can", "could", "would", "should"],
    correctAnswer: "could",
    explanation: "'Can' changes to 'could' in reported speech.",
    explanationSpanish: "'Can' cambia a 'could' en estilo indirecto.",
    category: "reported-speech",
    difficulty: "medium"
  },
  // Gerund after verbs
  {
    id: "b1-g-18",
    type: "multiple-choice",
    question: "I enjoy ___ to music.",
    options: ["listen", "to listen", "listening", "listened"],
    correctAnswer: "listening",
    explanation: "'Enjoy' is followed by gerund (-ing form).",
    explanationSpanish: "'Enjoy' va seguido de gerundio (forma -ing).",
    category: "gerunds-infinitives",
    difficulty: "easy"
  },
  {
    id: "b1-g-19",
    type: "multiple-choice",
    question: "She avoids ___ fast food.",
    options: ["eat", "to eat", "eating", "ate"],
    correctAnswer: "eating",
    explanation: "'Avoid' is followed by gerund.",
    explanationSpanish: "'Avoid' va seguido de gerundio.",
    category: "gerunds-infinitives",
    difficulty: "easy"
  },
  {
    id: "b1-g-20",
    type: "multiple-choice",
    question: "Have you finished ___ the report?",
    options: ["write", "to write", "writing", "wrote"],
    correctAnswer: "writing",
    explanation: "'Finish' is followed by gerund.",
    explanationSpanish: "'Finish' va seguido de gerundio.",
    category: "gerunds-infinitives",
    difficulty: "easy"
  },
  // Infinitive after verbs
  {
    id: "b1-g-21",
    type: "multiple-choice",
    question: "I want ___ English fluently.",
    options: ["speak", "to speak", "speaking", "spoke"],
    correctAnswer: "to speak",
    explanation: "'Want' is followed by infinitive (to + verb).",
    explanationSpanish: "'Want' va seguido de infinitivo (to + verbo).",
    category: "gerunds-infinitives",
    difficulty: "easy"
  },
  {
    id: "b1-g-22",
    type: "multiple-choice",
    question: "She decided ___ a new car.",
    options: ["buy", "to buy", "buying", "bought"],
    correctAnswer: "to buy",
    explanation: "'Decide' is followed by infinitive.",
    explanationSpanish: "'Decide' va seguido de infinitivo.",
    category: "gerunds-infinitives",
    difficulty: "easy"
  },
  {
    id: "b1-g-23",
    type: "multiple-choice",
    question: "They hope ___ the exam.",
    options: ["pass", "to pass", "passing", "passed"],
    correctAnswer: "to pass",
    explanation: "'Hope' is followed by infinitive.",
    explanationSpanish: "'Hope' va seguido de infinitivo.",
    category: "gerunds-infinitives",
    difficulty: "easy"
  },
  // Phrasal Verbs Intermediate
  {
    id: "b1-g-24",
    type: "multiple-choice",
    question: "I need to ___ this problem.",
    options: ["figure out", "figure on", "figure up", "figure in"],
    correctAnswer: "figure out",
    explanation: "'Figure out' means to solve or understand.",
    explanationSpanish: "'Figure out' significa resolver o entender.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-g-25",
    type: "multiple-choice",
    question: "Don't ___ your homework until tomorrow.",
    options: ["put off", "put on", "put up", "put in"],
    correctAnswer: "put off",
    explanation: "'Put off' means to postpone.",
    explanationSpanish: "'Put off' significa posponer.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-g-26",
    type: "multiple-choice",
    question: "We've ___ milk. Can you buy some?",
    options: ["run out of", "run into", "run over", "run away"],
    correctAnswer: "run out of",
    explanation: "'Run out of' means to have no more of something.",
    explanationSpanish: "'Run out of' significa quedarse sin algo.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-g-27",
    type: "multiple-choice",
    question: "I ___ my old friend at the supermarket yesterday.",
    options: ["ran into", "ran out", "ran over", "ran off"],
    correctAnswer: "ran into",
    explanation: "'Run into' means to meet someone by chance.",
    explanationSpanish: "'Run into' significa encontrarse con alguien por casualidad.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  // Used to
  {
    id: "b1-g-28",
    type: "multiple-choice",
    question: "I ___ smoke, but I quit 5 years ago.",
    options: ["use to", "used to", "am used to", "was used to"],
    correctAnswer: "used to",
    explanation: "'Used to + infinitive' for past habits that are no longer true.",
    explanationSpanish: "'Used to + infinitivo' para hábitos pasados que ya no son ciertos.",
    category: "past-habits",
    difficulty: "medium"
  },
  {
    id: "b1-g-29",
    type: "multiple-choice",
    question: "___ you used to play football as a child?",
    options: ["Did", "Do", "Were", "Are"],
    correctAnswer: "Did",
    explanation: "Questions with 'used to' use 'Did' + subject + 'use to'.",
    explanationSpanish: "Las preguntas con 'used to' usan 'Did' + sujeto + 'use to'.",
    category: "past-habits",
    difficulty: "hard"
  },
  {
    id: "b1-g-30",
    type: "multiple-choice",
    question: "She didn't ___ be so shy.",
    options: ["use to", "used to", "using to", "uses to"],
    correctAnswer: "use to",
    explanation: "In negatives: didn't + 'use to' (no 'd').",
    explanationSpanish: "En negativos: didn't + 'use to' (sin 'd').",
    category: "past-habits",
    difficulty: "hard"
  },
  // Relative Clauses
  {
    id: "b1-g-31",
    type: "multiple-choice",
    question: "The man ___ called you is my uncle.",
    options: ["who", "which", "what", "whose"],
    correctAnswer: "who",
    explanation: "Use 'who' for people as subjects.",
    explanationSpanish: "Usamos 'who' para personas como sujetos.",
    category: "relative-clauses",
    difficulty: "easy"
  },
  {
    id: "b1-g-32",
    type: "multiple-choice",
    question: "The book ___ I'm reading is very interesting.",
    options: ["who", "which", "what", "whose"],
    correctAnswer: "which",
    explanation: "Use 'which' for things.",
    explanationSpanish: "Usamos 'which' para cosas.",
    category: "relative-clauses",
    difficulty: "easy"
  },
  {
    id: "b1-g-33",
    type: "multiple-choice",
    question: "That's the woman ___ husband works with me.",
    options: ["who", "which", "whose", "whom"],
    correctAnswer: "whose",
    explanation: "Use 'whose' to show possession.",
    explanationSpanish: "Usamos 'whose' para mostrar posesión.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-g-34",
    type: "multiple-choice",
    question: "The restaurant ___ we had dinner was excellent.",
    options: ["which", "where", "when", "who"],
    correctAnswer: "where",
    explanation: "Use 'where' for places.",
    explanationSpanish: "Usamos 'where' para lugares.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-g-35",
    type: "multiple-choice",
    question: "I remember the day ___ we first met.",
    options: ["which", "where", "when", "who"],
    correctAnswer: "when",
    explanation: "Use 'when' for times.",
    explanationSpanish: "Usamos 'when' para tiempos.",
    category: "relative-clauses",
    difficulty: "medium"
  },
];

// ==================== B2 LEVEL EXERCISES (35 exercises) ====================
export const b2GrammarExercises: GrammarExercise[] = [
  // Third Conditional
  {
    id: "b2-g-1",
    type: "multiple-choice",
    question: "If I ___ the email, I would have called you sooner.",
    options: ["saw", "had seen", "have seen", "see"],
    correctAnswer: "had seen",
    explanation: "Third Conditional: If + past perfect, would have + past participle.",
    explanationSpanish: "Third Conditional: If + pasado perfecto, would have + participio pasado.",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-g-2",
    type: "multiple-choice",
    question: "She would have passed if she ___ harder.",
    options: ["studied", "had studied", "has studied", "studies"],
    correctAnswer: "had studied",
    explanation: "Third Conditional expresses impossible past situations.",
    explanationSpanish: "Third Conditional expresa situaciones pasadas imposibles.",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-g-3",
    type: "multiple-choice",
    question: "If they had left earlier, they ___ the train.",
    options: ["caught", "would catch", "would have caught", "had caught"],
    correctAnswer: "would have caught",
    explanation: "Result clause: would have + past participle.",
    explanationSpanish: "Cláusula de resultado: would have + participio pasado.",
    category: "conditionals",
    difficulty: "hard"
  },
  // Mixed Conditionals
  {
    id: "b2-g-4",
    type: "multiple-choice",
    question: "If I ___ Spanish, I would have understood the movie. (past result from present condition)",
    options: ["speak", "spoke", "had spoken", "would speak"],
    correctAnswer: "spoke",
    explanation: "Mixed: If + past simple (unreal present), would have + pp (past result).",
    explanationSpanish: "Mixto: If + pasado simple (presente irreal), would have + pp (resultado pasado).",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-g-5",
    type: "multiple-choice",
    question: "If she had studied medicine, she ___ a doctor now.",
    options: ["will be", "would be", "would have been", "is"],
    correctAnswer: "would be",
    explanation: "Mixed: If + past perfect (unreal past), would + base (present result).",
    explanationSpanish: "Mixto: If + pasado perfecto (pasado irreal), would + base (resultado presente).",
    category: "conditionals",
    difficulty: "hard"
  },
  // Perfect Modals
  {
    id: "b2-g-6",
    type: "multiple-choice",
    question: "You ___ told me earlier! Now it's too late.",
    options: ["should", "should have", "must", "must have"],
    correctAnswer: "should have",
    explanation: "'Should have + pp' for past regrets or criticism.",
    explanationSpanish: "'Should have + pp' para arrepentimientos pasados o críticas.",
    category: "modals",
    difficulty: "medium"
  },
  {
    id: "b2-g-7",
    type: "multiple-choice",
    question: "She's late. She ___ missed the bus.",
    options: ["must", "must have", "should", "can"],
    correctAnswer: "must have",
    explanation: "'Must have + pp' for logical deductions about the past.",
    explanationSpanish: "'Must have + pp' para deducciones lógicas sobre el pasado.",
    category: "modals",
    difficulty: "medium"
  },
  {
    id: "b2-g-8",
    type: "multiple-choice",
    question: "He ___ have been at the party - I saw him there!",
    options: ["can't", "mustn't", "shouldn't", "needn't"],
    correctAnswer: "can't",
    explanation: "'Can't have + pp' for impossibility in the past.",
    explanationSpanish: "'Can't have + pp' para imposibilidad en el pasado.",
    category: "modals",
    difficulty: "hard"
  },
  {
    id: "b2-g-9",
    type: "multiple-choice",
    question: "You ___ have brought an umbrella. It didn't rain.",
    options: ["needn't", "mustn't", "shouldn't", "couldn't"],
    correctAnswer: "needn't",
    explanation: "'Needn't have + pp' = it was unnecessary (but you did it).",
    explanationSpanish: "'Needn't have + pp' = no era necesario (pero lo hiciste).",
    category: "modals",
    difficulty: "hard"
  },
  // Passive with modals
  {
    id: "b2-g-10",
    type: "multiple-choice",
    question: "This document ___ by tomorrow.",
    options: ["must be signed", "must sign", "must signed", "must to be signed"],
    correctAnswer: "must be signed",
    explanation: "Passive with modals: modal + be + past participle.",
    explanationSpanish: "Pasivo con modales: modal + be + participio pasado.",
    category: "passive",
    difficulty: "medium"
  },
  {
    id: "b2-g-11",
    type: "multiple-choice",
    question: "The project ___ last week.",
    options: ["should have been completed", "should be completed", "should have completed", "should completing"],
    correctAnswer: "should have been completed",
    explanation: "Perfect passive with modal: should have been + past participle.",
    explanationSpanish: "Pasivo perfecto con modal: should have been + participio pasado.",
    category: "passive",
    difficulty: "hard"
  },
  // Inversions
  {
    id: "b2-g-12",
    type: "multiple-choice",
    question: "Never ___ such a beautiful sunset.",
    options: ["I have seen", "have I seen", "I saw", "did I saw"],
    correctAnswer: "have I seen",
    explanation: "After 'Never' at the start, use inverted word order.",
    explanationSpanish: "Después de 'Never' al principio, usamos orden invertido.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "b2-g-13",
    type: "multiple-choice",
    question: "Rarely ___ so disappointed.",
    options: ["I have felt", "have I felt", "I feel", "do I felt"],
    correctAnswer: "have I felt",
    explanation: "'Rarely' at the start requires subject-auxiliary inversion.",
    explanationSpanish: "'Rarely' al principio requiere inversión sujeto-auxiliar.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "b2-g-14",
    type: "multiple-choice",
    question: "Not only ___ late, but he also forgot the documents.",
    options: ["he was", "was he", "he is", "is he"],
    correctAnswer: "was he",
    explanation: "'Not only' at the start requires inversion.",
    explanationSpanish: "'Not only' al principio requiere inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  // Cleft sentences
  {
    id: "b2-g-15",
    type: "multiple-choice",
    question: "___ was John who broke the window.",
    options: ["It", "There", "What", "That"],
    correctAnswer: "It",
    explanation: "It-cleft: It + be + focus + who/that clause.",
    explanationSpanish: "It-cleft: It + be + foco + cláusula who/that.",
    category: "cleft-sentences",
    difficulty: "medium"
  },
  {
    id: "b2-g-16",
    type: "multiple-choice",
    question: "___ I need is a vacation.",
    options: ["It", "There", "What", "That"],
    correctAnswer: "What",
    explanation: "What-cleft: What + subject + verb + is/was + focus.",
    explanationSpanish: "What-cleft: What + sujeto + verbo + is/was + foco.",
    category: "cleft-sentences",
    difficulty: "medium"
  },
  // Future Perfect
  {
    id: "b2-g-17",
    type: "multiple-choice",
    question: "By next year, I ___ here for ten years.",
    options: ["will work", "will have worked", "have worked", "am working"],
    correctAnswer: "will have worked",
    explanation: "Future Perfect: will have + past participle for completed actions by a future time.",
    explanationSpanish: "Future Perfect: will have + participio pasado para acciones completadas en un momento futuro.",
    category: "future-perfect",
    difficulty: "medium"
  },
  {
    id: "b2-g-18",
    type: "multiple-choice",
    question: "By the time you arrive, we ___ dinner.",
    options: ["will finish", "will have finished", "have finished", "finished"],
    correctAnswer: "will have finished",
    explanation: "'By the time' + present, use Future Perfect in the main clause.",
    explanationSpanish: "'By the time' + presente, usamos Future Perfect en la cláusula principal.",
    category: "future-perfect",
    difficulty: "medium"
  },
  // Future Continuous
  {
    id: "b2-g-19",
    type: "multiple-choice",
    question: "This time tomorrow, I ___ on the beach.",
    options: ["will lie", "will be lying", "am lying", "lie"],
    correctAnswer: "will be lying",
    explanation: "Future Continuous for actions in progress at a specific future time.",
    explanationSpanish: "Future Continuous para acciones en progreso en un momento futuro específico.",
    category: "future-continuous",
    difficulty: "medium"
  },
  {
    id: "b2-g-20",
    type: "multiple-choice",
    question: "At 8 PM tonight, they ___ the match.",
    options: ["watch", "will watch", "will be watching", "are watching"],
    correctAnswer: "will be watching",
    explanation: "'At 8 PM tonight' specifies a future moment - use Future Continuous.",
    explanationSpanish: "'At 8 PM tonight' especifica un momento futuro - usamos Future Continuous.",
    category: "future-continuous",
    difficulty: "medium"
  },
  // Wish / If only
  {
    id: "b2-g-21",
    type: "multiple-choice",
    question: "I wish I ___ more time to study.",
    options: ["have", "had", "would have", "having"],
    correctAnswer: "had",
    explanation: "'Wish' + past simple for present wishes (unreal situations now).",
    explanationSpanish: "'Wish' + pasado simple para deseos presentes (situaciones irreales ahora).",
    category: "wish",
    difficulty: "medium"
  },
  {
    id: "b2-g-22",
    type: "multiple-choice",
    question: "If only I ___ to her advice yesterday.",
    options: ["listen", "listened", "had listened", "would listen"],
    correctAnswer: "had listened",
    explanation: "'If only' + past perfect for regrets about the past.",
    explanationSpanish: "'If only' + pasado perfecto para arrepentimientos sobre el pasado.",
    category: "wish",
    difficulty: "hard"
  },
  {
    id: "b2-g-23",
    type: "multiple-choice",
    question: "I wish she ___ stop making so much noise.",
    options: ["will", "would", "can", "could"],
    correctAnswer: "would",
    explanation: "'Wish' + would for annoyances or things we want to change.",
    explanationSpanish: "'Wish' + would para molestias o cosas que queremos cambiar.",
    category: "wish",
    difficulty: "medium"
  },
  // Causative (have/get something done)
  {
    id: "b2-g-24",
    type: "multiple-choice",
    question: "I need to ___ my hair cut.",
    options: ["have", "get", "make", "do"],
    correctAnswer: "have",
    explanation: "Causative: have + object + past participle (someone does it for you).",
    explanationSpanish: "Causativo: have + objeto + participio pasado (alguien lo hace por ti).",
    category: "causative",
    difficulty: "medium"
  },
  {
    id: "b2-g-25",
    type: "multiple-choice",
    question: "She got her car ___ last week.",
    options: ["repair", "repaired", "repairing", "to repair"],
    correctAnswer: "repaired",
    explanation: "Causative with 'get': get + object + past participle.",
    explanationSpanish: "Causativo con 'get': get + objeto + participio pasado.",
    category: "causative",
    difficulty: "medium"
  },
  // Subjunctive
  {
    id: "b2-g-26",
    type: "multiple-choice",
    question: "I suggest that he ___ early tomorrow.",
    options: ["leaves", "leave", "left", "leaving"],
    correctAnswer: "leave",
    explanation: "Subjunctive after 'suggest': base form of verb (no -s).",
    explanationSpanish: "Subjuntivo después de 'suggest': forma base del verbo (sin -s).",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "b2-g-27",
    type: "multiple-choice",
    question: "It's essential that she ___ on time.",
    options: ["is", "be", "was", "being"],
    correctAnswer: "be",
    explanation: "Subjunctive after 'essential that': use 'be' for all persons.",
    explanationSpanish: "Subjuntivo después de 'essential that': usamos 'be' para todas las personas.",
    category: "subjunctive",
    difficulty: "hard"
  },
  // Advanced Phrasal Verbs
  {
    id: "b2-g-28",
    type: "multiple-choice",
    question: "The meeting has been ___ until next week.",
    options: ["put off", "put on", "put up", "put through"],
    correctAnswer: "put off",
    explanation: "'Put off' = postpone.",
    explanationSpanish: "'Put off' = posponer.",
    category: "phrasal-verbs",
    difficulty: "easy"
  },
  {
    id: "b2-g-29",
    type: "multiple-choice",
    question: "I can't ___ his rude behavior anymore.",
    options: ["put up with", "put off", "put on", "put out"],
    correctAnswer: "put up with",
    explanation: "'Put up with' = tolerate.",
    explanationSpanish: "'Put up with' = tolerar.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  {
    id: "b2-g-30",
    type: "multiple-choice",
    question: "Scientists are trying to ___ a cure for the disease.",
    options: ["come up with", "come across", "come over", "come through"],
    correctAnswer: "come up with",
    explanation: "'Come up with' = think of, produce (an idea or solution).",
    explanationSpanish: "'Come up with' = pensar en, producir (una idea o solución).",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  // Participle clauses
  {
    id: "b2-g-31",
    type: "multiple-choice",
    question: "___ the door, she noticed a strange man.",
    options: ["Open", "Opening", "Opened", "To open"],
    correctAnswer: "Opening",
    explanation: "Present participle clause: -ing form for simultaneous actions.",
    explanationSpanish: "Cláusula de participio presente: forma -ing para acciones simultáneas.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  {
    id: "b2-g-32",
    type: "multiple-choice",
    question: "___ in 1990, the building is now a museum.",
    options: ["Build", "Building", "Built", "To build"],
    correctAnswer: "Built",
    explanation: "Past participle clause: for passive meaning.",
    explanationSpanish: "Cláusula de participio pasado: para significado pasivo.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  // Emphasis with auxiliaries
  {
    id: "b2-g-33",
    type: "multiple-choice",
    question: "I ___ tell you the truth, honestly!",
    options: ["do", "did", "am", "have"],
    correctAnswer: "did",
    explanation: "Use 'did' to emphasize a past action.",
    explanationSpanish: "Usamos 'did' para enfatizar una acción pasada.",
    category: "emphasis",
    difficulty: "medium"
  },
  {
    id: "b2-g-34",
    type: "multiple-choice",
    question: "She ___ love chocolate, despite what she says.",
    options: ["do", "does", "is", "has"],
    correctAnswer: "does",
    explanation: "Use 'does' to emphasize a present fact with third person.",
    explanationSpanish: "Usamos 'does' para enfatizar un hecho presente con tercera persona.",
    category: "emphasis",
    difficulty: "medium"
  },
  {
    id: "b2-g-35",
    type: "multiple-choice",
    question: "I ___ finish the project on time, I promise!",
    options: ["do", "will", "shall", "am"],
    correctAnswer: "will",
    explanation: "Stressed 'will' for strong determination or promises.",
    explanationSpanish: "'Will' enfatizado para determinación fuerte o promesas.",
    category: "emphasis",
    difficulty: "easy"
  },
];

// ==================== C1 LEVEL EXERCISES (35 exercises) ====================
export const c1GrammarExercises: GrammarExercise[] = [
  // Advanced Inversions
  {
    id: "c1-g-1",
    type: "multiple-choice",
    question: "Hardly ___ the house when it started to rain.",
    options: ["I had left", "had I left", "I left", "did I leave"],
    correctAnswer: "had I left",
    explanation: "'Hardly' + inversion (auxiliary before subject) + when/before.",
    explanationSpanish: "'Hardly' + inversión (auxiliar antes del sujeto) + when/before.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-g-2",
    type: "multiple-choice",
    question: "No sooner ___ than the phone rang.",
    options: ["I had arrived", "had I arrived", "I arrived", "did I arrive"],
    correctAnswer: "had I arrived",
    explanation: "'No sooner' + past perfect inverted + 'than'.",
    explanationSpanish: "'No sooner' + pasado perfecto invertido + 'than'.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-g-3",
    type: "multiple-choice",
    question: "Only after the meeting ___ the full impact of the decision.",
    options: ["I understood", "did I understand", "I did understand", "understood I"],
    correctAnswer: "did I understand",
    explanation: "'Only after' + noun/clause requires inversion in the main clause.",
    explanationSpanish: "'Only after' + sustantivo/cláusula requiere inversión en la cláusula principal.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-g-4",
    type: "multiple-choice",
    question: "Little ___ that she would become famous.",
    options: ["she knew", "did she know", "she did know", "knew she"],
    correctAnswer: "did she know",
    explanation: "'Little' at the start requires inversion.",
    explanationSpanish: "'Little' al principio requiere inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  // Subjunctive mood
  {
    id: "c1-g-5",
    type: "multiple-choice",
    question: "The committee insists that the report ___ submitted by Friday.",
    options: ["is", "be", "was", "being"],
    correctAnswer: "be",
    explanation: "Subjunctive after 'insist that': base form 'be' for all persons.",
    explanationSpanish: "Subjuntivo después de 'insist that': forma base 'be' para todas las personas.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-g-6",
    type: "multiple-choice",
    question: "It is vital that every employee ___ the new procedures.",
    options: ["follows", "follow", "following", "followed"],
    correctAnswer: "follow",
    explanation: "'It is vital that' + subjunctive (base form).",
    explanationSpanish: "'It is vital that' + subjuntivo (forma base).",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-g-7",
    type: "multiple-choice",
    question: "She demanded that he ___ an apology.",
    options: ["make", "makes", "made", "making"],
    correctAnswer: "make",
    explanation: "'Demand that' requires subjunctive (base form).",
    explanationSpanish: "'Demand that' requiere subjuntivo (forma base).",
    category: "subjunctive",
    difficulty: "hard"
  },
  // Complex passive structures
  {
    id: "c1-g-8",
    type: "multiple-choice",
    question: "The suspect is believed ___ the country.",
    options: ["leave", "to leave", "to have left", "leaving"],
    correctAnswer: "to have left",
    explanation: "Passive report structure: is believed + to have + past participle (for completed action).",
    explanationSpanish: "Estructura de reporte pasivo: is believed + to have + participio pasado (para acción completada).",
    category: "passive",
    difficulty: "hard"
  },
  {
    id: "c1-g-9",
    type: "multiple-choice",
    question: "The project is expected ___ completed by December.",
    options: ["be", "to be", "being", "been"],
    correctAnswer: "to be",
    explanation: "Passive + expected + to be + past participle.",
    explanationSpanish: "Pasivo + expected + to be + participio pasado.",
    category: "passive",
    difficulty: "hard"
  },
  {
    id: "c1-g-10",
    type: "multiple-choice",
    question: "The politician is said ___ millions in offshore accounts.",
    options: ["having", "to have", "have", "has"],
    correctAnswer: "to have",
    explanation: "'Is said to have' for reported information about possession/state.",
    explanationSpanish: "'Is said to have' para información reportada sobre posesión/estado.",
    category: "passive",
    difficulty: "hard"
  },
  // Advanced modals
  {
    id: "c1-g-11",
    type: "multiple-choice",
    question: "You ___ have told me earlier - I was worried sick!",
    options: ["might", "could", "should", "would"],
    correctAnswer: "could",
    explanation: "'Could have' for criticism about past possibility/ability.",
    explanationSpanish: "'Could have' para crítica sobre posibilidad/habilidad pasada.",
    category: "modals",
    difficulty: "hard"
  },
  {
    id: "c1-g-12",
    type: "multiple-choice",
    question: "She ___ have been sleeping - her phone was off.",
    options: ["might", "must", "should", "would"],
    correctAnswer: "might",
    explanation: "'Might have + pp' for uncertain deduction about the past.",
    explanationSpanish: "'Might have + pp' para deducción incierta sobre el pasado.",
    category: "modals",
    difficulty: "hard"
  },
  {
    id: "c1-g-13",
    type: "multiple-choice",
    question: "They ___ well be the best team in the league.",
    options: ["might", "may", "could", "should"],
    correctAnswer: "may",
    explanation: "'May well' expresses strong possibility.",
    explanationSpanish: "'May well' expresa posibilidad fuerte.",
    category: "modals",
    difficulty: "hard"
  },
  // Noun clauses
  {
    id: "c1-g-14",
    type: "multiple-choice",
    question: "___ she said was completely untrue.",
    options: ["What", "That", "Which", "How"],
    correctAnswer: "What",
    explanation: "'What' introduces a noun clause meaning 'the thing that'.",
    explanationSpanish: "'What' introduce una cláusula nominal que significa 'lo que'.",
    category: "noun-clauses",
    difficulty: "medium"
  },
  {
    id: "c1-g-15",
    type: "multiple-choice",
    question: "I wonder ___ she'll accept the offer.",
    options: ["if", "that", "what", "which"],
    correctAnswer: "if",
    explanation: "'Wonder' is followed by 'if/whether' for yes/no questions.",
    explanationSpanish: "'Wonder' va seguido de 'if/whether' para preguntas de sí/no.",
    category: "noun-clauses",
    difficulty: "medium"
  },
  {
    id: "c1-g-16",
    type: "multiple-choice",
    question: "___ he lied is obvious to everyone.",
    options: ["What", "That", "If", "Whether"],
    correctAnswer: "That",
    explanation: "'That' introduces a noun clause as the subject.",
    explanationSpanish: "'That' introduce una cláusula nominal como sujeto.",
    category: "noun-clauses",
    difficulty: "hard"
  },
  // Reduced relative clauses
  {
    id: "c1-g-17",
    type: "multiple-choice",
    question: "The man ___ next to Mary is her boss.",
    options: ["sat", "sitting", "who sitting", "sits"],
    correctAnswer: "sitting",
    explanation: "Reduced relative clause: 'sitting' = 'who is sitting'.",
    explanationSpanish: "Cláusula relativa reducida: 'sitting' = 'who is sitting'.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "c1-g-18",
    type: "multiple-choice",
    question: "The documents ___ on the desk need to be signed.",
    options: ["leave", "leaving", "left", "to leave"],
    correctAnswer: "left",
    explanation: "Reduced relative: 'left' = 'which were left' (passive meaning).",
    explanationSpanish: "Relativa reducida: 'left' = 'which were left' (significado pasivo).",
    category: "relative-clauses",
    difficulty: "medium"
  },
  // Concession (although, despite, however)
  {
    id: "c1-g-19",
    type: "multiple-choice",
    question: "___ the weather was terrible, we had a great time.",
    options: ["Despite", "Although", "However", "In spite"],
    correctAnswer: "Although",
    explanation: "'Although' is followed by a clause (subject + verb).",
    explanationSpanish: "'Although' va seguido de una cláusula (sujeto + verbo).",
    category: "concession",
    difficulty: "medium"
  },
  {
    id: "c1-g-20",
    type: "multiple-choice",
    question: "___ being tired, she finished the project.",
    options: ["Although", "Despite", "However", "Whereas"],
    correctAnswer: "Despite",
    explanation: "'Despite' is followed by noun/gerund, not a clause.",
    explanationSpanish: "'Despite' va seguido de sustantivo/gerundio, no de una cláusula.",
    category: "concession",
    difficulty: "medium"
  },
  {
    id: "c1-g-21",
    type: "multiple-choice",
    question: "The exam was difficult. ___, most students passed.",
    options: ["Although", "Despite", "However", "In spite of"],
    correctAnswer: "However",
    explanation: "'However' connects two independent sentences, followed by comma.",
    explanationSpanish: "'However' conecta dos oraciones independientes, seguido de coma.",
    category: "concession",
    difficulty: "medium"
  },
  // Advanced conditionals
  {
    id: "c1-g-22",
    type: "multiple-choice",
    question: "___ you to change your mind, please let me know.",
    options: ["If", "Were", "Should", "Had"],
    correctAnswer: "Were",
    explanation: "Inverted conditional: 'Were you to' = 'If you were to' (formal).",
    explanationSpanish: "Condicional invertido: 'Were you to' = 'If you were to' (formal).",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "c1-g-23",
    type: "multiple-choice",
    question: "___ I known about the problem, I would have helped.",
    options: ["If", "Were", "Should", "Had"],
    correctAnswer: "Had",
    explanation: "'Had I known' = 'If I had known' (inverted third conditional).",
    explanationSpanish: "'Had I known' = 'If I had known' (tercera condicional invertida).",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "c1-g-24",
    type: "multiple-choice",
    question: "___ you need any assistance, don't hesitate to ask.",
    options: ["If", "Were", "Should", "Had"],
    correctAnswer: "Should",
    explanation: "'Should you need' = 'If you need' (formal first conditional).",
    explanationSpanish: "'Should you need' = 'If you need' (primera condicional formal).",
    category: "conditionals",
    difficulty: "hard"
  },
  // Discourse markers
  {
    id: "c1-g-25",
    type: "multiple-choice",
    question: "___, the results were better than expected.",
    options: ["On the whole", "On contrast", "On account", "On spite"],
    correctAnswer: "On the whole",
    explanation: "'On the whole' = in general, considering everything.",
    explanationSpanish: "'On the whole' = en general, considerando todo.",
    category: "discourse-markers",
    difficulty: "medium"
  },
  {
    id: "c1-g-26",
    type: "multiple-choice",
    question: "The project failed. ___, we learned valuable lessons.",
    options: ["That said", "That being", "That is", "That was"],
    correctAnswer: "That said",
    explanation: "'That said' introduces a contrasting or balancing point.",
    explanationSpanish: "'That said' introduce un punto contrastante o equilibrador.",
    category: "discourse-markers",
    difficulty: "hard"
  },
  // Ellipsis and substitution
  {
    id: "c1-g-27",
    type: "multiple-choice",
    question: "A: 'Are you coming?' B: 'I might ___.'",
    options: ["be", "do", "come", "-"],
    correctAnswer: "-",
    explanation: "Ellipsis: 'I might' is enough - 'come' is understood.",
    explanationSpanish: "Elipsis: 'I might' es suficiente - 'come' se sobreentiende.",
    category: "ellipsis",
    difficulty: "hard"
  },
  {
    id: "c1-g-28",
    type: "multiple-choice",
    question: "She wanted to leave, but her husband didn't want ___.",
    options: ["it", "so", "to", "that"],
    correctAnswer: "to",
    explanation: "'Want to' can be reduced to just 'to' to avoid repetition.",
    explanationSpanish: "'Want to' puede reducirse a solo 'to' para evitar repetición.",
    category: "ellipsis",
    difficulty: "hard"
  },
  // Fronting for emphasis
  {
    id: "c1-g-29",
    type: "multiple-choice",
    question: "___ I cannot accept.",
    options: ["Such behavior", "Behavior such", "Such a behavior", "The such behavior"],
    correctAnswer: "Such behavior",
    explanation: "Object fronting for emphasis: 'Such behavior I cannot accept'.",
    explanationSpanish: "Anteposición del objeto para énfasis: 'Such behavior I cannot accept'.",
    category: "fronting",
    difficulty: "hard"
  },
  {
    id: "c1-g-30",
    type: "multiple-choice",
    question: "___ was her talent that she was offered a scholarship.",
    options: ["So", "Such", "Very", "Much"],
    correctAnswer: "Such",
    explanation: "'Such was X that...' for emphasis on quality/degree.",
    explanationSpanish: "'Such was X that...' para énfasis en cualidad/grado.",
    category: "fronting",
    difficulty: "hard"
  },
  // Complex gerund/infinitive patterns
  {
    id: "c1-g-31",
    type: "multiple-choice",
    question: "I remember ___ the door. (I did it in the past)",
    options: ["lock", "to lock", "locking", "locked"],
    correctAnswer: "locking",
    explanation: "'Remember + gerund' = remembering a past action.",
    explanationSpanish: "'Remember + gerundio' = recordar una acción pasada.",
    category: "gerunds-infinitives",
    difficulty: "hard"
  },
  {
    id: "c1-g-32",
    type: "multiple-choice",
    question: "I'll try ___ earlier tomorrow. (make an effort)",
    options: ["arrive", "to arrive", "arriving", "arrived"],
    correctAnswer: "to arrive",
    explanation: "'Try + infinitive' = make an effort to do something.",
    explanationSpanish: "'Try + infinitivo' = hacer un esfuerzo para hacer algo.",
    category: "gerunds-infinitives",
    difficulty: "hard"
  },
  {
    id: "c1-g-33",
    type: "multiple-choice",
    question: "She stopped ___ a coffee on her way to work.",
    options: ["buy", "to buy", "buying", "bought"],
    correctAnswer: "to buy",
    explanation: "'Stop + to infinitive' = stop in order to do something else.",
    explanationSpanish: "'Stop + infinitivo' = parar para hacer otra cosa.",
    category: "gerunds-infinitives",
    difficulty: "hard"
  },
  // As if / as though
  {
    id: "c1-g-34",
    type: "multiple-choice",
    question: "He talks as if he ___ everything.",
    options: ["knows", "knew", "knowing", "had known"],
    correctAnswer: "knew",
    explanation: "'As if' + past simple for present unreal situations.",
    explanationSpanish: "'As if' + pasado simple para situaciones irreales presentes.",
    category: "as-if",
    difficulty: "hard"
  },
  {
    id: "c1-g-35",
    type: "multiple-choice",
    question: "She looked as though she ___ crying all night.",
    options: ["was", "were", "had been", "has been"],
    correctAnswer: "had been",
    explanation: "'As though' + past perfect for past unreal situations.",
    explanationSpanish: "'As though' + pasado perfecto para situaciones irreales pasadas.",
    category: "as-if",
    difficulty: "hard"
  },
];

// ==================== UTILITY FUNCTIONS ====================

import { c2GrammarExercises } from './grammarExercisesC2';
import {
  a1AdditionalExercises, 
  a2AdditionalExercises, 
  b1AdditionalExercises, 
  b2AdditionalExercises, 
  c1AdditionalExercises 
} from './grammarExercisesAdditional';
import {
  a1NewExercises,
  a2NewExercises,
  b1NewExercises,
  b2NewExercises,
  c1NewExercises,
  c2NewExercises
} from './grammarExercisesExpanded2';
import {
  a1Practice35,
  a2Practice35,
  b1Practice35,
  b2Practice35,
  c1Practice35,
  c2Practice35,
} from './grammarPractice35';
import { allC1AdvancedExercises } from './grammarExercisesC1Complete';
import {
  a1GrammarCurriculum,
  a2GrammarCurriculum,
  b1GrammarCurriculum,
  b2GrammarCurriculum,
  c1GrammarCurriculum,
} from './grammarCurriculumComplete';
import { allB1CompleteExercises } from './grammarB1Complete';
import { allB2CompleteExercises } from './grammarB2Complete';
import { allC2CompleteExercises } from './grammarC2Complete';
import { allA2CompleteExercises } from './grammarA2Complete';

// Combine original, additional, and curriculum exercises for each level
const allA1Exercises = [...a1GrammarExercises, ...a1AdditionalExercises, ...a1NewExercises, ...a1GrammarCurriculum, ...a1Practice35];
const allA2Exercises = [...a2GrammarExercises, ...a2AdditionalExercises, ...a2NewExercises, ...a2GrammarCurriculum, ...allA2CompleteExercises, ...a2Practice35];
const allB1Exercises = [...b1GrammarExercises, ...b1AdditionalExercises, ...b1NewExercises, ...b1GrammarCurriculum, ...allB1CompleteExercises, ...b1Practice35];
const allB2Exercises = [...b2GrammarExercises, ...b2AdditionalExercises, ...b2NewExercises, ...b2GrammarCurriculum, ...allB2CompleteExercises, ...b2Practice35];
const allC1Exercises = [...c1GrammarExercises, ...c1AdditionalExercises, ...c1NewExercises, ...allC1AdvancedExercises, ...c1GrammarCurriculum, ...c1Practice35];
const allC2Exercises = [...c2GrammarExercises, ...c2NewExercises, ...allC2CompleteExercises, ...c2Practice35];

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export function getGrammarExercisesByLevel(level: CEFRLevel): GrammarExercise[] {
  const exerciseMap: Record<CEFRLevel, GrammarExercise[]> = {
    "A1": allA1Exercises,
    "A2": allA2Exercises,
    "B1": allB1Exercises,
    "B2": allB2Exercises,
    "C1": allC1Exercises,
    "C2": allC2Exercises,
  };
  return exerciseMap[level] || [];
}

export function getGrammarExercisesByCategory(level: CEFRLevel, category: string): GrammarExercise[] {
  const exercises = getGrammarExercisesByLevel(level);
  return exercises.filter(ex => ex.category === category || ex.category.includes(category) || category.includes(ex.category));
}

export function getRandomGrammarExercises(level: CEFRLevel, count: number = 10): GrammarExercise[] {
  const exercises = getGrammarExercisesByLevel(level);
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, exercises.length));
}

export function getAllGrammarExercises(): GrammarExercise[] {
  return [
    ...allA1Exercises,
    ...allA2Exercises,
    ...allB1Exercises,
    ...allB2Exercises,
    ...allC1Exercises,
    ...allC2Exercises,
  ];
}

export const grammarExerciseStats = {
  A1: allA1Exercises.length,
  A2: allA2Exercises.length,
  B1: allB1Exercises.length,
  B2: allB2Exercises.length,
  C1: allC1Exercises.length,
  C2: allC2Exercises.length,
  total: allA1Exercises.length + allA2Exercises.length + allB1Exercises.length + allB2Exercises.length + allC1Exercises.length + allC2Exercises.length,
};
