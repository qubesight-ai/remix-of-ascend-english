// Complete Speaking Exercises for all CEFR levels
import { Exercise } from "./exercisesData";

// =====================================================
// A1 SPEAKING EXERCISES
// =====================================================

export const a1SpeakingExercises: Record<string, Exercise[]> = {
  // Presentarse
  "a1-speak-1": [
    {
      id: "a1-s1-1",
      type: "multiple-choice",
      question: "How do you say 'My name is Juan' in English?",
      options: ["My name is Juan.", "I am name Juan.", "Me name Juan.", "Name is my Juan."],
      correctAnswer: "My name is Juan.",
      explanation: "The correct structure is: My name is + [name].",
      explanationSpanish: "La estructura correcta es: My name is + [nombre].",
      difficulty: 1,
      tags: ["speaking", "introduction", "name"]
    },
    {
      id: "a1-s1-2",
      type: "multiple-choice",
      question: "When someone says 'Nice to meet you', you respond:",
      options: ["Nice to meet you too.", "Thank you.", "I am fine.", "Goodbye."],
      correctAnswer: "Nice to meet you too.",
      explanation: "We respond 'Nice to meet you too' when meeting someone for the first time.",
      explanationSpanish: "Respondemos 'Nice to meet you too' cuando conocemos a alguien por primera vez.",
      difficulty: 1,
      tags: ["speaking", "greetings", "response"]
    },
    {
      id: "a1-s1-3",
      type: "multiple-choice",
      question: "How do you ask someone's age?",
      options: ["How old are you?", "What years are you?", "How many old you?", "What is your old?"],
      correctAnswer: "How old are you?",
      explanation: "We ask 'How old are you?' to know someone's age.",
      explanationSpanish: "Preguntamos 'How old are you?' para saber la edad de alguien.",
      difficulty: 1,
      tags: ["speaking", "questions", "age"]
    },
    {
      id: "a1-s1-4",
      type: "multiple-choice",
      question: "To say where you are from, you say:",
      options: ["I am from Mexico.", "I come Mexico.", "Me from Mexico.", "From Mexico I am."],
      correctAnswer: "I am from Mexico.",
      explanation: "Structure: I am from + [country/city].",
      explanationSpanish: "Estructura: I am from + [país/ciudad].",
      difficulty: 1,
      tags: ["speaking", "introduction", "origin"]
    },
    {
      id: "a1-s1-5",
      type: "multiple-choice",
      question: "How do you introduce your friend Pedro?",
      options: ["This is my friend Pedro.", "He friend Pedro is.", "Pedro is my this friend.", "Friend my Pedro this."],
      correctAnswer: "This is my friend Pedro.",
      explanation: "To introduce someone: This is my friend + [name].",
      explanationSpanish: "Para presentar a alguien: This is my friend + [nombre].",
      difficulty: 1,
      tags: ["speaking", "introduction", "friends"]
    },
    {
      id: "a1-s1-6",
      type: "multiple-choice",
      question: "How do you say 'Tengo 25 años' in English?",
      options: ["I am 25 years old.", "I have 25 years.", "My years are 25.", "25 years I am."],
      correctAnswer: "I am 25 years old.",
      explanation: "In English we use 'be' not 'have' for age: I am [number] years old.",
      explanationSpanish: "En inglés usamos 'be' no 'have' para la edad: I am [número] years old.",
      difficulty: 1,
      tags: ["speaking", "age", "common-mistake"]
    },
    {
      id: "a1-s1-7",
      type: "multiple-choice",
      question: "When someone asks 'What's your name?', you answer:",
      options: ["My name is Maria.", "I name Maria.", "Name Maria.", "What Maria name."],
      correctAnswer: "My name is Maria.",
      explanation: "Answer with: My name is [your name].",
      explanationSpanish: "Responde con: My name is [tu nombre].",
      difficulty: 1,
      tags: ["speaking", "questions", "name"]
    },
    {
      id: "a1-s1-8",
      type: "multiple-choice",
      question: "How do you say 'I am a student' in English?",
      options: ["I am a student.", "I am student.", "Me student.", "Student I am a."],
      correctAnswer: "I am a student.",
      explanation: "For professions/occupations: I am a + [profession]. Don't forget the article 'a'.",
      explanationSpanish: "Para profesiones: I am a + [profesión]. No olvides el artículo 'a'.",
      difficulty: 1,
      tags: ["speaking", "profession", "articles"]
    },
    {
      id: "a1-s1-9",
      type: "multiple-choice",
      question: "How do you ask someone's nationality?",
      options: ["Where are you from?", "What country you?", "From where you are?", "Country what are you?"],
      correctAnswer: "Where are you from?",
      explanation: "We ask 'Where are you from?' to know nationality or origin.",
      explanationSpanish: "Preguntamos 'Where are you from?' para saber nacionalidad u origen.",
      difficulty: 1,
      tags: ["speaking", "questions", "nationality"]
    },
    {
      id: "a1-s1-10",
      type: "multiple-choice",
      question: "Complete the introduction: 'Hello, ___ Carlos and ___ from Spain.'",
      options: ["I'm, I'm", "I, I am", "Me, me", "Am I, am I"],
      correctAnswer: "I'm, I'm",
      explanation: "Use 'I'm' (I am) for introductions: I'm Carlos and I'm from Spain.",
      explanationSpanish: "Usa 'I'm' (I am) para presentaciones: I'm Carlos and I'm from Spain.",
      difficulty: 1,
      tags: ["speaking", "introduction", "contractions"]
    },
    {
      id: "a1-s1-11",
      type: "multiple-choice",
      question: "How do you describe your job in English? 'I am a doctor.'",
      options: ["I am a doctor.", "I work doctor.", "My job doctor.", "Doctor is my."],
      correctAnswer: "I am a doctor.",
      explanation: "Use 'I am a + [profession]' to describe your job.",
      explanationSpanish: "Usa 'I am a + [profesión]' para describir tu trabajo.",
      difficulty: 1,
      tags: ["speaking", "profession"]
    },
    {
      id: "a1-s1-12",
      type: "multiple-choice",
      question: "To say you live in a place, you say:",
      options: ["I live in Madrid.", "I am living Madrid.", "In Madrid I stay.", "Living I Madrid."],
      correctAnswer: "I live in Madrid.",
      explanation: "Structure: I live in + [city/country].",
      explanationSpanish: "Estructura: I live in + [ciudad/país].",
      difficulty: 1,
      tags: ["speaking", "location", "live"]
    },
    {
      id: "a1-s1-13",
      type: "multiple-choice",
      question: "After meeting someone, you say goodbye with:",
      options: ["Nice to meet you, bye!", "Meet you nice!", "You bye meet!", "Nice you!"],
      correctAnswer: "Nice to meet you, bye!",
      explanation: "'Nice to meet you' + 'bye' is a polite way to end a first meeting.",
      explanationSpanish: "'Nice to meet you' + 'bye' es una forma educada de terminar un primer encuentro.",
      difficulty: 1,
      tags: ["speaking", "goodbye", "polite"]
    },
    {
      id: "a1-s1-14",
      type: "multiple-choice",
      question: "How do you say 'Nice to meet you' in English?",
      options: ["Nice to meet you.", "Very gusto.", "Much pleasure.", "Pleased nice."],
      correctAnswer: "Nice to meet you.",
      explanation: "'Mucho gusto' = 'Nice to meet you' or 'Pleased to meet you'.",
      explanationSpanish: "'Mucho gusto' = 'Nice to meet you' o 'Pleased to meet you'.",
      difficulty: 1,
      tags: ["speaking", "greetings", "translation"]
    },
    {
      id: "a1-s1-15",
      type: "multiple-choice",
      question: "How do you spell your name in English? You say:",
      options: ["My name is spelled M-A-R-I-A.", "My name spell Maria.", "Spelling my name Maria.", "Name M-A-R-I-A spelled."],
      correctAnswer: "My name is spelled M-A-R-I-A.",
      explanation: "To spell your name: My name is spelled + [letters].",
      explanationSpanish: "Para deletrear tu nombre: My name is spelled + [letras].",
      difficulty: 2,
      tags: ["speaking", "spelling", "name"]
    },
  ],

  // Saludos y despedidas
  "a1-speak-2": [
    {
      id: "a1-s2-1",
      type: "multiple-choice",
      question: "In the morning, you greet someone by saying:",
      options: ["Good morning!", "Good night!", "Good evening!", "Good afternoon!"],
      correctAnswer: "Good morning!",
      explanation: "Good morning = before 12:00 PM.",
      explanationSpanish: "Good morning = antes del mediodía.",
      difficulty: 1,
      tags: ["speaking", "greetings", "morning"]
    },
    {
      id: "a1-s2-2",
      type: "multiple-choice",
      question: "When leaving work, you say:",
      options: ["Goodbye! See you tomorrow.", "Hello! Nice to meet you.", "Good morning!", "How are you?"],
      correctAnswer: "Goodbye! See you tomorrow.",
      explanation: "When leaving, use 'Goodbye' + when you'll see them again.",
      explanationSpanish: "Al irte, usa 'Goodbye' + cuándo los verás de nuevo.",
      difficulty: 1,
      tags: ["speaking", "goodbye", "work"]
    },
    {
      id: "a1-s2-3",
      type: "multiple-choice",
      question: "How do you respond to 'How are you?'",
      options: ["I'm fine, thank you. And you?", "Good morning!", "Goodbye!", "Nice to meet you."],
      correctAnswer: "I'm fine, thank you. And you?",
      explanation: "Standard response: I'm fine, thank you. And you? / I'm good, thanks!",
      explanationSpanish: "Respuesta estándar: I'm fine, thank you. And you? / I'm good, thanks!",
      difficulty: 1,
      tags: ["speaking", "greetings", "response"]
    },
    {
      id: "a1-s2-4",
      type: "multiple-choice",
      question: "At 3:00 PM, you greet someone with:",
      options: ["Good afternoon!", "Good morning!", "Good night!", "Good day!"],
      correctAnswer: "Good afternoon!",
      explanation: "Good afternoon = 12:00 PM to 5:00/6:00 PM.",
      explanationSpanish: "Good afternoon = 12:00 PM a 5:00/6:00 PM.",
      difficulty: 1,
      tags: ["speaking", "greetings", "afternoon"]
    },
    {
      id: "a1-s2-5",
      type: "multiple-choice",
      question: "Before going to sleep, you say:",
      options: ["Good night!", "Good evening!", "Good afternoon!", "Good morning!"],
      correctAnswer: "Good night!",
      explanation: "Good night = when saying goodbye at night or before sleeping.",
      explanationSpanish: "Good night = al despedirse en la noche o antes de dormir.",
      difficulty: 1,
      tags: ["speaking", "greetings", "night"]
    },
    {
      id: "a1-s2-6",
      type: "multiple-choice",
      question: "To greet a friend casually, you say:",
      options: ["Hey! What's up?", "Good morning, sir.", "How do you do?", "Pleased to meet you."],
      correctAnswer: "Hey! What's up?",
      explanation: "'Hey!' and 'What's up?' are informal greetings for friends.",
      explanationSpanish: "'Hey!' y 'What's up?' son saludos informales para amigos.",
      difficulty: 1,
      tags: ["speaking", "greetings", "informal"]
    },
    {
      id: "a1-s2-7",
      type: "multiple-choice",
      question: "To greet your boss formally, you say:",
      options: ["Good morning, Mr. Johnson.", "Hey! What's up?", "Yo, boss!", "Morning, dude!"],
      correctAnswer: "Good morning, Mr. Johnson.",
      explanation: "Formal greetings use titles: Good morning + Mr./Mrs./Ms. + [name].",
      explanationSpanish: "Los saludos formales usan títulos: Good morning + Mr./Mrs./Ms. + [nombre].",
      difficulty: 1,
      tags: ["speaking", "greetings", "formal"]
    },
    {
      id: "a1-s2-8",
      type: "multiple-choice",
      question: "How do you say 'See you' in English?",
      options: ["See you!", "Look you!", "View you!", "Watch you!"],
      correctAnswer: "See you!",
      explanation: "'See you!' or 'See you later!' = Nos vemos.",
      explanationSpanish: "'See you!' o 'See you later!' = Nos vemos.",
      difficulty: 1,
      tags: ["speaking", "goodbye", "informal"]
    },
    {
      id: "a1-s2-9",
      type: "multiple-choice",
      question: "When answering the phone, you say:",
      options: ["Hello?", "Goodbye!", "See you!", "Nice to meet you!"],
      correctAnswer: "Hello?",
      explanation: "We answer the phone with 'Hello?' (with rising intonation).",
      explanationSpanish: "Contestamos el teléfono con 'Hello?' (con entonación ascendente).",
      difficulty: 1,
      tags: ["speaking", "phone", "greetings"]
    },
    {
      id: "a1-s2-10",
      type: "multiple-choice",
      question: "To say 'Have a nice day', you say:",
      options: ["Have a nice day!", "Do a good day!", "Make a nice day!", "Take a good day!"],
      correctAnswer: "Have a nice day!",
      explanation: "'Have a nice day!' is a polite way to say goodbye.",
      explanationSpanish: "'Have a nice day!' es una forma educada de despedirse.",
      difficulty: 1,
      tags: ["speaking", "goodbye", "polite"]
    },
    {
      id: "a1-s2-11",
      type: "multiple-choice",
      question: "At 7:00 PM, you greet someone with:",
      options: ["Good evening!", "Good afternoon!", "Good morning!", "Good day!"],
      correctAnswer: "Good evening!",
      explanation: "Good evening = after 5:00/6:00 PM.",
      explanationSpanish: "Good evening = después de las 5:00/6:00 PM.",
      difficulty: 1,
      tags: ["speaking", "greetings", "evening"]
    },
    {
      id: "a1-s2-12",
      type: "multiple-choice",
      question: "How do you say 'Take care' when saying goodbye?",
      options: ["Take care!", "Take you!", "Care yourself!", "Be careful you!"],
      correctAnswer: "Take care!",
      explanation: "'Take care!' = ¡Cuídate! (informal goodbye).",
      explanationSpanish: "'Take care!' = ¡Cuídate! (despedida informal).",
      difficulty: 1,
      tags: ["speaking", "goodbye", "care"]
    },
    {
      id: "a1-s2-13",
      type: "multiple-choice",
      question: "When someone thanks you, you respond:",
      options: ["You're welcome!", "Thank you!", "Please!", "Sorry!"],
      correctAnswer: "You're welcome!",
      explanation: "'You're welcome!' is the response to 'Thank you.'",
      explanationSpanish: "'You're welcome!' es la respuesta a 'Thank you.'",
      difficulty: 1,
      tags: ["speaking", "polite", "response"]
    },
    {
      id: "a1-s2-14",
      type: "multiple-choice",
      question: "To apologize, you say:",
      options: ["I'm sorry.", "I'm thank you.", "I'm please.", "I'm welcome."],
      correctAnswer: "I'm sorry.",
      explanation: "'I'm sorry' or 'Sorry' is used to apologize.",
      explanationSpanish: "'I'm sorry' o 'Sorry' se usa para disculparse.",
      difficulty: 1,
      tags: ["speaking", "polite", "apology"]
    },
    {
      id: "a1-s2-15",
      type: "multiple-choice",
      question: "To ask someone to repeat, you say:",
      options: ["Sorry, can you repeat that?", "Again say!", "Repeat it you!", "Say more!"],
      correctAnswer: "Sorry, can you repeat that?",
      explanation: "Polite way to ask for repetition: 'Sorry, can you repeat that?' or 'Pardon?'",
      explanationSpanish: "Forma educada de pedir repetición: 'Sorry, can you repeat that?' o 'Pardon?'",
      difficulty: 2,
      tags: ["speaking", "polite", "clarification"]
    },
  ],

  // Pedir cosas básicas
  "a1-speak-3": [
    {
      id: "a1-s3-1",
      type: "multiple-choice",
      question: "At a restaurant, how do you ask for water?",
      options: ["Can I have some water, please?", "Give me water!", "Water I want!", "Want water me!"],
      correctAnswer: "Can I have some water, please?",
      explanation: "Polite request: Can I have + [item] + please?",
      explanationSpanish: "Petición educada: Can I have + [cosa] + please?",
      difficulty: 1,
      tags: ["speaking", "restaurant", "request"]
    },
    {
      id: "a1-s3-2",
      type: "multiple-choice",
      question: "To ask for the menu, you say:",
      options: ["Can I see the menu, please?", "Menu give me!", "I want menu!", "Show menu now!"],
      correctAnswer: "Can I see the menu, please?",
      explanation: "'Can I see the menu, please?' is polite way to ask for the menu.",
      explanationSpanish: "'Can I see the menu, please?' es la forma educada de pedir el menú.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "menu"]
    },
    {
      id: "a1-s3-3",
      type: "multiple-choice",
      question: "How do you ask where the bathroom is?",
      options: ["Where is the bathroom?", "Bathroom where?", "Is where bathroom?", "Where bathroom is?"],
      correctAnswer: "Where is the bathroom?",
      explanation: "Question structure: Where is + [place]?",
      explanationSpanish: "Estructura de pregunta: Where is + [lugar]?",
      difficulty: 1,
      tags: ["speaking", "directions", "bathroom"]
    },
    {
      id: "a1-s3-4",
      type: "multiple-choice",
      question: "To ask for the bill, you say:",
      options: ["Can I have the bill, please?", "Bill give me!", "Want bill I!", "Bill now!"],
      correctAnswer: "Can I have the bill, please?",
      explanation: "'Can I have the bill, please?' or 'Check, please.' (US)",
      explanationSpanish: "'Can I have the bill, please?' o 'Check, please.' (EE.UU.)",
      difficulty: 1,
      tags: ["speaking", "restaurant", "bill"]
    },
    {
      id: "a1-s3-5",
      type: "multiple-choice",
      question: "To order food, you say:",
      options: ["I'd like the chicken, please.", "I want chicken give!", "Chicken for me want!", "Give chicken I!"],
      correctAnswer: "I'd like the chicken, please.",
      explanation: "Polite ordering: I'd like + [food] + please.",
      explanationSpanish: "Pedido educado: I'd like + [comida] + please.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "order"]
    },
    {
      id: "a1-s3-6",
      type: "multiple-choice",
      question: "How do you ask the price of something?",
      options: ["How much is this?", "What money this?", "This cost what?", "Price is what?"],
      correctAnswer: "How much is this?",
      explanation: "'How much is this?' or 'How much does this cost?'",
      explanationSpanish: "'How much is this?' o 'How much does this cost?'",
      difficulty: 1,
      tags: ["speaking", "shopping", "price"]
    },
    {
      id: "a1-s3-7",
      type: "multiple-choice",
      question: "To ask for help in a store, you say:",
      options: ["Excuse me, can you help me?", "Help me you!", "You help!", "Want help!"],
      correctAnswer: "Excuse me, can you help me?",
      explanation: "Polite: 'Excuse me' + 'Can you help me?' or 'Could you help me?'",
      explanationSpanish: "Educado: 'Excuse me' + 'Can you help me?' o 'Could you help me?'",
      difficulty: 1,
      tags: ["speaking", "shopping", "help"]
    },
    {
      id: "a1-s3-8",
      type: "multiple-choice",
      question: "To ask for directions to a place, you say:",
      options: ["How do I get to the train station?", "Train station where go?", "Go train station how?", "Where go train station?"],
      correctAnswer: "How do I get to the train station?",
      explanation: "For directions: 'How do I get to + [place]?' or 'Where is the + [place]?'",
      explanationSpanish: "Para direcciones: 'How do I get to + [lugar]?' o 'Where is the + [lugar]?'",
      difficulty: 2,
      tags: ["speaking", "directions"]
    },
    {
      id: "a1-s3-9",
      type: "multiple-choice",
      question: "How do you ask for a table for two at a restaurant?",
      options: ["A table for two, please.", "Two table want!", "Give table two!", "Table two me!"],
      correctAnswer: "A table for two, please.",
      explanation: "'A table for + [number] + please.'",
      explanationSpanish: "'A table for + [número] + please.'",
      difficulty: 1,
      tags: ["speaking", "restaurant", "reservation"]
    },
    {
      id: "a1-s3-10",
      type: "multiple-choice",
      question: "To ask if you can pay by card, you say:",
      options: ["Can I pay by card?", "Card pay me?", "Pay card I want?", "Card can use?"],
      correctAnswer: "Can I pay by card?",
      explanation: "'Can I pay by card?' or 'Do you accept cards?'",
      explanationSpanish: "'Can I pay by card?' o 'Do you accept cards?'",
      difficulty: 1,
      tags: ["speaking", "payment", "card"]
    },
    {
      id: "a1-s3-11",
      type: "multiple-choice",
      question: "To ask for more time to decide, you say:",
      options: ["Can I have a few more minutes, please?", "Wait minutes!", "More time want!", "Minutes give me!"],
      correctAnswer: "Can I have a few more minutes, please?",
      explanation: "Polite way to ask for time: 'Can I have a few more minutes?'",
      explanationSpanish: "Forma educada de pedir tiempo: 'Can I have a few more minutes?'",
      difficulty: 2,
      tags: ["speaking", "restaurant", "time"]
    },
    {
      id: "a1-s3-12",
      type: "multiple-choice",
      question: "How do you ask if they have something available?",
      options: ["Do you have any vegetarian options?", "Vegetarian you have?", "Have vegetarian?", "Vegetarian exist?"],
      correctAnswer: "Do you have any vegetarian options?",
      explanation: "'Do you have + [item]?' is the question structure.",
      explanationSpanish: "'Do you have + [cosa]?' es la estructura de pregunta.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "availability"]
    },
    {
      id: "a1-s3-13",
      type: "multiple-choice",
      question: "To complain politely about cold food, you say:",
      options: ["Excuse me, my food is cold.", "Cold food!", "Food no good cold!", "This cold bad!"],
      correctAnswer: "Excuse me, my food is cold.",
      explanation: "Polite complaints start with 'Excuse me' and state the problem.",
      explanationSpanish: "Las quejas educadas empiezan con 'Excuse me' y describen el problema.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "complaint"]
    },
    {
      id: "a1-s3-14",
      type: "multiple-choice",
      question: "To ask someone to speak slowly, you say:",
      options: ["Could you speak more slowly, please?", "Slow speak you!", "Speak slow!", "More slow talk!"],
      correctAnswer: "Could you speak more slowly, please?",
      explanation: "'Could you speak more slowly?' is polite way to ask someone to slow down.",
      explanationSpanish: "'Could you speak more slowly?' es la forma educada de pedir que hablen más lento.",
      difficulty: 2,
      tags: ["speaking", "clarification", "polite"]
    },
    {
      id: "a1-s3-15",
      type: "multiple-choice",
      question: "How do you ask for the check in American English?",
      options: ["Check, please.", "Bill give!", "Money paper!", "Account please!"],
      correctAnswer: "Check, please.",
      explanation: "In American English: 'Check, please.' In British English: 'Bill, please.'",
      explanationSpanish: "En inglés americano: 'Check, please.' En inglés británico: 'Bill, please.'",
      difficulty: 1,
      tags: ["speaking", "restaurant", "american"]
    },
  ],
};

// =====================================================
// A2 SPEAKING EXERCISES
// =====================================================

export const a2SpeakingExercises: Record<string, Exercise[]> = {
  // Presentar a otros
  "a2-speak-1": [
    {
      id: "a2-s1-1",
      type: "multiple-choice",
      question: "How do you introduce your friend Carlos to your boss?",
      options: ["This is Carlos, my colleague.", "Carlos he is.", "Meet Carlos him.", "Carlos, this my boss."],
      correctAnswer: "This is Carlos, my colleague.",
      explanation: "Formal introduction: 'This is + [name], my + [relationship].'",
      explanationSpanish: "Presentación formal: 'This is + [nombre], my + [relación].'",
      difficulty: 1,
      tags: ["speaking", "introduction", "formal"]
    },
    {
      id: "a2-s1-2",
      type: "multiple-choice",
      question: "To describe someone's personality, you say:",
      options: ["She's very friendly and kind.", "Friendly she very.", "Very is she friendly.", "Kind friendly she."],
      correctAnswer: "She's very friendly and kind.",
      explanation: "Structure: Subject + be + very + adjectives.",
      explanationSpanish: "Estructura: Sujeto + be + very + adjetivos.",
      difficulty: 1,
      tags: ["speaking", "description", "personality"]
    },
    {
      id: "a2-s1-3",
      type: "multiple-choice",
      question: "When introducing your boss to your wife, you say:",
      options: ["Honey, I'd like you to meet my boss, Mr. Smith.", "Meet boss wife!", "Boss, meet woman!", "This wife, this boss."],
      correctAnswer: "Honey, I'd like you to meet my boss, Mr. Smith.",
      explanation: "Formal: 'I'd like you to meet + [name].' More polite than 'This is...'",
      explanationSpanish: "Formal: 'I'd like you to meet + [nombre].' Más educado que 'This is...'",
      difficulty: 2,
      tags: ["speaking", "introduction", "formal"]
    },
    {
      id: "a2-s1-4",
      type: "multiple-choice",
      question: "To describe your relationship with someone, you say:",
      options: ["We've been friends for 5 years.", "Friends 5 years we are.", "Five years friend us.", "We friend long."],
      correctAnswer: "We've been friends for 5 years.",
      explanation: "Use Present Perfect for relationships that started in the past and continue.",
      explanationSpanish: "Usa Present Perfect para relaciones que empezaron en el pasado y continúan.",
      difficulty: 2,
      tags: ["speaking", "relationship", "present-perfect"]
    },
    {
      id: "a2-s1-5",
      type: "multiple-choice",
      question: "How do you describe your brother?",
      options: ["My brother is tall with brown hair.", "Tall brother brown hair.", "Brother he tall brown.", "Is my brother tall hair."],
      correctAnswer: "My brother is tall with brown hair.",
      explanation: "Description: Subject + be + adjective + with + physical feature.",
      explanationSpanish: "Descripción: Sujeto + be + adjetivo + with + característica física.",
      difficulty: 1,
      tags: ["speaking", "description", "family"]
    },
    {
      id: "a2-s1-6",
      type: "multiple-choice",
      question: "To describe someone's job, you say:",
      options: ["She works as a software engineer.", "Work she software.", "Engineer work her.", "Software she works."],
      correctAnswer: "She works as a software engineer.",
      explanation: "'Works as + [profession]' describes someone's job.",
      explanationSpanish: "'Works as + [profesión]' describe el trabajo de alguien.",
      difficulty: 1,
      tags: ["speaking", "profession", "description"]
    },
    {
      id: "a2-s1-7",
      type: "multiple-choice",
      question: "When someone is introduced to you formally, you say:",
      options: ["It's a pleasure to meet you.", "Meet you nice.", "Good you meet.", "Pleasure meeting."],
      correctAnswer: "It's a pleasure to meet you.",
      explanation: "Formal: 'It's a pleasure to meet you.' or 'How do you do?'",
      explanationSpanish: "Formal: 'It's a pleasure to meet you.' o 'How do you do?'",
      difficulty: 2,
      tags: ["speaking", "introduction", "formal"]
    },
    {
      id: "a2-s1-8",
      type: "multiple-choice",
      question: "How do you say that someone works with you?",
      options: ["He's a colleague of mine.", "Work together him.", "Colleague he me.", "Mine is colleague."],
      correctAnswer: "He's a colleague of mine.",
      explanation: "'A colleague of mine' = un colega mío. Structure: a + noun + of mine/yours/his...",
      explanationSpanish: "'A colleague of mine' = un colega mío. Estructura: a + sustantivo + of mine/yours/his...",
      difficulty: 2,
      tags: ["speaking", "work", "relationship"]
    },
    {
      id: "a2-s1-9",
      type: "multiple-choice",
      question: "To describe someone's hobbies, you say:",
      options: ["He likes playing tennis and reading.", "Tennis read he likes.", "Playing reading he.", "Likes tennis reading."],
      correctAnswer: "He likes playing tennis and reading.",
      explanation: "'Like + verb-ing' describes hobbies and interests.",
      explanationSpanish: "'Like + verbo-ing' describe pasatiempos e intereses.",
      difficulty: 1,
      tags: ["speaking", "hobbies", "description"]
    },
    {
      id: "a2-s1-10",
      type: "multiple-choice",
      question: "To introduce yourself in a meeting, you say:",
      options: ["Let me introduce myself. I'm Maria from Marketing.", "I Maria Marketing.", "Maria introduce Marketing.", "Myself Maria Marketing."],
      correctAnswer: "Let me introduce myself. I'm Maria from Marketing.",
      explanation: "Professional: 'Let me introduce myself. I'm [name] from [department].'",
      explanationSpanish: "Profesional: 'Let me introduce myself. I'm [nombre] from [departamento].'",
      difficulty: 2,
      tags: ["speaking", "introduction", "business"]
    },
    {
      id: "a2-s1-11",
      type: "multiple-choice",
      question: "How do you describe where you met someone?",
      options: ["We met at university.", "Meet university we.", "University meet us.", "At university meeting."],
      correctAnswer: "We met at university.",
      explanation: "'We met at + [place]' describes where you met someone.",
      explanationSpanish: "'We met at + [lugar]' describe dónde conociste a alguien.",
      difficulty: 1,
      tags: ["speaking", "relationship", "past"]
    },
    {
      id: "a2-s1-12",
      type: "multiple-choice",
      question: "To describe someone's character with examples, you say:",
      options: ["She's generous. For example, she always helps others.", "Generous she example help.", "Example generous help.", "Always help generous."],
      correctAnswer: "She's generous. For example, she always helps others.",
      explanation: "Give examples to illustrate personality: 'For example...' or 'For instance...'",
      explanationSpanish: "Da ejemplos para ilustrar personalidad: 'For example...' o 'For instance...'",
      difficulty: 2,
      tags: ["speaking", "description", "examples"]
    },
    {
      id: "a2-s1-13",
      type: "multiple-choice",
      question: "When introducing two friends, you say:",
      options: ["Ana, this is Pedro. Pedro, Ana.", "Ana Pedro. Pedro Ana.", "Meet Ana Pedro.", "Ana meet Pedro here."],
      correctAnswer: "Ana, this is Pedro. Pedro, Ana.",
      explanation: "Introduce each person to the other: '[Name1], this is [Name2]. [Name2], [Name1].'",
      explanationSpanish: "Presenta cada persona a la otra: '[Nombre1], this is [Nombre2]. [Nombre2], [Nombre1].'",
      difficulty: 1,
      tags: ["speaking", "introduction", "friends"]
    },
    {
      id: "a2-s1-14",
      type: "multiple-choice",
      question: "To talk about family relationships, you say:",
      options: ["She's my sister-in-law.", "Sister law she my.", "My law sister.", "She sister my law."],
      correctAnswer: "She's my sister-in-law.",
      explanation: "In-law family: mother-in-law, father-in-law, brother-in-law, sister-in-law.",
      explanationSpanish: "Familia política: mother-in-law (suegra), father-in-law (suegro), etc.",
      difficulty: 2,
      tags: ["speaking", "family", "in-laws"]
    },
    {
      id: "a2-s1-15",
      type: "multiple-choice",
      question: "How do you describe someone's occupation in detail?",
      options: ["He's a chef and he specializes in Italian cuisine.", "Chef he Italian special.", "Italian chef special.", "Specializes Italian chef."],
      correctAnswer: "He's a chef and he specializes in Italian cuisine.",
      explanation: "Add details: profession + 'and he/she specializes in + [specialty].'",
      explanationSpanish: "Añade detalles: profesión + 'and he/she specializes in + [especialidad].'",
      difficulty: 2,
      tags: ["speaking", "profession", "detail"]
    },
  ],

  // Hablar de rutinas
  "a2-speak-2": [
    {
      id: "a2-s2-1",
      type: "multiple-choice",
      question: "How do you describe your morning routine?",
      options: ["I usually wake up at 7 and have breakfast.", "Wake 7 breakfast I.", "Usually 7 wake breakfast.", "Morning I 7 breakfast."],
      correctAnswer: "I usually wake up at 7 and have breakfast.",
      explanation: "Use adverbs of frequency: usually, always, sometimes, never.",
      explanationSpanish: "Usa adverbios de frecuencia: usually, always, sometimes, never.",
      difficulty: 1,
      tags: ["speaking", "routine", "morning"]
    },
    {
      id: "a2-s2-2",
      type: "multiple-choice",
      question: "To describe what you do after work, you say:",
      options: ["After work, I go to the gym and then cook dinner.", "Work after gym dinner.", "Gym work dinner after.", "After cook gym work."],
      correctAnswer: "After work, I go to the gym and then cook dinner.",
      explanation: "Time phrases: 'After work' + activities connected with 'and then'.",
      explanationSpanish: "Frases de tiempo: 'After work' + actividades conectadas con 'and then'.",
      difficulty: 1,
      tags: ["speaking", "routine", "evening"]
    },
    {
      id: "a2-s2-3",
      type: "multiple-choice",
      question: "To say how often you do something, you say:",
      options: ["I go swimming twice a week.", "Swimming week twice I.", "Twice swimming week.", "Week I swimming twice."],
      correctAnswer: "I go swimming twice a week.",
      explanation: "Frequency: once/twice/three times + a/per + day/week/month/year.",
      explanationSpanish: "Frecuencia: once/twice/three times + a/per + day/week/month/year.",
      difficulty: 1,
      tags: ["speaking", "frequency", "hobbies"]
    },
    {
      id: "a2-s2-4",
      type: "multiple-choice",
      question: "How do you describe your typical weekend?",
      options: ["On weekends, I usually sleep in and meet friends.", "Weekend sleep friends.", "Usually weekend sleep meet.", "Sleep friends weekend I."],
      correctAnswer: "On weekends, I usually sleep in and meet friends.",
      explanation: "'On weekends' + typical activities. 'Sleep in' = dormir hasta tarde.",
      explanationSpanish: "'On weekends' + actividades típicas. 'Sleep in' = dormir hasta tarde.",
      difficulty: 1,
      tags: ["speaking", "routine", "weekend"]
    },
    {
      id: "a2-s2-5",
      type: "multiple-choice",
      question: "To describe your work schedule, you say:",
      options: ["I work from 9 to 5, Monday to Friday.", "Work 9 5 Monday Friday.", "Monday Friday 9 5 work.", "From 9 work Friday Monday."],
      correctAnswer: "I work from 9 to 5, Monday to Friday.",
      explanation: "'From... to...' for time periods and days.",
      explanationSpanish: "'From... to...' para períodos de tiempo y días.",
      difficulty: 1,
      tags: ["speaking", "work", "schedule"]
    },
    {
      id: "a2-s2-6",
      type: "multiple-choice",
      question: "To talk about something you never do, you say:",
      options: ["I never eat breakfast before 8 AM.", "Never breakfast 8 I.", "8 AM never breakfast.", "Breakfast never I 8."],
      correctAnswer: "I never eat breakfast before 8 AM.",
      explanation: "'Never' goes before the main verb: I never + verb.",
      explanationSpanish: "'Never' va antes del verbo principal: I never + verbo.",
      difficulty: 1,
      tags: ["speaking", "frequency", "never"]
    },
    {
      id: "a2-s2-7",
      type: "multiple-choice",
      question: "How do you describe your lunch hour?",
      options: ["I usually have lunch around noon.", "Lunch noon I usually.", "Around noon lunch I.", "Usually noon lunch have."],
      correctAnswer: "I usually have lunch around noon.",
      explanation: "'Around + time' for approximate times: around noon, around 2 PM.",
      explanationSpanish: "'Around + hora' para tiempos aproximados: around noon, around 2 PM.",
      difficulty: 1,
      tags: ["speaking", "routine", "lunch"]
    },
    {
      id: "a2-s2-8",
      type: "multiple-choice",
      question: "To describe your commute, you say:",
      options: ["It takes me 30 minutes to get to work by bus.", "30 minutes bus work.", "Bus 30 minutes work I.", "Work bus 30 minutes."],
      correctAnswer: "It takes me 30 minutes to get to work by bus.",
      explanation: "'It takes + time + to do something' describes duration.",
      explanationSpanish: "'It takes + tiempo + to do something' describe duración.",
      difficulty: 2,
      tags: ["speaking", "commute", "transport"]
    },
    {
      id: "a2-s2-9",
      type: "multiple-choice",
      question: "To say what you do every morning, you say:",
      options: ["Every morning, I check my emails first thing.", "Every morning email check.", "First morning email I.", "Check morning email every."],
      correctAnswer: "Every morning, I check my emails first thing.",
      explanation: "'Every morning/day/week' + action. 'First thing' = lo primero.",
      explanationSpanish: "'Every morning/day/week' + acción. 'First thing' = lo primero.",
      difficulty: 1,
      tags: ["speaking", "routine", "work"]
    },
    {
      id: "a2-s2-10",
      type: "multiple-choice",
      question: "How do you describe that you exercise regularly?",
      options: ["I work out three times a week at the gym.", "Three times gym week.", "Work out gym three times.", "Gym I three times."],
      correctAnswer: "I work out three times a week at the gym.",
      explanation: "'Work out' = hacer ejercicio. Frequency + at + place.",
      explanationSpanish: "'Work out' = hacer ejercicio. Frecuencia + at + lugar.",
      difficulty: 1,
      tags: ["speaking", "exercise", "frequency"]
    },
    {
      id: "a2-s2-11",
      type: "multiple-choice",
      question: "To describe your evening routine, you say:",
      options: ["In the evening, I watch TV and go to bed around 11.", "Evening TV bed 11.", "11 bed TV evening.", "Watch TV 11 evening."],
      correctAnswer: "In the evening, I watch TV and go to bed around 11.",
      explanation: "'In the evening' + activities + 'go to bed around + time'.",
      explanationSpanish: "'In the evening' + actividades + 'go to bed around + hora'.",
      difficulty: 1,
      tags: ["speaking", "routine", "evening"]
    },
    {
      id: "a2-s2-12",
      type: "multiple-choice",
      question: "To talk about irregular habits, you say:",
      options: ["I sometimes work from home on Fridays.", "Sometimes Friday home work.", "Friday home sometimes work.", "Work Friday sometimes."],
      correctAnswer: "I sometimes work from home on Fridays.",
      explanation: "'Sometimes' shows irregular frequency. 'On + days' for specific days.",
      explanationSpanish: "'Sometimes' muestra frecuencia irregular. 'On + días' para días específicos.",
      difficulty: 2,
      tags: ["speaking", "work", "frequency"]
    },
    {
      id: "a2-s2-13",
      type: "multiple-choice",
      question: "How do you describe your Sunday routine?",
      options: ["On Sundays, I like to relax and spend time with family.", "Sunday relax family.", "Relax Sunday family I.", "Family Sunday relax like."],
      correctAnswer: "On Sundays, I like to relax and spend time with family.",
      explanation: "'On Sundays' (plural) for regular Sunday activities.",
      explanationSpanish: "'On Sundays' (plural) para actividades regulares del domingo.",
      difficulty: 1,
      tags: ["speaking", "routine", "weekend"]
    },
    {
      id: "a2-s2-14",
      type: "multiple-choice",
      question: "To describe your morning before work, you say:",
      options: ["Before work, I have coffee and read the news.", "Before coffee news work.", "Work before coffee news.", "Coffee news before work."],
      correctAnswer: "Before work, I have coffee and read the news.",
      explanation: "'Before + activity' describes sequence: before work, before lunch.",
      explanationSpanish: "'Before + actividad' describe secuencia: before work, before lunch.",
      difficulty: 1,
      tags: ["speaking", "routine", "sequence"]
    },
    {
      id: "a2-s2-15",
      type: "multiple-choice",
      question: "To say you're a morning/night person, you say:",
      options: ["I'm a morning person. I prefer to wake up early.", "Morning person early I.", "Early wake morning person.", "Person morning early I."],
      correctAnswer: "I'm a morning person. I prefer to wake up early.",
      explanation: "'Morning person' vs 'night owl' - personality related to sleep patterns.",
      explanationSpanish: "'Morning person' vs 'night owl' - personalidad relacionada con patrones de sueño.",
      difficulty: 2,
      tags: ["speaking", "personality", "routine"]
    },
  ],

  // Describir experiencias pasadas
  "a2-speak-3": [
    {
      id: "a2-s3-1",
      type: "multiple-choice",
      question: "How do you describe your last vacation?",
      options: ["Last summer, I went to Italy. It was amazing!", "Italy summer last amazing.", "Went Italy amazing summer.", "Amazing Italy last I went."],
      correctAnswer: "Last summer, I went to Italy. It was amazing!",
      explanation: "Past narrative: Time + subject + past verb + opinion.",
      explanationSpanish: "Narrativa en pasado: Tiempo + sujeto + verbo pasado + opinión.",
      difficulty: 1,
      tags: ["speaking", "past", "vacation"]
    },
    {
      id: "a2-s3-2",
      type: "multiple-choice",
      question: "To describe what you did on vacation, you say:",
      options: ["I visited museums and tried local food.", "Visited museums food local.", "Museums visited tried food.", "Food museums I visited."],
      correctAnswer: "I visited museums and tried local food.",
      explanation: "Past Simple for completed vacation activities.",
      explanationSpanish: "Past Simple para actividades de vacaciones completadas.",
      difficulty: 1,
      tags: ["speaking", "past", "activities"]
    },
    {
      id: "a2-s3-3",
      type: "multiple-choice",
      question: "To give your opinion about an experience, you say:",
      options: ["The trip was incredible. I loved the beaches.", "Incredible trip beaches loved.", "Loved beaches incredible trip.", "Trip incredible I loved."],
      correctAnswer: "The trip was incredible. I loved the beaches.",
      explanation: "Opinion structure: The [noun] was [adjective]. I loved/enjoyed [aspect].",
      explanationSpanish: "Estructura de opinión: The [sustantivo] was [adjetivo]. I loved/enjoyed [aspecto].",
      difficulty: 1,
      tags: ["speaking", "opinion", "past"]
    },
    {
      id: "a2-s3-4",
      type: "multiple-choice",
      question: "How do you describe a memorable event?",
      options: ["One of the best experiences was when I saw the Eiffel Tower.", "Best experience Eiffel Tower.", "Eiffel Tower best saw.", "Saw Eiffel Tower experience."],
      correctAnswer: "One of the best experiences was when I saw the Eiffel Tower.",
      explanation: "'One of the best + noun + was when + past event.'",
      explanationSpanish: "'One of the best + sustantivo + was when + evento pasado.'",
      difficulty: 2,
      tags: ["speaking", "memorable", "past"]
    },
    {
      id: "a2-s3-5",
      type: "multiple-choice",
      question: "To describe the weather during your trip, you say:",
      options: ["The weather was perfect. It was sunny every day.", "Perfect weather sunny every.", "Sunny weather perfect day.", "Every day sunny perfect."],
      correctAnswer: "The weather was perfect. It was sunny every day.",
      explanation: "Describe conditions: The weather was + adjective. It was + weather type.",
      explanationSpanish: "Describe condiciones: The weather was + adjetivo. It was + tipo de clima.",
      difficulty: 1,
      tags: ["speaking", "weather", "past"]
    },
    {
      id: "a2-s3-6",
      type: "multiple-choice",
      question: "To describe where you stayed, you say:",
      options: ["We stayed at a beautiful hotel near the beach.", "Stayed hotel beach beautiful.", "Beautiful hotel stayed beach.", "Hotel beach stayed beautiful."],
      correctAnswer: "We stayed at a beautiful hotel near the beach.",
      explanation: "'Stayed at + place + location description.'",
      explanationSpanish: "'Stayed at + lugar + descripción de ubicación.'",
      difficulty: 1,
      tags: ["speaking", "accommodation", "past"]
    },
    {
      id: "a2-s3-7",
      type: "multiple-choice",
      question: "How do you describe something negative about a trip?",
      options: ["The only problem was the flight was delayed.", "Problem flight delayed only.", "Delayed flight problem only.", "Only delayed problem flight."],
      correctAnswer: "The only problem was the flight was delayed.",
      explanation: "'The only problem was + negative aspect.' Softer way to complain.",
      explanationSpanish: "'The only problem was + aspecto negativo.' Forma suave de quejarse.",
      difficulty: 2,
      tags: ["speaking", "negative", "past"]
    },
    {
      id: "a2-s3-8",
      type: "multiple-choice",
      question: "To describe how long you stayed, you say:",
      options: ["I stayed there for two weeks.", "Two weeks stayed there.", "Stayed two weeks there I.", "There two weeks I stayed."],
      correctAnswer: "I stayed there for two weeks.",
      explanation: "'For + duration' shows how long: for two weeks, for three days.",
      explanationSpanish: "'For + duración' muestra cuánto tiempo: for two weeks, for three days.",
      difficulty: 1,
      tags: ["speaking", "duration", "past"]
    },
    {
      id: "a2-s3-9",
      type: "multiple-choice",
      question: "To recommend a place you visited, you say:",
      options: ["You should definitely visit Barcelona. It's beautiful.", "Barcelona visit definitely should.", "Should Barcelona visit beautiful.", "Visit Barcelona should you."],
      correctAnswer: "You should definitely visit Barcelona. It's beautiful.",
      explanation: "'You should + verb' for recommendations based on experience.",
      explanationSpanish: "'You should + verbo' para recomendaciones basadas en experiencia.",
      difficulty: 2,
      tags: ["speaking", "recommendation", "past"]
    },
    {
      id: "a2-s3-10",
      type: "multiple-choice",
      question: "How do you describe how you traveled?",
      options: ["We flew to Paris and then took a train to Nice.", "Flew Paris train Nice.", "Paris flew Nice train.", "Train Nice Paris flew."],
      correctAnswer: "We flew to Paris and then took a train to Nice.",
      explanation: "Transport verbs in past: flew, took, drove, walked.",
      explanationSpanish: "Verbos de transporte en pasado: flew, took, drove, walked.",
      difficulty: 2,
      tags: ["speaking", "transport", "past"]
    },
    {
      id: "a2-s3-11",
      type: "multiple-choice",
      question: "To describe who you traveled with, you say:",
      options: ["I went with my family and we had a great time.", "Family went great time.", "Great time family went.", "Went family time great."],
      correctAnswer: "I went with my family and we had a great time.",
      explanation: "'Went with + person/people' describes travel companions.",
      explanationSpanish: "'Went with + persona/personas' describe compañeros de viaje.",
      difficulty: 1,
      tags: ["speaking", "companions", "past"]
    },
    {
      id: "a2-s3-12",
      type: "multiple-choice",
      question: "To describe something you learned, you say:",
      options: ["I learned a lot about the local culture.", "Learned culture local lot.", "Culture local learned lot.", "Lot learned local culture."],
      correctAnswer: "I learned a lot about the local culture.",
      explanation: "'Learned + about + topic' for knowledge gained.",
      explanationSpanish: "'Learned + about + tema' para conocimiento adquirido.",
      difficulty: 1,
      tags: ["speaking", "learning", "past"]
    },
    {
      id: "a2-s3-13",
      type: "multiple-choice",
      question: "How do you describe the food you tried?",
      options: ["I tried paella for the first time and it was delicious.", "Tried paella first delicious.", "Paella first time delicious tried.", "Delicious paella first tried."],
      correctAnswer: "I tried paella for the first time and it was delicious.",
      explanation: "'For the first time' = por primera vez. Great for describing new experiences.",
      explanationSpanish: "'For the first time' = por primera vez. Ideal para describir nuevas experiencias.",
      difficulty: 1,
      tags: ["speaking", "food", "past"]
    },
    {
      id: "a2-s3-14",
      type: "multiple-choice",
      question: "To describe a surprise during your trip, you say:",
      options: ["I was surprised to find that everyone spoke English.", "Surprised English everyone spoke.", "Everyone spoke surprised English.", "English surprised spoke everyone."],
      correctAnswer: "I was surprised to find that everyone spoke English.",
      explanation: "'I was surprised to find that...' for unexpected discoveries.",
      explanationSpanish: "'I was surprised to find that...' para descubrimientos inesperados.",
      difficulty: 2,
      tags: ["speaking", "surprise", "past"]
    },
    {
      id: "a2-s3-15",
      type: "multiple-choice",
      question: "To summarize your experience, you say:",
      options: ["Overall, it was an unforgettable experience.", "Overall unforgettable experience was.", "Unforgettable overall experience.", "Experience overall unforgettable."],
      correctAnswer: "Overall, it was an unforgettable experience.",
      explanation: "'Overall' + summary statement. 'Unforgettable' = inolvidable.",
      explanationSpanish: "'Overall' + declaración resumida. 'Unforgettable' = inolvidable.",
      difficulty: 2,
      tags: ["speaking", "summary", "past"]
    },
  ],

  // En el hotel
  "a2-speak-4": [
    {
      id: "a2-s4-1",
      type: "multiple-choice",
      question: "How do you check in at a hotel?",
      options: ["Hi, I have a reservation under the name Smith.", "Reservation Smith I have.", "Smith reservation hi.", "Have reservation under Smith."],
      correctAnswer: "Hi, I have a reservation under the name Smith.",
      explanation: "'I have a reservation under the name [surname].'",
      explanationSpanish: "'I have a reservation under the name [apellido].'",
      difficulty: 1,
      tags: ["speaking", "hotel", "check-in"]
    },
    {
      id: "a2-s4-2",
      type: "multiple-choice",
      question: "To ask about checkout time, you say:",
      options: ["What time is checkout?", "Checkout time what?", "Time checkout is?", "What checkout time?"],
      correctAnswer: "What time is checkout?",
      explanation: "'What time is checkout/check-in?' - standard hotel question.",
      explanationSpanish: "'What time is checkout/check-in?' - pregunta estándar de hotel.",
      difficulty: 1,
      tags: ["speaking", "hotel", "checkout"]
    },
    {
      id: "a2-s4-3",
      type: "multiple-choice",
      question: "To ask for a wake-up call, you say:",
      options: ["Could I have a wake-up call at 7 AM?", "Wake up 7 AM call?", "7 AM wake call I?", "Call wake 7 AM?"],
      correctAnswer: "Could I have a wake-up call at 7 AM?",
      explanation: "'Could I have a wake-up call at [time]?' - polite hotel request.",
      explanationSpanish: "'Could I have a wake-up call at [hora]?' - petición educada de hotel.",
      difficulty: 2,
      tags: ["speaking", "hotel", "service"]
    },
    {
      id: "a2-s4-4",
      type: "multiple-choice",
      question: "How do you ask if breakfast is included?",
      options: ["Is breakfast included in the price?", "Breakfast included price?", "Price breakfast included?", "Included breakfast is?"],
      correctAnswer: "Is breakfast included in the price?",
      explanation: "'Is [service] included in the price?' for checking inclusions.",
      explanationSpanish: "'Is [servicio] included in the price?' para verificar inclusiones.",
      difficulty: 1,
      tags: ["speaking", "hotel", "breakfast"]
    },
    {
      id: "a2-s4-5",
      type: "multiple-choice",
      question: "To report a problem with your room, you say:",
      options: ["Excuse me, the air conditioning isn't working.", "Air conditioning not work.", "Not working air conditioning.", "Working not is air."],
      correctAnswer: "Excuse me, the air conditioning isn't working.",
      explanation: "'Excuse me, the [item] isn't working.' - reporting problems politely.",
      explanationSpanish: "'Excuse me, the [cosa] isn't working.' - reportar problemas educadamente.",
      difficulty: 2,
      tags: ["speaking", "hotel", "problem"]
    },
    {
      id: "a2-s4-6",
      type: "multiple-choice",
      question: "To ask for extra towels, you say:",
      options: ["Could I get some extra towels, please?", "Towels extra could I?", "Extra towels want!", "Get towels extra!"],
      correctAnswer: "Could I get some extra towels, please?",
      explanation: "'Could I get + item + please?' for room service requests.",
      explanationSpanish: "'Could I get + cosa + please?' para peticiones de servicio de habitación.",
      difficulty: 1,
      tags: ["speaking", "hotel", "request"]
    },
    {
      id: "a2-s4-7",
      type: "multiple-choice",
      question: "How do you ask for the WiFi password?",
      options: ["What's the WiFi password?", "WiFi password what?", "Password WiFi is?", "What password WiFi?"],
      correctAnswer: "What's the WiFi password?",
      explanation: "'What's the WiFi password?' - common hotel question.",
      explanationSpanish: "'What's the WiFi password?' - pregunta común de hotel.",
      difficulty: 1,
      tags: ["speaking", "hotel", "wifi"]
    },
    {
      id: "a2-s4-8",
      type: "multiple-choice",
      question: "To ask for late checkout, you say:",
      options: ["Is it possible to have a late checkout?", "Late checkout possible?", "Checkout late possible is?", "Possible checkout late?"],
      correctAnswer: "Is it possible to have a late checkout?",
      explanation: "'Is it possible to + request?' - polite way to ask for something extra.",
      explanationSpanish: "'Is it possible to + petición?' - forma educada de pedir algo extra.",
      difficulty: 2,
      tags: ["speaking", "hotel", "checkout"]
    },
    {
      id: "a2-s4-9",
      type: "multiple-choice",
      question: "To ask where the gym is, you say:",
      options: ["Excuse me, where is the gym?", "Gym where is?", "Is where the gym?", "Where gym is?"],
      correctAnswer: "Excuse me, where is the gym?",
      explanation: "'Excuse me' + question shows politeness.",
      explanationSpanish: "'Excuse me' + pregunta muestra cortesía.",
      difficulty: 1,
      tags: ["speaking", "hotel", "facilities"]
    },
    {
      id: "a2-s4-10",
      type: "multiple-choice",
      question: "How do you ask to have your room cleaned?",
      options: ["Could you send housekeeping to my room, please?", "Housekeeping room send!", "Room clean send!", "Send room clean now!"],
      correctAnswer: "Could you send housekeeping to my room, please?",
      explanation: "'Housekeeping' = servicio de limpieza. Polite request format.",
      explanationSpanish: "'Housekeeping' = servicio de limpieza. Formato de petición educada.",
      difficulty: 2,
      tags: ["speaking", "hotel", "housekeeping"]
    },
    {
      id: "a2-s4-11",
      type: "multiple-choice",
      question: "To ask about room service hours, you say:",
      options: ["What time does room service close?", "Room service close time?", "Close room service when?", "When close room service?"],
      correctAnswer: "What time does room service close?",
      explanation: "'What time does [service] open/close?' for schedules.",
      explanationSpanish: "'What time does [servicio] open/close?' para horarios.",
      difficulty: 1,
      tags: ["speaking", "hotel", "room-service"]
    },
    {
      id: "a2-s4-12",
      type: "multiple-choice",
      question: "To ask for a room change, you say:",
      options: ["I'd like to change rooms, please. This one is too noisy.", "Change room noisy.", "Room noisy change want.", "Too noisy room change."],
      correctAnswer: "I'd like to change rooms, please. This one is too noisy.",
      explanation: "'I'd like to + request + reason.' Professional and clear.",
      explanationSpanish: "'I'd like to + petición + razón.' Profesional y claro.",
      difficulty: 2,
      tags: ["speaking", "hotel", "change"]
    },
    {
      id: "a2-s4-13",
      type: "multiple-choice",
      question: "How do you ask about transport to the airport?",
      options: ["Do you have airport shuttle service?", "Airport shuttle have you?", "Shuttle airport service?", "Have shuttle airport?"],
      correctAnswer: "Do you have airport shuttle service?",
      explanation: "'Do you have + service?' to ask about hotel services.",
      explanationSpanish: "'Do you have + servicio?' para preguntar sobre servicios del hotel.",
      difficulty: 1,
      tags: ["speaking", "hotel", "transport"]
    },
    {
      id: "a2-s4-14",
      type: "multiple-choice",
      question: "To leave a complaint at checkout, you say:",
      options: ["I'd like to make a complaint about my stay.", "Complaint stay make I.", "Make complaint stay.", "Stay complaint I make."],
      correctAnswer: "I'd like to make a complaint about my stay.",
      explanation: "'Make a complaint' = formal way to complain.",
      explanationSpanish: "'Make a complaint' = forma formal de quejarse.",
      difficulty: 2,
      tags: ["speaking", "hotel", "complaint"]
    },
    {
      id: "a2-s4-15",
      type: "multiple-choice",
      question: "To thank the staff and leave, you say:",
      options: ["Thank you for everything. We had a lovely stay.", "Thank you everything stay.", "Stay lovely thank you.", "Everything thank lovely."],
      correctAnswer: "Thank you for everything. We had a lovely stay.",
      explanation: "Polite departure: 'Thank you for + reason. We had a + adjective + stay.'",
      explanationSpanish: "Despedida educada: 'Thank you for + razón. We had a + adjetivo + stay.'",
      difficulty: 1,
      tags: ["speaking", "hotel", "goodbye"]
    },
  ],

  // En el restaurante
  "a2-speak-5": [
    {
      id: "a2-s5-1",
      type: "multiple-choice",
      question: "How do you ask for a table for four?",
      options: ["A table for four, please.", "Table four please.", "Four people table!", "Want table four."],
      correctAnswer: "A table for four, please.",
      explanation: "'A table for + number + please.' Standard restaurant request.",
      explanationSpanish: "'A table for + número + please.' Petición estándar de restaurante.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "table"]
    },
    {
      id: "a2-s5-2",
      type: "multiple-choice",
      question: "To ask for the waiter's recommendation, you say:",
      options: ["What do you recommend?", "Recommend what you?", "You recommend what?", "What recommend?"],
      correctAnswer: "What do you recommend?",
      explanation: "'What do you recommend?' asks for suggestions.",
      explanationSpanish: "'What do you recommend?' pide sugerencias.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "recommendation"]
    },
    {
      id: "a2-s5-3",
      type: "multiple-choice",
      question: "To say you're ready to order, you say:",
      options: ["We're ready to order, please.", "Order ready we!", "Ready order we are.", "Please order ready."],
      correctAnswer: "We're ready to order, please.",
      explanation: "'We're ready to order' signals you want to place your order.",
      explanationSpanish: "'We're ready to order' indica que quieren hacer su pedido.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "order"]
    },
    {
      id: "a2-s5-4",
      type: "multiple-choice",
      question: "How do you ask about ingredients due to an allergy?",
      options: ["Does this dish contain nuts? I'm allergic.", "Nuts dish contain? Allergic.", "Contain nuts allergic?", "Allergic nuts contain?"],
      correctAnswer: "Does this dish contain nuts? I'm allergic.",
      explanation: "'Does this contain + allergen? I'm allergic.' Important for safety.",
      explanationSpanish: "'Does this contain + alérgeno? I'm allergic.' Importante para la seguridad.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "allergy"]
    },
    {
      id: "a2-s5-5",
      type: "multiple-choice",
      question: "To ask for something on the side, you say:",
      options: ["Could I have the sauce on the side?", "Sauce side please!", "Side sauce have!", "On side sauce!"],
      correctAnswer: "Could I have the sauce on the side?",
      explanation: "'On the side' = served separately. Common restaurant request.",
      explanationSpanish: "'On the side' = servido aparte. Petición común de restaurante.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "modification"]
    },
    {
      id: "a2-s5-6",
      type: "multiple-choice",
      question: "To say you'd like water with no ice, you say:",
      options: ["Water with no ice, please.", "No ice water!", "Water ice no!", "Please water no ice."],
      correctAnswer: "Water with no ice, please.",
      explanation: "'With no + item' or 'without + item' for exclusions.",
      explanationSpanish: "'With no + cosa' o 'without + cosa' para exclusiones.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "drinks"]
    },
    {
      id: "a2-s5-7",
      type: "multiple-choice",
      question: "How do you ask if they can make the dish less spicy?",
      options: ["Could you make it less spicy, please?", "Less spicy make!", "Make less spicy!", "Spicy less could?"],
      correctAnswer: "Could you make it less spicy, please?",
      explanation: "'Could you make it + adjective-er?' for modifications.",
      explanationSpanish: "'Could you make it + más/menos + adjetivo?' para modificaciones.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "modification"]
    },
    {
      id: "a2-s5-8",
      type: "multiple-choice",
      question: "To order a steak, you say how you want it cooked:",
      options: ["I'd like my steak medium rare, please.", "Steak medium rare!", "Medium rare steak want!", "Please steak medium."],
      correctAnswer: "I'd like my steak medium rare, please.",
      explanation: "Steak doneness: rare, medium rare, medium, medium well, well done.",
      explanationSpanish: "Cocción del bistec: rare, medium rare, medium, medium well, well done.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "steak"]
    },
    {
      id: "a2-s5-9",
      type: "multiple-choice",
      question: "To ask for separate bills, you say:",
      options: ["Could we have separate bills, please?", "Bills separate please!", "Separate bills want!", "Please separate bills!"],
      correctAnswer: "Could we have separate bills, please?",
      explanation: "'Separate bills' = cada uno paga lo suyo.",
      explanationSpanish: "'Separate bills' = cada uno paga lo suyo.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "bill"]
    },
    {
      id: "a2-s5-10",
      type: "multiple-choice",
      question: "How do you ask to have the leftovers packed?",
      options: ["Could I get a doggy bag, please?", "Doggy bag please!", "Bag food take!", "Take food home bag!"],
      correctAnswer: "Could I get a doggy bag, please?",
      explanation: "'Doggy bag' or 'to-go box' = para llevar las sobras.",
      explanationSpanish: "'Doggy bag' o 'to-go box' = para llevar las sobras.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "takeaway"]
    },
    {
      id: "a2-s5-11",
      type: "multiple-choice",
      question: "To say the food was excellent, you say:",
      options: ["The food was delicious. Please give my compliments to the chef.", "Delicious food chef compliments!", "Chef food delicious!", "Compliments chef delicious!"],
      correctAnswer: "The food was delicious. Please give my compliments to the chef.",
      explanation: "'Give my compliments to the chef' = felicitar al chef.",
      explanationSpanish: "'Give my compliments to the chef' = felicitar al chef.",
      difficulty: 2,
      tags: ["speaking", "restaurant", "compliment"]
    },
    {
      id: "a2-s5-12",
      type: "multiple-choice",
      question: "To ask about the special of the day, you say:",
      options: ["What's today's special?", "Special today what?", "Today special is?", "What today's is?"],
      correctAnswer: "What's today's special?",
      explanation: "'Today's special' = el plato del día.",
      explanationSpanish: "'Today's special' = el plato del día.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "special"]
    },
    {
      id: "a2-s5-13",
      type: "multiple-choice",
      question: "How do you ask if they accept credit cards?",
      options: ["Do you accept credit cards?", "Credit cards accept?", "Accept cards credit?", "Cards credit accept you?"],
      correctAnswer: "Do you accept credit cards?",
      explanation: "'Do you accept + payment method?' for payment questions.",
      explanationSpanish: "'Do you accept + método de pago?' para preguntas de pago.",
      difficulty: 1,
      tags: ["speaking", "restaurant", "payment"]
    },
    {
      id: "a2-s5-14",
      type: "multiple-choice",
      question: "To explain dietary restrictions, you say:",
      options: ["I'm vegetarian. What options do you have?", "Vegetarian I am options?", "Options vegetarian what?", "What options I vegetarian?"],
      correctAnswer: "I'm vegetarian. What options do you have?",
      explanation: "'I'm + dietary restriction. What options do you have?'",
      explanationSpanish: "'I'm + restricción dietética. What options do you have?'",
      difficulty: 2,
      tags: ["speaking", "restaurant", "dietary"]
    },
    {
      id: "a2-s5-15",
      type: "multiple-choice",
      question: "To leave a tip and say goodbye, you say:",
      options: ["Keep the change. Thank you, everything was wonderful.", "Change keep wonderful!", "Keep change thank!", "Wonderful change keep!"],
      correctAnswer: "Keep the change. Thank you, everything was wonderful.",
      explanation: "'Keep the change' = quédese con el cambio (propina).",
      explanationSpanish: "'Keep the change' = quédese con el cambio (propina).",
      difficulty: 2,
      tags: ["speaking", "restaurant", "tip"]
    },
  ],
};

// Function to get speaking exercises by skill ID
export function getSpeakingExercisesBySkillId(skillId: string): Exercise[] {
  return a1SpeakingExercises[skillId] || a2SpeakingExercises[skillId] || [];
}

// Export all speaking exercises
export const allSpeakingExercises = {
  a1Speaking: a1SpeakingExercises,
  a2Speaking: a2SpeakingExercises,
};
