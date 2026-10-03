// Complete Writing Exercises for all CEFR levels (A1-C2)
// Each skill has 20-30 functional exercises

import { Exercise } from "./exercisesData";

export const writingExercises: Record<string, Exercise[]> = {
  // =====================================================
  // A1 WRITING EXERCISES
  // =====================================================

  // A1 - Personal Data
  "a1-write-1": [
    {
      id: "a1-w1-1",
      type: "multiple-choice",
      question: "Complete the form:\nFirst Name: ___\n(Your name is Maria)",
      options: ["Maria", "García", "Female", "Mexico"],
      correctAnswer: "Maria",
      explanation: "First Name is your given/personal name.",
      explanationSpanish: "First Name es tu nombre de pila.",
      difficulty: 1,
      tags: ["writing", "forms", "personal-info"]
    },
    {
      id: "a1-w1-2",
      type: "multiple-choice",
      question: "Complete the form:\nLast Name: ___\n(Your surname is García)",
      options: ["Maria", "García", "Female", "Mexico"],
      correctAnswer: "García",
      explanation: "Last Name/Surname is your family name.",
      explanationSpanish: "Last Name/Surname es tu apellido.",
      difficulty: 1,
      tags: ["writing", "forms", "personal-info"]
    },
    {
      id: "a1-w1-3",
      type: "multiple-choice",
      question: "Complete: My email is john___ gmail.com",
      options: [".", "-", "@", "/"],
      correctAnswer: "@",
      explanation: "Email addresses use @ before the domain.",
      explanationSpanish: "Las direcciones de email usan @ antes del dominio.",
      difficulty: 1,
      tags: ["writing", "email", "format"]
    },
    {
      id: "a1-w1-4",
      type: "multiple-choice",
      question: "Which is a correct phone number format?",
      options: ["555.1234", "555-555-1234", "555@1234", "555#1234"],
      correctAnswer: "555-555-1234",
      explanation: "Phone numbers typically use hyphens or spaces.",
      explanationSpanish: "Los números de teléfono típicamente usan guiones o espacios.",
      difficulty: 1,
      tags: ["writing", "phone", "format"]
    },
    {
      id: "a1-w1-5",
      type: "multiple-choice",
      question: "Complete the address:\n123 Main ___, New York, NY",
      options: ["Road", "Street", "Home", "City"],
      correctAnswer: "Street",
      explanation: "'Street' (St.) is common in addresses.",
      explanationSpanish: "'Street' (St.) es común en direcciones.",
      difficulty: 1,
      tags: ["writing", "address", "format"]
    },
    {
      id: "a1-w1-6",
      type: "multiple-choice",
      question: "How do you write today's date in American format? (January 15, 2024)",
      options: ["15/01/2024", "01/15/2024", "2024/01/15", "15-01-2024"],
      correctAnswer: "01/15/2024",
      explanation: "American format is MM/DD/YYYY.",
      explanationSpanish: "El formato americano es MM/DD/AAAA.",
      difficulty: 2,
      tags: ["writing", "dates", "format"]
    },
    {
      id: "a1-w1-7",
      type: "multiple-choice",
      question: "What goes after a title (Mr., Ms., Mrs.)?",
      options: ["First name", "Last name", "Age", "Address"],
      correctAnswer: "Last name",
      explanation: "Titles are followed by last names: Mr. Smith, Ms. Jones.",
      explanationSpanish: "Los títulos van seguidos del apellido: Mr. Smith, Ms. Jones.",
      difficulty: 1,
      tags: ["writing", "titles", "format"]
    },
    {
      id: "a1-w1-8",
      type: "multiple-choice",
      question: "Complete: I am 25 years ___.",
      options: ["old", "age", "young", "born"],
      correctAnswer: "old",
      explanation: "We say 'X years old' for age.",
      explanationSpanish: "Decimos 'X years old' para la edad.",
      difficulty: 1,
      tags: ["writing", "age", "expressions"]
    },
    {
      id: "a1-w1-9",
      type: "multiple-choice",
      question: "Complete: My nationality is ___. (from Mexico)",
      options: ["Mexico", "Mexican", "Mexicano", "From Mexico"],
      correctAnswer: "Mexican",
      explanation: "Nationality uses the adjective form: Mexican, not Mexico.",
      explanationSpanish: "La nacionalidad usa el adjetivo: Mexican, no Mexico.",
      difficulty: 1,
      tags: ["writing", "nationality", "vocabulary"]
    },
    {
      id: "a1-w1-10",
      type: "multiple-choice",
      question: "Complete the form:\nGender: ___\n(You are a woman)",
      options: ["Woman", "Girl", "Female", "Lady"],
      correctAnswer: "Female",
      explanation: "On forms, we use 'Female' (F) or 'Male' (M).",
      explanationSpanish: "En formularios, usamos 'Female' (F) o 'Male' (M).",
      difficulty: 1,
      tags: ["writing", "forms", "gender"]
    },
    {
      id: "a1-w1-11",
      type: "multiple-choice",
      question: "Which is correct for marital status if you are married?",
      options: ["Single", "Married", "Divorced", "Have husband"],
      correctAnswer: "Married",
      explanation: "Marital status options: Single, Married, Divorced, Widowed.",
      explanationSpanish: "Opciones de estado civil: Single, Married, Divorced, Widowed.",
      difficulty: 1,
      tags: ["writing", "forms", "status"]
    },
    {
      id: "a1-w1-12",
      type: "multiple-choice",
      question: "Complete: Date of Birth: March 15, ___",
      options: ["19", "1990", "ninety", "March"],
      correctAnswer: "1990",
      explanation: "Year should be written in full: 1990.",
      explanationSpanish: "El año debe escribirse completo: 1990.",
      difficulty: 1,
      tags: ["writing", "dates", "format"]
    },
    {
      id: "a1-w1-13",
      type: "multiple-choice",
      question: "How do you write a ZIP code?",
      options: ["New York", "NY", "10001", "First Street"],
      correctAnswer: "10001",
      explanation: "ZIP codes are 5-digit numbers in the US.",
      explanationSpanish: "Los códigos postales son números de 5 dígitos en EE.UU.",
      difficulty: 1,
      tags: ["writing", "address", "zipcode"]
    },
    {
      id: "a1-w1-14",
      type: "multiple-choice",
      question: "What comes after the street in a US address?",
      options: ["Country", "ZIP code", "City, State", "Phone number"],
      correctAnswer: "City, State",
      explanation: "US address order: Street, City, State, ZIP.",
      explanationSpanish: "Orden de dirección en EE.UU.: Calle, Ciudad, Estado, ZIP.",
      difficulty: 2,
      tags: ["writing", "address", "format"]
    },
    {
      id: "a1-w1-15",
      type: "multiple-choice",
      question: "Complete: My occupation is ___. (You work as a teacher)",
      options: ["Teaching", "Teach", "Teacher", "Teached"],
      correctAnswer: "Teacher",
      explanation: "Occupation should be a noun: teacher, doctor, engineer.",
      explanationSpanish: "La ocupación debe ser un sustantivo: teacher, doctor, engineer.",
      difficulty: 1,
      tags: ["writing", "occupation", "vocabulary"]
    },
    {
      id: "a1-w1-16",
      type: "fill-blank",
      question: "Complete: Emergency Contact Name: ___ (Your mother's name is Ana)",
      options: ["Ana", "Mother", "Mom", "Parent"],
      correctAnswer: "Ana",
      explanation: "Write the actual name of the contact person.",
      explanationSpanish: "Escribe el nombre real de la persona de contacto.",
      difficulty: 1,
      tags: ["writing", "forms", "emergency"]
    },
    {
      id: "a1-w1-17",
      type: "multiple-choice",
      question: "Which is a valid signature?",
      options: ["Print clearly", "Your unique handwritten name", "X mark only", "Your initials only"],
      correctAnswer: "Your unique handwritten name",
      explanation: "A signature is your name written in your personal style.",
      explanationSpanish: "Una firma es tu nombre escrito en tu estilo personal.",
      difficulty: 2,
      tags: ["writing", "signature", "documents"]
    },
    {
      id: "a1-w1-18",
      type: "multiple-choice",
      question: "Complete: I live ___ 123 Main Street.",
      options: ["in", "at", "on", "to"],
      correctAnswer: "at",
      explanation: "We use 'at' for specific addresses.",
      explanationSpanish: "Usamos 'at' para direcciones específicas.",
      difficulty: 1,
      tags: ["writing", "address", "prepositions"]
    },
    {
      id: "a1-w1-19",
      type: "multiple-choice",
      question: "Complete: I am ___ Spain. (nationality)",
      options: ["from", "in", "at", "of"],
      correctAnswer: "from",
      explanation: "We use 'from' to express origin/nationality.",
      explanationSpanish: "Usamos 'from' para expresar origen/nacionalidad.",
      difficulty: 1,
      tags: ["writing", "nationality", "prepositions"]
    },
    {
      id: "a1-w1-20",
      type: "multiple-choice",
      question: "What abbreviation means 'apartment'?",
      options: ["App.", "Apt.", "Apart.", "Ap."],
      correctAnswer: "Apt.",
      explanation: "'Apt.' is the standard abbreviation for apartment.",
      explanationSpanish: "'Apt.' es la abreviación estándar de apartment.",
      difficulty: 2,
      tags: ["writing", "address", "abbreviations"]
    },
  ],

  // A1 - Short Sentences
  "a1-write-2": [
    {
      id: "a1-w2-1",
      type: "multiple-choice",
      question: "Which sentence is correct?",
      options: ["I am student.", "I am a student.", "I a student.", "Am I student."],
      correctAnswer: "I am a student.",
      explanation: "We need 'a' before singular countable nouns.",
      explanationSpanish: "Necesitamos 'a' antes de sustantivos contables singulares.",
      difficulty: 1,
      tags: ["writing", "sentences", "articles"]
    },
    {
      id: "a1-w2-2",
      type: "multiple-choice",
      question: "Which sentence is correct?",
      options: ["She have a car.", "She has a car.", "She is have a car.", "She having a car."],
      correctAnswer: "She has a car.",
      explanation: "With he/she/it, use 'has' not 'have'.",
      explanationSpanish: "Con he/she/it, usa 'has' no 'have'.",
      difficulty: 1,
      tags: ["writing", "sentences", "verbs"]
    },
    {
      id: "a1-w2-3",
      type: "multiple-choice",
      question: "Which sentence is correct?",
      options: ["The sky is blue.", "The sky are blue.", "The sky blue is.", "Blue is the sky."],
      correctAnswer: "The sky is blue.",
      explanation: "Subject + be + adjective is the correct order.",
      explanationSpanish: "Sujeto + be + adjetivo es el orden correcto.",
      difficulty: 1,
      tags: ["writing", "sentences", "word-order"]
    },
    {
      id: "a1-w2-4",
      type: "multiple-choice",
      question: "Write a greeting. Which is correct?",
      options: ["Hello my name John.", "Hello, my name is John.", "Hello, my name John is.", "Hello I John."],
      correctAnswer: "Hello, my name is John.",
      explanation: "'My name is...' is the correct structure for introductions.",
      explanationSpanish: "'My name is...' es la estructura correcta para presentaciones.",
      difficulty: 1,
      tags: ["writing", "greetings", "introductions"]
    },
    {
      id: "a1-w2-5",
      type: "multiple-choice",
      question: "Which is a complete sentence?",
      options: ["Running fast.", "The dog.", "The dog is running.", "Is running the dog."],
      correctAnswer: "The dog is running.",
      explanation: "A complete sentence needs a subject and a verb.",
      explanationSpanish: "Una oración completa necesita un sujeto y un verbo.",
      difficulty: 1,
      tags: ["writing", "sentences", "structure"]
    },
    {
      id: "a1-w2-6",
      type: "multiple-choice",
      question: "Which question is correct?",
      options: ["You are happy?", "Are you happy?", "Happy are you?", "You happy are?"],
      correctAnswer: "Are you happy?",
      explanation: "Questions invert the subject and verb: Are you...?",
      explanationSpanish: "Las preguntas invierten sujeto y verbo: Are you...?",
      difficulty: 1,
      tags: ["writing", "questions", "structure"]
    },
    {
      id: "a1-w2-7",
      type: "multiple-choice",
      question: "Which negative sentence is correct?",
      options: ["I not like coffee.", "I don't like coffee.", "I no like coffee.", "I like not coffee."],
      correctAnswer: "I don't like coffee.",
      explanation: "Negatives use 'don't/doesn't' + base verb.",
      explanationSpanish: "Los negativos usan 'don't/doesn't' + verbo base.",
      difficulty: 1,
      tags: ["writing", "sentences", "negative"]
    },
    {
      id: "a1-w2-8",
      type: "multiple-choice",
      question: "How do you start a sentence?",
      options: ["with lowercase", "With uppercase", "WITH ALL CAPS", "any way is fine"],
      correctAnswer: "With uppercase",
      explanation: "Sentences start with a capital letter.",
      explanationSpanish: "Las oraciones comienzan con mayúscula.",
      difficulty: 1,
      tags: ["writing", "capitalization", "rules"]
    },
    {
      id: "a1-w2-9",
      type: "multiple-choice",
      question: "What goes at the end of a statement?",
      options: ["?", "!", ".", "nothing"],
      correctAnswer: ".",
      explanation: "Statements end with a period (.).",
      explanationSpanish: "Las declaraciones terminan con un punto (.).",
      difficulty: 1,
      tags: ["writing", "punctuation", "rules"]
    },
    {
      id: "a1-w2-10",
      type: "multiple-choice",
      question: "What goes at the end of a question?",
      options: [".", "!", "?", ";"],
      correctAnswer: "?",
      explanation: "Questions end with a question mark (?).",
      explanationSpanish: "Las preguntas terminan con signo de interrogación (?).",
      difficulty: 1,
      tags: ["writing", "punctuation", "rules"]
    },
    {
      id: "a1-w2-11",
      type: "multiple-choice",
      question: "Which sentence describes a picture of a red apple?",
      options: ["The apple is red.", "The red is apple.", "Apple the is red.", "Is red the apple."],
      correctAnswer: "The apple is red.",
      explanation: "Subject (The apple) + verb (is) + adjective (red).",
      explanationSpanish: "Sujeto (The apple) + verbo (is) + adjetivo (red).",
      difficulty: 1,
      tags: ["writing", "descriptions", "structure"]
    },
    {
      id: "a1-w2-12",
      type: "multiple-choice",
      question: "Write about your daily routine. Which is correct?",
      options: ["I wake up 7am.", "I wake up at 7am.", "At 7am I up wake.", "Wake up I 7am."],
      correctAnswer: "I wake up at 7am.",
      explanation: "Use 'at' for specific times.",
      explanationSpanish: "Usa 'at' para horas específicas.",
      difficulty: 1,
      tags: ["writing", "routines", "time"]
    },
    {
      id: "a1-w2-13",
      type: "multiple-choice",
      question: "Which sentence uses 'there is' correctly?",
      options: ["There is books on the table.", "There is a book on the table.", "There a book is.", "Book there is."],
      correctAnswer: "There is a book on the table.",
      explanation: "'There is' + singular noun.",
      explanationSpanish: "'There is' + sustantivo singular.",
      difficulty: 1,
      tags: ["writing", "sentences", "there-is"]
    },
    {
      id: "a1-w2-14",
      type: "multiple-choice",
      question: "Which sentence uses 'there are' correctly?",
      options: ["There are a student.", "There are students in the class.", "There are student.", "Students there are."],
      correctAnswer: "There are students in the class.",
      explanation: "'There are' + plural noun.",
      explanationSpanish: "'There are' + sustantivo plural.",
      difficulty: 1,
      tags: ["writing", "sentences", "there-are"]
    },
    {
      id: "a1-w2-15",
      type: "multiple-choice",
      question: "Which sentence about preferences is correct?",
      options: ["I like play football.", "I like to play football.", "I to play like football.", "Like I football play."],
      correctAnswer: "I like to play football.",
      explanation: "'Like + to + verb' or 'like + verb-ing'.",
      explanationSpanish: "'Like + to + verbo' o 'like + verbo-ing'.",
      difficulty: 1,
      tags: ["writing", "preferences", "structure"]
    },
    {
      id: "a1-w2-16",
      type: "multiple-choice",
      question: "Complete: I ___ to the store yesterday.",
      options: ["go", "going", "went", "goes"],
      correctAnswer: "went",
      explanation: "'Yesterday' requires past tense: went.",
      explanationSpanish: "'Yesterday' requiere tiempo pasado: went.",
      difficulty: 2,
      tags: ["writing", "past-tense", "verbs"]
    },
    {
      id: "a1-w2-17",
      type: "multiple-choice",
      question: "Which word connects two ideas?",
      options: ["And", "The", "Is", "A"],
      correctAnswer: "And",
      explanation: "'And' connects similar ideas: I like tea and coffee.",
      explanationSpanish: "'And' conecta ideas similares: I like tea and coffee.",
      difficulty: 1,
      tags: ["writing", "connectors", "and"]
    },
    {
      id: "a1-w2-18",
      type: "multiple-choice",
      question: "Which sentence shows contrast correctly?",
      options: ["I like tea and I don't like coffee.", "I like tea but I don't like coffee.", "I like tea so I don't like coffee.", "I like tea because I don't like coffee."],
      correctAnswer: "I like tea but I don't like coffee.",
      explanation: "'But' shows contrast between ideas.",
      explanationSpanish: "'But' muestra contraste entre ideas.",
      difficulty: 2,
      tags: ["writing", "connectors", "but"]
    },
    {
      id: "a1-w2-19",
      type: "multiple-choice",
      question: "Which describes weather correctly?",
      options: ["Today is sunny it.", "It is sunny today.", "Sunny is today it.", "Today it sunny is."],
      correctAnswer: "It is sunny today.",
      explanation: "'It is + weather + time' is the correct order.",
      explanationSpanish: "'It is + clima + tiempo' es el orden correcto.",
      difficulty: 1,
      tags: ["writing", "weather", "structure"]
    },
    {
      id: "a1-w2-20",
      type: "multiple-choice",
      question: "Write a farewell. Which is correct?",
      options: ["Goodbye, see you!", "Goodbye see you", "goodbye, See you!", "goodbye see You!"],
      correctAnswer: "Goodbye, see you!",
      explanation: "Proper capitalization and punctuation.",
      explanationSpanish: "Mayúsculas y puntuación correctas.",
      difficulty: 1,
      tags: ["writing", "farewells", "punctuation"]
    },
  ],

  // =====================================================
  // A2 WRITING EXERCISES
  // =====================================================

  "a2-write-1": [
    // Emails and Simple Messages
    {
      id: "a2-w1-1",
      type: "multiple-choice",
      question: "How do you start an informal email to a friend?",
      options: ["Dear Sir/Madam,", "To Whom It May Concern,", "Hi John,", "I am writing to inform you..."],
      correctAnswer: "Hi John,",
      explanation: "Informal emails use 'Hi' + name.",
      explanationSpanish: "Los emails informales usan 'Hi' + nombre.",
      difficulty: 1,
      tags: ["writing", "emails", "informal"]
    },
    {
      id: "a2-w1-2",
      type: "multiple-choice",
      question: "How do you start a formal email?",
      options: ["Hey!", "Yo!", "Dear Mr. Smith,", "What's up?"],
      correctAnswer: "Dear Mr. Smith,",
      explanation: "Formal emails use 'Dear' + title + name.",
      explanationSpanish: "Los emails formales usan 'Dear' + título + nombre.",
      difficulty: 1,
      tags: ["writing", "emails", "formal"]
    },
    {
      id: "a2-w1-3",
      type: "multiple-choice",
      question: "Which is a good informal email closing?",
      options: ["Yours sincerely,", "Best regards,", "See you soon!", "I remain, respectfully,"],
      correctAnswer: "See you soon!",
      explanation: "Informal closings are friendly: See you soon, Take care, Bye!",
      explanationSpanish: "Los cierres informales son amigables: See you soon, Take care, Bye!",
      difficulty: 1,
      tags: ["writing", "emails", "closing"]
    },
    {
      id: "a2-w1-4",
      type: "multiple-choice",
      question: "Which is a formal email closing?",
      options: ["Later!", "XOXO", "Best regards,", "Bye bye!"],
      correctAnswer: "Best regards,",
      explanation: "Formal closings: Best regards, Sincerely, Kind regards.",
      explanationSpanish: "Cierres formales: Best regards, Sincerely, Kind regards.",
      difficulty: 1,
      tags: ["writing", "emails", "formal"]
    },
    {
      id: "a2-w1-5",
      type: "multiple-choice",
      question: "Complete the thank you note:\n'Thank you ___ the lovely gift.'",
      options: ["to", "for", "of", "with"],
      correctAnswer: "for",
      explanation: "'Thank you for' + noun/verb-ing.",
      explanationSpanish: "'Thank you for' + sustantivo/verbo-ing.",
      difficulty: 1,
      tags: ["writing", "thanks", "prepositions"]
    },
    {
      id: "a2-w1-6",
      type: "multiple-choice",
      question: "You want to invite a friend. Which is correct?",
      options: ["Come you to my party?", "Would you like to come to my party?", "My party you come?", "To my party come you?"],
      correctAnswer: "Would you like to come to my party?",
      explanation: "'Would you like to...' is a polite invitation.",
      explanationSpanish: "'Would you like to...' es una invitación educada.",
      difficulty: 1,
      tags: ["writing", "invitations", "polite"]
    },
    {
      id: "a2-w1-7",
      type: "multiple-choice",
      question: "How do you apologize in an email?",
      options: ["My bad, sorry.", "I am sorry for the delay.", "Oops, forgot.", "Whatever."],
      correctAnswer: "I am sorry for the delay.",
      explanation: "'I am sorry for...' is a proper apology.",
      explanationSpanish: "'I am sorry for...' es una disculpa apropiada.",
      difficulty: 1,
      tags: ["writing", "apologies", "formal"]
    },
    {
      id: "a2-w1-8",
      type: "multiple-choice",
      question: "Which subject line is clear and professional?",
      options: ["Hi!", "Important!!!", "Meeting Request - March 15", "Read this now"],
      correctAnswer: "Meeting Request - March 15",
      explanation: "Subject lines should be specific and informative.",
      explanationSpanish: "Los asuntos deben ser específicos e informativos.",
      difficulty: 2,
      tags: ["writing", "emails", "subject-lines"]
    },
    {
      id: "a2-w1-9",
      type: "multiple-choice",
      question: "Complete: 'I am writing ___ ask about...'",
      options: ["for", "to", "of", "at"],
      correctAnswer: "to",
      explanation: "'I am writing to...' introduces the purpose.",
      explanationSpanish: "'I am writing to...' introduce el propósito.",
      difficulty: 1,
      tags: ["writing", "emails", "purpose"]
    },
    {
      id: "a2-w1-10",
      type: "multiple-choice",
      question: "How do you confirm receipt of an email?",
      options: ["Got it!", "Thank you for your email.", "K", "Received."],
      correctAnswer: "Thank you for your email.",
      explanation: "'Thank you for your email' is professional.",
      explanationSpanish: "'Thank you for your email' es profesional.",
      difficulty: 1,
      tags: ["writing", "emails", "responses"]
    },
    {
      id: "a2-w1-11",
      type: "multiple-choice",
      question: "Which is a polite request?",
      options: ["Give me information.", "Could you please send me more information?", "I want information now.", "Send information."],
      correctAnswer: "Could you please send me more information?",
      explanation: "'Could you please...' is polite and professional.",
      explanationSpanish: "'Could you please...' es educado y profesional.",
      difficulty: 1,
      tags: ["writing", "requests", "polite"]
    },
    {
      id: "a2-w1-12",
      type: "multiple-choice",
      question: "You're declining an invitation. Which is polite?",
      options: ["No, I can't.", "I'm sorry, but I won't be able to attend.", "Not interested.", "Maybe next time."],
      correctAnswer: "I'm sorry, but I won't be able to attend.",
      explanation: "Polite declines include an apology and explanation.",
      explanationSpanish: "Las declinaciones educadas incluyen disculpa y explicación.",
      difficulty: 2,
      tags: ["writing", "declining", "polite"]
    },
    {
      id: "a2-w1-13",
      type: "multiple-choice",
      question: "Complete: 'I look forward ___ hearing from you.'",
      options: ["at", "for", "to", "in"],
      correctAnswer: "to",
      explanation: "'Look forward to' + verb-ing.",
      explanationSpanish: "'Look forward to' + verbo-ing.",
      difficulty: 2,
      tags: ["writing", "emails", "expressions"]
    },
    {
      id: "a2-w1-14",
      type: "multiple-choice",
      question: "Which phrase asks for confirmation?",
      options: ["OK?", "Please confirm receipt of this email.", "Right?", "Yeah?"],
      correctAnswer: "Please confirm receipt of this email.",
      explanation: "'Please confirm...' is professional.",
      explanationSpanish: "'Please confirm...' es profesional.",
      difficulty: 2,
      tags: ["writing", "emails", "confirmation"]
    },
    {
      id: "a2-w1-15",
      type: "multiple-choice",
      question: "How do you attach a file in an email?",
      options: ["I send you a file.", "Please find the document attached.", "Here file.", "File inside."],
      correctAnswer: "Please find the document attached.",
      explanation: "'Please find attached...' is standard for attachments.",
      explanationSpanish: "'Please find attached...' es estándar para adjuntos.",
      difficulty: 2,
      tags: ["writing", "emails", "attachments"]
    },
    {
      id: "a2-w1-16",
      type: "multiple-choice",
      question: "Complete: 'I ___ if you could help me with something.'",
      options: ["wonder", "want", "need", "like"],
      correctAnswer: "wonder",
      explanation: "'I was wondering if...' is a polite way to ask.",
      explanationSpanish: "'I was wondering if...' es una forma educada de preguntar.",
      difficulty: 2,
      tags: ["writing", "requests", "polite"]
    },
    {
      id: "a2-w1-17",
      type: "multiple-choice",
      question: "How do you end a message to a colleague?",
      options: ["Love,", "Cheers,", "XOXO,", "Whatever,"],
      correctAnswer: "Cheers,",
      explanation: "'Cheers' is friendly but professional for colleagues.",
      explanationSpanish: "'Cheers' es amigable pero profesional para colegas.",
      difficulty: 1,
      tags: ["writing", "emails", "closing"]
    },
    {
      id: "a2-w1-18",
      type: "multiple-choice",
      question: "Which expresses urgency politely?",
      options: ["DO IT NOW!", "I need this ASAP!!!", "I would appreciate a prompt response.", "Hurry up!"],
      correctAnswer: "I would appreciate a prompt response.",
      explanation: "'I would appreciate a prompt response' is politely urgent.",
      explanationSpanish: "'I would appreciate a prompt response' es urgente pero educado.",
      difficulty: 2,
      tags: ["writing", "emails", "urgency"]
    },
    {
      id: "a2-w1-19",
      type: "multiple-choice",
      question: "Complete: 'Please let me know ___ you have any questions.'",
      options: ["when", "if", "that", "what"],
      correctAnswer: "if",
      explanation: "'Let me know if...' invites questions.",
      explanationSpanish: "'Let me know if...' invita a hacer preguntas.",
      difficulty: 1,
      tags: ["writing", "emails", "expressions"]
    },
    {
      id: "a2-w1-20",
      type: "multiple-choice",
      question: "Which is appropriate for a business email?",
      options: ["Hey!! Wanna meet??", "I hope this email finds you well.", "Yo, what's up?", "OMG can we talk?"],
      correctAnswer: "I hope this email finds you well.",
      explanation: "'I hope this email finds you well' is professional.",
      explanationSpanish: "'I hope this email finds you well' es profesional.",
      difficulty: 1,
      tags: ["writing", "emails", "formal"]
    },
  ],

  "a2-write-2": [
    // Short Descriptions
    {
      id: "a2-w2-1",
      type: "multiple-choice",
      question: "Describe a person. Which sentence order is correct?",
      options: ["Tall and she is friendly.", "She is tall and friendly.", "Is she tall and friendly.", "Tall is she and friendly."],
      correctAnswer: "She is tall and friendly.",
      explanation: "Subject + be + adjectives.",
      explanationSpanish: "Sujeto + be + adjetivos.",
      difficulty: 1,
      tags: ["writing", "descriptions", "people"]
    },
    {
      id: "a2-w2-2",
      type: "multiple-choice",
      question: "Which describes hair correctly?",
      options: ["She has hair long brown.", "She has long brown hair.", "She has brown long hair.", "Long brown hair she has."],
      correctAnswer: "She has long brown hair.",
      explanation: "Adjective order: size + color + noun.",
      explanationSpanish: "Orden de adjetivos: tamaño + color + sustantivo.",
      difficulty: 2,
      tags: ["writing", "descriptions", "adjective-order"]
    },
    {
      id: "a2-w2-3",
      type: "multiple-choice",
      question: "Complete: 'My house ___ three bedrooms.'",
      options: ["have", "has", "is", "are"],
      correctAnswer: "has",
      explanation: "'My house' is singular, so use 'has'.",
      explanationSpanish: "'My house' es singular, así que usa 'has'.",
      difficulty: 1,
      tags: ["writing", "descriptions", "home"]
    },
    {
      id: "a2-w2-4",
      type: "multiple-choice",
      question: "Which describes location correctly?",
      options: ["The park is near to my house.", "The park is near my house.", "The park is near from my house.", "The park is at near my house."],
      correctAnswer: "The park is near my house.",
      explanation: "'Near' doesn't need 'to' or 'from'.",
      explanationSpanish: "'Near' no necesita 'to' o 'from'.",
      difficulty: 1,
      tags: ["writing", "descriptions", "location"]
    },
    {
      id: "a2-w2-5",
      type: "multiple-choice",
      question: "Describe your room. Which is correct?",
      options: ["My room is small but is cozy.", "My room is small but cozy.", "My room small is but cozy.", "Small my room is but cozy."],
      correctAnswer: "My room is small but cozy.",
      explanation: "'Subject + be + adj + but + adj' (don't repeat 'is').",
      explanationSpanish: "'Sujeto + be + adj + but + adj' (no repitas 'is').",
      difficulty: 1,
      tags: ["writing", "descriptions", "contrast"]
    },
    {
      id: "a2-w2-6",
      type: "multiple-choice",
      question: "Which describes weather correctly?",
      options: ["The weather today is sunny and warm.", "Sunny and warm is the weather today.", "Today the weather sunny and warm is.", "Is sunny and warm the weather today."],
      correctAnswer: "The weather today is sunny and warm.",
      explanation: "Subject + time + be + adjectives.",
      explanationSpanish: "Sujeto + tiempo + be + adjetivos.",
      difficulty: 1,
      tags: ["writing", "descriptions", "weather"]
    },
    {
      id: "a2-w2-7",
      type: "multiple-choice",
      question: "Describe a city. Which uses 'there are' correctly?",
      options: ["There are many interesting place.", "There are many interesting places.", "There many interesting places are.", "Many interesting places there are."],
      correctAnswer: "There are many interesting places.",
      explanation: "'There are' + plural noun (places).",
      explanationSpanish: "'There are' + sustantivo plural (places).",
      difficulty: 1,
      tags: ["writing", "descriptions", "there-are"]
    },
    {
      id: "a2-w2-8",
      type: "multiple-choice",
      question: "Which describes appearance correctly?",
      options: ["He looks like tired today.", "He looks tired today.", "He is looks tired today.", "Tired he looks today."],
      correctAnswer: "He looks tired today.",
      explanation: "'Look + adjective' (not 'look like + adjective').",
      explanationSpanish: "'Look + adjetivo' (no 'look like + adjetivo').",
      difficulty: 2,
      tags: ["writing", "descriptions", "appearance"]
    },
    {
      id: "a2-w2-9",
      type: "multiple-choice",
      question: "Complete: 'My favorite restaurant ___ excellent Italian food.'",
      options: ["serve", "serves", "serving", "is serve"],
      correctAnswer: "serves",
      explanation: "'My favorite restaurant' = singular, so 'serves'.",
      explanationSpanish: "'My favorite restaurant' = singular, entonces 'serves'.",
      difficulty: 1,
      tags: ["writing", "descriptions", "verbs"]
    },
    {
      id: "a2-w2-10",
      type: "multiple-choice",
      question: "Which sentence describes personality?",
      options: ["She is tall.", "She is kind and helpful.", "She has blue eyes.", "She is 25 years old."],
      correctAnswer: "She is kind and helpful.",
      explanation: "Personality = character traits like kind, helpful, shy.",
      explanationSpanish: "Personalidad = rasgos de carácter como amable, servicial, tímido.",
      difficulty: 1,
      tags: ["writing", "descriptions", "personality"]
    },
    {
      id: "a2-w2-11",
      type: "multiple-choice",
      question: "Compare two things. Which is correct?",
      options: ["My house is more big than yours.", "My house is bigger than yours.", "My house is most big than yours.", "My house bigger than yours is."],
      correctAnswer: "My house is bigger than yours.",
      explanation: "Short adjectives: big → bigger (not 'more big').",
      explanationSpanish: "Adjetivos cortos: big → bigger (no 'more big').",
      difficulty: 2,
      tags: ["writing", "comparisons", "adjectives"]
    },
    {
      id: "a2-w2-12",
      type: "multiple-choice",
      question: "Which describes a routine correctly?",
      options: ["Usually I waking up at 7am.", "I usually wake up at 7am.", "I wake usually up at 7am.", "At 7am usually I wake up."],
      correctAnswer: "I usually wake up at 7am.",
      explanation: "Adverbs of frequency go before the main verb.",
      explanationSpanish: "Los adverbios de frecuencia van antes del verbo principal.",
      difficulty: 1,
      tags: ["writing", "routines", "adverbs"]
    },
    {
      id: "a2-w2-13",
      type: "multiple-choice",
      question: "Describe a past event. Which is correct?",
      options: ["Yesterday I go to the beach.", "Yesterday I went to the beach.", "Yesterday I gone to the beach.", "Yesterday I going to the beach."],
      correctAnswer: "Yesterday I went to the beach.",
      explanation: "'Yesterday' requires past tense: went.",
      explanationSpanish: "'Yesterday' requiere tiempo pasado: went.",
      difficulty: 1,
      tags: ["writing", "past-tense", "narratives"]
    },
    {
      id: "a2-w2-14",
      type: "multiple-choice",
      question: "Describe a picture. Which is correct?",
      options: ["In the picture there is a woman who is sitting.", "In the picture is a woman sitting there.", "A woman in the picture who sitting is.", "There in the picture a sitting woman is."],
      correctAnswer: "In the picture there is a woman who is sitting.",
      explanation: "In the picture + there is/are + description.",
      explanationSpanish: "In the picture + there is/are + descripción.",
      difficulty: 2,
      tags: ["writing", "descriptions", "pictures"]
    },
    {
      id: "a2-w2-15",
      type: "multiple-choice",
      question: "Which describes a neighborhood?",
      options: ["My neighborhood is quiet and there are many trees.", "Quiet my neighborhood is with many trees.", "Many trees my quiet neighborhood has.", "Has my neighborhood many trees quiet."],
      correctAnswer: "My neighborhood is quiet and there are many trees.",
      explanation: "Use 'and' to connect related descriptions.",
      explanationSpanish: "Usa 'and' para conectar descripciones relacionadas.",
      difficulty: 1,
      tags: ["writing", "descriptions", "places"]
    },
    {
      id: "a2-w2-16",
      type: "multiple-choice",
      question: "Describe your hobby. Complete: 'I enjoy ___ because it relaxes me.'",
      options: ["paint", "painting", "to paint", "painted"],
      correctAnswer: "painting",
      explanation: "'Enjoy' + verb-ing.",
      explanationSpanish: "'Enjoy' + verbo-ing.",
      difficulty: 1,
      tags: ["writing", "hobbies", "gerunds"]
    },
    {
      id: "a2-w2-17",
      type: "multiple-choice",
      question: "Which describes a pet correctly?",
      options: ["My dog is friendly and he likes to play.", "Friendly my dog is and play he likes.", "My dog friendly is and likes play.", "He is friendly my dog and play likes."],
      correctAnswer: "My dog is friendly and he likes to play.",
      explanation: "Subject + be + adjective; Subject + verb + infinitive.",
      explanationSpanish: "Sujeto + be + adjetivo; Sujeto + verbo + infinitivo.",
      difficulty: 1,
      tags: ["writing", "descriptions", "pets"]
    },
    {
      id: "a2-w2-18",
      type: "multiple-choice",
      question: "Which describes a problem correctly?",
      options: ["The problem is that we don't have enough time.", "The problem that we time enough don't have.", "Don't have we enough time is the problem.", "That we don't have enough time problem is."],
      correctAnswer: "The problem is that we don't have enough time.",
      explanation: "'The problem is that...' introduces the issue.",
      explanationSpanish: "'The problem is that...' introduce el problema.",
      difficulty: 2,
      tags: ["writing", "problems", "explanations"]
    },
    {
      id: "a2-w2-19",
      type: "multiple-choice",
      question: "Which describes a preference correctly?",
      options: ["I prefer tea than coffee.", "I prefer tea to coffee.", "I prefer tea from coffee.", "I prefer tea over coffee."],
      correctAnswer: "I prefer tea to coffee.",
      explanation: "'Prefer X to Y' is the correct structure.",
      explanationSpanish: "'Prefer X to Y' es la estructura correcta.",
      difficulty: 2,
      tags: ["writing", "preferences", "structure"]
    },
    {
      id: "a2-w2-20",
      type: "multiple-choice",
      question: "Describe future plans. Which is correct?",
      options: ["Next week I going to visit my parents.", "Next week I'm going to visit my parents.", "I visit my parents next week am going.", "Going I am to visit next week my parents."],
      correctAnswer: "Next week I'm going to visit my parents.",
      explanation: "'Be going to' for future plans.",
      explanationSpanish: "'Be going to' para planes futuros.",
      difficulty: 1,
      tags: ["writing", "future", "plans"]
    },
  ],
};

// Function to get writing exercises by skill ID
export function getWritingExercisesBySkillId(skillId: string): Exercise[] {
  return writingExercises[skillId] || [];
}
