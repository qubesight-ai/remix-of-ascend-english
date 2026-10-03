// A1 Level Grammar Exercises - 4 Core Themes
// Theme 1: Verb To Be (20 exercises)
// Theme 2: Present Simple (15 exercises)
// Theme 3: Present Continuous (15 exercises)
// Theme 4: Articles and Pronouns (50 exercises)

import { Exercise } from "./exercisesData";

// ====================================
// THEME 1: VERB TO BE (20 Exercises)
// Focus: Affirmative (A), Negative (N), and Interrogative (I)
// ====================================
const verbToBeExercises: Exercise[] = [
  // Affirmative forms (1-5)
  {
    id: "a1-gram-tobe-1",
    type: "fill-blank",
    question: "I _____ a student from Costa Rica.",
    options: ["am", "is", "are"],
    correctAnswer: "am",
    explanation: "We use 'am' with 'I'. Example: I am a student.",
    difficulty: 1,
    tags: ["verb-to-be", "affirmative", "a1"]
  },
  {
    id: "a1-gram-tobe-2",
    type: "fill-blank",
    question: "She _____ my English teacher.",
    options: ["am", "is", "are"],
    correctAnswer: "is",
    explanation: "We use 'is' with he/she/it. Example: She is my teacher.",
    difficulty: 1,
    tags: ["verb-to-be", "affirmative", "a1"]
  },
  {
    id: "a1-gram-tobe-3",
    type: "fill-blank",
    question: "We _____ very happy today.",
    options: ["am", "is", "are"],
    correctAnswer: "are",
    explanation: "We use 'are' with we/you/they. Example: We are happy.",
    difficulty: 1,
    tags: ["verb-to-be", "affirmative", "a1"]
  },
  {
    id: "a1-gram-tobe-4",
    type: "fill-blank",
    question: "The dog _____ in the garden.",
    options: ["am", "is", "are"],
    correctAnswer: "is",
    explanation: "We use 'is' with singular nouns like 'the dog'. Example: The dog is in the garden.",
    difficulty: 1,
    tags: ["verb-to-be", "affirmative", "a1"]
  },
  {
    id: "a1-gram-tobe-5",
    type: "fill-blank",
    question: "You _____ my best friend.",
    options: ["am", "is", "are"],
    correctAnswer: "are",
    explanation: "We use 'are' with 'you' (singular or plural). Example: You are my friend.",
    difficulty: 1,
    tags: ["verb-to-be", "affirmative", "a1"]
  },
  // Negative forms (6-10)
  {
    id: "a1-gram-tobe-6",
    type: "fill-blank",
    question: "Change to negative: 'I am hungry.' → I _____ hungry.",
    options: ["am not", "is not", "are not"],
    correctAnswer: "am not",
    explanation: "The negative of 'I am' is 'I am not' (or 'I'm not').",
    difficulty: 1,
    tags: ["verb-to-be", "negative", "a1"]
  },
  {
    id: "a1-gram-tobe-7",
    type: "fill-blank",
    question: "Change to negative: 'They are at school.' → They _____ at school.",
    options: ["am not", "is not", "are not"],
    correctAnswer: "are not",
    explanation: "The negative of 'they are' is 'they are not' (or 'they aren't').",
    difficulty: 1,
    tags: ["verb-to-be", "negative", "a1"]
  },
  {
    id: "a1-gram-tobe-8",
    type: "fill-blank",
    question: "Change to negative: 'He is a doctor.' → He _____ a doctor.",
    options: ["am not", "is not", "are not"],
    correctAnswer: "is not",
    explanation: "The negative of 'he is' is 'he is not' (or 'he isn't').",
    difficulty: 1,
    tags: ["verb-to-be", "negative", "a1"]
  },
  {
    id: "a1-gram-tobe-9",
    type: "fill-blank",
    question: "Correct the error: 'She not is a nurse.' → _____",
    options: ["She is not a nurse", "She not a nurse", "She are not a nurse"],
    correctAnswer: "She is not a nurse",
    explanation: "The correct order is: Subject + be + not. Example: She is not a nurse.",
    difficulty: 1,
    tags: ["verb-to-be", "negative", "a1"]
  },
  {
    id: "a1-gram-tobe-10",
    type: "fill-blank",
    question: "We _____ tired.",
    options: ["am not", "is not", "are not"],
    correctAnswer: "are not",
    explanation: "We use 'are not' with 'we'. Example: We are not tired.",
    difficulty: 1,
    tags: ["verb-to-be", "negative", "a1"]
  },
  // Interrogative forms (11-15)
  {
    id: "a1-gram-tobe-11",
    type: "fill-blank",
    question: "Change to question: 'You are cold.' → _____ you cold?",
    options: ["Are", "Is", "Am"],
    correctAnswer: "Are",
    explanation: "To make a question, put 'are' before 'you'. Example: Are you cold?",
    difficulty: 1,
    tags: ["verb-to-be", "interrogative", "a1"]
  },
  {
    id: "a1-gram-tobe-12",
    type: "fill-blank",
    question: "Change to question: 'It is sunny.' → _____ it sunny?",
    options: ["Is", "Are", "Am"],
    correctAnswer: "Is",
    explanation: "To make a question, put 'is' before 'it'. Example: Is it sunny?",
    difficulty: 1,
    tags: ["verb-to-be", "interrogative", "a1"]
  },
  {
    id: "a1-gram-tobe-13",
    type: "fill-blank",
    question: "Change to question: 'They are brothers.' → _____ they brothers?",
    options: ["Are", "Is", "Am"],
    correctAnswer: "Are",
    explanation: "To make a question, put 'are' before 'they'. Example: Are they brothers?",
    difficulty: 1,
    tags: ["verb-to-be", "interrogative", "a1"]
  },
  {
    id: "a1-gram-tobe-14",
    type: "fill-blank",
    question: "Answer the question: 'Is she a student?' → Yes, she _____.",
    options: ["is", "are", "am"],
    correctAnswer: "is",
    explanation: "Short answer with 'she': Yes, she is. / No, she isn't.",
    difficulty: 1,
    tags: ["verb-to-be", "interrogative", "a1"]
  },
  {
    id: "a1-gram-tobe-15",
    type: "fill-blank",
    question: "Answer the question: 'Are they from Spain?' → No, they _____.",
    options: ["aren't", "isn't", "am not"],
    correctAnswer: "aren't",
    explanation: "Short answer with 'they': No, they aren't. (or: No, they are not.)",
    difficulty: 1,
    tags: ["verb-to-be", "interrogative", "a1"]
  },
  // Mixed practice (16-20)
  {
    id: "a1-gram-tobe-16",
    type: "fill-blank",
    question: "Unscramble: teacher / Is / he / a / ? → _____",
    options: ["Is he a teacher?", "He is a teacher?", "A teacher is he?"],
    correctAnswer: "Is he a teacher?",
    explanation: "Question word order: Is + subject + complement. Example: Is he a teacher?",
    difficulty: 1,
    tags: ["verb-to-be", "unscramble", "a1"]
  },
  {
    id: "a1-gram-tobe-17",
    type: "fill-blank",
    question: "Unscramble: not / I / am / sad / . → _____",
    options: ["I am not sad.", "I not am sad.", "Not I am sad."],
    correctAnswer: "I am not sad.",
    explanation: "Statement word order: Subject + be + not + complement. Example: I am not sad.",
    difficulty: 1,
    tags: ["verb-to-be", "unscramble", "a1"]
  },
  {
    id: "a1-gram-tobe-18",
    type: "fill-blank",
    question: "Where _____ you from?",
    options: ["are", "is", "am"],
    correctAnswer: "are",
    explanation: "We use 'are' with 'you'. Example: Where are you from?",
    difficulty: 1,
    tags: ["verb-to-be", "questions", "a1"]
  },
  {
    id: "a1-gram-tobe-19",
    type: "fill-blank",
    question: "What _____ your name?",
    options: ["is", "are", "am"],
    correctAnswer: "is",
    explanation: "'Name' is singular, so we use 'is'. Example: What is your name?",
    difficulty: 1,
    tags: ["verb-to-be", "questions", "a1"]
  },
  {
    id: "a1-gram-tobe-20",
    type: "fill-blank",
    question: "Who _____ that man?",
    options: ["is", "are", "am"],
    correctAnswer: "is",
    explanation: "'That man' is singular, so we use 'is'. Example: Who is that man?",
    difficulty: 1,
    tags: ["verb-to-be", "questions", "a1"]
  }
];

// ====================================
// THEME 2: PRESENT SIMPLE (15 Exercises)
// Focus: Routines, habits, and the 3rd person "-s"
// ====================================
const presentSimpleExercises: Exercise[] = [
  {
    id: "a1-gram-ps-1",
    type: "fill-blank",
    question: "I _____ to work every morning.",
    options: ["walk", "walks"],
    correctAnswer: "walk",
    explanation: "With 'I', we use the base form of the verb. Example: I walk to work.",
    difficulty: 1,
    tags: ["present-simple", "routine", "a1"]
  },
  {
    id: "a1-gram-ps-2",
    type: "fill-blank",
    question: "She _____ breakfast at 7:00 AM.",
    options: ["eat", "eats"],
    correctAnswer: "eats",
    explanation: "With he/she/it, we add -s to the verb. Example: She eats breakfast.",
    difficulty: 1,
    tags: ["present-simple", "third-person", "a1"]
  },
  {
    id: "a1-gram-ps-3",
    type: "fill-blank",
    question: "He _____ English on Mondays.",
    options: ["study", "studies"],
    correctAnswer: "studies",
    explanation: "Verbs ending in consonant + y change to -ies with he/she/it. Example: He studies.",
    difficulty: 1,
    tags: ["present-simple", "third-person", "a1"]
  },
  {
    id: "a1-gram-ps-4",
    type: "fill-blank",
    question: "They _____ soccer on weekends.",
    options: ["play", "plays"],
    correctAnswer: "play",
    explanation: "With 'they', we use the base form. Example: They play soccer.",
    difficulty: 1,
    tags: ["present-simple", "habit", "a1"]
  },
  {
    id: "a1-gram-ps-5",
    type: "fill-blank",
    question: "I _____ like coffee.",
    options: ["don't", "doesn't"],
    correctAnswer: "don't",
    explanation: "With I/you/we/they, we use 'don't' for negatives. Example: I don't like coffee.",
    difficulty: 1,
    tags: ["present-simple", "negative", "a1"]
  },
  {
    id: "a1-gram-ps-6",
    type: "fill-blank",
    question: "She _____ live in Alajuela.",
    options: ["don't", "doesn't"],
    correctAnswer: "doesn't",
    explanation: "With he/she/it, we use 'doesn't' for negatives. Example: She doesn't live in Alajuela.",
    difficulty: 1,
    tags: ["present-simple", "negative", "a1"]
  },
  {
    id: "a1-gram-ps-7",
    type: "fill-blank",
    question: "_____ you speak English?",
    options: ["Do", "Does"],
    correctAnswer: "Do",
    explanation: "With I/you/we/they, we use 'Do' for questions. Example: Do you speak English?",
    difficulty: 1,
    tags: ["present-simple", "question", "a1"]
  },
  {
    id: "a1-gram-ps-8",
    type: "fill-blank",
    question: "_____ he drive a car?",
    options: ["Do", "Does"],
    correctAnswer: "Does",
    explanation: "With he/she/it, we use 'Does' for questions. Example: Does he drive a car?",
    difficulty: 1,
    tags: ["present-simple", "question", "a1"]
  },
  {
    id: "a1-gram-ps-9",
    type: "fill-blank",
    question: "Correct the error: 'He play the guitar.' → _____",
    options: ["He plays the guitar.", "He playing the guitar.", "He play guitar."],
    correctAnswer: "He plays the guitar.",
    explanation: "With 'he', we need to add -s: He plays the guitar.",
    difficulty: 1,
    tags: ["present-simple", "correction", "a1"]
  },
  {
    id: "a1-gram-ps-10",
    type: "fill-blank",
    question: "Correct the error: 'She do not like tea.' → _____",
    options: ["She does not like tea.", "She don't like tea.", "She not like tea."],
    correctAnswer: "She does not like tea.",
    explanation: "With 'she', we use 'does not' (or 'doesn't'): She does not like tea.",
    difficulty: 1,
    tags: ["present-simple", "correction", "a1"]
  },
  {
    id: "a1-gram-ps-11",
    type: "fill-blank",
    question: "Unscramble: work / I / a / in / office / . → _____",
    options: ["I work in a office.", "I work in an office.", "In a office I work."],
    correctAnswer: "I work in an office.",
    explanation: "Correct sentence: I work in an office. (Note: 'an' before vowel sounds)",
    difficulty: 1,
    tags: ["present-simple", "unscramble", "a1"]
  },
  {
    id: "a1-gram-ps-12",
    type: "fill-blank",
    question: "Unscramble: drink / you / water / Do / ? → _____",
    options: ["Do you drink water?", "You do drink water?", "Drink you do water?"],
    correctAnswer: "Do you drink water?",
    explanation: "Question word order: Do + subject + verb. Example: Do you drink water?",
    difficulty: 1,
    tags: ["present-simple", "unscramble", "a1"]
  },
  {
    id: "a1-gram-ps-13",
    type: "fill-blank",
    question: "My brother _____ TV every night.",
    options: ["watch", "watches"],
    correctAnswer: "watches",
    explanation: "Verbs ending in -ch add -es with he/she/it. Example: He watches TV.",
    difficulty: 1,
    tags: ["present-simple", "third-person", "a1"]
  },
  {
    id: "a1-gram-ps-14",
    type: "fill-blank",
    question: "We _____ in a big house.",
    options: ["live", "lives"],
    correctAnswer: "live",
    explanation: "With 'we', we use the base form. Example: We live in a big house.",
    difficulty: 1,
    tags: ["present-simple", "routine", "a1"]
  },
  {
    id: "a1-gram-ps-15",
    type: "fill-blank",
    question: "The train _____ at 8:00.",
    options: ["leave", "leaves"],
    correctAnswer: "leaves",
    explanation: "'The train' is singular (it), so we add -s. Example: The train leaves at 8:00.",
    difficulty: 1,
    tags: ["present-simple", "schedule", "a1"]
  }
];

// ====================================
// THEME 3: PRESENT CONTINUOUS (15 Exercises)
// Focus: Actions happening right now
// ====================================
const presentContinuousExercises: Exercise[] = [
  {
    id: "a1-gram-pc-1",
    type: "fill-blank",
    question: "I am _____ a book right now.",
    options: ["read", "reading"],
    correctAnswer: "reading",
    explanation: "Present continuous uses be + verb-ing. Example: I am reading.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  },
  {
    id: "a1-gram-pc-2",
    type: "fill-blank",
    question: "You are _____ to music.",
    options: ["listen", "listening"],
    correctAnswer: "listening",
    explanation: "Present continuous: am/is/are + verb-ing. Example: You are listening.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  },
  {
    id: "a1-gram-pc-3",
    type: "fill-blank",
    question: "He is _____ his car to work.",
    options: ["drive", "driving"],
    correctAnswer: "driving",
    explanation: "Verbs ending in -e drop the -e and add -ing. Example: drive → driving.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  },
  {
    id: "a1-gram-pc-4",
    type: "fill-blank",
    question: "Look! It is _____ outside.",
    options: ["rain", "raining"],
    correctAnswer: "raining",
    explanation: "We use present continuous for actions happening now. Example: It is raining.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  },
  {
    id: "a1-gram-pc-5",
    type: "fill-blank",
    question: "We are _____ dinner at the moment.",
    options: ["eat", "eating"],
    correctAnswer: "eating",
    explanation: "'At the moment' signals present continuous. Example: We are eating.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  },
  {
    id: "a1-gram-pc-6",
    type: "fill-blank",
    question: "I am not _____ today.",
    options: ["work", "working"],
    correctAnswer: "working",
    explanation: "Negative: am/is/are + not + verb-ing. Example: I am not working.",
    difficulty: 1,
    tags: ["present-continuous", "negative", "a1"]
  },
  {
    id: "a1-gram-pc-7",
    type: "fill-blank",
    question: "They are not _____ now.",
    options: ["sleep", "sleeping"],
    correctAnswer: "sleeping",
    explanation: "Negative with 'they': They are not sleeping.",
    difficulty: 1,
    tags: ["present-continuous", "negative", "a1"]
  },
  {
    id: "a1-gram-pc-8",
    type: "fill-blank",
    question: "_____ you _____ for the test?",
    options: ["Are / studying", "Is / studying", "Do / study"],
    correctAnswer: "Are / studying",
    explanation: "Question: Are + you + verb-ing? Example: Are you studying?",
    difficulty: 1,
    tags: ["present-continuous", "interrogative", "a1"]
  },
  {
    id: "a1-gram-pc-9",
    type: "fill-blank",
    question: "Is she _____ pizza?",
    options: ["cook", "cooking"],
    correctAnswer: "cooking",
    explanation: "Question with 'she': Is she + verb-ing? Example: Is she cooking?",
    difficulty: 1,
    tags: ["present-continuous", "interrogative", "a1"]
  },
  {
    id: "a1-gram-pc-10",
    type: "fill-blank",
    question: "Correct the error: 'I reading a book.' → _____",
    options: ["I am reading a book.", "I is reading a book.", "I reading book."],
    correctAnswer: "I am reading a book.",
    explanation: "Present continuous needs 'be' verb: I am reading a book.",
    difficulty: 1,
    tags: ["present-continuous", "correction", "a1"]
  },
  {
    id: "a1-gram-pc-11",
    type: "fill-blank",
    question: "Correct the error: 'They is playing.' → _____",
    options: ["They are playing.", "They is play.", "They playing."],
    correctAnswer: "They are playing.",
    explanation: "With 'they', we use 'are': They are playing.",
    difficulty: 1,
    tags: ["present-continuous", "correction", "a1"]
  },
  {
    id: "a1-gram-pc-12",
    type: "fill-blank",
    question: "Unscramble: now / are / running / They / . → _____",
    options: ["They are running now.", "Now they running are.", "Running they are now."],
    correctAnswer: "They are running now.",
    explanation: "Correct word order: Subject + be + verb-ing + time. They are running now.",
    difficulty: 1,
    tags: ["present-continuous", "unscramble", "a1"]
  },
  {
    id: "a1-gram-pc-13",
    type: "fill-blank",
    question: "Unscramble: is / What / doing / she / ? → _____",
    options: ["What is she doing?", "She is what doing?", "What doing is she?"],
    correctAnswer: "What is she doing?",
    explanation: "Question word order: What + is + she + doing? Example: What is she doing?",
    difficulty: 1,
    tags: ["present-continuous", "unscramble", "a1"]
  },
  {
    id: "a1-gram-pc-14",
    type: "fill-blank",
    question: "Listen! The bird _____.",
    options: ["sing", "is singing", "sings"],
    correctAnswer: "is singing",
    explanation: "'Listen!' indicates something happening now → present continuous: The bird is singing.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  },
  {
    id: "a1-gram-pc-15",
    type: "fill-blank",
    question: "I _____ an email to my boss.",
    options: ["write", "am writing", "writes"],
    correctAnswer: "am writing",
    explanation: "Action in progress now: I am writing an email.",
    difficulty: 1,
    tags: ["present-continuous", "affirmative", "a1"]
  }
];

// ====================================
// THEME 4: ARTICLES AND PRONOUNS (50 Exercises)
// Focus: A/An, The, Personal Pronouns (I, You, He, She, It, We, They)
// ====================================
const articlesAndPronounsExercises: Exercise[] = [
  // Part 1: Articles (A / An) - Exercises 1-10
  {
    id: "a1-gram-art-1",
    type: "fill-blank",
    question: "I have _____ apple.",
    options: ["a", "an"],
    correctAnswer: "an",
    explanation: "We use 'an' before words that start with a vowel sound. Example: an apple.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-2",
    type: "fill-blank",
    question: "She is _____ teacher.",
    options: ["a", "an"],
    correctAnswer: "a",
    explanation: "We use 'a' before words that start with a consonant sound. Example: a teacher.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-3",
    type: "fill-blank",
    question: "He has _____ orange car.",
    options: ["a", "an"],
    correctAnswer: "an",
    explanation: "'Orange' starts with a vowel sound, so we use 'an'. Example: an orange car.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-4",
    type: "fill-blank",
    question: "This is _____ book.",
    options: ["a", "an"],
    correctAnswer: "a",
    explanation: "'Book' starts with a consonant sound, so we use 'a'. Example: a book.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-5",
    type: "fill-blank",
    question: "I want _____ egg for breakfast.",
    options: ["a", "an"],
    correctAnswer: "an",
    explanation: "'Egg' starts with a vowel sound, so we use 'an'. Example: an egg.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-6",
    type: "fill-blank",
    question: "It is _____ beautiful day.",
    options: ["a", "an"],
    correctAnswer: "a",
    explanation: "'Beautiful' starts with a consonant sound, so we use 'a'. Example: a beautiful day.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-7",
    type: "fill-blank",
    question: "She is _____ artist.",
    options: ["a", "an"],
    correctAnswer: "an",
    explanation: "'Artist' starts with a vowel sound, so we use 'an'. Example: an artist.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-8",
    type: "fill-blank",
    question: "I see _____ elephant at the zoo.",
    options: ["a", "an"],
    correctAnswer: "an",
    explanation: "'Elephant' starts with a vowel sound, so we use 'an'. Example: an elephant.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-9",
    type: "fill-blank",
    question: "He is _____ doctor.",
    options: ["a", "an"],
    correctAnswer: "a",
    explanation: "'Doctor' starts with a consonant sound, so we use 'a'. Example: a doctor.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  {
    id: "a1-gram-art-10",
    type: "fill-blank",
    question: "I need _____ umbrella.",
    options: ["a", "an"],
    correctAnswer: "an",
    explanation: "'Umbrella' starts with a vowel sound, so we use 'an'. Example: an umbrella.",
    difficulty: 1,
    tags: ["articles", "a-an", "a1"]
  },
  // Part 2: Articles (A / An / The) - Exercises 11-20
  {
    id: "a1-gram-art-11",
    type: "fill-blank",
    question: "Look at _____ moon!",
    options: ["a", "the"],
    correctAnswer: "the",
    explanation: "We use 'the' for unique things. There is only one moon. Example: the moon.",
    difficulty: 1,
    tags: ["articles", "the", "a1"]
  },
  {
    id: "a1-gram-art-12",
    type: "fill-blank",
    question: "I live in _____ house. _____ house is white.",
    options: ["a / The", "the / A", "a / A"],
    correctAnswer: "a / The",
    explanation: "First mention: 'a house'. Second mention (specific): 'The house'.",
    difficulty: 1,
    tags: ["articles", "a-the", "a1"]
  },
  {
    id: "a1-gram-art-13",
    type: "fill-blank",
    question: "_____ sun is very hot today.",
    options: ["A", "The"],
    correctAnswer: "The",
    explanation: "We use 'the' for unique things. There is only one sun. Example: The sun.",
    difficulty: 1,
    tags: ["articles", "the", "a1"]
  },
  {
    id: "a1-gram-art-14",
    type: "fill-blank",
    question: "Open _____ door, please.",
    options: ["a", "the"],
    correctAnswer: "the",
    explanation: "We use 'the' when both speaker and listener know which door. Example: the door.",
    difficulty: 1,
    tags: ["articles", "the", "a1"]
  },
  {
    id: "a1-gram-art-15",
    type: "fill-blank",
    question: "I have _____ cat. _____ cat is black.",
    options: ["a / The", "the / A", "an / The"],
    correctAnswer: "a / The",
    explanation: "First mention: 'a cat'. Second mention (specific): 'The cat'.",
    difficulty: 1,
    tags: ["articles", "a-the", "a1"]
  },
  {
    id: "a1-gram-art-16",
    type: "multiple-choice",
    question: "True or False: We use 'An' with the word 'Dog'.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "False. 'Dog' starts with a consonant, so we use 'a dog'.",
    difficulty: 1,
    tags: ["articles", "true-false", "a1"]
  },
  {
    id: "a1-gram-art-17",
    type: "multiple-choice",
    question: "True or False: We use 'A' with the word 'Ice cream'.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "False. 'Ice' starts with a vowel sound, so we use 'an ice cream'.",
    difficulty: 1,
    tags: ["articles", "true-false", "a1"]
  },
  {
    id: "a1-gram-art-18",
    type: "fill-blank",
    question: "Correct the error: 'I want the apple.' (if there are many apples) → I want _____ apple.",
    options: ["an", "the", "a"],
    correctAnswer: "an",
    explanation: "When it's not specific (any apple), we use 'an apple'.",
    difficulty: 1,
    tags: ["articles", "correction", "a1"]
  },
  {
    id: "a1-gram-art-19",
    type: "fill-blank",
    question: "Correct the error: 'He is a actor.' → He is _____ actor.",
    options: ["an", "a", "the"],
    correctAnswer: "an",
    explanation: "'Actor' starts with a vowel sound, so we use 'an actor'.",
    difficulty: 1,
    tags: ["articles", "correction", "a1"]
  },
  {
    id: "a1-gram-art-20",
    type: "fill-blank",
    question: "_____ capital of Costa Rica is San José.",
    options: ["The", "A", "An"],
    correctAnswer: "The",
    explanation: "We use 'the' for unique or specific things. Example: The capital of Costa Rica.",
    difficulty: 1,
    tags: ["articles", "the", "a1"]
  },
  // Part 3: Personal Pronouns (Subject) - Exercises 21-30
  {
    id: "a1-gram-pron-21",
    type: "fill-blank",
    question: "Maria is a student. → _____ is a student.",
    options: ["She", "He", "It"],
    correctAnswer: "She",
    explanation: "Maria is a woman, so we use 'She'. Example: She is a student.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-22",
    type: "fill-blank",
    question: "John is a doctor. → _____ is a doctor.",
    options: ["He", "She", "It"],
    correctAnswer: "He",
    explanation: "John is a man, so we use 'He'. Example: He is a doctor.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-23",
    type: "fill-blank",
    question: "The car is blue. → _____ is blue.",
    options: ["It", "He", "She"],
    correctAnswer: "It",
    explanation: "For things and animals (general), we use 'It'. Example: It is blue.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-24",
    type: "fill-blank",
    question: "John and I are friends. → _____ are friends.",
    options: ["We", "They", "You"],
    correctAnswer: "We",
    explanation: "'John and I' = we. Example: We are friends.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-25",
    type: "fill-blank",
    question: "The students are in class. → _____ are in class.",
    options: ["They", "We", "It"],
    correctAnswer: "They",
    explanation: "'The students' (plural) = they. Example: They are in class.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-26",
    type: "fill-blank",
    question: "The dog is hungry. → _____ is hungry.",
    options: ["It", "He", "They"],
    correctAnswer: "It",
    explanation: "For animals (general), we use 'It'. Example: It is hungry.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-27",
    type: "fill-blank",
    question: "My mother is nice. → _____ is nice.",
    options: ["She", "He", "It"],
    correctAnswer: "She",
    explanation: "'My mother' is female, so we use 'She'. Example: She is nice.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-28",
    type: "fill-blank",
    question: "My father and brother are tall. → _____ are tall.",
    options: ["They", "We", "He"],
    correctAnswer: "They",
    explanation: "'My father and brother' (plural) = they. Example: They are tall.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-29",
    type: "fill-blank",
    question: "You and your friend are happy. → _____ are happy.",
    options: ["You", "We", "They"],
    correctAnswer: "You",
    explanation: "'You and your friend' is addressed as 'You' (plural). Example: You are happy.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-30",
    type: "fill-blank",
    question: "How are _____?",
    options: ["you", "I"],
    correctAnswer: "you",
    explanation: "When asking about someone's wellbeing, we use 'you'. Example: How are you?",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  // Part 4: Pronoun Logic & Mixed Review - Exercises 31-40
  {
    id: "a1-gram-pron-31",
    type: "fill-blank",
    question: "Match: 'The table' → _____",
    options: ["It", "He"],
    correctAnswer: "It",
    explanation: "'The table' is a thing, so we use 'It'.",
    difficulty: 1,
    tags: ["pronouns", "matching", "a1"]
  },
  {
    id: "a1-gram-pron-32",
    type: "fill-blank",
    question: "Match: 'The girls' → _____",
    options: ["They", "She"],
    correctAnswer: "They",
    explanation: "'The girls' is plural, so we use 'They'.",
    difficulty: 1,
    tags: ["pronouns", "matching", "a1"]
  },
  {
    id: "a1-gram-pron-33",
    type: "fill-blank",
    question: "Match: 'The boy' → _____",
    options: ["He", "She"],
    correctAnswer: "He",
    explanation: "'The boy' is male, so we use 'He'.",
    difficulty: 1,
    tags: ["pronouns", "matching", "a1"]
  },
  {
    id: "a1-gram-pron-34",
    type: "fill-blank",
    question: "Match: 'The family' → _____",
    options: ["They", "It"],
    correctAnswer: "They",
    explanation: "'The family' refers to multiple people, so we typically use 'They'.",
    difficulty: 1,
    tags: ["pronouns", "matching", "a1"]
  },
  {
    id: "a1-gram-pron-35",
    type: "fill-blank",
    question: "_____ am a student.",
    options: ["I", "She"],
    correctAnswer: "I",
    explanation: "We use 'I' with 'am'. Example: I am a student.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-36",
    type: "fill-blank",
    question: "_____ are my friend.",
    options: ["You", "He"],
    correctAnswer: "You",
    explanation: "We use 'You' with 'are'. Example: You are my friend.",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-37",
    type: "fill-blank",
    question: "Is _____ a cat?",
    options: ["it", "they"],
    correctAnswer: "it",
    explanation: "For singular things/animals, we use 'it'. Example: Is it a cat?",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-38",
    type: "fill-blank",
    question: "Are _____ hungry?",
    options: ["we", "it"],
    correctAnswer: "we",
    explanation: "We use 'we' with 'are'. Example: Are we hungry?",
    difficulty: 1,
    tags: ["pronouns", "subject", "a1"]
  },
  {
    id: "a1-gram-pron-39",
    type: "fill-blank",
    question: "Correct the error: 'He are a doctor.' → _____ is a doctor.",
    options: ["He", "They", "We"],
    correctAnswer: "He",
    explanation: "'He' uses 'is', not 'are'. Correct: He is a doctor.",
    difficulty: 1,
    tags: ["pronouns", "correction", "a1"]
  },
  {
    id: "a1-gram-pron-40",
    type: "fill-blank",
    question: "Correct the error: 'It is a apple.' → It is _____ apple.",
    options: ["an", "a", "the"],
    correctAnswer: "an",
    explanation: "'Apple' starts with a vowel sound, so we use 'an'. Correct: It is an apple.",
    difficulty: 1,
    tags: ["articles", "correction", "a1"]
  },
  // Part 5: Sentence Construction - Exercises 41-50
  {
    id: "a1-gram-pron-41",
    type: "fill-blank",
    question: "Rearrange: is / She / a / nurse / . → _____",
    options: ["She is a nurse.", "A nurse is she.", "Is she a nurse."],
    correctAnswer: "She is a nurse.",
    explanation: "Correct word order: Subject + verb + article + noun. Example: She is a nurse.",
    difficulty: 1,
    tags: ["pronouns", "sentence", "a1"]
  },
  {
    id: "a1-gram-pron-42",
    type: "fill-blank",
    question: "Rearrange: The / is / sky / blue / . → _____",
    options: ["The sky is blue.", "Blue is the sky.", "Is the sky blue."],
    correctAnswer: "The sky is blue.",
    explanation: "Correct word order: The + noun + verb + adjective. Example: The sky is blue.",
    difficulty: 1,
    tags: ["articles", "sentence", "a1"]
  },
  {
    id: "a1-gram-pron-43",
    type: "fill-blank",
    question: "Rearrange: have / I / an / orange / . → _____",
    options: ["I have an orange.", "An orange I have.", "Have I an orange."],
    correctAnswer: "I have an orange.",
    explanation: "Correct word order: Subject + verb + article + noun. Example: I have an orange.",
    difficulty: 1,
    tags: ["articles", "sentence", "a1"]
  },
  {
    id: "a1-gram-pron-44",
    type: "fill-blank",
    question: "Rearrange: They / friends / are / . → _____",
    options: ["They are friends.", "Friends they are.", "Are they friends."],
    correctAnswer: "They are friends.",
    explanation: "Correct word order: Subject + verb + noun. Example: They are friends.",
    difficulty: 1,
    tags: ["pronouns", "sentence", "a1"]
  },
  {
    id: "a1-gram-pron-45",
    type: "fill-blank",
    question: "Write the missing pronoun: 'This is my sister. _____ is 20 years old.'",
    options: ["She", "He", "It"],
    correctAnswer: "She",
    explanation: "'Sister' is female, so we use 'She'. Example: She is 20 years old.",
    difficulty: 1,
    tags: ["pronouns", "context", "a1"]
  },
  {
    id: "a1-gram-pron-46",
    type: "fill-blank",
    question: "Write the missing article: 'I eat _____ banana every day.'",
    options: ["a", "an", "the"],
    correctAnswer: "a",
    explanation: "'Banana' starts with a consonant sound, so we use 'a'. Example: a banana.",
    difficulty: 1,
    tags: ["articles", "context", "a1"]
  },
  {
    id: "a1-gram-pron-47",
    type: "fill-blank",
    question: "Write the missing article: 'Where is _____ key for the car?'",
    options: ["the", "a", "an"],
    correctAnswer: "the",
    explanation: "We use 'the' for a specific key (the one for the car). Example: the key.",
    difficulty: 1,
    tags: ["articles", "context", "a1"]
  },
  {
    id: "a1-gram-pron-48",
    type: "multiple-choice",
    question: "_____ is _____ easy exercise.",
    options: ["It / an", "He / a", "They / the"],
    correctAnswer: "It / an",
    explanation: "'Easy' starts with a vowel sound, so 'an'. 'Exercise' is a thing, so 'It'. Example: It is an easy exercise.",
    difficulty: 1,
    tags: ["articles", "pronouns", "a1"]
  },
  {
    id: "a1-gram-pron-49",
    type: "multiple-choice",
    question: "_____ are _____ good students.",
    options: ["We / the", "It / a", "She / an"],
    correctAnswer: "We / the",
    explanation: "'Students' is plural → 'We are'. Using 'the' for specific students: We are the good students.",
    difficulty: 1,
    tags: ["articles", "pronouns", "a1"]
  },
  {
    id: "a1-gram-pron-50",
    type: "fill-blank",
    question: "Final Challenge: Complete with 'He', 'a', and 'doctor': _____ is _____ _____.",
    options: ["He is a doctor", "A He doctor is", "Doctor He is a"],
    correctAnswer: "He is a doctor",
    explanation: "Correct sentence: He is a doctor.",
    difficulty: 1,
    tags: ["articles", "pronouns", "challenge", "a1"]
  }
];

// Export all A1 Grammar exercises mapped to skill IDs
export const a1GrammarExercises: Record<string, Exercise[]> = {
  "a1-gram-1": verbToBeExercises,
  "a1-gram-2": presentSimpleExercises,
  "a1-gram-3": presentContinuousExercises,
  "a1-gram-4": articlesAndPronounsExercises
};

// Export individual arrays for direct access
export {
  verbToBeExercises,
  presentSimpleExercises,
  presentContinuousExercises,
  articlesAndPronounsExercises
};

// Get all A1 Grammar exercises as a flat array
export const getAllA1GrammarExercises = (): Exercise[] => {
  return [
    ...verbToBeExercises,
    ...presentSimpleExercises,
    ...presentContinuousExercises,
    ...articlesAndPronounsExercises
  ];
};

// Get exercise count stats
export const a1GrammarStats = {
  total: verbToBeExercises.length + presentSimpleExercises.length + presentContinuousExercises.length + articlesAndPronounsExercises.length,
  verbToBe: verbToBeExercises.length,
  presentSimple: presentSimpleExercises.length,
  presentContinuous: presentContinuousExercises.length,
  articlesPronouns: articlesAndPronounsExercises.length
};
