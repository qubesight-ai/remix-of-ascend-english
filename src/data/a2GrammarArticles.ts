// A2 Grammar Articles - topics not covered by main articlesData
// There is/are and Question formation

import type { Article } from "./articlesData";

export const a2GrammarArticles: Article[] = [
  {
    id: "a2-gram-there-is",
    title: "There Is / There Are",
    subtitle: "Describing existence and location with Some, Any, A lot of",
    level: "A2",
    category: "grammar",
    tags: ["there-is", "there-are", "existence", "location", "a2"],
    estimatedReadTime: 10,
    introduction: `"There is" and "There are" describe existence and location—what exists and where. They're essential for describing places, quantities, and what you see around you.`,
    sections: [
      {
        title: "1. Singular vs Plural",
        content: `**There is + singular/uncountable**
• "There is a book on the table."
• "There is some milk in the fridge."
• "There is a problem."

**There are + plural**
• "There are three books on the table."
• "There are many students in the class."
• "There are some apples in the basket."

**Contractions:** There's (there is), There're (there are, less common)`
      },
      {
        title: "2. Some, Any, A lot of",
        content: `**Some:** Affirmatives. "There are some books." | "There is some water."
**Any:** Negatives and questions. "There aren't any books." | "Is there any milk?"
**A lot of:** Large quantity. "There are a lot of people." | "There is a lot of traffic."

**Much/Many:** "There isn't much time." | "There aren't many seats."`
      },
    ],
    examples: [
      { english: "There is a cat on the roof.", context: "Singular", explanation: "There is + singular noun." },
      { english: "There are many books in the library.", context: "Plural", explanation: "There are + plural." },
      { english: "Is there any coffee left?", context: "Question with any", explanation: "Any in questions." },
    ],
    commonMistakes: [
      { mistake: "There are a book on the table.", correction: "There is a book on the table.", explanation: "Singular noun → There is." },
      { mistake: "There is many people.", correction: "There are many people.", explanation: "Plural → There are." },
    ],
    practiceExercises: [
      { question: "Complete: _____ a problem with the computer.", answer: "There is / There's", hint: "Singular" },
      { question: "Complete: _____ any milk left?", answer: "Is there", hint: "Question with any" },
    ],
    summary: `There is + singular/uncountable. There are + plural. Some (affirmative), any (negative/question). Match the verb to the noun that follows.`,
    relatedArticles: ["countable-uncountable"],
  },
  {
    id: "a2-gram-questions",
    title: "Question Formation",
    subtitle: "Wh-questions and Yes/No questions",
    level: "A2",
    category: "grammar",
    tags: ["questions", "wh-questions", "yes-no", "a2"],
    estimatedReadTime: 10,
    introduction: `Question formation in English follows clear patterns. Yes/No questions use inversion (Do you...? Is she...?). Wh-questions start with a question word (What, Where, When, Who, Why, How) and follow the same inversion rules.`,
    sections: [
      {
        title: "1. Yes/No Questions",
        content: `**With be:** Invert subject and verb. "Are you tired?" | "Is she at home?"
**With auxiliary (do/does/did):** Do/Does/Did + subject + base verb. "Do you like coffee?" | "Does she speak Spanish?" | "Did you see him?"
**With other auxiliaries (can, will, have):** Invert. "Can you swim?" | "Will they come?" | "Have you finished?"`
      },
      {
        title: "2. Wh-Questions",
        content: `**Question words:** What, Where, When, Who, Which, Why, How
**Structure:** Wh-word + auxiliary/be + subject + (main verb)?
• "What do you want?" | "Where is she?" | "When did you arrive?"
• "Who called?" (who = subject, no do/does)
• "Why are you late?" | "How do you know?"

**Subject questions:** When the wh-word is the subject, no do/does. "Who wrote this?" (Who = subject)`
      },
    ],
    examples: [
      { english: "Do you like pizza?", context: "Yes/No with do", explanation: "Do + subject + base verb." },
      { english: "Where does she live?", context: "Wh-question", explanation: "Where + does + she + live." },
      { english: "Who broke the window?", context: "Subject question", explanation: "Who = subject, no do/does." },
    ],
    commonMistakes: [
      { mistake: "Where you live?", correction: "Where do you live?", explanation: "Need auxiliary do/does in present simple wh-questions." },
      { mistake: "What did she said?", correction: "What did she say?", explanation: "After did, use base verb." },
    ],
    practiceExercises: [
      { question: "Form question: She lives in London.", answer: "Where does she live?", hint: "Where + does + subject + base verb" },
    ],
    summary: `Yes/No: Do/Does/Did + subject + verb? or Be + subject? Wh-: Wh-word + auxiliary + subject + verb? Subject questions: no do/does.`,
    relatedArticles: ["present-simple", "verb-to-be"],
  },
];
