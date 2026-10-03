// Complete Reading Exercises for all CEFR levels (A1-C2)
// Each skill has 20-30 functional exercises

import { Exercise } from "./exercisesData";

export const readingExercises: Record<string, Exercise[]> = {
  // =====================================================
  // A1 READING EXERCISES
  // =====================================================

  // A1 - Signs and Traffic Signals
  "a1-read-1": [
    {
      id: "a1-r1-1",
      type: "multiple-choice",
      question: "What does 'EXIT' mean on a sign?",
      options: ["Entrada", "Salida", "Baño", "Comida"],
      correctAnswer: "Salida",
      explanation: "EXIT means the way out of a building.",
      explanationSpanish: "EXIT significa la salida de un edificio.",
      difficulty: 1,
      tags: ["reading", "signs", "basic"]
    },
    {
      id: "a1-r1-2",
      type: "multiple-choice",
      question: "A sign says 'NO SMOKING'. What can't you do here?",
      options: ["Eat", "Drink", "Smoke", "Talk"],
      correctAnswer: "Smoke",
      explanation: "No smoking means smoking is prohibited.",
      explanationSpanish: "No smoking significa que está prohibido fumar.",
      difficulty: 1,
      tags: ["reading", "signs", "prohibition"]
    },
    {
      id: "a1-r1-3",
      type: "multiple-choice",
      question: "You see 'OPEN' on a shop door. What does it mean?",
      options: ["The shop is closed", "The shop is available", "The shop is full", "The shop is new"],
      correctAnswer: "The shop is available",
      explanation: "OPEN means the shop is available for customers.",
      explanationSpanish: "OPEN significa que la tienda está abierta para clientes.",
      difficulty: 1,
      tags: ["reading", "signs", "shops"]
    },
    {
      id: "a1-r1-4",
      type: "multiple-choice",
      question: "A sign shows 'PUSH'. What should you do with the door?",
      options: ["Pull it", "Push it", "Kick it", "Wait"],
      correctAnswer: "Push it",
      explanation: "PUSH means to press the door forward.",
      explanationSpanish: "PUSH significa empujar la puerta hacia adelante.",
      difficulty: 1,
      tags: ["reading", "signs", "instructions"]
    },
    {
      id: "a1-r1-5",
      type: "multiple-choice",
      question: "What does 'PULL' mean on a door?",
      options: ["Empujar", "Jalar/Tirar", "Cerrar", "Abrir"],
      correctAnswer: "Jalar/Tirar",
      explanation: "PULL means to draw the door towards you.",
      explanationSpanish: "PULL significa tirar de la puerta hacia ti.",
      difficulty: 1,
      tags: ["reading", "signs", "instructions"]
    },
    {
      id: "a1-r1-6",
      type: "multiple-choice",
      question: "You see a red octagon sign. What word is probably on it?",
      options: ["GO", "SLOW", "STOP", "FAST"],
      correctAnswer: "STOP",
      explanation: "Red octagon signs are STOP signs in traffic.",
      explanationSpanish: "Las señales octagonales rojas son señales de STOP en el tráfico.",
      difficulty: 1,
      tags: ["reading", "traffic-signs"]
    },
    {
      id: "a1-r1-7",
      type: "multiple-choice",
      question: "'CLOSED' on a shop means...",
      options: ["Come in", "The shop is not open", "Big sale", "New products"],
      correctAnswer: "The shop is not open",
      explanation: "CLOSED means the shop is not open for business.",
      explanationSpanish: "CLOSED significa que la tienda no está abierta.",
      difficulty: 1,
      tags: ["reading", "signs", "shops"]
    },
    {
      id: "a1-r1-8",
      type: "multiple-choice",
      question: "What does 'ENTRANCE' mean?",
      options: ["Exit", "Entry/Way in", "Bathroom", "Emergency"],
      correctAnswer: "Entry/Way in",
      explanation: "ENTRANCE is where you enter a building.",
      explanationSpanish: "ENTRANCE es por donde entras a un edificio.",
      difficulty: 1,
      tags: ["reading", "signs", "basic"]
    },
    {
      id: "a1-r1-9",
      type: "multiple-choice",
      question: "A sign says 'NO ENTRY'. What does it mean?",
      options: ["You can enter", "Entry is free", "You cannot enter", "Enter quickly"],
      correctAnswer: "You cannot enter",
      explanation: "NO ENTRY means you are not allowed to go in.",
      explanationSpanish: "NO ENTRY significa que no está permitido entrar.",
      difficulty: 1,
      tags: ["reading", "signs", "prohibition"]
    },
    {
      id: "a1-r1-10",
      type: "multiple-choice",
      question: "'RESTROOM' is the American word for...",
      options: ["Bedroom", "Living room", "Bathroom/Toilet", "Kitchen"],
      correctAnswer: "Bathroom/Toilet",
      explanation: "RESTROOM is the American English word for public toilet.",
      explanationSpanish: "RESTROOM es la palabra en inglés americano para baño público.",
      difficulty: 1,
      tags: ["reading", "signs", "vocabulary"]
    },
    {
      id: "a1-r1-11",
      type: "multiple-choice",
      question: "You see 'WET FLOOR'. What should you be careful about?",
      options: ["Hot food", "Slipping", "High prices", "Loud noise"],
      correctAnswer: "Slipping",
      explanation: "WET FLOOR warns that the floor is wet and slippery.",
      explanationSpanish: "WET FLOOR advierte que el piso está mojado y resbaladizo.",
      difficulty: 1,
      tags: ["reading", "signs", "warning"]
    },
    {
      id: "a1-r1-12",
      type: "multiple-choice",
      question: "'FREE WIFI' means...",
      options: ["Pay for internet", "Internet costs money", "Free internet connection", "No internet"],
      correctAnswer: "Free internet connection",
      explanation: "FREE WIFI means you can use internet for free.",
      explanationSpanish: "FREE WIFI significa que puedes usar internet gratis.",
      difficulty: 1,
      tags: ["reading", "signs", "technology"]
    },
    {
      id: "a1-r1-13",
      type: "multiple-choice",
      question: "A yellow triangle sign usually means...",
      options: ["Stop", "Go", "Warning/Caution", "Information"],
      correctAnswer: "Warning/Caution",
      explanation: "Yellow triangle signs are warning signs.",
      explanationSpanish: "Las señales de triángulo amarillo son advertencias.",
      difficulty: 1,
      tags: ["reading", "traffic-signs", "warning"]
    },
    {
      id: "a1-r1-14",
      type: "multiple-choice",
      question: "'STAFF ONLY' means...",
      options: ["Everyone can enter", "Only employees can enter", "Children only", "VIP area"],
      correctAnswer: "Only employees can enter",
      explanation: "STAFF ONLY means only workers/employees are allowed.",
      explanationSpanish: "STAFF ONLY significa que solo los empleados pueden entrar.",
      difficulty: 2,
      tags: ["reading", "signs", "restriction"]
    },
    {
      id: "a1-r1-15",
      type: "multiple-choice",
      question: "What does 'SALE' mean in a shop window?",
      options: ["New products", "Discounted prices", "Shop is closing", "Store is full"],
      correctAnswer: "Discounted prices",
      explanation: "SALE means products are being sold at lower prices.",
      explanationSpanish: "SALE significa que los productos tienen descuento.",
      difficulty: 1,
      tags: ["reading", "signs", "shopping"]
    },
    {
      id: "a1-r1-16",
      type: "multiple-choice",
      question: "'ATM' is a machine where you can...",
      options: ["Buy tickets", "Get money", "Buy food", "Print photos"],
      correctAnswer: "Get money",
      explanation: "ATM (Automated Teller Machine) is where you withdraw cash.",
      explanationSpanish: "ATM (Cajero Automático) es donde sacas dinero.",
      difficulty: 1,
      tags: ["reading", "signs", "banking"]
    },
    {
      id: "a1-r1-17",
      type: "multiple-choice",
      question: "A 'P' sign with a car usually means...",
      options: ["No parking", "Parking area", "Police station", "Petrol station"],
      correctAnswer: "Parking area",
      explanation: "'P' with a car indicates a parking area.",
      explanationSpanish: "'P' con un carro indica área de estacionamiento.",
      difficulty: 1,
      tags: ["reading", "traffic-signs"]
    },
    {
      id: "a1-r1-18",
      type: "multiple-choice",
      question: "'24/7' means the place is open...",
      options: ["24 hours, 7 days a week", "From 7am to 24pm", "Only on weekdays", "Only weekends"],
      correctAnswer: "24 hours, 7 days a week",
      explanation: "24/7 means always open, every day, all day.",
      explanationSpanish: "24/7 significa abierto siempre, todos los días, todo el día.",
      difficulty: 2,
      tags: ["reading", "signs", "time"]
    },
    {
      id: "a1-r1-19",
      type: "multiple-choice",
      question: "'KEEP OUT' means...",
      options: ["Come in", "Stay outside/Don't enter", "Keep clean", "Look inside"],
      correctAnswer: "Stay outside/Don't enter",
      explanation: "KEEP OUT means you should not enter this area.",
      explanationSpanish: "KEEP OUT significa que no debes entrar a esta área.",
      difficulty: 2,
      tags: ["reading", "signs", "warning"]
    },
    {
      id: "a1-r1-20",
      type: "multiple-choice",
      question: "A sign with a knife and fork symbol usually means...",
      options: ["Hospital", "Restaurant/Food", "School", "Bank"],
      correctAnswer: "Restaurant/Food",
      explanation: "Knife and fork symbols indicate food/restaurant nearby.",
      explanationSpanish: "Los símbolos de cuchillo y tenedor indican comida/restaurante cerca.",
      difficulty: 1,
      tags: ["reading", "signs", "symbols"]
    },
    {
      id: "a1-r1-21",
      type: "true-false",
      question: "'EXIT' and 'ENTRANCE' mean the same thing.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "EXIT is the way out, ENTRANCE is the way in.",
      explanationSpanish: "EXIT es la salida, ENTRANCE es la entrada.",
      difficulty: 1,
      tags: ["reading", "signs", "basic"]
    },
    {
      id: "a1-r1-22",
      type: "multiple-choice",
      question: "What does 'DANGER' on a sign warn you about?",
      options: ["Something good", "Something dangerous", "Something free", "Something new"],
      correctAnswer: "Something dangerous",
      explanation: "DANGER warns about potential hazards.",
      explanationSpanish: "DANGER advierte sobre peligros potenciales.",
      difficulty: 1,
      tags: ["reading", "signs", "warning"]
    },
    {
      id: "a1-r1-23",
      type: "multiple-choice",
      question: "'CAUTION' means you should be...",
      options: ["Fast", "Careful", "Happy", "Angry"],
      correctAnswer: "Careful",
      explanation: "CAUTION means be careful, there's a potential problem.",
      explanationSpanish: "CAUTION significa tener cuidado, hay un problema potencial.",
      difficulty: 2,
      tags: ["reading", "signs", "warning"]
    },
    {
      id: "a1-r1-24",
      type: "multiple-choice",
      question: "A sign shows 'i' in a circle. This usually means...",
      options: ["Internet", "Information", "Ice cream", "Important"],
      correctAnswer: "Information",
      explanation: "The 'i' symbol indicates an information point.",
      explanationSpanish: "El símbolo 'i' indica un punto de información.",
      difficulty: 1,
      tags: ["reading", "signs", "symbols"]
    },
    {
      id: "a1-r1-25",
      type: "multiple-choice",
      question: "'BEWARE OF DOG' means...",
      options: ["Dogs for sale", "Be careful, there's a dog", "Dogs allowed", "Dog food"],
      correctAnswer: "Be careful, there's a dog",
      explanation: "BEWARE OF DOG warns that there's a potentially dangerous dog.",
      explanationSpanish: "BEWARE OF DOG advierte que hay un perro potencialmente peligroso.",
      difficulty: 2,
      tags: ["reading", "signs", "warning"]
    },
  ],

  // A1 - Simple Forms
  "a1-read-2": [
    {
      id: "a1-r2-1",
      type: "multiple-choice",
      question: "On a form, 'First Name' means your...",
      options: ["Family name", "Given name/Personal name", "Middle name", "Nickname"],
      correctAnswer: "Given name/Personal name",
      explanation: "First Name is your personal/given name, not your family name.",
      explanationSpanish: "First Name es tu nombre personal, no tu apellido.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-2",
      type: "multiple-choice",
      question: "'Last Name' or 'Surname' on a form means your...",
      options: ["First name", "Family name", "Middle name", "Nickname"],
      correctAnswer: "Family name",
      explanation: "Last Name/Surname is your family name.",
      explanationSpanish: "Last Name/Surname es tu apellido.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-3",
      type: "multiple-choice",
      question: "'DOB' on a form means...",
      options: ["Date of Birth", "Day of Business", "Door of Building", "Department of Budget"],
      correctAnswer: "Date of Birth",
      explanation: "DOB is the abbreviation for Date of Birth.",
      explanationSpanish: "DOB es la abreviación de Fecha de Nacimiento.",
      difficulty: 2,
      tags: ["reading", "forms", "abbreviations"]
    },
    {
      id: "a1-r2-4",
      type: "multiple-choice",
      question: "A form asks for your 'Address'. What information do they want?",
      options: ["Your phone number", "Where you live", "Your email", "Your age"],
      correctAnswer: "Where you live",
      explanation: "Address means the place where you live.",
      explanationSpanish: "Address significa el lugar donde vives.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-5",
      type: "multiple-choice",
      question: "'Phone Number' or 'Tel.' asks for your...",
      options: ["Email", "Address", "Telephone number", "Name"],
      correctAnswer: "Telephone number",
      explanation: "Tel. is the abbreviation for telephone.",
      explanationSpanish: "Tel. es la abreviación de teléfono.",
      difficulty: 1,
      tags: ["reading", "forms", "contact"]
    },
    {
      id: "a1-r2-6",
      type: "multiple-choice",
      question: "'Email' on a form refers to your...",
      options: ["Home address", "Electronic mail address", "Phone number", "Postal code"],
      correctAnswer: "Electronic mail address",
      explanation: "Email is your electronic mail address (like name@gmail.com).",
      explanationSpanish: "Email es tu dirección de correo electrónico.",
      difficulty: 1,
      tags: ["reading", "forms", "contact"]
    },
    {
      id: "a1-r2-7",
      type: "multiple-choice",
      question: "'Nationality' on a form asks about...",
      options: ["Your age", "Your country", "Your job", "Your hobby"],
      correctAnswer: "Your country",
      explanation: "Nationality is about which country you are from or belong to.",
      explanationSpanish: "Nationality pregunta de qué país eres.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-8",
      type: "multiple-choice",
      question: "'Gender' or 'Sex' on a form asks if you are...",
      options: ["Young or old", "Male or Female", "Tall or short", "Student or worker"],
      correctAnswer: "Male or Female",
      explanation: "Gender asks about your biological sex or gender identity.",
      explanationSpanish: "Gender pregunta sobre tu sexo o identidad de género.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-9",
      type: "multiple-choice",
      question: "'Signature' on a form means you need to...",
      options: ["Write your address", "Write your name in your personal style", "Draw a picture", "Write the date"],
      correctAnswer: "Write your name in your personal style",
      explanation: "Signature is your name written in your unique, personal way.",
      explanationSpanish: "Signature es tu nombre escrito de tu manera personal y única.",
      difficulty: 2,
      tags: ["reading", "forms", "documents"]
    },
    {
      id: "a1-r2-10",
      type: "multiple-choice",
      question: "'Zip Code' or 'Postal Code' is...",
      options: ["Your phone number", "A code for your area/location", "Your email", "Your password"],
      correctAnswer: "A code for your area/location",
      explanation: "Zip/Postal Code is a number that identifies your geographic area.",
      explanationSpanish: "Zip/Postal Code es un número que identifica tu área geográfica.",
      difficulty: 2,
      tags: ["reading", "forms", "address"]
    },
    {
      id: "a1-r2-11",
      type: "multiple-choice",
      question: "'Occupation' on a form asks about your...",
      options: ["Age", "Job/Profession", "Hobby", "Education"],
      correctAnswer: "Job/Profession",
      explanation: "Occupation means your job or profession.",
      explanationSpanish: "Occupation significa tu trabajo o profesión.",
      difficulty: 1,
      tags: ["reading", "forms", "work"]
    },
    {
      id: "a1-r2-12",
      type: "multiple-choice",
      question: "On a form, 'M' usually means...",
      options: ["Mother", "Male", "Married", "Monday"],
      correctAnswer: "Male",
      explanation: "M is the abbreviation for Male (man/boy).",
      explanationSpanish: "M es la abreviación de Male (hombre/niño).",
      difficulty: 1,
      tags: ["reading", "forms", "abbreviations"]
    },
    {
      id: "a1-r2-13",
      type: "multiple-choice",
      question: "On a form, 'F' usually means...",
      options: ["Father", "Female", "Friend", "Friday"],
      correctAnswer: "Female",
      explanation: "F is the abbreviation for Female (woman/girl).",
      explanationSpanish: "F es la abreviación de Female (mujer/niña).",
      difficulty: 1,
      tags: ["reading", "forms", "abbreviations"]
    },
    {
      id: "a1-r2-14",
      type: "multiple-choice",
      question: "'Marital Status' asks if you are...",
      options: ["Student or worker", "Single or married", "Tall or short", "Young or old"],
      correctAnswer: "Single or married",
      explanation: "Marital Status asks about your marriage situation.",
      explanationSpanish: "Marital Status pregunta sobre tu estado civil.",
      difficulty: 2,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-15",
      type: "multiple-choice",
      question: "'City' on an address form means...",
      options: ["Your country", "Your street", "The town/city you live in", "Your building"],
      correctAnswer: "The town/city you live in",
      explanation: "City is the town or city where you live.",
      explanationSpanish: "City es la ciudad o pueblo donde vives.",
      difficulty: 1,
      tags: ["reading", "forms", "address"]
    },
    {
      id: "a1-r2-16",
      type: "multiple-choice",
      question: "'Country' on a form asks for...",
      options: ["Your city", "Your street", "Your nation (Mexico, USA, Spain...)", "Your house number"],
      correctAnswer: "Your nation (Mexico, USA, Spain...)",
      explanation: "Country is the nation where you live or are from.",
      explanationSpanish: "Country es la nación donde vives o de donde eres.",
      difficulty: 1,
      tags: ["reading", "forms", "address"]
    },
    {
      id: "a1-r2-17",
      type: "multiple-choice",
      question: "'Age' on a form refers to...",
      options: ["How tall you are", "How many years old you are", "Where you live", "Your job"],
      correctAnswer: "How many years old you are",
      explanation: "Age is how many years you have lived.",
      explanationSpanish: "Age es cuántos años tienes.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-18",
      type: "multiple-choice",
      question: "'Please print' on a form means you should write...",
      options: ["In cursive", "In capital/clear letters", "Very small", "In pencil"],
      correctAnswer: "In capital/clear letters",
      explanation: "Print means write clearly, not in cursive.",
      explanationSpanish: "Print significa escribir claramente, no en cursiva.",
      difficulty: 2,
      tags: ["reading", "forms", "instructions"]
    },
    {
      id: "a1-r2-19",
      type: "multiple-choice",
      question: "'Emergency Contact' asks for...",
      options: ["Your doctor", "Someone to call if something happens to you", "Your boss", "Your teacher"],
      correctAnswer: "Someone to call if something happens to you",
      explanation: "Emergency Contact is a person to contact in case of emergency.",
      explanationSpanish: "Emergency Contact es una persona a contactar en caso de emergencia.",
      difficulty: 2,
      tags: ["reading", "forms", "safety"]
    },
    {
      id: "a1-r2-20",
      type: "true-false",
      question: "'Full Name' means only your first name.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Full Name includes your first name AND last name (surname).",
      explanationSpanish: "Full Name incluye tu nombre Y apellido.",
      difficulty: 1,
      tags: ["reading", "forms", "personal-info"]
    },
    {
      id: "a1-r2-21",
      type: "multiple-choice",
      question: "'Date' on a form usually means...",
      options: ["Your birthday", "Today's date", "Your meeting date", "Your work date"],
      correctAnswer: "Today's date",
      explanation: "When filling a form, Date usually means today's date.",
      explanationSpanish: "Al llenar un formulario, Date usualmente significa la fecha de hoy.",
      difficulty: 1,
      tags: ["reading", "forms", "time"]
    },
    {
      id: "a1-r2-22",
      type: "multiple-choice",
      question: "In American dates, 01/15/2024 means...",
      options: ["January 15, 2024", "15 January, 2024", "First of 15 months, 2024", "None of these"],
      correctAnswer: "January 15, 2024",
      explanation: "American dates use MM/DD/YYYY format.",
      explanationSpanish: "Las fechas americanas usan el formato MM/DD/AAAA.",
      difficulty: 2,
      tags: ["reading", "forms", "dates"]
    },
    {
      id: "a1-r2-23",
      type: "multiple-choice",
      question: "'Mr.' before a name indicates...",
      options: ["A woman", "A man", "A child", "A doctor"],
      correctAnswer: "A man",
      explanation: "Mr. (Mister) is a title for adult males.",
      explanationSpanish: "Mr. (Señor) es un título para hombres adultos.",
      difficulty: 1,
      tags: ["reading", "forms", "titles"]
    },
    {
      id: "a1-r2-24",
      type: "multiple-choice",
      question: "'Mrs.' indicates a ___ woman.",
      options: ["Single", "Married", "Young", "Old"],
      correctAnswer: "Married",
      explanation: "Mrs. is used for married women.",
      explanationSpanish: "Mrs. se usa para mujeres casadas.",
      difficulty: 1,
      tags: ["reading", "forms", "titles"]
    },
    {
      id: "a1-r2-25",
      type: "multiple-choice",
      question: "'Ms.' is used when you don't know if a woman is...",
      options: ["Young or old", "Married or single", "Student or worker", "Tall or short"],
      correctAnswer: "Married or single",
      explanation: "Ms. is used for women regardless of marital status.",
      explanationSpanish: "Ms. se usa para mujeres sin importar su estado civil.",
      difficulty: 2,
      tags: ["reading", "forms", "titles"]
    },
  ],

  // =====================================================
  // A2 READING EXERCISES  
  // =====================================================

  "a2-read-1": [
    // Emails and Short Messages
    {
      id: "a2-r1-1",
      type: "multiple-choice",
      question: "Read: 'Hi Tom! Dinner at 7pm tonight at my place. Bring dessert! - Sarah'\nWhat time is dinner?",
      options: ["6pm", "7pm", "8pm", "9pm"],
      correctAnswer: "7pm",
      explanation: "The email says 'Dinner at 7pm'.",
      explanationSpanish: "El email dice 'Dinner at 7pm'.",
      difficulty: 1,
      tags: ["reading", "emails", "time"]
    },
    {
      id: "a2-r1-2",
      type: "multiple-choice",
      question: "From the same email, what should Tom bring?",
      options: ["Drinks", "Dessert", "Main dish", "Salad"],
      correctAnswer: "Dessert",
      explanation: "Sarah asks Tom to 'Bring dessert!'",
      explanationSpanish: "Sarah le pide a Tom 'Bring dessert!'",
      difficulty: 1,
      tags: ["reading", "emails", "comprehension"]
    },
    {
      id: "a2-r1-3",
      type: "multiple-choice",
      question: "Read: 'Dear Mr. Smith, Your appointment is confirmed for Tuesday at 2pm. Best regards, Dr. Jones'\nWho sent this email?",
      options: ["Mr. Smith", "Dr. Jones", "A patient", "A friend"],
      correctAnswer: "Dr. Jones",
      explanation: "The email is signed 'Dr. Jones'.",
      explanationSpanish: "El email está firmado por 'Dr. Jones'.",
      difficulty: 1,
      tags: ["reading", "emails", "formal"]
    },
    {
      id: "a2-r1-4",
      type: "multiple-choice",
      question: "From the same email, when is the appointment?",
      options: ["Monday at 2pm", "Tuesday at 2pm", "Wednesday at 2pm", "Thursday at 2pm"],
      correctAnswer: "Tuesday at 2pm",
      explanation: "The email confirms 'Tuesday at 2pm'.",
      explanationSpanish: "El email confirma 'Tuesday at 2pm'.",
      difficulty: 1,
      tags: ["reading", "emails", "time"]
    },
    {
      id: "a2-r1-5",
      type: "multiple-choice",
      question: "Read: 'Running 10 mins late. Traffic! C u soon 😊'\nWhat does 'C u soon' mean?",
      options: ["See you soon", "Call you soon", "Can you soon", "Come you soon"],
      correctAnswer: "See you soon",
      explanation: "'C u' is text-speak for 'See you'.",
      explanationSpanish: "'C u' es jerga de mensajes de texto para 'See you'.",
      difficulty: 2,
      tags: ["reading", "text-messages", "slang"]
    },
    {
      id: "a2-r1-6",
      type: "multiple-choice",
      question: "From the same message, why is the person late?",
      options: ["Work", "Traffic", "Sleep", "Illness"],
      correctAnswer: "Traffic",
      explanation: "The person says 'Traffic!' as the reason.",
      explanationSpanish: "La persona dice 'Traffic!' como razón.",
      difficulty: 1,
      tags: ["reading", "text-messages", "comprehension"]
    },
    {
      id: "a2-r1-7",
      type: "multiple-choice",
      question: "Read: 'Thx for the gift! Loved it! ❤️'\nWhat does 'Thx' mean?",
      options: ["This", "Thanks", "Things", "Think"],
      correctAnswer: "Thanks",
      explanation: "'Thx' is a common abbreviation for 'Thanks'.",
      explanationSpanish: "'Thx' es una abreviación común de 'Thanks'.",
      difficulty: 1,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-8",
      type: "multiple-choice",
      question: "Read: 'Subject: Meeting postponed\nHi team, Friday's meeting is moved to Monday. Same time. - Boss'\nWhen is the new meeting?",
      options: ["Friday", "Monday", "Tuesday", "Wednesday"],
      correctAnswer: "Monday",
      explanation: "The meeting is 'moved to Monday'.",
      explanationSpanish: "La reunión está 'moved to Monday'.",
      difficulty: 1,
      tags: ["reading", "emails", "work"]
    },
    {
      id: "a2-r1-9",
      type: "multiple-choice",
      question: "From the same email, what time is the meeting?",
      options: ["Different time", "Same time as before", "Morning", "It doesn't say"],
      correctAnswer: "Same time as before",
      explanation: "The email says 'Same time'.",
      explanationSpanish: "El email dice 'Same time'.",
      difficulty: 1,
      tags: ["reading", "emails", "comprehension"]
    },
    {
      id: "a2-r1-10",
      type: "multiple-choice",
      question: "Read: 'OMG! Did you hear about the party? It was amazing! Btw, got your message.'\nWhat does 'Btw' mean?",
      options: ["By the way", "Between", "But why", "Big time win"],
      correctAnswer: "By the way",
      explanation: "'Btw' means 'By the way'.",
      explanationSpanish: "'Btw' significa 'By the way' (por cierto).",
      difficulty: 2,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-11",
      type: "multiple-choice",
      question: "Read: 'Dear Customer, Your order #12345 has shipped. Delivery expected in 3-5 days.'\nWhat is the email about?",
      options: ["A complaint", "A shipping notification", "A payment request", "A job offer"],
      correctAnswer: "A shipping notification",
      explanation: "The email informs that the order 'has shipped'.",
      explanationSpanish: "El email informa que el pedido 'has shipped' (ha sido enviado).",
      difficulty: 1,
      tags: ["reading", "emails", "shopping"]
    },
    {
      id: "a2-r1-12",
      type: "multiple-choice",
      question: "From the same email, when will the order arrive?",
      options: ["Today", "Tomorrow", "In 3-5 days", "Next month"],
      correctAnswer: "In 3-5 days",
      explanation: "'Delivery expected in 3-5 days'.",
      explanationSpanish: "'Delivery expected in 3-5 days' (entrega esperada en 3-5 días).",
      difficulty: 1,
      tags: ["reading", "emails", "time"]
    },
    {
      id: "a2-r1-13",
      type: "multiple-choice",
      question: "'ASAP' in an email means...",
      options: ["As soon as possible", "As simple as possible", "Always send a photo", "After Saturday and Sunday"],
      correctAnswer: "As soon as possible",
      explanation: "ASAP = As Soon As Possible",
      explanationSpanish: "ASAP = As Soon As Possible (lo antes posible)",
      difficulty: 1,
      tags: ["reading", "emails", "abbreviations"]
    },
    {
      id: "a2-r1-14",
      type: "multiple-choice",
      question: "Read: 'FYI: The office will be closed tomorrow. - HR'\nWhat does 'FYI' mean?",
      options: ["For your interest", "For your information", "From your inbox", "Find your information"],
      correctAnswer: "For your information",
      explanation: "FYI = For Your Information",
      explanationSpanish: "FYI = For Your Information (para tu información)",
      difficulty: 2,
      tags: ["reading", "emails", "abbreviations"]
    },
    {
      id: "a2-r1-15",
      type: "multiple-choice",
      question: "'Kind regards' at the end of an email is...",
      options: ["An insult", "A polite closing", "A question", "A demand"],
      correctAnswer: "A polite closing",
      explanation: "'Kind regards' is a formal, polite way to end an email.",
      explanationSpanish: "'Kind regards' es una forma formal y educada de terminar un email.",
      difficulty: 1,
      tags: ["reading", "emails", "formal"]
    },
    {
      id: "a2-r1-16",
      type: "multiple-choice",
      question: "Read: 'Subject: RE: Your question'\nWhat does 'RE:' mean?",
      options: ["About/Regarding", "Really", "Read", "Remove"],
      correctAnswer: "About/Regarding",
      explanation: "RE: indicates a reply to a previous email.",
      explanationSpanish: "RE: indica una respuesta a un email anterior.",
      difficulty: 2,
      tags: ["reading", "emails", "abbreviations"]
    },
    {
      id: "a2-r1-17",
      type: "multiple-choice",
      question: "'IMO' in a message means...",
      options: ["In my opinion", "I must order", "It might occur", "Instant message only"],
      correctAnswer: "In my opinion",
      explanation: "IMO = In My Opinion",
      explanationSpanish: "IMO = In My Opinion (en mi opinión)",
      difficulty: 2,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-18",
      type: "multiple-choice",
      question: "Read: 'Pls call me when u can. Urgent!'\nWhat does 'Pls' mean?",
      options: ["Plus", "Please", "Place", "Police"],
      correctAnswer: "Please",
      explanation: "'Pls' is text-speak for 'Please'.",
      explanationSpanish: "'Pls' es jerga de texto para 'Please'.",
      difficulty: 1,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-19",
      type: "multiple-choice",
      question: "Read: 'IDK what to wear tonight. Any ideas?'\nWhat does 'IDK' mean?",
      options: ["I do know", "I don't know", "I didn't know", "I did know"],
      correctAnswer: "I don't know",
      explanation: "IDK = I Don't Know",
      explanationSpanish: "IDK = I Don't Know (no sé)",
      difficulty: 1,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-20",
      type: "multiple-choice",
      question: "Read: 'NP! Happy to help anytime.'\nWhat does 'NP' mean?",
      options: ["No problem", "Not possible", "New person", "Nice photo"],
      correctAnswer: "No problem",
      explanation: "NP = No Problem",
      explanationSpanish: "NP = No Problem (no hay problema)",
      difficulty: 1,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-21",
      type: "multiple-choice",
      question: "What does 'LOL' mean in a message?",
      options: ["Lots of love", "Laughing out loud", "Lots of luck", "Looking on line"],
      correctAnswer: "Laughing out loud",
      explanation: "LOL = Laughing Out Loud (though some use it as 'Lots of Love').",
      explanationSpanish: "LOL = Laughing Out Loud (riéndome fuerte).",
      difficulty: 1,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-22",
      type: "multiple-choice",
      question: "Read: 'BRB, need to grab something.'\nWhat does 'BRB' mean?",
      options: ["Be right back", "Bring real bread", "Better response before", "Big red box"],
      correctAnswer: "Be right back",
      explanation: "BRB = Be Right Back",
      explanationSpanish: "BRB = Be Right Back (vuelvo enseguida).",
      difficulty: 2,
      tags: ["reading", "text-messages", "abbreviations"]
    },
    {
      id: "a2-r1-23",
      type: "multiple-choice",
      question: "Read: 'Attached is my CV for your review.'\nWhat is a 'CV'?",
      options: ["A photo", "A resume/curriculum vitae", "A contract", "A video"],
      correctAnswer: "A resume/curriculum vitae",
      explanation: "CV = Curriculum Vitae (resume).",
      explanationSpanish: "CV = Curriculum Vitae (currículum).",
      difficulty: 2,
      tags: ["reading", "emails", "work"]
    },
    {
      id: "a2-r1-24",
      type: "true-false",
      question: "'Best wishes' is an appropriate way to end a friendly email.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "'Best wishes' is a friendly and polite email closing.",
      explanationSpanish: "'Best wishes' es una forma amigable y educada de cerrar un email.",
      difficulty: 1,
      tags: ["reading", "emails", "format"]
    },
    {
      id: "a2-r1-25",
      type: "multiple-choice",
      question: "Read: 'ETA 20 mins. Traffic is terrible!'\nWhat does 'ETA' mean?",
      options: ["Eating time again", "Estimated time of arrival", "Easy to arrange", "End time available"],
      correctAnswer: "Estimated time of arrival",
      explanation: "ETA = Estimated Time of Arrival",
      explanationSpanish: "ETA = Estimated Time of Arrival (hora estimada de llegada).",
      difficulty: 2,
      tags: ["reading", "text-messages", "abbreviations"]
    },
  ],

  "a2-read-2": [
    // Menus and Schedules
    {
      id: "a2-r2-1",
      type: "multiple-choice",
      question: "Read menu: 'Caesar Salad..............$12 / Grilled Chicken...........$18 / Fish of the Day...........$22'\nWhat's the cheapest item?",
      options: ["Grilled Chicken", "Fish of the Day", "Caesar Salad", "They cost the same"],
      correctAnswer: "Caesar Salad",
      explanation: "Caesar Salad costs $12, which is the least.",
      explanationSpanish: "Caesar Salad cuesta $12, que es el menor precio.",
      difficulty: 1,
      tags: ["reading", "menus", "prices"]
    },
    {
      id: "a2-r2-2",
      type: "multiple-choice",
      question: "From the same menu, how much does Grilled Chicken cost?",
      options: ["$12", "$18", "$22", "$15"],
      correctAnswer: "$18",
      explanation: "Grilled Chicken costs $18.",
      explanationSpanish: "Grilled Chicken cuesta $18.",
      difficulty: 1,
      tags: ["reading", "menus", "prices"]
    },
    {
      id: "a2-r2-3",
      type: "multiple-choice",
      question: "Read schedule: 'Bus 42: Departs 8:00, 8:30, 9:00, 9:30...'\nHow often does Bus 42 leave?",
      options: ["Every 15 minutes", "Every 30 minutes", "Every hour", "Every 45 minutes"],
      correctAnswer: "Every 30 minutes",
      explanation: "The bus leaves at 8:00, 8:30, 9:00... that's every 30 minutes.",
      explanationSpanish: "El bus sale a las 8:00, 8:30, 9:00... eso es cada 30 minutos.",
      difficulty: 1,
      tags: ["reading", "schedules", "time"]
    },
    {
      id: "a2-r2-4",
      type: "multiple-choice",
      question: "Read: 'Train to London: Platform 5, Departing 14:35'\nWhat time does the train leave?",
      options: ["2:35 AM", "2:35 PM", "4:35 PM", "5:35 PM"],
      correctAnswer: "2:35 PM",
      explanation: "14:35 in 24-hour time is 2:35 PM.",
      explanationSpanish: "14:35 en formato de 24 horas es 2:35 PM.",
      difficulty: 2,
      tags: ["reading", "schedules", "time"]
    },
    {
      id: "a2-r2-5",
      type: "multiple-choice",
      question: "From the same schedule, which platform should you go to?",
      options: ["Platform 3", "Platform 4", "Platform 5", "Platform 14"],
      correctAnswer: "Platform 5",
      explanation: "The train leaves from 'Platform 5'.",
      explanationSpanish: "El tren sale de 'Platform 5'.",
      difficulty: 1,
      tags: ["reading", "schedules", "trains"]
    },
    {
      id: "a2-r2-6",
      type: "multiple-choice",
      question: "Read menu: 'Starters / Main Courses / Desserts / Beverages'\n'Starters' are...",
      options: ["Small first dishes", "Main dishes", "Drinks", "Sweet dishes"],
      correctAnswer: "Small first dishes",
      explanation: "Starters (appetizers) are small dishes served before the main course.",
      explanationSpanish: "Starters (entradas) son platos pequeños servidos antes del plato principal.",
      difficulty: 1,
      tags: ["reading", "menus", "vocabulary"]
    },
    {
      id: "a2-r2-7",
      type: "multiple-choice",
      question: "'Beverages' on a menu means...",
      options: ["Main courses", "Desserts", "Drinks", "Salads"],
      correctAnswer: "Drinks",
      explanation: "Beverages = drinks (water, soda, juice, etc.)",
      explanationSpanish: "Beverages = bebidas (agua, refresco, jugo, etc.)",
      difficulty: 1,
      tags: ["reading", "menus", "vocabulary"]
    },
    {
      id: "a2-r2-8",
      type: "multiple-choice",
      question: "Read: 'Flight AA123: Gate B7, Boarding 10:15, Departure 10:45'\nWhat is the gate number?",
      options: ["AA123", "B7", "10:15", "10:45"],
      correctAnswer: "B7",
      explanation: "The gate is 'Gate B7'.",
      explanationSpanish: "La puerta es 'Gate B7'.",
      difficulty: 1,
      tags: ["reading", "schedules", "airport"]
    },
    {
      id: "a2-r2-9",
      type: "multiple-choice",
      question: "From the same flight info, what time does boarding begin?",
      options: ["10:15", "10:45", "7:00", "12:30"],
      correctAnswer: "10:15",
      explanation: "Boarding time is 10:15.",
      explanationSpanish: "La hora de embarque es 10:15.",
      difficulty: 1,
      tags: ["reading", "schedules", "airport"]
    },
    {
      id: "a2-r2-10",
      type: "multiple-choice",
      question: "Read movie schedule: 'The Action Movie - 2:30pm, 5:00pm, 7:30pm, 10:00pm'\nIf you finish work at 6pm, which showing can you watch?",
      options: ["2:30pm", "5:00pm", "7:30pm or 10:00pm", "None of them"],
      correctAnswer: "7:30pm or 10:00pm",
      explanation: "After 6pm, you can catch 7:30pm or 10:00pm.",
      explanationSpanish: "Después de las 6pm, puedes ir a las 7:30pm o 10:00pm.",
      difficulty: 2,
      tags: ["reading", "schedules", "movies"]
    },
    {
      id: "a2-r2-11",
      type: "multiple-choice",
      question: "Read menu: 'Soup of the Day (V) - $8'\nWhat does '(V)' probably mean?",
      options: ["Very good", "Vegetarian", "Value", "Vitamin"],
      correctAnswer: "Vegetarian",
      explanation: "(V) commonly indicates vegetarian options.",
      explanationSpanish: "(V) comúnmente indica opciones vegetarianas.",
      difficulty: 2,
      tags: ["reading", "menus", "symbols"]
    },
    {
      id: "a2-r2-12",
      type: "multiple-choice",
      question: "Read: 'Gym Hours: Mon-Fri 6am-10pm, Sat-Sun 8am-8pm'\nWhat time does the gym open on Saturday?",
      options: ["6am", "8am", "10pm", "8pm"],
      correctAnswer: "8am",
      explanation: "On weekends (Sat-Sun), the gym opens at 8am.",
      explanationSpanish: "Los fines de semana (Sab-Dom), el gym abre a las 8am.",
      difficulty: 1,
      tags: ["reading", "schedules", "business-hours"]
    },
    {
      id: "a2-r2-13",
      type: "multiple-choice",
      question: "From the same gym schedule, what time does it close on Friday?",
      options: ["6am", "8am", "8pm", "10pm"],
      correctAnswer: "10pm",
      explanation: "Mon-Fri the gym closes at 10pm.",
      explanationSpanish: "De Lunes a Viernes el gym cierra a las 10pm.",
      difficulty: 1,
      tags: ["reading", "schedules", "business-hours"]
    },
    {
      id: "a2-r2-14",
      type: "multiple-choice",
      question: "Read menu: 'GF' next to an item means...",
      options: ["Great Flavor", "Gluten Free", "Good Food", "Girls' Favorite"],
      correctAnswer: "Gluten Free",
      explanation: "GF = Gluten Free (for people with celiac disease).",
      explanationSpanish: "GF = Gluten Free (sin gluten, para personas con celíacos).",
      difficulty: 2,
      tags: ["reading", "menus", "symbols"]
    },
    {
      id: "a2-r2-15",
      type: "multiple-choice",
      question: "Read: 'Store Holiday Hours: Dec 25 - CLOSED, Dec 26 - 10am-6pm'\nIs the store open on Christmas Day (Dec 25)?",
      options: ["Yes, 10am-6pm", "Yes, normal hours", "No, it's closed", "Only in the morning"],
      correctAnswer: "No, it's closed",
      explanation: "Dec 25 shows 'CLOSED'.",
      explanationSpanish: "El 25 de Dic dice 'CLOSED' (cerrado).",
      difficulty: 1,
      tags: ["reading", "schedules", "holidays"]
    },
    {
      id: "a2-r2-16",
      type: "multiple-choice",
      question: "Read TV schedule: 'News - 7pm / Movie - 9pm / Late Show - 11pm'\nHow long is the movie slot?",
      options: ["1 hour", "2 hours", "3 hours", "30 minutes"],
      correctAnswer: "2 hours",
      explanation: "Movie at 9pm, Late Show at 11pm = 2 hours for movie.",
      explanationSpanish: "Película a las 9pm, Late Show a las 11pm = 2 horas para película.",
      difficulty: 2,
      tags: ["reading", "schedules", "tv"]
    },
    {
      id: "a2-r2-17",
      type: "multiple-choice",
      question: "Read menu: 'Kids Menu (under 12): Chicken Nuggets $6, Pasta $5, Ice Cream $3'\nWho can order from this menu?",
      options: ["Anyone", "Children under 12", "Adults only", "Teenagers"],
      correctAnswer: "Children under 12",
      explanation: "'Kids Menu (under 12)' is for children younger than 12.",
      explanationSpanish: "'Kids Menu (under 12)' es para niños menores de 12 años.",
      difficulty: 1,
      tags: ["reading", "menus", "conditions"]
    },
    {
      id: "a2-r2-18",
      type: "multiple-choice",
      question: "Read: 'Pool Hours: Lap swim 6-8am / Open swim 8am-8pm / Lessons 4-6pm'\nWhen can anyone swim freely?",
      options: ["6-8am", "8am-8pm", "4-6pm", "All day"],
      correctAnswer: "8am-8pm",
      explanation: "'Open swim' is when anyone can swim freely.",
      explanationSpanish: "'Open swim' es cuando cualquiera puede nadar libremente.",
      difficulty: 2,
      tags: ["reading", "schedules", "activities"]
    },
    {
      id: "a2-r2-19",
      type: "multiple-choice",
      question: "Read: 'Happy Hour: 5-7pm - All drinks 50% off!'\nWhat does '50% off' mean?",
      options: ["50% more expensive", "Half price", "50 cents off", "Free"],
      correctAnswer: "Half price",
      explanation: "50% off means you pay half the normal price.",
      explanationSpanish: "50% off significa que pagas la mitad del precio normal.",
      difficulty: 1,
      tags: ["reading", "menus", "discounts"]
    },
    {
      id: "a2-r2-20",
      type: "multiple-choice",
      question: "Read: 'Express train: 45 min / Local train: 1 hr 15 min'\nHow much faster is the express train?",
      options: ["15 minutes", "30 minutes", "45 minutes", "1 hour"],
      correctAnswer: "30 minutes",
      explanation: "1hr 15min - 45min = 30 minutes faster.",
      explanationSpanish: "1hr 15min - 45min = 30 minutos más rápido.",
      difficulty: 2,
      tags: ["reading", "schedules", "math"]
    },
  ],

  "a2-read-3": [
    // Simple Stories
    {
      id: "a2-r3-1",
      type: "multiple-choice",
      question: "Read: 'Maria wakes up at 7am every day. She has coffee and toast for breakfast. Then she walks to work.'\nWhat does Maria eat for breakfast?",
      options: ["Eggs and bacon", "Coffee and toast", "Cereal and milk", "Nothing"],
      correctAnswer: "Coffee and toast",
      explanation: "The text says she has 'coffee and toast for breakfast'.",
      explanationSpanish: "El texto dice que toma 'coffee and toast for breakfast'.",
      difficulty: 1,
      tags: ["reading", "stories", "routines"]
    },
    {
      id: "a2-r3-2",
      type: "multiple-choice",
      question: "From the same text, how does Maria go to work?",
      options: ["By car", "By bus", "She walks", "By bicycle"],
      correctAnswer: "She walks",
      explanation: "'She walks to work'.",
      explanationSpanish: "'She walks to work' (Ella camina al trabajo).",
      difficulty: 1,
      tags: ["reading", "stories", "transport"]
    },
    {
      id: "a2-r3-3",
      type: "multiple-choice",
      question: "Read: 'Tom is 25 years old. He lives in London with his cat, Max. He works as a programmer.'\nHow old is Tom?",
      options: ["20", "25", "30", "35"],
      correctAnswer: "25",
      explanation: "'Tom is 25 years old'.",
      explanationSpanish: "'Tom is 25 years old' (Tom tiene 25 años).",
      difficulty: 1,
      tags: ["reading", "stories", "descriptions"]
    },
    {
      id: "a2-r3-4",
      type: "multiple-choice",
      question: "From the same text, what pet does Tom have?",
      options: ["A dog", "A cat", "A fish", "A bird"],
      correctAnswer: "A cat",
      explanation: "'He lives with his cat, Max'.",
      explanationSpanish: "'He lives with his cat, Max'.",
      difficulty: 1,
      tags: ["reading", "stories", "pets"]
    },
    {
      id: "a2-r3-5",
      type: "multiple-choice",
      question: "Read: 'Last summer, we went to Spain. The weather was hot and sunny. We stayed in a small hotel near the beach.'\nWhen did they go to Spain?",
      options: ["Last winter", "Last summer", "This year", "Next month"],
      correctAnswer: "Last summer",
      explanation: "'Last summer, we went to Spain'.",
      explanationSpanish: "'Last summer' significa el verano pasado.",
      difficulty: 1,
      tags: ["reading", "stories", "past"]
    },
    {
      id: "a2-r3-6",
      type: "multiple-choice",
      question: "From the Spain trip story, what was the weather like?",
      options: ["Cold and rainy", "Hot and sunny", "Cloudy", "Snowy"],
      correctAnswer: "Hot and sunny",
      explanation: "'The weather was hot and sunny'.",
      explanationSpanish: "'The weather was hot and sunny'.",
      difficulty: 1,
      tags: ["reading", "stories", "weather"]
    },
    {
      id: "a2-r3-7",
      type: "multiple-choice",
      question: "Where did they stay in Spain?",
      options: ["In a big city hotel", "In a small hotel near the beach", "With friends", "In a tent"],
      correctAnswer: "In a small hotel near the beach",
      explanation: "'We stayed in a small hotel near the beach'.",
      explanationSpanish: "'We stayed in a small hotel near the beach'.",
      difficulty: 1,
      tags: ["reading", "stories", "accommodation"]
    },
    {
      id: "a2-r3-8",
      type: "multiple-choice",
      question: "Read: 'My sister Anna is very tall. She has long brown hair and green eyes. She loves reading and cooking.'\nWhat color are Anna's eyes?",
      options: ["Blue", "Brown", "Green", "Black"],
      correctAnswer: "Green",
      explanation: "'She has... green eyes'.",
      explanationSpanish: "'She has... green eyes'.",
      difficulty: 1,
      tags: ["reading", "stories", "descriptions"]
    },
    {
      id: "a2-r3-9",
      type: "multiple-choice",
      question: "What does Anna like to do?",
      options: ["Swimming and dancing", "Reading and cooking", "Singing and playing", "Working and sleeping"],
      correctAnswer: "Reading and cooking",
      explanation: "'She loves reading and cooking'.",
      explanationSpanish: "'She loves reading and cooking'.",
      difficulty: 1,
      tags: ["reading", "stories", "hobbies"]
    },
    {
      id: "a2-r3-10",
      type: "multiple-choice",
      question: "Read: 'Yesterday I went shopping. I bought a new shirt and some shoes. I spent about $100.'\nWhat did the person buy?",
      options: ["A shirt and a hat", "A shirt and shoes", "Pants and shoes", "A dress"],
      correctAnswer: "A shirt and shoes",
      explanation: "'I bought a new shirt and some shoes'.",
      explanationSpanish: "'I bought a new shirt and some shoes'.",
      difficulty: 1,
      tags: ["reading", "stories", "shopping"]
    },
    {
      id: "a2-r3-11",
      type: "multiple-choice",
      question: "How much money did they spend?",
      options: ["About $50", "About $100", "About $200", "Exactly $100"],
      correctAnswer: "About $100",
      explanation: "'I spent about $100'.",
      explanationSpanish: "'I spent about $100' (gasté alrededor de $100).",
      difficulty: 1,
      tags: ["reading", "stories", "money"]
    },
    {
      id: "a2-r3-12",
      type: "multiple-choice",
      question: "Read: 'My favorite restaurant is near my house. It's an Italian restaurant. The pasta there is delicious and not too expensive.'\nWhat type of restaurant is it?",
      options: ["Mexican", "Chinese", "Italian", "Japanese"],
      correctAnswer: "Italian",
      explanation: "'It's an Italian restaurant'.",
      explanationSpanish: "'It's an Italian restaurant'.",
      difficulty: 1,
      tags: ["reading", "stories", "food"]
    },
    {
      id: "a2-r3-13",
      type: "multiple-choice",
      question: "Is the restaurant expensive?",
      options: ["Yes, very expensive", "No, not too expensive", "It doesn't say", "Only the pasta is expensive"],
      correctAnswer: "No, not too expensive",
      explanation: "'The pasta there is delicious and not too expensive'.",
      explanationSpanish: "Dice 'not too expensive' (no muy caro).",
      difficulty: 1,
      tags: ["reading", "stories", "prices"]
    },
    {
      id: "a2-r3-14",
      type: "true-false",
      question: "Read: 'John doesn't like sports. He prefers watching movies and playing video games.'\nJohn likes playing football.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "John 'doesn't like sports'.",
      explanationSpanish: "John 'doesn't like sports' (no le gustan los deportes).",
      difficulty: 1,
      tags: ["reading", "stories", "preferences"]
    },
    {
      id: "a2-r3-15",
      type: "multiple-choice",
      question: "Read: 'The park is very beautiful in spring. There are many flowers and birds. Children play on the grass and people walk their dogs.'\nWhen is the park most beautiful?",
      options: ["In winter", "In spring", "In summer", "In autumn"],
      correctAnswer: "In spring",
      explanation: "'The park is very beautiful in spring'.",
      explanationSpanish: "'The park is very beautiful in spring'.",
      difficulty: 1,
      tags: ["reading", "stories", "seasons"]
    },
    {
      id: "a2-r3-16",
      type: "multiple-choice",
      question: "What do people do in the park?",
      options: ["Swim and fish", "Walk dogs and children play", "Sleep and eat", "Work and study"],
      correctAnswer: "Walk dogs and children play",
      explanation: "'Children play on the grass and people walk their dogs'.",
      explanationSpanish: "'Children play on the grass and people walk their dogs'.",
      difficulty: 1,
      tags: ["reading", "stories", "activities"]
    },
    {
      id: "a2-r3-17",
      type: "multiple-choice",
      question: "Read: 'I usually have lunch at 1pm, but today I had lunch at 12 because I was very hungry.'\nWhat time did the person have lunch today?",
      options: ["1pm", "12pm", "11am", "2pm"],
      correctAnswer: "12pm",
      explanation: "'Today I had lunch at 12'.",
      explanationSpanish: "'Today I had lunch at 12'.",
      difficulty: 1,
      tags: ["reading", "stories", "routines"]
    },
    {
      id: "a2-r3-18",
      type: "multiple-choice",
      question: "Why did they eat early?",
      options: ["They had a meeting", "They were very hungry", "The restaurant was closing", "Their friend arrived"],
      correctAnswer: "They were very hungry",
      explanation: "'Because I was very hungry'.",
      explanationSpanish: "'Because I was very hungry'.",
      difficulty: 1,
      tags: ["reading", "stories", "reasons"]
    },
    {
      id: "a2-r3-19",
      type: "multiple-choice",
      question: "Read: 'My grandfather is 80 years old. He still walks every day and reads the newspaper every morning. He is very healthy.'\nHow does the grandfather stay healthy?",
      options: ["He plays tennis", "He walks every day", "He goes to the gym", "He swims"],
      correctAnswer: "He walks every day",
      explanation: "'He still walks every day'.",
      explanationSpanish: "'He still walks every day'.",
      difficulty: 1,
      tags: ["reading", "stories", "health"]
    },
    {
      id: "a2-r3-20",
      type: "multiple-choice",
      question: "Read: 'The bus was late, so I missed my meeting. My boss was not happy.'\nWhy did the person miss the meeting?",
      options: ["They woke up late", "The bus was late", "They forgot", "Traffic was bad"],
      correctAnswer: "The bus was late",
      explanation: "'The bus was late, so I missed my meeting'.",
      explanationSpanish: "'The bus was late, so I missed my meeting'.",
      difficulty: 1,
      tags: ["reading", "stories", "cause-effect"]
    },
  ],

  "a2-read-4": [
    // Advertisements
    {
      id: "a2-r4-1",
      type: "multiple-choice",
      question: "Read: 'SUMMER SALE! 50% OFF ALL SHOES! This weekend only!'\nHow much discount is offered?",
      options: ["25%", "50%", "75%", "100%"],
      correctAnswer: "50%",
      explanation: "'50% OFF' means 50% discount.",
      explanationSpanish: "'50% OFF' significa 50% de descuento.",
      difficulty: 1,
      tags: ["reading", "ads", "discounts"]
    },
    {
      id: "a2-r4-2",
      type: "multiple-choice",
      question: "From the same ad, how long is the sale?",
      options: ["One day", "This weekend only", "All month", "Forever"],
      correctAnswer: "This weekend only",
      explanation: "'This weekend only' indicates the duration.",
      explanationSpanish: "'This weekend only' indica la duración.",
      difficulty: 1,
      tags: ["reading", "ads", "time"]
    },
    {
      id: "a2-r4-3",
      type: "multiple-choice",
      question: "Read: 'WANTED: Part-time waiter. $15/hour. Experience required. Apply at Joe's Café.'\nWhat job is available?",
      options: ["Chef", "Waiter", "Manager", "Cleaner"],
      correctAnswer: "Waiter",
      explanation: "'Part-time waiter' is the position.",
      explanationSpanish: "'Part-time waiter' es el puesto.",
      difficulty: 1,
      tags: ["reading", "ads", "jobs"]
    },
    {
      id: "a2-r4-4",
      type: "multiple-choice",
      question: "How much does the waiter job pay?",
      options: ["$10/hour", "$15/hour", "$20/hour", "$25/hour"],
      correctAnswer: "$15/hour",
      explanation: "'$15/hour' is the wage.",
      explanationSpanish: "'$15/hour' es el salario.",
      difficulty: 1,
      tags: ["reading", "ads", "salary"]
    },
    {
      id: "a2-r4-5",
      type: "multiple-choice",
      question: "Is experience needed for this job?",
      options: ["No", "Yes", "Maybe", "Not mentioned"],
      correctAnswer: "Yes",
      explanation: "'Experience required' means you need experience.",
      explanationSpanish: "'Experience required' significa que necesitas experiencia.",
      difficulty: 1,
      tags: ["reading", "ads", "requirements"]
    },
    {
      id: "a2-r4-6",
      type: "multiple-choice",
      question: "Read: 'FOR RENT: 2-bedroom apartment. $900/month. Near subway. Pets OK.'\nHow many bedrooms does the apartment have?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      explanation: "'2-bedroom apartment'.",
      explanationSpanish: "'2-bedroom apartment' (apartamento de 2 habitaciones).",
      difficulty: 1,
      tags: ["reading", "ads", "housing"]
    },
    {
      id: "a2-r4-7",
      type: "multiple-choice",
      question: "Can you have a dog in this apartment?",
      options: ["No", "Yes, pets are OK", "Only cats", "Not mentioned"],
      correctAnswer: "Yes, pets are OK",
      explanation: "'Pets OK' means pets are allowed.",
      explanationSpanish: "'Pets OK' significa que se permiten mascotas.",
      difficulty: 1,
      tags: ["reading", "ads", "conditions"]
    },
    {
      id: "a2-r4-8",
      type: "multiple-choice",
      question: "Read: 'GRAND OPENING! New Italian restaurant. First week: Free dessert with any main course!'\nWhat can you get for free?",
      options: ["Main course", "Drinks", "Dessert", "Appetizer"],
      correctAnswer: "Dessert",
      explanation: "'Free dessert with any main course'.",
      explanationSpanish: "'Free dessert' significa postre gratis.",
      difficulty: 1,
      tags: ["reading", "ads", "offers"]
    },
    {
      id: "a2-r4-9",
      type: "multiple-choice",
      question: "How long is the free dessert offer?",
      options: ["Forever", "First week only", "First month", "One day"],
      correctAnswer: "First week only",
      explanation: "'First week: Free dessert...'",
      explanationSpanish: "'First week' significa la primera semana.",
      difficulty: 1,
      tags: ["reading", "ads", "time"]
    },
    {
      id: "a2-r4-10",
      type: "multiple-choice",
      question: "Read: 'Learn English Online! Flexible hours. Native teachers. $25/class. First class FREE!'\nHow much is the first class?",
      options: ["$25", "$20", "$15", "Free"],
      correctAnswer: "Free",
      explanation: "'First class FREE!'",
      explanationSpanish: "'First class FREE!' (primera clase gratis).",
      difficulty: 1,
      tags: ["reading", "ads", "education"]
    },
    {
      id: "a2-r4-11",
      type: "multiple-choice",
      question: "What kind of teachers do they have?",
      options: ["Student teachers", "Robot teachers", "Native teachers", "Volunteer teachers"],
      correctAnswer: "Native teachers",
      explanation: "'Native teachers' are native English speakers.",
      explanationSpanish: "'Native teachers' son hablantes nativos de inglés.",
      difficulty: 1,
      tags: ["reading", "ads", "education"]
    },
    {
      id: "a2-r4-12",
      type: "multiple-choice",
      question: "Read: 'CAR FOR SALE: Honda 2018. Only 50,000 km. One owner. $12,000. Call 555-1234'\nWhat year is the car?",
      options: ["2016", "2017", "2018", "2019"],
      correctAnswer: "2018",
      explanation: "'Honda 2018' indicates the year.",
      explanationSpanish: "'Honda 2018' indica el año.",
      difficulty: 1,
      tags: ["reading", "ads", "sales"]
    },
    {
      id: "a2-r4-13",
      type: "multiple-choice",
      question: "How many owners has the car had?",
      options: ["None", "One", "Two", "Three"],
      correctAnswer: "One",
      explanation: "'One owner' means only one person has owned it.",
      explanationSpanish: "'One owner' significa que solo una persona lo ha tenido.",
      difficulty: 1,
      tags: ["reading", "ads", "details"]
    },
    {
      id: "a2-r4-14",
      type: "multiple-choice",
      question: "Read: 'GYM MEMBERSHIP: $30/month. No contract. Open 24/7. Join today!'\nDo you need to sign a contract?",
      options: ["Yes, 1 year", "Yes, 6 months", "No contract needed", "Not mentioned"],
      correctAnswer: "No contract needed",
      explanation: "'No contract' means you don't need to sign one.",
      explanationSpanish: "'No contract' significa que no necesitas firmar uno.",
      difficulty: 1,
      tags: ["reading", "ads", "conditions"]
    },
    {
      id: "a2-r4-15",
      type: "multiple-choice",
      question: "What are the gym's hours?",
      options: ["9am-9pm", "6am-10pm", "Open 24/7", "Weekdays only"],
      correctAnswer: "Open 24/7",
      explanation: "'Open 24/7' means open 24 hours, 7 days a week.",
      explanationSpanish: "'Open 24/7' significa abierto 24 horas, 7 días a la semana.",
      difficulty: 1,
      tags: ["reading", "ads", "hours"]
    },
    {
      id: "a2-r4-16",
      type: "multiple-choice",
      question: "Read: 'BABYSITTER NEEDED: 2 children (ages 5 and 8). Weekends only. $15/hour. Must have experience.'\nHow many children need care?",
      options: ["1", "2", "3", "5"],
      correctAnswer: "2",
      explanation: "'2 children (ages 5 and 8)'.",
      explanationSpanish: "'2 children' (2 niños).",
      difficulty: 1,
      tags: ["reading", "ads", "jobs"]
    },
    {
      id: "a2-r4-17",
      type: "multiple-choice",
      question: "When is the babysitter needed?",
      options: ["Every day", "Weekdays only", "Weekends only", "Monday to Friday"],
      correctAnswer: "Weekends only",
      explanation: "'Weekends only' specifies the days.",
      explanationSpanish: "'Weekends only' especifica los días.",
      difficulty: 1,
      tags: ["reading", "ads", "schedule"]
    },
    {
      id: "a2-r4-18",
      type: "multiple-choice",
      question: "Read: 'YOGA CLASSES: Beginner to Advanced. Morning and Evening classes. Drop-in: $15, Monthly pass: $100'\nHow much is a monthly pass?",
      options: ["$15", "$50", "$100", "$150"],
      correctAnswer: "$100",
      explanation: "'Monthly pass: $100'.",
      explanationSpanish: "'Monthly pass: $100'.",
      difficulty: 1,
      tags: ["reading", "ads", "prices"]
    },
    {
      id: "a2-r4-19",
      type: "multiple-choice",
      question: "Can beginners take these yoga classes?",
      options: ["No, advanced only", "Yes, beginner to advanced", "Only intermediate", "Not mentioned"],
      correctAnswer: "Yes, beginner to advanced",
      explanation: "'Beginner to Advanced' means all levels welcome.",
      explanationSpanish: "'Beginner to Advanced' significa todos los niveles bienvenidos.",
      difficulty: 1,
      tags: ["reading", "ads", "levels"]
    },
    {
      id: "a2-r4-20",
      type: "multiple-choice",
      question: "Read: 'BUY 2 GET 1 FREE! All pizzas this week. Order online or call 555-PIZZA'\nIf you buy 2 pizzas, how many do you get?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "3",
      explanation: "Buy 2 + get 1 free = 3 pizzas total.",
      explanationSpanish: "Compra 2 + obtén 1 gratis = 3 pizzas en total.",
      difficulty: 2,
      tags: ["reading", "ads", "math"]
    },
  ],
};

// Function to get reading exercises by skill ID
export function getReadingExercisesBySkillId(skillId: string): Exercise[] {
  return readingExercises[skillId] || [];
}
