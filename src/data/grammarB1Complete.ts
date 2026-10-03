import { GrammarExercise } from './grammarExercisesExpanded';

// ============================================
// B1 INTERMEDIATE - Complete CEFR Curriculum
// Main points on familiar matters. Can describe experiences, hopes, and opinions.
// ============================================

// PRESENT PERFECT - Experiences, Duration, Recent Events
export const b1PresentPerfectExercises: GrammarExercise[] = [
  {
    id: "b1-pp-exp-1",
    type: "multiple-choice",
    question: "I _____ to London many times.",
    options: ["have been", "have gone", "went", "was"],
    correctAnswer: "have been",
    explanation: "Have been = went and returned. Have gone = went and not yet returned.",
    explanationSpanish: "Have been = fue y volvió. Have gone = fue y aún no volvió.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-exp-2",
    type: "multiple-choice",
    question: "_____ you ever _____ Indian food?",
    options: ["Have/eaten", "Did/eat", "Have/ate", "Do/eat"],
    correctAnswer: "Have/eaten",
    explanation: "Ever = at any time in your life. Present Perfect for experiences.",
    explanationSpanish: "Ever = en algún momento de tu vida. Presente Perfecto para experiencias.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-exp-3",
    type: "multiple-choice",
    question: "She _____ never _____ a horror movie.",
    options: ["has/watched", "have/watched", "did/watch", "was/watching"],
    correctAnswer: "has/watched",
    explanation: "Never goes between have/has and the past participle.",
    explanationSpanish: "Never va entre have/has y el participio pasado.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-exp-4",
    type: "multiple-choice",
    question: "This is the best book I _____ ever _____.",
    options: ["have/read", "has/read", "have/readed", "did/read"],
    correctAnswer: "have/read",
    explanation: "Superlative + Present Perfect is common: the best I have ever...",
    explanationSpanish: "Superlativo + Presente Perfecto es común: the best I have ever...",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-dur-1",
    type: "multiple-choice",
    question: "I _____ in this city _____ five years.",
    options: ["have lived/for", "have lived/since", "live/for", "lived/for"],
    correctAnswer: "have lived/for",
    explanation: "For + period of time (five years, two months, a long time).",
    explanationSpanish: "For + período de tiempo (cinco años, dos meses, mucho tiempo).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-dur-2",
    type: "multiple-choice",
    question: "She _____ here _____ 2018.",
    options: ["has worked/since", "has worked/for", "works/since", "worked/since"],
    correctAnswer: "has worked/since",
    explanation: "Since + specific point in time (2018, Monday, January).",
    explanationSpanish: "Since + punto específico en el tiempo (2018, lunes, enero).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-dur-3",
    type: "multiple-choice",
    question: "We _____ each other _____ we were children.",
    options: ["have known/since", "have known/for", "know/since", "knew/for"],
    correctAnswer: "have known/since",
    explanation: "Since + clause (since we were children = from that time until now).",
    explanationSpanish: "Since + cláusula (since we were children = desde ese momento hasta ahora).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-recent-1",
    type: "multiple-choice",
    question: "I _____ just _____ my homework.",
    options: ["have/finished", "has/finished", "am/finishing", "did/finish"],
    correctAnswer: "have/finished",
    explanation: "Just = very recently. Goes between have and past participle.",
    explanationSpanish: "Just = muy recientemente. Va entre have y el participio pasado.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-recent-2",
    type: "multiple-choice",
    question: "He _____ already _____ the news.",
    options: ["has/heard", "have/heard", "is/hearing", "did/hear"],
    correctAnswer: "has/heard",
    explanation: "Already = before now/expected. Between have/has and participle.",
    explanationSpanish: "Already = antes de ahora/esperado. Entre have/has y participio.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-recent-3",
    type: "multiple-choice",
    question: "I _____ finished my dinner _____.",
    options: ["haven't/yet", "hasn't/yet", "didn't/yet", "don't/yet"],
    correctAnswer: "haven't/yet",
    explanation: "Yet = until now. Used in negatives and questions, goes at the end.",
    explanationSpanish: "Yet = hasta ahora. Se usa en negativos y preguntas, va al final.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-recent-4",
    type: "multiple-choice",
    question: "_____ they _____ the meeting _____?",
    options: ["Have/started/yet", "Has/started/yet", "Did/start/yet", "Are/starting/yet"],
    correctAnswer: "Have/started/yet",
    explanation: "Yet in questions asks if something expected has happened.",
    explanationSpanish: "Yet en preguntas pregunta si algo esperado ha sucedido.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-contrast-1",
    type: "multiple-choice",
    question: "I _____ to Paris last year. (specific past time)",
    options: ["went", "have been", "have gone", "go"],
    correctAnswer: "went",
    explanation: "With specific past time (last year), use Past Simple, not Present Perfect.",
    explanationSpanish: "Con tiempo pasado específico (last year), usa Pasado Simple, no Presente Perfecto.",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-pp-contrast-2",
    type: "multiple-choice",
    question: "I _____ to Paris. It's beautiful! (no specific time)",
    options: ["have been", "went", "was", "go"],
    correctAnswer: "have been",
    explanation: "No specific time = life experience = Present Perfect.",
    explanationSpanish: "Sin tiempo específico = experiencia de vida = Presente Perfecto.",
    category: "present-perfect",
    difficulty: "medium"
  },
];

// FUTURE TENSES - Will, Going to, Present Continuous for future
export const b1FutureTensesExercises: GrammarExercise[] = [
  {
    id: "b1-fut-will-1",
    type: "multiple-choice",
    question: "Someone's at the door. I _____ get it. (spontaneous decision)",
    options: ["will", "am going to", "am getting", "get"],
    correctAnswer: "will",
    explanation: "Will for decisions made at the moment of speaking.",
    explanationSpanish: "Will para decisiones tomadas en el momento de hablar.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-will-2",
    type: "multiple-choice",
    question: "Don't worry, I _____ help you with your bags.",
    options: ["will", "am going to", "am helping", "help"],
    correctAnswer: "will",
    explanation: "Will for offers made spontaneously.",
    explanationSpanish: "Will para ofertas hechas espontáneamente.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-will-3",
    type: "multiple-choice",
    question: "I think Brazil _____ the World Cup. (prediction/opinion)",
    options: ["will win", "is going to win", "is winning", "wins"],
    correctAnswer: "will win",
    explanation: "Will for predictions based on what you think/believe.",
    explanationSpanish: "Will para predicciones basadas en lo que piensas/crees.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-will-4",
    type: "multiple-choice",
    question: "I promise I _____ call you tomorrow.",
    options: ["will", "am going to", "am calling", "call"],
    correctAnswer: "will",
    explanation: "Will for promises.",
    explanationSpanish: "Will para promesas.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-going-1",
    type: "multiple-choice",
    question: "Look at those clouds! It _____ rain. (evidence)",
    options: ["is going to", "will", "is raining", "rains"],
    correctAnswer: "is going to",
    explanation: "Going to for predictions based on present evidence.",
    explanationSpanish: "Going to para predicciones basadas en evidencia presente.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-going-2",
    type: "multiple-choice",
    question: "I _____ study medicine. I've already applied to university.",
    options: ["am going to", "will", "am studying", "study"],
    correctAnswer: "am going to",
    explanation: "Going to for plans and intentions already decided.",
    explanationSpanish: "Going to para planes e intenciones ya decididas.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-going-3",
    type: "multiple-choice",
    question: "We _____ move to a bigger house next year. We've found one.",
    options: ["are going to", "will", "are moving", "move"],
    correctAnswer: "are going to",
    explanation: "Going to for intentions with evidence of planning.",
    explanationSpanish: "Going to para intenciones con evidencia de planificación.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-going-4",
    type: "multiple-choice",
    question: "Be careful! You _____ drop that glass!",
    options: ["are going to", "will", "are dropping", "drop"],
    correctAnswer: "are going to",
    explanation: "Going to for something about to happen (visible evidence).",
    explanationSpanish: "Going to para algo que está a punto de suceder (evidencia visible).",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-pc-1",
    type: "multiple-choice",
    question: "I _____ dinner with John tonight. We booked a table. (fixed arrangement)",
    options: ["am having", "will have", "am going to have", "have"],
    correctAnswer: "am having",
    explanation: "Present Continuous for fixed/confirmed future arrangements.",
    explanationSpanish: "Presente Continuo para arreglos futuros fijos/confirmados.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-pc-2",
    type: "multiple-choice",
    question: "We _____ to Spain next week. The flights are booked.",
    options: ["are flying", "will fly", "are going to fly", "fly"],
    correctAnswer: "are flying",
    explanation: "Present Continuous for arrangements with specific details.",
    explanationSpanish: "Presente Continuo para arreglos con detalles específicos.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-pc-3",
    type: "multiple-choice",
    question: "The train _____ at 9:15. (scheduled event)",
    options: ["leaves", "is leaving", "will leave", "is going to leave"],
    correctAnswer: "leaves",
    explanation: "Present Simple for timetables and scheduled events.",
    explanationSpanish: "Presente Simple para horarios y eventos programados.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-contrast-1",
    type: "multiple-choice",
    question: "A: We've run out of milk. B: I _____ get some from the shop.",
    options: ["will", "am going to", "am getting", "get"],
    correctAnswer: "will",
    explanation: "Spontaneous decision made at the moment = will.",
    explanationSpanish: "Decisión espontánea tomada en el momento = will.",
    category: "future-tenses",
    difficulty: "medium"
  },
  {
    id: "b1-fut-contrast-2",
    type: "multiple-choice",
    question: "A: Why are you wearing sports clothes? B: I _____ go jogging.",
    options: ["am going to", "will", "am jogging", "jog"],
    correctAnswer: "am going to",
    explanation: "Intention decided before speaking = going to.",
    explanationSpanish: "Intención decidida antes de hablar = going to.",
    category: "future-tenses",
    difficulty: "medium"
  },
];

// MODAL VERBS - Deduction (might, must, can't, could)
export const b1ModalDeductionExercises: GrammarExercise[] = [
  {
    id: "b1-mod-must-1",
    type: "multiple-choice",
    question: "He's been studying all day. He _____ be exhausted.",
    options: ["must", "might", "can't", "could"],
    correctAnswer: "must",
    explanation: "Must = I'm sure/certain this is true (strong deduction).",
    explanationSpanish: "Must = estoy seguro de que esto es verdad (deducción fuerte).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-must-2",
    type: "multiple-choice",
    question: "She speaks five languages. She _____ be very intelligent.",
    options: ["must", "might", "can't", "could"],
    correctAnswer: "must",
    explanation: "Must for logical conclusions based on evidence.",
    explanationSpanish: "Must para conclusiones lógicas basadas en evidencia.",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-cant-1",
    type: "multiple-choice",
    question: "That _____ be John. He's in Australia right now!",
    options: ["can't", "must", "might", "could"],
    correctAnswer: "can't",
    explanation: "Can't = I'm sure this is NOT true (impossible).",
    explanationSpanish: "Can't = estoy seguro de que esto NO es verdad (imposible).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-cant-2",
    type: "multiple-choice",
    question: "She _____ be 50 years old. She looks so young!",
    options: ["can't", "must", "might", "could"],
    correctAnswer: "can't",
    explanation: "Can't for deductions when something seems impossible.",
    explanationSpanish: "Can't para deducciones cuando algo parece imposible.",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-might-1",
    type: "multiple-choice",
    question: "I'm not sure where Tom is. He _____ be at work.",
    options: ["might", "must", "can't", "will"],
    correctAnswer: "might",
    explanation: "Might = it's possible, I'm not sure.",
    explanationSpanish: "Might = es posible, no estoy seguro.",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-might-2",
    type: "multiple-choice",
    question: "Take an umbrella. It _____ rain later.",
    options: ["might", "must", "can't", "will"],
    correctAnswer: "might",
    explanation: "Might for uncertain future possibilities.",
    explanationSpanish: "Might para posibilidades futuras inciertas.",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-could-1",
    type: "multiple-choice",
    question: "That noise _____ be the neighbors. They're usually noisy.",
    options: ["could", "must", "can't", "will"],
    correctAnswer: "could",
    explanation: "Could = it's possible (similar to might, slightly more formal).",
    explanationSpanish: "Could = es posible (similar a might, ligeramente más formal).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-could-2",
    type: "multiple-choice",
    question: "A: Where's Sarah? B: She _____ be in the library. She often studies there.",
    options: ["could", "must", "can't", "won't"],
    correctAnswer: "could",
    explanation: "Could for one of several possibilities.",
    explanationSpanish: "Could para una de varias posibilidades.",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-mightnt-1",
    type: "multiple-choice",
    question: "He _____ come to the party. He has a lot of work.",
    options: ["might not", "can't", "mustn't", "won't"],
    correctAnswer: "might not",
    explanation: "Might not = it's possible he won't come (uncertain).",
    explanationSpanish: "Might not = es posible que no venga (incierto).",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-contrast-1",
    type: "multiple-choice",
    question: "He's been running for an hour. He _____ be tired. (certain)",
    options: ["must", "might", "could", "can't"],
    correctAnswer: "must",
    explanation: "Use must when you're certain about your deduction.",
    explanationSpanish: "Usa must cuando estás seguro de tu deducción.",
    category: "modal-verbs",
    difficulty: "medium"
  },
  {
    id: "b1-mod-contrast-2",
    type: "multiple-choice",
    question: "He's been running for an hour. He _____ be tired. (possible)",
    options: ["might", "must", "can't", "won't"],
    correctAnswer: "might",
    explanation: "Use might when you're not sure about your deduction.",
    explanationSpanish: "Usa might cuando no estás seguro de tu deducción.",
    category: "modal-verbs",
    difficulty: "medium"
  },
];

// SECOND CONDITIONAL - Unreal present/future situations
export const b1SecondConditionalExercises: GrammarExercise[] = [
  {
    id: "b1-cond2-basic-1",
    type: "multiple-choice",
    question: "If I _____ a lot of money, I would travel the world.",
    options: ["had", "have", "would have", "will have"],
    correctAnswer: "had",
    explanation: "If-clause: Past Simple (had) for unreal present situations.",
    explanationSpanish: "Cláusula If: Pasado Simple (had) para situaciones irreales presentes.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-basic-2",
    type: "multiple-choice",
    question: "If she _____ harder, she would pass the exam.",
    options: ["studied", "studies", "would study", "will study"],
    correctAnswer: "studied",
    explanation: "Past Simple in the if-clause for hypothetical situations.",
    explanationSpanish: "Pasado Simple en la cláusula if para situaciones hipotéticas.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-result-1",
    type: "multiple-choice",
    question: "If I had more time, I _____ learn to play the piano.",
    options: ["would", "will", "can", "am going to"],
    correctAnswer: "would",
    explanation: "Result clause: would + base verb for imaginary results.",
    explanationSpanish: "Cláusula resultado: would + verbo base para resultados imaginarios.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-result-2",
    type: "multiple-choice",
    question: "If I won the lottery, I _____ quit my job.",
    options: ["would", "will", "can", "am"],
    correctAnswer: "would",
    explanation: "Would for the imaginary result of an unreal situation.",
    explanationSpanish: "Would para el resultado imaginario de una situación irreal.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-were-1",
    type: "multiple-choice",
    question: "If I _____ you, I would apologize immediately.",
    options: ["were", "was", "am", "would be"],
    correctAnswer: "were",
    explanation: "Were is used for all subjects in formal/standard English: If I were...",
    explanationSpanish: "Were se usa para todos los sujetos en inglés formal: If I were...",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-were-2",
    type: "multiple-choice",
    question: "If she _____ taller, she could be a model.",
    options: ["were", "was", "is", "would be"],
    correctAnswer: "were",
    explanation: "Were for hypothetical situations (though 'was' is common in speech).",
    explanationSpanish: "Were para situaciones hipotéticas (aunque 'was' es común al hablar).",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-neg-1",
    type: "multiple-choice",
    question: "If I _____ so busy, I would help you.",
    options: ["weren't", "wasn't", "am not", "wouldn't be"],
    correctAnswer: "weren't",
    explanation: "Negative if-clause: weren't for unreal present.",
    explanationSpanish: "Cláusula if negativa: weren't para presente irreal.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-neg-2",
    type: "multiple-choice",
    question: "If he _____ late all the time, he _____ get in trouble.",
    options: ["weren't/wouldn't", "wasn't/won't", "isn't/wouldn't", "weren't/won't"],
    correctAnswer: "weren't/wouldn't",
    explanation: "Both clauses are hypothetical/unreal in Second Conditional.",
    explanationSpanish: "Ambas cláusulas son hipotéticas/irreales en Segunda Condicional.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-could-1",
    type: "multiple-choice",
    question: "If I spoke Chinese, I _____ get a job in Beijing.",
    options: ["could", "can", "will", "am able to"],
    correctAnswer: "could",
    explanation: "Could can replace would to express ability in the result clause.",
    explanationSpanish: "Could puede reemplazar would para expresar habilidad en la cláusula resultado.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-might-1",
    type: "multiple-choice",
    question: "If we left now, we _____ catch the early train.",
    options: ["might", "will", "can", "are going to"],
    correctAnswer: "might",
    explanation: "Might can replace would to express possibility in the result.",
    explanationSpanish: "Might puede reemplazar would para expresar posibilidad en el resultado.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-question-1",
    type: "multiple-choice",
    question: "What _____ you do if you _____ a million dollars?",
    options: ["would/won", "will/win", "would/win", "did/won"],
    correctAnswer: "would/won",
    explanation: "Questions: What would you do if + Past Simple?",
    explanationSpanish: "Preguntas: What would you do if + Pasado Simple?",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-cond2-question-2",
    type: "multiple-choice",
    question: "Where _____ you live if you _____ choose anywhere?",
    options: ["would/could", "will/can", "would/can", "did/could"],
    correctAnswer: "would/could",
    explanation: "If + could is common for hypothetical ability.",
    explanationSpanish: "If + could es común para habilidad hipotética.",
    category: "second-conditional",
    difficulty: "medium"
  },
];

// PASSIVE VOICE - Present, Past, Future
export const b1PassiveVoiceExercises: GrammarExercise[] = [
  {
    id: "b1-pass-pres-1",
    type: "multiple-choice",
    question: "Coffee _____ in Brazil.",
    options: ["is grown", "grows", "is growing", "grown"],
    correctAnswer: "is grown",
    explanation: "Present Passive: is/are + past participle. Focus on the action, not the doer.",
    explanationSpanish: "Pasiva Presente: is/are + participio pasado. Enfoque en la acción, no en quién la hace.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-pres-2",
    type: "multiple-choice",
    question: "These cars _____ in Germany.",
    options: ["are made", "make", "are making", "made"],
    correctAnswer: "are made",
    explanation: "Plural subject (cars) + are + past participle.",
    explanationSpanish: "Sujeto plural (cars) + are + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-pres-3",
    type: "multiple-choice",
    question: "English _____ all over the world.",
    options: ["is spoken", "speaks", "is speaking", "speak"],
    correctAnswer: "is spoken",
    explanation: "General facts in passive when the focus is on the action.",
    explanationSpanish: "Hechos generales en pasiva cuando el enfoque está en la acción.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-past-1",
    type: "multiple-choice",
    question: "The Eiffel Tower _____ in 1889.",
    options: ["was built", "built", "is built", "was building"],
    correctAnswer: "was built",
    explanation: "Past Passive: was/were + past participle for past actions.",
    explanationSpanish: "Pasiva Pasado: was/were + participio pasado para acciones pasadas.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-past-2",
    type: "multiple-choice",
    question: "The letters _____ yesterday.",
    options: ["were sent", "sent", "are sent", "were sending"],
    correctAnswer: "were sent",
    explanation: "Plural past passive: were + past participle.",
    explanationSpanish: "Pasiva pasado plural: were + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-past-3",
    type: "multiple-choice",
    question: "The book _____ by millions of people.",
    options: ["was read", "read", "is read", "was reading"],
    correctAnswer: "was read",
    explanation: "By + agent (who did the action) is optional.",
    explanationSpanish: "By + agente (quién hizo la acción) es opcional.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-fut-1",
    type: "multiple-choice",
    question: "The project _____ next month.",
    options: ["will be finished", "will finish", "is finishing", "finishes"],
    correctAnswer: "will be finished",
    explanation: "Future Passive: will be + past participle.",
    explanationSpanish: "Pasiva Futuro: will be + participio pasado.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-fut-2",
    type: "multiple-choice",
    question: "New employees _____ next week.",
    options: ["will be hired", "will hire", "are hired", "hire"],
    correctAnswer: "will be hired",
    explanation: "Future passive for scheduled future events.",
    explanationSpanish: "Pasiva futuro para eventos futuros programados.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-by-1",
    type: "multiple-choice",
    question: "The painting _____ by Picasso.",
    options: ["was painted", "painted", "is painting", "paints"],
    correctAnswer: "was painted",
    explanation: "By + agent when we want to say WHO did the action.",
    explanationSpanish: "By + agente cuando queremos decir QUIÉN hizo la acción.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-by-2",
    type: "multiple-choice",
    question: "The window _____ by the children.",
    options: ["was broken", "broke", "is broken", "breaks"],
    correctAnswer: "was broken",
    explanation: "Passive emphasizes the action; by-phrase identifies the agent.",
    explanationSpanish: "Pasiva enfatiza la acción; frase con by identifica al agente.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-modal-1",
    type: "multiple-choice",
    question: "This medicine _____ with food.",
    options: ["should be taken", "should take", "takes", "is taking"],
    correctAnswer: "should be taken",
    explanation: "Modal + be + past participle for passive with modals.",
    explanationSpanish: "Modal + be + participio pasado para pasiva con modales.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-modal-2",
    type: "multiple-choice",
    question: "The report _____ by Friday.",
    options: ["must be submitted", "must submit", "submits", "is submitting"],
    correctAnswer: "must be submitted",
    explanation: "Must be + past participle for obligation in passive.",
    explanationSpanish: "Must be + participio pasado para obligación en pasiva.",
    category: "passive-voice",
    difficulty: "medium"
  },
  {
    id: "b1-pass-modal-3",
    type: "multiple-choice",
    question: "This form _____ in black ink.",
    options: ["can be completed", "can complete", "completes", "completing"],
    correctAnswer: "can be completed",
    explanation: "Can be + past participle for possibility/ability in passive.",
    explanationSpanish: "Can be + participio pasado para posibilidad/habilidad en pasiva.",
    category: "passive-voice",
    difficulty: "medium"
  },
];

// ADDITIONAL B1 TOPICS - Relative Clauses, Used to, Gerunds/Infinitives
export const b1AdditionalTopicsExercises: GrammarExercise[] = [
  // Relative Clauses
  {
    id: "b1-rel-who-1",
    type: "multiple-choice",
    question: "The man _____ lives next door is a doctor.",
    options: ["who", "which", "where", "whose"],
    correctAnswer: "who",
    explanation: "Who refers to people as the subject of the relative clause.",
    explanationSpanish: "Who se refiere a personas como sujeto de la cláusula relativa.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-rel-which-1",
    type: "multiple-choice",
    question: "The book _____ I'm reading is very interesting.",
    options: ["which", "who", "where", "whose"],
    correctAnswer: "which",
    explanation: "Which refers to things. Can also use 'that'.",
    explanationSpanish: "Which se refiere a cosas. También se puede usar 'that'.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-rel-where-1",
    type: "multiple-choice",
    question: "That's the restaurant _____ we had dinner.",
    options: ["where", "which", "who", "whose"],
    correctAnswer: "where",
    explanation: "Where refers to places.",
    explanationSpanish: "Where se refiere a lugares.",
    category: "relative-clauses",
    difficulty: "medium"
  },
  {
    id: "b1-rel-whose-1",
    type: "multiple-choice",
    question: "The woman _____ car was stolen called the police.",
    options: ["whose", "who", "which", "that"],
    correctAnswer: "whose",
    explanation: "Whose shows possession (her car).",
    explanationSpanish: "Whose muestra posesión (su carro).",
    category: "relative-clauses",
    difficulty: "medium"
  },
  // Used to
  {
    id: "b1-used-1",
    type: "multiple-choice",
    question: "I _____ play tennis when I was younger.",
    options: ["used to", "use to", "am used to", "was used to"],
    correctAnswer: "used to",
    explanation: "Used to + base verb for past habits/states that are no longer true.",
    explanationSpanish: "Used to + verbo base para hábitos/estados pasados que ya no son verdad.",
    category: "used-to",
    difficulty: "medium"
  },
  {
    id: "b1-used-2",
    type: "multiple-choice",
    question: "She _____ live in Paris, but now she lives in London.",
    options: ["used to", "use to", "is used to", "uses to"],
    correctAnswer: "used to",
    explanation: "Used to for past states that have changed.",
    explanationSpanish: "Used to para estados pasados que han cambiado.",
    category: "used-to",
    difficulty: "medium"
  },
  {
    id: "b1-used-neg-1",
    type: "multiple-choice",
    question: "I _____ like vegetables when I was a child.",
    options: ["didn't use to", "didn't used to", "wasn't used to", "don't use to"],
    correctAnswer: "didn't use to",
    explanation: "Negative: didn't use to (no 'd' in use).",
    explanationSpanish: "Negativo: didn't use to (sin 'd' en use).",
    category: "used-to",
    difficulty: "medium"
  },
  // Gerunds and Infinitives
  {
    id: "b1-ger-1",
    type: "multiple-choice",
    question: "I enjoy _____ music.",
    options: ["listening to", "to listen to", "listen to", "listened to"],
    correctAnswer: "listening to",
    explanation: "Enjoy + gerund (-ing form).",
    explanationSpanish: "Enjoy + gerundio (forma -ing).",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-ger-2",
    type: "multiple-choice",
    question: "She avoids _____ in public.",
    options: ["speaking", "to speak", "speak", "spoke"],
    correctAnswer: "speaking",
    explanation: "Avoid + gerund.",
    explanationSpanish: "Avoid + gerundio.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-inf-1",
    type: "multiple-choice",
    question: "I want _____ a new car.",
    options: ["to buy", "buying", "buy", "bought"],
    correctAnswer: "to buy",
    explanation: "Want + to-infinitive.",
    explanationSpanish: "Want + to-infinitivo.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-inf-2",
    type: "multiple-choice",
    question: "She decided _____ the job.",
    options: ["to accept", "accepting", "accept", "accepted"],
    correctAnswer: "to accept",
    explanation: "Decide + to-infinitive.",
    explanationSpanish: "Decide + to-infinitivo.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-both-1",
    type: "multiple-choice",
    question: "I stopped _____ because it's bad for my health. (quit the habit)",
    options: ["smoking", "to smoke", "smoke", "smoked"],
    correctAnswer: "smoking",
    explanation: "Stop + gerund = quit doing something.",
    explanationSpanish: "Stop + gerundio = dejar de hacer algo.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-both-2",
    type: "multiple-choice",
    question: "I stopped _____ to a friend. (paused for a purpose)",
    options: ["to talk", "talking", "talk", "talked"],
    correctAnswer: "to talk",
    explanation: "Stop + to-infinitive = pause in order to do something.",
    explanationSpanish: "Stop + to-infinitivo = pausar para hacer algo.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
];

// TRAVEL & DAILY SITUATIONS - Practical B1 Grammar in Context
export const b1PracticalGrammarExercises: GrammarExercise[] = [
  {
    id: "b1-travel-1",
    type: "multiple-choice",
    question: "If the weather _____ good tomorrow, we _____ to the beach.",
    options: ["is/will go", "was/would go", "is/go", "will be/go"],
    correctAnswer: "is/will go",
    explanation: "First Conditional for real, possible future situations.",
    explanationSpanish: "Primera Condicional para situaciones futuras reales y posibles.",
    category: "conditionals",
    difficulty: "medium"
  },
  {
    id: "b1-travel-2",
    type: "multiple-choice",
    question: "I wish I _____ speak French fluently.",
    options: ["could", "can", "will", "am able to"],
    correctAnswer: "could",
    explanation: "Wish + could for impossible or unlikely abilities.",
    explanationSpanish: "Wish + could para habilidades imposibles o improbables.",
    category: "wishes",
    difficulty: "medium"
  },
  {
    id: "b1-work-1",
    type: "multiple-choice",
    question: "She's been working here _____ she graduated.",
    options: ["since", "for", "during", "while"],
    correctAnswer: "since",
    explanation: "Since + point in time (when she graduated).",
    explanationSpanish: "Since + punto en el tiempo (cuando se graduó).",
    category: "present-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-work-2",
    type: "multiple-choice",
    question: "By the time I arrived, the meeting _____.",
    options: ["had started", "has started", "started", "was starting"],
    correctAnswer: "had started",
    explanation: "Past Perfect for earlier past action.",
    explanationSpanish: "Pasado Perfecto para acción pasada anterior.",
    category: "past-perfect",
    difficulty: "medium"
  },
  {
    id: "b1-opinion-1",
    type: "multiple-choice",
    question: "I think learning languages _____ important for travel.",
    options: ["is", "are", "be", "being"],
    correctAnswer: "is",
    explanation: "Learning languages (gerund as subject) is singular.",
    explanationSpanish: "Learning languages (gerundio como sujeto) es singular.",
    category: "gerunds-infinitives",
    difficulty: "medium"
  },
  {
    id: "b1-opinion-2",
    type: "multiple-choice",
    question: "If I _____ the president, I _____ change many things.",
    options: ["were/would", "was/will", "am/would", "were/will"],
    correctAnswer: "were/would",
    explanation: "Second Conditional for hypothetical opinions.",
    explanationSpanish: "Segunda Condicional para opiniones hipotéticas.",
    category: "second-conditional",
    difficulty: "medium"
  },
  {
    id: "b1-feelings-1",
    type: "multiple-choice",
    question: "I feel _____ when I have to speak in public.",
    options: ["nervous", "nervously", "nerve", "nerving"],
    correctAnswer: "nervous",
    explanation: "Feel + adjective (not adverb) to describe emotions.",
    explanationSpanish: "Feel + adjetivo (no adverbio) para describir emociones.",
    category: "adjectives-adverbs",
    difficulty: "medium"
  },
  {
    id: "b1-plans-1",
    type: "multiple-choice",
    question: "I _____ thinking about _____ my job.",
    options: ["have been/changing", "have been/to change", "am been/changing", "have been/change"],
    correctAnswer: "have been/changing",
    explanation: "Have been + -ing for recent continuous actions; think about + -ing.",
    explanationSpanish: "Have been + -ing para acciones continuas recientes; think about + -ing.",
    category: "present-perfect-continuous",
    difficulty: "medium"
  },
];

// Combine all B1 exercises
export const allB1CompleteExercises: GrammarExercise[] = [
  ...b1PresentPerfectExercises,
  ...b1FutureTensesExercises,
  ...b1ModalDeductionExercises,
  ...b1SecondConditionalExercises,
  ...b1PassiveVoiceExercises,
  ...b1AdditionalTopicsExercises,
  ...b1PracticalGrammarExercises,
];

// Helper function to get B1 exercises by category
export function getB1CompleteExercisesByCategory(category: string): GrammarExercise[] {
  return allB1CompleteExercises.filter(ex => ex.category === category);
}

// Stats for B1
export const b1CompleteStats = {
  presentPerfect: b1PresentPerfectExercises.length,
  futureTenses: b1FutureTensesExercises.length,
  modalDeduction: b1ModalDeductionExercises.length,
  secondConditional: b1SecondConditionalExercises.length,
  passiveVoice: b1PassiveVoiceExercises.length,
  additionalTopics: b1AdditionalTopicsExercises.length,
  practical: b1PracticalGrammarExercises.length,
  total: allB1CompleteExercises.length
};
