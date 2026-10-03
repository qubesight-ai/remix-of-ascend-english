import { b1VocabularyThemes } from "./vocabularyCurriculumComplete";

export interface VocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
  learned: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
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

// B1 categories generated from curriculum themes (15 themes with exercises)
const b1ThemeIcons: Record<string, string> = {
  "b1-theme-education": "📚",
  "b1-theme-business": "💼",
  "b1-theme-politics": "🏛️",
  "b1-theme-environment": "🌍",
  "b1-theme-media": "📰",
  "b1-theme-law": "⚖️",
  "b1-theme-science": "🔬",
  "b1-theme-art": "🎨",
  "b1-theme-relationships": "🤝",
  "b1-theme-travel": "✈️",
  "b1-theme-cuisine": "🍽️",
  "b1-theme-architecture": "🏗️",
  "b1-theme-literature": "📖",
  "b1-theme-music": "🎵",
  "b1-theme-fashion": "👗",
};

const b1VocabularyCategories: VocabularyCategory[] = b1VocabularyThemes.map((theme, tIdx) => ({
  id: theme.id,
  title: theme.title,
  icon: b1ThemeIcons[theme.id] || "📚",
  wordCount: theme.words.length,
  learned: 0,
  level: "B1",
  words: theme.words.map((w, wIdx) => ({
    id: `${theme.id}-w${wIdx + 1}`,
    english: w.word,
    definition: w.definition,
    pronunciation: `/${w.word.replace(/\s/g, "-")}/`,
    example: w.example,
    context: w.partOfSpeech,
    mastered: false,
  })),
}));

// Helper functions for vocabulary data
export const getVocabularyByLevel = (level: string): VocabularyCategory[] => {
  return expandedVocabularyCategories.filter(cat => cat.level === level);
};

export const getTotalWordCount = (): number => {
  return expandedVocabularyCategories.reduce((sum, cat) => sum + cat.words.length, 0);
};

export const getCategoryCount = (): number => {
  return expandedVocabularyCategories.length;
};

export const expandedVocabularyCategories: VocabularyCategory[] = [
  // A1 Categories
  {
    id: "greetings",
    title: "Greetings & Introductions",
    icon: "👋",
    wordCount: 15,
    learned: 0,
    level: "A1",
    words: [
      { id: "g1", english: "Hello", definition: "A common greeting", pronunciation: "/həˈloʊ/", example: "Hello, how are you?", context: "Universal greeting for any time of day", mastered: false },
      { id: "g2", english: "Goodbye", definition: "A farewell expression", pronunciation: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow!", context: "Used when leaving or ending a conversation", mastered: false },
      { id: "g3", english: "Good morning", definition: "Morning greeting", pronunciation: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, everyone!", context: "Used until around noon", mastered: false },
      { id: "g4", english: "Nice to meet you", definition: "Polite introduction phrase", pronunciation: "/naɪs tuː miːt juː/", example: "Nice to meet you. I'm John.", context: "Said when first introduced to someone", mastered: false },
      { id: "g5", english: "How are you?", definition: "Inquiry about wellbeing", pronunciation: "/haʊ ɑːr juː/", example: "Hi! How are you doing today?", context: "Common conversational opener", mastered: false },
      { id: "g6", english: "Good afternoon", definition: "Afternoon greeting", pronunciation: "/ɡʊd ˌæftərˈnuːn/", example: "Good afternoon, welcome to our office.", context: "Used from noon until evening", mastered: false },
      { id: "g7", english: "Good evening", definition: "Evening greeting", pronunciation: "/ɡʊd ˈiːvnɪŋ/", example: "Good evening, ladies and gentlemen.", context: "Used in the evening hours", mastered: false },
      { id: "g8", english: "See you later", definition: "Casual farewell", pronunciation: "/siː juː ˈleɪtər/", example: "See you later at the party!", context: "Informal way to say goodbye", mastered: false },
      { id: "g9", english: "Thank you", definition: "Expression of gratitude", pronunciation: "/θæŋk juː/", example: "Thank you for your help.", context: "Essential polite phrase", mastered: false },
      { id: "g10", english: "Please", definition: "Polite request word", pronunciation: "/pliːz/", example: "Please sit down.", context: "Used to make requests polite", mastered: false },
      { id: "g11", english: "Excuse me", definition: "Polite interruption phrase", pronunciation: "/ɪkˈskjuːz miː/", example: "Excuse me, where is the bathroom?", context: "Used to get attention or apologize", mastered: false },
      { id: "g12", english: "Sorry", definition: "Apology expression", pronunciation: "/ˈsɒri/", example: "Sorry, I'm late.", context: "Used to express regret", mastered: false },
      { id: "g13", english: "Welcome", definition: "Greeting for arrivals", pronunciation: "/ˈwelkəm/", example: "Welcome to our home!", context: "Used to greet guests", mastered: false },
      { id: "g14", english: "Yes", definition: "Affirmative response", pronunciation: "/jes/", example: "Yes, I understand.", context: "Used to confirm or agree", mastered: false },
      { id: "g15", english: "No", definition: "Negative response", pronunciation: "/noʊ/", example: "No, thank you.", context: "Used to decline or disagree", mastered: false },
    ]
  },
  {
    id: "family",
    title: "Family Members",
    icon: "👨‍👩‍👧‍👦",
    wordCount: 15,
    learned: 0,
    level: "A1",
    words: [
      { id: "f1", english: "Mother", definition: "Female parent", pronunciation: "/ˈmʌðər/", example: "My mother is a teacher.", context: "Informal: mom, mum, mama", mastered: false },
      { id: "f2", english: "Father", definition: "Male parent", pronunciation: "/ˈfɑːðər/", example: "My father works at a bank.", context: "Informal: dad, daddy, papa", mastered: false },
      { id: "f3", english: "Brother", definition: "Male sibling", pronunciation: "/ˈbrʌðər/", example: "I have two brothers.", context: "Son of the same parents", mastered: false },
      { id: "f4", english: "Sister", definition: "Female sibling", pronunciation: "/ˈsɪstər/", example: "My sister lives in London.", context: "Daughter of the same parents", mastered: false },
      { id: "f5", english: "Grandfather", definition: "Father of a parent", pronunciation: "/ˈɡrænfɑːðər/", example: "My grandfather is 80 years old.", context: "Informal: grandpa, granddad", mastered: false },
      { id: "f6", english: "Grandmother", definition: "Mother of a parent", pronunciation: "/ˈɡrænmʌðər/", example: "My grandmother makes delicious cookies.", context: "Informal: grandma, granny", mastered: false },
      { id: "f7", english: "Son", definition: "Male child", pronunciation: "/sʌn/", example: "Their son is a doctor.", context: "A male offspring", mastered: false },
      { id: "f8", english: "Daughter", definition: "Female child", pronunciation: "/ˈdɔːtər/", example: "My daughter loves music.", context: "A female offspring", mastered: false },
      { id: "f9", english: "Uncle", definition: "Brother of a parent", pronunciation: "/ˈʌŋkl/", example: "My uncle lives in Canada.", context: "Also husband of an aunt", mastered: false },
      { id: "f10", english: "Aunt", definition: "Sister of a parent", pronunciation: "/ænt/", example: "My aunt is visiting us next week.", context: "Also wife of an uncle", mastered: false },
      { id: "f11", english: "Cousin", definition: "Child of an aunt or uncle", pronunciation: "/ˈkʌzn/", example: "I have five cousins.", context: "Can be male or female", mastered: false },
      { id: "f12", english: "Husband", definition: "Married male partner", pronunciation: "/ˈhʌzbənd/", example: "Her husband is very kind.", context: "Male spouse", mastered: false },
      { id: "f13", english: "Wife", definition: "Married female partner", pronunciation: "/waɪf/", example: "His wife is a lawyer.", context: "Female spouse", mastered: false },
      { id: "f14", english: "Parents", definition: "Mother and father together", pronunciation: "/ˈperənts/", example: "My parents are retired.", context: "Both mother and father", mastered: false },
      { id: "f15", english: "Children", definition: "Sons and daughters", pronunciation: "/ˈtʃɪldrən/", example: "They have three children.", context: "Plural of child", mastered: false },
    ]
  },
  {
    id: "food",
    title: "Food & Drinks",
    icon: "🍕",
    wordCount: 20,
    learned: 0,
    level: "A1",
    words: [
      { id: "fd1", english: "Water", definition: "Clear drinking liquid", pronunciation: "/ˈwɔːtər/", example: "Can I have some water, please?", context: "Essential for hydration", mastered: false },
      { id: "fd2", english: "Bread", definition: "Baked food made from flour", pronunciation: "/bred/", example: "I eat bread for breakfast.", context: "Staple food worldwide", mastered: false },
      { id: "fd3", english: "Coffee", definition: "Hot beverage from roasted beans", pronunciation: "/ˈkɔːfi/", example: "I drink coffee every morning.", context: "Contains caffeine", mastered: false },
      { id: "fd4", english: "Tea", definition: "Hot beverage from dried leaves", pronunciation: "/tiː/", example: "Would you like some tea?", context: "Popular worldwide", mastered: false },
      { id: "fd5", english: "Milk", definition: "White liquid from cows", pronunciation: "/mɪlk/", example: "Children need milk to grow.", context: "Source of calcium", mastered: false },
      { id: "fd6", english: "Apple", definition: "Round red or green fruit", pronunciation: "/ˈæpl/", example: "An apple a day keeps the doctor away.", context: "Common healthy snack", mastered: false },
      { id: "fd7", english: "Banana", definition: "Yellow curved fruit", pronunciation: "/bəˈnænə/", example: "I like bananas in my cereal.", context: "Rich in potassium", mastered: false },
      { id: "fd8", english: "Chicken", definition: "Poultry meat", pronunciation: "/ˈtʃɪkɪn/", example: "We're having chicken for dinner.", context: "Common protein source", mastered: false },
      { id: "fd9", english: "Rice", definition: "Small white grains", pronunciation: "/raɪs/", example: "Rice is a staple food in many countries.", context: "Major food source globally", mastered: false },
      { id: "fd10", english: "Egg", definition: "Oval food from chickens", pronunciation: "/eɡ/", example: "I like eggs for breakfast.", context: "Versatile cooking ingredient", mastered: false },
      { id: "fd11", english: "Cheese", definition: "Dairy product from milk", pronunciation: "/tʃiːz/", example: "This pizza has extra cheese.", context: "Many varieties exist", mastered: false },
      { id: "fd12", english: "Fish", definition: "Aquatic animal as food", pronunciation: "/fɪʃ/", example: "Fish is good for your health.", context: "Rich in omega-3", mastered: false },
      { id: "fd13", english: "Meat", definition: "Animal flesh as food", pronunciation: "/miːt/", example: "I don't eat meat.", context: "Includes beef, pork, lamb", mastered: false },
      { id: "fd14", english: "Vegetable", definition: "Edible plant or plant part", pronunciation: "/ˈvedʒtəbl/", example: "Eat your vegetables!", context: "Essential for nutrition", mastered: false },
      { id: "fd15", english: "Fruit", definition: "Sweet plant product with seeds", pronunciation: "/fruːt/", example: "Fresh fruit is healthy.", context: "Natural source of vitamins", mastered: false },
      { id: "fd16", english: "Sugar", definition: "Sweet crystalline substance", pronunciation: "/ˈʃʊɡər/", example: "Do you take sugar in your coffee?", context: "Used to sweeten food", mastered: false },
      { id: "fd17", english: "Salt", definition: "White seasoning mineral", pronunciation: "/sɔːlt/", example: "This soup needs more salt.", context: "Enhances flavor", mastered: false },
      { id: "fd18", english: "Orange", definition: "Round citrus fruit", pronunciation: "/ˈɔːrɪndʒ/", example: "I drink orange juice every morning.", context: "High in vitamin C", mastered: false },
      { id: "fd19", english: "Soup", definition: "Liquid food in a bowl", pronunciation: "/suːp/", example: "Chicken soup is good when you're sick.", context: "Can be hot or cold", mastered: false },
      { id: "fd20", english: "Sandwich", definition: "Food between bread slices", pronunciation: "/ˈsænwɪtʃ/", example: "I'll have a ham sandwich, please.", context: "Popular lunch option", mastered: false },
    ]
  },
  {
    id: "colors-numbers",
    title: "Colors & Numbers",
    icon: "🎨",
    wordCount: 20,
    learned: 0,
    level: "A1",
    words: [
      { id: "cn1", english: "Red", definition: "Color of blood or fire", pronunciation: "/red/", example: "The apple is red.", context: "Primary color", mastered: false },
      { id: "cn2", english: "Blue", definition: "Color of the sky", pronunciation: "/bluː/", example: "The sky is blue.", context: "Primary color", mastered: false },
      { id: "cn3", english: "Green", definition: "Color of grass", pronunciation: "/ɡriːn/", example: "The grass is green.", context: "Secondary color (blue + yellow)", mastered: false },
      { id: "cn4", english: "Yellow", definition: "Color of the sun", pronunciation: "/ˈjeloʊ/", example: "Bananas are yellow.", context: "Primary color", mastered: false },
      { id: "cn5", english: "Black", definition: "Darkest color", pronunciation: "/blæk/", example: "I have a black cat.", context: "Absence of light", mastered: false },
      { id: "cn6", english: "White", definition: "Lightest color", pronunciation: "/waɪt/", example: "Snow is white.", context: "Combination of all colors", mastered: false },
      { id: "cn7", english: "Orange", definition: "Color between red and yellow", pronunciation: "/ˈɔːrɪndʒ/", example: "The sunset is orange.", context: "Named after the fruit", mastered: false },
      { id: "cn8", english: "Pink", definition: "Light red color", pronunciation: "/pɪŋk/", example: "She loves pink flowers.", context: "Often associated with romance", mastered: false },
      { id: "cn9", english: "Purple", definition: "Color between red and blue", pronunciation: "/ˈpɜːrpl/", example: "Grapes can be purple.", context: "Historically royal color", mastered: false },
      { id: "cn10", english: "Brown", definition: "Color of earth or wood", pronunciation: "/braʊn/", example: "The dog is brown.", context: "Natural, earthy color", mastered: false },
      { id: "cn11", english: "One", definition: "The number 1", pronunciation: "/wʌn/", example: "I have one sister.", context: "First counting number", mastered: false },
      { id: "cn12", english: "Two", definition: "The number 2", pronunciation: "/tuː/", example: "She has two dogs.", context: "Second counting number", mastered: false },
      { id: "cn13", english: "Three", definition: "The number 3", pronunciation: "/θriː/", example: "There are three books on the table.", context: "Third counting number", mastered: false },
      { id: "cn14", english: "Ten", definition: "The number 10", pronunciation: "/ten/", example: "I counted to ten.", context: "Base of decimal system", mastered: false },
      { id: "cn15", english: "Twenty", definition: "The number 20", pronunciation: "/ˈtwenti/", example: "The class has twenty students.", context: "Two times ten", mastered: false },
      { id: "cn16", english: "Hundred", definition: "The number 100", pronunciation: "/ˈhʌndrəd/", example: "I need a hundred dollars.", context: "Ten times ten", mastered: false },
      { id: "cn17", english: "First", definition: "Position number one", pronunciation: "/fɜːrst/", example: "She finished first.", context: "Ordinal number", mastered: false },
      { id: "cn18", english: "Second", definition: "Position number two", pronunciation: "/ˈsekənd/", example: "He came in second place.", context: "Ordinal number", mastered: false },
      { id: "cn19", english: "Half", definition: "One of two equal parts", pronunciation: "/hæf/", example: "I ate half the pizza.", context: "50% of something", mastered: false },
      { id: "cn20", english: "Zero", definition: "The number 0", pronunciation: "/ˈzɪroʊ/", example: "The temperature is zero degrees.", context: "Represents nothing", mastered: false },
    ]
  },
  // A2 Categories
  {
    id: "travel",
    title: "Travel & Transport",
    icon: "✈️",
    wordCount: 20,
    learned: 0,
    level: "A2",
    words: [
      { id: "t1", english: "Airport", definition: "Place for airplane departures", pronunciation: "/ˈeərpɔːrt/", example: "The airport is 30 minutes away.", context: "Contains terminals and runways", mastered: false },
      { id: "t2", english: "Flight", definition: "Journey by airplane", pronunciation: "/flaɪt/", example: "My flight leaves at 8 AM.", context: "Can be domestic or international", mastered: false },
      { id: "t3", english: "Passport", definition: "International travel document", pronunciation: "/ˈpæspɔːrt/", example: "Don't forget your passport!", context: "Required for border crossing", mastered: false },
      { id: "t4", english: "Luggage", definition: "Travel bags and suitcases", pronunciation: "/ˈlʌɡɪdʒ/", example: "I need to pick up my luggage.", context: "Also called baggage", mastered: false },
      { id: "t5", english: "Ticket", definition: "Document for travel or entry", pronunciation: "/ˈtɪkɪt/", example: "I bought my ticket online.", context: "Proof of purchase", mastered: false },
      { id: "t6", english: "Train", definition: "Rail transport vehicle", pronunciation: "/treɪn/", example: "The train arrives at 3 PM.", context: "Runs on tracks", mastered: false },
      { id: "t7", english: "Bus", definition: "Large road passenger vehicle", pronunciation: "/bʌs/", example: "I take the bus to work.", context: "Public transportation", mastered: false },
      { id: "t8", english: "Taxi", definition: "Hired car with driver", pronunciation: "/ˈtæksi/", example: "Let's take a taxi.", context: "Also called cab", mastered: false },
      { id: "t9", english: "Hotel", definition: "Accommodation for travelers", pronunciation: "/hoʊˈtel/", example: "We're staying at a nice hotel.", context: "Offers rooms and services", mastered: false },
      { id: "t10", english: "Reservation", definition: "Advance booking", pronunciation: "/ˌrezərˈveɪʃn/", example: "I have a reservation for tonight.", context: "Secures a spot in advance", mastered: false },
      { id: "t11", english: "Departure", definition: "Act of leaving", pronunciation: "/dɪˈpɑːrtʃər/", example: "The departure is delayed.", context: "Opposite of arrival", mastered: false },
      { id: "t12", english: "Arrival", definition: "Act of reaching destination", pronunciation: "/əˈraɪvl/", example: "Check the arrival time.", context: "Opposite of departure", mastered: false },
      { id: "t13", english: "Map", definition: "Visual representation of area", pronunciation: "/mæp/", example: "Do you have a map?", context: "Used for navigation", mastered: false },
      { id: "t14", english: "Tourist", definition: "Person traveling for pleasure", pronunciation: "/ˈtʊrɪst/", example: "The city is full of tourists.", context: "Visitor to new places", mastered: false },
      { id: "t15", english: "Suitcase", definition: "Rectangular travel bag", pronunciation: "/ˈsuːtkeɪs/", example: "I packed my suitcase last night.", context: "For carrying clothes", mastered: false },
      { id: "t16", english: "Boarding pass", definition: "Document for plane entry", pronunciation: "/ˈbɔːrdɪŋ pæs/", example: "Show your boarding pass.", context: "Given after check-in", mastered: false },
      { id: "t17", english: "Platform", definition: "Raised area for train boarding", pronunciation: "/ˈplætfɔːrm/", example: "The train leaves from platform 5.", context: "At train stations", mastered: false },
      { id: "t18", english: "Journey", definition: "Act of traveling", pronunciation: "/ˈdʒɜːrni/", example: "The journey takes two hours.", context: "The trip itself", mastered: false },
      { id: "t19", english: "Destination", definition: "Place you're going to", pronunciation: "/ˌdestɪˈneɪʃn/", example: "What's your destination?", context: "Final stop of journey", mastered: false },
      { id: "t20", english: "Customs", definition: "Border control checkpoint", pronunciation: "/ˈkʌstəmz/", example: "You must go through customs.", context: "For international travel", mastered: false },
    ]
  },
  {
    id: "work",
    title: "Work & Office",
    icon: "💼",
    wordCount: 20,
    learned: 0,
    level: "A2",
    words: [
      { id: "w1", english: "Meeting", definition: "Gathering for discussion", pronunciation: "/ˈmiːtɪŋ/", example: "We have a meeting at 2 PM.", context: "Can be formal or informal", mastered: false },
      { id: "w2", english: "Deadline", definition: "Time limit for completion", pronunciation: "/ˈdedlaɪn/", example: "The deadline is next Monday.", context: "Must be met on time", mastered: false },
      { id: "w3", english: "Colleague", definition: "Person you work with", pronunciation: "/ˈkɒliːɡ/", example: "My colleague helped me with the project.", context: "Also called coworker", mastered: false },
      { id: "w4", english: "Salary", definition: "Regular payment for work", pronunciation: "/ˈsæləri/", example: "I received my salary today.", context: "Usually monthly", mastered: false },
      { id: "w5", english: "Interview", definition: "Formal job meeting", pronunciation: "/ˈɪntərvjuː/", example: "I have a job interview tomorrow.", context: "Part of hiring process", mastered: false },
      { id: "w6", english: "Office", definition: "Workplace building or room", pronunciation: "/ˈɒfɪs/", example: "I work in an office downtown.", context: "Professional workspace", mastered: false },
      { id: "w7", english: "Boss", definition: "Person in charge", pronunciation: "/bɒs/", example: "My boss is very supportive.", context: "Manager or supervisor", mastered: false },
      { id: "w8", english: "Employee", definition: "Person who works for company", pronunciation: "/ɪmˈplɔɪiː/", example: "The company has 500 employees.", context: "Works for an employer", mastered: false },
      { id: "w9", english: "Resume", definition: "Document listing experience", pronunciation: "/ˈrezjuːmeɪ/", example: "Send me your resume.", context: "Also called CV", mastered: false },
      { id: "w10", english: "Project", definition: "Planned work with goals", pronunciation: "/ˈprɒdʒekt/", example: "I'm working on a new project.", context: "Has specific objectives", mastered: false },
    ]
  },
  // B1 Categories (15 themes - aligned with curriculum exercises)
  ...b1VocabularyCategories,
  // B2 Categories
  {
    id: "environment",
    title: "Environment",
    icon: "🌍",
    wordCount: 20,
    learned: 0,
    level: "B2",
    words: [
      { id: "env1", english: "Pollution", definition: "Environmental contamination", pronunciation: "/pəˈluːʃn/", example: "Air pollution is a serious problem.", context: "Affects air, water, land", mastered: false },
      { id: "env2", english: "Sustainable", definition: "Maintainable without depletion", pronunciation: "/səˈsteɪnəbl/", example: "We need sustainable solutions.", context: "Key environmental concept", mastered: false },
      { id: "env3", english: "Renewable", definition: "Naturally replenishable", pronunciation: "/rɪˈnuːəbl/", example: "Solar power is a renewable energy.", context: "Opposite of fossil fuels", mastered: false },
      { id: "env4", english: "Biodiversity", definition: "Variety of life forms", pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsəti/", example: "We must protect biodiversity.", context: "Species diversity", mastered: false },
      { id: "env5", english: "Ecosystem", definition: "Community of organisms", pronunciation: "/ˈiːkoʊsɪstəm/", example: "The forest is a complex ecosystem.", context: "Living things + environment", mastered: false },
      { id: "env6", english: "Carbon footprint", definition: "Personal environmental impact", pronunciation: "/ˈkɑːrbən ˈfʊtprɪnt/", example: "Reduce your carbon footprint.", context: "CO2 emissions measure", mastered: false },
      { id: "env7", english: "Recycle", definition: "Process waste for reuse", pronunciation: "/riːˈsaɪkl/", example: "Please recycle your plastic bottles.", context: "Reduces landfill waste", mastered: false },
      { id: "env8", english: "Conservation", definition: "Protection of resources", pronunciation: "/ˌkɒnsərˈveɪʃn/", example: "Wildlife conservation is important.", context: "Preserving nature", mastered: false },
      { id: "env9", english: "Emissions", definition: "Released gases or substances", pronunciation: "/ɪˈmɪʃnz/", example: "We must reduce carbon emissions.", context: "Often refers to CO2", mastered: false },
      { id: "env10", english: "Climate change", definition: "Long-term weather pattern shift", pronunciation: "/ˈklaɪmət tʃeɪndʒ/", example: "Climate change affects everyone.", context: "Global warming effects", mastered: false },
    ]
  },
  // C1 Categories
  {
    id: "philosophy",
    title: "Philosophy & Ethics",
    icon: "🤔",
    wordCount: 15,
    learned: 0,
    level: "C1",
    words: [
      { id: "phil1", english: "Altruism", definition: "Selfless concern for others", pronunciation: "/ˈæltruɪzm/", example: "Her altruism inspired the community.", context: "Opposite of selfishness", mastered: false },
      { id: "phil2", english: "Pragmatic", definition: "Dealing with practical matters", pronunciation: "/præɡˈmætɪk/", example: "We need a pragmatic approach.", context: "Focused on results", mastered: false },
      { id: "phil3", english: "Paradox", definition: "Contradictory but true statement", pronunciation: "/ˈpærədɒks/", example: "This is an interesting paradox.", context: "Seemingly impossible truth", mastered: false },
      { id: "phil4", english: "Dilemma", definition: "Difficult choice between options", pronunciation: "/dɪˈlemə/", example: "I'm facing an ethical dilemma.", context: "Often no good option", mastered: false },
      { id: "phil5", english: "Ambiguity", definition: "Having multiple interpretations", pronunciation: "/ˌæmbɪˈɡjuːɪti/", example: "The statement is full of ambiguity.", context: "Unclear meaning", mastered: false },
    ]
  },
  // C2 Categories
  {
    id: "literary",
    title: "Literary Terms",
    icon: "📚",
    wordCount: 15,
    learned: 0,
    level: "C2",
    words: [
      { id: "lit1", english: "Allegory", definition: "Story with hidden meaning", pronunciation: "/ˈælɪɡɔːri/", example: "The novel is an allegory of society.", context: "Symbolic narrative", mastered: false },
      { id: "lit2", english: "Juxtaposition", definition: "Placing contrasts side by side", pronunciation: "/ˌdʒʌkstəpəˈzɪʃn/", example: "The author uses juxtaposition effectively.", context: "Literary technique", mastered: false },
      { id: "lit3", english: "Epiphany", definition: "Sudden realization or insight", pronunciation: "/ɪˈpɪfəni/", example: "She had an epiphany about life.", context: "Moment of clarity", mastered: false },
      { id: "lit4", english: "Catharsis", definition: "Emotional release through art", pronunciation: "/kəˈθɑːrsɪs/", example: "The tragedy provides catharsis.", context: "Purging of emotions", mastered: false },
      { id: "lit5", english: "Soliloquy", definition: "Speaking thoughts aloud alone", pronunciation: "/səˈlɪləkwi/", example: "Hamlet's soliloquy is famous.", context: "Dramatic technique", mastered: false },
    ]
  },
];
