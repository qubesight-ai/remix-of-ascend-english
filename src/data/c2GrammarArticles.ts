// C2 Grammar: Native Precision and Style Articles
// 6 articles for impeccable grammatical control with stylistic variation

import type { Article } from "./articlesData";

export const c2GrammarArticles: Article[] = [
  // 1. Rare and literary grammatical structures
  {
    id: "c2-gram-literary",
    title: "Rare and Literary Grammatical Structures",
    subtitle: "Subjunctive, complex stylistic inversion, archaic structures, parenthetical sentences",
    level: "C2",
    category: "grammar",
    tags: ["subjunctive", "literary", "inversion", "archaic", "parenthetical", "c2", "native-precision"],
    estimatedReadTime: 16,
    introduction: `At C2 level, you control rare and literary structures that mark native-like sophistication. The subjunctive in all its uses, complex stylistic inversion, purposeful archaic structures, and controlled parenthetical sentences are the hallmarks of formal, literary, and diplomatic English.`,
    sections: [
      {
        title: "1. Subjunctive in All Its Uses",
        content: `The subjunctive expresses hypotheticals, demands, wishes, and necessity. It uses the base form (infinitive without to) for all persons.

**Mandative subjunctive (after demand, insist, require, essential, imperative):**
• "The committee demanded that he resign immediately."
• "It is essential that every student follow the guidelines."
• "She insisted that the report be completed by Friday."
• "I suggest that he leave at once."

**Formulaic subjunctive:**
• "If I were you..." (unreal present—were for all persons)
• "Were it not for your help, I would have failed." (= If it were not for...)
• "Had I known, I would have come." (= If I had known...)

**Wish and preference:** "I wish he were here." | "I'd rather she come tomorrow."`
      },
      {
        title: "2. Complex Stylistic Inversion",
        content: `Beyond basic inversion, literary English uses inverted structures for emphasis and rhythm.

**So/Such + inversion:** So great was the shock that he fell silent. | Such was his determination that he succeeded.
**Adjective/participle + as/though:** Strange though it may seem, it worked.
**Negative + inversion:** Little did she know... | Not until then did I understand.
**Place/direction:** Down came the rain. | Here lies the problem.

**Whatever may be (archaic):** "Whatever may be the outcome, we must proceed." | "Come what may."`
      },
      {
        title: "3. Purposeful Archaic Structures",
        content: `Archaic forms add gravitas in legal, religious, and literary contexts.

**Wh-ever + may:** Whatever the cost, we shall prevail.
**Thee, thou, hast (deliberate archaism):** Used in liturgy, poetry, or for effect.
**-eth/-est endings:** He speaketh. | Thou knowest.
**Inversion for solemnity:** Be it resolved that... | Long live the King.`
      },
      {
        title: "4. Controlled Parenthetical Sentences and Digressions",
        content: `Parentheticals add nuance without breaking flow. Use dashes, commas, or parentheses.

**With dashes (emphatic):** The result—unexpected though it was—pleased everyone.
**With commas (softer):** The minister, who had been briefed earlier, declined to comment.
**With parentheses (aside):** The proposal (first drafted in 2019) was finally adopted.

**Digressions:** Use sparingly. A well-placed digression can add depth; overuse obscures.`
      },
    ],
    examples: [
      { english: "The committee demanded that he resign immediately.", context: "Mandative subjunctive", explanation: "Base form 'resign' after 'demand'." },
      { english: "Were it not for your help, I would have failed.", context: "Formulaic subjunctive", explanation: "Were + subject + not for = If it were not for." },
      { english: "Whatever may be the outcome, we must proceed.", context: "Archaic/literary", explanation: "Whatever may be = regardless of." },
      { english: "Little did she know that she would become famous.", context: "Negative inversion", explanation: "Little + did + subject + verb." },
    ],
    commonMistakes: [
      { mistake: "They demanded that he resigns.", correction: "They demanded that he resign.", explanation: "Subjunctive uses base form, not third-person -s." },
      { mistake: "If I was you, I would refuse.", correction: "If I were you, I would refuse.", explanation: "Unreal present: use 'were' for all persons." },
    ],
    practiceExercises: [
      { question: "Subjunctive: It is essential that she _____ (attend) the meeting.", answer: "attend", hint: "Base form after 'essential that'" },
      { question: "Invert: If it were not for luck, we would have lost.", answer: "Were it not for luck, we would have lost.", hint: "Were + subject + not for" },
    ],
    summary: `Subjunctive: base form after demand/insist/essential; were for unreal present. Stylistic inversion: Little did she know; Were it not for. Archaic: Whatever may be; Come what may. Parentheticals: use dashes, commas, or parentheses for controlled digressions.`,
    relatedArticles: ["c1-gram-inversion", "c1-gram-conditionals", "c2-gram-syntax"],
  },

  // 2. Narrative time manipulation
  {
    id: "c2-gram-narrative-time",
    title: "Narrative Time Manipulation",
    subtitle: "Historical present, flashbacks, perfective vs imperfective, future in the past",
    level: "C2",
    category: "grammar",
    tags: ["narrative", "historical-present", "flashback", "aspect", "future-in-past", "c2"],
    estimatedReadTime: 14,
    introduction: `C2 writers and speakers manipulate narrative time to create immediacy, foreshadowing, and depth. The historical present, grammatical flashbacks and flash-forwards, subtle aspect distinctions, and complex future in the past are essential tools.`,
    sections: [
      {
        title: "1. Effective Historical Present",
        content: `The historical present uses present tense to narrate past events, creating immediacy and drama.

**When to use:** Vivid storytelling, summaries of plots, news headlines.
• "In 1969, Armstrong sets foot on the moon." (dramatic)
• "So I walk into the room and there she is."
• "Napoleon marches into Russia in 1812."

**Avoid overuse:** Switch to past for background; use present for key moments.`
      },
      {
        title: "2. Grammatical Flashbacks and Flash-Forwards",
        content: `**Flashback:** Past perfect for actions before the main narrative past.
• "By the time the police arrived, the thief had vanished."
• "She had already left when I got there."

**Flash-forward:** Future in the past for events that were future from a past viewpoint.
• "Little did she know that she would become famous."
• "He promised he would call."
• "She was not to realize the importance until years later." (destiny/inescapable future)`
      },
      {
        title: "3. Subtle Perfective vs Imperfective Aspect",
        content: `**Perfective:** Action as a whole, completed. Simple past, present perfect.
• "He wrote the letter." (completed)
• "She has finished." (result now)

**Imperfective:** Action in progress, habitual, or ongoing. Past continuous, used to/would.
• "He was writing the letter when the phone rang."
• "She would sit by the window every evening."
• "I used to live there."

**Nuance:** "I lived in Paris for five years" vs "I was living in Paris when we met."`
      },
      {
        title: "4. Complex Future in the Past",
        content: `**Would + infinitive:** Future from a past perspective.
• "She knew she would succeed."
• "They said they would help."

**Was/were + to + infinitive:** Destiny, planned future from past.
• "She was not to realize until years later."
• "He was to become one of the greatest."

**Was/were going to:** Intention from the past.
• "I was going to call, but I forgot."`
      },
    ],
    examples: [
      { english: "In 1969, Armstrong sets foot on the moon.", context: "Historical present", explanation: "Present for past events—dramatic effect." },
      { english: "Little did she know that she would become famous.", context: "Future in the past", explanation: "'Would' = future from past viewpoint." },
      { english: "She was not to realize the importance until years later.", context: "Was to + infinitive", explanation: "Destiny or inescapable future from past." },
      { english: "By the time the police arrived, the thief had vanished.", context: "Flashback (past perfect)", explanation: "Action completed before 'arrived'." },
    ],
    commonMistakes: [
      { mistake: "In 1969, Armstrong set foot on the moon.", correction: "Both correct: 'set' (past) or 'sets' (historical present).", explanation: "Historical present is a stylistic choice for vividness." },
    ],
    practiceExercises: [
      { question: "Future in the past: She knew she _____ succeed.", answer: "would", hint: "Future from past perspective" },
      { question: "Flashback: When I arrived, he _____ (leave) already.", answer: "had left", hint: "Past perfect for prior action" },
    ],
    summary: `Historical present: present tense for past events (dramatic). Flashbacks: past perfect. Flash-forwards: would, was to + infinitive. Aspect: perfective (completed) vs imperfective (ongoing/habitual).`,
    relatedArticles: ["c2-gram-literary", "c2-gram-cohesion", "c2-gram-modality"],
  },

  // 3. Advanced modality
  {
    id: "c2-gram-modality",
    title: "Advanced Modality",
    subtitle: "Certainty and probability, perfect modals, regret and speculation, obligation and permission",
    level: "C2",
    category: "grammar",
    tags: ["modality", "modals", "certainty", "probability", "regret", "speculation", "c2"],
    estimatedReadTime: 16,
    introduction: `C2 modality goes beyond basic may/might/could to express subtle degrees of certainty, probability, regret, speculation, and nuanced obligation. Perfect modals (must have, might have, should have) and hedging are central.`,
    sections: [
      {
        title: "1. Subtle Degrees of Certainty and Probability",
        content: `**Scale (least → most certain):**
• Possibly, perhaps, maybe (low)
• Might/could (possibility)
• May (50/50)
• Should/ought to (expectation)
• Must/will (high certainty)
• Definitely, certainly (very high)

**Hedging:** "It would seem that..." | "There appears to be..." | "I tend to think..."
**Strengthening:** "It must be..." | "There can be no doubt that..."`
      },
      {
        title: "2. Perfect Modals in Complex Contexts",
        content: `**Must have + pp:** Logical certainty about the past. "He must have left early."
**Might/could/may have + pp:** Possibility in the past. "She might have forgotten."
**Can't/couldn't have + pp:** Certainty that something did NOT happen. "He can't have said that."
**Should/ought to have + pp:** Expectation or regret. "You should have told me."
**Would have + pp:** Unreal past. "I would have helped if I'd known."
**Needn't have + pp:** Unnecessary past action. "You needn't have worried."`
      },
      {
        title: "3. Expression of Regret and Speculation",
        content: `**Regret:** "I should have listened." | "If only I had known."
**Speculation about the past:** "He may have been delayed." | "They might not have received it."
**Counterfactual:** "She would have succeeded had she tried."
**Mild reproach:** "You could have phoned." | "You might have said something."`
      },
      {
        title: "4. Nuanced Obligation and Permission",
        content: `**Strong obligation:** must, have to, need to
**Weak obligation:** should, ought to
**Lack of obligation:** needn't, don't have to
**Prohibition:** mustn't, can't
**Permission:** can, may (formal), be allowed to
**Past permission (negative):** "I wasn't allowed to go." | "I couldn't stay."
**Past lack of obligation:** "I didn't need to go." (I didn't go) vs "I needn't have gone." (I went unnecessarily)`
      },
    ],
    examples: [
      { english: "He must have left early—his coat is gone.", context: "Logical certainty (past)", explanation: "Must have + pp = deduction about past." },
      { english: "You should have told me.", context: "Regret", explanation: "Expectation that didn't happen." },
      { english: "She might have been delayed.", context: "Speculation (past)", explanation: "Possibility in the past." },
      { english: "You needn't have worried.", context: "Unnecessary past action", explanation: "You worried, but it wasn't necessary." },
    ],
    commonMistakes: [
      { mistake: "He must has left.", correction: "He must have left.", explanation: "Perfect modal: modal + have + past participle." },
      { mistake: "I needn't to go.", correction: "I needn't go. / I don't need to go.", explanation: "Needn't is a modal: no 'to' after it." },
    ],
    practiceExercises: [
      { question: "Perfect modal (certainty): The lights are off. He _____ (leave).", answer: "must have left", hint: "Logical deduction about past" },
      { question: "Regret: I _____ (tell) you earlier.", answer: "should have told", hint: "Expectation not met" },
    ],
    summary: `Certainty scale: might → may → should → must. Perfect modals: must have (certainty), might have (possibility), should have (regret), needn't have (unnecessary). Nuance obligation and permission with context.`,
    relatedArticles: ["modals-basic", "c1-gram-conditionals", "c2-gram-narrative-time"],
  },

  // 4. Advanced textual cohesion
  {
    id: "c2-gram-cohesion",
    title: "Advanced Textual Cohesion",
    subtitle: "Complex reference chains, sophisticated ellipsis, discourse connectors, theme and rheme",
    level: "C2",
    category: "grammar",
    tags: ["cohesion", "reference", "ellipsis", "discourse", "theme-rheme", "c2"],
    estimatedReadTime: 14,
    introduction: `Advanced cohesion binds a text into a coherent whole. Complex reference chains, sophisticated ellipsis, discourse connectors for argumentation, and the theme–rheme structure create professional, persuasive discourse.`,
    sections: [
      {
        title: "1. Complex Reference Chains",
        content: `**Anaphora:** Referring back. "The minister resigned. She had been under pressure."
**Cataphora:** Referring forward. "This is the key point: we must act now."
**Extended reference:** "The policy change, which affected millions, was controversial. It had been long debated."
**Synonyms and hyponyms:** "The proposal... This initiative... The measure..."
**Avoid ambiguity:** Ensure pronouns have clear antecedents across long chains.`
      },
      {
        title: "2. Sophisticated Ellipsis",
        content: `**Nominal:** "I'll have the red one." | "Which book? The one on the table."
**Verbal:** "She can swim and so can I." | "I have and I will."
**Clausal:** "He said he would come. I hope so."
**Gapping:** "John likes coffee; Mary, tea." (Mary [likes] tea)
**Strict vs sloppy:** "John loves his wife. So does Bill." (Bill loves Bill's wife—sloppy; or John's—strict, context-dependent)`
      },
      {
        title: "3. Discourse Connectors for Argumentation",
        content: `**Concession:** That said, Having said that, Nevertheless, Nonetheless, Be that as it may
**Addition:** Furthermore, Moreover, In addition, What is more
**Contrast:** However, In contrast, On the contrary
**Cause/Result:** Consequently, Accordingly, Hence, Thus, In light of this
**Sequence:** Firstly, Subsequently, Finally, To conclude
**Reformulation:** In other words, That is to say, Put simply
**Emphasis:** Indeed, In fact, As a matter of fact`
      },
      {
        title: "4. Theme and Rheme for Emphasis",
        content: `**Theme:** The starting point of the clause (topic). **Rheme:** What is said about it (comment).

**Unmarked theme:** Subject first. "The government announced the policy."
**Marked theme:** Fronting for emphasis. "The policy, the government announced."
**Cleft:** "It was the policy that the government announced."
**Passive for theme:** "The policy was announced by the government." (policy = theme)

**Information structure:** Put given information (theme) first; new information (rheme) last for natural flow.`
      },
    ],
    examples: [
      { english: "She can swim and so can I.", context: "Verbal ellipsis", explanation: "So can I = I can swim too." },
      { english: "That said, we must consider the costs.", context: "Discourse connector (concession)", explanation: "Concedes previous point, introduces contrast." },
      { english: "It was the policy that the government announced.", context: "Cleft (theme–rheme)", explanation: "Emphasizes 'the policy' as theme." },
    ],
    commonMistakes: [
      { mistake: "The minister resigned. He had been under pressure.", correction: "The minister resigned. She had been under pressure.", explanation: "Pronoun must agree with antecedent (minister can be male or female—use correct pronoun)." },
    ],
    practiceExercises: [
      { question: "Ellipsis: She likes jazz. (You too)", answer: "So do I. / I do too.", hint: "So + auxiliary + subject" },
      { question: "Concession connector: ___ , we must proceed with caution.", answer: "That said / Having said that / Nevertheless", hint: "Acknowledge previous point, then contrast" },
    ],
    summary: `Reference: anaphora, cataphora, clear chains. Ellipsis: nominal (one), verbal (so do I), clausal (I hope so). Connectors: concession, addition, contrast, cause, sequence. Theme–rheme: structure information for emphasis and flow.`,
    relatedArticles: ["c1-gram-discourse", "c1-gram-ellipsis", "discourse-markers", "c2-gram-syntax"],
  },

  // 5. Syntactic variation for effect
  {
    id: "c2-gram-syntax",
    title: "Syntactic Variation for Effect",
    subtitle: "Periodic vs loose sentences, parallelism, antithesis, length variation, fragments",
    level: "C2",
    category: "grammar",
    tags: ["syntax", "periodic", "loose", "parallelism", "antithesis", "fragments", "c2"],
    estimatedReadTime: 14,
    introduction: `Syntactic variation—varying sentence structure, length, and rhythm—creates emphasis, clarity, and stylistic flair. Periodic and loose sentences, parallelism, antithesis, strategic length variation, and purposeful fragments are the tools of the advanced writer.`,
    sections: [
      {
        title: "1. Periodic vs Loose Sentences",
        content: `**Loose sentence:** Main clause first, modifiers follow. Easier to process.
• "She left the room quickly, slamming the door behind her, and never looked back."
• "The policy failed because it was poorly designed and inadequately funded."

**Periodic sentence:** Modifiers first, main clause delayed until the end. Creates suspense and emphasis.
• "After years of debate, after countless revisions, and after unprecedented pressure from all sides, the bill was finally passed."
• "What we need, what we have always needed, is courage."

**Use:** Loose for clarity; periodic for climax and impact.`
      },
      {
        title: "2. Parallelism and Antithesis",
        content: `**Parallelism:** Same structure for balance and rhythm.
• "We must act with conviction, with courage, and with compassion."
• "She came, she saw, she conquered."
• "To err is human; to forgive, divine."

**Antithesis:** Contrast through parallel structure.
• "It was the best of times, it was the worst of times."
• "Ask not what your country can do for you—ask what you can do for your country."`
      },
      {
        title: "3. Strategic Length Variation",
        content: `**Short sentences:** Punch. Clarity. Emphasis after a long build-up.
• "It was over."
• "She refused."

**Long sentences:** Complexity, flow, accumulation of detail.
• "The report, which had been commissioned six months earlier and had involved dozens of experts across three continents, finally arrived on the minister's desk."

**Rhythm:** Alternate. A series of short sentences creates urgency. A long sentence after short ones slows and deepens.`
      },
      {
        title: "4. Purposeful Fragments and Minor Sentences",
        content: `**Fragment:** Incomplete sentence used for effect.
• "Not a chance."
• "Why? Because."
• "The result? Disaster."

**Minor sentence:** Grammatically complete but minimal (e.g. "Yes." "No." "Never.")

**When to use:** Dialogue, emphasis, headlines, transition. Avoid in formal academic prose unless deliberate.`
      },
    ],
    examples: [
      { english: "After years of debate, the bill was finally passed.", context: "Periodic sentence", explanation: "Main clause delayed for emphasis." },
      { english: "To err is human; to forgive, divine.", context: "Parallelism", explanation: "Parallel structure, omitted 'is' in second part." },
      { english: "It was the best of times, it was the worst of times.", context: "Antithesis", explanation: "Contrast through parallel structure." },
      { english: "The result? Disaster.", context: "Purposeful fragment", explanation: "Fragment for punch." },
    ],
    commonMistakes: [
      { mistake: "We need conviction, courage, and to be compassionate.", correction: "We need conviction, courage, and compassion.", explanation: "Parallel structure: all nouns." },
    ],
    practiceExercises: [
      { question: "Make parallel: She likes to read, to write, and swimming.", answer: "She likes to read, to write, and to swim. / She likes reading, writing, and swimming.", hint: "Same grammatical form" },
      { question: "Periodic: The deal collapsed. (Start with 'After months of negotiation')", answer: "After months of negotiation, the deal collapsed.", hint: "Subordinate clause first" },
    ],
    summary: `Periodic: main clause last (suspense). Loose: main clause first (clarity). Parallelism: same structure. Antithesis: contrast in parallel form. Vary length. Fragments: use sparingly for effect.`,
    relatedArticles: ["c2-gram-cohesion", "c1-gram-inversion", "c2-gram-formal"],
  },

  // 6. Error-free formal writing
  {
    id: "c2-gram-formal",
    title: "Error-Free Formal Writing",
    subtitle: "Agreement, punctuation, articles, prepositions in fixed expressions",
    level: "C2",
    category: "grammar",
    tags: ["formal-writing", "agreement", "punctuation", "articles", "prepositions", "c2"],
    estimatedReadTime: 14,
    introduction: `At C2, formal writing must be error-free. Perfect subject–verb and pronoun agreement in complex structures, impeccable punctuation, correct article use in all cases, and prepositions in fixed expressions are non-negotiable.`,
    sections: [
      {
        title: "1. Perfect Agreement in Complex Structures",
        content: `**Subject–verb:** "The list of items is long." (list = singular)
• "One of the students has failed." (one = subject)
• "Neither the director nor the staff was informed." (nor: verb agrees with nearest)
• "The number of applicants has risen." vs "A number of applicants have left." (a number of = many)

**Pronoun–antecedent:** "Each student must submit their/his or her work." (traditionally his or her; their now widely accepted for singular they)
• "The committee has reached its decision." (committee = collective, singular)
• "None of the reports were/was accurate." (none can take singular or plural)`
      },
      {
        title: "2. Impeccable Punctuation",
        content: `**Semicolon:** Links related independent clauses. "The project was delayed; costs rose."
**Colon:** Introduces list or explanation. "We need three things: time, money, commitment."
**Em dash:** Emphasis or aside. "The result—unexpected—pleased everyone."
**Parentheses:** Non-essential. "The meeting (scheduled for Monday) was postponed."
**Apostrophe:** Possessive (its vs it's), plurals of letters (p's and q's).
**Oxford comma:** Optional but consistent. "A, B, and C" or "A, B and C."`
      },
      {
        title: "3. Correct Article Use in All Cases",
        content: `**Definite (the):** Specific, previously mentioned, unique. "The sun," "the report we discussed."
**Indefinite (a/an):** First mention, non-specific. "A report," "an unexpected result."
**Zero article:** Plurals and uncountables (general). "Books are important." "Information is vital."
**Fixed expressions:** "in the end," "at the moment," "on the other hand," "as a result," "in fact"
**Institutions:** "go to the hospital" (US: hospital; UK: the hospital in some contexts)
**Abstract nouns:** "Life is short." vs "The life of a sailor is hard."`
      },
      {
        title: "4. Prepositions in Fixed Expressions",
        content: `**Verbs + preposition:** depend on, consist of, succeed in, participate in, object to
**Adjectives + preposition:** interested in, capable of, responsible for, aware of, typical of
**Nouns + preposition:** reason for, solution to, difference between, impact on
**Phrasal verbs:** run out of, look forward to, put up with
**Common errors:** different from (not than, in formal), compared with/to, similar to`
      },
    ],
    examples: [
      { english: "The list of items is long.", context: "Subject–verb agreement", explanation: "Subject = list (singular)." },
      { english: "We need three things: time, money, commitment.", context: "Colon", explanation: "Introduces a list." },
      { english: "She is interested in the project.", context: "Adjective + preposition", explanation: "Interested in (fixed)." },
      { english: "The reason for the delay was unclear.", context: "Noun + preposition", explanation: "Reason for (fixed)." },
    ],
    commonMistakes: [
      { mistake: "The list of items are long.", correction: "The list of items is long.", explanation: "Subject is 'list,' not 'items.'" },
      { mistake: "She is interested on the project.", correction: "She is interested in the project.", explanation: "Interested in (fixed preposition)." },
      { mistake: "Different than", correction: "Different from (formal) / Different than (informal US)", explanation: "Formal: different from." },
    ],
    practiceExercises: [
      { question: "Agreement: One of the students _____ (have) failed.", answer: "has", hint: "One = singular subject" },
      { question: "Preposition: She succeeded _____ passing the exam.", answer: "in", hint: "Succeed in + -ing" },
    ],
    summary: `Agreement: identify true subject; collective nouns. Punctuation: semicolon, colon, dash, apostrophe. Articles: the (specific), a/an (non-specific), zero (general). Prepositions: learn fixed expressions (interested in, reason for, succeed in).`,
    relatedArticles: ["c1-gram-punctuation", "articles-a-an-the", "c2-gram-syntax"],
  },
];
