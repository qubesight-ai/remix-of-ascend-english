// Global News data adapted by level
export interface NewsArticle {
  id: string;
  title: string;
  titleEs: string;
  summary: string;
  content: string;
  contentEs: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  category: string;
  imageUrl: string;
  readTime: number;
  vocabulary: VocabularyItem[];
  questions: ComprehensionQuestion[];
  grammarExercises?: GrammarExercise[];
  vocabularyExercises?: VocabularyExercise[];
  publishedAt: string;
}

export interface VocabularyItem {
  word: string;
  definition: string;
  definitionEs: string;
  example: string;
}

export interface ComprehensionQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GrammarExercise {
  type: "fill-blank" | "multiple-choice" | "error-correction";
  instruction: string;
  sentence: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  grammarPoint: string;
}

export interface VocabularyExercise {
  type: "definition" | "synonym" | "fill-blank" | "context";
  word: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const newsArticles: NewsArticle[] = [
  // A1 Level - Simple news
  {
    id: "a1-1",
    title: "New Park Opens in City Center",
    titleEs: "Nuevo Parque Abre en el Centro de la Ciudad",
    summary: "A new park opened today. People are happy.",
    content: `A new park opened in the city center today. The park is big and beautiful. It has many trees and flowers. There are benches for people to sit. Children can play in the playground.

The mayor came to the opening. He said, "This park is for everyone. Families can come here on weekends. It is free to visit."

Many people came to see the new park. They walked on the paths. Some people took photos of the flowers. The weather was sunny and warm.

The park is open every day from 6 AM to 10 PM. There are also toilets and a small café near the entrance.`,
    contentEs: `Un nuevo parque abrió hoy en el centro de la ciudad. El parque es grande y hermoso. Tiene muchos árboles y flores. Hay bancos para que la gente se siente. Los niños pueden jugar en el área de juegos.

El alcalde vino a la inauguración. Dijo: "Este parque es para todos. Las familias pueden venir los fines de semana. Es gratis visitarlo."

Mucha gente vino a ver el nuevo parque. Caminaron por los senderos. Algunas personas tomaron fotos de las flores. El clima estaba soleado y cálido.

El parque está abierto todos los días de 6 AM a 10 PM. También hay baños y una pequeña cafetería cerca de la entrada.`,
    level: "A1",
    category: "Local",
    imageUrl: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?w=800",
    readTime: 2,
    vocabulary: [
      { word: "park", definition: "a public area with grass, trees, and benches", definitionEs: "un área pública con césped, árboles y bancos", example: "I walk in the park every morning." },
      { word: "opened", definition: "started to be available", definitionEs: "comenzó a estar disponible", example: "The store opened at 9 AM." },
      { word: "mayor", definition: "the leader of a city", definitionEs: "el líder de una ciudad", example: "The mayor gave a speech." },
      { word: "bench", definition: "a long seat for several people", definitionEs: "un asiento largo para varias personas", example: "We sat on a bench in the park." },
    ],
    questions: [
      { question: "What opened in the city center?", options: ["A new park", "A new school", "A new hospital", "A new store"], correctAnswer: "A new park", explanation: "The article says 'A new park opened in the city center today.'" },
      { question: "Who came to the opening?", options: ["The president", "The mayor", "A famous actor", "A doctor"], correctAnswer: "The mayor", explanation: "The article mentions 'The mayor came to the opening.'" },
      { question: "What time does the park open?", options: ["5 AM", "6 AM", "7 AM", "8 AM"], correctAnswer: "6 AM", explanation: "The park is open from 6 AM to 10 PM." },
    ],
    grammarExercises: [
      { type: "fill-blank", instruction: "Complete with the correct verb form", sentence: "A new park _____ in the city center today.", options: ["open", "opened", "opens", "opening"], correctAnswer: "opened", explanation: "We use the past simple 'opened' for completed actions.", grammarPoint: "Past Simple" },
      { type: "fill-blank", instruction: "Choose the correct article", sentence: "The park has many trees and _____.", options: ["a flowers", "flower", "flowers", "the flower"], correctAnswer: "flowers", explanation: "Plural countable nouns don't need an article when speaking generally.", grammarPoint: "Articles" },
      { type: "multiple-choice", instruction: "Select the correct form", sentence: "It _____ free to visit.", options: ["is", "are", "be", "been"], correctAnswer: "is", explanation: "'It' takes the singular verb 'is'.", grammarPoint: "Subject-Verb Agreement" },
    ],
    vocabularyExercises: [
      { type: "definition", word: "opened", question: "What does 'opened' mean?", options: ["Started to be available", "Closed down", "Built something", "Destroyed"], correctAnswer: "Started to be available", explanation: "'Opened' means something began to be accessible or available." },
      { type: "context", word: "bench", question: "Complete: We sat on a _____ in the park.", options: ["chair", "bench", "table", "floor"], correctAnswer: "bench", explanation: "A bench is a long seat typically found in parks." },
      { type: "synonym", word: "beautiful", question: "Which word is similar to 'beautiful'?", options: ["Ugly", "Pretty", "Sad", "Small"], correctAnswer: "Pretty", explanation: "'Beautiful' and 'pretty' both describe something nice to look at." },
    ],
    publishedAt: "2025-01-15"
  },
  {
    id: "a1-2",
    title: "Weather Report: Sunny Week Ahead",
    titleEs: "Pronóstico del Tiempo: Semana Soleada por Delante",
    summary: "The weather will be nice this week. It will be sunny.",
    content: `Good news for this week! The weather will be sunny and warm. There will be no rain for the next seven days.

Monday will be very nice. The temperature will be 25 degrees. Tuesday and Wednesday will be a little warmer, about 27 degrees.

Thursday and Friday will be the warmest days. The temperature will be 30 degrees. It is a good time to go to the beach or the park.

The weekend will be slightly cooler but still sunny. Remember to drink water and wear sunscreen when you go outside.`,
    contentEs: `¡Buenas noticias para esta semana! El tiempo estará soleado y cálido. No habrá lluvia durante los próximos siete días.

El lunes será muy agradable. La temperatura será de 25 grados. El martes y miércoles serán un poco más cálidos, unos 27 grados.

El jueves y viernes serán los días más calurosos. La temperatura será de 30 grados. Es un buen momento para ir a la playa o al parque.

El fin de semana será un poco más fresco pero aún soleado. Recuerda beber agua y usar protector solar cuando salgas.`,
    level: "A1",
    category: "Weather",
    imageUrl: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800",
    readTime: 2,
    vocabulary: [
      { word: "sunny", definition: "bright with light from the sun", definitionEs: "brillante con luz del sol", example: "It's a sunny day today." },
      { word: "temperature", definition: "how hot or cold something is", definitionEs: "qué tan caliente o frío está algo", example: "The temperature is 25 degrees." },
      { word: "warm", definition: "a little hot, comfortable", definitionEs: "un poco caliente, cómodo", example: "It's warm today, not cold." },
      { word: "sunscreen", definition: "cream to protect skin from sun", definitionEs: "crema para proteger la piel del sol", example: "Put on sunscreen before going to the beach." },
    ],
    questions: [
      { question: "How will the weather be this week?", options: ["Rainy", "Sunny", "Cloudy", "Snowy"], correctAnswer: "Sunny", explanation: "The article says the weather will be sunny and warm." },
      { question: "What will be the warmest days?", options: ["Monday and Tuesday", "Wednesday and Thursday", "Thursday and Friday", "Saturday and Sunday"], correctAnswer: "Thursday and Friday", explanation: "The article says Thursday and Friday will be the warmest days." },
    ],
    grammarExercises: [
      { type: "fill-blank", instruction: "Choose the correct future form", sentence: "The weather _____ sunny and warm.", options: ["will be", "was", "is being", "were"], correctAnswer: "will be", explanation: "We use 'will be' for future predictions.", grammarPoint: "Future Simple" },
      { type: "fill-blank", instruction: "Select the correct comparative", sentence: "Tuesday will be a little _____ than Monday.", options: ["warm", "warmer", "warmest", "more warm"], correctAnswer: "warmer", explanation: "We add '-er' to short adjectives to make comparatives.", grammarPoint: "Comparatives" },
      { type: "multiple-choice", instruction: "Choose the correct superlative", sentence: "Thursday and Friday will be the _____ days.", options: ["warm", "warmer", "warmest", "more warm"], correctAnswer: "warmest", explanation: "We use 'the + -est' for superlatives with short adjectives.", grammarPoint: "Superlatives" },
    ],
    vocabularyExercises: [
      { type: "definition", word: "sunny", question: "What does 'sunny' mean?", options: ["Rainy weather", "Bright with sunlight", "Cloudy sky", "Cold temperature"], correctAnswer: "Bright with sunlight", explanation: "'Sunny' describes weather when the sun is shining." },
      { type: "context", word: "temperature", question: "The _____ will be 30 degrees.", options: ["weather", "temperature", "sunshine", "climate"], correctAnswer: "temperature", explanation: "Temperature is the measure of how hot or cold something is." },
      { type: "synonym", word: "warm", question: "Which word is opposite to 'warm'?", options: ["Hot", "Cool", "Sunny", "Bright"], correctAnswer: "Cool", explanation: "'Warm' means a comfortable level of heat; 'cool' means slightly cold." },
    ],
    publishedAt: "2025-01-14"
  },
  // A2 Level - Slightly more complex
  {
    id: "a2-1",
    title: "Local Restaurant Wins National Award",
    titleEs: "Restaurante Local Gana Premio Nacional",
    summary: "A small restaurant in our city has won an important cooking award.",
    content: `A family restaurant in the city center has won the Best New Restaurant award this year. The restaurant, called "Casa Maria," opened just eighteen months ago.

Chef Maria Rodriguez and her husband Pedro run the restaurant together. They serve traditional Spanish food with modern touches. Their most popular dish is paella, which they make with fresh seafood.

"We are very surprised and happy," said Maria. "We just wanted to share our family recipes with the community. We didn't expect to win such an important award."

The restaurant can serve 40 people at a time. It is open from Tuesday to Sunday. Reservations are recommended, especially on weekends, as the restaurant is now very popular.

The award ceremony took place last Saturday in Madrid. Maria and Pedro traveled there to receive the trophy and a prize of 10,000 euros.`,
    contentEs: `Un restaurante familiar en el centro de la ciudad ha ganado el premio al Mejor Restaurante Nuevo de este año. El restaurante, llamado "Casa María," abrió hace solo dieciocho meses.

La chef María Rodríguez y su esposo Pedro dirigen el restaurante juntos. Sirven comida española tradicional con toques modernos. Su plato más popular es la paella, que preparan con mariscos frescos.

"Estamos muy sorprendidos y felices," dijo María. "Solo queríamos compartir las recetas de nuestra familia con la comunidad. No esperábamos ganar un premio tan importante."

El restaurante puede atender a 40 personas a la vez. Está abierto de martes a domingo. Se recomiendan reservaciones, especialmente los fines de semana, ya que el restaurante ahora es muy popular.

La ceremonia de premiación tuvo lugar el sábado pasado en Madrid. María y Pedro viajaron allí para recibir el trofeo y un premio de 10,000 euros.`,
    level: "A2",
    category: "Local",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    readTime: 3,
    vocabulary: [
      { word: "award", definition: "a prize given for achievement", definitionEs: "un premio dado por un logro", example: "She won an award for her work." },
      { word: "recipe", definition: "instructions for cooking food", definitionEs: "instrucciones para cocinar comida", example: "This is my grandmother's recipe." },
      { word: "reservation", definition: "an arrangement to have something saved for you", definitionEs: "un acuerdo para tener algo reservado para ti", example: "I made a reservation for dinner." },
      { word: "ceremony", definition: "a formal event for a special occasion", definitionEs: "un evento formal para una ocasión especial", example: "The wedding ceremony was beautiful." },
    ],
    questions: [
      { question: "When did Casa Maria open?", options: ["6 months ago", "12 months ago", "18 months ago", "24 months ago"], correctAnswer: "18 months ago", explanation: "The article says it opened 'just eighteen months ago.'" },
      { question: "What is their most popular dish?", options: ["Pizza", "Paella", "Pasta", "Tacos"], correctAnswer: "Paella", explanation: "The article mentions 'Their most popular dish is paella.'" },
      { question: "How many people can eat there at once?", options: ["20", "30", "40", "50"], correctAnswer: "40", explanation: "The restaurant can serve 40 people at a time." },
    ],
    grammarExercises: [
      { type: "fill-blank", instruction: "Choose the correct verb tense", sentence: "The restaurant _____ the Best New Restaurant award this year.", options: ["win", "won", "has won", "winning"], correctAnswer: "has won", explanation: "Present Perfect is used for recent events with current relevance.", grammarPoint: "Present Perfect" },
      { type: "fill-blank", instruction: "Select the correct relative pronoun", sentence: "The paella, _____ they make with fresh seafood, is very popular.", options: ["who", "which", "what", "where"], correctAnswer: "which", explanation: "We use 'which' for things in relative clauses.", grammarPoint: "Relative Clauses" },
      { type: "multiple-choice", instruction: "Choose the correct passive form", sentence: "Reservations _____ recommended on weekends.", options: ["is", "are", "was", "being"], correctAnswer: "are", explanation: "'Reservations' is plural, so we use 'are' in passive voice.", grammarPoint: "Passive Voice" },
    ],
    vocabularyExercises: [
      { type: "definition", word: "award", question: "What is an 'award'?", options: ["A type of food", "A prize for achievement", "A restaurant", "A cooking tool"], correctAnswer: "A prize for achievement", explanation: "An award is recognition given for excellence." },
      { type: "context", word: "recipe", question: "We wanted to share our family _____.", options: ["awards", "recipes", "restaurants", "ceremonies"], correctAnswer: "recipes", explanation: "Recipes are instructions for preparing food." },
      { type: "synonym", word: "popular", question: "Which word means the same as 'popular'?", options: ["Unknown", "Well-liked", "Expensive", "Old"], correctAnswer: "Well-liked", explanation: "'Popular' means liked or enjoyed by many people." },
    ],
    publishedAt: "2025-01-13"
  },
  // B1 Level - More complex vocabulary and structures
  {
    id: "b1-1",
    title: "Scientists Discover New Species in Deep Ocean",
    titleEs: "Científicos Descubren Nueva Especie en el Océano Profundo",
    summary: "Marine biologists have discovered a previously unknown fish species living 3,000 meters below the ocean surface.",
    content: `An international team of marine biologists has announced the discovery of a remarkable new fish species in the Pacific Ocean. The creature, which lives at depths of up to 3,000 meters, has been named "Abyssal Glider" due to its unusual swimming pattern.

The discovery was made during a three-month expedition using remote-controlled submarines equipped with high-definition cameras. The research team, led by Dr. Sarah Chen from the Oceanographic Institute, was initially searching for deep-sea coral formations when they spotted the unusual fish.

"We were absolutely stunned when we first saw it," explained Dr. Chen. "Its body is almost completely transparent, and it produces its own light through bioluminescence. This is a feature we've seen in other deep-sea creatures, but the patterns of light this fish produces are unlike anything we've documented before."

The Abyssal Glider measures approximately 30 centimeters in length and appears to feed on small crustaceans. Its transparent body allows it to remain nearly invisible to predators in the dark depths where it lives.

The discovery highlights how little we still know about life in the deep ocean. Scientists estimate that up to 80% of the ocean floor remains unexplored, and thousands of species are waiting to be discovered.

The research team plans to return to the area next year to learn more about the creature's behavior and habitat.`,
    contentEs: `Un equipo internacional de biólogos marinos ha anunciado el descubrimiento de una notable nueva especie de pez en el Océano Pacífico. La criatura, que vive a profundidades de hasta 3,000 metros, ha sido nombrada "Planeador Abisal" debido a su inusual patrón de natación.

El descubrimiento se realizó durante una expedición de tres meses utilizando submarinos controlados a distancia equipados con cámaras de alta definición. El equipo de investigación, liderado por la Dra. Sarah Chen del Instituto Oceanográfico, inicialmente buscaba formaciones de coral de aguas profundas cuando vieron el inusual pez.

"Quedamos absolutamente asombrados cuando lo vimos por primera vez," explicó la Dra. Chen. "Su cuerpo es casi completamente transparente, y produce su propia luz a través de bioluminiscencia. Esta es una característica que hemos visto en otras criaturas de aguas profundas, pero los patrones de luz que este pez produce son diferentes a todo lo que hemos documentado antes."

El Planeador Abisal mide aproximadamente 30 centímetros de longitud y parece alimentarse de pequeños crustáceos. Su cuerpo transparente le permite permanecer casi invisible para los depredadores en las profundidades oscuras donde vive.

El descubrimiento destaca cuán poco sabemos todavía sobre la vida en el océano profundo. Los científicos estiman que hasta el 80% del fondo oceánico permanece inexplorado, y miles de especies esperan ser descubiertas.

El equipo de investigación planea regresar al área el próximo año para aprender más sobre el comportamiento y hábitat de la criatura.`,
    level: "B1",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800",
    readTime: 4,
    vocabulary: [
      { word: "expedition", definition: "an organized journey for a specific purpose", definitionEs: "un viaje organizado para un propósito específico", example: "The expedition lasted three months." },
      { word: "transparent", definition: "able to be seen through, clear", definitionEs: "que se puede ver a través, claro", example: "Glass is transparent." },
      { word: "bioluminescence", definition: "light produced by living organisms", definitionEs: "luz producida por organismos vivos", example: "Some deep-sea fish use bioluminescence." },
      { word: "habitat", definition: "the natural home of an animal or plant", definitionEs: "el hogar natural de un animal o planta", example: "The forest is the habitat of many animals." },
      { word: "predator", definition: "an animal that hunts other animals for food", definitionEs: "un animal que caza otros animales para alimentarse", example: "Lions are predators." },
    ],
    questions: [
      { question: "How deep does the Abyssal Glider live?", options: ["1,000 meters", "2,000 meters", "Up to 3,000 meters", "4,000 meters"], correctAnswer: "Up to 3,000 meters", explanation: "The article states it lives at depths of up to 3,000 meters." },
      { question: "What makes this fish special?", options: ["Its large size", "Its transparent body and bioluminescence", "Its bright colors", "Its speed"], correctAnswer: "Its transparent body and bioluminescence", explanation: "The article describes its transparent body and ability to produce its own light." },
      { question: "What percentage of the ocean floor is unexplored?", options: ["50%", "60%", "70%", "80%"], correctAnswer: "80%", explanation: "Scientists estimate that up to 80% of the ocean floor remains unexplored." },
    ],
    grammarExercises: [
      { type: "fill-blank", instruction: "Choose the correct verb form", sentence: "The discovery _____ during a three-month expedition.", options: ["made", "was made", "has made", "is making"], correctAnswer: "was made", explanation: "Passive voice is used when the action is more important than who did it.", grammarPoint: "Passive Voice" },
      { type: "fill-blank", instruction: "Select the correct relative clause", sentence: "The creature, _____ lives at great depths, produces light.", options: ["who", "which", "what", "whom"], correctAnswer: "which", explanation: "We use 'which' for non-defining relative clauses about things.", grammarPoint: "Relative Clauses" },
      { type: "multiple-choice", instruction: "Choose the correct reported speech", sentence: "Dr. Chen said that they _____ stunned when they first saw it.", options: ["are", "were", "will be", "have been"], correctAnswer: "were", explanation: "In reported speech, past tenses are maintained for past events.", grammarPoint: "Reported Speech" },
      { type: "error-correction", instruction: "Find the correct form", sentence: "The fish's body allows it _____ nearly invisible.", options: ["remain", "to remain", "remaining", "remained"], correctAnswer: "to remain", explanation: "'Allow + object + to infinitive' is the correct pattern.", grammarPoint: "Infinitive Patterns" },
    ],
    vocabularyExercises: [
      { type: "definition", word: "expedition", question: "What is an 'expedition'?", options: ["A quick trip", "An organized journey for research", "A vacation", "A boat"], correctAnswer: "An organized journey for research", explanation: "An expedition is a planned journey undertaken for exploration or research." },
      { type: "context", word: "transparent", question: "Glass is _____, meaning you can see through it.", options: ["opaque", "transparent", "dark", "solid"], correctAnswer: "transparent", explanation: "Transparent materials allow light to pass through." },
      { type: "synonym", word: "remarkable", question: "Which word is similar to 'remarkable'?", options: ["Ordinary", "Extraordinary", "Simple", "Common"], correctAnswer: "Extraordinary", explanation: "'Remarkable' means worthy of attention; extraordinary." },
      { type: "definition", word: "habitat", question: "A 'habitat' is:", options: ["A type of fish", "A swimming pattern", "A natural home", "A camera"], correctAnswer: "A natural home", explanation: "Habitat refers to the natural environment where an organism lives." },
    ],
    publishedAt: "2025-01-12"
  },
  // B2 Level - Advanced vocabulary and complex ideas
  {
    id: "b2-1",
    title: "Artificial Intelligence Transforms Healthcare Diagnostics",
    titleEs: "La Inteligencia Artificial Transforma los Diagnósticos de Salud",
    summary: "New AI systems are outperforming human doctors in detecting certain diseases, raising both hopes and ethical concerns.",
    content: `The integration of artificial intelligence into healthcare diagnostics is revolutionizing how diseases are detected and treated, according to a comprehensive study published this week in The Lancet Digital Health.

The research, conducted across 15 hospitals in Europe and Asia, found that AI diagnostic systems correctly identified cancerous tumors in mammograms with 94.5% accuracy, compared to 88% for experienced radiologists working alone. When radiologists used AI as a supportive tool, their accuracy improved to 97%.

"This isn't about replacing doctors," emphasized Professor James Wilson, the study's lead author. "Rather, it's about augmenting their capabilities and catching cases that might otherwise slip through the cracks. The AI can process thousands of images and detect subtle patterns that even trained eyes might miss."

However, the advancement has sparked debate within the medical community. Critics argue that over-reliance on AI could lead to deskilling among medical professionals and raise questions about accountability when diagnostic errors occur. Furthermore, concerns about data privacy and the potential for algorithmic bias in healthcare decisions remain unresolved.

Dr. Elena Martinez, a medical ethicist at Stanford University, cautioned that while the technology shows promise, regulatory frameworks have not kept pace with its development. "We need to establish clear guidelines about how these systems should be validated, deployed, and monitored. Patients have a right to know when AI is being used in their care and to understand its limitations."

Despite these concerns, healthcare systems worldwide are increasingly adopting AI diagnostic tools. The global market for AI in healthcare is projected to reach $45 billion by 2030, with diagnostic applications representing the fastest-growing segment.

Looking ahead, researchers are exploring how AI might be used to predict disease outbreaks, personalize treatment plans, and even accelerate drug discovery—applications that could fundamentally reshape medicine in the coming decades.`,
    contentEs: `La integración de la inteligencia artificial en los diagnósticos de salud está revolucionando cómo se detectan y tratan las enfermedades, según un estudio integral publicado esta semana en The Lancet Digital Health.

La investigación, realizada en 15 hospitales de Europa y Asia, encontró que los sistemas de diagnóstico con IA identificaron correctamente tumores cancerosos en mamografías con un 94.5% de precisión, comparado con el 88% de radiólogos experimentados trabajando solos. Cuando los radiólogos usaron la IA como herramienta de apoyo, su precisión mejoró al 97%.

"Esto no se trata de reemplazar a los médicos," enfatizó el Profesor James Wilson, autor principal del estudio. "Más bien, se trata de aumentar sus capacidades y detectar casos que de otro modo podrían pasarse por alto. La IA puede procesar miles de imágenes y detectar patrones sutiles que incluso ojos entrenados podrían no ver."

Sin embargo, el avance ha generado debate dentro de la comunidad médica. Los críticos argumentan que la dependencia excesiva de la IA podría llevar a la pérdida de habilidades entre los profesionales médicos y plantea preguntas sobre la responsabilidad cuando ocurren errores de diagnóstico. Además, las preocupaciones sobre la privacidad de datos y el potencial de sesgo algorítmico en las decisiones de salud permanecen sin resolver.

La Dra. Elena Martínez, especialista en ética médica de la Universidad de Stanford, advirtió que aunque la tecnología es prometedora, los marcos regulatorios no han seguido el ritmo de su desarrollo. "Necesitamos establecer directrices claras sobre cómo estos sistemas deben ser validados, implementados y monitoreados. Los pacientes tienen derecho a saber cuándo se utiliza IA en su atención y a comprender sus limitaciones."

A pesar de estas preocupaciones, los sistemas de salud de todo el mundo están adoptando cada vez más herramientas de diagnóstico con IA. Se proyecta que el mercado global de IA en salud alcance los 45 mil millones de dólares para 2030, siendo las aplicaciones de diagnóstico el segmento de más rápido crecimiento.

Mirando hacia el futuro, los investigadores están explorando cómo la IA podría usarse para predecir brotes de enfermedades, personalizar planes de tratamiento e incluso acelerar el descubrimiento de fármacos—aplicaciones que podrían remodelar fundamentalmente la medicina en las próximas décadas.`,
    level: "B2",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
    readTime: 5,
    vocabulary: [
      { word: "diagnostics", definition: "the process of identifying diseases", definitionEs: "el proceso de identificar enfermedades", example: "Medical diagnostics have improved significantly." },
      { word: "augmenting", definition: "increasing or enhancing something", definitionEs: "aumentar o mejorar algo", example: "Technology is augmenting human capabilities." },
      { word: "accountability", definition: "responsibility for one's actions", definitionEs: "responsabilidad por las acciones propias", example: "Who has accountability for this decision?" },
      { word: "algorithmic bias", definition: "systematic errors in algorithms that lead to unfair outcomes", definitionEs: "errores sistemáticos en algoritmos que llevan a resultados injustos", example: "We need to address algorithmic bias in AI systems." },
      { word: "regulatory frameworks", definition: "sets of rules established by authorities", definitionEs: "conjuntos de reglas establecidas por autoridades", example: "New regulatory frameworks are needed for AI." },
    ],
    questions: [
      { question: "What was the AI's accuracy in detecting tumors?", options: ["88%", "94.5%", "97%", "100%"], correctAnswer: "94.5%", explanation: "The AI correctly identified tumors with 94.5% accuracy." },
      { question: "What is one concern about AI in healthcare?", options: ["Cost", "Speed", "Algorithmic bias", "Noise"], correctAnswer: "Algorithmic bias", explanation: "The article mentions concerns about algorithmic bias in healthcare decisions." },
      { question: "What is the projected market value by 2030?", options: ["$25 billion", "$35 billion", "$45 billion", "$55 billion"], correctAnswer: "$45 billion", explanation: "The market is projected to reach $45 billion by 2030." },
    ],
    publishedAt: "2025-01-11"
  },
  // C1 Level - Academic/Professional language
  {
    id: "c1-1",
    title: "The Paradox of Digital Connectivity: How Hyperconnection Fuels Isolation",
    titleEs: "La Paradoja de la Conectividad Digital: Cómo la Hiperconexión Alimenta el Aislamiento",
    summary: "A groundbreaking sociological study reveals that excessive social media use correlates with increased feelings of loneliness, challenging our assumptions about digital connection.",
    content: `In what researchers are calling one of the most comprehensive studies of its kind, a longitudinal analysis spanning five years and encompassing over 50,000 participants has uncovered a troubling paradox: the more connected we become through digital platforms, the more isolated we feel.

The study, published in the American Journal of Sociology, employed a sophisticated methodology combining quantitative surveys with qualitative interviews and neuroimaging data. Its findings challenge the prevailing narrative that social media platforms facilitate meaningful human connection.

"What we observed was counterintuitive," explained Dr. Rebecca Torres, the study's principal investigator. "Participants who spent more than three hours daily on social media platforms reported significantly higher levels of perceived loneliness, anxiety, and depression compared to those with moderate or minimal usage. Moreover, brain scans revealed reduced activity in regions associated with empathy and emotional regulation."

The research distinguishes between what the authors term "passive consumption"—scrolling through feeds without meaningful interaction—and "active engagement," which involves direct communication with others. The former, which constitutes approximately 78% of social media use, was particularly associated with negative psychological outcomes.

Dr. Marcus Chen, a neuroscientist who collaborated on the study, notes that the brain's reward system may be partly responsible. "Social media platforms are engineered to deliver intermittent reinforcement—likes, comments, and notifications that trigger dopamine release. This creates a compulsive usage pattern that paradoxically diminishes our capacity for sustained, meaningful relationships."

The implications extend beyond individual well-being to broader societal concerns. Previous research has established correlations between social media usage patterns and political polarization, decreased civic engagement, and erosion of shared factual understanding.

However, the researchers caution against technological determinism. "It's not the technology itself that is inherently harmful," clarified Dr. Torres. "Rather, it's the specific ways in which these platforms are designed and the usage patterns they encourage. With different design principles prioritizing depth over breadth of connection, outcomes could be markedly different."

The study recommends that platform designers incorporate "friction" elements that encourage more deliberate, meaningful interactions, and that users practice "intentional connectivity"—approaching digital platforms with clear purposes rather than as default time-fillers.

As society grapples with the mental health implications of our increasingly digital existence, this research provides crucial empirical grounding for what many have intuitively sensed: that in our quest for connection, we may have inadvertently constructed elaborate systems of alienation.`,
    contentEs: `En lo que los investigadores llaman uno de los estudios más completos de su tipo, un análisis longitudinal que abarca cinco años y más de 50,000 participantes ha descubierto una paradoja inquietante: cuanto más conectados estamos a través de plataformas digitales, más aislados nos sentimos.

El estudio, publicado en el American Journal of Sociology, empleó una metodología sofisticada que combina encuestas cuantitativas con entrevistas cualitativas y datos de neuroimagen. Sus hallazgos desafían la narrativa predominante de que las plataformas de redes sociales facilitan la conexión humana significativa.

"Lo que observamos fue contraintuitivo," explicó la Dra. Rebecca Torres, investigadora principal del estudio. "Los participantes que pasaban más de tres horas diarias en plataformas de redes sociales reportaron niveles significativamente más altos de soledad percibida, ansiedad y depresión en comparación con aquellos con uso moderado o mínimo. Además, los escaneos cerebrales revelaron actividad reducida en regiones asociadas con la empatía y la regulación emocional."

La investigación distingue entre lo que los autores llaman "consumo pasivo"—desplazarse por feeds sin interacción significativa—y "participación activa," que implica comunicación directa con otros. El primero, que constituye aproximadamente el 78% del uso de redes sociales, estuvo particularmente asociado con resultados psicológicos negativos.

El Dr. Marcus Chen, un neurocientífico que colaboró en el estudio, señala que el sistema de recompensa del cerebro puede ser parcialmente responsable. "Las plataformas de redes sociales están diseñadas para entregar refuerzo intermitente—likes, comentarios y notificaciones que desencadenan la liberación de dopamina. Esto crea un patrón de uso compulsivo que paradójicamente disminuye nuestra capacidad para relaciones sostenidas y significativas."

Las implicaciones se extienden más allá del bienestar individual a preocupaciones sociales más amplias. Investigaciones previas han establecido correlaciones entre patrones de uso de redes sociales y polarización política, disminución del compromiso cívico y erosión de la comprensión factual compartida.

Sin embargo, los investigadores advierten contra el determinismo tecnológico. "No es la tecnología en sí misma la que es inherentemente dañina," aclaró la Dra. Torres. "Más bien, son las formas específicas en que estas plataformas están diseñadas y los patrones de uso que fomentan. Con diferentes principios de diseño que prioricen la profundidad sobre la amplitud de la conexión, los resultados podrían ser marcadamente diferentes."

El estudio recomienda que los diseñadores de plataformas incorporen elementos de "fricción" que fomenten interacciones más deliberadas y significativas, y que los usuarios practiquen "conectividad intencional"—acercándose a las plataformas digitales con propósitos claros en lugar de como rellenos de tiempo predeterminados.

A medida que la sociedad lidia con las implicaciones de salud mental de nuestra existencia cada vez más digital, esta investigación proporciona una base empírica crucial para lo que muchos han intuido: que en nuestra búsqueda de conexión, podemos haber construido inadvertidamente sistemas elaborados de alienación.`,
    level: "C1",
    category: "Society",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    readTime: 7,
    vocabulary: [
      { word: "longitudinal", definition: "relating to a study conducted over a long period", definitionEs: "relativo a un estudio conducido durante un largo período", example: "A longitudinal study tracks changes over time." },
      { word: "counterintuitive", definition: "contrary to what intuition suggests", definitionEs: "contrario a lo que sugiere la intuición", example: "The results were counterintuitive." },
      { word: "intermittent reinforcement", definition: "rewards given at unpredictable intervals", definitionEs: "recompensas dadas a intervalos impredecibles", example: "Slot machines use intermittent reinforcement." },
      { word: "technological determinism", definition: "the belief that technology drives social change", definitionEs: "la creencia de que la tecnología impulsa el cambio social", example: "They cautioned against technological determinism." },
      { word: "empirical", definition: "based on observation or experience", definitionEs: "basado en observación o experiencia", example: "We need empirical evidence to support the theory." },
    ],
    questions: [
      { question: "What percentage of social media use is passive consumption?", options: ["68%", "78%", "88%", "58%"], correctAnswer: "78%", explanation: "The article states that passive consumption constitutes approximately 78% of social media use." },
      { question: "What does the brain's reward system create according to the study?", options: ["Better connections", "Compulsive usage patterns", "More empathy", "Better sleep"], correctAnswer: "Compulsive usage patterns", explanation: "The study found that intermittent reinforcement creates compulsive usage patterns." },
      { question: "What do the researchers recommend?", options: ["Quit social media", "Incorporate friction elements", "Use only one platform", "Spend more time online"], correctAnswer: "Incorporate friction elements", explanation: "The study recommends incorporating 'friction' elements that encourage deliberate interactions." },
    ],
    publishedAt: "2025-01-10"
  },
];

export function getNewsByLevel(level: "A1" | "A2" | "B1" | "B2" | "C1"): NewsArticle[] {
  return newsArticles.filter(article => article.level === level);
}

export function getAllNews(): NewsArticle[] {
  return newsArticles;
}
