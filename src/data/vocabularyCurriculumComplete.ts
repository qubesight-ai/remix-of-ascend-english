// Comprehensive Vocabulary Curriculum A1-C2
// At least 20 themes per level with exercises

import { Exercise } from "./exercisesData";
import { getA1VocabularyExercises, a1VocabularyBatches } from "./a1VocabularyExercises";

export interface VocabularyTheme {
  id: string;
  title: string;
  level: string;
  description: string;
  words: VocabularyWord[];
}

export interface VocabularyWord {
  word: string;
  definition: string;
  example: string;
  partOfSpeech: string;
}

// ============= A1 VOCABULARY THEMES (20 Batches from CEFR Curriculum) =============
export const a1VocabularyThemes: VocabularyTheme[] = [
  {
    id: "a1-vocab-1",
    title: "Numbers & Counting",
    level: "A1",
    description: "Numbers 1-100, spelling, teen vs ty, sequences, math problems",
    words: [
      { word: "one", definition: "The number 1", example: "I have one apple.", partOfSpeech: "number" },
      { word: "twelve", definition: "The number 12", example: "There are twelve months.", partOfSpeech: "number" },
      { word: "twenty", definition: "The number 20", example: "She is twenty years old.", partOfSpeech: "number" },
      { word: "hundred", definition: "The number 100", example: "There are a hundred students.", partOfSpeech: "number" },
    ]
  },
  {
    id: "a1-vocab-2",
    title: "Colors",
    level: "A1",
    description: "Red, Blue, Green, Yellow, Orange, Purple, Black, White, Brown, Pink",
    words: [
      { word: "red", definition: "The color of blood or strawberries", example: "The apple is red.", partOfSpeech: "adjective" },
      { word: "blue", definition: "The color of the sky", example: "The sky is blue.", partOfSpeech: "adjective" },
      { word: "green", definition: "The color of grass", example: "The leaves are green.", partOfSpeech: "adjective" },
      { word: "yellow", definition: "The color of the sun", example: "The banana is yellow.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "a1-vocab-3",
    title: "Family Members",
    level: "A1",
    description: "Mother, Father, Brother, Sister, Son, Daughter, Grandparents",
    words: [
      { word: "mother", definition: "A female parent", example: "My mother is kind.", partOfSpeech: "noun" },
      { word: "father", definition: "A male parent", example: "My father works hard.", partOfSpeech: "noun" },
      { word: "brother", definition: "A male sibling", example: "My brother is tall.", partOfSpeech: "noun" },
      { word: "grandmother", definition: "The mother of your parent", example: "My grandmother bakes cookies.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-4",
    title: "Basic Food",
    level: "A1",
    description: "Bread, Milk, Apple, Rice, Egg, Cheese, Chicken, Fish, Banana, Tomato",
    words: [
      { word: "bread", definition: "A baked food made from flour", example: "I eat bread for breakfast.", partOfSpeech: "noun" },
      { word: "apple", definition: "A round red or green fruit", example: "An apple a day keeps the doctor away.", partOfSpeech: "noun" },
      { word: "rice", definition: "Small white grains you cook", example: "Rice is popular in Asia.", partOfSpeech: "noun" },
      { word: "egg", definition: "An oval food from chickens", example: "I have eggs for breakfast.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-5",
    title: "Beverages",
    level: "A1",
    description: "Water, Coffee, Tea, Juice, Soda, Milk, ordering at a cafe",
    words: [
      { word: "water", definition: "A clear liquid you drink", example: "Drink eight glasses of water daily.", partOfSpeech: "noun" },
      { word: "coffee", definition: "A hot brown drink", example: "I drink coffee in the morning.", partOfSpeech: "noun" },
      { word: "tea", definition: "A hot drink made from leaves", example: "Would you like some tea?", partOfSpeech: "noun" },
      { word: "juice", definition: "A drink from fruits", example: "Orange juice is healthy.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-6",
    title: "Common Animals",
    level: "A1",
    description: "Dog, Cat, Bird, Fish, Cow, Horse, Pig, Chicken, Lion, Elephant",
    words: [
      { word: "dog", definition: "A common pet that barks", example: "The dog is friendly.", partOfSpeech: "noun" },
      { word: "cat", definition: "A small pet that meows", example: "My cat sleeps a lot.", partOfSpeech: "noun" },
      { word: "bird", definition: "An animal with wings", example: "Birds can fly.", partOfSpeech: "noun" },
      { word: "elephant", definition: "A large gray animal with big ears", example: "The elephant is big.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-7",
    title: "Body Parts",
    level: "A1",
    description: "Head, Eye, Ear, Nose, Mouth, Hand, Arm, Leg, Foot, Finger",
    words: [
      { word: "head", definition: "The top part of your body", example: "I have a headache.", partOfSpeech: "noun" },
      { word: "eye", definition: "The part you see with", example: "She has blue eyes.", partOfSpeech: "noun" },
      { word: "hand", definition: "The part at the end of your arm", example: "Wash your hands.", partOfSpeech: "noun" },
      { word: "foot", definition: "The part you walk on", example: "My foot hurts.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-8",
    title: "Basic Clothing",
    level: "A1",
    description: "Shirt, Pants, Shoes, Hat, Dress, Coat, Socks, Skirt",
    words: [
      { word: "shirt", definition: "Clothing for your upper body", example: "He wears a blue shirt.", partOfSpeech: "noun" },
      { word: "pants", definition: "Clothing for your legs", example: "These pants are too long.", partOfSpeech: "noun" },
      { word: "shoes", definition: "Footwear for protection", example: "I need new shoes.", partOfSpeech: "noun" },
      { word: "hat", definition: "Something you wear on your head", example: "Wear a hat in the sun.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-9",
    title: "Rooms & Home",
    level: "A1",
    description: "Bedroom, Kitchen, Bathroom, Living room, Garden, Garage, Door, Window",
    words: [
      { word: "bedroom", definition: "A room for sleeping", example: "My bedroom is upstairs.", partOfSpeech: "noun" },
      { word: "kitchen", definition: "A room for cooking", example: "I cook in the kitchen.", partOfSpeech: "noun" },
      { word: "bathroom", definition: "A room with a toilet and shower", example: "The bathroom is clean.", partOfSpeech: "noun" },
      { word: "living room", definition: "A room for relaxing", example: "We watch TV in the living room.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-10",
    title: "Basic Furniture",
    level: "A1",
    description: "Table, Chair, Bed, Sofa, Lamp, Desk, Shelf, Wardrobe",
    words: [
      { word: "table", definition: "Furniture with a flat top", example: "Put the book on the table.", partOfSpeech: "noun" },
      { word: "chair", definition: "Furniture for sitting", example: "Sit on the chair.", partOfSpeech: "noun" },
      { word: "bed", definition: "Furniture for sleeping", example: "The bed is comfortable.", partOfSpeech: "noun" },
      { word: "sofa", definition: "A long comfortable seat", example: "Let's sit on the sofa.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-11",
    title: "Days of the Week",
    level: "A1",
    description: "The seven days of the week",
    words: [
      { word: "Monday", definition: "The first day of the work week", example: "I work on Monday.", partOfSpeech: "noun" },
      { word: "Wednesday", definition: "The middle of the work week", example: "Wednesday is hump day.", partOfSpeech: "noun" },
      { word: "Friday", definition: "The last day of the work week", example: "Friday is my favorite day.", partOfSpeech: "noun" },
      { word: "Sunday", definition: "The second weekend day", example: "Sunday is a day of rest.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-12",
    title: "Months of the Year",
    level: "A1",
    description: "The twelve months and seasons",
    words: [
      { word: "January", definition: "The first month of the year", example: "January is cold.", partOfSpeech: "noun" },
      { word: "April", definition: "The fourth month", example: "April showers bring May flowers.", partOfSpeech: "noun" },
      { word: "July", definition: "The seventh month", example: "July is very hot.", partOfSpeech: "noun" },
      { word: "December", definition: "The last month of the year", example: "Christmas is in December.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-13",
    title: "Basic Weather",
    level: "A1",
    description: "Weather conditions: sunny, rainy, cloudy, hot, cold, windy",
    words: [
      { word: "sunny", definition: "Bright with sun", example: "It's a sunny day.", partOfSpeech: "adjective" },
      { word: "rainy", definition: "With rain falling", example: "Take an umbrella, it's rainy.", partOfSpeech: "adjective" },
      { word: "cold", definition: "Low temperature", example: "Winter is cold.", partOfSpeech: "adjective" },
      { word: "hot", definition: "High temperature", example: "Summer is hot.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "a1-vocab-14",
    title: "School & Classroom",
    level: "A1",
    description: "School vocabulary: teacher, student, book, pencil, desk, classroom",
    words: [
      { word: "teacher", definition: "A person who teaches", example: "The teacher is kind.", partOfSpeech: "noun" },
      { word: "student", definition: "A person who learns", example: "I am a student.", partOfSpeech: "noun" },
      { word: "book", definition: "Pages with information", example: "Read the book.", partOfSpeech: "noun" },
      { word: "pencil", definition: "A tool for writing", example: "I need a pencil.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-15",
    title: "Basic Jobs",
    level: "A1",
    description: "Common professions: doctor, teacher, police, driver, nurse",
    words: [
      { word: "doctor", definition: "A person who helps sick people", example: "The doctor is helpful.", partOfSpeech: "noun" },
      { word: "teacher", definition: "A person who teaches", example: "My teacher is smart.", partOfSpeech: "noun" },
      { word: "police officer", definition: "A person who keeps order", example: "The police officer helps people.", partOfSpeech: "noun" },
      { word: "nurse", definition: "A person who cares for sick people", example: "The nurse is patient.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-16",
    title: "Basic Transportation",
    level: "A1",
    description: "Ways to travel: car, bus, train, bicycle, airplane",
    words: [
      { word: "car", definition: "A vehicle with four wheels", example: "I drive a car.", partOfSpeech: "noun" },
      { word: "bus", definition: "A large vehicle for many people", example: "Take the bus to school.", partOfSpeech: "noun" },
      { word: "train", definition: "A vehicle on rails", example: "The train is fast.", partOfSpeech: "noun" },
      { word: "airplane", definition: "A vehicle that flies", example: "The airplane is in the sky.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-17",
    title: "Greetings & Phrases",
    level: "A1",
    description: "Common greetings: hello, goodbye, please, thank you, sorry",
    words: [
      { word: "hello", definition: "A greeting", example: "Hello, how are you?", partOfSpeech: "interjection" },
      { word: "goodbye", definition: "A farewell", example: "Goodbye, see you tomorrow!", partOfSpeech: "interjection" },
      { word: "please", definition: "Used to ask politely", example: "Please help me.", partOfSpeech: "adverb" },
      { word: "thank you", definition: "Expressing gratitude", example: "Thank you for your help.", partOfSpeech: "phrase" },
    ]
  },
  {
    id: "a1-vocab-18",
    title: "Basic Places",
    level: "A1",
    description: "Common locations: school, hospital, store, park, restaurant",
    words: [
      { word: "school", definition: "A place for learning", example: "I go to school.", partOfSpeech: "noun" },
      { word: "hospital", definition: "A place for sick people", example: "The hospital is nearby.", partOfSpeech: "noun" },
      { word: "store", definition: "A place to buy things", example: "I shop at the store.", partOfSpeech: "noun" },
      { word: "park", definition: "A green outdoor area", example: "Let's go to the park.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a1-vocab-19",
    title: "Basic Action Verbs",
    level: "A1",
    description: "Common action words: eat, drink, sleep, walk, run, read",
    words: [
      { word: "eat", definition: "To consume food", example: "I eat breakfast at 7am.", partOfSpeech: "verb" },
      { word: "drink", definition: "To consume liquid", example: "Drink more water.", partOfSpeech: "verb" },
      { word: "sleep", definition: "To rest with eyes closed", example: "I sleep eight hours.", partOfSpeech: "verb" },
      { word: "walk", definition: "To move on foot", example: "I walk to school.", partOfSpeech: "verb" },
    ]
  },
  {
    id: "a1-vocab-20",
    title: "Basic Adjectives",
    level: "A1",
    description: "Simple describing words: big, small, happy, sad, good, bad",
    words: [
      { word: "big", definition: "Large in size", example: "The elephant is big.", partOfSpeech: "adjective" },
      { word: "small", definition: "Little in size", example: "The mouse is small.", partOfSpeech: "adjective" },
      { word: "happy", definition: "Feeling joy", example: "She is happy today.", partOfSpeech: "adjective" },
      { word: "good", definition: "Of high quality", example: "This is good food.", partOfSpeech: "adjective" },
    ]
  },
];

// ============= A2 VOCABULARY THEMES (20+) =============
export const a2VocabularyThemes: VocabularyTheme[] = [
  {
    id: "a2-theme-daily-routines",
    title: "Daily Routines",
    level: "A2",
    description: "Everyday activities and habits",
    words: [
      { word: "wake up", definition: "To stop sleeping", example: "I wake up at 6am.", partOfSpeech: "phrasal verb" },
      { word: "get dressed", definition: "To put on clothes", example: "I get dressed after breakfast.", partOfSpeech: "phrasal verb" },
      { word: "brush teeth", definition: "To clean your teeth", example: "Brush your teeth twice a day.", partOfSpeech: "phrase" },
      { word: "take a shower", definition: "To wash your body", example: "I take a shower every morning.", partOfSpeech: "phrase" },
      { word: "commute", definition: "To travel to work/school", example: "I commute by bus.", partOfSpeech: "verb" },
    ]
  },
  {
    id: "a2-theme-shopping",
    title: "Shopping & Stores",
    level: "A2",
    description: "Buying and selling vocabulary",
    words: [
      { word: "price", definition: "How much something costs", example: "What's the price?", partOfSpeech: "noun" },
      { word: "discount", definition: "A reduction in price", example: "There's a 20% discount.", partOfSpeech: "noun" },
      { word: "cashier", definition: "Person who takes payment", example: "Pay the cashier.", partOfSpeech: "noun" },
      { word: "receipt", definition: "Proof of purchase", example: "Keep your receipt.", partOfSpeech: "noun" },
      { word: "expensive", definition: "Costing a lot of money", example: "This bag is expensive.", partOfSpeech: "adjective" },
      { word: "cheap", definition: "Low in price", example: "The food here is cheap.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "a2-theme-directions",
    title: "Directions & Navigation",
    level: "A2",
    description: "Giving and understanding directions",
    words: [
      { word: "turn left", definition: "Go to the left side", example: "Turn left at the corner.", partOfSpeech: "phrase" },
      { word: "turn right", definition: "Go to the right side", example: "Turn right after the bank.", partOfSpeech: "phrase" },
      { word: "go straight", definition: "Continue forward", example: "Go straight for two blocks.", partOfSpeech: "phrase" },
      { word: "intersection", definition: "Where roads cross", example: "Stop at the intersection.", partOfSpeech: "noun" },
      { word: "corner", definition: "Where two streets meet", example: "The shop is on the corner.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-travel",
    title: "Travel & Tourism",
    level: "A2",
    description: "Vacation and travel vocabulary",
    words: [
      { word: "luggage", definition: "Bags and suitcases", example: "Don't forget your luggage.", partOfSpeech: "noun" },
      { word: "passport", definition: "ID document for travel", example: "Show your passport.", partOfSpeech: "noun" },
      { word: "boarding pass", definition: "Ticket to board a plane", example: "Print your boarding pass.", partOfSpeech: "noun" },
      { word: "reservation", definition: "A booking", example: "I have a reservation.", partOfSpeech: "noun" },
      { word: "departure", definition: "Leaving time", example: "Departure is at 3pm.", partOfSpeech: "noun" },
      { word: "arrival", definition: "Coming time", example: "Our arrival is delayed.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-hobbies",
    title: "Hobbies & Leisure",
    level: "A2",
    description: "Free time activities",
    words: [
      { word: "photography", definition: "Taking pictures", example: "Photography is my hobby.", partOfSpeech: "noun" },
      { word: "gardening", definition: "Growing plants", example: "I enjoy gardening.", partOfSpeech: "noun" },
      { word: "cooking", definition: "Preparing food", example: "Cooking is relaxing.", partOfSpeech: "noun" },
      { word: "reading", definition: "Looking at written words", example: "I love reading novels.", partOfSpeech: "noun" },
      { word: "painting", definition: "Creating art with colors", example: "She's good at painting.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-sports",
    title: "Sports & Exercise",
    level: "A2",
    description: "Physical activities",
    words: [
      { word: "soccer", definition: "Football game", example: "I play soccer on weekends.", partOfSpeech: "noun" },
      { word: "basketball", definition: "Game with a ball and hoop", example: "Basketball is popular.", partOfSpeech: "noun" },
      { word: "swimming", definition: "Moving in water", example: "Swimming is great exercise.", partOfSpeech: "noun" },
      { word: "tennis", definition: "Game with rackets", example: "Let's play tennis.", partOfSpeech: "noun" },
      { word: "gym", definition: "Place for exercise", example: "I go to the gym daily.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-health",
    title: "Health & Body",
    level: "A2",
    description: "Medical and health vocabulary",
    words: [
      { word: "headache", definition: "Pain in the head", example: "I have a terrible headache.", partOfSpeech: "noun" },
      { word: "fever", definition: "High body temperature", example: "She has a fever.", partOfSpeech: "noun" },
      { word: "cough", definition: "Forcing air from throat", example: "I can't stop coughing.", partOfSpeech: "noun/verb" },
      { word: "medicine", definition: "Treatment for illness", example: "Take this medicine.", partOfSpeech: "noun" },
      { word: "appointment", definition: "Scheduled meeting", example: "I have a doctor's appointment.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-emotions",
    title: "Emotions & Feelings",
    level: "A2",
    description: "Expressing how you feel",
    words: [
      { word: "excited", definition: "Very happy and eager", example: "I'm excited about the trip.", partOfSpeech: "adjective" },
      { word: "worried", definition: "Feeling anxious", example: "She's worried about the exam.", partOfSpeech: "adjective" },
      { word: "bored", definition: "Not interested", example: "I'm bored with this movie.", partOfSpeech: "adjective" },
      { word: "surprised", definition: "Feeling unexpected", example: "I was surprised by the gift.", partOfSpeech: "adjective" },
      { word: "tired", definition: "Needing rest", example: "I'm too tired to work.", partOfSpeech: "adjective" },
      { word: "angry", definition: "Feeling strong displeasure", example: "Don't be angry with me.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "a2-theme-technology",
    title: "Basic Technology",
    level: "A2",
    description: "Digital devices and tools",
    words: [
      { word: "computer", definition: "Electronic device", example: "I use a computer for work.", partOfSpeech: "noun" },
      { word: "smartphone", definition: "Mobile phone with apps", example: "My smartphone is new.", partOfSpeech: "noun" },
      { word: "internet", definition: "Global computer network", example: "I need internet access.", partOfSpeech: "noun" },
      { word: "email", definition: "Electronic message", example: "Send me an email.", partOfSpeech: "noun" },
      { word: "password", definition: "Secret code", example: "Don't share your password.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-restaurant",
    title: "Restaurant & Dining",
    level: "A2",
    description: "Eating out vocabulary",
    words: [
      { word: "menu", definition: "List of food options", example: "Can I see the menu?", partOfSpeech: "noun" },
      { word: "order", definition: "To ask for food", example: "I'd like to order now.", partOfSpeech: "verb" },
      { word: "waiter", definition: "Person who serves food", example: "The waiter is helpful.", partOfSpeech: "noun" },
      { word: "bill", definition: "Payment request", example: "Can we have the bill?", partOfSpeech: "noun" },
      { word: "tip", definition: "Extra money for service", example: "Leave a good tip.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-jobs",
    title: "Jobs & Workplace",
    level: "A2",
    description: "Work-related vocabulary",
    words: [
      { word: "colleague", definition: "Person you work with", example: "My colleague is friendly.", partOfSpeech: "noun" },
      { word: "boss", definition: "Person in charge", example: "My boss is understanding.", partOfSpeech: "noun" },
      { word: "meeting", definition: "Group discussion", example: "We have a meeting at 2pm.", partOfSpeech: "noun" },
      { word: "salary", definition: "Money paid for work", example: "The salary is good.", partOfSpeech: "noun" },
      { word: "deadline", definition: "Time limit", example: "The deadline is Friday.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-housing",
    title: "Housing & Apartments",
    level: "A2",
    description: "Living spaces vocabulary",
    words: [
      { word: "apartment", definition: "A flat to live in", example: "I rent an apartment.", partOfSpeech: "noun" },
      { word: "rent", definition: "Payment for housing", example: "The rent is $1000.", partOfSpeech: "noun" },
      { word: "landlord", definition: "Property owner", example: "Call the landlord.", partOfSpeech: "noun" },
      { word: "neighbor", definition: "Person living nearby", example: "My neighbors are quiet.", partOfSpeech: "noun" },
      { word: "balcony", definition: "Outdoor platform", example: "The balcony has a nice view.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-entertainment",
    title: "Entertainment & Media",
    level: "A2",
    description: "Movies, music, and shows",
    words: [
      { word: "movie", definition: "A film", example: "Let's watch a movie.", partOfSpeech: "noun" },
      { word: "concert", definition: "Live music show", example: "The concert was amazing.", partOfSpeech: "noun" },
      { word: "actor", definition: "Person in films", example: "He's a famous actor.", partOfSpeech: "noun" },
      { word: "series", definition: "TV show with episodes", example: "I'm watching a new series.", partOfSpeech: "noun" },
      { word: "documentary", definition: "Factual film", example: "This documentary is interesting.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-nature",
    title: "Nature & Environment",
    level: "A2",
    description: "Natural world vocabulary",
    words: [
      { word: "mountain", definition: "High land formation", example: "The mountain is beautiful.", partOfSpeech: "noun" },
      { word: "river", definition: "Flowing water", example: "The river is clean.", partOfSpeech: "noun" },
      { word: "forest", definition: "Area with many trees", example: "Let's hike in the forest.", partOfSpeech: "noun" },
      { word: "beach", definition: "Sandy shore", example: "I love the beach.", partOfSpeech: "noun" },
      { word: "ocean", definition: "Large body of salt water", example: "The ocean is vast.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-celebrations",
    title: "Celebrations & Events",
    level: "A2",
    description: "Holidays and special occasions",
    words: [
      { word: "birthday", definition: "Anniversary of birth", example: "Happy birthday!", partOfSpeech: "noun" },
      { word: "wedding", definition: "Marriage ceremony", example: "The wedding was beautiful.", partOfSpeech: "noun" },
      { word: "party", definition: "Social gathering", example: "Let's have a party.", partOfSpeech: "noun" },
      { word: "gift", definition: "Something given", example: "Thank you for the gift.", partOfSpeech: "noun" },
      { word: "celebrate", definition: "To mark an occasion", example: "Let's celebrate together.", partOfSpeech: "verb" },
    ]
  },
  {
    id: "a2-theme-personality",
    title: "Personality Traits",
    level: "A2",
    description: "Describing character",
    words: [
      { word: "friendly", definition: "Kind and welcoming", example: "She's very friendly.", partOfSpeech: "adjective" },
      { word: "shy", definition: "Nervous around people", example: "He's a bit shy.", partOfSpeech: "adjective" },
      { word: "generous", definition: "Willing to give", example: "They are very generous.", partOfSpeech: "adjective" },
      { word: "lazy", definition: "Not wanting to work", example: "Don't be lazy.", partOfSpeech: "adjective" },
      { word: "patient", definition: "Able to wait calmly", example: "Be patient with me.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "a2-theme-cooking",
    title: "Cooking & Kitchen",
    level: "A2",
    description: "Food preparation",
    words: [
      { word: "fry", definition: "Cook in hot oil", example: "Fry the eggs.", partOfSpeech: "verb" },
      { word: "boil", definition: "Cook in hot water", example: "Boil the pasta.", partOfSpeech: "verb" },
      { word: "bake", definition: "Cook in an oven", example: "Bake the cake.", partOfSpeech: "verb" },
      { word: "recipe", definition: "Cooking instructions", example: "Follow the recipe.", partOfSpeech: "noun" },
      { word: "ingredient", definition: "Food item in a dish", example: "Add all ingredients.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-seasons",
    title: "Seasons & Climate",
    level: "A2",
    description: "Weather patterns",
    words: [
      { word: "spring", definition: "Season after winter", example: "Flowers bloom in spring.", partOfSpeech: "noun" },
      { word: "summer", definition: "Warmest season", example: "Summer is my favorite.", partOfSpeech: "noun" },
      { word: "autumn", definition: "Season after summer", example: "Leaves fall in autumn.", partOfSpeech: "noun" },
      { word: "winter", definition: "Coldest season", example: "It snows in winter.", partOfSpeech: "noun" },
      { word: "temperature", definition: "Degree of heat", example: "The temperature is rising.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-banking",
    title: "Money & Banking",
    level: "A2",
    description: "Financial vocabulary",
    words: [
      { word: "bank account", definition: "Where you keep money", example: "Open a bank account.", partOfSpeech: "noun" },
      { word: "withdraw", definition: "Take money out", example: "I need to withdraw cash.", partOfSpeech: "verb" },
      { word: "deposit", definition: "Put money in", example: "Deposit your paycheck.", partOfSpeech: "verb" },
      { word: "credit card", definition: "Card for buying things", example: "Pay by credit card.", partOfSpeech: "noun" },
      { word: "savings", definition: "Money kept for later", example: "I have some savings.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "a2-theme-communication",
    title: "Communication",
    level: "A2",
    description: "Ways of talking",
    words: [
      { word: "message", definition: "Written communication", example: "Send me a message.", partOfSpeech: "noun" },
      { word: "call", definition: "Phone conversation", example: "Give me a call.", partOfSpeech: "noun/verb" },
      { word: "text", definition: "Written phone message", example: "I'll text you later.", partOfSpeech: "noun/verb" },
      { word: "reply", definition: "Response to message", example: "Please reply soon.", partOfSpeech: "noun/verb" },
      { word: "conversation", definition: "Talk between people", example: "We had a good conversation.", partOfSpeech: "noun" },
    ]
  },
];

// ============= B1 VOCABULARY THEMES (15 batches) =============
export const b1VocabularyThemes: VocabularyTheme[] = [
  {
    id: "b1-theme-education",
    title: "Education & Learning",
    level: "B1",
    description: "Curriculum, assignment, research, graduate, scholarship, tuition, thesis, deadline",
    words: [
      { word: "curriculum", definition: "A detailed plan of what is taught in a specific course or school", example: "The curriculum is challenging.", partOfSpeech: "noun" },
      { word: "assignment", definition: "A specific piece of work given to a student as part of their studies", example: "Submit your assignment.", partOfSpeech: "noun" },
      { word: "research", definition: "Study to find new information", example: "Do your research.", partOfSpeech: "noun/verb" },
      { word: "graduate", definition: "To complete a university degree successfully", example: "I will graduate next year.", partOfSpeech: "verb" },
      { word: "scholarship", definition: "Financial aid given to a student based on merit or need", example: "She won a scholarship.", partOfSpeech: "noun" },
      { word: "tuition", definition: "Money paid for instruction at a college or university", example: "Tuition fees are high.", partOfSpeech: "noun" },
      { word: "thesis", definition: "A long essay involving personal research, written for a degree", example: "I'm writing my thesis.", partOfSpeech: "noun" },
      { word: "deadline", definition: "The date or time by which something must be done", example: "The deadline is Friday.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-business",
    title: "Business & Commerce",
    level: "B1",
    description: "Negotiate, contract, profit, investment, budget, strategy, revenue",
    words: [
      { word: "negotiate", definition: "To discuss terms with someone to reach an agreement", example: "Let's negotiate the terms.", partOfSpeech: "verb" },
      { word: "contract", definition: "A formal, legally binding agreement between two parties", example: "Sign the contract.", partOfSpeech: "noun" },
      { word: "profit", definition: "Financial gain; the difference between money earned and spent", example: "The company made a profit.", partOfSpeech: "noun" },
      { word: "investment", definition: "Putting money into something with the expectation of gain", example: "It's a good investment.", partOfSpeech: "noun" },
      { word: "budget", definition: "A plan for how money will be spent over a period of time", example: "Our budget covers rent.", partOfSpeech: "noun" },
      { word: "strategy", definition: "A plan of action designed to achieve a goal", example: "We need a new marketing strategy.", partOfSpeech: "noun" },
      { word: "revenue", definition: "The income that a company receives from its normal business activities", example: "Revenue increased this year.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-politics",
    title: "Politics & Government",
    level: "B1",
    description: "Election, democracy, vote, policy, candidate, citizen, government",
    words: [
      { word: "election", definition: "A formal process where people choose a leader", example: "The election is next month.", partOfSpeech: "noun" },
      { word: "democracy", definition: "A system of government by the whole population", example: "Democracy is important.", partOfSpeech: "noun" },
      { word: "vote", definition: "To express a choice in an election", example: "Everyone should vote.", partOfSpeech: "verb/noun" },
      { word: "policy", definition: "A course of action adopted by a government", example: "The new policy is effective.", partOfSpeech: "noun" },
      { word: "candidate", definition: "A person offering themselves for election", example: "She is a strong candidate.", partOfSpeech: "noun" },
      { word: "citizen", definition: "A legally recognized subject of a state", example: "I'm a citizen of Canada.", partOfSpeech: "noun" },
      { word: "government", definition: "The governing body of a nation or state", example: "The government announced new measures.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-environment",
    title: "Environment & Ecology",
    level: "B1",
    description: "Pollution, recycle, climate change, renewable, sustainable, waste, habitat",
    words: [
      { word: "pollution", definition: "The presence of harmful substances in the environment", example: "Pollution is increasing.", partOfSpeech: "noun" },
      { word: "recycle", definition: "To convert waste into reusable material", example: "Please recycle your bottles.", partOfSpeech: "verb" },
      { word: "climate change", definition: "Long-term shifts in temperatures and weather patterns", example: "Climate change is real.", partOfSpeech: "noun" },
      { word: "renewable", definition: "Energy from a source that is not depleted (e.g., wind, sun)", example: "Use renewable energy.", partOfSpeech: "adjective" },
      { word: "sustainable", definition: "Capable of being maintained at a steady level", example: "Sustainable development.", partOfSpeech: "adjective" },
      { word: "waste", definition: "Material that is not wanted; rubbish", example: "Reduce waste.", partOfSpeech: "noun" },
      { word: "habitat", definition: "The natural home of an animal", example: "Protect the habitat.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-media",
    title: "Media & Journalism",
    level: "B1",
    description: "Headline, broadcast, journalist, article, source, fake news, interview",
    words: [
      { word: "headline", definition: "The title of a newspaper story printed in large letters", example: "Read the headline.", partOfSpeech: "noun" },
      { word: "broadcast", definition: "To transmit a program on TV or radio", example: "The broadcast starts at 8.", partOfSpeech: "verb/noun" },
      { word: "journalist", definition: "A person who writes for newspapers or magazines", example: "The journalist investigated.", partOfSpeech: "noun" },
      { word: "article", definition: "A piece of writing on a particular subject in a publication", example: "I read an interesting article.", partOfSpeech: "noun" },
      { word: "source", definition: "A person or document from which information is obtained", example: "Check your sources.", partOfSpeech: "noun" },
      { word: "fake news", definition: "False information presented as news", example: "Don't spread fake news.", partOfSpeech: "noun" },
      { word: "interview", definition: "A face-to-face meeting to ask questions", example: "She gave an interview.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-law",
    title: "Law & Justice",
    level: "B1",
    description: "Court, lawyer, evidence, guilty, trial, judge, jury, witness, innocent",
    words: [
      { word: "court", definition: "The place where legal cases are heard", example: "The court is in session.", partOfSpeech: "noun" },
      { word: "lawyer", definition: "A person who practices or studies law", example: "Hire a lawyer.", partOfSpeech: "noun" },
      { word: "evidence", definition: "Facts or information indicating whether a belief is true", example: "There is no evidence.", partOfSpeech: "noun" },
      { word: "guilty", definition: "Responsible for a specified wrongdoing or crime", example: "He was found guilty.", partOfSpeech: "adjective" },
      { word: "trial", definition: "A formal examination of evidence by a judge and jury", example: "The trial lasted weeks.", partOfSpeech: "noun" },
      { word: "judge", definition: "A person who decides cases in court", example: "The judge ruled.", partOfSpeech: "noun" },
      { word: "jury", definition: "A group of people who decide a verdict", example: "The jury deliberated.", partOfSpeech: "noun" },
      { word: "witness", definition: "A person who sees an event take place", example: "The witness testified.", partOfSpeech: "noun" },
      { word: "innocent", definition: "Not guilty of a crime", example: "He was found innocent.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "b1-theme-science",
    title: "Science & Discovery",
    level: "B1",
    description: "Experiment, hypothesis, data, laboratory, theory, research, conclusion",
    words: [
      { word: "experiment", definition: "A scientific procedure undertaken to make a discovery", example: "Run an experiment.", partOfSpeech: "noun" },
      { word: "hypothesis", definition: "A proposed explanation made on limited evidence", example: "Test the hypothesis.", partOfSpeech: "noun" },
      { word: "data", definition: "Facts and statistics collected for analysis", example: "Analyze the data.", partOfSpeech: "noun" },
      { word: "laboratory", definition: "A room or building equipped for scientific experiments", example: "Work in the laboratory.", partOfSpeech: "noun" },
      { word: "theory", definition: "A system of ideas intended to explain something", example: "The theory of relativity.", partOfSpeech: "noun" },
      { word: "research", definition: "Systematic investigation", example: "Do research.", partOfSpeech: "noun/verb" },
      { word: "conclusion", definition: "The end or finish of a process", example: "Reach a conclusion.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-art",
    title: "Art & Culture",
    level: "B1",
    description: "Exhibition, sculpture, masterpiece, gallery, artist, portrait, abstract",
    words: [
      { word: "exhibition", definition: "A public display of works of art", example: "Visit the exhibition.", partOfSpeech: "noun" },
      { word: "sculpture", definition: "Three-dimensional art form", example: "A bronze sculpture.", partOfSpeech: "noun" },
      { word: "masterpiece", definition: "A work of outstanding artistry", example: "A masterpiece of painting.", partOfSpeech: "noun" },
      { word: "gallery", definition: "A room or building for displaying art", example: "The art gallery.", partOfSpeech: "noun" },
      { word: "artist", definition: "A person who creates art", example: "A famous artist.", partOfSpeech: "noun" },
      { word: "portrait", definition: "A painting or photo of a person", example: "A portrait of the queen.", partOfSpeech: "noun" },
      { word: "abstract", definition: "Art that does not represent external reality", example: "Abstract art.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "b1-theme-relationships",
    title: "Relationships & Social",
    level: "B1",
    description: "Acquaintance, compromise, conflict, trust, colleague, friendship, bond",
    words: [
      { word: "acquaintance", definition: "A person one knows slightly", example: "Just an acquaintance.", partOfSpeech: "noun" },
      { word: "compromise", definition: "An agreement reached by concessions", example: "Reach a compromise.", partOfSpeech: "noun" },
      { word: "conflict", definition: "A serious disagreement", example: "Resolve the conflict.", partOfSpeech: "noun" },
      { word: "trust", definition: "Firm belief in someone's reliability", example: "Build trust.", partOfSpeech: "noun" },
      { word: "colleague", definition: "A person with whom one works", example: "My colleague helped.", partOfSpeech: "noun" },
      { word: "friendship", definition: "A relationship between friends", example: "Long friendship.", partOfSpeech: "noun" },
      { word: "bond", definition: "A connection or relationship", example: "A strong bond.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-travel",
    title: "Travel & Adventure",
    level: "B1",
    description: "Itinerary, destination, accommodation, excursion, luggage, reservation, passenger",
    words: [
      { word: "itinerary", definition: "A planned route or journey", example: "Check the itinerary.", partOfSpeech: "noun" },
      { word: "destination", definition: "The place to which someone is going", example: "Our final destination.", partOfSpeech: "noun" },
      { word: "accommodation", definition: "A place to stay when traveling", example: "Book accommodation.", partOfSpeech: "noun" },
      { word: "excursion", definition: "A short journey or trip", example: "A day excursion.", partOfSpeech: "noun" },
      { word: "luggage", definition: "Bags and suitcases for travel", example: "Pack your luggage.", partOfSpeech: "noun" },
      { word: "reservation", definition: "An arrangement to hold something", example: "Make a reservation.", partOfSpeech: "noun" },
      { word: "passenger", definition: "A person traveling in a vehicle", example: "All passengers on board.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-cuisine",
    title: "Cuisine & Gastronomy",
    level: "B1",
    description: "Gourmet, cuisine, appetizer, delicacy, nutrition, palate, recipe, dietary",
    words: [
      { word: "gourmet", definition: "A person who cultivates a discriminating palate for good food", example: "A gourmet chef.", partOfSpeech: "noun" },
      { word: "cuisine", definition: "A style or method of cooking", example: "French cuisine.", partOfSpeech: "noun" },
      { word: "appetizer", definition: "A small dish taken before a meal", example: "Order an appetizer.", partOfSpeech: "noun" },
      { word: "delicacy", definition: "A rare or expensive food considered highly desirable", example: "Caviar is a delicacy.", partOfSpeech: "noun" },
      { word: "nutrition", definition: "The process of providing food necessary for health", example: "Good nutrition.", partOfSpeech: "noun" },
      { word: "palate", definition: "A person's ability to distinguish tastes", example: "Refined palate.", partOfSpeech: "noun" },
      { word: "recipe", definition: "A set of instructions for preparing a dish", example: "Follow the recipe.", partOfSpeech: "noun" },
      { word: "dietary", definition: "Relating to diet or kinds of food eaten", example: "Dietary requirements.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "b1-theme-architecture",
    title: "Architecture & Buildings",
    level: "B1",
    description: "Skyscraper, monument, cathedral, renovation, facade, interior, residential",
    words: [
      { word: "skyscraper", definition: "A very tall building of many stories", example: "The Empire State Building.", partOfSpeech: "noun" },
      { word: "monument", definition: "A structure to commemorate a person or event", example: "A war monument.", partOfSpeech: "noun" },
      { word: "cathedral", definition: "The principal Christian church of a diocese", example: "Notre Dame Cathedral.", partOfSpeech: "noun" },
      { word: "renovation", definition: "The process of improving a damaged or outdated structure", example: "House renovation.", partOfSpeech: "noun" },
      { word: "facade", definition: "The face or front of a building", example: "Beautiful facade.", partOfSpeech: "noun" },
      { word: "interior", definition: "The inside of a building", example: "The interior design.", partOfSpeech: "noun" },
      { word: "residential", definition: "Designed for people to live in", example: "Residential area.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "b1-theme-literature",
    title: "Literature & Writing",
    level: "B1",
    description: "Novel, poetry, plot, character, genre, biography, metaphor",
    words: [
      { word: "novel", definition: "A fictitious prose narrative of book length", example: "A best-selling novel.", partOfSpeech: "noun" },
      { word: "poetry", definition: "Literary work with rhythm and feelings", example: "She writes poetry.", partOfSpeech: "noun" },
      { word: "plot", definition: "The main events of a story", example: "An exciting plot.", partOfSpeech: "noun" },
      { word: "character", definition: "A person in a novel, play, or movie", example: "The main character.", partOfSpeech: "noun" },
      { word: "genre", definition: "A category of artistic composition", example: "Science fiction genre.", partOfSpeech: "noun" },
      { word: "biography", definition: "An account of someone's life by someone else", example: "A biography of Lincoln.", partOfSpeech: "noun" },
      { word: "metaphor", definition: "A figure of speech comparing things", example: "Life is a journey.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-music",
    title: "Music & Performance",
    level: "B1",
    description: "Melody, rhythm, composer, orchestra, lyrics, rehearsal, audience",
    words: [
      { word: "melody", definition: "A sequence of single notes that is musically satisfying", example: "A catchy melody.", partOfSpeech: "noun" },
      { word: "rhythm", definition: "A strong, regular repeated pattern of sound", example: "The rhythm of the song.", partOfSpeech: "noun" },
      { word: "composer", definition: "A person who writes music", example: "Beethoven was a composer.", partOfSpeech: "noun" },
      { word: "orchestra", definition: "A large group of musicians playing together", example: "A symphony orchestra.", partOfSpeech: "noun" },
      { word: "lyrics", definition: "The words of a song", example: "I love the lyrics.", partOfSpeech: "noun" },
      { word: "rehearsal", definition: "A practice performance", example: "Band rehearsal.", partOfSpeech: "noun" },
      { word: "audience", definition: "The group of people watching or listening", example: "The audience applauded.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b1-theme-fashion",
    title: "Fashion & Style",
    level: "B1",
    description: "Designer, trend, accessory, collection, fabric, tailor, vintage",
    words: [
      { word: "designer", definition: "A person who plans the look of garments", example: "A fashion designer.", partOfSpeech: "noun" },
      { word: "trend", definition: "A general direction in which fashion is changing", example: "The latest trend.", partOfSpeech: "noun" },
      { word: "accessory", definition: "An item added to make an outfit more attractive", example: "Belt as accessory.", partOfSpeech: "noun" },
      { word: "collection", definition: "A range of new clothes from a fashion house", example: "Summer collection.", partOfSpeech: "noun" },
      { word: "fabric", definition: "Cloth produced by weaving or knitting", example: "Cotton fabric.", partOfSpeech: "noun" },
      { word: "tailor", definition: "A person who makes fitted clothes", example: "Go to the tailor.", partOfSpeech: "noun" },
      { word: "vintage", definition: "Of old style or classic design", example: "Vintage clothing.", partOfSpeech: "adjective" },
    ]
  },
];

// ============= B2 VOCABULARY THEMES (20+) =============
export const b2VocabularyThemes: VocabularyTheme[] = [
  {
    id: "b2-theme-globalization",
    title: "Globalization & Trade",
    level: "B2",
    description: "International business",
    words: [
      { word: "outsourcing", definition: "Hiring external companies", example: "Outsourcing reduces costs.", partOfSpeech: "noun" },
      { word: "tariff", definition: "Import tax", example: "Tariffs affect prices.", partOfSpeech: "noun" },
      { word: "export", definition: "Sell abroad", example: "We export to Europe.", partOfSpeech: "verb/noun" },
      { word: "import", definition: "Buy from abroad", example: "We import raw materials.", partOfSpeech: "verb/noun" },
      { word: "multinational", definition: "Operating in many countries", example: "A multinational corporation.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "b2-theme-ethics",
    title: "Ethics & Morality",
    level: "B2",
    description: "Moral reasoning",
    words: [
      { word: "integrity", definition: "Moral uprightness", example: "He has great integrity.", partOfSpeech: "noun" },
      { word: "dilemma", definition: "Difficult choice", example: "Face an ethical dilemma.", partOfSpeech: "noun" },
      { word: "principle", definition: "Fundamental belief", example: "Stick to your principles.", partOfSpeech: "noun" },
      { word: "accountability", definition: "Being responsible", example: "Take accountability.", partOfSpeech: "noun" },
      { word: "transparency", definition: "Openness", example: "We value transparency.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-innovation",
    title: "Innovation & Disruption",
    level: "B2",
    description: "Technological change",
    words: [
      { word: "breakthrough", definition: "Major advance", example: "A scientific breakthrough.", partOfSpeech: "noun" },
      { word: "disruption", definition: "Radical change", example: "Digital disruption is real.", partOfSpeech: "noun" },
      { word: "patent", definition: "Invention protection", example: "File for a patent.", partOfSpeech: "noun" },
      { word: "prototype", definition: "First version", example: "Test the prototype.", partOfSpeech: "noun" },
      { word: "scalable", definition: "Can grow easily", example: "The solution is scalable.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "b2-theme-diplomacy",
    title: "Diplomacy & Relations",
    level: "B2",
    description: "International affairs",
    words: [
      { word: "treaty", definition: "Formal agreement", example: "Sign the peace treaty.", partOfSpeech: "noun" },
      { word: "alliance", definition: "Cooperative agreement", example: "Form an alliance.", partOfSpeech: "noun" },
      { word: "sanction", definition: "Punitive measure", example: "Economic sanctions were imposed.", partOfSpeech: "noun" },
      { word: "ambassador", definition: "Diplomatic representative", example: "Meet the ambassador.", partOfSpeech: "noun" },
      { word: "negotiation", definition: "Formal discussion", example: "Enter negotiations.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-sustainability",
    title: "Sustainability & Green",
    level: "B2",
    description: "Environmental responsibility",
    words: [
      { word: "carbon footprint", definition: "Environmental impact", example: "Reduce your carbon footprint.", partOfSpeech: "noun" },
      { word: "biodegradable", definition: "Naturally decomposing", example: "Use biodegradable products.", partOfSpeech: "adjective" },
      { word: "conservation", definition: "Protection of nature", example: "Support conservation efforts.", partOfSpeech: "noun" },
      { word: "sustainable", definition: "Maintainable long-term", example: "Choose sustainable options.", partOfSpeech: "adjective" },
      { word: "emissions", definition: "Released pollutants", example: "Cut carbon emissions.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-healthcare",
    title: "Healthcare Systems",
    level: "B2",
    description: "Medical institutions",
    words: [
      { word: "epidemic", definition: "Widespread disease", example: "Control the epidemic.", partOfSpeech: "noun" },
      { word: "pandemic", definition: "Global disease outbreak", example: "The pandemic changed everything.", partOfSpeech: "noun" },
      { word: "vaccination", definition: "Disease prevention shot", example: "Get your vaccination.", partOfSpeech: "noun" },
      { word: "pharmaceutical", definition: "Drug-related", example: "Pharmaceutical companies research.", partOfSpeech: "adjective" },
      { word: "rehabilitation", definition: "Recovery process", example: "Start rehabilitation therapy.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-media-advanced",
    title: "Media & Propaganda",
    level: "B2",
    description: "Media influence",
    words: [
      { word: "bias", definition: "Unfair preference", example: "Media bias is common.", partOfSpeech: "noun" },
      { word: "misinformation", definition: "False information", example: "Combat misinformation.", partOfSpeech: "noun" },
      { word: "censorship", definition: "Suppression of content", example: "Oppose censorship.", partOfSpeech: "noun" },
      { word: "propaganda", definition: "Biased promotion", example: "Recognize propaganda.", partOfSpeech: "noun" },
      { word: "narrative", definition: "Story being told", example: "Challenge the narrative.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-philosophy",
    title: "Philosophy & Thought",
    level: "B2",
    description: "Philosophical concepts",
    words: [
      { word: "existentialism", definition: "Philosophy of existence", example: "Study existentialism.", partOfSpeech: "noun" },
      { word: "metaphysics", definition: "Nature of reality", example: "Explore metaphysics.", partOfSpeech: "noun" },
      { word: "paradox", definition: "Contradictory truth", example: "It's a paradox.", partOfSpeech: "noun" },
      { word: "consciousness", definition: "State of awareness", example: "Explore consciousness.", partOfSpeech: "noun" },
      { word: "epistemology", definition: "Study of knowledge", example: "Epistemology is fascinating.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-sociology",
    title: "Sociology & Society",
    level: "B2",
    description: "Social structures",
    words: [
      { word: "inequality", definition: "Unequal distribution", example: "Address social inequality.", partOfSpeech: "noun" },
      { word: "discrimination", definition: "Unfair treatment", example: "Fight discrimination.", partOfSpeech: "noun" },
      { word: "demographics", definition: "Population statistics", example: "Study the demographics.", partOfSpeech: "noun" },
      { word: "assimilation", definition: "Cultural absorption", example: "Cultural assimilation occurs.", partOfSpeech: "noun" },
      { word: "marginalization", definition: "Social exclusion", example: "Prevent marginalization.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-linguistics",
    title: "Language & Linguistics",
    level: "B2",
    description: "Language study",
    words: [
      { word: "syntax", definition: "Sentence structure", example: "Learn English syntax.", partOfSpeech: "noun" },
      { word: "semantics", definition: "Meaning study", example: "Semantics is complex.", partOfSpeech: "noun" },
      { word: "dialect", definition: "Regional language variety", example: "Speak in dialect.", partOfSpeech: "noun" },
      { word: "bilingual", definition: "Speaking two languages", example: "She's bilingual.", partOfSpeech: "adjective" },
      { word: "etymology", definition: "Word origin study", example: "Check the etymology.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-corporate",
    title: "Corporate Culture",
    level: "B2",
    description: "Business environment",
    words: [
      { word: "hierarchy", definition: "Ranking system", example: "The corporate hierarchy.", partOfSpeech: "noun" },
      { word: "merger", definition: "Company combination", example: "The merger was approved.", partOfSpeech: "noun" },
      { word: "acquisition", definition: "Company purchase", example: "Complete the acquisition.", partOfSpeech: "noun" },
      { word: "stakeholder", definition: "Interested party", example: "Consult stakeholders.", partOfSpeech: "noun" },
      { word: "downsizing", definition: "Reducing staff", example: "Avoid downsizing.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-legal",
    title: "Legal & Judicial",
    level: "B2",
    description: "Advanced legal terms",
    words: [
      { word: "jurisdiction", definition: "Legal authority area", example: "Within our jurisdiction.", partOfSpeech: "noun" },
      { word: "litigation", definition: "Legal process", example: "Avoid litigation.", partOfSpeech: "noun" },
      { word: "precedent", definition: "Prior legal decision", example: "Set a precedent.", partOfSpeech: "noun" },
      { word: "verdict", definition: "Court decision", example: "Await the verdict.", partOfSpeech: "noun" },
      { word: "plaintiff", definition: "Person who sues", example: "The plaintiff won.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-neuroscience",
    title: "Brain & Neuroscience",
    level: "B2",
    description: "Brain science",
    words: [
      { word: "neuron", definition: "Brain cell", example: "Neurons transmit signals.", partOfSpeech: "noun" },
      { word: "cognition", definition: "Mental processes", example: "Study cognition.", partOfSpeech: "noun" },
      { word: "synapse", definition: "Neural connection", example: "Synapses form memories.", partOfSpeech: "noun" },
      { word: "plasticity", definition: "Brain adaptability", example: "Brain plasticity is amazing.", partOfSpeech: "noun" },
      { word: "stimulus", definition: "Something causing response", example: "React to the stimulus.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-marketing",
    title: "Marketing & Branding",
    level: "B2",
    description: "Business promotion",
    words: [
      { word: "demographics", definition: "Target population", example: "Study the demographics.", partOfSpeech: "noun" },
      { word: "campaign", definition: "Marketing effort", example: "Launch a campaign.", partOfSpeech: "noun" },
      { word: "positioning", definition: "Brand placement", example: "Market positioning matters.", partOfSpeech: "noun" },
      { word: "conversion", definition: "Customer action", example: "Improve conversion rates.", partOfSpeech: "noun" },
      { word: "engagement", definition: "Customer interaction", example: "Increase engagement.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-astronomy",
    title: "Space & Astronomy",
    level: "B2",
    description: "Space science",
    words: [
      { word: "galaxy", definition: "Star system", example: "The Milky Way is our galaxy.", partOfSpeech: "noun" },
      { word: "asteroid", definition: "Space rock", example: "An asteroid passed Earth.", partOfSpeech: "noun" },
      { word: "orbit", definition: "Circular path", example: "Satellites orbit Earth.", partOfSpeech: "noun/verb" },
      { word: "telescope", definition: "Space viewing device", example: "Use the telescope.", partOfSpeech: "noun" },
      { word: "constellation", definition: "Star pattern", example: "Find the constellation.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-genetics",
    title: "Genetics & Biology",
    level: "B2",
    description: "Genetic science",
    words: [
      { word: "DNA", definition: "Genetic material", example: "DNA contains our genes.", partOfSpeech: "noun" },
      { word: "mutation", definition: "Genetic change", example: "A random mutation occurred.", partOfSpeech: "noun" },
      { word: "hereditary", definition: "Passed through genes", example: "It's hereditary.", partOfSpeech: "adjective" },
      { word: "chromosome", definition: "DNA structure", example: "Humans have 46 chromosomes.", partOfSpeech: "noun" },
      { word: "genome", definition: "Complete genetic set", example: "Map the genome.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-engineering",
    title: "Engineering & Design",
    level: "B2",
    description: "Technical design",
    words: [
      { word: "infrastructure", definition: "Basic systems", example: "Improve infrastructure.", partOfSpeech: "noun" },
      { word: "blueprint", definition: "Technical plan", example: "Follow the blueprint.", partOfSpeech: "noun" },
      { word: "specifications", definition: "Technical details", example: "Check the specifications.", partOfSpeech: "noun" },
      { word: "calibration", definition: "Precision adjustment", example: "Calibration is needed.", partOfSpeech: "noun" },
      { word: "optimization", definition: "Making best", example: "Focus on optimization.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-anthropology",
    title: "Anthropology & Culture",
    level: "B2",
    description: "Human studies",
    words: [
      { word: "civilization", definition: "Advanced society", example: "Ancient civilizations.", partOfSpeech: "noun" },
      { word: "artifact", definition: "Historical object", example: "Found an artifact.", partOfSpeech: "noun" },
      { word: "indigenous", definition: "Native to area", example: "Indigenous peoples.", partOfSpeech: "adjective" },
      { word: "ritual", definition: "Ceremonial practice", example: "A traditional ritual.", partOfSpeech: "noun" },
      { word: "heritage", definition: "Cultural inheritance", example: "Preserve our heritage.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-security",
    title: "Cybersecurity & Privacy",
    level: "B2",
    description: "Digital protection",
    words: [
      { word: "encryption", definition: "Data coding", example: "Use encryption.", partOfSpeech: "noun" },
      { word: "firewall", definition: "Security barrier", example: "Install a firewall.", partOfSpeech: "noun" },
      { word: "malware", definition: "Harmful software", example: "Detect malware.", partOfSpeech: "noun" },
      { word: "phishing", definition: "Fraudulent emails", example: "Avoid phishing scams.", partOfSpeech: "noun" },
      { word: "breach", definition: "Security violation", example: "A data breach occurred.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "b2-theme-journalism",
    title: "Investigative Journalism",
    level: "B2",
    description: "In-depth reporting",
    words: [
      { word: "whistleblower", definition: "Secret revealer", example: "Protect the whistleblower.", partOfSpeech: "noun" },
      { word: "exposé", definition: "Revealing report", example: "Write an exposé.", partOfSpeech: "noun" },
      { word: "anonymous", definition: "Unknown identity", example: "An anonymous source.", partOfSpeech: "adjective" },
      { word: "corroborate", definition: "Confirm truth", example: "Corroborate the story.", partOfSpeech: "verb" },
      { word: "allegation", definition: "Accusation", example: "Investigate the allegation.", partOfSpeech: "noun" },
    ]
  },
];

// ============= C1 VOCABULARY THEMES (20+) =============
export const c1VocabularyThemes: VocabularyTheme[] = [
  {
    id: "c1-theme-rhetoric",
    title: "Rhetoric & Persuasion",
    level: "C1",
    description: "Art of argument",
    words: [
      { word: "eloquence", definition: "Persuasive speaking", example: "She spoke with eloquence.", partOfSpeech: "noun" },
      { word: "rhetoric", definition: "Art of persuasion", example: "Master political rhetoric.", partOfSpeech: "noun" },
      { word: "fallacy", definition: "Flawed argument", example: "Identify the fallacy.", partOfSpeech: "noun" },
      { word: "syllogism", definition: "Logical argument form", example: "A classic syllogism.", partOfSpeech: "noun" },
      { word: "anecdote", definition: "Short story example", example: "Share an anecdote.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-geopolitics",
    title: "Geopolitics & Power",
    level: "C1",
    description: "Global power dynamics",
    words: [
      { word: "hegemony", definition: "Dominant influence", example: "Challenge hegemony.", partOfSpeech: "noun" },
      { word: "sovereignty", definition: "Supreme authority", example: "Protect sovereignty.", partOfSpeech: "noun" },
      { word: "imperialism", definition: "Empire building", example: "Study imperialism.", partOfSpeech: "noun" },
      { word: "annexation", definition: "Territory absorption", example: "The annexation was controversial.", partOfSpeech: "noun" },
      { word: "détente", definition: "Tension reduction", example: "A period of détente.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-epistemology",
    title: "Knowledge & Truth",
    level: "C1",
    description: "Nature of knowledge",
    words: [
      { word: "empirical", definition: "Based on observation", example: "Empirical evidence.", partOfSpeech: "adjective" },
      { word: "objective", definition: "Without bias", example: "Remain objective.", partOfSpeech: "adjective" },
      { word: "subjective", definition: "Based on feelings", example: "A subjective opinion.", partOfSpeech: "adjective" },
      { word: "axiom", definition: "Self-evident truth", example: "Accept the axiom.", partOfSpeech: "noun" },
      { word: "conjecture", definition: "Educated guess", example: "Mere conjecture.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-aesthetics",
    title: "Aesthetics & Beauty",
    level: "C1",
    description: "Philosophy of art",
    words: [
      { word: "sublime", definition: "Overwhelming beauty", example: "A sublime landscape.", partOfSpeech: "adjective" },
      { word: "avant-garde", definition: "Innovative art", example: "An avant-garde artist.", partOfSpeech: "adjective/noun" },
      { word: "juxtaposition", definition: "Placing side by side", example: "Interesting juxtaposition.", partOfSpeech: "noun" },
      { word: "symmetry", definition: "Balanced proportion", example: "Perfect symmetry.", partOfSpeech: "noun" },
      { word: "minimalism", definition: "Simplicity style", example: "I prefer minimalism.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-psychoanalysis",
    title: "Psychoanalysis & Mind",
    level: "C1",
    description: "Deep psychology",
    words: [
      { word: "subconscious", definition: "Below awareness", example: "The subconscious mind.", partOfSpeech: "noun/adjective" },
      { word: "repression", definition: "Suppressing memories", example: "Psychological repression.", partOfSpeech: "noun" },
      { word: "projection", definition: "Attributing to others", example: "That's projection.", partOfSpeech: "noun" },
      { word: "neurosis", definition: "Mental disturbance", example: "Treat the neurosis.", partOfSpeech: "noun" },
      { word: "catharsis", definition: "Emotional release", example: "Experience catharsis.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-economics-advanced",
    title: "Macroeconomics",
    level: "C1",
    description: "Complex economics",
    words: [
      { word: "austerity", definition: "Severe budget cuts", example: "Austerity measures.", partOfSpeech: "noun" },
      { word: "quantitative easing", definition: "Money supply increase", example: "Implement quantitative easing.", partOfSpeech: "noun" },
      { word: "fiscal", definition: "Government finances", example: "Fiscal policy.", partOfSpeech: "adjective" },
      { word: "monetary", definition: "Money-related", example: "Monetary policy.", partOfSpeech: "adjective" },
      { word: "liquidity", definition: "Cash availability", example: "Ensure liquidity.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-biotechnology",
    title: "Biotechnology & Ethics",
    level: "C1",
    description: "Biological engineering",
    words: [
      { word: "cloning", definition: "Genetic duplication", example: "Debate about cloning.", partOfSpeech: "noun" },
      { word: "CRISPR", definition: "Gene editing tool", example: "CRISPR technology.", partOfSpeech: "noun" },
      { word: "bioethics", definition: "Biological ethics", example: "Study bioethics.", partOfSpeech: "noun" },
      { word: "transgenic", definition: "Gene transfer", example: "Transgenic organisms.", partOfSpeech: "adjective" },
      { word: "stem cell", definition: "Basic cells", example: "Stem cell research.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-constitutional",
    title: "Constitutional Law",
    level: "C1",
    description: "Fundamental law",
    words: [
      { word: "amendment", definition: "Constitution change", example: "Pass an amendment.", partOfSpeech: "noun" },
      { word: "ratification", definition: "Formal approval", example: "Await ratification.", partOfSpeech: "noun" },
      { word: "judiciary", definition: "Court system", example: "The independent judiciary.", partOfSpeech: "noun" },
      { word: "legislative", definition: "Law-making", example: "Legislative power.", partOfSpeech: "adjective" },
      { word: "executive", definition: "Government branch", example: "Executive orders.", partOfSpeech: "adjective/noun" },
    ]
  },
  {
    id: "c1-theme-semiotics",
    title: "Semiotics & Symbols",
    level: "C1",
    description: "Study of signs",
    words: [
      { word: "signifier", definition: "Form of sign", example: "The word is a signifier.", partOfSpeech: "noun" },
      { word: "connotation", definition: "Associated meaning", example: "Consider the connotation.", partOfSpeech: "noun" },
      { word: "denotation", definition: "Literal meaning", example: "The denotation is clear.", partOfSpeech: "noun" },
      { word: "symbolism", definition: "Use of symbols", example: "Rich in symbolism.", partOfSpeech: "noun" },
      { word: "iconography", definition: "Image study", example: "Analyze the iconography.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-phenomenology",
    title: "Phenomenology & Experience",
    level: "C1",
    description: "Study of experience",
    words: [
      { word: "phenomenology", definition: "Experience study", example: "Study phenomenology.", partOfSpeech: "noun" },
      { word: "intentionality", definition: "Directedness of mind", example: "Intentionality of thought.", partOfSpeech: "noun" },
      { word: "essence", definition: "Core nature", example: "The essence of being.", partOfSpeech: "noun" },
      { word: "existential", definition: "Relating to existence", example: "An existential crisis.", partOfSpeech: "adjective" },
      { word: "ontology", definition: "Study of being", example: "Explore ontology.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-quantum",
    title: "Quantum Physics",
    level: "C1",
    description: "Subatomic science",
    words: [
      { word: "superposition", definition: "Multiple states", example: "Quantum superposition.", partOfSpeech: "noun" },
      { word: "entanglement", definition: "Particle connection", example: "Quantum entanglement.", partOfSpeech: "noun" },
      { word: "uncertainty", definition: "Cannot know precisely", example: "Heisenberg uncertainty.", partOfSpeech: "noun" },
      { word: "wavefunction", definition: "Quantum state", example: "The wavefunction collapsed.", partOfSpeech: "noun" },
      { word: "qubit", definition: "Quantum bit", example: "Process the qubit.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-historiography",
    title: "Historiography",
    level: "C1",
    description: "Study of history writing",
    words: [
      { word: "historiography", definition: "History writing study", example: "Modern historiography.", partOfSpeech: "noun" },
      { word: "revisionism", definition: "Reinterpretation", example: "Historical revisionism.", partOfSpeech: "noun" },
      { word: "primary source", definition: "Original document", example: "Consult primary sources.", partOfSpeech: "noun" },
      { word: "anachronism", definition: "Time error", example: "An obvious anachronism.", partOfSpeech: "noun" },
      { word: "periodization", definition: "Era division", example: "Consider periodization.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-postmodernism",
    title: "Postmodernism & Theory",
    level: "C1",
    description: "Contemporary theory",
    words: [
      { word: "deconstruction", definition: "Breaking down meaning", example: "Apply deconstruction.", partOfSpeech: "noun" },
      { word: "relativism", definition: "No absolute truth", example: "Cultural relativism.", partOfSpeech: "noun" },
      { word: "metanarrative", definition: "Grand story", example: "Question metanarratives.", partOfSpeech: "noun" },
      { word: "simulacrum", definition: "Copy without original", example: "A mere simulacrum.", partOfSpeech: "noun" },
      { word: "hyperreality", definition: "Beyond real", example: "Living in hyperreality.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-ai",
    title: "Artificial Intelligence",
    level: "C1",
    description: "AI and machine learning",
    words: [
      { word: "neural network", definition: "AI brain model", example: "Train the neural network.", partOfSpeech: "noun" },
      { word: "deep learning", definition: "Advanced AI training", example: "Use deep learning.", partOfSpeech: "noun" },
      { word: "algorithm", definition: "Computing procedure", example: "The algorithm learns.", partOfSpeech: "noun" },
      { word: "singularity", definition: "AI surpassing humans", example: "The technological singularity.", partOfSpeech: "noun" },
      { word: "autonomy", definition: "Self-governing", example: "AI autonomy concerns.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-ecology",
    title: "Deep Ecology",
    level: "C1",
    description: "Environmental philosophy",
    words: [
      { word: "biodiversity", definition: "Species variety", example: "Protect biodiversity.", partOfSpeech: "noun" },
      { word: "anthropocene", definition: "Human era", example: "We live in the Anthropocene.", partOfSpeech: "noun" },
      { word: "symbiosis", definition: "Mutual living", example: "Ecological symbiosis.", partOfSpeech: "noun" },
      { word: "resilience", definition: "Recovery ability", example: "Ecosystem resilience.", partOfSpeech: "noun" },
      { word: "extinction", definition: "Species end", example: "Prevent extinction.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-diplomacy-advanced",
    title: "Advanced Diplomacy",
    level: "C1",
    description: "Complex international relations",
    words: [
      { word: "multilateralism", definition: "Many-nation cooperation", example: "Support multilateralism.", partOfSpeech: "noun" },
      { word: "rapprochement", definition: "Renewed relations", example: "A diplomatic rapprochement.", partOfSpeech: "noun" },
      { word: "realpolitik", definition: "Practical politics", example: "Engage in realpolitik.", partOfSpeech: "noun" },
      { word: "non-proliferation", definition: "Prevent weapon spread", example: "The non-proliferation treaty.", partOfSpeech: "noun" },
      { word: "insurgency", definition: "Armed resistance", example: "Combat the insurgency.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-literary-criticism",
    title: "Literary Criticism",
    level: "C1",
    description: "Analyzing literature",
    words: [
      { word: "allegory", definition: "Symbolic story", example: "An allegory of war.", partOfSpeech: "noun" },
      { word: "motif", definition: "Recurring element", example: "Identify the motif.", partOfSpeech: "noun" },
      { word: "foreshadowing", definition: "Hint at future", example: "Notice the foreshadowing.", partOfSpeech: "noun" },
      { word: "irony", definition: "Opposite meaning", example: "Dramatic irony.", partOfSpeech: "noun" },
      { word: "protagonist", definition: "Main character", example: "The protagonist struggles.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-urban-planning",
    title: "Urban Planning",
    level: "C1",
    description: "City development",
    words: [
      { word: "gentrification", definition: "Neighborhood upgrading", example: "Gentrification raises rents.", partOfSpeech: "noun" },
      { word: "infrastructure", definition: "Basic systems", example: "Urban infrastructure.", partOfSpeech: "noun" },
      { word: "zoning", definition: "Area designation", example: "Zoning regulations.", partOfSpeech: "noun" },
      { word: "sustainability", definition: "Long-term viability", example: "Urban sustainability.", partOfSpeech: "noun" },
      { word: "density", definition: "Concentration level", example: "Population density.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-cognitive-science",
    title: "Cognitive Science",
    level: "C1",
    description: "Mind science",
    words: [
      { word: "metacognition", definition: "Thinking about thinking", example: "Develop metacognition.", partOfSpeech: "noun" },
      { word: "heuristic", definition: "Mental shortcut", example: "Use a heuristic.", partOfSpeech: "noun" },
      { word: "schema", definition: "Mental framework", example: "Cognitive schema.", partOfSpeech: "noun" },
      { word: "priming", definition: "Exposure influence", example: "Semantic priming.", partOfSpeech: "noun" },
      { word: "chunking", definition: "Grouping information", example: "Memory chunking.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c1-theme-finance-advanced",
    title: "Financial Markets",
    level: "C1",
    description: "Complex finance",
    words: [
      { word: "derivative", definition: "Financial contract", example: "Trade derivatives.", partOfSpeech: "noun" },
      { word: "hedge", definition: "Risk protection", example: "Hedge your investments.", partOfSpeech: "verb/noun" },
      { word: "arbitrage", definition: "Price difference profit", example: "Arbitrage opportunity.", partOfSpeech: "noun" },
      { word: "volatility", definition: "Price fluctuation", example: "Market volatility.", partOfSpeech: "noun" },
      { word: "portfolio", definition: "Investment collection", example: "Diversify your portfolio.", partOfSpeech: "noun" },
    ]
  },
];

// ============= C2 VOCABULARY THEMES (20+) =============
export const c2VocabularyThemes: VocabularyTheme[] = [
  {
    id: "c2-theme-metaphysics",
    title: "Advanced Metaphysics",
    level: "C2",
    description: "Ultimate reality",
    words: [
      { word: "noumenon", definition: "Thing-in-itself", example: "Kant's noumenon.", partOfSpeech: "noun" },
      { word: "transcendence", definition: "Beyond experience", example: "Spiritual transcendence.", partOfSpeech: "noun" },
      { word: "immanence", definition: "Within existence", example: "Divine immanence.", partOfSpeech: "noun" },
      { word: "dualism", definition: "Two substance view", example: "Mind-body dualism.", partOfSpeech: "noun" },
      { word: "monism", definition: "One substance view", example: "Philosophical monism.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-hermeneutics",
    title: "Hermeneutics & Interpretation",
    level: "C2",
    description: "Art of interpretation",
    words: [
      { word: "hermeneutics", definition: "Interpretation theory", example: "Biblical hermeneutics.", partOfSpeech: "noun" },
      { word: "exegesis", definition: "Critical interpretation", example: "Textual exegesis.", partOfSpeech: "noun" },
      { word: "teleology", definition: "Purpose study", example: "Teleological argument.", partOfSpeech: "noun" },
      { word: "aporia", definition: "Unresolvable puzzle", example: "Philosophical aporia.", partOfSpeech: "noun" },
      { word: "praxis", definition: "Practice vs theory", example: "Theory and praxis.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-cosmology",
    title: "Cosmology & Universe",
    level: "C2",
    description: "Universe origins",
    words: [
      { word: "multiverse", definition: "Multiple universes", example: "The multiverse theory.", partOfSpeech: "noun" },
      { word: "cosmogony", definition: "Universe origin", example: "Study cosmogony.", partOfSpeech: "noun" },
      { word: "entropy", definition: "Disorder increase", example: "Entropy always increases.", partOfSpeech: "noun" },
      { word: "singularity", definition: "Infinite density point", example: "The Big Bang singularity.", partOfSpeech: "noun" },
      { word: "dark matter", definition: "Invisible matter", example: "Dark matter detection.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-jurisprudence",
    title: "Jurisprudence",
    level: "C2",
    description: "Philosophy of law",
    words: [
      { word: "jurisprudence", definition: "Legal philosophy", example: "Study jurisprudence.", partOfSpeech: "noun" },
      { word: "adjudication", definition: "Legal judgment", example: "Fair adjudication.", partOfSpeech: "noun" },
      { word: "tort", definition: "Civil wrong", example: "Tort law.", partOfSpeech: "noun" },
      { word: "habeas corpus", definition: "Unlawful detention challenge", example: "File habeas corpus.", partOfSpeech: "noun" },
      { word: "stare decisis", definition: "Following precedent", example: "The principle of stare decisis.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-epistemics",
    title: "Advanced Epistemology",
    level: "C2",
    description: "Knowledge foundations",
    words: [
      { word: "solipsism", definition: "Only self exists", example: "Philosophical solipsism.", partOfSpeech: "noun" },
      { word: "a priori", definition: "Before experience", example: "A priori knowledge.", partOfSpeech: "adjective" },
      { word: "a posteriori", definition: "After experience", example: "A posteriori reasoning.", partOfSpeech: "adjective" },
      { word: "verisimilitude", definition: "Truth likeness", example: "Scientific verisimilitude.", partOfSpeech: "noun" },
      { word: "foundationalism", definition: "Basic beliefs theory", example: "Epistemic foundationalism.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-eschatology",
    title: "Eschatology & End Times",
    level: "C2",
    description: "Study of endings",
    words: [
      { word: "eschatology", definition: "End times study", example: "Religious eschatology.", partOfSpeech: "noun" },
      { word: "apocalypse", definition: "World end event", example: "Nuclear apocalypse.", partOfSpeech: "noun" },
      { word: "millenarianism", definition: "End times belief", example: "Christian millenarianism.", partOfSpeech: "noun" },
      { word: "utopia", definition: "Perfect society", example: "A utopian vision.", partOfSpeech: "noun" },
      { word: "dystopia", definition: "Nightmare society", example: "A dystopian future.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-rhetoric-advanced",
    title: "Advanced Rhetoric",
    level: "C2",
    description: "Mastery of persuasion",
    words: [
      { word: "chiasmus", definition: "Reversed structure", example: "A perfect chiasmus.", partOfSpeech: "noun" },
      { word: "antithesis", definition: "Contrasting ideas", example: "Rhetorical antithesis.", partOfSpeech: "noun" },
      { word: "synecdoche", definition: "Part for whole", example: "A common synecdoche.", partOfSpeech: "noun" },
      { word: "metonymy", definition: "Related substitution", example: "Metonymy in speech.", partOfSpeech: "noun" },
      { word: "periphrasis", definition: "Roundabout expression", example: "Avoid periphrasis.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-neurophilosophy",
    title: "Neurophilosophy",
    level: "C2",
    description: "Brain and mind",
    words: [
      { word: "qualia", definition: "Subjective experience", example: "The problem of qualia.", partOfSpeech: "noun" },
      { word: "epiphenomenalism", definition: "Mind as byproduct", example: "Debate epiphenomenalism.", partOfSpeech: "noun" },
      { word: "functionalism", definition: "Mental function theory", example: "Cognitive functionalism.", partOfSpeech: "noun" },
      { word: "reductionism", definition: "Simplifying complex", example: "Avoid reductionism.", partOfSpeech: "noun" },
      { word: "emergentism", definition: "New from complex", example: "Emergentism in consciousness.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-political-philosophy",
    title: "Political Philosophy",
    level: "C2",
    description: "Theory of governance",
    words: [
      { word: "libertarianism", definition: "Minimal government", example: "Political libertarianism.", partOfSpeech: "noun" },
      { word: "communitarianism", definition: "Community focus", example: "Communitarian philosophy.", partOfSpeech: "noun" },
      { word: "egalitarianism", definition: "Equality focus", example: "Economic egalitarianism.", partOfSpeech: "noun" },
      { word: "utilitarianism", definition: "Greatest good", example: "Utilitarian ethics.", partOfSpeech: "noun" },
      { word: "cosmopolitanism", definition: "World citizenship", example: "Embrace cosmopolitanism.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-linguistics-advanced",
    title: "Advanced Linguistics",
    level: "C2",
    description: "Language science",
    words: [
      { word: "morpheme", definition: "Smallest meaning unit", example: "Analyze morphemes.", partOfSpeech: "noun" },
      { word: "phoneme", definition: "Smallest sound unit", example: "Identify phonemes.", partOfSpeech: "noun" },
      { word: "pragmatics", definition: "Language in context", example: "Study pragmatics.", partOfSpeech: "noun" },
      { word: "deixis", definition: "Context-dependent reference", example: "Temporal deixis.", partOfSpeech: "noun" },
      { word: "idiom", definition: "Fixed expression", example: "Learn English idioms.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-critical-theory",
    title: "Critical Theory",
    level: "C2",
    description: "Social critique",
    words: [
      { word: "hegemony", definition: "Ideological dominance", example: "Cultural hegemony.", partOfSpeech: "noun" },
      { word: "commodification", definition: "Making into product", example: "Commodification of culture.", partOfSpeech: "noun" },
      { word: "reification", definition: "Treating abstract as real", example: "Social reification.", partOfSpeech: "noun" },
      { word: "alienation", definition: "Estrangement", example: "Worker alienation.", partOfSpeech: "noun" },
      { word: "praxis", definition: "Theory in action", example: "Revolutionary praxis.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-bioethics",
    title: "Advanced Bioethics",
    level: "C2",
    description: "Life ethics",
    words: [
      { word: "eugenics", definition: "Genetic selection", example: "The history of eugenics.", partOfSpeech: "noun" },
      { word: "euthanasia", definition: "Assisted death", example: "Debate euthanasia.", partOfSpeech: "noun" },
      { word: "autonomy", definition: "Self-determination", example: "Patient autonomy.", partOfSpeech: "noun" },
      { word: "beneficence", definition: "Doing good", example: "Medical beneficence.", partOfSpeech: "noun" },
      { word: "non-maleficence", definition: "Do no harm", example: "Principle of non-maleficence.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-aesthetics-advanced",
    title: "Philosophy of Art",
    level: "C2",
    description: "Art theory",
    words: [
      { word: "mimesis", definition: "Imitation of reality", example: "Aristotle's mimesis.", partOfSpeech: "noun" },
      { word: "catharsis", definition: "Emotional purification", example: "Tragic catharsis.", partOfSpeech: "noun" },
      { word: "kitsch", definition: "Gaudy art", example: "Avoid kitsch.", partOfSpeech: "noun" },
      { word: "pathos", definition: "Emotional appeal", example: "Appeal to pathos.", partOfSpeech: "noun" },
      { word: "verisimilitude", definition: "Appearance of truth", example: "Artistic verisimilitude.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-thermodynamics",
    title: "Thermodynamics & Physics",
    level: "C2",
    description: "Energy science",
    words: [
      { word: "entropy", definition: "Disorder measure", example: "Entropy increases.", partOfSpeech: "noun" },
      { word: "enthalpy", definition: "Heat content", example: "Calculate enthalpy.", partOfSpeech: "noun" },
      { word: "equilibrium", definition: "Balance state", example: "Thermodynamic equilibrium.", partOfSpeech: "noun" },
      { word: "isothermal", definition: "Constant temperature", example: "Isothermal process.", partOfSpeech: "adjective" },
      { word: "adiabatic", definition: "No heat transfer", example: "Adiabatic compression.", partOfSpeech: "adjective" },
    ]
  },
  {
    id: "c2-theme-game-theory",
    title: "Game Theory",
    level: "C2",
    description: "Strategic decision-making",
    words: [
      { word: "equilibrium", definition: "Stable strategy", example: "Nash equilibrium.", partOfSpeech: "noun" },
      { word: "payoff", definition: "Outcome value", example: "Calculate the payoff.", partOfSpeech: "noun" },
      { word: "zero-sum", definition: "Win/lose game", example: "A zero-sum game.", partOfSpeech: "adjective" },
      { word: "dominant strategy", definition: "Best choice always", example: "Find the dominant strategy.", partOfSpeech: "noun" },
      { word: "prisoner's dilemma", definition: "Cooperation problem", example: "The prisoner's dilemma.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-information-theory",
    title: "Information Theory",
    level: "C2",
    description: "Data science",
    words: [
      { word: "entropy", definition: "Information measure", example: "Shannon entropy.", partOfSpeech: "noun" },
      { word: "redundancy", definition: "Extra information", example: "Reduce redundancy.", partOfSpeech: "noun" },
      { word: "bandwidth", definition: "Data capacity", example: "Increase bandwidth.", partOfSpeech: "noun" },
      { word: "compression", definition: "Data reduction", example: "Lossless compression.", partOfSpeech: "noun" },
      { word: "encoding", definition: "Data representation", example: "Efficient encoding.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-molecular-biology",
    title: "Molecular Biology",
    level: "C2",
    description: "Life at molecular level",
    words: [
      { word: "transcription", definition: "DNA to RNA", example: "Gene transcription.", partOfSpeech: "noun" },
      { word: "translation", definition: "RNA to protein", example: "Protein translation.", partOfSpeech: "noun" },
      { word: "replication", definition: "DNA copying", example: "DNA replication.", partOfSpeech: "noun" },
      { word: "epigenetics", definition: "Gene expression control", example: "Epigenetic factors.", partOfSpeech: "noun" },
      { word: "proteome", definition: "All proteins", example: "Study the proteome.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-phenomenology-advanced",
    title: "Advanced Phenomenology",
    level: "C2",
    description: "Deep experience study",
    words: [
      { word: "bracketing", definition: "Suspending judgment", example: "Phenomenological bracketing.", partOfSpeech: "noun" },
      { word: "lifeworld", definition: "Lived experience", example: "The everyday lifeworld.", partOfSpeech: "noun" },
      { word: "intersubjectivity", definition: "Shared experience", example: "Phenomenological intersubjectivity.", partOfSpeech: "noun" },
      { word: "embodiment", definition: "Body experience", example: "Embodied cognition.", partOfSpeech: "noun" },
      { word: "horizon", definition: "Experience boundary", example: "Expand your horizon.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-economic-theory",
    title: "Economic Theory",
    level: "C2",
    description: "Advanced economics",
    words: [
      { word: "elasticity", definition: "Demand sensitivity", example: "Price elasticity.", partOfSpeech: "noun" },
      { word: "externality", definition: "Side effect cost", example: "Negative externality.", partOfSpeech: "noun" },
      { word: "oligopoly", definition: "Few seller market", example: "An oligopoly exists.", partOfSpeech: "noun" },
      { word: "monopoly", definition: "Single seller market", example: "Break the monopoly.", partOfSpeech: "noun" },
      { word: "equilibrium", definition: "Market balance", example: "Market equilibrium.", partOfSpeech: "noun" },
    ]
  },
  {
    id: "c2-theme-cognitive-linguistics",
    title: "Cognitive Linguistics",
    level: "C2",
    description: "Language and mind",
    words: [
      { word: "conceptual metaphor", definition: "Abstract concept mapping", example: "Time is money metaphor.", partOfSpeech: "noun" },
      { word: "prototype", definition: "Category best example", example: "The prototype effect.", partOfSpeech: "noun" },
      { word: "frame", definition: "Mental structure", example: "Activate the frame.", partOfSpeech: "noun" },
      { word: "construal", definition: "Interpretation way", example: "Different construals.", partOfSpeech: "noun" },
      { word: "embodied cognition", definition: "Body shapes thought", example: "Embodied cognition theory.", partOfSpeech: "noun" },
    ]
  },
];

// Get all themes for a specific level
export const getThemesByLevel = (level: string): VocabularyTheme[] => {
  switch (level.toUpperCase()) {
    case "A1": return a1VocabularyThemes;
    case "A2": return a2VocabularyThemes;
    case "B1": return b1VocabularyThemes;
    case "B2": return b2VocabularyThemes;
    case "C1": return c1VocabularyThemes;
    case "C2": return c2VocabularyThemes;
    default: return a1VocabularyThemes;
  }
};

// Generate exercises from vocabulary themes
export const generateVocabularyExercises = (theme: VocabularyTheme): Exercise[] => {
  const exercises: Exercise[] = [];
  
  theme.words.forEach((word, index) => {
    // Definition matching exercise
    exercises.push({
      id: `${theme.id}-def-${index}`,
      type: "multiple-choice",
      question: `What is the definition of "${word.word}"?`,
      options: [
        word.definition,
        theme.words[(index + 1) % theme.words.length].definition,
        theme.words[(index + 2) % theme.words.length].definition,
        theme.words[(index + 3) % theme.words.length].definition,
      ].sort(() => Math.random() - 0.5),
      correctAnswer: word.definition,
      explanation: `"${word.word}" means: ${word.definition}`,
      difficulty: 1,
      tags: ["vocabulary", "definition", theme.level.toLowerCase()]
    });
    
    // Fill in the blank exercise (with hint options)
    exercises.push({
      id: `${theme.id}-fill-${index}`,
      type: "multiple-choice",
      question: `Complete: "${word.example.replace(new RegExp(word.word, 'gi'), '_____')}"`,
      options: [
        word.word,
        theme.words[(index + 1) % theme.words.length].word,
        theme.words[(index + 2) % theme.words.length].word,
        theme.words[(index + 3) % theme.words.length].word,
      ].sort(() => Math.random() - 0.5),
      correctAnswer: word.word,
      explanation: `The correct word is "${word.word}". ${word.definition}`,
      difficulty: 2,
      tags: ["vocabulary", "fill-blank", theme.level.toLowerCase()]
    });
    
    // Word to definition matching
    exercises.push({
      id: `${theme.id}-match-${index}`,
      type: "multiple-choice",
      question: `Which word means: "${word.definition}"?`,
      options: [
        word.word,
        theme.words[(index + 1) % theme.words.length].word,
        theme.words[(index + 2) % theme.words.length].word,
        theme.words[(index + 3) % theme.words.length].word,
      ].sort(() => Math.random() - 0.5),
      correctAnswer: word.word,
      explanation: `"${word.word}" is the correct answer. Example: ${word.example}`,
      difficulty: 1,
      tags: ["vocabulary", "matching", theme.level.toLowerCase()]
    });
  });
  
  return exercises.sort(() => Math.random() - 0.5);
};

// Get exercises for a specific skill ID
export const getVocabularyExercisesForSkill = (skillId: string): Exercise[] => {
  const levelMatch = skillId.match(/^(a1|a2|b1|b2|c1|c2)/i);
  if (!levelMatch) return [];
  
  const level = levelMatch[1].toUpperCase();
  
  // For A1, use the new dedicated exercise file
  if (level === "A1") {
    const exercises = getA1VocabularyExercises(skillId);
    if (exercises.length > 0) {
      return exercises;
    }
  }
  
  const themes = getThemesByLevel(level);
  
  // First try to find theme by matching ID directly
  const matchingTheme = themes.find(t => t.id === skillId);
  if (matchingTheme) {
    return generateVocabularyExercises(matchingTheme);
  }
  
  // Get theme index from skill ID - subtract 1 for 0-based indexing
  const indexMatch = skillId.match(/-(\d+)$/);
  if (indexMatch) {
    const themeIndex = (parseInt(indexMatch[1]) - 1) % themes.length;
    const selectedTheme = themes[themeIndex >= 0 ? themeIndex : 0];
    if (selectedTheme) {
      return generateVocabularyExercises(selectedTheme);
    }
  }
  
  return themes.length > 0 ? generateVocabularyExercises(themes[0]) : [];
};
