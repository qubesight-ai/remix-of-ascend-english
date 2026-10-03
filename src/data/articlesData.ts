// Comprehensive English Grammar and Vocabulary Articles Data
// Written in a formal, textbook-like style for thorough understanding
// Covers ALL CEFR levels from A1 to C2

import { a2GrammarArticles } from "./a2GrammarArticles";
import { b2GrammarArticles } from "./b2GrammarArticles";
import { c1GrammarArticles } from "./c1GrammarArticles";
import { c2GrammarArticles } from "./c2GrammarArticles";

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleExample {
  english: string;
  context: string;
  explanation?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'grammar' | 'vocabulary' | 'speaking' | 'listening' | 'reading' | 'writing';
  tags: string[];
  estimatedReadTime: number;
  introduction: string;
  sections: ArticleSection[];
  examples: ArticleExample[];
  commonMistakes: { mistake: string; correction: string; explanation: string }[];
  practiceExercises: { question: string; answer: string; hint: string }[];
  summary: string;
  relatedArticles: string[];
}

export const articles: Article[] = [
  // =====================================================================
  // LEVEL A1 - BEGINNER
  // =====================================================================

  // ==================== VERB TO BE ====================
  {
    id: 'verb-to-be',
    title: 'The Verb TO BE: Being and Existing in English',
    subtitle: 'Essential foundation of English grammar',
    level: 'A1',
    category: 'grammar',
    tags: ['to-be', 'verbs', 'basic-grammar', 'affirmative', 'negative', 'questions'],
    estimatedReadTime: 12,
    introduction: `The verb "to be" is, without a doubt, the most important verb in the English language. Mastering this verb is the first fundamental step to building correct sentences in English.

This article will provide you with a complete understanding of the verb "to be": its forms, uses, conjugations, and the rules you must memorize to use it correctly in any context.`,
    sections: [
      {
        title: '1. Forms of the Verb TO BE',
        content: `The verb "to be" has three main forms in the present: AM, IS, and ARE. The choice depends exclusively on the subject of the sentence.

**Present Tense Conjugation:**

| Subject | Verb TO BE | Contraction |
|---------|------------|-------------|
| I | am | I'm |
| You | are | You're |
| He | is | He's |
| She | is | She's |
| It | is | It's |
| We | are | We're |
| They | are | They're |

**Fundamental rule:** Memorize that I always goes with AM, he/she/it always go with IS, and you/we/they always go with ARE. This rule has no exceptions.`
      },
      {
        title: '2. Uses of the Verb TO BE',
        content: `The verb "to be" is used in multiple contexts:

**A) Identity and Definition:**
- "I am a teacher"
- "This is a book"

**B) Description of Characteristics:**
- "She is tall" — permanent characteristic
- "He is tired" — temporary state

**C) Nationality and Origin:**
- "We are from Spain"
- "They are American"

**D) Professions and Occupations:**
- "He is a doctor"
- "She is an engineer"

**E) Location:**
- "The book is on the table"
- "We are at home"

**F) Temporary States:**
- "I am hungry"
- "She is happy"

**G) Age:**
- "I am 25 years old"`
      },
      {
        title: '3. Negative Form',
        content: `To form negative sentences with "to be", simply add "not" after the verb.

**Structure:** Subject + TO BE + NOT + Complement

**Full forms and contractions:**

| Full Form | Contraction 1 | Contraction 2 |
|-----------|---------------|---------------|
| I am not | I'm not | — |
| You are not | You're not | You aren't |
| He is not | He's not | He isn't |
| She is not | She's not | She isn't |
| It is not | It's not | It isn't |
| We are not | We're not | We aren't |
| They are not | They're not | They aren't |

**Important note:** With "I am not", there is only one common contraction: "I'm not".`
      },
      {
        title: '4. Question Form',
        content: `To form questions with "to be", invert the order of subject and verb.

**Structure:** TO BE + Subject + Complement + ?

**Inversion examples:**
- "She is a doctor" → "Is she a doctor?"
- "They are at home" → "Are they at home?"

**WH-Questions:**
- **What** is your name?
- **Where** are you from?
- **Who** is that man?
- **Why** are you sad?
- **How** are you?

**Short answers:**
- "Are you a student?" — "Yes, I am." / "No, I'm not."
- "Is she from Mexico?" — "Yes, she is." / "No, she isn't."`
      },
      {
        title: '5. The Verb TO BE in the Past',
        content: `The verb "to be" has two forms in the past: WAS and WERE.

**Past Tense Conjugation:**

| Subject | Verb TO BE (Past) |
|---------|-------------------|
| I | was |
| You | were |
| He/She/It | was |
| We | were |
| They | were |

**Rule:** I/he/she/it use WAS. You/we/they use WERE.

**Negative in the past:**
- I was not (wasn't)
- You were not (weren't)

**Questions in the past:**
- Was I late?
- Were you at the party?`
      }
    ],
    examples: [
      { english: "I am a student.", context: "Indicating profession or occupation", explanation: "Use of AM with the pronoun I." },
      { english: "She is very intelligent.", context: "Describing a characteristic", explanation: "Use of IS with she to describe a trait." },
      { english: "They are not at home.", context: "Indicating location", explanation: "Negative form with ARE NOT." },
      { english: "Is he your brother?", context: "Asking about relationships", explanation: "Question form by inverting IS and the subject." },
      { english: "We were tired yesterday.", context: "Describing a past state", explanation: "Use of WERE in the past with we." },
      { english: "The weather is beautiful today.", context: "Describing conditions", explanation: "Use of IS with it (implicit) to describe weather." }
    ],
    commonMistakes: [
      { mistake: "She are a teacher.", correction: "She is a teacher.", explanation: "With she (third person singular) we always use IS, never ARE." },
      { mistake: "I is happy.", correction: "I am happy.", explanation: "With I we always use AM. It's the only correct form." },
      { mistake: "They is students.", correction: "They are students.", explanation: "With they (third person plural) we always use ARE." },
      { mistake: "Is you ready?", correction: "Are you ready?", explanation: "With you we always use ARE, even in questions." },
      { mistake: "He am from Spain.", correction: "He is from Spain.", explanation: "AM is only used with I. He requires IS." }
    ],
    practiceExercises: [
      { question: "Complete: My mother ___ a nurse.", answer: "is", hint: "Mother = she (third person singular)" },
      { question: "Complete: ___ you from Italy?", answer: "Are", hint: "You always goes with ARE" },
      { question: "Complete: We ___ not ready yet.", answer: "are", hint: "We always goes with ARE" },
      { question: "Complete: I ___ 25 years old.", answer: "am", hint: "I always goes with AM" }
    ],
    summary: `The verb "to be" is the foundation of English. Remember: I→AM, He/She/It→IS, You/We/They→ARE. To negate, add NOT after the verb. To ask questions, invert the order. In the past: I/He/She/It→WAS, You/We/They→WERE.`,
    relatedArticles: ['present-simple', 'articles-a-an-the', 'possessive-adjectives']
  },

  // ==================== PRESENT SIMPLE ====================
  {
    id: 'present-simple',
    title: 'Present Simple: The Present Tense in English',
    subtitle: 'How to express routines, habits, and universal truths',
    level: 'A1',
    category: 'grammar',
    tags: ['present-simple', 'tenses', 'verbs', 'third-person', 'negative', 'questions'],
    estimatedReadTime: 15,
    introduction: `The Present Simple is one of the most commonly used verb tenses in English. It is used to describe habitual actions, daily routines, general facts, and universal truths. Unlike some languages where verb conjugations change significantly according to the person, in English the Present Simple maintains the same form for almost all subjects, with the important exception of the third person singular.`,
    sections: [
      {
        title: '1. Formation of the Present Simple',
        content: `The Present Simple is formed using the verb in its base form.

**Third Person Rule (He/She/It):**
When the subject is he, she, or it, the verb adds -S or -ES.

**Basic conjugation with "work":**

| Subject | Verb |
|---------|------|
| I | work |
| You | work |
| He/She/It | works |
| We | work |
| They | work |

**Rules for adding -S/-ES:**

1. **General rule:** Add -S
   - work → works, play → plays

2. **Verbs ending in -s, -ss, -sh, -ch, -x, -o:** Add -ES
   - pass → passes, wash → washes, watch → watches, go → goes

3. **Verbs ending in consonant + Y:** Change Y to -IES
   - study → studies, carry → carries

4. **Verbs ending in vowel + Y:** Just add -S
   - play → plays, stay → stays`
      },
      {
        title: '2. Uses of the Present Simple',
        content: `**A) Routines and Habits:**
- "I wake up at 7 AM every day."
- "She goes to the gym three times a week."

**B) General Facts and Universal Truths:**
- "Water boils at 100 degrees Celsius."
- "The sun rises in the east."

**C) Permanent States:**
- "She lives in London."
- "He works for a bank."

**D) Schedules and Timetables:**
- "The train leaves at 9 PM."
- "The movie starts at 8 o'clock."

**Key words:** always, usually, often, sometimes, rarely, never, every day/week/month`
      },
      {
        title: '3. Negative Form',
        content: `We use the auxiliaries DO and DOES.

**Structure:** Subject + DO/DOES + NOT + Base verb

**Important rule:** With DOES, the main verb does NOT take -S.

| Subject | Negation |
|---------|----------|
| I/You/We/They | don't + verb |
| He/She/It | doesn't + verb |

**Examples:**
- ✓ "She doesn't like coffee."
- ✗ "She doesn't likes coffee." ← INCORRECT`
      },
      {
        title: '4. Question Form',
        content: `**Structure:** DO/DOES + Subject + Base verb + ?

| Subject | Question |
|---------|----------|
| I/You/We/They | Do + subject + verb? |
| He/She/It | Does + subject + verb? |

**Examples:**
- "Does she speak French?"
- "Do you live near here?"

**Short answers:**
- "Do you like pizza?" — "Yes, I do." / "No, I don't."
- "Does he work here?" — "Yes, he does." / "No, he doesn't."

**WH-Questions:**
- "Where do you work?"
- "What does she study?"`
      },
      {
        title: '5. Adverbs of Frequency',
        content: `**Frequency order:**
- always — 100%
- usually — 80%
- often — 70%
- sometimes — 50%
- rarely/seldom — 20%
- never — 0%

**Position:** BEFORE the main verb, AFTER the verb TO BE.

**With regular verbs:**
- "I always drink coffee in the morning." ✓
- "She never eats breakfast." ✓

**With TO BE:**
- "She is always happy." ✓
- "They are never late." ✓`
      }
    ],
    examples: [
      { english: "I study English every day.", context: "Expressing a routine", explanation: "Verb in base form with I." },
      { english: "She works in a hospital.", context: "Describing occupation", explanation: "We add -S to the verb with she." },
      { english: "He doesn't like vegetables.", context: "Expressing dislikes", explanation: "Negative with DOESN'T + base verb." },
      { english: "Do you speak Spanish?", context: "Asking about abilities", explanation: "Question with DO + subject + base verb." },
      { english: "The class starts at 9 AM.", context: "Fixed schedule", explanation: "Present Simple for timetables." },
      { english: "Water freezes at 0°C.", context: "Scientific fact", explanation: "Universal truth/scientific fact." }
    ],
    commonMistakes: [
      { mistake: "She work in an office.", correction: "She works in an office.", explanation: "With he/she/it, the verb ALWAYS takes -S." },
      { mistake: "He don't like pizza.", correction: "He doesn't like pizza.", explanation: "With he/she/it we use DOESN'T, not DON'T." },
      { mistake: "Does she speaks English?", correction: "Does she speak English?", explanation: "After DOES, the verb has no -S." },
      { mistake: "She studys every night.", correction: "She studies every night.", explanation: "Consonant + Y: change Y to -IES." }
    ],
    practiceExercises: [
      { question: "Complete: My sister ___ (watch) TV every evening.", answer: "watches", hint: "Sister = she, verb in -ch → add -ES" },
      { question: "Complete: ___ they live in Madrid?", answer: "Do", hint: "They uses DO in questions" },
      { question: "Complete: He ___ (not/understand) French.", answer: "doesn't understand", hint: "He uses DOESN'T + base verb" },
      { question: "Complete: The bank ___ (open) at 9 AM.", answer: "opens", hint: "The bank = it → add -S" }
    ],
    summary: `The Present Simple expresses routines, facts, and universal truths. With he/she/it, add -S/-ES to the verb. To negate: don't/doesn't + base verb. To ask: Do/Does + subject + base verb. After does/doesn't, the verb NEVER takes -S.`,
    relatedArticles: ['verb-to-be', 'present-continuous', 'adverbs-of-frequency']
  },

  // ==================== PRESENT CONTINUOUS ====================
  {
    id: 'present-continuous',
    title: 'Present Continuous: Actions in Progress',
    subtitle: 'How to express what is happening right now',
    level: 'A1',
    category: 'grammar',
    tags: ['present-continuous', 'tenses', 'verbs', 'progressive'],
    estimatedReadTime: 12,
    introduction: `The Present Continuous (also called Present Progressive) is the verb tense we use to describe actions that are happening at this very moment or during a temporary period around the present. It is one of the most useful and frequent tenses in everyday English.`,
    sections: [
      {
        title: '1. Formation of the Present Continuous',
        content: `**Structure:** Subject + TO BE (am/is/are) + Verb + -ING

| Subject | TO BE | Verb + ING |
|---------|-------|------------|
| I | am | working |
| You | are | working |
| He/She/It | is | working |
| We | are | working |
| They | are | working |

**Rules for forming -ING:**

1. **General rule:** Add -ING
   - work → working, play → playing

2. **Verbs ending in -E:** Drop the E and add -ING
   - make → making, write → writing

3. **One-syllable verbs (CVC pattern):** Double the final consonant
   - run → running, sit → sitting, stop → stopping

4. **Verbs ending in -IE:** Change IE to Y + ING
   - lie → lying, die → dying`
      },
      {
        title: '2. Uses of the Present Continuous',
        content: `**A) Actions Happening Right Now:**
- "I am reading a book."
- "She is cooking dinner."

**B) Temporary Actions:**
- "He is living with his parents this month."
- "I am working on a special project."

**C) Confirmed Future Plans:**
- "We are meeting tomorrow at 3 PM."
- "I am flying to Paris next week."

**D) Changes and Trends:**
- "The weather is getting colder."
- "Technology is changing rapidly."

**Key words:** now, right now, at the moment, currently, this week/month`
      },
      {
        title: '3. Negative Form',
        content: `**Structure:** Subject + TO BE + NOT + Verb + -ING

**Examples:**
- I am not working → I'm not working
- She is not sleeping → She isn't sleeping / She's not sleeping
- They are not listening → They aren't listening / They're not listening

**Common contractions:**
- I'm not
- He isn't / He's not
- They aren't / They're not`
      },
      {
        title: '4. Question Form',
        content: `**Structure:** TO BE + Subject + Verb + -ING + ?

**Examples:**
- "Are you working?"
- "Is she coming to the party?"
- "What are they doing?"

**Short answers:**
- "Are you studying?" — "Yes, I am." / "No, I'm not."
- "Is he sleeping?" — "Yes, he is." / "No, he isn't."`
      },
      {
        title: '5. Stative Verbs (Verbs that do NOT use -ING)',
        content: `Some verbs are NOT normally used in the continuous form because they express states, not actions:

**Verbs of thought:**
- know, understand, believe, think (when it means "believe"), remember, forget

**Verbs of emotion:**
- love, hate, like, want, need, prefer

**Verbs of perception:**
- see, hear, smell, taste (involuntary perception)

**Verbs of possession:**
- have (possession), own, belong, possess

**Examples:**
- ✓ "I know the answer."
- ✗ "I am knowing the answer." ← INCORRECT

- ✓ "She loves chocolate."
- ✗ "She is loving chocolate." ← INCORRECT`
      }
    ],
    examples: [
      { english: "I am studying English now.", context: "Action in progress", explanation: "Action happening right now." },
      { english: "She is talking on the phone.", context: "Current action", explanation: "Action occurring at this moment." },
      { english: "We are not watching TV.", context: "Negative form", explanation: "Negative with are not + -ing." },
      { english: "Are they coming to dinner?", context: "Future plans", explanation: "Question about confirmed future plans." },
      { english: "The children are playing in the garden.", context: "Action in progress", explanation: "Ongoing action." },
      { english: "It is raining heavily.", context: "Weather description", explanation: "Describing current weather." }
    ],
    commonMistakes: [
      { mistake: "She is work now.", correction: "She is working now.", explanation: "After TO BE, the verb ALWAYS takes -ING in Present Continuous." },
      { mistake: "I am knowing the answer.", correction: "I know the answer.", explanation: "'Know' is a stative verb and doesn't use the continuous form." },
      { mistake: "He is runing fast.", correction: "He is running fast.", explanation: "CVC one-syllable verbs double the consonant: run → running." },
      { mistake: "She is studing.", correction: "She is studying.", explanation: "Keep the Y: study → studying (the Y does NOT change with -ING)." }
    ],
    practiceExercises: [
      { question: "Complete: They ___ (play) football now.", answer: "are playing", hint: "They + are + verb-ing" },
      { question: "Complete: ___ she ___ (sleep)?", answer: "Is / sleeping", hint: "Is + subject + verb-ing" },
      { question: "Complete: I ___ (not/watch) TV right now.", answer: "am not watching", hint: "I + am not + verb-ing" },
      { question: "Complete: What ___ you ___ (do)?", answer: "are / doing", hint: "Are + you + verb-ing" }
    ],
    summary: `The Present Continuous (am/is/are + verb-ing) expresses actions in progress now or confirmed future plans. Remember the rules for forming -ING and that stative verbs (know, love, want, etc.) do NOT use the continuous form.`,
    relatedArticles: ['present-simple', 'present-simple-vs-continuous', 'stative-verbs']
  },

  // ==================== ARTICLES A/AN/THE ====================
  {
    id: 'articles-a-an-the',
    title: 'Articles in English: A, AN, and THE',
    subtitle: 'When to use each article correctly',
    level: 'A1',
    category: 'grammar',
    tags: ['articles', 'a', 'an', 'the', 'determiners'],
    estimatedReadTime: 10,
    introduction: `Articles in English are small but fundamental words that precede nouns. Although they seem simple, their correct use requires understanding specific rules. In English there are two types of articles: the indefinite article (a/an) and the definite article (the).`,
    sections: [
      {
        title: '1. The Indefinite Article: A vs AN',
        content: `**A** is used before words that begin with a CONSONANT SOUND.
**AN** is used before words that begin with a VOWEL SOUND.

**Important:** What matters is the SOUND, not the letter.

**Examples with A (consonant sound):**
- a book, a car, a dog, a house
- a university (sounds like /juː/, consonant)
- a European country (sounds like /juː/, consonant)
- a one-way street (sounds like /wʌn/, consonant)

**Examples with AN (vowel sound):**
- an apple, an elephant, an idea, an orange, an umbrella
- an hour (the H is silent, sounds like /aʊr/)
- an honest person (the H is silent)
- an MBA (sounds like /em/, vowel)`
      },
      {
        title: '2. Use of the Indefinite Article (A/AN)',
        content: `**A) First mention of something:**
- "I saw a dog in the park."

**B) Professions:**
- "She is a doctor."
- "He is an engineer."

**C) With numbers and quantities:**
- "a hundred, a thousand, a million"
- "once a week, twice a day"

**D) With "what" in exclamations:**
- "What a beautiful day!"
- "What an amazing idea!"`
      },
      {
        title: '3. The Definite Article: THE',
        content: `**THE** is used when we talk about something specific or already known.

**A) Something previously mentioned:**
- "I saw a dog. The dog was very friendly."

**B) Something unique in its context:**
- "the sun, the moon, the Earth, the sky"
- "the President, the government"

**C) Superlatives:**
- "the best, the most beautiful, the tallest"

**D) Ordinals:**
- "the first, the second, the last"

**E) Musical instruments:**
- "play the piano, the guitar, the violin"

**F) Specific places:**
- "the Eiffel Tower, the Amazon, the United States"`
      },
      {
        title: '4. When NOT to Use an Article',
        content: `**A) Plural or uncountable nouns in general:**
- "Dogs are loyal." — in general
- "Water is essential." — in general

**B) Proper nouns:**
- "John lives in Paris."

**C) Meals:**
- "I had breakfast at 8 AM."

**D) Sports and games:**
- "I play tennis."

**E) Languages and subjects:**
- "She speaks French."
- "I study mathematics."`
      }
    ],
    examples: [
      { english: "I need an umbrella.", context: "Before vowel sound", explanation: "AN because 'umbrella' starts with vowel sound /ʌ/." },
      { english: "She is a university student.", context: "Before consonant sound", explanation: "A because 'university' starts with sound /juː/ (consonant)." },
      { english: "The book on the table is mine.", context: "Specific item", explanation: "THE because it's a specific book (the one on the table)." },
      { english: "He waited for an hour.", context: "Silent H", explanation: "AN because the H in 'hour' is silent, sounds /aʊr/." },
      { english: "I love music.", context: "General statement", explanation: "No article because we're talking about music in general." }
    ],
    commonMistakes: [
      { mistake: "She is doctor.", correction: "She is a doctor.", explanation: "Professions ALWAYS take an indefinite article in English." },
      { mistake: "I saw a elephant.", correction: "I saw an elephant.", explanation: "'Elephant' starts with a vowel sound, requires AN." },
      { mistake: "I bought a umbrella.", correction: "I bought an umbrella.", explanation: "'Umbrella' starts with vowel sound /ʌ/, requires AN." },
      { mistake: "He plays the tennis.", correction: "He plays tennis.", explanation: "Sports do NOT take an article." }
    ],
    practiceExercises: [
      { question: "Complete: She is ___ honest person.", answer: "an", hint: "The H in 'honest' is silent" },
      { question: "Complete: I need ___ new computer.", answer: "a", hint: "'New' starts with a consonant sound" },
      { question: "Complete: ___ sun is very bright today.", answer: "The", hint: "The sun is unique" },
      { question: "Complete: He is ___ European.", answer: "a", hint: "'European' starts with sound /juː/" }
    ],
    summary: `A is used before consonant sounds, AN before vowel sounds. THE is used for specific or unique things. Remember: what matters is the initial SOUND, not the letter. Professions always take A/AN.`,
    relatedArticles: ['nouns-countable-uncountable', 'demonstratives', 'possessive-adjectives']
  },

  // ==================== POSSESSIVE ADJECTIVES ====================
  {
    id: 'possessive-adjectives',
    title: 'Possessive Adjectives: My, Your, His, Her...',
    subtitle: 'How to indicate possession in English',
    level: 'A1',
    category: 'grammar',
    tags: ['possessives', 'adjectives', 'pronouns', 'my', 'your', 'his', 'her'],
    estimatedReadTime: 8,
    introduction: `Possessive adjectives in English indicate who something belongs to. Unlike some languages where possessives agree in gender and number with what is possessed, in English the possessive agrees with the possessor.`,
    sections: [
      {
        title: '1. The Possessive Adjectives',
        content: `| Personal Pronoun | Possessive Adjective |
|------------------|---------------------|
| I | my |
| You | your |
| He | his |
| She | her |
| It | its |
| We | our |
| They | their |

**Fundamental rule:** The possessive depends on the POSSESSOR, not what is possessed.`
      },
      {
        title: '2. Correct Usage',
        content: `**A) Always go BEFORE the noun:**
- "my book"
- "her car"
- "their house"

**B) Do not change with gender or number of what is possessed:**
- "his book" / "his books"
- "her car" / "her cars"

**C) Difference between HIS and HER:**
- "John loves his mother." (his = belonging to him)
- "Mary loves her mother." (her = belonging to her)`
      },
      {
        title: '3. ITS vs IT\'S',
        content: `**ITS** = possessive (belonging to it)
**IT'S** = contraction of "it is" or "it has"

**Examples:**
- "The dog wagged its tail."
- "It's raining outside." (It is)

**Rule:** Possessives NEVER have an apostrophe.`
      }
    ],
    examples: [
      { english: "This is my house.", context: "Indicating ownership", explanation: "MY to indicate the house belongs to me (I)." },
      { english: "She loves her children.", context: "Family relationships", explanation: "HER because the possessor is SHE." },
      { english: "They forgot their keys.", context: "Personal belongings", explanation: "THEIR because the possessor is THEY." },
      { english: "The cat licked its paw.", context: "Animal possession", explanation: "ITS because the possessor is IT (the cat)." }
    ],
    commonMistakes: [
      { mistake: "She loves she children.", correction: "She loves her children.", explanation: "Use HER (possessive), not SHE (subject pronoun)." },
      { mistake: "John forgot her keys.", correction: "John forgot his keys.", explanation: "John is male, use HIS, not HER." },
      { mistake: "The dog wagged it's tail.", correction: "The dog wagged its tail.", explanation: "ITS (possessive) has no apostrophe." }
    ],
    practiceExercises: [
      { question: "Complete: Mary loves ___ brother.", answer: "her", hint: "Mary = she → her" },
      { question: "Complete: We need ___ passports.", answer: "our", hint: "We → our" },
      { question: "Complete: The bird built ___ nest.", answer: "its", hint: "The bird = it → its" },
      { question: "Complete: Tom and Lisa sold ___ car.", answer: "their", hint: "Tom and Lisa = they → their" }
    ],
    summary: `Possessive adjectives (my, your, his, her, its, our, their) indicate belonging and depend on the POSSESSOR, not what is possessed. Remember: HIS for "belonging to him", HER for "belonging to her", ITS without apostrophe.`,
    relatedArticles: ['verb-to-be', 'personal-pronouns', 'possessive-pronouns']
  },

  // ==================== NUMBERS AND COLORS ====================
  {
    id: 'numbers-and-colors',
    title: 'Numbers and Colors in English',
    subtitle: 'Essential vocabulary for beginners',
    level: 'A1',
    category: 'vocabulary',
    tags: ['numbers', 'colors', 'basic-vocabulary', 'counting'],
    estimatedReadTime: 10,
    introduction: `Numbers and colors are part of the most basic and essential vocabulary in any language. Mastering them is fundamental to being able to communicate in everyday situations like shopping, describing objects, or giving personal information.`,
    sections: [
      {
        title: '1. Numbers from 1 to 20',
        content: `| Number | English | Approximate Pronunciation |
|--------|---------|--------------------------|
| 1 | one | /wʌn/ |
| 2 | two | /tuː/ |
| 3 | three | /θriː/ |
| 4 | four | /fɔːr/ |
| 5 | five | /faɪv/ |
| 6 | six | /sɪks/ |
| 7 | seven | /ˈsevən/ |
| 8 | eight | /eɪt/ |
| 9 | nine | /naɪn/ |
| 10 | ten | /ten/ |
| 11 | eleven | /ɪˈlevən/ |
| 12 | twelve | /twelv/ |
| 13 | thirteen | /θɜːˈtiːn/ |
| 14 | fourteen | /fɔːˈtiːn/ |
| 15 | fifteen | /fɪfˈtiːn/ |
| 16 | sixteen | /sɪksˈtiːn/ |
| 17 | seventeen | /sevənˈtiːn/ |
| 18 | eighteen | /eɪˈtiːn/ |
| 19 | nineteen | /naɪnˈtiːn/ |
| 20 | twenty | /ˈtwenti/ |`
      },
      {
        title: '2. Numbers from 20 to 100',
        content: `**Tens:**
| Number | English |
|--------|---------|
| 20 | twenty |
| 30 | thirty |
| 40 | forty |
| 50 | fifty |
| 60 | sixty |
| 70 | seventy |
| 80 | eighty |
| 90 | ninety |
| 100 | one hundred |

**Formation of compound numbers:**
- 21 = twenty-one
- 35 = thirty-five
- 47 = forty-seven
- 99 = ninety-nine

**Note:** Use a hyphen (-) between the tens and the units.`
      },
      {
        title: '3. Basic Colors',
        content: `| Color | Example Usage |
|-------|---------------|
| red | a red car |
| blue | a blue sky |
| green | green grass |
| yellow | a yellow flower |
| orange | an orange fruit |
| purple | purple grapes |
| pink | a pink dress |
| black | a black cat |
| white | white snow |
| gray/grey | gray clouds |
| brown | brown eyes |

**Note:** "Gray" is American spelling, "grey" is British.`
      },
      {
        title: '4. Using Colors in Sentences',
        content: `**Colors go BEFORE the noun:**
- "a blue car"
- "the red apple"
- "her green dress"

**With the verb TO BE:**
- "The sky is blue."
- "My favorite color is red."
- "Her eyes are brown."

**Asking about colors:**
- "What color is it?"
- "What's your favorite color?"`
      }
    ],
    examples: [
      { english: "I have two brothers.", context: "Counting family members", explanation: "Two = 2" },
      { english: "She is twenty-five years old.", context: "Stating age", explanation: "Twenty-five = 25, with hyphen" },
      { english: "I want the blue one.", context: "Choosing by color", explanation: "Blue = the color" },
      { english: "There are fifteen students in the class.", context: "Counting", explanation: "Fifteen = 15" },
      { english: "My car is black and white.", context: "Describing colors", explanation: "Describing colors with 'and'" }
    ],
    commonMistakes: [
      { mistake: "fourty", correction: "forty", explanation: "Forty is spelled without the U from four." },
      { mistake: "a car blue", correction: "a blue car", explanation: "The color goes BEFORE the noun in English." },
      { mistake: "fiveteen", correction: "fifteen", explanation: "Fifteen, not fiveteen." }
    ],
    practiceExercises: [
      { question: "Write the number: 47", answer: "forty-seven", hint: "Forty + seven with hyphen" },
      { question: "Complete: The grass is ___.", answer: "green", hint: "Color of grass" },
      { question: "Write the number: 83", answer: "eighty-three", hint: "Eighty + three" },
      { question: "Complete: I want a ___ dress.", answer: "red/blue/green (any color)", hint: "Any color" }
    ],
    summary: `Numbers in English follow patterns: 1-12 are unique, 13-19 end in -teen, tens end in -ty. Colors go BEFORE the noun. Remember: forty (no U), fifteen (not fiveteen).`,
    relatedArticles: ['verb-to-be', 'articles-a-an-the', 'basic-adjectives']
  },

  // =====================================================================
  // LEVEL A2 - ELEMENTARY
  // =====================================================================

  // ==================== PAST SIMPLE ====================
  {
    id: 'past-simple',
    title: 'Past Simple: The Simple Past in English',
    subtitle: 'How to talk about completed actions in the past',
    level: 'A2',
    category: 'grammar',
    tags: ['past-simple', 'tenses', 'verbs', 'regular', 'irregular'],
    estimatedReadTime: 15,
    introduction: `The Past Simple is the verb tense we use to talk about actions that occurred and finished at a specific moment in the past. It is one of the most important tenses for narrating experiences, telling stories, and talking about past events.`,
    sections: [
      {
        title: '1. Regular Verbs',
        content: `Regular verbs form the past by adding **-ED** to the base verb.

**Spelling rules:**

1. **General rule:** Add -ED
   - work → worked, play → played, clean → cleaned

2. **Verbs ending in -E:** Just add -D
   - live → lived, love → loved, dance → danced

3. **Verbs ending in consonant + Y:** Change Y to -IED
   - study → studied, carry → carried, try → tried

4. **Verbs ending in vowel + Y:** Just add -ED
   - play → played, enjoy → enjoyed, stay → stayed

5. **One-syllable CVC verbs:** Double the final consonant
   - stop → stopped, plan → planned, drop → dropped`
      },
      {
        title: '2. Common Irregular Verbs',
        content: `Irregular verbs do NOT follow a fixed pattern. You must memorize them.

| Base Form | Past Simple | Meaning |
|-----------|-------------|---------|
| be | was/were | be |
| have | had | have |
| do | did | do |
| go | went | go |
| come | came | come |
| see | saw | see |
| take | took | take |
| get | got | get |
| make | made | make |
| know | knew | know |
| think | thought | think |
| say | said | say |
| give | gave | give |
| find | found | find |
| tell | told | tell |
| become | became | become |
| leave | left | leave |
| feel | felt | feel |
| put | put | put |
| bring | brought | bring |
| begin | began | begin |
| write | wrote | write |
| run | ran | run |
| read | read | read (pronunciation changes) |
| eat | ate | eat |
| drink | drank | drink |
| speak | spoke | speak |
| hear | heard | hear |
| meet | met | meet |
| buy | bought | buy |`
      },
      {
        title: '3. Negative Form',
        content: `**Structure:** Subject + DID NOT (DIDN'T) + Base verb

**Important:** The verb returns to its base form.

**Examples:**
- ✓ "I didn't go to the party."
- ✗ "I didn't went to the party." ← INCORRECT

- ✓ "She didn't like the movie."
- ✗ "She didn't liked the movie." ← INCORRECT

**Note:** DID absorbs the past, so the main verb stays in the base form.`
      },
      {
        title: '4. Question Form',
        content: `**Structure:** DID + Subject + Base verb + ?

**Examples:**
- "Did you see the movie?"
- "Did she call you?"
- "What did he say?"
- "Where did they go?"

**Short answers:**
- "Did you like it?" — "Yes, I did." / "No, I didn't."

**WH-Questions:**
- "When did you arrive?"
- "Why did she leave?"
- "How did you know?"`
      },
      {
        title: '5. Time Expressions for Past Simple',
        content: `**Common expressions:**
- yesterday
- last night / last week / last month / last year
- ago (two days ago, a week ago, three years ago)
- in 2019 / in the 1990s
- when I was young
- on Monday / on July 4th

**Examples:**
- "I saw him yesterday."
- "She arrived two hours ago."
- "They got married in 2015."
- "We met when we were students."`
      }
    ],
    examples: [
      { english: "I visited my grandmother yesterday.", context: "Past action", explanation: "Regular verb: visit → visited." },
      { english: "She didn't come to the party.", context: "Negative", explanation: "Negative with DIDN'T + base verb." },
      { english: "Did you watch the game?", context: "Question", explanation: "Question with DID + base verb." },
      { english: "They went to Paris last summer.", context: "Travel", explanation: "Irregular: go → went." },
      { english: "He bought a new car two weeks ago.", context: "Purchase", explanation: "Irregular: buy → bought." },
      { english: "I lived in London for 5 years.", context: "Duration", explanation: "Regular verb for a past period that has ended." }
    ],
    commonMistakes: [
      { mistake: "I goed to the store.", correction: "I went to the store.", explanation: "Go is irregular: go → went." },
      { mistake: "She didn't went home.", correction: "She didn't go home.", explanation: "After DIDN'T, use the base verb." },
      { mistake: "Did you saw it?", correction: "Did you see it?", explanation: "After DID, use the base verb." },
      { mistake: "I writed a letter.", correction: "I wrote a letter.", explanation: "Write is irregular: write → wrote." }
    ],
    practiceExercises: [
      { question: "Complete: I ___ (eat) pizza yesterday.", answer: "ate", hint: "Eat is irregular" },
      { question: "Complete: ___ you ___ (see) the movie?", answer: "Did / see", hint: "DID + base verb" },
      { question: "Complete: She ___ (not/like) the food.", answer: "didn't like", hint: "DIDN'T + base verb" },
      { question: "Complete: They ___ (arrive) at 8 PM.", answer: "arrived", hint: "Arrive is regular: + d" }
    ],
    summary: `Past Simple expresses completed actions in the past. Regular verbs: +ED. Irregular verbs: must be memorized. Negative: didn't + base verb. Question: Did + subject + base verb. After DID/DIDN'T, always use the BASE verb.`,
    relatedArticles: ['present-perfect-basic', 'past-continuous', 'irregular-verbs-list']
  },

  // ==================== PRESENT PERFECT BASIC ====================
  {
    id: 'present-perfect-basic',
    title: 'Present Perfect: Experiences and Recent Actions',
    subtitle: 'Connecting the past with the present',
    level: 'A2',
    category: 'grammar',
    tags: ['present-perfect', 'tenses', 'have-has', 'past-participle'],
    estimatedReadTime: 15,
    introduction: `The Present Perfect is a verb tense that connects the past with the present. It is used to talk about experiences, recent actions, and situations that started in the past and continue until now. Understanding when to use it (instead of the Past Simple) is one of the keys to mastering intermediate English.`,
    sections: [
      {
        title: '1. Structure of the Present Perfect',
        content: `**Structure:** Subject + HAVE/HAS + Past Participle

| Subject | Auxiliary | Past Participle |
|---------|-----------|-----------------|
| I | have | worked |
| You | have | worked |
| He/She/It | has | worked |
| We | have | worked |
| They | have | worked |

**Contractions:**
- I have → I've
- She has → She's
- We have → We've

**Past Participle:**
- Regular verbs: same as Past Simple (worked, played, studied)
- Irregular verbs: third column (go → went → **gone**, see → saw → **seen**)`
      },
      {
        title: '2. Uses of the Present Perfect',
        content: `**A) Life experiences (without specific time):**
- "I have visited Paris." (at some point in my life)
- "Have you ever tried sushi?"
- "She has never flown in a plane."

**B) Recent actions with present relevance:**
- "I have lost my keys." (so I can't get in now)
- "She has broken her leg." (so she can't walk)
- "He has just arrived." (he's here now)

**C) Situations that continue:**
- "I have lived here for 5 years." (I still live here)
- "She has worked here since 2019." (she still works here)

**D) With this week/month/year (unfinished period):**
- "I have seen three movies this week." (the week isn't over)`
      },
      {
        title: '3. Key Words',
        content: `**Words that indicate Present Perfect:**

**EVER / NEVER (experiences):**
- "Have you ever been to Japan?"
- "I have never seen snow."

**ALREADY (before expected):**
- "I have already finished my homework."

**YET (in negatives and questions):**
- "She hasn't arrived yet."
- "Have you finished yet?"

**JUST (very recently):**
- "He has just left." (a moment ago)

**FOR / SINCE (duration):**
- "I have known him for 10 years."
- "She has lived here since 2015."`
      },
      {
        title: '4. Negative and Question Forms',
        content: `**Negative:**
Subject + HAVE/HAS + NOT + Past Participle

- "I haven't seen that movie."
- "She hasn't called me."

**Questions:**
HAVE/HAS + Subject + Past Participle + ?

- "Have you finished?"
- "Has she arrived?"
- "What have you done?"

**Short answers:**
- "Have you eaten?" — "Yes, I have." / "No, I haven't."
- "Has she called?" — "Yes, she has." / "No, she hasn't."`
      },
      {
        title: '5. FOR vs SINCE',
        content: `**FOR + duration of time:**
- for 5 minutes
- for two hours
- for three days
- for a week
- for months
- for years

**SINCE + starting point:**
- since Monday
- since January
- since 2019
- since I was a child
- since we met

**Examples:**
- "I have lived here **for** 10 years."
- "I have lived here **since** 2014."
- "She has worked here **for** 6 months."
- "She has worked here **since** July."`
      }
    ],
    examples: [
      { english: "I have visited London twice.", context: "Life experience", explanation: "Experience without specific time." },
      { english: "She has just finished her homework.", context: "Recent action", explanation: "JUST for something very recent." },
      { english: "They have lived here since 2010.", context: "Continuing situation", explanation: "SINCE + starting point." },
      { english: "Have you ever eaten sushi?", context: "Asking about experience", explanation: "EVER in questions about experiences." },
      { english: "He hasn't called yet.", context: "Negative with yet", explanation: "YET in negatives, at the end." },
      { english: "I have known her for 20 years.", context: "Duration", explanation: "FOR + duration of time." }
    ],
    commonMistakes: [
      { mistake: "I have went to Paris.", correction: "I have gone to Paris.", explanation: "Use the PARTICIPLE (gone), not the past simple (went)." },
      { mistake: "She has see the movie.", correction: "She has seen the movie.", explanation: "Use the PARTICIPLE (seen), not the base form (see)." },
      { mistake: "I know her since 2010.", correction: "I have known her since 2010.", explanation: "With SINCE, use Present Perfect, not Present Simple." },
      { mistake: "I have finished yesterday.", correction: "I finished yesterday.", explanation: "With specific time (yesterday), use Past Simple." }
    ],
    practiceExercises: [
      { question: "Complete: She ___ (never/try) Indian food.", answer: "has never tried", hint: "Has + never + participle" },
      { question: "Complete: ___ you ever ___ (be) to Italy?", answer: "Have / been", hint: "Have + you + ever + participle" },
      { question: "Complete: I ___ (live) here ___ 5 years.", answer: "have lived / for", hint: "For + duration" },
      { question: "Complete: He ___ (just/arrive).", answer: "has just arrived", hint: "Has + just + participle" }
    ],
    summary: `Present Perfect (have/has + participle) connects the past with the present. Uses: experiences (ever/never), recent actions (just), continuing situations (for/since). Do NOT use with specific past time (yesterday, last week).`,
    relatedArticles: ['past-simple', 'past-simple-vs-present-perfect', 'for-and-since']
  },

  // ==================== FUTURE WITH GOING TO ====================
  {
    id: 'future-going-to',
    title: 'Future with GOING TO: Plans and Intentions',
    subtitle: 'How to express future plans and predictions',
    level: 'A2',
    category: 'grammar',
    tags: ['future', 'going-to', 'plans', 'intentions', 'predictions'],
    estimatedReadTime: 10,
    introduction: `"Going to" is one of the most common ways to talk about the future in English. It is primarily used for plans that have already been decided and for predictions based on visible evidence.`,
    sections: [
      {
        title: '1. Structure',
        content: `**Structure:** Subject + TO BE + GOING TO + Base verb

| Subject | TO BE | GOING TO | Verb |
|---------|-------|----------|------|
| I | am | going to | study |
| You | are | going to | study |
| He/She/It | is | going to | study |
| We | are | going to | study |
| They | are | going to | study |

**Contractions:**
- I'm going to study
- She's going to travel
- We're going to eat`
      },
      {
        title: '2. Uses',
        content: `**A) Plans and Intentions (already decided):**
- "I'm going to study medicine next year." (I've decided)
- "She's going to buy a new car."
- "We're going to visit our parents this weekend."

**B) Predictions based on evidence:**
- "Look at those clouds! It's going to rain."
- "She's pregnant. She's going to have a baby."
- "He's driving too fast. He's going to have an accident."

**C) Inevitable events:**
- "The economy is going to get worse before it gets better."
- "You're going to love this movie."`
      },
      {
        title: '3. Negative and Question Forms',
        content: `**Negative:**
Subject + TO BE + NOT + GOING TO + Verb

- "I'm not going to work tomorrow."
- "She isn't going to come to the party."
- "They aren't going to accept the offer."

**Questions:**
TO BE + Subject + GOING TO + Verb + ?

- "Are you going to study tonight?"
- "Is she going to call him?"
- "What are they going to do?"

**Short answers:**
- "Are you going to help?" — "Yes, I am." / "No, I'm not."`
      },
      {
        title: '4. GOING TO vs WILL',
        content: `**GOING TO:**
- Plans already decided
- Predictions with evidence
- "I'm going to buy a new phone." (I've decided)
- "Look! It's going to rain." (I can see the clouds)

**WILL:**
- Spontaneous decisions
- Promises
- Predictions without evidence
- "I'll help you with that." (spontaneous)
- "Don't worry, I'll call you." (promise)
- "I think it will rain tomorrow." (opinion/prediction)`
      }
    ],
    examples: [
      { english: "I'm going to start a new job next month.", context: "Planned decision", explanation: "Plan already decided." },
      { english: "Look at the sky! It's going to storm.", context: "Prediction with evidence", explanation: "Evidence-based prediction." },
      { english: "She isn't going to accept the offer.", context: "Negative", explanation: "Negative with isn't + going to." },
      { english: "Are you going to study abroad?", context: "Question about plans", explanation: "Question about future plans." },
      { english: "They're going to have a baby.", context: "Inevitable future event", explanation: "Known future event." }
    ],
    commonMistakes: [
      { mistake: "I going to study.", correction: "I'm going to study.", explanation: "You need the verb TO BE before GOING TO." },
      { mistake: "She is going study.", correction: "She is going to study.", explanation: "You need TO before the main verb." },
      { mistake: "I'm going to going to the store.", correction: "I'm going to go to the store.", explanation: "Going to + base verb (go), not going." }
    ],
    practiceExercises: [
      { question: "Complete: Look at those clouds. It ___ (rain).", answer: "is going to rain", hint: "Evidence-based prediction" },
      { question: "Complete: ___ you ___ (travel) this summer?", answer: "Are / going to travel", hint: "Question structure" },
      { question: "Complete: I ___ (not/work) tomorrow.", answer: "am not going to work", hint: "Negative structure" },
      { question: "Complete: She ___ (visit) her grandmother next week.", answer: "is going to visit", hint: "Planned action" }
    ],
    summary: `Going to (am/is/are + going to + verb) is used for plans already decided and predictions based on evidence. For spontaneous decisions and promises, use WILL. Remember to include TO BE before GOING TO.`,
    relatedArticles: ['will-future', 'present-continuous-future', 'future-tenses-comparison']
  },

  // ==================== COMPARATIVES AND SUPERLATIVES ====================
  {
    id: 'comparatives-superlatives',
    title: 'Comparatives and Superlatives',
    subtitle: 'How to compare people, places, and things',
    level: 'A2',
    category: 'grammar',
    tags: ['comparatives', 'superlatives', 'adjectives', 'than'],
    estimatedReadTime: 12,
    introduction: `Comparatives and superlatives allow us to compare people, things, and places. The comparative is used to compare two elements, while the superlative indicates the extreme (the most/least) in a group.`,
    sections: [
      {
        title: '1. Short Adjectives (1-2 syllables)',
        content: `**Comparative:** adjective + -ER + THAN
**Superlative:** THE + adjective + -EST

| Adjective | Comparative | Superlative |
|-----------|-------------|-------------|
| tall | taller | the tallest |
| fast | faster | the fastest |
| cheap | cheaper | the cheapest |
| young | younger | the youngest |
| old | older | the oldest |

**Spelling rules:**
- Ending in -E: add -R / -ST (nice → nicer → nicest)
- Ending in consonant + Y: change Y to -IER / -IEST (happy → happier → happiest)
- CVC pattern: double final consonant (big → bigger → biggest)`
      },
      {
        title: '2. Long Adjectives (3+ syllables)',
        content: `**Comparative:** MORE + adjective + THAN
**Superlative:** THE MOST + adjective

| Adjective | Comparative | Superlative |
|-----------|-------------|-------------|
| expensive | more expensive | the most expensive |
| beautiful | more beautiful | the most beautiful |
| interesting | more interesting | the most interesting |
| comfortable | more comfortable | the most comfortable |
| intelligent | more intelligent | the most intelligent |

**Examples:**
- "This hotel is more expensive than that one."
- "This is the most beautiful city I've seen."`
      },
      {
        title: '3. Irregular Comparatives and Superlatives',
        content: `| Adjective | Comparative | Superlative |
|-----------|-------------|-------------|
| good | better | the best |
| bad | worse | the worst |
| far | farther/further | the farthest/furthest |
| little | less | the least |
| much/many | more | the most |

**Examples:**
- "She is the best student."
- "Today was worse than yesterday."`
      },
      {
        title: '4. Comparison Structures',
        content: `**Comparative + THAN:**
- "She is taller than her brother."
- "This book is more interesting than that one."

**THE + superlative + IN/OF:**
- "He is the tallest in the class."
- "This is the best restaurant in the city."
- "She is the youngest of the three sisters."

**AS + adjective + AS (equal comparison):**
- "She is as tall as her mother."
- "This isn't as expensive as I thought."`
      }
    ],
    examples: [
      { english: "My house is bigger than yours.", context: "Comparing sizes", explanation: "Big is CVC: bigger + than." },
      { english: "This is the most beautiful city I've ever seen.", context: "Superlative", explanation: "Beautiful is long: the most beautiful." },
      { english: "She is better at math than me.", context: "Comparing abilities", explanation: "Good → better (irregular)." },
      { english: "It's the cheapest option.", context: "Superlative", explanation: "Cheap → the cheapest." },
      { english: "This test is easier than the last one.", context: "Comparing difficulty", explanation: "Easy → easier (y → ier)." }
    ],
    commonMistakes: [
      { mistake: "She is more tall than him.", correction: "She is taller than him.", explanation: "Tall is short (1 syllable): taller, not more tall." },
      { mistake: "He is the most fastest.", correction: "He is the fastest.", explanation: "Don't combine most + -est. Use only one." },
      { mistake: "This is gooder.", correction: "This is better.", explanation: "Good is irregular: good → better → the best." },
      { mistake: "She is taller that me.", correction: "She is taller than me.", explanation: "After comparative, use THAN, not THAT." }
    ],
    practiceExercises: [
      { question: "Complete: This car is ___ (fast) than that one.", answer: "faster", hint: "Fast is short: + er" },
      { question: "Complete: She is ___ (intelligent) student in the class.", answer: "the most intelligent", hint: "Intelligent is long: the most + adj" },
      { question: "Complete: Today was ___ (bad) than yesterday.", answer: "worse", hint: "Bad is irregular" },
      { question: "Complete: He is ___ (happy) person I know.", answer: "the happiest", hint: "Happy: y → iest" }
    ],
    summary: `Short adjectives: -er (comparative), the -est (superlative). Long adjectives: more + adj (comparative), the most + adj (superlative). Irregulars: good-better-best, bad-worse-worst. Use THAN after comparatives.`,
    relatedArticles: ['adjectives-basic', 'as-as-comparison', 'modifiers-much-a-bit']
  },

  // ==================== COUNTABLE AND UNCOUNTABLE NOUNS ====================
  {
    id: 'countable-uncountable',
    title: 'Countable and Uncountable Nouns',
    subtitle: 'A/An, Some, Any, Much, Many, How much/How many',
    level: 'A2',
    category: 'grammar',
    tags: ['nouns', 'countable', 'uncountable', 'quantifiers', 'some', 'any'],
    estimatedReadTime: 12,
    introduction: `In English, nouns are divided into countable (which can be counted: one apple, two apples) and uncountable (which cannot be counted directly: water, rice, money). This distinction is crucial because it affects which words we use with each type of noun.`,
    sections: [
      {
        title: '1. Countable Nouns',
        content: `**Characteristics:**
- Can be counted: one, two, three...
- Have singular and plural forms
- Can use a/an in singular

**Examples:**
| Singular | Plural |
|----------|--------|
| a book | books |
| an apple | apples |
| a child | children |
| a person | people |

**Words we use:**
- a/an (singular)
- many (a lot of)
- few / a few (not many / some)
- several (more than two)
- How many? (asking about quantity)`
      },
      {
        title: '2. Uncountable Nouns',
        content: `**Characteristics:**
- Cannot be counted directly
- Do NOT have a plural form
- Do NOT use a/an

**Common categories:**
- **Liquids:** water, milk, coffee, tea, juice, oil
- **Foods without defined shape:** rice, bread, cheese, meat, sugar, salt
- **Materials:** wood, plastic, glass, paper, gold
- **Abstract concepts:** information, advice, news, work, homework, money
- **Others:** furniture, luggage, weather, traffic

**Words we use:**
- much (a lot of)
- little / a little (not much / some)
- How much? (asking about quantity)

**To count uncountables, use containers:**
- a glass of water
- a piece of advice
- a slice of bread`
      },
      {
        title: '3. SOME and ANY',
        content: `**SOME:** Affirmatives and offers/requests
- "I have some money."
- "Would you like some coffee?"
- "Can I have some water?"

**ANY:** Negatives and questions
- "I don't have any money."
- "Do you have any questions?"
- "Is there any milk?"

**ANY in affirmatives = "any/whichever":**
- "You can call me any time."
- "Any color is fine."`
      },
      {
        title: '4. MUCH, MANY, A LOT OF',
        content: `**MANY + plural countables:**
- "How many books do you have?"
- "I don't have many friends."

**MUCH + uncountables:**
- "How much money do you need?"
- "There isn't much time."

**A LOT OF / LOTS OF + both types:**
- "I have a lot of books."
- "She has a lot of money."

**General rule:**
- MUCH/MANY: mainly in negatives and questions
- A LOT OF: in affirmatives`
      },
      {
        title: '5. FEW/LITTLE vs A FEW/A LITTLE',
        content: `**FEW + countables (not many, negative):**
- "Few people came." (insufficient)

**A FEW + countables (some, positive):**
- "A few people came." (sufficient)

**LITTLE + uncountables (not much, negative):**
- "There's little hope." (insufficient)

**A LITTLE + uncountables (some, positive):**
- "There's a little hope." (sufficient)

**The difference:**
- Without "a" = negative, insufficient
- With "a" = positive, sufficient`
      }
    ],
    examples: [
      { english: "How many chairs do we need?", context: "Asking about countable", explanation: "Chairs is countable: How many." },
      { english: "How much water did you drink?", context: "Asking about uncountable", explanation: "Water is uncountable: How much." },
      { english: "I need some information.", context: "Uncountable noun", explanation: "Information is uncountable, not 'informations'." },
      { english: "There aren't many students today.", context: "Negative with countable", explanation: "Many + countable plural in negative." },
      { english: "Can I have a piece of cake?", context: "Counting uncountable", explanation: "Using 'a piece of' to count uncountables." }
    ],
    commonMistakes: [
      { mistake: "I need an advice.", correction: "I need some advice / a piece of advice.", explanation: "Advice is uncountable, doesn't use a/an." },
      { mistake: "How much books?", correction: "How many books?", explanation: "Books is countable: How many." },
      { mistake: "I don't have some money.", correction: "I don't have any money.", explanation: "In negatives, use ANY, not SOME." },
      { mistake: "I have much friends.", correction: "I have many friends.", explanation: "Friends is countable: many, not much." }
    ],
    practiceExercises: [
      { question: "Complete: How ___ milk do you want?", answer: "much", hint: "Milk is uncountable" },
      { question: "Complete: There are ___ apples in the basket.", answer: "some/many/a few", hint: "Apples is countable plural" },
      { question: "Complete: I don't have ___ money.", answer: "any/much", hint: "Negative + uncountable" },
      { question: "Complete: ___ people speak English.", answer: "Many/A lot of", hint: "People is countable" }
    ],
    summary: `Countables: a/an, many, few, how many. Uncountables: much, little, how much. Some in affirmatives/offers, any in negatives/questions. A lot of works with both. Few/little (negative) vs a few/a little (positive).`,
    relatedArticles: ['articles-a-an-the', 'there-is-there-are', 'quantifiers']
  },

  // =====================================================================
  // LEVEL B1 - INTERMEDIATE
  // =====================================================================

  // ==================== PRESENT SIMPLE VS PRESENT CONTINUOUS ====================
  {
    id: 'present-simple-vs-continuous',
    title: 'Present Simple vs Present Continuous',
    subtitle: 'When to use each present tense',
    level: 'B1',
    category: 'grammar',
    tags: ['present-simple', 'present-continuous', 'tenses', 'comparison'],
    estimatedReadTime: 12,
    introduction: `One of the most common difficulties for English learners is distinguishing when to use the Present Simple and when to use the Present Continuous. Although both describe the present, they have very different uses.`,
    sections: [
      {
        title: '1. Present Simple: Permanent Situations and Routines',
        content: `**Use Present Simple for:**

**A) Routines and habits:**
- "I wake up at 7 AM every day."
- "She goes to the gym three times a week."

**B) Facts and universal truths:**
- "Water boils at 100°C."
- "The Earth revolves around the Sun."

**C) Permanent states:**
- "He works for Google."
- "They live in Madrid."

**D) Fixed schedules:**
- "The train leaves at 9 PM."
- "The movie starts at 8 o'clock."

**Key words:** always, usually, often, sometimes, rarely, never, every day/week, on Mondays`
      },
      {
        title: '2. Present Continuous: Temporary Actions',
        content: `**Use Present Continuous for:**

**A) Actions happening right now:**
- "I'm reading a book right now."
- "She's cooking dinner at the moment."

**B) Temporary situations:**
- "He's living with his parents this month." (temporary)
- "I'm working on a special project." (not permanent)

**C) Changes and trends:**
- "The weather is getting warmer."
- "Prices are rising."

**D) Confirmed future plans:**
- "We're meeting tomorrow at 3 PM."
- "I'm flying to Paris next week."

**Key words:** now, right now, at the moment, currently, this week/month, today`
      },
      {
        title: '3. Direct Contrast',
        content: `**Permanent vs Temporary:**
- "I live in London." (permanent)
- "I'm living in London this year." (temporary)

- "She works for a bank." (permanent job)
- "She's working from home today." (temporary situation)

**Routine vs Action now:**
- "I drink coffee every morning." (routine)
- "I'm drinking coffee right now." (right now)

**Characteristic vs Temporary behavior:**
- "He's very quiet." (personality)
- "He's being very quiet today." (unusual behavior today)`
      },
      {
        title: '4. Stative Verbs: Verbs that do NOT use Continuous',
        content: `Some verbs express STATES, not actions, and are generally NOT used in continuous form:

**Verbs of thought:**
- know, understand, believe, think (when = believe), remember, forget, realize

**Verbs of emotion:**
- love, hate, like, want, need, prefer, wish

**Verbs of perception:**
- see, hear, smell, taste, feel (involuntary perception)

**Verbs of possession:**
- have (possession), own, belong, possess

**Others:**
- be, seem, appear, contain, consist, depend, mean

**Examples:**
- ✓ "I know the answer."
- ✗ "I'm knowing the answer."

- ✓ "She loves chocolate."
- ✗ "She's loving chocolate."`
      },
      {
        title: '5. Special Cases',
        content: `**THINK:**
- "I think it's a good idea." (opinion — not continuous)
- "I'm thinking about the problem." (mental process — continuous)

**HAVE:**
- "I have a car." (possession — not continuous)
- "I'm having dinner." (activity — continuous)
- "I'm having a great time." (experience — continuous)

**SEE:**
- "I see the mountain." (perception — not continuous)
- "I'm seeing the doctor tomorrow." (appointment — continuous)
- "I'm seeing someone." (relationship — continuous)

**ALWAYS + CONTINUOUS (complaint/irritation):**
- "She's always complaining!" (complaint, irritation)
- "He's always losing his keys!" (annoying repeated behavior)`
      }
    ],
    examples: [
      { english: "I work in an office. / I'm working from home today.", context: "Permanent vs temporary", explanation: "Permanent vs temporary." },
      { english: "She speaks three languages.", context: "Permanent ability", explanation: "Permanent ability: Simple." },
      { english: "He's being rude today.", context: "Temporary behavior", explanation: "Unusual temporary behavior: Continuous." },
      { english: "I'm thinking about changing jobs.", context: "Mental process", explanation: "Active mental process: Continuous." },
      { english: "The prices are increasing rapidly.", context: "Trend/change", explanation: "Trend/change: Continuous." }
    ],
    commonMistakes: [
      { mistake: "I'm knowing the answer.", correction: "I know the answer.", explanation: "Know is a stative verb, doesn't use continuous form." },
      { mistake: "She is working here since 2010.", correction: "She has worked here since 2010. / She works here.", explanation: "For permanent situations or with since, don't use Continuous." },
      { mistake: "I'm loving this song!", correction: "I love this song!", explanation: "Love is a stative verb. (Though 'I'm loving it' is famous from McDonald's, it's informal.)" }
    ],
    practiceExercises: [
      { question: "Complete: Water ___ (boil) at 100°C.", answer: "boils", hint: "Universal truth: Simple" },
      { question: "Complete: She ___ (work) on a project this week.", answer: "is working", hint: "Temporary situation: Continuous" },
      { question: "Complete: I ___ (not/understand) this problem.", answer: "don't understand", hint: "Understand is stative verb: Simple" },
      { question: "Complete: Look! It ___ (rain).", answer: "is raining", hint: "Right now: Continuous" }
    ],
    summary: `Simple: routines, facts, permanent states. Continuous: actions now, temporary situations, changes. Stative verbs (know, love, want) generally don't use Continuous. Some verbs change meaning depending on the tense.`,
    relatedArticles: ['present-simple', 'present-continuous', 'stative-verbs']
  },

  // ==================== PAST SIMPLE VS PRESENT PERFECT ====================
  {
    id: 'past-simple-vs-present-perfect',
    title: 'Past Simple vs Present Perfect',
    subtitle: 'The crucial difference between these two tenses',
    level: 'B1',
    category: 'grammar',
    tags: ['past-simple', 'present-perfect', 'tenses', 'comparison'],
    estimatedReadTime: 15,
    introduction: `One of the greatest difficulties for English learners is distinguishing between the Past Simple and the Present Perfect. The key is understanding the connection (or lack thereof) with the present.`,
    sections: [
      {
        title: '1. The Golden Rule',
        content: `**PAST SIMPLE:** The time has finished. No connection with the present.
**PRESENT PERFECT:** There is a connection with the present.

**With specific time → PAST SIMPLE:**
- yesterday, last week, in 2019, when I was young, at 3 PM, on Monday

**Without specific time or with connection to present → PRESENT PERFECT:**
- ever, never, already, yet, just, recently, so far, this week/month/year`
      },
      {
        title: '2. Past Simple: When to Use It',
        content: `**A) Actions at a specific moment in the past:**
- "I visited Paris in 2019." (specific time)
- "She called me yesterday." (yesterday = finished time)

**B) Sequences of past actions:**
- "I woke up, had breakfast, and went to work."

**C) Situations/states that no longer exist:**
- "I lived in Madrid for 5 years." (I don't live there anymore)
- "He was a teacher." (he isn't anymore)

**D) Questions with WHEN:**
- "When did you arrive?" (asking about specific moment)
- "When did you buy this car?"`
      },
      {
        title: '3. Present Perfect: When to Use It',
        content: `**A) Life experiences (without specific time):**
- "I have visited Paris." (at some point in my life)
- "Have you ever eaten sushi?" (general experience)

**B) Recent actions with present relevance:**
- "I've lost my keys." (so I can't get in now)
- "She has broken her leg." (so she can't walk)

**C) Situations that continue:**
- "I have lived in Madrid for 5 years." (I still live there)
- "She has been a teacher since 2010." (she still is)

**D) With this week/month/year (unfinished period):**
- "I have seen three movies this week." (the week isn't over)`
      },
      {
        title: '4. Direct Comparison',
        content: `**PAST SIMPLE (finished time):**
- "I saw him yesterday."
- "We met in 2019."
- "She worked here for 5 years." (she doesn't work here anymore)

**PRESENT PERFECT (connection to present):**
- "I've seen him recently."
- "We've known each other since 2019."
- "She has worked here for 5 years." (she still works here)

**Question comparison:**
- "Did you see the movie?" (any time, finished)
- "Have you seen the movie?" (experience, still relevant)

**In American English, Past Simple is often used where British English uses Present Perfect:**
- US: "I already ate."
- UK: "I've already eaten."`
      }
    ],
    examples: [
      { english: "I have been to Paris. / I went to Paris in 2019.", context: "Experience vs specific time", explanation: "Without time: Perfect. With time: Past Simple." },
      { english: "She has lived here for 10 years.", context: "Continuing situation", explanation: "She still lives here." },
      { english: "He lived here for 10 years.", context: "Past situation", explanation: "He doesn't live here anymore." },
      { english: "I've just finished my homework.", context: "Recent action", explanation: "Just finished, relevant now." },
      { english: "When did you finish your homework?", context: "Specific time question", explanation: "WHEN requires Past Simple." }
    ],
    commonMistakes: [
      { mistake: "I have seen him yesterday.", correction: "I saw him yesterday.", explanation: "YESTERDAY is specific time: use Past Simple." },
      { mistake: "I didn't see him yet.", correction: "I haven't seen him yet.", explanation: "YET requires Present Perfect." },
      { mistake: "Did you ever visit Paris?", correction: "Have you ever visited Paris?", explanation: "EVER for experiences requires Present Perfect." },
      { mistake: "She has called me last week.", correction: "She called me last week.", explanation: "LAST WEEK is specific time: use Past Simple." }
    ],
    practiceExercises: [
      { question: "Complete: I ___ (never/eat) sushi.", answer: "have never eaten", hint: "Experience: Present Perfect" },
      { question: "Complete: She ___ (visit) Japan last year.", answer: "visited", hint: "Last year: Past Simple" },
      { question: "Complete: ___ you ___ (finish) yet?", answer: "Have / finished", hint: "Yet: Present Perfect" },
      { question: "Complete: When ___ you ___ (arrive)?", answer: "did / arrive", hint: "When: Past Simple" }
    ],
    summary: `Past Simple: finished time, specific moment, no connection to present. Present Perfect: experience, recent actions with present relevance, situations that continue. With yesterday/last week/in 2019 → Past Simple. With ever/never/just/yet/since/for → Present Perfect.`,
    relatedArticles: ['past-simple', 'present-perfect-basic', 'for-and-since']
  },

  // ==================== FIRST CONDITIONAL ====================
  {
    id: 'first-conditional',
    title: 'First Conditional: Real Possibilities',
    subtitle: 'How to talk about possible situations and their consequences',
    level: 'B1',
    category: 'grammar',
    tags: ['conditionals', 'first-conditional', 'if', 'real-possibilities'],
    estimatedReadTime: 12,
    introduction: `The First Conditional is used to talk about possible or probable situations in the future and their consequences. It describes real situations that are likely to happen.`,
    sections: [
      {
        title: '1. Structure',
        content: `**Formula:** IF + Present Simple, WILL + Base verb

**Examples:**
- "If it rains, I will stay home."
- "If she studies, she will pass the exam."
- "If you don't hurry, you will miss the bus."

**Note:** The IF clause can go at the beginning or at the end:
- "If I have time, I'll call you."
- "I'll call you if I have time."

**When IF goes at the beginning, use a comma. When it goes at the end, don't use a comma.**`
      },
      {
        title: '2. Uses',
        content: `**A) Real/probable future situations:**
- "If the weather is nice, we'll go to the beach."
- "If I get the job, I'll move to London."

**B) Warnings and threats:**
- "If you touch that, you'll get burned."
- "If you don't stop, I'll call the police."

**C) Promises:**
- "If you help me, I'll help you later."
- "If you finish early, we'll go to the movies."

**D) Offers:**
- "If you need help, I'll come over."
- "If you're hungry, I'll make you something."`
      },
      {
        title: '3. Variations',
        content: `**MODAL VERBS instead of WILL:**

**CAN (ability/possibility):**
- "If you study, you can pass the exam."

**MAY/MIGHT (less certainty):**
- "If it rains, we might cancel the trip."

**SHOULD (advice):**
- "If you feel sick, you should see a doctor."

**MUST (obligation):**
- "If you want to succeed, you must work hard."

**Examples:**
- "If I have money, I might buy a new phone."
- "If she calls, can you take a message?"`
      },
      {
        title: '4. UNLESS',
        content: `**UNLESS = IF NOT**

- "Unless you study, you will fail." = "If you don't study, you will fail."
- "I won't go unless you come with me." = "I won't go if you don't come with me."

**Note:** With UNLESS, don't use negative:
- ✓ "Unless you hurry, we'll be late."
- ✗ "Unless you don't hurry, we'll be late."`
      }
    ],
    examples: [
      { english: "If I see her, I'll tell her the news.", context: "Possible situation", explanation: "Real future possibility." },
      { english: "You'll miss the train if you don't leave now.", context: "Warning", explanation: "Warning about consequence." },
      { english: "If it's sunny tomorrow, we might have a picnic.", context: "Less certain", explanation: "Might for less certainty." },
      { english: "Unless you call ahead, they won't reserve a table.", context: "Condition", explanation: "Unless = If not." },
      { english: "If you need anything, just call me.", context: "Offer", explanation: "Offering help." }
    ],
    commonMistakes: [
      { mistake: "If it will rain, I'll stay home.", correction: "If it rains, I'll stay home.", explanation: "After IF, use Present Simple, not WILL." },
      { mistake: "If I'll see her, I'll tell her.", correction: "If I see her, I'll tell her.", explanation: "After IF, use Present Simple, not WILL." },
      { mistake: "Unless you don't hurry, we'll be late.", correction: "Unless you hurry, we'll be late.", explanation: "UNLESS already means 'if not', don't add negative." }
    ],
    practiceExercises: [
      { question: "Complete: If it ___ (rain), I ___ (take) an umbrella.", answer: "rains / will take", hint: "Present Simple + will" },
      { question: "Complete: She ___ (be) upset if you ___ (not/call).", answer: "will be / don't call", hint: "Will + Present Simple negative" },
      { question: "Complete: ___ you ___ (go) if I ___ (invite) you?", answer: "Will / go / invite", hint: "Will in question + Present Simple" },
      { question: "Complete: ___ you hurry, we'll be late.", answer: "Unless", hint: "Unless = If not" }
    ],
    summary: `First Conditional: IF + Present Simple, WILL + base verb. For real/probable future situations. After IF, NEVER use WILL. Can use other modals (can, might, should). UNLESS = IF NOT.`,
    relatedArticles: ['zero-conditional', 'second-conditional', 'conditionals-overview']
  },

  // ==================== SECOND CONDITIONAL ====================
  {
    id: 'second-conditional',
    title: 'Second Conditional: Hypothetical Situations',
    subtitle: 'How to express imaginary or unlikely situations',
    level: 'B1',
    category: 'grammar',
    tags: ['conditionals', 'second-conditional', 'if', 'hypothetical'],
    estimatedReadTime: 12,
    introduction: `The Second Conditional is used to talk about hypothetical, imaginary, or improbable situations in the present or future. It describes situations that are contrary to reality or very unlikely to happen.`,
    sections: [
      {
        title: '1. Structure',
        content: `**Formula:** IF + Past Simple, WOULD + Base verb

**Examples:**
- "If I had more money, I would travel the world."
- "If she knew the answer, she would tell us."
- "If I were you, I would accept the offer."

**Note:** With TO BE, "were" is traditionally used for all persons in formal English:
- "If I were rich..." (more formal)
- "If I was rich..." (more informal, common in speech)`
      },
      {
        title: '2. Uses',
        content: `**A) Hypothetical/imaginary situations:**
- "If I won the lottery, I would buy a yacht."
- "If I lived in Japan, I would learn Japanese."

**B) Unreal conditions in the present:**
- "If I had a car, I would drive to work." (but I don't have a car)
- "If she spoke English, she would get the job." (but she doesn't speak English)

**C) Advice (If I were you):**
- "If I were you, I would study harder."
- "If I were in your position, I wouldn't accept."`
      },
      {
        title: '3. COULD and MIGHT instead of WOULD',
        content: `**COULD (ability/possibility):**
- "If I had wings, I could fly."
- "If you learned programming, you could get a better job."

**MIGHT (less certainty):**
- "If I had more time, I might take up painting."
- "If she asked nicely, he might help her."

**Examples:**
- "If I spoke French, I could live in Paris."
- "If I weren't so busy, I might join you."`
      },
      {
        title: '4. First vs Second Conditional',
        content: `**First Conditional (real/probable):**
- "If it rains tomorrow, I will take an umbrella."
  (It might rain — real possibility)

**Second Conditional (unreal/improbable):**
- "If it rained every day, I would move to a desert."
  (But it doesn't rain every day — hypothetical)

**More examples:**
- First: "If I see her, I'll tell her." (I might see her)
- Second: "If I saw her, I would tell her." (but I probably won't see her)

- First: "If I have time, I'll help you." (I might have time)
- Second: "If I had time, I would help you." (but I don't have time)`
      }
    ],
    examples: [
      { english: "If I were a bird, I would fly around the world.", context: "Imaginary situation", explanation: "Impossible situation." },
      { english: "If she had more experience, she would get the job.", context: "Unreal present", explanation: "But she doesn't have experience." },
      { english: "If I were you, I would apologize.", context: "Advice", explanation: "Giving advice." },
      { english: "What would you do if you won the lottery?", context: "Hypothetical question", explanation: "Asking about imaginary scenario." },
      { english: "If I didn't have to work, I would travel more.", context: "Contrary to reality", explanation: "But I do have to work." }
    ],
    commonMistakes: [
      { mistake: "If I would have money, I would buy a car.", correction: "If I had money, I would buy a car.", explanation: "After IF, use Past Simple, not WOULD." },
      { mistake: "If I was you, I will help him.", correction: "If I were you, I would help him.", explanation: "Use WERE (formal) and WOULD in the result." },
      { mistake: "If I would be rich...", correction: "If I were rich...", explanation: "Don't use WOULD after IF in conditionals." }
    ],
    practiceExercises: [
      { question: "Complete: If I ___ (be) you, I ___ (accept) the offer.", answer: "were / would accept", hint: "Were + would" },
      { question: "Complete: If she ___ (know), she ___ (tell) us.", answer: "knew / would tell", hint: "Past Simple + would" },
      { question: "Complete: What ___ you ___ (do) if you ___ (win) the lottery?", answer: "would / do / won", hint: "Would + Past Simple" },
      { question: "Complete: I ___ (travel) if I ___ (have) more money.", answer: "would travel / had", hint: "Would + Past Simple" }
    ],
    summary: `Second Conditional: IF + Past Simple, WOULD + base verb. For hypothetical, imaginary, or improbable situations. Use 'were' with all subjects in formal English (If I were...). After IF, never use WOULD.`,
    relatedArticles: ['first-conditional', 'third-conditional', 'mixed-conditionals']
  },

  // ==================== PASSIVE VOICE BASIC ====================
  {
    id: 'passive-voice',
    title: 'Passive Voice: Fundamentals',
    subtitle: 'How to change the focus of a sentence',
    level: 'B1',
    category: 'grammar',
    tags: ['passive-voice', 'active-voice', 'be', 'past-participle'],
    estimatedReadTime: 12,
    introduction: `The Passive Voice is used to change the focus of a sentence. Instead of emphasizing who performs the action (agent), we emphasize who or what receives the action. It is common in formal, scientific, and journalistic writing.`,
    sections: [
      {
        title: '1. Active vs Passive',
        content: `**Active Voice:** Subject performs the action
- "Shakespeare wrote Hamlet."
- "The chef cooks the food."

**Passive Voice:** Subject receives the action
- "Hamlet was written by Shakespeare."
- "The food is cooked by the chef."

**Structure:**
(New subject) + (TO BE + Past Participle) + (BY + optional agent)

**The object of the active sentence becomes the subject of the passive.**`
      },
      {
        title: '2. Passive in Different Tenses',
        content: `| Tense | Active | Passive |
|-------|--------|---------|
| Present Simple | She writes letters. | Letters are written. |
| Past Simple | She wrote letters. | Letters were written. |
| Present Continuous | She is writing letters. | Letters are being written. |
| Past Continuous | She was writing letters. | Letters were being written. |
| Present Perfect | She has written letters. | Letters have been written. |
| Future (will) | She will write letters. | Letters will be written. |
| Modal (can) | She can write letters. | Letters can be written. |`
      },
      {
        title: '3. When to Use the Passive',
        content: `**A) When the agent is unknown or unimportant:**
- "My car was stolen." (I don't know who stole it)
- "The window was broken." (doesn't matter who)

**B) When the focus is on the action or result:**
- "The building was constructed in 1920."
- "The report has been finished."

**C) In formal, scientific, or journalistic writing:**
- "It is believed that..."
- "The experiment was conducted..."
- "The suspect was arrested yesterday."

**D) To avoid mentioning the responsible party:**
- "Mistakes were made." (avoids saying who made mistakes)`
      },
      {
        title: '4. BY + Agent',
        content: `We use BY when we want to mention who performed the action:

- "The book was written by J.K. Rowling."
- "The painting was created by Picasso."
- "The song was performed by Beyoncé."

**When to include BY + agent?**
- Include: when the agent is important or interesting
- Omit: when it's obvious, unknown, or unimportant

**Examples of omission:**
- "The criminal was arrested." (by the police — obvious)
- "English is spoken worldwide." (by people — general)
- "The letter was sent yesterday." (doesn't matter who)`
      },
      {
        title: '5. Verbs with Two Objects',
        content: `Some verbs have two objects (direct and indirect). Both can be subjects of the passive:

**ACTIVE:** They gave me a present.
(me = indirect object, a present = direct object)

**PASSIVE (indirect object as subject):**
"I was given a present." (more common)

**PASSIVE (direct object as subject):**
"A present was given to me." (less common)

**Similar verbs:**
- offer, send, show, teach, tell, bring, write

**Examples:**
- "She was offered a job." (more common)
- "A job was offered to her." (less common)`
      }
    ],
    examples: [
      { english: "The cake was made by my mother.", context: "Passive with agent", explanation: "Passive in Past Simple with agent." },
      { english: "English is spoken all over the world.", context: "Passive without agent", explanation: "Passive without agent (not important)." },
      { english: "The project has been completed.", context: "Present Perfect passive", explanation: "Passive in Present Perfect." },
      { english: "The meeting will be held tomorrow.", context: "Future passive", explanation: "Passive with will." },
      { english: "She was given a promotion.", context: "Indirect object as subject", explanation: "Passive with indirect object as subject." }
    ],
    commonMistakes: [
      { mistake: "The book was wrote by him.", correction: "The book was written by him.", explanation: "Use the PARTICIPLE (written), not the Past Simple (wrote)." },
      { mistake: "The window broken yesterday.", correction: "The window was broken yesterday.", explanation: "You need TO BE (was) before the participle." },
      { mistake: "The letter was send.", correction: "The letter was sent.", explanation: "Participle of send is SENT, not send." }
    ],
    practiceExercises: [
      { question: "Change to passive: They build houses.", answer: "Houses are built.", hint: "Present Simple: are + participle" },
      { question: "Change to passive: Someone stole my phone.", answer: "My phone was stolen.", hint: "Past Simple: was + participle" },
      { question: "Change to passive: They have painted the room.", answer: "The room has been painted.", hint: "Present Perfect: has been + participle" },
      { question: "Complete: The song ___ (write) by Ed Sheeran.", answer: "was written", hint: "Past Simple passive with agent" }
    ],
    summary: `Passive: Subject + TO BE + Past Participle (+ BY agent). Changes focus to the object/action. Use BY when the agent is important. Common in formal, scientific, and journalistic texts. Remember to use the participle (written, not wrote).`,
    relatedArticles: ['active-vs-passive', 'passive-advanced', 'past-participles']
  },

  // ==================== RELATIVE CLAUSES ====================
  {
    id: 'relative-clauses',
    title: 'Relative Clauses: Who, Which, That, Where, When',
    subtitle: 'How to add information about people and things',
    level: 'B1',
    category: 'grammar',
    tags: ['relative-clauses', 'who', 'which', 'that', 'where', 'when', 'whose'],
    estimatedReadTime: 12,
    introduction: `Relative clauses are subordinate clauses that give additional information about a noun. They allow us to combine two sentences into one in a more fluid and natural way.`,
    sections: [
      {
        title: '1. Relative Pronouns',
        content: `| Pronoun | Use | Example |
|---------|-----|---------|
| WHO | people (subject) | The man who called is my friend. |
| WHICH | things/animals | The book which is on the table is mine. |
| THAT | people and things | The woman that lives next door is a doctor. |
| WHERE | places | The restaurant where we met is closing. |
| WHEN | time | The day when I graduated was special. |
| WHOSE | possession | The man whose car was stolen called the police. |

**THAT can replace WHO and WHICH in defining clauses.**`
      },
      {
        title: '2. Defining vs Non-defining Clauses',
        content: `**DEFINING (no commas):** The information is ESSENTIAL to identify.
- "The woman who lives next door is a nurse."
- "Students who study hard get good grades."

Without the clause, we don't know who/what we're talking about.

**NON-DEFINING (with commas):** The information is ADDITIONAL, not essential.
- "My sister, who lives in London, is visiting next week."
- "Paris, which is the capital of France, is beautiful."

Without the clause, we still know who/what we're talking about.

**Important note:** Do NOT use THAT in non-defining clauses.
- ✓ "My car, which is red, needs repairs."
- ✗ "My car, that is red, needs repairs."`
      },
      {
        title: '3. Omitting the Relative Pronoun',
        content: `You can omit WHO/WHICH/THAT when it is the OBJECT of the clause:

**As object (can omit):**
- "The man (who/that) I met yesterday is nice."
- "The book (which/that) you recommended is excellent."

**As subject (cannot omit):**
- "The man who called is my friend." (who = subject)
- "The book which is on the table is mine." (which = subject)

**How to know if it's subject or object?**
If there's ANOTHER subject after the pronoun, you can omit it:
- "The man I met" (I is the subject → man is object → omit OK)
- "The man who called" (no other subject → who is subject → do NOT omit)`
      },
      {
        title: '4. WHOSE (Possession)',
        content: `WHOSE indicates possession:

**Structure:** Noun + WHOSE + possessed noun + verb

**Examples:**
- "The woman whose daughter won the prize is very proud."
- "I know a man whose wife is a famous actress."
- "The company whose products we use is based in Germany."

**Note:** WHOSE can refer to people AND things.
- "The house whose roof was damaged..."
- "The car whose engine broke down..."`
      },
      {
        title: '5. WHERE, WHEN, WHY',
        content: `**WHERE (for places):**
- "The restaurant where we had dinner was excellent."
- "This is the town where I grew up."

**WHEN (for time):**
- "I remember the day when we first met."
- "Summer is the time when I feel happiest."

**WHY (for reasons):**
- "The reason why I left was personal."
- "That's the reason why she's upset."

**Alternatives with preposition:**
- "The restaurant where we had dinner" = "The restaurant at which we had dinner"
- "The day when we met" = "The day on which we met"
- "The reason why I left" = "The reason for which I left"`
      }
    ],
    examples: [
      { english: "The book that I bought is interesting.", context: "Defining clause", explanation: "That as object (can omit)." },
      { english: "My brother, who lives in Canada, is visiting.", context: "Non-defining", explanation: "Non-defining with commas: additional information." },
      { english: "This is the house where I was born.", context: "Place", explanation: "Where for places." },
      { english: "The man whose car was stolen reported it to the police.", context: "Possession", explanation: "Whose for possession." },
      { english: "2020 was the year when everything changed.", context: "Time", explanation: "When for time." }
    ],
    commonMistakes: [
      { mistake: "The man which called is here.", correction: "The man who/that called is here.", explanation: "For people, use WHO or THAT, not WHICH." },
      { mistake: "My sister who lives in Paris is a doctor.", correction: "My sister, who lives in Paris, is a doctor.", explanation: "If you only have one sister, you need commas (non-defining)." },
      { mistake: "The man who's car was stolen...", correction: "The man whose car was stolen...", explanation: "WHOSE (possessive), not WHO'S (who is)." },
      { mistake: "This is the reason because I left.", correction: "This is the reason why I left.", explanation: "Use WHY after 'the reason', not BECAUSE." }
    ],
    practiceExercises: [
      { question: "Complete: The woman ___ works here is my aunt.", answer: "who/that", hint: "Person as subject" },
      { question: "Complete: The book ___ you lent me was great.", answer: "which/that/(nothing)", hint: "Thing as object (can omit)" },
      { question: "Complete: I know a man ___ wife is a doctor.", answer: "whose", hint: "Possession" },
      { question: "Complete: This is the place ___ we first met.", answer: "where", hint: "Place" }
    ],
    summary: `Who = people, which = things, that = both. Where = places, when = time, whose = possession. Defining (essential, no commas) vs non-defining (additional, with commas). You can omit who/which/that when it's the object.`,
    relatedArticles: ['sentence-structure', 'subordinate-clauses', 'punctuation']
  },

  // =====================================================================
  // LEVEL B2 - UPPER INTERMEDIATE
  // =====================================================================

  // ==================== THIRD CONDITIONAL ====================
  {
    id: 'third-conditional',
    title: 'Third Conditional: The Hypothetical Past',
    subtitle: 'How to talk about past situations that did not happen',
    level: 'B2',
    category: 'grammar',
    tags: ['conditionals', 'third-conditional', 'past-perfect', 'would-have'],
    estimatedReadTime: 12,
    introduction: `The Third Conditional is used to talk about hypothetical situations in the past: things that did not happen and their imaginary consequences. It is useful for expressing regret, criticism, or speculation about the past.`,
    sections: [
      {
        title: '1. Structure of the Third Conditional',
        content: `**Formula:** IF + Past Perfect, WOULD HAVE + Past Participle

**Examples:**
- "If I had studied harder, I would have passed the exam."
- "If she had called me, I would have helped her."
- "If we had left earlier, we wouldn't have missed the train."

**Components:**
- IF clause: Past Perfect (had + past participle)
- Main clause: would have + past participle

**Common contractions:**
- would have → would've / 'd have
- had → 'd
- "If I'd known, I'd have called you."`
      },
      {
        title: '2. Uses of the Third Conditional',
        content: `**A) Past situations that did not happen:**
- "If I had won the lottery, I would have bought a house."
  (I didn't win the lottery, I didn't buy a house)

**B) Expressing regret:**
- "If I had listened to my parents, I wouldn't have made that mistake."
- "If I'd known it would rain, I would've brought an umbrella."

**C) Criticizing past decisions:**
- "If you had told me earlier, I could have helped."
- "If she had been more careful, this wouldn't have happened."

**D) Speculating about past alternatives:**
- "What would have happened if we hadn't met?"
- "How would history have changed if...?"`
      },
      {
        title: '3. Variations with Other Modals',
        content: `**COULD HAVE (could have):**
- "If I had known, I could have helped."
- "If they had tried harder, they could have won."

**MIGHT HAVE (might have):**
- "If you had asked nicely, she might have agreed."
- "If it had been sunny, we might have gone to the beach."

**SHOULD HAVE (should have):**
- "If I had known the truth, I should have acted differently."

**Additional examples:**
- "If she had studied medicine, she could have become a doctor."
- "If they'd invested earlier, they might have been millionaires."`
      },
      {
        title: '4. Inversion (Formal)',
        content: `In formal English, we can invert the structure without using IF:

**HAD + subject + past participle, would have + past participle**

**Examples:**
- "Had I known, I would have called." = "If I had known..."
- "Had she arrived earlier, she would have seen him." = "If she had arrived..."
- "Had they been more careful, this wouldn't have happened." = "If they had been..."

**This structure:**
- Is more formal and literary
- Common in formal writing and speeches
- Eliminates the need for IF`
      },
      {
        title: '5. Comparison: Second vs Third Conditional',
        content: `**Second Conditional:** Hypothetical PRESENT/FUTURE
- "If I had more money, I would travel." (I don't have money now)

**Third Conditional:** Hypothetical PAST
- "If I had had more money, I would have traveled." (I didn't have money then)

**Contrast examples:**
- Second: "If I were taller, I would play basketball." (present)
- Third: "If I had been taller, I would have played basketball." (past)

- Second: "If she studied, she would pass." (future hypothetical possibility)
- Third: "If she had studied, she would have passed." (past: she didn't study)`
      }
    ],
    examples: [
      { english: "If I had seen him, I would have said hello.", context: "Hypothetical past", explanation: "Hypothetical past situation." },
      { english: "If we hadn't missed the flight, we would have arrived on time.", context: "Negative", explanation: "Negative: hadn't + participle." },
      { english: "Had I known about the meeting, I would have attended.", context: "Formal inversion", explanation: "Formal inversion without IF." },
      { english: "She might have survived if help had arrived sooner.", context: "With might have", explanation: "With might have." },
      { english: "What would you have done if you had been in my situation?", context: "Hypothetical question", explanation: "Hypothetical question about the past." }
    ],
    commonMistakes: [
      { mistake: "If I would have known, I would have called.", correction: "If I had known, I would have called.", explanation: "After IF, use HAD, not WOULD HAVE." },
      { mistake: "If I had knew...", correction: "If I had known...", explanation: "Use the participle (known), not the past simple (knew)." },
      { mistake: "If she studied harder, she would have passed.", correction: "If she had studied harder, she would have passed.", explanation: "Third Conditional needs Past Perfect after IF." }
    ],
    practiceExercises: [
      { question: "Complete: If I ___ (know), I ___ (tell) you.", answer: "had known / would have told", hint: "Had + participle, would have + participle" },
      { question: "Complete: She ___ (not/miss) the bus if she ___ (leave) earlier.", answer: "wouldn't have missed / had left", hint: "Negative in main clause" },
      { question: "Complete: ___ I ___ (be) aware, I ___ (act) differently.", answer: "Had / been / would have acted", hint: "Formal inversion" },
      { question: "Complete: If they ___ (not/help) me, I ___ (fail).", answer: "hadn't helped / would have failed", hint: "Negative in condition" }
    ],
    summary: `Third Conditional: IF + Past Perfect (had + participle), WOULD HAVE + participle. Talks about hypothetical pasts that didn't happen. Variants: could have, might have. Formal inversion: Had I known... Never use WOULD HAVE after IF.`,
    relatedArticles: ['second-conditional', 'mixed-conditionals', 'past-perfect']
  },

  // ==================== REPORTED SPEECH ====================
  {
    id: 'reported-speech',
    title: 'Reported Speech: Indirect Speech',
    subtitle: 'How to report what others said',
    level: 'B2',
    category: 'grammar',
    tags: ['reported-speech', 'indirect-speech', 'say', 'tell', 'backshift'],
    estimatedReadTime: 15,
    introduction: `Reported Speech (or Indirect Speech) is the way we report what someone else said, without quoting their exact words. It involves changes in pronouns, verb tenses, and time/place expressions.`,
    sections: [
      {
        title: '1. SAY vs TELL',
        content: `**SAY:** Does not require a specific listener
- "She said that she was tired."
- "He said he would come."

**TELL:** Requires a specific listener
- "She told me that she was tired."
- "He told us he would come."

**Common expressions:**
- say hello/goodbye/sorry
- tell the truth/a lie/a story/a joke
- tell someone the time

**Note:** That is optional in reported speech:
- "She said (that) she was tired."`
      },
      {
        title: '2. Backshift (Tense Changes)',
        content: `When the reporting verb is in the past (said, told), the tenses typically shift back:

| Direct Speech | Reported Speech |
|---------------|-----------------|
| Present Simple | Past Simple |
| Present Continuous | Past Continuous |
| Present Perfect | Past Perfect |
| Past Simple | Past Perfect |
| will | would |
| can | could |
| may | might |
| must | had to |

**Examples:**
- "I am tired." → She said she was tired.
- "I have finished." → He said he had finished.
- "I will help." → She said she would help.`
      },
      {
        title: '3. Changes in Pronouns and Expressions',
        content: `**Pronouns:**
- I → he/she
- we → they
- my → his/her
- our → their
- you → I/me (depends on context)

**Time and place expressions:**
| Direct | Reported |
|--------|----------|
| today | that day |
| yesterday | the day before |
| tomorrow | the next day / the following day |
| now | then |
| here | there |
| this | that |
| these | those |
| ago | before |
| next week | the following week |
| last week | the previous week |`
      },
      {
        title: '4. Reported Questions',
        content: `**Yes/No questions:** IF or WHETHER

- "Are you coming?" → She asked if I was coming.
- "Do you like pizza?" → He asked whether I liked pizza.

**WH-questions:** Keep the question word

- "Where do you live?" → She asked where I lived.
- "What time is it?" → He asked what time it was.

**Important:** Use statement word order, not question order:
- ✓ "She asked where I lived."
- ✗ "She asked where did I live."`
      },
      {
        title: '5. Reported Commands and Requests',
        content: `**Commands:** tell + object + TO + infinitive

- "Close the door." → She told me to close the door.
- "Don't be late." → He told us not to be late.

**Requests:** ask + object + TO + infinitive

- "Please help me." → She asked me to help her.
- "Could you wait?" → He asked me to wait.

**Other reporting verbs:**
- advise: "He advised me to study more."
- warn: "She warned him not to go."
- order: "The teacher ordered them to be quiet."
- beg: "She begged him to stay."
- remind: "He reminded me to call."`
      }
    ],
    examples: [
      { english: "She said she was tired.", context: "Statement", explanation: "Direct: 'I am tired' → Reported." },
      { english: "He told me he had finished the report.", context: "With specific listener", explanation: "TELL + indirect object + that..." },
      { english: "She asked if I wanted coffee.", context: "Yes/No question", explanation: "Yes/No question with IF." },
      { english: "He asked where I lived.", context: "WH-question", explanation: "WH-question in statement order." },
      { english: "The teacher told us not to talk.", context: "Negative command", explanation: "Command with NOT TO." }
    ],
    commonMistakes: [
      { mistake: "She said me that she was tired.", correction: "She told me that she was tired. / She said (to me) that she was tired.", explanation: "SAY doesn't take an indirect object; TELL does." },
      { mistake: "He asked where did I live.", correction: "He asked where I lived.", explanation: "Reported questions use statement order, not question order." },
      { mistake: "She said that she is tired.", correction: "She said that she was tired.", explanation: "When reporting verb is past, use backshift." },
      { mistake: "She told that she was coming.", correction: "She said that she was coming. / She told me that she was coming.", explanation: "TELL requires a person (told me/him/us)." }
    ],
    practiceExercises: [
      { question: "Report: 'I am working on a project.'", answer: "She said (that) she was working on a project.", hint: "am → was" },
      { question: "Report: 'Do you speak French?'", answer: "He asked if I spoke French.", hint: "Yes/No question: if + statement order" },
      { question: "Report: 'Where have you been?'", answer: "She asked where I had been.", hint: "WH-question + backshift" },
      { question: "Report: 'Please close the window.'", answer: "He asked me to close the window.", hint: "Request: ask + to + infinitive" }
    ],
    summary: `Reported Speech uses SAY/TELL + (that) + clause. Tenses shift back when reporting verb is past. Pronouns and time expressions change according to new perspective. Questions use IF/WHETHER or WH-word + statement order. Commands use TELL + to + infinitive.`,
    relatedArticles: ['direct-speech', 'reporting-verbs', 'modal-changes']
  },

  // ==================== WISH AND IF ONLY ====================
  {
    id: 'wish-if-only',
    title: 'WISH and IF ONLY: Desires and Regrets',
    subtitle: 'How to express wishes about present, past, and future',
    level: 'B2',
    category: 'grammar',
    tags: ['wish', 'if-only', 'subjunctive', 'regrets', 'desires'],
    estimatedReadTime: 12,
    introduction: `WISH and IF ONLY are used to express desires about situations that are contrary to reality or things we regret. They allow us to talk about what we want but cannot have or change.`,
    sections: [
      {
        title: '1. WISH/IF ONLY + Past Simple (Present Desires)',
        content: `For desires about the present (things we want to be different NOW):

**Structure:** WISH/IF ONLY + Past Simple

**Examples:**
- "I wish I had more money." (but I don't have it)
- "If only I were taller." (but I'm not)
- "She wishes she lived near the beach." (but she doesn't)
- "I wish I didn't have to work tomorrow." (but I do)

**Note:** With TO BE, use WERE for all subjects (formal):
- "I wish I were rich." (formal)
- "I wish I was rich." (informal)`
      },
      {
        title: '2. WISH/IF ONLY + Past Perfect (Past Regrets)',
        content: `For regrets about the past (things we wish had been different):

**Structure:** WISH/IF ONLY + Past Perfect (had + past participle)

**Examples:**
- "I wish I had studied harder." (but I didn't)
- "If only I hadn't said that." (but I did say it)
- "She wishes she had taken that job." (but she didn't take it)
- "If only we had arrived earlier." (but we arrived late)

**Note:** This expresses that we cannot change the past.`
      },
      {
        title: '3. WISH/IF ONLY + WOULD (Future Changes/Complaints)',
        content: `For things we want to change in the future or complaints about behavior:

**Structure:** WISH/IF ONLY + subject + WOULD + base verb

**Examples:**
- "I wish you would stop smoking." (complaint/request)
- "If only it would stop raining." (desire for change)
- "She wishes he would call her." (wanting someone to do something)
- "I wish they wouldn't make so much noise." (complaint)

**Important:** We do NOT use WISH + WOULD for ourselves or impossible things:
- ✗ "I wish I would be rich."
- ✓ "I wish I were rich."

**WOULD is used for actions/behaviors we want others to change.**`
      },
      {
        title: '4. WISH vs HOPE',
        content: `**WISH:** For things unlikely or contrary to reality
- "I wish I could fly." (impossible)
- "I wish you were here." (but you're not)

**HOPE:** For things that are possible
- "I hope you can come to the party." (possible)
- "I hope it doesn't rain tomorrow." (possible)

**Tense comparison:**
- WISH + Past (contrary to reality): "I wish I knew the answer."
- HOPE + Present/Future (possible): "I hope I know the answer."`
      },
      {
        title: '5. IF ONLY (Emphasis)',
        content: `IF ONLY is more emphatic than WISH:

- "I wish I had more time." (desire)
- "If only I had more time!" (stronger desire/frustration)

- "I wish I had studied harder." (regret)
- "If only I had studied harder!" (stronger regret)

**IF ONLY often expresses stronger emotion or frustration.**`
      }
    ],
    examples: [
      { english: "I wish I spoke French.", context: "Present desire", explanation: "I don't speak French but I want to." },
      { english: "If only I had studied medicine.", context: "Past regret", explanation: "Regret about past decision." },
      { english: "I wish you would listen to me.", context: "Complaint", explanation: "Complaint about behavior." },
      { english: "She wishes she could be there.", context: "Desire", explanation: "Could for ability/possibility." },
      { english: "If only I hadn't sold that car!", context: "Strong regret", explanation: "Emphatic regret with IF ONLY." }
    ],
    commonMistakes: [
      { mistake: "I wish I can drive.", correction: "I wish I could drive.", explanation: "With WISH, use COULD (past), not CAN." },
      { mistake: "I wish I didn't went.", correction: "I wish I hadn't gone.", explanation: "For past regrets, use Past Perfect (had + participle)." },
      { mistake: "I wish I would be rich.", correction: "I wish I were rich.", explanation: "Don't use WOULD for yourself; use Past Simple." },
      { mistake: "I wish it stops raining.", correction: "I wish it would stop raining.", explanation: "For future changes, use WOULD." }
    ],
    practiceExercises: [
      { question: "Complete: I wish I ___ (have) more free time.", answer: "had", hint: "Present desire: Past Simple" },
      { question: "Complete: If only I ___ (not/say) that to her.", answer: "hadn't said", hint: "Past regret: Past Perfect" },
      { question: "Complete: I wish you ___ (stop) making that noise.", answer: "would stop", hint: "Complaint: would + base verb" },
      { question: "Complete: She wishes she ___ (can) play the piano.", answer: "could", hint: "Ability desire: could" }
    ],
    summary: `WISH + Past Simple: present desires contrary to reality. WISH + Past Perfect: past regrets. WISH + WOULD: complaints/wanting others to change. IF ONLY is more emphatic. With BE, use WERE (formal). Don't use WISH + WOULD for yourself.`,
    relatedArticles: ['second-conditional', 'third-conditional', 'subjunctive-mood']
  },

  // =====================================================================
  // LEVEL C1 - ADVANCED
  // =====================================================================

  // ==================== MIXED CONDITIONALS ====================
  {
    id: 'mixed-conditionals',
    title: 'Mixed Conditionals',
    subtitle: 'Combining tenses in hypothetical situations',
    level: 'C1',
    category: 'grammar',
    tags: ['conditionals', 'mixed', 'hypothetical', 'advanced'],
    estimatedReadTime: 12,
    introduction: `Mixed conditionals combine elements from different conditional types to express situations where the time of the condition differs from the time of the result. There are two main types: past condition with present result, and present condition with past result.`,
    sections: [
      {
        title: '1. Type 1: Past Condition → Present Result',
        content: `**Structure:** IF + Past Perfect, WOULD + base verb

This structure expresses how a past action affects the present situation.

**Examples:**
- "If I had studied medicine, I would be a doctor now."
  (Past decision → present situation)
- "If she hadn't missed the train, she would be here by now."
  (Past event → present consequence)
- "If I had saved money, I wouldn't be broke today."
  (Past action → current state)

**Key idea:** Something that happened (or didn't happen) in the past has created the current situation.`
      },
      {
        title: '2. Type 2: Present Condition → Past Result',
        content: `**Structure:** IF + Past Simple, WOULD HAVE + past participle

This structure expresses how a permanent characteristic or present state would have affected a past situation.

**Examples:**
- "If I weren't so shy, I would have talked to her."
  (Permanent characteristic → past action)
- "If she spoke French, she would have gotten the job."
  (Current ability → past opportunity)
- "If he weren't allergic to cats, he would have adopted one."
  (Permanent condition → past decision)

**Key idea:** A permanent or general truth about the present affected what happened in the past.`
      },
      {
        title: '3. Common Contexts',
        content: `**Regrets about how things could be different now:**
- "If I had taken that job, I would be living in New York."
- "If I hadn't eaten so much, I wouldn't feel sick now."

**Explaining current situations through past actions:**
- "If he had invested wisely, he would be rich today."
- "If we had left on time, we wouldn't be stuck in traffic now."

**Permanent traits affecting past events:**
- "If I were more patient, I would have waited for him."
- "If she weren't so stubborn, she would have accepted help."`
      },
      {
        title: '4. How to Choose the Right Mixed Conditional',
        content: `**Ask yourself:**

1. Does the condition describe the PAST or a PERMANENT/PRESENT state?
2. Does the result describe NOW or the PAST?

**Type 1 (Past → Present):**
- Condition: Past Perfect (something that happened/didn't happen)
- Result: Would + base verb (current situation)

**Type 2 (Present → Past):**
- Condition: Past Simple (permanent trait or current state)
- Result: Would have + past participle (what would have happened)

**Tip:** Think about what time each part of the sentence refers to:
- Does the condition talk about the past, present, or future?
- Does the result talk about the past, present, or future?`
      }
    ],
    examples: [
      { english: "If I had taken that job, I would be living in New York now.", context: "Past decision, present result", explanation: "Type 1: past decision → present situation." },
      { english: "If she weren't so shy, she would have made more friends at the party.", context: "Present trait, past result", explanation: "Type 2: present characteristic → past result." },
      { english: "If I had listened to my mother, I wouldn't be in this mess.", context: "Past action, present consequence", explanation: "Type 1: past action → present consequence." },
      { english: "If I were you, I would have accepted the offer.", context: "Present condition, past result", explanation: "Type 2: present condition → past action." }
    ],
    commonMistakes: [
      { mistake: "If I would have studied, I would be rich.", correction: "If I had studied, I would be rich.", explanation: "After IF, use Past Perfect, not would have." },
      { mistake: "If I was you, I would have gone.", correction: "If I were you, I would have gone.", explanation: "Use 'were' in formal hypothetical expressions." }
    ],
    practiceExercises: [
      { question: "Complete: If I ___ (not/eat) so much, I ___ (not/feel) sick now.", answer: "hadn't eaten / wouldn't feel", hint: "Type 1: Past Perfect → would + base" },
      { question: "Complete: If she ___ (be) more patient, she ___ (wait) for us.", answer: "were / would have waited", hint: "Type 2: Past Simple → would have + pp" },
      { question: "Complete: If I ___ (take) that flight, I ___ (be) in Paris now.", answer: "had taken / would be", hint: "Type 1: past action → present result" },
      { question: "Complete: If I ___ (not/be) afraid of flying, I ___ (travel) more.", answer: "weren't / would have traveled", hint: "Type 2: present condition → past result" }
    ],
    summary: `Mixed Conditional Type 1: IF + Past Perfect, WOULD + base (past → present). Type 2: IF + Past Simple, WOULD HAVE + participle (present → past). Identify what time describes the condition and what time describes the result.`,
    relatedArticles: ['third-conditional', 'second-conditional', 'conditional-inversions']
  },

  // ==================== ADVANCED PASSIVE ====================
  {
    id: 'advanced-passive',
    title: 'Advanced Passive Voice',
    subtitle: 'Complex and formal passive structures',
    level: 'C1',
    category: 'grammar',
    tags: ['passive', 'advanced', 'formal', 'reporting'],
    estimatedReadTime: 15,
    introduction: `At an advanced level, the passive voice is used in more complex structures that are common in academic, journalistic, and formal writing. These include passives with reporting verbs, causative constructions, and passives with infinitives.`,
    sections: [
      {
        title: '1. Passive with Reporting Verbs',
        content: `**Structure:** IT + IS/WAS + past participle + THAT + clause
OR: Subject + IS/WAS + past participle + TO + infinitive

**Common verbs:** believe, think, say, know, report, expect, consider, understand, allege, claim

**Examples with IT:**
- "It is believed that the economy will improve."
- "It was reported that the president had resigned."

**Examples with personal subject:**
- "The economy is believed to be improving."
- "The president was reported to have resigned."
- "He is said to be the richest man in the country."

**For past events:**
- "He is thought to have left the country."
- "She was believed to have stolen the money."`
      },
      {
        title: '2. Causative Passive: HAVE/GET something DONE',
        content: `**Structure:** HAVE/GET + object + past participle

Expresses that someone does something for us (service):

**HAVE + object + participle:**
- "I had my car repaired." (I arranged for someone to repair my car.)
- "She's having her hair done." (Someone is doing her hair.)
- "We had the house painted last month."

**GET + object + participle:**
- "I need to get my phone fixed."
- "She got her passport stolen." (negative experience)
- "We got the work finished on time."

**Difference:**
- HAVE: more neutral, arranged service
- GET: more informal, or experience (sometimes negative)

**Tenses:**
- "I'm having it done." (now)
- "I had it done." (past)
- "I'll have it done." (future)
- "I've had it done." (present perfect)`
      },
      {
        title: '3. Passive with Infinitive',
        content: `**Structure:** Subject + TO BE + past participle + infinitive

**Examples:**
- "The report is to be submitted by Friday."
- "The building is to be demolished next month."
- "This medication is not to be taken with alcohol."

**Expressing obligation/instruction:**
- "All forms are to be completed in black ink."
- "Visitors are to report to reception."

**With need:**
- "The car needs to be washed." = "The car needs washing."`
      },
      {
        title: '4. Impersonal Passive',
        content: `**Formal structures for generalizing:**

**IT + passive + THAT:**
- "It is widely known that smoking is harmful."
- "It has been proven that exercise improves mood."
- "It cannot be denied that changes are needed."

**THERE + passive:**
- "There is said to be a treasure hidden here."
- "There are believed to be errors in the report."
- "There was thought to be no solution."

**Passive + perfect infinitive (for past):**
- "He is believed to have been a spy."
- "The artifact is thought to have been made 2000 years ago."`
      },
      {
        title: '5. Double Passive and Complex Structures',
        content: `**Indirect object as subject:**
- "I was given a book."
- "She was told the news."
- "He was offered a job."

**Passive with verbs of perception:**
- "He was seen to enter the building." (formal)
- "He was seen entering the building." (more common)
- "She was heard to say that..." (formal)

**Complex passive structures:**
- "The project is expected to have been completed by now."
- "The suspect is thought to have been hiding for months."

**In academic context:**
- "It has been argued that..."
- "It should be noted that..."
- "As has been previously mentioned..."`
      }
    ],
    examples: [
      { english: "She is said to be the best candidate.", context: "Reporting passive", explanation: "Passive with reporting verb + infinitive." },
      { english: "I had my house painted last week.", context: "Causative", explanation: "Causative: service done by others." },
      { english: "It is believed that the team will win.", context: "Impersonal passive", explanation: "It + passive with reporting verb." },
      { english: "The documents are to be signed immediately.", context: "Passive with to be", explanation: "Passive with 'to be' for instructions." },
      { english: "He was reported to have fled the country.", context: "Perfect infinitive", explanation: "Passive + perfect infinitive for past." }
    ],
    commonMistakes: [
      { mistake: "I cut my hair yesterday.", correction: "I had my hair cut yesterday.", explanation: "If someone cut your hair for you, use causative 'had... cut'." },
      { mistake: "It is believing that...", correction: "It is believed that...", explanation: "Use the participle (believed), not -ing." },
      { mistake: "He is said to left the country.", correction: "He is said to have left the country.", explanation: "For past, use perfect infinitive (to have left)." }
    ],
    practiceExercises: [
      { question: "Rewrite: People believe he is a genius.", answer: "He is believed to be a genius. / It is believed that he is a genius.", hint: "Passive with reporting verb" },
      { question: "Complete: I need to ___ my car ___ (repair).", answer: "have/get my car repaired", hint: "Causative" },
      { question: "Complete: The meeting is ___ (hold) tomorrow.", answer: "to be held", hint: "Passive with to be for plans" },
      { question: "Rewrite: They say she won the lottery.", answer: "She is said to have won the lottery.", hint: "Passive + perfect infinitive for past" }
    ],
    summary: `Advanced passives: IT + is believed/said + that, Subject + is believed + to infinitive. Causative: have/get + object + participle. Passive with to be: instructions. Perfect infinitive (to have + pp) for past reported actions.`,
    relatedArticles: ['passive-voice-basic', 'academic-writing', 'formal-english']
  },

  // ==================== INVERSION ====================
  {
    id: 'inversion',
    title: 'Inversion for Emphasis',
    subtitle: 'Inverted structures in formal and literary English',
    level: 'C1',
    category: 'grammar',
    tags: ['inversion', 'emphasis', 'formal', 'negative-adverbs'],
    estimatedReadTime: 12,
    introduction: `Inversion is a technique that places the auxiliary verb before the subject to create emphasis, drama, or formality. It is common in literary, journalistic, and formal English, especially in sentences that begin with negative or restrictive expressions.`,
    sections: [
      {
        title: '1. Inversion with Negative Adverbs',
        content: `When a sentence begins with a negative or restrictive adverb, subject-verb order is inverted:

**NEVER / RARELY / SELDOM:**
- "Never have I seen such beauty."
- "Rarely do we get such opportunities."
- "Seldom does she complain."

**HARDLY / SCARCELY / BARELY:**
- "Hardly had I arrived when it started raining."
- "Scarcely had she spoken when he interrupted."
- "Barely had we started when the power went out."

**AT NO TIME / IN NO WAY / UNDER NO CIRCUMSTANCES:**
- "At no time did he mention the problem."
- "In no way are we responsible."
- "Under no circumstances should you open this door."`
      },
      {
        title: '2. NOT ONLY... BUT ALSO',
        content: `**Structure:** NOT ONLY + auxiliary + subject + verb, BUT (ALSO)...

**Examples:**
- "Not only did she win the race, but she also broke the record."
- "Not only is he intelligent, but he's also hardworking."
- "Not only have they finished, but they've also started the next project."

**Comparison:**
- Normal: "She not only won the race but also broke the record."
- With inversion: "Not only did she win the race, but she also broke the record."

**Inversion only occurs in the first clause (after NOT ONLY).**`
      },
      {
        title: '3. Conditional Inversion (without IF)',
        content: `We can omit IF by inverting had/were/should:

**HAD + subject + past participle:**
- "Had I known, I would have called." = "If I had known..."
- "Had she arrived earlier, she would have seen him."
- "Had it not rained, we would have gone out."

**WERE + subject + complement:**
- "Were I you, I would accept." = "If I were you..."
- "Were she here, she would help."
- "Were it not for the rain, we'd be outside."

**SHOULD + subject + verb:**
- "Should you need help, call me." = "If you should need..."
- "Should any problems arise, contact us immediately."

**This structure is more formal and literary.**`
      },
      {
        title: '4. Inversion with SO/SUCH',
        content: `**SO + adjective + auxiliary + subject + THAT:**
- "So beautiful was the sunset that we stopped to watch."
- "So quickly did he run that no one could catch him."
- "So tired was I that I fell asleep immediately."

**SUCH + auxiliary + subject + THAT:**
- "Such was his talent that everyone admired him."
- "Such was the impact that it changed everything."

**Comparison:**
- Normal: "The sunset was so beautiful that we stopped."
- Inverted: "So beautiful was the sunset that we stopped."

**Effect: more dramatic, literary, emphatic.**`
      },
      {
        title: '5. Other Common Inversions',
        content: `**ONLY + time/condition expression:**
- "Only then did I realize the truth."
- "Only after the meeting did we understand."
- "Only when she left did I see the note."
- "Only by working hard can you succeed."

**NO SOONER... THAN:**
- "No sooner had I arrived than the phone rang."
- "No sooner had we sat down than the show started."

**LITTLE:**
- "Little did he know what would happen."
- "Little do they realize how serious this is."

**HERE/THERE (only with nouns, not pronouns):**
- "Here comes the bus!" (but NOT "Here comes it")
- "There goes my chance!"`
      }
    ],
    examples: [
      { english: "Never have I felt so happy.", context: "Emphasis with never", explanation: "Inversion with never: auxiliary before subject." },
      { english: "Not only did she apologize, but she also sent flowers.", context: "Not only... but also", explanation: "Not only + inversion in first clause." },
      { english: "Had I known about the traffic, I would have left earlier.", context: "Conditional inversion", explanation: "Conditional inversion without IF." },
      { english: "So impressed was the committee that they offered her the job immediately.", context: "So + adjective inversion", explanation: "So + adjective + inversion." },
      { english: "Little did they know that their lives were about to change.", context: "Dramatic emphasis", explanation: "Inversion with 'little' for dramatic emphasis." }
    ],
    commonMistakes: [
      { mistake: "Never I have seen such beauty.", correction: "Never have I seen such beauty.", explanation: "With negative adverbs at the start, invert: auxiliary + subject." },
      { mistake: "Not only she won, but also she broke the record.", correction: "Not only did she win, but she also broke the record.", explanation: "Inversion needed after Not only." },
      { mistake: "Had I knew...", correction: "Had I known...", explanation: "In conditional inversion, use participle (known), not past simple (knew)." }
    ],
    practiceExercises: [
      { question: "Rewrite with inversion: I have never seen such a mess.", answer: "Never have I seen such a mess.", hint: "Never + have + subject + participle" },
      { question: "Rewrite without IF: If I had known, I would have helped.", answer: "Had I known, I would have helped.", hint: "Had + subject + participle" },
      { question: "Complete: Not only ___ he late, but he also forgot the documents.", answer: "was", hint: "Inversion: Not only + was + subject" },
      { question: "Rewrite with inversion: She was so tired that she fell asleep.", answer: "So tired was she that she fell asleep.", hint: "So + adj + was + subject + that" }
    ],
    summary: `Inversion for emphasis: with negative adverbs (never, rarely), not only...but also, conditionals without IF (had/were/should), so/such...that. Structure: auxiliary + subject + verb. Common in formal, literary, and journalistic English.`,
    relatedArticles: ['emphasis-cleft-sentences', 'formal-english', 'conditionals-advanced']
  },

  // =====================================================================
  // LEVEL C2 - PROFICIENCY
  // =====================================================================

  // ==================== CLEFT SENTENCES ====================
  {
    id: 'cleft-sentences',
    title: 'Cleft Sentences: Advanced Emphasis',
    subtitle: 'It was... that/who and What... is/was to highlight information',
    level: 'C2',
    category: 'grammar',
    tags: ['cleft', 'emphasis', 'it-cleft', 'wh-cleft', 'focus'],
    estimatedReadTime: 12,
    introduction: `Cleft sentences are structures that split a simple sentence to emphasize a specific element. They are sophisticated tools for controlling the focus of information in discourse.`,
    sections: [
      {
        title: '1. IT-Cleft: It is/was... that/who',
        content: `**Structure:** IT + BE + emphasized element + THAT/WHO + rest

**To emphasize the subject:**
- Normal: "John broke the window."
- Cleft: "It was John who broke the window."

**To emphasize the object:**
- Normal: "She bought a car."
- Cleft: "It was a car that she bought."

**To emphasize time/place complements:**
- Normal: "I met her in Paris."
- Cleft: "It was in Paris that I met her."
- Normal: "He called yesterday."
- Cleft: "It was yesterday that he called."

**Note:** WHO for people, THAT for everything else.`
      },
      {
        title: '2. WH-Cleft: What... is/was',
        content: `**Structure:** WHAT + subject + verb + BE + emphasized element

**To emphasize the object:**
- Normal: "I need a vacation."
- Cleft: "What I need is a vacation."

**To emphasize the action:**
- Normal: "She studied all night."
- Cleft: "What she did was study all night."

**Other WH-pronouns:**
- "Where I want to go is Paris."
- "When I realized the truth was after the meeting."
- "Why she left is still a mystery."
- "The person who helped me was my neighbor."
- "The thing that bothers me is the noise."`
      },
      {
        title: '3. All-Cleft and Other Variations',
        content: `**ALL... is/was:**
- "All I want is peace and quiet."
- "All she did was cry."
- "All you need is love."

**THE REASON... is/was:**
- "The reason I called is to apologize."
- "The reason he left was that he was bored."

**THE THING... is/was:**
- "The thing is, I don't have enough money."
- "The thing that surprised me was his reaction."

**THE WAY... is/was:**
- "The way she spoke was impressive."
- "What I like is the way he explains things."`
      },
      {
        title: '4. Pragmatic Use of Clefts',
        content: `**To contrast information:**
- "It wasn't the heat that bothered me; it was the humidity."
- "It's not what you say that matters; it's how you say it."

**To correct assumptions:**
- A: "So John told you?"
- B: "No, it was Mary who told me."

**To add emotional emphasis:**
- "What really annoys me is when people are late."
- "What I find incredible is that nobody helped."

**In narratives to create suspense:**
- "It was then that I realized the truth."
- "It was at that moment that everything changed."`
      },
      {
        title: '5. Pseudo-Clefts and Reversed Clefts',
        content: `**Pseudo-cleft (WH-cleft):**
- "What I need is more time."
- "What happened was that the car broke down."

**Reversed pseudo-cleft:**
- "More time is what I need."
- "A complete disaster is what it was."

**IT-cleft vs WH-cleft:**
- IT-cleft: emphasizes a specific element, more neutral tone
- WH-cleft: prepares the listener, creates expectation

**Comparative example:**
- "I need more time." (neutral)
- "It's more time that I need." (emphatic, corrective)
- "What I need is more time." (introduces topic, prepares)
- "More time is what I need." (maximum emphasis at end)`
      }
    ],
    examples: [
      { english: "It was the noise that woke me up.", context: "IT-cleft", explanation: "IT-cleft emphasizing the agent/cause." },
      { english: "What I really wanted was an apology.", context: "WH-cleft", explanation: "WH-cleft emphasizing the desired object." },
      { english: "All I'm asking for is a little patience.", context: "ALL-cleft", explanation: "ALL-cleft to limit/simplify." },
      { english: "It wasn't until I got home that I noticed the problem.", context: "Temporal emphasis", explanation: "IT-cleft with 'not until' for temporal emphasis." },
      { english: "What she did was resign without warning.", context: "Action emphasis", explanation: "WH-cleft emphasizing the action." }
    ],
    commonMistakes: [
      { mistake: "What I need more time.", correction: "What I need is more time.", explanation: "WH-cleft requires the verb BE before the emphasized element." },
      { mistake: "It was John which broke the window.", correction: "It was John who broke the window.", explanation: "For people, use WHO, not WHICH." },
      { mistake: "What I did was worked all night.", correction: "What I did was work all night.", explanation: "After 'was', use infinitive without 'to', not participle." }
    ],
    practiceExercises: [
      { question: "Rewrite emphasizing 'the manager': The manager made the decision.", answer: "It was the manager who made the decision.", hint: "It was + element + who/that" },
      { question: "Rewrite as WH-cleft: I need more practice.", answer: "What I need is more practice.", hint: "What + subject + verb + is + element" },
      { question: "Complete: ___ I can't understand is why she left.", answer: "What", hint: "WH-cleft for object" },
      { question: "Rewrite emphasizing 'yesterday': She called yesterday.", answer: "It was yesterday that she called.", hint: "It was + time + that" }
    ],
    summary: `IT-cleft: It is/was + element + that/who. WH-cleft: What/Where/etc. + clause + is/was + element. ALL-cleft: All + clause + is/was. Uses: emphasis, contrast, correction, narrative suspense. The element after is/was receives the focus.`,
    relatedArticles: ['inversion', 'emphasis-techniques', 'discourse-markers']
  },

  // ==================== DISCOURSE MARKERS ====================
  {
    id: 'discourse-markers',
    title: 'Discourse Markers: Connectors in Speech',
    subtitle: 'How to organize and connect ideas like a native speaker',
    level: 'C2',
    category: 'grammar',
    tags: ['discourse', 'connectors', 'cohesion', 'advanced-speaking'],
    estimatedReadTime: 15,
    introduction: `Discourse markers are words and phrases that organize, connect, and add nuance to speech. Mastering them is essential for sounding natural and fluent in advanced English.`,
    sections: [
      {
        title: '1. Addition and Reinforcement Markers',
        content: `**Addition:**
- furthermore, moreover, in addition, additionally
- besides, what's more, on top of that
- not only that, but also, as well as

**Reinforcement:**
- indeed, in fact, as a matter of fact
- actually, of course, certainly
- needless to say, obviously

**Examples:**
- "The policy is expensive. Moreover, it's ineffective."
- "He's talented. In fact, he's one of the best."
- "She's qualified. Furthermore, she has experience."`
      },
      {
        title: '2. Contrast and Concession Markers',
        content: `**Contrast:**
- however, nevertheless, nonetheless
- on the other hand, in contrast, conversely
- whereas, while, whilst

**Concession:**
- although, even though, despite, in spite of
- having said that, that said, be that as it may
- admittedly, granted

**Examples:**
- "It's expensive. However, it's worth it."
- "Admittedly, the plan has flaws. Nevertheless, we should try."
- "The hotel was nice. Having said that, the service could improve."
- "That said, I see your point."`
      },
      {
        title: '3. Cause, Result, and Purpose Markers',
        content: `**Cause:**
- because, since, as, for
- due to, owing to, on account of
- given that, seeing that, in view of

**Result:**
- therefore, thus, hence, consequently
- as a result, as a consequence
- accordingly, for this reason

**Purpose:**
- in order to, so as to, so that
- with the aim of, for the purpose of
- with a view to

**Examples:**
- "Given the circumstances, we should postpone."
- "Sales dropped; consequently, jobs were cut."
- "In view of recent events, we're reviewing policy."`
      },
      {
        title: '4. Time and Sequence Markers',
        content: `**Sequence:**
- first(ly), second(ly), third(ly)
- to begin with, next, then, finally
- subsequently, afterwards, eventually

**Time:**
- meanwhile, in the meantime
- previously, formerly, beforehand
- simultaneously, at the same time

**Summary/Conclusion:**
- in conclusion, to conclude, to sum up
- in summary, all in all, overall
- in short, in brief, to put it briefly

**Examples:**
- "To begin with, let me explain the background."
- "Meanwhile, the situation was deteriorating."
- "All in all, it was a successful project."`
      },
      {
        title: '5. Pragmatic and Interactive Markers',
        content: `**Structuring discourse:**
- well, so, now, anyway
- right, OK, let me see
- as I was saying, to get back to my point

**Expressing opinion:**
- in my view, in my opinion, to my mind
- as far as I'm concerned, personally
- I would argue that, I tend to think

**Hedging/Softening:**
- sort of, kind of, more or less
- to some extent, in a way, so to speak
- I suppose, I guess, I imagine

**Emphasizing:**
- above all, in particular, especially
- indeed, definitely, absolutely
- what's important is that, the key point is

**Examples:**
- "Well, that's an interesting question."
- "To some extent, I agree with you."
- "Above all, we need to focus on quality."`
      }
    ],
    examples: [
      { english: "The project was challenging. Having said that, we learned a lot.", context: "Concession", explanation: "Concession: acknowledges the previous point, adds perspective." },
      { english: "Given that resources are limited, we need to prioritize.", context: "Cause", explanation: "Formal cause marker." },
      { english: "In short, we need to act now.", context: "Summary", explanation: "Summary marker." },
      { english: "As far as I'm concerned, the decision is final.", context: "Opinion", explanation: "Expressing personal opinion." },
      { english: "Be that as it may, we still have to try.", context: "Formal concession", explanation: "Formal concession: accepts but continues." }
    ],
    commonMistakes: [
      { mistake: "Although it was expensive, but we bought it.", correction: "Although it was expensive, we bought it.", explanation: "Don't combine ALTHOUGH with BUT." },
      { mistake: "Despite of the rain, we went out.", correction: "Despite the rain, we went out.", explanation: "DESPITE doesn't take OF." },
      { mistake: "I will explain firstly the background.", correction: "Firstly, I will explain the background.", explanation: "Sequence markers go at the beginning." }
    ],
    practiceExercises: [
      { question: "Complete: The plan is risky. ___, I think we should try.", answer: "Nevertheless / However / That said", hint: "Contrast" },
      { question: "Complete: ___ the economic crisis, unemployment rose.", answer: "Due to / Owing to / On account of", hint: "Cause" },
      { question: "Complete: ___, let me summarize the key points.", answer: "To conclude / In conclusion / In summary", hint: "Conclusion" },
      { question: "Complete: She's talented. ___, she's also hardworking.", answer: "Moreover / Furthermore / What's more", hint: "Addition" }
    ],
    summary: `Discourse markers organize speech: addition (moreover, furthermore), contrast (however, nevertheless), cause (due to, given that), result (therefore, consequently), sequence (firstly, finally), opinion (in my view), hedging (to some extent). Correct use marks native-like fluency.`,
    relatedArticles: ['academic-writing', 'formal-english', 'cohesion']
  },

  // =====================================================================
  // A2 GRAMMAR - supplementary articles
  // =====================================================================
  ...a2GrammarArticles,

  // =====================================================================
  // B2 GRAMMAR - 11 articles
  // =====================================================================
  ...b2GrammarArticles,

  // =====================================================================
  // C1 ADVANCED GRAMMAR - 9 articles
  // =====================================================================
  ...c1GrammarArticles,

  // =====================================================================
  // C2 GRAMMAR: NATIVE PRECISION AND STYLE - 6 articles
  // =====================================================================
  ...c2GrammarArticles,
];

// Helper function to get articles by level
export const getArticlesByLevel = (level: Article['level']): Article[] => {
  return articles.filter(article => article.level === level);
};

// Helper function to get articles by category
export const getArticlesByCategory = (category: Article['category']): Article[] => {
  return articles.filter(article => article.category === category);
};

// Helper function to search articles
export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.subtitle.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    article.introduction.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to get related articles
export const getRelatedArticles = (articleId: string): Article[] => {
  const article = articles.find(a => a.id === articleId);
  if (!article) return [];
  return articles.filter(a => article.relatedArticles.includes(a.id));
};

// Helper function to get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Helper function to get articles by tag
export const getArticlesByTag = (tag: string): Article[] => {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

// Helper function to get the most relevant article for an exercise based on its tags
export const getArticleForExercise = (exerciseTags: string[]): Article | null => {
  if (!exerciseTags || exerciseTags.length === 0) return null;
  
  // Tag mapping from exercise tags to article IDs/tags
  const tagToArticleMap: Record<string, string> = {
    'to-be': 'verb-to-be',
    'present-simple': 'present-simple',
    'present-continuous': 'present-continuous',
    'articles': 'articles-a-an-the',
    'possessive': 'possessive-adjectives',
    'past-simple': 'past-simple',
    'present-perfect': 'present-perfect-basic',
    'comparatives': 'comparatives-superlatives',
    'superlatives': 'comparatives-superlatives',
    'future': 'future-going-to',
    'going-to': 'future-going-to',
    'modals': 'modals-basic',
    'can': 'modals-basic',
    'must': 'modals-basic',
    'should': 'modals-basic',
    'prepositions': 'prepositions',
    'past-continuous': 'past-continuous',
    'first-conditional': 'first-conditional',
    'second-conditional': 'second-conditional',
    'passive': 'passive-voice',
    'reported-speech': 'reported-speech',
    'relative-clauses': 'relative-clauses',
    'mixed-conditionals': 'mixed-conditionals',
    'vocabulary': 'vocabulary',
    'food': 'vocabulary',
    'animals': 'vocabulary',
    'family': 'vocabulary',
    'clothes': 'vocabulary',
    'body': 'vocabulary',
    'colors': 'vocabulary',
    'numbers': 'vocabulary',
    'weather': 'vocabulary',
    'professions': 'vocabulary',
    'sports': 'vocabulary',
    'there-is': 'a2-gram-there-is',
    'there-are': 'a2-gram-there-is',
    'questions': 'a2-gram-questions',
    // B2 Grammar
    'tenses': 'b2-gram-all-tenses',
    'b2-gram-1': 'b2-gram-all-tenses',
    'b2-gram-2': 'b2-gram-perfect-vs-past',
    'b2-gram-3': 'b2-gram-future',
    'b2-gram-4': 'b2-gram-conditionals',
    'b2-gram-5': 'b2-gram-mixed-conditionals',
    'b2-gram-6': 'b2-gram-passive',
    'b2-gram-7': 'b2-gram-relative',
    'b2-gram-8': 'b2-gram-reported',
    'deduction': 'b2-gram-modals-deduction',
    'b2-gram-9': 'b2-gram-modals-deduction',
    'complex-sentences': 'b2-gram-complex',
    'compound': 'b2-gram-complex',
    'b2-gram-10': 'b2-gram-complex',
    'b2-gram-11': 'b2-gram-inversions',
    // C1 Advanced Grammar - skill and topic tags
    'clauses': 'c1-gram-complex-clauses',
    'participles': 'c1-gram-complex-clauses',
    'complex-clauses': 'c1-gram-complex-clauses',
    'c1-gram-1': 'c1-gram-complex-clauses',
    'noun-clauses': 'c1-gram-subordination',
    'embedding': 'c1-gram-subordination',
    'subordination': 'c1-gram-subordination',
    'c1-gram-2': 'c1-gram-subordination',
    'conditionals': 'c1-gram-conditionals',
    'c1-gram-3': 'c1-gram-conditionals',
    'reporting-verbs': 'c1-gram-advanced-passive',
    'causative': 'c1-gram-advanced-passive',
    'impersonal': 'c1-gram-advanced-passive',
    'c1-gram-4': 'c1-gram-advanced-passive',
    'nominalization': 'c1-gram-nominalization',
    'c1-gram-5': 'c1-gram-nominalization',
    'inversion': 'c1-gram-inversion',
    'emphasis': 'c1-gram-inversion',
    'cleft-sentences': 'c1-gram-inversion',
    'c1-gram-6': 'c1-gram-inversion',
    'ellipsis': 'c1-gram-ellipsis',
    'substitution': 'c1-gram-ellipsis',
    'c1-gram-7': 'c1-gram-ellipsis',
    'discourse': 'c1-gram-discourse',
    'cohesion': 'c1-gram-discourse',
    'c1-gram-8': 'c1-gram-discourse',
    'punctuation': 'c1-gram-punctuation',
    'c1-gram-9': 'c1-gram-punctuation',
    // C2 Grammar: Native Precision and Style
    'subjunctive': 'c2-gram-literary',
    'literary': 'c2-gram-literary',
    'archaic': 'c2-gram-literary',
    'parenthetical': 'c2-gram-literary',
    'c2-gram-1': 'c2-gram-literary',
    'narrative': 'c2-gram-narrative-time',
    'historical-present': 'c2-gram-narrative-time',
    'c2-gram-2': 'c2-gram-narrative-time',
    'modality': 'c2-gram-modality',
    'certainty': 'c2-gram-modality',
    'probability': 'c2-gram-modality',
    'c2-gram-3': 'c2-gram-modality',
    'theme-rheme': 'c2-gram-cohesion',
    'c2-gram-4': 'c2-gram-cohesion',
    'periodic': 'c2-gram-syntax',
    'parallelism': 'c2-gram-syntax',
    'antithesis': 'c2-gram-syntax',
    'fragments': 'c2-gram-syntax',
    'c2-gram-5': 'c2-gram-syntax',
    'formal-writing': 'c2-gram-formal',
    'agreement': 'c2-gram-formal',
    'c2-gram-6': 'c2-gram-formal',
  };
  
  // Find matching article
  for (const tag of exerciseTags) {
    const articleId = tagToArticleMap[tag.toLowerCase()];
    if (articleId) {
      const article = getArticleById(articleId);
      if (article) return article;
    }
  }
  
  // Fallback: search by tag in articles
  for (const tag of exerciseTags) {
    const matchingArticles = getArticlesByTag(tag);
    if (matchingArticles.length > 0) {
      return matchingArticles[0];
    }
  }
  
  return null;
};

// Map C1/C2 grammar skill IDs to article IDs for overview "Read article" links
const skillIdToArticleMap: Record<string, string> = {
  "c1-gram-1": "c1-gram-complex-clauses",
  "c1-gram-2": "c1-gram-subordination",
  "c1-gram-3": "c1-gram-conditionals",
  "c1-gram-4": "c1-gram-advanced-passive",
  "c1-gram-5": "c1-gram-nominalization",
  "c1-gram-6": "c1-gram-inversion",
  "c1-gram-7": "c1-gram-ellipsis",
  "c1-gram-8": "c1-gram-discourse",
  "c1-gram-9": "c1-gram-punctuation",
  "a1-gram-1": "verb-to-be",
  "a1-gram-2": "present-simple",
  "a1-gram-3": "present-continuous",
  "a1-gram-4": "articles-a-an-the",
  "a2-gram-1": "past-simple",
  "a2-gram-2": "present-perfect-basic",
  "a2-gram-3": "future-going-to",
  "a2-gram-4": "a2-gram-there-is",
  "a2-gram-5": "countable-uncountable",
  "a2-gram-6": "comparatives-superlatives",
  "a2-gram-7": "modals-basic",
  "a2-gram-8": "prepositions",
  "a2-gram-9": "a2-gram-questions",
  "a2-gram-10": "past-simple-vs-present-perfect",
  "b1-gram-1": "past-simple",
  "b1-gram-2": "present-perfect-basic",
  "b1-gram-3": "past-simple-vs-present-perfect",
  "b1-gram-4": "future-going-to",
  "b2-gram-1": "b2-gram-all-tenses",
  "b2-gram-2": "b2-gram-perfect-vs-past",
  "b2-gram-3": "b2-gram-future",
  "b2-gram-4": "b2-gram-conditionals",
  "b2-gram-5": "b2-gram-mixed-conditionals",
  "b2-gram-6": "b2-gram-passive",
  "b2-gram-7": "b2-gram-relative",
  "b2-gram-8": "b2-gram-reported",
  "b2-gram-9": "b2-gram-modals-deduction",
  "b2-gram-10": "b2-gram-complex",
  "b2-gram-11": "b2-gram-inversions",
  "c2-gram-1": "c2-gram-literary",
  "c2-gram-2": "c2-gram-narrative-time",
  "c2-gram-3": "c2-gram-modality",
  "c2-gram-4": "c2-gram-cohesion",
  "c2-gram-5": "c2-gram-syntax",
  "c2-gram-6": "c2-gram-formal",
};

export const getArticleForSkillId = (skillId: string): Article | null => {
  const articleId = skillIdToArticleMap[skillId];
  if (!articleId) return null;
  return getArticleById(articleId) ?? null;
};
