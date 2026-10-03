import { Exercise } from "./exercisesData";

// Theme 1: Personal Data (25 Exercises)
// Focus: Writing name, address, email, and contact details correctly.

const personalDataExercises: Exercise[] = [
  // Part 1: Field Identification & Capitalization
  {
    id: "a1-write-1-1",
    type: "fill-blank",
    question: "Correct the capitalization: 'my name is ernesto libby.' -> Write the correct version:",
    options: ["My name is Ernesto Libby.", "my name is Ernesto Libby.", "My Name Is Ernesto Libby.", "MY NAME IS ERNESTO LIBBY."],
    correctAnswer: "My name is Ernesto Libby.",
    explanation: "Capitalize the first letter of a sentence and proper nouns (names).",
    difficulty: 1,
    tags: ["writing", "capitalization", "personal-data"]
  },
  {
    id: "a1-write-1-2",
    type: "multiple-choice",
    question: "Identify the field: Where do you write '8642-5281'?",
    options: ["Phone Number", "Address", "Email", "Name"],
    correctAnswer: "Phone Number",
    explanation: "A series of digits like '8642-5281' is a phone number.",
    difficulty: 1,
    tags: ["writing", "forms", "personal-data"]
  },
  {
    id: "a1-write-1-3",
    type: "multiple-choice",
    question: "Identify the field: Where do you write 'Paseo Colón, San José'?",
    options: ["Address", "Phone Number", "Email", "Nationality"],
    correctAnswer: "Address",
    explanation: "A street name and city combination goes in the Address field.",
    difficulty: 1,
    tags: ["writing", "forms", "personal-data"]
  },
  {
    id: "a1-write-1-4",
    type: "multiple-choice",
    question: "Symbol check: What is the name of this symbol in an email? @",
    options: ["At sign", "Hashtag", "Ampersand", "Dollar sign"],
    correctAnswer: "At sign",
    explanation: "The @ symbol is called 'at sign' and is used in email addresses.",
    difficulty: 1,
    tags: ["writing", "symbols", "email"]
  },
  {
    id: "a1-write-1-5",
    type: "multiple-choice",
    question: "Symbol check: What is the name of this symbol in a website? .",
    options: ["Dot / Period", "Comma", "Colon", "Semicolon"],
    correctAnswer: "Dot / Period",
    explanation: "The . symbol is called 'dot' or 'period' and separates parts of web addresses.",
    difficulty: 1,
    tags: ["writing", "symbols", "websites"]
  },
  {
    id: "a1-write-1-6",
    type: "fill-blank",
    question: "Spelling: Write 'Maria' in all capital letters:",
    options: ["MARIA", "Maria", "maria", "MaRiA"],
    correctAnswer: "MARIA",
    explanation: "All capital letters means every letter is uppercase: MARIA.",
    difficulty: 1,
    tags: ["writing", "capitalization", "names"]
  },
  {
    id: "a1-write-1-7",
    type: "fill-blank",
    question: "Spelling: Write 'Rodriguez' in all capital letters:",
    options: ["RODRIGUEZ", "Rodriguez", "rodriguez", "RoDrIgUeZ"],
    correctAnswer: "RODRIGUEZ",
    explanation: "All capital letters means every letter is uppercase: RODRIGUEZ.",
    difficulty: 1,
    tags: ["writing", "capitalization", "names"]
  },
  {
    id: "a1-write-1-8",
    type: "fill-blank",
    question: "Complete the email: ernesto ______ gmail.com (Add the symbol)",
    options: ["@", ".", "#", "&"],
    correctAnswer: "@",
    explanation: "Email addresses use the @ symbol between the username and domain.",
    difficulty: 1,
    tags: ["writing", "email", "symbols"]
  },
  {
    id: "a1-write-1-9",
    type: "multiple-choice",
    question: "True or False: In English, we capitalize the first letter of cities (e.g., Alajuela).",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "City names are proper nouns and should be capitalized (Alajuela, London, Paris).",
    difficulty: 1,
    tags: ["writing", "capitalization", "rules"]
  },
  {
    id: "a1-write-1-10",
    type: "multiple-choice",
    question: "True or False: 'DOB' stands for 'Date of Birth.'",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "DOB is a common abbreviation for Date of Birth on forms.",
    difficulty: 1,
    tags: ["writing", "abbreviations", "forms"]
  },
  // Part 2: Form Completion (Writing Tasks)
  {
    id: "a1-write-1-11",
    type: "fill-blank",
    question: "Write: A city in Costa Rica. Select a valid answer:",
    options: ["San José", "Costa Rica", "Spanish", "Central America"],
    correctAnswer: "San José",
    explanation: "San José is the capital city of Costa Rica. Other cities include Alajuela, Heredia, Cartago.",
    difficulty: 1,
    tags: ["writing", "geography", "forms"]
  },
  {
    id: "a1-write-1-12",
    type: "fill-blank",
    question: "Write: A phone number with 8 digits. Select a valid example:",
    options: ["8642-5281", "864-528", "86425281234", "86"],
    correctAnswer: "8642-5281",
    explanation: "A valid 8-digit phone number format: 8642-5281.",
    difficulty: 1,
    tags: ["writing", "phone", "forms"]
  },
  {
    id: "a1-write-1-13",
    type: "fill-blank",
    question: "Write: A valid email address format. Select the correct one:",
    options: ["maria@gmail.com", "maria.gmail.com", "maria@gmail", "@maria.gmail.com"],
    correctAnswer: "maria@gmail.com",
    explanation: "A valid email has: username + @ + domain + . + extension (e.g., maria@gmail.com).",
    difficulty: 1,
    tags: ["writing", "email", "forms"]
  },
  {
    id: "a1-write-1-14",
    type: "fill-blank",
    question: "Write: An occupation/job. Select a valid answer:",
    options: ["Teacher", "San José", "25 years old", "Costa Rica"],
    correctAnswer: "Teacher",
    explanation: "An occupation is your job or profession (Teacher, Doctor, Engineer, Student).",
    difficulty: 1,
    tags: ["writing", "occupation", "forms"]
  },
  {
    id: "a1-write-1-15",
    type: "fill-blank",
    question: "Fill in the blank: 'I live at ______ 123, Santa Ana.' (Street / City)",
    options: ["Street", "City", "Country", "Phone"],
    correctAnswer: "Street",
    explanation: "A number like 123 comes after the street name in an address.",
    difficulty: 1,
    tags: ["writing", "address", "forms"]
  },
  // Part 3: Contextual Data (Hotel Form Scenario)
  {
    id: "a1-write-1-16",
    type: "fill-blank",
    question: "Hotel Form - First Name: What type of information goes here?",
    options: ["Your given name (e.g., Maria)", "Your family name (e.g., Rodriguez)", "Your full address", "Your phone number"],
    correctAnswer: "Your given name (e.g., Maria)",
    explanation: "First Name is your given name, the name you were born with.",
    difficulty: 1,
    tags: ["writing", "forms", "hotel"]
  },
  {
    id: "a1-write-1-17",
    type: "fill-blank",
    question: "Hotel Form - Last Name: What type of information goes here?",
    options: ["Your family name (e.g., Rodriguez)", "Your given name (e.g., Maria)", "Your city", "Your email"],
    correctAnswer: "Your family name (e.g., Rodriguez)",
    explanation: "Last Name is your family name or surname.",
    difficulty: 1,
    tags: ["writing", "forms", "hotel"]
  },
  {
    id: "a1-write-1-18",
    type: "fill-blank",
    question: "Hotel Form - Nationality: What type of information goes here?",
    options: ["Costa Rican", "Costa Rica", "San José", "Spanish"],
    correctAnswer: "Costa Rican",
    explanation: "Nationality is an adjective describing your country of origin (Costa Rican, American, British).",
    difficulty: 1,
    tags: ["writing", "forms", "nationality"]
  },
  {
    id: "a1-write-1-19",
    type: "fill-blank",
    question: "Hotel Form - Email: Which format is correct?",
    options: ["guest@hotel.com", "guest.hotel.com", "guest@hotel", "@guest.hotel"],
    correctAnswer: "guest@hotel.com",
    explanation: "A valid email needs: username @ domain . extension",
    difficulty: 1,
    tags: ["writing", "email", "forms"]
  },
  {
    id: "a1-write-1-20",
    type: "fill-blank",
    question: "Hotel Form - Phone: Which is a valid phone number format?",
    options: ["555-0199", "Five Five Five", "phone@number", "555.email"],
    correctAnswer: "555-0199",
    explanation: "Phone numbers use digits, sometimes separated by dashes.",
    difficulty: 1,
    tags: ["writing", "phone", "forms"]
  },
  // Part 4: Error Correction
  {
    id: "a1-write-1-21",
    type: "fill-blank",
    question: "Find the mistake: 'Email: ernesto.com@libby' - What is the correct format?",
    options: ["ernesto@libby.com", "ernesto.com@libby", "libby@ernesto.com", "@ernesto.libby.com"],
    correctAnswer: "ernesto@libby.com",
    explanation: "The correct format is username@domain.com. The @ and .com were in wrong positions.",
    difficulty: 1,
    tags: ["writing", "email", "error-correction"]
  },
  {
    id: "a1-write-1-22",
    type: "multiple-choice",
    question: "Find the mistake: 'Address: 25 years old' - What's wrong?",
    options: ["Age information in Address field", "Missing street name", "Wrong capitalization", "Missing phone number"],
    correctAnswer: "Age information in Address field",
    explanation: "'25 years old' is age information, not an address. Address should have street/city information.",
    difficulty: 1,
    tags: ["writing", "forms", "error-correction"]
  },
  {
    id: "a1-write-1-23",
    type: "fill-blank",
    question: "Find the mistake: 'Name: san josé' - What is the correct capitalization?",
    options: ["San José", "san josé", "SAN JOSÉ", "san José"],
    correctAnswer: "San José",
    explanation: "City names should be capitalized: San José (capital S and J).",
    difficulty: 1,
    tags: ["writing", "capitalization", "error-correction"]
  },
  {
    id: "a1-write-1-24",
    type: "fill-blank",
    question: "Find the mistake: 'Nationality: costa rica' - Complete: Costa ______",
    options: ["Rican", "Rica", "rica", "RICA"],
    correctAnswer: "Rican",
    explanation: "Nationality should be 'Costa Rican' (adjective), not 'Costa Rica' (country name).",
    difficulty: 1,
    tags: ["writing", "nationality", "error-correction"]
  },
  {
    id: "a1-write-1-25",
    type: "multiple-choice",
    question: "Find the mistake: 'Phone: Ernesto' - What's wrong?",
    options: ["Name in Phone field", "Missing @ symbol", "Wrong capitalization", "Spelling error"],
    correctAnswer: "Name in Phone field",
    explanation: "A phone field should contain numbers (digits), not a person's name.",
    difficulty: 1,
    tags: ["writing", "forms", "error-correction"]
  }
];

// Theme 2: Short Sentences (25 Exercises)
// Focus: Creating simple sentences using the Subject + Verb + Object (SVO) structure.

const shortSentencesExercises: Exercise[] = [
  // Part 1: Word Order (SVO)
  {
    id: "a1-write-2-1",
    type: "fill-blank",
    question: "Rearrange into a sentence: apple / I / eat / an / .",
    options: ["I eat an apple.", "Apple I eat an.", "Eat I an apple.", "An apple eat I."],
    correctAnswer: "I eat an apple.",
    explanation: "SVO order: Subject (I) + Verb (eat) + Object (an apple).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-2",
    type: "fill-blank",
    question: "Rearrange into a sentence: teacher / She / a / is / .",
    options: ["She is a teacher.", "Teacher she is a.", "Is she a teacher.", "A teacher is she."],
    correctAnswer: "She is a teacher.",
    explanation: "SVO order: Subject (She) + Verb (is) + Object (a teacher).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-3",
    type: "fill-blank",
    question: "Rearrange into a sentence: blue / The / is / car / .",
    options: ["The car is blue.", "Blue the car is.", "Is the car blue.", "Car the is blue."],
    correctAnswer: "The car is blue.",
    explanation: "SVO order: Subject (The car) + Verb (is) + Adjective (blue).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-4",
    type: "fill-blank",
    question: "Rearrange into a sentence: English / study / They / .",
    options: ["They study English.", "English they study.", "Study they English.", "They English study."],
    correctAnswer: "They study English.",
    explanation: "SVO order: Subject (They) + Verb (study) + Object (English).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-5",
    type: "fill-blank",
    question: "Rearrange into a sentence: happy / We / are / .",
    options: ["We are happy.", "Happy we are.", "Are we happy.", "We happy are."],
    correctAnswer: "We are happy.",
    explanation: "SVO order: Subject (We) + Verb (are) + Adjective (happy).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-6",
    type: "fill-blank",
    question: "Rearrange into a sentence: He / coffee / drinks / .",
    options: ["He drinks coffee.", "Coffee he drinks.", "Drinks he coffee.", "He coffee drinks."],
    correctAnswer: "He drinks coffee.",
    explanation: "SVO order: Subject (He) + Verb (drinks) + Object (coffee).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-7",
    type: "fill-blank",
    question: "Rearrange into a sentence: is / My / big / house / .",
    options: ["My house is big.", "Is my house big.", "Big is my house.", "House my is big."],
    correctAnswer: "My house is big.",
    explanation: "SVO order: Subject (My house) + Verb (is) + Adjective (big).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  {
    id: "a1-write-2-8",
    type: "fill-blank",
    question: "Rearrange into a sentence: dogs / like / You / .",
    options: ["You like dogs.", "Dogs you like.", "Like you dogs.", "You dogs like."],
    correctAnswer: "You like dogs.",
    explanation: "SVO order: Subject (You) + Verb (like) + Object (dogs).",
    difficulty: 1,
    tags: ["writing", "word-order", "svo"]
  },
  // Part 2: Fill in the Missing Piece
  {
    id: "a1-write-2-9",
    type: "fill-blank",
    question: "Subject: '______ is a doctor.' Choose the correct subject:",
    options: ["He", "It", "The", "A"],
    correctAnswer: "He",
    explanation: "'He' is a subject pronoun used for a male person. 'It' is for things/animals.",
    difficulty: 1,
    tags: ["writing", "subjects", "svo"]
  },
  {
    id: "a1-write-2-10",
    type: "fill-blank",
    question: "Verb: 'I ______ in a house.' Choose the correct verb:",
    options: ["live", "am", "is", "has"],
    correctAnswer: "live",
    explanation: "'Live' is the correct verb for describing where you reside.",
    difficulty: 1,
    tags: ["writing", "verbs", "svo"]
  },
  {
    id: "a1-write-2-11",
    type: "fill-blank",
    question: "Object: 'She reads a ______.' Choose the correct object:",
    options: ["book", "run", "is", "happy"],
    correctAnswer: "book",
    explanation: "'Book' is a noun that can be an object. 'Run' is a verb, not an object.",
    difficulty: 1,
    tags: ["writing", "objects", "svo"]
  },
  {
    id: "a1-write-2-12",
    type: "fill-blank",
    question: "Subject: '______ are students.' Choose the correct subject:",
    options: ["We", "He", "She", "It"],
    correctAnswer: "We",
    explanation: "'We' matches the plural verb 'are'. 'He/She/It' use 'is' for singular.",
    difficulty: 1,
    tags: ["writing", "subjects", "svo"]
  },
  {
    id: "a1-write-2-13",
    type: "fill-blank",
    question: "Verb: 'The cat ______ milk.' Choose the correct verb:",
    options: ["drinks", "is", "has", "are"],
    correctAnswer: "drinks",
    explanation: "'Drinks' is the action verb showing what the cat does with milk.",
    difficulty: 1,
    tags: ["writing", "verbs", "svo"]
  },
  {
    id: "a1-write-2-14",
    type: "fill-blank",
    question: "Verb: 'I ______ English.' Choose the correct verb:",
    options: ["speak", "small", "am", "is"],
    correctAnswer: "speak",
    explanation: "'Speak' is the action verb for using a language.",
    difficulty: 1,
    tags: ["writing", "verbs", "svo"]
  },
  {
    id: "a1-write-2-15",
    type: "fill-blank",
    question: "Object: 'He drives a ______.' Choose the correct object:",
    options: ["car", "happy", "drive", "is"],
    correctAnswer: "car",
    explanation: "'Car' is a noun that can be driven. 'Happy' is an adjective.",
    difficulty: 1,
    tags: ["writing", "objects", "svo"]
  },
  // Part 3: Sentence Transformation
  {
    id: "a1-write-2-16",
    type: "fill-blank",
    question: "Make it a sentence: (I / happy) ->",
    options: ["I am happy.", "Happy I.", "I happy am.", "Am I happy."],
    correctAnswer: "I am happy.",
    explanation: "Add the verb 'am' to connect the subject 'I' with the adjective 'happy'.",
    difficulty: 1,
    tags: ["writing", "sentence-building", "svo"]
  },
  {
    id: "a1-write-2-17",
    type: "fill-blank",
    question: "Make it a sentence: (She / run) ->",
    options: ["She runs.", "She run.", "Run she.", "Runs she."],
    correctAnswer: "She runs.",
    explanation: "With 'she', we use 'runs' (third person singular adds 's').",
    difficulty: 1,
    tags: ["writing", "sentence-building", "svo"]
  },
  {
    id: "a1-write-2-18",
    type: "fill-blank",
    question: "Make it a sentence: (The / sun / hot) ->",
    options: ["The sun is hot.", "The hot sun.", "Sun is the hot.", "Hot is the sun."],
    correctAnswer: "The sun is hot.",
    explanation: "Add 'is' to connect the subject 'The sun' with the adjective 'hot'.",
    difficulty: 1,
    tags: ["writing", "sentence-building", "svo"]
  },
  {
    id: "a1-write-2-19",
    type: "fill-blank",
    question: "Make it a sentence: (We / friends) ->",
    options: ["We are friends.", "We friends are.", "Friends we are.", "Are we friends."],
    correctAnswer: "We are friends.",
    explanation: "Add 'are' to connect 'We' with the noun 'friends'.",
    difficulty: 1,
    tags: ["writing", "sentence-building", "svo"]
  },
  {
    id: "a1-write-2-20",
    type: "fill-blank",
    question: "Make it a sentence: (It / rainy) ->",
    options: ["It is rainy.", "It rainy is.", "Rainy it is.", "Is it rainy."],
    correctAnswer: "It is rainy.",
    explanation: "Add 'is' to connect 'It' with the adjective 'rainy'.",
    difficulty: 1,
    tags: ["writing", "sentence-building", "svo"]
  },
  // Part 4: Free Writing & Punctuation
  {
    id: "a1-write-2-21",
    type: "fill-blank",
    question: "Punctuation: Correct this: 'i am a student' ->",
    options: ["I am a student.", "i am a student.", "I am a student", "i Am A Student."],
    correctAnswer: "I am a student.",
    explanation: "Capitalize 'I' (always), capitalize first letter of sentence, and end with a period.",
    difficulty: 1,
    tags: ["writing", "punctuation", "capitalization"]
  },
  {
    id: "a1-write-2-22",
    type: "fill-blank",
    question: "Punctuation: Correct this: 'where is the park' ->",
    options: ["Where is the park?", "Where is the park.", "where is the park?", "Where Is The Park?"],
    correctAnswer: "Where is the park?",
    explanation: "Questions need a capital letter at start and question mark (?) at end.",
    difficulty: 1,
    tags: ["writing", "punctuation", "questions"]
  },
  {
    id: "a1-write-2-23",
    type: "fill-blank",
    question: "Write: A short sentence about yourself. Which is correct?",
    options: ["I am a student.", "student I am a", "Am I a student.", "a student I am"],
    correctAnswer: "I am a student.",
    explanation: "A correct sentence has SVO order, proper capitalization, and punctuation.",
    difficulty: 1,
    tags: ["writing", "self-introduction", "svo"]
  },
  {
    id: "a1-write-2-24",
    type: "fill-blank",
    question: "Write: A short sentence about your job. Which is correct?",
    options: ["I am a teacher.", "teacher am I a", "Am teacher I.", "a I teacher am"],
    correctAnswer: "I am a teacher.",
    explanation: "SVO order: Subject (I) + Verb (am) + Object (a teacher).",
    difficulty: 1,
    tags: ["writing", "occupation", "svo"]
  },
  {
    id: "a1-write-2-25",
    type: "fill-blank",
    question: "Write: A short sentence about the weather today. Which is correct?",
    options: ["It is sunny today.", "Sunny it is today.", "Today sunny is it.", "Is it sunny today"],
    correctAnswer: "It is sunny today.",
    explanation: "SVO order + time expression at the end. Don't forget the period!",
    difficulty: 1,
    tags: ["writing", "weather", "svo"]
  }
];

// Export exercises mapped to curriculum skill IDs
export const a1WritingExercises: Record<string, Exercise[]> = {
  "a1-write-1": personalDataExercises,
  "a1-write-2": shortSentencesExercises
};

// Export all writing exercises as a flat array
export const allA1WritingExercises: Exercise[] = [
  ...personalDataExercises,
  ...shortSentencesExercises
];
