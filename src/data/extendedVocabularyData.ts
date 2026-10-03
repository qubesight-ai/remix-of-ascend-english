// Extended vocabulary data with 20 categories
export interface VocabularyWord {
  id: string;
  english: string;
  spanish: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
  mastered: boolean;
  imageUrl?: string;
}

export interface ExtendedVocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
  learned: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  words: VocabularyWord[];
  color: string;
}

export const extendedVocabularyCategories: ExtendedVocabularyCategory[] = [
  // A1 Categories
  {
    id: "greetings",
    title: "Saludos y Presentaciones",
    icon: "👋",
    wordCount: 30,
    learned: 0,
    level: "A1",
    color: "from-green-400 to-green-600",
    words: [
      { id: "g1", english: "Hello", spanish: "Hola", pronunciation: "/həˈloʊ/", example: "Hello, how are you?", exampleTranslation: "Hola, ¿cómo estás?", mastered: false },
      { id: "g2", english: "Goodbye", spanish: "Adiós", pronunciation: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow!", exampleTranslation: "Adiós, ¡nos vemos mañana!", mastered: false },
      { id: "g3", english: "Good morning", spanish: "Buenos días", pronunciation: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, everyone!", exampleTranslation: "¡Buenos días a todos!", mastered: false },
      { id: "g4", english: "Good evening", spanish: "Buenas tardes/noches", pronunciation: "/ɡʊd ˈiːvnɪŋ/", example: "Good evening, welcome to the show.", exampleTranslation: "Buenas noches, bienvenidos al espectáculo.", mastered: false },
      { id: "g5", english: "Nice to meet you", spanish: "Encantado/a", pronunciation: "/naɪs tuː miːt juː/", example: "Nice to meet you, I'm Sarah.", exampleTranslation: "Encantada, soy Sarah.", mastered: false },
      { id: "g6", english: "How are you?", spanish: "¿Cómo estás?", pronunciation: "/haʊ ɑːr juː/", example: "Hi! How are you doing?", exampleTranslation: "¡Hola! ¿Cómo te va?", mastered: false },
      { id: "g7", english: "Please", spanish: "Por favor", pronunciation: "/pliːz/", example: "Can I have some water, please?", exampleTranslation: "¿Puedo tomar agua, por favor?", mastered: false },
      { id: "g8", english: "Thank you", spanish: "Gracias", pronunciation: "/θæŋk juː/", example: "Thank you for your help!", exampleTranslation: "¡Gracias por tu ayuda!", mastered: false },
    ]
  },
  {
    id: "family",
    title: "Familia",
    icon: "👨‍👩‍👧‍👦",
    wordCount: 35,
    learned: 0,
    level: "A1",
    color: "from-pink-400 to-pink-600",
    words: [
      { id: "f1", english: "Mother", spanish: "Madre", pronunciation: "/ˈmʌðər/", example: "My mother is a teacher.", exampleTranslation: "Mi madre es profesora.", mastered: false },
      { id: "f2", english: "Father", spanish: "Padre", pronunciation: "/ˈfɑːðər/", example: "My father works at a bank.", exampleTranslation: "Mi padre trabaja en un banco.", mastered: false },
      { id: "f3", english: "Brother", spanish: "Hermano", pronunciation: "/ˈbrʌðər/", example: "I have two brothers.", exampleTranslation: "Tengo dos hermanos.", mastered: false },
      { id: "f4", english: "Sister", spanish: "Hermana", pronunciation: "/ˈsɪstər/", example: "My sister lives in London.", exampleTranslation: "Mi hermana vive en Londres.", mastered: false },
      { id: "f5", english: "Grandfather", spanish: "Abuelo", pronunciation: "/ˈɡrænfɑːðər/", example: "My grandfather is 80 years old.", exampleTranslation: "Mi abuelo tiene 80 años.", mastered: false },
      { id: "f6", english: "Grandmother", spanish: "Abuela", pronunciation: "/ˈɡrænmʌðər/", example: "My grandmother makes the best cookies.", exampleTranslation: "Mi abuela hace las mejores galletas.", mastered: false },
      { id: "f7", english: "Uncle", spanish: "Tío", pronunciation: "/ˈʌŋkl/", example: "My uncle lives in New York.", exampleTranslation: "Mi tío vive en Nueva York.", mastered: false },
      { id: "f8", english: "Aunt", spanish: "Tía", pronunciation: "/ænt/", example: "My aunt is a doctor.", exampleTranslation: "Mi tía es doctora.", mastered: false },
    ]
  },
  {
    id: "numbers",
    title: "Números y Tiempo",
    icon: "🔢",
    wordCount: 40,
    learned: 0,
    level: "A1",
    color: "from-blue-400 to-blue-600",
    words: [
      { id: "n1", english: "One", spanish: "Uno", pronunciation: "/wʌn/", example: "I have one apple.", exampleTranslation: "Tengo una manzana.", mastered: false },
      { id: "n2", english: "Twenty", spanish: "Veinte", pronunciation: "/ˈtwenti/", example: "She is twenty years old.", exampleTranslation: "Ella tiene veinte años.", mastered: false },
      { id: "n3", english: "Hundred", spanish: "Cien", pronunciation: "/ˈhʌndrəd/", example: "There are a hundred students.", exampleTranslation: "Hay cien estudiantes.", mastered: false },
      { id: "n4", english: "First", spanish: "Primero", pronunciation: "/fɜːrst/", example: "He came first in the race.", exampleTranslation: "Llegó primero en la carrera.", mastered: false },
      { id: "n5", english: "Monday", spanish: "Lunes", pronunciation: "/ˈmʌndeɪ/", example: "The meeting is on Monday.", exampleTranslation: "La reunión es el lunes.", mastered: false },
      { id: "n6", english: "January", spanish: "Enero", pronunciation: "/ˈdʒænjueri/", example: "My birthday is in January.", exampleTranslation: "Mi cumpleaños es en enero.", mastered: false },
    ]
  },
  {
    id: "food",
    title: "Comida y Bebida",
    icon: "🍕",
    wordCount: 60,
    learned: 0,
    level: "A1",
    color: "from-orange-400 to-orange-600",
    words: [
      { id: "fd1", english: "Water", spanish: "Agua", pronunciation: "/ˈwɔːtər/", example: "Can I have some water, please?", exampleTranslation: "¿Puedo tomar agua, por favor?", mastered: false },
      { id: "fd2", english: "Bread", spanish: "Pan", pronunciation: "/bred/", example: "I eat bread for breakfast.", exampleTranslation: "Como pan para desayunar.", mastered: false },
      { id: "fd3", english: "Coffee", spanish: "Café", pronunciation: "/ˈkɔːfi/", example: "I drink coffee every morning.", exampleTranslation: "Bebo café todas las mañanas.", mastered: false },
      { id: "fd4", english: "Fruit", spanish: "Fruta", pronunciation: "/fruːt/", example: "Eating fruit is healthy.", exampleTranslation: "Comer fruta es saludable.", mastered: false },
      { id: "fd5", english: "Vegetable", spanish: "Verdura", pronunciation: "/ˈvedʒtəbl/", example: "I love fresh vegetables.", exampleTranslation: "Me encantan las verduras frescas.", mastered: false },
      { id: "fd6", english: "Meat", spanish: "Carne", pronunciation: "/miːt/", example: "He doesn't eat meat.", exampleTranslation: "Él no come carne.", mastered: false },
      { id: "fd7", english: "Rice", spanish: "Arroz", pronunciation: "/raɪs/", example: "Rice is a staple food.", exampleTranslation: "El arroz es un alimento básico.", mastered: false },
      { id: "fd8", english: "Chicken", spanish: "Pollo", pronunciation: "/ˈtʃɪkɪn/", example: "I'll have the chicken, please.", exampleTranslation: "Tomaré el pollo, por favor.", mastered: false },
    ]
  },
  {
    id: "colors",
    title: "Colores y Formas",
    icon: "🎨",
    wordCount: 25,
    learned: 0,
    level: "A1",
    color: "from-purple-400 to-purple-600",
    words: [
      { id: "c1", english: "Red", spanish: "Rojo", pronunciation: "/red/", example: "The apple is red.", exampleTranslation: "La manzana es roja.", mastered: false },
      { id: "c2", english: "Blue", spanish: "Azul", pronunciation: "/bluː/", example: "The sky is blue.", exampleTranslation: "El cielo es azul.", mastered: false },
      { id: "c3", english: "Green", spanish: "Verde", pronunciation: "/ɡriːn/", example: "Grass is green.", exampleTranslation: "La hierba es verde.", mastered: false },
      { id: "c4", english: "Circle", spanish: "Círculo", pronunciation: "/ˈsɜːrkl/", example: "Draw a circle here.", exampleTranslation: "Dibuja un círculo aquí.", mastered: false },
      { id: "c5", english: "Square", spanish: "Cuadrado", pronunciation: "/skwer/", example: "A window is usually square.", exampleTranslation: "Una ventana suele ser cuadrada.", mastered: false },
    ]
  },
  // A2 Categories
  {
    id: "travel",
    title: "Viajes y Transporte",
    icon: "✈️",
    wordCount: 55,
    learned: 0,
    level: "A2",
    color: "from-cyan-400 to-cyan-600",
    words: [
      { id: "t1", english: "Airport", spanish: "Aeropuerto", pronunciation: "/ˈeərpɔːrt/", example: "The airport is 30 minutes away.", exampleTranslation: "El aeropuerto está a 30 minutos.", mastered: false },
      { id: "t2", english: "Flight", spanish: "Vuelo", pronunciation: "/flaɪt/", example: "My flight leaves at 8 AM.", exampleTranslation: "Mi vuelo sale a las 8 AM.", mastered: false },
      { id: "t3", english: "Passport", spanish: "Pasaporte", pronunciation: "/ˈpæspɔːrt/", example: "Don't forget your passport!", exampleTranslation: "¡No olvides tu pasaporte!", mastered: false },
      { id: "t4", english: "Luggage", spanish: "Equipaje", pronunciation: "/ˈlʌɡɪdʒ/", example: "I need to pick up my luggage.", exampleTranslation: "Necesito recoger mi equipaje.", mastered: false },
      { id: "t5", english: "Platform", spanish: "Andén", pronunciation: "/ˈplætfɔːrm/", example: "The train arrives at platform 3.", exampleTranslation: "El tren llega al andén 3.", mastered: false },
      { id: "t6", english: "Ticket", spanish: "Billete", pronunciation: "/ˈtɪkɪt/", example: "Where can I buy a ticket?", exampleTranslation: "¿Dónde puedo comprar un billete?", mastered: false },
      { id: "t7", english: "Destination", spanish: "Destino", pronunciation: "/ˌdestɪˈneɪʃn/", example: "What's your final destination?", exampleTranslation: "¿Cuál es tu destino final?", mastered: false },
    ]
  },
  {
    id: "work",
    title: "Trabajo y Oficina",
    icon: "💼",
    wordCount: 65,
    learned: 0,
    level: "A2",
    color: "from-slate-400 to-slate-600",
    words: [
      { id: "w1", english: "Meeting", spanish: "Reunión", pronunciation: "/ˈmiːtɪŋ/", example: "We have a meeting at 2 PM.", exampleTranslation: "Tenemos una reunión a las 2 PM.", mastered: false },
      { id: "w2", english: "Deadline", spanish: "Fecha límite", pronunciation: "/ˈdedlaɪn/", example: "The deadline is next Monday.", exampleTranslation: "La fecha límite es el próximo lunes.", mastered: false },
      { id: "w3", english: "Colleague", spanish: "Colega", pronunciation: "/ˈkɒliːɡ/", example: "My colleague helped me.", exampleTranslation: "Mi colega me ayudó.", mastered: false },
      { id: "w4", english: "Manager", spanish: "Gerente", pronunciation: "/ˈmænɪdʒər/", example: "I need to talk to my manager.", exampleTranslation: "Necesito hablar con mi gerente.", mastered: false },
      { id: "w5", english: "Salary", spanish: "Salario", pronunciation: "/ˈsæləri/", example: "I received my salary today.", exampleTranslation: "Recibí mi salario hoy.", mastered: false },
      { id: "w6", english: "Promotion", spanish: "Ascenso", pronunciation: "/prəˈmoʊʃn/", example: "She got a promotion.", exampleTranslation: "Ella consiguió un ascenso.", mastered: false },
    ]
  },
  {
    id: "health",
    title: "Salud y Cuerpo",
    icon: "🏥",
    wordCount: 50,
    learned: 0,
    level: "A2",
    color: "from-red-400 to-red-600",
    words: [
      { id: "h1", english: "Headache", spanish: "Dolor de cabeza", pronunciation: "/ˈhedeɪk/", example: "I have a terrible headache.", exampleTranslation: "Tengo un terrible dolor de cabeza.", mastered: false },
      { id: "h2", english: "Medicine", spanish: "Medicina", pronunciation: "/ˈmedɪsɪn/", example: "Did you take your medicine?", exampleTranslation: "¿Tomaste tu medicina?", mastered: false },
      { id: "h3", english: "Appointment", spanish: "Cita", pronunciation: "/əˈpɔɪntmənt/", example: "I have a doctor's appointment.", exampleTranslation: "Tengo una cita con el doctor.", mastered: false },
      { id: "h4", english: "Symptom", spanish: "Síntoma", pronunciation: "/ˈsɪmptəm/", example: "What are your symptoms?", exampleTranslation: "¿Cuáles son tus síntomas?", mastered: false },
      { id: "h5", english: "Prescription", spanish: "Receta", pronunciation: "/prɪˈskrɪpʃn/", example: "The doctor gave me a prescription.", exampleTranslation: "El doctor me dio una receta.", mastered: false },
    ]
  },
  {
    id: "shopping",
    title: "Compras y Dinero",
    icon: "🛍️",
    wordCount: 45,
    learned: 0,
    level: "A2",
    color: "from-yellow-400 to-yellow-600",
    words: [
      { id: "s1", english: "Price", spanish: "Precio", pronunciation: "/praɪs/", example: "What's the price of this?", exampleTranslation: "¿Cuál es el precio de esto?", mastered: false },
      { id: "s2", english: "Discount", spanish: "Descuento", pronunciation: "/ˈdɪskaʊnt/", example: "Is there a discount?", exampleTranslation: "¿Hay algún descuento?", mastered: false },
      { id: "s3", english: "Receipt", spanish: "Recibo", pronunciation: "/rɪˈsiːt/", example: "Can I have the receipt?", exampleTranslation: "¿Me puede dar el recibo?", mastered: false },
      { id: "s4", english: "Cash", spanish: "Efectivo", pronunciation: "/kæʃ/", example: "I'll pay in cash.", exampleTranslation: "Pagaré en efectivo.", mastered: false },
      { id: "s5", english: "Credit card", spanish: "Tarjeta de crédito", pronunciation: "/ˈkredɪt kɑːrd/", example: "Do you accept credit cards?", exampleTranslation: "¿Aceptan tarjetas de crédito?", mastered: false },
    ]
  },
  {
    id: "home",
    title: "Casa y Hogar",
    icon: "🏠",
    wordCount: 55,
    learned: 0,
    level: "A2",
    color: "from-amber-400 to-amber-600",
    words: [
      { id: "ho1", english: "Kitchen", spanish: "Cocina", pronunciation: "/ˈkɪtʃɪn/", example: "The kitchen is downstairs.", exampleTranslation: "La cocina está abajo.", mastered: false },
      { id: "ho2", english: "Bedroom", spanish: "Dormitorio", pronunciation: "/ˈbedruːm/", example: "My bedroom is very cozy.", exampleTranslation: "Mi dormitorio es muy acogedor.", mastered: false },
      { id: "ho3", english: "Bathroom", spanish: "Baño", pronunciation: "/ˈbæθruːm/", example: "The bathroom is upstairs.", exampleTranslation: "El baño está arriba.", mastered: false },
      { id: "ho4", english: "Furniture", spanish: "Muebles", pronunciation: "/ˈfɜːrnɪtʃər/", example: "We need new furniture.", exampleTranslation: "Necesitamos muebles nuevos.", mastered: false },
      { id: "ho5", english: "Garden", spanish: "Jardín", pronunciation: "/ˈɡɑːrdn/", example: "I love working in the garden.", exampleTranslation: "Me encanta trabajar en el jardín.", mastered: false },
    ]
  },
  // B1 Categories
  {
    id: "emotions",
    title: "Emociones y Sentimientos",
    icon: "😊",
    wordCount: 50,
    learned: 0,
    level: "B1",
    color: "from-rose-400 to-rose-600",
    words: [
      { id: "e1", english: "Excited", spanish: "Emocionado", pronunciation: "/ɪkˈsaɪtɪd/", example: "I'm so excited about the trip!", exampleTranslation: "¡Estoy tan emocionado por el viaje!", mastered: false },
      { id: "e2", english: "Disappointed", spanish: "Decepcionado", pronunciation: "/ˌdɪsəˈpɔɪntɪd/", example: "I was disappointed with the result.", exampleTranslation: "Estaba decepcionado con el resultado.", mastered: false },
      { id: "e3", english: "Anxious", spanish: "Ansioso", pronunciation: "/ˈæŋkʃəs/", example: "She feels anxious before exams.", exampleTranslation: "Ella se siente ansiosa antes de los exámenes.", mastered: false },
      { id: "e4", english: "Grateful", spanish: "Agradecido", pronunciation: "/ˈɡreɪtfl/", example: "I'm grateful for your help.", exampleTranslation: "Estoy agradecido por tu ayuda.", mastered: false },
      { id: "e5", english: "Overwhelmed", spanish: "Abrumado", pronunciation: "/ˌoʊvərˈwelmd/", example: "I feel overwhelmed by work.", exampleTranslation: "Me siento abrumado por el trabajo.", mastered: false },
    ]
  },
  {
    id: "technology",
    title: "Tecnología",
    icon: "💻",
    wordCount: 60,
    learned: 0,
    level: "B1",
    color: "from-indigo-400 to-indigo-600",
    words: [
      { id: "tech1", english: "Software", spanish: "Software", pronunciation: "/ˈsɒftweər/", example: "I need to update my software.", exampleTranslation: "Necesito actualizar mi software.", mastered: false },
      { id: "tech2", english: "Download", spanish: "Descargar", pronunciation: "/ˌdaʊnˈloʊd/", example: "You can download the app for free.", exampleTranslation: "Puedes descargar la app gratis.", mastered: false },
      { id: "tech3", english: "Password", spanish: "Contraseña", pronunciation: "/ˈpæswɜːrd/", example: "I forgot my password.", exampleTranslation: "Olvidé mi contraseña.", mastered: false },
      { id: "tech4", english: "Upload", spanish: "Subir", pronunciation: "/ˌʌpˈloʊd/", example: "Upload your photo here.", exampleTranslation: "Sube tu foto aquí.", mastered: false },
      { id: "tech5", english: "Wireless", spanish: "Inalámbrico", pronunciation: "/ˈwaɪərləs/", example: "Do you have wireless internet?", exampleTranslation: "¿Tienes internet inalámbrico?", mastered: false },
      { id: "tech6", english: "Bandwidth", spanish: "Ancho de banda", pronunciation: "/ˈbændwɪdθ/", example: "We need more bandwidth.", exampleTranslation: "Necesitamos más ancho de banda.", mastered: false },
    ]
  },
  {
    id: "entertainment",
    title: "Entretenimiento",
    icon: "🎬",
    wordCount: 50,
    learned: 0,
    level: "B1",
    color: "from-fuchsia-400 to-fuchsia-600",
    words: [
      { id: "ent1", english: "Documentary", spanish: "Documental", pronunciation: "/ˌdɒkjuˈmentri/", example: "I watched an interesting documentary.", exampleTranslation: "Vi un documental interesante.", mastered: false },
      { id: "ent2", english: "Performance", spanish: "Actuación", pronunciation: "/pərˈfɔːrməns/", example: "Her performance was amazing.", exampleTranslation: "Su actuación fue increíble.", mastered: false },
      { id: "ent3", english: "Exhibition", spanish: "Exposición", pronunciation: "/ˌeksɪˈbɪʃn/", example: "There's an art exhibition downtown.", exampleTranslation: "Hay una exposición de arte en el centro.", mastered: false },
      { id: "ent4", english: "Concert", spanish: "Concierto", pronunciation: "/ˈkɒnsərt/", example: "The concert was sold out.", exampleTranslation: "El concierto estaba agotado.", mastered: false },
    ]
  },
  {
    id: "education",
    title: "Educación",
    icon: "📚",
    wordCount: 55,
    learned: 0,
    level: "B1",
    color: "from-teal-400 to-teal-600",
    words: [
      { id: "edu1", english: "Assignment", spanish: "Tarea", pronunciation: "/əˈsaɪnmənt/", example: "The assignment is due Monday.", exampleTranslation: "La tarea es para el lunes.", mastered: false },
      { id: "edu2", english: "Research", spanish: "Investigación", pronunciation: "/rɪˈsɜːrtʃ/", example: "I need to do more research.", exampleTranslation: "Necesito investigar más.", mastered: false },
      { id: "edu3", english: "Lecture", spanish: "Conferencia", pronunciation: "/ˈlektʃər/", example: "The lecture was very informative.", exampleTranslation: "La conferencia fue muy informativa.", mastered: false },
      { id: "edu4", english: "Syllabus", spanish: "Programa", pronunciation: "/ˈsɪləbəs/", example: "Check the syllabus for details.", exampleTranslation: "Revisa el programa para más detalles.", mastered: false },
    ]
  },
  // B2 Categories
  {
    id: "environment",
    title: "Medio Ambiente",
    icon: "🌍",
    wordCount: 55,
    learned: 0,
    level: "B2",
    color: "from-emerald-400 to-emerald-600",
    words: [
      { id: "env1", english: "Pollution", spanish: "Contaminación", pronunciation: "/pəˈluːʃn/", example: "Air pollution is a serious problem.", exampleTranslation: "La contaminación del aire es un problema serio.", mastered: false },
      { id: "env2", english: "Sustainable", spanish: "Sostenible", pronunciation: "/səˈsteɪnəbl/", example: "We need sustainable solutions.", exampleTranslation: "Necesitamos soluciones sostenibles.", mastered: false },
      { id: "env3", english: "Renewable", spanish: "Renovable", pronunciation: "/rɪˈnuːəbl/", example: "Solar power is renewable energy.", exampleTranslation: "La energía solar es renovable.", mastered: false },
      { id: "env4", english: "Biodiversity", spanish: "Biodiversidad", pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsəti/", example: "We must protect biodiversity.", exampleTranslation: "Debemos proteger la biodiversidad.", mastered: false },
      { id: "env5", english: "Carbon footprint", spanish: "Huella de carbono", pronunciation: "/ˈkɑːrbən ˈfʊtprɪnt/", example: "Reduce your carbon footprint.", exampleTranslation: "Reduce tu huella de carbono.", mastered: false },
    ]
  },
  {
    id: "business",
    title: "Negocios y Finanzas",
    icon: "📊",
    wordCount: 65,
    learned: 0,
    level: "B2",
    color: "from-sky-400 to-sky-600",
    words: [
      { id: "bus1", english: "Investment", spanish: "Inversión", pronunciation: "/ɪnˈvestmənt/", example: "It's a good investment.", exampleTranslation: "Es una buena inversión.", mastered: false },
      { id: "bus2", english: "Revenue", spanish: "Ingresos", pronunciation: "/ˈrevənuː/", example: "Revenue increased by 20%.", exampleTranslation: "Los ingresos aumentaron un 20%.", mastered: false },
      { id: "bus3", english: "Entrepreneur", spanish: "Emprendedor", pronunciation: "/ˌɒntrəprəˈnɜːr/", example: "She's a successful entrepreneur.", exampleTranslation: "Ella es una emprendedora exitosa.", mastered: false },
      { id: "bus4", english: "Stakeholder", spanish: "Parte interesada", pronunciation: "/ˈsteɪkhoʊldər/", example: "We consulted all stakeholders.", exampleTranslation: "Consultamos a todas las partes interesadas.", mastered: false },
    ]
  },
  {
    id: "politics",
    title: "Política y Sociedad",
    icon: "🏛️",
    wordCount: 55,
    learned: 0,
    level: "B2",
    color: "from-zinc-400 to-zinc-600",
    words: [
      { id: "pol1", english: "Democracy", spanish: "Democracia", pronunciation: "/dɪˈmɒkrəsi/", example: "Democracy requires participation.", exampleTranslation: "La democracia requiere participación.", mastered: false },
      { id: "pol2", english: "Legislation", spanish: "Legislación", pronunciation: "/ˌledʒɪsˈleɪʃn/", example: "New legislation was passed.", exampleTranslation: "Se aprobó nueva legislación.", mastered: false },
      { id: "pol3", english: "Immigration", spanish: "Inmigración", pronunciation: "/ˌɪmɪˈɡreɪʃn/", example: "Immigration policies vary.", exampleTranslation: "Las políticas de inmigración varían.", mastered: false },
      { id: "pol4", english: "Referendum", spanish: "Referéndum", pronunciation: "/ˌrefəˈrendəm/", example: "They held a referendum.", exampleTranslation: "Celebraron un referéndum.", mastered: false },
    ]
  },
  {
    id: "science",
    title: "Ciencia e Investigación",
    icon: "🔬",
    wordCount: 60,
    learned: 0,
    level: "B2",
    color: "from-violet-400 to-violet-600",
    words: [
      { id: "sci1", english: "Hypothesis", spanish: "Hipótesis", pronunciation: "/haɪˈpɒθəsɪs/", example: "We tested the hypothesis.", exampleTranslation: "Probamos la hipótesis.", mastered: false },
      { id: "sci2", english: "Experiment", spanish: "Experimento", pronunciation: "/ɪkˈsperɪmənt/", example: "The experiment was successful.", exampleTranslation: "El experimento fue exitoso.", mastered: false },
      { id: "sci3", english: "Variable", spanish: "Variable", pronunciation: "/ˈveriəbl/", example: "Control all variables.", exampleTranslation: "Controla todas las variables.", mastered: false },
      { id: "sci4", english: "Phenomenon", spanish: "Fenómeno", pronunciation: "/fɪˈnɒmɪnən/", example: "It's a natural phenomenon.", exampleTranslation: "Es un fenómeno natural.", mastered: false },
    ]
  },
  // C1 Categories
  {
    id: "law",
    title: "Derecho y Justicia",
    icon: "⚖️",
    wordCount: 55,
    learned: 0,
    level: "C1",
    color: "from-stone-400 to-stone-600",
    words: [
      { id: "law1", english: "Jurisdiction", spanish: "Jurisdicción", pronunciation: "/ˌdʒʊrɪsˈdɪkʃn/", example: "This falls under our jurisdiction.", exampleTranslation: "Esto cae bajo nuestra jurisdicción.", mastered: false },
      { id: "law2", english: "Plaintiff", spanish: "Demandante", pronunciation: "/ˈpleɪntɪf/", example: "The plaintiff filed a lawsuit.", exampleTranslation: "El demandante presentó una demanda.", mastered: false },
      { id: "law3", english: "Verdict", spanish: "Veredicto", pronunciation: "/ˈvɜːrdɪkt/", example: "The jury reached a verdict.", exampleTranslation: "El jurado llegó a un veredicto.", mastered: false },
      { id: "law4", english: "Litigation", spanish: "Litigio", pronunciation: "/ˌlɪtɪˈɡeɪʃn/", example: "They avoided litigation.", exampleTranslation: "Evitaron el litigio.", mastered: false },
    ]
  },
  {
    id: "academic",
    title: "Vocabulario Académico",
    icon: "🎓",
    wordCount: 70,
    learned: 0,
    level: "C1",
    color: "from-neutral-500 to-neutral-700",
    words: [
      { id: "acad1", english: "Paradigm", spanish: "Paradigma", pronunciation: "/ˈpærədaɪm/", example: "A new paradigm emerged.", exampleTranslation: "Surgió un nuevo paradigma.", mastered: false },
      { id: "acad2", english: "Discourse", spanish: "Discurso", pronunciation: "/ˈdɪskɔːrs/", example: "Academic discourse requires precision.", exampleTranslation: "El discurso académico requiere precisión.", mastered: false },
      { id: "acad3", english: "Synthesis", spanish: "Síntesis", pronunciation: "/ˈsɪnθəsɪs/", example: "The paper provides a synthesis.", exampleTranslation: "El artículo proporciona una síntesis.", mastered: false },
      { id: "acad4", english: "Corroborate", spanish: "Corroborar", pronunciation: "/kəˈrɒbəreɪt/", example: "Evidence corroborates the theory.", exampleTranslation: "La evidencia corrobora la teoría.", mastered: false },
    ]
  },
];

export function getVocabularyByLevel(level: "A1" | "A2" | "B1" | "B2" | "C1"): ExtendedVocabularyCategory[] {
  return extendedVocabularyCategories.filter(cat => cat.level === level);
}

export function getTotalWordCount(): number {
  return extendedVocabularyCategories.reduce((acc, cat) => acc + cat.wordCount, 0);
}

export function getCategoryCount(): number {
  return extendedVocabularyCategories.length;
}
