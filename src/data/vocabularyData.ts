export interface VocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
  learned: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  words: Word[];
}

export interface Word {
  id: string;
  english: string;
  definition: string;
  pronunciation: string;
  example: string;
  context: string;
  mastered: boolean;
}

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "greetings",
    title: "Greetings & Introductions",
    icon: "👋",
    wordCount: 25,
    learned: 0,
    level: "A1",
    words: [
      { id: "g1", english: "Hello", definition: "A common greeting used when meeting someone", pronunciation: "/həˈloʊ/", example: "Hello, how are you?", context: "Used in both formal and informal situations", mastered: false },
      { id: "g2", english: "Goodbye", definition: "A farewell expression when leaving", pronunciation: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow!", context: "Standard way to end a conversation", mastered: false },
      { id: "g3", english: "Good morning", definition: "A greeting used in the morning hours", pronunciation: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, everyone!", context: "Typically used before noon", mastered: false },
      { id: "g4", english: "Nice to meet you", definition: "A polite phrase when introduced to someone", pronunciation: "/naɪs tuː miːt juː/", example: "Nice to meet you. I'm John.", context: "Common response when meeting someone new", mastered: false },
      { id: "g5", english: "How are you?", definition: "A greeting asking about someone's wellbeing", pronunciation: "/haʊ ɑːr juː/", example: "Hi! How are you doing today?", context: "Often used as a casual greeting", mastered: false },
    ]
  },
  {
    id: "family",
    title: "Family",
    icon: "👨‍👩‍👧‍👦",
    wordCount: 30,
    learned: 0,
    level: "A1",
    words: [
      { id: "f1", english: "Mother", definition: "A female parent", pronunciation: "/ˈmʌðər/", example: "My mother is a teacher.", context: "Also called 'mom' or 'mum' informally", mastered: false },
      { id: "f2", english: "Father", definition: "A male parent", pronunciation: "/ˈfɑːðər/", example: "My father works at a bank.", context: "Also called 'dad' informally", mastered: false },
      { id: "f3", english: "Brother", definition: "A male sibling", pronunciation: "/ˈbrʌðər/", example: "I have two brothers.", context: "Shares at least one parent with you", mastered: false },
      { id: "f4", english: "Sister", definition: "A female sibling", pronunciation: "/ˈsɪstər/", example: "My sister lives in London.", context: "Shares at least one parent with you", mastered: false },
      { id: "f5", english: "Grandfather", definition: "The father of your parent", pronunciation: "/ˈɡrænfɑːðər/", example: "My grandfather is 80 years old.", context: "Also called 'grandpa' informally", mastered: false },
    ]
  },
  {
    id: "food",
    title: "Food & Drinks",
    icon: "🍕",
    wordCount: 50,
    learned: 0,
    level: "A1",
    words: [
      { id: "fd1", english: "Water", definition: "A clear liquid essential for life", pronunciation: "/ˈwɔːtər/", example: "Can I have some water, please?", context: "The most important drink for hydration", mastered: false },
      { id: "fd2", english: "Bread", definition: "A baked food made from flour and water", pronunciation: "/bred/", example: "I eat bread for breakfast.", context: "A staple food in many cultures", mastered: false },
      { id: "fd3", english: "Coffee", definition: "A hot drink made from roasted beans", pronunciation: "/ˈkɔːfi/", example: "I drink coffee every morning.", context: "Contains caffeine, popular morning beverage", mastered: false },
      { id: "fd4", english: "Delicious", definition: "Having a very pleasant taste", pronunciation: "/dɪˈlɪʃəs/", example: "This cake is delicious!", context: "Used to describe tasty food", mastered: false },
      { id: "fd5", english: "Restaurant", definition: "A place where meals are prepared and served", pronunciation: "/ˈrestərɒnt/", example: "Let's go to that new restaurant.", context: "Offers various types of cuisine", mastered: false },
    ]
  },
  {
    id: "travel",
    title: "Travel & Transport",
    icon: "✈️",
    wordCount: 45,
    learned: 0,
    level: "A2",
    words: [
      { id: "t1", english: "Airport", definition: "A place where planes take off and land", pronunciation: "/ˈeərpɔːrt/", example: "The airport is 30 minutes away.", context: "Includes terminals, runways, and check-in areas", mastered: false },
      { id: "t2", english: "Flight", definition: "A journey by aircraft", pronunciation: "/flaɪt/", example: "My flight leaves at 8 AM.", context: "Can be domestic or international", mastered: false },
      { id: "t3", english: "Passport", definition: "An official document for international travel", pronunciation: "/ˈpæspɔːrt/", example: "Don't forget your passport!", context: "Required for crossing borders", mastered: false },
      { id: "t4", english: "Luggage", definition: "Bags and suitcases for traveling", pronunciation: "/ˈlʌɡɪdʒ/", example: "I need to pick up my luggage.", context: "Also called 'baggage'", mastered: false },
      { id: "t5", english: "Reservation", definition: "An arrangement to have something held for you", pronunciation: "/ˌrezərˈveɪʃn/", example: "I have a reservation for tonight.", context: "Common for hotels and restaurants", mastered: false },
    ]
  },
  {
    id: "work",
    title: "Work & Office",
    icon: "💼",
    wordCount: 60,
    learned: 0,
    level: "A2",
    words: [
      { id: "w1", english: "Meeting", definition: "A gathering for discussion or decisions", pronunciation: "/ˈmiːtɪŋ/", example: "We have a meeting at 2 PM.", context: "Can be formal or informal", mastered: false },
      { id: "w2", english: "Deadline", definition: "The final time by which something must be done", pronunciation: "/ˈdedlaɪn/", example: "The deadline is next Monday.", context: "Important for project management", mastered: false },
      { id: "w3", english: "Colleague", definition: "A person you work with", pronunciation: "/ˈkɒliːɡ/", example: "My colleague helped me with the project.", context: "Also called 'coworker'", mastered: false },
      { id: "w4", english: "Salary", definition: "Regular payment for work", pronunciation: "/ˈsæləri/", example: "I received my salary today.", context: "Usually paid monthly", mastered: false },
      { id: "w5", english: "Interview", definition: "A formal meeting to assess a candidate", pronunciation: "/ˈɪntərvjuː/", example: "I have a job interview tomorrow.", context: "Part of the hiring process", mastered: false },
    ]
  },
  {
    id: "health",
    title: "Health & Body",
    icon: "🏥",
    wordCount: 40,
    learned: 0,
    level: "A2",
    words: [
      { id: "h1", english: "Headache", definition: "Pain in the head", pronunciation: "/ˈhedeɪk/", example: "I have a terrible headache.", context: "A common health complaint", mastered: false },
      { id: "h2", english: "Medicine", definition: "A substance used to treat illness", pronunciation: "/ˈmedɪsɪn/", example: "Did you take your medicine?", context: "Available by prescription or over-the-counter", mastered: false },
      { id: "h3", english: "Appointment", definition: "A scheduled meeting with a professional", pronunciation: "/əˈpɔɪntmənt/", example: "I have a doctor's appointment.", context: "Often requires advance booking", mastered: false },
      { id: "h4", english: "Symptom", definition: "A sign of illness or disease", pronunciation: "/ˈsɪmptəm/", example: "What are your symptoms?", context: "Helps doctors diagnose conditions", mastered: false },
      { id: "h5", english: "Exercise", definition: "Physical activity for health and fitness", pronunciation: "/ˈeksərsaɪz/", example: "I exercise three times a week.", context: "Important for maintaining health", mastered: false },
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    icon: "🛍️",
    wordCount: 35,
    learned: 0,
    level: "A2",
    words: [
      { id: "s1", english: "Price", definition: "The amount of money something costs", pronunciation: "/praɪs/", example: "What's the price of this shirt?", context: "Displayed on price tags", mastered: false },
      { id: "s2", english: "Discount", definition: "A reduction in the usual price", pronunciation: "/ˈdɪskaʊnt/", example: "Is there a discount?", context: "Common during sales", mastered: false },
      { id: "s3", english: "Receipt", definition: "A written record of a purchase", pronunciation: "/rɪˈsiːt/", example: "Can I have the receipt, please?", context: "Needed for returns or exchanges", mastered: false },
      { id: "s4", english: "Cash", definition: "Physical money in coins or notes", pronunciation: "/kæʃ/", example: "I'll pay in cash.", context: "Alternative to card payment", mastered: false },
      { id: "s5", english: "Size", definition: "The dimensions or magnitude of something", pronunciation: "/saɪz/", example: "What size do you wear?", context: "Important for clothing and shoes", mastered: false },
    ]
  },
  {
    id: "emotions",
    title: "Emotions & Feelings",
    icon: "😊",
    wordCount: 40,
    learned: 0,
    level: "B1",
    words: [
      { id: "e1", english: "Excited", definition: "Feeling eager enthusiasm and anticipation", pronunciation: "/ɪkˈsaɪtɪd/", example: "I'm so excited about the trip!", context: "A positive high-energy emotion", mastered: false },
      { id: "e2", english: "Disappointed", definition: "Sad because expectations were not met", pronunciation: "/ˌdɪsəˈpɔɪntɪd/", example: "I was disappointed with the result.", context: "Feeling let down", mastered: false },
      { id: "e3", english: "Anxious", definition: "Feeling worried or uneasy", pronunciation: "/ˈæŋkʃəs/", example: "She feels anxious before exams.", context: "Related to stress and worry", mastered: false },
      { id: "e4", english: "Grateful", definition: "Feeling thankful and appreciative", pronunciation: "/ˈɡreɪtfl/", example: "I'm grateful for your help.", context: "Expressing appreciation", mastered: false },
      { id: "e5", english: "Frustrated", definition: "Feeling upset due to obstacles", pronunciation: "/frʌˈstreɪtɪd/", example: "He's frustrated with his job.", context: "When things don't go as planned", mastered: false },
    ]
  },
  {
    id: "technology",
    title: "Technology",
    icon: "💻",
    wordCount: 50,
    learned: 0,
    level: "B1",
    words: [
      { id: "tech1", english: "Software", definition: "Programs and applications for computers", pronunciation: "/ˈsɒftweər/", example: "I need to update my software.", context: "Distinct from hardware", mastered: false },
      { id: "tech2", english: "Download", definition: "To transfer data from internet to device", pronunciation: "/ˌdaʊnˈloʊd/", example: "You can download the app for free.", context: "Opposite of upload", mastered: false },
      { id: "tech3", english: "Password", definition: "A secret word for accessing accounts", pronunciation: "/ˈpæswɜːrd/", example: "I forgot my password.", context: "Should be kept secure", mastered: false },
      { id: "tech4", english: "Browser", definition: "A program for accessing websites", pronunciation: "/ˈbraʊzər/", example: "Which browser do you use?", context: "Examples: Chrome, Firefox, Safari", mastered: false },
      { id: "tech5", english: "Wireless", definition: "Operating without physical cables", pronunciation: "/ˈwaɪərləs/", example: "Do you have wireless internet?", context: "Also known as Wi-Fi for internet", mastered: false },
    ]
  },
  {
    id: "environment",
    title: "Environment",
    icon: "🌍",
    wordCount: 45,
    learned: 0,
    level: "B2",
    words: [
      { id: "env1", english: "Pollution", definition: "Contamination of the environment", pronunciation: "/pəˈluːʃn/", example: "Air pollution is a serious problem.", context: "Affects air, water, and land", mastered: false },
      { id: "env2", english: "Sustainable", definition: "Able to be maintained without depleting resources", pronunciation: "/səˈsteɪnəbl/", example: "We need sustainable solutions.", context: "Key concept in environmentalism", mastered: false },
      { id: "env3", english: "Renewable", definition: "Able to be replenished naturally", pronunciation: "/rɪˈnuːəbl/", example: "Solar power is a renewable energy.", context: "Opposite of fossil fuels", mastered: false },
      { id: "env4", english: "Biodiversity", definition: "The variety of life in an ecosystem", pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsəti/", example: "We must protect biodiversity.", context: "Includes all living organisms", mastered: false },
      { id: "env5", english: "Ecosystem", definition: "A community of living things and their environment", pronunciation: "/ˈiːkoʊsɪstəm/", example: "The forest is a complex ecosystem.", context: "Includes plants, animals, and their habitat", mastered: false },
    ]
  },
];
