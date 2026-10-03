// A2 Level Complete Exercises - Elemental
// Comprehensive exercise database for all A2 skills

import { Exercise } from "./exercisesData";

// =====================================================
// A2 VOCABULARY EXERCISES
// =====================================================

export const a2VocabularyExercises: Record<string, Exercise[]> = {
  // Rutinas diarias
  "a2-vocab-1": [
    {
      id: "a2-v1-1",
      type: "multiple-choice",
      question: "What do you do first thing in the morning?",
      options: ["I wake up", "I go to bed", "I have dinner", "I watch TV"],
      correctAnswer: "I wake up",
      explanation: "'Wake up' means to stop sleeping and open your eyes in the morning.",
      explanationSpanish: "'Wake up' significa dejar de dormir y abrir los ojos por la mañana.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "morning"]
    },
    {
      id: "a2-v1-2",
      type: "multiple-choice",
      question: "After waking up, I ___ my teeth.",
      options: ["brush", "wash", "clean", "comb"],
      correctAnswer: "brush",
      explanation: "We 'brush' our teeth with a toothbrush.",
      explanationSpanish: "Usamos 'brush' (cepillar) con los dientes.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "hygiene"]
    },
    {
      id: "a2-v1-3",
      type: "multiple-choice",
      question: "I ___ a shower every morning.",
      options: ["take", "make", "do", "get"],
      correctAnswer: "take",
      explanation: "The correct collocation is 'take a shower'.",
      explanationSpanish: "La colocación correcta es 'take a shower' (ducharse).",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "collocations"]
    },
    {
      id: "a2-v1-4",
      type: "multiple-choice",
      question: "I ___ dressed before breakfast.",
      options: ["get", "take", "make", "do"],
      correctAnswer: "get",
      explanation: "'Get dressed' means to put on your clothes.",
      explanationSpanish: "'Get dressed' significa ponerse la ropa.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "collocations"]
    },
    {
      id: "a2-v1-5",
      type: "multiple-choice",
      question: "In the evening, I like to ___ and watch TV.",
      options: ["relax", "work", "study", "exercise"],
      correctAnswer: "relax",
      explanation: "'Relax' means to rest and enjoy free time.",
      explanationSpanish: "'Relax' significa descansar y disfrutar del tiempo libre.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "evening"]
    },
    {
      id: "a2-v1-6",
      type: "multiple-choice",
      question: "I ___ to work by bus every day.",
      options: ["go", "come", "walk", "drive"],
      correctAnswer: "go",
      explanation: "'Go to work' is the standard expression for traveling to your job.",
      explanationSpanish: "'Go to work' es la expresión estándar para ir al trabajo.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "transport"]
    },
    {
      id: "a2-v1-7",
      type: "multiple-choice",
      question: "What time do you ___ up on weekdays?",
      options: ["wake", "get", "stand", "open"],
      correctAnswer: "wake",
      explanation: "'Wake up' means to stop sleeping.",
      explanationSpanish: "'Wake up' significa despertar.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "morning"]
    },
    {
      id: "a2-v1-8",
      type: "multiple-choice",
      question: "I ___ lunch at 1 o'clock.",
      options: ["have", "take", "make", "do"],
      correctAnswer: "have",
      explanation: "We 'have' meals: have breakfast, have lunch, have dinner.",
      explanationSpanish: "Usamos 'have' con las comidas: have breakfast, have lunch, have dinner.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "meals"]
    },
    {
      id: "a2-v1-9",
      type: "multiple-choice",
      question: "Before going to bed, I ___ my pajamas.",
      options: ["put on", "take off", "pick up", "throw away"],
      correctAnswer: "put on",
      explanation: "'Put on' means to dress yourself with something.",
      explanationSpanish: "'Put on' significa ponerse algo (ropa).",
      difficulty: 2,
      tags: ["vocabulary", "daily-routines", "phrasal-verbs"]
    },
    {
      id: "a2-v1-10",
      type: "multiple-choice",
      question: "I ___ to sleep at 11 p.m.",
      options: ["go", "come", "get", "fall"],
      correctAnswer: "go",
      explanation: "'Go to sleep' is the standard expression.",
      explanationSpanish: "'Go to sleep' significa irse a dormir.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "night"]
    },
    {
      id: "a2-v1-11",
      type: "multiple-choice",
      question: "She ___ the housework on Saturday mornings.",
      options: ["does", "makes", "takes", "has"],
      correctAnswer: "does",
      explanation: "We 'do' housework, homework, the dishes, the laundry.",
      explanationSpanish: "Usamos 'do' con housework, homework, the dishes, the laundry.",
      difficulty: 2,
      tags: ["vocabulary", "daily-routines", "collocations"]
    },
    {
      id: "a2-v1-12",
      type: "multiple-choice",
      question: "I usually ___ my homework after dinner.",
      options: ["do", "make", "take", "have"],
      correctAnswer: "do",
      explanation: "The collocation is 'do homework'.",
      explanationSpanish: "La colocación correcta es 'do homework'.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "study"]
    },
    {
      id: "a2-v1-13",
      type: "multiple-choice",
      question: "On weekends, I like to ___ late.",
      options: ["sleep in", "wake up", "get up", "stand up"],
      correctAnswer: "sleep in",
      explanation: "'Sleep in' means to sleep longer than usual.",
      explanationSpanish: "'Sleep in' significa dormir más de lo habitual.",
      difficulty: 2,
      tags: ["vocabulary", "daily-routines", "weekend"]
    },
    {
      id: "a2-v1-14",
      type: "multiple-choice",
      question: "I ___ breakfast at 7:30 a.m.",
      options: ["have", "take", "do", "make"],
      correctAnswer: "have",
      explanation: "'Have breakfast' is the correct collocation for eating the morning meal.",
      explanationSpanish: "'Have breakfast' es la colocación correcta para desayunar.",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "meals"]
    },
    {
      id: "a2-v1-15",
      type: "multiple-choice",
      question: "After work, I ___ home and cook dinner.",
      options: ["go", "come", "arrive", "reach"],
      correctAnswer: "go",
      explanation: "'Go home' is the standard expression (no 'to' needed).",
      explanationSpanish: "'Go home' es la expresión estándar (sin 'to').",
      difficulty: 1,
      tags: ["vocabulary", "daily-routines", "evening"]
    },
  ],

  // Compras y precios
  "a2-vocab-2": [
    {
      id: "a2-v2-1",
      type: "multiple-choice",
      question: "How much ___ this shirt?",
      options: ["does... cost", "is... cost", "do... costs", "are... cost"],
      correctAnswer: "does... cost",
      explanation: "'How much does [item] cost?' is the question form for prices.",
      explanationSpanish: "'How much does [artículo] cost?' es la forma de preguntar precios.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "prices"]
    },
    {
      id: "a2-v2-2",
      type: "multiple-choice",
      question: "I'd like to ___ for these shoes with my credit card.",
      options: ["pay", "buy", "purchase", "spend"],
      correctAnswer: "pay",
      explanation: "'Pay for' means to give money in exchange for goods.",
      explanationSpanish: "'Pay for' significa dar dinero a cambio de productos.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "payment"]
    },
    {
      id: "a2-v2-3",
      type: "multiple-choice",
      question: "This jacket is on ___. It's 30% off!",
      options: ["sale", "price", "discount", "offer"],
      correctAnswer: "sale",
      explanation: "'On sale' means the price is reduced.",
      explanationSpanish: "'On sale' significa que el precio está rebajado.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "discounts"]
    },
    {
      id: "a2-v2-4",
      type: "multiple-choice",
      question: "Can I try this dress ___?",
      options: ["on", "in", "up", "out"],
      correctAnswer: "on",
      explanation: "'Try on' means to put on clothes to see if they fit.",
      explanationSpanish: "'Try on' significa probarse ropa para ver si queda bien.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "phrasal-verbs"]
    },
    {
      id: "a2-v2-5",
      type: "multiple-choice",
      question: "The ___ is at the back of the store.",
      options: ["changing room", "bathroom", "kitchen", "bedroom"],
      correctAnswer: "changing room",
      explanation: "A 'changing room' (also 'fitting room') is where you try on clothes.",
      explanationSpanish: "Un 'changing room' es el probador donde te pruebas la ropa.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "store"]
    },
    {
      id: "a2-v2-6",
      type: "multiple-choice",
      question: "Do you have this in a different ___?",
      options: ["size", "number", "measure", "amount"],
      correctAnswer: "size",
      explanation: "'Size' refers to how big or small clothing is (S, M, L, XL).",
      explanationSpanish: "'Size' se refiere al tamaño de la ropa (S, M, L, XL).",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "clothing"]
    },
    {
      id: "a2-v2-7",
      type: "multiple-choice",
      question: "I need a ___ for this purchase, please.",
      options: ["receipt", "recipe", "bill", "ticket"],
      correctAnswer: "receipt",
      explanation: "A 'receipt' is the paper proof of your purchase.",
      explanationSpanish: "Un 'receipt' es el comprobante de compra.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "payment"]
    },
    {
      id: "a2-v2-8",
      type: "multiple-choice",
      question: "Where can I find the electronics ___?",
      options: ["department", "apartment", "compartment", "room"],
      correctAnswer: "department",
      explanation: "A 'department' is a section of a large store.",
      explanationSpanish: "Un 'department' es una sección de una tienda grande.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "store"]
    },
    {
      id: "a2-v2-9",
      type: "multiple-choice",
      question: "This product is out of ___.",
      options: ["stock", "store", "shop", "sale"],
      correctAnswer: "stock",
      explanation: "'Out of stock' means the product is not available.",
      explanationSpanish: "'Out of stock' significa que el producto no está disponible.",
      difficulty: 2,
      tags: ["vocabulary", "shopping", "availability"]
    },
    {
      id: "a2-v2-10",
      type: "multiple-choice",
      question: "Can I ___ this item if I don't like it?",
      options: ["return", "go back", "give back", "come back"],
      correctAnswer: "return",
      explanation: "'Return' means to bring something back to the store.",
      explanationSpanish: "'Return' significa devolver algo a la tienda.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "returns"]
    },
    {
      id: "a2-v2-11",
      type: "multiple-choice",
      question: "I'll pay in ___.",
      options: ["cash", "money", "coins", "bills"],
      correctAnswer: "cash",
      explanation: "'Pay in cash' means to pay with physical money, not cards.",
      explanationSpanish: "'Pay in cash' significa pagar con dinero físico, no con tarjeta.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "payment"]
    },
    {
      id: "a2-v2-12",
      type: "multiple-choice",
      question: "This is too ___. Do you have anything cheaper?",
      options: ["expensive", "cheap", "cost", "price"],
      correctAnswer: "expensive",
      explanation: "'Expensive' means something costs a lot of money.",
      explanationSpanish: "'Expensive' significa que algo cuesta mucho dinero.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "prices"]
    },
    {
      id: "a2-v2-13",
      type: "multiple-choice",
      question: "I'm just ___, thank you.",
      options: ["looking", "seeing", "watching", "viewing"],
      correctAnswer: "looking",
      explanation: "'Just looking' is what you say when you don't need help in a store.",
      explanationSpanish: "'Just looking' es lo que dices cuando no necesitas ayuda en una tienda.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "phrases"]
    },
    {
      id: "a2-v2-14",
      type: "multiple-choice",
      question: "The ___ includes a two-year warranty.",
      options: ["price", "cost", "money", "payment"],
      correctAnswer: "price",
      explanation: "'Price' is the amount of money you pay for something.",
      explanationSpanish: "'Price' es la cantidad de dinero que pagas por algo.",
      difficulty: 1,
      tags: ["vocabulary", "shopping", "prices"]
    },
    {
      id: "a2-v2-15",
      type: "multiple-choice",
      question: "I'd like to ___ a complaint about this product.",
      options: ["make", "do", "have", "take"],
      correctAnswer: "make",
      explanation: "We 'make a complaint' when we are unhappy with something.",
      explanationSpanish: "Usamos 'make a complaint' cuando no estamos satisfechos con algo.",
      difficulty: 2,
      tags: ["vocabulary", "shopping", "complaints"]
    },
  ],

  // Lugares y direcciones
  "a2-vocab-3": [
    {
      id: "a2-v3-1",
      type: "multiple-choice",
      question: "The post office is ___ the bank.",
      options: ["next to", "next", "near to", "close"],
      correctAnswer: "next to",
      explanation: "'Next to' means immediately beside something.",
      explanationSpanish: "'Next to' significa inmediatamente al lado de algo.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-2",
      type: "multiple-choice",
      question: "Go straight and ___ right at the traffic lights.",
      options: ["turn", "go", "take", "make"],
      correctAnswer: "turn",
      explanation: "'Turn right/left' means to change direction.",
      explanationSpanish: "'Turn right/left' significa cambiar de dirección.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "verbs"]
    },
    {
      id: "a2-v3-3",
      type: "multiple-choice",
      question: "The museum is ___ the corner.",
      options: ["around", "in", "at", "to"],
      correctAnswer: "around",
      explanation: "'Around the corner' means very close, just past the corner.",
      explanationSpanish: "'Around the corner' significa muy cerca, justo al pasar la esquina.",
      difficulty: 2,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-4",
      type: "multiple-choice",
      question: "The pharmacy is ___ the street from the hospital.",
      options: ["across", "opposite", "in front", "behind"],
      correctAnswer: "across",
      explanation: "'Across the street' means on the other side of the street.",
      explanationSpanish: "'Across the street' significa al otro lado de la calle.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-5",
      type: "multiple-choice",
      question: "The supermarket is on the second ___ on the left.",
      options: ["turning", "turn", "corner", "street"],
      correctAnswer: "turning",
      explanation: "'Take the second turning on the left' is a common direction phrase.",
      explanationSpanish: "'Toma la segunda desviación a la izquierda' es una frase común para direcciones.",
      difficulty: 2,
      tags: ["vocabulary", "directions", "phrases"]
    },
    {
      id: "a2-v3-6",
      type: "multiple-choice",
      question: "Go ___ until you reach the roundabout.",
      options: ["straight", "right", "forward", "ahead"],
      correctAnswer: "straight",
      explanation: "'Go straight' means to continue in the same direction.",
      explanationSpanish: "'Go straight' significa continuar en la misma dirección.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "verbs"]
    },
    {
      id: "a2-v3-7",
      type: "multiple-choice",
      question: "The library is ___ the church and the school.",
      options: ["between", "among", "in the middle", "center"],
      correctAnswer: "between",
      explanation: "'Between' is used for two things on either side.",
      explanationSpanish: "'Between' se usa para dos cosas a cada lado.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-8",
      type: "multiple-choice",
      question: "There's a parking lot ___ the building.",
      options: ["behind", "back", "after", "rear"],
      correctAnswer: "behind",
      explanation: "'Behind' means at the back of something.",
      explanationSpanish: "'Behind' significa detrás de algo.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-9",
      type: "multiple-choice",
      question: "The bus stop is ___ the corner.",
      options: ["on", "in", "at", "by"],
      correctAnswer: "on",
      explanation: "'On the corner' means located at a street corner.",
      explanationSpanish: "'On the corner' significa ubicado en una esquina.",
      difficulty: 2,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-10",
      type: "multiple-choice",
      question: "Walk ___ the bridge and the station is on your right.",
      options: ["over", "across", "through", "by"],
      correctAnswer: "over",
      explanation: "'Walk over' means to cross something like a bridge.",
      explanationSpanish: "'Walk over' significa cruzar algo como un puente.",
      difficulty: 2,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-11",
      type: "multiple-choice",
      question: "You'll see the restaurant ___ your left.",
      options: ["on", "at", "in", "to"],
      correctAnswer: "on",
      explanation: "'On your left/right' is how we describe location relative to the person.",
      explanationSpanish: "'On your left/right' describe la ubicación respecto a la persona.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-12",
      type: "multiple-choice",
      question: "The café is ___ to the bookshop.",
      options: ["close", "near", "next", "beside"],
      correctAnswer: "close",
      explanation: "'Close to' means near or not far from.",
      explanationSpanish: "'Close to' significa cerca de.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "prepositions"]
    },
    {
      id: "a2-v3-13",
      type: "multiple-choice",
      question: "Go past the bank and the cinema is ___ in front of you.",
      options: ["right", "just", "exactly", "directly"],
      correctAnswer: "right",
      explanation: "'Right in front of you' means directly ahead.",
      explanationSpanish: "'Right in front of you' significa directamente delante de ti.",
      difficulty: 2,
      tags: ["vocabulary", "directions", "phrases"]
    },
    {
      id: "a2-v3-14",
      type: "multiple-choice",
      question: "The hotel is about ten minutes' walk from ___.",
      options: ["here", "there", "this place", "that place"],
      correctAnswer: "here",
      explanation: "'From here' refers to the current location.",
      explanationSpanish: "'From here' se refiere a la ubicación actual.",
      difficulty: 1,
      tags: ["vocabulary", "directions", "distance"]
    },
    {
      id: "a2-v3-15",
      type: "multiple-choice",
      question: "Where you ___? - On Park Street, near the center.",
      options: ["do... live", "are... live", "do... living", "is... live"],
      correctAnswer: "do... live",
      explanation: "Present simple question: 'Where do you live?'",
      explanationSpanish: "Pregunta en presente simple: 'Where do you live?' (¿Dónde vives?)",
      difficulty: 1,
      tags: ["vocabulary", "directions", "questions"]
    },
  ],

  // Viajes y transporte
  "a2-vocab-4": [
    {
      id: "a2-v4-1",
      type: "multiple-choice",
      question: "I need to ___ a flight to Paris.",
      options: ["book", "reserve", "order", "buy"],
      correctAnswer: "book",
      explanation: "'Book' is the most common word for reserving flights, hotels, etc.",
      explanationSpanish: "'Book' es la palabra más común para reservar vuelos, hoteles, etc.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "booking"]
    },
    {
      id: "a2-v4-2",
      type: "multiple-choice",
      question: "What time does the plane ___?",
      options: ["take off", "go up", "fly out", "leave off"],
      correctAnswer: "take off",
      explanation: "'Take off' is when a plane leaves the ground.",
      explanationSpanish: "'Take off' es cuando un avión despega.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "airport"]
    },
    {
      id: "a2-v4-3",
      type: "multiple-choice",
      question: "We need to ___ at the hotel by 3 p.m.",
      options: ["check in", "arrive in", "come in", "get in"],
      correctAnswer: "check in",
      explanation: "'Check in' is the process of registering at a hotel.",
      explanationSpanish: "'Check in' es el proceso de registrarse en un hotel.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "hotel"]
    },
    {
      id: "a2-v4-4",
      type: "multiple-choice",
      question: "The train ___ at platform 5.",
      options: ["arrives", "comes", "reaches", "gets"],
      correctAnswer: "arrives",
      explanation: "'Arrive at' is used for trains, buses, and planes.",
      explanationSpanish: "'Arrive at' se usa para trenes, autobuses y aviones.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "transport"]
    },
    {
      id: "a2-v4-5",
      type: "multiple-choice",
      question: "I'd like a ___ ticket to London, please.",
      options: ["return", "back", "round", "double"],
      correctAnswer: "return",
      explanation: "A 'return ticket' (UK) or 'round-trip ticket' (US) is for going and coming back.",
      explanationSpanish: "Un 'return ticket' es un billete de ida y vuelta.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "tickets"]
    },
    {
      id: "a2-v4-6",
      type: "multiple-choice",
      question: "Where is the ___ claim area?",
      options: ["baggage", "luggage", "suitcase", "bag"],
      correctAnswer: "baggage",
      explanation: "'Baggage claim' is where you collect your luggage at an airport.",
      explanationSpanish: "'Baggage claim' es donde recoges tu equipaje en el aeropuerto.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "airport"]
    },
    {
      id: "a2-v4-7",
      type: "multiple-choice",
      question: "The flight was ___ due to bad weather.",
      options: ["delayed", "late", "slow", "waited"],
      correctAnswer: "delayed",
      explanation: "'Delayed' means the plane will leave later than planned.",
      explanationSpanish: "'Delayed' significa que el avión saldrá más tarde de lo planeado.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "airport"]
    },
    {
      id: "a2-v4-8",
      type: "multiple-choice",
      question: "Can I see your ___ and boarding pass, please?",
      options: ["passport", "ID card", "license", "document"],
      correctAnswer: "passport",
      explanation: "You need your 'passport' for international travel.",
      explanationSpanish: "Necesitas tu 'passport' para viajes internacionales.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "documents"]
    },
    {
      id: "a2-v4-9",
      type: "multiple-choice",
      question: "I'd like an ___ seat, please. I don't like window seats.",
      options: ["aisle", "corridor", "middle", "side"],
      correctAnswer: "aisle",
      explanation: "An 'aisle seat' is next to the corridor on a plane or train.",
      explanationSpanish: "Un 'aisle seat' está junto al pasillo en un avión o tren.",
      difficulty: 2,
      tags: ["vocabulary", "travel", "seating"]
    },
    {
      id: "a2-v4-10",
      type: "multiple-choice",
      question: "The bus ___ is near the train station.",
      options: ["station", "stop", "terminal", "depot"],
      correctAnswer: "station",
      explanation: "A 'bus station' is a large place where many buses arrive and depart.",
      explanationSpanish: "Una 'bus station' es un lugar grande donde llegan y salen muchos autobuses.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "transport"]
    },
    {
      id: "a2-v4-11",
      type: "multiple-choice",
      question: "We need to ___ at Gate 23.",
      options: ["board", "enter", "go in", "get on"],
      correctAnswer: "board",
      explanation: "'Board' means to get on a plane, ship, or train.",
      explanationSpanish: "'Board' significa subir a un avión, barco o tren.",
      difficulty: 2,
      tags: ["vocabulary", "travel", "airport"]
    },
    {
      id: "a2-v4-12",
      type: "multiple-choice",
      question: "How much is the ___ for a single room?",
      options: ["rate", "price", "cost", "fee"],
      correctAnswer: "rate",
      explanation: "'Rate' is commonly used for hotel room prices per night.",
      explanationSpanish: "'Rate' se usa comúnmente para precios de habitaciones de hotel por noche.",
      difficulty: 2,
      tags: ["vocabulary", "travel", "hotel"]
    },
    {
      id: "a2-v4-13",
      type: "multiple-choice",
      question: "I need to ___ a car for the weekend.",
      options: ["rent", "hire", "borrow", "loan"],
      correctAnswer: "rent",
      explanation: "'Rent a car' means to pay to use a car temporarily.",
      explanationSpanish: "'Rent a car' significa pagar para usar un coche temporalmente.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "transport"]
    },
    {
      id: "a2-v4-14",
      type: "multiple-choice",
      question: "What time is ___?",
      options: ["check-out", "leaving time", "exit time", "departure"],
      correctAnswer: "check-out",
      explanation: "'Check-out' is when you leave the hotel and pay.",
      explanationSpanish: "'Check-out' es cuando sales del hotel y pagas.",
      difficulty: 1,
      tags: ["vocabulary", "travel", "hotel"]
    },
    {
      id: "a2-v4-15",
      type: "multiple-choice",
      question: "The taxi ___ from the airport is about $50.",
      options: ["fare", "price", "cost", "rate"],
      correctAnswer: "fare",
      explanation: "'Fare' is the price you pay for public transportation.",
      explanationSpanish: "'Fare' es el precio que pagas por transporte público.",
      difficulty: 2,
      tags: ["vocabulary", "travel", "transport"]
    },
  ],

  // Hobbies y tiempo libre
  "a2-vocab-5": [
    {
      id: "a2-v5-1",
      type: "multiple-choice",
      question: "I ___ playing football on weekends.",
      options: ["enjoy", "like to", "love to", "prefer to"],
      correctAnswer: "enjoy",
      explanation: "'Enjoy' is followed by -ing form: enjoy + playing.",
      explanationSpanish: "'Enjoy' va seguido de -ing: enjoy + playing.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "verbs"]
    },
    {
      id: "a2-v5-2",
      type: "multiple-choice",
      question: "She's really ___ photography.",
      options: ["into", "in", "on", "at"],
      correctAnswer: "into",
      explanation: "'Into' is informal for being interested in something.",
      explanationSpanish: "'Into' es informal para estar interesado en algo.",
      difficulty: 2,
      tags: ["vocabulary", "hobbies", "prepositions"]
    },
    {
      id: "a2-v5-3",
      type: "multiple-choice",
      question: "I like to ___ for a walk in the park.",
      options: ["go", "take", "make", "do"],
      correctAnswer: "go",
      explanation: "'Go for a walk' is a common collocation.",
      explanationSpanish: "'Go for a walk' es una colocación común.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "collocations"]
    },
    {
      id: "a2-v5-4",
      type: "multiple-choice",
      question: "He ___ chess every Sunday.",
      options: ["plays", "does", "makes", "goes"],
      correctAnswer: "plays",
      explanation: "We 'play' games: chess, cards, video games.",
      explanationSpanish: "Usamos 'play' con juegos: chess, cards, video games.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "collocations"]
    },
    {
      id: "a2-v5-5",
      type: "multiple-choice",
      question: "She ___ yoga three times a week.",
      options: ["does", "plays", "makes", "goes"],
      correctAnswer: "does",
      explanation: "We 'do' yoga, aerobics, martial arts.",
      explanationSpanish: "Usamos 'do' con yoga, aerobics, martial arts.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "collocations"]
    },
    {
      id: "a2-v5-6",
      type: "multiple-choice",
      question: "I love ___ to music while I work.",
      options: ["listening", "hearing", "playing", "watching"],
      correctAnswer: "listening",
      explanation: "'Listen to music' means to actively enjoy music.",
      explanationSpanish: "'Listen to music' significa disfrutar activamente de la música.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "verbs"]
    },
    {
      id: "a2-v5-7",
      type: "multiple-choice",
      question: "We go ___ every summer at the beach.",
      options: ["swimming", "swim", "to swim", "for swimming"],
      correctAnswer: "swimming",
      explanation: "'Go swimming/running/cycling' - we use go + -ing for activities.",
      explanationSpanish: "'Go swimming/running/cycling' - usamos go + -ing para actividades.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "collocations"]
    },
    {
      id: "a2-v5-8",
      type: "multiple-choice",
      question: "My hobby is ___ stamps from different countries.",
      options: ["collecting", "collection", "collect", "collected"],
      correctAnswer: "collecting",
      explanation: "'Collecting' is the activity of gathering items as a hobby.",
      explanationSpanish: "'Collecting' es la actividad de coleccionar objetos como hobby.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "verbs"]
    },
    {
      id: "a2-v5-9",
      type: "multiple-choice",
      question: "I spend my free ___ reading books.",
      options: ["time", "moment", "hour", "period"],
      correctAnswer: "time",
      explanation: "'Free time' is the time when you don't have to work.",
      explanationSpanish: "'Free time' es el tiempo cuando no tienes que trabajar.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "phrases"]
    },
    {
      id: "a2-v5-10",
      type: "multiple-choice",
      question: "She ___ photos everywhere she goes.",
      options: ["takes", "makes", "does", "shoots"],
      correctAnswer: "takes",
      explanation: "We 'take photos/pictures' (British English also 'take photographs').",
      explanationSpanish: "Usamos 'take photos/pictures' para hacer fotos.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "collocations"]
    },
    {
      id: "a2-v5-11",
      type: "multiple-choice",
      question: "I'm learning to ___ the guitar.",
      options: ["play", "do", "make", "use"],
      correctAnswer: "play",
      explanation: "We 'play' musical instruments: guitar, piano, violin.",
      explanationSpanish: "Usamos 'play' con instrumentos musicales: guitar, piano, violin.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "music"]
    },
    {
      id: "a2-v5-12",
      type: "multiple-choice",
      question: "He's ___ at painting. His pictures are amazing.",
      options: ["good", "well", "nice", "fine"],
      correctAnswer: "good",
      explanation: "'Good at' describes ability: He's good at painting.",
      explanationSpanish: "'Good at' describe habilidad: Es bueno pintando.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "adjectives"]
    },
    {
      id: "a2-v5-13",
      type: "multiple-choice",
      question: "We go ___ in the mountains every winter.",
      options: ["skiing", "ski", "to ski", "for skiing"],
      correctAnswer: "skiing",
      explanation: "'Go skiing/hiking/camping' - go + -ing for outdoor activities.",
      explanationSpanish: "'Go skiing/hiking/camping' - go + -ing para actividades al aire libre.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "sports"]
    },
    {
      id: "a2-v5-14",
      type: "multiple-choice",
      question: "She ___ exercise at the gym every morning.",
      options: ["does", "makes", "plays", "goes"],
      correctAnswer: "does",
      explanation: "We 'do exercise' (also 'take exercise' in British English).",
      explanationSpanish: "Usamos 'do exercise' para hacer ejercicio.",
      difficulty: 1,
      tags: ["vocabulary", "hobbies", "fitness"]
    },
    {
      id: "a2-v5-15",
      type: "multiple-choice",
      question: "I like watching TV, ___ documentaries about nature.",
      options: ["especially", "specially", "particular", "specific"],
      correctAnswer: "especially",
      explanation: "'Especially' means 'in particular' or 'most of all'.",
      explanationSpanish: "'Especially' significa 'en particular' o 'sobre todo'.",
      difficulty: 2,
      tags: ["vocabulary", "hobbies", "adverbs"]
    },
  ],

  // Salud básica
  "a2-vocab-6": [
    {
      id: "a2-v6-1",
      type: "multiple-choice",
      question: "I have a terrible ___. My head really hurts.",
      options: ["headache", "head pain", "head hurt", "head ache"],
      correctAnswer: "headache",
      explanation: "'Headache' is pain in your head (one word, no space).",
      explanationSpanish: "'Headache' es dolor de cabeza (una palabra).",
      difficulty: 1,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-2",
      type: "multiple-choice",
      question: "I think I have a ___. My temperature is 38°C.",
      options: ["fever", "temperature", "heat", "hot"],
      correctAnswer: "fever",
      explanation: "A 'fever' means your body temperature is too high.",
      explanationSpanish: "Una 'fever' significa que tu temperatura corporal es muy alta.",
      difficulty: 1,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-3",
      type: "multiple-choice",
      question: "I've got a runny ___.",
      options: ["nose", "eye", "mouth", "ear"],
      correctAnswer: "nose",
      explanation: "A 'runny nose' is when liquid comes out of your nose (like with a cold).",
      explanationSpanish: "Una 'runny nose' es cuando sale líquido de la nariz (como con un resfriado).",
      difficulty: 1,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-4",
      type: "multiple-choice",
      question: "I need to ___ an appointment with the doctor.",
      options: ["make", "do", "take", "have"],
      correctAnswer: "make",
      explanation: "We 'make an appointment' with doctors, dentists, etc.",
      explanationSpanish: "Usamos 'make an appointment' con médicos, dentistas, etc.",
      difficulty: 1,
      tags: ["vocabulary", "health", "collocations"]
    },
    {
      id: "a2-v6-5",
      type: "multiple-choice",
      question: "The doctor gave me a ___ for some medicine.",
      options: ["prescription", "recipe", "receipt", "note"],
      correctAnswer: "prescription",
      explanation: "A 'prescription' is the doctor's written order for medicine.",
      explanationSpanish: "Una 'prescription' es la receta médica.",
      difficulty: 1,
      tags: ["vocabulary", "health", "medical"]
    },
    {
      id: "a2-v6-6",
      type: "multiple-choice",
      question: "I've got a sore ___. It hurts when I swallow.",
      options: ["throat", "neck", "mouth", "tongue"],
      correctAnswer: "throat",
      explanation: "A 'sore throat' means your throat hurts, often from a cold.",
      explanationSpanish: "Una 'sore throat' significa que te duele la garganta.",
      difficulty: 1,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-7",
      type: "multiple-choice",
      question: "Take two ___ three times a day after meals.",
      options: ["pills", "medicines", "drugs", "tablets"],
      correctAnswer: "pills",
      explanation: "'Pills' or 'tablets' are small pieces of medicine you swallow.",
      explanationSpanish: "'Pills' o 'tablets' son pequeñas pastillas que tragas.",
      difficulty: 1,
      tags: ["vocabulary", "health", "medicine"]
    },
    {
      id: "a2-v6-8",
      type: "multiple-choice",
      question: "I'm ___ to penicillin.",
      options: ["allergic", "ill", "sick", "sensitive"],
      correctAnswer: "allergic",
      explanation: "'Allergic to' means your body reacts badly to something.",
      explanationSpanish: "'Allergic to' significa que tu cuerpo reacciona mal a algo.",
      difficulty: 1,
      tags: ["vocabulary", "health", "conditions"]
    },
    {
      id: "a2-v6-9",
      type: "multiple-choice",
      question: "I feel ___. I think I'm going to be sick.",
      options: ["nauseous", "dizzy", "tired", "weak"],
      correctAnswer: "nauseous",
      explanation: "'Nauseous' means feeling like you might vomit.",
      explanationSpanish: "'Nauseous' significa sentir náuseas.",
      difficulty: 2,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-10",
      type: "multiple-choice",
      question: "She ___ her leg playing football.",
      options: ["broke", "broken", "breaking", "break"],
      correctAnswer: "broke",
      explanation: "'Broke' is the past tense of 'break'.",
      explanationSpanish: "'Broke' es el pasado de 'break' (romper).",
      difficulty: 1,
      tags: ["vocabulary", "health", "injuries"]
    },
    {
      id: "a2-v6-11",
      type: "multiple-choice",
      question: "I have a ___ in my back.",
      options: ["pain", "ache", "hurt", "sore"],
      correctAnswer: "pain",
      explanation: "We say 'a pain in my back/leg/arm' for general discomfort.",
      explanationSpanish: "Decimos 'a pain in my back/leg/arm' para molestias generales.",
      difficulty: 1,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-12",
      type: "multiple-choice",
      question: "The nurse put a ___ on my cut.",
      options: ["bandage", "band", "cover", "wrap"],
      correctAnswer: "bandage",
      explanation: "A 'bandage' is a piece of material used to cover a wound.",
      explanationSpanish: "Un 'bandage' es una venda para cubrir una herida.",
      difficulty: 1,
      tags: ["vocabulary", "health", "medical"]
    },
    {
      id: "a2-v6-13",
      type: "multiple-choice",
      question: "I've been ___ a lot recently. I think I have a cold.",
      options: ["sneezing", "sneeze", "sneezed", "to sneeze"],
      correctAnswer: "sneezing",
      explanation: "'Sneezing' (present continuous) describes an ongoing symptom.",
      explanationSpanish: "'Sneezing' (presente continuo) describe un síntoma continuo.",
      difficulty: 1,
      tags: ["vocabulary", "health", "symptoms"]
    },
    {
      id: "a2-v6-14",
      type: "multiple-choice",
      question: "I need to get a flu ___.",
      options: ["shot", "injection", "needle", "vaccine"],
      correctAnswer: "shot",
      explanation: "'Flu shot' is the common term for a flu vaccination (especially in US English).",
      explanationSpanish: "'Flu shot' es el término común para la vacuna de la gripe.",
      difficulty: 2,
      tags: ["vocabulary", "health", "medical"]
    },
    {
      id: "a2-v6-15",
      type: "multiple-choice",
      question: "I don't feel well. I'm going to ___ down for a while.",
      options: ["lie", "lay", "sleep", "rest"],
      correctAnswer: "lie",
      explanation: "'Lie down' means to recline on a bed or sofa to rest.",
      explanationSpanish: "'Lie down' significa acostarse para descansar.",
      difficulty: 2,
      tags: ["vocabulary", "health", "phrasal-verbs"]
    },
  ],

  // Clima y estaciones
  "a2-vocab-7": [
    {
      id: "a2-v7-1",
      type: "multiple-choice",
      question: "It's very ___ today. I need my sunglasses.",
      options: ["sunny", "sun", "sunned", "sunning"],
      correctAnswer: "sunny",
      explanation: "'Sunny' is the adjective that describes a day with lots of sun.",
      explanationSpanish: "'Sunny' es el adjetivo que describe un día con mucho sol.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "adjectives"]
    },
    {
      id: "a2-v7-2",
      type: "multiple-choice",
      question: "Take an umbrella. It looks like it's going to ___.",
      options: ["rain", "raining", "rainy", "rained"],
      correctAnswer: "rain",
      explanation: "'It's going to rain' - future prediction about weather.",
      explanationSpanish: "'It's going to rain' - predicción futura sobre el clima.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "verbs"]
    },
    {
      id: "a2-v7-3",
      type: "multiple-choice",
      question: "In ___, the leaves fall from the trees.",
      options: ["autumn", "summer", "spring", "winter"],
      correctAnswer: "autumn",
      explanation: "'Autumn' (UK) or 'Fall' (US) is when leaves change color and fall.",
      explanationSpanish: "'Autumn' es cuando las hojas cambian de color y caen.",
      difficulty: 1,
      tags: ["vocabulary", "seasons"]
    },
    {
      id: "a2-v7-4",
      type: "multiple-choice",
      question: "It's very ___ today. Wear a warm coat!",
      options: ["cold", "cool", "chilly", "frozen"],
      correctAnswer: "cold",
      explanation: "'Cold' describes low temperature weather.",
      explanationSpanish: "'Cold' describe clima de baja temperatura.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "adjectives"]
    },
    {
      id: "a2-v7-5",
      type: "multiple-choice",
      question: "There was a lot of ___ last night. We couldn't see the road.",
      options: ["fog", "foggy", "mist", "misty"],
      correctAnswer: "fog",
      explanation: "'Fog' is thick mist that makes it hard to see.",
      explanationSpanish: "'Fog' es niebla espesa que dificulta ver.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "nouns"]
    },
    {
      id: "a2-v7-6",
      type: "multiple-choice",
      question: "The ___ is very strong today. My hat blew away!",
      options: ["wind", "windy", "air", "breeze"],
      correctAnswer: "wind",
      explanation: "'Wind' is moving air (noun).",
      explanationSpanish: "'Wind' es aire en movimiento (sustantivo).",
      difficulty: 1,
      tags: ["vocabulary", "weather", "nouns"]
    },
    {
      id: "a2-v7-7",
      type: "multiple-choice",
      question: "It's ___ outside. The children are making a snowman.",
      options: ["snowing", "snow", "snowy", "snowed"],
      correctAnswer: "snowing",
      explanation: "'It's snowing' describes snow falling now (present continuous).",
      explanationSpanish: "'It's snowing' describe nieve cayendo ahora (presente continuo).",
      difficulty: 1,
      tags: ["vocabulary", "weather", "verbs"]
    },
    {
      id: "a2-v7-8",
      type: "multiple-choice",
      question: "What's the ___ like today?",
      options: ["weather", "climate", "temperature", "forecast"],
      correctAnswer: "weather",
      explanation: "'What's the weather like?' is how we ask about current conditions.",
      explanationSpanish: "'What's the weather like?' es cómo preguntamos sobre el clima actual.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "questions"]
    },
    {
      id: "a2-v7-9",
      type: "multiple-choice",
      question: "The ___ says it will rain tomorrow.",
      options: ["forecast", "prediction", "weather", "news"],
      correctAnswer: "forecast",
      explanation: "'Weather forecast' is the prediction of future weather.",
      explanationSpanish: "'Weather forecast' es la predicción del clima futuro.",
      difficulty: 2,
      tags: ["vocabulary", "weather", "nouns"]
    },
    {
      id: "a2-v7-10",
      type: "multiple-choice",
      question: "In ___, flowers start to bloom and trees get new leaves.",
      options: ["spring", "summer", "autumn", "winter"],
      correctAnswer: "spring",
      explanation: "'Spring' is the season when nature wakes up after winter.",
      explanationSpanish: "'Spring' es la estación cuando la naturaleza despierta después del invierno.",
      difficulty: 1,
      tags: ["vocabulary", "seasons"]
    },
    {
      id: "a2-v7-11",
      type: "multiple-choice",
      question: "It's 35 degrees. It's really ___ today!",
      options: ["hot", "warm", "humid", "burning"],
      correctAnswer: "hot",
      explanation: "'Hot' describes very high temperatures.",
      explanationSpanish: "'Hot' describe temperaturas muy altas.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "adjectives"]
    },
    {
      id: "a2-v7-12",
      type: "multiple-choice",
      question: "There's a ___ in the sky. I hope there's no storm coming.",
      options: ["cloud", "cloudy", "clouds", "clouding"],
      correctAnswer: "cloud",
      explanation: "'Cloud' is a noun - one white or gray mass in the sky.",
      explanationSpanish: "'Cloud' es un sustantivo - una masa blanca o gris en el cielo.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "nouns"]
    },
    {
      id: "a2-v7-13",
      type: "multiple-choice",
      question: "The weather is ___ and humid in August here.",
      options: ["warm", "cold", "cool", "freezing"],
      correctAnswer: "warm",
      explanation: "'Warm' is between cool and hot - comfortable heat.",
      explanationSpanish: "'Warm' está entre fresco y caliente - calor agradable.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "adjectives"]
    },
    {
      id: "a2-v7-14",
      type: "multiple-choice",
      question: "We saw lightning and heard ___ during the storm.",
      options: ["thunder", "thundery", "thundering", "thundered"],
      correctAnswer: "thunder",
      explanation: "'Thunder' is the loud noise during a storm. Lightning is the flash.",
      explanationSpanish: "'Thunder' es el ruido fuerte durante una tormenta. Lightning es el destello.",
      difficulty: 2,
      tags: ["vocabulary", "weather", "nouns"]
    },
    {
      id: "a2-v7-15",
      type: "multiple-choice",
      question: "The ___ is minus 5 degrees today.",
      options: ["temperature", "degree", "weather", "cold"],
      correctAnswer: "temperature",
      explanation: "'Temperature' is the measurement of how hot or cold it is.",
      explanationSpanish: "'Temperature' es la medida de qué tan caliente o frío está.",
      difficulty: 1,
      tags: ["vocabulary", "weather", "nouns"]
    },
  ],

  // Adjetivos comunes
  "a2-vocab-8": [
    {
      id: "a2-v8-1",
      type: "multiple-choice",
      question: "The elephant is ___. The mouse is small.",
      options: ["big", "large", "huge", "great"],
      correctAnswer: "big",
      explanation: "'Big' is the basic adjective for large size, opposite of 'small'.",
      explanationSpanish: "'Big' es el adjetivo básico para tamaño grande, opuesto de 'small'.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "opposites"]
    },
    {
      id: "a2-v8-2",
      type: "multiple-choice",
      question: "The test was ___. I got 100%!",
      options: ["easy", "simple", "light", "soft"],
      correctAnswer: "easy",
      explanation: "'Easy' is the opposite of 'difficult'.",
      explanationSpanish: "'Easy' es el opuesto de 'difficult' (difícil).",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "opposites"]
    },
    {
      id: "a2-v8-3",
      type: "multiple-choice",
      question: "He's very ___. He always helps other people.",
      options: ["kind", "nice", "good", "pleasant"],
      correctAnswer: "kind",
      explanation: "'Kind' describes someone who is helpful and caring.",
      explanationSpanish: "'Kind' describe a alguien que es servicial y cariñoso.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "personality"]
    },
    {
      id: "a2-v8-4",
      type: "multiple-choice",
      question: "The cheetah is the ___ animal in the world.",
      options: ["fastest", "faster", "fast", "quickest"],
      correctAnswer: "fastest",
      explanation: "'Fastest' is the superlative form of 'fast'.",
      explanationSpanish: "'Fastest' es el superlativo de 'fast' (rápido).",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "superlatives"]
    },
    {
      id: "a2-v8-5",
      type: "multiple-choice",
      question: "The movie was really ___. I almost fell asleep.",
      options: ["boring", "bored", "bore", "boringly"],
      correctAnswer: "boring",
      explanation: "'Boring' describes something that causes boredom.",
      explanationSpanish: "'Boring' describe algo que causa aburrimiento.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "-ing/-ed"]
    },
    {
      id: "a2-v8-6",
      type: "multiple-choice",
      question: "She felt ___ about the news. Her team won!",
      options: ["excited", "exciting", "excite", "excitedly"],
      correctAnswer: "excited",
      explanation: "'Excited' describes how a person feels.",
      explanationSpanish: "'Excited' describe cómo se siente una persona.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "-ing/-ed"]
    },
    {
      id: "a2-v8-7",
      type: "multiple-choice",
      question: "The old man is very ___. He's 95 years old.",
      options: ["old", "ancient", "aged", "elderly"],
      correctAnswer: "old",
      explanation: "'Old' is the basic adjective, opposite of 'young'.",
      explanationSpanish: "'Old' es el adjetivo básico, opuesto de 'young' (joven).",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "age"]
    },
    {
      id: "a2-v8-8",
      type: "multiple-choice",
      question: "This bag is too ___. I can't carry it.",
      options: ["heavy", "weight", "hard", "strong"],
      correctAnswer: "heavy",
      explanation: "'Heavy' describes something that weighs a lot, opposite of 'light'.",
      explanationSpanish: "'Heavy' describe algo que pesa mucho, opuesto de 'light'.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "weight"]
    },
    {
      id: "a2-v8-9",
      type: "multiple-choice",
      question: "The water in this pool is very ___. I can see the bottom.",
      options: ["clean", "clear", "pure", "transparent"],
      correctAnswer: "clean",
      explanation: "'Clean' means free from dirt, opposite of 'dirty'.",
      explanationSpanish: "'Clean' significa libre de suciedad, opuesto de 'dirty'.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "quality"]
    },
    {
      id: "a2-v8-10",
      type: "multiple-choice",
      question: "She's very ___. She doesn't like meeting new people.",
      options: ["shy", "quiet", "calm", "silent"],
      correctAnswer: "shy",
      explanation: "'Shy' describes someone who is nervous around strangers.",
      explanationSpanish: "'Shy' describe a alguien que está nervioso con desconocidos.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "personality"]
    },
    {
      id: "a2-v8-11",
      type: "multiple-choice",
      question: "The pizza was ___. We ate it all!",
      options: ["delicious", "delicacy", "deliciously", "tasty"],
      correctAnswer: "delicious",
      explanation: "'Delicious' describes food that tastes very good.",
      explanationSpanish: "'Delicious' describe comida que sabe muy bien.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "food"]
    },
    {
      id: "a2-v8-12",
      type: "multiple-choice",
      question: "The road is very ___. Drive carefully!",
      options: ["dangerous", "danger", "dangerously", "risky"],
      correctAnswer: "dangerous",
      explanation: "'Dangerous' describes something that could cause harm.",
      explanationSpanish: "'Dangerous' describe algo que podría causar daño.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "safety"]
    },
    {
      id: "a2-v8-13",
      type: "multiple-choice",
      question: "He always arrives on time. He's very ___.",
      options: ["punctual", "fast", "quick", "early"],
      correctAnswer: "punctual",
      explanation: "'Punctual' means always arriving at the right time.",
      explanationSpanish: "'Punctual' significa llegar siempre a tiempo.",
      difficulty: 2,
      tags: ["vocabulary", "adjectives", "personality"]
    },
    {
      id: "a2-v8-14",
      type: "multiple-choice",
      question: "The opposite of 'expensive' is ___.",
      options: ["cheap", "low", "poor", "economic"],
      correctAnswer: "cheap",
      explanation: "'Cheap' means not costing much money.",
      explanationSpanish: "'Cheap' significa que no cuesta mucho dinero.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "opposites"]
    },
    {
      id: "a2-v8-15",
      type: "multiple-choice",
      question: "The opposite of 'strong' is ___.",
      options: ["weak", "small", "thin", "soft"],
      correctAnswer: "weak",
      explanation: "'Weak' means lacking strength or power.",
      explanationSpanish: "'Weak' significa que carece de fuerza o poder.",
      difficulty: 1,
      tags: ["vocabulary", "adjectives", "opposites"]
    },
  ],
};

// =====================================================
// A2 GRAMMAR EXERCISES
// =====================================================

export const a2GrammarExercises: Record<string, Exercise[]> = {
  // Past Simple
  "a2-gram-1": [
    {
      id: "a2-g1-1",
      type: "multiple-choice",
      question: "Yesterday I ___ to the cinema with my friends.",
      options: ["went", "go", "going", "goed"],
      correctAnswer: "went",
      explanation: "'Go' is an irregular verb. Past simple: go → went.",
      explanationSpanish: "'Go' es un verbo irregular. Pasado simple: go → went.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "irregular-verbs"]
    },
    {
      id: "a2-g1-2",
      type: "multiple-choice",
      question: "She ___ her homework last night.",
      options: ["finished", "finish", "finishing", "finishes"],
      correctAnswer: "finished",
      explanation: "Regular verbs add -ed in past simple: finish → finished.",
      explanationSpanish: "Los verbos regulares añaden -ed en pasado simple: finish → finished.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "regular-verbs"]
    },
    {
      id: "a2-g1-3",
      type: "multiple-choice",
      question: "They ___ a great time at the party.",
      options: ["had", "have", "having", "has"],
      correctAnswer: "had",
      explanation: "'Have' is irregular. Past simple: have → had.",
      explanationSpanish: "'Have' es irregular. Pasado simple: have → had.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "irregular-verbs"]
    },
    {
      id: "a2-g1-4",
      type: "multiple-choice",
      question: "I ___ see him at the meeting yesterday.",
      options: ["didn't", "don't", "doesn't", "not"],
      correctAnswer: "didn't",
      explanation: "Negative past simple: subject + didn't + base verb.",
      explanationSpanish: "Negativo en pasado simple: sujeto + didn't + verbo base.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "negative"]
    },
    {
      id: "a2-g1-5",
      type: "multiple-choice",
      question: "___ you watch the movie last weekend?",
      options: ["Did", "Do", "Does", "Was"],
      correctAnswer: "Did",
      explanation: "Past simple questions: Did + subject + base verb?",
      explanationSpanish: "Preguntas en pasado simple: Did + sujeto + verbo base?",
      difficulty: 1,
      tags: ["grammar", "past-simple", "questions"]
    },
    {
      id: "a2-g1-6",
      type: "multiple-choice",
      question: "We ___ pizza for dinner last Tuesday.",
      options: ["ate", "eat", "eaten", "eating"],
      correctAnswer: "ate",
      explanation: "'Eat' is irregular. Past simple: eat → ate.",
      explanationSpanish: "'Eat' es irregular. Pasado simple: eat → ate.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "irregular-verbs"]
    },
    {
      id: "a2-g1-7",
      type: "multiple-choice",
      question: "The concert ___ at 8 o'clock.",
      options: ["started", "start", "starting", "starts"],
      correctAnswer: "started",
      explanation: "Regular verb: start → started.",
      explanationSpanish: "Verbo regular: start → started.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "regular-verbs"]
    },
    {
      id: "a2-g1-8",
      type: "multiple-choice",
      question: "She ___ English when she lived in London.",
      options: ["studied", "study", "studies", "studying"],
      correctAnswer: "studied",
      explanation: "Verbs ending in consonant + y: change y to i and add -ed (study → studied).",
      explanationSpanish: "Verbos terminados en consonante + y: cambia y por i y añade -ed (study → studied).",
      difficulty: 2,
      tags: ["grammar", "past-simple", "spelling"]
    },
    {
      id: "a2-g1-9",
      type: "multiple-choice",
      question: "He ___ a lot of photos during his vacation.",
      options: ["took", "take", "taken", "taking"],
      correctAnswer: "took",
      explanation: "'Take' is irregular. Past simple: take → took.",
      explanationSpanish: "'Take' es irregular. Pasado simple: take → took.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "irregular-verbs"]
    },
    {
      id: "a2-g1-10",
      type: "multiple-choice",
      question: "I ___ TV all evening yesterday.",
      options: ["watched", "watch", "watches", "watching"],
      correctAnswer: "watched",
      explanation: "Regular verb: watch → watched.",
      explanationSpanish: "Verbo regular: watch → watched.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "regular-verbs"]
    },
    {
      id: "a2-g1-11",
      type: "multiple-choice",
      question: "Where ___ you live before moving here?",
      options: ["did", "do", "does", "were"],
      correctAnswer: "did",
      explanation: "WH-questions in past simple: Where + did + subject + base verb?",
      explanationSpanish: "Preguntas WH en pasado simple: Where + did + sujeto + verbo base?",
      difficulty: 2,
      tags: ["grammar", "past-simple", "wh-questions"]
    },
    {
      id: "a2-g1-12",
      type: "multiple-choice",
      question: "They ___ in Paris last summer.",
      options: ["were", "was", "are", "is"],
      correctAnswer: "were",
      explanation: "'To be' past simple: I/he/she/it → was, you/we/they → were.",
      explanationSpanish: "'To be' en pasado simple: I/he/she/it → was, you/we/they → were.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "to-be"]
    },
    {
      id: "a2-g1-13",
      type: "multiple-choice",
      question: "The meeting ___ for two hours.",
      options: ["lasted", "last", "lasting", "lasts"],
      correctAnswer: "lasted",
      explanation: "Regular verb: last → lasted.",
      explanationSpanish: "Verbo regular: last → lasted.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "regular-verbs"]
    },
    {
      id: "a2-g1-14",
      type: "multiple-choice",
      question: "She ___ very happy when she heard the news.",
      options: ["was", "were", "is", "be"],
      correctAnswer: "was",
      explanation: "'She' uses 'was' in past simple of 'to be'.",
      explanationSpanish: "'She' usa 'was' en el pasado simple de 'to be'.",
      difficulty: 1,
      tags: ["grammar", "past-simple", "to-be"]
    },
    {
      id: "a2-g1-15",
      type: "multiple-choice",
      question: "I ___ the book on the table. Have you seen it?",
      options: ["left", "leave", "leaving", "leaved"],
      correctAnswer: "left",
      explanation: "'Leave' is irregular. Past simple: leave → left.",
      explanationSpanish: "'Leave' es irregular. Pasado simple: leave → left.",
      difficulty: 2,
      tags: ["grammar", "past-simple", "irregular-verbs"]
    },
  ],

  // Present Perfect (básico)
  "a2-gram-2": [
    {
      id: "a2-g2-1",
      type: "multiple-choice",
      question: "I ___ never ___ to Japan.",
      options: ["have... been", "has... been", "am... been", "was... been"],
      correctAnswer: "have... been",
      explanation: "Present Perfect: have/has + past participle. 'I' uses 'have'.",
      explanationSpanish: "Present Perfect: have/has + participio pasado. 'I' usa 'have'.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "structure"]
    },
    {
      id: "a2-g2-2",
      type: "multiple-choice",
      question: "She ___ just finished her homework.",
      options: ["has", "have", "had", "is"],
      correctAnswer: "has",
      explanation: "'She' uses 'has' in Present Perfect. 'Just' = very recently.",
      explanationSpanish: "'She' usa 'has' en Present Perfect. 'Just' = muy recientemente.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "just"]
    },
    {
      id: "a2-g2-3",
      type: "multiple-choice",
      question: "Have you ever ___ Italian food?",
      options: ["tried", "try", "trying", "tries"],
      correctAnswer: "tried",
      explanation: "Present Perfect: have/has + past participle (try → tried).",
      explanationSpanish: "Present Perfect: have/has + participio pasado (try → tried).",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "ever"]
    },
    {
      id: "a2-g2-4",
      type: "multiple-choice",
      question: "They haven't ___ their project yet.",
      options: ["completed", "complete", "completing", "completes"],
      correctAnswer: "completed",
      explanation: "Negative Present Perfect: haven't/hasn't + past participle.",
      explanationSpanish: "Negativo en Present Perfect: haven't/hasn't + participio pasado.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "yet"]
    },
    {
      id: "a2-g2-5",
      type: "multiple-choice",
      question: "I've already ___ that movie twice.",
      options: ["seen", "see", "saw", "seeing"],
      correctAnswer: "seen",
      explanation: "'See' is irregular: see → saw → seen.",
      explanationSpanish: "'See' es irregular: see → saw → seen.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "already"]
    },
    {
      id: "a2-g2-6",
      type: "multiple-choice",
      question: "He's lived in Madrid ___ five years.",
      options: ["for", "since", "from", "during"],
      correctAnswer: "for",
      explanation: "'For' is used with periods of time (five years, two months).",
      explanationSpanish: "'For' se usa con períodos de tiempo (five years, two months).",
      difficulty: 2,
      tags: ["grammar", "present-perfect", "for-since"]
    },
    {
      id: "a2-g2-7",
      type: "multiple-choice",
      question: "She's worked here ___ 2019.",
      options: ["since", "for", "from", "during"],
      correctAnswer: "since",
      explanation: "'Since' is used with specific points in time (2019, Monday).",
      explanationSpanish: "'Since' se usa con puntos específicos en el tiempo (2019, Monday).",
      difficulty: 2,
      tags: ["grammar", "present-perfect", "for-since"]
    },
    {
      id: "a2-g2-8",
      type: "multiple-choice",
      question: "___ you finished your lunch yet?",
      options: ["Have", "Has", "Did", "Are"],
      correctAnswer: "Have",
      explanation: "Present Perfect questions: Have/Has + subject + past participle?",
      explanationSpanish: "Preguntas en Present Perfect: Have/Has + sujeto + participio pasado?",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "questions"]
    },
    {
      id: "a2-g2-9",
      type: "multiple-choice",
      question: "I've never ___ such a beautiful sunset.",
      options: ["seen", "see", "saw", "seeing"],
      correctAnswer: "seen",
      explanation: "'Never' is used with Present Perfect to talk about life experiences.",
      explanationSpanish: "'Never' se usa con Present Perfect para hablar de experiencias de vida.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "never"]
    },
    {
      id: "a2-g2-10",
      type: "multiple-choice",
      question: "The train has just ___.",
      options: ["arrived", "arrive", "arriving", "arrives"],
      correctAnswer: "arrived",
      explanation: "'Just' with Present Perfect = very recently happened.",
      explanationSpanish: "'Just' con Present Perfect = sucedió muy recientemente.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "just"]
    },
    {
      id: "a2-g2-11",
      type: "multiple-choice",
      question: "We ___ been to that restaurant before.",
      options: ["haven't", "hasn't", "didn't", "aren't"],
      correctAnswer: "haven't",
      explanation: "Negative with 'we': haven't + past participle.",
      explanationSpanish: "Negativo con 'we': haven't + participio pasado.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "negative"]
    },
    {
      id: "a2-g2-12",
      type: "multiple-choice",
      question: "She ___ written three emails this morning.",
      options: ["has", "have", "is", "was"],
      correctAnswer: "has",
      explanation: "'She' uses 'has' in Present Perfect.",
      explanationSpanish: "'She' usa 'has' en Present Perfect.",
      difficulty: 1,
      tags: ["grammar", "present-perfect", "third-person"]
    },
    {
      id: "a2-g2-13",
      type: "multiple-choice",
      question: "Have you ___ your keys? They're on the table.",
      options: ["found", "find", "finding", "founded"],
      correctAnswer: "found",
      explanation: "'Find' is irregular: find → found → found.",
      explanationSpanish: "'Find' es irregular: find → found → found.",
      difficulty: 2,
      tags: ["grammar", "present-perfect", "irregular-verbs"]
    },
    {
      id: "a2-g2-14",
      type: "multiple-choice",
      question: "I've known Maria ___ we were children.",
      options: ["since", "for", "from", "during"],
      correctAnswer: "since",
      explanation: "'Since' + point in time (when we were children = a point in time).",
      explanationSpanish: "'Since' + punto en el tiempo (when we were children = un punto en el tiempo).",
      difficulty: 2,
      tags: ["grammar", "present-perfect", "for-since"]
    },
    {
      id: "a2-g2-15",
      type: "multiple-choice",
      question: "They've ___ gone home. The office is empty.",
      options: ["already", "yet", "still", "ever"],
      correctAnswer: "already",
      explanation: "'Already' in affirmative sentences = before expected.",
      explanationSpanish: "'Already' en oraciones afirmativas = antes de lo esperado.",
      difficulty: 2,
      tags: ["grammar", "present-perfect", "already"]
    },
  ],

  // Future con 'going to'
  "a2-gram-3": [
    {
      id: "a2-g3-1",
      type: "multiple-choice",
      question: "I ___ going to visit my grandmother tomorrow.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "'I' uses 'am' with going to: I am going to...",
      explanationSpanish: "'I' usa 'am' con going to: I am going to...",
      difficulty: 1,
      tags: ["grammar", "going-to", "structure"]
    },
    {
      id: "a2-g3-2",
      type: "multiple-choice",
      question: "She ___ going to start a new job next month.",
      options: ["is", "am", "are", "be"],
      correctAnswer: "is",
      explanation: "'She' uses 'is' with going to: She is going to...",
      explanationSpanish: "'She' usa 'is' con going to: She is going to...",
      difficulty: 1,
      tags: ["grammar", "going-to", "structure"]
    },
    {
      id: "a2-g3-3",
      type: "multiple-choice",
      question: "They ___ going to buy a new car soon.",
      options: ["are", "is", "am", "be"],
      correctAnswer: "are",
      explanation: "'They' uses 'are' with going to: They are going to...",
      explanationSpanish: "'They' usa 'are' con going to: They are going to...",
      difficulty: 1,
      tags: ["grammar", "going-to", "structure"]
    },
    {
      id: "a2-g3-4",
      type: "multiple-choice",
      question: "Look at those clouds! It ___ going to rain.",
      options: ["is", "am", "are", "be"],
      correctAnswer: "is",
      explanation: "We use 'going to' for predictions based on evidence we can see.",
      explanationSpanish: "Usamos 'going to' para predicciones basadas en evidencia que podemos ver.",
      difficulty: 1,
      tags: ["grammar", "going-to", "predictions"]
    },
    {
      id: "a2-g3-5",
      type: "multiple-choice",
      question: "What ___ you going to do this weekend?",
      options: ["are", "is", "am", "do"],
      correctAnswer: "are",
      explanation: "Questions: What are you going to + verb?",
      explanationSpanish: "Preguntas: What are you going to + verbo?",
      difficulty: 1,
      tags: ["grammar", "going-to", "questions"]
    },
    {
      id: "a2-g3-6",
      type: "multiple-choice",
      question: "I'm not going to ___ the meeting.",
      options: ["attend", "attending", "attended", "attends"],
      correctAnswer: "attend",
      explanation: "After 'going to', use the base form of the verb.",
      explanationSpanish: "Después de 'going to', usa la forma base del verbo.",
      difficulty: 1,
      tags: ["grammar", "going-to", "negative"]
    },
    {
      id: "a2-g3-7",
      type: "multiple-choice",
      question: "Be careful! You ___ going to fall!",
      options: ["are", "is", "am", "will"],
      correctAnswer: "are",
      explanation: "Warning about immediate future based on what you see.",
      explanationSpanish: "Advertencia sobre el futuro inmediato basada en lo que ves.",
      difficulty: 1,
      tags: ["grammar", "going-to", "predictions"]
    },
    {
      id: "a2-g3-8",
      type: "multiple-choice",
      question: "___ he going to apply for the job?",
      options: ["Is", "Are", "Am", "Does"],
      correctAnswer: "Is",
      explanation: "Questions with 'he/she/it': Is + subject + going to + verb?",
      explanationSpanish: "Preguntas con 'he/she/it': Is + sujeto + going to + verbo?",
      difficulty: 1,
      tags: ["grammar", "going-to", "questions"]
    },
    {
      id: "a2-g3-9",
      type: "multiple-choice",
      question: "We're going to ___ married in June.",
      options: ["get", "getting", "got", "gets"],
      correctAnswer: "get",
      explanation: "Going to + base form for plans and intentions.",
      explanationSpanish: "Going to + forma base para planes e intenciones.",
      difficulty: 1,
      tags: ["grammar", "going-to", "plans"]
    },
    {
      id: "a2-g3-10",
      type: "multiple-choice",
      question: "The team ___ going to win the championship.",
      options: ["is", "am", "are", "be"],
      correctAnswer: "is",
      explanation: "'The team' (singular) uses 'is'.",
      explanationSpanish: "'The team' (singular) usa 'is'.",
      difficulty: 1,
      tags: ["grammar", "going-to", "predictions"]
    },
    {
      id: "a2-g3-11",
      type: "multiple-choice",
      question: "I'm ___ going to tell him the truth.",
      options: ["not", "no", "don't", "doesn't"],
      correctAnswer: "not",
      explanation: "Negative: am/is/are + not + going to + verb.",
      explanationSpanish: "Negativo: am/is/are + not + going to + verbo.",
      difficulty: 1,
      tags: ["grammar", "going-to", "negative"]
    },
    {
      id: "a2-g3-12",
      type: "multiple-choice",
      question: "They aren't going to ___ the party.",
      options: ["miss", "missing", "missed", "misses"],
      correctAnswer: "miss",
      explanation: "After 'going to', always use the base form.",
      explanationSpanish: "Después de 'going to', siempre usa la forma base.",
      difficulty: 1,
      tags: ["grammar", "going-to", "negative"]
    },
    {
      id: "a2-g3-13",
      type: "multiple-choice",
      question: "When ___ you going to finish the project?",
      options: ["are", "is", "do", "will"],
      correctAnswer: "are",
      explanation: "WH-questions: When + are/is/am + subject + going to + verb?",
      explanationSpanish: "Preguntas WH: When + are/is/am + sujeto + going to + verbo?",
      difficulty: 2,
      tags: ["grammar", "going-to", "wh-questions"]
    },
    {
      id: "a2-g3-14",
      type: "multiple-choice",
      question: "She's going to ___ us about her vacation.",
      options: ["tell", "telling", "told", "tells"],
      correctAnswer: "tell",
      explanation: "Going to + base form of verb.",
      explanationSpanish: "Going to + forma base del verbo.",
      difficulty: 1,
      tags: ["grammar", "going-to", "structure"]
    },
    {
      id: "a2-g3-15",
      type: "multiple-choice",
      question: "Look! The bus is leaving! We ___ going to miss it!",
      options: ["are", "is", "am", "will"],
      correctAnswer: "are",
      explanation: "Prediction based on evidence (the bus is leaving).",
      explanationSpanish: "Predicción basada en evidencia (el autobús se va).",
      difficulty: 2,
      tags: ["grammar", "going-to", "predictions"]
    },
  ],

  // There is / There are
  "a2-gram-4": [
    {
      id: "a2-g4-1",
      type: "multiple-choice",
      question: "___ a book on the table.",
      options: ["There is", "There are", "It is", "They are"],
      correctAnswer: "There is",
      explanation: "'There is' for singular nouns (a book = one book).",
      explanationSpanish: "'There is' para sustantivos singulares (a book = un libro).",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "singular"]
    },
    {
      id: "a2-g4-2",
      type: "multiple-choice",
      question: "___ many people at the concert.",
      options: ["There were", "There was", "It was", "They were"],
      correctAnswer: "There were",
      explanation: "'There were' for plural in past tense (many people).",
      explanationSpanish: "'There were' para plural en pasado (many people).",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "plural", "past"]
    },
    {
      id: "a2-g4-3",
      type: "multiple-choice",
      question: "___ any milk in the fridge?",
      options: ["Is there", "Are there", "Has there", "Have there"],
      correctAnswer: "Is there",
      explanation: "'Milk' is uncountable, so we use 'Is there'.",
      explanationSpanish: "'Milk' es incontable, así que usamos 'Is there'.",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "uncountable"]
    },
    {
      id: "a2-g4-4",
      type: "multiple-choice",
      question: "___ three bedrooms in my apartment.",
      options: ["There are", "There is", "It has", "They have"],
      correctAnswer: "There are",
      explanation: "'There are' for plural nouns (three bedrooms).",
      explanationSpanish: "'There are' para sustantivos plurales (three bedrooms).",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "plural"]
    },
    {
      id: "a2-g4-5",
      type: "multiple-choice",
      question: "___ any students in the classroom?",
      options: ["Are there", "Is there", "Do there", "Does there"],
      correctAnswer: "Are there",
      explanation: "Questions with plural: Are there + plural noun?",
      explanationSpanish: "Preguntas con plural: Are there + sustantivo plural?",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "questions"]
    },
    {
      id: "a2-g4-6",
      type: "multiple-choice",
      question: "There ___ some coffee in the cup.",
      options: ["is", "are", "be", "have"],
      correctAnswer: "is",
      explanation: "'Coffee' is uncountable, so we use 'is'.",
      explanationSpanish: "'Coffee' es incontable, así que usamos 'is'.",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "uncountable"]
    },
    {
      id: "a2-g4-7",
      type: "multiple-choice",
      question: "There ___ no parking spaces available.",
      options: ["are", "is", "be", "have"],
      correctAnswer: "are",
      explanation: "'Parking spaces' is plural, so we use 'are'.",
      explanationSpanish: "'Parking spaces' es plural, así que usamos 'are'.",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "negative"]
    },
    {
      id: "a2-g4-8",
      type: "multiple-choice",
      question: "There ___ a lot of traffic this morning.",
      options: ["was", "were", "is being", "are being"],
      correctAnswer: "was",
      explanation: "'Traffic' is uncountable and singular, past tense = was.",
      explanationSpanish: "'Traffic' es incontable y singular, pasado = was.",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "past"]
    },
    {
      id: "a2-g4-9",
      type: "multiple-choice",
      question: "___ a problem with the computer?",
      options: ["Is there", "Are there", "Has there", "Does there"],
      correctAnswer: "Is there",
      explanation: "Singular question: Is there + singular noun?",
      explanationSpanish: "Pregunta singular: Is there + sustantivo singular?",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "questions"]
    },
    {
      id: "a2-g4-10",
      type: "multiple-choice",
      question: "There ___ some interesting news today.",
      options: ["is", "are", "be", "have"],
      correctAnswer: "is",
      explanation: "'News' is uncountable and takes singular verb.",
      explanationSpanish: "'News' es incontable y usa verbo singular.",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "uncountable"]
    },
    {
      id: "a2-g4-11",
      type: "multiple-choice",
      question: "There aren't ___ restaurants near here.",
      options: ["any", "some", "a", "the"],
      correctAnswer: "any",
      explanation: "We use 'any' in negative sentences.",
      explanationSpanish: "Usamos 'any' en oraciones negativas.",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "any"]
    },
    {
      id: "a2-g4-12",
      type: "multiple-choice",
      question: "There ___ going to be a party tonight.",
      options: ["is", "are", "will", "be"],
      correctAnswer: "is",
      explanation: "'There is going to be' for future singular events.",
      explanationSpanish: "'There is going to be' para eventos singulares futuros.",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "future"]
    },
    {
      id: "a2-g4-13",
      type: "multiple-choice",
      question: "There ___ too much noise in this room.",
      options: ["is", "are", "be", "have"],
      correctAnswer: "is",
      explanation: "'Noise' is uncountable, use 'is' with 'much'.",
      explanationSpanish: "'Noise' es incontable, usa 'is' con 'much'.",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "uncountable"]
    },
    {
      id: "a2-g4-14",
      type: "multiple-choice",
      question: "___ any chairs in the room?",
      options: ["Were there", "Was there", "Did there", "Had there"],
      correctAnswer: "Were there",
      explanation: "Past tense question with plural: Were there?",
      explanationSpanish: "Pregunta en pasado con plural: Were there?",
      difficulty: 2,
      tags: ["grammar", "there-is-are", "past", "questions"]
    },
    {
      id: "a2-g4-15",
      type: "multiple-choice",
      question: "There ___ a lot of people waiting outside.",
      options: ["are", "is", "be", "have"],
      correctAnswer: "are",
      explanation: "'A lot of people' is plural, so we use 'are'.",
      explanationSpanish: "'A lot of people' es plural, así que usamos 'are'.",
      difficulty: 1,
      tags: ["grammar", "there-is-are", "plural"]
    },
  ],

  // Contables e incontables
  "a2-gram-5": [
    {
      id: "a2-g5-1",
      type: "multiple-choice",
      question: "I need ___ water. I'm thirsty.",
      options: ["some", "a", "an", "many"],
      correctAnswer: "some",
      explanation: "'Water' is uncountable. Use 'some' not 'a/an'.",
      explanationSpanish: "'Water' es incontable. Usa 'some', no 'a/an'.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "some"]
    },
    {
      id: "a2-g5-2",
      type: "multiple-choice",
      question: "How ___ apples do you want?",
      options: ["many", "much", "a lot", "some"],
      correctAnswer: "many",
      explanation: "'Apples' is countable plural. Use 'many' for quantity questions.",
      explanationSpanish: "'Apples' es contable plural. Usa 'many' para preguntas de cantidad.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "many"]
    },
    {
      id: "a2-g5-3",
      type: "multiple-choice",
      question: "How ___ sugar do you take in your coffee?",
      options: ["much", "many", "lot", "few"],
      correctAnswer: "much",
      explanation: "'Sugar' is uncountable. Use 'much' for quantity questions.",
      explanationSpanish: "'Sugar' es incontable. Usa 'much' para preguntas de cantidad.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "much"]
    },
    {
      id: "a2-g5-4",
      type: "multiple-choice",
      question: "There aren't ___ chairs in the room.",
      options: ["many", "much", "a", "some"],
      correctAnswer: "many",
      explanation: "'Chairs' is countable plural. Use 'many' in negatives.",
      explanationSpanish: "'Chairs' es contable plural. Usa 'many' en negativas.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "many"]
    },
    {
      id: "a2-g5-5",
      type: "multiple-choice",
      question: "I don't have ___ money today.",
      options: ["much", "many", "a", "few"],
      correctAnswer: "much",
      explanation: "'Money' is uncountable. Use 'much' in negatives.",
      explanationSpanish: "'Money' es incontable. Usa 'much' en negativas.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "much"]
    },
    {
      id: "a2-g5-6",
      type: "multiple-choice",
      question: "Would you like ___ cup of tea?",
      options: ["a", "some", "any", "much"],
      correctAnswer: "a",
      explanation: "'Cup' is countable singular. Use 'a' before consonant sounds.",
      explanationSpanish: "'Cup' es contable singular. Usa 'a' antes de sonidos consonantes.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "articles"]
    },
    {
      id: "a2-g5-7",
      type: "multiple-choice",
      question: "Do you have ___ bread?",
      options: ["any", "a", "many", "few"],
      correctAnswer: "any",
      explanation: "'Bread' is uncountable. Use 'any' in questions.",
      explanationSpanish: "'Bread' es incontable. Usa 'any' en preguntas.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "any"]
    },
    {
      id: "a2-g5-8",
      type: "multiple-choice",
      question: "There are ___ few students in the class today.",
      options: ["a", "some", "any", "the"],
      correctAnswer: "a",
      explanation: "'A few' means 'some, but not many' - used with countable nouns.",
      explanationSpanish: "'A few' significa 'algunos, pero no muchos' - usado con sustantivos contables.",
      difficulty: 2,
      tags: ["grammar", "countable-uncountable", "few"]
    },
    {
      id: "a2-g5-9",
      type: "multiple-choice",
      question: "I only have ___ little time left.",
      options: ["a", "some", "any", "the"],
      correctAnswer: "a",
      explanation: "'A little' means 'some, but not much' - used with uncountable nouns.",
      explanationSpanish: "'A little' significa 'algo, pero no mucho' - usado con sustantivos incontables.",
      difficulty: 2,
      tags: ["grammar", "countable-uncountable", "little"]
    },
    {
      id: "a2-g5-10",
      type: "multiple-choice",
      question: "She eats ___ rice every day.",
      options: ["a lot of", "many", "a", "few"],
      correctAnswer: "a lot of",
      explanation: "'Rice' is uncountable. 'A lot of' works with both countable and uncountable.",
      explanationSpanish: "'Rice' es incontable. 'A lot of' funciona con contables e incontables.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "lot-of"]
    },
    {
      id: "a2-g5-11",
      type: "multiple-choice",
      question: "I need ___ information about the course.",
      options: ["some", "a", "an", "many"],
      correctAnswer: "some",
      explanation: "'Information' is uncountable. Use 'some', not 'a/an'.",
      explanationSpanish: "'Information' es incontable. Usa 'some', no 'a/an'.",
      difficulty: 2,
      tags: ["grammar", "countable-uncountable", "uncountable-nouns"]
    },
    {
      id: "a2-g5-12",
      type: "multiple-choice",
      question: "There isn't ___ milk in the fridge.",
      options: ["any", "some", "a", "many"],
      correctAnswer: "any",
      explanation: "'Any' is used in negative sentences with uncountable nouns.",
      explanationSpanish: "'Any' se usa en oraciones negativas con sustantivos incontables.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "any"]
    },
    {
      id: "a2-g5-13",
      type: "multiple-choice",
      question: "Can I have ___ orange, please?",
      options: ["an", "a", "some", "any"],
      correctAnswer: "an",
      explanation: "'An' is used before vowel sounds. 'Orange' starts with an 'o' sound.",
      explanationSpanish: "'An' se usa antes de sonidos vocales. 'Orange' empieza con sonido 'o'.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "articles"]
    },
    {
      id: "a2-g5-14",
      type: "multiple-choice",
      question: "She doesn't have ___ friends in the city.",
      options: ["many", "much", "a lot", "some"],
      correctAnswer: "many",
      explanation: "'Friends' is countable plural. Use 'many' in negative sentences.",
      explanationSpanish: "'Friends' es contable plural. Usa 'many' en oraciones negativas.",
      difficulty: 1,
      tags: ["grammar", "countable-uncountable", "many"]
    },
    {
      id: "a2-g5-15",
      type: "multiple-choice",
      question: "I'd like ___ advice about my career.",
      options: ["some", "an", "a", "many"],
      correctAnswer: "some",
      explanation: "'Advice' is uncountable. Use 'some', never 'an advice'.",
      explanationSpanish: "'Advice' es incontable. Usa 'some', nunca 'an advice'.",
      difficulty: 2,
      tags: ["grammar", "countable-uncountable", "uncountable-nouns"]
    },
  ],

  // Comparativos y superlativos
  "a2-gram-6": [
    {
      id: "a2-g6-1",
      type: "multiple-choice",
      question: "My house is ___ than yours.",
      options: ["bigger", "more big", "biger", "biggest"],
      correctAnswer: "bigger",
      explanation: "Short adjectives (1 syllable): add -er. Big → bigger (double the consonant).",
      explanationSpanish: "Adjetivos cortos (1 sílaba): añadir -er. Big → bigger (doblar la consonante).",
      difficulty: 1,
      tags: ["grammar", "comparatives", "short-adjectives"]
    },
    {
      id: "a2-g6-2",
      type: "multiple-choice",
      question: "This book is ___ than that one.",
      options: ["more interesting", "interestinger", "most interesting", "more interest"],
      correctAnswer: "more interesting",
      explanation: "Long adjectives (3+ syllables): more + adjective.",
      explanationSpanish: "Adjetivos largos (3+ sílabas): more + adjetivo.",
      difficulty: 1,
      tags: ["grammar", "comparatives", "long-adjectives"]
    },
    {
      id: "a2-g6-3",
      type: "multiple-choice",
      question: "She is the ___ student in the class.",
      options: ["best", "better", "good", "more good"],
      correctAnswer: "best",
      explanation: "'Good' is irregular: good → better → best.",
      explanationSpanish: "'Good' es irregular: good → better → best.",
      difficulty: 1,
      tags: ["grammar", "superlatives", "irregular"]
    },
    {
      id: "a2-g6-4",
      type: "multiple-choice",
      question: "This is the ___ expensive car in the showroom.",
      options: ["most", "more", "much", "very"],
      correctAnswer: "most",
      explanation: "Superlative with long adjectives: the most + adjective.",
      explanationSpanish: "Superlativo con adjetivos largos: the most + adjetivo.",
      difficulty: 1,
      tags: ["grammar", "superlatives", "long-adjectives"]
    },
    {
      id: "a2-g6-5",
      type: "multiple-choice",
      question: "The blue dress is ___ than the red one.",
      options: ["cheaper", "more cheap", "cheapest", "cheap"],
      correctAnswer: "cheaper",
      explanation: "Short adjectives: cheap → cheaper.",
      explanationSpanish: "Adjetivos cortos: cheap → cheaper.",
      difficulty: 1,
      tags: ["grammar", "comparatives", "short-adjectives"]
    },
    {
      id: "a2-g6-6",
      type: "multiple-choice",
      question: "Mount Everest is the ___ mountain in the world.",
      options: ["highest", "higher", "most high", "more high"],
      correctAnswer: "highest",
      explanation: "Short adjectives superlative: high → highest.",
      explanationSpanish: "Superlativo de adjetivos cortos: high → highest.",
      difficulty: 1,
      tags: ["grammar", "superlatives", "short-adjectives"]
    },
    {
      id: "a2-g6-7",
      type: "multiple-choice",
      question: "My English is getting ___ and ___.",
      options: ["better", "best", "good", "more good"],
      correctAnswer: "better",
      explanation: "'Better and better' shows continuous improvement.",
      explanationSpanish: "'Better and better' muestra mejora continua.",
      difficulty: 2,
      tags: ["grammar", "comparatives", "irregular"]
    },
    {
      id: "a2-g6-8",
      type: "multiple-choice",
      question: "This exercise is ___ than the last one.",
      options: ["easier", "more easy", "easiest", "easy"],
      correctAnswer: "easier",
      explanation: "Adjectives ending in -y: change y to i and add -er (easy → easier).",
      explanationSpanish: "Adjetivos terminados en -y: cambia y por i y añade -er (easy → easier).",
      difficulty: 1,
      tags: ["grammar", "comparatives", "spelling"]
    },
    {
      id: "a2-g6-9",
      type: "multiple-choice",
      question: "She is the ___ person I know.",
      options: ["happiest", "most happy", "happier", "more happy"],
      correctAnswer: "happiest",
      explanation: "Adjectives ending in -y: happy → happiest.",
      explanationSpanish: "Adjetivos terminados en -y: happy → happiest.",
      difficulty: 1,
      tags: ["grammar", "superlatives", "spelling"]
    },
    {
      id: "a2-g6-10",
      type: "multiple-choice",
      question: "Today is ___ than yesterday.",
      options: ["worse", "badder", "worst", "more bad"],
      correctAnswer: "worse",
      explanation: "'Bad' is irregular: bad → worse → worst.",
      explanationSpanish: "'Bad' es irregular: bad → worse → worst.",
      difficulty: 1,
      tags: ["grammar", "comparatives", "irregular"]
    },
    {
      id: "a2-g6-11",
      type: "multiple-choice",
      question: "This is the ___ pizza I've ever had!",
      options: ["worst", "worse", "baddest", "most bad"],
      correctAnswer: "worst",
      explanation: "'Bad' superlative: bad → worse → worst.",
      explanationSpanish: "'Bad' superlativo: bad → worse → worst.",
      difficulty: 1,
      tags: ["grammar", "superlatives", "irregular"]
    },
    {
      id: "a2-g6-12",
      type: "multiple-choice",
      question: "He lives ___ from the school than I do.",
      options: ["farther", "far", "farthest", "more far"],
      correctAnswer: "farther",
      explanation: "'Far' is irregular: far → farther/further → farthest/furthest.",
      explanationSpanish: "'Far' es irregular: far → farther/further → farthest/furthest.",
      difficulty: 2,
      tags: ["grammar", "comparatives", "irregular"]
    },
    {
      id: "a2-g6-13",
      type: "multiple-choice",
      question: "My sister is ___ than me.",
      options: ["taller", "more tall", "tallest", "tall"],
      correctAnswer: "taller",
      explanation: "Short adjectives: tall → taller.",
      explanationSpanish: "Adjetivos cortos: tall → taller.",
      difficulty: 1,
      tags: ["grammar", "comparatives", "short-adjectives"]
    },
    {
      id: "a2-g6-14",
      type: "multiple-choice",
      question: "This is the ___ day of my life!",
      options: ["happiest", "most happy", "happier", "happy"],
      correctAnswer: "happiest",
      explanation: "Superlative: happy → happiest (y → i + est).",
      explanationSpanish: "Superlativo: happy → happiest (y → i + est).",
      difficulty: 1,
      tags: ["grammar", "superlatives", "spelling"]
    },
    {
      id: "a2-g6-15",
      type: "multiple-choice",
      question: "The new model is ___ beautiful than the old one.",
      options: ["more", "most", "much", "very"],
      correctAnswer: "more",
      explanation: "Long adjectives comparative: more + adjective + than.",
      explanationSpanish: "Comparativo de adjetivos largos: more + adjetivo + than.",
      difficulty: 1,
      tags: ["grammar", "comparatives", "long-adjectives"]
    },
  ],

  // Modales básicos (can, must, should)
  "a2-gram-7": [
    {
      id: "a2-g7-1",
      type: "multiple-choice",
      question: "I ___ speak three languages: English, Spanish, and French.",
      options: ["can", "must", "should", "have"],
      correctAnswer: "can",
      explanation: "'Can' expresses ability - what you are able to do.",
      explanationSpanish: "'Can' expresa habilidad - lo que puedes hacer.",
      difficulty: 1,
      tags: ["grammar", "modals", "can", "ability"]
    },
    {
      id: "a2-g7-2",
      type: "multiple-choice",
      question: "You ___ smoke in the hospital. It's not allowed.",
      options: ["can't", "mustn't", "shouldn't", "don't"],
      correctAnswer: "mustn't",
      explanation: "'Mustn't' expresses prohibition - something is not allowed.",
      explanationSpanish: "'Mustn't' expresa prohibición - algo no está permitido.",
      difficulty: 1,
      tags: ["grammar", "modals", "must", "prohibition"]
    },
    {
      id: "a2-g7-3",
      type: "multiple-choice",
      question: "You ___ see a doctor. That cough sounds bad.",
      options: ["should", "must", "can", "will"],
      correctAnswer: "should",
      explanation: "'Should' gives advice - it's a good idea but not obligatory.",
      explanationSpanish: "'Should' da consejos - es buena idea pero no obligatorio.",
      difficulty: 1,
      tags: ["grammar", "modals", "should", "advice"]
    },
    {
      id: "a2-g7-4",
      type: "multiple-choice",
      question: "___ I use your phone? I forgot mine.",
      options: ["Can", "Must", "Should", "Will"],
      correctAnswer: "Can",
      explanation: "'Can I...?' asks for permission politely.",
      explanationSpanish: "'Can I...?' pide permiso de forma educada.",
      difficulty: 1,
      tags: ["grammar", "modals", "can", "permission"]
    },
    {
      id: "a2-g7-5",
      type: "multiple-choice",
      question: "Students ___ wear a uniform at this school. It's the rule.",
      options: ["must", "should", "can", "might"],
      correctAnswer: "must",
      explanation: "'Must' expresses strong obligation or rules.",
      explanationSpanish: "'Must' expresa obligación fuerte o reglas.",
      difficulty: 1,
      tags: ["grammar", "modals", "must", "obligation"]
    },
    {
      id: "a2-g7-6",
      type: "multiple-choice",
      question: "She ___ swim when she was five years old.",
      options: ["could", "can", "must", "should"],
      correctAnswer: "could",
      explanation: "'Could' is the past tense of 'can' for past ability.",
      explanationSpanish: "'Could' es el pasado de 'can' para habilidad pasada.",
      difficulty: 2,
      tags: ["grammar", "modals", "could", "past-ability"]
    },
    {
      id: "a2-g7-7",
      type: "multiple-choice",
      question: "You ___ eat so much sugar. It's bad for your health.",
      options: ["shouldn't", "can't", "mustn't", "don't"],
      correctAnswer: "shouldn't",
      explanation: "'Shouldn't' gives negative advice.",
      explanationSpanish: "'Shouldn't' da consejos negativos.",
      difficulty: 1,
      tags: ["grammar", "modals", "should", "advice"]
    },
    {
      id: "a2-g7-8",
      type: "multiple-choice",
      question: "He ___ drive because he doesn't have a license.",
      options: ["can't", "mustn't", "shouldn't", "won't"],
      correctAnswer: "can't",
      explanation: "'Can't' expresses inability - he is not able to drive legally.",
      explanationSpanish: "'Can't' expresa incapacidad - no puede conducir legalmente.",
      difficulty: 1,
      tags: ["grammar", "modals", "can", "ability"]
    },
    {
      id: "a2-g7-9",
      type: "multiple-choice",
      question: "___ you help me with this box? It's heavy.",
      options: ["Could", "Must", "Should", "Will"],
      correctAnswer: "Could",
      explanation: "'Could you...?' is a polite way to ask for help.",
      explanationSpanish: "'Could you...?' es una forma educada de pedir ayuda.",
      difficulty: 1,
      tags: ["grammar", "modals", "could", "requests"]
    },
    {
      id: "a2-g7-10",
      type: "multiple-choice",
      question: "You ___ study harder if you want to pass the exam.",
      options: ["should", "can", "must", "could"],
      correctAnswer: "should",
      explanation: "'Should' for advice and recommendations.",
      explanationSpanish: "'Should' para consejos y recomendaciones.",
      difficulty: 1,
      tags: ["grammar", "modals", "should", "advice"]
    },
    {
      id: "a2-g7-11",
      type: "multiple-choice",
      question: "I ___ play the piano, but I can play the guitar.",
      options: ["can't", "mustn't", "shouldn't", "don't"],
      correctAnswer: "can't",
      explanation: "'Can't' expresses lack of ability.",
      explanationSpanish: "'Can't' expresa falta de habilidad.",
      difficulty: 1,
      tags: ["grammar", "modals", "can", "ability"]
    },
    {
      id: "a2-g7-12",
      type: "multiple-choice",
      question: "You ___ be quiet in the library. It's a rule.",
      options: ["must", "should", "can", "could"],
      correctAnswer: "must",
      explanation: "'Must' for rules and strong obligations.",
      explanationSpanish: "'Must' para reglas y obligaciones fuertes.",
      difficulty: 1,
      tags: ["grammar", "modals", "must", "rules"]
    },
    {
      id: "a2-g7-13",
      type: "multiple-choice",
      question: "___ we go to the beach tomorrow?",
      options: ["Shall", "Must", "Should", "Can"],
      correctAnswer: "Shall",
      explanation: "'Shall we...?' is used to make suggestions (British English).",
      explanationSpanish: "'Shall we...?' se usa para hacer sugerencias.",
      difficulty: 2,
      tags: ["grammar", "modals", "shall", "suggestions"]
    },
    {
      id: "a2-g7-14",
      type: "multiple-choice",
      question: "She's very talented. She ___ sing beautifully.",
      options: ["can", "must", "should", "has to"],
      correctAnswer: "can",
      explanation: "'Can' for ability and talent.",
      explanationSpanish: "'Can' para habilidad y talento.",
      difficulty: 1,
      tags: ["grammar", "modals", "can", "ability"]
    },
    {
      id: "a2-g7-15",
      type: "multiple-choice",
      question: "You look tired. You ___ get some rest.",
      options: ["should", "must", "can", "will"],
      correctAnswer: "should",
      explanation: "'Should' for giving advice based on observation.",
      explanationSpanish: "'Should' para dar consejos basados en observación.",
      difficulty: 1,
      tags: ["grammar", "modals", "should", "advice"]
    },
  ],

  // Preposiciones
  "a2-gram-8": [
    {
      id: "a2-g8-1",
      type: "multiple-choice",
      question: "I usually wake up ___ 7 o'clock.",
      options: ["at", "in", "on", "by"],
      correctAnswer: "at",
      explanation: "'At' is used with specific times (at 7 o'clock, at noon).",
      explanationSpanish: "'At' se usa con horas específicas (at 7 o'clock, at noon).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "time"]
    },
    {
      id: "a2-g8-2",
      type: "multiple-choice",
      question: "My birthday is ___ March.",
      options: ["in", "on", "at", "during"],
      correctAnswer: "in",
      explanation: "'In' is used with months and years (in March, in 2024).",
      explanationSpanish: "'In' se usa con meses y años (in March, in 2024).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "time"]
    },
    {
      id: "a2-g8-3",
      type: "multiple-choice",
      question: "The meeting is ___ Monday.",
      options: ["on", "in", "at", "by"],
      correctAnswer: "on",
      explanation: "'On' is used with days and dates (on Monday, on January 5th).",
      explanationSpanish: "'On' se usa con días y fechas (on Monday, on January 5th).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "time"]
    },
    {
      id: "a2-g8-4",
      type: "multiple-choice",
      question: "The cat is sitting ___ the table.",
      options: ["on", "in", "at", "above"],
      correctAnswer: "on",
      explanation: "'On' is used for surfaces (on the table, on the floor).",
      explanationSpanish: "'On' se usa para superficies (on the table, on the floor).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-5",
      type: "multiple-choice",
      question: "The keys are ___ my bag.",
      options: ["in", "on", "at", "into"],
      correctAnswer: "in",
      explanation: "'In' is used for enclosed spaces (in the bag, in the room).",
      explanationSpanish: "'In' se usa para espacios cerrados (in the bag, in the room).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-6",
      type: "multiple-choice",
      question: "She's waiting for you ___ the bus stop.",
      options: ["at", "in", "on", "to"],
      correctAnswer: "at",
      explanation: "'At' is used for specific locations (at the bus stop, at home).",
      explanationSpanish: "'At' se usa para ubicaciones específicas (at the bus stop, at home).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-7",
      type: "multiple-choice",
      question: "The picture is ___ the sofa.",
      options: ["above", "on", "in", "at"],
      correctAnswer: "above",
      explanation: "'Above' means higher than, but not touching (picture on the wall).",
      explanationSpanish: "'Above' significa más arriba, pero sin tocar (cuadro en la pared).",
      difficulty: 2,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-8",
      type: "multiple-choice",
      question: "The pharmacy is ___ the bank and the post office.",
      options: ["between", "among", "beside", "next"],
      correctAnswer: "between",
      explanation: "'Between' is used for two things on either side.",
      explanationSpanish: "'Between' se usa para dos cosas a cada lado.",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-9",
      type: "multiple-choice",
      question: "I'll see you ___ the morning.",
      options: ["in", "on", "at", "during"],
      correctAnswer: "in",
      explanation: "'In' is used with parts of the day (in the morning, in the afternoon).",
      explanationSpanish: "'In' se usa con partes del día (in the morning, in the afternoon).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "time"]
    },
    {
      id: "a2-g8-10",
      type: "multiple-choice",
      question: "The dog is hiding ___ the bed.",
      options: ["under", "below", "down", "beneath"],
      correctAnswer: "under",
      explanation: "'Under' means directly below something.",
      explanationSpanish: "'Under' significa directamente debajo de algo.",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-11",
      type: "multiple-choice",
      question: "She arrived ___ night.",
      options: ["at", "in", "on", "during"],
      correctAnswer: "at",
      explanation: "'At night' is a fixed expression (exception to 'in the morning').",
      explanationSpanish: "'At night' es una expresión fija (excepción a 'in the morning').",
      difficulty: 2,
      tags: ["grammar", "prepositions", "time"]
    },
    {
      id: "a2-g8-12",
      type: "multiple-choice",
      question: "He works ___ a bank in the city center.",
      options: ["at", "in", "on", "by"],
      correctAnswer: "at",
      explanation: "'At' for places of work (at a bank, at a school).",
      explanationSpanish: "'At' para lugares de trabajo (at a bank, at a school).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-13",
      type: "multiple-choice",
      question: "The restaurant is ___ the hotel.",
      options: ["next to", "next", "near to", "beside of"],
      correctAnswer: "next to",
      explanation: "'Next to' means immediately beside something.",
      explanationSpanish: "'Next to' significa inmediatamente al lado de algo.",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
    {
      id: "a2-g8-14",
      type: "multiple-choice",
      question: "We're going on vacation ___ the summer.",
      options: ["in", "on", "at", "during"],
      correctAnswer: "in",
      explanation: "'In' is used with seasons (in the summer, in winter).",
      explanationSpanish: "'In' se usa con estaciones (in the summer, in winter).",
      difficulty: 1,
      tags: ["grammar", "prepositions", "time"]
    },
    {
      id: "a2-g8-15",
      type: "multiple-choice",
      question: "There's a garden ___ the house.",
      options: ["behind", "back", "after", "rear"],
      correctAnswer: "behind",
      explanation: "'Behind' means at the back of something.",
      explanationSpanish: "'Behind' significa detrás de algo.",
      difficulty: 1,
      tags: ["grammar", "prepositions", "place"]
    },
  ],

  // Formación de preguntas
  "a2-gram-9": [
    {
      id: "a2-g9-1",
      type: "multiple-choice",
      question: "___ do you live?",
      options: ["Where", "What", "When", "Who"],
      correctAnswer: "Where",
      explanation: "'Where' asks about location or place.",
      explanationSpanish: "'Where' pregunta sobre ubicación o lugar.",
      difficulty: 1,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-2",
      type: "multiple-choice",
      question: "___ is your birthday?",
      options: ["When", "Where", "What", "Who"],
      correctAnswer: "When",
      explanation: "'When' asks about time.",
      explanationSpanish: "'When' pregunta sobre tiempo.",
      difficulty: 1,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-3",
      type: "multiple-choice",
      question: "___ are you crying?",
      options: ["Why", "What", "When", "Where"],
      correctAnswer: "Why",
      explanation: "'Why' asks about reasons.",
      explanationSpanish: "'Why' pregunta sobre razones.",
      difficulty: 1,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-4",
      type: "multiple-choice",
      question: "___ is your favorite color?",
      options: ["What", "Which", "When", "Where"],
      correctAnswer: "What",
      explanation: "'What' asks for information (open question).",
      explanationSpanish: "'What' pide información (pregunta abierta).",
      difficulty: 1,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-5",
      type: "multiple-choice",
      question: "___ is that man? Is he your father?",
      options: ["Who", "What", "Which", "Whose"],
      correctAnswer: "Who",
      explanation: "'Who' asks about people's identity.",
      explanationSpanish: "'Who' pregunta sobre la identidad de personas.",
      difficulty: 1,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-6",
      type: "multiple-choice",
      question: "___ do you go to work? By bus or by car?",
      options: ["How", "What", "Why", "Where"],
      correctAnswer: "How",
      explanation: "'How' asks about manner or method.",
      explanationSpanish: "'How' pregunta sobre manera o método.",
      difficulty: 1,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-7",
      type: "multiple-choice",
      question: "___ book is this? Is it yours?",
      options: ["Whose", "Who", "Which", "What"],
      correctAnswer: "Whose",
      explanation: "'Whose' asks about possession (who owns it).",
      explanationSpanish: "'Whose' pregunta sobre posesión (de quién es).",
      difficulty: 2,
      tags: ["grammar", "questions", "wh-words"]
    },
    {
      id: "a2-g9-8",
      type: "multiple-choice",
      question: "___ you like coffee? Yes, I do.",
      options: ["Do", "Does", "Are", "Is"],
      correctAnswer: "Do",
      explanation: "Yes/No questions with 'you': Do + you + verb?",
      explanationSpanish: "Preguntas Yes/No con 'you': Do + you + verbo?",
      difficulty: 1,
      tags: ["grammar", "questions", "yes-no"]
    },
    {
      id: "a2-g9-9",
      type: "multiple-choice",
      question: "___ she work here? Yes, she does.",
      options: ["Does", "Do", "Is", "Are"],
      correctAnswer: "Does",
      explanation: "Yes/No questions with 'she': Does + she + verb (base form)?",
      explanationSpanish: "Preguntas Yes/No con 'she': Does + she + verbo (forma base)?",
      difficulty: 1,
      tags: ["grammar", "questions", "yes-no"]
    },
    {
      id: "a2-g9-10",
      type: "multiple-choice",
      question: "___ you coming to the party? Yes, I am.",
      options: ["Are", "Do", "Does", "Is"],
      correctAnswer: "Are",
      explanation: "Present Continuous questions: Are + you + verb-ing?",
      explanationSpanish: "Preguntas en Present Continuous: Are + you + verbo-ing?",
      difficulty: 1,
      tags: ["grammar", "questions", "present-continuous"]
    },
    {
      id: "a2-g9-11",
      type: "multiple-choice",
      question: "___ many brothers do you have?",
      options: ["How", "What", "Which", "Who"],
      correctAnswer: "How",
      explanation: "'How many' asks about quantity (countable nouns).",
      explanationSpanish: "'How many' pregunta sobre cantidad (sustantivos contables).",
      difficulty: 1,
      tags: ["grammar", "questions", "how-many"]
    },
    {
      id: "a2-g9-12",
      type: "multiple-choice",
      question: "___ much does this cost?",
      options: ["How", "What", "Which", "Why"],
      correctAnswer: "How",
      explanation: "'How much' asks about price or quantity (uncountable).",
      explanationSpanish: "'How much' pregunta sobre precio o cantidad (incontable).",
      difficulty: 1,
      tags: ["grammar", "questions", "how-much"]
    },
    {
      id: "a2-g9-13",
      type: "multiple-choice",
      question: "___ often do you exercise?",
      options: ["How", "What", "When", "Why"],
      correctAnswer: "How",
      explanation: "'How often' asks about frequency.",
      explanationSpanish: "'How often' pregunta sobre frecuencia.",
      difficulty: 1,
      tags: ["grammar", "questions", "frequency"]
    },
    {
      id: "a2-g9-14",
      type: "multiple-choice",
      question: "___ one do you prefer, the red or the blue?",
      options: ["Which", "What", "Who", "How"],
      correctAnswer: "Which",
      explanation: "'Which' is used when choosing between limited options.",
      explanationSpanish: "'Which' se usa al elegir entre opciones limitadas.",
      difficulty: 2,
      tags: ["grammar", "questions", "which"]
    },
    {
      id: "a2-g9-15",
      type: "multiple-choice",
      question: "___ old are you?",
      options: ["How", "What", "When", "Which"],
      correctAnswer: "How",
      explanation: "'How old' asks about age.",
      explanationSpanish: "'How old' pregunta sobre edad.",
      difficulty: 1,
      tags: ["grammar", "questions", "age"]
    },
  ],
};

// Export all A2 exercises
export const allA2Exercises = {
  vocabulary: a2VocabularyExercises,
  grammar: a2GrammarExercises,
};
