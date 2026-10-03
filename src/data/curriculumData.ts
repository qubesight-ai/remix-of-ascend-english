export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Skill {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  subSkills: SubSkill[];
}

export interface SubSkill {
  id: string;
  title: string;
  completed: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface LevelCurriculum {
  level: CEFRLevel;
  title: string;
  description: string;
  targetVocabulary: string;
  estimatedHours: number;
  categories: SkillCategory[];
}

export const curriculumData: LevelCurriculum[] = [
  {
    level: "A1",
    title: "Beginner",
    description: "Basic communication for simple everyday situations",
    targetVocabulary: "500-700 words",
    estimatedHours: 80,
    categories: [
      {
        id: "a1-vocabulary",
        title: "Vocabulary",
        icon: "📚",
        description: "Essential words for survival",
        skills: [
          {
            id: "a1-vocab-1",
            title: "Numbers & Counting",
            description: "Numbers 1-100, spelling, teen vs ty, sequences, math problems",
            completed: false,
            subSkills: [
              { id: "a1-v1-1", title: "one", completed: false },
              { id: "a1-v1-2", title: "twelve", completed: false },
              { id: "a1-v1-3", title: "twenty", completed: false },
              { id: "a1-v1-4", title: "hundred", completed: false },
            ]
          },
          {
            id: "a1-vocab-2",
            title: "Colors",
            description: "Red, Blue, Green, Yellow, Orange, Purple, Black, White, Brown, Pink",
            completed: false,
            subSkills: [
              { id: "a1-v2-1", title: "red", completed: false },
              { id: "a1-v2-2", title: "blue", completed: false },
              { id: "a1-v2-3", title: "green", completed: false },
              { id: "a1-v2-4", title: "yellow", completed: false },
            ]
          },
          {
            id: "a1-vocab-3",
            title: "Family Members",
            description: "Mother, Father, Brother, Sister, Son, Daughter, Grandparents",
            completed: false,
            subSkills: [
              { id: "a1-v3-1", title: "mother", completed: false },
              { id: "a1-v3-2", title: "father", completed: false },
              { id: "a1-v3-3", title: "brother", completed: false },
              { id: "a1-v3-4", title: "grandmother", completed: false },
            ]
          },
          {
            id: "a1-vocab-4",
            title: "Basic Food",
            description: "Bread, Milk, Apple, Rice, Egg, Cheese, Chicken, Fish, Banana, Tomato",
            completed: false,
            subSkills: [
              { id: "a1-v4-1", title: "bread", completed: false },
              { id: "a1-v4-2", title: "apple", completed: false },
              { id: "a1-v4-3", title: "rice", completed: false },
              { id: "a1-v4-4", title: "egg", completed: false },
            ]
          },
          {
            id: "a1-vocab-5",
            title: "Beverages",
            description: "Water, Coffee, Tea, Juice, Soda, Milk, ordering at a cafe",
            completed: false,
            subSkills: [
              { id: "a1-v5-1", title: "water", completed: false },
              { id: "a1-v5-2", title: "coffee", completed: false },
              { id: "a1-v5-3", title: "tea", completed: false },
              { id: "a1-v5-4", title: "juice", completed: false },
            ]
          },
          {
            id: "a1-vocab-6",
            title: "Common Animals",
            description: "Dog, Cat, Bird, Fish, Cow, Horse, Pig, Chicken, Lion, Elephant",
            completed: false,
            subSkills: [
              { id: "a1-v6-1", title: "dog", completed: false },
              { id: "a1-v6-2", title: "cat", completed: false },
              { id: "a1-v6-3", title: "bird", completed: false },
              { id: "a1-v6-4", title: "elephant", completed: false },
            ]
          },
          {
            id: "a1-vocab-7",
            title: "Body Parts",
            description: "Head, Eye, Ear, Nose, Mouth, Hand, Arm, Leg, Foot, Finger",
            completed: false,
            subSkills: [
              { id: "a1-v7-1", title: "head", completed: false },
              { id: "a1-v7-2", title: "eye", completed: false },
              { id: "a1-v7-3", title: "hand", completed: false },
              { id: "a1-v7-4", title: "foot", completed: false },
            ]
          },
          {
            id: "a1-vocab-8",
            title: "Basic Clothing",
            description: "Shirt, Pants, Shoes, Hat, Dress, Coat, Socks, Skirt",
            completed: false,
            subSkills: [
              { id: "a1-v8-1", title: "shirt", completed: false },
              { id: "a1-v8-2", title: "pants", completed: false },
              { id: "a1-v8-3", title: "shoes", completed: false },
              { id: "a1-v8-4", title: "hat", completed: false },
            ]
          },
          {
            id: "a1-vocab-9",
            title: "Rooms & Home",
            description: "Bedroom, Kitchen, Bathroom, Living room, Garden, Garage, Door, Window",
            completed: false,
            subSkills: [
              { id: "a1-v9-1", title: "bedroom", completed: false },
              { id: "a1-v9-2", title: "kitchen", completed: false },
              { id: "a1-v9-3", title: "bathroom", completed: false },
              { id: "a1-v9-4", title: "living room", completed: false },
            ]
          },
          {
            id: "a1-vocab-10",
            title: "Basic Furniture",
            description: "Table, Chair, Bed, Sofa, Lamp, Desk, Shelf, Wardrobe",
            completed: false,
            subSkills: [
              { id: "a1-v10-1", title: "table", completed: false },
              { id: "a1-v10-2", title: "chair", completed: false },
              { id: "a1-v10-3", title: "bed", completed: false },
              { id: "a1-v10-4", title: "sofa", completed: false },
            ]
          },
          {
            id: "a1-vocab-11",
            title: "Days of the Week",
            description: "The seven days of the week",
            completed: false,
            subSkills: [
              { id: "a1-v11-1", title: "Monday", completed: false },
              { id: "a1-v11-2", title: "Wednesday", completed: false },
              { id: "a1-v11-3", title: "Friday", completed: false },
              { id: "a1-v11-4", title: "Sunday", completed: false },
            ]
          },
          {
            id: "a1-vocab-12",
            title: "Months of the Year",
            description: "The twelve months and seasons",
            completed: false,
            subSkills: [
              { id: "a1-v12-1", title: "January", completed: false },
              { id: "a1-v12-2", title: "April", completed: false },
              { id: "a1-v12-3", title: "July", completed: false },
              { id: "a1-v12-4", title: "December", completed: false },
            ]
          },
          {
            id: "a1-vocab-13",
            title: "Basic Weather",
            description: "Weather conditions: sunny, rainy, cloudy, hot, cold, windy",
            completed: false,
            subSkills: [
              { id: "a1-v13-1", title: "sunny", completed: false },
              { id: "a1-v13-2", title: "rainy", completed: false },
              { id: "a1-v13-3", title: "cold", completed: false },
              { id: "a1-v13-4", title: "hot", completed: false },
            ]
          },
          {
            id: "a1-vocab-14",
            title: "School & Classroom",
            description: "School vocabulary: teacher, student, book, pencil, desk, classroom",
            completed: false,
            subSkills: [
              { id: "a1-v14-1", title: "teacher", completed: false },
              { id: "a1-v14-2", title: "student", completed: false },
              { id: "a1-v14-3", title: "book", completed: false },
              { id: "a1-v14-4", title: "pencil", completed: false },
            ]
          },
          {
            id: "a1-vocab-15",
            title: "Basic Jobs",
            description: "Common professions: doctor, teacher, police, driver, nurse",
            completed: false,
            subSkills: [
              { id: "a1-v15-1", title: "doctor", completed: false },
              { id: "a1-v15-2", title: "teacher", completed: false },
              { id: "a1-v15-3", title: "police officer", completed: false },
              { id: "a1-v15-4", title: "nurse", completed: false },
            ]
          },
          {
            id: "a1-vocab-16",
            title: "Basic Transportation",
            description: "Ways to travel: car, bus, train, bicycle, airplane",
            completed: false,
            subSkills: [
              { id: "a1-v16-1", title: "car", completed: false },
              { id: "a1-v16-2", title: "bus", completed: false },
              { id: "a1-v16-3", title: "train", completed: false },
              { id: "a1-v16-4", title: "airplane", completed: false },
            ]
          },
          {
            id: "a1-vocab-17",
            title: "Greetings & Phrases",
            description: "Common greetings: hello, goodbye, please, thank you, sorry",
            completed: false,
            subSkills: [
              { id: "a1-v17-1", title: "hello", completed: false },
              { id: "a1-v17-2", title: "goodbye", completed: false },
              { id: "a1-v17-3", title: "please", completed: false },
              { id: "a1-v17-4", title: "thank you", completed: false },
            ]
          },
          {
            id: "a1-vocab-18",
            title: "Basic Places",
            description: "Common locations: school, hospital, store, park, restaurant",
            completed: false,
            subSkills: [
              { id: "a1-v18-1", title: "school", completed: false },
              { id: "a1-v18-2", title: "hospital", completed: false },
              { id: "a1-v18-3", title: "store", completed: false },
              { id: "a1-v18-4", title: "park", completed: false },
            ]
          },
          {
            id: "a1-vocab-19",
            title: "Basic Action Verbs",
            description: "Common action words: eat, drink, sleep, walk, run, read",
            completed: false,
            subSkills: [
              { id: "a1-v19-1", title: "eat", completed: false },
              { id: "a1-v19-2", title: "drink", completed: false },
              { id: "a1-v19-3", title: "sleep", completed: false },
              { id: "a1-v19-4", title: "walk", completed: false },
            ]
          },
          {
            id: "a1-vocab-20",
            title: "Basic Adjectives",
            description: "Simple describing words: big, small, happy, sad, good, bad",
            completed: false,
            subSkills: [
              { id: "a1-v20-1", title: "big", completed: false },
              { id: "a1-v20-2", title: "small", completed: false },
              { id: "a1-v20-3", title: "happy", completed: false },
              { id: "a1-v20-4", title: "good", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-grammar",
        title: "Grammar",
        icon: "🧩",
        description: "Core English structures with 100 exercises",
        skills: [
          {
            id: "a1-gram-1",
            title: "Verb To Be",
            description: "Affirmative, negative, and interrogative forms (20 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-g1-1", title: "Affirmative: am/is/are", completed: false },
              { id: "a1-g1-2", title: "Negative: am not/is not/are not", completed: false },
              { id: "a1-g1-3", title: "Interrogative: questions & short answers", completed: false },
              { id: "a1-g1-4", title: "Wh-questions: Where/What/Who", completed: false },
            ]
          },
          {
            id: "a1-gram-2",
            title: "Present Simple",
            description: "Routines, habits, and the 3rd person -s rule (15 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-g2-1", title: "Base form with I/you/we/they", completed: false },
              { id: "a1-g2-2", title: "Third person -s/-es/-ies", completed: false },
              { id: "a1-g2-3", title: "Negative: don't/doesn't", completed: false },
              { id: "a1-g2-4", title: "Questions: Do/Does", completed: false },
            ]
          },
          {
            id: "a1-gram-3",
            title: "Present Continuous",
            description: "Actions happening right now (15 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-g3-1", title: "Forming: am/is/are + verb-ing", completed: false },
              { id: "a1-g3-2", title: "Negative: am not/is not/are not + -ing", completed: false },
              { id: "a1-g3-3", title: "Questions: Is/Are + subject + -ing", completed: false },
              { id: "a1-g3-4", title: "Time markers: now, at the moment, Look!", completed: false },
            ]
          },
          {
            id: "a1-gram-4",
            title: "Articles and Pronouns",
            description: "A/An, The, and personal pronouns I/You/He/She/It/We/They (50 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-g4-1", title: "A vs An (vowel sounds)", completed: false },
              { id: "a1-g4-2", title: "Using The (specific/unique)", completed: false },
              { id: "a1-g4-3", title: "Subject pronouns: I, You, He, She, It, We, They", completed: false },
              { id: "a1-g4-4", title: "Pronoun-noun matching", completed: false },
              { id: "a1-g4-5", title: "Sentence construction", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-speaking",
        title: "Speaking",
        icon: "🗣️",
        description: "Communicate in simple situations with 50 exercises",
        skills: [
          {
            id: "a1-speak-1",
            title: "Introduce Yourself",
            description: "Name, age, nationality, profession (20 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-s1-1", title: "Personal information exchange", completed: false },
              { id: "a1-s1-2", title: "Age expressions (I am X years old)", completed: false },
              { id: "a1-s1-3", title: "Nationality vs Country", completed: false },
              { id: "a1-s1-4", title: "Profession (I am a / I work as)", completed: false },
              { id: "a1-s1-5", title: "Roleplay scenarios", completed: false },
            ]
          },
          {
            id: "a1-speak-2",
            title: "Greetings and Farewells",
            description: "Hello, goodbye, nice to meet you (15 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-s2-1", title: "Time-based greetings (morning/afternoon/evening)", completed: false },
              { id: "a1-s2-2", title: "Farewell expressions", completed: false },
              { id: "a1-s2-3", title: "Formal vs informal greetings", completed: false },
              { id: "a1-s2-4", title: "Response patterns (Nice to meet you too)", completed: false },
            ]
          },
          {
            id: "a1-speak-3",
            title: "Ask for Basic Things",
            description: "Can I have...? Where is...? (15 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-s3-1", title: "Polite requests (Can I have...)", completed: false },
              { id: "a1-s3-2", title: "Asking for location (Where is...)", completed: false },
              { id: "a1-s3-3", title: "Politeness words (please, thank you)", completed: false },
              { id: "a1-s3-4", title: "Context dialogues", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-listening",
        title: "Listening Comprehension",
        icon: "👂",
        description: "Understand simple, clear messages",
        skills: [
          {
            id: "a1-listen-1",
            title: "Individual Words",
            description: "Recognize numbers, names, places, and minimal pairs (25 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-l1-1", title: "Numbers & Spelling (18 vs 80)", completed: false },
              { id: "a1-l1-2", title: "Places & Common Nouns", completed: false },
              { id: "a1-l1-3", title: "Minimal Pairs (ship/sheep, pen/pan)", completed: false },
              { id: "a1-l1-4", title: "Names & Nationalities", completed: false },
            ]
          },
          {
            id: "a1-listen-2",
            title: "Simple Instructions",
            description: "Classroom commands and everyday requests (25 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-l2-1", title: "Classroom Commands (open, close, sit)", completed: false },
              { id: "a1-l2-2", title: "Directional Instructions (left, right, stop)", completed: false },
              { id: "a1-l2-3", title: "Sequential Instructions (first/then)", completed: false },
              { id: "a1-l2-4", title: "Everyday Requests (wait, help, come)", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-reading",
        title: "Reading Comprehension",
        icon: "📖",
        description: "Read very short, simple texts",
        skills: [
          {
            id: "a1-read-1",
            title: "Signs and Notices",
            description: "Public safety, business status, and directions (25 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-r1-1", title: "Business & Safety Status (Open, Closed, Danger)", completed: false },
              { id: "a1-r1-2", title: "Traffic & Directions (Stop, One Way)", completed: false },
              { id: "a1-r1-3", title: "Store & Service Signs (Sale, Reserved)", completed: false },
              { id: "a1-r1-4", title: "Contextual Matching", completed: false },
            ]
          },
          {
            id: "a1-read-2",
            title: "Simple Forms",
            description: "Filling out personal data for apps, hotels, or clinics (25 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-r2-1", title: "Data Identification (First Name, DOB)", completed: false },
              { id: "a1-r2-2", title: "Reading Completed Forms", completed: false },
              { id: "a1-r2-3", title: "Categorization (Address vs City)", completed: false },
              { id: "a1-r2-4", title: "Practical Application", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-writing",
        title: "Writing",
        icon: "✍️",
        description: "Write phrases and personal data",
        skills: [
          {
            id: "a1-write-1",
            title: "Personal Data",
            description: "Writing name, address, email, and contact details correctly (25 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-w1-1", title: "Field Identification & Capitalization", completed: false },
              { id: "a1-w1-2", title: "Form Completion Tasks", completed: false },
              { id: "a1-w1-3", title: "Contextual Data (Hotel Forms)", completed: false },
              { id: "a1-w1-4", title: "Error Correction", completed: false },
            ]
          },
          {
            id: "a1-write-2",
            title: "Short Sentences",
            description: "Creating simple sentences using SVO structure (25 exercises)",
            completed: false,
            subSkills: [
              { id: "a1-w2-1", title: "Word Order (SVO)", completed: false },
              { id: "a1-w2-2", title: "Fill in the Missing Piece", completed: false },
              { id: "a1-w2-3", title: "Sentence Transformation", completed: false },
              { id: "a1-w2-4", title: "Punctuation & Free Writing", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "A2",
    title: "Elementary",
    description: "Communication in everyday situations with more confidence",
    targetVocabulary: "1,000-1,500 words",
    estimatedHours: 180,
    categories: [
      {
        id: "a2-vocabulary",
        title: "Vocabulary",
        icon: "📚",
        description: "Vocabulary for everyday situations",
        skills: [
          {
            id: "a2-vocab-1",
            title: "Daily routines",
            description: "Wake up, work, study, cook, relax",
            completed: false,
            subSkills: [
              { id: "a2-v1-1", title: "Morning activities", completed: false },
              { id: "a2-v1-2", title: "Afternoon/evening activities", completed: false },
            ]
          },
          {
            id: "a2-vocab-2",
            title: "Shopping and prices",
            description: "Shopping, prices, payment",
            completed: false,
            subSkills: [
              { id: "a2-v2-1", title: "Types of shops", completed: false },
              { id: "a2-v2-2", title: "Prices and discounts", completed: false },
              { id: "a2-v2-3", title: "Payment methods", completed: false },
            ]
          },
          {
            id: "a2-vocab-3",
            title: "Places and directions",
            description: "Town places, giving directions",
            completed: false,
            subSkills: [
              { id: "a2-v3-1", title: "City buildings", completed: false },
              { id: "a2-v3-2", title: "Prepositions of place", completed: false },
              { id: "a2-v3-3", title: "Giving directions", completed: false },
            ]
          },
          {
            id: "a2-vocab-4",
            title: "Travel and transport",
            description: "Travel, transport, booking",
            completed: false,
            subSkills: [
              { id: "a2-v4-1", title: "Means of transport", completed: false },
              { id: "a2-v4-2", title: "At the airport", completed: false },
              { id: "a2-v4-3", title: "At the hotel", completed: false },
            ]
          },
          {
            id: "a2-vocab-5",
            title: "Hobbies and free time",
            description: "Hobbies, sports, entertainment",
            completed: false,
            subSkills: [
              { id: "a2-v5-1", title: "Sports", completed: false },
              { id: "a2-v5-2", title: "Leisure activities", completed: false },
            ]
          },
          {
            id: "a2-vocab-6",
            title: "Basic health",
            description: "Basic symptoms, doctor visit",
            completed: false,
            subSkills: [
              { id: "a2-v6-1", title: "Body parts", completed: false },
              { id: "a2-v6-2", title: "Common symptoms", completed: false },
            ]
          },
          {
            id: "a2-vocab-7",
            title: "Weather and seasons",
            description: "Weather, seasons, clothes",
            completed: false,
            subSkills: [
              { id: "a2-v7-1", title: "Types of weather", completed: false },
              { id: "a2-v7-2", title: "The seasons", completed: false },
            ]
          },
          {
            id: "a2-vocab-8",
            title: "Common adjectives",
            description: "Big/small, easy/difficult, fast/slow",
            completed: false,
            subSkills: [
              { id: "a2-v8-1", title: "Size adjectives", completed: false },
              { id: "a2-v8-2", title: "Personality adjectives", completed: false },
              { id: "a2-v8-3", title: "Opposite adjectives", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-grammar",
        title: "Grammar",
        icon: "🧩",
        description: "From short phrases to connected sentences",
        skills: [
          {
            id: "a2-gram-1",
            title: "Past Simple",
            description: "Completed actions in the past",
            completed: false,
            subSkills: [
              { id: "a2-g1-1", title: "Regular verbs (-ed)", completed: false },
              { id: "a2-g1-2", title: "Common irregular verbs", completed: false },
              { id: "a2-g1-3", title: "Did in questions and negatives", completed: false },
            ]
          },
          {
            id: "a2-gram-2",
            title: "Present Perfect (basic)",
            description: "Experiences and recent actions",
            completed: false,
            subSkills: [
              { id: "a2-g2-1", title: "Have/Has + past participle", completed: false },
              { id: "a2-g2-2", title: "Ever/Never/Just", completed: false },
            ]
          },
          {
            id: "a2-gram-10",
            title: "Present Perfect vs Past Simple",
            description: "Choose the right tense using time expressions and context",
            completed: false,
            subSkills: [
              { id: "a2-g10-1", title: "Finished time vs unfinished time", completed: false },
              { id: "a2-g10-2", title: "Ever/never vs yesterday/last week", completed: false },
              { id: "a2-g10-3", title: "Questions: Have you ever...? / Did you...?", completed: false },
            ]
          },
          {
            id: "a2-gram-3",
            title: "Future with 'going to'",
            description: "Future plans and intentions",
            completed: false,
            subSkills: [
              { id: "a2-g3-1", title: "Decided plans", completed: false },
              { id: "a2-g3-2", title: "Predictions with evidence", completed: false },
            ]
          },
          {
            id: "a2-gram-4",
            title: "There is / There are",
            description: "Describe existence and location",
            completed: false,
            subSkills: [
              { id: "a2-g4-1", title: "Singular vs plural", completed: false },
              { id: "a2-g4-2", title: "Some/Any/A lot of", completed: false },
            ]
          },
          {
            id: "a2-gram-5",
            title: "Countable and uncountable",
            description: "A/An, Some, Any, Much, Many",
            completed: false,
            subSkills: [
              { id: "a2-g5-1", title: "Identify countable nouns", completed: false },
              { id: "a2-g5-2", title: "How much vs How many", completed: false },
            ]
          },
          {
            id: "a2-gram-6",
            title: "Comparatives and superlatives",
            description: "Bigger, the best, more interesting",
            completed: false,
            subSkills: [
              { id: "a2-g6-1", title: "Form comparatives", completed: false },
              { id: "a2-g6-2", title: "Form superlatives", completed: false },
              { id: "a2-g6-3", title: "Irregulars: good, bad, far", completed: false },
            ]
          },
          {
            id: "a2-gram-7",
            title: "Basic modals",
            description: "Can, must, should for permissions and advice",
            completed: false,
            subSkills: [
              { id: "a2-g7-1", title: "Can for ability/permission", completed: false },
              { id: "a2-g7-2", title: "Must for obligation", completed: false },
              { id: "a2-g7-3", title: "Should for advice", completed: false },
            ]
          },
          {
            id: "a2-gram-8",
            title: "Prepositions",
            description: "In, on, at, under, next to, between",
            completed: false,
            subSkills: [
              { id: "a2-g8-1", title: "Time prepositions", completed: false },
              { id: "a2-g8-2", title: "Place prepositions", completed: false },
            ]
          },
          {
            id: "a2-gram-9",
            title: "Question formation",
            description: "Do you like...? Where are you from?",
            completed: false,
            subSkills: [
              { id: "a2-g9-1", title: "Wh- questions", completed: false },
              { id: "a2-g9-2", title: "Yes/No questions", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-speaking",
        title: "Speaking",
        icon: "🗣️",
        description: "From short answers to brief conversations",
        skills: [
          {
            id: "a2-speak-1",
            title: "Introduce others",
            description: "Introducing friends, family, colleagues",
            completed: false,
            subSkills: [
              { id: "a2-s1-1", title: "This is my friend...", completed: false },
              { id: "a2-s1-2", title: "Describe relationships", completed: false },
            ]
          },
          {
            id: "a2-speak-2",
            title: "Talk about routines",
            description: "Daily life, habits, schedules",
            completed: false,
            subSkills: [
              { id: "a2-s2-1", title: "My typical day", completed: false },
              { id: "a2-s2-2", title: "Weekends", completed: false },
            ]
          },
          {
            id: "a2-speak-3",
            title: "Describe past experiences",
            description: "Tell about vacations, events",
            completed: false,
            subSkills: [
              { id: "a2-s3-1", title: "My last vacation", completed: false },
              { id: "a2-s3-2", title: "A special day", completed: false },
            ]
          },
          {
            id: "a2-speak-4",
            title: "Ask for and give directions",
            description: "How do I get to...? Turn left...",
            completed: false,
            subSkills: [
              { id: "a2-s4-1", title: "Ask how to get somewhere", completed: false },
              { id: "a2-s4-2", title: "Explain the way", completed: false },
            ]
          },
          {
            id: "a2-speak-5",
            title: "Shop and order food",
            description: "Order food, shopping interaction",
            completed: false,
            subSkills: [
              { id: "a2-s5-1", title: "At the restaurant", completed: false },
              { id: "a2-s5-2", title: "At the shop", completed: false },
            ]
          },
          {
            id: "a2-speak-6",
            title: "Make plans",
            description: "Making arrangements, invitations",
            completed: false,
            subSkills: [
              { id: "a2-s6-1", title: "Invite someone", completed: false },
              { id: "a2-s6-2", title: "Agree on time and place", completed: false },
            ]
          },
          {
            id: "a2-speak-7",
            title: "Express likes",
            description: "I like, I don't like, I prefer",
            completed: false,
            subSkills: [
              { id: "a2-s7-1", title: "I like / I don't like", completed: false },
              { id: "a2-s7-2", title: "Compare preferences", completed: false },
            ]
          },
          {
            id: "a2-speak-8",
            title: "Ask for clarification",
            description: "Can you repeat? What does... mean?",
            completed: false,
            subSkills: [
              { id: "a2-s8-1", title: "Ask for repetition", completed: false },
              { id: "a2-s8-2", title: "Check understanding", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-listening",
        title: "Listening Comprehension",
        icon: "👂",
        description: "Understand simple messages in everyday situations",
        skills: [
          {
            id: "a2-list-1",
            title: "Slow, clear conversations",
            description: "Understanding slow, clear speech",
            completed: false,
            subSkills: [
              { id: "a2-l1-1", title: "Shop dialogues", completed: false },
              { id: "a2-l1-2", title: "Restaurant dialogues", completed: false },
            ]
          },
          {
            id: "a2-list-2",
            title: "Simple instructions",
            description: "Following simple directions",
            completed: false,
            subSkills: [
              { id: "a2-l2-1", title: "Street directions", completed: false },
              { id: "a2-l2-2", title: "Classroom instructions", completed: false },
            ]
          },
          {
            id: "a2-list-3",
            title: "Basic announcements",
            description: "Time, place, prices announcements",
            completed: false,
            subSkills: [
              { id: "a2-l3-1", title: "Airport announcements", completed: false },
              { id: "a2-l3-2", title: "Store announcements", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-reading",
        title: "Reading Comprehension",
        icon: "📖",
        description: "From sentences to short texts",
        skills: [
          {
            id: "a2-read-1",
            title: "Emails and short messages",
            description: "Short emails, text messages",
            completed: false,
            subSkills: [
              { id: "a2-r1-1", title: "Informal emails", completed: false },
              { id: "a2-r1-2", title: "Text messages", completed: false },
            ]
          },
          {
            id: "a2-read-2",
            title: "Menus and schedules",
            description: "Menus, schedules, timetables",
            completed: false,
            subSkills: [
              { id: "a2-r2-1", title: "Restaurant menus", completed: false },
              { id: "a2-r2-2", title: "Transport schedules", completed: false },
            ]
          },
          {
            id: "a2-read-3",
            title: "Simple stories",
            description: "Simple stories, graded readers",
            completed: false,
            subSkills: [
              { id: "a2-r3-1", title: "Short stories", completed: false },
              { id: "a2-r3-2", title: "People descriptions", completed: false },
            ]
          },
          {
            id: "a2-read-4",
            title: "Ads and advertisements",
            description: "Ads, flyers, simple advertisements",
            completed: false,
            subSkills: [
              { id: "a2-r4-1", title: "Job ads", completed: false },
              { id: "a2-r4-2", title: "Product advertising", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-writing",
        title: "Writing",
        icon: "✍️",
        description: "From filling gaps to short paragraphs",
        skills: [
          {
            id: "a2-write-1",
            title: "Simple emails and messages",
            description: "Simple emails, thank you notes",
            completed: false,
            subSkills: [
              { id: "a2-w1-1", title: "Email to a friend", completed: false },
              { id: "a2-w1-2", title: "Thank you message", completed: false },
            ]
          },
          {
            id: "a2-write-2",
            title: "Short descriptions",
            description: "Describing people, places",
            completed: false,
            subSkills: [
              { id: "a2-w2-1", title: "Describe a person", completed: false },
              { id: "a2-w2-2", title: "Describe your home", completed: false },
            ]
          },
          {
            id: "a2-write-3",
            title: "Routines and habits",
            description: "Writing about daily life",
            completed: false,
            subSkills: [
              { id: "a2-w3-1", title: "My typical day", completed: false },
              { id: "a2-w3-2", title: "My hobbies", completed: false },
            ]
          },
          {
            id: "a2-write-4",
            title: "Past events",
            description: "Simple past narratives",
            completed: false,
            subSkills: [
              { id: "a2-w4-1", title: "My last vacation", completed: false },
              { id: "a2-w4-2", title: "A special day", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-strategies",
        title: "Learning Strategies",
        icon: "🧭",
        description: "Techniques to improve your learning",
        skills: [
          {
            id: "a2-strat-1",
            title: "Ask for help",
            description: "Asking for repetition, help",
            completed: false,
            subSkills: [
              { id: "a2-st1-1", title: "Can you repeat?", completed: false },
              { id: "a2-st1-2", title: "What does X mean?", completed: false },
            ]
          },
          {
            id: "a2-strat-2",
            title: "Paraphrase",
            description: "Using simple words when you don't know a word",
            completed: false,
            subSkills: [
              { id: "a2-st2-1", title: "Describe unknown objects", completed: false },
            ]
          },
          {
            id: "a2-strat-3",
            title: "Self-correction",
            description: "Fixing basic mistakes yourself",
            completed: false,
            subSkills: [
              { id: "a2-st3-1", title: "Recognize common mistakes", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "B1",
    title: "Intermediate",
    description: "Independent user: you think in English, explain why, not just what",
    targetVocabulary: "2,500-3,000 words",
    estimatedHours: 400,
    categories: [
      {
        id: "b1-vocabulary",
        title: "Vocabulary",
        icon: "📚",
        description: "Education, Business, Politics, Environment, Media",
        skills: [
          {
            id: "b1-vocab-1",
            title: "Education & Learning",
            description: "Curriculum, assignment, research, graduate, scholarship, tuition, thesis, deadline",
            completed: false,
            subSkills: [
              { id: "b1-v1-1", title: "Definitions & collocations", completed: false },
              { id: "b1-v1-2", title: "Academic phrasal verbs", completed: false },
              { id: "b1-v1-3", title: "Logic & degrees", completed: false },
            ]
          },
          {
            id: "b1-vocab-2",
            title: "Business & Commerce",
            description: "Negotiate, contract, profit, investment, budget, strategy, revenue",
            completed: false,
            subSkills: [
              { id: "b1-v2-1", title: "Professional terms & logic", completed: false },
              { id: "b1-v2-2", title: "Business idioms", completed: false },
            ]
          },
          {
            id: "b1-vocab-3",
            title: "Politics & Government",
            description: "Election, democracy, vote, policy, candidate, citizen, government",
            completed: false,
            subSkills: [
              { id: "b1-v3-1", title: "Civic vocabulary & systems", completed: false },
              { id: "b1-v3-2", title: "Collocations & debate", completed: false },
            ]
          },
          {
            id: "b1-vocab-4",
            title: "Environment & Ecology",
            description: "Pollution, recycle, climate change, renewable, sustainable, waste, habitat",
            completed: false,
            subSkills: [
              { id: "b1-v4-1", title: "Environmental terms", completed: false },
              { id: "b1-v4-2", title: "Cause, effect & eco-logic", completed: false },
            ]
          },
          {
            id: "b1-vocab-5",
            title: "Media & Journalism",
            description: "Headline, broadcast, journalist, article, source, fake news, interview",
            completed: false,
            subSkills: [
              { id: "b1-v5-1", title: "Newsroom vocabulary", completed: false },
              { id: "b1-v5-2", title: "Media literacy & verbs", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-grammar",
        title: "Grammar",
        icon: "🧩",
        description: "Past Simple, Present Perfect, and Future with Going to for storytelling and planning",
        skills: [
          {
            id: "b1-gram-1",
            title: "Past Simple",
            description: "Regular verbs (-ed), irregular verbs, negatives (didn't), and questions (did)",
            completed: false,
            subSkills: [
              { id: "b1-g1-1", title: "Regular verbs (-ed)", completed: false },
              { id: "b1-g1-2", title: "Irregular verbs (memorization)", completed: false },
              { id: "b1-g1-3", title: "Negatives (did not / didn't)", completed: false },
              { id: "b1-g1-4", title: "Questions (Did...?)", completed: false },
              { id: "b1-g1-5", title: "Transformation and contextual narrative", completed: false },
            ]
          },
          {
            id: "b1-gram-2",
            title: "Present Perfect (Basic)",
            description: "Have/Has + Past Participle, Experiences, Ever/Never",
            completed: false,
            subSkills: [
              { id: "b1-g2-1", title: "Form (Have/Has + Participle)", completed: false },
              { id: "b1-g2-2", title: "Ever and Never (Experiences)", completed: false },
              { id: "b1-g2-3", title: "Just (Recent Actions)", completed: false },
              { id: "b1-g2-4", title: "Negatives and Questions", completed: false },
              { id: "b1-g2-5", title: "Sentence Building and Conjugation", completed: false },
            ]
          },
          {
            id: "b1-gram-3",
            title: "Present Perfect vs Past Simple",
            description: "Choosing the right tense based on time context (Finished vs Unfinished time)",
            completed: false,
            subSkills: [
              { id: "b1-g3-1", title: "Time expressions (the clues)", completed: false },
              { id: "b1-g3-2", title: "Choose the correct verb", completed: false },
              { id: "b1-g3-3", title: "Dialogue context", completed: false },
              { id: "b1-g3-4", title: "Error correction", completed: false },
              { id: "b1-g3-5", title: "Mixed drill", completed: false },
            ]
          },
          {
            id: "b1-gram-4",
            title: "Future with 'Going to'",
            description: "Plans, intentions, and predictions based on evidence",
            completed: false,
            subSkills: [
              { id: "b1-g4-1", title: "Form (Be + Going to + Verb)", completed: false },
              { id: "b1-g4-2", title: "Plans vs Random Future", completed: false },
              { id: "b1-g4-3", title: "Predictions with evidence", completed: false },
              { id: "b1-g4-4", title: "Scrambled sentences", completed: false },
              { id: "b1-g4-5", title: "Personal plans", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-speaking",
        title: "Speaking",
        icon: "🗣️",
        description: "Replaced by enhanced curriculum (6 themes, 300 exercises)",
        skills: [] // Overridden by enhancedCurriculumData from speakingCurriculumComplete.ts
      },
      {
        id: "b1-listening",
        title: "Listening Comprehension",
        icon: "👂",
        description: "From classroom English to authentic real-world English",
        skills: [
          {
            id: "b1-list-1",
            title: "Art & Culture",
            description: "Exhibition, sculpture, masterpiece, gallery, abstract, heritage, contemporary",
            completed: false,
            subSkills: [
              { id: "b1-l1-1", title: "Artistic Vocabulary", completed: false },
              { id: "b1-l1-2", title: "Cultural Heritage", completed: false },
              { id: "b1-l1-3", title: "Describing Art (Adjectives)", completed: false },
              { id: "b1-l1-4", title: "Art Movements", completed: false },
            ]
          },
          {
            id: "b1-list-2",
            title: "Relationships & Social",
            description: "Acquaintance, compromise, conflict, trust, bond, colleague, upbringing",
            completed: false,
            subSkills: [
              { id: "b1-l2-1", title: "Types of Connections", completed: false },
              { id: "b1-l2-2", title: "Social Dynamics", completed: false },
              { id: "b1-l2-3", title: "Phrasal Verbs for Relationships", completed: false },
              { id: "b1-l2-4", title: "Idioms about Friendship", completed: false },
            ]
          },
          {
            id: "b1-list-3",
            title: "Travel & Adventure",
            description: "Itinerary, destination, accommodation, excursion, jet lag, visa, customs",
            completed: false,
            subSkills: [
              { id: "b1-l3-1", title: "Travel Logistics", completed: false },
              { id: "b1-l3-2", title: "Adventure Vocabulary", completed: false },
              { id: "b1-l3-3", title: "Situational Roleplay", completed: false },
              { id: "b1-l3-4", title: "Travel Idioms", completed: false },
            ]
          },
          {
            id: "b1-list-4",
            title: "Digital Technology",
            description: "Software, hardware, algorithm, database, encryption, interface, cloud",
            completed: false,
            subSkills: [
              { id: "b1-l4-1", title: "Tech Fundamentals", completed: false },
              { id: "b1-l4-2", title: "Advanced Tech Concepts", completed: false },
              { id: "b1-l4-3", title: "Cybersecurity Terms", completed: false },
              { id: "b1-l4-4", title: "Tech Collocations", completed: false },
            ]
          },
          {
            id: "b1-list-5",
            title: "Psychology & Mind",
            description: "Behavior, motivation, perception, anxiety, subconscious, therapy, cognitive",
            completed: false,
            subSkills: [
              { id: "b1-l5-1", title: "Mental Processes", completed: false },
              { id: "b1-l5-2", title: "Emotions vs. Traits", completed: false },
              { id: "b1-l5-3", title: "Applied Psychology", completed: false },
              { id: "b1-l5-4", title: "Personality Types", completed: false },
            ]
          },
          {
            id: "b1-list-6",
            title: "Economics & Finance",
            description: "Inflation, recession, budget, income, currency, supply, demand",
            completed: false,
            subSkills: [
              { id: "b1-l6-1", title: "Economic Fundamentals", completed: false },
              { id: "b1-l6-2", title: "Personal Finance", completed: false },
              { id: "b1-l6-3", title: "Supply & Demand", completed: false },
              { id: "b1-l6-4", title: "Financial Idioms", completed: false },
            ]
          },
          {
            id: "b1-list-7",
            title: "Health & Wellness",
            description: "Doctor consultations, medical advice, fitness instructions, prescriptions",
            completed: false,
            subSkills: [
              { id: "b1-l7-1", title: "At the Doctor's", completed: false },
              { id: "b1-l7-2", title: "Wellness & Lifestyle", completed: false },
              { id: "b1-l7-3", title: "Medical Vocabulary", completed: false },
            ]
          },
          {
            id: "b1-list-8",
            title: "Sports & Competition",
            description: "Sports commentary, rules, post-game interviews, results",
            completed: false,
            subSkills: [
              { id: "b1-l8-1", title: "Commentary & Results", completed: false },
              { id: "b1-l8-2", title: "The Interview", completed: false },
              { id: "b1-l8-3", title: "Sports Vocabulary", completed: false },
            ]
          },
          {
            id: "b1-list-9",
            title: "Cuisine & Gastronomy",
            description: "Restaurant reviews, cooking shows, recipes, food descriptions",
            completed: false,
            subSkills: [
              { id: "b1-l9-1", title: "Restaurant Experiences", completed: false },
              { id: "b1-l9-2", title: "Cooking Instructions", completed: false },
              { id: "b1-l9-3", title: "Food Vocabulary", completed: false },
            ]
          },
          {
            id: "b1-list-10",
            title: "Architecture & Buildings",
            description: "Guided tours, describing structures, renovation, real estate",
            completed: false,
            subSkills: [
              { id: "b1-l10-1", title: "Guided Tour", completed: false },
              { id: "b1-l10-2", title: "Renovation & Real Estate", completed: false },
              { id: "b1-l10-3", title: "Building Vocabulary", completed: false },
            ]
          },
          {
            id: "b1-list-11",
            title: "Literature & Writing",
            description: "Book reviews, author interviews, plot summaries, literary events",
            completed: false,
            subSkills: [
              { id: "b1-l11-1", title: "Book Reviews", completed: false },
              { id: "b1-l11-2", title: "Literary Events", completed: false },
              { id: "b1-l11-3", title: "Literary Vocabulary", completed: false },
            ]
          },
          {
            id: "b1-list-12",
            title: "Music & Performance",
            description: "Concert announcements, instrument descriptions, music genres",
            completed: false,
            subSkills: [
              { id: "b1-l12-1", title: "Musical Styles", completed: false },
              { id: "b1-l12-2", title: "Concert Logistics", completed: false },
              { id: "b1-l12-3", title: "Music Vocabulary", completed: false },
            ]
          },
          {
            id: "b1-list-13",
            title: "Fashion & Style",
            description: "Shopping conversations, describing trends, dress codes",
            completed: false,
            subSkills: [
              { id: "b1-l13-1", title: "Shopping", completed: false },
              { id: "b1-l13-2", title: "Dress Codes", completed: false },
              { id: "b1-l13-3", title: "Fashion Vocabulary", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-reading",
        title: "Reading Comprehension",
        icon: "📖",
        description: "From short texts to multi-paragraph texts",
        skills: [
          {
            id: "b1-read-1",
            title: "Articles and blogs",
            description: "Articles and blog posts",
            completed: false,
            subSkills: [
              { id: "b1-r1-1", title: "Magazine articles", completed: false },
              { id: "b1-r1-2", title: "Personal blogs", completed: false },
              { id: "b1-r1-3", title: "Simple news articles", completed: false },
            ]
          },
          {
            id: "b1-read-2",
            title: "Simplified news",
            description: "News stories (simplified)",
            completed: false,
            subSkills: [
              { id: "b1-r2-1", title: "VOA Learning English", completed: false },
              { id: "b1-r2-2", title: "News in Levels", completed: false },
            ]
          },
          {
            id: "b1-read-3",
            title: "Instructions and manuals",
            description: "Instructions and manuals",
            completed: false,
            subSkills: [
              { id: "b1-r3-1", title: "User manuals", completed: false },
              { id: "b1-r3-2", title: "Software instructions", completed: false },
            ]
          },
          {
            id: "b1-read-4",
            title: "Personal and semi-formal emails",
            description: "Personal and semi-formal emails",
            completed: false,
            subSkills: [
              { id: "b1-r4-1", title: "Emails from friends", completed: false },
              { id: "b1-r4-2", title: "Basic work emails", completed: false },
            ]
          },
          {
            id: "b1-read-5",
            title: "Reading techniques",
            description: "Skimming, scanning, inferring",
            completed: false,
            subSkills: [
              { id: "b1-r5-1", title: "Skimming (general idea)", completed: false },
              { id: "b1-r5-2", title: "Scanning (specific info)", completed: false },
              { id: "b1-r5-3", title: "Infer meaning from context", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-writing",
        title: "Writing",
        icon: "✍️",
        description: "From short paragraphs to connected, structured texts",
        skills: [
          {
            id: "b1-write-1",
            title: "Formal and informal emails",
            description: "Formal and informal emails",
            completed: false,
            subSkills: [
              { id: "b1-w1-1", title: "Appropriate greetings and closings", completed: false },
              { id: "b1-w1-2", title: "Formal vs informal register", completed: false },
              { id: "b1-w1-3", title: "Clear structure", completed: false },
            ]
          },
          {
            id: "b1-write-2",
            title: "Opinion paragraphs",
            description: "Opinion paragraphs with reasons",
            completed: false,
            subSkills: [
              { id: "b1-w2-1", title: "Express opinion clearly", completed: false },
              { id: "b1-w2-2", title: "Support with reasons", completed: false },
              { id: "b1-w2-3", title: "Give examples", completed: false },
            ]
          },
          {
            id: "b1-write-3",
            title: "Experience descriptions",
            description: "Descriptions of experiences",
            completed: false,
            subSkills: [
              { id: "b1-w3-1", title: "Describe past events", completed: false },
              { id: "b1-w3-2", title: "Include emotions and reactions", completed: false },
            ]
          },
          {
            id: "b1-write-4",
            title: "Short essays",
            description: "Short essays (100-180 words)",
            completed: false,
            subSkills: [
              { id: "b1-w4-1", title: "Clear introduction", completed: false },
              { id: "b1-w4-2", title: "Development with arguments", completed: false },
              { id: "b1-w4-3", title: "Coherent conclusion", completed: false },
            ]
          },
          {
            id: "b1-write-5",
            title: "Connect ideas",
            description: "Using linking words effectively",
            completed: false,
            subSkills: [
              { id: "b1-w5-1", title: "Addition connectors", completed: false },
              { id: "b1-w5-2", title: "Contrast connectors", completed: false },
              { id: "b1-w5-3", title: "Cause/effect connectors", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-strategy",
        title: "Communication Strategies",
        icon: "🧭",
        description: "Critical strategic competence for B1",
        skills: [
          {
            id: "b1-strat-1",
            title: "Paraphrase",
            description: "Paraphrasing when you don't know a word",
            completed: false,
            subSkills: [
              { id: "b1-st1-1", title: "Describe with other words", completed: false },
              { id: "b1-st1-2", title: "Use simple synonyms", completed: false },
            ]
          },
          {
            id: "b1-strat-2",
            title: "Ask for clarification politely",
            description: "Asking for clarification politely",
            completed: false,
            subSkills: [
              { id: "b1-st2-1", title: "Could you repeat that?", completed: false },
              { id: "b1-st2-2", title: "What do you mean by...?", completed: false },
              { id: "b1-st2-3", title: "Could you explain that?", completed: false },
            ]
          },
          {
            id: "b1-strat-3",
            title: "Manage conversations",
            description: "Managing conversations (turn-taking)",
            completed: false,
            subSkills: [
              { id: "b1-st3-1", title: "Take turns naturally", completed: false },
              { id: "b1-st3-2", title: "Interrupt politely", completed: false },
              { id: "b1-st3-3", title: "Change the topic", completed: false },
            ]
          },
          {
            id: "b1-strat-4",
            title: "Repair misunderstandings",
            description: "Repairing communication breakdowns",
            completed: false,
            subSkills: [
              { id: "b1-st4-1", title: "Recognize misunderstandings", completed: false },
              { id: "b1-st4-2", title: "Clarify what you meant", completed: false },
            ]
          },
          {
            id: "b1-strat-5",
            title: "Use context",
            description: "Using context to guess meaning",
            completed: false,
            subSkills: [
              { id: "b1-st5-1", title: "Guess new words", completed: false },
              { id: "b1-st5-2", title: "Use context clues", completed: false },
            ]
          },
          {
            id: "b1-strat-6",
            title: "Self-management of learning",
            description: "Self-management and self-correction",
            completed: false,
            subSkills: [
              { id: "b1-st6-1", title: "Self-correct", completed: false },
              { id: "b1-st6-2", title: "Use notes and outlines when speaking", completed: false },
              { id: "b1-st6-3", title: "Identify areas for improvement", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    description: "From independent user to competent, confident communicator",
    targetVocabulary: "4,000-5,000 words",
    estimatedHours: 500,
    categories: [
      {
        id: "b2-vocabulary",
        title: "Advanced Vocabulary",
        icon: "📚",
        description: "Academic and professional themes: globalization, ethics, innovation, diplomacy, sustainability",
        skills: [
          {
            id: "b2-vocab-1",
            title: "Globalization & Trade",
            description: "Outsourcing, tariff, export, import, supply chain, multinational, currency, logistics",
            completed: false,
            subSkills: [
              { id: "b2-v1-1", title: "Definitions & Business Terms", completed: false },
              { id: "b2-v1-2", title: "Economic Concepts", completed: false },
              { id: "b2-v1-3", title: "Collocations & Global Logic", completed: false },
            ]
          },
          {
            id: "b2-vocab-2",
            title: "Ethics & Morality",
            description: "Integrity, dilemma, principle, accountability, corruption, whistleblower, values",
            completed: false,
            subSkills: [
              { id: "b2-v2-1", title: "Moral Vocabulary", completed: false },
              { id: "b2-v2-2", title: "Ethical Concepts", completed: false },
              { id: "b2-v2-3", title: "Situational Ethics", completed: false },
            ]
          },
          {
            id: "b2-vocab-3",
            title: "Innovation & Disruption",
            description: "Breakthrough, disruption, patent, prototype, obsolete, cutting-edge, automation",
            completed: false,
            subSkills: [
              { id: "b2-v3-1", title: "Tech Evolution", completed: false },
              { id: "b2-v3-2", title: "Startup Culture", completed: false },
              { id: "b2-v3-3", title: "The Future", completed: false },
            ]
          },
          {
            id: "b2-vocab-4",
            title: "Diplomacy & Relations",
            description: "Treaty, alliance, sanction, ambassador, summit, negotiation, conflict",
            completed: false,
            subSkills: [
              { id: "b2-v4-1", title: "International Terms", completed: false },
              { id: "b2-v4-2", title: "Political Actions", completed: false },
              { id: "b2-v4-3", title: "World Map & Scenarios", completed: false },
            ]
          },
          {
            id: "b2-vocab-5",
            title: "Sustainability & Green",
            description: "Carbon footprint, biodegradable, conservation, sustainable, emissions, renewable",
            completed: false,
            subSkills: [
              { id: "b2-v5-1", title: "Eco-Vocabulary", completed: false },
              { id: "b2-v5-2", title: "Environmental Issues", completed: false },
              { id: "b2-v5-3", title: "Collocations & Solutions", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-grammar",
        title: "Grammar",
        icon: "🧩",
        description: "Grammatical range and control - natural flexibility",
        skills: [
          {
            id: "b2-gram-1",
            title: "Mastery of all tenses",
            description: "All major tenses with accuracy",
            completed: false,
            subSkills: [
              { id: "b2-g1-1", title: "Present tenses with precision", completed: false },
              { id: "b2-g1-2", title: "Past tenses with precision", completed: false },
              { id: "b2-g1-3", title: "Future tenses with precision", completed: false },
            ]
          },
          {
            id: "b2-gram-2",
            title: "Present Perfect vs Past Simple",
            description: "Fully mastered distinction",
            completed: false,
            subSkills: [
              { id: "b2-g2-1", title: "When to use each tense", completed: false },
              { id: "b2-g2-2", title: "Time markers", completed: false },
              { id: "b2-g2-3", title: "Ambiguous cases", completed: false },
            ]
          },
          {
            id: "b2-gram-3",
            title: "Future forms",
            description: "Future for prediction and intention",
            completed: false,
            subSkills: [
              { id: "b2-g3-1", title: "Will for predictions", completed: false },
              { id: "b2-g3-2", title: "Going to for plans", completed: false },
              { id: "b2-g3-3", title: "Future perfect", completed: false },
              { id: "b2-g3-4", title: "Future continuous", completed: false },
            ]
          },
          {
            id: "b2-gram-4",
            title: "Conditionals 0-3",
            description: "All conditional types mastered",
            completed: false,
            subSkills: [
              { id: "b2-g4-1", title: "Zero conditional", completed: false },
              { id: "b2-g4-2", title: "First conditional", completed: false },
              { id: "b2-g4-3", title: "Second conditional", completed: false },
              { id: "b2-g4-4", title: "Third conditional", completed: false },
            ]
          },
          {
            id: "b2-gram-5",
            title: "Mixed Conditionals",
            description: "Basic mixed conditional structures",
            completed: false,
            subSkills: [
              { id: "b2-g5-1", title: "Past condition, present result", completed: false },
              { id: "b2-g5-2", title: "Present condition, past result", completed: false },
            ]
          },
          {
            id: "b2-gram-6",
            title: "Advanced passive voice",
            description: "Passive voice in multiple tenses",
            completed: false,
            subSkills: [
              { id: "b2-g6-1", title: "Passive in all tenses", completed: false },
              { id: "b2-g6-2", title: "Passive with modals", completed: false },
              { id: "b2-g6-3", title: "Double object passives", completed: false },
            ]
          },
          {
            id: "b2-gram-7",
            title: "Relative clauses",
            description: "Defining and non-defining relative clauses",
            completed: false,
            subSkills: [
              { id: "b2-g7-1", title: "Defining clauses", completed: false },
              { id: "b2-g7-2", title: "Non-defining clauses", completed: false },
              { id: "b2-g7-3", title: "Reduced relative clauses", completed: false },
            ]
          },
          {
            id: "b2-gram-8",
            title: "Reported Speech",
            description: "All forms of reported speech",
            completed: false,
            subSkills: [
              { id: "b2-g8-1", title: "Statements", completed: false },
              { id: "b2-g8-2", title: "Questions", completed: false },
              { id: "b2-g8-3", title: "Commands and requests", completed: false },
              { id: "b2-g8-4", title: "Time and place changes", completed: false },
            ]
          },
          {
            id: "b2-gram-9",
            title: "Modals for deduction",
            description: "Might have, must be, could have",
            completed: false,
            subSkills: [
              { id: "b2-g9-1", title: "Must be / can't be", completed: false },
              { id: "b2-g9-2", title: "Might have / could have", completed: false },
              { id: "b2-g9-3", title: "Should have / would have", completed: false },
            ]
          },
          {
            id: "b2-gram-10",
            title: "Complex structures",
            description: "Complex sentence structures",
            completed: false,
            subSkills: [
              { id: "b2-g10-1", title: "Compound sentences", completed: false },
              { id: "b2-g10-2", title: "Multiple subordinate clauses", completed: false },
            ]
          },
          {
            id: "b2-gram-11",
            title: "Inversions for emphasis",
            description: "Not only..., Had I known..., Never have I...",
            completed: false,
            subSkills: [
              { id: "b2-g11-1", title: "Not only... but also", completed: false },
              { id: "b2-g11-2", title: "Never/Rarely/Seldom + inversion", completed: false },
              { id: "b2-g11-3", title: "Had I known...", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-speaking",
        title: "Speaking",
        icon: "🗣️",
        description: "Fluent and confident interaction - natural conversation",
        skills: [
          {
            id: "b2-speak-1",
            title: "Express and defend opinions",
            description: "Clearly expressing and defending viewpoints",
            completed: false,
            subSkills: [
              { id: "b2-s1-1", title: "Present your point of view", completed: false },
              { id: "b2-s1-2", title: "Give reasons and examples", completed: false },
              { id: "b2-s1-3", title: "Defend your position", completed: false },
            ]
          },
          {
            id: "b2-speak-2",
            title: "Develop arguments",
            description: "Developing arguments with examples",
            completed: false,
            subSkills: [
              { id: "b2-s2-1", title: "Structure arguments logically", completed: false },
              { id: "b2-s2-2", title: "Use relevant examples", completed: false },
              { id: "b2-s2-3", title: "Counter-argue effectively", completed: false },
            ]
          },
          {
            id: "b2-speak-3",
            title: "Participate in debates",
            description: "Active participation in discussions and debates",
            completed: false,
            subSkills: [
              { id: "b2-s3-1", title: "Listen and respond to others", completed: false },
              { id: "b2-s3-2", title: "Express polite agreement/disagreement", completed: false },
              { id: "b2-s3-3", title: "Moderate and facilitate discussions", completed: false },
            ]
          },
          {
            id: "b2-speak-4",
            title: "Fluency with minimal hesitation",
            description: "Speaking fluently with minimal hesitation",
            completed: false,
            subSkills: [
              { id: "b2-s4-1", title: "Speak without long pauses", completed: false },
              { id: "b2-s4-2", title: "Use fillers naturally", completed: false },
              { id: "b2-s4-3", title: "Maintain conversation pace", completed: false },
            ]
          },
          {
            id: "b2-speak-5",
            title: "Adjust register",
            description: "Adjusting register (formal vs informal)",
            completed: false,
            subSkills: [
              { id: "b2-s5-1", title: "Formal language for work", completed: false },
              { id: "b2-s5-2", title: "Informal language with friends", completed: false },
              { id: "b2-s5-3", title: "Change register according to context", completed: false },
            ]
          },
          {
            id: "b2-speak-6",
            title: "Discourse markers",
            description: "Using fillers and discourse markers naturally",
            completed: false,
            subSkills: [
              { id: "b2-s6-1", title: "Well, Actually, Basically", completed: false },
              { id: "b2-s6-2", title: "To be honest, In my opinion", completed: false },
              { id: "b2-s6-3", title: "Having said that, On the other hand", completed: false },
            ]
          },
          {
            id: "b2-speak-7",
            title: "Manage turns and interruptions",
            description: "Managing turn-taking and interruptions",
            completed: false,
            subSkills: [
              { id: "b2-s7-1", title: "Interrupt politely", completed: false },
              { id: "b2-s7-2", title: "Yield the floor naturally", completed: false },
              { id: "b2-s7-3", title: "Regain the floor", completed: false },
            ]
          },
          {
            id: "b2-speak-8",
            title: "Clarify and reformulate",
            description: "Clarifying, reformulating, and emphasizing",
            completed: false,
            subSkills: [
              { id: "b2-s8-1", title: "What I mean is...", completed: false },
              { id: "b2-s8-2", title: "Let me put it another way", completed: false },
              { id: "b2-s8-3", title: "The point I'm trying to make is...", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-listening",
        title: "Listening Comprehension",
        icon: "👂",
        description: "Academic and professional listening: globalization, ethics, innovation, diplomacy, sustainability",
        skills: [
          {
            id: "b2-list-1",
            title: "Globalization & Trade",
            description: "Outsourcing, tariff, export, import, supply chain, multinational, currency, logistics",
            completed: false,
            subSkills: [
              { id: "b2-l1-1", title: "Definitions & Business Terms", completed: false },
              { id: "b2-l1-2", title: "Economic Concepts", completed: false },
              { id: "b2-l1-3", title: "Collocations & Sentence Completion", completed: false },
            ]
          },
          {
            id: "b2-list-2",
            title: "Ethics & Morality",
            description: "Integrity, dilemma, principle, accountability, corruption, whistleblower, values",
            completed: false,
            subSkills: [
              { id: "b2-l2-1", title: "Moral Vocabulary", completed: false },
              { id: "b2-l2-2", title: "Ethical Concepts", completed: false },
              { id: "b2-l2-3", title: "Situational Ethics", completed: false },
            ]
          },
          {
            id: "b2-list-3",
            title: "Innovation & Disruption",
            description: "Breakthrough, disruption, patent, prototype, obsolete, cutting-edge, automation",
            completed: false,
            subSkills: [
              { id: "b2-l3-1", title: "Tech Evolution", completed: false },
              { id: "b2-l3-2", title: "Startup Culture", completed: false },
              { id: "b2-l3-3", title: "The Future", completed: false },
            ]
          },
          {
            id: "b2-list-4",
            title: "Diplomacy & Relations",
            description: "Treaty, alliance, sanction, ambassador, summit, negotiation, conflict",
            completed: false,
            subSkills: [
              { id: "b2-l4-1", title: "International Terms", completed: false },
              { id: "b2-l4-2", title: "Political Actions", completed: false },
              { id: "b2-l4-3", title: "World Map & Scenarios", completed: false },
            ]
          },
          {
            id: "b2-list-5",
            title: "Sustainability & Green",
            description: "Carbon footprint, biodegradable, conservation, sustainable, emissions, renewable",
            completed: false,
            subSkills: [
              { id: "b2-l5-1", title: "Eco-Vocabulary", completed: false },
              { id: "b2-l5-2", title: "Environmental Issues", completed: false },
              { id: "b2-l5-3", title: "Collocations & Solutions", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-reading",
        title: "Reading Comprehension",
        icon: "📖",
        description: "Complex, abstract texts - argumentation and analysis",
        skills: [
          {
            id: "b2-read-1",
            title: "Opinion articles",
            description: "Opinion articles and editorials",
            completed: false,
            subSkills: [
              { id: "b2-r1-1", title: "Identify the main thesis", completed: false },
              { id: "b2-r1-2", title: "Recognize arguments and evidence", completed: false },
              { id: "b2-r1-3", title: "Evaluate the author's position", completed: false },
            ]
          },
          {
            id: "b2-read-2",
            title: "Reports and essays",
            description: "Reports and essays",
            completed: false,
            subSkills: [
              { id: "b2-r2-1", title: "Report structure", completed: false },
              { id: "b2-r2-2", title: "Analysis of presented data", completed: false },
              { id: "b2-r2-3", title: "Conclusions and recommendations", completed: false },
            ]
          },
          {
            id: "b2-read-3",
            title: "News and editorials",
            description: "News stories and editorials",
            completed: false,
            subSkills: [
              { id: "b2-r3-1", title: "Differentiate facts from opinions", completed: false },
              { id: "b2-r3-2", title: "Media bias", completed: false },
            ]
          },
          {
            id: "b2-read-4",
            title: "Academic or semi-technical texts",
            description: "Academic or semi-technical texts",
            completed: false,
            subSkills: [
              { id: "b2-r4-1", title: "Specialized vocabulary", completed: false },
              { id: "b2-r4-2", title: "Academic structure", completed: false },
              { id: "b2-r4-3", title: "References and citations", completed: false },
            ]
          },
          {
            id: "b2-read-5",
            title: "Long emails and documents",
            description: "Long emails and documents",
            completed: false,
            subSkills: [
              { id: "b2-r5-1", title: "Extensive formal correspondence", completed: false },
              { id: "b2-r5-2", title: "Manuals and guides", completed: false },
            ]
          },
          {
            id: "b2-read-6",
            title: "Advanced reading skills",
            description: "Advanced reading skills",
            completed: false,
            subSkills: [
              { id: "b2-r6-1", title: "Identify argumentative structure", completed: false },
              { id: "b2-r6-2", title: "Understand implicit meaning", completed: false },
              { id: "b2-r6-3", title: "Evaluate viewpoints", completed: false },
              { id: "b2-r6-4", title: "Infer from context", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-writing",
        title: "Writing",
        icon: "✍️",
        description: "Coherent, structured writing - clear argumentation",
        skills: [
          {
            id: "b2-write-1",
            title: "Essays with clear arguments",
            description: "Essays with clear arguments",
            completed: false,
            subSkills: [
              { id: "b2-w1-1", title: "Introduction with thesis", completed: false },
              { id: "b2-w1-2", title: "Development paragraphs", completed: false },
              { id: "b2-w1-3", title: "Effective conclusion", completed: false },
            ]
          },
          {
            id: "b2-write-2",
            title: "Reports and proposals",
            description: "Reports and proposals",
            completed: false,
            subSkills: [
              { id: "b2-w2-1", title: "Formal report format", completed: false },
              { id: "b2-w2-2", title: "Clear recommendations", completed: false },
              { id: "b2-w2-3", title: "Action proposals", completed: false },
            ]
          },
          {
            id: "b2-write-3",
            title: "Formal and informal emails",
            description: "Formal and informal emails",
            completed: false,
            subSkills: [
              { id: "b2-w3-1", title: "Appropriate register", completed: false },
              { id: "b2-w3-2", title: "Politeness formulas", completed: false },
              { id: "b2-w3-3", title: "Clear structure", completed: false },
            ]
          },
          {
            id: "b2-write-4",
            title: "Reviews",
            description: "Reviews (films, books, places)",
            completed: false,
            subSkills: [
              { id: "b2-w4-1", title: "Film/book reviews", completed: false },
              { id: "b2-w4-2", title: "Place/restaurant reviews", completed: false },
              { id: "b2-w4-3", title: "Balanced opinions", completed: false },
            ]
          },
          {
            id: "b2-write-5",
            title: "Opinion articles",
            description: "Articles expressing opinions",
            completed: false,
            subSkills: [
              { id: "b2-w5-1", title: "Headline and hook", completed: false },
              { id: "b2-w5-2", title: "Develop arguments", completed: false },
              { id: "b2-w5-3", title: "Impactful conclusion", completed: false },
            ]
          },
          {
            id: "b2-write-6",
            title: "Cohesion and coherence",
            description: "Focus on cohesion and coherence",
            completed: false,
            subSkills: [
              { id: "b2-w6-1", title: "Varied connectors", completed: false },
              { id: "b2-w6-2", title: "Reference and substitution", completed: false },
              { id: "b2-w6-3", title: "Paragraph unity", completed: false },
            ]
          },
          {
            id: "b2-write-7",
            title: "Grammatical accuracy",
            description: "Accurate grammar in writing",
            completed: false,
            subSkills: [
              { id: "b2-w7-1", title: "Correct grammar", completed: false },
              { id: "b2-w7-2", title: "Appropriate punctuation", completed: false },
            ]
          },
          {
            id: "b2-write-8",
            title: "Tone and register",
            description: "Appropriate tone and register",
            completed: false,
            subSkills: [
              { id: "b2-w8-1", title: "Adapt tone to reader", completed: false },
              { id: "b2-w8-2", title: "Maintain register consistency", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-strategy",
        title: "Discourse and Pragmatic Competence",
        icon: "🧭",
        description: "Discourse control - essential at B2 level",
        skills: [
          {
            id: "b2-strat-1",
            title: "Paraphrase precisely",
            description: "Paraphrasing precisely",
            completed: false,
            subSkills: [
              { id: "b2-st1-1", title: "Reformulate complex ideas", completed: false },
              { id: "b2-st1-2", title: "Use synonyms effectively", completed: false },
            ]
          },
          {
            id: "b2-strat-2",
            title: "Hedge opinions",
            description: "Hedging opinions (It seems that..., I tend to think...)",
            completed: false,
            subSkills: [
              { id: "b2-st2-1", title: "It seems that, It appears", completed: false },
              { id: "b2-st2-2", title: "I tend to think, I would argue", completed: false },
              { id: "b2-st2-3", title: "To some extent, In a way", completed: false },
            ]
          },
          {
            id: "b2-strat-3",
            title: "Manage disagreements",
            description: "Managing disagreement politely",
            completed: false,
            subSkills: [
              { id: "b2-st3-1", title: "I see your point, but...", completed: false },
              { id: "b2-st3-2", title: "I'm not sure I agree entirely", completed: false },
              { id: "b2-st3-3", title: "That's a valid point, however...", completed: false },
            ]
          },
          {
            id: "b2-strat-4",
            title: "Repair misunderstandings",
            description: "Repairing misunderstandings smoothly",
            completed: false,
            subSkills: [
              { id: "b2-st4-1", title: "Recognize the misunderstanding", completed: false },
              { id: "b2-st4-2", title: "Clarify your intention", completed: false },
              { id: "b2-st4-3", title: "Confirm understanding", completed: false },
            ]
          },
          {
            id: "b2-strat-5",
            title: "Use emphasis and nuance",
            description: "Using emphasis and nuance",
            completed: false,
            subSkills: [
              { id: "b2-st5-1", title: "Emphasis words (absolutely, definitely)", completed: false },
              { id: "b2-st5-2", title: "Emphatic structures (What I want is...)", completed: false },
            ]
          },
          {
            id: "b2-strat-6",
            title: "Structure long responses",
            description: "Structuring long spoken responses",
            completed: false,
            subSkills: [
              { id: "b2-st6-1", title: "Firstly, secondly, finally", completed: false },
              { id: "b2-st6-2", title: "To sum up, In conclusion", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "C1",
    title: "Advanced",
    description: "Proficient user with flexible, effective language use in academic and professional contexts",
    targetVocabulary: "6,000-8,000 words",
    estimatedHours: 600,
    categories: [
      {
        id: "c1-vocabulary",
        title: "Lexical Mastery",
        icon: "📚",
        description: "Precise and nuanced vocabulary across specialized domains",
        skills: [
          {
            id: "c1-vocab-1",
            title: "Fine-grained meaning differences",
            description: "Fine-grained meaning differences",
            completed: false,
            subSkills: [
              { id: "c1-v1-1", title: "Subtle synonym distinctions", completed: false },
              { id: "c1-v1-2", title: "Near-synonyms in context", completed: false },
              { id: "c1-v1-3", title: "Register-appropriate vocabulary", completed: false },
            ]
          },
          {
            id: "c1-vocab-2",
            title: "Abstract and technical vocabulary",
            description: "Abstract & technical vocabulary",
            completed: false,
            subSkills: [
              { id: "c1-v2-1", title: "Abstract concepts", completed: false },
              { id: "c1-v2-2", title: "Technical jargon", completed: false },
              { id: "c1-v2-3", title: "Academic vocabulary", completed: false },
              { id: "c1-v2-4", title: "Domain-specific terms", completed: false },
            ]
          },
          {
            id: "c1-vocab-3",
            title: "Idioms and fixed expressions",
            description: "Idioms, fixed expressions, and metaphor",
            completed: false,
            subSkills: [
              { id: "c1-v3-1", title: "Idiomatic expressions", completed: false },
              { id: "c1-v3-2", title: "Fixed phrases", completed: false },
              { id: "c1-v3-3", title: "Extended metaphors", completed: false },
              { id: "c1-v3-4", title: "Proverbs and sayings", completed: false },
            ]
          },
          {
            id: "c1-vocab-4",
            title: "Advanced collocations",
            description: "Advanced collocations",
            completed: false,
            subSkills: [
              { id: "c1-v4-1", title: "Academic collocations", completed: false },
              { id: "c1-v4-2", title: "Business collocations", completed: false },
              { id: "c1-v4-3", title: "Subtle collocation differences", completed: false },
            ]
          },
          {
            id: "c1-vocab-5",
            title: "Register control",
            description: "Register control (formal, neutral, informal, academic)",
            completed: false,
            subSkills: [
              { id: "c1-v5-1", title: "Formal vocabulary", completed: false },
              { id: "c1-v5-2", title: "Informal vocabulary", completed: false },
              { id: "c1-v5-3", title: "Academic vocabulary", completed: false },
              { id: "c1-v5-4", title: "Switching registers appropriately", completed: false },
            ]
          },
          {
            id: "c1-vocab-6",
            title: "Connotation and tone",
            description: "Connotation & tone (neutral vs critical vs ironic)",
            completed: false,
            subSkills: [
              { id: "c1-v6-1", title: "Neutral vs critical vocabulary", completed: false },
              { id: "c1-v6-2", title: "Ironic and sarcastic tone", completed: false },
              { id: "c1-v6-3", title: "Euphemisms and diplomatic language", completed: false },
              { id: "c1-v6-4", title: "Intensifiers and hedges", completed: false },
            ]
          },
          {
            id: "c1-vocab-7",
            title: "Word formation",
            description: "Word formation and derivation fluency",
            completed: false,
            subSkills: [
              { id: "c1-v7-1", title: "Advanced prefixes (counter-, ultra-, pseudo-)", completed: false },
              { id: "c1-v7-2", title: "Nominal suffixes (-ation, -ment, -ity)", completed: false },
              { id: "c1-v7-3", title: "Adjectival suffixes (-ive, -ous, -al)", completed: false },
              { id: "c1-v7-4", title: "Complete word families", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-grammar",
        title: "Advanced Grammar and Syntax",
        icon: "🧩",
        description: "Structural sophistication - from flexible grammar to stylistic control",
        skills: [
          {
            id: "c1-gram-1",
            title: "Complex clause structures",
            description: "Complex clause structures",
            completed: false,
            subSkills: [
              { id: "c1-g1-1", title: "Multiple subordinate clauses", completed: false },
              { id: "c1-g1-2", title: "Reduced clauses (participle)", completed: false },
              { id: "c1-g1-3", title: "Complex noun clauses", completed: false },
            ]
          },
          {
            id: "c1-gram-2",
            title: "Subordination and embedding",
            description: "Subordination & embedding",
            completed: false,
            subSkills: [
              { id: "c1-g2-1", title: "Deep embedded clauses", completed: false },
              { id: "c1-g2-2", title: "Complex relative structures", completed: false },
              { id: "c1-g2-3", title: "Sentential complements", completed: false },
            ]
          },
          {
            id: "c1-gram-3",
            title: "All conditionals (including mixed)",
            description: "All conditionals including mixed",
            completed: false,
            subSkills: [
              { id: "c1-g3-1", title: "Perfect third conditional", completed: false },
              { id: "c1-g3-2", title: "Mixed: past unreal → present (If I had studied, I would know)", completed: false },
              { id: "c1-g3-3", title: "Mixed: present unreal → past (If I were taller, I would have been selected)", completed: false },
              { id: "c1-g3-4", title: "Conditionals with alternative modals", completed: false },
            ]
          },
          {
            id: "c1-gram-4",
            title: "Advanced passive constructions",
            description: "Advanced passive constructions",
            completed: false,
            subSkills: [
              { id: "c1-g4-1", title: "Passive with reporting verbs (It is believed that...)", completed: false },
              { id: "c1-g4-2", title: "Causative passive (have/get something done)", completed: false },
              { id: "c1-g4-3", title: "Passive with infinitive (He is said to be...)", completed: false },
              { id: "c1-g4-4", title: "Impersonal passive", completed: false },
            ]
          },
          {
            id: "c1-gram-5",
            title: "Nominalization",
            description: "Nominalisation (The implementation of…)",
            completed: false,
            subSkills: [
              { id: "c1-g5-1", title: "Convert verbs to nouns", completed: false },
              { id: "c1-g5-2", title: "Convert adjectives to nouns", completed: false },
              { id: "c1-g5-3", title: "Complex nominal structures", completed: false },
              { id: "c1-g5-4", title: "Use in academic writing", completed: false },
            ]
          },
          {
            id: "c1-gram-6",
            title: "Inversion and emphasis",
            description: "Inversion & emphasis",
            completed: false,
            subSkills: [
              { id: "c1-g6-1", title: "Not only... but also (inversion)", completed: false },
              { id: "c1-g6-2", title: "Had I known... (conditional inversion)", completed: false },
              { id: "c1-g6-3", title: "Never have I seen... (negative inversion)", completed: false },
              { id: "c1-g6-4", title: "Rarely does one find... (adverb inversion)", completed: false },
              { id: "c1-g6-5", title: "Cleft sentences (What I need is... / It was John who...)", completed: false },
            ]
          },
          {
            id: "c1-gram-7",
            title: "Ellipsis and substitution",
            description: "Ellipsis & substitution",
            completed: false,
            subSkills: [
              { id: "c1-g7-1", title: "Nominal ellipsis (I'll have the red one)", completed: false },
              { id: "c1-g7-2", title: "Verbal ellipsis (She can swim and so can I)", completed: false },
              { id: "c1-g7-3", title: "Substitution with 'do', 'so', 'one'", completed: false },
              { id: "c1-g7-4", title: "Avoid repetition in formal texts", completed: false },
            ]
          },
          {
            id: "c1-gram-8",
            title: "Discourse-level grammar",
            description: "Discourse-level grammar",
            completed: false,
            subSkills: [
              { id: "c1-g8-1", title: "Lexical and grammatical cohesion", completed: false },
              { id: "c1-g8-2", title: "Anaphoric and cataphoric reference", completed: false },
              { id: "c1-g8-3", title: "Advanced discourse connectors", completed: false },
            ]
          },
          {
            id: "c1-gram-9",
            title: "Accurate punctuation for meaning",
            description: "Accurate punctuation for meaning",
            completed: false,
            subSkills: [
              { id: "c1-g9-1", title: "Semicolon vs comma", completed: false },
              { id: "c1-g9-2", title: "Colon for emphasis", completed: false },
              { id: "c1-g9-3", title: "Dashes and parentheses", completed: false },
              { id: "c1-g9-4", title: "Apostrophes in complex cases", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-speaking",
        title: "Speaking: Rhetorical and Interactive Control",
        icon: "🗣️",
        description: "High-level spoken discourse - from fluent conversation to articulate, persuasive speech",
        skills: [
          {
            id: "c1-speak-1",
            title: "Express ideas spontaneously and precisely",
            description: "Express ideas spontaneously and precisely",
            completed: false,
            subSkills: [
              { id: "c1-s1-1", title: "Speak unprepared on complex topics", completed: false },
              { id: "c1-s1-2", title: "Find precise words quickly", completed: false },
              { id: "c1-s1-3", title: "Self-correct without losing fluency", completed: false },
            ]
          },
          {
            id: "c1-speak-2",
            title: "Develop extended arguments coherently",
            description: "Develop extended arguments coherently",
            completed: false,
            subSkills: [
              { id: "c1-s2-1", title: "Structure arguments logically", completed: false },
              { id: "c1-s2-2", title: "Provide evidence and examples", completed: false },
              { id: "c1-s2-3", title: "Anticipate counter-arguments", completed: false },
              { id: "c1-s2-4", title: "Conclude effectively", completed: false },
            ]
          },
          {
            id: "c1-speak-3",
            title: "Persuade, negotiate, and hypothesize",
            description: "Persuade, negotiate, and hypothesise",
            completed: false,
            subSkills: [
              { id: "c1-s3-1", title: "Persuasion techniques", completed: false },
              { id: "c1-s3-2", title: "Negotiation and compromise", completed: false },
              { id: "c1-s3-3", title: "Speculate about scenarios", completed: false },
              { id: "c1-s3-4", title: "Propose alternative solutions", completed: false },
            ]
          },
          {
            id: "c1-speak-4",
            title: "Adapt speech to audience and context",
            description: "Adapt speech to audience and context",
            completed: false,
            subSkills: [
              { id: "c1-s4-1", title: "Adjust formality to situation", completed: false },
              { id: "c1-s4-2", title: "Modify complexity for audience", completed: false },
              { id: "c1-s4-3", title: "Change tone appropriately", completed: false },
            ]
          },
          {
            id: "c1-speak-5",
            title: "Manage complex turn-taking",
            description: "Manage complex turn-taking",
            completed: false,
            subSkills: [
              { id: "c1-s5-1", title: "Interrupt politely", completed: false },
              { id: "c1-s5-2", title: "Hold the floor under pressure", completed: false },
              { id: "c1-s5-3", title: "Yield gracefully", completed: false },
              { id: "c1-s5-4", title: "Moderate group discussions", completed: false },
            ]
          },
          {
            id: "c1-speak-6",
            title: "Use hedging, emphasis, and nuance",
            description: "Use hedging, emphasis, and nuance",
            completed: false,
            subSkills: [
              { id: "c1-s6-1", title: "Hedging (It seems that..., I tend to think...)", completed: false },
              { id: "c1-s6-2", title: "Rhetorical emphasis", completed: false },
              { id: "c1-s6-3", title: "Express graded certainty", completed: false },
              { id: "c1-s6-4", title: "Nuance strong opinions", completed: false },
            ]
          },
          {
            id: "c1-speak-7",
            title: "Convey stance and subtle disagreement",
            description: "Convey stance, attitude, and subtle disagreement",
            completed: false,
            subSkills: [
              { id: "c1-s7-1", title: "Express skepticism diplomatically", completed: false },
              { id: "c1-s7-2", title: "Disagree without confronting", completed: false },
              { id: "c1-s7-3", title: "Show attitude through intonation", completed: false },
            ]
          },
          {
            id: "c1-speak-8",
            title: "Maintain coherence in extended speech",
            description: "Maintain coherence over long stretches of speech",
            completed: false,
            subSkills: [
              { id: "c1-s8-1", title: "Signal discourse structure", completed: false },
              { id: "c1-s8-2", title: "Summarize previous points", completed: false },
              { id: "c1-s8-3", title: "Connect ideas over time", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-listening",
        title: "Listening: Interpretive Competence",
        icon: "👂",
        description: "Understand implicit meaning - from understanding content to understanding intent",
        skills: [
          {
            id: "c1-list-1",
            title: "Fast, natural speech",
            description: "Fast, natural speech",
            completed: false,
            subSkills: [
              { id: "c1-l1-1", title: "Native speed without adaptation", completed: false },
              { id: "c1-l1-2", title: "Connected speech and reductions", completed: false },
              { id: "c1-l1-3", title: "Multiple simultaneous speakers", completed: false },
            ]
          },
          {
            id: "c1-list-2",
            title: "Academic lectures",
            description: "Academic lectures",
            completed: false,
            subSkills: [
              { id: "c1-l2-1", title: "Follow complex arguments", completed: false },
              { id: "c1-l2-2", title: "Identify main and supporting points", completed: false },
              { id: "c1-l2-3", title: "Take effective notes", completed: false },
            ]
          },
          {
            id: "c1-list-3",
            title: "Professional meetings",
            description: "Professional meetings",
            completed: false,
            subSkills: [
              { id: "c1-l3-1", title: "Business discussions", completed: false },
              { id: "c1-l3-2", title: "Negotiations and debates", completed: false },
              { id: "c1-l3-3", title: "Technical presentations", completed: false },
            ]
          },
          {
            id: "c1-list-4",
            title: "Media discussions and debates",
            description: "Media discussions & debates",
            completed: false,
            subSkills: [
              { id: "c1-l4-1", title: "News and analysis programs", completed: false },
              { id: "c1-l4-2", title: "Complex podcasts", completed: false },
              { id: "c1-l4-3", title: "Documentaries without subtitles", completed: false },
            ]
          },
          {
            id: "c1-list-5",
            title: "Idiomatic and figurative language",
            description: "Idiomatic and figurative language",
            completed: false,
            subSkills: [
              { id: "c1-l5-1", title: "Idioms in context", completed: false },
              { id: "c1-l5-2", title: "Metaphors and analogies", completed: false },
              { id: "c1-l5-3", title: "Cultural references", completed: false },
            ]
          },
          {
            id: "c1-list-6",
            title: "Irony, humor, and understatement",
            description: "Irony, humour, understatement",
            completed: false,
            subSkills: [
              { id: "c1-l6-1", title: "Detect irony and sarcasm", completed: false },
              { id: "c1-l6-2", title: "Understand British vs American humor", completed: false },
              { id: "c1-l6-3", title: "Recognize understatement", completed: false },
            ]
          },
          {
            id: "c1-list-7",
            title: "Speaker attitude and stance",
            description: "Attitude and speaker stance",
            completed: false,
            subSkills: [
              { id: "c1-l7-1", title: "Identify opinion vs fact", completed: false },
              { id: "c1-l7-2", title: "Detect bias and perspective", completed: false },
              { id: "c1-l7-3", title: "Interpret emotional tone", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-reading",
        title: "Reading: Analytical and Critical Skills",
        icon: "📖",
        description: "Dense, abstract, academic texts - from comprehension to evaluation and synthesis",
        skills: [
          {
            id: "c1-read-1",
            title: "Academic articles",
            description: "Academic articles",
            completed: false,
            subSkills: [
              { id: "c1-r1-1", title: "Journals and specialized magazines", completed: false },
              { id: "c1-r1-2", title: "Abstracts and conclusions", completed: false },
              { id: "c1-r1-3", title: "Methodology and results", completed: false },
            ]
          },
          {
            id: "c1-read-2",
            title: "Research papers",
            description: "Research papers",
            completed: false,
            subSkills: [
              { id: "c1-r2-1", title: "Academic paper structure", completed: false },
              { id: "c1-r2-2", title: "Data and statistics analysis", completed: false },
              { id: "c1-r2-3", title: "Literature review", completed: false },
            ]
          },
          {
            id: "c1-read-3",
            title: "Editorials and essays",
            description: "Editorials & essays",
            completed: false,
            subSkills: [
              { id: "c1-r3-1", title: "Editorial opinion in quality newspapers", completed: false },
              { id: "c1-r3-2", title: "Argumentative essays", completed: false },
              { id: "c1-r3-3", title: "Extended reviews and critiques", completed: false },
            ]
          },
          {
            id: "c1-read-4",
            title: "Policy documents",
            description: "Policy documents",
            completed: false,
            subSkills: [
              { id: "c1-r4-1", title: "Government reports", completed: false },
              { id: "c1-r4-2", title: "White papers", completed: false },
              { id: "c1-r4-3", title: "Technical regulations", completed: false },
            ]
          },
          {
            id: "c1-read-5",
            title: "Long-form journalism",
            description: "Long-form journalism",
            completed: false,
            subSkills: [
              { id: "c1-r5-1", title: "Investigative pieces", completed: false },
              { id: "c1-r5-2", title: "Magazine features", completed: false },
              { id: "c1-r5-3", title: "Opinion columns", completed: false },
            ]
          },
          {
            id: "c1-read-6",
            title: "Literature (non-simplified)",
            description: "Literature (non-simplified)",
            completed: false,
            subSkills: [
              { id: "c1-r6-1", title: "Contemporary fiction", completed: false },
              { id: "c1-r6-2", title: "Classic literature", completed: false },
              { id: "c1-r6-3", title: "Literary essays", completed: false },
            ]
          },
          {
            id: "c1-read-7",
            title: "Identify implicit arguments",
            description: "Identify implicit arguments",
            completed: false,
            subSkills: [
              { id: "c1-r7-1", title: "Read between the lines", completed: false },
              { id: "c1-r7-2", title: "Understand unspoken premises", completed: false },
            ]
          },
          {
            id: "c1-read-8",
            title: "Evaluate claims critically",
            description: "Evaluate claims critically",
            completed: false,
            subSkills: [
              { id: "c1-r8-1", title: "Assess evidence quality", completed: false },
              { id: "c1-r8-2", title: "Identify logical fallacies", completed: false },
              { id: "c1-r8-3", title: "Evaluate source credibility", completed: false },
            ]
          },
          {
            id: "c1-read-9",
            title: "Synthesize information from multiple sources",
            description: "Synthesize information from multiple sources",
            completed: false,
            subSkills: [
              { id: "c1-r9-1", title: "Compare and contrast sources", completed: false },
              { id: "c1-r9-2", title: "Integrate different viewpoints", completed: false },
              { id: "c1-r9-3", title: "Create coherent summaries", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-writing",
        title: "Writing: Advanced Control and Style",
        icon: "✍️",
        description: "Produce well-structured, detailed text on complex subjects",
        skills: [
          {
            id: "c1-write-1",
            title: "Academic essays",
            description: "Academic essays",
            completed: false,
            subSkills: [
              { id: "c1-w1-1", title: "Thesis-driven structure", completed: false },
              { id: "c1-w1-2", title: "Evidence integration", completed: false },
              { id: "c1-w1-3", title: "Citation and referencing", completed: false },
            ]
          },
          {
            id: "c1-write-2",
            title: "Reports and proposals",
            description: "Reports & proposals",
            completed: false,
            subSkills: [
              { id: "c1-w2-1", title: "Executive summaries", completed: false },
              { id: "c1-w2-2", title: "Data presentation", completed: false },
              { id: "c1-w2-3", title: "Recommendations", completed: false },
            ]
          },
          {
            id: "c1-write-3",
            title: "Critical reviews",
            description: "Critical reviews",
            completed: false,
            subSkills: [
              { id: "c1-w3-1", title: "Balanced criticism", completed: false },
              { id: "c1-w3-2", title: "Evidence-based evaluation", completed: false },
              { id: "c1-w3-3", title: "Constructive feedback", completed: false },
            ]
          },
          {
            id: "c1-write-4",
            title: "Position papers",
            description: "Position papers",
            completed: false,
            subSkills: [
              { id: "c1-w4-1", title: "Clear stance presentation", completed: false },
              { id: "c1-w4-2", title: "Argumentation", completed: false },
              { id: "c1-w4-3", title: "Counter-argument acknowledgment", completed: false },
            ]
          },
          {
            id: "c1-write-5",
            title: "Formal correspondence",
            description: "Formal correspondence",
            completed: false,
            subSkills: [
              { id: "c1-w5-1", title: "Professional letters", completed: false },
              { id: "c1-w5-2", title: "Complaints and requests", completed: false },
              { id: "c1-w5-3", title: "Application materials", completed: false },
            ]
          },
          {
            id: "c1-write-6",
            title: "Advanced cohesion",
            description: "Cohesion across paragraphs",
            completed: false,
            subSkills: [
              { id: "c1-w6-1", title: "Thematic progression", completed: false },
              { id: "c1-w6-2", title: "Section transitions", completed: false },
              { id: "c1-w6-3", title: "Effective reference and substitution", completed: false },
            ]
          },
          {
            id: "c1-write-7",
            title: "Hedging and stance markers",
            description: "Hedging and stance markers",
            completed: false,
            subSkills: [
              { id: "c1-w7-1", title: "Express certainty and doubt", completed: false },
              { id: "c1-w7-2", title: "Tentative language in academia", completed: false },
              { id: "c1-w7-3", title: "Author positioning", completed: false },
            ]
          },
          {
            id: "c1-write-8",
            title: "Stylistic variation",
            description: "Stylistic variation",
            completed: false,
            subSkills: [
              { id: "c1-w8-1", title: "Vary sentence length", completed: false },
              { id: "c1-w8-2", title: "Use active vs passive strategically", completed: false },
              { id: "c1-w8-3", title: "Adapt style to purpose", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-strategies",
        title: "Pragmatic and Metacognitive Skills",
        icon: "🧭",
        description: "Communicative intelligence essential at C1",
        skills: [
          {
            id: "c1-strat-1",
            title: "Strategic paraphrasing",
            description: "Strategic paraphrasing",
            completed: false,
            subSkills: [
              { id: "c1-st1-1", title: "Reformulate complex ideas", completed: false },
              { id: "c1-st1-2", title: "Simplify for different audiences", completed: false },
              { id: "c1-st1-3", title: "Maintain meaning with different words", completed: false },
            ]
          },
          {
            id: "c1-strat-2",
            title: "Repair misunderstandings subtly",
            description: "Repairing misunderstandings subtly",
            completed: false,
            subSkills: [
              { id: "c1-st2-1", title: "Detect misunderstandings early", completed: false },
              { id: "c1-st2-2", title: "Clarify without offending", completed: false },
              { id: "c1-st2-3", title: "Reformulate elegantly", completed: false },
            ]
          },
          {
            id: "c1-strat-3",
            title: "Manage face-threatening acts",
            description: "Managing face-threatening acts",
            completed: false,
            subSkills: [
              { id: "c1-st3-1", title: "Deliver bad news diplomatically", completed: false },
              { id: "c1-st3-2", title: "Criticize constructively", completed: false },
              { id: "c1-st3-3", title: "Decline proposals gracefully", completed: false },
            ]
          },
          {
            id: "c1-strat-4",
            title: "Read social cues",
            description: "Reading social cues",
            completed: false,
            subSkills: [
              { id: "c1-st4-1", title: "Interpret body language", completed: false },
              { id: "c1-st4-2", title: "Detect discomfort or disagreement", completed: false },
              { id: "c1-st4-3", title: "Adjust based on reactions", completed: false },
            ]
          },
          {
            id: "c1-strat-5",
            title: "Adjust tone mid-interaction",
            description: "Adjusting tone mid-interaction",
            completed: false,
            subSkills: [
              { id: "c1-st5-1", title: "Escalate or de-escalate tension", completed: false },
              { id: "c1-st5-2", title: "Switch from formal to informal appropriately", completed: false },
              { id: "c1-st5-3", title: "Adapt to conversation changes", completed: false },
            ]
          },
          {
            id: "c1-strat-6",
            title: "Monitor own output in real time",
            description: "Monitoring own output in real time",
            completed: false,
            subSkills: [
              { id: "c1-st6-1", title: "Self-evaluate while speaking", completed: false },
              { id: "c1-st6-2", title: "Immediate error correction", completed: false },
              { id: "c1-st6-3", title: "Maintain overall coherence", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "C2",
    title: "Mastery",
    description: "Near-native command of the language with precision, fluency, and subtlety in all academic, professional, and social contexts",
    targetVocabulary: "10,000-15,000+ words (active use)",
    estimatedHours: 800,
    categories: [
      {
        id: "c2-vocabulary",
        title: "Native Lexical Mastery",
        icon: "📚",
        description: "Extensive vocabulary with subtle nuances, impeccable register, and natural idiomatic expression",
        skills: [
          {
            id: "c2-vocab-1",
            title: "Native-level lexical precision",
            description: "Native-level lexical precision",
            completed: false,
            subSkills: [
              { id: "c2-v1-1", title: "Nuances between close synonyms", completed: false },
              { id: "c2-v1-2", title: "Vocabulary across multiple specialized fields", completed: false },
              { id: "c2-v1-3", title: "Archaisms and neologisms in context", completed: false },
              { id: "c2-v1-4", title: "Dialectal variations (UK, US, AU)", completed: false },
            ]
          },
          {
            id: "c2-vocab-2",
            title: "Advanced idiomatic expression",
            description: "Advanced idiomatic expression",
            completed: false,
            subSkills: [
              { id: "c2-v2-1", title: "Literary and cultured idioms", completed: false },
              { id: "c2-v2-2", title: "Current colloquial expressions", completed: false },
              { id: "c2-v2-3", title: "Proverbs and sayings in context", completed: false },
              { id: "c2-v2-4", title: "Context-appropriate slang", completed: false },
            ]
          },
          {
            id: "c2-vocab-3",
            title: "Specialized academic vocabulary",
            description: "Specialized academic vocabulary",
            completed: false,
            subSkills: [
              { id: "c2-v3-1", title: "Advanced research terminology", completed: false },
              { id: "c2-v3-2", title: "Philosophical and abstract lexicon", completed: false },
              { id: "c2-v3-3", title: "Interdisciplinary technical vocabulary", completed: false },
              { id: "c2-v3-4", title: "Academic publication language", completed: false },
            ]
          },
          {
            id: "c2-vocab-4",
            title: "Rhetorical and literary devices",
            description: "Rhetorical and literary devices",
            completed: false,
            subSkills: [
              { id: "c2-v4-1", title: "Alliteration, assonance, onomatopoeia", completed: false },
              { id: "c2-v4-2", title: "Metonymy and synecdoche", completed: false },
              { id: "c2-v4-3", title: "Hyperbole and litotes", completed: false },
              { id: "c2-v4-4", title: "Oxymoron and paradox", completed: false },
            ]
          },
          {
            id: "c2-vocab-5",
            title: "Complete register and tone control",
            description: "Complete register and tone control",
            completed: false,
            subSkills: [
              { id: "c2-v5-1", title: "Fluid register switching", completed: false },
              { id: "c2-v5-2", title: "Appropriate tone for each genre", completed: false },
              { id: "c2-v5-3", title: "Sophisticated humor and wit", completed: false },
              { id: "c2-v5-4", title: "Calibrated irony and sarcasm", completed: false },
            ]
          },
          {
            id: "c2-vocab-6",
            title: "Professional domain vocabulary",
            description: "Professional domain vocabulary",
            completed: false,
            subSkills: [
              { id: "c2-v6-1", title: "Legal and contractual", completed: false },
              { id: "c2-v6-2", title: "Medical and scientific", completed: false },
              { id: "c2-v6-3", title: "Financial and economic", completed: false },
              { id: "c2-v6-4", title: "Diplomatic and political", completed: false },
            ]
          },
        ]
      },
      {
        id: "c2-grammar",
        title: "Grammar: Native Precision and Style",
        icon: "🧩",
        description: "Impeccable grammatical control with stylistic variation and linguistic creativity",
        skills: [
          {
            id: "c2-gram-1",
            title: "Rare and literary grammatical structures",
            description: "Rare and literary grammatical structures",
            completed: false,
            subSkills: [
              { id: "c2-g1-1", title: "Subjunctive in all its uses", completed: false },
              { id: "c2-g1-2", title: "Complex stylistic inversion", completed: false },
              { id: "c2-g1-3", title: "Purposeful archaic structures", completed: false },
              { id: "c2-g1-4", title: "Controlled parenthetical sentences and digressions", completed: false },
            ]
          },
          {
            id: "c2-gram-2",
            title: "Narrative time manipulation",
            description: "Narrative time manipulation",
            completed: false,
            subSkills: [
              { id: "c2-g2-1", title: "Effective historical present", completed: false },
              { id: "c2-g2-2", title: "Grammatical flashbacks and flash-forwards", completed: false },
              { id: "c2-g2-3", title: "Subtle perfective vs imperfective aspect", completed: false },
              { id: "c2-g2-4", title: "Complex future in the past", completed: false },
            ]
          },
          {
            id: "c2-gram-3",
            title: "Advanced modality",
            description: "Advanced modality",
            completed: false,
            subSkills: [
              { id: "c2-g3-1", title: "Subtle degrees of certainty and probability", completed: false },
              { id: "c2-g3-2", title: "Perfect modals in complex contexts", completed: false },
              { id: "c2-g3-3", title: "Expression of regret and speculation", completed: false },
              { id: "c2-g3-4", title: "Nuanced obligation and permission", completed: false },
            ]
          },
          {
            id: "c2-gram-4",
            title: "Advanced textual cohesion",
            description: "Advanced textual cohesion",
            completed: false,
            subSkills: [
              { id: "c2-g4-1", title: "Complex reference chains", completed: false },
              { id: "c2-g4-2", title: "Sophisticated ellipsis", completed: false },
              { id: "c2-g4-3", title: "Discourse connectors for argumentation", completed: false },
              { id: "c2-g4-4", title: "Theme and rheme for emphasis", completed: false },
            ]
          },
          {
            id: "c2-gram-5",
            title: "Syntactic variation for effect",
            description: "Syntactic variation for effect",
            completed: false,
            subSkills: [
              { id: "c2-g5-1", title: "Periodic vs loose sentences", completed: false },
              { id: "c2-g5-2", title: "Parallelism and antithesis", completed: false },
              { id: "c2-g5-3", title: "Strategic length variation", completed: false },
              { id: "c2-g5-4", title: "Purposeful fragments and minor sentences", completed: false },
            ]
          },
          {
            id: "c2-gram-6",
            title: "Error-free formal writing",
            description: "Error-free formal writing",
            completed: false,
            subSkills: [
              { id: "c2-g6-1", title: "Perfect agreement in complex structures", completed: false },
              { id: "c2-g6-2", title: "Impeccable punctuation", completed: false },
              { id: "c2-g6-3", title: "Correct article use in all cases", completed: false },
              { id: "c2-g6-4", title: "Prepositions in fixed expressions", completed: false },
            ]
          },
        ]
      },
      {
        id: "c2-speaking",
        title: "Speaking: Native Fluency",
        icon: "🗣️",
        description: "Oral communication indistinguishable from an educated native speaker",
        skills: [
          {
            id: "c2-speak-1",
            title: "Complete fluency and spontaneity",
            description: "Complete fluency and spontaneity",
            completed: false,
            subSkills: [
              { id: "c2-s1-1", title: "Speak on any topic without preparation", completed: false },
              { id: "c2-s1-2", title: "Reformulate ideas instantly", completed: false },
              { id: "c2-s1-3", title: "Switch topics fluidly", completed: false },
              { id: "c2-s1-4", title: "Handle interruptions without losing thread", completed: false },
            ]
          },
          {
            id: "c2-speak-2",
            title: "Advanced oratory and presentation",
            description: "Advanced oratory and presentation",
            completed: false,
            subSkills: [
              { id: "c2-s2-1", title: "Persuasive formal speeches", completed: false },
              { id: "c2-s2-2", title: "High-level academic presentations", completed: false },
              { id: "c2-s2-3", title: "Professional storytelling", completed: false },
              { id: "c2-s2-4", title: "Handle hostile Q&A", completed: false },
            ]
          },
          {
            id: "c2-speak-3",
            title: "Sophisticated humor and wit",
            description: "Sophisticated humor and wit",
            completed: false,
            subSkills: [
              { id: "c2-s3-1", title: "Wordplay and puns", completed: false },
              { id: "c2-s3-2", title: "Cultural humor and references", completed: false },
              { id: "c2-s3-3", title: "Comic timing", completed: false },
              { id: "c2-s3-4", title: "Appropriate self-deprecating humor", completed: false },
            ]
          },
          {
            id: "c2-speak-4",
            title: "High-level negotiation and diplomacy",
            description: "High-level negotiation and diplomacy",
            completed: false,
            subSkills: [
              { id: "c2-s4-1", title: "Complex multi-party negotiations", completed: false },
              { id: "c2-s4-2", title: "Mediation and conflict resolution", completed: false },
              { id: "c2-s4-3", title: "Crisis communication", completed: false },
              { id: "c2-s4-4", title: "Precise diplomatic language", completed: false },
            ]
          },
          {
            id: "c2-speak-5",
            title: "Native prosody and intonation",
            description: "Native prosody and intonation",
            completed: false,
            subSkills: [
              { id: "c2-s5-1", title: "Intonation for emphasis and attitude", completed: false },
              { id: "c2-s5-2", title: "Strategic rhythm and pauses", completed: false },
              { id: "c2-s5-3", title: "Natural reduction and linking", completed: false },
              { id: "c2-s5-4", title: "Stress patterns in complex words", completed: false },
            ]
          },
          {
            id: "c2-speak-6",
            title: "Philosophical and abstract argumentation",
            description: "Philosophical and abstract argumentation",
            completed: false,
            subSkills: [
              { id: "c2-s6-1", title: "Debate abstract concepts", completed: false },
              { id: "c2-s6-2", title: "Explore complex hypotheses orally", completed: false },
              { id: "c2-s6-3", title: "Synthesize multiple perspectives", completed: false },
              { id: "c2-s6-4", title: "Communicate original ideas clearly", completed: false },
            ]
          },
        ]
      },
      {
        id: "c2-listening",
        title: "Listening: Effortless Comprehension",
        icon: "👂",
        description: "Complete understanding of any type of spoken English",
        skills: [
          {
            id: "c2-list-1",
            title: "Any variety of English",
            description: "Any variety of English",
            completed: false,
            subSkills: [
              { id: "c2-l1-1", title: "Regional British accents", completed: false },
              { id: "c2-l1-2", title: "Regional American accents", completed: false },
              { id: "c2-l1-3", title: "Australian, South African, Indian English", completed: false },
              { id: "c2-l1-4", title: "Non-native English with strong accents", completed: false },
            ]
          },
          {
            id: "c2-list-2",
            title: "Complex specialized content",
            description: "Complex specialized content",
            completed: false,
            subSkills: [
              { id: "c2-l2-1", title: "Technical and scientific presentations", completed: false },
              { id: "c2-l2-2", title: "Legal and financial discussions", completed: false },
              { id: "c2-l2-3", title: "Academic conferences", completed: false },
              { id: "c2-l2-4", title: "Expert panel discussions", completed: false },
            ]
          },
          {
            id: "c2-list-3",
            title: "Implicit meaning and subtext",
            description: "Implicit meaning and subtext",
            completed: false,
            subSkills: [
              { id: "c2-l3-1", title: "Detect underlying messages", completed: false },
              { id: "c2-l3-2", title: "Understand political subtext", completed: false },
              { id: "c2-l3-3", title: "Grasp emotional undertones", completed: false },
              { id: "c2-l3-4", title: "Identify hidden agendas", completed: false },
            ]
          },
          {
            id: "c2-list-4",
            title: "Unrestricted media and entertainment",
            description: "Unrestricted media and entertainment",
            completed: false,
            subSkills: [
              { id: "c2-l4-1", title: "Any film or TV show without subtitles", completed: false },
              { id: "c2-l4-2", title: "Stand-up comedy and satire", completed: false },
              { id: "c2-l4-3", title: "Radio drama and audiobooks", completed: false },
              { id: "c2-l4-4", title: "Live theater and performances", completed: false },
            ]
          },
          {
            id: "c2-list-5",
            title: "Understanding cultural nuances",
            description: "Understanding cultural nuances",
            completed: false,
            subSkills: [
              { id: "c2-l5-1", title: "Cultural references and allusions", completed: false },
              { id: "c2-l5-2", title: "Historical and social context", completed: false },
              { id: "c2-l5-3", title: "Generational and regional differences", completed: false },
              { id: "c2-l5-4", title: "Pop culture references", completed: false },
            ]
          },
        ]
      },
      {
        id: "c2-reading",
        title: "Reading: Complete Comprehension",
        icon: "📖",
        description: "Read any text with complete understanding and stylistic appreciation",
        skills: [
          {
            id: "c2-read-1",
            title: "Classic and contemporary literature",
            description: "Classic and contemporary literature",
            completed: false,
            subSkills: [
              { id: "c2-r1-1", title: "Canonical literary works", completed: false },
              { id: "c2-r1-2", title: "Contemporary fiction", completed: false },
              { id: "c2-r1-3", title: "Poetry across eras", completed: false },
              { id: "c2-r1-4", title: "Drama and theatrical texts", completed: false },
            ]
          },
          {
            id: "c2-read-2",
            title: "Academic research texts",
            description: "Academic research texts",
            completed: false,
            subSkills: [
              { id: "c2-r2-1", title: "Peer-reviewed journal articles", completed: false },
              { id: "c2-r2-2", title: "Doctoral dissertations", completed: false },
              { id: "c2-r2-3", title: "Theoretical frameworks", completed: false },
              { id: "c2-r2-4", title: "Meta-analyses", completed: false },
            ]
          },
          {
            id: "c2-read-3",
            title: "Legal and technical documents",
            description: "Legal and technical documents",
            completed: false,
            subSkills: [
              { id: "c2-r3-1", title: "Contracts and legal agreements", completed: false },
              { id: "c2-r3-2", title: "Technical specifications", completed: false },
              { id: "c2-r3-3", title: "Regulatory documents", completed: false },
              { id: "c2-r3-4", title: "Patent applications", completed: false },
            ]
          },
          {
            id: "c2-read-4",
            title: "Literary and critical analysis",
            description: "Literary and critical analysis",
            completed: false,
            subSkills: [
              { id: "c2-r4-1", title: "Literary criticism", completed: false },
              { id: "c2-r4-2", title: "Theoretical essays", completed: false },
              { id: "c2-r4-3", title: "Philosophical texts", completed: false },
              { id: "c2-r4-4", title: "Cultural studies", completed: false },
            ]
          },
          {
            id: "c2-read-5",
            title: "Speed reading with full retention",
            description: "Speed reading with full retention",
            completed: false,
            subSkills: [
              { id: "c2-r5-1", title: "Rapid text processing", completed: false },
              { id: "c2-r5-2", title: "Key information extraction", completed: false },
              { id: "c2-r5-3", title: "Comprehensive recall", completed: false },
              { id: "c2-r5-4", title: "Efficient research reading", completed: false },
            ]
          },
          {
            id: "c2-read-6",
            title: "Stylistic appreciation",
            description: "Stylistic appreciation",
            completed: false,
            subSkills: [
              { id: "c2-r6-1", title: "Identify author's voice", completed: false },
              { id: "c2-r6-2", title: "Appreciate stylistic choices", completed: false },
              { id: "c2-r6-3", title: "Understand literary techniques", completed: false },
              { id: "c2-r6-4", title: "Compare writing styles", completed: false },
            ]
          },
        ]
      },
      {
        id: "c2-writing",
        title: "Writing: Professional Excellence",
        icon: "✍️",
        description: "Publication-quality written production in any genre",
        skills: [
          {
            id: "c2-write-1",
            title: "Publication-quality academic writing",
            description: "Publication-quality academic writing",
            completed: false,
            subSkills: [
              { id: "c2-w1-1", title: "Peer-reviewed journal articles", completed: false },
              { id: "c2-w1-2", title: "Academic book chapters", completed: false },
              { id: "c2-w1-3", title: "Grant proposals and applications", completed: false },
              { id: "c2-w1-4", title: "Abstracts and conference papers", completed: false },
            ]
          },
          {
            id: "c2-write-2",
            title: "Executive professional writing",
            description: "Executive professional writing",
            completed: false,
            subSkills: [
              { id: "c2-w2-1", title: "Executive reports", completed: false },
              { id: "c2-w2-2", title: "Corporate communications", completed: false },
              { id: "c2-w2-3", title: "Strategic documents", completed: false },
              { id: "c2-w2-4", title: "High-level correspondence", completed: false },
            ]
          },
          {
            id: "c2-write-3",
            title: "Creative writing",
            description: "Creative writing",
            completed: false,
            subSkills: [
              { id: "c2-w3-1", title: "Short fiction and narrative", completed: false },
              { id: "c2-w3-2", title: "Poetry with formal control", completed: false },
              { id: "c2-w3-3", title: "Personal and creative essays", completed: false },
              { id: "c2-w3-4", title: "Scripts and dialogue", completed: false },
            ]
          },
          {
            id: "c2-write-4",
            title: "Advanced journalistic writing",
            description: "Advanced journalistic writing",
            completed: false,
            subSkills: [
              { id: "c2-w4-1", title: "Investigative reports", completed: false },
              { id: "c2-w4-2", title: "Opinion columns", completed: false },
              { id: "c2-w4-3", title: "Profiles and interviews", completed: false },
              { id: "c2-w4-4", title: "Professional reviews and critiques", completed: false },
            ]
          },
          {
            id: "c2-write-5",
            title: "Editing and revision",
            description: "Editing and revision",
            completed: false,
            subSkills: [
              { id: "c2-w5-1", title: "Rigorous self-editing", completed: false },
              { id: "c2-w5-2", title: "Style and clarity editing", completed: false },
              { id: "c2-w5-3", title: "Professional copyediting", completed: false },
              { id: "c2-w5-4", title: "Constructive feedback to others", completed: false },
            ]
          },
          {
            id: "c2-write-6",
            title: "Distinctive voice and style",
            description: "Distinctive voice and style",
            completed: false,
            subSkills: [
              { id: "c2-w6-1", title: "Develop unique authorial voice", completed: false },
              { id: "c2-w6-2", title: "Adapt style to different genres", completed: false },
              { id: "c2-w6-3", title: "Create tonal consistency", completed: false },
              { id: "c2-w6-4", title: "Innovate within conventions", completed: false },
            ]
          },
        ]
      },
      {
        id: "c2-strategies",
        title: "Sociocultural and Metacognitive Competence",
        icon: "🧭",
        description: "Expert navigation of complex cultural and communicative contexts",
        skills: [
          {
            id: "c2-strat-1",
            title: "Advanced intercultural competence",
            description: "Advanced intercultural competence",
            completed: false,
            subSkills: [
              { id: "c2-st1-1", title: "Navigate subtle cultural differences", completed: false },
              { id: "c2-st1-2", title: "Adapt behavior to local norms", completed: false },
              { id: "c2-st1-3", title: "Mediate between cultures", completed: false },
              { id: "c2-st1-4", title: "Avoid cultural misunderstandings", completed: false },
            ]
          },
          {
            id: "c2-strat-2",
            title: "Linguistic metacognition",
            description: "Linguistic metacognition",
            completed: false,
            subSkills: [
              { id: "c2-st2-1", title: "Reflect on own language use", completed: false },
              { id: "c2-st2-2", title: "Identify areas for continuous improvement", completed: false },
              { id: "c2-st2-3", title: "Learn new vocabulary efficiently", completed: false },
              { id: "c2-st2-4", title: "Maintain and expand competence", completed: false },
            ]
          },
          {
            id: "c2-strat-3",
            title: "High-stakes communication",
            description: "High-stakes communication",
            completed: false,
            subSkills: [
              { id: "c2-st3-1", title: "Executive job interviews", completed: false },
              { id: "c2-st3-2", title: "Investor presentations", completed: false },
              { id: "c2-st3-3", title: "Crisis communication", completed: false },
              { id: "c2-st3-4", title: "Critical negotiations", completed: false },
            ]
          },
          {
            id: "c2-strat-4",
            title: "Teaching and explaining language",
            description: "Teaching and explaining language",
            completed: false,
            subSkills: [
              { id: "c2-st4-1", title: "Explain grammar to non-natives", completed: false },
              { id: "c2-st4-2", title: "Give useful linguistic feedback", completed: false },
              { id: "c2-st4-3", title: "Create clear examples", completed: false },
              { id: "c2-st4-4", title: "Adapt explanations to listener's level", completed: false },
            ]
          },
          {
            id: "c2-strat-5",
            title: "Linguistic emotional intelligence",
            description: "Linguistic emotional intelligence",
            completed: false,
            subSkills: [
              { id: "c2-st5-1", title: "Read emotions through language", completed: false },
              { id: "c2-st5-2", title: "Respond empathetically", completed: false },
              { id: "c2-st5-3", title: "Handle difficult conversations", completed: false },
              { id: "c2-st5-4", title: "Communicate complex emotions precisely", completed: false },
            ]
          },
          {
            id: "c2-strat-6",
            title: "Translation and interpretation",
            description: "Translation and interpretation",
            completed: false,
            subSkills: [
              { id: "c2-st6-1", title: "Translate with semantic precision", completed: false },
              { id: "c2-st6-2", title: "Maintain tone and register when translating", completed: false },
              { id: "c2-st6-3", title: "Simultaneous interpretation (basic)", completed: false },
              { id: "c2-st6-4", title: "Culturally adapt content", completed: false },
            ]
          },
        ]
      },
    ]
  },
];

export const getLevelProgress = (level: CEFRLevel, completedSkills: string[]): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;

  let totalSubSkills = 0;
  let completedSubSkills = 0;

  levelData.categories.forEach(category => {
    category.skills.forEach(skill => {
      skill.subSkills.forEach(subSkill => {
        totalSubSkills++;
        if (completedSkills.includes(subSkill.id)) {
          completedSubSkills++;
        }
      });
    });
  });

  return totalSubSkills > 0 ? Math.round((completedSubSkills / totalSubSkills) * 100) : 0;
};

export const getSkillProgress = (skillId: string, completedSkills: string[], curriculumLevel: LevelCurriculum): number => {
  for (const category of curriculumLevel.categories) {
    const skill = category.skills.find(s => s.id === skillId);
    if (skill) {
      const completedCount = skill.subSkills.filter(sub => completedSkills.includes(sub.id)).length;
      return skill.subSkills.length > 0 ? Math.round((completedCount / skill.subSkills.length) * 100) : 0;
    }
  }
  return 0;
};

export const getCategoryProgress = (categoryId: string, completedSkills: string[], curriculumLevel: LevelCurriculum): number => {
  const category = curriculumLevel.categories.find(c => c.id === categoryId);
  if (!category) return 0;

  let totalSubSkills = 0;
  let completedSubSkillsCount = 0;

  category.skills.forEach(skill => {
    skill.subSkills.forEach(subSkill => {
      totalSubSkills++;
      if (completedSkills.includes(subSkill.id)) {
        completedSubSkillsCount++;
      }
    });
  });

  return totalSubSkills > 0 ? Math.round((completedSubSkillsCount / totalSubSkills) * 100) : 0;
};
