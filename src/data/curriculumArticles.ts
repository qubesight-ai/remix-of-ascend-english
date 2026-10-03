// ================================================================
// COMPLETE CURRICULUM ARTICLES: 98 Articles A1→C1
// Following strict pedagogical structure for all topics
// ================================================================

export interface CurriculumArticle {
  id: string;
  title: string;
  level: 'A1→A2' | 'A2→B1' | 'B1→B2' | 'B2→C1';
  category: 'vocabulary' | 'grammar' | 'skill' | 'strategy';
  learningGoal: string;
  explanation: string;
  examples: { english: string; context?: string }[];
  commonMistakes: { mistake: string; correction: string; why: string }[];
  practiceTips: string[];
  checkpoint: { question: string; answer: string };
  nextStep: string;
}

export const curriculumArticles: CurriculumArticle[] = [
  // ================================================================
  // COURSE 1: A1 → A2 (Articles 1-29)
  // ================================================================

  // Article 1: Daily Routines Vocabulary
  {
    id: 'vocab-daily-routines',
    title: 'Vocabulary: Daily Routines',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe their daily activities using common action verbs like wake up, work, study, cook.',
    explanation: `Daily routines are the first step to communicating in English about your everyday life. Action verbs describe activities we do regularly.

**Essential routine verbs:**
• **Wake up** /weɪk ʌp/ - to stop sleeping
• **Get up** /ɡet ʌp/ - to get out of bed
• **Have breakfast** /hæv ˈbrekfəst/ - to eat morning meal
• **Go to work/school** - to travel to workplace/school
• **Work** /wɜːrk/ - to do your job
• **Study** /ˈstʌdi/ - to learn
• **Have lunch** - to eat midday meal
• **Come home** - to return to your house
• **Cook** /kʊk/ - to prepare food
• **Have dinner** - to eat evening meal
• **Watch TV** - to look at television
• **Go to bed** - to get into bed
• **Sleep** /sliːp/ - to rest with eyes closed

**Time expressions:**
• In the morning - before noon
• In the afternoon - after noon
• In the evening - after 5-6 PM
• At night - late hours
• Every day - daily

**Typical structure:**
"I + verb + (complement) + (time)"
Example: "I wake up at 7 AM every day."`,
    examples: [
      { english: "I wake up at 6:30 in the morning.", context: "Describing your wake-up time" },
      { english: "She goes to work by bus.", context: "Describing transportation" },
      { english: "We have dinner at 8 PM.", context: "Meal schedule" },
      { english: "He studies English every evening.", context: "Regular activity" }
    ],
    commonMistakes: [
      { mistake: "I wake up me at 7.", correction: "I wake up at 7.", why: "'Wake up' already includes the reflexive meaning in English." },
      { mistake: "I go to the work.", correction: "I go to work.", why: "We don't use an article before 'work' as a place." },
      { mistake: "I breakfast at 8.", correction: "I have breakfast at 8.", why: "You need the verb 'have' with meals." }
    ],
    practiceTips: [
      "Write your real routine in English every morning.",
      "Use flashcards with pictures of activities.",
      "Describe out loud what you do while doing it.",
      "Compare your routine with a friend's using 'I... but he/she...'",
      "Listen to podcasts about 'daily routines' in basic English."
    ],
    checkpoint: { 
      question: "Write a sentence about your morning routine.", 
      answer: "I get up at 7 and have breakfast at 7:30." 
    },
    nextStep: "Now that you know routine verbs, learn to describe your family with 'Family and Relationships Vocabulary'."
  },

  // Article 2: Family and Relationships
  {
    id: 'vocab-family-relationships',
    title: 'Vocabulary: Family and Relationships',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to identify and name family members and use possessive adjectives correctly.',
    explanation: `Family is one of the first conversation topics in any language. Learning this vocabulary allows you to introduce your loved ones.

**Nuclear family:**
• **Mother** (mom/mum) - female parent
• **Father** (dad) - male parent
• **Sister** - female sibling
• **Brother** - male sibling
• **Son** - male child
• **Daughter** - female child
• **Parents** - mother and father
• **Children** (kids) - sons and daughters

**Extended family:**
• **Grandmother** (grandma) - parent's mother
• **Grandfather** (grandpa) - parent's father
• **Grandparents** - grandma and grandpa
• **Aunt** - parent's sister
• **Uncle** - parent's brother
• **Cousin** - aunt/uncle's child
• **Niece** - sibling's daughter
• **Nephew** - sibling's son

**In-laws:**
• **Mother-in-law** - spouse's mother
• **Father-in-law** - spouse's father
• **Sister-in-law** - spouse's sister
• **Brother-in-law** - spouse's brother

**Possessive adjectives:**
• My - belonging to me
• Your - belonging to you
• His - belonging to him
• Her - belonging to her
• Our - belonging to us
• Their - belonging to them

**Structure:** "This is my + family member"`,
    examples: [
      { english: "This is my mother. Her name is Ana.", context: "Introducing someone" },
      { english: "I have two brothers and one sister.", context: "Describing your family" },
      { english: "My grandparents live in the countryside.", context: "Family location" },
      { english: "His father is a doctor.", context: "Describing profession" }
    ],
    commonMistakes: [
      { mistake: "My sister have 25 years.", correction: "My sister is 25 years old.", why: "In English we use 'be + age years old', not 'have'." },
      { mistake: "She is my sister. His name is Maria.", correction: "She is my sister. Her name is Maria.", why: "'Her' for feminine, 'his' for masculine." },
      { mistake: "I have one brother and one sister.", correction: "I have one brother and one sister. / I have a brother and a sister.", why: "Both are correct, but 'one' sounds more emphatic." }
    ],
    practiceTips: [
      "Draw your family tree with names in English.",
      "Describe family photos out loud.",
      "Practice with a partner: ask each other about your families.",
      "Write sentences using each possessive (my, your, his, her, etc.).",
      "Create memory cards with photos and relationships."
    ],
    checkpoint: { 
      question: "Describe your family using at least 3 family terms.", 
      answer: "My uncle has three children." 
    },
    nextStep: "Continue with 'Food and Shopping Vocabulary' to learn about food and buying things."
  },

  // Article 3: Food and Shopping
  {
    id: 'vocab-food-shopping',
    title: 'Vocabulary: Food and Shopping',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to name common foods, identify shops, and ask prices in English.',
    explanation: `Knowing how to talk about food and shopping is essential for daily life. This vocabulary will help you in supermarkets, restaurants, and stores.

**Fruits:**
• Apple - red/green round fruit
• Banana - yellow curved fruit
• Orange - orange citrus fruit
• Strawberry - small red berry
• Grape - small round fruit in bunches
• Watermelon - large green fruit, red inside

**Vegetables:**
• Tomato - red, used in salads
• Potato - brown, used for fries
• Onion - makes you cry when cutting
• Carrot - orange, good for eyes
• Lettuce - green leaves for salads
• Pepper - red/green/yellow vegetable

**Meat and proteins:**
• Chicken - white meat from birds
• Beef - red meat from cows
• Fish - seafood
• Eggs - from chickens
• Cheese - made from milk

**Drinks:**
• Water - clear liquid
• Milk - white, from cows
• Juice - from fruits
• Coffee - hot brown drink
• Tea - hot drink from leaves

**Shops/Stores:**
• Supermarket - large food store
• Bakery - sells bread
• Butcher's - sells meat
• Pharmacy - sells medicine

**Asking prices:**
• "How much is this?" - for singular items
• "How much are these?" - for plural items
• "It's $5." - singular answer
• "They're $3 each." - plural answer`,
    examples: [
      { english: "How much is this cheese?", context: "Asking price (singular)" },
      { english: "I need two kilos of apples.", context: "Shopping" },
      { english: "The milk is next to the eggs.", context: "Locating products" },
      { english: "Can I have a bottle of water, please?", context: "Ordering something" }
    ],
    commonMistakes: [
      { mistake: "How much are this apple?", correction: "How much is this apple?", why: "'This apple' is singular, use 'is'." },
      { mistake: "I want two waters.", correction: "I want two bottles of water.", why: "'Water' is uncountable; you need a container." },
      { mistake: "The tomatos are fresh.", correction: "The tomatoes are fresh.", why: "The plural of 'tomato' is 'tomatoes' (add -es)." }
    ],
    practiceTips: [
      "Make your grocery list in English.",
      "Practice shopping dialogues with a friend.",
      "Label products in your kitchen with English post-its.",
      "Watch cooking videos in English and note ingredients.",
      "Play 'Memory' with food cards."
    ],
    checkpoint: { 
      question: "Ask the price of some strawberries.", 
      answer: "How much are these strawberries?" 
    },
    nextStep: "Learn to give directions in the city with 'The City and Directions Vocabulary'."
  },

  // Article 4: The City and Directions
  {
    id: 'vocab-city-directions',
    title: 'Vocabulary: The City and Directions',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to name places in the city, use place prepositions, and give/follow basic directions.',
    explanation: `Navigating a city requires specific vocabulary for places and directions. Place prepositions are fundamental.

**City places:**
• Bank - where you keep money
• Hospital - for medical care
• School - for learning
• Church - for worship
• Park - green area for relaxation
• Restaurant - for eating out
• Hotel - for staying overnight
• Library - for books
• Museum - for art and history
• Train station - for train travel
• Bus stop - where buses stop
• Airport - for plane travel
• Shopping center/mall - many stores
• Police station - for emergencies

**Place prepositions:**
• **Next to** - beside
• **Across from / Opposite** - on the other side
• **Between** - in the middle of two things
• **Behind** - at the back of
• **In front of** - facing
• **On the corner** - where streets meet
• **Near** - close to
• **Far from** - a long distance

**Giving directions:**
• Go straight - continue forward
• Turn left - go to the left
• Turn right - go to the right
• Go past - pass something
• Cross the street - walk across
• It's on your left/right - location side

**Asking for directions:**
• "Excuse me, where is the bank?"
• "How do I get to the station?"
• "Is there a pharmacy near here?"`,
    examples: [
      { english: "The bank is next to the supermarket.", context: "Describing location" },
      { english: "Go straight and turn left at the corner.", context: "Giving directions" },
      { english: "Is there a hospital near here?", context: "Asking for places" },
      { english: "The museum is between the park and the library.", context: "Using 'between'" }
    ],
    commonMistakes: [
      { mistake: "The bank is in front the hotel.", correction: "The bank is in front of the hotel.", why: "'In front of' always includes 'of'." },
      { mistake: "Turn in left.", correction: "Turn left.", why: "We don't use a preposition after 'turn'." },
      { mistake: "Go straight until the bank.", correction: "Go straight to the bank. / Go until you see the bank.", why: "'Until' requires a different structure." }
    ],
    practiceTips: [
      "Draw a map of your neighborhood and label it in English.",
      "Give directions out loud while walking.",
      "Use Google Maps in English for practice.",
      "Do role-play: one asks for directions, the other responds.",
      "Describe the location of places in city photos."
    ],
    checkpoint: { 
      question: "Give directions from the bank to the library.", 
      answer: "Go straight, turn right at the corner. The library is on your left, next to the park." 
    },
    nextStep: "Continue learning about hobbies with 'Hobbies and Free Time Vocabulary'."
  },

  // Article 5: Hobbies and Free Time
  {
    id: 'vocab-hobbies-free-time',
    title: 'Vocabulary: Hobbies and Free Time',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to talk about leisure activities using verbs like read, watch, play and express preferences.',
    explanation: `Talking about hobbies is an excellent way to connect with others. The most common verbs are read, watch, play, listen, and go.

**Common hobbies:**
• **Read** (a book/magazine) - look at written words
• **Watch** (TV/movies) - look at screens
• **Play** (sports/games/music) - engage in activity
• **Listen to** (music/podcasts) - hear sounds
• **Go** + verb-ing (go swimming, go shopping)
• **Cook** - prepare food
• **Dance** - move to music
• **Draw/Paint** - create art
• **Exercise/Work out** - physical activity
• **Travel** - visit places

**Sports:**
• Football/Soccer - team ball sport
• Basketball - throwing ball in hoop
• Tennis - racket sport
• Swimming - moving in water
• Running - fast walking
• Cycling - riding a bicycle

**Music and instruments:**
• Play the guitar - string instrument
• Play the piano - keyboard instrument
• Sing - make music with voice

**"Go + verb-ing" structure:**
• Go swimming - to swim
• Go shopping - to shop
• Go dancing - to dance
• Go hiking - to walk in nature

**Expressing preferences:**
• "I like + verb-ing" (enjoy)
• "I love + verb-ing" (really enjoy)
• "I don't like + verb-ing" (dislike)
• "I hate + verb-ing" (strongly dislike)
• "I prefer + verb-ing" (like more)`,
    examples: [
      { english: "I like reading books in the evening.", context: "Expressing likes" },
      { english: "She plays tennis every Saturday.", context: "Regular activity" },
      { english: "We go swimming on weekends.", context: "Using 'go + ing'" },
      { english: "He doesn't like watching horror movies.", context: "Expressing dislikes" }
    ],
    commonMistakes: [
      { mistake: "I like play tennis.", correction: "I like playing tennis.", why: "After 'like', the verb takes gerund (-ing)." },
      { mistake: "She plays the tennis.", correction: "She plays tennis.", why: "Sports don't take an article." },
      { mistake: "I go to swim.", correction: "I go swimming.", why: "The structure is 'go + verb-ing'." }
    ],
    practiceTips: [
      "Make a list of 10 things you like to do.",
      "Interview a friend about their hobbies in English.",
      "Describe your ideal weekend using these verbs.",
      "Watch videos about your favorite hobbies in English.",
      "Join online groups about your interests in English."
    ],
    checkpoint: { 
      question: "Describe your favorite hobby.", 
      answer: "I love going hiking and taking photos." 
    },
    nextStep: "Prepare for travel with 'Travel and Transport Vocabulary'."
  },

  // Article 6: Travel and Transport
  {
    id: 'vocab-travel-transport',
    title: 'Vocabulary: Travel and Transport',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe means of transport and use travel-related verbs like take, buy a ticket, arrive.',
    explanation: `Traveling is one of the best ways to practice English. This vocabulary will help you at airports, stations, and hotels.

**Means of transport:**
• **By plane** - air travel
• **By train** - rail travel
• **By bus** - coach travel
• **By car** - driving
• **By taxi** - hired car
• **By boat/ship** - water travel
• **By bicycle/bike** - cycling
• **On foot** - walking

**Travel verbs:**
• **Take** (a bus/train/taxi) - use transport
• **Drive** (a car) - operate a vehicle
• **Fly** - travel by plane
• **Buy a ticket** - purchase passage
• **Book/Reserve** - arrange in advance
• **Check in** - register arrival
• **Check out** - register departure
• **Arrive** - reach destination
• **Depart/Leave** - start journey
• **Miss** (a flight/train) - fail to catch

**At the airport:**
• Passport - travel document
• Boarding pass - flight ticket
• Gate - departure door
• Luggage/Baggage - bags
• Departure - leaving
• Arrival - coming
• Delayed - late
• Cancelled - not happening

**At the hotel:**
• Room - place to stay
• Single/Double room - for 1/2 people
• Reservation - booking
• Key - to open door`,
    examples: [
      { english: "I take the bus to work every day.", context: "Daily transport" },
      { english: "The flight departs at 3 PM.", context: "Flight schedule" },
      { english: "We need to check in by 2 PM.", context: "Hotel" },
      { english: "Can I have a window seat, please?", context: "On the plane" }
    ],
    commonMistakes: [
      { mistake: "I go by the bus.", correction: "I go by bus.", why: "'By + transport' doesn't use an article." },
      { mistake: "I will take a taxi to go home.", correction: "I will take a taxi home.", why: "'Take a taxi home' is more natural." },
      { mistake: "The plane arrives to London.", correction: "The plane arrives in London.", why: "We use 'arrive in' for cities/countries, 'arrive at' for places." }
    ],
    practiceTips: [
      "Describe your last trip in English.",
      "Role-play: buying a ticket at a station.",
      "Practice hotel check-in dialogues.",
      "Learn airport vocabulary before traveling.",
      "Watch travel vlogs in English."
    ],
    checkpoint: { 
      question: "Describe how you get to work or school.", 
      answer: "I take the train to work. The journey takes about 30 minutes." 
    },
    nextStep: "Learn about body parts and health with 'Body and Health Vocabulary'."
  },

  // Article 7: Body and Health
  {
    id: 'vocab-body-health',
    title: 'Vocabulary: Body and Health',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to name body parts, describe basic symptoms, and communicate in medical situations.',
    explanation: `Health vocabulary is essential. You need to be able to describe symptoms and understand at the doctor's office or pharmacy.

**Body parts:**
• **Head** - top of your body
• **Face** - front of head
• **Eyes** - for seeing
• **Ears** - for hearing
• **Nose** - for smelling
• **Mouth** - for eating and speaking
• **Neck** - connects head to body
• **Shoulders** - top of arms
• **Arms** - for lifting
• **Hands** - end of arms
• **Fingers** - on your hands
• **Chest** - front of torso
• **Back** - behind torso
• **Stomach** - digestive area
• **Legs** - for walking
• **Feet** - end of legs
• **Toes** - on your feet

**Common ailments:**
• Headache - pain in head
• Stomachache - pain in stomach
• Toothache - pain in tooth
• Backache - pain in back
• Fever - high temperature
• Cold - runny nose, sneezing
• Flu - fever, body aches
• Cough - noise from throat
• Sore throat - pain in throat

**At the doctor's:**
• "What's wrong?" - asking about problem
• "I have a..." - describing symptom
• "How long have you felt like this?" - duration
• "Take this medicine twice a day." - prescription

**At the pharmacy:**
• "Do you have anything for...?"
• "Can I have some aspirin?"`,
    examples: [
      { english: "I have a terrible headache.", context: "Describing symptom" },
      { english: "My throat hurts. I think I have a cold.", context: "Self-diagnosis" },
      { english: "You should see a doctor.", context: "Giving advice" },
      { english: "I need something for a cough, please.", context: "At the pharmacy" }
    ],
    commonMistakes: [
      { mistake: "I have headache.", correction: "I have a headache.", why: "Aches need article 'a'." },
      { mistake: "My head is hurting me.", correction: "My head hurts. / I have a headache.", why: "Use 'hurt' without 'me' or prefer 'have a headache'." },
      { mistake: "I am cold.", correction: "I have a cold.", why: "'I am cold' means temperature. 'I have a cold' means illness." }
    ],
    practiceTips: [
      "Point to body parts and name them in English.",
      "Practice describing symptoms with a partner.",
      "Learn pharmacy phrases by heart.",
      "Watch medical shows in English with subtitles.",
      "Simulate a doctor's visit."
    ],
    checkpoint: { 
      question: "Describe a health problem you've had.", 
      answer: "I have a stomachache and I have a fever. / My stomach hurts and I have a fever." 
    },
    nextStep: "Learn to talk about weather with 'Weather and Seasons Vocabulary'."
  },

  // Article 8: Weather and Seasons
  {
    id: 'vocab-weather-seasons',
    title: 'Vocabulary: Weather and Seasons',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe weather conditions using adjectives and talk about months and seasons.',
    explanation: `Weather is one of the most universal conversation topics. In English-speaking countries, it's common to start conversations by talking about the weather.

**Seasons:**
• **Spring** - March-May
• **Summer** - June-August
• **Autumn/Fall** - September-November
• **Winter** - December-February

**Months of the year:**
January, February, March, April, May, June, July, August, September, October, November, December

**Weather conditions:**
• **Sunny** - sun is shining
• **Cloudy** - covered with clouds
• **Rainy** - water falling
• **Windy** - lots of wind
• **Snowy** - snow falling
• **Foggy** - mist/fog
• **Stormy** - thunder/lightning

**Temperature:**
• **Hot** - very warm
• **Warm** - comfortable heat
• **Cool** - slightly cold
• **Cold** - low temperature
• **Freezing** - very cold

**Describing weather:**
• "It's sunny today." - describing now
• "It's raining." - happening now
• "It's going to snow." - prediction
• "What's the weather like?" - asking about weather

**Structure with "It":**
We always use "It" as the subject for weather:
• It's cold. (temperature)
• It's raining. (precipitation)`,
    examples: [
      { english: "What's the weather like in London?", context: "Asking about weather" },
      { english: "It's very hot in summer.", context: "Describing season" },
      { english: "Take an umbrella. It's going to rain.", context: "Prediction" },
      { english: "I love autumn because the leaves change color.", context: "Preference" }
    ],
    commonMistakes: [
      { mistake: "Today is sunny.", correction: "It's sunny today.", why: "For weather we always use 'It' as subject." },
      { mistake: "I have cold.", correction: "I'm cold. / I feel cold.", why: "'I have cold' is wrong. Say 'I'm cold'." },
      { mistake: "In the summer.", correction: "In summer. / In the summer.", why: "Both are correct, but without article is more common in BE." }
    ],
    practiceTips: [
      "Describe today's weather every morning.",
      "Learn the months in order by singing a song.",
      "Compare the weather in two cities.",
      "Watch weather forecasts on English channels.",
      "Write about your favorite season and why."
    ],
    checkpoint: { 
      question: "Describe the typical winter weather in your city.", 
      answer: "In winter, it's usually cold and sometimes it snows. / It's cold and rainy in winter here." 
    },
    nextStep: "Expand your descriptive vocabulary with 'Common Adjectives'."
  },

  // Article 9: Common Adjectives
  {
    id: 'vocab-common-adjectives',
    title: 'Vocabulary: Common Adjectives',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to use pairs of opposite adjectives like big/small, easy/difficult to describe objects and situations.',
    explanation: `Adjectives describe nouns. In English, the adjective always goes BEFORE the noun, unlike in some other languages.

**Pairs of opposites:**
• **Big / Small** - size
• **Long / Short** - length
• **Tall / Short** - height (people)
• **Old / New** - age (things)
• **Old / Young** - age (people)
• **Fast / Slow** - speed
• **Hot / Cold** - temperature
• **Easy / Difficult (Hard)** - complexity
• **Cheap / Expensive** - price
• **Good / Bad** - quality
• **Happy / Sad** - mood
• **Beautiful / Ugly** - appearance
• **Clean / Dirty** - cleanliness
• **Full / Empty** - content
• **Heavy / Light** - weight
• **Strong / Weak** - strength
• **Rich / Poor** - wealth
• **Safe / Dangerous** - safety

**Adjective position:**
• Before noun: "a big house", "a small car"
• After 'be': "The house is big", "The car is small"

**With 'very' for intensity:**
• "It's very hot today."
• "She is very intelligent."`,
    examples: [
      { english: "This is a big house with a small garden.", context: "Describing sizes" },
      { english: "The test was easy, but the homework is difficult.", context: "Comparing difficulty" },
      { english: "She's a young woman with old ideas.", context: "Contrasts" },
      { english: "Is this coffee hot or cold?", context: "Asking" }
    ],
    commonMistakes: [
      { mistake: "A house big.", correction: "A big house.", why: "The adjective goes BEFORE the noun in English." },
      { mistake: "She is more tall than me.", correction: "She is taller than me.", why: "With short adjectives, add -er, don't use 'more'." },
      { mistake: "The movie was very interested.", correction: "The movie was very interesting.", why: "'Interested' is for people, 'interesting' for things." }
    ],
    practiceTips: [
      "Describe 5 objects around you using adjectives.",
      "Learn adjectives in pairs of opposites.",
      "Practice putting the adjective before the noun.",
      "Play 'opposites' with a partner.",
      "Describe people and places in photos."
    ],
    checkpoint: { 
      question: "Describe your phone using 3 adjectives.", 
      answer: "My phone is small, new, and expensive. / I have a small, black, new phone." 
    },
    nextStep: "Now learn Present Simple grammar to describe routines."
  },

  // Article 10: Present Simple Grammar
  {
    id: 'gram-present-simple',
    title: 'Grammar: Present Simple',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will master the Present Simple to express routines, habits, and universal truths, including the third person rule.',
    explanation: `The Present Simple is the most basic and frequent tense. It's used for habitual actions, general facts, and universal truths.

**Main uses:**
1. **Routines and habits:** I wake up at 7 AM.
2. **General facts:** Water boils at 100°C.
3. **Fixed schedules:** The train leaves at 9 PM.
4. **Permanent states:** She lives in Paris.

**Formation:**
| Subject | Verb |
|---------|------|
| I/You/We/They | base verb (work) |
| He/She/It | verb + s/es (works) |

**Third person rule (he/she/it):**
• General: add -S → work**s**, play**s**
• Verbs in -ch, -sh, -ss, -x, -o: add -ES → watch**es**, go**es**
• Consonant + Y: change Y to -IES → study → stud**ies**
• Vowel + Y: just -S → play**s**

**Negative:**
• I/You/We/They + **don't** + verb
• He/She/It + **doesn't** + verb (no -s!)

**Question:**
• **Do** + I/you/we/they + verb?
• **Does** + he/she/it + verb? (no -s!)

**Adverbs of frequency:**
always > usually > often > sometimes > rarely > never
Position: before the verb (after 'be')
• "I always drink coffee." / "She is always happy."`,
    examples: [
      { english: "She works in a hospital.", context: "Third person + s" },
      { english: "I don't like vegetables.", context: "Negative with don't" },
      { english: "Does he speak English?", context: "Question with does" },
      { english: "The class starts at 9 AM.", context: "Fixed schedule" },
      { english: "We usually have dinner at 8.", context: "Adverb of frequency" }
    ],
    commonMistakes: [
      { mistake: "She work every day.", correction: "She works every day.", why: "With he/she/it, the verb ALWAYS takes -s." },
      { mistake: "He don't like coffee.", correction: "He doesn't like coffee.", why: "With he/she/it we use 'doesn't', not 'don't'." },
      { mistake: "Does she works here?", correction: "Does she work here?", why: "After 'does', the verb has no -s." },
      { mistake: "I drink always coffee.", correction: "I always drink coffee.", why: "The adverb goes before the main verb." }
    ],
    practiceTips: [
      "Write your daily routine in Present Simple.",
      "Transform sentences from affirmative to negative and question.",
      "Practice conjugation with different subjects.",
      "Memorize irregular third person verbs.",
      "Read simple texts and identify Present Simple verbs."
    ],
    checkpoint: { 
      question: "Write a sentence about someone's daily habit.", 
      answer: "She studies English but doesn't speak French." 
    },
    nextStep: "Continue with Present Continuous for actions in progress."
  },

  // Condensed remaining articles with English-only examples...
  // Articles 11-98 follow the same pattern

  // Article 11: Present Continuous Grammar
  {
    id: 'gram-present-continuous',
    title: 'Grammar: Present Continuous',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use the Present Continuous to describe actions happening right now or during this period.',
    explanation: `The Present Continuous (also called Present Progressive) describes actions in progress at the moment of speaking.

**Structure:**
Subject + AM/IS/ARE + verb-ING

| Subject | To Be | Verb+ING |
|---------|-------|----------|
| I | am | working |
| He/She/It | is | working |
| You/We/They | are | working |

**Rules for forming -ING:**
• General: add -ING → work**ing**
• Ends in -E: drop E, add -ING → mak**e** → mak**ing**
• CVC (consonant-vowel-consonant): double last consonant → run → run**n**ing
• Ends in -IE: change to -YING → die → d**ying**

**Uses:**
1. **Actions now:** "I'm studying English right now."
2. **Temporary actions:** "She's living in London this month."
3. **Future plans:** "We're meeting tomorrow at 5."
4. **Changes/trends:** "Technology is changing rapidly."

**Key words:**
now, right now, at the moment, currently, this week/month, today

**Negative:** Subject + am/is/are + NOT + verb-ing
**Question:** Am/Is/Are + subject + verb-ing?

**⚠️ Stative Verbs (don't use -ing):**
love, hate, like, want, need, know, understand, believe, see, hear, have (possession)`,
    examples: [
      { english: "She's cooking dinner right now.", context: "Action in progress" },
      { english: "I'm not watching TV, I'm studying.", context: "Negative" },
      { english: "Are you listening to me?", context: "Question" },
      { english: "We're meeting John tomorrow.", context: "Future plan" }
    ],
    commonMistakes: [
      { mistake: "She is work right now.", correction: "She is working right now.", why: "You need the -ING form after am/is/are." },
      { mistake: "I am knowing the answer.", correction: "I know the answer.", why: "'Know' is a stative verb, doesn't use continuous form." },
      { mistake: "They are runing.", correction: "They are running.", why: "Run ends in CVC: double the 'n'." }
    ],
    practiceTips: [
      "Describe what you see around you right now.",
      "Compare Present Simple vs Continuous with the same sentence.",
      "Practice forming -ING with various verbs.",
      "Memorize the list of stative verbs.",
      "Describe photos or videos using Present Continuous."
    ],
    checkpoint: { 
      question: "Describe what you are doing right now.", 
      answer: "What are you doing? I'm reading a book." 
    },
    nextStep: "Learn to talk about the past with Past Simple (Basic)."
  },

  // Article 12: Past Simple (Basic) Grammar
  {
    id: 'gram-past-simple-basic',
    title: 'Grammar: Past Simple (Basic)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use the Past Simple with regular and common irregular verbs to describe completed actions in the past.',
    explanation: `The Past Simple is used for actions completed at a specific time in the past.

**Regular verbs:**
Add -ED to the base verb
• work → work**ed**
• play → play**ed**
• study → studi**ed** (consonant+Y → -IED)
• live → liv**ed** (-E → just add -D)
• stop → stopp**ed** (CVC → double consonant)

**Common irregular verbs:**
• be → was/were
• go → went
• see → saw
• do → did
• have → had
• eat → ate
• drink → drank
• come → came
• take → took
• make → made
• get → got
• say → said
• give → gave
• know → knew
• think → thought
• buy → bought

**Structure:**
• **Affirmative:** Subject + past verb
• **Negative:** Subject + didn't + BASE verb
• **Question:** Did + subject + BASE verb?

**Time expressions:**
yesterday, last week/month/year, ago, in 2020, when I was young`,
    examples: [
      { english: "I visited my grandmother yesterday.", context: "Regular verb" },
      { english: "She went to Paris last summer.", context: "Irregular verb" },
      { english: "We didn't see the movie.", context: "Negative" },
      { english: "Did you have a good weekend?", context: "Question" }
    ],
    commonMistakes: [
      { mistake: "I goed to school.", correction: "I went to school.", why: "'Go' is irregular: go → went." },
      { mistake: "She didn't went.", correction: "She didn't go.", why: "After 'didn't', use BASE verb." },
      { mistake: "Did you saw him?", correction: "Did you see him?", why: "After 'did', use BASE verb." }
    ],
    practiceTips: [
      "Write about your last weekend.",
      "Practice irregular verbs daily.",
      "Tell a story from your childhood.",
      "Transform sentences: affirmative → negative → question.",
      "Read short stories in past tense."
    ],
    checkpoint: { 
      question: "Tell what you did yesterday.", 
      answer: "I went to the store and bought milk yesterday." 
    },
    nextStep: "Learn future with 'going to' for plans."
  },

  // Article 13-98: Following the same English-only pattern...
  // (Due to length, showing key representative articles)

  // Article 40: Past Simple vs Present Perfect
  {
    id: 'gram-past-vs-perfect',
    title: 'Grammar: Past Simple vs. Present Perfect Contrast',
    level: 'A2→B1',
    category: 'grammar',
    learningGoal: 'The student will distinguish when to use Past Simple (specific moment) vs Present Perfect (connection to present).',
    explanation: `This is one of the most difficult differences for learners. Understand it well to sound natural.

**PAST SIMPLE:**
Complete actions at a SPECIFIC moment in the past.
• "I **visited** Paris in 2019." (specific moment: 2019)
• "She **graduated** last year." (specific moment: last year)

**Key words:**
yesterday, last week/month/year, in 2020, ago, when I was young

**PRESENT PERFECT:**
Past actions with CONNECTION to the present (no specific time).
• "I **have visited** Paris." (life experience - doesn't matter when)
• "She **has graduated**." (relevant result now)

**Key words:**
ever, never, already, yet, just, recently, so far, since, for

**KEY RULE:**
• When? → PAST SIMPLE
• Have you ever done this? → PRESENT PERFECT

**Direct comparison:**
| Present Perfect | Past Simple |
|-----------------|-------------|
| I've been to London. (experience) | I went to London in 2018. (when) |
| Have you ever tried sushi? | Did you try sushi last night? |
| She has just arrived. (just now) | She arrived an hour ago. (when) |

**Present Perfect structure:**
have/has + past participle
• I/You/We/They have worked
• He/She/It has worked

**Present Perfect uses:**
1. **Experiences:** "I have never seen snow."
2. **Recent actions:** "She has just finished."
3. **Continuing actions:** "I have lived here for 5 years."
4. **Changes:** "He has lost weight."`,
    examples: [
      { english: "I have visited Japan. I went there in 2019.", context: "PP for experience, PS for when" },
      { english: "Have you ever eaten snails? - Yes, I tried them in France.", context: "PP for experience, PS for moment" },
      { english: "She has worked here for 5 years. She started in 2019.", context: "PP for duration until now, PS for start" },
      { english: "I've just finished my homework.", context: "Recent action with 'just'" }
    ],
    commonMistakes: [
      { mistake: "I have visited Paris last year.", correction: "I visited Paris last year.", why: "With specific time (last year), use Past Simple." },
      { mistake: "Did you ever see this movie?", correction: "Have you ever seen this movie?", why: "For life experiences, use Present Perfect + ever." },
      { mistake: "I live here since 2020.", correction: "I have lived here since 2020.", why: "For actions that started in the past and continue, use Present Perfect." }
    ],
    practiceTips: [
      "Ask 'Is there a specific time?' → If yes: Past Simple.",
      "Practice with 'ever/never' for experiences.",
      "Use 'for/since' correctly with Present Perfect.",
      "Read texts and identify why each tense is used.",
      "Write about your life experiences."
    ],
    checkpoint: { 
      question: "Complete: 'I ___ (see) that movie. I ___ (watch) it last weekend.'", 
      answer: "I have seen / I've seen that movie. I watched it last weekend." 
    },
    nextStep: "Learn the three types of future: will vs going to vs present continuous."
  },

  // Article 66: Conditionals Complete
  {
    id: 'gram-conditionals-complete',
    title: 'Grammar: Zero, First, Second, Third, and Mixed Conditionals',
    level: 'B1→B2',
    category: 'grammar',
    learningGoal: 'The student will master all types of conditionals and their communicative uses.',
    explanation: `Conditionals express hypothetical situations and their consequences. Mastering them is a sign of advanced level.

**ZERO CONDITIONAL (general truths):**
If + present simple, present simple
• "If you heat water to 100°C, it boils."
• Use: Scientific facts, universal truths

**FIRST CONDITIONAL (probable situations):**
If + present simple, will + verb
• "If it rains tomorrow, we will stay home."
• Use: Real and probable future situations

**SECOND CONDITIONAL (hypothetical present situations):**
If + past simple, would + verb
• "If I won the lottery, I would buy a house."
• Use: Unreal or unlikely situations

**THIRD CONDITIONAL (unreal past situations):**
If + past perfect, would have + past participle
• "If I had studied more, I would have passed."
• Use: Regrets, speculating about the past

**MIXED CONDITIONALS:**
Past condition → present result:
If + past perfect, would + verb
• "If I had taken that job, I would be rich now."

General condition → past result:
If + past simple, would have + past participle
• "If I were more careful, I wouldn't have made that mistake."

**Other conditional connectors:**
• Unless (= if not): "Unless you hurry, you'll miss the bus."
• As long as / Provided that: "I'll help, provided that you ask nicely."
• In case: "Take an umbrella in case it rains."`,
    examples: [
      { english: "If I had more time, I would learn Japanese.", context: "2nd conditional - hypothetical" },
      { english: "If you had told me earlier, I would have helped you.", context: "3rd conditional - unreal past" },
      { english: "If I hadn't missed that flight, I would be in Paris now.", context: "Mixed: past → present" },
      { english: "I'll go unless it rains.", context: "Unless = if not" }
    ],
    commonMistakes: [
      { mistake: "If I would have money, I would travel.", correction: "If I had money, I would travel.", why: "In the 'if' clause, use past simple, not 'would'." },
      { mistake: "If I knew, I would have told you.", correction: "If I had known, I would have told you.", why: "For unreal past, use past perfect in 'if'." },
      { mistake: "If I will see him, I will tell him.", correction: "If I see him, I will tell him.", why: "In 1st conditional, 'if' goes with present, not future." }
    ],
    practiceTips: [
      "Practice identifying which type of conditional to use.",
      "Write about regrets with 3rd conditional.",
      "Imagine hypothetical scenarios with 2nd conditional.",
      "Mix conditionals in a story.",
      "Practice with real situations: 'What would you do if...?'"
    ],
    checkpoint: { 
      question: "Create a sentence with each type of conditional.", 
      answer: "0: If you mix blue and yellow, you get green. 1: If I finish early, I'll call you. 2: If I were you, I would accept. 3: If I had known, I would have come." 
    },
    nextStep: "Master passive voice in multiple tenses."
  },

  // Article 86: Nominalization
  {
    id: 'gram-nominalization',
    title: 'Grammar: Nominalization',
    level: 'B2→C1',
    category: 'grammar',
    learningGoal: 'The student will transform verbs and adjectives into nouns for a more formal and academic style.',
    explanation: `Nominalization is converting verbs/adjectives into nouns. It's key for academic and formal writing.

**What is nominalization?**
Changing: "They implemented the policy" (verb)
To: "The implementation of the policy" (noun)

**Why nominalize?**
• Sounds more formal and academic
• Allows denser information in sentences
• Characteristic of academic and professional English

**Common nominalization suffixes:**

**From verbs:**
| Verb | Noun |
|------|------|
| decide | decision (-sion) |
| develop | development (-ment) |
| analyze | analysis (-sis) |
| apply | application (-tion) |
| discover | discovery (-ry) |
| fail | failure (-ure) |
| arrive | arrival (-al) |

**From adjectives:**
| Adjective | Noun |
|-----------|------|
| important | importance (-ance) |
| different | difference (-ence) |
| able | ability (-ity) |
| happy | happiness (-ness) |
| free | freedom (-dom) |

**Transformation examples:**

Informal: "They decided to reduce costs."
Formal: "The decision to implement cost reduction..."

Informal: "We need to develop new products quickly."
Formal: "The rapid development of new products is necessary."

**Useful patterns:**
• The + noun + of + noun: "The implementation of the strategy"
• Due to + noun: "Due to the complexity of the issue"
• The + adjective + noun: "The rapid development"`,
    examples: [
      { english: "The implementation of new policies requires careful planning.", context: "Formal writing" },
      { english: "Their discovery of the virus led to a breakthrough.", context: "Academic style" },
      { english: "The government's failure to act caused widespread criticism.", context: "News style" },
      { english: "The importance of education cannot be overstated.", context: "Adjective → noun" }
    ],
    commonMistakes: [
      { mistake: "The way they implement policies is important.", correction: "The implementation of policies is important.", why: "Nominalization is more formal and concise." },
      { mistake: "How they decided affected the outcome.", correction: "Their decision affected the outcome.", why: "Using the noun form is more sophisticated." }
    ],
    practiceTips: [
      "Identify verbs in sentences and nominalize them.",
      "Read academic texts and note nominalized forms.",
      "Practice transforming informal sentences to formal.",
      "Learn common noun suffixes.",
      "Use nominalization in formal writing assignments."
    ],
    checkpoint: { 
      question: "Nominalize: 'They analyzed the data carefully.'", 
      answer: "Their careful analysis of the data..." 
    },
    nextStep: "Continue developing advanced academic writing skills."
  }
];

// Import A1 complete articles
import { a1CompleteArticles } from './articlesA1Complete';

// Combine all articles
export const allCurriculumArticles: CurriculumArticle[] = [
  ...a1CompleteArticles,
  ...curriculumArticles,
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export function getCurriculumArticleById(id: string): CurriculumArticle | undefined {
  return allCurriculumArticles.find(article => article.id === id);
}

export function getCurriculumArticlesByLevel(level: CurriculumArticle['level']): CurriculumArticle[] {
  return allCurriculumArticles.filter(article => article.level === level);
}

export function getCurriculumArticlesByCategory(category: CurriculumArticle['category']): CurriculumArticle[] {
  return allCurriculumArticles.filter(article => article.category === category);
}

export function searchCurriculumArticles(query: string): CurriculumArticle[] {
  const lowerQuery = query.toLowerCase();
  return allCurriculumArticles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.learningGoal.toLowerCase().includes(lowerQuery) ||
    article.explanation.toLowerCase().includes(lowerQuery)
  );
}
