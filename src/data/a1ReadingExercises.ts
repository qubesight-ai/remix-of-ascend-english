import { Exercise } from "./exercisesData";

// Theme 1: Signs and Notices (25 Exercises)
// Focus: Public safety, business status, and directions.

const signsAndNoticesExercises: Exercise[] = [
  // Part 1: Business & Safety Status
  {
    id: "a1-read-1-1",
    type: "multiple-choice",
    question: "📋 Sign: 'CLOSED' - What does this mean?",
    options: ["You can enter", "You cannot enter"],
    correctAnswer: "You cannot enter",
    explanation: "'CLOSED' means the business is not open, so you cannot enter.",
    difficulty: 1,
    tags: ["reading", "signs", "business"]
  },
  {
    id: "a1-read-1-2",
    type: "multiple-choice",
    question: "📋 Sign: 'OPEN' - What does this mean?",
    options: ["The store is ready for customers", "The store is sleeping"],
    correctAnswer: "The store is ready for customers",
    explanation: "'OPEN' means the store is available and ready to serve customers.",
    difficulty: 1,
    tags: ["reading", "signs", "business"]
  },
  {
    id: "a1-read-1-3",
    type: "multiple-choice",
    question: "📋 Sign: 'EXIT' - What does this mean?",
    options: ["The way in", "The way out"],
    correctAnswer: "The way out",
    explanation: "'EXIT' shows the way to leave a building or area.",
    difficulty: 1,
    tags: ["reading", "signs", "directions"]
  },
  {
    id: "a1-read-1-4",
    type: "multiple-choice",
    question: "📋 Sign: 'ENTRANCE' - What does this mean?",
    options: ["The way in", "The way out"],
    correctAnswer: "The way in",
    explanation: "'ENTRANCE' shows where you can enter a building or area.",
    difficulty: 1,
    tags: ["reading", "signs", "directions"]
  },
  {
    id: "a1-read-1-5",
    type: "multiple-choice",
    question: "📋 Sign: 'PUSH' - What action should you do?",
    options: ["Pull the door", "Press the door forward"],
    correctAnswer: "Press the door forward",
    explanation: "'PUSH' means to press the door away from you to open it.",
    difficulty: 1,
    tags: ["reading", "signs", "actions"]
  },
  {
    id: "a1-read-1-6",
    type: "multiple-choice",
    question: "📋 Sign: 'PULL' - What action should you do?",
    options: ["Pull the door toward you", "Push the door"],
    correctAnswer: "Pull the door toward you",
    explanation: "'PULL' means to bring the door toward yourself to open it.",
    difficulty: 1,
    tags: ["reading", "signs", "actions"]
  },
  {
    id: "a1-read-1-7",
    type: "multiple-choice",
    question: "📋 Sign: 'NO SMOKING' 🚭 - What does this mean?",
    options: ["You can smoke here", "You cannot smoke here"],
    correctAnswer: "You cannot smoke here",
    explanation: "'NO SMOKING' means smoking is prohibited in this area.",
    difficulty: 1,
    tags: ["reading", "signs", "safety"]
  },
  {
    id: "a1-read-1-8",
    type: "multiple-choice",
    question: "📋 Sign: 'DANGER' ⚠️ - What does this mean?",
    options: ["It is safe", "It is not safe"],
    correctAnswer: "It is not safe",
    explanation: "'DANGER' warns that something is hazardous or risky.",
    difficulty: 1,
    tags: ["reading", "signs", "safety"]
  },
  {
    id: "a1-read-1-9",
    type: "multiple-choice",
    question: "📋 Sign: 'OUT OF ORDER' - What does this mean?",
    options: ["The machine works", "The machine is broken"],
    correctAnswer: "The machine is broken",
    explanation: "'OUT OF ORDER' means the machine or equipment is not working.",
    difficulty: 1,
    tags: ["reading", "signs", "status"]
  },
  {
    id: "a1-read-1-10",
    type: "multiple-choice",
    question: "📋 Sign: 'KEEP OFF THE GRASS' - What should you do?",
    options: ["Don't walk on the grass", "Sit on the grass"],
    correctAnswer: "Don't walk on the grass",
    explanation: "'KEEP OFF THE GRASS' means you should not step on the grass area.",
    difficulty: 1,
    tags: ["reading", "signs", "rules"]
  },
  // Part 2: Traffic & Directions
  {
    id: "a1-read-1-11",
    type: "multiple-choice",
    question: "📋 Sign: 'STOP' 🛑 - What action should you do?",
    options: ["Go faster", "Do not move"],
    correctAnswer: "Do not move",
    explanation: "'STOP' means you must come to a complete halt.",
    difficulty: 1,
    tags: ["reading", "signs", "traffic"]
  },
  {
    id: "a1-read-1-12",
    type: "multiple-choice",
    question: "📋 Sign: 'ONE WAY' ➡️ - What does this mean?",
    options: ["Traffic goes in one direction", "You can go left or right"],
    correctAnswer: "Traffic goes in one direction",
    explanation: "'ONE WAY' means vehicles can only travel in a single direction.",
    difficulty: 1,
    tags: ["reading", "signs", "traffic"]
  },
  {
    id: "a1-read-1-13",
    type: "multiple-choice",
    question: "📋 Sign: 'NO PARKING' 🚫🅿️ - What does this mean?",
    options: ["You can leave your car", "You cannot leave your car"],
    correctAnswer: "You cannot leave your car",
    explanation: "'NO PARKING' means parking is not allowed in this area.",
    difficulty: 1,
    tags: ["reading", "signs", "traffic"]
  },
  {
    id: "a1-read-1-14",
    type: "multiple-choice",
    question: "📋 Sign: 'SPEED LIMIT: 50' - What does this mean?",
    options: ["Go 50 km/h maximum", "Go 50 km/h minimum"],
    correctAnswer: "Go 50 km/h maximum",
    explanation: "Speed limit shows the maximum speed you can drive, not the minimum.",
    difficulty: 1,
    tags: ["reading", "signs", "traffic"]
  },
  {
    id: "a1-read-1-15",
    type: "multiple-choice",
    question: "📋 Sign: 'PEDESTRIAN CROSSING' 🚶 - What does this mean?",
    options: ["Watch for cars", "Watch for people walking"],
    correctAnswer: "Watch for people walking",
    explanation: "'PEDESTRIAN CROSSING' warns drivers to watch for people crossing the road.",
    difficulty: 1,
    tags: ["reading", "signs", "traffic"]
  },
  // Part 3: Store & Service Signs
  {
    id: "a1-read-1-16",
    type: "multiple-choice",
    question: "📋 Sign: 'SALE' 🏷️ - What does this mean?",
    options: ["Lower prices", "Higher prices"],
    correctAnswer: "Lower prices",
    explanation: "'SALE' means items are being sold at reduced or discounted prices.",
    difficulty: 1,
    tags: ["reading", "signs", "shopping"]
  },
  {
    id: "a1-read-1-17",
    type: "multiple-choice",
    question: "📋 Sign: 'CASH ONLY' 💵 - What payment can you use?",
    options: ["You can use a card", "You must use paper money"],
    correctAnswer: "You must use paper money",
    explanation: "'CASH ONLY' means credit/debit cards are not accepted, only cash.",
    difficulty: 1,
    tags: ["reading", "signs", "shopping"]
  },
  {
    id: "a1-read-1-18",
    type: "multiple-choice",
    question: "📋 Sign: 'RESERVED' - What does this mean?",
    options: ["The table is for anyone", "The table is for a specific person"],
    correctAnswer: "The table is for a specific person",
    explanation: "'RESERVED' means the seat or table is saved for someone who booked it.",
    difficulty: 1,
    tags: ["reading", "signs", "restaurant"]
  },
  {
    id: "a1-read-1-19",
    type: "multiple-choice",
    question: "📋 Sign: 'TOILETS' 🚻 - What is this place for?",
    options: ["Place to eat", "Place to wash"],
    correctAnswer: "Place to wash",
    explanation: "'TOILETS' or 'RESTROOMS' are places with bathroom facilities.",
    difficulty: 1,
    tags: ["reading", "signs", "places"]
  },
  {
    id: "a1-read-1-20",
    type: "multiple-choice",
    question: "📋 Sign: 'INFORMATION' ℹ️ - What is this place for?",
    options: ["Place to ask questions", "Place to buy food"],
    correctAnswer: "Place to ask questions",
    explanation: "'INFORMATION' desks help answer questions and provide directions.",
    difficulty: 1,
    tags: ["reading", "signs", "places"]
  },
  // Part 4: Contextual Matching
  {
    id: "a1-read-1-21",
    type: "multiple-choice",
    question: "🎯 Situation: You are at a restaurant and need to leave. Which sign do you look for?",
    options: ["EXIT", "OPEN"],
    correctAnswer: "EXIT",
    explanation: "When you need to leave a place, look for the 'EXIT' sign.",
    difficulty: 1,
    tags: ["reading", "signs", "context"]
  },
  {
    id: "a1-read-1-22",
    type: "multiple-choice",
    question: "🎯 Situation: You want to buy a shirt for $5 instead of $10. Which sign do you look for?",
    options: ["SALE", "PULL"],
    correctAnswer: "SALE",
    explanation: "'SALE' signs indicate discounted prices on items.",
    difficulty: 1,
    tags: ["reading", "signs", "context"]
  },
  {
    id: "a1-read-1-23",
    type: "multiple-choice",
    question: "🎯 Situation: You need to wash your hands. Which sign do you look for?",
    options: ["RESTROOMS", "ENTRANCE"],
    correctAnswer: "RESTROOMS",
    explanation: "'RESTROOMS' or 'TOILETS' is where you can wash your hands.",
    difficulty: 1,
    tags: ["reading", "signs", "context"]
  },
  {
    id: "a1-read-1-24",
    type: "fill-blank",
    question: "🎯 You see a sign with a red circle and a line through a cigarette 🚭. This means:",
    options: ["No Smoking", "Smoking Area", "Fire Exit", "Danger"],
    correctAnswer: "No Smoking",
    explanation: "A cigarette with a line through it is the international symbol for 'No Smoking'.",
    difficulty: 1,
    tags: ["reading", "signs", "symbols"]
  },
  {
    id: "a1-read-1-25",
    type: "multiple-choice",
    question: "🎯 Match the symbol: 🚭 means:",
    options: ["No Smoking", "No Parking", "No Entry", "No Photos"],
    correctAnswer: "No Smoking",
    explanation: "The 🚭 symbol represents 'No Smoking'.",
    difficulty: 1,
    tags: ["reading", "signs", "symbols"]
  }
];

// Theme 2: Simple Forms (25 Exercises)
// Focus: Filling out personal data for apps, hotels, or clinics.

const simpleFormsExercises: Exercise[] = [
  // Part 1: Data Identification
  {
    id: "a1-read-2-1",
    type: "multiple-choice",
    question: "📝 Form field: 'First Name' - Which is a correct input?",
    options: ["Ernesto", "Libby"],
    correctAnswer: "Ernesto",
    explanation: "'First Name' is your given name, like 'Ernesto'. 'Libby' could be a last name.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-2",
    type: "multiple-choice",
    question: "📝 Form field: 'Last Name' (Surname) - Which is correct?",
    options: ["Libby", "Ernesto"],
    correctAnswer: "Libby",
    explanation: "'Last Name' or 'Surname' is your family name, like 'Libby'.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-3",
    type: "multiple-choice",
    question: "📝 Form field: 'DOB' - What does this mean?",
    options: ["Date of Birth", "Department of Business"],
    correctAnswer: "Date of Birth",
    explanation: "'DOB' stands for 'Date of Birth' - when you were born.",
    difficulty: 1,
    tags: ["reading", "forms", "abbreviations"]
  },
  {
    id: "a1-read-2-4",
    type: "multiple-choice",
    question: "📝 Form field: 'Gender' - What are the common options?",
    options: ["Male / Female / Other", "Yes / No / Maybe"],
    correctAnswer: "Male / Female / Other",
    explanation: "'Gender' asks whether you are male, female, or other.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-5",
    type: "multiple-choice",
    question: "📝 Form field: 'Occupation' - What does this ask for?",
    options: ["Your address", "Your job"],
    correctAnswer: "Your job",
    explanation: "'Occupation' means your job or profession.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-6",
    type: "multiple-choice",
    question: "📝 Form field: 'Phone Number' - Which is correct?",
    options: ["8642-5281", "Calle 5"],
    correctAnswer: "8642-5281",
    explanation: "A phone number contains digits, not street names.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-7",
    type: "multiple-choice",
    question: "📝 Form field: 'Nationality' - Which is correct?",
    options: ["Costa Rican", "San José"],
    correctAnswer: "Costa Rican",
    explanation: "'Nationality' is your country's adjective (Costa Rican), not a city (San José).",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-8",
    type: "multiple-choice",
    question: "📝 Form field: 'Address' - What does this ask for?",
    options: ["Where you live", "Where you work"],
    correctAnswer: "Where you live",
    explanation: "'Address' typically means your home location, including street and city.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-9",
    type: "multiple-choice",
    question: "📝 Form field: 'Email' - Which is correct?",
    options: ["ernesto@example.com", "Ernesto"],
    correctAnswer: "ernesto@example.com",
    explanation: "An email address must have the @ symbol and a domain (like example.com).",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  {
    id: "a1-read-2-10",
    type: "multiple-choice",
    question: "📝 Form field: 'Marital Status' - What are the options?",
    options: ["Single / Married", "Student / Worker"],
    correctAnswer: "Single / Married",
    explanation: "'Marital Status' asks if you are single, married, divorced, etc.",
    difficulty: 1,
    tags: ["reading", "forms", "personal-data"]
  },
  // Part 2: Reading a Completed Form
  {
    id: "a1-read-2-11",
    type: "multiple-choice",
    question: "📖 Read: 'Name: Anna Smith. Age: 25. City: London. Job: Teacher.' - How old is Anna?",
    options: ["25", "30", "20", "35"],
    correctAnswer: "25",
    explanation: "The form states Anna's age is 25.",
    difficulty: 1,
    tags: ["reading", "forms", "comprehension"]
  },
  {
    id: "a1-read-2-12",
    type: "multiple-choice",
    question: "📖 Read: 'Name: Anna Smith. Age: 25. City: London. Job: Teacher.' - What is Anna's last name?",
    options: ["Smith", "Anna", "London", "Teacher"],
    correctAnswer: "Smith",
    explanation: "Anna's full name is 'Anna Smith', so 'Smith' is the last name.",
    difficulty: 1,
    tags: ["reading", "forms", "comprehension"]
  },
  {
    id: "a1-read-2-13",
    type: "multiple-choice",
    question: "📖 Read: 'Name: Anna Smith. Age: 25. City: London. Job: Teacher.' - Where does she live?",
    options: ["London", "Paris", "New York", "Madrid"],
    correctAnswer: "London",
    explanation: "The form shows Anna's city is London.",
    difficulty: 1,
    tags: ["reading", "forms", "comprehension"]
  },
  {
    id: "a1-read-2-14",
    type: "multiple-choice",
    question: "📖 Read: 'Name: Anna Smith. Age: 25. City: London. Job: Teacher.' - What is her profession?",
    options: ["Teacher", "Doctor", "Engineer", "Chef"],
    correctAnswer: "Teacher",
    explanation: "Anna's job is listed as 'Teacher'.",
    difficulty: 1,
    tags: ["reading", "forms", "comprehension"]
  },
  // Part 3: Categorization
  {
    id: "a1-read-2-15",
    type: "multiple-choice",
    question: "📋 Which belongs in the 'Address' field?",
    options: ["Apt 4B, 5th Ave", "555-0199"],
    correctAnswer: "Apt 4B, 5th Ave",
    explanation: "An address includes apartment/house number and street. Phone numbers go elsewhere.",
    difficulty: 1,
    tags: ["reading", "forms", "categorization"]
  },
  {
    id: "a1-read-2-16",
    type: "multiple-choice",
    question: "📋 Which belongs in the 'City' field?",
    options: ["Alajuela", "Costa Rica"],
    correctAnswer: "Alajuela",
    explanation: "'Alajuela' is a city. 'Costa Rica' is a country.",
    difficulty: 1,
    tags: ["reading", "forms", "categorization"]
  },
  {
    id: "a1-read-2-17",
    type: "multiple-choice",
    question: "📋 Which belongs in the 'Country' field?",
    options: ["Costa Rica", "Alajuela"],
    correctAnswer: "Costa Rica",
    explanation: "'Costa Rica' is a country. 'Alajuela' is a city within Costa Rica.",
    difficulty: 1,
    tags: ["reading", "forms", "categorization"]
  },
  {
    id: "a1-read-2-18",
    type: "multiple-choice",
    question: "📋 Which belongs in the 'Postcode/ZIP' field?",
    options: ["10101", "Maria"],
    correctAnswer: "10101",
    explanation: "A postcode or ZIP code is a number identifying a postal area.",
    difficulty: 1,
    tags: ["reading", "forms", "categorization"]
  },
  {
    id: "a1-read-2-19",
    type: "multiple-choice",
    question: "📋 What belongs in the 'Signature' field?",
    options: ["Your written name", "Your age"],
    correctAnswer: "Your written name",
    explanation: "A signature is your handwritten name to confirm your identity.",
    difficulty: 1,
    tags: ["reading", "forms", "categorization"]
  },
  // Part 4: Practical Application
  {
    id: "a1-read-2-20",
    type: "fill-blank",
    question: "📝 Hotel Form: '___ Name: Ernesto.' - What word is missing?",
    options: ["First", "Last", "Nick", "Middle"],
    correctAnswer: "First",
    explanation: "'Ernesto' is a first name (given name).",
    difficulty: 1,
    tags: ["reading", "forms", "practical"]
  },
  {
    id: "a1-read-2-21",
    type: "fill-blank",
    question: "📝 Gym Form: 'Emergency ___: 911.' - What word is missing?",
    options: ["Contact", "Name", "Email", "Age"],
    correctAnswer: "Contact",
    explanation: "'Emergency Contact' is a phone number to call in emergencies.",
    difficulty: 1,
    tags: ["reading", "forms", "practical"]
  },
  {
    id: "a1-read-2-22",
    type: "fill-blank",
    question: "📝 'I live in Freses.' - This information goes in the ___ field.",
    options: ["Address", "Phone", "Name", "Email"],
    correctAnswer: "Address",
    explanation: "Where you live (like 'Freses') is part of your address.",
    difficulty: 1,
    tags: ["reading", "forms", "practical"]
  },
  {
    id: "a1-read-2-23",
    type: "fill-blank",
    question: "📝 'I am a manager.' - This information goes in the ___ field.",
    options: ["Occupation", "Name", "Age", "Gender"],
    correctAnswer: "Occupation",
    explanation: "'Manager' is a job title, which goes in the 'Occupation' field.",
    difficulty: 1,
    tags: ["reading", "forms", "practical"]
  },
  {
    id: "a1-read-2-24",
    type: "multiple-choice",
    question: "📝 'Street, Number, City' all go under which category?",
    options: ["Address", "Phone", "Name", "Email"],
    correctAnswer: "Address",
    explanation: "Street, number, and city are all parts of your address.",
    difficulty: 1,
    tags: ["reading", "forms", "practical"]
  },
  {
    id: "a1-read-2-25",
    type: "multiple-choice",
    question: "📝 Final Challenge: Which field would 'student' go into?",
    options: ["Occupation", "Name", "Address", "Age"],
    correctAnswer: "Occupation",
    explanation: "'Student' describes what you do, so it goes in the 'Occupation' field.",
    difficulty: 1,
    tags: ["reading", "forms", "practical"]
  }
];

// Export exercises mapped to curriculum skill IDs
export const a1ReadingExercises: Record<string, Exercise[]> = {
  "a1-read-1": signsAndNoticesExercises,
  "a1-read-2": simpleFormsExercises
};

// Export all reading exercises as a flat array
export const allA1ReadingExercises: Exercise[] = [
  ...signsAndNoticesExercises,
  ...simpleFormsExercises
];
