// Speaking skills for curriculum - B1 level
// Generates the B1 Speaking section from speakingCurriculumComplete

import { Skill } from "./curriculumData";
import { b1SpeakingThemes } from "./speakingCurriculumComplete";

// Convert speaking themes to curriculum skills
const themesToSkills = (themes: typeof b1SpeakingThemes): Skill[] => {
  return themes.map((theme) => ({
    id: theme.id,
    title: theme.title,
    description: theme.description,
    completed: false,
    subSkills: theme.subSkills.map((sub) => ({
      id: sub.id,
      title: sub.title,
      completed: false,
    })),
  }));
};

// B1 Speaking Skills (6 themes, 300 exercises total)
export const b1SpeakingSkills: Skill[] = themesToSkills(b1SpeakingThemes);

// Get speaking skills by level (B1 only for now)
export const getSpeakingSkillsByLevel = (level: string): Skill[] | null => {
  if (level.toUpperCase() === "B1") {
    return b1SpeakingSkills;
  }
  return null;
};
