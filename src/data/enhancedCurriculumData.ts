// Enhanced curriculum data with expanded vocabulary and speaking themes
// This file enriches the base curriculum with dynamic vocabulary and B1 speaking themes

import { curriculumData as baseCurriculumData, LevelCurriculum, SkillCategory, CEFRLevel } from "./curriculumData";
import { 
  getVocabularySkillsByLevel
} from "./curriculumVocabularySkills";
import { getSpeakingSkillsByLevel } from "./curriculumSpeakingSkills";

// Get vocabulary category with expanded themes for a specific level
const getEnhancedVocabularyCategory = (level: CEFRLevel): SkillCategory => {
  const skills = getVocabularySkillsByLevel(level);
  
  const descriptions: Record<CEFRLevel, string> = {
    A1: "20+ essential vocabulary themes for beginners",
    A2: "20+ everyday vocabulary themes for elementary learners",
    B1: "20+ intermediate vocabulary themes for independent users",
    B2: "20+ upper-intermediate vocabulary themes",
    C1: "20+ advanced vocabulary themes for proficient users",
    C2: "20+ mastery-level vocabulary themes"
  };

  return {
    id: `${level.toLowerCase()}-vocabulary`,
    title: "Vocabulary",
    icon: "📚",
    description: descriptions[level],
    skills: skills
  };
};

// Get B1 Speaking category from generated exercises (6 themes, 300 prompts)
const getEnhancedB1SpeakingCategory = (): SkillCategory => {
  const skills = getSpeakingSkillsByLevel("B1") ?? [];
  return {
    id: "b1-speaking",
    title: "Speaking",
    icon: "🗣️",
    description: "6 themes: experiences, opinions, stories, comparisons, unexpected situations, discussions",
    skills
  };
};

// Enhance curriculum data with expanded vocabulary and B1 speaking
export const getEnhancedCurriculumData = (): LevelCurriculum[] => {
  return baseCurriculumData.map(levelData => {
    const enhancedCategories = levelData.categories.map(category => {
      // Replace vocabulary with enhanced version
      if (category.id.includes('vocabulary')) {
        return getEnhancedVocabularyCategory(levelData.level);
      }
      // Replace B1 speaking with enhanced version (6 themes, 300 exercises)
      if (levelData.level === "B1" && category.id.includes('speaking')) {
        return getEnhancedB1SpeakingCategory();
      }
      return category;
    });

    return {
      ...levelData,
      categories: enhancedCategories
    };
  });
};

// Export enhanced curriculum as default
export const enhancedCurriculumData = getEnhancedCurriculumData();

// Level progress using enhanced curriculum (includes B1 speaking, dynamic vocabulary)
export const getEnhancedLevelProgress = (level: CEFRLevel, completedSkills: string[]): number => {
  const levelData = enhancedCurriculumData.find(l => l.level === level);
  if (!levelData) return 0;

  let totalSubSkills = 0;
  let completedSubSkills = 0;

  levelData.categories.forEach(category => {
    category.skills.forEach(skill => {
      skill.subSkills.forEach(subSkill => {
        totalSubSkills++;
        if (completedSkills.includes(subSkill.id)) {
          completedSubSkills++;
        }
      });
    });
  });

  return totalSubSkills > 0 ? Math.round((completedSubSkills / totalSubSkills) * 100) : 0;
};

// Helper to get vocabulary theme count by level
export const getVocabularyThemeCount = (level: CEFRLevel): number => {
  return getVocabularySkillsByLevel(level).length;
};

// Get total vocabulary exercises available
export const getTotalVocabularyExercises = (level: CEFRLevel): number => {
  const skills = getVocabularySkillsByLevel(level);
  // Each theme generates approximately 15-18 exercises (3 types × 5-6 words)
  return skills.length * 15;
};
