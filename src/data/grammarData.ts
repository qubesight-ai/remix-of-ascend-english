export interface GrammarCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: GrammarTopic[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  completed: boolean;
  explanation: string;
  examples: { english: string; context: string }[];
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export const grammarCategories: GrammarCategory[] = [
  {
    id: "tenses",
    title: "Verb Tenses",
    description: "Master all English verb tenses",
    icon: "⏰",
    topics: [
      {
        id: "present-simple",
        title: "Present Simple",
        level: "A1",
        completed: false,
        explanation: "The Present Simple is used to describe routines, habits, general facts, and universal truths. It's formed with the base verb (without 'to'), and in third person singular (he/she/it) we add -s or -es.",
        examples: [
          { english: "I work every day.", context: "Describes a daily routine or habit" },
          { english: "She speaks English fluently.", context: "Describes a permanent ability" },
          { english: "The sun rises in the east.", context: "Expresses a universal truth" },
          { english: "Do you like coffee?", context: "Question about preferences" },
        ],
        exercises: [
          {
            id: "ps-1",
            type: "multiple-choice",
            question: "She ___ to school every morning.",
            options: ["go", "goes", "going", "went"],
            correctAnswer: "goes",
            explanation: "With 'she' (third person singular) we use 'goes' in Present Simple."
          },
          {
            id: "ps-2",
            type: "fill-blank",
            question: "My father ___ (read) the newspaper every morning.",
            correctAnswer: "reads",
            explanation: "In third person singular we add -s to the verb."
          },
          {
            id: "ps-3",
            type: "multiple-choice",
            question: "_____ your brother work in a bank?",
            options: ["Do", "Does", "Is", "Are"],
            correctAnswer: "Does",
            explanation: "We use 'Does' for questions with third person singular."
          },
        ]
      },
      {
        id: "present-continuous",
        title: "Present Continuous",
        level: "A1",
        completed: false,
        explanation: "The Present Continuous describes actions happening right now or around this time. It's formed with 'to be' + verb with -ing.",
        examples: [
          { english: "I am studying right now.", context: "Action happening at this moment" },
          { english: "They are playing football.", context: "Current activity in progress" },
          { english: "Is she working today?", context: "Question about current state" },
        ],
        exercises: [
          {
            id: "pc-1",
            type: "multiple-choice",
            question: "Look! The children ___ in the garden.",
            options: ["play", "plays", "are playing", "played"],
            correctAnswer: "are playing",
            explanation: "'Look!' indicates an action in progress, so we use Present Continuous."
          },
        ]
      },
      {
        id: "past-simple",
        title: "Past Simple",
        level: "A2",
        completed: false,
        explanation: "The Past Simple is used for completed actions in the past. Regular verbs add -ed, while irregular verbs have special forms.",
        examples: [
          { english: "I visited Paris last year.", context: "Completed action at a specific time" },
          { english: "She went to the cinema yesterday.", context: "Uses irregular verb 'go'" },
          { english: "Did you see the movie?", context: "Past simple question form" },
        ],
        exercises: [
          {
            id: "pst-1",
            type: "multiple-choice",
            question: "Yesterday I ___ my grandmother.",
            options: ["visit", "visited", "visiting", "visits"],
            correctAnswer: "visited",
            explanation: "'Yesterday' indicates past, we use Past Simple: visited."
          },
        ]
      },
      {
        id: "present-perfect",
        title: "Present Perfect",
        level: "A2",
        completed: false,
        explanation: "The Present Perfect connects the past with the present. It's used for life experiences, recent actions with 'just', and situations that started in the past and continue. It's formed with have/has + past participle.",
        examples: [
          { english: "I have visited London three times.", context: "Life experience (unspecified time)" },
          { english: "She has just finished her homework.", context: "Recent completion using 'just'" },
          { english: "We have known each other since 2010.", context: "Situation continuing from past" },
          { english: "Have you ever been to Japan?", context: "Asking about life experience" },
        ],
        exercises: [
          {
            id: "pp-1",
            type: "multiple-choice",
            question: "I ___ never ___ sushi before.",
            options: ["have / eaten", "has / eaten", "have / eat", "did / eat"],
            correctAnswer: "have / eaten",
            explanation: "With 'I' we use 'have' and the participle 'eaten' to express experiences."
          },
          {
            id: "pp-2",
            type: "multiple-choice",
            question: "She ___ in this company for 5 years.",
            options: ["worked", "has worked", "is working", "works"],
            correctAnswer: "has worked",
            explanation: "'For 5 years' indicates a situation that started in the past and continues."
          },
        ]
      },
      {
        id: "past-continuous",
        title: "Past Continuous",
        level: "B1",
        completed: false,
        explanation: "The Past Continuous describes actions in progress at a specific moment in the past. It's formed with was/were + verb-ing.",
        examples: [
          { english: "I was sleeping when you called.", context: "Interrupted action in past" },
          { english: "They were watching TV at 8 PM.", context: "Action in progress at specific time" },
        ],
        exercises: [
          {
            id: "pcon-1",
            type: "multiple-choice",
            question: "What ___ you ___ at 9 o'clock last night?",
            options: ["were / doing", "was / doing", "did / do", "are / doing"],
            correctAnswer: "were / doing",
            explanation: "To ask about an action in progress in the past we use were + doing."
          },
        ]
      },
      {
        id: "future-will",
        title: "Future with Will",
        level: "A2",
        completed: false,
        explanation: "We use 'will' for predictions, spontaneous decisions, promises, and offers. It's formed with will + infinitive without 'to'.",
        examples: [
          { english: "I will help you with that.", context: "Making a promise or offer" },
          { english: "It will rain tomorrow.", context: "Making a prediction" },
        ],
        exercises: [
          {
            id: "fw-1",
            type: "multiple-choice",
            question: "Don't worry, I ___ you later.",
            options: ["call", "will call", "calling", "called"],
            correctAnswer: "will call",
            explanation: "We use 'will' for promises about the future."
          },
        ]
      },
      {
        id: "future-going-to",
        title: "Future with Going to",
        level: "A2",
        completed: false,
        explanation: "We use 'going to' for previously decided plans and predictions based on evidence. It's formed with am/is/are + going to + infinitive.",
        examples: [
          { english: "I am going to visit my parents next week.", context: "Pre-planned intention" },
          { english: "Look at those clouds! It's going to rain.", context: "Prediction based on evidence" },
        ],
        exercises: [
          {
            id: "fgt-1",
            type: "multiple-choice",
            question: "She ___ a new car next month. (planned)",
            options: ["buys", "will buy", "is going to buy", "bought"],
            correctAnswer: "is going to buy",
            explanation: "For previously decided plans we use 'going to'."
          },
        ]
      },
    ]
  },
  {
    id: "modals",
    title: "Modal Verbs",
    description: "Can, could, must, should, would and more",
    icon: "🔧",
    topics: [
      {
        id: "can-could",
        title: "Can & Could",
        level: "A1",
        completed: false,
        explanation: "'Can' expresses ability, permission, and possibility in the present. 'Could' is its past form or more formal/polite version.",
        examples: [
          { english: "I can swim very well.", context: "Expressing present ability" },
          { english: "Could you help me, please?", context: "Polite request form" },
        ],
        exercises: [
          {
            id: "cc-1",
            type: "multiple-choice",
            question: "___ you speak French when you were a child?",
            options: ["Can", "Could", "Must", "Should"],
            correctAnswer: "Could",
            explanation: "We use 'could' for abilities in the past."
          },
        ]
      },
      {
        id: "must-have-to",
        title: "Must & Have to",
        level: "A2",
        completed: false,
        explanation: "'Must' expresses strong obligation or deduction. 'Have to' expresses external obligation. In the negative they differ: 'mustn't' = prohibition, 'don't have to' = no necessity.",
        examples: [
          { english: "You must wear a seatbelt.", context: "Strong personal obligation" },
          { english: "I have to work tomorrow.", context: "External obligation" },
          { english: "You mustn't smoke here.", context: "Prohibition - not allowed" },
          { english: "You don't have to come.", context: "No necessity - optional" },
        ],
        exercises: [
          {
            id: "mh-1",
            type: "multiple-choice",
            question: "You ___ touch that! It's dangerous!",
            options: ["mustn't", "don't have to", "shouldn't", "can't"],
            correctAnswer: "mustn't",
            explanation: "We use 'mustn't' for strong prohibitions."
          },
        ]
      },
      {
        id: "should-ought-to",
        title: "Should & Ought to",
        level: "A2",
        completed: false,
        explanation: "'Should' and 'ought to' express advice, recommendations, and expectations. They are interchangeable, though 'should' is more common.",
        examples: [
          { english: "You should see a doctor.", context: "Giving advice" },
          { english: "He ought to apologize.", context: "Expressing expectation" },
        ],
        exercises: [
          {
            id: "so-1",
            type: "multiple-choice",
            question: "You look tired. You ___ get some rest.",
            options: ["must", "should", "can", "would"],
            correctAnswer: "should",
            explanation: "We use 'should' to give advice."
          },
        ]
      },
    ]
  },
  {
    id: "conditionals",
    title: "Conditional Sentences",
    description: "If clauses: Zero, First, Second, Third",
    icon: "🔀",
    topics: [
      {
        id: "zero-conditional",
        title: "Zero Conditional",
        level: "A2",
        completed: false,
        explanation: "The Zero Conditional expresses general truths, scientific facts, and predictable results. Structure: If + present simple, present simple.",
        examples: [
          { english: "If you heat water to 100°C, it boils.", context: "Scientific fact" },
          { english: "If I drink coffee at night, I can't sleep.", context: "Personal consistent result" },
        ],
        exercises: [
          {
            id: "zc-1",
            type: "multiple-choice",
            question: "If you ___ ice in the sun, it ___.",
            options: ["put / melts", "put / will melt", "will put / melts", "putting / melting"],
            correctAnswer: "put / melts",
            explanation: "Zero Conditional uses present simple in both parts."
          },
        ]
      },
      {
        id: "first-conditional",
        title: "First Conditional",
        level: "A2",
        completed: false,
        explanation: "The First Conditional expresses probable or possible situations in the future. Structure: If + present simple, will + infinitive.",
        examples: [
          { english: "If it rains tomorrow, I will stay home.", context: "Real future possibility" },
          { english: "If you study hard, you will pass the exam.", context: "Likely consequence" },
        ],
        exercises: [
          {
            id: "fc-1",
            type: "multiple-choice",
            question: "If she ___ harder, she ___ the exam.",
            options: ["studies / will pass", "will study / passes", "studied / would pass", "studies / passes"],
            correctAnswer: "studies / will pass",
            explanation: "First Conditional: If + present, will + infinitive."
          },
        ]
      },
      {
        id: "second-conditional",
        title: "Second Conditional",
        level: "B1",
        completed: false,
        explanation: "The Second Conditional expresses hypothetical or improbable situations in the present/future. Structure: If + past simple, would + infinitive.",
        examples: [
          { english: "If I won the lottery, I would travel the world.", context: "Imaginary situation" },
          { english: "If I were you, I would apologize.", context: "Giving hypothetical advice" },
        ],
        exercises: [
          {
            id: "sc-1",
            type: "multiple-choice",
            question: "If I ___ rich, I ___ a mansion.",
            options: ["am / will buy", "was / would buy", "were / would buy", "be / would buy"],
            correctAnswer: "were / would buy",
            explanation: "In Second Conditional we use 'were' for all persons with 'if'."
          },
        ]
      },
      {
        id: "third-conditional",
        title: "Third Conditional",
        level: "B2",
        completed: false,
        explanation: "The Third Conditional expresses hypothetical past situations (impossible to change). Structure: If + past perfect, would have + past participle.",
        examples: [
          { english: "If I had studied, I would have passed.", context: "Regret about the past" },
          { english: "If she had arrived earlier, she would have seen him.", context: "Imagining different past" },
        ],
        exercises: [
          {
            id: "tc-1",
            type: "multiple-choice",
            question: "If I ___ the email, I ___ you sooner.",
            options: ["had seen / would have called", "saw / would call", "have seen / would call", "seen / would have called"],
            correctAnswer: "had seen / would have called",
            explanation: "Third Conditional: If + had + participle, would have + participle."
          },
        ]
      },
    ]
  },
  {
    id: "passive",
    title: "Passive Voice",
    description: "Active to passive transformation in all tenses",
    icon: "🔄",
    topics: [
      {
        id: "passive-present",
        title: "Passive Voice - Present",
        level: "B1",
        completed: false,
        explanation: "The passive voice emphasizes the action or the receiver of the action rather than the agent. In present: am/is/are + past participle.",
        examples: [
          { english: "English is spoken worldwide.", context: "Focus on the language, not speakers" },
          { english: "The letters are sent every day.", context: "Routine action, agent unknown" },
        ],
        exercises: [
          {
            id: "pp-1",
            type: "multiple-choice",
            question: "Spanish ___ in many countries.",
            options: ["speaks", "is spoken", "is speaking", "spoke"],
            correctAnswer: "is spoken",
            explanation: "Passive voice in present: is/are + past participle."
          },
        ]
      },
      {
        id: "passive-past",
        title: "Passive Voice - Past",
        level: "B1",
        completed: false,
        explanation: "Passive voice in past: was/were + past participle.",
        examples: [
          { english: "The book was written by Hemingway.", context: "Focus on the book, author mentioned" },
          { english: "The pyramids were built thousands of years ago.", context: "Historical fact, builders unknown" },
        ],
        exercises: [
          {
            id: "ppa-1",
            type: "multiple-choice",
            question: "The Mona Lisa ___ by Leonardo da Vinci.",
            options: ["painted", "was painted", "is painted", "paints"],
            correctAnswer: "was painted",
            explanation: "Past completed action, we use was + participle."
          },
        ]
      },
    ]
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs",
    description: "The most used compound verbs in English",
    icon: "🧩",
    topics: [
      {
        id: "phrasal-verbs-basic",
        title: "Basic Phrasal Verbs",
        level: "A2",
        completed: false,
        explanation: "Phrasal verbs are verbs combined with prepositions or adverbs that create a new meaning. They are essential for natural English.",
        examples: [
          { english: "Please turn off the lights.", context: "To deactivate or switch off" },
          { english: "I'm looking for my keys.", context: "To search for something" },
          { english: "Wake up! It's late.", context: "To stop sleeping" },
        ],
        exercises: [
          {
            id: "pv-1",
            type: "multiple-choice",
            question: "Can you ___ the TV? I want to watch the news.",
            options: ["turn on", "turn off", "turn up", "turn over"],
            correctAnswer: "turn on",
            explanation: "'Turn on' means to activate or switch on a device."
          },
        ]
      },
      {
        id: "phrasal-verbs-intermediate",
        title: "Intermediate Phrasal Verbs",
        level: "B1",
        completed: false,
        explanation: "More complex phrasal verbs often have figurative meanings that differ from their literal components.",
        examples: [
          { english: "The meeting was called off.", context: "To cancel something" },
          { english: "I need to figure out this problem.", context: "To solve or understand" },
          { english: "Don't give up!", context: "To stop trying" },
        ],
        exercises: [
          {
            id: "pvi-1",
            type: "multiple-choice",
            question: "We had to ___ the meeting due to bad weather.",
            options: ["put off", "put on", "put up", "put in"],
            correctAnswer: "put off",
            explanation: "'Put off' means to postpone or delay."
          },
        ]
      },
      {
        id: "phrasal-verbs-advanced",
        title: "Advanced Phrasal Verbs",
        level: "B2",
        completed: false,
        explanation: "Advanced phrasal verbs often have multiple meanings and are used in formal and informal contexts.",
        examples: [
          { english: "The company laid off 50 workers.", context: "To dismiss from employment" },
          { english: "I came across an old photo.", context: "To find by chance" },
          { english: "She takes after her mother.", context: "To resemble a family member" },
        ],
        exercises: [
          {
            id: "pva-1",
            type: "multiple-choice",
            question: "The scientist ___ a new theory by accident.",
            options: ["came up with", "came across", "came about", "came over"],
            correctAnswer: "came up with",
            explanation: "'Come up with' means to think of or produce an idea."
          },
        ]
      },
    ]
  },
  {
    id: "articles",
    title: "Articles",
    description: "A, An, The - When to use each",
    icon: "📝",
    topics: [
      {
        id: "articles-basic",
        title: "A & An",
        level: "A1",
        completed: false,
        explanation: "'A' is used before consonant sounds, 'an' before vowel sounds. They are indefinite articles used for singular countable nouns when we're not specific.",
        examples: [
          { english: "I have a dog.", context: "Consonant sound at start" },
          { english: "She's an engineer.", context: "Vowel sound at start" },
          { english: "He's a university student.", context: "'University' starts with /j/ sound" },
        ],
        exercises: [
          {
            id: "art-1",
            type: "multiple-choice",
            question: "She has ___ umbrella.",
            options: ["a", "an", "the", "no article"],
            correctAnswer: "an",
            explanation: "'Umbrella' starts with a vowel sound, so we use 'an'."
          },
        ]
      },
      {
        id: "articles-the",
        title: "The Definite Article",
        level: "A2",
        completed: false,
        explanation: "'The' is used when both speaker and listener know what is being referred to, for unique things, and for specific items.",
        examples: [
          { english: "The sun is shining.", context: "Unique thing - only one sun" },
          { english: "I saw the movie you recommended.", context: "Specific, known to both" },
          { english: "The Eiffel Tower is in Paris.", context: "Famous landmarks" },
        ],
        exercises: [
          {
            id: "art-2",
            type: "multiple-choice",
            question: "Please close ___ door.",
            options: ["a", "an", "the", "no article"],
            correctAnswer: "the",
            explanation: "Both speaker and listener know which door is meant."
          },
        ]
      },
    ]
  },
  {
    id: "relative-clauses",
    title: "Relative Clauses",
    description: "Who, which, that, where, when",
    icon: "🔗",
    topics: [
      {
        id: "defining-relative",
        title: "Defining Relative Clauses",
        level: "B1",
        completed: false,
        explanation: "Defining relative clauses give essential information about the noun. Without them, the meaning is unclear. No commas are used.",
        examples: [
          { english: "The woman who called you is my sister.", context: "Identifies which woman" },
          { english: "The book that I read was excellent.", context: "Identifies which book" },
          { english: "The restaurant where we met is closed.", context: "Identifies which restaurant" },
        ],
        exercises: [
          {
            id: "rc-1",
            type: "multiple-choice",
            question: "The man ___ lives next door is a doctor.",
            options: ["who", "which", "where", "when"],
            correctAnswer: "who",
            explanation: "'Who' is used for people in relative clauses."
          },
        ]
      },
      {
        id: "non-defining-relative",
        title: "Non-Defining Relative Clauses",
        level: "B2",
        completed: false,
        explanation: "Non-defining relative clauses add extra information that is not essential. They are set off by commas.",
        examples: [
          { english: "My brother, who lives in London, is visiting.", context: "Extra info about brother" },
          { english: "The Nile, which is in Africa, is very long.", context: "Additional geographical fact" },
        ],
        exercises: [
          {
            id: "nrc-1",
            type: "multiple-choice",
            question: "Paris, ___ is the capital of France, is beautiful.",
            options: ["who", "which", "that", "where"],
            correctAnswer: "which",
            explanation: "'Which' is used in non-defining clauses for things."
          },
        ]
      },
    ]
  },
  {
    id: "reported-speech",
    title: "Reported Speech",
    description: "How to report what others say",
    icon: "💬",
    topics: [
      {
        id: "reported-statements",
        title: "Reported Statements",
        level: "B1",
        completed: false,
        explanation: "When reporting statements, we typically shift tenses back one step and change pronouns and time expressions.",
        examples: [
          { english: "She said that she was tired.", context: "Present → Past" },
          { english: "He told me he had finished.", context: "Past Simple → Past Perfect" },
        ],
        exercises: [
          {
            id: "rs-1",
            type: "multiple-choice",
            question: "'I am happy.' → She said she ___ happy.",
            options: ["is", "was", "has been", "will be"],
            correctAnswer: "was",
            explanation: "Present simple 'am' becomes past simple 'was' in reported speech."
          },
        ]
      },
      {
        id: "reported-questions",
        title: "Reported Questions",
        level: "B2",
        completed: false,
        explanation: "Reported questions use statement word order (no inversion). Yes/No questions use 'if' or 'whether'.",
        examples: [
          { english: "She asked where I lived.", context: "WH-question reported" },
          { english: "He asked if I was coming.", context: "Yes/No question reported" },
        ],
        exercises: [
          {
            id: "rq-1",
            type: "multiple-choice",
            question: "'Do you like coffee?' → She asked ___ I liked coffee.",
            options: ["that", "if", "what", "do"],
            correctAnswer: "if",
            explanation: "Yes/No questions use 'if' or 'whether' in reported speech."
          },
        ]
      },
    ]
  },
  {
    id: "advanced-structures",
    title: "Advanced Structures",
    description: "Complex grammatical constructions",
    icon: "🏗️",
    topics: [
      {
        id: "inversion",
        title: "Inversion for Emphasis",
        level: "C1",
        completed: false,
        explanation: "Inversion places the auxiliary before the subject for emphasis. Common with negative adverbials and 'so/such'.",
        examples: [
          { english: "Never have I seen such beauty.", context: "Emphatic negative" },
          { english: "Not only did he apologize, but he also bought flowers.", context: "Double emphasis structure" },
          { english: "Rarely do we get such opportunities.", context: "Frequency adverb emphasis" },
        ],
        exercises: [
          {
            id: "inv-1",
            type: "multiple-choice",
            question: "Seldom ___ such talent in young performers.",
            options: ["we see", "do we see", "we do see", "seeing we"],
            correctAnswer: "do we see",
            explanation: "After 'seldom' we use inversion: auxiliary + subject."
          },
        ]
      },
      {
        id: "cleft-sentences",
        title: "Cleft Sentences",
        level: "C1",
        completed: false,
        explanation: "Cleft sentences emphasize specific information using 'It is/was... that' or 'What... is/was'.",
        examples: [
          { english: "It was John who broke the window.", context: "Emphasizing the person" },
          { english: "What I need is a vacation.", context: "Emphasizing the object" },
          { english: "It's the noise that bothers me.", context: "Emphasizing the cause" },
        ],
        exercises: [
          {
            id: "cleft-1",
            type: "multiple-choice",
            question: "___ I want is some peace and quiet.",
            options: ["It", "That", "What", "Which"],
            correctAnswer: "What",
            explanation: "'What' introduces the emphasized element in a WH-cleft."
          },
        ]
      },
      {
        id: "subjunctive",
        title: "The Subjunctive Mood",
        level: "C2",
        completed: false,
        explanation: "The subjunctive expresses wishes, demands, suggestions, and hypothetical situations. It uses the base form of the verb.",
        examples: [
          { english: "I insist that he be present.", context: "Demand using subjunctive" },
          { english: "If I were rich, I would help.", context: "Hypothetical 'were' for all persons" },
          { english: "It's essential that she arrive on time.", context: "Necessity using subjunctive" },
        ],
        exercises: [
          {
            id: "subj-1",
            type: "multiple-choice",
            question: "The doctor recommended that she ___ more rest.",
            options: ["gets", "get", "got", "getting"],
            correctAnswer: "get",
            explanation: "After 'recommend' we use the subjunctive (base form)."
          },
        ]
      },
      {
        id: "mixed-conditionals",
        title: "Mixed Conditionals",
        level: "C1",
        completed: false,
        explanation: "Mixed conditionals combine different time references in the condition and result clauses.",
        examples: [
          { english: "If I had studied medicine, I would be a doctor now.", context: "Past condition, present result" },
          { english: "If I were taller, I would have played basketball.", context: "Present condition, past result" },
        ],
        exercises: [
          {
            id: "mix-1",
            type: "multiple-choice",
            question: "If she ___ earlier, she ___ exhausted now.",
            options: ["had left / wouldn't be", "left / won't be", "leaves / isn't", "had left / won't be"],
            correctAnswer: "had left / wouldn't be",
            explanation: "Past condition (had left) with present result (wouldn't be)."
          },
        ]
      },
    ]
  },
  {
    id: "comparatives",
    title: "Comparatives & Superlatives",
    description: "Comparing things and expressing extremes",
    icon: "📊",
    topics: [
      {
        id: "comparatives-basic",
        title: "Comparatives",
        level: "A2",
        completed: false,
        explanation: "Comparatives compare two things. Short adjectives add -er, long adjectives use 'more'. Always use 'than' when comparing.",
        examples: [
          { english: "She is taller than her brother.", context: "Short adjective + -er" },
          { english: "This book is more interesting than that one.", context: "Long adjective with 'more'" },
          { english: "He works harder than anyone else.", context: "Adverb comparison" },
        ],
        exercises: [
          {
            id: "comp-1",
            type: "multiple-choice",
            question: "This exercise is ___ than I expected.",
            options: ["more difficult", "difficulter", "most difficult", "difficultly"],
            correctAnswer: "more difficult",
            explanation: "'Difficult' is a long adjective, so we use 'more difficult'."
          },
        ]
      },
      {
        id: "superlatives-basic",
        title: "Superlatives",
        level: "A2",
        completed: false,
        explanation: "Superlatives express the extreme degree. Short adjectives add -est, long adjectives use 'most'. Always use 'the'.",
        examples: [
          { english: "She is the tallest in the class.", context: "Short adjective + -est" },
          { english: "This is the most beautiful painting.", context: "Long adjective with 'most'" },
          { english: "He works the hardest of all.", context: "Adverb superlative" },
        ],
        exercises: [
          {
            id: "super-1",
            type: "multiple-choice",
            question: "This is ___ restaurant in the city.",
            options: ["the best", "the better", "the most good", "the goodest"],
            correctAnswer: "the best",
            explanation: "'Good' has an irregular superlative: 'the best'."
          },
        ]
      },
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions",
    description: "Prepositions of time, place, and movement",
    icon: "📍",
    topics: [
      {
        id: "prepositions-time",
        title: "Prepositions of Time",
        level: "A1",
        completed: false,
        explanation: "Use 'at' for specific times, 'on' for days and dates, 'in' for longer periods (months, years, seasons).",
        examples: [
          { english: "I wake up at 7 AM.", context: "Specific time" },
          { english: "The meeting is on Monday.", context: "Day of the week" },
          { english: "She was born in 1990.", context: "Year" },
        ],
        exercises: [
          {
            id: "prep-t1",
            type: "multiple-choice",
            question: "I'll see you ___ Friday.",
            options: ["at", "on", "in", "to"],
            correctAnswer: "on",
            explanation: "We use 'on' for days of the week."
          },
        ]
      },
      {
        id: "prepositions-place",
        title: "Prepositions of Place",
        level: "A1",
        completed: false,
        explanation: "'At' indicates a specific point, 'in' indicates enclosed spaces or areas, 'on' indicates surfaces.",
        examples: [
          { english: "She's at the bus stop.", context: "Specific location point" },
          { english: "The book is in the drawer.", context: "Inside an enclosed space" },
          { english: "The picture is on the wall.", context: "On a surface" },
        ],
        exercises: [
          {
            id: "prep-p1",
            type: "multiple-choice",
            question: "The keys are ___ the table.",
            options: ["at", "on", "in", "under"],
            correctAnswer: "on",
            explanation: "We use 'on' when something is on a surface."
          },
        ]
      },
    ]
  },
];

// Helper function to get all topics across all categories
export const getAllTopics = (): GrammarTopic[] => {
  return grammarCategories.flatMap(category => category.topics);
};

// Helper function to get topics by level
export const getTopicsByLevel = (level: string): GrammarTopic[] => {
  return getAllTopics().filter(topic => topic.level === level);
};

// Helper function to get exercises by level
export const getExercisesByLevel = (level: string): Exercise[] => {
  return getTopicsByLevel(level).flatMap(topic => topic.exercises);
};
