// Image-based vocabulary exercises for visual learning
// Uses emoji representations for immediate visual feedback

import { Exercise } from "./exercisesData";

// Vocabulary image data with emoji representations
export const vocabularyImages: Record<string, { emoji: string; word: string; spanishWord: string; category: string }> = {
  // Food & Drinks
  apple: { emoji: "🍎", word: "apple", spanishWord: "manzana", category: "food" },
  banana: { emoji: "🍌", word: "banana", spanishWord: "plátano", category: "food" },
  orange: { emoji: "🍊", word: "orange", spanishWord: "naranja", category: "food" },
  bread: { emoji: "🍞", word: "bread", spanishWord: "pan", category: "food" },
  cheese: { emoji: "🧀", word: "cheese", spanishWord: "queso", category: "food" },
  egg: { emoji: "🥚", word: "egg", spanishWord: "huevo", category: "food" },
  milk: { emoji: "🥛", word: "milk", spanishWord: "leche", category: "food" },
  water: { emoji: "💧", word: "water", spanishWord: "agua", category: "food" },
  coffee: { emoji: "☕", word: "coffee", spanishWord: "café", category: "food" },
  pizza: { emoji: "🍕", word: "pizza", spanishWord: "pizza", category: "food" },
  hamburger: { emoji: "🍔", word: "hamburger", spanishWord: "hamburguesa", category: "food" },
  chicken: { emoji: "🍗", word: "chicken", spanishWord: "pollo", category: "food" },
  fish: { emoji: "🐟", word: "fish", spanishWord: "pescado", category: "food" },
  rice: { emoji: "🍚", word: "rice", spanishWord: "arroz", category: "food" },
  salad: { emoji: "🥗", word: "salad", spanishWord: "ensalada", category: "food" },
  iceCream: { emoji: "🍦", word: "ice cream", spanishWord: "helado", category: "food" },
  cake: { emoji: "🎂", word: "cake", spanishWord: "pastel", category: "food" },
  cookie: { emoji: "🍪", word: "cookie", spanishWord: "galleta", category: "food" },
  
  // Animals
  dog: { emoji: "🐕", word: "dog", spanishWord: "perro", category: "animals" },
  cat: { emoji: "🐈", word: "cat", spanishWord: "gato", category: "animals" },
  bird: { emoji: "🐦", word: "bird", spanishWord: "pájaro", category: "animals" },
  fish_animal: { emoji: "🐠", word: "fish", spanishWord: "pez", category: "animals" },
  horse: { emoji: "🐴", word: "horse", spanishWord: "caballo", category: "animals" },
  cow: { emoji: "🐄", word: "cow", spanishWord: "vaca", category: "animals" },
  pig: { emoji: "🐷", word: "pig", spanishWord: "cerdo", category: "animals" },
  sheep: { emoji: "🐑", word: "sheep", spanishWord: "oveja", category: "animals" },
  elephant: { emoji: "🐘", word: "elephant", spanishWord: "elefante", category: "animals" },
  lion: { emoji: "🦁", word: "lion", spanishWord: "león", category: "animals" },
  monkey: { emoji: "🐒", word: "monkey", spanishWord: "mono", category: "animals" },
  rabbit: { emoji: "🐰", word: "rabbit", spanishWord: "conejo", category: "animals" },
  bear: { emoji: "🐻", word: "bear", spanishWord: "oso", category: "animals" },
  tiger: { emoji: "🐯", word: "tiger", spanishWord: "tigre", category: "animals" },
  
  // Body Parts
  head: { emoji: "🗣️", word: "head", spanishWord: "cabeza", category: "body" },
  eye: { emoji: "👁️", word: "eye", spanishWord: "ojo", category: "body" },
  ear: { emoji: "👂", word: "ear", spanishWord: "oreja", category: "body" },
  nose: { emoji: "👃", word: "nose", spanishWord: "nariz", category: "body" },
  mouth: { emoji: "👄", word: "mouth", spanishWord: "boca", category: "body" },
  hand: { emoji: "✋", word: "hand", spanishWord: "mano", category: "body" },
  foot: { emoji: "🦶", word: "foot", spanishWord: "pie", category: "body" },
  heart: { emoji: "❤️", word: "heart", spanishWord: "corazón", category: "body" },
  
  // Weather
  sun: { emoji: "☀️", word: "sun", spanishWord: "sol", category: "weather" },
  cloud: { emoji: "☁️", word: "cloud", spanishWord: "nube", category: "weather" },
  rain: { emoji: "🌧️", word: "rain", spanishWord: "lluvia", category: "weather" },
  snow: { emoji: "❄️", word: "snow", spanishWord: "nieve", category: "weather" },
  wind: { emoji: "💨", word: "wind", spanishWord: "viento", category: "weather" },
  rainbow: { emoji: "🌈", word: "rainbow", spanishWord: "arcoíris", category: "weather" },
  
  // Family
  family: { emoji: "👨‍👩‍👧‍👦", word: "family", spanishWord: "familia", category: "family" },
  mother: { emoji: "👩", word: "mother", spanishWord: "madre", category: "family" },
  father: { emoji: "👨", word: "father", spanishWord: "padre", category: "family" },
  sister: { emoji: "👧", word: "sister", spanishWord: "hermana", category: "family" },
  brother: { emoji: "👦", word: "brother", spanishWord: "hermano", category: "family" },
  baby: { emoji: "👶", word: "baby", spanishWord: "bebé", category: "family" },
  grandmother: { emoji: "👵", word: "grandmother", spanishWord: "abuela", category: "family" },
  grandfather: { emoji: "👴", word: "grandfather", spanishWord: "abuelo", category: "family" },
  
  // Objects & Things
  house: { emoji: "🏠", word: "house", spanishWord: "casa", category: "objects" },
  car: { emoji: "🚗", word: "car", spanishWord: "carro", category: "objects" },
  book: { emoji: "📚", word: "book", spanishWord: "libro", category: "objects" },
  phone: { emoji: "📱", word: "phone", spanishWord: "teléfono", category: "objects" },
  computer: { emoji: "💻", word: "computer", spanishWord: "computadora", category: "objects" },
  clock: { emoji: "⏰", word: "clock", spanishWord: "reloj", category: "objects" },
  chair: { emoji: "🪑", word: "chair", spanishWord: "silla", category: "objects" },
  bed: { emoji: "🛏️", word: "bed", spanishWord: "cama", category: "objects" },
  door: { emoji: "🚪", word: "door", spanishWord: "puerta", category: "objects" },
  key: { emoji: "🔑", word: "key", spanishWord: "llave", category: "objects" },
  
  // Clothes
  shirt: { emoji: "👕", word: "shirt", spanishWord: "camisa", category: "clothes" },
  pants: { emoji: "👖", word: "pants", spanishWord: "pantalones", category: "clothes" },
  dress: { emoji: "👗", word: "dress", spanishWord: "vestido", category: "clothes" },
  shoes: { emoji: "👟", word: "shoes", spanishWord: "zapatos", category: "clothes" },
  hat: { emoji: "🎩", word: "hat", spanishWord: "sombrero", category: "clothes" },
  glasses: { emoji: "👓", word: "glasses", spanishWord: "gafas", category: "clothes" },
  
  // Colors (using colored shapes)
  red: { emoji: "🔴", word: "red", spanishWord: "rojo", category: "colors" },
  blue: { emoji: "🔵", word: "blue", spanishWord: "azul", category: "colors" },
  green: { emoji: "🟢", word: "green", spanishWord: "verde", category: "colors" },
  yellow: { emoji: "🟡", word: "yellow", spanishWord: "amarillo", category: "colors" },
  orange_color: { emoji: "🟠", word: "orange", spanishWord: "naranja", category: "colors" },
  purple: { emoji: "🟣", word: "purple", spanishWord: "morado", category: "colors" },
  black: { emoji: "⚫", word: "black", spanishWord: "negro", category: "colors" },
  white: { emoji: "⚪", word: "white", spanishWord: "blanco", category: "colors" },
  brown: { emoji: "🟤", word: "brown", spanishWord: "marrón", category: "colors" },
  
  // Numbers
  one: { emoji: "1️⃣", word: "one", spanishWord: "uno", category: "numbers" },
  two: { emoji: "2️⃣", word: "two", spanishWord: "dos", category: "numbers" },
  three: { emoji: "3️⃣", word: "three", spanishWord: "tres", category: "numbers" },
  four: { emoji: "4️⃣", word: "four", spanishWord: "cuatro", category: "numbers" },
  five: { emoji: "5️⃣", word: "five", spanishWord: "cinco", category: "numbers" },
  
  // Professions
  doctor: { emoji: "👨‍⚕️", word: "doctor", spanishWord: "doctor", category: "professions" },
  teacher: { emoji: "👨‍🏫", word: "teacher", spanishWord: "profesor", category: "professions" },
  police: { emoji: "👮", word: "police officer", spanishWord: "policía", category: "professions" },
  chef: { emoji: "👨‍🍳", word: "chef", spanishWord: "chef", category: "professions" },
  firefighter: { emoji: "👨‍🚒", word: "firefighter", spanishWord: "bombero", category: "professions" },
  
  // Sports & Activities
  soccer: { emoji: "⚽", word: "soccer", spanishWord: "fútbol", category: "sports" },
  basketball: { emoji: "🏀", word: "basketball", spanishWord: "baloncesto", category: "sports" },
  tennis: { emoji: "🎾", word: "tennis", spanishWord: "tenis", category: "sports" },
  swimming: { emoji: "🏊", word: "swimming", spanishWord: "natación", category: "sports" },
  running: { emoji: "🏃", word: "running", spanishWord: "correr", category: "sports" },
};

// Generate image-match exercises for a specific category
export const generateImageMatchExercises = (category: string, level: string): Exercise[] => {
  const categoryItems = Object.entries(vocabularyImages)
    .filter(([_, item]) => item.category === category);
  
  return categoryItems.map(([key, item], index) => {
    // Get 3 wrong options from the same category
    const wrongOptions = Object.entries(vocabularyImages)
      .filter(([k, i]) => i.category === category && k !== key)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(([_, i]) => i.word);
    
    const allOptions = [item.word, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    return {
      id: `img-${category}-${index}`,
      type: "image-match" as const,
      question: `What word corresponds to this image?`,
      imageUrl: item.emoji,
      options: allOptions,
      correctAnswer: item.word,
      explanation: `"${item.word}" is the English word for this image.`,
      explanationSpanish: `"${item.word}" significa "${item.spanishWord}" en español.`,
      difficulty: 1 as const,
      tags: ["vocabulary", "image-match", category, level.toLowerCase()]
    };
  });
};

// Generate reverse exercises (word to image)
export const generateWordToImageExercises = (category: string, level: string): Exercise[] => {
  const categoryItems = Object.entries(vocabularyImages)
    .filter(([_, item]) => item.category === category);
  
  return categoryItems.map(([key, item], index) => {
    const wrongOptions = Object.entries(vocabularyImages)
      .filter(([k, i]) => i.category === category && k !== key)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(([_, i]) => i.emoji);
    
    const allOptions = [item.emoji, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    return {
      id: `word-img-${category}-${index}`,
      type: "image-match" as const,
      question: `Select the image that represents: "${item.word}"`,
      options: allOptions,
      correctAnswer: item.emoji,
      explanation: `The ${item.emoji} represents "${item.word}".`,
      explanationSpanish: `El ${item.emoji} representa "${item.word}" (${item.spanishWord}).`,
      difficulty: 1 as const,
      tags: ["vocabulary", "word-to-image", category, level.toLowerCase()]
    };
  });
};

// Generate translation exercises (Spanish to English)
export const generateTranslationExercises = (category: string, level: string): Exercise[] => {
  const categoryItems = Object.entries(vocabularyImages)
    .filter(([_, item]) => item.category === category);
  
  return categoryItems.map(([key, item], index) => {
    const wrongOptions = Object.entries(vocabularyImages)
      .filter(([k, i]) => i.category === category && k !== key)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(([_, i]) => i.word);
    
    const allOptions = [item.word, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    return {
      id: `trans-${category}-${index}`,
      type: "multiple-choice" as const,
      question: `What is "${item.spanishWord}" in English?`,
      options: allOptions,
      correctAnswer: item.word,
      explanation: `"${item.spanishWord}" in English is "${item.word}".`,
      explanationSpanish: `"${item.spanishWord}" en inglés se dice "${item.word}".`,
      difficulty: 1 as const,
      tags: ["vocabulary", "translation", category, level.toLowerCase()]
    };
  });
};

// Generate spelling recognition exercises
export const generateSpellingExercises = (category: string, level: string): Exercise[] => {
  const categoryItems = Object.entries(vocabularyImages)
    .filter(([_, item]) => item.category === category)
    .slice(0, 6);
  
  return categoryItems.map(([key, item], index) => {
    // Create misspelled versions
    const misspellings = [
      item.word.replace(/(.)(.)/, '$2$1'), // swap first two letters
      item.word + 's', // add s
      item.word.slice(0, -1), // remove last letter
    ].filter(w => w !== item.word);
    
    const allOptions = [item.word, ...misspellings.slice(0, 3)].sort(() => Math.random() - 0.5);
    
    return {
      id: `spell-${category}-${index}`,
      type: "multiple-choice" as const,
      question: `${item.emoji} What is the correct spelling?`,
      imageUrl: item.emoji,
      options: allOptions,
      correctAnswer: item.word,
      explanation: `The correct spelling is "${item.word}".`,
      explanationSpanish: `La ortografía correcta es "${item.word}".`,
      difficulty: 2 as const,
      tags: ["vocabulary", "spelling", category, level.toLowerCase()]
    };
  });
};

// Get all image exercises for a vocabulary skill
export const getImageExercisesForSkill = (skillId: string, level: string): Exercise[] => {
  // Map skill IDs to categories - expanded for more variety
  const skillCategoryMap: Record<string, string[]> = {
    "a1-vocab-1": ["numbers"],
    "a1-vocab-2": ["colors"],
    "a1-vocab-3": ["family"],
    "a1-vocab-4": ["food"],
    "a1-vocab-5": ["food"],
    "a1-vocab-6": ["animals"],
    "a1-vocab-7": ["body"],
    "a1-vocab-8": ["clothes"],
    "a1-vocab-9": ["objects"],
    "a1-vocab-10": ["objects"],
    "a1-vocab-11": ["objects"],
    "a1-vocab-12": ["objects"],
    "a1-vocab-13": ["weather"],
    "a1-vocab-14": ["objects"],
    "a1-vocab-15": ["professions"],
    "a1-vocab-16": ["objects"],
    "a1-vocab-17": ["objects"],
    "a1-vocab-18": ["objects"],
    "a1-vocab-19": ["objects"],
    "a1-vocab-20": ["objects"],
    "a2-vocab-1": ["food", "professions"],
    "a2-vocab-2": ["sports", "objects"],
    "a2-vocab-3": ["weather", "clothes"],
    "a2-vocab-4": ["family", "professions"],
    "a2-vocab-5": ["animals", "food"],
    "b1-vocab-1": ["professions", "sports"],
    "b1-vocab-2": ["weather", "objects"],
  };
  
  const categories = skillCategoryMap[skillId] || ["food", "animals", "objects"];
  
  let exercises: Exercise[] = [];
  categories.forEach(category => {
    exercises = [
      ...exercises,
      ...generateImageMatchExercises(category, level),
      ...generateWordToImageExercises(category, level),
      ...generateTranslationExercises(category, level),
      ...generateSpellingExercises(category, level)
    ];
  });
  
  // Shuffle and return more exercises (25-30 per practice)
  return exercises.sort(() => Math.random() - 0.5).slice(0, 30);
};
