// Additional Grammar Exercises - 200+ new exercises across A1-C2
// This file supplements grammarExercisesExpanded.ts

import { GrammarExercise } from './grammarExercisesExpanded';

// ==================== A1 ADDITIONAL EXERCISES (35 new) ====================
export const a1NewExercises: GrammarExercise[] = [
  // Present Continuous
  {
    id: "a1-new-1",
    type: "multiple-choice",
    question: "Look! The baby ___ now.",
    options: ["sleeps", "is sleeping", "sleep", "sleeping"],
    correctAnswer: "is sleeping",
    explanation: "Present Continuous (is/am/are + -ing) describes actions happening right now.",
    explanationSpanish: "Present Continuous (is/am/are + -ing) describe acciones que ocurren ahora mismo.",
    category: "present-continuous",
    difficulty: "easy"
  },
  {
    id: "a1-new-2",
    type: "multiple-choice",
    question: "They ___ dinner at the moment.",
    options: ["cook", "cooks", "are cooking", "cooked"],
    correctAnswer: "are cooking",
    explanation: "'At the moment' signals Present Continuous with 'are + -ing'.",
    explanationSpanish: "'At the moment' señala Present Continuous con 'are + -ing'.",
    category: "present-continuous",
    difficulty: "easy"
  },
  {
    id: "a1-new-3",
    type: "multiple-choice",
    question: "I ___ to music right now.",
    options: ["listen", "listens", "am listening", "listened"],
    correctAnswer: "am listening",
    explanation: "With 'I', use 'am + -ing' for Present Continuous.",
    explanationSpanish: "Con 'I', usa 'am + -ing' para Present Continuous.",
    category: "present-continuous",
    difficulty: "easy"
  },
  // To Be
  {
    id: "a1-new-4",
    type: "multiple-choice",
    question: "My parents ___ doctors.",
    options: ["is", "am", "are", "be"],
    correctAnswer: "are",
    explanation: "'My parents' is plural, so we use 'are'.",
    explanationSpanish: "'My parents' es plural, así que usamos 'are'.",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-new-5",
    type: "multiple-choice",
    question: "The cat ___ on the sofa.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: "'The cat' is singular third person, use 'is'.",
    explanationSpanish: "'The cat' es singular tercera persona, usa 'is'.",
    category: "to-be",
    difficulty: "easy"
  },
  {
    id: "a1-new-6",
    type: "multiple-choice",
    question: "I ___ very happy today.",
    options: ["is", "am", "are", "be"],
    correctAnswer: "am",
    explanation: "With 'I', always use 'am'.",
    explanationSpanish: "Con 'I', siempre usa 'am'.",
    category: "to-be",
    difficulty: "easy"
  },
  // Possessives
  {
    id: "a1-new-7",
    type: "multiple-choice",
    question: "This is ___ book. (I)",
    options: ["me", "my", "I", "mine"],
    correctAnswer: "my",
    explanation: "'My' is the possessive adjective for 'I', used before nouns.",
    explanationSpanish: "'My' es el adjetivo posesivo de 'I', usado antes de sustantivos.",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-new-8",
    type: "multiple-choice",
    question: "Is that ___ car? (they)",
    options: ["they", "them", "their", "theirs"],
    correctAnswer: "their",
    explanation: "'Their' is the possessive adjective for 'they'.",
    explanationSpanish: "'Their' es el adjetivo posesivo de 'they'.",
    category: "possessives",
    difficulty: "easy"
  },
  {
    id: "a1-new-9",
    type: "multiple-choice",
    question: "The book is ___. (I)",
    options: ["my", "me", "mine", "I"],
    correctAnswer: "mine",
    explanation: "'Mine' is the possessive pronoun (stands alone, no noun after).",
    explanationSpanish: "'Mine' es el pronombre posesivo (va solo, sin sustantivo después).",
    category: "possessives",
    difficulty: "medium"
  },
  // Can / Can't
  {
    id: "a1-new-10",
    type: "multiple-choice",
    question: "Birds ___ fly.",
    options: ["can", "cans", "are can", "do can"],
    correctAnswer: "can",
    explanation: "'Can' is a modal verb - never add -s or use with 'do'.",
    explanationSpanish: "'Can' es un verbo modal - nunca añadas -s ni uses con 'do'.",
    category: "modals-can",
    difficulty: "easy"
  },
  {
    id: "a1-new-11",
    type: "multiple-choice",
    question: "She ___ swim very well.",
    options: ["can't", "don't can", "isn't can", "not can"],
    correctAnswer: "can't",
    explanation: "Negative of 'can' is 'can't' (cannot).",
    explanationSpanish: "El negativo de 'can' es 'can't' (cannot).",
    category: "modals-can",
    difficulty: "easy"
  },
  {
    id: "a1-new-12",
    type: "multiple-choice",
    question: "___ you speak French?",
    options: ["Do can", "Are can", "Can", "Does can"],
    correctAnswer: "Can",
    explanation: "Questions with 'can': Can + subject + base verb.",
    explanationSpanish: "Preguntas con 'can': Can + sujeto + verbo base.",
    category: "modals-can",
    difficulty: "easy"
  },
  // There is / There are
  {
    id: "a1-new-13",
    type: "multiple-choice",
    question: "___ a park near my house.",
    options: ["There is", "There are", "It is", "They are"],
    correctAnswer: "There is",
    explanation: "'There is' for singular nouns (a park = one park).",
    explanationSpanish: "'There is' para sustantivos singulares (a park = un parque).",
    category: "there-is-are",
    difficulty: "easy"
  },
  {
    id: "a1-new-14",
    type: "multiple-choice",
    question: "___ many books on the shelf.",
    options: ["There is", "There are", "It is", "Is there"],
    correctAnswer: "There are",
    explanation: "'There are' for plural nouns (many books).",
    explanationSpanish: "'There are' para sustantivos plurales (many books).",
    category: "there-is-are",
    difficulty: "easy"
  },
  {
    id: "a1-new-15",
    type: "multiple-choice",
    question: "___ any milk in the fridge?",
    options: ["Is there", "Are there", "There is", "Does there"],
    correctAnswer: "Is there",
    explanation: "Question form: 'Is there' + singular/uncountable noun.",
    explanationSpanish: "Forma interrogativa: 'Is there' + sustantivo singular/incontable.",
    category: "there-is-are",
    difficulty: "easy"
  },
  // Plurals
  {
    id: "a1-new-16",
    type: "multiple-choice",
    question: "One child, two ___.",
    options: ["childs", "childes", "children", "childrens"],
    correctAnswer: "children",
    explanation: "'Child' has an irregular plural: 'children'.",
    explanationSpanish: "'Child' tiene un plural irregular: 'children'.",
    category: "plurals",
    difficulty: "medium"
  },
  {
    id: "a1-new-17",
    type: "multiple-choice",
    question: "One box, three ___.",
    options: ["boxs", "boxes", "boxies", "box"],
    correctAnswer: "boxes",
    explanation: "Nouns ending in -x add -es for plural.",
    explanationSpanish: "Los sustantivos terminados en -x añaden -es para el plural.",
    category: "plurals",
    difficulty: "easy"
  },
  {
    id: "a1-new-18",
    type: "multiple-choice",
    question: "One woman, many ___.",
    options: ["womans", "womens", "women", "womanies"],
    correctAnswer: "women",
    explanation: "'Woman' has an irregular plural: 'women'.",
    explanationSpanish: "'Woman' tiene un plural irregular: 'women'.",
    category: "plurals",
    difficulty: "medium"
  },
  // A / An
  {
    id: "a1-new-19",
    type: "multiple-choice",
    question: "I have ___ orange.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "an",
    explanation: "Use 'an' before words starting with vowel sounds (orange).",
    explanationSpanish: "Usa 'an' antes de palabras que empiezan con sonido vocal (orange).",
    category: "articles",
    difficulty: "easy"
  },
  {
    id: "a1-new-20",
    type: "multiple-choice",
    question: "She is ___ university student.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "a",
    explanation: "'University' starts with /juː/ (consonant sound), so use 'a'.",
    explanationSpanish: "'University' empieza con /juː/ (sonido consonante), usa 'a'.",
    category: "articles",
    difficulty: "medium"
  },
  {
    id: "a1-new-21",
    type: "multiple-choice",
    question: "It's ___ honest mistake.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "an",
    explanation: "'Honest' starts with a vowel sound (silent h), so use 'an'.",
    explanationSpanish: "'Honest' empieza con sonido vocal (h muda), usa 'an'.",
    category: "articles",
    difficulty: "medium"
  },
  // Questions with What/Where/When
  {
    id: "a1-new-22",
    type: "multiple-choice",
    question: "___ is your name?",
    options: ["What", "Where", "When", "How"],
    correctAnswer: "What",
    explanation: "'What' asks about things or information.",
    explanationSpanish: "'What' pregunta sobre cosas o información.",
    category: "question-words",
    difficulty: "easy"
  },
  {
    id: "a1-new-23",
    type: "multiple-choice",
    question: "___ do you live?",
    options: ["What", "Where", "When", "Who"],
    correctAnswer: "Where",
    explanation: "'Where' asks about places or locations.",
    explanationSpanish: "'Where' pregunta sobre lugares o ubicaciones.",
    category: "question-words",
    difficulty: "easy"
  },
  {
    id: "a1-new-24",
    type: "multiple-choice",
    question: "___ is your birthday?",
    options: ["What", "Where", "When", "Who"],
    correctAnswer: "When",
    explanation: "'When' asks about time.",
    explanationSpanish: "'When' pregunta sobre tiempo.",
    category: "question-words",
    difficulty: "easy"
  },
  // Prepositions of Time
  {
    id: "a1-new-25",
    type: "multiple-choice",
    question: "I wake up ___ 7 o'clock.",
    options: ["in", "on", "at", "to"],
    correctAnswer: "at",
    explanation: "'At' is used for specific times.",
    explanationSpanish: "'At' se usa para horas específicas.",
    category: "prepositions-time",
    difficulty: "easy"
  },
  {
    id: "a1-new-26",
    type: "multiple-choice",
    question: "My birthday is ___ July.",
    options: ["in", "on", "at", "to"],
    correctAnswer: "in",
    explanation: "'In' is used for months and years.",
    explanationSpanish: "'In' se usa para meses y años.",
    category: "prepositions-time",
    difficulty: "easy"
  },
  {
    id: "a1-new-27",
    type: "multiple-choice",
    question: "I have class ___ Monday.",
    options: ["in", "on", "at", "to"],
    correctAnswer: "on",
    explanation: "'On' is used for days of the week.",
    explanationSpanish: "'On' se usa para días de la semana.",
    category: "prepositions-time",
    difficulty: "easy"
  },
  // Prepositions of Place
  {
    id: "a1-new-28",
    type: "multiple-choice",
    question: "The book is ___ the table.",
    options: ["in", "on", "at", "under"],
    correctAnswer: "on",
    explanation: "'On' means on the surface of something.",
    explanationSpanish: "'On' significa sobre la superficie de algo.",
    category: "prepositions-place",
    difficulty: "easy"
  },
  {
    id: "a1-new-29",
    type: "multiple-choice",
    question: "The cat is ___ the box.",
    options: ["in", "on", "at", "between"],
    correctAnswer: "in",
    explanation: "'In' means inside something.",
    explanationSpanish: "'In' significa dentro de algo.",
    category: "prepositions-place",
    difficulty: "easy"
  },
  {
    id: "a1-new-30",
    type: "multiple-choice",
    question: "She is waiting ___ the bus stop.",
    options: ["in", "on", "at", "to"],
    correctAnswer: "at",
    explanation: "'At' for specific points or locations.",
    explanationSpanish: "'At' para puntos o ubicaciones específicas.",
    category: "prepositions-place",
    difficulty: "easy"
  },
  // This/That/These/Those
  {
    id: "a1-new-31",
    type: "multiple-choice",
    question: "___ is my book. (here, singular)",
    options: ["This", "That", "These", "Those"],
    correctAnswer: "This",
    explanation: "'This' for singular things near us.",
    explanationSpanish: "'This' para cosas singulares cerca de nosotros.",
    category: "demonstratives",
    difficulty: "easy"
  },
  {
    id: "a1-new-32",
    type: "multiple-choice",
    question: "___ are my friends. (here, plural)",
    options: ["This", "That", "These", "Those"],
    correctAnswer: "These",
    explanation: "'These' for plural things near us.",
    explanationSpanish: "'These' para cosas plurales cerca de nosotros.",
    category: "demonstratives",
    difficulty: "easy"
  },
  {
    id: "a1-new-33",
    type: "multiple-choice",
    question: "___ building over there is very old. (far, singular)",
    options: ["This", "That", "These", "Those"],
    correctAnswer: "That",
    explanation: "'That' for singular things far from us.",
    explanationSpanish: "'That' para cosas singulares lejos de nosotros.",
    category: "demonstratives",
    difficulty: "easy"
  },
  // Adverbs of Frequency
  {
    id: "a1-new-34",
    type: "multiple-choice",
    question: "She ___ goes to the gym. (100%)",
    options: ["never", "sometimes", "always", "rarely"],
    correctAnswer: "always",
    explanation: "'Always' = 100% frequency.",
    explanationSpanish: "'Always' = 100% frecuencia.",
    category: "adverbs-frequency",
    difficulty: "easy"
  },
  {
    id: "a1-new-35",
    type: "multiple-choice",
    question: "He ___ eats fish. (0%)",
    options: ["never", "always", "often", "usually"],
    correctAnswer: "never",
    explanation: "'Never' = 0% frequency.",
    explanationSpanish: "'Never' = 0% frecuencia.",
    category: "adverbs-frequency",
    difficulty: "easy"
  },
];

// ==================== A2 ADDITIONAL EXERCISES (35 new) ====================
export const a2NewExercises: GrammarExercise[] = [
  // Past Simple Regular
  {
    id: "a2-new-1",
    type: "multiple-choice",
    question: "I ___ TV last night.",
    options: ["watch", "watched", "watching", "watches"],
    correctAnswer: "watched",
    explanation: "Past Simple regular verbs add -ed: watch → watched.",
    explanationSpanish: "Past Simple verbos regulares añaden -ed: watch → watched.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-new-2",
    type: "multiple-choice",
    question: "She ___ to the party yesterday.",
    options: ["go", "goes", "went", "going"],
    correctAnswer: "went",
    explanation: "'Go' is irregular: go → went.",
    explanationSpanish: "'Go' es irregular: go → went.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-new-3",
    type: "multiple-choice",
    question: "They ___ a great time at the beach.",
    options: ["have", "has", "had", "having"],
    correctAnswer: "had",
    explanation: "'Have' is irregular: have → had.",
    explanationSpanish: "'Have' es irregular: have → had.",
    category: "past-simple",
    difficulty: "easy"
  },
  {
    id: "a2-new-4",
    type: "multiple-choice",
    question: "He ___ work early yesterday.",
    options: ["didn't finished", "didn't finish", "doesn't finish", "not finish"],
    correctAnswer: "didn't finish",
    explanation: "Negative Past Simple: didn't + base verb (not past tense).",
    explanationSpanish: "Past Simple negativo: didn't + verbo base (no pasado).",
    category: "past-simple",
    difficulty: "medium"
  },
  {
    id: "a2-new-5",
    type: "multiple-choice",
    question: "___ you see the movie?",
    options: ["Did", "Do", "Does", "Was"],
    correctAnswer: "Did",
    explanation: "Questions in Past Simple use 'Did' + base verb.",
    explanationSpanish: "Preguntas en Past Simple usan 'Did' + verbo base.",
    category: "past-simple",
    difficulty: "easy"
  },
  // Past Continuous
  {
    id: "a2-new-6",
    type: "multiple-choice",
    question: "I ___ when you called.",
    options: ["sleep", "slept", "was sleeping", "am sleeping"],
    correctAnswer: "was sleeping",
    explanation: "Past Continuous (was/were + -ing) for actions in progress in the past.",
    explanationSpanish: "Past Continuous (was/were + -ing) para acciones en progreso en el pasado.",
    category: "past-continuous",
    difficulty: "medium"
  },
  {
    id: "a2-new-7",
    type: "multiple-choice",
    question: "They ___ dinner at 8 pm yesterday.",
    options: ["were having", "was having", "had", "have"],
    correctAnswer: "were having",
    explanation: "'They' uses 'were' + -ing for Past Continuous.",
    explanationSpanish: "'They' usa 'were' + -ing para Past Continuous.",
    category: "past-continuous",
    difficulty: "medium"
  },
  {
    id: "a2-new-8",
    type: "multiple-choice",
    question: "While I ___ TV, the phone rang.",
    options: ["watch", "watched", "was watching", "am watching"],
    correctAnswer: "was watching",
    explanation: "'While' + Past Continuous describes the ongoing action when interrupted.",
    explanationSpanish: "'While' + Past Continuous describe la acción en curso cuando fue interrumpida.",
    category: "past-continuous",
    difficulty: "medium"
  },
  // Future: Will vs Going to
  {
    id: "a2-new-9",
    type: "multiple-choice",
    question: "Look at those clouds! It ___ rain.",
    options: ["will", "is going to", "rains", "rained"],
    correctAnswer: "is going to",
    explanation: "'Going to' for predictions based on present evidence.",
    explanationSpanish: "'Going to' para predicciones basadas en evidencia presente.",
    category: "future",
    difficulty: "medium"
  },
  {
    id: "a2-new-10",
    type: "multiple-choice",
    question: "I think I ___ have pizza for dinner.",
    options: ["going to", "will", "am going to", "have"],
    correctAnswer: "will",
    explanation: "'Will' for decisions made at the moment of speaking.",
    explanationSpanish: "'Will' para decisiones tomadas en el momento de hablar.",
    category: "future",
    difficulty: "medium"
  },
  {
    id: "a2-new-11",
    type: "multiple-choice",
    question: "We ___ visit Paris next summer. We already have tickets!",
    options: ["will", "are going to", "visited", "visit"],
    correctAnswer: "are going to",
    explanation: "'Going to' for planned intentions.",
    explanationSpanish: "'Going to' para intenciones planificadas.",
    category: "future",
    difficulty: "medium"
  },
  // Comparatives
  {
    id: "a2-new-12",
    type: "multiple-choice",
    question: "My car is ___ than yours.",
    options: ["fast", "faster", "more fast", "fastest"],
    correctAnswer: "faster",
    explanation: "Short adjectives: add -er (fast → faster).",
    explanationSpanish: "Adjetivos cortos: añadir -er (fast → faster).",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-new-13",
    type: "multiple-choice",
    question: "This book is ___ than that one.",
    options: ["interesting", "more interesting", "interestinger", "most interesting"],
    correctAnswer: "more interesting",
    explanation: "Long adjectives: more + adjective.",
    explanationSpanish: "Adjetivos largos: more + adjetivo.",
    category: "comparatives",
    difficulty: "easy"
  },
  {
    id: "a2-new-14",
    type: "multiple-choice",
    question: "My sister is ___ than me.",
    options: ["good", "better", "more good", "gooder"],
    correctAnswer: "better",
    explanation: "'Good' has an irregular comparative: better.",
    explanationSpanish: "'Good' tiene un comparativo irregular: better.",
    category: "comparatives",
    difficulty: "medium"
  },
  // Superlatives
  {
    id: "a2-new-15",
    type: "multiple-choice",
    question: "Mount Everest is the ___ mountain in the world.",
    options: ["high", "higher", "highest", "most high"],
    correctAnswer: "highest",
    explanation: "Short adjectives: the + adjective + -est.",
    explanationSpanish: "Adjetivos cortos: the + adjetivo + -est.",
    category: "superlatives",
    difficulty: "easy"
  },
  {
    id: "a2-new-16",
    type: "multiple-choice",
    question: "This is the ___ movie I've ever seen.",
    options: ["bad", "worse", "worst", "most bad"],
    correctAnswer: "worst",
    explanation: "'Bad' has an irregular superlative: worst.",
    explanationSpanish: "'Bad' tiene un superlativo irregular: worst.",
    category: "superlatives",
    difficulty: "medium"
  },
  // Much/Many/A lot of
  {
    id: "a2-new-17",
    type: "multiple-choice",
    question: "How ___ money do you have?",
    options: ["many", "much", "lot", "a lot"],
    correctAnswer: "much",
    explanation: "'Much' for uncountable nouns (money).",
    explanationSpanish: "'Much' para sustantivos incontables (money).",
    category: "quantifiers",
    difficulty: "easy"
  },
  {
    id: "a2-new-18",
    type: "multiple-choice",
    question: "How ___ students are in your class?",
    options: ["many", "much", "lot", "a lot"],
    correctAnswer: "many",
    explanation: "'Many' for countable nouns (students).",
    explanationSpanish: "'Many' para sustantivos contables (students).",
    category: "quantifiers",
    difficulty: "easy"
  },
  {
    id: "a2-new-19",
    type: "multiple-choice",
    question: "There isn't ___ time left.",
    options: ["many", "much", "a lot", "few"],
    correctAnswer: "much",
    explanation: "'Much' with uncountable nouns in negative sentences.",
    explanationSpanish: "'Much' con sustantivos incontables en oraciones negativas.",
    category: "quantifiers",
    difficulty: "medium"
  },
  // Some/Any
  {
    id: "a2-new-20",
    type: "multiple-choice",
    question: "Is there ___ milk in the fridge?",
    options: ["some", "any", "a", "the"],
    correctAnswer: "any",
    explanation: "'Any' in questions and negatives.",
    explanationSpanish: "'Any' en preguntas y negativas.",
    category: "quantifiers",
    difficulty: "easy"
  },
  {
    id: "a2-new-21",
    type: "multiple-choice",
    question: "I have ___ friends in London.",
    options: ["some", "any", "no", "none"],
    correctAnswer: "some",
    explanation: "'Some' in positive sentences.",
    explanationSpanish: "'Some' en oraciones afirmativas.",
    category: "quantifiers",
    difficulty: "easy"
  },
  // Have to / Must
  {
    id: "a2-new-22",
    type: "multiple-choice",
    question: "You ___ wear a uniform at this school. (obligation)",
    options: ["must", "can", "might", "could"],
    correctAnswer: "must",
    explanation: "'Must' expresses strong obligation.",
    explanationSpanish: "'Must' expresa obligación fuerte.",
    category: "modals-obligation",
    difficulty: "medium"
  },
  {
    id: "a2-new-23",
    type: "multiple-choice",
    question: "I ___ get up early tomorrow. I have a meeting.",
    options: ["have to", "has to", "must to", "having to"],
    correctAnswer: "have to",
    explanation: "'Have to' for external obligation (with 'I').",
    explanationSpanish: "'Have to' para obligación externa (con 'I').",
    category: "modals-obligation",
    difficulty: "medium"
  },
  {
    id: "a2-new-24",
    type: "multiple-choice",
    question: "She ___ finish the project by Friday.",
    options: ["have to", "has to", "must to", "having to"],
    correctAnswer: "has to",
    explanation: "'Has to' for third person singular.",
    explanationSpanish: "'Has to' para tercera persona singular.",
    category: "modals-obligation",
    difficulty: "medium"
  },
  // Should
  {
    id: "a2-new-25",
    type: "multiple-choice",
    question: "You ___ eat more vegetables. (advice)",
    options: ["should", "must", "have to", "can"],
    correctAnswer: "should",
    explanation: "'Should' for advice and recommendations.",
    explanationSpanish: "'Should' para consejos y recomendaciones.",
    category: "modals-advice",
    difficulty: "easy"
  },
  {
    id: "a2-new-26",
    type: "multiple-choice",
    question: "You ___ drive so fast. It's dangerous.",
    options: ["shouldn't", "mustn't", "don't have to", "can't"],
    correctAnswer: "shouldn't",
    explanation: "'Shouldn't' for negative advice.",
    explanationSpanish: "'Shouldn't' para consejos negativos.",
    category: "modals-advice",
    difficulty: "easy"
  },
  // Present Perfect Simple
  {
    id: "a2-new-27",
    type: "multiple-choice",
    question: "I ___ that movie three times.",
    options: ["see", "saw", "have seen", "am seeing"],
    correctAnswer: "have seen",
    explanation: "Present Perfect for experiences (no specific time).",
    explanationSpanish: "Present Perfect para experiencias (sin tiempo específico).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "a2-new-28",
    type: "multiple-choice",
    question: "She ___ never ___ sushi.",
    options: ["has / eaten", "have / eaten", "has / ate", "have / ate"],
    correctAnswer: "has / eaten",
    explanation: "'She' uses 'has' + past participle.",
    explanationSpanish: "'She' usa 'has' + participio pasado.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "a2-new-29",
    type: "multiple-choice",
    question: "I've ___ finished my homework!",
    options: ["yet", "already", "ever", "never"],
    correctAnswer: "already",
    explanation: "'Already' in positive sentences means 'sooner than expected'.",
    explanationSpanish: "'Already' en oraciones afirmativas significa 'antes de lo esperado'.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "a2-new-30",
    type: "multiple-choice",
    question: "Have you ___ been to Japan?",
    options: ["yet", "already", "ever", "never"],
    correctAnswer: "ever",
    explanation: "'Ever' in questions means 'at any time in your life'.",
    explanationSpanish: "'Ever' en preguntas significa 'alguna vez en tu vida'.",
    category: "present-perfect",
    difficulty: "medium"
  },
  // Adverbs
  {
    id: "a2-new-31",
    type: "multiple-choice",
    question: "She speaks English ___.",
    options: ["good", "well", "better", "best"],
    correctAnswer: "well",
    explanation: "'Well' is the adverb form of 'good'.",
    explanationSpanish: "'Well' es la forma adverbial de 'good'.",
    category: "adverbs",
    difficulty: "medium"
  },
  {
    id: "a2-new-32",
    type: "multiple-choice",
    question: "He drives very ___.",
    options: ["careful", "carefully", "more careful", "carefuler"],
    correctAnswer: "carefully",
    explanation: "Adverbs modify verbs - add -ly to adjectives.",
    explanationSpanish: "Los adverbios modifican verbos - añade -ly a los adjetivos.",
    category: "adverbs",
    difficulty: "medium"
  },
  // Imperatives
  {
    id: "a2-new-33",
    type: "multiple-choice",
    question: "___ quiet, please!",
    options: ["Be", "Is", "Are", "Being"],
    correctAnswer: "Be",
    explanation: "Imperatives use the base form of the verb.",
    explanationSpanish: "Los imperativos usan la forma base del verbo.",
    category: "imperatives",
    difficulty: "easy"
  },
  {
    id: "a2-new-34",
    type: "multiple-choice",
    question: "___ touch that! It's hot.",
    options: ["No", "Not", "Don't", "Doesn't"],
    correctAnswer: "Don't",
    explanation: "Negative imperatives: Don't + base verb.",
    explanationSpanish: "Imperativos negativos: Don't + verbo base.",
    category: "imperatives",
    difficulty: "easy"
  },
  // Object Pronouns
  {
    id: "a2-new-35",
    type: "multiple-choice",
    question: "Can you help ___? (I)",
    options: ["I", "my", "me", "mine"],
    correctAnswer: "me",
    explanation: "'Me' is the object pronoun for 'I'.",
    explanationSpanish: "'Me' es el pronombre objeto de 'I'.",
    category: "pronouns",
    difficulty: "easy"
  },
];

// ==================== B1 ADDITIONAL EXERCISES (35 new) ====================
export const b1NewExercises: GrammarExercise[] = [
  // Present Perfect Continuous
  {
    id: "b1-new-1",
    type: "multiple-choice",
    question: "I ___ for three hours. I'm exhausted!",
    options: ["am studying", "have been studying", "studied", "study"],
    correctAnswer: "have been studying",
    explanation: "Present Perfect Continuous for duration up to now.",
    explanationSpanish: "Present Perfect Continuous para duración hasta ahora.",
    category: "present-perfect-continuous",
    difficulty: "medium"
  },
  {
    id: "b1-new-2",
    type: "multiple-choice",
    question: "She ___ all day. That's why she's tired.",
    options: ["is working", "has been working", "worked", "works"],
    correctAnswer: "has been working",
    explanation: "'Has been + -ing' shows ongoing action with present result.",
    explanationSpanish: "'Has been + -ing' muestra acción continua con resultado presente.",
    category: "present-perfect-continuous",
    difficulty: "medium"
  },
  {
    id: "b1-new-3",
    type: "multiple-choice",
    question: "How long ___ you ___ here?",
    options: ["have / waiting", "have / been waiting", "are / waiting", "do / wait"],
    correctAnswer: "have / been waiting",
    explanation: "'How long' + Present Perfect Continuous for duration.",
    explanationSpanish: "'How long' + Present Perfect Continuous para duración.",
    category: "present-perfect-continuous",
    difficulty: "medium"
  },
  // Used to
  {
    id: "b1-new-4",
    type: "multiple-choice",
    question: "I ___ live in London, but now I live in Paris.",
    options: ["use to", "used to", "am used to", "was used to"],
    correctAnswer: "used to",
    explanation: "'Used to' for past habits/states that no longer exist.",
    explanationSpanish: "'Used to' para hábitos/estados pasados que ya no existen.",
    category: "used-to",
    difficulty: "medium"
  },
  {
    id: "b1-new-5",
    type: "multiple-choice",
    question: "Did you ___ play tennis when you were young?",
    options: ["use to", "used to", "using to", "uses to"],
    correctAnswer: "use to",
    explanation: "In questions with 'did', use 'use to' (no -d).",
    explanationSpanish: "En preguntas con 'did', usa 'use to' (sin -d).",
    category: "used-to",
    difficulty: "medium"
  },
  // Second Conditional
  {
    id: "b1-new-6",
    type: "multiple-choice",
    question: "If I ___ rich, I would travel the world.",
    options: ["am", "was/were", "will be", "would be"],
    correctAnswer: "was/were",
    explanation: "Second conditional: If + past simple, would + base verb.",
    explanationSpanish: "Segundo condicional: If + pasado simple, would + verbo base.",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "b1-new-7",
    type: "multiple-choice",
    question: "What ___ you do if you won the lottery?",
    options: ["will", "would", "did", "do"],
    correctAnswer: "would",
    explanation: "Second conditional for hypothetical situations.",
    explanationSpanish: "Segundo condicional para situaciones hipotéticas.",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "b1-new-8",
    type: "multiple-choice",
    question: "If she ___ harder, she would pass the exam.",
    options: ["studies", "studied", "will study", "would study"],
    correctAnswer: "studied",
    explanation: "If-clause uses past simple in second conditional.",
    explanationSpanish: "La cláusula if usa pasado simple en segundo condicional.",
    category: "conditionals",
    difficulty: "medium"
  },
  // Passive Voice
  {
    id: "b1-new-9",
    type: "multiple-choice",
    question: "English ___ all over the world.",
    options: ["speaks", "is spoken", "spoke", "speaking"],
    correctAnswer: "is spoken",
    explanation: "Passive voice: is/are + past participle.",
    explanationSpanish: "Voz pasiva: is/are + participio pasado.",
    category: "passive",
    difficulty: "medium"
  },
  {
    id: "b1-new-10",
    type: "multiple-choice",
    question: "The Mona Lisa ___ by Leonardo da Vinci.",
    options: ["painted", "was painted", "is painted", "painting"],
    correctAnswer: "was painted",
    explanation: "Past passive: was/were + past participle.",
    explanationSpanish: "Pasivo pasado: was/were + participio pasado.",
    category: "passive",
    difficulty: "medium"
  },
  {
    id: "b1-new-11",
    type: "multiple-choice",
    question: "The report ___ by Friday.",
    options: ["will finish", "will be finished", "finishes", "is finishing"],
    correctAnswer: "will be finished",
    explanation: "Future passive: will be + past participle.",
    explanationSpanish: "Pasivo futuro: will be + participio pasado.",
    category: "passive",
    difficulty: "medium"
  },
  // Reported Speech
  {
    id: "b1-new-12",
    type: "multiple-choice",
    question: "She said she ___ tired.",
    options: ["is", "was", "will be", "has been"],
    correctAnswer: "was",
    explanation: "Reported speech: 'is' becomes 'was'.",
    explanationSpanish: "Estilo indirecto: 'is' se convierte en 'was'.",
    category: "reported-speech",
    difficulty: "medium"
  },
  {
    id: "b1-new-13",
    type: "multiple-choice",
    question: "He told me he ___ the book.",
    options: ["reads", "read", "had read", "was reading"],
    correctAnswer: "had read",
    explanation: "Reported speech: past simple becomes past perfect.",
    explanationSpanish: "Estilo indirecto: pasado simple se convierte en pasado perfecto.",
    category: "reported-speech",
    difficulty: "hard"
  },
  {
    id: "b1-new-14",
    type: "multiple-choice",
    question: "They asked me where I ___.",
    options: ["live", "lived", "living", "am living"],
    correctAnswer: "lived",
    explanation: "Reported questions: 'live' becomes 'lived'.",
    explanationSpanish: "Preguntas indirectas: 'live' se convierte en 'lived'.",
    category: "reported-speech",
    difficulty: "medium"
  },
  // Relative Clauses
  {
    id: "b1-new-15",
    type: "multiple-choice",
    question: "The man ___ lives next door is a doctor.",
    options: ["who", "which", "where", "whose"],
    correctAnswer: "who",
    explanation: "'Who' for people in relative clauses.",
    explanationSpanish: "'Who' para personas en cláusulas relativas.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-new-16",
    type: "multiple-choice",
    question: "The book ___ you gave me is excellent.",
    options: ["who", "which", "where", "whose"],
    correctAnswer: "which",
    explanation: "'Which' for things in relative clauses.",
    explanationSpanish: "'Which' para cosas en cláusulas relativas.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-new-17",
    type: "multiple-choice",
    question: "That's the woman ___ car was stolen.",
    options: ["who", "which", "where", "whose"],
    correctAnswer: "whose",
    explanation: "'Whose' shows possession in relative clauses.",
    explanationSpanish: "'Whose' muestra posesión en cláusulas relativas.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  // Gerunds and Infinitives
  {
    id: "b1-new-18",
    type: "multiple-choice",
    question: "I enjoy ___ music.",
    options: ["listen", "to listen", "listening", "listened"],
    correctAnswer: "listening",
    explanation: "'Enjoy' is followed by gerund (-ing).",
    explanationSpanish: "'Enjoy' va seguido de gerundio (-ing).",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-new-19",
    type: "multiple-choice",
    question: "She decided ___ a new car.",
    options: ["buy", "to buy", "buying", "bought"],
    correctAnswer: "to buy",
    explanation: "'Decide' is followed by infinitive (to + verb).",
    explanationSpanish: "'Decide' va seguido de infinitivo (to + verbo).",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-new-20",
    type: "multiple-choice",
    question: "I can't stand ___ in queues.",
    options: ["wait", "to wait", "waiting", "waited"],
    correctAnswer: "waiting",
    explanation: "'Can't stand' is followed by gerund.",
    explanationSpanish: "'Can't stand' va seguido de gerundio.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  // Phrasal Verbs
  {
    id: "b1-new-21",
    type: "multiple-choice",
    question: "Please turn ___ the music. It's too loud.",
    options: ["up", "down", "on", "off"],
    correctAnswer: "down",
    explanation: "'Turn down' = reduce volume.",
    explanationSpanish: "'Turn down' = bajar el volumen.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-new-22",
    type: "multiple-choice",
    question: "I'm looking ___ my keys. Have you seen them?",
    options: ["for", "after", "at", "up"],
    correctAnswer: "for",
    explanation: "'Look for' = search/try to find.",
    explanationSpanish: "'Look for' = buscar.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-new-23",
    type: "multiple-choice",
    question: "Can you pick ___ some milk on your way home?",
    options: ["up", "down", "out", "in"],
    correctAnswer: "up",
    explanation: "'Pick up' = collect/buy something.",
    explanationSpanish: "'Pick up' = recoger/comprar algo.",
    category: "phrasal-verbs",
    difficulty: "medium"
  },
  // Too/Enough
  {
    id: "b1-new-24",
    type: "multiple-choice",
    question: "This coffee is ___ hot to drink.",
    options: ["too", "enough", "very", "so"],
    correctAnswer: "too",
    explanation: "'Too + adjective' = more than necessary (negative).",
    explanationSpanish: "'Too + adjetivo' = más de lo necesario (negativo).",
    category: "too-enough",
    difficulty: "medium"
  },
  {
    id: "b1-new-25",
    type: "multiple-choice",
    question: "She's not old ___ to drive.",
    options: ["too", "enough", "very", "so"],
    correctAnswer: "enough",
    explanation: "'Adjective + enough' = sufficiently.",
    explanationSpanish: "'Adjetivo + enough' = suficientemente.",
    category: "too-enough",
    difficulty: "medium"
  },
  // So/Such
  {
    id: "b1-new-26",
    type: "multiple-choice",
    question: "It was ___ a beautiful day that we went to the beach.",
    options: ["so", "such", "too", "very"],
    correctAnswer: "such",
    explanation: "'Such + a/an + adjective + noun'.",
    explanationSpanish: "'Such + a/an + adjetivo + sustantivo'.",
    category: "so-such",
    difficulty: "medium"
  },
  {
    id: "b1-new-27",
    type: "multiple-choice",
    question: "The movie was ___ boring that I fell asleep.",
    options: ["so", "such", "too", "very"],
    correctAnswer: "so",
    explanation: "'So + adjective + that...'.",
    explanationSpanish: "'So + adjetivo + that...'.",
    category: "so-such",
    difficulty: "medium"
  },
  // Modals of Deduction
  {
    id: "b1-new-28",
    type: "multiple-choice",
    question: "She ___ be at home. All the lights are off.",
    options: ["must", "can't", "might", "should"],
    correctAnswer: "can't",
    explanation: "'Can't' for logical deduction (negative certainty).",
    explanationSpanish: "'Can't' para deducción lógica (certeza negativa).",
    category: "modals-deduction",
    difficulty: "medium"
  },
  {
    id: "b1-new-29",
    type: "multiple-choice",
    question: "He ___ be tired. He's been working all day.",
    options: ["must", "can't", "shouldn't", "wouldn't"],
    correctAnswer: "must",
    explanation: "'Must' for logical deduction (positive certainty).",
    explanationSpanish: "'Must' para deducción lógica (certeza positiva).",
    category: "modals-deduction",
    difficulty: "medium"
  },
  {
    id: "b1-new-30",
    type: "multiple-choice",
    question: "She ___ be at the office. I'm not sure.",
    options: ["must", "can't", "might", "will"],
    correctAnswer: "might",
    explanation: "'Might' for possibility (not certain).",
    explanationSpanish: "'Might' para posibilidad (no certeza).",
    category: "modals-deduction",
    difficulty: "medium"
  },
  // Past Perfect
  {
    id: "b1-new-31",
    type: "multiple-choice",
    question: "When I arrived, the movie ___ already ___.",
    options: ["has / started", "had / started", "was / starting", "is / started"],
    correctAnswer: "had / started",
    explanation: "Past Perfect for actions before another past action.",
    explanationSpanish: "Pasado Perfecto para acciones antes de otra acción pasada.",
    category: "past-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-new-32",
    type: "multiple-choice",
    question: "She told me she ___ never ___ sushi before.",
    options: ["has / tried", "had / tried", "was / trying", "did / try"],
    correctAnswer: "had / tried",
    explanation: "Past Perfect in reported speech for 'before that moment'.",
    explanationSpanish: "Pasado Perfecto en estilo indirecto para 'antes de ese momento'.",
    category: "past-perfect",
    difficulty: "hard"
  },
  // Wish
  {
    id: "b1-new-33",
    type: "multiple-choice",
    question: "I wish I ___ more money.",
    options: ["have", "had", "will have", "having"],
    correctAnswer: "had",
    explanation: "'Wish + past simple' for present unreal situations.",
    explanationSpanish: "'Wish + pasado simple' para situaciones irreales presentes.",
    category: "wish",
    difficulty: "medium"
  },
  {
    id: "b1-new-34",
    type: "multiple-choice",
    question: "She wishes she ___ taller.",
    options: ["is", "was/were", "will be", "being"],
    correctAnswer: "was/were",
    explanation: "'Wish + was/were' for unreal present states.",
    explanationSpanish: "'Wish + was/were' para estados presentes irreales.",
    category: "wish",
    difficulty: "medium"
  },
  {
    id: "b1-new-35",
    type: "multiple-choice",
    question: "I wish you ___ making that noise!",
    options: ["stop", "stopped", "would stop", "will stop"],
    correctAnswer: "would stop",
    explanation: "'Wish + would' for things you want to change.",
    explanationSpanish: "'Wish + would' para cosas que quieres cambiar.",
    category: "wish",
    difficulty: "hard"
  },
];

// ==================== B2 ADDITIONAL EXERCISES (35 new) ====================
export const b2NewExercises: GrammarExercise[] = [
  // Third Conditional
  {
    id: "b2-new-1",
    type: "multiple-choice",
    question: "If I ___ the answer, I would have told you.",
    options: ["knew", "had known", "know", "would know"],
    correctAnswer: "had known",
    explanation: "Third conditional: If + past perfect, would have + past participle.",
    explanationSpanish: "Tercer condicional: If + pasado perfecto, would have + participio pasado.",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-new-2",
    type: "multiple-choice",
    question: "She ___ passed the exam if she had studied harder.",
    options: ["would", "would have", "will have", "had"],
    correctAnswer: "would have",
    explanation: "Third conditional result clause: would have + past participle.",
    explanationSpanish: "Cláusula de resultado del tercer condicional: would have + participio pasado.",
    category: "conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-new-3",
    type: "multiple-choice",
    question: "If they ___ earlier, they wouldn't have missed the train.",
    options: ["leave", "left", "had left", "would leave"],
    correctAnswer: "had left",
    explanation: "Third conditional if-clause uses past perfect.",
    explanationSpanish: "La cláusula if del tercer condicional usa pasado perfecto.",
    category: "conditionals",
    difficulty: "hard"
  },
  // Mixed Conditionals
  {
    id: "b2-new-4",
    type: "multiple-choice",
    question: "If I ___ French, I would have applied for that job.",
    options: ["speak", "spoke", "had spoken", "would speak"],
    correctAnswer: "spoke",
    explanation: "Mixed conditional: If + past simple (present unreal), would have + pp (past result).",
    explanationSpanish: "Condicional mixto: If + pasado simple (irreal presente), would have + pp (resultado pasado).",
    category: "mixed-conditionals",
    difficulty: "hard"
  },
  {
    id: "b2-new-5",
    type: "multiple-choice",
    question: "If she had taken that job, she ___ in London now.",
    options: ["will be", "would be", "is", "had been"],
    correctAnswer: "would be",
    explanation: "Mixed conditional: past condition → present result.",
    explanationSpanish: "Condicional mixto: condición pasada → resultado presente.",
    category: "mixed-conditionals",
    difficulty: "hard"
  },
  // Future Perfect
  {
    id: "b2-new-6",
    type: "multiple-choice",
    question: "By next year, I ___ here for ten years.",
    options: ["will work", "will have worked", "am working", "have worked"],
    correctAnswer: "will have worked",
    explanation: "Future Perfect: will have + past participle for completion by a future time.",
    explanationSpanish: "Futuro Perfecto: will have + participio pasado para completar antes de un tiempo futuro.",
    category: "future-perfect",
    difficulty: "hard"
  },
  {
    id: "b2-new-7",
    type: "multiple-choice",
    question: "They ___ the project by Friday.",
    options: ["will finish", "will have finished", "finish", "are finishing"],
    correctAnswer: "will have finished",
    explanation: "'By + future time' signals Future Perfect.",
    explanationSpanish: "'By + tiempo futuro' señala Futuro Perfecto.",
    category: "future-perfect",
    difficulty: "hard"
  },
  // Advanced Passive
  {
    id: "b2-new-8",
    type: "multiple-choice",
    question: "The new building ___ by December.",
    options: ["is completed", "will be completed", "was completed", "completes"],
    correctAnswer: "will be completed",
    explanation: "Future passive: will be + past participle.",
    explanationSpanish: "Pasivo futuro: will be + participio pasado.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-new-9",
    type: "multiple-choice",
    question: "The report ___ by the time you arrive.",
    options: ["will be finished", "will have been finished", "is finished", "was finished"],
    correctAnswer: "will have been finished",
    explanation: "Future Perfect Passive: will have been + past participle.",
    explanationSpanish: "Pasivo Futuro Perfecto: will have been + participio pasado.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-new-10",
    type: "multiple-choice",
    question: "The house is believed ___ haunted.",
    options: ["be", "to be", "being", "been"],
    correctAnswer: "to be",
    explanation: "Passive with reporting verbs: is believed + to be.",
    explanationSpanish: "Pasivo con verbos de reporte: is believed + to be.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  // Modal Perfects
  {
    id: "b2-new-11",
    type: "multiple-choice",
    question: "You ___ the lights. They're still on.",
    options: ["must have forgotten", "should have forgotten", "can't have forgotten", "might forgotten"],
    correctAnswer: "must have forgotten",
    explanation: "'Must have' for logical deduction about the past.",
    explanationSpanish: "'Must have' para deducción lógica sobre el pasado.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "b2-new-12",
    type: "multiple-choice",
    question: "She ___ the email. She says she never got it.",
    options: ["might not have received", "must have received", "should have received", "would have received"],
    correctAnswer: "might not have received",
    explanation: "'Might not have' for past possibility (negative).",
    explanationSpanish: "'Might not have' para posibilidad pasada (negativa).",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "b2-new-13",
    type: "multiple-choice",
    question: "You ___ told me earlier! Now it's too late.",
    options: ["must have", "should have", "could have", "might have"],
    correctAnswer: "should have",
    explanation: "'Should have' for past criticism/regret.",
    explanationSpanish: "'Should have' para crítica/arrepentimiento pasado.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  // Inversion
  {
    id: "b2-new-14",
    type: "multiple-choice",
    question: "Not only ___ late, but he also forgot the documents.",
    options: ["he was", "was he", "he is", "is he"],
    correctAnswer: "was he",
    explanation: "'Not only' at start requires inversion (was he).",
    explanationSpanish: "'Not only' al principio requiere inversión (was he).",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "b2-new-15",
    type: "multiple-choice",
    question: "Hardly ___ when the phone rang.",
    options: ["I had arrived", "had I arrived", "I arrived", "did I arrive"],
    correctAnswer: "had I arrived",
    explanation: "'Hardly' at start requires inversion with past perfect.",
    explanationSpanish: "'Hardly' al principio requiere inversión con pasado perfecto.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "b2-new-16",
    type: "multiple-choice",
    question: "Never ___ such a beautiful sunset.",
    options: ["I have seen", "have I seen", "I saw", "did I see"],
    correctAnswer: "have I seen",
    explanation: "'Never' at start requires inversion.",
    explanationSpanish: "'Never' al principio requiere inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  // Cleft Sentences
  {
    id: "b2-new-17",
    type: "multiple-choice",
    question: "It ___ John who broke the window.",
    options: ["is", "was", "has", "all can work"],
    correctAnswer: "was",
    explanation: "Cleft sentence: It + was + focus + who/that.",
    explanationSpanish: "Oración hendida: It + was + foco + who/that.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  {
    id: "b2-new-18",
    type: "multiple-choice",
    question: "What I really need ___ a vacation.",
    options: ["is", "are", "was", "were"],
    correctAnswer: "is",
    explanation: "Pseudo-cleft: What + clause + is + complement.",
    explanationSpanish: "Pseudo-hendida: What + cláusula + is + complemento.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  // Participle Clauses
  {
    id: "b2-new-19",
    type: "multiple-choice",
    question: "___ the letter, she started to cry.",
    options: ["Read", "Reading", "Having read", "To read"],
    correctAnswer: "Having read",
    explanation: "'Having + past participle' for action completed before main action.",
    explanationSpanish: "'Having + participio pasado' para acción completada antes de la acción principal.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  {
    id: "b2-new-20",
    type: "multiple-choice",
    question: "___ in the garden, I found an old coin.",
    options: ["Work", "Working", "Worked", "To work"],
    correctAnswer: "Working",
    explanation: "Present participle clause for simultaneous actions.",
    explanationSpanish: "Cláusula de participio presente para acciones simultáneas.",
    category: "participle-clauses",
    difficulty: "hard"
  },
  // Advanced Reported Speech
  {
    id: "b2-new-21",
    type: "multiple-choice",
    question: "She ___ having taken the money.",
    options: ["denied", "refused", "rejected", "declined"],
    correctAnswer: "denied",
    explanation: "'Deny + -ing' for reported negation of an action.",
    explanationSpanish: "'Deny + -ing' para negación reportada de una acción.",
    category: "reported-speech-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-new-22",
    type: "multiple-choice",
    question: "He ___ me not to tell anyone.",
    options: ["said", "told", "warned", "all can work"],
    correctAnswer: "warned",
    explanation: "'Warn + object + not to' for cautionary advice.",
    explanationSpanish: "'Warn + objeto + not to' para consejo cauteloso.",
    category: "reported-speech-advanced",
    difficulty: "hard"
  },
  // Subjunctive
  {
    id: "b2-new-23",
    type: "multiple-choice",
    question: "I suggest that he ___ a lawyer.",
    options: ["sees", "see", "saw", "seeing"],
    correctAnswer: "see",
    explanation: "Mandative subjunctive after 'suggest': base form.",
    explanationSpanish: "Subjuntivo mandativo después de 'suggest': forma base.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "b2-new-24",
    type: "multiple-choice",
    question: "It is essential that she ___ on time.",
    options: ["arrives", "arrive", "arrived", "arriving"],
    correctAnswer: "arrive",
    explanation: "'It is essential that' + subjunctive (base form).",
    explanationSpanish: "'It is essential that' + subjuntivo (forma base).",
    category: "subjunctive",
    difficulty: "hard"
  },
  // Advanced Phrasal Verbs
  {
    id: "b2-new-25",
    type: "multiple-choice",
    question: "I came ___ an interesting article while researching.",
    options: ["up with", "across", "down with", "up against"],
    correctAnswer: "across",
    explanation: "'Come across' = find by chance.",
    explanationSpanish: "'Come across' = encontrar por casualidad.",
    category: "phrasal-verbs-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-new-26",
    type: "multiple-choice",
    question: "The company went ___ business last year.",
    options: ["into", "out of", "through", "over"],
    correctAnswer: "out of",
    explanation: "'Go out of business' = stop operating.",
    explanationSpanish: "'Go out of business' = dejar de operar.",
    category: "phrasal-verbs-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-new-27",
    type: "multiple-choice",
    question: "I can't put ___ with this noise anymore!",
    options: ["on", "off", "up", "down"],
    correctAnswer: "up",
    explanation: "'Put up with' = tolerate.",
    explanationSpanish: "'Put up with' = tolerar.",
    category: "phrasal-verbs-advanced",
    difficulty: "hard"
  },
  // Wish + Past Perfect
  {
    id: "b2-new-28",
    type: "multiple-choice",
    question: "I wish I ___ studied harder for the exam.",
    options: ["have", "had", "would have", "was"],
    correctAnswer: "had",
    explanation: "'Wish + past perfect' for past regrets.",
    explanationSpanish: "'Wish + pasado perfecto' para arrepentimientos pasados.",
    category: "wish-regret",
    difficulty: "hard"
  },
  {
    id: "b2-new-29",
    type: "multiple-choice",
    question: "If only I ___ listened to your advice!",
    options: ["have", "had", "would have", "was"],
    correctAnswer: "had",
    explanation: "'If only + past perfect' = strong regret.",
    explanationSpanish: "'If only + pasado perfecto' = arrepentimiento fuerte.",
    category: "wish-regret",
    difficulty: "hard"
  },
  // Causative
  {
    id: "b2-new-30",
    type: "multiple-choice",
    question: "I had my hair ___ yesterday.",
    options: ["cut", "cutting", "to cut", "cuts"],
    correctAnswer: "cut",
    explanation: "Causative 'have something done': have + object + past participle.",
    explanationSpanish: "Causativo 'have something done': have + objeto + participio pasado.",
    category: "causative",
    difficulty: "hard"
  },
  {
    id: "b2-new-31",
    type: "multiple-choice",
    question: "She got her car ___ at the garage.",
    options: ["repair", "repaired", "repairing", "to repair"],
    correctAnswer: "repaired",
    explanation: "'Get something done' = have someone do something for you.",
    explanationSpanish: "'Get something done' = hacer que alguien haga algo por ti.",
    category: "causative",
    difficulty: "hard"
  },
  // Emphasis structures
  {
    id: "b2-new-32",
    type: "multiple-choice",
    question: "I ___ try to call you, but your phone was off.",
    options: ["do", "did", "was", "have"],
    correctAnswer: "did",
    explanation: "'Did + base verb' for emphasis in past tense.",
    explanationSpanish: "'Did + verbo base' para énfasis en tiempo pasado.",
    category: "emphasis",
    difficulty: "hard"
  },
  {
    id: "b2-new-33",
    type: "multiple-choice",
    question: "What I said ___ that we need more time.",
    options: ["is", "was", "were", "are"],
    correctAnswer: "was",
    explanation: "Pseudo-cleft for emphasis: What + clause + was + complement.",
    explanationSpanish: "Pseudo-hendida para énfasis: What + cláusula + was + complemento.",
    category: "emphasis",
    difficulty: "hard"
  },
  // Complex sentences
  {
    id: "b2-new-34",
    type: "multiple-choice",
    question: "___ difficult the test was, she passed with flying colors.",
    options: ["However", "Whatever", "Despite", "Although"],
    correctAnswer: "However",
    explanation: "'However + adjective' = no matter how.",
    explanationSpanish: "'However + adjetivo' = no importa cuán.",
    category: "connectors-advanced",
    difficulty: "hard"
  },
  {
    id: "b2-new-35",
    type: "multiple-choice",
    question: "___ the weather, we're going hiking.",
    options: ["Despite", "Although", "However", "Whatever"],
    correctAnswer: "Whatever",
    explanation: "'Whatever + noun' = no matter what.",
    explanationSpanish: "'Whatever + sustantivo' = sin importar qué.",
    category: "connectors-advanced",
    difficulty: "hard"
  },
];

// ==================== C1 ADDITIONAL EXERCISES (35 new) ====================
export const c1NewExercises: GrammarExercise[] = [
  // Advanced Inversions
  {
    id: "c1-new-1",
    type: "multiple-choice",
    question: "Only when she arrived ___ the true extent of the damage.",
    options: ["she saw", "did she see", "she did see", "saw she"],
    correctAnswer: "did she see",
    explanation: "'Only when' + past event requires inversion in main clause.",
    explanationSpanish: "'Only when' + evento pasado requiere inversión en cláusula principal.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-new-2",
    type: "multiple-choice",
    question: "Little ___ he know what awaited him.",
    options: ["do", "did", "does", "has"],
    correctAnswer: "did",
    explanation: "'Little' at start + past context requires 'did' + subject.",
    explanationSpanish: "'Little' al principio + contexto pasado requiere 'did' + sujeto.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-new-3",
    type: "multiple-choice",
    question: "No sooner ___ arrived than the meeting started.",
    options: ["I had", "had I", "I have", "have I"],
    correctAnswer: "had I",
    explanation: "'No sooner' + inversion with past perfect.",
    explanationSpanish: "'No sooner' + inversión con pasado perfecto.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c1-new-4",
    type: "multiple-choice",
    question: "Rarely ___ such incompetence in a professional setting.",
    options: ["I have witnessed", "have I witnessed", "I witnessed", "did I witnessed"],
    correctAnswer: "have I witnessed",
    explanation: "'Rarely' at start requires inversion with present perfect.",
    explanationSpanish: "'Rarely' al principio requiere inversión con presente perfecto.",
    category: "inversions",
    difficulty: "hard"
  },
  // Subjunctive Advanced
  {
    id: "c1-new-5",
    type: "multiple-choice",
    question: "The committee recommended that the proposal ___ rejected.",
    options: ["is", "be", "was", "should"],
    correctAnswer: "be",
    explanation: "Mandative subjunctive: 'recommend that' + base form.",
    explanationSpanish: "Subjuntivo mandativo: 'recommend that' + forma base.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-new-6",
    type: "multiple-choice",
    question: "Were I to accept the offer, I ___ relocate to Tokyo.",
    options: ["will have to", "would have to", "had to", "have to"],
    correctAnswer: "would have to",
    explanation: "'Were I to' = formal hypothetical conditional.",
    explanationSpanish: "'Were I to' = condicional hipotético formal.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c1-new-7",
    type: "multiple-choice",
    question: "Had it not been for your help, we ___ the project on time.",
    options: ["won't finish", "wouldn't have finished", "hadn't finished", "didn't finish"],
    correctAnswer: "wouldn't have finished",
    explanation: "'Had it not been for' = inverted third conditional.",
    explanationSpanish: "'Had it not been for' = tercer condicional invertido.",
    category: "subjunctive",
    difficulty: "hard"
  },
  // Complex Passive Structures
  {
    id: "c1-new-8",
    type: "multiple-choice",
    question: "The politician is rumored ___ in the scandal.",
    options: ["involved", "to be involved", "being involved", "involve"],
    correctAnswer: "to be involved",
    explanation: "Passive report structure: is rumored + to be + adjective/pp.",
    explanationSpanish: "Estructura de reporte pasivo: is rumored + to be + adjetivo/pp.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  {
    id: "c1-new-9",
    type: "multiple-choice",
    question: "The evidence is thought ___ destroyed before the trial.",
    options: ["to be", "to have been", "being", "been"],
    correctAnswer: "to have been",
    explanation: "Passive report about past: is thought + to have been + pp.",
    explanationSpanish: "Reporte pasivo sobre pasado: is thought + to have been + pp.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  {
    id: "c1-new-10",
    type: "multiple-choice",
    question: "He is said ___ on several best-selling books.",
    options: ["to work", "to be working", "to have worked", "working"],
    correctAnswer: "to have worked",
    explanation: "Passive report about completed past: is said + to have + pp.",
    explanationSpanish: "Reporte pasivo sobre pasado completado: is said + to have + pp.",
    category: "passive-advanced",
    difficulty: "hard"
  },
  // Advanced Modal Perfects
  {
    id: "c1-new-11",
    type: "multiple-choice",
    question: "He ___ been aware of the situation; his reaction seemed genuine.",
    options: ["can't have", "must have", "should have", "would have"],
    correctAnswer: "can't have",
    explanation: "'Can't have' for logical impossibility in the past.",
    explanationSpanish: "'Can't have' para imposibilidad lógica en el pasado.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "c1-new-12",
    type: "multiple-choice",
    question: "You ___ told me earlier - I would have helped!",
    options: ["must have", "could have", "can have", "shall have"],
    correctAnswer: "could have",
    explanation: "'Could have' for past possibility/criticism.",
    explanationSpanish: "'Could have' para posibilidad/crítica pasada.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  {
    id: "c1-new-13",
    type: "multiple-choice",
    question: "She ___ have finished by now; she's very efficient.",
    options: ["need", "ought to", "used to", "dare"],
    correctAnswer: "ought to",
    explanation: "'Ought to have' for expectation about completed action.",
    explanationSpanish: "'Ought to have' para expectativa sobre acción completada.",
    category: "modal-perfects",
    difficulty: "hard"
  },
  // Ellipsis & Substitution
  {
    id: "c1-new-14",
    type: "multiple-choice",
    question: "A: 'Will it rain?' B: 'I hope ___.'",
    options: ["so", "not", "it", "that"],
    correctAnswer: "not",
    explanation: "'Hope not' = hope it won't rain.",
    explanationSpanish: "'Hope not' = espero que no llueva.",
    category: "ellipsis",
    difficulty: "hard"
  },
  {
    id: "c1-new-15",
    type: "multiple-choice",
    question: "She can speak Spanish, and ___ can her brother.",
    options: ["too", "so", "neither", "either"],
    correctAnswer: "so",
    explanation: "'So + auxiliary + subject' for positive agreement.",
    explanationSpanish: "'So + auxiliar + sujeto' para acuerdo positivo.",
    category: "ellipsis",
    difficulty: "hard"
  },
  {
    id: "c1-new-16",
    type: "multiple-choice",
    question: "He hasn't finished yet, and neither ___ I.",
    options: ["has", "have", "do", "am"],
    correctAnswer: "have",
    explanation: "'Neither + auxiliary + I' for negative agreement.",
    explanationSpanish: "'Neither + auxiliar + I' para acuerdo negativo.",
    category: "ellipsis",
    difficulty: "hard"
  },
  // Discourse Markers
  {
    id: "c1-new-17",
    type: "multiple-choice",
    question: "___ speaking, the project was a failure.",
    options: ["Strictly", "Generally", "Broadly", "all work"],
    correctAnswer: "all work",
    explanation: "All adverbs work with 'speaking' for different nuances.",
    explanationSpanish: "Todos los adverbios funcionan con 'speaking' para diferentes matices.",
    category: "discourse-markers",
    difficulty: "hard"
  },
  {
    id: "c1-new-18",
    type: "multiple-choice",
    question: "The plan, ___, was flawed from the start.",
    options: ["admittedly", "reportedly", "allegedly", "all work"],
    correctAnswer: "all work",
    explanation: "Different discourse markers add different perspectives.",
    explanationSpanish: "Diferentes marcadores del discurso añaden diferentes perspectivas.",
    category: "discourse-markers",
    difficulty: "hard"
  },
  // Future in the Past
  {
    id: "c1-new-19",
    type: "multiple-choice",
    question: "She said she ___ call me the next day.",
    options: ["will", "would", "is going to", "was going to"],
    correctAnswer: "would",
    explanation: "'Would' for future in past reported speech.",
    explanationSpanish: "'Would' para futuro en estilo indirecto pasado.",
    category: "future-in-past",
    difficulty: "hard"
  },
  {
    id: "c1-new-20",
    type: "multiple-choice",
    question: "Little did I know that the journey ___ change my life.",
    options: ["will", "would", "is going to", "was going to"],
    correctAnswer: "would",
    explanation: "'Would' for inevitable future viewed from past.",
    explanationSpanish: "'Would' para futuro inevitable visto desde el pasado.",
    category: "future-in-past",
    difficulty: "hard"
  },
  // Complex Relative Clauses
  {
    id: "c1-new-21",
    type: "multiple-choice",
    question: "The reason ___ she left was never explained.",
    options: ["why", "which", "that", "all work"],
    correctAnswer: "all work",
    explanation: "'The reason why/that' or omission are all acceptable.",
    explanationSpanish: "'The reason why/that' o la omisión son aceptables.",
    category: "relative-clauses-advanced",
    difficulty: "hard"
  },
  {
    id: "c1-new-22",
    type: "multiple-choice",
    question: "He criticized her work, ___ upset her greatly.",
    options: ["that", "which", "what", "who"],
    correctAnswer: "which",
    explanation: "'Which' refers to the whole previous clause.",
    explanationSpanish: "'Which' se refiere a toda la cláusula anterior.",
    category: "relative-clauses-advanced",
    difficulty: "hard"
  },
  // Concession & Contrast
  {
    id: "c1-new-23",
    type: "multiple-choice",
    question: "___ hard he tried, he couldn't solve the problem.",
    options: ["However", "Although", "Despite", "Nevertheless"],
    correctAnswer: "However",
    explanation: "'However + adjective/adverb' = no matter how.",
    explanationSpanish: "'However + adjetivo/adverbio' = no importa cuán.",
    category: "concession",
    difficulty: "hard"
  },
  {
    id: "c1-new-24",
    type: "multiple-choice",
    question: "___ being exhausted, she finished the marathon.",
    options: ["Despite", "Although", "However", "Whereas"],
    correctAnswer: "Despite",
    explanation: "'Despite + gerund' for contrast.",
    explanationSpanish: "'Despite + gerundio' para contraste.",
    category: "concession",
    difficulty: "hard"
  },
  {
    id: "c1-new-25",
    type: "multiple-choice",
    question: "___ she was tired, she continued working.",
    options: ["Despite", "Although", "In spite of", "However"],
    correctAnswer: "Although",
    explanation: "'Although + clause' for contrast.",
    explanationSpanish: "'Although + cláusula' para contraste.",
    category: "concession",
    difficulty: "hard"
  },
  // Hedging & Softening
  {
    id: "c1-new-26",
    type: "multiple-choice",
    question: "It ___ appear that we have a problem.",
    options: ["does", "would", "shall", "might"],
    correctAnswer: "would",
    explanation: "'Would appear' for tentative/hedged statement.",
    explanationSpanish: "'Would appear' para declaración tentativa.",
    category: "hedging",
    difficulty: "hard"
  },
  {
    id: "c1-new-27",
    type: "multiple-choice",
    question: "This could ___ be the solution we're looking for.",
    options: ["possibly", "probably", "well", "all work"],
    correctAnswer: "all work",
    explanation: "Different hedging adverbs indicate different degrees of certainty.",
    explanationSpanish: "Diferentes adverbios de atenuación indican diferentes grados de certeza.",
    category: "hedging",
    difficulty: "hard"
  },
  // Formal/Academic Style
  {
    id: "c1-new-28",
    type: "multiple-choice",
    question: "The results ___ that the hypothesis is correct.",
    options: ["suggest", "prove", "show", "all work differently"],
    correctAnswer: "all work differently",
    explanation: "'Suggest' (tentative), 'show' (neutral), 'prove' (strong).",
    explanationSpanish: "'Suggest' (tentativo), 'show' (neutral), 'prove' (fuerte).",
    category: "academic-style",
    difficulty: "hard"
  },
  {
    id: "c1-new-29",
    type: "multiple-choice",
    question: "___ is the case with many theories, this one has limitations.",
    options: ["As", "Like", "Such", "So"],
    correctAnswer: "As",
    explanation: "'As is the case' = formal comparison.",
    explanationSpanish: "'As is the case' = comparación formal.",
    category: "academic-style",
    difficulty: "hard"
  },
  // Perfect Infinitives
  {
    id: "c1-new-30",
    type: "multiple-choice",
    question: "She claims ___ the CEO before.",
    options: ["to meet", "to have met", "meeting", "having met"],
    correctAnswer: "to have met",
    explanation: "'Claim + perfect infinitive' for past claim.",
    explanationSpanish: "'Claim + infinitivo perfecto' para afirmación pasada.",
    category: "perfect-infinitives",
    difficulty: "hard"
  },
  {
    id: "c1-new-31",
    type: "multiple-choice",
    question: "He appears ___ a fortune in the stock market.",
    options: ["to make", "to have made", "making", "made"],
    correctAnswer: "to have made",
    explanation: "'Appear + perfect infinitive' for apparent past action.",
    explanationSpanish: "'Appear + infinitivo perfecto' para acción pasada aparente.",
    category: "perfect-infinitives",
    difficulty: "hard"
  },
  // Complex Prepositions
  {
    id: "c1-new-32",
    type: "multiple-choice",
    question: "___ your concerns, we've decided to proceed.",
    options: ["Notwithstanding", "Despite of", "Irregardless", "Inspite"],
    correctAnswer: "Notwithstanding",
    explanation: "'Notwithstanding' = formal 'despite'.",
    explanationSpanish: "'Notwithstanding' = 'despite' formal.",
    category: "prepositions-advanced",
    difficulty: "hard"
  },
  {
    id: "c1-new-33",
    type: "multiple-choice",
    question: "The project succeeded ___ all expectations.",
    options: ["beyond", "above", "over", "all work"],
    correctAnswer: "all work",
    explanation: "'Beyond/above/over expectations' all express exceeding expectations.",
    explanationSpanish: "'Beyond/above/over expectations' todos expresan superar expectativas.",
    category: "prepositions-advanced",
    difficulty: "hard"
  },
  // Nominal Clauses
  {
    id: "c1-new-34",
    type: "multiple-choice",
    question: "___ he managed to escape remains a mystery.",
    options: ["How", "That", "What", "Why"],
    correctAnswer: "How",
    explanation: "'How' introduces nominal clause as subject.",
    explanationSpanish: "'How' introduce cláusula nominal como sujeto.",
    category: "nominal-clauses",
    difficulty: "hard"
  },
  {
    id: "c1-new-35",
    type: "multiple-choice",
    question: "The fact that he ___ shows his commitment.",
    options: ["resign", "resigned", "resigning", "has resigned"],
    correctAnswer: "resigned",
    explanation: "'The fact that' + past tense for completed action.",
    explanationSpanish: "'The fact that' + tiempo pasado para acción completada.",
    category: "nominal-clauses",
    difficulty: "hard"
  },
];

// ==================== C2 ADDITIONAL EXERCISES (30 new) ====================
export const c2NewExercises: GrammarExercise[] = [
  // Advanced Inversions
  {
    id: "c2-new-1",
    type: "multiple-choice",
    question: "So acute ___ the crisis that emergency measures were implemented.",
    options: ["is", "was", "has been", "had been"],
    correctAnswer: "was",
    explanation: "'So + adjective' at start with past context requires 'was'.",
    explanationSpanish: "'So + adjetivo' al principio con contexto pasado requiere 'was'.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c2-new-2",
    type: "multiple-choice",
    question: "Only by working together ___ we overcome this challenge.",
    options: ["can", "could", "will", "shall"],
    correctAnswer: "can",
    explanation: "'Only by + -ing' + inversion for emphasis.",
    explanationSpanish: "'Only by + -ing' + inversión para énfasis.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c2-new-3",
    type: "multiple-choice",
    question: "Not for one moment ___ I consider giving up.",
    options: ["do", "did", "have", "will"],
    correctAnswer: "did",
    explanation: "'Not for one moment' + past inversion for emphatic negation.",
    explanationSpanish: "'Not for one moment' + inversión pasada para negación enfática.",
    category: "inversions",
    difficulty: "hard"
  },
  // Literary/Archaic Forms
  {
    id: "c2-new-4",
    type: "multiple-choice",
    question: "Be that ___ it may, we must continue.",
    options: ["as", "what", "how", "which"],
    correctAnswer: "as",
    explanation: "'Be that as it may' = formal 'regardless' / 'nevertheless'.",
    explanationSpanish: "'Be that as it may' = 'sin embargo' formal.",
    category: "literary-forms",
    difficulty: "hard"
  },
  {
    id: "c2-new-5",
    type: "multiple-choice",
    question: "___ I to know that things would turn out this way?",
    options: ["Was", "Were", "Am", "Had"],
    correctAnswer: "Was",
    explanation: "'Was I to know' = rhetorical 'How could I know'.",
    explanationSpanish: "'Was I to know' = retórico 'Cómo iba a saber'.",
    category: "literary-forms",
    difficulty: "hard"
  },
  // Complex Modality
  {
    id: "c2-new-6",
    type: "multiple-choice",
    question: "You ___ as well have told him the truth.",
    options: ["may", "might", "could", "all work"],
    correctAnswer: "all work",
    explanation: "'May/might/could as well' = it would be equally good to...",
    explanationSpanish: "'May/might/could as well' = daría igual...",
    category: "modals-advanced",
    difficulty: "hard"
  },
  {
    id: "c2-new-7",
    type: "multiple-choice",
    question: "She ___ hardly have known about the conspiracy.",
    options: ["can", "could", "would", "might"],
    correctAnswer: "could",
    explanation: "'Could hardly have' = very unlikely that she knew.",
    explanationSpanish: "'Could hardly have' = muy improbable que supiera.",
    category: "modals-advanced",
    difficulty: "hard"
  },
  {
    id: "c2-new-8",
    type: "multiple-choice",
    question: "They ___ well be right, for all I know.",
    options: ["may", "can", "must", "should"],
    correctAnswer: "may",
    explanation: "'May well' = quite possibly.",
    explanationSpanish: "'May well' = bastante posiblemente.",
    category: "modals-advanced",
    difficulty: "hard"
  },
  // Subjunctive Mastery
  {
    id: "c2-new-9",
    type: "multiple-choice",
    question: "It is crucial that every member ___ present.",
    options: ["is", "be", "was", "being"],
    correctAnswer: "be",
    explanation: "Mandative subjunctive after 'crucial that'.",
    explanationSpanish: "Subjuntivo mandativo después de 'crucial that'.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c2-new-10",
    type: "multiple-choice",
    question: "___ as it may seem, the theory has merit.",
    options: ["Strange", "Strangely", "However strange", "all work"],
    correctAnswer: "all work",
    explanation: "Various concessive structures work here.",
    explanationSpanish: "Varias estructuras concesivas funcionan aquí.",
    category: "subjunctive",
    difficulty: "hard"
  },
  // Nominalization Mastery
  {
    id: "c2-new-11",
    type: "multiple-choice",
    question: "The ___ of the new regulations was met with resistance.",
    options: ["introduce", "introducing", "introduction", "introduced"],
    correctAnswer: "introduction",
    explanation: "Nominalization: verb 'introduce' → noun 'introduction'.",
    explanationSpanish: "Nominalización: verbo 'introduce' → sustantivo 'introduction'.",
    category: "nominalization",
    difficulty: "hard"
  },
  {
    id: "c2-new-12",
    type: "multiple-choice",
    question: "His ___ of the situation proved invaluable.",
    options: ["analyze", "analysis", "analyzing", "analytical"],
    correctAnswer: "analysis",
    explanation: "Nominalization after possessive: 'His analysis'.",
    explanationSpanish: "Nominalización después de posesivo: 'His analysis'.",
    category: "nominalization",
    difficulty: "hard"
  },
  // Complex Connectors
  {
    id: "c2-new-13",
    type: "multiple-choice",
    question: "___ than announce the verdict, the judge adjourned the court.",
    options: ["Rather", "Other", "Sooner", "Better"],
    correctAnswer: "Rather",
    explanation: "'Rather than + base verb' = instead of.",
    explanationSpanish: "'Rather than + verbo base' = en lugar de.",
    category: "connectors-advanced",
    difficulty: "hard"
  },
  {
    id: "c2-new-14",
    type: "multiple-choice",
    question: "___ that he succeeded, considering the obstacles.",
    options: ["It's remarkable", "Remarkable is", "Remarkably", "What remarkable"],
    correctAnswer: "It's remarkable",
    explanation: "'It's remarkable that' + clause for emphasis.",
    explanationSpanish: "'It's remarkable that' + cláusula para énfasis.",
    category: "connectors-advanced",
    difficulty: "hard"
  },
  // Aspectual Nuances
  {
    id: "c2-new-15",
    type: "multiple-choice",
    question: "I ___ to think you were right after all.",
    options: ["am coming", "have come", "come", "came"],
    correctAnswer: "have come",
    explanation: "'Have come to' = gradually developed the opinion.",
    explanationSpanish: "'Have come to' = gradualmente desarrollé la opinión.",
    category: "aspectual-nuances",
    difficulty: "hard"
  },
  {
    id: "c2-new-16",
    type: "multiple-choice",
    question: "She ___ to be quite charming once you get to know her.",
    options: ["proves", "turns out", "results", "all work differently"],
    correctAnswer: "turns out",
    explanation: "'Turns out to be' = discovered/revealed to be.",
    explanationSpanish: "'Turns out to be' = resulta ser.",
    category: "aspectual-nuances",
    difficulty: "hard"
  },
  // Semantic Subtleties
  {
    id: "c2-new-17",
    type: "multiple-choice",
    question: "The evidence ___ to suggest foul play.",
    options: ["seems", "appears", "tends", "all work with different certainty"],
    correctAnswer: "all work with different certainty",
    explanation: "'Seems/appears' (evidence-based), 'tends' (general pattern).",
    explanationSpanish: "'Seems/appears' (basado en evidencia), 'tends' (patrón general).",
    category: "semantic-subtleties",
    difficulty: "hard"
  },
  {
    id: "c2-new-18",
    type: "multiple-choice",
    question: "I ___ admit that I was wrong.",
    options: ["must", "have to", "am forced to", "all express different attitudes"],
    correctAnswer: "all express different attitudes",
    explanation: "'Must' (internal), 'have to' (external), 'am forced to' (reluctant).",
    explanationSpanish: "'Must' (interno), 'have to' (externo), 'am forced to' (reluctante).",
    category: "semantic-subtleties",
    difficulty: "hard"
  },
  // Idiomatic Structures
  {
    id: "c2-new-19",
    type: "multiple-choice",
    question: "Come ___ may, we'll face it together.",
    options: ["what", "how", "whatever", "however"],
    correctAnswer: "what",
    explanation: "'Come what may' = no matter what happens.",
    explanationSpanish: "'Come what may' = pase lo que pase.",
    category: "idiomatic-structures",
    difficulty: "hard"
  },
  {
    id: "c2-new-20",
    type: "multiple-choice",
    question: "Try as he ___, he couldn't solve the puzzle.",
    options: ["may", "might", "could", "would"],
    correctAnswer: "might",
    explanation: "'Try as + subject + might' = no matter how hard one tries.",
    explanationSpanish: "'Try as + sujeto + might' = por mucho que intente.",
    category: "idiomatic-structures",
    difficulty: "hard"
  },
  // Reduced Clauses
  {
    id: "c2-new-21",
    type: "multiple-choice",
    question: "___ correctly, the device should work perfectly.",
    options: ["If operated", "If it operated", "Operating", "To operate"],
    correctAnswer: "If operated",
    explanation: "Reduced conditional: 'If (it is) operated' → 'If operated'.",
    explanationSpanish: "Condicional reducido: 'If (it is) operated' → 'If operated'.",
    category: "reduced-clauses",
    difficulty: "hard"
  },
  {
    id: "c2-new-22",
    type: "multiple-choice",
    question: "___ a child, she showed remarkable talent.",
    options: ["When", "While", "Though", "all work"],
    correctAnswer: "all work",
    explanation: "Reduced adverbial clauses: 'When/While/Though (she was) a child'.",
    explanationSpanish: "Cláusulas adverbiales reducidas: 'When/While/Though (she was) a child'.",
    category: "reduced-clauses",
    difficulty: "hard"
  },
  // Sophisticated Emphasis
  {
    id: "c2-new-23",
    type: "multiple-choice",
    question: "What he lacks in experience, he ___ up for in enthusiasm.",
    options: ["makes", "makes", "is making", "has made"],
    correctAnswer: "makes",
    explanation: "'Makes up for' in present simple for general truth.",
    explanationSpanish: "'Makes up for' en presente simple para verdad general.",
    category: "emphasis-advanced",
    difficulty: "hard"
  },
  {
    id: "c2-new-24",
    type: "multiple-choice",
    question: "All I ask ___ that you be honest with me.",
    options: ["is", "are", "was", "were"],
    correctAnswer: "is",
    explanation: "'All I ask is' + that-clause with subjunctive 'be'.",
    explanationSpanish: "'All I ask is' + cláusula that con subjuntivo 'be'.",
    category: "emphasis-advanced",
    difficulty: "hard"
  },
  // Pragmatic Structures
  {
    id: "c2-new-25",
    type: "multiple-choice",
    question: "I don't suppose you ___ lend me your car, would you?",
    options: ["can", "could", "would", "might"],
    correctAnswer: "could",
    explanation: "Extremely polite request: 'I don't suppose you could... would you?'",
    explanationSpanish: "Petición extremadamente cortés: 'I don't suppose you could... would you?'",
    category: "pragmatics",
    difficulty: "hard"
  },
  {
    id: "c2-new-26",
    type: "multiple-choice",
    question: "Would it be at all possible for you ___ earlier?",
    options: ["come", "to come", "coming", "came"],
    correctAnswer: "to come",
    explanation: "'Would it be possible + for you + to infinitive' for very polite requests.",
    explanationSpanish: "'Would it be possible + for you + infinitivo' para peticiones muy corteses.",
    category: "pragmatics",
    difficulty: "hard"
  },
  // Formal Register
  {
    id: "c2-new-27",
    type: "multiple-choice",
    question: "Attached herewith ___ the documents you requested.",
    options: ["is", "are", "be", "being"],
    correctAnswer: "are",
    explanation: "Formal business English: 'Attached herewith are...'",
    explanationSpanish: "Inglés de negocios formal: 'Attached herewith are...'",
    category: "formal-register",
    difficulty: "hard"
  },
  {
    id: "c2-new-28",
    type: "multiple-choice",
    question: "I should be grateful if you ___ consider my application.",
    options: ["will", "would", "could", "might"],
    correctAnswer: "would",
    explanation: "Formal request: 'I should be grateful if you would...'",
    explanationSpanish: "Petición formal: 'I should be grateful if you would...'",
    category: "formal-register",
    difficulty: "hard"
  },
  // Advanced Conditionals
  {
    id: "c2-new-29",
    type: "multiple-choice",
    question: "___ you to reconsider, please let me know.",
    options: ["Should", "Were", "Had", "If"],
    correctAnswer: "Should",
    explanation: "'Should you' = formal 'If you should' (inverted).",
    explanationSpanish: "'Should you' = 'If you should' formal (invertido).",
    category: "conditionals-advanced",
    difficulty: "hard"
  },
  {
    id: "c2-new-30",
    type: "multiple-choice",
    question: "But for your timely intervention, the situation ___ escalated.",
    options: ["would have", "had", "will have", "has"],
    correctAnswer: "would have",
    explanation: "'But for' + result clause with 'would have' for past hypothetical.",
    explanationSpanish: "'But for' + cláusula resultado con 'would have' para hipotético pasado.",
    category: "conditionals-advanced",
    difficulty: "hard"
  },
];
