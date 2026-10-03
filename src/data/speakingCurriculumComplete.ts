// B1 Speaking Curriculum - 6 themes with 50 exercises each (300 total)
// Source of truth for the B1 Speaking menu in the CEFR curriculum

export interface SpeakingTheme {
  id: string;
  title: string;
  description: string;
  subSkills: { id: string; title: string }[];
}

// B1 Speaking Themes - matches b1SpeakingExercises in curriculumExercisesB1.ts
export const b1SpeakingThemes: SpeakingTheme[] = [
  {
    id: "b1-speak-1",
    title: "Describe Experiences",
    description: "Past events, future plans, personal goals and aspirations",
    subSkills: [
      { id: "b1-s1-1", title: "Describing past events" },
      { id: "b1-s1-2", title: "Future plans (Going to / Will)" },
      { id: "b1-s1-3", title: "Personal goals and aspirations" },
      { id: "b1-s1-4", title: "Speaking drills and sentence builders" },
    ],
  },
  {
    id: "b1-speak-2",
    title: "Explain Opinions with Reasons",
    description: "I think..., In my opinion..., Because..., For example...",
    subSkills: [
      { id: "b1-s2-1", title: "Agreement and disagreement" },
      { id: "b1-s2-2", title: "Why questions and supporting arguments" },
      { id: "b1-s2-3", title: "Giving examples" },
      { id: "b1-s2-4", title: "Controversial (light) topics" },
    ],
  },
  {
    id: "b1-speak-3",
    title: "Narrate Stories",
    description: "Sequencing (First, Then, Finally), emotions, adjectives",
    subSkills: [
      { id: "b1-s3-1", title: "Sequencing events" },
      { id: "b1-s3-2", title: "Adding detail and emotion" },
      { id: "b1-s3-3", title: "Image narration" },
    ],
  },
  {
    id: "b1-speak-4",
    title: "Compare and Choose",
    description: "Comparatives, preferences (I prefer X to Y, I would rather), decision making",
    subSkills: [
      { id: "b1-s4-1", title: "This or that? Basic comparisons" },
      { id: "b1-s4-2", title: "Scenario-based choices" },
      { id: "b1-s4-3", title: "Explaining preferences (I prefer... because)" },
      { id: "b1-s4-4", title: "Roleplay and rapid-fire comparisons" },
    ],
  },
  {
    id: "b1-speak-5",
    title: "Handle Unexpected Situations",
    description: "Problem solving, complaining politely, asking for assistance, emergencies",
    subSkills: [
      { id: "b1-s5-1", title: "Travel troubles" },
      { id: "b1-s5-2", title: "Complaints and solutions" },
      { id: "b1-s5-3", title: "Emergencies and health" },
      { id: "b1-s5-4", title: "Interactive solutions and reaction drills" },
    ],
  },
  {
    id: "b1-speak-6",
    title: "Participate in Discussions",
    description: "Turn-taking, follow-up questions, active listening, self-correction",
    subSkills: [
      { id: "b1-s6-1", title: "Keeping the conversation going" },
      { id: "b1-s6-2", title: "Expressing uncertainty and self-correction" },
      { id: "b1-s6-3", title: "Group discussion topics" },
      { id: "b1-s6-4", title: "Active listening and speed discussions" },
    ],
  },
];
