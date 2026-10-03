// ================================================================
// A1 BEGINNER ARTICLES: Complete Coverage
// Basic survival - Simple exchanges about self, daily life, concrete needs
// Topics: to be, present simple, was/were, can/can't, possessives, prepositions
// Themes: Personal info, family, home, daily objects, numbers
// ================================================================

import { CurriculumArticle } from './curriculumArticles';

export const a1CompleteArticles: CurriculumArticle[] = [
  // ================================================================
  // GRAMMAR: THE VERB "TO BE"
  // ================================================================
  {
    id: 'a1-grammar-to-be-affirmative',
    title: 'Grammar: The Verb "To Be" - Affirmative',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to use "am, is, are" correctly to describe people, things, and states.',
    explanation: `The verb "to be" is the most important verb in English. It connects subjects to descriptions.

**Forms of "to be":**
• **I am** (I'm) - for yourself
• **You are** (You're) - for the person you're talking to
• **He is** (He's) - for a man/boy
• **She is** (She's) - for a woman/girl
• **It is** (It's) - for things/animals
• **We are** (We're) - for yourself + others
• **They are** (They're) - for other people/things

**Uses of "to be":**
1. **Identity:** I am Maria. He is a teacher.
2. **Nationality:** She is Spanish. We are from Mexico.
3. **Age:** I am 25 years old.
4. **Feelings:** I am happy. She is tired.
5. **Location:** The book is on the table.
6. **Descriptions:** The car is red. They are tall.

**Basic structure:**
Subject + am/is/are + complement

**Contractions (spoken English):**
• I am → I'm
• He is → He's
• She is → She's
• It is → It's
• We are → We're
• You are → You're
• They are → They're`,
    examples: [
      { english: "I am a student.", context: "Introducing your occupation" },
      { english: "She is my sister.", context: "Talking about family" },
      { english: "They are from Brazil.", context: "Nationality" },
      { english: "It is a beautiful day.", context: "Describing weather" },
      { english: "We are happy to meet you.", context: "Expressing feelings" },
      { english: "The keys are on the table.", context: "Location of objects" }
    ],
    commonMistakes: [
      { mistake: "I is a student.", correction: "I am a student.", why: "'I' always uses 'am', never 'is' or 'are'." },
      { mistake: "She are happy.", correction: "She is happy.", why: "'She/He/It' always uses 'is', never 'are'." },
      { mistake: "They is my friends.", correction: "They are my friends.", why: "'They' always uses 'are' because it's plural." },
      { mistake: "I am have 25 years.", correction: "I am 25 years old.", why: "In English, we use 'am' for age, not 'have'." }
    ],
    practiceTips: [
      "Practice introducing yourself: 'I am [name]. I am from [country].'",
      "Describe 5 objects around you using 'is/are'.",
      "Write sentences about your family members.",
      "Use contractions when speaking for natural English.",
      "Listen to how native speakers use 'to be' in introductions."
    ],
    checkpoint: { 
      question: "Complete: She ___ a doctor from Spain.", 
      answer: "She is a doctor from Spain." 
    },
    nextStep: "Learn to make negative sentences with 'to be' in the next article."
  },

  {
    id: 'a1-grammar-to-be-negative',
    title: 'Grammar: The Verb "To Be" - Negative',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to form negative sentences with "am not, is not, are not" and their contractions.',
    explanation: `To make negative sentences with "to be", add "not" after the verb.

**Negative forms:**
• I am not (I'm not)
• You are not (You aren't / You're not)
• He is not (He isn't / He's not)
• She is not (She isn't / She's not)
• It is not (It isn't / It's not)
• We are not (We aren't / We're not)
• They are not (They aren't / They're not)

**Two types of contractions:**
1. Verb + not: isn't, aren't
2. Subject + verb: He's not, They're not

Both are correct! "I'm not" is the only form for "I" (we don't say "I amn't").

**Common uses:**
• Correcting information: "No, I'm not Spanish. I'm Italian."
• Denying facts: "The store isn't open today."
• Disagreeing: "They aren't my keys."

**Structure:**
Subject + am/is/are + not + complement`,
    examples: [
      { english: "I'm not tired.", context: "Denying a feeling" },
      { english: "He isn't a doctor.", context: "Correcting information" },
      { english: "We aren't from here.", context: "Explaining origin" },
      { english: "It's not my book.", context: "Ownership" },
      { english: "They aren't at home.", context: "Location" },
      { english: "She isn't happy about it.", context: "Feelings" }
    ],
    commonMistakes: [
      { mistake: "I amn't tired.", correction: "I'm not tired.", why: "There's no 'amn't' in English. Use 'I'm not'." },
      { mistake: "She not is here.", correction: "She isn't here.", why: "'Not' comes after 'is', not before." },
      { mistake: "He no is my friend.", correction: "He isn't my friend.", why: "Use 'not' or 'isn't', not 'no'." }
    ],
    practiceTips: [
      "Practice correcting false statements about yourself.",
      "Use both contraction forms: 'isn't' and 'is not'.",
      "Describe what things are NOT in your room.",
      "Practice the difference: 'He's not' vs 'He isn't' (both correct).",
      "Make flashcards with affirmative ↔ negative pairs."
    ],
    checkpoint: { 
      question: "Make negative: 'They are students.'", 
      answer: "They aren't students. / They're not students." 
    },
    nextStep: "Learn to ask questions with 'to be'."
  },

  {
    id: 'a1-grammar-to-be-questions',
    title: 'Grammar: The Verb "To Be" - Questions',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to form yes/no questions and wh-questions with "to be".',
    explanation: `To make questions with "to be", put the verb BEFORE the subject.

**Yes/No Questions:**
• Am I...? → Yes, you are. / No, you aren't.
• Are you...? → Yes, I am. / No, I'm not.
• Is he/she/it...? → Yes, he is. / No, he isn't.
• Are we/they...? → Yes, we are. / No, we aren't.

**Structure:** Am/Is/Are + subject + complement?

**Wh-Questions (information questions):**
• **What** - for things: What is your name?
• **Where** - for places: Where are you from?
• **Who** - for people: Who is she?
• **How** - for manner/condition: How are you?
• **How old** - for age: How old are you?
• **Why** - for reasons: Why are you late?

**Structure:** Wh-word + am/is/are + subject + complement?

**Short answers:**
• Yes, I am. / No, I'm not.
• Yes, she is. / No, she isn't.
• Yes, they are. / No, they aren't.

Note: In short answers, we DON'T contract "Yes, I am" to "Yes, I'm."`,
    examples: [
      { english: "Are you a teacher?", context: "Asking about occupation" },
      { english: "Is she your sister?", context: "Asking about relationships" },
      { english: "Where are you from?", context: "Asking about origin" },
      { english: "What is your phone number?", context: "Asking for information" },
      { english: "How old is your brother?", context: "Asking about age" },
      { english: "Why are they late?", context: "Asking for reasons" }
    ],
    commonMistakes: [
      { mistake: "You are a student?", correction: "Are you a student?", why: "In questions, the verb comes before the subject." },
      { mistake: "What your name is?", correction: "What is your name?", why: "'Is' comes after 'What', before 'your name'." },
      { mistake: "Yes, I'm.", correction: "Yes, I am.", why: "Don't contract in positive short answers." },
      { mistake: "Where you are from?", correction: "Where are you from?", why: "'Are' comes before 'you' in questions." }
    ],
    practiceTips: [
      "Practice asking and answering about yourself.",
      "Role-play meeting someone new.",
      "Listen for question intonation (voice goes UP at the end).",
      "Write 5 questions to ask a new classmate.",
      "Practice short answers: 'Yes, I am.' 'No, she isn't.'"
    ],
    checkpoint: { 
      question: "Write a question: 'She / from Italy'", 
      answer: "Is she from Italy?" 
    },
    nextStep: "Now learn the Present Simple tense for other verbs."
  },

  // ================================================================
  // GRAMMAR: PRESENT SIMPLE
  // ================================================================
  {
    id: 'a1-grammar-present-simple-affirmative',
    title: 'Grammar: Present Simple - Affirmative',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to describe habits, routines, and facts using Present Simple correctly.',
    explanation: `Present Simple is used for habits, routines, and general facts.

**When to use Present Simple:**
1. **Habits:** I drink coffee every morning.
2. **Routines:** She works from 9 to 5.
3. **Facts:** Water boils at 100°C.
4. **Likes/Dislikes:** I love pizza.

**Structure:**
• I/You/We/They + base verb
• He/She/It + verb + s/es

**Spelling rules for he/she/it:**
• Most verbs: add -s (work → works, eat → eats)
• Verbs ending in -s, -sh, -ch, -x, -o: add -es (watch → watches, go → goes)
• Verbs ending in consonant + y: change y to -ies (study → studies)
• Exceptions: have → has

**Time expressions:**
• Every day/week/month
• Always, usually, often, sometimes, rarely, never
• In the morning/afternoon/evening
• On Mondays, On weekends`,
    examples: [
      { english: "I work in an office.", context: "Job description" },
      { english: "She speaks three languages.", context: "Abilities" },
      { english: "They live in Madrid.", context: "Residence" },
      { english: "He watches TV every evening.", context: "Daily habit" },
      { english: "The train leaves at 9 AM.", context: "Schedule" },
      { english: "We eat dinner at 8 PM.", context: "Routine" }
    ],
    commonMistakes: [
      { mistake: "She work in a bank.", correction: "She works in a bank.", why: "Add -s for he/she/it." },
      { mistake: "He studys English.", correction: "He studies English.", why: "Consonant + y changes to -ies." },
      { mistake: "They works together.", correction: "They work together.", why: "'They' uses base form, no -s." },
      { mistake: "She gos to school.", correction: "She goes to school.", why: "Verbs ending in -o add -es." }
    ],
    practiceTips: [
      "Describe your typical day using Present Simple.",
      "Practice the -s/-es rules with verb lists.",
      "Use frequency adverbs: always, usually, sometimes, never.",
      "Describe other people's routines.",
      "Make sentences about facts: 'The sun rises in the east.'"
    ],
    checkpoint: { 
      question: "Complete: She ___ (teach) English at a school.", 
      answer: "She teaches English at a school." 
    },
    nextStep: "Learn how to make negative sentences in Present Simple."
  },

  {
    id: 'a1-grammar-present-simple-negative',
    title: 'Grammar: Present Simple - Negative',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to form negative sentences using "don\'t" and "doesn\'t".',
    explanation: `For negative sentences in Present Simple, use "do not" (don't) or "does not" (doesn't).

**Structure:**
• I/You/We/They + don't + base verb
• He/She/It + doesn't + base verb

**Important:** After don't/doesn't, use the BASE VERB (no -s).

**Examples by subject:**
• I don't like coffee.
• You don't understand.
• He doesn't work here.
• She doesn't speak French.
• It doesn't matter.
• We don't have time.
• They don't live here.

**Common expressions:**
• I don't know.
• She doesn't care.
• It doesn't work.
• They don't understand.

**Remember:** The main verb returns to base form because "does" already carries the third person marker.`,
    examples: [
      { english: "I don't eat meat.", context: "Food preferences" },
      { english: "She doesn't like mornings.", context: "Preferences" },
      { english: "They don't have a car.", context: "Possessions" },
      { english: "He doesn't work on weekends.", context: "Schedule" },
      { english: "We don't understand the question.", context: "Comprehension" },
      { english: "It doesn't rain much here.", context: "Weather facts" }
    ],
    commonMistakes: [
      { mistake: "She doesn't likes pizza.", correction: "She doesn't like pizza.", why: "After 'doesn't', use base verb (no -s)." },
      { mistake: "He don't work here.", correction: "He doesn't work here.", why: "Use 'doesn't' with he/she/it." },
      { mistake: "I doesn't understand.", correction: "I don't understand.", why: "Use 'don't' with I/you/we/they." },
      { mistake: "They doesn't have money.", correction: "They don't have money.", why: "'They' uses 'don't', not 'doesn't'." }
    ],
    practiceTips: [
      "List things you don't do every day.",
      "Describe what your friends don't like.",
      "Practice: 'He likes coffee' → 'He doesn't like coffee'.",
      "Use contractions (don't/doesn't) for natural speech.",
      "Make true sentences about yourself using negatives."
    ],
    checkpoint: { 
      question: "Make negative: 'She speaks Japanese.'", 
      answer: "She doesn't speak Japanese." 
    },
    nextStep: "Learn how to ask questions in Present Simple."
  },

  {
    id: 'a1-grammar-present-simple-questions',
    title: 'Grammar: Present Simple - Questions',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to form yes/no and wh-questions using "do" and "does".',
    explanation: `For questions in Present Simple, use "Do" or "Does" at the beginning.

**Yes/No Questions:**
• Do + I/you/we/they + base verb?
• Does + he/she/it + base verb?

**Answers:**
• Yes, I do. / No, I don't.
• Yes, she does. / No, she doesn't.

**Wh-Questions:**
Wh-word + do/does + subject + base verb?

• What do you do? (job/occupation)
• Where does she live?
• When do they arrive?
• Why does he study English?
• How do you go to work?
• Who do you live with?

**Special case - Who as subject:**
When "who" is the subject, don't use "do/does":
• Who lives here? (NOT: Who does live here?)
• Who works with you?

**Remember:** After do/does, always use the BASE VERB.`,
    examples: [
      { english: "Do you speak English?", context: "Asking about ability" },
      { english: "Does she work here?", context: "Asking about someone" },
      { english: "What time do you wake up?", context: "Daily routine" },
      { english: "Where does he live?", context: "Asking about location" },
      { english: "How often do they exercise?", context: "Frequency" },
      { english: "Why do you study English?", context: "Asking reasons" }
    ],
    commonMistakes: [
      { mistake: "Does she works here?", correction: "Does she work here?", why: "After 'does', use base verb (no -s)." },
      { mistake: "Do she speak English?", correction: "Does she speak English?", why: "Use 'Does' with he/she/it." },
      { mistake: "Where you live?", correction: "Where do you live?", why: "You need 'do' for questions." },
      { mistake: "What means this?", correction: "What does this mean?", why: "Use 'does' + subject + base verb." }
    ],
    practiceTips: [
      "Write 10 questions to ask a new friend.",
      "Practice short answers: 'Yes, I do.' 'No, she doesn't.'",
      "Role-play job interviews using Present Simple questions.",
      "Ask and answer about daily routines with a partner.",
      "Listen for question intonation in English."
    ],
    checkpoint: { 
      question: "Write a question: 'Where / he / work'", 
      answer: "Where does he work?" 
    },
    nextStep: "Learn about basic past tense with 'was' and 'were'."
  },

  // ================================================================
  // GRAMMAR: PAST SIMPLE - WAS/WERE
  // ================================================================
  {
    id: 'a1-grammar-was-were',
    title: 'Grammar: Past Simple - Was and Were',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to use "was" and "were" to talk about the past.',
    explanation: `"Was" and "were" are the past forms of "to be" (am, is, are).

**Forms:**
• I was
• You were
• He/She/It was
• We were
• They were

**Negative forms:**
• was not (wasn't)
• were not (weren't)

**Question forms:**
• Was I/he/she/it...?
• Were you/we/they...?

**Uses:**
1. **Past states:** I was tired yesterday.
2. **Past locations:** They were at home.
3. **Past descriptions:** The movie was interesting.
4. **Past identity:** She was a teacher.
5. **Age in the past:** I was 10 years old in 2010.

**Time expressions:**
• Yesterday
• Last night/week/month/year
• Two days ago
• In 2020
• When I was young`,
    examples: [
      { english: "I was at the office yesterday.", context: "Past location" },
      { english: "She was very happy.", context: "Past feeling" },
      { english: "They were late for the meeting.", context: "Past situation" },
      { english: "The weather was beautiful.", context: "Past description" },
      { english: "Were you at the party?", context: "Question about past" },
      { english: "He wasn't home last night.", context: "Negative past" }
    ],
    commonMistakes: [
      { mistake: "I were tired.", correction: "I was tired.", why: "'I' uses 'was', not 'were'." },
      { mistake: "They was at school.", correction: "They were at school.", why: "'They' uses 'were', not 'was'." },
      { mistake: "She was be happy.", correction: "She was happy.", why: "Don't use 'be' after 'was/were'." },
      { mistake: "Yesterday I am busy.", correction: "Yesterday I was busy.", why: "'Yesterday' needs past tense." }
    ],
    practiceTips: [
      "Describe where you were yesterday at different times.",
      "Talk about your childhood: 'When I was young...'",
      "Compare: 'Today I am tired. Yesterday I was tired too.'",
      "Practice questions: 'Where were you?' 'What was it like?'",
      "Describe past events: 'The party was fun.'"
    ],
    checkpoint: { 
      question: "Complete: They ___ at the cinema last night.", 
      answer: "They were at the cinema last night." 
    },
    nextStep: "Learn to express ability with 'can' and 'can't'."
  },

  // ================================================================
  // GRAMMAR: CAN / CAN'T
  // ================================================================
  {
    id: 'a1-grammar-can-ability',
    title: 'Grammar: Can and Can\'t - Ability',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to express abilities and inabilities using "can" and "can\'t".',
    explanation: `"Can" is a modal verb used to express ability (what you are able to do).

**Structure:**
• Affirmative: Subject + can + base verb
• Negative: Subject + can't/cannot + base verb
• Question: Can + subject + base verb?

**Important rules:**
1. "Can" never changes form (no -s, no -ed).
2. Always use base verb after "can" (no "to").
3. "Can't" is the contraction of "cannot".

**Uses of "can":**
1. **Ability:** I can swim.
2. **Possibility:** You can buy tickets online.
3. **Permission:** Can I go now?
4. **Requests:** Can you help me?

**Pronunciation:**
• "Can" in sentences: /kən/ (weak, unstressed)
• "Can" for emphasis: /kæn/ (strong)
• "Can't": /kɑːnt/ (British) or /kænt/ (American)

**Short answers:**
• Yes, I can. / No, I can't.`,
    examples: [
      { english: "I can speak English.", context: "Language ability" },
      { english: "She can't drive.", context: "Inability" },
      { english: "Can you play the guitar?", context: "Asking about ability" },
      { english: "They can run very fast.", context: "Physical ability" },
      { english: "We can't understand him.", context: "Inability" },
      { english: "Can I use your phone?", context: "Asking permission" }
    ],
    commonMistakes: [
      { mistake: "She cans swim.", correction: "She can swim.", why: "'Can' never takes -s, even with he/she/it." },
      { mistake: "I can to play piano.", correction: "I can play piano.", why: "No 'to' after 'can'." },
      { mistake: "He can not come.", correction: "He cannot come. / He can't come.", why: "'Cannot' is one word, or use 'can't'." },
      { mistake: "Can you to help me?", correction: "Can you help me?", why: "No 'to' after 'can' in questions." }
    ],
    practiceTips: [
      "List 5 things you can do and 5 things you can't do.",
      "Describe abilities of family members.",
      "Practice asking: 'Can you...?' with different verbs.",
      "Listen for the difference between 'can' /kən/ and 'can't' /kɑːnt/.",
      "Role-play asking for help: 'Can you help me with...?'"
    ],
    checkpoint: { 
      question: "Write about yourself: 'I can ___ but I can't ___.'", 
      answer: "Example: I can cook but I can't sing." 
    },
    nextStep: "Learn possessive adjectives to talk about ownership."
  },

  // ================================================================
  // GRAMMAR: POSSESSIVE ADJECTIVES
  // ================================================================
  {
    id: 'a1-grammar-possessive-adjectives',
    title: 'Grammar: Possessive Adjectives',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to use possessive adjectives (my, your, his, her, etc.) correctly.',
    explanation: `Possessive adjectives show ownership or relationship. They always come BEFORE a noun.

**The possessive adjectives:**
• **I** → **my** (my book)
• **You** → **your** (your car)
• **He** → **his** (his phone)
• **She** → **her** (her bag)
• **It** → **its** (its name)
• **We** → **our** (our house)
• **They** → **their** (their children)

**Important rules:**
1. Possessive adjectives come BEFORE nouns.
2. They don't change for singular/plural: my book, my books.
3. "Its" (possessive) vs "It's" (it is) - different!
4. "Their" vs "There" vs "They're" - different!

**Common patterns:**
• This is my + noun: This is my phone.
• What's your + noun?: What's your name?
• His/Her + family: His mother, her brother.

**Possessive adjective + noun:**
• my friend (NOT: the my friend)
• her sister (NOT: she sister)`,
    examples: [
      { english: "This is my house.", context: "Showing ownership" },
      { english: "What's your email address?", context: "Asking for information" },
      { english: "His name is David.", context: "Talking about a man" },
      { english: "Her mother is a doctor.", context: "Talking about a woman's family" },
      { english: "Our class starts at 9 AM.", context: "Shared ownership" },
      { english: "Their car is very old.", context: "Talking about others' possessions" }
    ],
    commonMistakes: [
      { mistake: "This is the my book.", correction: "This is my book.", why: "Don't use 'the' with possessive adjectives." },
      { mistake: "She name is Ana.", correction: "Her name is Ana.", why: "Use 'her' (possessive), not 'she' (subject pronoun)." },
      { mistake: "The dog wagged it's tail.", correction: "The dog wagged its tail.", why: "'Its' (no apostrophe) is possessive. 'It's' means 'it is'." },
      { mistake: "That's they house.", correction: "That's their house.", why: "Use 'their' (possessive), not 'they' (subject pronoun)." }
    ],
    practiceTips: [
      "Describe your possessions: 'This is my..., these are my...'",
      "Talk about family: 'My father is..., my mother is...'",
      "Practice pairs: I-my, you-your, he-his, she-her.",
      "Write about a friend: 'Her name is..., her job is...'",
      "Be careful: its vs it's, their vs there vs they're."
    ],
    checkpoint: { 
      question: "Complete: ___ (She) brother is a pilot.", 
      answer: "Her brother is a pilot." 
    },
    nextStep: "Learn basic prepositions of place and time."
  },

  // ================================================================
  // GRAMMAR: BASIC PREPOSITIONS
  // ================================================================
  {
    id: 'a1-grammar-prepositions-place',
    title: 'Grammar: Prepositions of Place',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to describe where things are using basic prepositions of place.',
    explanation: `Prepositions of place tell us WHERE something is.

**Basic prepositions of place:**
• **in** - inside a space: in the box, in the room, in the car
• **on** - on a surface: on the table, on the wall, on the floor
• **at** - at a specific point: at the door, at the bus stop, at home
• **under** - below: under the table, under the bed
• **next to / beside** - at the side: next to the bank
• **between** - in the middle: between the school and the park
• **in front of** - facing: in front of the TV
• **behind** - at the back: behind the sofa
• **near** - close to: near the station

**Fixed expressions:**
• at home (NOT: in home)
• at work (NOT: in work)
• at school (NOT: in school, when meaning "as a student")
• in the car (NOT: on the car)
• on the bus/train/plane (NOT: in)

**Describing locations:**
"The [object] is [preposition] the [reference point]."
Example: The keys are on the table.`,
    examples: [
      { english: "The book is on the desk.", context: "Surface location" },
      { english: "She is in the kitchen.", context: "Inside a room" },
      { english: "I'll meet you at the station.", context: "Specific point" },
      { english: "The cat is under the bed.", context: "Below something" },
      { english: "The pharmacy is next to the supermarket.", context: "Beside" },
      { english: "He's standing behind me.", context: "At the back" }
    ],
    commonMistakes: [
      { mistake: "I am in home.", correction: "I am at home.", why: "We say 'at home', not 'in home'." },
      { mistake: "The picture is in the wall.", correction: "The picture is on the wall.", why: "Use 'on' for surfaces like walls." },
      { mistake: "I'm on the car.", correction: "I'm in the car.", why: "We are 'in' a car, but 'on' a bus/train." },
      { mistake: "She is in the bus stop.", correction: "She is at the bus stop.", why: "Use 'at' for specific points/locations." }
    ],
    practiceTips: [
      "Describe where objects are in your room.",
      "Play 'I spy' using prepositions.",
      "Draw a room and describe item locations.",
      "Practice: 'Where is the...?' 'It's in/on/at...'",
      "Remember fixed phrases: at home, at work, at school."
    ],
    checkpoint: { 
      question: "Complete: The phone is ___ the table.", 
      answer: "The phone is on the table." 
    },
    nextStep: "Learn prepositions of time (at, in, on)."
  },

  {
    id: 'a1-grammar-prepositions-time',
    title: 'Grammar: Prepositions of Time',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will be able to use at, in, and on correctly with time expressions.',
    explanation: `Prepositions of time tell us WHEN something happens.

**AT - for specific times:**
• at 7 o'clock
• at noon / at midnight
• at night
• at the weekend (British) / on the weekend (American)
• at Christmas / at Easter

**IN - for longer periods:**
• in the morning / afternoon / evening
• in January, in March (months)
• in 2024 (years)
• in summer / winter / spring / autumn
• in two weeks (future time)

**ON - for specific days and dates:**
• on Monday, on Friday (days)
• on 15th July (dates)
• on my birthday
• on Christmas Day
• on the weekend (American)

**No preposition:**
• this morning (NOT: in this morning)
• last week (NOT: in last week)
• next month (NOT: in next month)
• every day (NOT: on every day)
• today, tomorrow, yesterday`,
    examples: [
      { english: "The meeting is at 3 o'clock.", context: "Specific time" },
      { english: "I wake up in the morning.", context: "Part of day" },
      { english: "My birthday is on May 5th.", context: "Specific date" },
      { english: "We go skiing in winter.", context: "Season" },
      { english: "She works on Saturdays.", context: "Day of week" },
      { english: "The store opens at 9 AM.", context: "Opening time" }
    ],
    commonMistakes: [
      { mistake: "I wake up on the morning.", correction: "I wake up in the morning.", why: "Use 'in' for parts of the day (morning/afternoon/evening)." },
      { mistake: "See you in Monday.", correction: "See you on Monday.", why: "Use 'on' for days of the week." },
      { mistake: "I was born in 15th June.", correction: "I was born on 15th June.", why: "Use 'on' for specific dates." },
      { mistake: "I'll call you in tonight.", correction: "I'll call you tonight.", why: "No preposition with 'tonight'." }
    ],
    practiceTips: [
      "Describe your schedule: 'I have class at... on...'",
      "Talk about birthdays: 'My birthday is on...'",
      "Practice: morning/afternoon/evening → in",
      "Practice: days and dates → on",
      "Practice: clock times → at"
    ],
    checkpoint: { 
      question: "Complete: The party is ___ Saturday ___ 8 PM.", 
      answer: "The party is on Saturday at 8 PM." 
    },
    nextStep: "Learn vocabulary for personal information and introductions."
  },

  // ================================================================
  // VOCABULARY: PERSONAL INFORMATION
  // ================================================================
  {
    id: 'a1-vocab-personal-info',
    title: 'Vocabulary: Personal Information',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to give and ask for basic personal information.',
    explanation: `Knowing how to share personal information is essential for introductions and forms.

**Basic personal information:**
• **Name:** first name (given name), last name (surname/family name)
• **Age:** How old are you? I'm 25 years old.
• **Nationality:** I'm Spanish/American/British.
• **Country:** I'm from Spain/USA/UK.
• **City:** I live in Madrid.
• **Address:** 123 Main Street
• **Phone number:** My number is 555-1234.
• **Email:** My email is john@example.com.
• **Job/Occupation:** I'm a teacher/doctor/student.
• **Marital status:** single, married, divorced

**Common questions:**
• What's your name?
• How old are you?
• Where are you from?
• What do you do? (job)
• What's your phone number?
• What's your email address?

**Introducing yourself:**
"Hi, I'm [name]. I'm from [country]. I'm [age] years old. I'm a [job]."`,
    examples: [
      { english: "My name is Sarah Johnson.", context: "Giving full name" },
      { english: "I'm 28 years old.", context: "Stating age" },
      { english: "I'm from the United States.", context: "Nationality/origin" },
      { english: "I work as an engineer.", context: "Occupation" },
      { english: "My phone number is 555-0123.", context: "Contact information" },
      { english: "I live at 45 Oak Street, London.", context: "Address" }
    ],
    commonMistakes: [
      { mistake: "I have 25 years.", correction: "I am 25 years old.", why: "In English, we use 'am' for age, not 'have'." },
      { mistake: "My name it's John.", correction: "My name is John.", why: "Don't use 'it's' after 'name'." },
      { mistake: "I'm from Spanish.", correction: "I'm from Spain. / I'm Spanish.", why: "'Spain' is the country, 'Spanish' is the nationality." },
      { mistake: "What is your work?", correction: "What do you do?", why: "We ask 'What do you do?' for jobs." }
    ],
    practiceTips: [
      "Practice introducing yourself to a mirror.",
      "Fill out forms in English to practice writing info.",
      "Role-play meeting someone new.",
      "Learn to spell your name and email aloud.",
      "Practice numbers for phone numbers and addresses."
    ],
    checkpoint: { 
      question: "Answer: Where are you from? What do you do?", 
      answer: "Example: I'm from Mexico. I'm a student." 
    },
    nextStep: "Learn family vocabulary to talk about your relatives."
  },

  // ================================================================
  // VOCABULARY: HOME AND DAILY OBJECTS
  // ================================================================
  {
    id: 'a1-vocab-home-objects',
    title: 'Vocabulary: Home and Daily Objects',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to name rooms, furniture, and common household objects.',
    explanation: `Knowing home vocabulary helps you describe where you live and find things.

**Rooms of the house:**
• **Living room** - where you relax, watch TV
• **Bedroom** - where you sleep
• **Kitchen** - where you cook
• **Bathroom** - where you shower, toilet
• **Dining room** - where you eat
• **Garden/Yard** - outdoor space

**Common furniture:**
• bed, sofa/couch, chair, table, desk
• wardrobe/closet, bookshelf, drawer
• lamp, mirror, rug/carpet

**Kitchen objects:**
• fridge/refrigerator, oven, microwave
• cup, glass, plate, bowl
• fork, knife, spoon
• pot, pan

**Bathroom objects:**
• shower, bathtub, toilet, sink
• towel, soap, toothbrush, toothpaste

**Daily objects:**
• phone, keys, wallet, bag
• clock, watch, glasses
• umbrella, book, pen, pencil

**Useful phrases:**
• Where is the...?
• It's in the living room.
• Can you pass me the...?`,
    examples: [
      { english: "The sofa is in the living room.", context: "Furniture location" },
      { english: "I left my keys on the kitchen table.", context: "Everyday situation" },
      { english: "There are two bedrooms in my apartment.", context: "Describing home" },
      { english: "Can you pass me a fork, please?", context: "At dinner" },
      { english: "The bathroom is next to the bedroom.", context: "Giving directions" },
      { english: "I need to buy a new lamp.", context: "Shopping" }
    ],
    commonMistakes: [
      { mistake: "I sleep in the bed room.", correction: "I sleep in the bedroom.", why: "'Bedroom' is one word." },
      { mistake: "The furnitures are new.", correction: "The furniture is new.", why: "'Furniture' is uncountable - no -s." },
      { mistake: "I cook in the cook room.", correction: "I cook in the kitchen.", why: "The room for cooking is 'kitchen'." },
      { mistake: "Pass me a knife for cut.", correction: "Pass me a knife to cut.", why: "Use 'to + verb' for purpose." }
    ],
    practiceTips: [
      "Label objects in your home in English.",
      "Describe your home room by room.",
      "Practice: 'In the kitchen, there is a...'",
      "Draw your dream house and describe it.",
      "Play 'Where is it?' games with household items."
    ],
    checkpoint: { 
      question: "Name 5 objects in your kitchen.", 
      answer: "Example: fridge, oven, table, cup, fork." 
    },
    nextStep: "Learn numbers and how to use them in English."
  },

  // ================================================================
  // VOCABULARY: NUMBERS
  // ================================================================
  {
    id: 'a1-vocab-numbers',
    title: 'Vocabulary: Numbers and Counting',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to use cardinal and ordinal numbers correctly.',
    explanation: `Numbers are essential for shopping, telling time, dates, and phone numbers.

**Cardinal numbers (counting):**
1 one, 2 two, 3 three, 4 four, 5 five
6 six, 7 seven, 8 eight, 9 nine, 10 ten
11 eleven, 12 twelve, 13 thirteen, 14 fourteen, 15 fifteen
16 sixteen, 17 seventeen, 18 eighteen, 19 nineteen
20 twenty, 21 twenty-one, 30 thirty, 40 forty, 50 fifty
60 sixty, 70 seventy, 80 eighty, 90 ninety
100 one hundred, 1000 one thousand

**Ordinal numbers (order):**
1st first, 2nd second, 3rd third, 4th fourth, 5th fifth
6th sixth, 7th seventh, 8th eighth, 9th ninth, 10th tenth
20th twentieth, 21st twenty-first, 30th thirtieth
100th hundredth

**Uses:**
• Phone numbers: Say each digit separately: 555-0123 = "five five five, zero one two three"
• Prices: $25.99 = "twenty-five dollars and ninety-nine cents"
• Dates: May 3rd = "May third" or "the third of May"
• Age: I'm 25 = "I'm twenty-five"
• Addresses: 42 Main Street = "forty-two Main Street"`,
    examples: [
      { english: "My phone number is 555-2468.", context: "Giving phone number" },
      { english: "That's twelve dollars fifty.", context: "Price" },
      { english: "I live on the third floor.", context: "Ordinal number" },
      { english: "My birthday is on January twenty-first.", context: "Date" },
      { english: "There are twenty students in my class.", context: "Quantity" },
      { english: "The meeting is at three thirty.", context: "Time" }
    ],
    commonMistakes: [
      { mistake: "It costs twenty-five dollar.", correction: "It costs twenty-five dollars.", why: "Numbers over one need plural 'dollars'." },
      { mistake: "He came in the one place.", correction: "He came in first place.", why: "Use ordinal 'first', not 'one'." },
      { mistake: "My phone is 555-twenty-three-forty-five.", correction: "My phone is 555-2345 (five-five-five-two-three-four-five).", why: "Say phone numbers as individual digits." },
      { mistake: "It's the March 5.", correction: "It's March 5th / the 5th of March.", why: "Use ordinal numbers for dates." }
    ],
    practiceTips: [
      "Practice counting from 1-100 aloud.",
      "Say your phone number in English.",
      "Practice prices when shopping.",
      "Learn to say dates: 'the [ordinal] of [month]'.",
      "Practice ordinal numbers for floors and positions."
    ],
    checkpoint: { 
      question: "Say this date: 23/08/1995", 
      answer: "August twenty-third, nineteen ninety-five / The twenty-third of August, nineteen ninety-five." 
    },
    nextStep: "Practice simple questions to have basic conversations."
  },

  // ================================================================
  // SKILL: ASKING SIMPLE QUESTIONS
  // ================================================================
  {
    id: 'a1-skill-simple-questions',
    title: 'Skill: Asking Simple Questions',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will be able to ask and answer basic questions in everyday situations.',
    explanation: `Being able to ask questions is essential for communication. Here are the most common types.

**Yes/No Questions:**
Structure: Auxiliary + Subject + Verb?
• Are you a student? → Yes, I am. / No, I'm not.
• Do you speak English? → Yes, I do. / No, I don't.
• Can you help me? → Yes, I can. / No, I can't.
• Is this your book? → Yes, it is. / No, it isn't.

**Wh-Questions (Information Questions):**
Structure: Wh-word + Auxiliary + Subject + Verb?

• **What** (things): What's your name? What do you do?
• **Where** (places): Where do you live? Where is the station?
• **When** (time): When is the meeting? When do you wake up?
• **Who** (people): Who is that? Who do you live with?
• **Why** (reasons): Why are you late? Why do you study English?
• **How** (manner): How are you? How do you go to work?
• **How much/many** (quantity): How much is this? How many brothers do you have?
• **Which** (choice): Which one do you want?

**Common everyday questions:**
• Excuse me, where is the bathroom?
• How much does this cost?
• What time is it?
• Can I have the bill, please?`,
    examples: [
      { english: "What time does the train leave?", context: "At the station" },
      { english: "How much is this t-shirt?", context: "Shopping" },
      { english: "Where can I find a supermarket?", context: "Asking for directions" },
      { english: "Do you have this in a larger size?", context: "Clothes shopping" },
      { english: "Can I pay by card?", context: "Paying" },
      { english: "What's the Wi-Fi password?", context: "At a café" }
    ],
    commonMistakes: [
      { mistake: "Where is the bathroom is?", correction: "Where is the bathroom?", why: "Only one 'is' is needed." },
      { mistake: "How many costs this?", correction: "How much does this cost?", why: "Use 'How much' for prices, with correct word order." },
      { mistake: "What means this word?", correction: "What does this word mean?", why: "Correct order: What + does + subject + verb." },
      { mistake: "You are from where?", correction: "Where are you from?", why: "Wh-word comes at the beginning." }
    ],
    practiceTips: [
      "Practice common questions for shopping and travel.",
      "Role-play asking for directions.",
      "Learn question words: what, where, when, who, why, how.",
      "Practice with short answers.",
      "Listen to native speakers asking questions."
    ],
    checkpoint: { 
      question: "Write 3 questions to ask at a café.", 
      answer: "Example: What time do you close? Can I have a coffee, please? Do you have Wi-Fi?" 
    },
    nextStep: "Practice understanding slow, clear speech with listening exercises."
  },

  // ================================================================
  // SKILL: UNDERSTANDING SLOW SPEECH
  // ================================================================
  {
    id: 'a1-skill-understanding-speech',
    title: 'Skill: Understanding Slow, Clear Speech',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will develop strategies to understand basic spoken English.',
    explanation: `At A1 level, focus on understanding the main points of slow, clear speech.

**What you should understand:**
• Simple introductions and greetings
• Basic questions about yourself
• Numbers, prices, and times
• Simple instructions
• Common phrases in shops, restaurants, hotels

**Listening strategies:**
1. **Focus on keywords** - You don't need every word. Listen for: who, what, where, when.
2. **Use context clues** - Where are you? What's the situation?
3. **Listen for stress** - Important words are spoken LOUDER and SLOWER.
4. **Don't panic** - It's okay to not understand everything.
5. **Ask for repetition** - "Sorry, can you repeat that?"

**Useful phrases when you don't understand:**
• "Sorry, I don't understand."
• "Can you speak more slowly, please?"
• "Can you repeat that, please?"
• "What does [word] mean?"
• "How do you spell that?"

**Listening practice tips:**
• Start with graded content for A1 learners
• Use subtitles in English (not your language!)
• Listen to the same audio multiple times
• Focus on sounds, not just meaning`,
    examples: [
      { english: "Sorry, can you speak more slowly?", context: "When speech is too fast" },
      { english: "Can you repeat that, please?", context: "When you miss something" },
      { english: "What does 'appointment' mean?", context: "Asking for vocabulary help" },
      { english: "How do you spell your name?", context: "Getting correct information" },
      { english: "I'm sorry, I don't understand.", context: "General confusion" },
      { english: "Could you write that down?", context: "For important information" }
    ],
    commonMistakes: [
      { mistake: "Trying to understand every word.", correction: "Focus on keywords and main ideas.", why: "Even native speakers don't catch every word." },
      { mistake: "Being afraid to ask for help.", correction: "Always ask 'Can you repeat?'", why: "Native speakers expect learners to ask for clarification." },
      { mistake: "Using subtitles in your native language.", correction: "Use English subtitles only.", why: "Your native language prevents you from learning English sounds." },
      { mistake: "Listening only once.", correction: "Listen multiple times to the same audio.", why: "Repetition helps you notice more each time." }
    ],
    practiceTips: [
      "Watch children's shows in English (simple language).",
      "Listen to English songs and follow the lyrics.",
      "Use apps with graded listening for beginners.",
      "Practice with English-learning podcasts.",
      "Listen to short dialogues and answer simple questions."
    ],
    checkpoint: { 
      question: "What can you say when you don't understand?", 
      answer: "Sorry, can you repeat that? / Can you speak more slowly?" 
    },
    nextStep: "Practice introducing yourself with the strategies you've learned."
  },
];

// Export helper function
export function getA1CompleteArticles(): CurriculumArticle[] {
  return a1CompleteArticles;
}
