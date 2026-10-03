import { Exercise } from "./exercisesData";

// Theme 1: Individual Words (25 Exercises)
// Focus: Recognizing phonetic differences in numbers, names, and places.

const individualWordsExercises: Exercise[] = [
  // Part 1: Numbers & Spelling
  {
    id: "a1-listen-1-1",
    type: "multiple-choice",
    question: "🔊 Audio: 'I am eighteen years old.' - Select the correct number:",
    options: ["18", "80"],
    correctAnswer: "18",
    explanation: "'Eighteen' (18) ends with '-teen' sound, while 'eighty' (80) ends with '-ty' sound.",
    difficulty: 1,
    tags: ["listening", "numbers", "audio"]
  },
  {
    id: "a1-listen-1-2",
    type: "multiple-choice",
    question: "🔊 Audio: 'The bus number is forty.' - Select the correct number:",
    options: ["14", "40"],
    correctAnswer: "40",
    explanation: "'Forty' (40) has the '-ty' ending, while 'fourteen' (14) has the '-teen' ending.",
    difficulty: 1,
    tags: ["listening", "numbers", "audio"]
  },
  {
    id: "a1-listen-1-3",
    type: "multiple-choice",
    question: "🔊 Audio: 'My house number is seven.' - Select the correct number:",
    options: ["7", "11"],
    correctAnswer: "7",
    explanation: "'Seven' (7) is a single-syllable word, distinct from 'eleven' (11).",
    difficulty: 1,
    tags: ["listening", "numbers", "audio"]
  },
  {
    id: "a1-listen-1-4",
    type: "multiple-choice",
    question: "🔊 Audio: 'The flight is at five-thirty.' - Select the correct time:",
    options: ["5:30", "5:13"],
    correctAnswer: "5:30",
    explanation: "'Five-thirty' means 5:30, while 'five-thirteen' would be 5:13.",
    difficulty: 1,
    tags: ["listening", "numbers", "time", "audio"]
  },
  {
    id: "a1-listen-1-5",
    type: "multiple-choice",
    question: "🔊 Audio: 'My name is spelled B-R-Y-A-N.' - Select the correct spelling:",
    options: ["Brian", "Bryan"],
    correctAnswer: "Bryan",
    explanation: "The spelling B-R-Y-A-N gives us 'Bryan' with a 'Y', not 'Brian' with an 'I'.",
    difficulty: 1,
    tags: ["listening", "spelling", "names", "audio"]
  },
  {
    id: "a1-listen-1-6",
    type: "multiple-choice",
    question: "🔊 Audio: 'The city is S-Y-D-N-E-Y.' - Select the correct spelling:",
    options: ["Sydney", "Sidney"],
    correctAnswer: "Sydney",
    explanation: "S-Y-D-N-E-Y spells 'Sydney' with a 'Y', not 'Sidney' with an 'I'.",
    difficulty: 1,
    tags: ["listening", "spelling", "places", "audio"]
  },
  {
    id: "a1-listen-1-7",
    type: "multiple-choice",
    question: "🔊 Audio: 'I have twelve apples.' - Select the correct number:",
    options: ["12", "20"],
    correctAnswer: "12",
    explanation: "'Twelve' (12) is distinct from 'twenty' (20) - listen for the 'tw-elve' sound.",
    difficulty: 1,
    tags: ["listening", "numbers", "audio"]
  },
  {
    id: "a1-listen-1-8",
    type: "multiple-choice",
    question: "🔊 Audio: 'The code is zero-zero-nine.' - Select the correct code:",
    options: ["009", "090"],
    correctAnswer: "009",
    explanation: "'Zero-zero-nine' means 009, with two zeros at the start.",
    difficulty: 1,
    tags: ["listening", "numbers", "audio"]
  },
  // Part 2: Recognizing Places & Common Nouns
  {
    id: "a1-listen-1-9",
    type: "multiple-choice",
    question: "🔊 Audio: 'I am going to the hospital.' - Identify the place:",
    options: ["🏥 Hospital", "🏫 School"],
    correctAnswer: "🏥 Hospital",
    explanation: "A hospital (🏥) is where sick people go for medical treatment.",
    difficulty: 1,
    tags: ["listening", "places", "audio"]
  },
  {
    id: "a1-listen-1-10",
    type: "multiple-choice",
    question: "🔊 Audio: 'Let's go to the park.' - Identify the place:",
    options: ["🌳 Park", "🏦 Bank"],
    correctAnswer: "🌳 Park",
    explanation: "A park (🌳) is an outdoor green space for recreation.",
    difficulty: 1,
    tags: ["listening", "places", "audio"]
  },
  {
    id: "a1-listen-1-11",
    type: "multiple-choice",
    question: "🔊 Audio: 'I need a pencil.' - Identify the object:",
    options: ["✏️ Pencil", "🖊️ Pen"],
    correctAnswer: "✏️ Pencil",
    explanation: "A pencil (✏️) is a writing tool with graphite that can be erased.",
    difficulty: 1,
    tags: ["listening", "objects", "audio"]
  },
  {
    id: "a1-listen-1-12",
    type: "multiple-choice",
    question: "🔊 Audio: 'The cat is on the sofa.' - Identify the animal:",
    options: ["🐱 Cat", "🐶 Dog"],
    correctAnswer: "🐱 Cat",
    explanation: "A cat (🐱) is a small feline pet that says 'meow'.",
    difficulty: 1,
    tags: ["listening", "animals", "audio"]
  },
  {
    id: "a1-listen-1-13",
    type: "multiple-choice",
    question: "🔊 Audio: 'The weather is sunny.' - Identify the weather:",
    options: ["☀️ Sunny", "🌧️ Rainy"],
    correctAnswer: "☀️ Sunny",
    explanation: "Sunny (☀️) means the sun is shining and the sky is clear.",
    difficulty: 1,
    tags: ["listening", "weather", "audio"]
  },
  {
    id: "a1-listen-1-14",
    type: "multiple-choice",
    question: "🔊 Audio: 'I like orange juice.' - Identify the drink:",
    options: ["🧃 Orange juice", "☕ Coffee"],
    correctAnswer: "🧃 Orange juice",
    explanation: "Orange juice (🧃) is a drink made from oranges.",
    difficulty: 1,
    tags: ["listening", "food", "audio"]
  },
  // Part 3: Minimal Pairs (Differentiating Sounds)
  {
    id: "a1-listen-1-15",
    type: "multiple-choice",
    question: "🔊 Audio: 'Cat.' - Did you hear:",
    options: ["Cat", "Cut"],
    correctAnswer: "Cat",
    explanation: "'Cat' has an /æ/ sound, while 'cut' has an /ʌ/ sound. Listen for the difference!",
    difficulty: 1,
    tags: ["listening", "minimal-pairs", "audio"]
  },
  {
    id: "a1-listen-1-16",
    type: "multiple-choice",
    question: "🔊 Audio: 'Ship.' - Did you hear:",
    options: ["Ship", "Sheep"],
    correctAnswer: "Ship",
    explanation: "'Ship' has a short /ɪ/ sound, while 'sheep' has a long /iː/ sound.",
    difficulty: 1,
    tags: ["listening", "minimal-pairs", "audio"]
  },
  {
    id: "a1-listen-1-17",
    type: "multiple-choice",
    question: "🔊 Audio: 'Pen.' - Did you hear:",
    options: ["Pen", "Pan"],
    correctAnswer: "Pen",
    explanation: "'Pen' has an /e/ sound, while 'pan' has an /æ/ sound.",
    difficulty: 1,
    tags: ["listening", "minimal-pairs", "audio"]
  },
  {
    id: "a1-listen-1-18",
    type: "multiple-choice",
    question: "🔊 Audio: 'Sit.' - Did you hear:",
    options: ["Sit", "Seat"],
    correctAnswer: "Sit",
    explanation: "'Sit' has a short /ɪ/ sound, while 'seat' has a long /iː/ sound.",
    difficulty: 1,
    tags: ["listening", "minimal-pairs", "audio"]
  },
  {
    id: "a1-listen-1-19",
    type: "multiple-choice",
    question: "🔊 Audio: 'Boy.' - Did you hear:",
    options: ["Boy", "Buy"],
    correctAnswer: "Boy",
    explanation: "'Boy' has an /ɔɪ/ diphthong, while 'buy' has an /aɪ/ diphthong.",
    difficulty: 1,
    tags: ["listening", "minimal-pairs", "audio"]
  },
  {
    id: "a1-listen-1-20",
    type: "multiple-choice",
    question: "🔊 Audio: 'Wait.' - Did you hear:",
    options: ["Wait", "Wet"],
    correctAnswer: "Wait",
    explanation: "'Wait' has an /eɪ/ diphthong, while 'wet' has a short /e/ sound.",
    difficulty: 1,
    tags: ["listening", "minimal-pairs", "audio"]
  },
  // Part 4: Names & Nationalities
  {
    id: "a1-listen-1-21",
    type: "multiple-choice",
    question: "🔊 Audio: 'She is Italian.' - Select the nationality:",
    options: ["Italy", "Italian"],
    correctAnswer: "Italian",
    explanation: "'Italian' is the nationality (adjective), 'Italy' is the country (noun).",
    difficulty: 1,
    tags: ["listening", "nationalities", "audio"]
  },
  {
    id: "a1-listen-1-22",
    type: "multiple-choice",
    question: "🔊 Audio: 'He is from Mexico.' - Select the country:",
    options: ["Mexico", "Mexican"],
    correctAnswer: "Mexico",
    explanation: "'Mexico' is the country, 'Mexican' is the nationality.",
    difficulty: 1,
    tags: ["listening", "countries", "audio"]
  },
  {
    id: "a1-listen-1-23",
    type: "multiple-choice",
    question: "🔊 Audio: 'My friend is French.' - Select the nationality:",
    options: ["France", "French"],
    correctAnswer: "French",
    explanation: "'French' is the nationality, 'France' is the country.",
    difficulty: 1,
    tags: ["listening", "nationalities", "audio"]
  },
  {
    id: "a1-listen-1-24",
    type: "multiple-choice",
    question: "🔊 Audio: 'The teacher's name is Mr. Smith.' - Select the name:",
    options: ["Smith", "Smyth"],
    correctAnswer: "Smith",
    explanation: "'Smith' is the common spelling with 'i', not 'Smyth' with 'y'.",
    difficulty: 1,
    tags: ["listening", "names", "audio"]
  },
  {
    id: "a1-listen-1-25",
    type: "multiple-choice",
    question: "🔊 Audio: 'We are in London.' - Select the city:",
    options: ["London", "Lisbon"],
    correctAnswer: "London",
    explanation: "'London' is the capital of the UK, 'Lisbon' is the capital of Portugal.",
    difficulty: 1,
    tags: ["listening", "places", "audio"]
  }
];

// Theme 2: Simple Instructions (25 Exercises)
// Focus: Physical responses and classroom commands.

const simpleInstructionsExercises: Exercise[] = [
  // Part 1: Classroom Commands
  {
    id: "a1-listen-2-1",
    type: "multiple-choice",
    question: "🔊 Audio: 'Open your book.' - What action should you do?",
    options: ["📖 Open the book", "📕 Close the book"],
    correctAnswer: "📖 Open the book",
    explanation: "'Open' means to make something accessible, opposite of 'close'.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-2",
    type: "multiple-choice",
    question: "🔊 Audio: 'Close the window.' - Identify the verb:",
    options: ["Open", "Close"],
    correctAnswer: "Close",
    explanation: "'Close' means to shut something.",
    difficulty: 1,
    tags: ["listening", "commands", "verbs", "audio"]
  },
  {
    id: "a1-listen-2-3",
    type: "multiple-choice",
    question: "🔊 Audio: 'Sit down, please.' - What action?",
    options: ["Stand up", "Sit down"],
    correctAnswer: "Sit down",
    explanation: "'Sit down' means to take a seat.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-4",
    type: "multiple-choice",
    question: "🔊 Audio: 'Please stand up.' - What action?",
    options: ["Stand up", "Sit down"],
    correctAnswer: "Stand up",
    explanation: "'Stand up' means to rise to your feet.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-5",
    type: "multiple-choice",
    question: "🔊 Audio: 'Listen to the teacher.' - Identify the body part used:",
    options: ["👂 Ears", "👁️ Eyes"],
    correctAnswer: "👂 Ears",
    explanation: "We use our ears (👂) to listen.",
    difficulty: 1,
    tags: ["listening", "commands", "body-parts", "audio"]
  },
  {
    id: "a1-listen-2-6",
    type: "multiple-choice",
    question: "🔊 Audio: 'Look at the whiteboard.' - Identify the body part used:",
    options: ["👁️ Eyes", "👂 Ears"],
    correctAnswer: "👁️ Eyes",
    explanation: "We use our eyes (👁️) to look at things.",
    difficulty: 1,
    tags: ["listening", "commands", "body-parts", "audio"]
  },
  {
    id: "a1-listen-2-7",
    type: "multiple-choice",
    question: "🔊 Audio: 'Write your name.' - Identify the tool needed:",
    options: ["Pencil", "Eraser"],
    correctAnswer: "Pencil",
    explanation: "We need a pencil (or pen) to write.",
    difficulty: 1,
    tags: ["listening", "commands", "objects", "audio"]
  },
  {
    id: "a1-listen-2-8",
    type: "multiple-choice",
    question: "🔊 Audio: 'Quiet, please.' - Identify the meaning:",
    options: ["Silence", "Speak"],
    correctAnswer: "Silence",
    explanation: "'Quiet' means to be silent, not make noise.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  // Part 2: Directional & Action Instructions
  {
    id: "a1-listen-2-9",
    type: "multiple-choice",
    question: "🔊 Audio: 'Raise your hand.' - What action?",
    options: ["✋ Raise hand", "🦶 Raise foot"],
    correctAnswer: "✋ Raise hand",
    explanation: "'Raise your hand' means to lift your hand up.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-10",
    type: "multiple-choice",
    question: "🔊 Audio: 'Touch your nose.' - Identify the body part:",
    options: ["Nose", "Ear"],
    correctAnswer: "Nose",
    explanation: "Your nose is the body part you breathe through and smell with.",
    difficulty: 1,
    tags: ["listening", "commands", "body-parts", "audio"]
  },
  {
    id: "a1-listen-2-11",
    type: "multiple-choice",
    question: "🔊 Audio: 'Turn left.' - Select the arrow:",
    options: ["⬅️ Left", "➡️ Right"],
    correctAnswer: "⬅️ Left",
    explanation: "'Left' is the direction indicated by ⬅️.",
    difficulty: 1,
    tags: ["listening", "directions", "audio"]
  },
  {
    id: "a1-listen-2-12",
    type: "multiple-choice",
    question: "🔊 Audio: 'Stop!' - Select the sign:",
    options: ["🛑 Stop", "🟢 Go"],
    correctAnswer: "🛑 Stop",
    explanation: "'Stop' means to cease movement, shown by the red stop sign 🛑.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-13",
    type: "multiple-choice",
    question: "🔊 Audio: 'Go to page ten.' - Select the number:",
    options: ["10", "20"],
    correctAnswer: "10",
    explanation: "'Ten' is the number 10.",
    difficulty: 1,
    tags: ["listening", "numbers", "commands", "audio"]
  },
  {
    id: "a1-listen-2-14",
    type: "multiple-choice",
    question: "🔊 Audio: 'Pick up your pen.' - Identify the action:",
    options: ["Take", "Drop"],
    correctAnswer: "Take",
    explanation: "'Pick up' means to take something in your hand.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-15",
    type: "multiple-choice",
    question: "🔊 Audio: 'Clean the desk.' - Identify the place:",
    options: ["Table/Desk", "Bed"],
    correctAnswer: "Table/Desk",
    explanation: "A desk is a table used for work or study.",
    difficulty: 1,
    tags: ["listening", "commands", "places", "audio"]
  },
  // Part 3: Sequential Instructions (First/Then)
  {
    id: "a1-listen-2-16",
    type: "multiple-choice",
    question: "🔊 Audio: 'First, sit down. Then, open your book.' - What is the second action?",
    options: ["Open book", "Sit down"],
    correctAnswer: "Open book",
    explanation: "'Then' introduces the second action: 'open your book'.",
    difficulty: 1,
    tags: ["listening", "sequential", "audio"]
  },
  {
    id: "a1-listen-2-17",
    type: "multiple-choice",
    question: "🔊 Audio: 'Listen and repeat.' - How many actions are there?",
    options: ["Two", "One"],
    correctAnswer: "Two",
    explanation: "There are two actions: 1) Listen, 2) Repeat.",
    difficulty: 1,
    tags: ["listening", "sequential", "audio"]
  },
  {
    id: "a1-listen-2-18",
    type: "multiple-choice",
    question: "🔊 Audio: 'Read the text and answer.' - What do you do after reading?",
    options: ["Answer", "Read again"],
    correctAnswer: "Answer",
    explanation: "After reading, you answer the questions.",
    difficulty: 1,
    tags: ["listening", "sequential", "audio"]
  },
  {
    id: "a1-listen-2-19",
    type: "multiple-choice",
    question: "🔊 Audio: 'Draw a circle.' - Select the shape:",
    options: ["⭕ Circle", "⬜ Square"],
    correctAnswer: "⭕ Circle",
    explanation: "A circle (⭕) is a round shape with no corners.",
    difficulty: 1,
    tags: ["listening", "shapes", "audio"]
  },
  {
    id: "a1-listen-2-20",
    type: "multiple-choice",
    question: "🔊 Audio: 'Point to the door.' - Identify the object:",
    options: ["Door", "Window"],
    correctAnswer: "Door",
    explanation: "A door is what you open to enter or exit a room.",
    difficulty: 1,
    tags: ["listening", "commands", "objects", "audio"]
  },
  // Part 4: Everyday Requests/Instructions
  {
    id: "a1-listen-2-21",
    type: "multiple-choice",
    question: "🔊 Audio: 'Wait for me.' - Identify the meaning:",
    options: ["Stay", "Go"],
    correctAnswer: "Stay",
    explanation: "'Wait' means to stay in place until someone arrives.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-22",
    type: "multiple-choice",
    question: "🔊 Audio: 'Show me your passport.' - Identify the document:",
    options: ["Passport", "Ticket"],
    correctAnswer: "Passport",
    explanation: "A passport is an official document for international travel.",
    difficulty: 1,
    tags: ["listening", "documents", "audio"]
  },
  {
    id: "a1-listen-2-23",
    type: "multiple-choice",
    question: "🔊 Audio: 'Help me, please.' - Identify the situation:",
    options: ["Needs help", "Is happy"],
    correctAnswer: "Needs help",
    explanation: "'Help me' indicates someone needs assistance.",
    difficulty: 1,
    tags: ["listening", "requests", "audio"]
  },
  {
    id: "a1-listen-2-24",
    type: "multiple-choice",
    question: "🔊 Audio: 'Come here.' - Identify the movement:",
    options: ["Towards speaker", "Away from speaker"],
    correctAnswer: "Towards speaker",
    explanation: "'Come here' means to move towards the person speaking.",
    difficulty: 1,
    tags: ["listening", "commands", "audio"]
  },
  {
    id: "a1-listen-2-25",
    type: "multiple-choice",
    question: "🔊 Audio: 'Don't speak.' - Identify the negative command:",
    options: ["No talking", "No walking"],
    correctAnswer: "No talking",
    explanation: "'Don't speak' means to not talk, to be quiet.",
    difficulty: 1,
    tags: ["listening", "commands", "negative", "audio"]
  }
];

// Export exercises mapped to curriculum skill IDs
export const a1ListeningExercises: Record<string, Exercise[]> = {
  "a1-listen-1": individualWordsExercises,
  "a1-listen-2": simpleInstructionsExercises
};

// Export all listening exercises as a flat array
export const allA1ListeningExercises: Exercise[] = [
  ...individualWordsExercises,
  ...simpleInstructionsExercises
];
