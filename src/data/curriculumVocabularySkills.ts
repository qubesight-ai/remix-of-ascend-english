// Vocabulary skills for curriculum - 20+ themes per level
// This file generates the vocabulary section for each CEFR level

import { Skill } from "./curriculumData";
import { 
  a1VocabularyThemes, 
  a2VocabularyThemes, 
  b1VocabularyThemes, 
  b2VocabularyThemes, 
  c1VocabularyThemes, 
  c2VocabularyThemes 
} from "./vocabularyCurriculumComplete";

// Convert vocabulary themes to curriculum skills
const themesToSkills = (themes: typeof a1VocabularyThemes, levelPrefix: string): Skill[] => {
  return themes.map((theme, index) => ({
    id: `${levelPrefix}-vocab-${index + 1}`,
    title: theme.title,
    description: theme.description,
    completed: false,
    subSkills: theme.words.slice(0, 4).map((word, wIndex) => ({
      id: `${levelPrefix}-v${index + 1}-${wIndex + 1}`,
      title: word.word,
      completed: false
    }))
  }));
};

// A1 Vocabulary Skills (20 themes)
export const a1VocabularySkills: Skill[] = themesToSkills(a1VocabularyThemes, "a1");

// A2 Vocabulary Skills (20 themes)  
export const a2VocabularySkills: Skill[] = themesToSkills(a2VocabularyThemes, "a2");

// B1 Vocabulary Skills (20 themes)
export const b1VocabularySkills: Skill[] = themesToSkills(b1VocabularyThemes, "b1");

// B2 Vocabulary Skills (20 themes)
export const b2VocabularySkills: Skill[] = themesToSkills(b2VocabularyThemes, "b2");

// C1 Vocabulary Skills (20 themes)
export const c1VocabularySkills: Skill[] = themesToSkills(c1VocabularyThemes, "c1");

// C2 Vocabulary Skills (20 themes)
export const c2VocabularySkills: Skill[] = themesToSkills(c2VocabularyThemes, "c2");

// Get vocabulary skills by level
export const getVocabularySkillsByLevel = (level: string): Skill[] => {
  switch (level.toUpperCase()) {
    case "A1": return a1VocabularySkills;
    case "A2": return a2VocabularySkills;
    case "B1": return b1VocabularySkills;
    case "B2": return b2VocabularySkills;
    case "C1": return c1VocabularySkills;
    case "C2": return c2VocabularySkills;
    default: return a1VocabularySkills;
  }
};
