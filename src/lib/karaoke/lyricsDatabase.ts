import { SynchronizedLyrics } from './types';

export const localLyricsDatabase: Record<string, SynchronizedLyrics> = {
  'yesterday-the-beatles': {
    songId: 'yesterday-the-beatles',
    title: 'Yesterday',
    artist: 'The Beatles',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 4, text: 'Yesterday, all my troubles seemed so far away', translation: 'Ayer, todos mis problemas parecían tan lejanos' },
      { id: 'l2', startTime: 4, endTime: 8, text: 'Now it looks as though they\'re here to stay', translation: 'Ahora parece que están aquí para quedarse' },
      { id: 'l3', startTime: 8, endTime: 12, text: 'Oh, I believe in yesterday', translation: 'Oh, creo en el ayer' },
      { id: 'l4', startTime: 12, endTime: 16, text: 'Suddenly, I\'m not half the man I used to be', translation: 'De repente, no soy ni la mitad del hombre que solía ser' },
      { id: 'l5', startTime: 16, endTime: 20, text: 'There\'s a shadow hanging over me', translation: 'Hay una sombra colgando sobre mí' },
      { id: 'l6', startTime: 20, endTime: 24, text: 'Oh, yesterday came suddenly', translation: 'Oh, el ayer llegó de repente' },
      { id: 'l7', startTime: 24, endTime: 30, text: 'Why she had to go, I don\'t know, she wouldn\'t say', translation: 'Por qué tuvo que irse, no lo sé, ella no quiso decirlo' },
      { id: 'l8', startTime: 30, endTime: 36, text: 'I said something wrong, now I long for yesterday', translation: 'Dije algo malo, ahora anhelo el ayer' },
      { id: 'l9', startTime: 36, endTime: 40, text: 'Yesterday, love was such an easy game to play', translation: 'Ayer, el amor era un juego tan fácil de jugar' },
      { id: 'l10', startTime: 40, endTime: 44, text: 'Now I need a place to hide away', translation: 'Ahora necesito un lugar donde esconderme' },
      { id: 'l11', startTime: 44, endTime: 48, text: 'Oh, I believe in yesterday', translation: 'Oh, creo en el ayer' },
      { id: 'l12', startTime: 48, endTime: 54, text: 'Mm mm mm mm mm mm mm', translation: '(melodía)' },
    ],
    duration: 125,
    difficulty: 'easy',
    vocabulary: ['troubles', 'shadow', 'suddenly', 'believe', 'yesterday', 'long for'],
  },
  'hello-adele': {
    songId: 'hello-adele',
    title: 'Hello',
    artist: 'Adele',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 5, text: 'Hello, it\'s me', translation: 'Hola, soy yo' },
      { id: 'l2', startTime: 5, endTime: 10, text: 'I was wondering if after all these years you\'d like to meet', translation: 'Me preguntaba si después de todos estos años te gustaría vernos' },
      { id: 'l3', startTime: 10, endTime: 15, text: 'To go over everything', translation: 'Para repasar todo' },
      { id: 'l4', startTime: 15, endTime: 22, text: 'They say that time\'s supposed to heal ya, but I ain\'t done much healing', translation: 'Dicen que el tiempo debería curarte, pero no he sanado mucho' },
      { id: 'l5', startTime: 22, endTime: 27, text: 'Hello, can you hear me?', translation: '¿Hola, puedes oírme?' },
      { id: 'l6', startTime: 27, endTime: 33, text: 'I\'m in California dreaming about who we used to be', translation: 'Estoy en California soñando con quiénes solíamos ser' },
      { id: 'l7', startTime: 33, endTime: 38, text: 'When we were younger and free', translation: 'Cuando éramos jóvenes y libres' },
      { id: 'l8', startTime: 38, endTime: 45, text: 'I\'ve forgotten how it felt before the world fell at our feet', translation: 'He olvidado cómo se sentía antes de que el mundo cayera a nuestros pies' },
      { id: 'l9', startTime: 45, endTime: 52, text: 'There\'s such a difference between us', translation: 'Hay tanta diferencia entre nosotros' },
      { id: 'l10', startTime: 52, endTime: 58, text: 'And a million miles', translation: 'Y un millón de millas' },
      { id: 'l11', startTime: 58, endTime: 68, text: 'Hello from the other side', translation: 'Hola desde el otro lado' },
      { id: 'l12', startTime: 68, endTime: 78, text: 'I must have called a thousand times', translation: 'Debo haber llamado mil veces' },
    ],
    duration: 295,
    difficulty: 'intermediate',
    vocabulary: ['wondering', 'healing', 'dreaming', 'forgotten', 'difference'],
  },
  'imagine-john-lennon': {
    songId: 'imagine-john-lennon',
    title: 'Imagine',
    artist: 'John Lennon',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 5, text: 'Imagine there\'s no heaven', translation: 'Imagina que no hay cielo' },
      { id: 'l2', startTime: 5, endTime: 10, text: 'It\'s easy if you try', translation: 'Es fácil si lo intentas' },
      { id: 'l3', startTime: 10, endTime: 15, text: 'No hell below us', translation: 'Ningún infierno debajo de nosotros' },
      { id: 'l4', startTime: 15, endTime: 20, text: 'Above us only sky', translation: 'Encima de nosotros solo el cielo' },
      { id: 'l5', startTime: 20, endTime: 28, text: 'Imagine all the people living for today', translation: 'Imagina a toda la gente viviendo el presente' },
      { id: 'l6', startTime: 28, endTime: 33, text: 'Imagine there\'s no countries', translation: 'Imagina que no hay países' },
      { id: 'l7', startTime: 33, endTime: 38, text: 'It isn\'t hard to do', translation: 'No es difícil de hacer' },
      { id: 'l8', startTime: 38, endTime: 43, text: 'Nothing to kill or die for', translation: 'Nada por lo que matar o morir' },
      { id: 'l9', startTime: 43, endTime: 48, text: 'And no religion too', translation: 'Y tampoco religión' },
      { id: 'l10', startTime: 48, endTime: 58, text: 'Imagine all the people living life in peace', translation: 'Imagina a toda la gente viviendo la vida en paz' },
      { id: 'l11', startTime: 58, endTime: 68, text: 'You may say I\'m a dreamer', translation: 'Puedes decir que soy un soñador' },
      { id: 'l12', startTime: 68, endTime: 75, text: 'But I\'m not the only one', translation: 'Pero no soy el único' },
    ],
    duration: 183,
    difficulty: 'easy',
    vocabulary: ['imagine', 'heaven', 'hell', 'countries', 'religion', 'dreamer', 'peace'],
  },
  'shape-of-you-ed-sheeran': {
    songId: 'shape-of-you-ed-sheeran',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 4, text: 'The club isn\'t the best place to find a lover', translation: 'El club no es el mejor lugar para encontrar un amor' },
      { id: 'l2', startTime: 4, endTime: 8, text: 'So the bar is where I go', translation: 'Así que el bar es donde voy' },
      { id: 'l3', startTime: 8, endTime: 12, text: 'Me and my friends at the table doing shots', translation: 'Mis amigos y yo en la mesa tomando shots' },
      { id: 'l4', startTime: 12, endTime: 16, text: 'Drinking fast and then we talk slow', translation: 'Bebiendo rápido y luego hablamos despacio' },
      { id: 'l5', startTime: 16, endTime: 20, text: 'And you come over and start up a conversation with just me', translation: 'Y tú vienes y empiezas una conversación solo conmigo' },
      { id: 'l6', startTime: 20, endTime: 24, text: 'And trust me I\'ll give it a chance now', translation: 'Y confía en mí, le daré una oportunidad ahora' },
      { id: 'l7', startTime: 24, endTime: 28, text: 'Take my hand, stop, put Van the Man on the jukebox', translation: 'Toma mi mano, para, pon a Van the Man en la rockola' },
      { id: 'l8', startTime: 28, endTime: 32, text: 'And then we start to dance, and now I\'m singing like', translation: 'Y luego empezamos a bailar, y ahora estoy cantando como' },
      { id: 'l9', startTime: 32, endTime: 40, text: 'Girl, you know I want your love', translation: 'Chica, sabes que quiero tu amor' },
      { id: 'l10', startTime: 40, endTime: 48, text: 'Your love was handmade for somebody like me', translation: 'Tu amor fue hecho a mano para alguien como yo' },
      { id: 'l11', startTime: 48, endTime: 56, text: 'I\'m in love with the shape of you', translation: 'Estoy enamorado de tu figura' },
      { id: 'l12', startTime: 56, endTime: 64, text: 'We push and pull like a magnet do', translation: 'Empujamos y tiramos como un imán' },
    ],
    duration: 234,
    difficulty: 'intermediate',
    vocabulary: ['lover', 'conversation', 'chance', 'jukebox', 'handmade', 'magnet'],
  },
  'bohemian-rhapsody-queen': {
    songId: 'bohemian-rhapsody-queen',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 6, text: 'Is this the real life? Is this just fantasy?', translation: '¿Es esta la vida real? ¿Es solo fantasía?' },
      { id: 'l2', startTime: 6, endTime: 12, text: 'Caught in a landslide, no escape from reality', translation: 'Atrapado en un deslizamiento, sin escape de la realidad' },
      { id: 'l3', startTime: 12, endTime: 18, text: 'Open your eyes, look up to the skies and see', translation: 'Abre tus ojos, mira hacia los cielos y ve' },
      { id: 'l4', startTime: 18, endTime: 24, text: 'I\'m just a poor boy, I need no sympathy', translation: 'Solo soy un chico pobre, no necesito simpatía' },
      { id: 'l5', startTime: 24, endTime: 32, text: 'Because I\'m easy come, easy go, little high, little low', translation: 'Porque soy fácil de ir, fácil de venir, un poco alto, un poco bajo' },
      { id: 'l6', startTime: 32, endTime: 40, text: 'Any way the wind blows doesn\'t really matter to me, to me', translation: 'De cualquier manera que sople el viento, no me importa, a mí' },
      { id: 'l7', startTime: 40, endTime: 48, text: 'Mama, just killed a man', translation: 'Mamá, acabo de matar a un hombre' },
      { id: 'l8', startTime: 48, endTime: 54, text: 'Put a gun against his head, pulled my trigger, now he\'s dead', translation: 'Puse un arma contra su cabeza, apreté el gatillo, ahora está muerto' },
      { id: 'l9', startTime: 54, endTime: 60, text: 'Mama, life had just begun', translation: 'Mamá, la vida apenas había comenzado' },
      { id: 'l10', startTime: 60, endTime: 66, text: 'But now I\'ve gone and thrown it all away', translation: 'Pero ahora me he ido y lo he tirado todo' },
      { id: 'l11', startTime: 66, endTime: 78, text: 'Mama, ooh, didn\'t mean to make you cry', translation: 'Mamá, ooh, no quise hacerte llorar' },
      { id: 'l12', startTime: 78, endTime: 88, text: 'If I\'m not back again this time tomorrow', translation: 'Si no vuelvo mañana a esta hora' },
    ],
    duration: 354,
    difficulty: 'hard',
    vocabulary: ['fantasy', 'landslide', 'reality', 'sympathy', 'trigger', 'thrown'],
  },
  'someone-like-you-adele': {
    songId: 'someone-like-you-adele',
    title: 'Someone Like You',
    artist: 'Adele',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 6, text: 'I heard that you\'re settled down', translation: 'Escuché que te has asentado' },
      { id: 'l2', startTime: 6, endTime: 12, text: 'That you found a girl and you\'re married now', translation: 'Que encontraste una chica y ahora estás casado' },
      { id: 'l3', startTime: 12, endTime: 18, text: 'I heard that your dreams came true', translation: 'Escuché que tus sueños se hicieron realidad' },
      { id: 'l4', startTime: 18, endTime: 24, text: 'Guess she gave you things I didn\'t give to you', translation: 'Supongo que ella te dio cosas que yo no te di' },
      { id: 'l5', startTime: 24, endTime: 30, text: 'Old friend, why are you so shy?', translation: 'Viejo amigo, ¿por qué eres tan tímido?' },
      { id: 'l6', startTime: 30, endTime: 38, text: 'Ain\'t like you to hold back or hide from the light', translation: 'No es propio de ti contenerte o esconderte de la luz' },
      { id: 'l7', startTime: 38, endTime: 50, text: 'Never mind, I\'ll find someone like you', translation: 'No importa, encontraré a alguien como tú' },
      { id: 'l8', startTime: 50, endTime: 58, text: 'I wish nothing but the best for you too', translation: 'No te deseo nada más que lo mejor' },
      { id: 'l9', startTime: 58, endTime: 68, text: 'Don\'t forget me, I beg, I remember you said', translation: 'No me olvides, te lo ruego, recuerdo que dijiste' },
      { id: 'l10', startTime: 68, endTime: 80, text: 'Sometimes it lasts in love, but sometimes it hurts instead', translation: 'A veces dura en el amor, pero a veces duele en su lugar' },
    ],
    duration: 285,
    difficulty: 'intermediate',
    vocabulary: ['settled', 'married', 'dreams', 'shy', 'beg', 'hurts'],
  },
  'counting-stars-onerepublic': {
    songId: 'counting-stars-onerepublic',
    title: 'Counting Stars',
    artist: 'OneRepublic',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 5, text: 'Lately, I\'ve been, I\'ve been losing sleep', translation: 'Últimamente, he estado, he estado perdiendo el sueño' },
      { id: 'l2', startTime: 5, endTime: 10, text: 'Dreaming about the things that we could be', translation: 'Soñando con las cosas que podríamos ser' },
      { id: 'l3', startTime: 10, endTime: 15, text: 'But baby, I\'ve been, I\'ve been praying hard', translation: 'Pero cariño, he estado, he estado orando fuerte' },
      { id: 'l4', startTime: 15, endTime: 20, text: 'Said no more counting dollars, we\'ll be counting stars', translation: 'Dije no más contando dólares, estaremos contando estrellas' },
      { id: 'l5', startTime: 20, endTime: 26, text: 'I see this life like a swinging vine', translation: 'Veo esta vida como una vid que se balancea' },
      { id: 'l6', startTime: 26, endTime: 32, text: 'Swing my heart across the line', translation: 'Balancea mi corazón a través de la línea' },
      { id: 'l7', startTime: 32, endTime: 38, text: 'In my face is flashing signs', translation: 'En mi cara hay señales parpadeando' },
      { id: 'l8', startTime: 38, endTime: 44, text: 'Seek it out and ye shall find', translation: 'Búscalo y lo encontrarás' },
      { id: 'l9', startTime: 44, endTime: 54, text: 'Old, but I\'m not that old', translation: 'Viejo, pero no soy tan viejo' },
      { id: 'l10', startTime: 54, endTime: 62, text: 'Young, but I\'m not that bold', translation: 'Joven, pero no soy tan atrevido' },
      { id: 'l11', startTime: 62, endTime: 70, text: 'And I don\'t think the world is sold', translation: 'Y no creo que el mundo esté vendido' },
      { id: 'l12', startTime: 70, endTime: 80, text: 'On just doing what we\'re told', translation: 'Solo haciendo lo que nos dicen' },
    ],
    duration: 257,
    difficulty: 'intermediate',
    vocabulary: ['lately', 'losing', 'praying', 'counting', 'swinging', 'bold'],
  },
  'hallelujah-leonard-cohen': {
    songId: 'hallelujah-leonard-cohen',
    title: 'Hallelujah',
    artist: 'Leonard Cohen',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 8, text: 'Now I\'ve heard there was a secret chord', translation: 'Ahora he oído que había un acorde secreto' },
      { id: 'l2', startTime: 8, endTime: 16, text: 'That David played, and it pleased the Lord', translation: 'Que David tocaba, y agradaba al Señor' },
      { id: 'l3', startTime: 16, endTime: 24, text: 'But you don\'t really care for music, do you?', translation: 'Pero a ti realmente no te importa la música, ¿verdad?' },
      { id: 'l4', startTime: 24, endTime: 32, text: 'It goes like this, the fourth, the fifth', translation: 'Va así, la cuarta, la quinta' },
      { id: 'l5', startTime: 32, endTime: 40, text: 'The minor fall, the major lift', translation: 'La caída menor, el levantamiento mayor' },
      { id: 'l6', startTime: 40, endTime: 52, text: 'The baffled king composing Hallelujah', translation: 'El rey desconcertado componiendo Aleluya' },
      { id: 'l7', startTime: 52, endTime: 64, text: 'Hallelujah, Hallelujah', translation: 'Aleluya, Aleluya' },
      { id: 'l8', startTime: 64, endTime: 76, text: 'Hallelujah, Hallelujah', translation: 'Aleluya, Aleluya' },
      { id: 'l9', startTime: 76, endTime: 88, text: 'Your faith was strong but you needed proof', translation: 'Tu fe era fuerte pero necesitabas prueba' },
      { id: 'l10', startTime: 88, endTime: 100, text: 'You saw her bathing on the roof', translation: 'La viste bañándose en el techo' },
    ],
    duration: 270,
    difficulty: 'hard',
    vocabulary: ['secret', 'chord', 'pleased', 'baffled', 'composing', 'faith', 'proof'],
  },
  'let-it-be-the-beatles': {
    songId: 'let-it-be-the-beatles',
    title: 'Let It Be',
    artist: 'The Beatles',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 6, text: 'When I find myself in times of trouble', translation: 'Cuando me encuentro en tiempos de problemas' },
      { id: 'l2', startTime: 6, endTime: 12, text: 'Mother Mary comes to me', translation: 'La Madre María viene a mí' },
      { id: 'l3', startTime: 12, endTime: 18, text: 'Speaking words of wisdom, let it be', translation: 'Hablando palabras de sabiduría, déjalo ser' },
      { id: 'l4', startTime: 18, endTime: 24, text: 'And in my hour of darkness', translation: 'Y en mi hora de oscuridad' },
      { id: 'l5', startTime: 24, endTime: 30, text: 'She is standing right in front of me', translation: 'Ella está parada justo frente a mí' },
      { id: 'l6', startTime: 30, endTime: 36, text: 'Speaking words of wisdom, let it be', translation: 'Hablando palabras de sabiduría, déjalo ser' },
      { id: 'l7', startTime: 36, endTime: 48, text: 'Let it be, let it be, let it be, let it be', translation: 'Déjalo ser, déjalo ser, déjalo ser, déjalo ser' },
      { id: 'l8', startTime: 48, endTime: 58, text: 'Whisper words of wisdom, let it be', translation: 'Susurra palabras de sabiduría, déjalo ser' },
      { id: 'l9', startTime: 58, endTime: 66, text: 'And when the broken-hearted people', translation: 'Y cuando la gente de corazón roto' },
      { id: 'l10', startTime: 66, endTime: 74, text: 'Living in the world agree', translation: 'Viviendo en el mundo están de acuerdo' },
    ],
    duration: 243,
    difficulty: 'easy',
    vocabulary: ['trouble', 'wisdom', 'darkness', 'standing', 'whisper', 'broken-hearted'],
  },
  'perfect-ed-sheeran': {
    songId: 'perfect-ed-sheeran',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    lyrics: [
      { id: 'l1', startTime: 0, endTime: 6, text: 'I found a love for me', translation: 'Encontré un amor para mí' },
      { id: 'l2', startTime: 6, endTime: 12, text: 'Darling, just dive right in and follow my lead', translation: 'Cariño, solo sumérgete y sigue mi ejemplo' },
      { id: 'l3', startTime: 12, endTime: 18, text: 'Well, I found a girl, beautiful and sweet', translation: 'Bueno, encontré una chica, hermosa y dulce' },
      { id: 'l4', startTime: 18, endTime: 26, text: 'Oh, I never knew you were the someone waiting for me', translation: 'Oh, nunca supe que eras tú quien me esperaba' },
      { id: 'l5', startTime: 26, endTime: 36, text: '\'Cause we were just kids when we fell in love', translation: 'Porque éramos solo niños cuando nos enamoramos' },
      { id: 'l6', startTime: 36, endTime: 44, text: 'Not knowing what it was', translation: 'Sin saber lo que era' },
      { id: 'l7', startTime: 44, endTime: 52, text: 'I will not give you up this time', translation: 'No te dejaré ir esta vez' },
      { id: 'l8', startTime: 52, endTime: 62, text: 'But darling, just kiss me slow, your heart is all I own', translation: 'Pero cariño, solo bésame despacio, tu corazón es todo lo que tengo' },
      { id: 'l9', startTime: 62, endTime: 72, text: 'And in your eyes, you\'re holding mine', translation: 'Y en tus ojos, sostienes los míos' },
      { id: 'l10', startTime: 72, endTime: 84, text: 'Baby, I\'m dancing in the dark with you between my arms', translation: 'Cariño, estoy bailando en la oscuridad contigo entre mis brazos' },
    ],
    duration: 263,
    difficulty: 'intermediate',
    vocabulary: ['darling', 'dive', 'beautiful', 'waiting', 'fell in love', 'dancing'],
  },
};

export const getSongKey = (title: string, artist: string): string => {
  return `${title.toLowerCase()}-${artist.toLowerCase()}`.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

// Normalize text for better matching
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\(.*?\)/g, '') // Remove parentheses content
    .replace(/\[.*?\]/g, '') // Remove brackets content
    .replace(/karaoke|version|lyrics|with|official|video|hd|4k|remaster|remastered/gi, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

// Try to find matching lyrics with fuzzy matching
export const getLocalLyrics = (title: string, artist: string): SynchronizedLyrics | null => {
  // First try exact match
  const exactKey = getSongKey(title, artist);
  if (localLyricsDatabase[exactKey]) {
    return localLyricsDatabase[exactKey];
  }

  // Normalize input for fuzzy matching
  const normalizedTitle = normalizeText(title);
  const normalizedArtist = normalizeText(artist);

  // Search through all songs for a match
  for (const [key, songData] of Object.entries(localLyricsDatabase)) {
    const songTitle = normalizeText(songData.title);
    const songArtist = normalizeText(songData.artist);

    // Check if title matches (allowing partial matches)
    const titleMatch = normalizedTitle.includes(songTitle) || songTitle.includes(normalizedTitle);
    const artistMatch = normalizedArtist.includes(songArtist) || songArtist.includes(normalizedArtist);

    if (titleMatch && artistMatch) {
      return songData;
    }

    // Also check if song title and artist appear anywhere in the input
    if (normalizedTitle.includes(songTitle) || normalizedArtist.includes(songTitle)) {
      if (normalizedTitle.includes(songArtist) || normalizedArtist.includes(songArtist)) {
        return songData;
      }
    }
  }

  return null;
};

// Get list of available songs with lyrics
export const getAvailableSongs = (): Array<{ title: string; artist: string; difficulty: string }> => {
  return Object.values(localLyricsDatabase).map(song => ({
    title: song.title,
    artist: song.artist,
    difficulty: song.difficulty,
  }));
};

// Check if a song has lyrics available
export const hasLyricsAvailable = (title: string, artist: string): boolean => {
  return getLocalLyrics(title, artist) !== null;
};

export const createFallbackLyrics = (title: string, artist: string): SynchronizedLyrics => ({
  songId: getSongKey(title, artist),
  title,
  artist,
  lyrics: [],
  duration: 0,
  difficulty: 'easy',
  vocabulary: [],
  isPlaceholder: true,
});

/**
 * Extract vocabulary words from lyrics text
 */
export function extractVocabulary(text: string): string[] {
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'to', 'of', 'in', 'for', 'on', 'with',
    'at', 'by', 'from', 'as', 'into', 'through', 'during', 'before', 'after',
    'above', 'below', 'between', 'under', 'again', 'further', 'then', 'once',
    'here', 'there', 'when', 'where', 'why', 'how', 'all', 'each', 'few', 'more',
    'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same',
    'so', 'than', 'too', 'very', 'just', 'i', 'me', 'my', 'myself', 'we', 'our',
    'ours', 'you', 'your', 'yours', 'he', 'him', 'his', 'she', 'her', 'hers',
    'it', 'its', 'they', 'them', 'their', 'what', 'which', 'who', 'whom', 'this',
    'that', 'these', 'those', 'am', 'if', 'oh', 'yeah', 'ooh', 'ah', 'la', 'na',
    'da', 'mmm', 'uh', 'um',
  ]);

  const words = text.toLowerCase()
    .replace(/[^\w\s']/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.has(word));

  // Get unique words and take up to 10
  const unique = [...new Set(words)];
  return unique.slice(0, 10);
}
