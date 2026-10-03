/**
 * Utility functions to format exercise questions for display
 */

/**
 * Formats a question text by replacing underscores with a styled blank indicator
 * @param question - The raw question text with underscores
 * @returns The formatted question with styled blanks
 */
export function formatQuestionText(question: string): string {
  // Replace multiple underscores (like _____) with a cleaner blank indicator
  return question.replace(/_{2,}/g, '______');
}

/**
 * Splits a question into parts for rendering with styled blank components
 * @param question - The raw question text
 * @returns Array of parts with type indicators
 */
export function splitQuestionIntoParts(question: string): Array<{ type: 'text' | 'blank'; content: string }> {
  const parts: Array<{ type: 'text' | 'blank'; content: string }> = [];
  const regex = /_{2,}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(question)) !== null) {
    // Add text before the blank
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: question.slice(lastIndex, match.index)
      });
    }
    // Add the blank
    parts.push({
      type: 'blank',
      content: '______'
    });
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < question.length) {
    parts.push({
      type: 'text',
      content: question.slice(lastIndex)
    });
  }

  return parts;
}

/**
 * Cleans question text for TTS (removes underscores, parenthetical hints)
 * @param question - The raw question text
 * @returns Cleaned text suitable for speech
 */
export function cleanQuestionForTTS(question: string): string {
  return question
    .replace(/_{2,}/g, 'blank') // Replace underscores with "blank"
    .replace(/\([^)]*\)/g, '') // Remove parenthetical hints like (read) or (visit)
    .replace(/\s{2,}/g, ' ') // Normalize spaces
    .trim();
}
