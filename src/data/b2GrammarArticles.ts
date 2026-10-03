// B2 Grammar Articles - 11 themes
// Grammatical range and control - natural flexibility

import type { Article } from "./articlesData";

export const b2GrammarArticles: Article[] = [
  // 1. Mastery of all tenses
  {
    id: "b2-gram-all-tenses",
    title: "Mastery of All Tenses",
    subtitle: "Present, past, and future tenses with precision",
    level: "B2",
    category: "grammar",
    tags: ["tenses", "present", "past", "future", "b2", "grammar"],
    estimatedReadTime: 18,
    introduction: `At B2 level, you need precise control of all major tenses. This means choosing the right tense for context, avoiding confusion between similar forms, and using time markers correctly.`,
    sections: [
      {
        title: "1. Present Tenses with Precision",
        content: `**Present Simple:** Routines, facts, timetables. "She works in London." | "The train leaves at 5."
**Present Continuous:** Now, temporary, future plans. "I'm studying." | "We're meeting tomorrow."
**Present Perfect:** Past with present relevance. "I've finished." | "She's lived here for five years."
**Present Perfect Continuous:** Duration up to now. "I've been waiting for an hour."

**Key distinction:** Simple = habitual/completed; Continuous = in progress; Perfect = connection to now.`
      },
      {
        title: "2. Past Tenses with Precision",
        content: `**Past Simple:** Completed at specific time. "I saw him yesterday."
**Past Continuous:** In progress at a past moment. "I was cooking when she called."
**Past Perfect:** Before another past action. "She had left when I arrived."
**Past Perfect Continuous:** Duration before another past action. "I had been waiting for an hour when he finally came."`
      },
      {
        title: "3. Future Tenses with Precision",
        content: `**Will:** Predictions, decisions at moment of speaking, promises. "It will rain." | "I'll help you."
**Going to:** Plans, intentions, predictions with evidence. "I'm going to study abroad."
**Present Continuous:** Fixed future arrangements. "We're flying to Paris next week."
**Future Simple vs Going to:** Will = spontaneous; Going to = premeditated.`
      },
    ],
    examples: [
      { english: "She's been living here since 2020.", context: "Present Perfect Continuous", explanation: "Duration from past to now." },
      { english: "I had finished cooking when they arrived.", context: "Past Perfect", explanation: "Completed before 'arrived'." },
      { english: "We're getting married next June.", context: "Present Continuous (future)", explanation: "Fixed future arrangement." },
    ],
    commonMistakes: [
      { mistake: "I am living here since 2020.", correction: "I have been living here since 2020.", explanation: "Since + point in time requires Present Perfect (Continuous)." },
      { mistake: "When I arrived, she left.", correction: "When I arrived, she had left.", explanation: "Use Past Perfect when action completed before another past action." },
    ],
    practiceExercises: [
      { question: "Choose: She _____ (work) here for ten years.", answer: "has worked / has been working", hint: "Duration + for → Present Perfect" },
      { question: "Past Perfect: When I got home, they _____ (already/eat).", answer: "had already eaten", hint: "Action before 'got'" },
    ],
    summary: `Master Present (Simple, Continuous, Perfect, Perfect Continuous), Past (Simple, Continuous, Perfect, Perfect Continuous), and Future (will, going to, present continuous). Choose based on time reference and aspect.`,
    relatedArticles: ["present-simple", "present-continuous", "past-simple", "b2-gram-perfect-vs-past", "b2-gram-future"],
  },

  // 2. Present Perfect vs Past Simple
  {
    id: "b2-gram-perfect-vs-past",
    title: "Present Perfect vs Past Simple",
    subtitle: "When to use each tense, time markers, ambiguous cases",
    level: "B2",
    category: "grammar",
    tags: ["present-perfect", "past-simple", "tenses", "b2", "grammar"],
    estimatedReadTime: 14,
    introduction: `The Present Perfect vs Past Simple distinction is one of the most challenging for learners. The key: specific time in the past → Past Simple; connection to present or unspecified time → Present Perfect.`,
    sections: [
      {
        title: "1. When to Use Each Tense",
        content: `**Past Simple:** Action at a specific time in the past. "I saw him yesterday." | "She graduated in 2019."
**Present Perfect:** Action with present relevance; unspecified time; experience. "I've seen that film." | "She has graduated." (result: she's a graduate now)

**Rule of thumb:** When? → Past Simple. Have you ever? / Is there a result now? → Present Perfect.`
      },
      {
        title: "2. Time Markers",
        content: `**Past Simple:** yesterday, last week, in 2020, ago, when I was young
**Present Perfect:** ever, never, already, yet, just, recently, since, for, so far
**Both (context-dependent):** this morning (if morning is over → past; if still morning → present perfect)`
      },
      {
        title: "3. Ambiguous Cases",
        content: `**"I've been to Paris" vs "I went to Paris in 2019":** First = experience (ever); second = when.
**"She's left" vs "She left":** First = result now (she's not here); second = when she left.
**"I've lost my keys" vs "I lost my keys yesterday":** First = present result (I don't have them); second = when.
**American vs British:** Americans often use Past Simple where British use Present Perfect ("Did you eat?" vs "Have you eaten?")`
      },
    ],
    examples: [
      { english: "I've visited Japan. I went there in 2019.", context: "PP for experience, PS for when", explanation: "Combine both: experience + specific time." },
      { english: "Have you finished yet? — No, I haven't finished yet.", context: "Present Perfect + yet", explanation: "Yet = up to now, negative/question." },
    ],
    commonMistakes: [
      { mistake: "I have visited Paris last year.", correction: "I visited Paris last year.", explanation: "Specific time (last year) → Past Simple." },
      { mistake: "Did you ever see the ocean?", correction: "Have you ever seen the ocean?", explanation: "Ever + experience → Present Perfect." },
    ],
    practiceExercises: [
      { question: "Complete: I _____ (see) that film. I _____ (watch) it last week.", answer: "have seen / watched", hint: "Experience + when" },
    ],
    summary: `Past Simple: specific time (yesterday, in 2020). Present Perfect: unspecified time, present result, experience (ever, never). Time markers decide.`,
    relatedArticles: ["present-perfect-basic", "past-simple", "b2-gram-all-tenses"],
  },

  // 3. Future forms
  {
    id: "b2-gram-future",
    title: "Future Forms",
    subtitle: "Will, going to, future perfect, future continuous",
    level: "B2",
    category: "grammar",
    tags: ["future", "will", "going-to", "future-perfect", "future-continuous", "b2"],
    estimatedReadTime: 14,
    introduction: `English has no single "future tense"—instead, we use will, going to, present continuous, and future perfect/continuous. Each conveys different meaning.`,
    sections: [
      {
        title: "1. Will for Predictions",
        content: `**Use:** Predictions without evidence, promises, offers, instant decisions.
• "It will rain tomorrow."
• "I'll help you with that."
• "I promise I'll call."

**With think/believe/hope:** "I think she'll agree."`
      },
      {
        title: "2. Going to for Plans",
        content: `**Use:** Plans, intentions, predictions with evidence.
• "I'm going to study medicine."
• "Look at the clouds—it's going to rain."
• "We're going to get married."

**Difference from will:** Going to = premeditated; will = spontaneous.`
      },
      {
        title: "3. Future Perfect",
        content: `**Form:** will have + past participle
**Use:** Action completed before a future time.
• "By 2030, I will have graduated."
• "She will have finished by the time we arrive."
• "By next week, we will have completed the project."`
      },
      {
        title: "4. Future Continuous",
        content: `**Form:** will be + verb-ing
**Use:** Action in progress at a future moment.
• "This time tomorrow, I'll be flying to Paris."
• "Don't call at 8—I'll be having dinner."
• "She'll be working when you get there."`
      },
    ],
    examples: [
      { english: "By next year, I will have learned Spanish.", context: "Future Perfect", explanation: "Completed before 'next year'." },
      { english: "This time tomorrow, I'll be sunbathing on the beach.", context: "Future Continuous", explanation: "In progress at future moment." },
    ],
    commonMistakes: [
      { mistake: "I will have a meeting at 3.", correction: "I'm having a meeting at 3. / I have a meeting at 3.", explanation: "Fixed arrangements use Present Continuous or Simple." },
    ],
    practiceExercises: [
      { question: "Future Perfect: By 2026, she _____ (complete) her PhD.", answer: "will have completed", hint: "Completed before 2026" },
      { question: "Future Continuous: At 9 PM tonight, I _____ (watch) the match.", answer: "will be watching", hint: "In progress at future moment" },
    ],
    summary: `Will: predictions, promises, spontaneous. Going to: plans, evidence-based predictions. Future Perfect: completed before future time. Future Continuous: in progress at future moment.`,
    relatedArticles: ["future-going-to", "b2-gram-all-tenses", "b2-gram-conditionals"],
  },

  // 4. Conditionals 0-3
  {
    id: "b2-gram-conditionals",
    title: "Conditionals 0-3",
    subtitle: "Zero, first, second, third conditional mastered",
    level: "B2",
    category: "grammar",
    tags: ["conditionals", "zero-conditional", "first-conditional", "second-conditional", "third-conditional", "b2"],
    estimatedReadTime: 16,
    introduction: `Conditionals express hypothetical situations and their consequences. Mastering all four types (0–3) is essential for B2.`,
    sections: [
      {
        title: "1. Zero Conditional",
        content: `**Form:** If + present, present
**Use:** General truths, scientific facts.
• "If you heat water to 100°C, it boils."
• "If it rains, the ground gets wet."`
      },
      {
        title: "2. First Conditional",
        content: `**Form:** If + present, will + verb
**Use:** Real, likely future situations.
• "If it rains tomorrow, we'll stay home."
• "If you ask her, she will help."
**Note:** Never use will in the if-clause.`
      },
      {
        title: "3. Second Conditional",
        content: `**Form:** If + past simple, would + verb
**Use:** Unreal or unlikely present/future.
• "If I won the lottery, I would buy a house."
• "If I were you, I would accept."
**Note:** Use "were" for all persons in formal English (If I were, If he were).`
      },
      {
        title: "4. Third Conditional",
        content: `**Form:** If + past perfect, would have + past participle
**Use:** Unreal past—regrets, hypothetical past.
• "If I had known, I would have come."
• "If she had studied, she would have passed."
**Note:** Never use "would have" in the if-clause.`
      },
    ],
    examples: [
      { english: "If I had known, I would have helped.", context: "Third conditional", explanation: "Unreal past: didn't know, didn't help." },
      { english: "If I were you, I'd apologize.", context: "Second conditional", explanation: "Were for all persons (formal)." },
    ],
    commonMistakes: [
      { mistake: "If I would have money, I would travel.", correction: "If I had money, I would travel.", explanation: "Never use would in the if-clause." },
      { mistake: "If I will see him, I'll tell him.", correction: "If I see him, I'll tell him.", explanation: "First conditional: present in if-clause." },
    ],
    practiceExercises: [
      { question: "Third conditional: If she _____ (study), she _____ (pass).", answer: "had studied / would have passed", hint: "Unreal past" },
    ],
    summary: `0: If + present, present (truths). 1: If + present, will (real future). 2: If + past, would (unreal present). 3: If + past perfect, would have (unreal past). Never use will/would in the if-clause.`,
    relatedArticles: ["first-conditional", "second-conditional", "b2-gram-mixed-conditionals"],
  },

  // 5. Mixed Conditionals
  {
    id: "b2-gram-mixed-conditionals",
    title: "Mixed Conditionals",
    subtitle: "Past condition present result, present condition past result",
    level: "B2",
    category: "grammar",
    tags: ["mixed-conditionals", "conditionals", "b2"],
    estimatedReadTime: 12,
    introduction: `Mixed conditionals combine different time frames: a past condition with a present result, or a present condition with a past result.`,
    sections: [
      {
        title: "1. Past Condition, Present Result",
        content: `**Form:** If + past perfect, would + base verb
**Use:** Past action affects the present.
• "If I had worked harder at school, I would have a better job now."
• "If she had taken that job, she would be living in Paris."
• "If we had invested earlier, we would own the company today."`
      },
      {
        title: "2. Present Condition, Past Result",
        content: `**Form:** If + past simple, would have + past participle
**Use:** General characteristic (present) would have changed a past outcome.
• "If I were taller, I would have been selected for the team."
• "If she spoke French, she would have understood."
• "If he were more careful, he wouldn't have made that mistake."`
      },
    ],
    examples: [
      { english: "If I had studied more, I would know the answer now.", context: "Past → present", explanation: "Past condition, present result." },
      { english: "If I were smarter, I would have passed that exam.", context: "Present → past", explanation: "Unreal present trait, past result." },
    ],
    commonMistakes: [
      { mistake: "If I had studied, I would have known.", correction: "Correct for unreal past. For mixed (present result): If I had studied, I would know.", explanation: "Choose time frame for result." },
    ],
    practiceExercises: [
      { question: "Mixed: If she _____ (take) that job, she _____ (live) in Paris now.", answer: "had taken / would be living", hint: "Past condition, present result" },
    ],
    summary: `Past→Present: If + past perfect, would + base. Present→Past: If + past simple, would have + pp. Links different time frames.`,
    relatedArticles: ["b2-gram-conditionals", "mixed-conditionals"],
  },

  // 6. Advanced passive voice
  {
    id: "b2-gram-passive",
    title: "Advanced Passive Voice",
    subtitle: "Passive in all tenses, with modals, double object passives",
    level: "B2",
    category: "grammar",
    tags: ["passive", "passive-voice", "b2"],
    estimatedReadTime: 14,
    introduction: `The passive voice (be + past participle) shifts focus from the agent to the action. At B2, you need it in all tenses, with modals, and in double-object structures.`,
    sections: [
      {
        title: "1. Passive in All Tenses",
        content: `**Present:** am/is/are + pp — The letter is written.
**Past:** was/were + pp — The letter was written.
**Future:** will be + pp — The letter will be written.
**Present Perfect:** have/has been + pp — The letter has been written.
**Past Perfect:** had been + pp — The letter had been written.
**Future Perfect:** will have been + pp — The letter will have been written.
**Continuous:** am/is/are being + pp — The house is being built.`
      },
      {
        title: "2. Passive with Modals",
        content: `**Form:** modal + be + pp (or modal + have been + pp for past)
• "The report must be submitted by Friday."
• "The work can be done by tomorrow."
• "The letter should have been sent yesterday."
• "The meeting might be postponed."`
      },
      {
        title: "3. Double Object Passives",
        content: `**Active:** She gave me the book. / She gave the book to me.
**Passive (two options):**
• "I was given the book." (indirect object as subject)
• "The book was given to me." (direct object as subject)

**Verbs:** give, send, offer, show, tell, teach
• "He was offered the job." | "The job was offered to him."`
      },
    ],
    examples: [
      { english: "The report must be submitted by Friday.", context: "Passive with modal", explanation: "Modal + be + past participle." },
      { english: "I was given the book. / The book was given to me.", context: "Double object passive", explanation: "Two possible passive forms." },
    ],
    commonMistakes: [
      { mistake: "The report must submitted by Friday.", correction: "The report must be submitted by Friday.", explanation: "Modal passive requires 'be' + past participle." },
    ],
    practiceExercises: [
      { question: "Passive with modal: The work _____ (can/do) by tomorrow.", answer: "can be done", hint: "Modal + be + pp" },
    ],
    summary: `Passive = be + past participle (in any tense). With modals: modal + be + pp. Double object: I was given the book / The book was given to me.`,
    relatedArticles: ["passive-voice", "c1-gram-advanced-passive"],
  },

  // 7. Relative clauses
  {
    id: "b2-gram-relative",
    title: "Relative Clauses",
    subtitle: "Defining and non-defining relative clauses, reduced clauses",
    level: "B2",
    category: "grammar",
    tags: ["relative-clauses", "defining", "non-defining", "b2"],
    estimatedReadTime: 14,
    introduction: `Relative clauses add information about a noun. Defining clauses identify which one; non-defining clauses add extra information. Reduced relative clauses shorten the structure.`,
    sections: [
      {
        title: "1. Defining Clauses",
        content: `**No commas.** Essential to identify the noun.
• "The book that I bought is excellent."
• "The person who called left a message."
• "The house where I grew up was sold."

**Pronouns:** who (people), which (things), that (people/things), where (place), when (time)
**That vs which:** In defining clauses, both possible for things. "The book that/which I bought."`
      },
      {
        title: "2. Non-Defining Clauses",
        content: `**Commas.** Extra information; can be removed without losing meaning.
• "My brother, who lives in Paris, is visiting."
• "The report, which was submitted last week, needs revision."

**Rule:** Non-defining uses who/which, NEVER that. Always use commas.`
      },
      {
        title: "3. Reduced Relative Clauses",
        content: `**Present participle (-ing):** "The people waiting outside are getting impatient." (= who are waiting)
**Past participle (-ed):** "The report submitted last week needs revision." (= which was submitted)
**Omitting relative pronoun + be:** "The man (who is) standing there is my uncle."`
      },
    ],
    examples: [
      { english: "The report, which was submitted last week, needs revision.", context: "Non-defining", explanation: "Commas, which (not that)." },
      { english: "The people waiting outside are getting impatient.", context: "Reduced (present participle)", explanation: "Who are waiting → waiting" },
    ],
    commonMistakes: [
      { mistake: "The report, that was submitted last week, needs revision.", correction: "The report, which was submitted last week, needs revision.", explanation: "Non-defining: use which, not that." },
    ],
    practiceExercises: [
      { question: "Reduce: The man who is standing there is my uncle.", answer: "The man standing there is my uncle.", hint: "Omit who is, keep -ing" },
    ],
    summary: `Defining: no commas, that/who/which. Non-defining: commas, which/who (never that). Reduced: participle (waiting, submitted) or omit pronoun + be.`,
    relatedArticles: ["relative-clauses", "c1-gram-complex-clauses"],
  },

  // 8. Reported Speech
  {
    id: "b2-gram-reported",
    title: "Reported Speech",
    subtitle: "Statements, questions, commands, time and place changes",
    level: "B2",
    category: "grammar",
    tags: ["reported-speech", "indirect-speech", "b2"],
    estimatedReadTime: 16,
    introduction: `Reported (indirect) speech conveys what someone said without direct quotation. Statements, questions, and commands each have specific rules. Time and place expressions shift.`,
    sections: [
      {
        title: "1. Statements",
        content: `**Structure:** He said (that) + clause. Tense shifts back.
• "I am tired." → He said (that) he was tired.
• "I have finished." → He said (that) he had finished.
• "I will help." → He said (that) he would help.
• "I saw her." → He said (that) he had seen her.

**Told:** Use with object. "He told me (that) he was leaving."`
      },
      {
        title: "2. Questions",
        content: `**Yes/No:** asked if/whether + clause (statement word order)
• "Are you coming?" → He asked if I was coming.
**Wh-questions:** asked + wh-word + clause (statement order)
• "Where do you live?" → He asked where I lived.
**No inversion, no do/does/did** in reported question.`
      },
      {
        title: "3. Commands and Requests",
        content: `**Structure:** told/asked + object + (not) to + infinitive
• "Stay here." → He told me to stay here.
• "Don't leave." → He told me not to leave.
• "Please help me." → She asked me to help her.`
      },
      {
        title: "4. Time and Place Changes",
        content: `**Shifts:** now→then, today→that day, yesterday→the day before, tomorrow→the next day, here→there, this→that
**Note:** If reporting immediately or in same context, shifts optional. "He said he's tired" (still relevant).`
      },
    ],
    examples: [
      { english: "He asked where I lived.", context: "Reported Wh-question", explanation: "Statement word order, no inversion." },
      { english: "She told me not to leave.", context: "Reported command", explanation: "Told + object + not to + infinitive." },
    ],
    commonMistakes: [
      { mistake: "He asked where did I live.", correction: "He asked where I lived.", explanation: "Reported questions use statement order." },
    ],
    practiceExercises: [
      { question: "Report: 'I will help.' (She said...)", answer: "She said (that) she would help.", hint: "Will → would" },
      { question: "Report: 'Don't go.' (He told me...)", answer: "He told me not to go.", hint: "Negative command: not to + infinitive" },
    ],
    summary: `Statements: said (that) + clause, tense backshift. Questions: asked if/whether or wh-word + statement order. Commands: told/asked + object + (not) to + infinitive. Shift time/place.`,
    relatedArticles: ["reported-speech"],
  },

  // 9. Modals for deduction
  {
    id: "b2-gram-modals-deduction",
    title: "Modals for Deduction",
    subtitle: "Must be, can't be, might have, could have, should have, would have",
    level: "B2",
    category: "grammar",
    tags: ["modals", "deduction", "must", "can't", "might", "could", "b2"],
    estimatedReadTime: 14,
    introduction: `Modals express certainty and probability. Must/can't for present deduction; might/could for possibility; must have/might have for past deduction; should have/would have for regret and speculation.`,
    sections: [
      {
        title: "1. Must Be / Can't Be (Present)",
        content: `**Must + infinitive:** Logical certainty (positive). "She must be at home—her lights are on."
**Can't + infinitive:** Logical certainty (negative). "He can't be serious—he's joking."
**Note:** Use must/can't (not mustn't) for deduction. Mustn't = prohibition.`
      },
      {
        title: "2. Might Have / Could Have (Past Possibility)",
        content: `**Might/could have + pp:** Possibility in the past.
• "She might have forgotten."
• "He could have been delayed."
• "They may have left early."`
      },
      {
        title: "3. Should Have / Would Have",
        content: `**Should have + pp:** Expectation not met, regret. "You should have told me."
**Would have + pp:** Unreal past (often in conditionals). "I would have helped if I'd known."
**Must have + pp:** Certainty about past. "He must have left early—his car is gone."`
      },
    ],
    examples: [
      { english: "She must be tired—she's been working all day.", context: "Must (present deduction)", explanation: "Logical certainty." },
      { english: "He can't have said that—it's not like him.", context: "Can't have (past deduction)", explanation: "Certainty that something didn't happen." },
      { english: "You should have called me.", context: "Should have (regret)", explanation: "Expected but didn't happen." },
    ],
    commonMistakes: [
      { mistake: "He must have left. (certainty)", correction: "Correct. Must have = logical certainty about past.", explanation: "Must have + pp = past deduction." },
      { mistake: "He mustn't be at home.", correction: "He can't be at home. (for deduction)", explanation: "Use can't for negative deduction; mustn't = prohibition." },
    ],
    practiceExercises: [
      { question: "Deduction (past): His car is gone. He _____ (leave).", answer: "must have left", hint: "Logical certainty about past" },
    ],
    summary: `Must/can't: present deduction. Must have/can't have: past deduction. Might/could have: past possibility. Should have: regret. Would have: unreal past.`,
    relatedArticles: ["modals-basic", "c2-gram-modality"],
  },

  // 10. Complex structures
  {
    id: "b2-gram-complex",
    title: "Complex Structures",
    subtitle: "Compound sentences, multiple subordinate clauses",
    level: "B2",
    category: "grammar",
    tags: ["complex-sentences", "compound", "subordinate", "b2"],
    estimatedReadTime: 12,
    introduction: `Complex structures combine clauses to express relationships between ideas. Compound sentences link independent clauses; complex sentences use subordinate clauses.`,
    sections: [
      {
        title: "1. Compound Sentences",
        content: `**Coordinating conjunctions:** and, but, or, so, nor, yet
• "I studied hard, and I passed the exam."
• "She wanted to go, but she was too tired."
• "We can take the train or drive."

**Punctuation:** Comma before conjunction when linking two independent clauses.`
      },
      {
        title: "2. Multiple Subordinate Clauses",
        content: `**Subordinate clauses:** Dependent on main clause. Introduced by because, although, when, if, that, which, who, etc.
• "I left early because I was tired, although I had wanted to stay."
• "The book that I bought, which was recommended by a friend, is excellent."
• "When she arrived, after she had called, we began the meeting."

**Avoid over-embedding:** More than two levels can reduce clarity.`
      },
    ],
    examples: [
      { english: "I left early because I was tired, although I had wanted to stay.", context: "Multiple subordinate clauses", explanation: "Because + although." },
    ],
    commonMistakes: [
      { mistake: "I was tired. I left early.", correction: "Both correct. Or: I left early because I was tired.", explanation: "Compound/complex adds explicit relationship." },
    ],
    practiceExercises: [
      { question: "Combine: She was tired. She stayed. (Use 'although')", answer: "Although she was tired, she stayed. / She stayed although she was tired.", hint: "Concession" },
    ],
    summary: `Compound: independent clauses + and/but/or/so. Complex: main clause + subordinate (because, although, when, that, which). Combine for sophistication.`,
    relatedArticles: ["c1-gram-complex-clauses", "c1-gram-subordination"],
  },

  // 11. Inversions for emphasis
  {
    id: "b2-gram-inversions",
    title: "Inversions for Emphasis",
    subtitle: "Not only...but also, Never/Rarely/Seldom, Had I known...",
    level: "B2",
    category: "grammar",
    tags: ["inversion", "emphasis", "not-only", "never", "had-i-known", "b2"],
    estimatedReadTime: 12,
    introduction: `Inversion—placing the verb before the subject—adds emphasis and formality. Not only...but also, negative adverbs (never, rarely, seldom), and conditional inversion (Had I known) are essential at B2.`,
    sections: [
      {
        title: "1. Not Only... But Also",
        content: `**Inversion after "not only":** Auxiliary + subject + main verb
• "Not only did she win, but she also broke the record."
• "Not only is he talented, but he is also hardworking."
• "Not only has the project been delayed, but costs have risen."

**Without auxiliary:** Add do/does/did: "Not only does he speak French, but he also writes it."`
      },
      {
        title: "2. Never/Rarely/Seldom + Inversion",
        content: `**When these open the sentence:** Invert (auxiliary + subject)
• "Never have I seen such a thing."
• "Rarely does one find such quality."
• "Seldom has such an opportunity arisen."`
      },
      {
        title: "3. Had I Known...",
        content: `**Conditional inversion (formal):** Had + subject + past participle = If + subject + had + pp
• "Had I known, I would have come." (= If I had known...)
• "Had we acted sooner, we might have prevented it."

**Were/Should:** "Were I you, I would refuse." | "Should you need help, call me."`
      },
    ],
    examples: [
      { english: "Not only did she win, but she also broke the record.", context: "Not only inversion", explanation: "Auxiliary + subject after not only." },
      { english: "Never have I seen such a thing.", context: "Never + inversion", explanation: "Never + have + I." },
      { english: "Had I known, I would have come.", context: "Conditional inversion", explanation: "Had + subject + pp = If I had..." },
    ],
    commonMistakes: [
      { mistake: "Not only she won, but she also broke the record.", correction: "Not only did she win, but she also broke the record.", explanation: "Must invert: auxiliary + subject." },
    ],
    practiceExercises: [
      { question: "Invert: If I had known, I would have helped.", answer: "Had I known, I would have helped.", hint: "Had + subject + pp" },
    ],
    summary: `Not only + auxiliary + subject + verb. Never/Rarely/Seldom + inversion. Had I known = If I had known. Use for emphasis and formality.`,
    relatedArticles: ["c1-gram-inversion", "c1-gram-conditionals"],
  },
];
