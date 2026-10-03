// C2 Proficient Level Grammar Exercises
// Complete mastery of English grammar nuances

import { GrammarExercise } from './grammarExercisesExpanded';

export const c2GrammarExercises: GrammarExercise[] = [
  // Advanced Inversions & Fronting
  {
    id: "c2-g-1",
    type: "multiple-choice",
    question: "So complex ___ the issue that no simple solution exists.",
    options: ["is", "was", "has been", "being"],
    correctAnswer: "is",
    explanation: "'So + adjective' at the start requires inversion: So complex is the issue...",
    explanationSpanish: "'So + adjetivo' al principio requiere inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c2-g-2",
    type: "multiple-choice",
    question: "Not until the evidence was examined ___ the truth emerge.",
    options: ["did", "was", "had", "would"],
    correctAnswer: "did",
    explanation: "'Not until' + clause requires inversion in the main clause.",
    explanationSpanish: "'Not until' + cláusula requiere inversión en la cláusula principal.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c2-g-3",
    type: "multiple-choice",
    question: "Under no circumstances ___ this information be disclosed.",
    options: ["should", "shall", "would", "might"],
    correctAnswer: "should",
    explanation: "Negative adverbial phrases require inversion: Under no circumstances should...",
    explanationSpanish: "Las frases adverbiales negativas requieren inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c2-g-4",
    type: "multiple-choice",
    question: "Seldom ___ such a magnificent performance witnessed.",
    options: ["is", "has been", "was", "had been"],
    correctAnswer: "has been",
    explanation: "'Seldom' at start + present perfect passive with inversion.",
    explanationSpanish: "'Seldom' al principio + presente perfecto pasivo con inversión.",
    category: "inversions",
    difficulty: "hard"
  },
  {
    id: "c2-g-5",
    type: "multiple-choice",
    question: "At no time ___ the suspect admit to the crime.",
    options: ["did", "was", "had", "has"],
    correctAnswer: "did",
    explanation: "'At no time' requires inversion with auxiliary 'did'.",
    explanationSpanish: "'At no time' requiere inversión con auxiliar 'did'.",
    category: "inversions",
    difficulty: "hard"
  },
  // Subjunctive & Formal Structures
  {
    id: "c2-g-6",
    type: "multiple-choice",
    question: "The judge ordered that the defendant ___ released on bail.",
    options: ["is", "be", "was", "being"],
    correctAnswer: "be",
    explanation: "Mandative subjunctive after 'order that': base form 'be'.",
    explanationSpanish: "Subjuntivo mandativo después de 'order that': forma base 'be'.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c2-g-7",
    type: "multiple-choice",
    question: "It is imperative that every citizen ___ their duty.",
    options: ["does", "do", "did", "doing"],
    correctAnswer: "do",
    explanation: "'It is imperative that' + subjunctive (base form, no -s).",
    explanationSpanish: "'It is imperative that' + subjuntivo (forma base, sin -s).",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c2-g-8",
    type: "multiple-choice",
    question: "Were it not for your help, I ___ have succeeded.",
    options: ["would not", "will not", "had not", "did not"],
    correctAnswer: "would not",
    explanation: "'Were it not for' = formal 'If it were not for' + would have.",
    explanationSpanish: "'Were it not for' = formal 'If it were not for' + would have.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c2-g-9",
    type: "multiple-choice",
    question: "Should you require any assistance, please do not hesitate ___.",
    options: ["contact", "to contact", "contacting", "contacted"],
    correctAnswer: "to contact",
    explanation: "'Hesitate' is followed by 'to + infinitive'.",
    explanationSpanish: "'Hesitate' va seguido de 'to + infinitivo'.",
    category: "subjunctive",
    difficulty: "hard"
  },
  {
    id: "c2-g-10",
    type: "multiple-choice",
    question: "Had I known about the delay, I ___ made other arrangements.",
    options: ["would have", "will have", "had", "have"],
    correctAnswer: "would have",
    explanation: "'Had I known' = inverted third conditional, requires 'would have'.",
    explanationSpanish: "'Had I known' = tercer condicional invertido, requiere 'would have'.",
    category: "conditionals",
    difficulty: "hard"
  },
  // Complex Passive & Causative
  {
    id: "c2-g-11",
    type: "multiple-choice",
    question: "The manuscript is thought ___ written in the 12th century.",
    options: ["to be", "to have been", "being", "having been"],
    correctAnswer: "to have been",
    explanation: "Passive report about past event: is thought + to have been + pp.",
    explanationSpanish: "Reporte pasivo sobre evento pasado: is thought + to have been + pp.",
    category: "passive",
    difficulty: "hard"
  },
  {
    id: "c2-g-12",
    type: "multiple-choice",
    question: "The results are expected ___ announced tomorrow.",
    options: ["be", "to be", "being", "been"],
    correctAnswer: "to be",
    explanation: "Passive + expected + to be + past participle.",
    explanationSpanish: "Pasivo + expected + to be + participio pasado.",
    category: "passive",
    difficulty: "hard"
  },
  {
    id: "c2-g-13",
    type: "multiple-choice",
    question: "She had her car ___ while she was on vacation.",
    options: ["steal", "stolen", "stealing", "to steal"],
    correctAnswer: "stolen",
    explanation: "Causative 'have something done': have + object + past participle.",
    explanationSpanish: "Causativo 'have something done': have + objeto + participio pasado.",
    category: "passive",
    difficulty: "hard"
  },
  {
    id: "c2-g-14",
    type: "multiple-choice",
    question: "I won't have my reputation ___ by such accusations.",
    options: ["tarnish", "tarnished", "tarnishing", "to tarnish"],
    correctAnswer: "tarnished",
    explanation: "'Won't have something done' for refusing to allow something.",
    explanationSpanish: "'Won't have something done' para negarse a permitir algo.",
    category: "passive",
    difficulty: "hard"
  },
  // Advanced Modal Perfects
  {
    id: "c2-g-15",
    type: "multiple-choice",
    question: "He ___ not have been aware of the consequences.",
    options: ["might", "may", "could", "all are correct"],
    correctAnswer: "all are correct",
    explanation: "All three modals work for past possibility/speculation.",
    explanationSpanish: "Los tres modales funcionan para posibilidad/especulación pasada.",
    category: "modals",
    difficulty: "hard"
  },
  {
    id: "c2-g-16",
    type: "multiple-choice",
    question: "You ___ have saved yourself the trouble by asking first.",
    options: ["could", "should", "would", "might"],
    correctAnswer: "could",
    explanation: "'Could have' = past ability not used (criticism/regret).",
    explanationSpanish: "'Could have' = habilidad pasada no usada (crítica/arrepentimiento).",
    category: "modals",
    difficulty: "hard"
  },
  {
    id: "c2-g-17",
    type: "multiple-choice",
    question: "They ___ well have left by now - let's check.",
    options: ["may", "must", "should", "would"],
    correctAnswer: "may",
    explanation: "'May well have' = quite possible that (past speculation).",
    explanationSpanish: "'May well have' = bastante posible que (especulación pasada).",
    category: "modals",
    difficulty: "hard"
  },
  {
    id: "c2-g-18",
    type: "multiple-choice",
    question: "She needn't have ___ so early - the meeting was delayed.",
    options: ["arrive", "arrived", "arriving", "to arrive"],
    correctAnswer: "arrived",
    explanation: "'Needn't have + past participle' = unnecessary past action that was done.",
    explanationSpanish: "'Needn't have + participio pasado' = acción pasada innecesaria que se hizo.",
    category: "modals",
    difficulty: "hard"
  },
  // Cleft Sentences
  {
    id: "c2-g-19",
    type: "multiple-choice",
    question: "It ___ the manager who made the final decision.",
    options: ["is", "was", "has been", "all can work"],
    correctAnswer: "all can work",
    explanation: "Cleft sentence: It + be + focus + who/that (tense varies by context).",
    explanationSpanish: "Oración hendida: It + be + foco + who/that (tiempo varía por contexto).",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  {
    id: "c2-g-20",
    type: "multiple-choice",
    question: "What I need ___ a vacation.",
    options: ["is", "are", "was", "were"],
    correctAnswer: "is",
    explanation: "Pseudo-cleft: What + subject + verb + be + complement.",
    explanationSpanish: "Pseudo-hendida: What + sujeto + verbo + be + complemento.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  {
    id: "c2-g-21",
    type: "multiple-choice",
    question: "What annoyed me most ___ his arrogance.",
    options: ["is", "was", "has been", "had been"],
    correctAnswer: "was",
    explanation: "Past pseudo-cleft for past annoyance: What annoyed + was.",
    explanationSpanish: "Pseudo-hendida pasada: What annoyed + was.",
    category: "cleft-sentences",
    difficulty: "hard"
  },
  // Ellipsis & Substitution
  {
    id: "c2-g-22",
    type: "multiple-choice",
    question: "A: 'Can you finish today?' B: 'I hope ___.'",
    options: ["so", "it", "that", "to"],
    correctAnswer: "so",
    explanation: "'Hope so' substitutes for 'hope I can finish today'.",
    explanationSpanish: "'Hope so' sustituye a 'hope I can finish today'.",
    category: "ellipsis",
    difficulty: "hard"
  },
  {
    id: "c2-g-23",
    type: "multiple-choice",
    question: "She speaks French and so ___ her brother.",
    options: ["does", "is", "has", "can"],
    correctAnswer: "does",
    explanation: "'So + auxiliary + subject' for agreement (same verb tense).",
    explanationSpanish: "'So + auxiliar + sujeto' para acuerdo (mismo tiempo verbal).",
    category: "ellipsis",
    difficulty: "hard"
  },
  {
    id: "c2-g-24",
    type: "multiple-choice",
    question: "I don't think we'll win, but I'd like ___.",
    options: ["to", "it", "so", "that"],
    correctAnswer: "to",
    explanation: "Ellipsis after 'like' keeps 'to' (I'd like to win).",
    explanationSpanish: "Elipsis después de 'like' mantiene 'to' (I'd like to win).",
    category: "ellipsis",
    difficulty: "hard"
  },
  // Discourse Markers & Connectors
  {
    id: "c2-g-25",
    type: "multiple-choice",
    question: "___ his wealth, he lives a simple life.",
    options: ["Despite", "Although", "However", "Nevertheless"],
    correctAnswer: "Despite",
    explanation: "'Despite' + noun phrase (his wealth). 'Although' needs a clause.",
    explanationSpanish: "'Despite' + frase nominal. 'Although' necesita una cláusula.",
    category: "connectors",
    difficulty: "hard"
  },
  {
    id: "c2-g-26",
    type: "multiple-choice",
    question: "The project failed. ___, valuable lessons were learned.",
    options: ["Nevertheless", "Despite", "Although", "However much"],
    correctAnswer: "Nevertheless",
    explanation: "'Nevertheless' connects contrasting independent sentences.",
    explanationSpanish: "'Nevertheless' conecta oraciones independientes contrastantes.",
    category: "connectors",
    difficulty: "hard"
  },
  {
    id: "c2-g-27",
    type: "multiple-choice",
    question: "___ difficult the task, she never gives up.",
    options: ["However", "Whatever", "Despite", "Although"],
    correctAnswer: "However",
    explanation: "'However + adjective' = no matter how + adjective.",
    explanationSpanish: "'However + adjetivo' = no importa cuán + adjetivo.",
    category: "connectors",
    difficulty: "hard"
  },
  // Reported Speech Advanced
  {
    id: "c2-g-28",
    type: "multiple-choice",
    question: "She ___ having seen the document before.",
    options: ["denied", "refused", "rejected", "declined"],
    correctAnswer: "denied",
    explanation: "'Deny + -ing' for reported negation of an action.",
    explanationSpanish: "'Deny + -ing' para negación reportada de una acción.",
    category: "reported-speech",
    difficulty: "hard"
  },
  {
    id: "c2-g-29",
    type: "multiple-choice",
    question: "He ___ me to reconsider my decision.",
    options: ["urged", "suggested", "proposed", "recommended"],
    correctAnswer: "urged",
    explanation: "'Urge' + object + to infinitive for strong advice.",
    explanationSpanish: "'Urge' + objeto + infinitivo para consejo fuerte.",
    category: "reported-speech",
    difficulty: "hard"
  },
  {
    id: "c2-g-30",
    type: "multiple-choice",
    question: "The lawyer ___ that his client was innocent.",
    options: ["insisted", "suggested", "recommended", "proposed"],
    correctAnswer: "insisted",
    explanation: "'Insist that + clause' for emphatic claims.",
    explanationSpanish: "'Insist that + cláusula' para afirmaciones enfáticas.",
    category: "reported-speech",
    difficulty: "hard"
  },
  // Nominalization
  {
    id: "c2-g-31",
    type: "multiple-choice",
    question: "The ___ of the new policy led to widespread protests.",
    options: ["implement", "implementation", "implementing", "implemented"],
    correctAnswer: "implementation",
    explanation: "Nominalization: verb 'implement' → noun 'implementation'.",
    explanationSpanish: "Nominalización: verbo 'implement' → sustantivo 'implementation'.",
    category: "nominalization",
    difficulty: "hard"
  },
  {
    id: "c2-g-32",
    type: "multiple-choice",
    question: "Her ___ of the situation was remarkably accurate.",
    options: ["assess", "assessment", "assessing", "assessed"],
    correctAnswer: "assessment",
    explanation: "Nominalization after possessive: 'Her assessment'.",
    explanationSpanish: "Nominalización después de posesivo: 'Her assessment'.",
    category: "nominalization",
    difficulty: "hard"
  },
  // Gerunds & Infinitives Advanced
  {
    id: "c2-g-33",
    type: "multiple-choice",
    question: "I regret ___ you that the position has been filled.",
    options: ["inform", "to inform", "informing", "informed"],
    correctAnswer: "to inform",
    explanation: "'Regret + to infinitive' = I'm sorry to tell you (now).",
    explanationSpanish: "'Regret + infinitivo' = Lamento decirte (ahora).",
    category: "gerunds-infinitives",
    difficulty: "hard"
  },
  {
    id: "c2-g-34",
    type: "multiple-choice",
    question: "I regret ___ that job offer years ago.",
    options: ["reject", "to reject", "rejecting", "rejected"],
    correctAnswer: "rejecting",
    explanation: "'Regret + -ing' = I'm sorry about a past action.",
    explanationSpanish: "'Regret + -ing' = Lamento una acción pasada.",
    category: "gerunds-infinitives",
    difficulty: "hard"
  },
  {
    id: "c2-g-35",
    type: "multiple-choice",
    question: "There's no point in ___ about things we can't change.",
    options: ["worry", "worrying", "to worry", "worried"],
    correctAnswer: "worrying",
    explanation: "'There's no point in + -ing' = it's useless to...",
    explanationSpanish: "'There's no point in + -ing' = no tiene sentido...",
    category: "gerunds-infinitives",
    difficulty: "hard"
  },
  // Advanced Articles Usage
  {
    id: "c2-g-36",
    type: "multiple-choice",
    question: "___ rich should pay more taxes.",
    options: ["The", "A", "-", "An"],
    correctAnswer: "The",
    explanation: "'The + adjective' = a group (the rich = rich people).",
    explanationSpanish: "'The + adjetivo' = un grupo (the rich = gente rica).",
    category: "articles",
    difficulty: "hard"
  },
  {
    id: "c2-g-37",
    type: "multiple-choice",
    question: "Life is ___ precious gift.",
    options: ["a", "the", "-", "an"],
    correctAnswer: "a",
    explanation: "'A/an' for classification: life belongs to category 'precious gift'.",
    explanationSpanish: "'A/an' para clasificación: la vida pertenece a categoría 'regalo precioso'.",
    category: "articles",
    difficulty: "hard"
  },
  {
    id: "c2-g-38",
    type: "multiple-choice",
    question: "___ honesty is the best policy.",
    options: ["-", "The", "An", "A"],
    correctAnswer: "-",
    explanation: "Zero article for abstract nouns used generally.",
    explanationSpanish: "Artículo cero para sustantivos abstractos usados generalmente.",
    category: "articles",
    difficulty: "hard"
  },
  // Advanced Prepositions
  {
    id: "c2-g-39",
    type: "multiple-choice",
    question: "The decision was made ___ consultation with experts.",
    options: ["in", "on", "by", "with"],
    correctAnswer: "in",
    explanation: "'In consultation with' = after consulting with.",
    explanationSpanish: "'In consultation with' = después de consultar con.",
    category: "prepositions-advanced",
    difficulty: "hard"
  },
  {
    id: "c2-g-40",
    type: "multiple-choice",
    question: "The company succeeded ___ all odds.",
    options: ["against", "despite", "in spite", "for"],
    correctAnswer: "against",
    explanation: "'Against all odds' = despite very low probability of success.",
    explanationSpanish: "'Against all odds' = a pesar de muy baja probabilidad de éxito.",
    category: "prepositions-advanced",
    difficulty: "hard"
  },
];
