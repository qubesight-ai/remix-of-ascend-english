// A1 Level Speaking Exercises - 3 Core Themes
// Theme 1: Introduce Yourself (20 exercises)
// Theme 2: Greetings and Farewells (15 exercises)
// Theme 3: Ask for Basic Things (15 exercises)

import { Exercise } from "./exercisesData";

// ====================================
// THEME 1: INTRODUCE YOURSELF (20 Exercises)
// Focus: Name, age, nationality, profession
// ====================================
const introduceYourselfExercises: Exercise[] = [
  // Part 1: Information Exchange (1-10)
  {
    id: "a1-speak-intro-1",
    type: "fill-blank",
    question: "My _____ is Ernesto.",
    options: ["name", "surname", "age", "job"],
    correctAnswer: "name",
    explanation: "We use 'My name is...' to introduce ourselves. Example: My name is Ernesto.",
    difficulty: 1,
    tags: ["introduction", "name", "a1"]
  },
  {
    id: "a1-speak-intro-2",
    type: "fill-blank",
    question: "I am 30 _____ old.",
    options: ["years", "ages", "year", "old"],
    correctAnswer: "years",
    explanation: "We say 'X years old' to express age. Example: I am 30 years old.",
    difficulty: 1,
    tags: ["introduction", "age", "a1"]
  },
  {
    id: "a1-speak-intro-3",
    type: "fill-blank",
    question: "I am _____ Costa Rica.",
    options: ["from", "of", "in", "at"],
    correctAnswer: "from",
    explanation: "We use 'from' with countries of origin. Example: I am from Costa Rica.",
    difficulty: 1,
    tags: ["introduction", "nationality", "a1"]
  },
  {
    id: "a1-speak-intro-4",
    type: "fill-blank",
    question: "I am _____ entrepreneur.",
    options: ["an", "a", "the", "one"],
    correctAnswer: "an",
    explanation: "'Entrepreneur' starts with a vowel sound, so we use 'an'. Example: I am an entrepreneur.",
    difficulty: 1,
    tags: ["introduction", "profession", "a1"]
  },
  {
    id: "a1-speak-intro-5",
    type: "fill-blank",
    question: "Question: 'What is your name?' → 'My name _____ _____.'",
    options: ["is Maria", "am Maria", "are Maria", "be Maria"],
    correctAnswer: "is Maria",
    explanation: "We answer: 'My name is [Name]'. Example: My name is Maria.",
    difficulty: 1,
    tags: ["introduction", "question-answer", "a1"]
  },
  {
    id: "a1-speak-intro-6",
    type: "fill-blank",
    question: "Question: 'How old are you?' → 'I am _____.'",
    options: ["25 years old", "25 years", "have 25 years", "25 old"],
    correctAnswer: "25 years old",
    explanation: "Complete answer: 'I am [number] years old'. Example: I am 25 years old.",
    difficulty: 1,
    tags: ["introduction", "age", "a1"]
  },
  {
    id: "a1-speak-intro-7",
    type: "fill-blank",
    question: "Question: 'Where are you from?' → 'I am from _____.'",
    options: ["Mexico", "Mexican", "the Mexico", "a Mexico"],
    correctAnswer: "Mexico",
    explanation: "We use the country name. Example: I am from Mexico.",
    difficulty: 1,
    tags: ["introduction", "nationality", "a1"]
  },
  {
    id: "a1-speak-intro-8",
    type: "fill-blank",
    question: "Question: 'What do you do?' → 'I am a _____.'",
    options: ["teacher", "teach", "teaching", "teaches"],
    correctAnswer: "teacher",
    explanation: "'What do you do?' asks about profession. Answer with job noun: I am a teacher.",
    difficulty: 1,
    tags: ["introduction", "profession", "a1"]
  },
  {
    id: "a1-speak-intro-9",
    type: "fill-blank",
    question: "Unscramble: name / What / your / is / ? → _____",
    options: ["What is your name?", "Your name is what?", "What your name is?", "Is what your name?"],
    correctAnswer: "What is your name?",
    explanation: "Question word order: What + is + your + name? Example: What is your name?",
    difficulty: 1,
    tags: ["introduction", "unscramble", "a1"]
  },
  {
    id: "a1-speak-intro-10",
    type: "fill-blank",
    question: "Unscramble: am / I / 25 / old / years / . → _____",
    options: ["I am 25 years old.", "I years am 25 old.", "25 years I am old.", "Am I 25 years old."],
    correctAnswer: "I am 25 years old.",
    explanation: "Statement order: I + am + [age] + years old. Example: I am 25 years old.",
    difficulty: 1,
    tags: ["introduction", "unscramble", "a1"]
  },
  // Part 2: Roleplay Scenarios (11-20)
  {
    id: "a1-speak-intro-11",
    type: "fill-blank",
    question: "Scenario: You meet a new business partner. Say: 'Hi, I am [Name], _____ to meet you.'",
    options: ["nice", "good", "happy", "well"],
    correctAnswer: "nice",
    explanation: "'Nice to meet you' is the standard phrase when meeting someone new.",
    difficulty: 1,
    tags: ["introduction", "roleplay", "a1"]
  },
  {
    id: "a1-speak-intro-12",
    type: "fill-blank",
    question: "Scenario: Tell someone your nationality: 'I am _____.'",
    options: ["Costa Rican", "Costa Rica", "from Costa Rican", "the Costa Rica"],
    correctAnswer: "Costa Rican",
    explanation: "Nationality adjective (Costa Rican) not country name. Example: I am Costa Rican.",
    difficulty: 1,
    tags: ["introduction", "nationality", "a1"]
  },
  {
    id: "a1-speak-intro-13",
    type: "fill-blank",
    question: "Scenario: Tell someone your job: 'I work _____ a designer.'",
    options: ["as", "like", "for", "in"],
    correctAnswer: "as",
    explanation: "'Work as' + job title. Example: I work as a designer.",
    difficulty: 1,
    tags: ["introduction", "profession", "a1"]
  },
  {
    id: "a1-speak-intro-14",
    type: "fill-blank",
    question: "Correction: 'I have 20 years old.' → Correct: 'I _____ 20 years old.'",
    options: ["am", "have", "be", "is"],
    correctAnswer: "am",
    explanation: "In English, we use 'am/is/are' for age, NOT 'have'. Correct: I am 20 years old.",
    difficulty: 1,
    tags: ["introduction", "correction", "a1"]
  },
  {
    id: "a1-speak-intro-15",
    type: "fill-blank",
    question: "Correction: 'I from Costa Rica.' → Correct: 'I _____ from Costa Rica.'",
    options: ["am", "is", "be", "have"],
    correctAnswer: "am",
    explanation: "We need the verb 'am' with 'I'. Correct: I am from Costa Rica.",
    difficulty: 1,
    tags: ["introduction", "correction", "a1"]
  },
  {
    id: "a1-speak-intro-16",
    type: "fill-blank",
    question: "Match 'Nationality' → _____",
    options: ["Costa Rican", "Costa Rica"],
    correctAnswer: "Costa Rican",
    explanation: "'Costa Rican' is the nationality (adjective). 'Costa Rica' is the country (noun).",
    difficulty: 1,
    tags: ["introduction", "matching", "a1"]
  },
  {
    id: "a1-speak-intro-17",
    type: "fill-blank",
    question: "Match 'Country' → _____",
    options: ["Costa Rica", "Costa Rican"],
    correctAnswer: "Costa Rica",
    explanation: "'Costa Rica' is the country name. 'Costa Rican' is the nationality.",
    difficulty: 1,
    tags: ["introduction", "matching", "a1"]
  },
  {
    id: "a1-speak-intro-18",
    type: "fill-blank",
    question: "Logic: If you are from Italy, you are _____.",
    options: ["Italian", "Italy", "Italiano", "Italyan"],
    correctAnswer: "Italian",
    explanation: "Country → Nationality: Italy → Italian.",
    difficulty: 1,
    tags: ["introduction", "logic", "a1"]
  },
  {
    id: "a1-speak-intro-19",
    type: "fill-blank",
    question: "Logic: If you are from the USA, you are _____.",
    options: ["American", "USA", "United States", "US"],
    correctAnswer: "American",
    explanation: "Country → Nationality: USA/United States → American.",
    difficulty: 1,
    tags: ["introduction", "logic", "a1"]
  },
  {
    id: "a1-speak-intro-20",
    type: "multiple-choice",
    question: "Complete the Bio: 'Hi! I'm Carlos. I'm 28. I'm from Spain and I'm a chef.' What is Carlos's nationality?",
    options: ["Spanish", "Spain", "Spaniard", "Español"],
    correctAnswer: "Spanish",
    explanation: "Carlos is from Spain, so his nationality is Spanish.",
    difficulty: 1,
    tags: ["introduction", "comprehension", "a1"]
  }
];

// ====================================
// THEME 2: GREETINGS AND FAREWELLS (15 Exercises)
// Focus: Hello, goodbye, nice to meet you
// ====================================
const greetingsAndFarewellsExercises: Exercise[] = [
  {
    id: "a1-speak-greet-1",
    type: "fill-blank",
    question: "Greeting: What do you say at 8:00 AM? Good _____",
    options: ["morning", "afternoon", "evening", "night"],
    correctAnswer: "morning",
    explanation: "8:00 AM is morning time. We say 'Good morning' until about noon.",
    difficulty: 1,
    tags: ["greetings", "time", "a1"]
  },
  {
    id: "a1-speak-greet-2",
    type: "fill-blank",
    question: "Greeting: What do you say at 2:00 PM? Good _____",
    options: ["afternoon", "morning", "evening", "night"],
    correctAnswer: "afternoon",
    explanation: "2:00 PM is afternoon. We say 'Good afternoon' from noon to about 5-6 PM.",
    difficulty: 1,
    tags: ["greetings", "time", "a1"]
  },
  {
    id: "a1-speak-greet-3",
    type: "fill-blank",
    question: "Greeting: What do you say at 7:00 PM? Good _____",
    options: ["evening", "night", "afternoon", "morning"],
    correctAnswer: "evening",
    explanation: "7:00 PM is evening. We say 'Good evening' from about 5-6 PM onwards.",
    difficulty: 1,
    tags: ["greetings", "time", "a1"]
  },
  {
    id: "a1-speak-greet-4",
    type: "fill-blank",
    question: "Farewell: What do you say when leaving a party? _____",
    options: ["Goodbye", "Good morning", "Hello", "Good evening"],
    correctAnswer: "Goodbye",
    explanation: "When leaving, we say 'Goodbye' or 'Bye'.",
    difficulty: 1,
    tags: ["farewells", "a1"]
  },
  {
    id: "a1-speak-greet-5",
    type: "fill-blank",
    question: "Farewell: What do you say right before sleeping? Good _____",
    options: ["night", "evening", "bye", "morning"],
    correctAnswer: "night",
    explanation: "'Good night' is said when going to sleep or leaving late in the evening.",
    difficulty: 1,
    tags: ["farewells", "a1"]
  },
  {
    id: "a1-speak-greet-6",
    type: "fill-blank",
    question: "Formal: 'It is a pleasure to meet you.' → Nice to _____ you.",
    options: ["meet", "see", "know", "greet"],
    correctAnswer: "meet",
    explanation: "'Nice to meet you' is the standard phrase when first meeting someone.",
    difficulty: 1,
    tags: ["greetings", "formal", "a1"]
  },
  {
    id: "a1-speak-greet-7",
    type: "fill-blank",
    question: "Response: 'How are you?' → 'I am _____, thank you.'",
    options: ["fine", "good fine", "thank", "yes"],
    correctAnswer: "fine",
    explanation: "Common response: 'I am fine, thank you.' or 'I'm good, thanks.'",
    difficulty: 1,
    tags: ["greetings", "response", "a1"]
  },
  {
    id: "a1-speak-greet-8",
    type: "fill-blank",
    question: "Response: 'Nice to meet you.' → 'Nice to meet you, _____.'",
    options: ["too", "also", "same", "yes"],
    correctAnswer: "too",
    explanation: "We respond: 'Nice to meet you, too.' meaning 'same to you'.",
    difficulty: 1,
    tags: ["greetings", "response", "a1"]
  },
  {
    id: "a1-speak-greet-9",
    type: "fill-blank",
    question: "Unscramble: see / later / You / . → _____",
    options: ["See you later.", "You see later.", "Later see you.", "You later see."],
    correctAnswer: "See you later.",
    explanation: "Correct farewell: 'See you later.' (informal goodbye)",
    difficulty: 1,
    tags: ["farewells", "unscramble", "a1"]
  },
  {
    id: "a1-speak-greet-10",
    type: "fill-blank",
    question: "Unscramble: going / I / am / now / . / Goodbye! → _____",
    options: ["I am going now. Goodbye!", "Going I am now. Goodbye!", "Now I going am. Goodbye!", "Am I going now. Goodbye!"],
    correctAnswer: "I am going now. Goodbye!",
    explanation: "Correct sentence: 'I am going now. Goodbye!'",
    difficulty: 1,
    tags: ["farewells", "unscramble", "a1"]
  },
  {
    id: "a1-speak-greet-11",
    type: "multiple-choice",
    question: "True or False: 'What's up?' is a formal greeting.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "False. 'What's up?' is informal/casual. Formal: 'How do you do?' or 'How are you?'",
    difficulty: 1,
    tags: ["greetings", "formal-informal", "a1"]
  },
  {
    id: "a1-speak-greet-12",
    type: "multiple-choice",
    question: "True or False: 'Goodbye' and 'Bye' mean the same thing.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. 'Bye' is just a shorter, more casual form of 'Goodbye'.",
    difficulty: 1,
    tags: ["farewells", "true-false", "a1"]
  },
  {
    id: "a1-speak-greet-13",
    type: "fill-blank",
    question: "Logic: 'Have a nice day!' → Response: 'You _____!'",
    options: ["too", "also", "same", "yes"],
    correctAnswer: "too",
    explanation: "We respond: 'You too!' meaning 'I wish you the same'.",
    difficulty: 1,
    tags: ["greetings", "response", "a1"]
  },
  {
    id: "a1-speak-greet-14",
    type: "fill-blank",
    question: "Match: Morning → _____",
    options: ["Good morning", "Good night", "Good afternoon", "Good evening"],
    correctAnswer: "Good morning",
    explanation: "Morning greeting: 'Good morning'.",
    difficulty: 1,
    tags: ["greetings", "matching", "a1"]
  },
  {
    id: "a1-speak-greet-15",
    type: "fill-blank",
    question: "Match: Night → _____",
    options: ["Good night", "Good morning", "Good afternoon", "Good evening"],
    correctAnswer: "Good night",
    explanation: "'Good night' is used when going to sleep or as a late evening farewell.",
    difficulty: 1,
    tags: ["farewells", "matching", "a1"]
  }
];

// ====================================
// THEME 3: ASK FOR BASIC THINGS (15 Exercises)
// Focus: "Can I have...?", "Where is...?"
// ====================================
const askForBasicThingsExercises: Exercise[] = [
  {
    id: "a1-speak-ask-1",
    type: "fill-blank",
    question: "Request: '_____ I have a glass of water, please?'",
    options: ["Can", "Do", "Am", "Is"],
    correctAnswer: "Can",
    explanation: "'Can I have...?' is used to politely request something.",
    difficulty: 1,
    tags: ["requests", "can", "a1"]
  },
  {
    id: "a1-speak-ask-2",
    type: "fill-blank",
    question: "Request: 'Can I _____ a menu, please?'",
    options: ["have", "eat", "take", "get"],
    correctAnswer: "have",
    explanation: "'Can I have...?' is the standard request phrase. Example: Can I have a menu?",
    difficulty: 1,
    tags: ["requests", "have", "a1"]
  },
  {
    id: "a1-speak-ask-3",
    type: "fill-blank",
    question: "Request: 'I _____ like a coffee, please.'",
    options: ["would", "want", "am", "have"],
    correctAnswer: "would",
    explanation: "'I would like...' is a polite way to order. Example: I would like a coffee, please.",
    difficulty: 1,
    tags: ["requests", "would-like", "a1"]
  },
  {
    id: "a1-speak-ask-4",
    type: "fill-blank",
    question: "Location: '_____ is the bathroom?'",
    options: ["Where", "What", "Who", "How"],
    correctAnswer: "Where",
    explanation: "'Where' asks about location. Example: Where is the bathroom?",
    difficulty: 1,
    tags: ["location", "where", "a1"]
  },
  {
    id: "a1-speak-ask-5",
    type: "fill-blank",
    question: "Location: 'Where _____ the exit?'",
    options: ["is", "are", "am", "be"],
    correctAnswer: "is",
    explanation: "'The exit' is singular, so we use 'is'. Example: Where is the exit?",
    difficulty: 1,
    tags: ["location", "is-are", "a1"]
  },
  {
    id: "a1-speak-ask-6",
    type: "fill-blank",
    question: "Location: 'Where is the nearest _____?'",
    options: ["bank", "money", "pay", "dollars"],
    correctAnswer: "bank",
    explanation: "We ask for a place/location. Example: Where is the nearest bank?",
    difficulty: 1,
    tags: ["location", "places", "a1"]
  },
  {
    id: "a1-speak-ask-7",
    type: "fill-blank",
    question: "Politeness: Always add this word at the end of a request: _____",
    options: ["please", "thank", "sorry", "excuse"],
    correctAnswer: "please",
    explanation: "'Please' makes requests polite. Example: Can I have a coffee, please?",
    difficulty: 1,
    tags: ["politeness", "a1"]
  },
  {
    id: "a1-speak-ask-8",
    type: "fill-blank",
    question: "Politeness: Say this after receiving your item: _____ _____",
    options: ["Thank you", "Please you", "Excuse me", "Sorry me"],
    correctAnswer: "Thank you",
    explanation: "We say 'Thank you' after receiving something.",
    difficulty: 1,
    tags: ["politeness", "a1"]
  },
  {
    id: "a1-speak-ask-9",
    type: "fill-blank",
    question: "Unscramble: help / you / can / Me / ? → _____",
    options: ["Can you help me?", "You can help me?", "Help you can me?", "Me can you help?"],
    correctAnswer: "Can you help me?",
    explanation: "Question order: Can + you + verb + me? Example: Can you help me?",
    difficulty: 1,
    tags: ["requests", "unscramble", "a1"]
  },
  {
    id: "a1-speak-ask-10",
    type: "fill-blank",
    question: "Unscramble: is / the / Where / supermarket / ? → _____",
    options: ["Where is the supermarket?", "The supermarket is where?", "Is where the supermarket?", "Supermarket the is where?"],
    correctAnswer: "Where is the supermarket?",
    explanation: "Question order: Where + is + the + noun? Example: Where is the supermarket?",
    difficulty: 1,
    tags: ["location", "unscramble", "a1"]
  },
  {
    id: "a1-speak-ask-11",
    type: "fill-blank",
    question: "Dialogue: 'Can I have the check, please?' → This is said: _____",
    options: ["At a restaurant", "At a school", "At a hospital", "At home"],
    correctAnswer: "At a restaurant",
    explanation: "You ask for the 'check' or 'bill' when you want to pay at a restaurant.",
    difficulty: 1,
    tags: ["requests", "context", "a1"]
  },
  {
    id: "a1-speak-ask-12",
    type: "fill-blank",
    question: "Dialogue: 'Where is the station?' → This is: _____",
    options: ["Asking for directions", "Greeting a friend", "Ordering food", "Saying goodbye"],
    correctAnswer: "Asking for directions",
    explanation: "'Where is...?' is used when asking for directions or locations.",
    difficulty: 1,
    tags: ["location", "context", "a1"]
  },
  {
    id: "a1-speak-ask-13",
    type: "fill-blank",
    question: "Fill in: 'Excuse _____, where is the park?'",
    options: ["me", "you", "I", "my"],
    correctAnswer: "me",
    explanation: "'Excuse me' is used to politely get someone's attention.",
    difficulty: 1,
    tags: ["politeness", "a1"]
  },
  {
    id: "a1-speak-ask-14",
    type: "fill-blank",
    question: "Fill in: 'Can you _____ that, please?'",
    options: ["repeat", "hello", "goodbye", "thank"],
    correctAnswer: "repeat",
    explanation: "'Can you repeat that?' asks someone to say something again.",
    difficulty: 1,
    tags: ["requests", "a1"]
  },
  {
    id: "a1-speak-ask-15",
    type: "fill-blank",
    question: "Logic: If you are lost, you ask: 'Where _____ I?'",
    options: ["am", "is", "are", "be"],
    correctAnswer: "am",
    explanation: "With 'I', we use 'am'. Example: Where am I?",
    difficulty: 1,
    tags: ["location", "verb-to-be", "a1"]
  }
];

// Export all A1 Speaking exercises mapped to skill IDs
export const a1SpeakingExercises: Record<string, Exercise[]> = {
  "a1-speak-1": introduceYourselfExercises,
  "a1-speak-2": greetingsAndFarewellsExercises,
  "a1-speak-3": askForBasicThingsExercises
};

// Export individual arrays for direct access
export {
  introduceYourselfExercises,
  greetingsAndFarewellsExercises,
  askForBasicThingsExercises
};

// Get all A1 Speaking exercises as a flat array
export const getAllA1SpeakingExercises = (): Exercise[] => {
  return [
    ...introduceYourselfExercises,
    ...greetingsAndFarewellsExercises,
    ...askForBasicThingsExercises
  ];
};

// Get exercise count stats
export const a1SpeakingStats = {
  total: introduceYourselfExercises.length + greetingsAndFarewellsExercises.length + askForBasicThingsExercises.length,
  introduceYourself: introduceYourselfExercises.length,
  greetingsAndFarewells: greetingsAndFarewellsExercises.length,
  askForBasicThings: askForBasicThingsExercises.length
};
