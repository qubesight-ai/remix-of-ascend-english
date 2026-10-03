// C1 Advanced Grammar and Syntax Articles
// 9 articles covering structural sophistication and stylistic control

import type { Article } from "./articlesData";

export const c1GrammarArticles: Article[] = [
  // 1. Complex clause structures
  {
    id: "c1-gram-complex-clauses",
    title: "Complex Clause Structures",
    subtitle: "Multiple subordinate clauses, reduced clauses, and complex noun clauses",
    level: "C1",
    category: "grammar",
    tags: ["complex-clauses", "clauses", "participles", "subordination", "c1", "advanced-grammar"],
    estimatedReadTime: 14,
    introduction: `At C1 level, you need to build sophisticated sentences that pack multiple ideas into a single, grammatically coherent structure. Complex clause structures—including multiple subordinate clauses, reduced clauses (participles), and complex noun clauses—are the foundation of formal and academic English.`,
    sections: [
      {
        title: "1. Multiple Subordinate Clauses",
        content: `A subordinate clause depends on a main clause for meaning. Advanced writers combine several subordinate clauses in one sentence.

**Types of subordinate clauses:**
• **Relative clauses:** The report, which was submitted last week, needs revision.
• **Adverbial clauses:** Although he was tired, he continued working so that he could meet the deadline.
• **Noun clauses:** What she said at the meeting surprised everyone who was present.

**Combining clauses:**
- "The project that we discussed, which had been delayed for months, finally received approval after the board had reviewed the budget."
- Use commas with non-defining relative clauses; omit with defining ones.`
      },
      {
        title: "2. Reduced Clauses (Participles)",
        content: `Participle clauses shorten sentences by replacing full clauses with -ing or -ed forms.

**Present participle (-ing) – active meaning:**
• "Reading the instructions carefully, he managed to assemble the furniture." (= After he read...)
• "Knowing the risks, she decided to proceed anyway."

**Past participle (-ed) – passive meaning:**
• "Seen from that height, the city looks magnificent." (= When it is seen from...)
• "Written in 1922, the novel remains influential."

**Perfect participle (having + past participle) – action completed before main verb:**
• "Having read the report, she was able to answer all questions."
• "Having been informed of the delay, we adjusted our plans."`
      },
      {
        title: "3. Complex Noun Clauses",
        content: `Noun clauses function as subjects, objects, or complements. They can be introduced by:

**That-clauses:** I wasn't aware that the meeting had been cancelled.
**What-clauses:** What happens next depends entirely on you.
**Whether/if-clauses:** The question of whether to proceed remains open.
**Whoever/whatever/whichever:** Whoever wins will face tough challenges.

**Position in sentence:**
• Subject: What she said surprised everyone.
• Object: I believe that we can succeed.
• Complement: The problem is that we lack resources.
• Appositive: The fact that he lied is unacceptable.`
      },
    ],
    examples: [
      { english: "The report, which was submitted last week, needs revision.", context: "Non-defining relative clause", explanation: "Commas signal non-essential information." },
      { english: "Having read the instructions carefully, he managed to assemble the furniture.", context: "Perfect participle clause", explanation: "Action completed before main verb." },
      { english: "Seen from that height, the city looks magnificent.", context: "Past participle (passive)", explanation: "Equivalent to 'When it is seen from...'" },
      { english: "What she said at the meeting surprised everyone.", context: "Noun clause as subject", explanation: "'What' = the thing that." },
    ],
    commonMistakes: [
      { mistake: "The report, that was submitted last week, needs revision.", correction: "The report, which was submitted last week, needs revision.", explanation: "Non-defining relative clauses use 'which', not 'that'." },
      { mistake: "Reading the report, she was able to answer.", correction: "Having read the report, she was able to answer.", explanation: "Use perfect participle when the action is completed before the main verb." },
      { mistake: "I wasn't aware of that the meeting had been cancelled.", correction: "I wasn't aware that the meeting had been cancelled.", explanation: "After 'aware', use 'that' directly, not 'of that'." },
    ],
    practiceExercises: [
      { question: "Combine: He finished the report. He submitted it. (Use participle)", answer: "Having finished the report, he submitted it.", hint: "Perfect participle for completed action" },
      { question: "Replace with participle: When it is viewed from above, the pattern is clear.", answer: "Viewed from above, the pattern is clear.", hint: "Past participle for passive" },
      { question: "Fill: The fact _____ he resigned shocked everyone.", answer: "that", hint: "Appositive clause after 'fact'" },
    ],
    summary: `Complex clause structures combine multiple subordinate clauses, use participle clauses (present for active, past for passive, perfect for prior action), and employ noun clauses as subjects, objects, or complements. Master these to produce dense, formal English.`,
    relatedArticles: ["c1-gram-subordination", "relative-clauses", "c1-gram-discourse"],
  },

  // 2. Subordination and embedding
  {
    id: "c1-gram-subordination",
    title: "Subordination and Embedding",
    subtitle: "Deep embedded clauses, complex relative structures, and sentential complements",
    level: "C1",
    category: "grammar",
    tags: ["subordination", "embedding", "noun-clauses", "relative-clauses", "c1", "advanced-grammar"],
    estimatedReadTime: 14,
    introduction: `Subordination and embedding allow you to nest one clause inside another, creating sentences that convey complex relationships between ideas. This is characteristic of academic and formal writing.`,
    sections: [
      {
        title: "1. Deep Embedded Clauses",
        content: `An embedded clause is a clause that functions as part of a larger clause. Deep embedding means clauses within clauses within clauses.

**Example:**
"The theory [that the researcher [who had spent years in the field] proposed] challenged conventional wisdom."

**Structure:** main clause → that-clause → who-clause (embedded)

**Guidance:** Avoid more than two levels of embedding—readability suffers. Prefer splitting into two sentences.`
      },
      {
        title: "2. Complex Relative Structures",
        content: `Beyond simple who/which/that, advanced relative structures include:

**Preposition + which/whom:**
• "The document to which we referred has been updated."
• "The person with whom I spoke is no longer employed."

**Relative clauses with quantifiers:**
• "He has three books, all of which are out of print."
• "There were 20 applicants, none of whom met the criteria."

**Wh-ever (nominal relative):**
• "Whatever you decide will be acceptable."
• "Whoever said that was mistaken."`
      },
      {
        title: "3. Sentential Complements",
        content: `A sentential complement is a clause that completes the meaning of a verb, adjective, or noun.

**Verb + that-clause:** I suggest that we reconsider. | She insisted that he leave.
**Adjective + that-clause:** I'm confident that we'll succeed. | It's essential that you attend.
**Noun + that-clause:** The fact that he lied is unacceptable. | There's no doubt that she's qualified.

**Whether vs if:** Use 'whether' after prepositions and in formal writing.
• "The question of whether to proceed remains open." ✓
• "The question of if to proceed..." ✗`
      },
    ],
    examples: [
      { english: "Whatever happens next depends entirely on you.", context: "Nominal relative as subject", explanation: "'Whatever' = anything that." },
      { english: "The question of whether to proceed remains open.", context: "Whether after preposition", explanation: "Use 'whether', not 'if', after 'of'." },
      { english: "He has three books, all of which are out of print.", context: "Quantifier + relative", explanation: "Complex relative structure." },
    ],
    commonMistakes: [
      { mistake: "The question of if to proceed remains open.", correction: "The question of whether to proceed remains open.", explanation: "Use 'whether' after prepositions, not 'if'." },
      { mistake: "The person who I spoke with.", correction: "The person with whom I spoke. / The person I spoke with.", explanation: "Formal: preposition + whom. Informal: end with preposition." },
    ],
    practiceExercises: [
      { question: "Complete: _____ happens, we must stay calm.", answer: "Whatever", hint: "Nominal relative for 'anything that'" },
      { question: "Rephrase formally: The document we referred to.", answer: "The document to which we referred.", hint: "Preposition + which" },
    ],
    summary: `Subordination and embedding nest clauses within clauses. Use complex relative structures (preposition + which/whom, quantifiers) and sentential complements (verb/adj/noun + that-clause). Prefer 'whether' over 'if' in formal contexts.`,
    relatedArticles: ["c1-gram-complex-clauses", "relative-clauses", "c1-gram-discourse"],
  },

  // 3. All conditionals (including mixed)
  {
    id: "c1-gram-conditionals",
    title: "All Conditionals Including Mixed",
    subtitle: "Perfect third conditional, mixed conditionals, and alternative modals",
    level: "C1",
    category: "grammar",
    tags: ["conditionals", "mixed-conditionals", "third-conditional", "c1", "advanced-grammar"],
    estimatedReadTime: 16,
    introduction: `C1 requires mastery of all conditional types, including the perfect third conditional and mixed conditionals, which link different time frames. You must also use alternative modals (might, could, would) with precision.`,
    sections: [
      {
        title: "1. Perfect Third Conditional",
        content: `Standard third conditional: If + past perfect, would have + past participle
• "If I had studied harder, I would have passed."

**Variations with modals:**
• "If I had known, I might have come." (possibility)
• "If you had asked, I could have helped." (ability)
• "If he had listened, he would never have made that mistake." (emphasis)`
      },
      {
        title: "2. Mixed: Past Unreal → Present Result",
        content: `If + past perfect, would + base verb
Used when a past condition affects the present.

**Examples:**
• "If I had worked harder at school, I would have a better job now."
• "If she had taken that job, she would be living in Paris."
• "If we had invested earlier, we would own the company today."

**Logic:** Past unreal condition (didn't happen) → present unreal result.`
      },
      {
        title: "3. Mixed: Present Unreal → Past Result",
        content: `If + past simple, would have + past participle
Used when a general characteristic (present) would have changed a past outcome.

**Examples:**
• "If I were taller, I would have been selected for the team."
• "If she spoke French, she would have understood the conversation."
• "If he were more careful, he wouldn't have made that error."

**Logic:** Unreal present characteristic → past unreal result.`
      },
      {
        title: "4. Conditionals with Alternative Modals",
        content: `Replace 'would' with might, could, should for nuance:

**Might:** possibility – "If you had told me, I might have helped."
**Could:** ability/permission – "If you asked, you could borrow it."
**Should:** advice (rare in conditionals) – "If you see him, you should apologize."

**Inversion (formal):** Had I known, I would have come. (Instead of "If I had known...")`
      },
    ],
    examples: [
      { english: "If I had worked harder at school, I would have a better job now.", context: "Mixed: past → present", explanation: "Past condition, present result." },
      { english: "If I were taller, I would have been selected.", context: "Mixed: present → past", explanation: "Unreal present trait, past result." },
      { english: "Had I known, I would have come.", context: "Inversion (formal)", explanation: "Had + subject + past participle." },
    ],
    commonMistakes: [
      { mistake: "If I would have known, I would have come.", correction: "If I had known, I would have come.", explanation: "Never use 'would' in the if-clause." },
      { mistake: "If I had studied, I would know.", correction: "If I had studied, I would know. (Correct for mixed!)", explanation: "Mixed conditional: past condition, present result—this is correct." },
    ],
    practiceExercises: [
      { question: "Mixed conditional: If she _____ (take) that job, she _____ (live) in Paris now.", answer: "had taken / would be living", hint: "Past unreal → present result" },
      { question: "Invert: If I had known, I would have helped.", answer: "Had I known, I would have helped.", hint: "Had + subject + past participle" },
    ],
    summary: `Master third conditional (if + past perfect, would have + pp), mixed past→present (if + past perfect, would + base), mixed present→past (if + past simple, would have + pp), and inversion (Had I known...). Never use 'would' in the if-clause.`,
    relatedArticles: ["first-conditional", "second-conditional", "mixed-conditionals", "c1-gram-inversion"],
  },

  // 4. Advanced passive constructions
  {
    id: "c1-gram-advanced-passive",
    title: "Advanced Passive Constructions",
    subtitle: "Reporting verbs, causative passive, passive infinitive, and impersonal passive",
    level: "C1",
    category: "grammar",
    tags: ["passive", "reporting-verbs", "causative", "impersonal", "c1", "advanced-grammar"],
    estimatedReadTime: 14,
    introduction: `Beyond the basic passive (be + past participle), C1 demands control of reporting passives, causative structures, passive infinitives, and impersonal constructions. These are essential for academic and formal writing.`,
    sections: [
      {
        title: "1. Passive with Reporting Verbs",
        content: `It + passive reporting verb + that-clause
Used to present information without attributing it to a specific source.

**Common verbs:** believe, think, expect, say, report, claim, assume, suppose, understand

**Examples:**
• "It is believed that the economy will recover."
• "It was reported that the minister had resigned."
• "It is expected that demand will increase."
• "It has been suggested that we postpone the meeting."

**Alternative:** Subject + passive + to-infinitive
• "The economy is believed to recover." / "The minister was reported to have resigned."`
      },
      {
        title: "2. Causative Passive (have/get something done)",
        content: `Have/Get + object + past participle
Meaning: arrange for someone else to do something for you.

**Examples:**
• "I had my car repaired." (I arranged for someone to repair it)
• "She got her hair cut."
• "We need to have the report reviewed by legal."
• "He had his passport stolen." (something was done to him—adverse)

**Note:** Get is more informal than have.`
      },
      {
        title: "3. Passive with Infinitive",
        content: `Subject + passive verb + to-infinitive
Common with: say, believe, expect, think, consider, know, report

**Present reference:** He is said to be wealthy. (= People say he is wealthy)
**Past reference:** He is said to have been wealthy. (= People say he was wealthy)
**Future reference:** He is expected to arrive tomorrow.

**Other examples:**
• "She is considered to be the best candidate."
• "The project is known to have been delayed."
• "They are believed to be negotiating."`
      },
      {
        title: "4. Impersonal Passive",
        content: `Used when the agent is unknown, obvious, or unimportant.

**It + passive + that:** It is rumoured that he will resign.
**There + passive + to be:** There are said to be discrepancies in the accounts.

**Gerund after passive:** She was prevented from attending. | He was accused of stealing.`
      },
    ],
    examples: [
      { english: "It is believed that the economy will recover.", context: "Reporting passive", explanation: "Neutral, impersonal attribution." },
      { english: "I had my car repaired last week.", context: "Causative passive", explanation: "Arranged for someone else to do it." },
      { english: "He is said to be the richest man in the country.", context: "Passive infinitive", explanation: "People say he is..." },
    ],
    commonMistakes: [
      { mistake: "It is said that he is rich.", correction: "It is said that he is rich. / He is said to be rich.", explanation: "Both correct; infinitive version is more concise." },
      { mistake: "I had my car to repair.", correction: "I had my car repaired.", explanation: "Causative: have + object + past participle (not infinitive)." },
    ],
    practiceExercises: [
      { question: "Transform: People believe he is guilty. (passive reporting)", answer: "It is believed that he is guilty. / He is believed to be guilty.", hint: "It + passive + that, or subject + passive + to-infinitive" },
      { question: "Causative: She arranged for someone to cut her hair.", answer: "She had her hair cut. / She got her hair cut.", hint: "Have/get + object + past participle" },
    ],
    summary: `Advanced passive: reporting (It is believed that... / He is said to be...), causative (have/get sth done), passive infinitive (is considered to be), impersonal (It is rumoured that...). Master these for formal and academic writing.`,
    relatedArticles: ["passive-voice", "c1-gram-nominalization", "reported-speech"],
  },

  // 5. Nominalization
  {
    id: "c1-gram-nominalization",
    title: "Nominalization",
    subtitle: "Converting verbs and adjectives to nouns for academic and formal writing",
    level: "C1",
    category: "grammar",
    tags: ["nominalization", "academic-writing", "formal", "c1", "advanced-grammar"],
    estimatedReadTime: 12,
    introduction: `Nominalization is the process of turning verbs or adjectives into nouns. It is a hallmark of academic and formal English, allowing denser information and a more objective tone.`,
    sections: [
      {
        title: "1. Convert Verbs to Nouns",
        content: `**Common suffixes: -tion/-sion, -ment, -al, -ence/-ance, -ure**

| Verb | Noun |
|------|------|
| implement | implementation |
| develop | development |
| analyze | analysis |
| apply | application |
| discover | discovery |
| fail | failure |
| arrive | arrival |

**Example:** "They implemented the policy" → "The implementation of the policy"`
      },
      {
        title: "2. Convert Adjectives to Nouns",
        content: `**Suffixes: -ity, -ness, -ance/-ence, -dom**

| Adjective | Noun |
|-----------|------|
| important | importance |
| different | difference |
| able | ability |
| happy | happiness |
| free | freedom |
| complex | complexity |`
      },
      {
        title: "3. Complex Nominal Structures",
        content: `**The + noun + of + noun:** The implementation of new policies
**Due to + noun:** Due to the complexity of the issue
**The + adjective + noun:** The rapid development of technology

**In academic writing:**
• "The government's failure to act caused criticism." (instead of "The government failed to act, which caused...")
• "The importance of education cannot be overstated." (instead of "Education is very important...")`
      },
      {
        title: "4. Use in Academic Writing",
        content: `Nominalization creates objectivity and concision. Avoid overusing—it can make text heavy. Balance with active verbs for readability.`
      },
    ],
    examples: [
      { english: "The implementation of new policies requires careful planning.", context: "Verb → noun", explanation: "More formal than 'Implementing new policies...'" },
      { english: "The importance of education cannot be overstated.", context: "Adjective → noun", explanation: "Dense, academic style." },
      { english: "Their failure to act caused widespread criticism.", context: "Complex nominal", explanation: "Noun phrase as subject." },
    ],
    commonMistakes: [
      { mistake: "The way they implement policies is important.", correction: "The implementation of policies is important.", explanation: "Nominalization is more formal and concise." },
    ],
    practiceExercises: [
      { question: "Nominalize: They analyzed the data carefully.", answer: "Their careful analysis of the data...", hint: "Verb → noun, adjective → adverb equivalent" },
      { question: "Nominalize: The issue is complex.", answer: "The complexity of the issue...", hint: "Adjective → noun" },
    ],
    summary: `Nominalization converts verbs (implement→implementation) and adjectives (important→importance) into nouns. Use for formal and academic writing: "The implementation of...", "Due to the complexity of...".`,
    relatedArticles: ["c1-gram-advanced-passive", "academic-writing", "formal-english"],
  },

  // 6. Inversion and emphasis
  {
    id: "c1-gram-inversion",
    title: "Inversion and Emphasis",
    subtitle: "Not only...but also, conditional inversion, negative inversion, cleft sentences",
    level: "C1",
    category: "grammar",
    tags: ["inversion", "emphasis", "cleft-sentences", "c1", "advanced-grammar"],
    estimatedReadTime: 14,
    introduction: `Inversion—placing the verb before the subject—and cleft sentences are powerful tools for emphasis and formal style. They mark advanced, native-like control of English.`,
    sections: [
      {
        title: "1. Not Only... But Also (Inversion)",
        content: `When "not only" opens the clause, invert subject and auxiliary.

• "Not only did she win the race, but she also broke the record."
• "Not only is he talented, but he is also hardworking."
• "Not only has the project been delayed, but costs have risen."

**Without auxiliary:** Add do/does/did: "Not only does he speak French, but he also writes it."`
      },
      {
        title: "2. Conditional Inversion (Had I known...)",
        content: `Replace "If I had..." with "Had I..." (formal)

• "Had I known, I would have come."
• "Had we acted sooner, we might have prevented it."
• "Were I in your position, I would refuse." (present unreal)
• "Should you need assistance, please contact us." (future, formal)`
      },
      {
        title: "3. Negative and Adverb Inversion",
        content: `**Never, seldom, rarely, hardly, scarcely, no sooner:** invert when they open the sentence.

• "Never have I seen such a thing."
• "Rarely does one find such quality."
• "Hardly had we left when it started to rain."
• "No sooner had she arrived than the meeting began."
• "Under no circumstances will we accept that."`
      },
      {
        title: "4. Cleft Sentences",
        content: `**What-clause:** What I need is more time. (= I need more time)
**It-cleft:** It was John who broke the window. (= John broke the window)
**All-clause:** All I want is peace. (= I want peace)

**Emphasis placement:** The stressed element goes after the verb be.`
      },
    ],
    examples: [
      { english: "Not only did she win, but she also broke the record.", context: "Not only inversion", explanation: "Invert after 'not only'." },
      { english: "Had I known, I would have come.", context: "Conditional inversion", explanation: "Had + subject + past participle." },
      { english: "Never have I seen such a thing.", context: "Negative inversion", explanation: "Never + auxiliary + subject." },
      { english: "What I need is more time.", context: "Cleft (what)", explanation: "Emphasizes 'more time'." },
      { english: "It was John who broke the window.", context: "Cleft (it)", explanation: "Emphasizes 'John'." },
    ],
    commonMistakes: [
      { mistake: "Not only she won, but she also broke the record.", correction: "Not only did she win, but she also broke the record.", explanation: "Must invert: auxiliary + subject." },
      { mistake: "Never I have seen such a thing.", correction: "Never have I seen such a thing.", explanation: "Invert: Never + have + I." },
    ],
    practiceExercises: [
      { question: "Invert: If I had known, I would have helped.", answer: "Had I known, I would have helped.", hint: "Had + subject + past participle" },
      { question: "Cleft: John stole the idea. (emphasize John)", answer: "It was John who stole the idea.", hint: "It + be + stressed element + who/that" },
    ],
    summary: `Inversion: not only + auxiliary + subject; Had I known...; Never have I seen... Cleft sentences: What I need is...; It was John who... Use for emphasis and formal register.`,
    relatedArticles: ["c1-gram-conditionals", "discourse-markers", "c1-gram-ellipsis"],
  },

  // 7. Ellipsis and substitution
  {
    id: "c1-gram-ellipsis",
    title: "Ellipsis and Substitution",
    subtitle: "Nominal and verbal ellipsis, substitution with do/so/one, avoiding repetition",
    level: "C1",
    category: "grammar",
    tags: ["ellipsis", "substitution", "do", "so", "one", "c1", "advanced-grammar"],
    estimatedReadTime: 12,
    introduction: `Ellipsis (omitting words that can be understood from context) and substitution (replacing words with do, so, one) make English more concise and natural. Mastery prevents repetition and improves flow in formal texts.`,
    sections: [
      {
        title: "1. Nominal Ellipsis",
        content: `Omit a repeated noun, often using "one/ones" or leaving it implied.

• "I'll have the red one." (one = shirt, apple, etc.)
• "Which book do you want?" — "The one on the table."
• "These biscuits are stale. Give me the fresh ones."
• "I need a pen. Do you have one?"`
      },
      {
        title: "2. Verbal Ellipsis",
        content: `Omit repeated verbs, using auxiliaries or "do."

• "She can swim and so can I." (so can I = I can swim too)
• "I've finished." — "So have I."
• "He won't agree and neither will she."
• "I like coffee." — "So do I." / "I do too."`
      },
      {
        title: "3. Substitution with Do, So, One",
        content: `**Do:** replaces a verb phrase — "She works harder than I do."
**So:** replaces a clause — "I think so." / "I hope so." / "It seems so."
**One/ones:** replaces a noun — "I prefer the blue one."

• "Has she left?" — "I believe so."
• "Will it rain?" — "I hope not." (not = that it will not)`
      },
      {
        title: "4. Avoiding Repetition in Formal Texts",
        content: `Use synonyms, pronouns, and substitution to avoid repeating the same words. Ellipsis and substitution contribute to cohesion and readability.`
      },
    ],
    examples: [
      { english: "I'll have the red one.", context: "Nominal ellipsis", explanation: "'One' substitutes for the repeated noun." },
      { english: "She can swim and so can I.", context: "Verbal ellipsis", explanation: "'So can I' = I can swim too." },
      { english: "I think so.", context: "Substitution with so", explanation: "'So' replaces the preceding clause." },
    ],
    commonMistakes: [
      { mistake: "She can swim and I also can.", correction: "She can swim and so can I.", explanation: "Use 'so + auxiliary + subject' for positive addition." },
      { mistake: "I want the red.", correction: "I want the red one.", explanation: "Use 'one' when the noun is countable and repeated." },
    ],
    practiceExercises: [
      { question: "Add: She likes jazz. (you too)", answer: "So do I. / I do too.", hint: "So + do + I for positive addition" },
      { question: "Substitute: I prefer the blue shirt.", answer: "I prefer the blue one.", hint: "One replaces countable noun" },
    ],
    summary: `Ellipsis omits repeated words; substitution uses do, so, one. "So can I," "I think so," "the red one." Essential for concise, natural formal writing.`,
    relatedArticles: ["c1-gram-discourse", "c1-gram-inversion", "cohesion"],
  },

  // 8. Discourse-level grammar
  {
    id: "c1-gram-discourse",
    title: "Discourse-Level Grammar",
    subtitle: "Lexical and grammatical cohesion, reference, and advanced discourse connectors",
    level: "C1",
    category: "grammar",
    tags: ["discourse", "cohesion", "reference", "connectors", "c1", "advanced-grammar"],
    estimatedReadTime: 14,
    introduction: `Discourse-level grammar concerns how sentences connect across a text. Cohesion (lexical and grammatical), reference (anaphoric and cataphoric), and advanced connectors create coherent, professional discourse.`,
    sections: [
      {
        title: "1. Lexical and Grammatical Cohesion",
        content: `**Lexical cohesion:** Repeating words, using synonyms, hyponyms, or related vocabulary.
• "The government introduced reforms. These changes were welcomed."

**Grammatical cohesion:** Pronouns, determiners, conjunctions, substitution (do, so, one).
• "The report was lengthy. It contained several recommendations." (it = the report)`
      },
      {
        title: "2. Anaphoric and Cataphoric Reference",
        content: `**Anaphoric:** Referring back. "The minister resigned. She had been under pressure." (She → minister)
**Cataphoric:** Referring forward. "This is the issue: we lack funding." (This → the issue that follows)

**Demonstratives:** this/these (near), that/those (distant). Use for clear reference.`
      },
      {
        title: "3. Advanced Discourse Connectors",
        content: `**Addition:** Furthermore, Moreover, In addition, What is more
**Contrast:** However, Nevertheless, Nonetheless, That said, Having said that
**Cause:** Due to, Owing to, Given that, In light of
**Result:** Therefore, Consequently, Accordingly, Hence, Thus
**Concession:** Although, Despite, In spite of, While
**Sequence:** Firstly, Secondly, Finally, Subsequently, Consequently`
      },
    ],
    examples: [
      { english: "The report was lengthy. It contained several recommendations.", context: "Anaphoric reference", explanation: "'It' refers back to 'the report'." },
      { english: "Furthermore, the data suggests a trend.", context: "Discourse connector", explanation: "Addition, formal." },
      { english: "Despite the setbacks, we prevailed.", context: "Concession", explanation: "Contrast between setbacks and success." },
    ],
    commonMistakes: [
      { mistake: "The report was lengthy. The report contained recommendations.", correction: "The report was lengthy. It contained recommendations.", explanation: "Use pronoun to avoid repetition and maintain cohesion." },
    ],
    practiceExercises: [
      { question: "Add connector (contrast): The results were promising. ___ , funding was cut.", answer: "However / Nevertheless / Nonetheless", hint: "Contrast connector" },
    ],
    summary: `Discourse grammar: lexical cohesion (repetition, synonyms), grammatical cohesion (pronouns, connectors), anaphoric/cataphoric reference, and advanced connectors (furthermore, nevertheless, consequently).`,
    relatedArticles: ["discourse-markers", "c1-gram-ellipsis", "cohesion", "c1-gram-complex-clauses"],
  },

  // 9. Accurate punctuation for meaning
  {
    id: "c1-gram-punctuation",
    title: "Accurate Punctuation for Meaning",
    subtitle: "Semicolon vs comma, colon, dashes, parentheses, apostrophes",
    level: "C1",
    category: "grammar",
    tags: ["punctuation", "semicolon", "colon", "dashes", "apostrophe", "c1", "advanced-grammar"],
    estimatedReadTime: 12,
    introduction: `Punctuation at C1 is not merely correct—it is precise. Semicolons, colons, dashes, and parentheses each carry distinct meaning. Apostrophes in complex cases require care.`,
    sections: [
      {
        title: "1. Semicolon vs Comma",
        content: `**Semicolon (;):** Links two independent clauses that are closely related. No conjunction.
• "The project was delayed; costs rose significantly."
• "She speaks three languages; her brother speaks five."

**Comma (,):** Separates items in a list, after introductory elements, or before coordinating conjunctions (and, but, or) joining two clauses.
• "We need flour, eggs, and milk."
• "Although it was raining, we went out."

**Comma splice error:** "The project was delayed, costs rose." ✗ Use semicolon or add conjunction.`
      },
      {
        title: "2. Colon for Emphasis",
        content: `**Colon (:):** Introduces a list, explanation, or quotation.
• "We need three things: time, money, and commitment."
• "The reason is clear: we underestimated the complexity."
• "She said: 'I will not accept this.'"

**After colon:** Capitalise if what follows is a complete sentence or a quotation.`
      },
      {
        title: "3. Dashes and Parentheses",
        content: `**Em dash (—):** Adds emphasis or an aside. Often replaces commas or parentheses for stronger break.
• "The result—a complete success—surprised everyone."
• "We have one option—to proceed immediately."

**Parentheses ( ):** Add non-essential information.
• "The meeting (scheduled for Monday) was postponed."
• "He believed (correctly, as it turned out) that they would agree."

**Dash:** more emphatic. Parentheses: more subdued.`
      },
      {
        title: "4. Apostrophes in Complex Cases",
        content: `**Possession:** the company's policy, the companies' policies (plural ending in -s)
**Joint possession:** John and Mary's house (shared); John's and Mary's cars (separate)
**Plurals of letters/numbers:** mind your p's and q's; the 1990's (or 1990s)
**It's vs its:** It's = it is; its = possessive (no apostrophe)`
      },
    ],
    examples: [
      { english: "The project was delayed; costs rose significantly.", context: "Semicolon", explanation: "Two related independent clauses." },
      { english: "We need three things: time, money, and commitment.", context: "Colon", explanation: "Introduces a list." },
      { english: "The result—a complete success—surprised everyone.", context: "Em dash", explanation: "Emphatic aside." },
    ],
    commonMistakes: [
      { mistake: "The project was delayed, costs rose.", correction: "The project was delayed; costs rose. / The project was delayed, and costs rose.", explanation: "Comma splice: use semicolon or add conjunction." },
      { mistake: "It's policy is clear.", correction: "Its policy is clear.", explanation: "Its = possessive; it's = it is." },
    ],
    practiceExercises: [
      { question: "Fix: The meeting was cancelled, we rescheduled.", answer: "The meeting was cancelled; we rescheduled. / The meeting was cancelled, so we rescheduled.", hint: "Comma splice" },
      { question: "Choose: The company lost (its / it's) top client.", answer: "its", hint: "Possessive = its" },
    ],
    summary: `Semicolon links related independent clauses; colon introduces lists/explanations; em dash adds emphasis; parentheses add asides. Apostrophes: its (possessive) vs it's (it is).`,
    relatedArticles: ["c1-gram-discourse", "academic-writing", "formal-english"],
  },
];
