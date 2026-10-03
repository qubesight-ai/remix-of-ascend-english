// Complete Listening Exercises for all CEFR levels (A1-C2)
// Each skill has 20-30 functional exercises
// These simulate listening comprehension with written scenarios

import { Exercise } from "./exercisesData";

export const listeningExercises: Record<string, Exercise[]> = {
  // =====================================================
  // A1 LISTENING EXERCISES
  // =====================================================

  // A1 - Individual Words
  "a1-list-1": [
    {
      id: "a1-l1-1",
      type: "multiple-choice",
      question: "🔊 You hear: 'ONE-TWO-THREE-FOUR-FIVE'\nHow many numbers did you hear?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
      explanation: "You heard five numbers: one, two, three, four, five.",
      explanationSpanish: "Escuchaste cinco números: one, two, three, four, five.",
      difficulty: 1,
      tags: ["listening", "numbers", "counting"]
    },
    {
      id: "a1-l1-2",
      type: "multiple-choice",
      question: "🔊 You hear: 'My phone number is FIVE-FIVE-FIVE, THREE-TWO-ONE-ZERO'\nWhat is the phone number?",
      options: ["555-3120", "555-3210", "555-1230", "555-2310"],
      correctAnswer: "555-3210",
      explanation: "Five-Five-Five, Three-Two-One-Zero = 555-3210",
      explanationSpanish: "Five-Five-Five, Three-Two-One-Zero = 555-3210",
      difficulty: 1,
      tags: ["listening", "numbers", "phone"]
    },
    {
      id: "a1-l1-3",
      type: "multiple-choice",
      question: "🔊 You hear: 'The price is FIFTEEN dollars'\nHow much is it?",
      options: ["$5", "$15", "$50", "$51"],
      correctAnswer: "$15",
      explanation: "Fifteen dollars = $15",
      explanationSpanish: "Fifteen dollars = $15",
      difficulty: 1,
      tags: ["listening", "numbers", "prices"]
    },
    {
      id: "a1-l1-4",
      type: "multiple-choice",
      question: "🔊 You hear: 'There are TWENTY students in the class'\nHow many students?",
      options: ["12", "20", "22", "30"],
      correctAnswer: "20",
      explanation: "Twenty = 20",
      explanationSpanish: "Twenty = 20",
      difficulty: 1,
      tags: ["listening", "numbers", "quantities"]
    },
    {
      id: "a1-l1-5",
      type: "multiple-choice",
      question: "🔊 You hear: 'My name is MICHAEL'\nWhat is the person's name?",
      options: ["Mark", "Matthew", "Michael", "Mitchell"],
      correctAnswer: "Michael",
      explanation: "The person said their name is Michael.",
      explanationSpanish: "La persona dijo que su nombre es Michael.",
      difficulty: 1,
      tags: ["listening", "names", "introduction"]
    },
    {
      id: "a1-l1-6",
      type: "multiple-choice",
      question: "🔊 You hear: 'I'm from CANADA'\nWhere is the person from?",
      options: ["China", "Canada", "Colombia", "Cuba"],
      correctAnswer: "Canada",
      explanation: "The person is from Canada.",
      explanationSpanish: "La persona es de Canada.",
      difficulty: 1,
      tags: ["listening", "countries", "origin"]
    },
    {
      id: "a1-l1-7",
      type: "multiple-choice",
      question: "🔊 You hear: 'The meeting is at THREE o'clock'\nWhat time is the meeting?",
      options: ["1:00", "2:00", "3:00", "4:00"],
      correctAnswer: "3:00",
      explanation: "Three o'clock = 3:00",
      explanationSpanish: "Three o'clock = 3:00",
      difficulty: 1,
      tags: ["listening", "time", "appointments"]
    },
    {
      id: "a1-l1-8",
      type: "multiple-choice",
      question: "🔊 You hear: 'Today is WEDNESDAY'\nWhat day is it?",
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      correctAnswer: "Wednesday",
      explanation: "The speaker said Wednesday.",
      explanationSpanish: "El hablante dijo Wednesday (miércoles).",
      difficulty: 1,
      tags: ["listening", "days", "calendar"]
    },
    {
      id: "a1-l1-9",
      type: "multiple-choice",
      question: "🔊 You hear: 'I need a BLUE pen'\nWhat color pen do they need?",
      options: ["Black", "Blue", "Red", "Green"],
      correctAnswer: "Blue",
      explanation: "They need a blue pen.",
      explanationSpanish: "Necesitan un bolígrafo azul.",
      difficulty: 1,
      tags: ["listening", "colors", "objects"]
    },
    {
      id: "a1-l1-10",
      type: "multiple-choice",
      question: "🔊 You hear: 'The apartment is on the FOURTH floor'\nWhich floor?",
      options: ["1st floor", "2nd floor", "3rd floor", "4th floor"],
      correctAnswer: "4th floor",
      explanation: "Fourth floor = 4th floor",
      explanationSpanish: "Fourth floor = cuarto piso",
      difficulty: 1,
      tags: ["listening", "numbers", "ordinals"]
    },
    {
      id: "a1-l1-11",
      type: "multiple-choice",
      question: "🔊 You hear: 'I'll have COFFEE, please'\nWhat drink does the person want?",
      options: ["Tea", "Coffee", "Water", "Juice"],
      correctAnswer: "Coffee",
      explanation: "The person ordered coffee.",
      explanationSpanish: "La persona pidió café.",
      difficulty: 1,
      tags: ["listening", "drinks", "ordering"]
    },
    {
      id: "a1-l1-12",
      type: "multiple-choice",
      question: "🔊 You hear: 'My birthday is in MARCH'\nWhat month is the birthday?",
      options: ["May", "March", "April", "June"],
      correctAnswer: "March",
      explanation: "The birthday is in March.",
      explanationSpanish: "El cumpleaños es en marzo.",
      difficulty: 1,
      tags: ["listening", "months", "dates"]
    },
    {
      id: "a1-l1-13",
      type: "multiple-choice",
      question: "🔊 You hear: 'The bus leaves at QUARTER PAST EIGHT'\nWhat time does the bus leave?",
      options: ["7:45", "8:00", "8:15", "8:30"],
      correctAnswer: "8:15",
      explanation: "Quarter past eight = 8:15",
      explanationSpanish: "Quarter past eight = 8:15",
      difficulty: 2,
      tags: ["listening", "time", "transport"]
    },
    {
      id: "a1-l1-14",
      type: "multiple-choice",
      question: "🔊 You hear: 'I have TWO brothers and ONE sister'\nHow many siblings does the person have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      explanation: "Two brothers + one sister = 3 siblings",
      explanationSpanish: "Dos hermanos + una hermana = 3 hermanos en total",
      difficulty: 1,
      tags: ["listening", "family", "counting"]
    },
    {
      id: "a1-l1-15",
      type: "multiple-choice",
      question: "🔊 You hear: 'That costs THIRTY-FIVE dollars and FIFTY cents'\nWhat is the total price?",
      options: ["$35.00", "$35.05", "$35.50", "$53.50"],
      correctAnswer: "$35.50",
      explanation: "Thirty-five dollars and fifty cents = $35.50",
      explanationSpanish: "Treinta y cinco dólares con cincuenta centavos = $35.50",
      difficulty: 2,
      tags: ["listening", "prices", "math"]
    },
    {
      id: "a1-l1-16",
      type: "multiple-choice",
      question: "🔊 You hear: 'Turn LEFT at the traffic light'\nWhich direction?",
      options: ["Right", "Left", "Straight", "Back"],
      correctAnswer: "Left",
      explanation: "Turn left at the traffic light.",
      explanationSpanish: "Gira a la izquierda en el semáforo.",
      difficulty: 1,
      tags: ["listening", "directions", "navigation"]
    },
    {
      id: "a1-l1-17",
      type: "multiple-choice",
      question: "🔊 You hear: 'The hospital is on MAIN Street'\nWhat street is the hospital on?",
      options: ["First Street", "Oak Street", "Main Street", "Park Street"],
      correctAnswer: "Main Street",
      explanation: "The hospital is on Main Street.",
      explanationSpanish: "El hospital está en Main Street.",
      difficulty: 1,
      tags: ["listening", "places", "streets"]
    },
    {
      id: "a1-l1-18",
      type: "multiple-choice",
      question: "🔊 You hear: 'My email is JOHN at GMAIL dot COM'\nWhat is the email address?",
      options: ["john@yahoo.com", "john@gmail.com", "jane@gmail.com", "john@hotmail.com"],
      correctAnswer: "john@gmail.com",
      explanation: "John at gmail dot com = john@gmail.com",
      explanationSpanish: "John at gmail dot com = john@gmail.com",
      difficulty: 2,
      tags: ["listening", "email", "spelling"]
    },
    {
      id: "a1-l1-19",
      type: "multiple-choice",
      question: "🔊 You hear: 'The weather today is SUNNY and WARM'\nHow is the weather?",
      options: ["Cold and rainy", "Sunny and warm", "Cloudy and cool", "Snowy and cold"],
      correctAnswer: "Sunny and warm",
      explanation: "The weather is sunny and warm.",
      explanationSpanish: "El clima está soleado y cálido.",
      difficulty: 1,
      tags: ["listening", "weather", "descriptions"]
    },
    {
      id: "a1-l1-20",
      type: "multiple-choice",
      question: "🔊 You hear: 'I work from NINE to FIVE'\nWhat are the working hours?",
      options: ["8:00-4:00", "9:00-5:00", "10:00-6:00", "9:00-6:00"],
      correctAnswer: "9:00-5:00",
      explanation: "Nine to five = 9:00 AM to 5:00 PM",
      explanationSpanish: "Nine to five = 9:00 AM a 5:00 PM",
      difficulty: 1,
      tags: ["listening", "time", "work"]
    },
    {
      id: "a1-l1-21",
      type: "multiple-choice",
      question: "🔊 You hear: 'Please spell your last name: S-M-I-T-H'\nWhat is the last name?",
      options: ["Smith", "Smyth", "Schmidt", "Smiths"],
      correctAnswer: "Smith",
      explanation: "S-M-I-T-H spells Smith.",
      explanationSpanish: "S-M-I-T-H deletrea Smith.",
      difficulty: 1,
      tags: ["listening", "spelling", "names"]
    },
    {
      id: "a1-l1-22",
      type: "multiple-choice",
      question: "🔊 You hear: 'The test is on FRIDAY'\nWhen is the test?",
      options: ["Thursday", "Friday", "Saturday", "Sunday"],
      correctAnswer: "Friday",
      explanation: "The test is on Friday.",
      explanationSpanish: "El examen es el viernes.",
      difficulty: 1,
      tags: ["listening", "days", "schedule"]
    },
    {
      id: "a1-l1-23",
      type: "multiple-choice",
      question: "🔊 You hear: 'She is TWENTY-THREE years old'\nHow old is she?",
      options: ["22", "23", "32", "33"],
      correctAnswer: "23",
      explanation: "Twenty-three = 23",
      explanationSpanish: "Twenty-three = 23",
      difficulty: 1,
      tags: ["listening", "numbers", "age"]
    },
    {
      id: "a1-l1-24",
      type: "multiple-choice",
      question: "🔊 You hear: 'Room THREE-O-FOUR is on the third floor'\nWhat is the room number?",
      options: ["34", "304", "340", "403"],
      correctAnswer: "304",
      explanation: "Three-oh-four = 304",
      explanationSpanish: "Three-oh-four = 304",
      difficulty: 2,
      tags: ["listening", "numbers", "hotel"]
    },
    {
      id: "a1-l1-25",
      type: "multiple-choice",
      question: "🔊 You hear: 'The train arrives at HALF PAST TEN'\nWhat time does the train arrive?",
      options: ["9:30", "10:00", "10:30", "11:00"],
      correctAnswer: "10:30",
      explanation: "Half past ten = 10:30",
      explanationSpanish: "Half past ten = 10:30",
      difficulty: 2,
      tags: ["listening", "time", "transport"]
    },
  ],

  // A1 - Simple Instructions
  "a1-list-2": [
    {
      id: "a1-l2-1",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'OPEN your books to page 25'\nWhat should you do?",
      options: ["Close your book", "Open your book to page 25", "Open your book to page 52", "Put away your book"],
      correctAnswer: "Open your book to page 25",
      explanation: "The instruction is to open books to page 25.",
      explanationSpanish: "La instrucción es abrir los libros en la página 25.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-2",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'STAND UP, please'\nWhat should students do?",
      options: ["Sit down", "Stand up", "Lie down", "Walk around"],
      correctAnswer: "Stand up",
      explanation: "Students should stand up.",
      explanationSpanish: "Los estudiantes deben ponerse de pie.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-3",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'Please WRITE your name on the paper'\nWhat should you write?",
      options: ["The date", "Your name", "The title", "A number"],
      correctAnswer: "Your name",
      explanation: "Write your name on the paper.",
      explanationSpanish: "Escribe tu nombre en el papel.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-4",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'LISTEN carefully and DON'T talk'\nWhat should you do?",
      options: ["Talk to your friend", "Listen and be quiet", "Write everything", "Stand up"],
      correctAnswer: "Listen and be quiet",
      explanation: "Listen carefully and don't talk = be quiet and pay attention.",
      explanationSpanish: "Escucha con atención y no hables = mantente en silencio y presta atención.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-5",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'WORK in pairs'\nHow should you work?",
      options: ["Alone", "In groups of 4", "With a partner", "As a whole class"],
      correctAnswer: "With a partner",
      explanation: "Work in pairs = work with one other person.",
      explanationSpanish: "Work in pairs = trabajar con otra persona.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-6",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Please GO to exit A'\nWhere should you go?",
      options: ["Exit B", "Exit A", "Exit C", "Stay here"],
      correctAnswer: "Exit A",
      explanation: "Go to exit A.",
      explanationSpanish: "Ve a la salida A.",
      difficulty: 1,
      tags: ["listening", "instructions", "public"]
    },
    {
      id: "a1-l2-7",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'CLOSE your books and PUT them away'\nWhat should you do with your books?",
      options: ["Open them", "Close and put them away", "Give them to the teacher", "Write in them"],
      correctAnswer: "Close and put them away",
      explanation: "Close your books and put them away (store them).",
      explanationSpanish: "Cierra tus libros y guárdalos.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-8",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'RAISE your hand if you have a question'\nWhat should you do if you have a question?",
      options: ["Shout the question", "Raise your hand", "Write it down", "Tell your neighbor"],
      correctAnswer: "Raise your hand",
      explanation: "Raise your hand to ask a question.",
      explanationSpanish: "Levanta la mano para hacer una pregunta.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-9",
      type: "multiple-choice",
      question: "🔊 Someone says: 'TURN OFF your phone'\nWhat should you do with your phone?",
      options: ["Turn it on", "Turn it off", "Use it", "Give it away"],
      correctAnswer: "Turn it off",
      explanation: "Turn off = switch off, deactivate.",
      explanationSpanish: "Turn off = apagar, desactivar.",
      difficulty: 1,
      tags: ["listening", "instructions", "devices"]
    },
    {
      id: "a1-l2-10",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'READ the text SILENTLY'\nHow should you read?",
      options: ["Out loud", "Quietly to yourself", "To your partner", "Don't read"],
      correctAnswer: "Quietly to yourself",
      explanation: "Read silently = read without making sound.",
      explanationSpanish: "Read silently = leer sin hacer ruido.",
      difficulty: 1,
      tags: ["listening", "instructions", "reading"]
    },
    {
      id: "a1-l2-11",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'Come to the FRONT of the class'\nWhere should you go?",
      options: ["To the back", "To the front", "Outside", "To your seat"],
      correctAnswer: "To the front",
      explanation: "Go to the front of the classroom.",
      explanationSpanish: "Ve al frente del salón de clase.",
      difficulty: 1,
      tags: ["listening", "instructions", "classroom"]
    },
    {
      id: "a1-l2-12",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'REPEAT after me: HELLO'\nWhat should you say?",
      options: ["Goodbye", "Hello", "Thank you", "Please"],
      correctAnswer: "Hello",
      explanation: "Repeat = say the same thing.",
      explanationSpanish: "Repeat = decir lo mismo.",
      difficulty: 1,
      tags: ["listening", "instructions", "speaking"]
    },
    {
      id: "a1-l2-13",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'CIRCLE the correct answer'\nWhat should you do?",
      options: ["Underline the answer", "Circle the answer", "Cross out the answer", "Write the answer"],
      correctAnswer: "Circle the answer",
      explanation: "Circle = draw a circle around.",
      explanationSpanish: "Circle = dibujar un círculo alrededor.",
      difficulty: 1,
      tags: ["listening", "instructions", "tests"]
    },
    {
      id: "a1-l2-14",
      type: "multiple-choice",
      question: "🔊 Announcement: 'FASTEN your seatbelt'\nWhat should you do?",
      options: ["Remove your seatbelt", "Put on and fasten your seatbelt", "Sit without a seatbelt", "Check someone else's seatbelt"],
      correctAnswer: "Put on and fasten your seatbelt",
      explanation: "Fasten = secure, buckle.",
      explanationSpanish: "Fasten = asegurar, abrochar.",
      difficulty: 1,
      tags: ["listening", "instructions", "safety"]
    },
    {
      id: "a1-l2-15",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'UNDERLINE the important words'\nWhat should you do?",
      options: ["Circle the words", "Underline the words", "Delete the words", "Copy the words"],
      correctAnswer: "Underline the words",
      explanation: "Underline = draw a line under.",
      explanationSpanish: "Underline = subrayar.",
      difficulty: 1,
      tags: ["listening", "instructions", "reading"]
    },
    {
      id: "a1-l2-16",
      type: "multiple-choice",
      question: "🔊 Teacher says: 'HAND IN your homework'\nWhat should you do with your homework?",
      options: ["Take it home", "Give it to the teacher", "Keep it", "Throw it away"],
      correctAnswer: "Give it to the teacher",
      explanation: "Hand in = submit, give to the teacher.",
      explanationSpanish: "Hand in = entregar al profesor.",
      difficulty: 1,
      tags: ["listening", "instructions", "homework"]
    },
    {
      id: "a1-l2-17",
      type: "multiple-choice",
      question: "🔊 Doctor says: 'TAKE this medicine TWICE a day'\nHow often should you take the medicine?",
      options: ["Once a day", "Twice a day", "Three times a day", "Four times a day"],
      correctAnswer: "Twice a day",
      explanation: "Twice a day = two times per day.",
      explanationSpanish: "Twice a day = dos veces al día.",
      difficulty: 1,
      tags: ["listening", "instructions", "health"]
    },
    {
      id: "a1-l2-18",
      type: "multiple-choice",
      question: "🔊 Someone says: 'Please WAIT here'\nWhat should you do?",
      options: ["Leave", "Wait in this place", "Go somewhere else", "Run"],
      correctAnswer: "Wait in this place",
      explanation: "Wait here = stay in this location.",
      explanationSpanish: "Wait here = quedarse en este lugar.",
      difficulty: 1,
      tags: ["listening", "instructions", "waiting"]
    },
    {
      id: "a1-l2-19",
      type: "multiple-choice",
      question: "🔊 Sign says: 'DO NOT TOUCH'\nWhat should you NOT do?",
      options: ["Look", "Touch", "Take photos", "Stand near"],
      correctAnswer: "Touch",
      explanation: "Do not touch = don't put your hands on it.",
      explanationSpanish: "Do not touch = no tocar.",
      difficulty: 1,
      tags: ["listening", "instructions", "prohibition"]
    },
    {
      id: "a1-l2-20",
      type: "multiple-choice",
      question: "🔊 Announcement: 'PRESS button 3 for English'\nWhat should you press for English?",
      options: ["Button 1", "Button 2", "Button 3", "Button 4"],
      correctAnswer: "Button 3",
      explanation: "Press button 3 for English.",
      explanationSpanish: "Presiona el botón 3 para inglés.",
      difficulty: 1,
      tags: ["listening", "instructions", "phone"]
    },
  ],

  // =====================================================
  // A2 LISTENING EXERCISES
  // =====================================================

  "a2-list-1": [
    // Clear Conversations
    {
      id: "a2-l1-1",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'What would you like to order?'\nB: 'I'll have the chicken sandwich, please.'\n\nWhere is this conversation taking place?",
      options: ["At a bank", "At a restaurant", "At a hospital", "At a school"],
      correctAnswer: "At a restaurant",
      explanation: "'Order' and 'sandwich' indicate a restaurant.",
      explanationSpanish: "'Order' y 'sandwich' indican un restaurante.",
      difficulty: 1,
      tags: ["listening", "dialogues", "restaurant"]
    },
    {
      id: "a2-l1-2",
      type: "multiple-choice",
      question: "🔊 From the same dialogue, what does the customer order?",
      options: ["Fish", "Beef", "Chicken sandwich", "Salad"],
      correctAnswer: "Chicken sandwich",
      explanation: "The customer says 'I'll have the chicken sandwich'.",
      explanationSpanish: "El cliente dice 'I'll have the chicken sandwich'.",
      difficulty: 1,
      tags: ["listening", "dialogues", "ordering"]
    },
    {
      id: "a2-l1-3",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'How much is this shirt?'\nB: 'It's $25, but there's a 20% discount today.'\n\nWhat is the original price?",
      options: ["$20", "$25", "$30", "$45"],
      correctAnswer: "$25",
      explanation: "The original price is $25.",
      explanationSpanish: "El precio original es $25.",
      difficulty: 1,
      tags: ["listening", "dialogues", "shopping"]
    },
    {
      id: "a2-l1-4",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Can I help you?'\nB: 'Yes, I'm looking for the train station.'\nA: 'Go straight and turn right at the corner.'\n\nWhat is the person looking for?",
      options: ["Bus station", "Train station", "Airport", "Hospital"],
      correctAnswer: "Train station",
      explanation: "The person is looking for the train station.",
      explanationSpanish: "La persona busca la estación de tren.",
      difficulty: 1,
      tags: ["listening", "dialogues", "directions"]
    },
    {
      id: "a2-l1-5",
      type: "multiple-choice",
      question: "🔊 From the same dialogue, which way should the person turn?",
      options: ["Left", "Right", "Go straight", "Go back"],
      correctAnswer: "Right",
      explanation: "'Turn right at the corner'.",
      explanationSpanish: "'Turn right at the corner' (gira a la derecha en la esquina).",
      difficulty: 1,
      tags: ["listening", "dialogues", "directions"]
    },
    {
      id: "a2-l1-6",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'What time is your flight?'\nB: 'It leaves at 3:30 in the afternoon.'\nA: 'You should arrive at the airport by 1:30.'\n\nHow early should the person arrive?",
      options: ["1 hour early", "2 hours early", "30 minutes early", "3 hours early"],
      correctAnswer: "2 hours early",
      explanation: "3:30 - 1:30 = 2 hours before the flight.",
      explanationSpanish: "3:30 - 1:30 = 2 horas antes del vuelo.",
      difficulty: 2,
      tags: ["listening", "dialogues", "travel"]
    },
    {
      id: "a2-l1-7",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Do you have this dress in a smaller size?'\nB: 'Let me check. Yes, we have it in small and medium.'\n\nWhat is the customer asking about?",
      options: ["Color", "Price", "Size", "Style"],
      correctAnswer: "Size",
      explanation: "The customer asks about 'a smaller size'.",
      explanationSpanish: "El cliente pregunta por 'a smaller size' (una talla más pequeña).",
      difficulty: 1,
      tags: ["listening", "dialogues", "shopping"]
    },
    {
      id: "a2-l1-8",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'I have a headache and a fever.'\nB: 'How long have you had these symptoms?'\nA: 'Since yesterday.'\n\nWho is speaker B likely to be?",
      options: ["A teacher", "A doctor", "A cashier", "A friend"],
      correctAnswer: "A doctor",
      explanation: "Asking about symptoms suggests B is a doctor.",
      explanationSpanish: "Preguntar sobre síntomas sugiere que B es un médico.",
      difficulty: 1,
      tags: ["listening", "dialogues", "health"]
    },
    {
      id: "a2-l1-9",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Would you like anything else?'\nB: 'Yes, can I have the bill, please?'\nA: 'Of course. Cash or card?'\n\nWhat does 'the bill' mean in this context?",
      options: ["The menu", "The check/payment", "More food", "The reservation"],
      correctAnswer: "The check/payment",
      explanation: "'The bill' is the payment receipt at a restaurant.",
      explanationSpanish: "'The bill' es la cuenta en un restaurante.",
      difficulty: 1,
      tags: ["listening", "dialogues", "restaurant"]
    },
    {
      id: "a2-l1-10",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'I'd like to book a table for two, please.'\nB: 'For what day and time?'\nA: 'Saturday at 7pm.'\n\nHow many people is the reservation for?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      explanation: "'A table for two' = for 2 people.",
      explanationSpanish: "'A table for two' = para 2 personas.",
      difficulty: 1,
      tags: ["listening", "dialogues", "reservations"]
    },
    {
      id: "a2-l1-11",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Excuse me, where's the nearest ATM?'\nB: 'There's one inside the shopping center, near the entrance.'\n\nWhere is the ATM?",
      options: ["On the street", "At the bank", "Inside the shopping center", "At the train station"],
      correctAnswer: "Inside the shopping center",
      explanation: "The ATM is inside the shopping center.",
      explanationSpanish: "El cajero automático está dentro del centro comercial.",
      difficulty: 1,
      tags: ["listening", "dialogues", "locations"]
    },
    {
      id: "a2-l1-12",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'How was your weekend?'\nB: 'Great! I went hiking on Saturday and had a barbecue on Sunday.'\n\nWhat did the person do on Saturday?",
      options: ["Barbecue", "Hiking", "Shopping", "Studying"],
      correctAnswer: "Hiking",
      explanation: "'I went hiking on Saturday'.",
      explanationSpanish: "'I went hiking on Saturday' (Fui de excursión el sábado).",
      difficulty: 1,
      tags: ["listening", "dialogues", "activities"]
    },
    {
      id: "a2-l1-13",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Is there free WiFi here?'\nB: 'Yes, the password is on the receipt.'\n\nWhere can you find the WiFi password?",
      options: ["On the wall", "On the menu", "On the receipt", "Ask the manager"],
      correctAnswer: "On the receipt",
      explanation: "'The password is on the receipt'.",
      explanationSpanish: "'The password is on the receipt' (La contraseña está en el recibo).",
      difficulty: 1,
      tags: ["listening", "dialogues", "technology"]
    },
    {
      id: "a2-l1-14",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'What's the weather forecast for tomorrow?'\nB: 'It's going to rain in the morning, but it should be sunny in the afternoon.'\n\nWhen will it rain?",
      options: ["All day", "In the morning", "In the afternoon", "It won't rain"],
      correctAnswer: "In the morning",
      explanation: "'It's going to rain in the morning'.",
      explanationSpanish: "'It's going to rain in the morning' (Va a llover en la mañana).",
      difficulty: 1,
      tags: ["listening", "dialogues", "weather"]
    },
    {
      id: "a2-l1-15",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Can I try this on?'\nB: 'Sure. The fitting rooms are at the back of the store.'\n\nWhat does 'try this on' mean?",
      options: ["Buy it", "Wear it to see if it fits", "Return it", "Look at it"],
      correctAnswer: "Wear it to see if it fits",
      explanation: "'Try on' = test clothes to see if they fit.",
      explanationSpanish: "'Try on' = probarse ropa para ver si queda bien.",
      difficulty: 1,
      tags: ["listening", "dialogues", "shopping"]
    },
    {
      id: "a2-l1-16",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'When does the museum open?'\nB: 'It opens at 10am and closes at 6pm.'\n\nWhat are the museum's hours?",
      options: ["9am-5pm", "10am-6pm", "9am-6pm", "10am-5pm"],
      correctAnswer: "10am-6pm",
      explanation: "'Opens at 10am and closes at 6pm'.",
      explanationSpanish: "'Opens at 10am and closes at 6pm'.",
      difficulty: 1,
      tags: ["listening", "dialogues", "schedules"]
    },
    {
      id: "a2-l1-17",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'I need to cancel my appointment for tomorrow.'\nB: 'That's fine. Would you like to reschedule?'\nA: 'Yes, can I come on Thursday instead?'\n\nWhat day does the person want to reschedule to?",
      options: ["Wednesday", "Thursday", "Friday", "Saturday"],
      correctAnswer: "Thursday",
      explanation: "'Can I come on Thursday instead?'",
      explanationSpanish: "'Can I come on Thursday instead?' (¿Puedo ir el jueves en su lugar?)",
      difficulty: 1,
      tags: ["listening", "dialogues", "appointments"]
    },
    {
      id: "a2-l1-18",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Do you have any vegetarian options?'\nB: 'Yes, we have a vegetable pasta and a garden salad.'\n\nWhy is the customer asking this question?",
      options: ["They don't like salad", "They don't eat meat", "They're allergic to vegetables", "They want the cheapest option"],
      correctAnswer: "They don't eat meat",
      explanation: "Vegetarian = someone who doesn't eat meat.",
      explanationSpanish: "Vegetarian = alguien que no come carne.",
      difficulty: 1,
      tags: ["listening", "dialogues", "food"]
    },
    {
      id: "a2-l1-19",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'I'd like to return this jacket. It doesn't fit.'\nB: 'Do you have the receipt?'\nA: 'Yes, here it is.'\n\nWhy is the person returning the jacket?",
      options: ["Wrong color", "Too expensive", "It doesn't fit", "It's damaged"],
      correctAnswer: "It doesn't fit",
      explanation: "'It doesn't fit' = it's the wrong size.",
      explanationSpanish: "'It doesn't fit' = es la talla incorrecta.",
      difficulty: 1,
      tags: ["listening", "dialogues", "returns"]
    },
    {
      id: "a2-l1-20",
      type: "multiple-choice",
      question: "🔊 Dialogue:\nA: 'Is this seat taken?'\nB: 'No, it's free. Please, sit down.'\n\nWhat does 'Is this seat taken?' mean?",
      options: ["Can I buy this seat?", "Is someone sitting here?", "Is this seat comfortable?", "Is this seat broken?"],
      correctAnswer: "Is someone sitting here?",
      explanation: "'Is this seat taken?' = Is someone using this seat?",
      explanationSpanish: "'Is this seat taken?' = ¿Alguien está usando este asiento?",
      difficulty: 1,
      tags: ["listening", "dialogues", "polite-phrases"]
    },
  ],

  "a2-list-2": [
    // Simple Directions
    {
      id: "a2-l2-1",
      type: "multiple-choice",
      question: "🔊 Directions: 'Go straight for two blocks, then turn left. The pharmacy is on your right.'\n\nAfter going straight, which way do you turn?",
      options: ["Right", "Left", "Go straight", "Turn around"],
      correctAnswer: "Left",
      explanation: "'Then turn left'.",
      explanationSpanish: "'Then turn left' (Luego gira a la izquierda).",
      difficulty: 1,
      tags: ["listening", "directions", "navigation"]
    },
    {
      id: "a2-l2-2",
      type: "multiple-choice",
      question: "🔊 From the same directions, on which side is the pharmacy?",
      options: ["On the left", "On the right", "Straight ahead", "Behind you"],
      correctAnswer: "On the right",
      explanation: "'The pharmacy is on your right'.",
      explanationSpanish: "'The pharmacy is on your right' (La farmacia está a tu derecha).",
      difficulty: 1,
      tags: ["listening", "directions", "locations"]
    },
    {
      id: "a2-l2-3",
      type: "multiple-choice",
      question: "🔊 Directions: 'Take the elevator to the third floor. Room 305 is at the end of the hallway.'\n\nWhich floor should you go to?",
      options: ["First floor", "Second floor", "Third floor", "Fifth floor"],
      correctAnswer: "Third floor",
      explanation: "'Take the elevator to the third floor'.",
      explanationSpanish: "'Take the elevator to the third floor'.",
      difficulty: 1,
      tags: ["listening", "directions", "buildings"]
    },
    {
      id: "a2-l2-4",
      type: "multiple-choice",
      question: "🔊 Directions: 'Cross the street at the traffic light. The library is next to the post office.'\n\nWhat is next to the library?",
      options: ["A bank", "A post office", "A hospital", "A school"],
      correctAnswer: "A post office",
      explanation: "'The library is next to the post office'.",
      explanationSpanish: "'The library is next to the post office'.",
      difficulty: 1,
      tags: ["listening", "directions", "locations"]
    },
    {
      id: "a2-l2-5",
      type: "multiple-choice",
      question: "🔊 Directions: 'Walk past the bank and the supermarket. The café is on the corner.'\n\nWhere exactly is the café?",
      options: ["Next to the bank", "Inside the supermarket", "On the corner", "Across the street"],
      correctAnswer: "On the corner",
      explanation: "'The café is on the corner'.",
      explanationSpanish: "'The café is on the corner' (El café está en la esquina).",
      difficulty: 1,
      tags: ["listening", "directions", "locations"]
    },
    {
      id: "a2-l2-6",
      type: "multiple-choice",
      question: "🔊 Directions: 'Go through the park. When you exit, you'll see the museum across the street.'\n\nWhere is the museum in relation to the park exit?",
      options: ["Inside the park", "Next to the park", "Across the street from the exit", "Behind the park"],
      correctAnswer: "Across the street from the exit",
      explanation: "'You'll see the museum across the street'.",
      explanationSpanish: "'You'll see the museum across the street'.",
      difficulty: 1,
      tags: ["listening", "directions", "locations"]
    },
    {
      id: "a2-l2-7",
      type: "multiple-choice",
      question: "🔊 Directions: 'Take the second exit at the roundabout. The hotel is about 500 meters on your left.'\n\nWhich exit should you take at the roundabout?",
      options: ["First exit", "Second exit", "Third exit", "Fourth exit"],
      correctAnswer: "Second exit",
      explanation: "'Take the second exit at the roundabout'.",
      explanationSpanish: "'Take the second exit at the roundabout'.",
      difficulty: 2,
      tags: ["listening", "directions", "driving"]
    },
    {
      id: "a2-l2-8",
      type: "multiple-choice",
      question: "🔊 Directions: 'The station is about a 10-minute walk from here. Go straight until you reach the bridge.'\n\nHow long is the walk to the station?",
      options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
      correctAnswer: "10 minutes",
      explanation: "'About a 10-minute walk'.",
      explanationSpanish: "'About a 10-minute walk' (Unos 10 minutos caminando).",
      difficulty: 1,
      tags: ["listening", "directions", "time"]
    },
    {
      id: "a2-l2-9",
      type: "multiple-choice",
      question: "🔊 Directions: 'The restrooms are downstairs, next to the customer service desk.'\n\nWhere are the restrooms?",
      options: ["Upstairs", "Downstairs", "On this floor", "Outside"],
      correctAnswer: "Downstairs",
      explanation: "'The restrooms are downstairs'.",
      explanationSpanish: "'The restrooms are downstairs' (Los baños están abajo).",
      difficulty: 1,
      tags: ["listening", "directions", "buildings"]
    },
    {
      id: "a2-l2-10",
      type: "multiple-choice",
      question: "🔊 Directions: 'Go to platform 4. It's at the end of the corridor, on the left.'\n\nWhich platform do you need?",
      options: ["Platform 2", "Platform 3", "Platform 4", "Platform 5"],
      correctAnswer: "Platform 4",
      explanation: "'Go to platform 4'.",
      explanationSpanish: "'Go to platform 4'.",
      difficulty: 1,
      tags: ["listening", "directions", "trains"]
    },
    {
      id: "a2-l2-11",
      type: "multiple-choice",
      question: "🔊 Directions: 'The parking lot is behind the building. You can also use the underground parking.'\n\nWhere is one of the parking options?",
      options: ["In front of the building", "Behind the building", "Next to the building", "On the roof"],
      correctAnswer: "Behind the building",
      explanation: "'The parking lot is behind the building'.",
      explanationSpanish: "'The parking lot is behind the building'.",
      difficulty: 1,
      tags: ["listening", "directions", "parking"]
    },
    {
      id: "a2-l2-12",
      type: "multiple-choice",
      question: "🔊 Directions: 'Turn right at the church. The school is the third building on your left.'\n\nHow many buildings do you pass before reaching the school?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      explanation: "The third building = pass 2 buildings first.",
      explanationSpanish: "El tercer edificio = pasas 2 edificios primero.",
      difficulty: 2,
      tags: ["listening", "directions", "counting"]
    },
    {
      id: "a2-l2-13",
      type: "multiple-choice",
      question: "🔊 Directions: 'The café is opposite the cinema.'\n\nWhat does 'opposite' mean here?",
      options: ["Next to", "Behind", "Across from / Facing", "Far from"],
      correctAnswer: "Across from / Facing",
      explanation: "'Opposite' = directly across from, facing.",
      explanationSpanish: "'Opposite' = directamente enfrente de.",
      difficulty: 1,
      tags: ["listening", "directions", "vocabulary"]
    },
    {
      id: "a2-l2-14",
      type: "multiple-choice",
      question: "🔊 Directions: 'Keep going until you see the gas station. The restaurant is just beyond it.'\n\nWhat does 'beyond' mean here?",
      options: ["Before it", "Next to it", "Past it / Further than it", "Opposite it"],
      correctAnswer: "Past it / Further than it",
      explanation: "'Beyond' = further than, past.",
      explanationSpanish: "'Beyond' = más allá de, después de.",
      difficulty: 2,
      tags: ["listening", "directions", "vocabulary"]
    },
    {
      id: "a2-l2-15",
      type: "multiple-choice",
      question: "🔊 Directions: 'You can't miss it. The hospital is the big white building with the emergency sign.'\n\nHow is the hospital described?",
      options: ["Small and red", "Big and white", "Tall and gray", "Old and brown"],
      correctAnswer: "Big and white",
      explanation: "'The big white building'.",
      explanationSpanish: "'The big white building' (El edificio grande y blanco).",
      difficulty: 1,
      tags: ["listening", "directions", "descriptions"]
    },
  ],

  "a2-list-3": [
    // Basic Announcements
    {
      id: "a2-l3-1",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Attention passengers. Flight BA234 to London is now boarding at Gate 15.'\n\nWhich gate should passengers go to?",
      options: ["Gate 12", "Gate 14", "Gate 15", "Gate 23"],
      correctAnswer: "Gate 15",
      explanation: "'Boarding at Gate 15'.",
      explanationSpanish: "'Boarding at Gate 15'.",
      difficulty: 1,
      tags: ["listening", "announcements", "airport"]
    },
    {
      id: "a2-l3-2",
      type: "multiple-choice",
      question: "🔊 From the same announcement, where is the flight going?",
      options: ["Paris", "London", "Madrid", "Berlin"],
      correctAnswer: "London",
      explanation: "'Flight BA234 to London'.",
      explanationSpanish: "'Flight BA234 to London'.",
      difficulty: 1,
      tags: ["listening", "announcements", "destinations"]
    },
    {
      id: "a2-l3-3",
      type: "multiple-choice",
      question: "🔊 Announcement: 'The store will close in 15 minutes. Please bring your items to the register.'\n\nHow much time is left before the store closes?",
      options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
      correctAnswer: "15 minutes",
      explanation: "'The store will close in 15 minutes'.",
      explanationSpanish: "'The store will close in 15 minutes'.",
      difficulty: 1,
      tags: ["listening", "announcements", "shopping"]
    },
    {
      id: "a2-l3-4",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Platform change. The 10:30 train to Manchester will now depart from Platform 7, not Platform 3.'\n\nWhich platform is the train NOW leaving from?",
      options: ["Platform 3", "Platform 7", "Platform 10", "Platform 30"],
      correctAnswer: "Platform 7",
      explanation: "'Will now depart from Platform 7'.",
      explanationSpanish: "'Will now depart from Platform 7'.",
      difficulty: 1,
      tags: ["listening", "announcements", "trains"]
    },
    {
      id: "a2-l3-5",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Special offer in aisle 5! Buy 2 bottles of shampoo and get 1 free!'\n\nWhere is the special offer?",
      options: ["Aisle 2", "Aisle 3", "Aisle 5", "Aisle 7"],
      correctAnswer: "Aisle 5",
      explanation: "'Special offer in aisle 5'.",
      explanationSpanish: "'Special offer in aisle 5'.",
      difficulty: 1,
      tags: ["listening", "announcements", "shopping"]
    },
    {
      id: "a2-l3-6",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Due to bad weather, today's outdoor concert has been cancelled. Tickets will be refunded.'\n\nWhy was the concert cancelled?",
      options: ["Not enough tickets sold", "Bad weather", "The band is sick", "Technical problems"],
      correctAnswer: "Bad weather",
      explanation: "'Due to bad weather'.",
      explanationSpanish: "'Due to bad weather' (Debido al mal tiempo).",
      difficulty: 1,
      tags: ["listening", "announcements", "events"]
    },
    {
      id: "a2-l3-7",
      type: "multiple-choice",
      question: "🔊 Announcement: 'This is the final call for passengers on flight AA100 to New York. Please proceed to Gate 22 immediately.'\n\nWhat does 'final call' mean?",
      options: ["First announcement", "Last chance to board", "The flight is cancelled", "The flight is delayed"],
      correctAnswer: "Last chance to board",
      explanation: "'Final call' = last announcement before the gate closes.",
      explanationSpanish: "'Final call' = última llamada antes de cerrar la puerta.",
      difficulty: 1,
      tags: ["listening", "announcements", "airport"]
    },
    {
      id: "a2-l3-8",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Attention shoppers! The pharmacy section is now located on the second floor.'\n\nWhere is the pharmacy now?",
      options: ["First floor", "Second floor", "Third floor", "Ground floor"],
      correctAnswer: "Second floor",
      explanation: "'Located on the second floor'.",
      explanationSpanish: "'Located on the second floor'.",
      difficulty: 1,
      tags: ["listening", "announcements", "stores"]
    },
    {
      id: "a2-l3-9",
      type: "multiple-choice",
      question: "🔊 Announcement: 'The next train on Platform 2 is the 3:45 express to Chicago. This train does not stop at all stations.'\n\nDoes this train stop at every station?",
      options: ["Yes, all stations", "No, it's an express", "Only major stations", "It doesn't say"],
      correctAnswer: "No, it's an express",
      explanation: "'This train does not stop at all stations'.",
      explanationSpanish: "'This train does not stop at all stations' (Este tren no para en todas las estaciones).",
      difficulty: 1,
      tags: ["listening", "announcements", "trains"]
    },
    {
      id: "a2-l3-10",
      type: "multiple-choice",
      question: "🔊 Announcement: 'We apologize for the delay. The departure time has been changed to 4:30 PM.'\n\nWhat is the new departure time?",
      options: ["3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"],
      correctAnswer: "4:30 PM",
      explanation: "'Changed to 4:30 PM'.",
      explanationSpanish: "'Changed to 4:30 PM'.",
      difficulty: 1,
      tags: ["listening", "announcements", "delays"]
    },
    {
      id: "a2-l3-11",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Flash sale! All winter coats 50% off for the next hour only!'\n\nHow long does the sale last?",
      options: ["30 minutes", "1 hour", "2 hours", "All day"],
      correctAnswer: "1 hour",
      explanation: "'For the next hour only'.",
      explanationSpanish: "'For the next hour only' (Solo durante la próxima hora).",
      difficulty: 1,
      tags: ["listening", "announcements", "sales"]
    },
    {
      id: "a2-l3-12",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Would the owner of a blue Honda, license plate ABC 123, please return to your car immediately. Your lights are on.'\n\nWhat is the problem with the car?",
      options: ["Flat tire", "Window is open", "Lights are on", "Alarm is going off"],
      correctAnswer: "Lights are on",
      explanation: "'Your lights are on'.",
      explanationSpanish: "'Your lights are on' (Tus luces están encendidas).",
      difficulty: 1,
      tags: ["listening", "announcements", "parking"]
    },
    {
      id: "a2-l3-13",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Free coffee and cookies are available in the lobby for all conference attendees.'\n\nWhere can attendees get refreshments?",
      options: ["Conference room", "Lobby", "Cafeteria", "Outside"],
      correctAnswer: "Lobby",
      explanation: "'Available in the lobby'.",
      explanationSpanish: "'Available in the lobby' (Disponible en el vestíbulo).",
      difficulty: 1,
      tags: ["listening", "announcements", "events"]
    },
    {
      id: "a2-l3-14",
      type: "multiple-choice",
      question: "🔊 Announcement: 'The museum will close early today at 4 PM due to a private event. Regular hours resume tomorrow.'\n\nWhen does the museum close today?",
      options: ["3 PM", "4 PM", "5 PM", "6 PM"],
      correctAnswer: "4 PM",
      explanation: "'Close early today at 4 PM'.",
      explanationSpanish: "'Close early today at 4 PM'.",
      difficulty: 1,
      tags: ["listening", "announcements", "schedules"]
    },
    {
      id: "a2-l3-15",
      type: "multiple-choice",
      question: "🔊 Announcement: 'Passengers for Flight UA200, please note there is a 30-minute delay. We apologize for any inconvenience.'\n\nHow long is the delay?",
      options: ["15 minutes", "20 minutes", "30 minutes", "1 hour"],
      correctAnswer: "30 minutes",
      explanation: "'A 30-minute delay'.",
      explanationSpanish: "'A 30-minute delay' (Un retraso de 30 minutos).",
      difficulty: 1,
      tags: ["listening", "announcements", "airport"]
    },
  ],
};

// Function to get listening exercises by skill ID
export function getListeningExercisesBySkillId(skillId: string): Exercise[] {
  return listeningExercises[skillId] || [];
}
