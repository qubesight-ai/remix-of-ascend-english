import { GrammarExercise } from './grammarExercisesExpanded';

// C1 Advanced Exam - Complete Grammar Exercises
// Covering: Complex structures, Inversions, Participle clauses, Advanced conditionals,
// Cleft sentences, Modal verbs, Language in context

export const c1ComplexSentenceStructures: GrammarExercise[] = [
  {
    id: 'c1-complex-1',
    type: 'multiple-choice',
    question: 'The report, _____ was published last week, has caused considerable controversy.',
    options: ['which', 'that', 'what', 'whose'],
    correctAnswer: 'which',
    explanation: 'Non-defining relative clauses use "which" for things, set off by commas.',
    explanationSpanish: 'Las cláusulas relativas explicativas usan "which" para cosas, separadas por comas.',
    category: 'complex-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-complex-2',
    type: 'multiple-choice',
    question: 'The extent _____ the government was aware of the situation remains unclear.',
    options: ['to which', 'at which', 'for which', 'by which'],
    correctAnswer: 'to which',
    explanation: '"The extent to which" is a formal expression meaning "how much."',
    explanationSpanish: '"The extent to which" es una expresión formal que significa "hasta qué punto."',
    category: 'complex-sentences',
    difficulty: 'hard'
  },
  {
    id: 'c1-complex-3',
    type: 'multiple-choice',
    question: '_____ having studied for months, she still felt unprepared for the exam.',
    options: ['Despite', 'Although', 'However', 'Nevertheless'],
    correctAnswer: 'Despite',
    explanation: '"Despite" is followed by a gerund or noun, not a clause.',
    explanationSpanish: '"Despite" va seguido de gerundio o sustantivo, no de una cláusula.',
    category: 'complex-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-complex-4',
    type: 'multiple-choice',
    question: 'The project was abandoned, _____ was a great disappointment to everyone.',
    options: ['which', 'that', 'what', 'it'],
    correctAnswer: 'which',
    explanation: '"Which" refers to the whole preceding clause in this sentence connector role.',
    explanationSpanish: '"Which" se refiere a toda la cláusula anterior en este rol de conector.',
    category: 'complex-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-complex-5',
    type: 'multiple-choice',
    question: 'The more carefully you plan, _____ the outcome will be.',
    options: ['the better', 'better', 'the best', 'best'],
    correctAnswer: 'the better',
    explanation: 'Double comparative structure: "The more... the more/better."',
    explanationSpanish: 'Estructura comparativa doble: "Cuanto más... más/mejor."',
    category: 'complex-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-complex-6',
    type: 'multiple-choice',
    question: '_____ the circumstances, I think we handled the situation well.',
    options: ['Given', 'Giving', 'To give', 'Having given'],
    correctAnswer: 'Given',
    explanation: '"Given" as a preposition means "considering" or "taking into account."',
    explanationSpanish: '"Given" como preposición significa "considerando" o "teniendo en cuenta."',
    category: 'complex-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-complex-7',
    type: 'multiple-choice',
    question: 'Hard _____ it may seem, the task is actually quite manageable.',
    options: ['as', 'though', 'however', 'although'],
    correctAnswer: 'as',
    explanation: '"Hard as it may seem" is an inverted concessive clause structure.',
    explanationSpanish: '"Hard as it may seem" es una estructura de cláusula concesiva invertida.',
    category: 'complex-sentences',
    difficulty: 'hard'
  },
  {
    id: 'c1-complex-8',
    type: 'multiple-choice',
    question: 'The reason _____ he resigned has never been made public.',
    options: ['why', 'for which', 'that', 'all are correct'],
    correctAnswer: 'all are correct',
    explanation: 'All three options are grammatically correct after "the reason."',
    explanationSpanish: 'Las tres opciones son gramaticalmente correctas después de "the reason."',
    category: 'complex-sentences',
    difficulty: 'hard'
  },
  {
    id: 'c1-complex-9',
    type: 'multiple-choice',
    question: '_____ you submit the form, you cannot make any changes.',
    options: ['Once', 'Unless', 'Until', 'While'],
    correctAnswer: 'Once',
    explanation: '"Once" means "as soon as" or "from the moment that."',
    explanationSpanish: '"Once" significa "tan pronto como" o "desde el momento en que."',
    category: 'complex-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-complex-10',
    type: 'multiple-choice',
    question: 'The theory, _____ basis much of modern physics rests, was revolutionary.',
    options: ['on whose', 'which', 'on which', 'whose'],
    correctAnswer: 'on whose',
    explanation: '"On whose basis" = "on the basis of which" in formal register.',
    explanationSpanish: '"On whose basis" = "sobre cuya base" en registro formal.',
    category: 'complex-sentences',
    difficulty: 'hard'
  }
];

export const c1InversionsExercises: GrammarExercise[] = [
  {
    id: 'c1-inv-1',
    type: 'multiple-choice',
    question: 'Never _____ such a magnificent performance.',
    options: ['have I seen', 'I have seen', 'I saw', 'did I saw'],
    correctAnswer: 'have I seen',
    explanation: 'After "Never" at the start, use inverted word order (auxiliary + subject).',
    explanationSpanish: 'Después de "Never" al inicio, usa orden invertido (auxiliar + sujeto).',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-2',
    type: 'multiple-choice',
    question: 'Rarely _____ the opportunity to witness such talent.',
    options: ['do we have', 'we have', 'we do have', 'having'],
    correctAnswer: 'do we have',
    explanation: '"Rarely" at the beginning triggers subject-auxiliary inversion.',
    explanationSpanish: '"Rarely" al principio provoca inversión sujeto-auxiliar.',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-3',
    type: 'multiple-choice',
    question: 'Not only _____ the exam, but she also got the highest score.',
    options: ['did she pass', 'she passed', 'she did pass', 'passed she'],
    correctAnswer: 'did she pass',
    explanation: '"Not only" at the start requires inversion in the first clause.',
    explanationSpanish: '"Not only" al inicio requiere inversión en la primera cláusula.',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-4',
    type: 'multiple-choice',
    question: 'Under no circumstances _____ to leave the building during the drill.',
    options: ['are you', 'you are', 'you will be', 'will you'],
    correctAnswer: 'are you',
    explanation: '"Under no circumstances" requires inversion for emphasis.',
    explanationSpanish: '"Under no circumstances" requiere inversión para énfasis.',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-5',
    type: 'multiple-choice',
    question: 'Little _____ that his decision would have such consequences.',
    options: ['did he realize', 'he realized', 'he did realize', 'realized he'],
    correctAnswer: 'did he realize',
    explanation: '"Little" with negative meaning triggers inversion.',
    explanationSpanish: '"Little" con significado negativo provoca inversión.',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-6',
    type: 'multiple-choice',
    question: 'So impressive _____ that the audience gave a standing ovation.',
    options: ['was the performance', 'the performance was', 'the performance', 'was it'],
    correctAnswer: 'was the performance',
    explanation: '"So + adjective" at the start triggers inversion.',
    explanationSpanish: '"So + adjetivo" al inicio provoca inversión.',
    category: 'inversions',
    difficulty: 'hard'
  },
  {
    id: 'c1-inv-7',
    type: 'multiple-choice',
    question: 'No sooner _____ than the phone rang.',
    options: ['had I sat down', 'I had sat down', 'I sat down', 'did I sit down'],
    correctAnswer: 'had I sat down',
    explanation: '"No sooner... than" requires past perfect with inversion.',
    explanationSpanish: '"No sooner... than" requiere pasado perfecto con inversión.',
    category: 'inversions',
    difficulty: 'hard'
  },
  {
    id: 'c1-inv-8',
    type: 'multiple-choice',
    question: 'Only after reading the report _____ the full extent of the problem.',
    options: ['did I understand', 'I understood', 'I did understand', 'understood I'],
    correctAnswer: 'did I understand',
    explanation: '"Only after" triggers inversion in the main clause.',
    explanationSpanish: '"Only after" provoca inversión en la cláusula principal.',
    category: 'inversions',
    difficulty: 'hard'
  },
  {
    id: 'c1-inv-9',
    type: 'multiple-choice',
    question: 'At no time _____ aware of the danger we were in.',
    options: ['were we', 'we were', 'we are', 'are we'],
    correctAnswer: 'were we',
    explanation: '"At no time" is a negative adverbial requiring inversion.',
    explanationSpanish: '"At no time" es un adverbio negativo que requiere inversión.',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-10',
    type: 'multiple-choice',
    question: 'Such _____ that everyone stopped to listen.',
    options: ['was the beauty of her voice', 'the beauty of her voice was', 'her voice was beautiful', 'beautiful was her voice'],
    correctAnswer: 'was the beauty of her voice',
    explanation: '"Such" + noun phrase at the start requires inversion.',
    explanationSpanish: '"Such" + frase nominal al inicio requiere inversión.',
    category: 'inversions',
    difficulty: 'hard'
  },
  {
    id: 'c1-inv-11',
    type: 'multiple-choice',
    question: 'Scarcely _____ when the storm began.',
    options: ['had we arrived', 'we had arrived', 'we arrived', 'did we arrive'],
    correctAnswer: 'had we arrived',
    explanation: '"Scarcely... when" uses past perfect with inversion.',
    explanationSpanish: '"Scarcely... when" usa pasado perfecto con inversión.',
    category: 'inversions',
    difficulty: 'hard'
  },
  {
    id: 'c1-inv-12',
    type: 'multiple-choice',
    question: 'Not until midnight _____ home.',
    options: ['did they return', 'they returned', 'they did return', 'returned they'],
    correctAnswer: 'did they return',
    explanation: '"Not until" at the start triggers inversion in the main clause.',
    explanationSpanish: '"Not until" al inicio provoca inversión en la cláusula principal.',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-13',
    type: 'multiple-choice',
    question: 'Had I known about the traffic, I _____ earlier.',
    options: ['would have left', 'would leave', 'had left', 'will leave'],
    correctAnswer: 'would have left',
    explanation: 'Inversion in third conditional: "Had I known" = "If I had known."',
    explanationSpanish: 'Inversión en tercera condicional: "Had I known" = "If I had known."',
    category: 'inversions',
    difficulty: 'medium'
  },
  {
    id: 'c1-inv-14',
    type: 'multiple-choice',
    question: 'Were she to apply, she _____ definitely be considered.',
    options: ['would', 'will', 'had', 'has'],
    correctAnswer: 'would',
    explanation: '"Were she to" is formal inversion for second conditional.',
    explanationSpanish: '"Were she to" es inversión formal para segunda condicional.',
    category: 'inversions',
    difficulty: 'hard'
  },
  {
    id: 'c1-inv-15',
    type: 'multiple-choice',
    question: 'Hardly _____ started when the fire alarm went off.',
    options: ['had the meeting', 'the meeting had', 'the meeting', 'did the meeting'],
    correctAnswer: 'had the meeting',
    explanation: '"Hardly... when" requires past perfect with inversion.',
    explanationSpanish: '"Hardly... when" requiere pasado perfecto con inversión.',
    category: 'inversions',
    difficulty: 'hard'
  }
];

export const c1ParticipleClausesExercises: GrammarExercise[] = [
  {
    id: 'c1-part-1',
    type: 'multiple-choice',
    question: '_____ the news, she burst into tears.',
    options: ['Having heard', 'Heard', 'Being heard', 'To hear'],
    correctAnswer: 'Having heard',
    explanation: 'Perfect participle "Having heard" shows the action happened before the main verb.',
    explanationSpanish: 'El participio perfecto "Having heard" muestra que la acción ocurrió antes del verbo principal.',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-2',
    type: 'multiple-choice',
    question: '_____ by the sudden noise, the birds flew away.',
    options: ['Startled', 'Startling', 'Having startled', 'To startle'],
    correctAnswer: 'Startled',
    explanation: 'Past participle "Startled" shows passive meaning (the birds were startled).',
    explanationSpanish: 'El participio pasado "Startled" muestra significado pasivo.',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-3',
    type: 'multiple-choice',
    question: '_____ to Paris many times, I know the city well.',
    options: ['Having been', 'Being', 'Been', 'To be'],
    correctAnswer: 'Having been',
    explanation: 'Perfect participle for experience that happened before the present situation.',
    explanationSpanish: 'Participio perfecto para experiencia que ocurrió antes de la situación presente.',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-4',
    type: 'multiple-choice',
    question: 'The report, _____ over three months, was finally submitted.',
    options: ['written', 'writing', 'having written', 'to write'],
    correctAnswer: 'written',
    explanation: 'Past participle in reduced relative clause: "which was written."',
    explanationSpanish: 'Participio pasado en cláusula relativa reducida: "que fue escrito."',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-5',
    type: 'multiple-choice',
    question: '_____ what to do, she asked for advice.',
    options: ['Not knowing', 'Not known', 'Not to know', 'Knowing not'],
    correctAnswer: 'Not knowing',
    explanation: 'Negative present participle: "Not knowing" = "Because she didn\'t know."',
    explanationSpanish: 'Participio presente negativo: "Not knowing" = "Como no sabía."',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-6',
    type: 'multiple-choice',
    question: 'The documents _____ on the desk belong to the manager.',
    options: ['lying', 'lain', 'lay', 'having lain'],
    correctAnswer: 'lying',
    explanation: 'Present participle as adjective: "which are lying on the desk."',
    explanationSpanish: 'Participio presente como adjetivo: "que están en el escritorio."',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-7',
    type: 'multiple-choice',
    question: '_____ accused of fraud, the politician resigned.',
    options: ['Having been', 'Being', 'Been', 'To be'],
    correctAnswer: 'Having been',
    explanation: 'Perfect passive participle for prior passive action.',
    explanationSpanish: 'Participio perfecto pasivo para acción pasiva anterior.',
    category: 'participle-clauses',
    difficulty: 'hard'
  },
  {
    id: 'c1-part-8',
    type: 'multiple-choice',
    question: 'The athletes, _____ exhausted, continued to the finish line.',
    options: ['though', 'although', 'despite', 'however'],
    correctAnswer: 'though',
    explanation: '"Though exhausted" = "though they were exhausted" - concessive participle clause.',
    explanationSpanish: '"Though exhausted" = "aunque estaban agotados" - cláusula participial concesiva.',
    category: 'participle-clauses',
    difficulty: 'hard'
  },
  {
    id: 'c1-part-9',
    type: 'multiple-choice',
    question: '_____ carefully, the medicine can have side effects.',
    options: ['Even when taken', 'Even taking', 'Even to take', 'Even been taken'],
    correctAnswer: 'Even when taken',
    explanation: 'Participle clause with conjunction "even when" for concession.',
    explanationSpanish: 'Cláusula participial con conjunción "even when" para concesión.',
    category: 'participle-clauses',
    difficulty: 'hard'
  },
  {
    id: 'c1-part-10',
    type: 'multiple-choice',
    question: 'The building, _____ in the 18th century, is now a museum.',
    options: ['constructed', 'constructing', 'having constructed', 'to construct'],
    correctAnswer: 'constructed',
    explanation: 'Past participle in non-defining relative clause position.',
    explanationSpanish: 'Participio pasado en posición de cláusula relativa explicativa.',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-11',
    type: 'multiple-choice',
    question: '_____ for the interview, he reviewed his resume one more time.',
    options: ['While waiting', 'While waited', 'Waited', 'To wait'],
    correctAnswer: 'While waiting',
    explanation: '"While waiting" = "While he was waiting" - simultaneous action.',
    explanationSpanish: '"While waiting" = "Mientras esperaba" - acción simultánea.',
    category: 'participle-clauses',
    difficulty: 'medium'
  },
  {
    id: 'c1-part-12',
    type: 'multiple-choice',
    question: 'Weather _____, we\'ll have the picnic outdoors.',
    options: ['permitting', 'permitted', 'to permit', 'permits'],
    correctAnswer: 'permitting',
    explanation: 'Absolute participle clause with different subject: "Weather permitting."',
    explanationSpanish: 'Cláusula participial absoluta con sujeto diferente: "Si el tiempo lo permite."',
    category: 'participle-clauses',
    difficulty: 'hard'
  }
];

export const c1AdvancedConditionalsExercises: GrammarExercise[] = [
  {
    id: 'c1-cond-1',
    type: 'multiple-choice',
    question: '_____ I known about the problem, I would have acted sooner.',
    options: ['Had', 'If', 'Should', 'Were'],
    correctAnswer: 'Had',
    explanation: 'Formal inversion in third conditional: "Had I known" = "If I had known."',
    explanationSpanish: 'Inversión formal en tercera condicional: "Had I known" = "Si hubiera sabido."',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-2',
    type: 'multiple-choice',
    question: '_____ you need any assistance, please don\'t hesitate to ask.',
    options: ['Should', 'Would', 'Had', 'Were'],
    correctAnswer: 'Should',
    explanation: '"Should you need" is formal inversion for "If you should need."',
    explanationSpanish: '"Should you need" es inversión formal para "Si necesitara."',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-3',
    type: 'multiple-choice',
    question: '_____ it not for your help, we would have failed.',
    options: ['Were', 'Had', 'Should', 'If'],
    correctAnswer: 'Were',
    explanation: '"Were it not for" = "If it were not for" (hypothetical present/general).',
    explanationSpanish: '"Were it not for" = "Si no fuera por" (hipotético presente/general).',
    category: 'advanced-conditionals',
    difficulty: 'hard'
  },
  {
    id: 'c1-cond-4',
    type: 'multiple-choice',
    question: 'If the government _____ to raise taxes, there would be protests.',
    options: ['were', 'was', 'is', 'will be'],
    correctAnswer: 'were',
    explanation: 'Formal second conditional uses "were" for all subjects.',
    explanationSpanish: 'La segunda condicional formal usa "were" para todos los sujetos.',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-5',
    type: 'multiple-choice',
    question: '_____ the circumstances been different, the outcome might have changed.',
    options: ['Had', 'If', 'Were', 'Should'],
    correctAnswer: 'Had',
    explanation: 'Third conditional inversion with "Had" for past unreal condition.',
    explanationSpanish: 'Inversión de tercera condicional con "Had" para condición irreal pasada.',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-6',
    type: 'multiple-choice',
    question: 'If he _____ more time, he would have finished the project.',
    options: ['had had', 'would have', 'has had', 'had'],
    correctAnswer: 'had had',
    explanation: 'Third conditional requires past perfect in the if-clause.',
    explanationSpanish: 'La tercera condicional requiere pasado perfecto en la cláusula if.',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-7',
    type: 'multiple-choice',
    question: 'But for the traffic jam, we _____ on time.',
    options: ['would have arrived', 'arrived', 'would arrive', 'had arrived'],
    correctAnswer: 'would have arrived',
    explanation: '"But for" = "If it hadn\'t been for" - third conditional meaning.',
    explanationSpanish: '"But for" = "De no haber sido por" - significado de tercera condicional.',
    category: 'advanced-conditionals',
    difficulty: 'hard'
  },
  {
    id: 'c1-cond-8',
    type: 'multiple-choice',
    question: 'Supposing you _____ a million pounds, what would you do?',
    options: ['won', 'win', 'would win', 'had won'],
    correctAnswer: 'won',
    explanation: '"Supposing" introduces a hypothetical like second conditional.',
    explanationSpanish: '"Supposing" introduce una hipótesis como la segunda condicional.',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-9',
    type: 'multiple-choice',
    question: 'If she _____ harder last year, she would be in a better position now.',
    options: ['had worked', 'worked', 'would work', 'works'],
    correctAnswer: 'had worked',
    explanation: 'Mixed conditional: past condition (had worked) → present result (would be).',
    explanationSpanish: 'Condicional mixta: condición pasada → resultado presente.',
    category: 'advanced-conditionals',
    difficulty: 'hard'
  },
  {
    id: 'c1-cond-10',
    type: 'multiple-choice',
    question: 'If I were more confident, I _____ have asked for a promotion.',
    options: ['would', 'will', 'had', 'should'],
    correctAnswer: 'would',
    explanation: 'Mixed conditional: present condition (were) → past result (would have).',
    explanationSpanish: 'Condicional mixta: condición presente → resultado pasado.',
    category: 'advanced-conditionals',
    difficulty: 'hard'
  },
  {
    id: 'c1-cond-11',
    type: 'multiple-choice',
    question: 'Provided that you _____ the rules, you may use the facilities.',
    options: ['follow', 'will follow', 'followed', 'would follow'],
    correctAnswer: 'follow',
    explanation: '"Provided that" is followed by present simple for future condition.',
    explanationSpanish: '"Provided that" va seguido de presente simple para condición futura.',
    category: 'advanced-conditionals',
    difficulty: 'medium'
  },
  {
    id: 'c1-cond-12',
    type: 'multiple-choice',
    question: 'Even if he _____ apologize, I wouldn\'t forgive him.',
    options: ['were to', 'will', 'would', 'is to'],
    correctAnswer: 'were to',
    explanation: '"Even if... were to" emphasizes the hypothetical and unlikely nature.',
    explanationSpanish: '"Even if... were to" enfatiza la naturaleza hipotética e improbable.',
    category: 'advanced-conditionals',
    difficulty: 'hard'
  }
];

export const c1CleftSentencesExercises: GrammarExercise[] = [
  {
    id: 'c1-cleft-1',
    type: 'multiple-choice',
    question: 'It _____ John who broke the window.',
    options: ['was', 'is', 'were', 'has been'],
    correctAnswer: 'was',
    explanation: 'It-cleft sentence emphasizing the subject. Past action = "was."',
    explanationSpanish: 'Oración hendida con "It" enfatizando el sujeto. Acción pasada = "was."',
    category: 'cleft-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-cleft-2',
    type: 'multiple-choice',
    question: '_____ I need is a good night\'s sleep.',
    options: ['What', 'That', 'Which', 'It'],
    correctAnswer: 'What',
    explanation: 'What-cleft (pseudo-cleft) sentence: "What I need is..."',
    explanationSpanish: 'Oración hendida con "What" (pseudo-hendida): "Lo que necesito es..."',
    category: 'cleft-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-cleft-3',
    type: 'multiple-choice',
    question: 'It was in London _____ they first met.',
    options: ['that', 'where', 'which', 'when'],
    correctAnswer: 'that',
    explanation: 'In it-cleft sentences emphasizing place, use "that" (not "where").',
    explanationSpanish: 'En oraciones hendidas que enfatizan lugar, usa "that" (no "where").',
    category: 'cleft-sentences',
    difficulty: 'hard'
  },
  {
    id: 'c1-cleft-4',
    type: 'multiple-choice',
    question: '_____ happened was that the computer crashed.',
    options: ['What', 'That', 'It', 'Which'],
    correctAnswer: 'What',
    explanation: 'What-cleft for emphasizing an event: "What happened was..."',
    explanationSpanish: 'Hendida con "What" para enfatizar un evento: "Lo que pasó fue..."',
    category: 'cleft-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-cleft-5',
    type: 'multiple-choice',
    question: 'It is your attitude _____ matters most.',
    options: ['that', 'what', 'which', 'who'],
    correctAnswer: 'that',
    explanation: 'It-cleft emphasizing subject uses "that" regardless of animate/inanimate.',
    explanationSpanish: 'Hendida con "It" enfatizando sujeto usa "that" sin importar animado/inanimado.',
    category: 'cleft-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-cleft-6',
    type: 'multiple-choice',
    question: '_____ she did was resign from her position.',
    options: ['What', 'That', 'Which', 'It'],
    correctAnswer: 'What',
    explanation: '"What she did was..." is a standard what-cleft for actions.',
    explanationSpanish: '"Lo que hizo fue..." es una hendida estándar para acciones.',
    category: 'cleft-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-cleft-7',
    type: 'multiple-choice',
    question: 'It was only after the accident _____ he realized the danger.',
    options: ['that', 'when', 'which', 'what'],
    correctAnswer: 'that',
    explanation: 'It-cleft emphasizing time phrase uses "that."',
    explanationSpanish: 'Hendida con "It" enfatizando frase temporal usa "that."',
    category: 'cleft-sentences',
    difficulty: 'hard'
  },
  {
    id: 'c1-cleft-8',
    type: 'multiple-choice',
    question: 'The thing _____ annoys me is his constant lateness.',
    options: ['that', 'what', 'which', 'who'],
    correctAnswer: 'that',
    explanation: '"The thing that..." is a variant cleft structure.',
    explanationSpanish: '"Lo que..." es una variante de estructura hendida.',
    category: 'cleft-sentences',
    difficulty: 'medium'
  },
  {
    id: 'c1-cleft-9',
    type: 'multiple-choice',
    question: 'It was because of the rain _____ the match was cancelled.',
    options: ['that', 'why', 'which', 'what'],
    correctAnswer: 'that',
    explanation: 'It-cleft emphasizing reason uses "that" (not "why").',
    explanationSpanish: 'Hendida con "It" enfatizando razón usa "that" (no "why").',
    category: 'cleft-sentences',
    difficulty: 'hard'
  },
  {
    id: 'c1-cleft-10',
    type: 'multiple-choice',
    question: '_____ surprised me was how calm she remained.',
    options: ['What', 'That', 'It', 'Which'],
    correctAnswer: 'What',
    explanation: 'What-cleft expressing surprise about a manner/way.',
    explanationSpanish: 'Hendida con "What" expresando sorpresa sobre una manera.',
    category: 'cleft-sentences',
    difficulty: 'medium'
  }
];

export const c1ModalVerbsAdvancedExercises: GrammarExercise[] = [
  {
    id: 'c1-modal-1',
    type: 'multiple-choice',
    question: 'She _____ have seen the message; her phone was off all day.',
    options: ["can't", "mustn't", "shouldn't", "wouldn't"],
    correctAnswer: "can't",
    explanation: '"Can\'t have + past participle" expresses impossibility in the past.',
    explanationSpanish: '"Can\'t have + participio" expresa imposibilidad en el pasado.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-2',
    type: 'multiple-choice',
    question: 'You _____ have told me earlier! Now it\'s too late.',
    options: ['should', 'could', 'must', 'would'],
    correctAnswer: 'should',
    explanation: '"Should have" expresses criticism about a past action not done.',
    explanationSpanish: '"Should have" expresa crítica sobre una acción pasada no realizada.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-3',
    type: 'multiple-choice',
    question: 'He _____ have been working late; I saw lights in his office.',
    options: ['must', 'can', 'should', 'would'],
    correctAnswer: 'must',
    explanation: '"Must have been" expresses strong deduction about the past.',
    explanationSpanish: '"Must have been" expresa deducción fuerte sobre el pasado.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-4',
    type: 'multiple-choice',
    question: 'They _____ have arrived by now; the flight was three hours ago.',
    options: ['should', 'must', 'would', 'could'],
    correctAnswer: 'should',
    explanation: '"Should have" for expected past action (reasonable expectation).',
    explanationSpanish: '"Should have" para acción pasada esperada (expectativa razonable).',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-5',
    type: 'multiple-choice',
    question: 'I _____ rather you didn\'t mention this to anyone.',
    options: ['would', 'had', 'should', 'could'],
    correctAnswer: 'would',
    explanation: '"Would rather + subject + past" for preferences about others\' actions.',
    explanationSpanish: '"Would rather + sujeto + pasado" para preferencias sobre acciones de otros.',
    category: 'modal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-modal-6',
    type: 'multiple-choice',
    question: 'You _____ have seen his face! He was so embarrassed.',
    options: ['should', 'would', 'could', 'must'],
    correctAnswer: 'should',
    explanation: '"Should have seen" expresses missed opportunity/regret about not seeing.',
    explanationSpanish: '"Should have seen" expresa oportunidad perdida/pesar por no ver.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-7',
    type: 'multiple-choice',
    question: 'The meeting _____ have been cancelled; the room is empty.',
    options: ['must', 'can', 'should', 'would'],
    correctAnswer: 'must',
    explanation: '"Must have been" for logical deduction based on evidence.',
    explanationSpanish: '"Must have been" para deducción lógica basada en evidencia.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-8',
    type: 'multiple-choice',
    question: 'It\'s high time we _____ about the future.',
    options: ['thought', 'think', 'would think', 'will think'],
    correctAnswer: 'thought',
    explanation: '"It\'s high time + subject + past simple" for overdue actions.',
    explanationSpanish: '"It\'s high time + sujeto + pasado simple" para acciones pendientes.',
    category: 'modal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-modal-9',
    type: 'multiple-choice',
    question: 'He _____ be at the meeting; he\'s on vacation in Spain.',
    options: ["can't", "mustn't", "shouldn't", "wouldn't"],
    correctAnswer: "can't",
    explanation: '"Can\'t + base form" for present impossibility based on facts.',
    explanationSpanish: '"Can\'t + forma base" para imposibilidad presente basada en hechos.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-10',
    type: 'multiple-choice',
    question: 'You _____ as well give up; there\'s no hope of winning.',
    options: ['might', 'may', 'should', 'would'],
    correctAnswer: 'might',
    explanation: '"Might as well" suggests doing something since there\'s no better option.',
    explanationSpanish: '"Might as well" sugiere hacer algo ya que no hay mejor opción.',
    category: 'modal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-modal-11',
    type: 'multiple-choice',
    question: 'They _____ have known about the changes, but nobody told them.',
    options: ['could', 'must', 'should', 'would'],
    correctAnswer: 'could',
    explanation: '"Could have known" = had the ability/possibility to know, but didn\'t.',
    explanationSpanish: '"Could have known" = tenía la posibilidad de saber, pero no lo hizo.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-12',
    type: 'multiple-choice',
    question: 'I\'d sooner _____ than ask him for help.',
    options: ['die', 'to die', 'dying', 'died'],
    correctAnswer: 'die',
    explanation: '"I\'d sooner + base form" expresses strong preference.',
    explanationSpanish: '"I\'d sooner + forma base" expresa preferencia fuerte.',
    category: 'modal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-modal-13',
    type: 'multiple-choice',
    question: 'She needn\'t _____ so much food; half of it was wasted.',
    options: ['have prepared', 'prepare', 'to prepare', 'prepared'],
    correctAnswer: 'have prepared',
    explanation: '"Needn\'t have + past participle" = did something unnecessary.',
    explanationSpanish: '"Needn\'t have + participio" = hizo algo innecesario.',
    category: 'modal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-modal-14',
    type: 'multiple-choice',
    question: 'This _____ be the right address; the building is abandoned.',
    options: ["can't", "mustn't", "shouldn't", "won't"],
    correctAnswer: "can't",
    explanation: '"Can\'t be" expresses logical impossibility.',
    explanationSpanish: '"Can\'t be" expresa imposibilidad lógica.',
    category: 'modal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-modal-15',
    type: 'multiple-choice',
    question: 'You _____ be more careful when crossing the street.',
    options: ['ought to', 'would', 'could', 'might'],
    correctAnswer: 'ought to',
    explanation: '"Ought to" expresses strong recommendation/moral obligation.',
    explanationSpanish: '"Ought to" expresa recomendación fuerte/obligación moral.',
    category: 'modal-verbs',
    difficulty: 'medium'
  }
];

export const c1LanguageInContextExercises: GrammarExercise[] = [
  {
    id: 'c1-context-1',
    type: 'multiple-choice',
    question: 'The CEO\'s decision to downsize was met with _____ criticism. (meaning: barely hidden anger)',
    options: ['thinly veiled', 'deeply rooted', 'widely spread', 'highly praised'],
    correctAnswer: 'thinly veiled',
    explanation: '"Thinly veiled" means barely concealed, often used with negative emotions.',
    explanationSpanish: '"Thinly veiled" significa apenas disimulado, usado con emociones negativas.',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-2',
    type: 'multiple-choice',
    question: 'The politician tried to _____ the scandal under the carpet.',
    options: ['sweep', 'push', 'throw', 'hide'],
    correctAnswer: 'sweep',
    explanation: '"Sweep under the carpet" = hide a problem to avoid dealing with it.',
    explanationSpanish: '"Sweep under the carpet" = ocultar un problema para evitar tratarlo.',
    category: 'language-context',
    difficulty: 'medium'
  },
  {
    id: 'c1-context-3',
    type: 'multiple-choice',
    question: 'His argument, _____ appealing, lacks substantial evidence.',
    options: ['however', 'although', 'despite', 'nevertheless'],
    correctAnswer: 'however',
    explanation: '"However + adjective" as a concessive clause: "however appealing it may be."',
    explanationSpanish: '"However + adjetivo" como cláusula concesiva: "por muy atractivo que sea."',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-4',
    type: 'multiple-choice',
    question: 'The report was nothing _____ of revolutionary.',
    options: ['short', 'less', 'more', 'far'],
    correctAnswer: 'short',
    explanation: '"Nothing short of" = completely, absolutely (emphatic expression).',
    explanationSpanish: '"Nothing short of" = completamente, absolutamente (expresión enfática).',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-5',
    type: 'multiple-choice',
    question: 'The company has been in the _____ for months due to financial troubles.',
    options: ['doldrums', 'depths', 'pits', 'slumps'],
    correctAnswer: 'doldrums',
    explanation: '"In the doldrums" = in a state of stagnation or depression.',
    explanationSpanish: '"In the doldrums" = en estado de estancamiento o depresión.',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-6',
    type: 'multiple-choice',
    question: 'I\'m afraid your request falls _____ of our guidelines.',
    options: ['foul', 'short', 'apart', 'behind'],
    correctAnswer: 'foul',
    explanation: '"Fall foul of" = come into conflict with, violate.',
    explanationSpanish: '"Fall foul of" = entrar en conflicto con, violar.',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-7',
    type: 'multiple-choice',
    question: 'Which word would be MOST appropriate in a formal academic essay?',
    options: ['demonstrate', 'show', 'prove', 'display'],
    correctAnswer: 'demonstrate',
    explanation: '"Demonstrate" is the most formal and appropriate for academic writing.',
    explanationSpanish: '"Demonstrate" es el más formal y apropiado para escritura académica.',
    category: 'language-context',
    difficulty: 'medium'
  },
  {
    id: 'c1-context-8',
    type: 'multiple-choice',
    question: 'The new policy has _____ widespread debate among experts.',
    options: ['sparked', 'made', 'done', 'created'],
    correctAnswer: 'sparked',
    explanation: '"Sparked debate" is the common collocation for initiating discussion.',
    explanationSpanish: '"Sparked debate" es la colocación común para iniciar debate.',
    category: 'language-context',
    difficulty: 'medium'
  },
  {
    id: 'c1-context-9',
    type: 'multiple-choice',
    question: 'The author\'s tone in this passage is best described as:',
    options: ['sardonic', 'sarcastic', 'satirical', 'all could apply'],
    correctAnswer: 'all could apply',
    explanation: 'Understanding tone requires context; all these terms relate to criticism with humor.',
    explanationSpanish: 'Entender el tono requiere contexto; todos estos términos se relacionan con crítica con humor.',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-10',
    type: 'multiple-choice',
    question: 'The word "oversight" can mean both "supervision" and:',
    options: ['a mistake or omission', 'excessive control', 'careful planning', 'deliberate action'],
    correctAnswer: 'a mistake or omission',
    explanation: '"Oversight" is contronym: supervision OR a failure to notice something.',
    explanationSpanish: '"Oversight" es un contrónimo: supervisión O un fallo en notar algo.',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-11',
    type: 'multiple-choice',
    question: 'To _____ matters worse, it started raining heavily.',
    options: ['make', 'do', 'get', 'turn'],
    correctAnswer: 'make',
    explanation: '"Make matters worse" is a fixed expression.',
    explanationSpanish: '"Make matters worse" es una expresión fija.',
    category: 'language-context',
    difficulty: 'medium'
  },
  {
    id: 'c1-context-12',
    type: 'multiple-choice',
    question: 'The evidence is _____ circumstantial at best.',
    options: ['merely', 'only', 'just', 'simply'],
    correctAnswer: 'merely',
    explanation: '"Merely circumstantial" is the most formal/legal collocation.',
    explanationSpanish: '"Merely circumstantial" es la colocación más formal/legal.',
    category: 'language-context',
    difficulty: 'hard'
  },
  {
    id: 'c1-context-13',
    type: 'multiple-choice',
    question: 'The negotiations have reached a _____; neither side will compromise.',
    options: ['deadlock', 'standstill', 'gridlock', 'all are correct'],
    correctAnswer: 'all are correct',
    explanation: 'All three words describe an impasse in negotiations.',
    explanationSpanish: 'Las tres palabras describen un punto muerto en negociaciones.',
    category: 'language-context',
    difficulty: 'medium'
  },
  {
    id: 'c1-context-14',
    type: 'multiple-choice',
    question: 'Her response was, to put it _____, disappointing.',
    options: ['mildly', 'lightly', 'softly', 'gently'],
    correctAnswer: 'mildly',
    explanation: '"To put it mildly" = understating something negative.',
    explanationSpanish: '"To put it mildly" = subestimar algo negativo.',
    category: 'language-context',
    difficulty: 'medium'
  },
  {
    id: 'c1-context-15',
    type: 'multiple-choice',
    question: 'The phrase "a foregone conclusion" means:',
    options: ['an inevitable result', 'a previous decision', 'a forgotten outcome', 'a distant goal'],
    correctAnswer: 'an inevitable result',
    explanation: '"Foregone conclusion" = something certain to happen.',
    explanationSpanish: '"Foregone conclusion" = algo seguro de suceder.',
    category: 'language-context',
    difficulty: 'medium'
  }
];

export const c1FormalRegisterExercises: GrammarExercise[] = [
  {
    id: 'c1-register-1',
    type: 'multiple-choice',
    question: 'Which is the most formal way to say "I think"?',
    options: ['It is my considered opinion that', 'I reckon', 'I believe', 'I guess'],
    correctAnswer: 'It is my considered opinion that',
    explanation: 'Formal academic/legal register requires elaborate expressions.',
    explanationSpanish: 'El registro formal académico/legal requiere expresiones elaboradas.',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-2',
    type: 'multiple-choice',
    question: 'In formal writing, "a lot of" should be replaced with:',
    options: ['a considerable amount of', 'loads of', 'tons of', 'plenty of'],
    correctAnswer: 'a considerable amount of',
    explanation: '"A considerable amount of" is appropriate for formal contexts.',
    explanationSpanish: '"A considerable amount of" es apropiado para contextos formales.',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-3',
    type: 'multiple-choice',
    question: 'Choose the formal equivalent of "find out":',
    options: ['ascertain', 'discover', 'learn', 'realize'],
    correctAnswer: 'ascertain',
    explanation: '"Ascertain" is the most formal option for formal/legal contexts.',
    explanationSpanish: '"Ascertain" es la opción más formal para contextos formales/legales.',
    category: 'formal-register',
    difficulty: 'hard'
  },
  {
    id: 'c1-register-4',
    type: 'multiple-choice',
    question: 'In academic writing, "basically" should be replaced with:',
    options: ['fundamentally', 'pretty much', 'kind of', 'more or less'],
    correctAnswer: 'fundamentally',
    explanation: '"Fundamentally" is the formal equivalent of "basically."',
    explanationSpanish: '"Fundamentally" es el equivalente formal de "basically."',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-5',
    type: 'multiple-choice',
    question: 'The formal way to write "get better" in medical context is:',
    options: ['recuperate', 'improve', 'recover', 'heal'],
    correctAnswer: 'recuperate',
    explanation: '"Recuperate" is the most formal medical term.',
    explanationSpanish: '"Recuperate" es el término médico más formal.',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-6',
    type: 'multiple-choice',
    question: 'Which phrase is appropriate for beginning a formal proposal?',
    options: ['I am writing to propose', 'I want to suggest', 'I\'d like to say', 'Here\'s my idea'],
    correctAnswer: 'I am writing to propose',
    explanation: 'Formal proposals use "I am writing to propose/suggest/request."',
    explanationSpanish: 'Las propuestas formales usan "I am writing to propose/suggest/request."',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-7',
    type: 'multiple-choice',
    question: 'The formal equivalent of "deal with" a problem is:',
    options: ['address', 'handle', 'tackle', 'sort out'],
    correctAnswer: 'address',
    explanation: '"Address a problem/issue" is standard formal register.',
    explanationSpanish: '"Address a problem/issue" es registro formal estándar.',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-8',
    type: 'multiple-choice',
    question: 'In formal correspondence, "ASAP" should be written as:',
    options: ['at your earliest convenience', 'as soon as possible', 'quickly', 'right away'],
    correctAnswer: 'at your earliest convenience',
    explanation: '"At your earliest convenience" is the most formal and polite.',
    explanationSpanish: '"At your earliest convenience" es lo más formal y cortés.',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-9',
    type: 'multiple-choice',
    question: 'Choose the formal reporting verb for "said":',
    options: ['stated', 'told', 'mentioned', 'remarked'],
    correctAnswer: 'stated',
    explanation: '"Stated" is more formal and often used in official reports.',
    explanationSpanish: '"Stated" es más formal y se usa en informes oficiales.',
    category: 'formal-register',
    difficulty: 'medium'
  },
  {
    id: 'c1-register-10',
    type: 'multiple-choice',
    question: 'The formal way to end a business letter to someone whose name you know is:',
    options: ['Yours sincerely', 'Yours faithfully', 'Best regards', 'Cheers'],
    correctAnswer: 'Yours sincerely',
    explanation: '"Yours sincerely" when you know the name; "Yours faithfully" when you don\'t.',
    explanationSpanish: '"Yours sincerely" cuando conoces el nombre; "Yours faithfully" cuando no.',
    category: 'formal-register',
    difficulty: 'medium'
  }
];

export const c1AdvancedPhrasalVerbsExercises: GrammarExercise[] = [
  {
    id: 'c1-phrasal-1',
    type: 'multiple-choice',
    question: 'The new CEO plans to _____ major changes in the company structure.',
    options: ['bring about', 'bring up', 'bring out', 'bring in'],
    correctAnswer: 'bring about',
    explanation: '"Bring about" = cause to happen, especially change.',
    explanationSpanish: '"Bring about" = causar que suceda, especialmente cambio.',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-2',
    type: 'multiple-choice',
    question: 'The investigation is still _____, so we can\'t release details.',
    options: ['going on', 'carrying out', 'taking over', 'holding up'],
    correctAnswer: 'going on',
    explanation: '"Going on" = continuing, in progress (especially investigations, events).',
    explanationSpanish: '"Going on" = continuando, en progreso.',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-3',
    type: 'multiple-choice',
    question: 'Scientists are trying to _____ a cure for the disease.',
    options: ['come up with', 'come across', 'come about', 'come into'],
    correctAnswer: 'come up with',
    explanation: '"Come up with" = invent, think of, produce (an idea/solution).',
    explanationSpanish: '"Come up with" = inventar, pensar, producir (una idea/solución).',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-4',
    type: 'multiple-choice',
    question: 'The flight has been _____ due to technical difficulties.',
    options: ['held up', 'held on', 'held out', 'held back'],
    correctAnswer: 'held up',
    explanation: '"Hold up" = delay (often passive: be held up).',
    explanationSpanish: '"Hold up" = retrasar (a menudo pasivo: be held up).',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-5',
    type: 'multiple-choice',
    question: 'The company decided to _____ their expansion plans.',
    options: ['scale back', 'scale up', 'scale down', 'both A and C'],
    correctAnswer: 'both A and C',
    explanation: 'Both "scale back" and "scale down" mean to reduce/make smaller.',
    explanationSpanish: 'Tanto "scale back" como "scale down" significan reducir.',
    category: 'phrasal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-phrasal-6',
    type: 'multiple-choice',
    question: 'The truth will eventually _____ and everyone will know.',
    options: ['come out', 'come up', 'come about', 'come across'],
    correctAnswer: 'come out',
    explanation: '"Come out" = become known, be revealed (information/secrets).',
    explanationSpanish: '"Come out" = hacerse conocido, ser revelado.',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-7',
    type: 'multiple-choice',
    question: 'We need to _____ our differences and work together.',
    options: ['set aside', 'set off', 'set up', 'set out'],
    correctAnswer: 'set aside',
    explanation: '"Set aside" = ignore temporarily, save for later.',
    explanationSpanish: '"Set aside" = ignorar temporalmente, guardar para después.',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-8',
    type: 'multiple-choice',
    question: 'The project _____ due to lack of funding.',
    options: ['fell through', 'fell apart', 'fell out', 'fell behind'],
    correctAnswer: 'fell through',
    explanation: '"Fall through" = fail to happen, collapse (plans/deals).',
    explanationSpanish: '"Fall through" = no suceder, colapsar (planes/acuerdos).',
    category: 'phrasal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-phrasal-9',
    type: 'multiple-choice',
    question: 'The manager _____ the main points of the report.',
    options: ['went over', 'went through', 'went on', 'both A and B'],
    correctAnswer: 'both A and B',
    explanation: 'Both "go over" and "go through" can mean to review/examine.',
    explanationSpanish: 'Tanto "go over" como "go through" pueden significar revisar/examinar.',
    category: 'phrasal-verbs',
    difficulty: 'hard'
  },
  {
    id: 'c1-phrasal-10',
    type: 'multiple-choice',
    question: 'The company was _____ by a larger corporation.',
    options: ['taken over', 'taken up', 'taken in', 'taken on'],
    correctAnswer: 'taken over',
    explanation: '"Take over" = gain control of, acquire (especially businesses).',
    explanationSpanish: '"Take over" = tomar control de, adquirir (especialmente negocios).',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-11',
    type: 'multiple-choice',
    question: 'We need to _____ the pros and cons before making a decision.',
    options: ['weigh up', 'weigh in', 'weigh out', 'weigh down'],
    correctAnswer: 'weigh up',
    explanation: '"Weigh up" = consider carefully, evaluate.',
    explanationSpanish: '"Weigh up" = considerar cuidadosamente, evaluar.',
    category: 'phrasal-verbs',
    difficulty: 'medium'
  },
  {
    id: 'c1-phrasal-12',
    type: 'multiple-choice',
    question: 'The politician\'s excuse doesn\'t _____ to scrutiny.',
    options: ['stand up', 'stand by', 'stand out', 'stand for'],
    correctAnswer: 'stand up',
    explanation: '"Stand up to scrutiny" = remain valid when examined closely.',
    explanationSpanish: '"Stand up to scrutiny" = permanecer válido cuando se examina de cerca.',
    category: 'phrasal-verbs',
    difficulty: 'hard'
  }
];

// Aggregate all C1 Advanced exercises
export const allC1AdvancedExercises: GrammarExercise[] = [
  ...c1ComplexSentenceStructures,
  ...c1InversionsExercises,
  ...c1ParticipleClausesExercises,
  ...c1AdvancedConditionalsExercises,
  ...c1CleftSentencesExercises,
  ...c1ModalVerbsAdvancedExercises,
  ...c1LanguageInContextExercises,
  ...c1FormalRegisterExercises,
  ...c1AdvancedPhrasalVerbsExercises
];

export const c1AdvancedExerciseStats = {
  complexSentences: c1ComplexSentenceStructures.length,
  inversions: c1InversionsExercises.length,
  participleClauses: c1ParticipleClausesExercises.length,
  advancedConditionals: c1AdvancedConditionalsExercises.length,
  cleftSentences: c1CleftSentencesExercises.length,
  modalVerbs: c1ModalVerbsAdvancedExercises.length,
  languageContext: c1LanguageInContextExercises.length,
  formalRegister: c1FormalRegisterExercises.length,
  phrasalVerbs: c1AdvancedPhrasalVerbsExercises.length,
  total: allC1AdvancedExercises.length
};
