// Placement Exam Data - Based on the Google Forms template
// Comprehensive placement test with 50 questions across 5 sections

export interface PlacementQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  category: string;
}

export interface PlacementExamSection {
  title: string;
  description: string;
  questions: PlacementQuestion[];
}

export const placementExamSections: PlacementExamSection[] = [
  {
    title: "Mixed Verb Tenses",
    description: "Choose the correct answer for each sentence. Pay attention to the time expressions provided to select the appropriate verb tense.",
    questions: [
      {
        id: "pt-1",
        question: "He __________ to school every day.",
        options: ["walks", "is walking", "walked", "will walk"],
        correctAnswer: "walks",
        level: "A1",
        category: "Present Simple"
      },
      {
        id: "pt-2",
        question: "Right now, she __________ lunch.",
        options: ["eats", "will eat", "is eating", "ate"],
        correctAnswer: "is eating",
        level: "A1",
        category: "Present Continuous"
      },
      {
        id: "pt-3",
        question: "While he __________ TV, the phone __________.",
        options: ["was watching, rang", "watched, was ringing", "is watching, rings", "watches, is ringing"],
        correctAnswer: "was watching, rang",
        level: "A2",
        category: "Past Continuous"
      },
      {
        id: "pt-4",
        question: "Yesterday, I __________ my keys while I __________ the house.",
        options: ["lost, cleaned", "lost, was cleaning", "was losing, cleaned", "was losing, was cleaning"],
        correctAnswer: "lost, was cleaning",
        level: "A2",
        category: "Past Simple vs Continuous"
      },
      {
        id: "pt-5",
        question: "Tomorrow, I __________ to the dentist.",
        options: ["will go", "go", "am going", "went"],
        correctAnswer: "will go",
        level: "A2",
        category: "Future Simple"
      },
      {
        id: "pt-6",
        question: "This time next week, she __________ in the new office.",
        options: ["works", "is working", "will be working", "will work"],
        correctAnswer: "will be working",
        level: "B1",
        category: "Future Continuous"
      },
      {
        id: "pt-7",
        question: "I __________ already __________ breakfast when you called me.",
        options: ["had, eat", "have, eaten", "had, eaten", "has, eaten"],
        correctAnswer: "had, eaten",
        level: "B1",
        category: "Past Perfect"
      },
      {
        id: "pt-8",
        question: "She __________ (never/see) that movie before.",
        options: ["has never seen", "never saw", "had never seen", "is never seeing"],
        correctAnswer: "has never seen",
        level: "B1",
        category: "Present Perfect"
      },
      {
        id: "pt-9",
        question: "By next month, he __________ (finish) the project.",
        options: ["finished", "has finished", "will have finished", "will be finishing"],
        correctAnswer: "will have finished",
        level: "B2",
        category: "Future Perfect"
      },
      {
        id: "pt-10",
        question: "By the time you arrive, they __________ (leave).",
        options: ["will have left", "leave", "left", "are leaving"],
        correctAnswer: "will have left",
        level: "B2",
        category: "Future Perfect"
      },
      {
        id: "pt-11",
        question: "I __________ (live) in this city since 2010.",
        options: ["live", "have lived", "am living", "had lived"],
        correctAnswer: "have lived",
        level: "B1",
        category: "Present Perfect Continuous"
      },
      {
        id: "pt-12",
        question: "As soon as the movie __________ (start), we will turn off our phones.",
        options: ["starts", "will start", "started", "starting"],
        correctAnswer: "starts",
        level: "B1",
        category: "Time Clauses"
      },
      {
        id: "pt-13",
        question: "They __________ here for three hours before the bus finally arrived.",
        options: ["waited", "have waited", "had been waiting", "were waiting"],
        correctAnswer: "had been waiting",
        level: "B2",
        category: "Past Perfect Continuous"
      },
      {
        id: "pt-14",
        question: "Look! The children __________ in the garden.",
        options: ["play", "are playing", "played", "have played"],
        correctAnswer: "are playing",
        level: "A1",
        category: "Present Continuous"
      }
    ]
  },
  {
    title: "Conditionals & Wishes",
    description: "Select the correct form to complete each conditional sentence or wish expression.",
    questions: [
      {
        id: "pt-15",
        question: "If it __________ tomorrow, we will stay at home.",
        options: ["rains", "will rain", "rained", "would rain"],
        correctAnswer: "rains",
        level: "A2",
        category: "First Conditional"
      },
      {
        id: "pt-16",
        question: "If I __________ rich, I would travel the world.",
        options: ["am", "was/were", "will be", "had been"],
        correctAnswer: "was/were",
        level: "B1",
        category: "Second Conditional"
      },
      {
        id: "pt-17",
        question: "If she had studied harder, she __________ the exam.",
        options: ["passed", "would pass", "would have passed", "will pass"],
        correctAnswer: "would have passed",
        level: "B2",
        category: "Third Conditional"
      },
      {
        id: "pt-18",
        question: "If you heat water to 100°C, it __________.",
        options: ["boils", "will boil", "would boil", "boiled"],
        correctAnswer: "boils",
        level: "A2",
        category: "Zero Conditional"
      },
      {
        id: "pt-19",
        question: "Unless you __________ now, you will miss the train.",
        options: ["leave", "will leave", "left", "leaving"],
        correctAnswer: "leave",
        level: "B1",
        category: "Conditionals with Unless"
      },
      {
        id: "pt-20",
        question: "I wish I __________ speak French fluently.",
        options: ["can", "could", "will", "would"],
        correctAnswer: "could",
        level: "B1",
        category: "Wishes - Present"
      },
      {
        id: "pt-21",
        question: "If only I __________ to the party last night!",
        options: ["went", "had gone", "have gone", "would go"],
        correctAnswer: "had gone",
        level: "B2",
        category: "Wishes - Past"
      },
      {
        id: "pt-22",
        question: "I wish you __________ making that noise. It's annoying.",
        options: ["stop", "stopped", "would stop", "will stop"],
        correctAnswer: "would stop",
        level: "B2",
        category: "Wishes - Future/Annoyance"
      },
      {
        id: "pt-23",
        question: "__________ I known about the problem, I would have helped.",
        options: ["If", "Had", "Should", "Were"],
        correctAnswer: "Had",
        level: "C1",
        category: "Conditional Inversion"
      },
      {
        id: "pt-24",
        question: "Provided that you __________ hard, you will succeed.",
        options: ["work", "will work", "worked", "would work"],
        correctAnswer: "work",
        level: "B1",
        category: "Conditionals with Provided"
      }
    ]
  },
  {
    title: "Passive Voice & Reported Speech",
    description: "Choose the correct passive or reported speech form.",
    questions: [
      {
        id: "pt-25",
        question: "The cake __________ by my grandmother.",
        options: ["baked", "was baked", "is baking", "bakes"],
        correctAnswer: "was baked",
        level: "A2",
        category: "Passive Voice - Past"
      },
      {
        id: "pt-26",
        question: "The new bridge __________ next year.",
        options: ["will build", "will be built", "is building", "builds"],
        correctAnswer: "will be built",
        level: "B1",
        category: "Future Passive"
      },
      {
        id: "pt-27",
        question: "She said that she __________ tired.",
        options: ["is", "was", "will be", "has been"],
        correctAnswer: "was",
        level: "B1",
        category: "Reported Speech"
      },
      {
        id: "pt-28",
        question: "He asked me where I __________.",
        options: ["live", "lived", "am living", "will live"],
        correctAnswer: "lived",
        level: "B1",
        category: "Reported Questions"
      },
      {
        id: "pt-29",
        question: "The letter __________ (already/send) when I arrived.",
        options: ["has already been sent", "had already been sent", "was already sending", "already sent"],
        correctAnswer: "had already been sent",
        level: "B2",
        category: "Past Perfect Passive"
      },
      {
        id: "pt-30",
        question: "He told me __________ wait for him.",
        options: ["to", "that", "for", "if"],
        correctAnswer: "to",
        level: "B1",
        category: "Reported Commands"
      },
      {
        id: "pt-31",
        question: "The suspect is believed __________ the country.",
        options: ["to leave", "to have left", "leaving", "left"],
        correctAnswer: "to have left",
        level: "C1",
        category: "Advanced Passive"
      },
      {
        id: "pt-32",
        question: "She asked me if I __________ her the next day.",
        options: ["can help", "could help", "will help", "helped"],
        correctAnswer: "could help",
        level: "B1",
        category: "Reported Questions"
      },
      {
        id: "pt-33",
        question: "The room __________ cleaned every day.",
        options: ["is", "was", "has been", "will"],
        correctAnswer: "is",
        level: "A2",
        category: "Present Passive"
      },
      {
        id: "pt-34",
        question: "It __________ that the meeting will be postponed.",
        options: ["says", "is said", "was saying", "has saying"],
        correctAnswer: "is said",
        level: "B2",
        category: "Impersonal Passive"
      }
    ]
  },
  {
    title: "Modal Verbs & Relative Clauses",
    description: "Choose the correct modal verb or relative pronoun.",
    questions: [
      {
        id: "pt-35",
        question: "You __________ drive without a license. It's illegal.",
        options: ["mustn't", "don't have to", "needn't", "couldn't"],
        correctAnswer: "mustn't",
        level: "A2",
        category: "Modals - Prohibition"
      },
      {
        id: "pt-36",
        question: "She __________ be at home. I saw her car in the driveway.",
        options: ["must", "can't", "might", "should"],
        correctAnswer: "must",
        level: "B1",
        category: "Modals - Deduction"
      },
      {
        id: "pt-37",
        question: "You __________ have told me earlier! Now it's too late.",
        options: ["should", "must", "could", "would"],
        correctAnswer: "should",
        level: "B1",
        category: "Modals - Past Criticism"
      },
      {
        id: "pt-38",
        question: "She __________ have taken the train; I saw her car in the parking lot.",
        options: ["can't", "mustn't", "shouldn't", "wouldn't"],
        correctAnswer: "can't",
        level: "B2",
        category: "Modals - Deduction Past"
      },
      {
        id: "pt-39",
        question: "The man __________ lives next door is a doctor.",
        options: ["who", "which", "whose", "whom"],
        correctAnswer: "who",
        level: "A2",
        category: "Relative Clauses - Who"
      },
      {
        id: "pt-40",
        question: "The project, __________ was completed last month, received high praise.",
        options: ["that", "which", "what", "who"],
        correctAnswer: "which",
        level: "B2",
        category: "Non-Defining Relative Clauses"
      },
      {
        id: "pt-41",
        question: "That's the woman __________ husband works with my father.",
        options: ["who", "which", "whose", "that"],
        correctAnswer: "whose",
        level: "B1",
        category: "Relative Clauses - Whose"
      },
      {
        id: "pt-42",
        question: "The book __________ I borrowed from the library was fascinating.",
        options: ["who", "which", "whose", "whom"],
        correctAnswer: "which",
        level: "A2",
        category: "Relative Clauses - Which"
      },
      {
        id: "pt-43",
        question: "You __________ wear a suit to the meeting, but it's recommended.",
        options: ["must", "don't have to", "mustn't", "should"],
        correctAnswer: "don't have to",
        level: "B1",
        category: "Modals - No Obligation"
      },
      {
        id: "pt-44",
        question: "He __________ to work harder if he wants to get promoted.",
        options: ["ought", "should", "must", "needs"],
        correctAnswer: "ought",
        level: "B1",
        category: "Modals - Ought to"
      }
    ]
  },
  {
    title: "Advanced Structures",
    description: "Select the most appropriate answer for these advanced grammar structures.",
    questions: [
      {
        id: "pt-45",
        question: "Not only __________ the exam, but she also got the highest score.",
        options: ["she passed", "did she pass", "passed she", "she did pass"],
        correctAnswer: "did she pass",
        level: "C1",
        category: "Inversion"
      },
      {
        id: "pt-46",
        question: "By the time the ambulance arrived, the patient __________.",
        options: ["died", "has died", "had died", "was dying"],
        correctAnswer: "had died",
        level: "B2",
        category: "Past Perfect"
      },
      {
        id: "pt-47",
        question: "It's high time you __________ looking for a new job.",
        options: ["start", "started", "will start", "starting"],
        correctAnswer: "started",
        level: "C1",
        category: "Subjunctive Structures"
      },
      {
        id: "pt-48",
        question: "Hardly __________ home when the storm started.",
        options: ["I had arrived", "had I arrived", "I arrived", "did I arrive"],
        correctAnswer: "had I arrived",
        level: "C1",
        category: "Inversion with Hardly"
      },
      {
        id: "pt-49",
        question: "The more you practice, __________ you will become.",
        options: ["the better", "better", "the best", "best"],
        correctAnswer: "the better",
        level: "B1",
        category: "Comparative Structures"
      },
      {
        id: "pt-50",
        question: "I'd rather you __________ smoke in here.",
        options: ["don't", "didn't", "won't", "wouldn't"],
        correctAnswer: "didn't",
        level: "B2",
        category: "Would Rather"
      }
    ]
  }
];

// Timer duration in minutes
export const PLACEMENT_EXAM_DURATION_MINUTES = 30;

// Function to calculate level based on score
export function calculatePlacementLevel(score: number, totalQuestions: number): "A1" | "A2" | "B1" | "B2" | "C1" | "C2" {
  const percentage = (score / totalQuestions) * 100;
  
  if (percentage >= 90) return "C1";
  if (percentage >= 75) return "B2";
  if (percentage >= 60) return "B1";
  if (percentage >= 45) return "A2";
  return "A1";
}

// Get all questions flattened
export function getAllPlacementQuestions(): PlacementQuestion[] {
  return placementExamSections.flatMap(section => section.questions);
}

// Get section breakdown for reporting
export function getSectionBreakdown(
  answers: Record<string, string>
): { section: string; correct: number; total: number }[] {
  return placementExamSections.map(section => {
    let correct = 0;
    section.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      section: section.title,
      correct,
      total: section.questions.length,
    };
  });
}

// Get incorrect answers for reporting
export function getIncorrectAnswers(
  answers: Record<string, string>
): { question: string; userAnswer: string; correctAnswer: string; category: string }[] {
  const incorrect: { question: string; userAnswer: string; correctAnswer: string; category: string }[] = [];
  
  getAllPlacementQuestions().forEach(q => {
    if (answers[q.id] && answers[q.id] !== q.correctAnswer) {
      incorrect.push({
        question: q.question,
        userAnswer: answers[q.id],
        correctAnswer: q.correctAnswer,
        category: q.category,
      });
    }
  });
  
  return incorrect;
}
