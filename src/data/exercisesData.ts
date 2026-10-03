// Comprehensive exercise database with real, educational content
// This file contains exercises for Grammar, Vocabulary, and general practice

import { CEFRLevel } from "./curriculumData";
import { allA2Exercises } from "./a2Exercises";
import { b1GrammarExercises, b1VocabularyExercises } from "./b1Exercises";
import { 
  b1GrammarExercisesComplete, 
  b1VocabularyExercisesComplete, 
  b1SpeakingExercisesComplete,
  b1ListeningExercisesComplete,
  b1ReadingExercisesComplete,
  b1WritingExercisesComplete,
  b1StrategyExercisesComplete,
  getB1ExercisesCompleteBySkillId
} from "./b1ExercisesComplete";
import { b2GrammarExercises, b2VocabularyExercises } from "./b2Exercises";
import { 
  b2GrammarExercisesComplete, 
  b2VocabularyExercisesComplete, 
  b2SpeakingExercisesComplete,
  b2ListeningExercisesComplete,
  b2ReadingExercisesComplete,
  b2WritingExercisesComplete,
  getB2ExercisesCompleteBySkillId
} from "./b2ExercisesComplete";
import { c1GrammarExercises, c1VocabularyExercises } from "./c1Exercises";
import { c2GrammarExercises, c2VocabularyExercises } from "./c2Exercises";

export interface Exercise {
  id: string;
  type: "multiple-choice" | "fill-blank" | "true-false" | "matching" | "ordering" | "translation" | "image-match";
  question: string;
  questionAudio?: string;
  options: string[];
  correctAnswer: string | string[];
  explanation: string;
  /** @deprecated Spanish explanations are no longer displayed - English-only immersion */
  explanationSpanish?: string;
  hint?: string;
  difficulty: 1 | 2 | 3;
  tags: string[];
  // For image-match exercises
  imageUrl?: string;
  imageOptions?: { word: string; imageUrl: string; }[];
}

export interface ExerciseSet {
  skillId: string;
  level: CEFRLevel;
  category: string;
  exercises: Exercise[];
}

// =====================================================
// A1 GRAMMAR EXERCISES
// =====================================================

export const a1GrammarExercises: Record<string, Exercise[]> = {
  // To Be - Verb exercises
  "a1-gram-1": [
    // Affirmative forms
    {
      id: "a1-g1-1",
      type: "multiple-choice",
      question: "I ___ a student.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "We use 'am' with the pronoun 'I'. I am = I'm",
      explanationSpanish: "Usamos 'am' con el pronombre 'I'. I am = I'm",
      difficulty: 1,
      tags: ["to-be", "affirmative", "first-person"]
    },
    {
      id: "a1-g1-2",
      type: "multiple-choice",
      question: "She ___ from Spain.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "We use 'is' with he, she, it (third person singular).",
      explanationSpanish: "Usamos 'is' con he, she, it (tercera persona singular).",
      difficulty: 1,
      tags: ["to-be", "affirmative", "third-person"]
    },
    {
      id: "a1-g1-3",
      type: "multiple-choice",
      question: "They ___ teachers.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "We use 'are' with they, we, you (plural forms).",
      explanationSpanish: "Usamos 'are' con they, we, you (formas plurales).",
      difficulty: 1,
      tags: ["to-be", "affirmative", "plural"]
    },
    {
      id: "a1-g1-4",
      type: "multiple-choice",
      question: "We ___ happy.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "We use 'are' with 'we'.",
      explanationSpanish: "Usamos 'are' con 'we'.",
      difficulty: 1,
      tags: ["to-be", "affirmative", "first-person-plural"]
    },
    {
      id: "a1-g1-5",
      type: "multiple-choice",
      question: "The cat ___ black.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "We use 'is' with 'it' (the cat = it).",
      explanationSpanish: "Usamos 'is' con 'it' (the cat = it).",
      difficulty: 1,
      tags: ["to-be", "affirmative", "third-person"]
    },
    // Negative forms
    {
      id: "a1-g1-6",
      type: "multiple-choice",
      question: "I ___ not tired. (Complete the sentence)",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "Negative form: I am not = I'm not",
      explanationSpanish: "Forma negativa: I am not = I'm not",
      difficulty: 1,
      tags: ["to-be", "negative", "first-person"]
    },
    {
      id: "a1-g1-7",
      type: "multiple-choice",
      question: "He ___ a doctor. He is a teacher.",
      options: ["isn't", "aren't", "am not", "not is"],
      correctAnswer: "isn't",
      explanation: "Negative contraction: is not = isn't",
      explanationSpanish: "Contracción negativa: is not = isn't",
      difficulty: 1,
      tags: ["to-be", "negative", "contraction"]
    },
    {
      id: "a1-g1-8",
      type: "multiple-choice",
      question: "We ___ at home. We are at school.",
      options: ["isn't", "aren't", "am not", "not are"],
      correctAnswer: "aren't",
      explanation: "Negative contraction: are not = aren't",
      explanationSpanish: "Contracción negativa: are not = aren't",
      difficulty: 1,
      tags: ["to-be", "negative", "contraction"]
    },
    // Questions
    {
      id: "a1-g1-9",
      type: "multiple-choice",
      question: "___ you from Mexico?",
      options: ["Am", "Is", "Are", "Be"],
      correctAnswer: "Are",
      explanation: "Questions with 'to be': Are you...? Is he...? Am I...?",
      explanationSpanish: "Preguntas con 'to be': Are you...? Is he...? Am I...?",
      difficulty: 2,
      tags: ["to-be", "questions"]
    },
    {
      id: "a1-g1-10",
      type: "multiple-choice",
      question: "___ she a nurse?",
      options: ["Am", "Is", "Are", "Be"],
      correctAnswer: "Is",
      explanation: "We use 'Is' to make questions with he/she/it.",
      explanationSpanish: "Usamos 'Is' para hacer preguntas con he/she/it.",
      difficulty: 2,
      tags: ["to-be", "questions", "third-person"]
    },
    {
      id: "a1-g1-11",
      type: "fill-blank",
      question: "Complete: My name ___ John. I ___ 25 years old.",
      options: ["is, am", "am, is", "are, is", "is, are"],
      correctAnswer: "is, am",
      explanation: "'My name' = it (singular) → is. 'I' → am",
      explanationSpanish: "'My name' = it (singular) → is. 'I' → am",
      difficulty: 2,
      tags: ["to-be", "mixed"]
    },
    {
      id: "a1-g1-12",
      type: "true-false",
      question: "'You is happy' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct form: 'You are happy'. We use 'are' with 'you'.",
      explanationSpanish: "Forma correcta: 'You are happy'. Usamos 'are' con 'you'.",
      difficulty: 1,
      tags: ["to-be", "error-correction"]
    },
    {
      id: "a1-g1-13",
      type: "multiple-choice",
      question: "My friends ___ very nice.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "'My friends' is plural, so we use 'are'.",
      explanationSpanish: "'My friends' es plural, así que usamos 'are'.",
      difficulty: 1,
      tags: ["to-be", "plural"]
    },
    {
      id: "a1-g1-14",
      type: "multiple-choice",
      question: "Where ___ the bathroom?",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "'The bathroom' is singular, so we use 'is'.",
      explanationSpanish: "'The bathroom' es singular, así que usamos 'is'.",
      difficulty: 2,
      tags: ["to-be", "questions", "where"]
    },
    {
      id: "a1-g1-15",
      type: "ordering",
      question: "Put the words in order: teacher / is / She / a",
      options: ["She is a teacher.", "Is she a teacher.", "Teacher she is a.", "A teacher is she."],
      correctAnswer: "She is a teacher.",
      explanation: "Standard sentence structure: Subject + Verb + Object",
      explanationSpanish: "Estructura estándar: Sujeto + Verbo + Objeto",
      difficulty: 2,
      tags: ["to-be", "word-order"]
    },
  ],
  
  // Present Simple exercises
  "a1-gram-2": [
    {
      id: "a1-g2-1",
      type: "multiple-choice",
      question: "She ___ to school every day.",
      options: ["go", "goes", "going", "goed"],
      correctAnswer: "goes",
      explanation: "In Present Simple, we add -s or -es to verbs with he/she/it.",
      explanationSpanish: "En Present Simple, añadimos -s o -es a los verbos con he/she/it.",
      difficulty: 1,
      tags: ["present-simple", "third-person", "-s"]
    },
    {
      id: "a1-g2-2",
      type: "multiple-choice",
      question: "I ___ coffee in the morning.",
      options: ["drink", "drinks", "drinking", "drinked"],
      correctAnswer: "drink",
      explanation: "With I/you/we/they, we use the base form of the verb.",
      explanationSpanish: "Con I/you/we/they, usamos la forma base del verbo.",
      difficulty: 1,
      tags: ["present-simple", "first-person"]
    },
    {
      id: "a1-g2-3",
      type: "multiple-choice",
      question: "He ___ his homework after dinner.",
      options: ["do", "does", "doing", "doed"],
      correctAnswer: "does",
      explanation: "'Do' becomes 'does' with he/she/it.",
      explanationSpanish: "'Do' se convierte en 'does' con he/she/it.",
      difficulty: 1,
      tags: ["present-simple", "third-person", "irregular"]
    },
    {
      id: "a1-g2-4",
      type: "multiple-choice",
      question: "They ___ TV in the evening.",
      options: ["watch", "watches", "watching", "watchs"],
      correctAnswer: "watch",
      explanation: "With 'they', we use the base form of the verb.",
      explanationSpanish: "Con 'they', usamos la forma base del verbo.",
      difficulty: 1,
      tags: ["present-simple", "plural"]
    },
    {
      id: "a1-g2-5",
      type: "multiple-choice",
      question: "My sister ___ in London.",
      options: ["live", "lives", "living", "livees"],
      correctAnswer: "lives",
      explanation: "Verbs ending in -e: just add -s (live → lives).",
      explanationSpanish: "Verbos terminados en -e: solo añade -s (live → lives).",
      difficulty: 1,
      tags: ["present-simple", "third-person", "spelling"]
    },
    {
      id: "a1-g2-6",
      type: "multiple-choice",
      question: "The bus ___ at 8 o'clock.",
      options: ["arrive", "arrives", "arriving", "arrivees"],
      correctAnswer: "arrives",
      explanation: "'The bus' = it, so we add -s to the verb.",
      explanationSpanish: "'The bus' = it, así que añadimos -s al verbo.",
      difficulty: 1,
      tags: ["present-simple", "third-person"]
    },
    {
      id: "a1-g2-7",
      type: "multiple-choice",
      question: "He ___ tennis on Sundays.",
      options: ["play", "plays", "playes", "playing"],
      correctAnswer: "plays",
      explanation: "Verbs ending in consonant + y: change y to i and add -es (study → studies). But 'play' ends in vowel + y, so just add -s.",
      explanationSpanish: "Verbos terminados en consonante + y: cambia y por i y añade -es. Pero 'play' termina en vocal + y, así que solo añade -s.",
      difficulty: 2,
      tags: ["present-simple", "spelling"]
    },
    {
      id: "a1-g2-8",
      type: "multiple-choice",
      question: "She ___ English and French.",
      options: ["study", "studies", "studys", "studying"],
      correctAnswer: "studies",
      explanation: "Verbs ending in consonant + y: change y to i and add -es (study → studies).",
      explanationSpanish: "Verbos terminados en consonante + y: cambia y por i y añade -es (study → studies).",
      difficulty: 2,
      tags: ["present-simple", "spelling", "-ies"]
    },
    {
      id: "a1-g2-9",
      type: "multiple-choice",
      question: "My father ___ very hard.",
      options: ["work", "works", "working", "workes"],
      correctAnswer: "works",
      explanation: "Regular verb: work → works",
      explanationSpanish: "Verbo regular: work → works",
      difficulty: 1,
      tags: ["present-simple", "third-person"]
    },
    {
      id: "a1-g2-10",
      type: "multiple-choice",
      question: "___ you like pizza?",
      options: ["Do", "Does", "Is", "Are"],
      correctAnswer: "Do",
      explanation: "Questions in Present Simple: Do + I/you/we/they + verb",
      explanationSpanish: "Preguntas en Present Simple: Do + I/you/we/they + verbo",
      difficulty: 2,
      tags: ["present-simple", "questions"]
    },
    {
      id: "a1-g2-11",
      type: "multiple-choice",
      question: "___ she speak Spanish?",
      options: ["Do", "Does", "Is", "Are"],
      correctAnswer: "Does",
      explanation: "Questions in Present Simple: Does + he/she/it + verb (base form)",
      explanationSpanish: "Preguntas en Present Simple: Does + he/she/it + verbo (forma base)",
      difficulty: 2,
      tags: ["present-simple", "questions", "third-person"]
    },
    {
      id: "a1-g2-12",
      type: "multiple-choice",
      question: "I ___ not like broccoli.",
      options: ["do", "does", "am", "is"],
      correctAnswer: "do",
      explanation: "Negative in Present Simple: do not (don't) + verb",
      explanationSpanish: "Negativo en Present Simple: do not (don't) + verbo",
      difficulty: 2,
      tags: ["present-simple", "negative"]
    },
    {
      id: "a1-g2-13",
      type: "multiple-choice",
      question: "He ___ not eat meat. He's vegetarian.",
      options: ["do", "does", "is", "are"],
      correctAnswer: "does",
      explanation: "Negative in Present Simple: does not (doesn't) + verb (base form)",
      explanationSpanish: "Negativo en Present Simple: does not (doesn't) + verbo (forma base)",
      difficulty: 2,
      tags: ["present-simple", "negative", "third-person"]
    },
    {
      id: "a1-g2-14",
      type: "true-false",
      question: "'She don't like coffee' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct form: 'She doesn't like coffee'. Use 'doesn't' with he/she/it.",
      explanationSpanish: "Forma correcta: 'She doesn't like coffee'. Usa 'doesn't' con he/she/it.",
      difficulty: 2,
      tags: ["present-simple", "error-correction"]
    },
    {
      id: "a1-g2-15",
      type: "multiple-choice",
      question: "What time ___ you wake up?",
      options: ["do", "does", "is", "are"],
      correctAnswer: "do",
      explanation: "WH-questions: What time + do/does + subject + verb",
      explanationSpanish: "Preguntas WH: What time + do/does + sujeto + verbo",
      difficulty: 2,
      tags: ["present-simple", "wh-questions"]
    },
  ],

  // Present Continuous exercises
  "a1-gram-3": [
    {
      id: "a1-g3-1",
      type: "multiple-choice",
      question: "I ___ reading a book right now.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "Present Continuous: am/is/are + verb-ing. I → am",
      explanationSpanish: "Present Continuous: am/is/are + verbo-ing. I → am",
      difficulty: 1,
      tags: ["present-continuous", "structure"]
    },
    {
      id: "a1-g3-2",
      type: "multiple-choice",
      question: "She ___ watching TV.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "Present Continuous: he/she/it → is + verb-ing",
      explanationSpanish: "Present Continuous: he/she/it → is + verbo-ing",
      difficulty: 1,
      tags: ["present-continuous", "third-person"]
    },
    {
      id: "a1-g3-3",
      type: "multiple-choice",
      question: "They ___ playing football.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "Present Continuous: we/you/they → are + verb-ing",
      explanationSpanish: "Present Continuous: we/you/they → are + verbo-ing",
      difficulty: 1,
      tags: ["present-continuous", "plural"]
    },
    {
      id: "a1-g3-4",
      type: "multiple-choice",
      question: "What are you ___?",
      options: ["do", "does", "doing", "did"],
      correctAnswer: "doing",
      explanation: "Present Continuous questions: What are you doing?",
      explanationSpanish: "Preguntas en Present Continuous: What are you doing?",
      difficulty: 1,
      tags: ["present-continuous", "questions"]
    },
    {
      id: "a1-g3-5",
      type: "multiple-choice",
      question: "He is ___ his homework.",
      options: ["do", "does", "doing", "did"],
      correctAnswer: "doing",
      explanation: "Present Continuous: be + verb-ing (do → doing)",
      explanationSpanish: "Present Continuous: be + verbo-ing (do → doing)",
      difficulty: 1,
      tags: ["present-continuous", "-ing"]
    },
    {
      id: "a1-g3-6",
      type: "multiple-choice",
      question: "The children are ___ in the park.",
      options: ["run", "runs", "running", "runned"],
      correctAnswer: "running",
      explanation: "Verbs ending in consonant-vowel-consonant: double the last letter + ing (run → running)",
      explanationSpanish: "Verbos terminados en consonante-vocal-consonante: dobla la última letra + ing (run → running)",
      difficulty: 2,
      tags: ["present-continuous", "spelling"]
    },
    {
      id: "a1-g3-7",
      type: "multiple-choice",
      question: "She is ___ a letter.",
      options: ["write", "writes", "writing", "writeing"],
      correctAnswer: "writing",
      explanation: "Verbs ending in -e: remove -e and add -ing (write → writing)",
      explanationSpanish: "Verbos terminados en -e: quita la -e y añade -ing (write → writing)",
      difficulty: 2,
      tags: ["present-continuous", "spelling"]
    },
    {
      id: "a1-g3-8",
      type: "multiple-choice",
      question: "I am not ___ right now. I'm resting.",
      options: ["work", "works", "working", "worked"],
      correctAnswer: "working",
      explanation: "Negative Present Continuous: am/is/are + not + verb-ing",
      explanationSpanish: "Negativo Present Continuous: am/is/are + not + verbo-ing",
      difficulty: 2,
      tags: ["present-continuous", "negative"]
    },
    {
      id: "a1-g3-9",
      type: "multiple-choice",
      question: "___ you listening to music?",
      options: ["Am", "Is", "Are", "Do"],
      correctAnswer: "Are",
      explanation: "Questions in Present Continuous: Am/Is/Are + subject + verb-ing?",
      explanationSpanish: "Preguntas en Present Continuous: Am/Is/Are + sujeto + verbo-ing?",
      difficulty: 2,
      tags: ["present-continuous", "questions"]
    },
    {
      id: "a1-g3-10",
      type: "multiple-choice",
      question: "Look! It ___ raining.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "We use Present Continuous for things happening right now. 'Look!' signals this.",
      explanationSpanish: "Usamos Present Continuous para cosas que pasan ahora mismo. 'Look!' señala esto.",
      difficulty: 1,
      tags: ["present-continuous", "usage"]
    },
    {
      id: "a1-g3-11",
      type: "true-false",
      question: "'I am study English' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct form: 'I am studying English'. We need the -ing form.",
      explanationSpanish: "Forma correcta: 'I am studying English'. Necesitamos la forma -ing.",
      difficulty: 1,
      tags: ["present-continuous", "error-correction"]
    },
    {
      id: "a1-g3-12",
      type: "multiple-choice",
      question: "My mother is ___ dinner.",
      options: ["cook", "cooks", "cooking", "cooked"],
      correctAnswer: "cooking",
      explanation: "Present Continuous: be + verb-ing",
      explanationSpanish: "Present Continuous: be + verbo-ing",
      difficulty: 1,
      tags: ["present-continuous", "structure"]
    },
    {
      id: "a1-g3-13",
      type: "multiple-choice",
      question: "The baby is ___.",
      options: ["sleep", "sleeps", "sleeping", "sleeped"],
      correctAnswer: "sleeping",
      explanation: "Present Continuous with 'sleep' → sleeping",
      explanationSpanish: "Present Continuous con 'sleep' → sleeping",
      difficulty: 1,
      tags: ["present-continuous", "-ing"]
    },
    {
      id: "a1-g3-14",
      type: "multiple-choice",
      question: "We ___ waiting for the bus.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "We → are",
      explanationSpanish: "We → are",
      difficulty: 1,
      tags: ["present-continuous", "first-person-plural"]
    },
    {
      id: "a1-g3-15",
      type: "multiple-choice",
      question: "Where is he ___?",
      options: ["go", "goes", "going", "went"],
      correctAnswer: "going",
      explanation: "Present Continuous question: Where is he going?",
      explanationSpanish: "Pregunta en Present Continuous: Where is he going?",
      difficulty: 2,
      tags: ["present-continuous", "wh-questions"]
    },
  ],

  // Articles and Pronouns
  "a1-gram-4": [
    {
      id: "a1-g4-1",
      type: "multiple-choice",
      question: "___ apple a day keeps the doctor away.",
      options: ["A", "An", "The", "-"],
      correctAnswer: "An",
      explanation: "Use 'an' before words that start with a vowel sound (a, e, i, o, u).",
      explanationSpanish: "Usa 'an' antes de palabras que empiezan con sonido de vocal (a, e, i, o, u).",
      difficulty: 1,
      tags: ["articles", "a-an"]
    },
    {
      id: "a1-g4-2",
      type: "multiple-choice",
      question: "He is ___ doctor.",
      options: ["a", "an", "the", "-"],
      correctAnswer: "a",
      explanation: "Use 'a' before consonant sounds. 'Doctor' starts with /d/.",
      explanationSpanish: "Usa 'a' antes de sonidos de consonante. 'Doctor' empieza con /d/.",
      difficulty: 1,
      tags: ["articles", "a-an"]
    },
    {
      id: "a1-g4-3",
      type: "multiple-choice",
      question: "This is ___ university.",
      options: ["a", "an", "the", "-"],
      correctAnswer: "a",
      explanation: "'University' starts with a /ju:/ sound (consonant sound), so we use 'a'.",
      explanationSpanish: "'University' empieza con sonido /ju:/ (sonido consonante), así que usamos 'a'.",
      difficulty: 2,
      tags: ["articles", "a-an", "exception"]
    },
    {
      id: "a1-g4-4",
      type: "multiple-choice",
      question: "She is ___ honest person.",
      options: ["a", "an", "the", "-"],
      correctAnswer: "an",
      explanation: "'Honest' starts with a vowel sound /ɒ/ (the 'h' is silent), so we use 'an'.",
      explanationSpanish: "'Honest' empieza con sonido de vocal /ɒ/ (la 'h' es muda), así que usamos 'an'.",
      difficulty: 2,
      tags: ["articles", "a-an", "exception"]
    },
    {
      id: "a1-g4-5",
      type: "multiple-choice",
      question: "___ sun is very hot today.",
      options: ["A", "An", "The", "-"],
      correctAnswer: "The",
      explanation: "Use 'the' for unique things (there's only one sun).",
      explanationSpanish: "Usa 'the' para cosas únicas (solo hay un sol).",
      difficulty: 1,
      tags: ["articles", "the", "unique"]
    },
    {
      id: "a1-g4-6",
      type: "multiple-choice",
      question: "I live in ___ United States.",
      options: ["a", "an", "the", "-"],
      correctAnswer: "the",
      explanation: "We use 'the' with country names that include 'States', 'Kingdom', 'Republic'.",
      explanationSpanish: "Usamos 'the' con nombres de países que incluyen 'States', 'Kingdom', 'Republic'.",
      difficulty: 2,
      tags: ["articles", "the", "countries"]
    },
    {
      id: "a1-g4-7",
      type: "multiple-choice",
      question: "___ love music. (I/She)",
      options: ["I", "She", "Me", "Her"],
      correctAnswer: "I",
      explanation: "Subject pronouns go before the verb: I, you, he, she, it, we, they.",
      explanationSpanish: "Los pronombres de sujeto van antes del verbo: I, you, he, she, it, we, they.",
      difficulty: 1,
      tags: ["pronouns", "subject"]
    },
    {
      id: "a1-g4-8",
      type: "multiple-choice",
      question: "Give the book to ___. (I/me)",
      options: ["I", "me", "my", "mine"],
      correctAnswer: "me",
      explanation: "Object pronouns go after verbs or prepositions: me, you, him, her, it, us, them.",
      explanationSpanish: "Los pronombres de objeto van después de verbos o preposiciones: me, you, him, her, it, us, them.",
      difficulty: 2,
      tags: ["pronouns", "object"]
    },
    {
      id: "a1-g4-9",
      type: "multiple-choice",
      question: "___ is my book. (This/These)",
      options: ["This", "These", "That", "Those"],
      correctAnswer: "This",
      explanation: "'This' for singular near, 'these' for plural near.",
      explanationSpanish: "'This' para singular cerca, 'these' para plural cerca.",
      difficulty: 1,
      tags: ["pronouns", "demonstrative"]
    },
    {
      id: "a1-g4-10",
      type: "multiple-choice",
      question: "___ are my friends. (This/These)",
      options: ["This", "These", "That", "Those"],
      correctAnswer: "These",
      explanation: "'These' for plural things that are near.",
      explanationSpanish: "'These' para cosas en plural que están cerca.",
      difficulty: 1,
      tags: ["pronouns", "demonstrative"]
    },
    {
      id: "a1-g4-11",
      type: "multiple-choice",
      question: "Is this ___ car? (you/your)",
      options: ["you", "your", "yours", "yourself"],
      correctAnswer: "your",
      explanation: "Possessive adjectives go before nouns: my, your, his, her, its, our, their.",
      explanationSpanish: "Los adjetivos posesivos van antes de sustantivos: my, your, his, her, its, our, their.",
      difficulty: 1,
      tags: ["pronouns", "possessive"]
    },
    {
      id: "a1-g4-12",
      type: "multiple-choice",
      question: "The dog is eating ___ food.",
      options: ["it", "its", "it's", "his"],
      correctAnswer: "its",
      explanation: "'Its' is the possessive form of 'it'. 'It's' = 'it is'.",
      explanationSpanish: "'Its' es la forma posesiva de 'it'. 'It's' = 'it is'.",
      difficulty: 2,
      tags: ["pronouns", "possessive", "its-it's"]
    },
    {
      id: "a1-g4-13",
      type: "multiple-choice",
      question: "John and ___ are friends. (I/me)",
      options: ["I", "me", "my", "mine"],
      correctAnswer: "I",
      explanation: "When you're part of the subject, use 'I' (not 'me').",
      explanationSpanish: "Cuando eres parte del sujeto, usa 'I' (no 'me').",
      difficulty: 2,
      tags: ["pronouns", "subject"]
    },
    {
      id: "a1-g4-14",
      type: "true-false",
      question: "'Me like pizza' is grammatically correct.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Correct form: 'I like pizza'. Use subject pronouns before verbs.",
      explanationSpanish: "Forma correcta: 'I like pizza'. Usa pronombres de sujeto antes de verbos.",
      difficulty: 1,
      tags: ["pronouns", "error-correction"]
    },
    {
      id: "a1-g4-15",
      type: "multiple-choice",
      question: "Do you have ___ umbrella?",
      options: ["a", "an", "the", "-"],
      correctAnswer: "an",
      explanation: "'Umbrella' starts with a vowel sound, so we use 'an'.",
      explanationSpanish: "'Umbrella' empieza con sonido de vocal, así que usamos 'an'.",
      difficulty: 1,
      tags: ["articles", "a-an"]
    },
  ],
};

// =====================================================
// A1 VOCABULARY EXERCISES
// =====================================================

export const a1VocabularyExercises: Record<string, Exercise[]> = {
  "a1-vocab-1": [
    // Numbers and Colors
    {
      id: "a1-v1-1",
      type: "multiple-choice",
      question: "What number comes after 'eleven'?",
      options: ["Ten", "Twelve", "Thirteen", "Nine"],
      correctAnswer: "Twelve",
      explanation: "The sequence is: ten, eleven, twelve, thirteen...",
      explanationSpanish: "La secuencia es: ten, eleven, twelve, thirteen...",
      difficulty: 1,
      tags: ["numbers", "1-20"]
    },
    {
      id: "a1-v1-2",
      type: "multiple-choice",
      question: "How do you say '15' in English?",
      options: ["Fifty", "Fifteen", "Five", "Fiveteen"],
      correctAnswer: "Fifteen",
      explanation: "15 = fifteen. Note: it's 'fifteen', not 'fiveteen'.",
      explanationSpanish: "15 = fifteen. Nota: es 'fifteen', no 'fiveteen'.",
      difficulty: 1,
      tags: ["numbers", "1-20"]
    },
    {
      id: "a1-v1-3",
      type: "multiple-choice",
      question: "What is 7 + 8?",
      options: ["Fourteen", "Fifteen", "Sixteen", "Thirteen"],
      correctAnswer: "Fifteen",
      explanation: "7 + 8 = 15 = fifteen",
      explanationSpanish: "7 + 8 = 15 = fifteen",
      difficulty: 1,
      tags: ["numbers", "math"]
    },
    {
      id: "a1-v1-4",
      type: "multiple-choice",
      question: "The sky is ___.",
      options: ["red", "blue", "yellow", "green"],
      correctAnswer: "blue",
      explanation: "The sky is typically blue during the day.",
      explanationSpanish: "El cielo es típicamente azul durante el día.",
      difficulty: 1,
      tags: ["colors"]
    },
    {
      id: "a1-v1-5",
      type: "multiple-choice",
      question: "Bananas are ___.",
      options: ["blue", "red", "yellow", "purple"],
      correctAnswer: "yellow",
      explanation: "Ripe bananas are yellow.",
      explanationSpanish: "Los plátanos maduros son amarillos.",
      difficulty: 1,
      tags: ["colors"]
    },
    {
      id: "a1-v1-6",
      type: "multiple-choice",
      question: "What color do you get when you mix blue and yellow?",
      options: ["Red", "Orange", "Green", "Purple"],
      correctAnswer: "Green",
      explanation: "Blue + Yellow = Green",
      explanationSpanish: "Azul + Amarillo = Verde",
      difficulty: 2,
      tags: ["colors", "mixing"]
    },
    {
      id: "a1-v1-7",
      type: "multiple-choice",
      question: "How do you say '30' in English?",
      options: ["Thirteen", "Thirty", "Three", "Third"],
      correctAnswer: "Thirty",
      explanation: "30 = thirty. Note the difference: 13 = thirteen, 30 = thirty.",
      explanationSpanish: "30 = thirty. Nota la diferencia: 13 = thirteen, 30 = thirty.",
      difficulty: 1,
      tags: ["numbers", "20-100"]
    },
    {
      id: "a1-v1-8",
      type: "multiple-choice",
      question: "What is 50 + 20?",
      options: ["Sixty", "Seventy", "Eighty", "Fifty-two"],
      correctAnswer: "Seventy",
      explanation: "50 + 20 = 70 = seventy",
      explanationSpanish: "50 + 20 = 70 = seventy",
      difficulty: 1,
      tags: ["numbers", "math"]
    },
    {
      id: "a1-v1-9",
      type: "multiple-choice",
      question: "Grass is ___.",
      options: ["blue", "red", "green", "white"],
      correctAnswer: "green",
      explanation: "Grass is typically green.",
      explanationSpanish: "La hierba es típicamente verde.",
      difficulty: 1,
      tags: ["colors"]
    },
    {
      id: "a1-v1-10",
      type: "multiple-choice",
      question: "How do you write '100' in English?",
      options: ["One hundred", "Ten", "A thousand", "Hundred one"],
      correctAnswer: "One hundred",
      explanation: "100 = one hundred (or 'a hundred')",
      explanationSpanish: "100 = one hundred (o 'a hundred')",
      difficulty: 1,
      tags: ["numbers", "100"]
    },
    {
      id: "a1-v1-11",
      type: "multiple-choice",
      question: "What color is chocolate?",
      options: ["White", "Brown", "Pink", "Gray"],
      correctAnswer: "Brown",
      explanation: "Chocolate is brown (marrón in Spanish).",
      explanationSpanish: "El chocolate es marrón (brown en inglés).",
      difficulty: 1,
      tags: ["colors"]
    },
    {
      id: "a1-v1-12",
      type: "multiple-choice",
      question: "Snow is ___.",
      options: ["black", "gray", "white", "blue"],
      correctAnswer: "white",
      explanation: "Snow is white.",
      explanationSpanish: "La nieve es blanca.",
      difficulty: 1,
      tags: ["colors"]
    },
    {
      id: "a1-v1-13",
      type: "translation",
      question: "How do you say 'ochenta y cinco' in English?",
      options: ["Fifty-eight", "Eighty-five", "Eighteen", "Fifteen"],
      correctAnswer: "Eighty-five",
      explanation: "Ochenta y cinco = Eighty-five (85)",
      explanationSpanish: "Ochenta y cinco = Eighty-five (85)",
      difficulty: 2,
      tags: ["numbers", "translation"]
    },
    {
      id: "a1-v1-14",
      type: "multiple-choice",
      question: "What color is the sun?",
      options: ["Blue", "Green", "Yellow", "Black"],
      correctAnswer: "Yellow",
      explanation: "The sun appears yellow to us.",
      explanationSpanish: "El sol nos parece amarillo.",
      difficulty: 1,
      tags: ["colors"]
    },
    {
      id: "a1-v1-15",
      type: "multiple-choice",
      question: "How many colors are in a rainbow?",
      options: ["Five", "Six", "Seven", "Eight"],
      correctAnswer: "Seven",
      explanation: "A rainbow has 7 colors: red, orange, yellow, green, blue, indigo, violet.",
      explanationSpanish: "Un arcoíris tiene 7 colores: rojo, naranja, amarillo, verde, azul, índigo, violeta.",
      difficulty: 2,
      tags: ["colors", "rainbow"]
    },
  ],

  "a1-vocab-2": [
    // Family and People
    {
      id: "a1-v2-1",
      type: "multiple-choice",
      question: "My mother's husband is my ___.",
      options: ["uncle", "father", "brother", "grandfather"],
      correctAnswer: "father",
      explanation: "Your mother's husband is your father.",
      explanationSpanish: "El esposo de tu madre es tu padre.",
      difficulty: 1,
      tags: ["family", "relationships"]
    },
    {
      id: "a1-v2-2",
      type: "multiple-choice",
      question: "My father's mother is my ___.",
      options: ["aunt", "grandmother", "mother", "sister"],
      correctAnswer: "grandmother",
      explanation: "Your father's mother (or mother's mother) is your grandmother.",
      explanationSpanish: "La madre de tu padre (o la madre de tu madre) es tu abuela.",
      difficulty: 1,
      tags: ["family", "grandparents"]
    },
    {
      id: "a1-v2-3",
      type: "multiple-choice",
      question: "My mother's brother is my ___.",
      options: ["uncle", "nephew", "cousin", "brother"],
      correctAnswer: "uncle",
      explanation: "Your parent's brother is your uncle.",
      explanationSpanish: "El hermano de tus padres es tu tío.",
      difficulty: 1,
      tags: ["family", "uncle"]
    },
    {
      id: "a1-v2-4",
      type: "multiple-choice",
      question: "My aunt's daughter is my ___.",
      options: ["sister", "niece", "cousin", "aunt"],
      correctAnswer: "cousin",
      explanation: "Your aunt's or uncle's child is your cousin.",
      explanationSpanish: "El hijo/a de tu tío/a es tu primo/a.",
      difficulty: 1,
      tags: ["family", "cousin"]
    },
    {
      id: "a1-v2-5",
      type: "multiple-choice",
      question: "A person who teaches students is a ___.",
      options: ["doctor", "teacher", "nurse", "driver"],
      correctAnswer: "teacher",
      explanation: "A teacher teaches students.",
      explanationSpanish: "Un maestro enseña a los estudiantes.",
      difficulty: 1,
      tags: ["professions"]
    },
    {
      id: "a1-v2-6",
      type: "multiple-choice",
      question: "A person who helps sick people in a hospital is a ___.",
      options: ["teacher", "pilot", "doctor", "waiter"],
      correctAnswer: "doctor",
      explanation: "A doctor helps sick people get better.",
      explanationSpanish: "Un médico ayuda a las personas enfermas a recuperarse.",
      difficulty: 1,
      tags: ["professions"]
    },
    {
      id: "a1-v2-7",
      type: "multiple-choice",
      question: "My brother's son is my ___.",
      options: ["nephew", "niece", "cousin", "uncle"],
      correctAnswer: "nephew",
      explanation: "Your sibling's son is your nephew. (Daughter = niece)",
      explanationSpanish: "El hijo de tu hermano/a es tu sobrino. (Hija = sobrina)",
      difficulty: 2,
      tags: ["family", "nephew-niece"]
    },
    {
      id: "a1-v2-8",
      type: "multiple-choice",
      question: "A person who flies planes is a ___.",
      options: ["driver", "pilot", "sailor", "astronaut"],
      correctAnswer: "pilot",
      explanation: "A pilot flies airplanes.",
      explanationSpanish: "Un piloto vuela aviones.",
      difficulty: 1,
      tags: ["professions"]
    },
    {
      id: "a1-v2-9",
      type: "multiple-choice",
      question: "A person who serves food in a restaurant is a ___.",
      options: ["chef", "waiter", "cashier", "manager"],
      correctAnswer: "waiter",
      explanation: "A waiter/waitress serves food to customers in restaurants.",
      explanationSpanish: "Un camarero/a sirve comida a los clientes en restaurantes.",
      difficulty: 1,
      tags: ["professions"]
    },
    {
      id: "a1-v2-10",
      type: "multiple-choice",
      question: "My parents' parents are my ___.",
      options: ["uncles", "grandparents", "parents", "siblings"],
      correctAnswer: "grandparents",
      explanation: "Your parents' parents are your grandparents (grandfather and grandmother).",
      explanationSpanish: "Los padres de tus padres son tus abuelos (abuelo y abuela).",
      difficulty: 1,
      tags: ["family", "grandparents"]
    },
    {
      id: "a1-v2-11",
      type: "multiple-choice",
      question: "A person who takes care of people's teeth is a ___.",
      options: ["doctor", "nurse", "dentist", "pharmacist"],
      correctAnswer: "dentist",
      explanation: "A dentist takes care of teeth and gums.",
      explanationSpanish: "Un dentista cuida los dientes y las encías.",
      difficulty: 1,
      tags: ["professions"]
    },
    {
      id: "a1-v2-12",
      type: "multiple-choice",
      question: "My sister's husband is my ___.",
      options: ["cousin", "uncle", "brother-in-law", "nephew"],
      correctAnswer: "brother-in-law",
      explanation: "Your sibling's spouse is your in-law (brother-in-law or sister-in-law).",
      explanationSpanish: "El esposo de tu hermana es tu cuñado.",
      difficulty: 2,
      tags: ["family", "in-laws"]
    },
    {
      id: "a1-v2-13",
      type: "multiple-choice",
      question: "A person who works in an office using a computer is an ___.",
      options: ["artist", "officer", "office worker", "engineer"],
      correctAnswer: "office worker",
      explanation: "An office worker works in an office, often using computers.",
      explanationSpanish: "Un oficinista trabaja en una oficina, frecuentemente usando computadoras.",
      difficulty: 1,
      tags: ["professions"]
    },
    {
      id: "a1-v2-14",
      type: "multiple-choice",
      question: "A woman who has children is a ___.",
      options: ["mother", "sister", "daughter", "aunt"],
      correctAnswer: "mother",
      explanation: "A mother is a woman who has children.",
      explanationSpanish: "Una madre es una mujer que tiene hijos.",
      difficulty: 1,
      tags: ["family", "parents"]
    },
    {
      id: "a1-v2-15",
      type: "multiple-choice",
      question: "A person who puts out fires is a ___.",
      options: ["police officer", "firefighter", "soldier", "security guard"],
      correctAnswer: "firefighter",
      explanation: "A firefighter puts out fires and saves people.",
      explanationSpanish: "Un bombero apaga incendios y salva personas.",
      difficulty: 1,
      tags: ["professions"]
    },
  ],

  "a1-vocab-3": [
    // Everyday Objects
    {
      id: "a1-v3-1",
      type: "multiple-choice",
      question: "You sleep on a ___.",
      options: ["chair", "table", "bed", "sofa"],
      correctAnswer: "bed",
      explanation: "A bed is furniture for sleeping.",
      explanationSpanish: "Una cama es un mueble para dormir.",
      difficulty: 1,
      tags: ["home", "furniture"]
    },
    {
      id: "a1-v3-2",
      type: "multiple-choice",
      question: "You sit on a ___ to eat at a table.",
      options: ["bed", "chair", "window", "door"],
      correctAnswer: "chair",
      explanation: "A chair is for sitting.",
      explanationSpanish: "Una silla es para sentarse.",
      difficulty: 1,
      tags: ["home", "furniture"]
    },
    {
      id: "a1-v3-3",
      type: "multiple-choice",
      question: "You write with a ___.",
      options: ["book", "pen", "desk", "bag"],
      correctAnswer: "pen",
      explanation: "A pen is used for writing.",
      explanationSpanish: "Un bolígrafo se usa para escribir.",
      difficulty: 1,
      tags: ["classroom", "stationery"]
    },
    {
      id: "a1-v3-4",
      type: "multiple-choice",
      question: "You read a ___.",
      options: ["pencil", "ruler", "book", "eraser"],
      correctAnswer: "book",
      explanation: "A book is for reading.",
      explanationSpanish: "Un libro es para leer.",
      difficulty: 1,
      tags: ["classroom", "reading"]
    },
    {
      id: "a1-v3-5",
      type: "multiple-choice",
      question: "You cook food in the ___.",
      options: ["bedroom", "bathroom", "kitchen", "garden"],
      correctAnswer: "kitchen",
      explanation: "The kitchen is the room where you cook food.",
      explanationSpanish: "La cocina es la habitación donde cocinas.",
      difficulty: 1,
      tags: ["home", "rooms"]
    },
    {
      id: "a1-v3-6",
      type: "multiple-choice",
      question: "You wash your hands in the ___.",
      options: ["kitchen", "living room", "bathroom", "bedroom"],
      correctAnswer: "bathroom",
      explanation: "The bathroom is where you wash your hands and take showers.",
      explanationSpanish: "El baño es donde te lavas las manos y te duchas.",
      difficulty: 1,
      tags: ["home", "rooms"]
    },
    {
      id: "a1-v3-7",
      type: "multiple-choice",
      question: "You use a ___ to call people.",
      options: ["computer", "phone", "television", "radio"],
      correctAnswer: "phone",
      explanation: "A phone is used to make calls.",
      explanationSpanish: "Un teléfono se usa para hacer llamadas.",
      difficulty: 1,
      tags: ["technology", "devices"]
    },
    {
      id: "a1-v3-8",
      type: "multiple-choice",
      question: "You watch movies on the ___.",
      options: ["radio", "phone", "television", "oven"],
      correctAnswer: "television",
      explanation: "A television (TV) is for watching shows and movies.",
      explanationSpanish: "Una televisión (TV) es para ver programas y películas.",
      difficulty: 1,
      tags: ["home", "electronics"]
    },
    {
      id: "a1-v3-9",
      type: "multiple-choice",
      question: "You keep cold food in the ___.",
      options: ["oven", "microwave", "refrigerator", "cupboard"],
      correctAnswer: "refrigerator",
      explanation: "A refrigerator (fridge) keeps food cold.",
      explanationSpanish: "Un refrigerador mantiene la comida fría.",
      difficulty: 1,
      tags: ["kitchen", "appliances"]
    },
    {
      id: "a1-v3-10",
      type: "multiple-choice",
      question: "Students sit at ___ in the classroom.",
      options: ["beds", "sofas", "desks", "floors"],
      correctAnswer: "desks",
      explanation: "Students sit at desks to study and write.",
      explanationSpanish: "Los estudiantes se sientan en escritorios para estudiar y escribir.",
      difficulty: 1,
      tags: ["classroom", "furniture"]
    },
    {
      id: "a1-v3-11",
      type: "multiple-choice",
      question: "The teacher writes on the ___.",
      options: ["desk", "door", "board", "floor"],
      correctAnswer: "board",
      explanation: "The teacher writes on the whiteboard or blackboard.",
      explanationSpanish: "El maestro escribe en la pizarra.",
      difficulty: 1,
      tags: ["classroom"]
    },
    {
      id: "a1-v3-12",
      type: "multiple-choice",
      question: "You put your clothes in the ___.",
      options: ["refrigerator", "oven", "wardrobe", "bathtub"],
      correctAnswer: "wardrobe",
      explanation: "A wardrobe (or closet) is for storing clothes.",
      explanationSpanish: "Un armario es para guardar ropa.",
      difficulty: 1,
      tags: ["home", "furniture"]
    },
    {
      id: "a1-v3-13",
      type: "multiple-choice",
      question: "You carry books in your ___.",
      options: ["hat", "shoes", "bag", "gloves"],
      correctAnswer: "bag",
      explanation: "A bag (or backpack) is for carrying books and other items.",
      explanationSpanish: "Una bolsa (o mochila) es para llevar libros y otras cosas.",
      difficulty: 1,
      tags: ["classroom", "accessories"]
    },
    {
      id: "a1-v3-14",
      type: "multiple-choice",
      question: "You look at the ___ to see the time.",
      options: ["mirror", "window", "clock", "picture"],
      correctAnswer: "clock",
      explanation: "A clock shows the time.",
      explanationSpanish: "Un reloj muestra la hora.",
      difficulty: 1,
      tags: ["home", "objects"]
    },
    {
      id: "a1-v3-15",
      type: "multiple-choice",
      question: "You use an ___ to correct mistakes.",
      options: ["pencil", "pen", "eraser", "ruler"],
      correctAnswer: "eraser",
      explanation: "An eraser (rubber) is used to correct pencil mistakes.",
      explanationSpanish: "Una goma de borrar se usa para corregir errores de lápiz.",
      difficulty: 1,
      tags: ["classroom", "stationery"]
    },
  ],

  "a1-vocab-4": [
    // Food and Drinks
    {
      id: "a1-v4-1",
      type: "multiple-choice",
      question: "Oranges and apples are ___.",
      options: ["vegetables", "fruits", "meats", "drinks"],
      correctAnswer: "fruits",
      explanation: "Oranges and apples are types of fruit.",
      explanationSpanish: "Las naranjas y manzanas son tipos de fruta.",
      difficulty: 1,
      tags: ["food", "fruits"]
    },
    {
      id: "a1-v4-2",
      type: "multiple-choice",
      question: "Carrots and broccoli are ___.",
      options: ["fruits", "meats", "vegetables", "drinks"],
      correctAnswer: "vegetables",
      explanation: "Carrots and broccoli are vegetables.",
      explanationSpanish: "Las zanahorias y el brócoli son verduras.",
      difficulty: 1,
      tags: ["food", "vegetables"]
    },
    {
      id: "a1-v4-3",
      type: "multiple-choice",
      question: "In the morning, many people drink ___.",
      options: ["beer", "coffee", "wine", "whiskey"],
      correctAnswer: "coffee",
      explanation: "Coffee is a popular morning drink.",
      explanationSpanish: "El café es una bebida popular por la mañana.",
      difficulty: 1,
      tags: ["drinks", "breakfast"]
    },
    {
      id: "a1-v4-4",
      type: "multiple-choice",
      question: "Cows give us ___.",
      options: ["juice", "water", "milk", "soda"],
      correctAnswer: "milk",
      explanation: "Cows produce milk.",
      explanationSpanish: "Las vacas producen leche.",
      difficulty: 1,
      tags: ["drinks", "dairy"]
    },
    {
      id: "a1-v4-5",
      type: "multiple-choice",
      question: "A banana is ___.",
      options: ["red", "blue", "yellow", "green"],
      correctAnswer: "yellow",
      explanation: "A ripe banana is yellow.",
      explanationSpanish: "Un plátano maduro es amarillo.",
      difficulty: 1,
      tags: ["fruits", "colors"]
    },
    {
      id: "a1-v4-6",
      type: "multiple-choice",
      question: "You make sandwiches with ___.",
      options: ["rice", "bread", "pasta", "soup"],
      correctAnswer: "bread",
      explanation: "Sandwiches are made with bread.",
      explanationSpanish: "Los sándwiches se hacen con pan.",
      difficulty: 1,
      tags: ["food", "bread"]
    },
    {
      id: "a1-v4-7",
      type: "multiple-choice",
      question: "Chickens give us ___ and meat.",
      options: ["milk", "eggs", "cheese", "butter"],
      correctAnswer: "eggs",
      explanation: "Chickens produce eggs.",
      explanationSpanish: "Las gallinas producen huevos.",
      difficulty: 1,
      tags: ["food", "protein"]
    },
    {
      id: "a1-v4-8",
      type: "multiple-choice",
      question: "What drink is made from oranges?",
      options: ["Apple juice", "Orange juice", "Grape juice", "Milk"],
      correctAnswer: "Orange juice",
      explanation: "Orange juice is made from oranges.",
      explanationSpanish: "El jugo de naranja se hace de naranjas.",
      difficulty: 1,
      tags: ["drinks", "juice"]
    },
    {
      id: "a1-v4-9",
      type: "multiple-choice",
      question: "Ice cream is usually ___.",
      options: ["hot", "cold", "warm", "frozen"],
      correctAnswer: "cold",
      explanation: "Ice cream is served cold (or frozen).",
      explanationSpanish: "El helado se sirve frío (o congelado).",
      difficulty: 1,
      tags: ["food", "desserts"]
    },
    {
      id: "a1-v4-10",
      type: "multiple-choice",
      question: "Fish live in ___.",
      options: ["trees", "water", "sand", "air"],
      correctAnswer: "water",
      explanation: "Fish live in water (rivers, lakes, oceans).",
      explanationSpanish: "Los peces viven en el agua (ríos, lagos, océanos).",
      difficulty: 1,
      tags: ["food", "fish"]
    },
    {
      id: "a1-v4-11",
      type: "multiple-choice",
      question: "Cheese is made from ___.",
      options: ["water", "eggs", "milk", "flour"],
      correctAnswer: "milk",
      explanation: "Cheese is made from milk.",
      explanationSpanish: "El queso se hace de leche.",
      difficulty: 1,
      tags: ["food", "dairy"]
    },
    {
      id: "a1-v4-12",
      type: "multiple-choice",
      question: "What is the most common drink in the world?",
      options: ["Coffee", "Tea", "Water", "Soda"],
      correctAnswer: "Water",
      explanation: "Water is the most essential and common drink.",
      explanationSpanish: "El agua es la bebida más esencial y común.",
      difficulty: 1,
      tags: ["drinks", "water"]
    },
    {
      id: "a1-v4-13",
      type: "multiple-choice",
      question: "Pizza often has ___ on top.",
      options: ["ice cream", "cheese", "chocolate", "milk"],
      correctAnswer: "cheese",
      explanation: "Pizza typically has cheese on top.",
      explanationSpanish: "La pizza típicamente tiene queso encima.",
      difficulty: 1,
      tags: ["food", "fast-food"]
    },
    {
      id: "a1-v4-14",
      type: "multiple-choice",
      question: "Pasta is from ___.",
      options: ["Japan", "Mexico", "Italy", "China"],
      correctAnswer: "Italy",
      explanation: "Pasta is a traditional Italian food.",
      explanationSpanish: "La pasta es una comida tradicional italiana.",
      difficulty: 1,
      tags: ["food", "culture"]
    },
    {
      id: "a1-v4-15",
      type: "multiple-choice",
      question: "You drink ___ when you are thirsty.",
      options: ["bread", "cheese", "water", "rice"],
      correctAnswer: "water",
      explanation: "Water is what we drink when thirsty.",
      explanationSpanish: "El agua es lo que bebemos cuando tenemos sed.",
      difficulty: 1,
      tags: ["drinks", "basic"]
    },
  ],
};

// Import all exercise modules
import { getSpeakingExercisesBySkillId } from "./speakingExercises";
import { getReadingExercisesBySkillId } from "./readingExercises";
import { getListeningExercisesBySkillId } from "./listeningExercises";
import { getWritingExercisesBySkillId } from "./writingExercises";

// Function to get exercises by skill ID and category type
export function getExercisesBySkillId(skillId: string, categoryType: string): Exercise[] {
  // Determine level from skillId prefix
  const isA1 = skillId.startsWith('a1-');
  const isA2 = skillId.startsWith('a2-');
  const isB1 = skillId.startsWith('b1-');
  const isB2 = skillId.startsWith('b2-');
  const isC1 = skillId.startsWith('c1-');
  const isC2 = skillId.startsWith('c2-');

  if (categoryType.includes('grammar') || categoryType.includes('gram')) {
    if (isA1) return a1GrammarExercises[skillId] || [];
    if (isA2) return allA2Exercises.grammar[skillId] || [];
    if (isB1) return b1GrammarExercises[skillId] || [];
    if (isB2) return b2GrammarExercises[skillId] || [];
    if (isC1) return c1GrammarExercises[skillId] || [];
    if (isC2) return c2GrammarExercises[skillId] || [];
    return a1GrammarExercises[skillId] || [];
  }
  if (categoryType.includes('vocab')) {
    if (isA1) return a1VocabularyExercises[skillId] || [];
    if (isA2) return allA2Exercises.vocabulary[skillId] || [];
    if (isB1) return b1VocabularyExercises[skillId] || [];
    if (isB2) return b2VocabularyExercises[skillId] || [];
    if (isC1) return c1VocabularyExercises[skillId] || [];
    if (isC2) return c2VocabularyExercises[skillId] || [];
    return a1VocabularyExercises[skillId] || [];
  }
  if (categoryType.includes('speak')) {
    return getSpeakingExercisesBySkillId(skillId);
  }
  if (categoryType.includes('read')) {
    return getReadingExercisesBySkillId(skillId);
  }
  if (categoryType.includes('list')) {
    return getListeningExercisesBySkillId(skillId);
  }
  if (categoryType.includes('writ')) {
    return getWritingExercisesBySkillId(skillId);
  }
  return [];
}

// Export all exercise sets
export const allExercises = {
  a1Grammar: a1GrammarExercises,
  a1Vocabulary: a1VocabularyExercises,
  a2: allA2Exercises,
  b1Grammar: b1GrammarExercises,
  b1Vocabulary: b1VocabularyExercises,
  b2Grammar: b2GrammarExercises,
  b2Vocabulary: b2VocabularyExercises,
  c1Grammar: c1GrammarExercises,
  c1Vocabulary: c1VocabularyExercises,
  c2Grammar: c2GrammarExercises,
  c2Vocabulary: c2VocabularyExercises,
};
