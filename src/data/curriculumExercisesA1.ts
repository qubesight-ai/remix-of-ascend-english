// A1 Level Comprehensive Curriculum Exercises - Fully aligned with skill IDs
// Based on CEFR A1 Vocabulary Curriculum with 17+ batches
// Grammar exercises imported from dedicated file
import { Exercise } from "./exercisesData";
import { a1GrammarExercises as importedA1GrammarExercises } from "./a1GrammarExercises";
import { a1SpeakingExercises as importedA1SpeakingExercises } from "./a1SpeakingExercises";
import { a1ListeningExercises as importedA1ListeningExercises } from "./a1ListeningExercises";
import { a1ReadingExercises as importedA1ReadingExercises } from "./a1ReadingExercises";
import { a1WritingExercises as importedA1WritingExercises } from "./a1WritingExercises";

// ====================================
// VOCABULARY EXERCISES - A1 LEVEL (20 themes)
// ====================================
const a1VocabExercises: Record<string, Exercise[]> = {
  // a1-vocab-1: Numbers & Counting (Batch #1)
  "a1-vocab-1": [
    // Part 1: Writing & Spelling (Numbers 1–20)
    {
      id: "a1-v1-1",
      type: "fill-blank",
      question: "Write the number in words: 5 _____",
      options: ["five", "fiv", "fife", "fieve"],
      correctAnswer: "five",
      explanation: "The number 5 is spelled 'five'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-2",
      type: "fill-blank",
      question: "Write the number in words: 8 _____",
      options: ["eight", "eigth", "ate", "eigt"],
      correctAnswer: "eight",
      explanation: "The number 8 is spelled 'eight'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-3",
      type: "fill-blank",
      question: "Write the number in words: 12 _____",
      options: ["twelve", "twelf", "twelv", "twleve"],
      correctAnswer: "twelve",
      explanation: "The number 12 is spelled 'twelve'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-4",
      type: "fill-blank",
      question: "Write the number in words: 15 _____",
      options: ["fifteen", "fiveteen", "fiften", "fitteen"],
      correctAnswer: "fifteen",
      explanation: "The number 15 is spelled 'fifteen'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-5",
      type: "fill-blank",
      question: "Write the number in words: 20 _____",
      options: ["twenty", "tweny", "twenti", "twentie"],
      correctAnswer: "twenty",
      explanation: "The number 20 is spelled 'twenty'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-6",
      type: "fill-blank",
      question: "Unscramble: E-R-H-T-E _____",
      options: ["three", "there", "ether", "teeth"],
      correctAnswer: "three",
      explanation: "The unscrambled word is 'three' (3).",
      difficulty: 1,
      tags: ["numbers", "unscramble", "a1"]
    },
    {
      id: "a1-v1-7",
      type: "fill-blank",
      question: "Unscramble: E-V-E-L-E-N _____",
      options: ["eleven", "enleve", "velene", "levene"],
      correctAnswer: "eleven",
      explanation: "The unscrambled word is 'eleven' (11).",
      difficulty: 1,
      tags: ["numbers", "unscramble", "a1"]
    },
    {
      id: "a1-v1-8",
      type: "fill-blank",
      question: "Unscramble: I-N-E-N _____",
      options: ["nine", "inne", "nien", "enin"],
      correctAnswer: "nine",
      explanation: "The unscrambled word is 'nine' (9).",
      difficulty: 1,
      tags: ["numbers", "unscramble", "a1"]
    },
    {
      id: "a1-v1-9",
      type: "fill-blank",
      question: "Fill in the missing letters: S_v_n (7)",
      options: ["seven", "sevan", "saven", "sivon"],
      correctAnswer: "seven",
      explanation: "The number 7 is spelled 'seven'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-10",
      type: "fill-blank",
      question: "Fill in the missing letters: T_ _rt_ _n (13)",
      options: ["thirteen", "thirtean", "therteen", "thurteen"],
      correctAnswer: "thirteen",
      explanation: "The number 13 is spelled 'thirteen'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    // Part 2: Teen vs. Ty Distinction
    {
      id: "a1-v1-11",
      type: "multiple-choice",
      question: "Choose the correct word for 14:",
      options: ["Fourteen", "Forty", "Fourty", "Forteen"],
      correctAnswer: "Fourteen",
      explanation: "14 is 'Fourteen' (4 + teen). 40 is 'Forty'.",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-12",
      type: "multiple-choice",
      question: "Choose the correct word for 40:",
      options: ["Forty", "Fourteen", "Fourty", "Forteen"],
      correctAnswer: "Forty",
      explanation: "40 is 'Forty'. Remember: '-teen' is for 13-19, '-ty' is for tens.",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-13",
      type: "multiple-choice",
      question: "Choose the correct word for 17:",
      options: ["Seventeen", "Seventy", "Sevinteen", "Seventee"],
      correctAnswer: "Seventeen",
      explanation: "17 is 'Seventeen' (7 + teen).",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-14",
      type: "multiple-choice",
      question: "Choose the correct word for 70:",
      options: ["Seventy", "Seventeen", "Sevnty", "Seventee"],
      correctAnswer: "Seventy",
      explanation: "70 is 'Seventy'.",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-15",
      type: "multiple-choice",
      question: "Choose the correct word for 19:",
      options: ["Nineteen", "Ninety", "Ninteen", "Ninetine"],
      correctAnswer: "Nineteen",
      explanation: "19 is 'Nineteen' (9 + teen).",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-16",
      type: "multiple-choice",
      question: "Choose the correct word for 90:",
      options: ["Ninety", "Nineteen", "Ninty", "Ninetie"],
      correctAnswer: "Ninety",
      explanation: "90 is 'Ninety'.",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-17",
      type: "multiple-choice",
      question: "True or False: 'Thirteen' is the number 30.",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. 'Thirteen' is 13. 'Thirty' is 30.",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-18",
      type: "multiple-choice",
      question: "True or False: 'Fifty' is the number 50.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. 'Fifty' is 50.",
      difficulty: 1,
      tags: ["numbers", "teen-ty", "a1"]
    },
    {
      id: "a1-v1-19",
      type: "multiple-choice",
      question: "Which is the larger number: Eighteen OR Eighty?",
      options: ["Eighty", "Eighteen"],
      correctAnswer: "Eighty",
      explanation: "Eighty (80) is larger than Eighteen (18).",
      difficulty: 1,
      tags: ["numbers", "comparison", "a1"]
    },
    {
      id: "a1-v1-20",
      type: "multiple-choice",
      question: "Which is the smaller number: Sixteen OR Sixty?",
      options: ["Sixteen", "Sixty"],
      correctAnswer: "Sixteen",
      explanation: "Sixteen (16) is smaller than Sixty (60).",
      difficulty: 1,
      tags: ["numbers", "comparison", "a1"]
    },
    // Part 3: Counting Sequences
    {
      id: "a1-v1-21",
      type: "fill-blank",
      question: "What comes next? Two, four, six, _____",
      options: ["eight", "seven", "ten", "five"],
      correctAnswer: "eight",
      explanation: "Counting by twos: 2, 4, 6, 8.",
      difficulty: 1,
      tags: ["numbers", "sequences", "a1"]
    },
    {
      id: "a1-v1-22",
      type: "fill-blank",
      question: "What comes next? Ten, twenty, thirty, _____",
      options: ["forty", "fifty", "twenty-five", "thirty-five"],
      correctAnswer: "forty",
      explanation: "Counting by tens: 10, 20, 30, 40.",
      difficulty: 1,
      tags: ["numbers", "sequences", "a1"]
    },
    {
      id: "a1-v1-23",
      type: "fill-blank",
      question: "What comes next? Five, ten, fifteen, _____",
      options: ["twenty", "twenty-five", "sixteen", "eighteen"],
      correctAnswer: "twenty",
      explanation: "Counting by fives: 5, 10, 15, 20.",
      difficulty: 1,
      tags: ["numbers", "sequences", "a1"]
    },
    {
      id: "a1-v1-24",
      type: "fill-blank",
      question: "Count backward: Ten, nine, eight, _____",
      options: ["seven", "six", "eleven", "five"],
      correctAnswer: "seven",
      explanation: "Counting backward: 10, 9, 8, 7.",
      difficulty: 1,
      tags: ["numbers", "sequences", "a1"]
    },
    {
      id: "a1-v1-25",
      type: "fill-blank",
      question: "Fill in the blank: Twenty-eight, twenty-nine, _____",
      options: ["thirty", "twenty-ten", "thirty-one", "twenty-seven"],
      correctAnswer: "thirty",
      explanation: "After 29 comes 30 (thirty).",
      difficulty: 1,
      tags: ["numbers", "sequences", "a1"]
    },
    {
      id: "a1-v1-26",
      type: "fill-blank",
      question: "Write the number: Thirty-five _____",
      options: ["35", "53", "305", "25"],
      correctAnswer: "35",
      explanation: "Thirty-five is 35.",
      difficulty: 1,
      tags: ["numbers", "writing", "a1"]
    },
    {
      id: "a1-v1-27",
      type: "fill-blank",
      question: "Write the number: Forty-two _____",
      options: ["42", "24", "402", "52"],
      correctAnswer: "42",
      explanation: "Forty-two is 42.",
      difficulty: 1,
      tags: ["numbers", "writing", "a1"]
    },
    {
      id: "a1-v1-28",
      type: "fill-blank",
      question: "Write the number: Fifty-nine _____",
      options: ["59", "95", "509", "49"],
      correctAnswer: "59",
      explanation: "Fifty-nine is 59.",
      difficulty: 1,
      tags: ["numbers", "writing", "a1"]
    },
    {
      id: "a1-v1-29",
      type: "fill-blank",
      question: "Write the number: Sixty-one _____",
      options: ["61", "16", "601", "71"],
      correctAnswer: "61",
      explanation: "Sixty-one is 61.",
      difficulty: 1,
      tags: ["numbers", "writing", "a1"]
    },
    {
      id: "a1-v1-30",
      type: "fill-blank",
      question: "Write the number: Seventy-seven _____",
      options: ["77", "17", "707", "67"],
      correctAnswer: "77",
      explanation: "Seventy-seven is 77.",
      difficulty: 1,
      tags: ["numbers", "writing", "a1"]
    },
    // Part 4: Basic Math Word Problems
    {
      id: "a1-v1-31",
      type: "fill-blank",
      question: "I have 2 apples. You give me 3 more. How many do I have? _____",
      options: ["five", "four", "six", "three"],
      correctAnswer: "five",
      explanation: "2 + 3 = 5 (five).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-32",
      type: "fill-blank",
      question: "One week has 7 days. How many days are in 2 weeks? _____",
      options: ["fourteen", "seven", "twenty-one", "twelve"],
      correctAnswer: "fourteen",
      explanation: "7 × 2 = 14 (fourteen).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-33",
      type: "fill-blank",
      question: "A car has 4 wheels. How many wheels do 2 cars have? _____",
      options: ["eight", "six", "four", "ten"],
      correctAnswer: "eight",
      explanation: "4 × 2 = 8 (eight).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-34",
      type: "fill-blank",
      question: "10 minus 3 equals _____",
      options: ["seven", "eight", "six", "thirteen"],
      correctAnswer: "seven",
      explanation: "10 - 3 = 7 (seven).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-35",
      type: "fill-blank",
      question: "20 plus 30 equals _____",
      options: ["fifty", "forty", "sixty", "ten"],
      correctAnswer: "fifty",
      explanation: "20 + 30 = 50 (fifty).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-36",
      type: "fill-blank",
      question: "Zero plus ten equals _____",
      options: ["ten", "zero", "one", "eleven"],
      correctAnswer: "ten",
      explanation: "0 + 10 = 10 (ten).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-37",
      type: "fill-blank",
      question: "If you have twelve eggs and eat two, how many are left? _____",
      options: ["ten", "twelve", "fourteen", "eight"],
      correctAnswer: "ten",
      explanation: "12 - 2 = 10 (ten).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-38",
      type: "fill-blank",
      question: "Half of twenty is _____",
      options: ["ten", "five", "twenty", "fifteen"],
      correctAnswer: "ten",
      explanation: "20 ÷ 2 = 10 (ten).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-39",
      type: "fill-blank",
      question: "Five times two is _____",
      options: ["ten", "seven", "twelve", "eight"],
      correctAnswer: "ten",
      explanation: "5 × 2 = 10 (ten).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    {
      id: "a1-v1-40",
      type: "fill-blank",
      question: "One hundred minus one is _____",
      options: ["ninety-nine", "one hundred one", "ninety-eight", "one hundred"],
      correctAnswer: "ninety-nine",
      explanation: "100 - 1 = 99 (ninety-nine).",
      difficulty: 1,
      tags: ["numbers", "math", "a1"]
    },
    // Part 5: Real-World Contexts
    {
      id: "a1-v1-41",
      type: "fill-blank",
      question: "Age: 'I am 25 years old.' Write 25 in words: _____",
      options: ["twenty-five", "twenty five", "twentyfive", "tweny-five"],
      correctAnswer: "twenty-five",
      explanation: "25 is written as 'twenty-five' with a hyphen.",
      difficulty: 1,
      tags: ["numbers", "real-world", "a1"]
    },
    {
      id: "a1-v1-42",
      type: "fill-blank",
      question: "Time: There are 60 minutes in an hour. Write 60 in words: _____",
      options: ["sixty", "sixthy", "sixtie", "sxty"],
      correctAnswer: "sixty",
      explanation: "60 is written as 'sixty'.",
      difficulty: 1,
      tags: ["numbers", "real-world", "a1"]
    },
    {
      id: "a1-v1-43",
      type: "fill-blank",
      question: "Money: This coffee costs $3. Write 3 in words: _____",
      options: ["three", "tree", "thre", "thee"],
      correctAnswer: "three",
      explanation: "3 is written as 'three'.",
      difficulty: 1,
      tags: ["numbers", "real-world", "a1"]
    },
    {
      id: "a1-v1-44",
      type: "fill-blank",
      question: "Quantity: There are 11 players on a soccer team. Write 11 in words: _____",
      options: ["eleven", "elven", "elevan", "elleven"],
      correctAnswer: "eleven",
      explanation: "11 is written as 'eleven'.",
      difficulty: 1,
      tags: ["numbers", "real-world", "a1"]
    },
    {
      id: "a1-v1-45",
      type: "fill-blank",
      question: "Address: 'I live at 98 Main Street.' Write 98 in words: _____",
      options: ["ninety-eight", "ninty-eight", "ninety eight", "ninetyeight"],
      correctAnswer: "ninety-eight",
      explanation: "98 is written as 'ninety-eight' with a hyphen.",
      difficulty: 1,
      tags: ["numbers", "real-world", "a1"]
    },
    {
      id: "a1-v1-46",
      type: "fill-blank",
      question: "Phone: My number ends in 0. Write 0 in words: _____",
      options: ["zero", "cero", "zro", "zerro"],
      correctAnswer: "zero",
      explanation: "0 is written as 'zero'.",
      difficulty: 1,
      tags: ["numbers", "real-world", "a1"]
    },
    {
      id: "a1-v1-47",
      type: "fill-blank",
      question: "Correct the spelling: 'I have twenty-wan dollars.' What is the correct word?",
      options: ["twenty-one", "twenty-wan", "twenty-wone", "tweny-one"],
      correctAnswer: "twenty-one",
      explanation: "The correct spelling is 'twenty-one'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-48",
      type: "fill-blank",
      question: "Correct the spelling: 'He is thurty years old.' What is the correct word?",
      options: ["thirty", "thurty", "thrity", "thirthy"],
      correctAnswer: "thirty",
      explanation: "The correct spelling is 'thirty'.",
      difficulty: 1,
      tags: ["numbers", "spelling", "a1"]
    },
    {
      id: "a1-v1-49",
      type: "multiple-choice",
      question: "Which is 100?",
      options: ["One hundred", "One thousand", "Ten", "One hundred ten"],
      correctAnswer: "One hundred",
      explanation: "100 is 'One hundred'.",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
    {
      id: "a1-v1-50",
      type: "fill-blank",
      question: "Final Challenge: Write 100 in words: _____",
      options: ["one hundred", "hundred", "100", "onehundred"],
      correctAnswer: "one hundred",
      explanation: "100 is written as 'one hundred'.",
      difficulty: 1,
      tags: ["numbers", "a1"]
    }
  ],

  // a1-vocab-2: Colors (Batch #2)
  "a1-vocab-2": [
    // Part 1: Visual Recognition & Spelling
    {
      id: "a1-v2-1",
      type: "fill-blank",
      question: "Unscramble: D-E-R _____",
      options: ["red", "der", "dre", "erd"],
      correctAnswer: "red",
      explanation: "The unscrambled word is 'red'.",
      difficulty: 1,
      tags: ["colors", "unscramble", "a1"]
    },
    {
      id: "a1-v2-2",
      type: "fill-blank",
      question: "Unscramble: E-U-L-B _____",
      options: ["blue", "bleu", "lube", "bule"],
      correctAnswer: "blue",
      explanation: "The unscrambled word is 'blue'.",
      difficulty: 1,
      tags: ["colors", "unscramble", "a1"]
    },
    {
      id: "a1-v2-3",
      type: "fill-blank",
      question: "Unscramble: E-E-R-G-N _____",
      options: ["green", "gerne", "grene", "neerg"],
      correctAnswer: "green",
      explanation: "The unscrambled word is 'green'.",
      difficulty: 1,
      tags: ["colors", "unscramble", "a1"]
    },
    {
      id: "a1-v2-4",
      type: "fill-blank",
      question: "Unscramble: O-L-L-E-W-Y _____",
      options: ["yellow", "yollow", "yellwo", "wellow"],
      correctAnswer: "yellow",
      explanation: "The unscrambled word is 'yellow'.",
      difficulty: 1,
      tags: ["colors", "unscramble", "a1"]
    },
    {
      id: "a1-v2-5",
      type: "fill-blank",
      question: "Fill in the missing letters: O_a_ge",
      options: ["orange", "orage", "ornage", "orenge"],
      correctAnswer: "orange",
      explanation: "The color is 'orange'.",
      difficulty: 1,
      tags: ["colors", "spelling", "a1"]
    },
    {
      id: "a1-v2-6",
      type: "fill-blank",
      question: "Fill in the missing letters: P_r_le",
      options: ["purple", "purpel", "pruple", "purble"],
      correctAnswer: "purple",
      explanation: "The color is 'purple'.",
      difficulty: 1,
      tags: ["colors", "spelling", "a1"]
    },
    {
      id: "a1-v2-7",
      type: "fill-blank",
      question: "Fill in the missing letters: B_ _ck",
      options: ["black", "bleck", "blick", "blaak"],
      correctAnswer: "black",
      explanation: "The color is 'black'.",
      difficulty: 1,
      tags: ["colors", "spelling", "a1"]
    },
    {
      id: "a1-v2-8",
      type: "fill-blank",
      question: "Fill in the missing letters: W_i_e",
      options: ["white", "whyte", "wite", "whiit"],
      correctAnswer: "white",
      explanation: "The color is 'white'.",
      difficulty: 1,
      tags: ["colors", "spelling", "a1"]
    },
    {
      id: "a1-v2-9",
      type: "fill-blank",
      question: "Which color is a mix of Red and Yellow? _____",
      options: ["orange", "purple", "green", "pink"],
      correctAnswer: "orange",
      explanation: "Red + Yellow = Orange.",
      difficulty: 1,
      tags: ["colors", "mixing", "a1"]
    },
    {
      id: "a1-v2-10",
      type: "fill-blank",
      question: "Which color is a mix of Blue and Yellow? _____",
      options: ["green", "orange", "purple", "brown"],
      correctAnswer: "green",
      explanation: "Blue + Yellow = Green.",
      difficulty: 1,
      tags: ["colors", "mixing", "a1"]
    },
    // Part 2: Object Association
    {
      id: "a1-v2-11",
      type: "multiple-choice",
      question: "The sky is usually _____.",
      options: ["blue", "green", "red", "yellow"],
      correctAnswer: "blue",
      explanation: "The sky is usually blue.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-12",
      type: "multiple-choice",
      question: "Grass is usually _____.",
      options: ["green", "red", "blue", "yellow"],
      correctAnswer: "green",
      explanation: "Grass is usually green.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-13",
      type: "multiple-choice",
      question: "A banana is _____.",
      options: ["yellow", "purple", "blue", "green"],
      correctAnswer: "yellow",
      explanation: "A ripe banana is yellow.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-14",
      type: "multiple-choice",
      question: "An apple is often _____.",
      options: ["red", "blue", "purple", "white"],
      correctAnswer: "red",
      explanation: "Apples are often red (or green).",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-15",
      type: "multiple-choice",
      question: "Snow is _____.",
      options: ["white", "black", "blue", "gray"],
      correctAnswer: "white",
      explanation: "Snow is white.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-16",
      type: "multiple-choice",
      question: "Chocolate is _____.",
      options: ["brown", "pink", "white", "green"],
      correctAnswer: "brown",
      explanation: "Chocolate is brown.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-17",
      type: "multiple-choice",
      question: "A flamingo is _____.",
      options: ["pink", "orange", "red", "white"],
      correctAnswer: "pink",
      explanation: "Flamingos are pink.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-18",
      type: "multiple-choice",
      question: "Coal is _____.",
      options: ["black", "white", "brown", "gray"],
      correctAnswer: "black",
      explanation: "Coal is black.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-19",
      type: "multiple-choice",
      question: "Carrots are _____.",
      options: ["orange", "green", "red", "yellow"],
      correctAnswer: "orange",
      explanation: "Carrots are orange.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    {
      id: "a1-v2-20",
      type: "multiple-choice",
      question: "Night is _____.",
      options: ["black", "yellow", "white", "blue"],
      correctAnswer: "black",
      explanation: "Night is dark/black.",
      difficulty: 1,
      tags: ["colors", "association", "a1"]
    },
    // Part 3: Reading Comprehension
    {
      id: "a1-v2-21",
      type: "fill-blank",
      question: "'The sun is high.' What color is the sun? _____",
      options: ["yellow", "blue", "green", "red"],
      correctAnswer: "yellow",
      explanation: "The sun is yellow.",
      difficulty: 1,
      tags: ["colors", "comprehension", "a1"]
    },
    {
      id: "a1-v2-22",
      type: "fill-blank",
      question: "'The ocean is deep.' What color is the ocean? _____",
      options: ["blue", "green", "yellow", "white"],
      correctAnswer: "blue",
      explanation: "The ocean is blue.",
      difficulty: 1,
      tags: ["colors", "comprehension", "a1"]
    },
    {
      id: "a1-v2-23",
      type: "fill-blank",
      question: "'The rose is romantic.' What color is a rose? _____",
      options: ["red", "blue", "yellow", "green"],
      correctAnswer: "red",
      explanation: "A romantic rose is usually red.",
      difficulty: 1,
      tags: ["colors", "comprehension", "a1"]
    },
    {
      id: "a1-v2-24",
      type: "fill-blank",
      question: "'The tires on the car.' What color are tires? _____",
      options: ["black", "white", "gray", "brown"],
      correctAnswer: "black",
      explanation: "Tires are black.",
      difficulty: 1,
      tags: ["colors", "comprehension", "a1"]
    },
    {
      id: "a1-v2-25",
      type: "multiple-choice",
      question: "True or False: A strawberry is blue.",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. Strawberries are red.",
      difficulty: 1,
      tags: ["colors", "true-false", "a1"]
    },
    {
      id: "a1-v2-26",
      type: "multiple-choice",
      question: "True or False: Lemons are yellow.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Lemons are yellow.",
      difficulty: 1,
      tags: ["colors", "true-false", "a1"]
    },
    {
      id: "a1-v2-27",
      type: "multiple-choice",
      question: "True or False: Grapes can be purple.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Grapes can be purple (or green).",
      difficulty: 1,
      tags: ["colors", "true-false", "a1"]
    },
    {
      id: "a1-v2-28",
      type: "multiple-choice",
      question: "True or False: Milk is brown.",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. Milk is white.",
      difficulty: 1,
      tags: ["colors", "true-false", "a1"]
    },
    {
      id: "a1-v2-29",
      type: "multiple-choice",
      question: "True or False: An orange is orange.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. An orange is orange in color.",
      difficulty: 1,
      tags: ["colors", "true-false", "a1"]
    },
    {
      id: "a1-v2-30",
      type: "multiple-choice",
      question: "Odd one out: Green, Blue, Apple, Red",
      options: ["Apple", "Green", "Blue", "Red"],
      correctAnswer: "Apple",
      explanation: "Apple is a fruit, not a color.",
      difficulty: 1,
      tags: ["colors", "odd-one-out", "a1"]
    },
    // Part 4: Simple Grammar Integration
    {
      id: "a1-v2-31",
      type: "fill-blank",
      question: "Rearrange: is / The / red / tomato / . → _____",
      options: ["The tomato is red.", "Is the tomato red.", "Red is the tomato.", "The red is tomato."],
      correctAnswer: "The tomato is red.",
      explanation: "The correct sentence is: 'The tomato is red.'",
      difficulty: 1,
      tags: ["colors", "grammar", "a1"]
    },
    {
      id: "a1-v2-32",
      type: "fill-blank",
      question: "Rearrange: blue / The / is / pen / . → _____",
      options: ["The pen is blue.", "Blue is the pen.", "The blue is pen.", "Is the pen blue."],
      correctAnswer: "The pen is blue.",
      explanation: "The correct sentence is: 'The pen is blue.'",
      difficulty: 1,
      tags: ["colors", "grammar", "a1"]
    },
    {
      id: "a1-v2-33",
      type: "fill-blank",
      question: "Rearrange: black / cat / My / is / . → _____",
      options: ["My cat is black.", "Black is my cat.", "Cat is my black.", "Is my cat black."],
      correctAnswer: "My cat is black.",
      explanation: "The correct sentence is: 'My cat is black.'",
      difficulty: 1,
      tags: ["colors", "grammar", "a1"]
    },
    {
      id: "a1-v2-34",
      type: "fill-blank",
      question: "Write the opposite: White ↔ _____",
      options: ["black", "red", "gray", "brown"],
      correctAnswer: "black",
      explanation: "The opposite of white is black.",
      difficulty: 1,
      tags: ["colors", "opposites", "a1"]
    },
    {
      id: "a1-v2-35",
      type: "fill-blank",
      question: "Complete: 'The forest is full of _____ trees.'",
      options: ["green", "blue", "red", "white"],
      correctAnswer: "green",
      explanation: "Trees are green.",
      difficulty: 1,
      tags: ["colors", "context", "a1"]
    },
    // Part 5: Applied Practice
    {
      id: "a1-v2-36",
      type: "fill-blank",
      question: "Write the name of this color: 🔵 _____",
      options: ["blue", "red", "green", "yellow"],
      correctAnswer: "blue",
      explanation: "The blue circle represents the color blue.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-37",
      type: "fill-blank",
      question: "Write the name of this color: 🔴 _____",
      options: ["red", "blue", "green", "orange"],
      correctAnswer: "red",
      explanation: "The red circle represents the color red.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-38",
      type: "fill-blank",
      question: "Write the name of this color: 🟢 _____",
      options: ["green", "blue", "yellow", "red"],
      correctAnswer: "green",
      explanation: "The green circle represents the color green.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-39",
      type: "fill-blank",
      question: "Write the name of this color: 🟡 _____",
      options: ["yellow", "orange", "gold", "brown"],
      correctAnswer: "yellow",
      explanation: "The yellow circle represents the color yellow.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-40",
      type: "fill-blank",
      question: "Write the name of this color: 🟠 _____",
      options: ["orange", "red", "yellow", "brown"],
      correctAnswer: "orange",
      explanation: "The orange circle represents the color orange.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-41",
      type: "fill-blank",
      question: "Write the name of this color: 🟣 _____",
      options: ["purple", "pink", "blue", "red"],
      correctAnswer: "purple",
      explanation: "The purple circle represents the color purple.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-42",
      type: "fill-blank",
      question: "Write the name of this color: ⚫ _____",
      options: ["black", "gray", "brown", "blue"],
      correctAnswer: "black",
      explanation: "The black circle represents the color black.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-43",
      type: "fill-blank",
      question: "Write the name of this color: ⚪ _____",
      options: ["white", "gray", "silver", "beige"],
      correctAnswer: "white",
      explanation: "The white circle represents the color white.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-44",
      type: "fill-blank",
      question: "Write the name of this color: 🟤 _____",
      options: ["brown", "orange", "black", "red"],
      correctAnswer: "brown",
      explanation: "The brown circle represents the color brown.",
      difficulty: 1,
      tags: ["colors", "visual", "a1"]
    },
    {
      id: "a1-v2-45",
      type: "multiple-choice",
      question: "Which color is a mix of Red and Blue?",
      options: ["purple", "green", "orange", "yellow"],
      correctAnswer: "purple",
      explanation: "Red + Blue = Purple.",
      difficulty: 1,
      tags: ["colors", "mixing", "a1"]
    },
    {
      id: "a1-v2-46",
      type: "multiple-choice",
      question: "Which color is a mix of White and Red?",
      options: ["pink", "orange", "purple", "brown"],
      correctAnswer: "pink",
      explanation: "White + Red = Pink.",
      difficulty: 1,
      tags: ["colors", "mixing", "a1"]
    },
    {
      id: "a1-v2-47",
      type: "multiple-choice",
      question: "A stop sign is what color?",
      options: ["red", "green", "yellow", "blue"],
      correctAnswer: "red",
      explanation: "Stop signs are red.",
      difficulty: 1,
      tags: ["colors", "real-world", "a1"]
    },
    {
      id: "a1-v2-48",
      type: "multiple-choice",
      question: "The color of the sea is usually _____.",
      options: ["blue", "red", "yellow", "pink"],
      correctAnswer: "blue",
      explanation: "The sea is usually blue.",
      difficulty: 1,
      tags: ["colors", "real-world", "a1"]
    },
    {
      id: "a1-v2-49",
      type: "multiple-choice",
      question: "Fire is usually _____ and _____.",
      options: ["red and orange", "blue and green", "white and black", "pink and purple"],
      correctAnswer: "red and orange",
      explanation: "Fire is usually red and orange.",
      difficulty: 1,
      tags: ["colors", "real-world", "a1"]
    },
    {
      id: "a1-v2-50",
      type: "fill-blank",
      question: "My favorite color is _____. (Choose any color)",
      options: ["blue", "red", "green", "yellow"],
      correctAnswer: "blue",
      explanation: "This is a personal preference question. Any color is correct!",
      difficulty: 1,
      tags: ["colors", "personal", "a1"]
    }
  ],

  // a1-vocab-3: Family Members (Batch #3)
  "a1-vocab-3": [
    // Part 1: The Core Family
    {
      id: "a1-v3-1",
      type: "fill-blank",
      question: "Your male parent is your _____.",
      options: ["father", "mother", "brother", "sister"],
      correctAnswer: "father",
      explanation: "Your male parent is your father.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-2",
      type: "fill-blank",
      question: "Your female parent is your _____.",
      options: ["mother", "father", "sister", "brother"],
      correctAnswer: "mother",
      explanation: "Your female parent is your mother.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-3",
      type: "fill-blank",
      question: "Your parent's son is your _____.",
      options: ["brother", "sister", "father", "uncle"],
      correctAnswer: "brother",
      explanation: "Your parent's son (who is not you) is your brother.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-4",
      type: "fill-blank",
      question: "Your parent's daughter is your _____.",
      options: ["sister", "brother", "mother", "aunt"],
      correctAnswer: "sister",
      explanation: "Your parent's daughter (who is not you) is your sister.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-5",
      type: "fill-blank",
      question: "Unscramble: T-H-E-M-O-R _____",
      options: ["mother", "mother", "thermo", "hotter"],
      correctAnswer: "mother",
      explanation: "The unscrambled word is 'mother'.",
      difficulty: 1,
      tags: ["family", "unscramble", "a1"]
    },
    {
      id: "a1-v3-6",
      type: "fill-blank",
      question: "Unscramble: T-H-E-R-F-A _____",
      options: ["father", "farthe", "hafter", "theraf"],
      correctAnswer: "father",
      explanation: "The unscrambled word is 'father'.",
      difficulty: 1,
      tags: ["family", "unscramble", "a1"]
    },
    {
      id: "a1-v3-7",
      type: "fill-blank",
      question: "Fill in the missing letters: S_s_er",
      options: ["sister", "sester", "sistor", "saster"],
      correctAnswer: "sister",
      explanation: "The word is 'sister'.",
      difficulty: 1,
      tags: ["family", "spelling", "a1"]
    },
    {
      id: "a1-v3-8",
      type: "fill-blank",
      question: "Fill in the missing letters: B_o_h_r",
      options: ["brother", "broter", "bother", "brather"],
      correctAnswer: "brother",
      explanation: "The word is 'brother'.",
      difficulty: 1,
      tags: ["family", "spelling", "a1"]
    },
    {
      id: "a1-v3-9",
      type: "fill-blank",
      question: "Short form of Mother: _____",
      options: ["Mom", "Dad", "Sis", "Bro"],
      correctAnswer: "Mom",
      explanation: "The short form of Mother is Mom (or Mum in British English).",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-10",
      type: "fill-blank",
      question: "Short form of Father: _____",
      options: ["Dad", "Mom", "Bro", "Sis"],
      correctAnswer: "Dad",
      explanation: "The short form of Father is Dad.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    // Part 2: Generations
    {
      id: "a1-v3-11",
      type: "fill-blank",
      question: "Your father's father is your _____.",
      options: ["grandfather", "grandmother", "uncle", "father"],
      correctAnswer: "grandfather",
      explanation: "Your father's father is your grandfather.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-12",
      type: "fill-blank",
      question: "Your mother's mother is your _____.",
      options: ["grandmother", "grandfather", "aunt", "mother"],
      correctAnswer: "grandmother",
      explanation: "Your mother's mother is your grandmother.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-13",
      type: "multiple-choice",
      question: "If you are a man, you are your parents' _____.",
      options: ["son", "daughter", "brother", "sister"],
      correctAnswer: "son",
      explanation: "A male child is a son.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-14",
      type: "multiple-choice",
      question: "If you are a woman, you are your parents' _____.",
      options: ["daughter", "son", "sister", "brother"],
      correctAnswer: "daughter",
      explanation: "A female child is a daughter.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-15",
      type: "multiple-choice",
      question: "True or False: Your grandmother is your 'Grandma.'",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Grandma is a short form for grandmother.",
      difficulty: 1,
      tags: ["family", "true-false", "a1"]
    },
    {
      id: "a1-v3-16",
      type: "multiple-choice",
      question: "True or False: Your brother is a girl.",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. A brother is a boy/man. A sister is a girl/woman.",
      difficulty: 1,
      tags: ["family", "true-false", "a1"]
    },
    {
      id: "a1-v3-17",
      type: "multiple-choice",
      question: "True or False: A 'sibling' is a brother or sister.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Sibling means brother or sister.",
      difficulty: 1,
      tags: ["family", "true-false", "a1"]
    },
    {
      id: "a1-v3-18",
      type: "multiple-choice",
      question: "Match: Father + Mother = _____",
      options: ["Parents", "Children", "Siblings", "Grandparents"],
      correctAnswer: "Parents",
      explanation: "Father and mother together are called parents.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-19",
      type: "multiple-choice",
      question: "Match: Grandfather + Grandmother = _____",
      options: ["Grandparents", "Parents", "Children", "Siblings"],
      correctAnswer: "Grandparents",
      explanation: "Grandfather and grandmother together are grandparents.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-20",
      type: "fill-blank",
      question: "Logic: My father's wife is my _____.",
      options: ["mother", "sister", "grandmother", "aunt"],
      correctAnswer: "mother",
      explanation: "Your father's wife is your mother (or stepmother).",
      difficulty: 1,
      tags: ["family", "logic", "a1"]
    },
    // Part 3: Simple Possessives
    {
      id: "a1-v3-21",
      type: "fill-blank",
      question: "'My mother_____ name is Maria.' Add 's or s'",
      options: ["'s", "s'", "s", "'"],
      correctAnswer: "'s",
      explanation: "My mother's name - we add 's for possession.",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-22",
      type: "fill-blank",
      question: "'My _____'s name is John.' (Father / Brother)",
      options: ["father", "brother", "mother", "sister"],
      correctAnswer: "father",
      explanation: "Both could work, but 'father' fits better as a typical example.",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-23",
      type: "fill-blank",
      question: "'I have two _____.' (Sisters / Sister)",
      options: ["sisters", "sister", "sister's", "sisters'"],
      correctAnswer: "sisters",
      explanation: "Two = plural, so we say 'sisters'.",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-24",
      type: "fill-blank",
      question: "'He has one _____.' (Brother / Brothers)",
      options: ["brother", "brothers", "brother's", "brothers'"],
      correctAnswer: "brother",
      explanation: "One = singular, so we say 'brother'.",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-25",
      type: "fill-blank",
      question: "Rearrange: mother / My / is / doctor / a / . → _____",
      options: ["My mother is a doctor.", "Mother my is a doctor.", "A doctor is my mother.", "Is my mother a doctor."],
      correctAnswer: "My mother is a doctor.",
      explanation: "The correct sentence is: 'My mother is a doctor.'",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-26",
      type: "fill-blank",
      question: "Rearrange: is / brother / My / tall / . → _____",
      options: ["My brother is tall.", "Brother my is tall.", "Is my brother tall.", "Tall is my brother."],
      correctAnswer: "My brother is tall.",
      explanation: "The correct sentence is: 'My brother is tall.'",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-27",
      type: "multiple-choice",
      question: "Choose: '_____ father is 50 years old.' (Subject: A girl speaking)",
      options: ["Her", "His", "My", "Your"],
      correctAnswer: "Her",
      explanation: "A girl uses 'Her' for possession (Her father).",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-28",
      type: "multiple-choice",
      question: "Choose: '_____ sister is 10 years old.' (Subject: A boy speaking)",
      options: ["His", "Her", "My", "Your"],
      correctAnswer: "His",
      explanation: "A boy uses 'His' for possession (His sister).",
      difficulty: 1,
      tags: ["family", "grammar", "a1"]
    },
    {
      id: "a1-v3-29",
      type: "fill-blank",
      question: "'This is my _____.' (Point to a picture of a baby girl)",
      options: ["daughter", "son", "sister", "brother"],
      correctAnswer: "daughter",
      explanation: "A baby girl is your daughter.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-30",
      type: "fill-blank",
      question: "'This is my _____.' (Point to a picture of an old man)",
      options: ["grandfather", "grandmother", "father", "uncle"],
      correctAnswer: "grandfather",
      explanation: "An old man in your family is likely your grandfather.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    // Part 4: Family Tree Logic
    {
      id: "a1-v3-31",
      type: "fill-blank",
      question: "If Sarah is Ben's mother, Ben is Sarah's _____.",
      options: ["son", "father", "brother", "daughter"],
      correctAnswer: "son",
      explanation: "If Sarah is Ben's mother, then Ben is her son.",
      difficulty: 1,
      tags: ["family", "logic", "a1"]
    },
    {
      id: "a1-v3-32",
      type: "fill-blank",
      question: "If John is Mary's father, Mary is John's _____.",
      options: ["daughter", "mother", "sister", "son"],
      correctAnswer: "daughter",
      explanation: "If John is Mary's father, then Mary is his daughter.",
      difficulty: 1,
      tags: ["family", "logic", "a1"]
    },
    {
      id: "a1-v3-33",
      type: "fill-blank",
      question: "If Tom and Lisa have the same parents, Lisa is Tom's _____.",
      options: ["sister", "mother", "daughter", "cousin"],
      correctAnswer: "sister",
      explanation: "People with the same parents are siblings (brothers and sisters).",
      difficulty: 1,
      tags: ["family", "logic", "a1"]
    },
    {
      id: "a1-v3-34",
      type: "fill-blank",
      question: "Your mother's father is your _____.",
      options: ["grandfather", "father", "uncle", "brother"],
      correctAnswer: "grandfather",
      explanation: "Your mother's father is your grandfather.",
      difficulty: 1,
      tags: ["family", "logic", "a1"]
    },
    {
      id: "a1-v3-35",
      type: "fill-blank",
      question: "Your uncle's son is your _____.",
      options: ["cousin", "brother", "nephew", "son"],
      correctAnswer: "cousin",
      explanation: "Your uncle's children are your cousins.",
      difficulty: 1,
      tags: ["family", "logic", "a1"]
    },
    // Part 5: Vocabulary Expansion
    {
      id: "a1-v3-36",
      type: "multiple-choice",
      question: "Odd one out: Mother, Sister, Teacher, Father",
      options: ["Teacher", "Mother", "Sister", "Father"],
      correctAnswer: "Teacher",
      explanation: "Teacher is not a family member.",
      difficulty: 1,
      tags: ["family", "odd-one-out", "a1"]
    },
    {
      id: "a1-v3-37",
      type: "multiple-choice",
      question: "Odd one out: Son, Daughter, Brother, Dog",
      options: ["Dog", "Son", "Daughter", "Brother"],
      correctAnswer: "Dog",
      explanation: "Dog is not a family member (it's a pet).",
      difficulty: 1,
      tags: ["family", "odd-one-out", "a1"]
    },
    {
      id: "a1-v3-38",
      type: "fill-blank",
      question: "Write the feminine: Father → _____",
      options: ["mother", "sister", "daughter", "grandmother"],
      correctAnswer: "mother",
      explanation: "The feminine of father is mother.",
      difficulty: 1,
      tags: ["family", "gender", "a1"]
    },
    {
      id: "a1-v3-39",
      type: "fill-blank",
      question: "Write the masculine: Sister → _____",
      options: ["brother", "father", "son", "uncle"],
      correctAnswer: "brother",
      explanation: "The masculine of sister is brother.",
      difficulty: 1,
      tags: ["family", "gender", "a1"]
    },
    {
      id: "a1-v3-40",
      type: "fill-blank",
      question: "Write the feminine: Grandfather → _____",
      options: ["grandmother", "mother", "aunt", "sister"],
      correctAnswer: "grandmother",
      explanation: "The feminine of grandfather is grandmother.",
      difficulty: 1,
      tags: ["family", "gender", "a1"]
    },
    {
      id: "a1-v3-41",
      type: "fill-blank",
      question: "Write the feminine: Son → _____",
      options: ["daughter", "sister", "mother", "niece"],
      correctAnswer: "daughter",
      explanation: "The feminine of son is daughter.",
      difficulty: 1,
      tags: ["family", "gender", "a1"]
    },
    {
      id: "a1-v3-42",
      type: "fill-blank",
      question: "How do you say 'Mama' in English? _____",
      options: ["Mom", "Dad", "Granny", "Auntie"],
      correctAnswer: "Mom",
      explanation: "'Mama' in English is 'Mom' or 'Mum'.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-43",
      type: "fill-blank",
      question: "How do you say 'Papa' in English? _____",
      options: ["Dad", "Mom", "Grandpa", "Uncle"],
      correctAnswer: "Dad",
      explanation: "'Papa' in English is 'Dad'.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-44",
      type: "fill-blank",
      question: "'We are a _____.' (Word for the whole group: F_m_ly)",
      options: ["family", "team", "group", "class"],
      correctAnswer: "family",
      explanation: "The word is 'family'.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-45",
      type: "fill-blank",
      question: "Your father's sister is your _____.",
      options: ["aunt", "grandmother", "cousin", "sister"],
      correctAnswer: "aunt",
      explanation: "Your father's sister is your aunt.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-46",
      type: "fill-blank",
      question: "Your mother's brother is your _____.",
      options: ["uncle", "grandfather", "cousin", "brother"],
      correctAnswer: "uncle",
      explanation: "Your mother's brother is your uncle.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-47",
      type: "fill-blank",
      question: "Your brother's daughter is your _____.",
      options: ["niece", "nephew", "cousin", "daughter"],
      correctAnswer: "niece",
      explanation: "Your brother's daughter is your niece.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-48",
      type: "fill-blank",
      question: "Your sister's son is your _____.",
      options: ["nephew", "niece", "cousin", "son"],
      correctAnswer: "nephew",
      explanation: "Your sister's son is your nephew.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-49",
      type: "multiple-choice",
      question: "A husband and wife are _____.",
      options: ["married", "siblings", "cousins", "grandparents"],
      correctAnswer: "married",
      explanation: "A husband and wife are married.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-50",
      type: "fill-blank",
      question: "'I love my _____.' (Write any family word)",
      options: ["family", "mother", "father", "sister"],
      correctAnswer: "family",
      explanation: "Any family member word is correct!",
      difficulty: 1,
      tags: ["family", "personal", "a1"]
    }
  ],

  // a1-vocab-4: Basic Food (Batch #4)
  "a1-vocab-4": [
    // Part 1: Identification & Spelling
    {
      id: "a1-v4-1",
      type: "fill-blank",
      question: "Unscramble: P-P-L-E-A _____",
      options: ["apple", "papel", "lepap", "appel"],
      correctAnswer: "apple",
      explanation: "The unscrambled word is 'apple'.",
      difficulty: 1,
      tags: ["food", "unscramble", "a1"]
    },
    {
      id: "a1-v4-2",
      type: "fill-blank",
      question: "Unscramble: I-C-E-R _____",
      options: ["rice", "icer", "cire", "reci"],
      correctAnswer: "rice",
      explanation: "The unscrambled word is 'rice'.",
      difficulty: 1,
      tags: ["food", "unscramble", "a1"]
    },
    {
      id: "a1-v4-3",
      type: "fill-blank",
      question: "Unscramble: E-S-E-E-H-C _____",
      options: ["cheese", "cheeze", "seehec", "esehec"],
      correctAnswer: "cheese",
      explanation: "The unscrambled word is 'cheese'.",
      difficulty: 1,
      tags: ["food", "unscramble", "a1"]
    },
    {
      id: "a1-v4-4",
      type: "fill-blank",
      question: "Unscramble: E-A-D-R-B _____",
      options: ["bread", "bared", "debar", "beard"],
      correctAnswer: "bread",
      explanation: "The unscrambled word is 'bread'.",
      difficulty: 1,
      tags: ["food", "unscramble", "a1"]
    },
    {
      id: "a1-v4-5",
      type: "fill-blank",
      question: "Fill in the missing letters: C_i_k_n",
      options: ["chicken", "chickan", "chiken", "chickn"],
      correctAnswer: "chicken",
      explanation: "The word is 'chicken'.",
      difficulty: 1,
      tags: ["food", "spelling", "a1"]
    },
    {
      id: "a1-v4-6",
      type: "fill-blank",
      question: "Fill in the missing letters: B_n_n_",
      options: ["banana", "banena", "benana", "bonana"],
      correctAnswer: "banana",
      explanation: "The word is 'banana'.",
      difficulty: 1,
      tags: ["food", "spelling", "a1"]
    },
    {
      id: "a1-v4-7",
      type: "fill-blank",
      question: "Fill in the missing letters: T_m_t_",
      options: ["tomato", "tometo", "tamato", "tomatu"],
      correctAnswer: "tomato",
      explanation: "The word is 'tomato'.",
      difficulty: 1,
      tags: ["food", "spelling", "a1"]
    },
    {
      id: "a1-v4-8",
      type: "fill-blank",
      question: "Fill in the missing letters: F_s_",
      options: ["fish", "fash", "fesh", "fosh"],
      correctAnswer: "fish",
      explanation: "The word is 'fish'.",
      difficulty: 1,
      tags: ["food", "spelling", "a1"]
    },
    {
      id: "a1-v4-9",
      type: "fill-blank",
      question: "Write the word: 🥚 _____",
      options: ["egg", "eeg", "agg", "ogg"],
      correctAnswer: "egg",
      explanation: "The emoji shows an egg.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    {
      id: "a1-v4-10",
      type: "fill-blank",
      question: "Write the word: 🥛 _____",
      options: ["milk", "melk", "mulk", "mlik"],
      correctAnswer: "milk",
      explanation: "The emoji shows milk.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    // Part 2: Categorization
    {
      id: "a1-v4-11",
      type: "multiple-choice",
      question: "An Apple is a: _____",
      options: ["Fruit", "Meat", "Vegetable", "Grain"],
      correctAnswer: "Fruit",
      explanation: "An apple is a fruit.",
      difficulty: 1,
      tags: ["food", "categories", "a1"]
    },
    {
      id: "a1-v4-12",
      type: "multiple-choice",
      question: "Chicken is a: _____",
      options: ["Meat", "Fruit", "Vegetable", "Dairy"],
      correctAnswer: "Meat",
      explanation: "Chicken is a type of meat.",
      difficulty: 1,
      tags: ["food", "categories", "a1"]
    },
    {
      id: "a1-v4-13",
      type: "multiple-choice",
      question: "Rice is a: _____",
      options: ["Grain", "Fruit", "Meat", "Vegetable"],
      correctAnswer: "Grain",
      explanation: "Rice is a grain.",
      difficulty: 1,
      tags: ["food", "categories", "a1"]
    },
    {
      id: "a1-v4-14",
      type: "multiple-choice",
      question: "A Banana is a: _____",
      options: ["Fruit", "Vegetable", "Meat", "Grain"],
      correctAnswer: "Fruit",
      explanation: "A banana is a fruit.",
      difficulty: 1,
      tags: ["food", "categories", "a1"]
    },
    {
      id: "a1-v4-15",
      type: "multiple-choice",
      question: "Bread is made from: _____",
      options: ["Grains", "Fish", "Meat", "Fruits"],
      correctAnswer: "Grains",
      explanation: "Bread is made from grains (wheat flour).",
      difficulty: 1,
      tags: ["food", "categories", "a1"]
    },
    {
      id: "a1-v4-16",
      type: "multiple-choice",
      question: "Odd one out: Apple, Banana, Bread, Orange",
      options: ["Bread", "Apple", "Banana", "Orange"],
      correctAnswer: "Bread",
      explanation: "Bread is not a fruit.",
      difficulty: 1,
      tags: ["food", "odd-one-out", "a1"]
    },
    {
      id: "a1-v4-17",
      type: "multiple-choice",
      question: "Odd one out: Chicken, Fish, Milk, Beef",
      options: ["Milk", "Chicken", "Fish", "Beef"],
      correctAnswer: "Milk",
      explanation: "Milk is a drink/dairy, not meat.",
      difficulty: 1,
      tags: ["food", "odd-one-out", "a1"]
    },
    {
      id: "a1-v4-18",
      type: "multiple-choice",
      question: "True or False: A tomato is usually blue.",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. Tomatoes are red (when ripe).",
      difficulty: 1,
      tags: ["food", "true-false", "a1"]
    },
    {
      id: "a1-v4-19",
      type: "multiple-choice",
      question: "True or False: You eat cereal with milk.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Cereal is commonly eaten with milk.",
      difficulty: 1,
      tags: ["food", "true-false", "a1"]
    },
    {
      id: "a1-v4-20",
      type: "multiple-choice",
      question: "True or False: Eggs come from chickens.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Chickens lay eggs.",
      difficulty: 1,
      tags: ["food", "true-false", "a1"]
    },
    // Part 3: Meals of the Day
    {
      id: "a1-v4-21",
      type: "fill-blank",
      question: "The first meal in the morning is _____.",
      options: ["breakfast", "lunch", "dinner", "snack"],
      correctAnswer: "breakfast",
      explanation: "Breakfast is the first meal of the day.",
      difficulty: 1,
      tags: ["food", "meals", "a1"]
    },
    {
      id: "a1-v4-22",
      type: "fill-blank",
      question: "The meal in the middle of the day is _____.",
      options: ["lunch", "breakfast", "dinner", "supper"],
      correctAnswer: "lunch",
      explanation: "Lunch is the midday meal.",
      difficulty: 1,
      tags: ["food", "meals", "a1"]
    },
    {
      id: "a1-v4-23",
      type: "fill-blank",
      question: "The meal in the evening is _____.",
      options: ["dinner", "breakfast", "lunch", "brunch"],
      correctAnswer: "dinner",
      explanation: "Dinner is the evening meal.",
      difficulty: 1,
      tags: ["food", "meals", "a1"]
    },
    {
      id: "a1-v4-24",
      type: "multiple-choice",
      question: "For Breakfast, I eat _____.",
      options: ["Eggs", "Fish and chips", "Pizza", "Steak"],
      correctAnswer: "Eggs",
      explanation: "Eggs are a common breakfast food.",
      difficulty: 1,
      tags: ["food", "meals", "a1"]
    },
    {
      id: "a1-v4-25",
      type: "multiple-choice",
      question: "For Dinner, we often eat _____.",
      options: ["Chicken", "Cereal", "Toast", "Cornflakes"],
      correctAnswer: "Chicken",
      explanation: "Chicken is a common dinner food.",
      difficulty: 1,
      tags: ["food", "meals", "a1"]
    },
    {
      id: "a1-v4-26",
      type: "fill-blank",
      question: "Complete: 'I am hungry. I want to _____.'",
      options: ["eat", "drink", "sleep", "run"],
      correctAnswer: "eat",
      explanation: "When hungry, you want to eat.",
      difficulty: 1,
      tags: ["food", "verbs", "a1"]
    },
    {
      id: "a1-v4-27",
      type: "fill-blank",
      question: "Complete: 'Rice and _____ is a common meal.'",
      options: ["beans", "water", "milk", "juice"],
      correctAnswer: "beans",
      explanation: "Rice and beans is a common meal.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-28",
      type: "fill-blank",
      question: "Rearrange: likes / He / apples / . → _____",
      options: ["He likes apples.", "Likes he apples.", "Apples he likes.", "He apples likes."],
      correctAnswer: "He likes apples.",
      explanation: "The correct sentence is: 'He likes apples.'",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-29",
      type: "fill-blank",
      question: "Rearrange: eat / I / bread / . → _____",
      options: ["I eat bread.", "Eat I bread.", "Bread I eat.", "I bread eat."],
      correctAnswer: "I eat bread.",
      explanation: "The correct sentence is: 'I eat bread.'",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-30",
      type: "fill-blank",
      question: "Rearrange: is / Cheese / yellow / . → _____",
      options: ["Cheese is yellow.", "Is cheese yellow.", "Yellow is cheese.", "Cheese yellow is."],
      correctAnswer: "Cheese is yellow.",
      explanation: "The correct sentence is: 'Cheese is yellow.'",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    // Part 4: Quantities (A/An/Some)
    {
      id: "a1-v4-31",
      type: "multiple-choice",
      question: "I want _____ apple.",
      options: ["an", "a", "some", "the"],
      correctAnswer: "an",
      explanation: "'An' is used before vowels (apple starts with 'a').",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-32",
      type: "multiple-choice",
      question: "I want _____ banana.",
      options: ["a", "an", "some", "the"],
      correctAnswer: "a",
      explanation: "'A' is used before consonants (banana starts with 'b').",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-33",
      type: "multiple-choice",
      question: "I want _____ egg.",
      options: ["an", "a", "some", "the"],
      correctAnswer: "an",
      explanation: "'An' is used before vowels (egg starts with 'e').",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-34",
      type: "multiple-choice",
      question: "I want _____ rice.",
      options: ["some", "a", "an", "the"],
      correctAnswer: "some",
      explanation: "'Some' is used with uncountable nouns like rice.",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-35",
      type: "multiple-choice",
      question: "I want _____ bread.",
      options: ["some", "a", "an", "the"],
      correctAnswer: "some",
      explanation: "'Some' is used with uncountable nouns like bread.",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-36",
      type: "multiple-choice",
      question: "There is _____ orange on the table.",
      options: ["an", "a", "some", "the"],
      correctAnswer: "an",
      explanation: "'An' is used before vowels (orange starts with 'o').",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-37",
      type: "multiple-choice",
      question: "There is _____ fish for dinner.",
      options: ["some", "a", "an", "the"],
      correctAnswer: "some",
      explanation: "'Some' is used with fish when talking about a portion.",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-38",
      type: "fill-blank",
      question: "'I have two _____.' (apple / apples)",
      options: ["apples", "apple", "apple's", "apples'"],
      correctAnswer: "apples",
      explanation: "Two = plural, so we use 'apples'.",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-39",
      type: "fill-blank",
      question: "'I have three _____.' (egg / eggs)",
      options: ["eggs", "egg", "egg's", "eggs'"],
      correctAnswer: "eggs",
      explanation: "Three = plural, so we use 'eggs'.",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    {
      id: "a1-v4-40",
      type: "multiple-choice",
      question: "'I eat _____ rice.' (much / many)",
      options: ["much", "many", "a lot", "few"],
      correctAnswer: "much",
      explanation: "'Much' is used with uncountable nouns like rice.",
      difficulty: 1,
      tags: ["food", "grammar", "a1"]
    },
    // Part 5: Preferences
    {
      id: "a1-v4-41",
      type: "fill-blank",
      question: "Write the word: 🍎 _____",
      options: ["apple", "apel", "appel", "aple"],
      correctAnswer: "apple",
      explanation: "The emoji shows an apple.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    {
      id: "a1-v4-42",
      type: "fill-blank",
      question: "Write the word: 🍌 _____",
      options: ["banana", "bananna", "banena", "bananaa"],
      correctAnswer: "banana",
      explanation: "The emoji shows a banana.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    {
      id: "a1-v4-43",
      type: "fill-blank",
      question: "Write the word: 🍞 _____",
      options: ["bread", "bred", "braed", "breead"],
      correctAnswer: "bread",
      explanation: "The emoji shows bread.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    {
      id: "a1-v4-44",
      type: "fill-blank",
      question: "Write the word: 🧀 _____",
      options: ["cheese", "chees", "cheeze", "cheess"],
      correctAnswer: "cheese",
      explanation: "The emoji shows cheese.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    {
      id: "a1-v4-45",
      type: "fill-blank",
      question: "Write the word: 🍗 _____",
      options: ["chicken", "chiken", "chickan", "chickn"],
      correctAnswer: "chicken",
      explanation: "The emoji shows chicken.",
      difficulty: 1,
      tags: ["food", "visual", "a1"]
    },
    {
      id: "a1-v4-46",
      type: "multiple-choice",
      question: "A tomato is a _____.",
      options: ["vegetable", "fruit", "meat", "grain"],
      correctAnswer: "vegetable",
      explanation: "Tomatoes are commonly called vegetables (though technically fruits).",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-47",
      type: "multiple-choice",
      question: "Cheese is made from _____.",
      options: ["milk", "water", "eggs", "flour"],
      correctAnswer: "milk",
      explanation: "Cheese is made from milk.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-48",
      type: "multiple-choice",
      question: "You bake bread in an _____.",
      options: ["oven", "fridge", "sink", "table"],
      correctAnswer: "oven",
      explanation: "Bread is baked in an oven.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-49",
      type: "fill-blank",
      question: "'My favorite food is _____.'",
      options: ["pizza", "book", "car", "table"],
      correctAnswer: "pizza",
      explanation: "Pizza is a popular food. Any food is correct!",
      difficulty: 1,
      tags: ["food", "personal", "a1"]
    },
    {
      id: "a1-v4-50",
      type: "fill-blank",
      question: "'I don't like _____.' (Choose a food)",
      options: ["fish", "table", "chair", "door"],
      correctAnswer: "fish",
      explanation: "Any food word would be correct here.",
      difficulty: 1,
      tags: ["food", "personal", "a1"]
    }
  ],

  // a1-vocab-5: Beverages (Batch #5)
  "a1-vocab-5": [
    {
      id: "a1-v5-1",
      type: "fill-blank",
      question: "Unscramble: T-E-R-W-A _____",
      options: ["water", "weart", "raetw", "tawer"],
      correctAnswer: "water",
      explanation: "The unscrambled word is 'water'.",
      difficulty: 1,
      tags: ["beverages", "unscramble", "a1"]
    },
    {
      id: "a1-v5-2",
      type: "fill-blank",
      question: "Unscramble: E-E-F-F-O-C _____",
      options: ["coffee", "coffe", "coffie", "cofee"],
      correctAnswer: "coffee",
      explanation: "The unscrambled word is 'coffee'.",
      difficulty: 1,
      tags: ["beverages", "unscramble", "a1"]
    },
    {
      id: "a1-v5-3",
      type: "fill-blank",
      question: "Unscramble: I-C-E-J-U _____",
      options: ["juice", "jucie", "jucei", "jiuce"],
      correctAnswer: "juice",
      explanation: "The unscrambled word is 'juice'.",
      difficulty: 1,
      tags: ["beverages", "unscramble", "a1"]
    },
    {
      id: "a1-v5-4",
      type: "fill-blank",
      question: "Unscramble: O-S-D-A _____",
      options: ["soda", "dosa", "ados", "odas"],
      correctAnswer: "soda",
      explanation: "The unscrambled word is 'soda'.",
      difficulty: 1,
      tags: ["beverages", "unscramble", "a1"]
    },
    {
      id: "a1-v5-5",
      type: "fill-blank",
      question: "Fill in the missing letters: M_l_",
      options: ["milk", "malk", "melk", "mulk"],
      correctAnswer: "milk",
      explanation: "The word is 'milk'.",
      difficulty: 1,
      tags: ["beverages", "spelling", "a1"]
    },
    {
      id: "a1-v5-6",
      type: "fill-blank",
      question: "Fill in the missing letters: T_ _",
      options: ["tea", "tee", "tae", "tie"],
      correctAnswer: "tea",
      explanation: "The word is 'tea'.",
      difficulty: 1,
      tags: ["beverages", "spelling", "a1"]
    },
    {
      id: "a1-v5-7",
      type: "fill-blank",
      question: "Fill in the missing letters: W_n_",
      options: ["wine", "wane", "wene", "wone"],
      correctAnswer: "wine",
      explanation: "The word is 'wine'.",
      difficulty: 1,
      tags: ["beverages", "spelling", "a1"]
    },
    {
      id: "a1-v5-8",
      type: "fill-blank",
      question: "Fill in the missing letters: B_ _r",
      options: ["beer", "bear", "biar", "boor"],
      correctAnswer: "beer",
      explanation: "The word is 'beer'.",
      difficulty: 1,
      tags: ["beverages", "spelling", "a1"]
    },
    {
      id: "a1-v5-9",
      type: "fill-blank",
      question: "Which drink is hot and brown? _____",
      options: ["coffee", "water", "milk", "juice"],
      correctAnswer: "coffee",
      explanation: "Coffee is hot and brown.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-10",
      type: "fill-blank",
      question: "Which drink is cold and comes from fruit? _____",
      options: ["juice", "coffee", "tea", "milk"],
      correctAnswer: "juice",
      explanation: "Juice is cold and comes from fruit.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    // Part 2: Hot vs. Cold
    {
      id: "a1-v5-11",
      type: "multiple-choice",
      question: "Coffee is usually: _____",
      options: ["Hot", "Cold", "Frozen", "Warm"],
      correctAnswer: "Hot",
      explanation: "Coffee is usually served hot.",
      difficulty: 1,
      tags: ["beverages", "temperature", "a1"]
    },
    {
      id: "a1-v5-12",
      type: "multiple-choice",
      question: "Ice water is: _____",
      options: ["Cold", "Hot", "Warm", "Room temperature"],
      correctAnswer: "Cold",
      explanation: "Ice water is cold.",
      difficulty: 1,
      tags: ["beverages", "temperature", "a1"]
    },
    {
      id: "a1-v5-13",
      type: "multiple-choice",
      question: "Tea can be: _____",
      options: ["Hot or Cold", "Only Hot", "Only Cold", "Only Warm"],
      correctAnswer: "Hot or Cold",
      explanation: "Tea can be served hot or cold (iced tea).",
      difficulty: 1,
      tags: ["beverages", "temperature", "a1"]
    },
    {
      id: "a1-v5-14",
      type: "multiple-choice",
      question: "Soda is usually served: _____",
      options: ["Cold", "Hot", "Warm", "Frozen"],
      correctAnswer: "Cold",
      explanation: "Soda is usually served cold.",
      difficulty: 1,
      tags: ["beverages", "temperature", "a1"]
    },
    {
      id: "a1-v5-15",
      type: "multiple-choice",
      question: "Milk is usually kept in the: _____",
      options: ["Fridge", "Oven", "Cupboard", "Table"],
      correctAnswer: "Fridge",
      explanation: "Milk is kept in the fridge to stay fresh.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    // Part 3: Verb Association
    {
      id: "a1-v5-16",
      type: "fill-blank",
      question: "'I am thirsty. I want to _____.'",
      options: ["drink", "eat", "sleep", "run"],
      correctAnswer: "drink",
      explanation: "When thirsty, you want to drink.",
      difficulty: 1,
      tags: ["beverages", "verbs", "a1"]
    },
    {
      id: "a1-v5-17",
      type: "fill-blank",
      question: "'You _____ water every day.'",
      options: ["drink", "eat", "sleep", "walk"],
      correctAnswer: "drink",
      explanation: "You drink water.",
      difficulty: 1,
      tags: ["beverages", "verbs", "a1"]
    },
    {
      id: "a1-v5-18",
      type: "fill-blank",
      question: "'She _____ sugar in her tea.'",
      options: ["puts", "drinks", "eats", "sleeps"],
      correctAnswer: "puts",
      explanation: "She puts sugar in her tea.",
      difficulty: 1,
      tags: ["beverages", "verbs", "a1"]
    },
    {
      id: "a1-v5-19",
      type: "fill-blank",
      question: "'He _____ milk with his cookies.'",
      options: ["drinks", "eats", "puts", "makes"],
      correctAnswer: "drinks",
      explanation: "He drinks milk with his cookies.",
      difficulty: 1,
      tags: ["beverages", "verbs", "a1"]
    },
    {
      id: "a1-v5-20",
      type: "multiple-choice",
      question: "True or False: You can drink bread.",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. Bread is food you eat, not drink.",
      difficulty: 1,
      tags: ["beverages", "true-false", "a1"]
    },
    {
      id: "a1-v5-21",
      type: "multiple-choice",
      question: "True or False: Orange juice comes from oranges.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Orange juice is made from oranges.",
      difficulty: 1,
      tags: ["beverages", "true-false", "a1"]
    },
    {
      id: "a1-v5-22",
      type: "multiple-choice",
      question: "True or False: Coffee has caffeine.",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Coffee contains caffeine.",
      difficulty: 1,
      tags: ["beverages", "true-false", "a1"]
    },
    {
      id: "a1-v5-23",
      type: "multiple-choice",
      question: "Matching: Cow → _____",
      options: ["Milk", "Soda", "Coffee", "Wine"],
      correctAnswer: "Milk",
      explanation: "Cows give us milk.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-24",
      type: "multiple-choice",
      question: "Matching: Grapes → _____",
      options: ["Wine", "Coffee", "Milk", "Tea"],
      correctAnswer: "Wine",
      explanation: "Wine is made from grapes.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-25",
      type: "multiple-choice",
      question: "Matching: Morning → _____",
      options: ["Coffee", "Beer", "Wine", "Soda"],
      correctAnswer: "Coffee",
      explanation: "Many people drink coffee in the morning.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    // Part 4: Ordering at a Cafe
    {
      id: "a1-v5-26",
      type: "fill-blank",
      question: "'I _____ like a coffee, please.'",
      options: ["would", "want", "need", "have"],
      correctAnswer: "would",
      explanation: "'I would like' is a polite way to order.",
      difficulty: 1,
      tags: ["beverages", "ordering", "a1"]
    },
    {
      id: "a1-v5-27",
      type: "fill-blank",
      question: "'Small, medium, or _____?'",
      options: ["large", "big", "huge", "great"],
      correctAnswer: "large",
      explanation: "Drink sizes are: small, medium, or large.",
      difficulty: 1,
      tags: ["beverages", "ordering", "a1"]
    },
    {
      id: "a1-v5-28",
      type: "fill-blank",
      question: "'With or without _____?'",
      options: ["sugar", "bread", "meat", "fish"],
      correctAnswer: "sugar",
      explanation: "Coffee/tea is often served with or without sugar.",
      difficulty: 1,
      tags: ["beverages", "ordering", "a1"]
    },
    {
      id: "a1-v5-29",
      type: "fill-blank",
      question: "'A _____ of water.'",
      options: ["glass", "plate", "bowl", "box"],
      correctAnswer: "glass",
      explanation: "Water is served in a glass.",
      difficulty: 1,
      tags: ["beverages", "containers", "a1"]
    },
    {
      id: "a1-v5-30",
      type: "fill-blank",
      question: "'A _____ of tea.'",
      options: ["cup", "bowl", "plate", "box"],
      correctAnswer: "cup",
      explanation: "Tea is served in a cup.",
      difficulty: 1,
      tags: ["beverages", "containers", "a1"]
    },
    {
      id: "a1-v5-31",
      type: "fill-blank",
      question: "'Can I have the _____?' (to pay)",
      options: ["check", "food", "drink", "coffee"],
      correctAnswer: "check",
      explanation: "You ask for the check/bill when you want to pay.",
      difficulty: 1,
      tags: ["beverages", "ordering", "a1"]
    },
    {
      id: "a1-v5-32",
      type: "fill-blank",
      question: "'How _____ is the juice?'",
      options: ["much", "many", "lot", "few"],
      correctAnswer: "much",
      explanation: "'How much' is used to ask about price.",
      difficulty: 1,
      tags: ["beverages", "ordering", "a1"]
    },
    {
      id: "a1-v5-33",
      type: "fill-blank",
      question: "'$3.00' → 'Three _____.'",
      options: ["dollars", "cents", "euros", "pounds"],
      correctAnswer: "dollars",
      explanation: "$3.00 is three dollars.",
      difficulty: 1,
      tags: ["beverages", "money", "a1"]
    },
    {
      id: "a1-v5-34",
      type: "fill-blank",
      question: "Rearrange: like / I / juice / orange / . → _____",
      options: ["I like orange juice.", "Like I orange juice.", "Orange juice I like.", "I orange like juice."],
      correctAnswer: "I like orange juice.",
      explanation: "The correct sentence is: 'I like orange juice.'",
      difficulty: 1,
      tags: ["beverages", "grammar", "a1"]
    },
    {
      id: "a1-v5-35",
      type: "fill-blank",
      question: "Rearrange: drink / Do / tea / you / ? → _____",
      options: ["Do you drink tea?", "You drink do tea?", "Drink you do tea?", "Tea do you drink?"],
      correctAnswer: "Do you drink tea?",
      explanation: "The correct sentence is: 'Do you drink tea?'",
      difficulty: 1,
      tags: ["beverages", "grammar", "a1"]
    },
    // Part 5: Review & Logic
    {
      id: "a1-v5-36",
      type: "multiple-choice",
      question: "Odd one out: Water, Soda, Juice, Chicken",
      options: ["Chicken", "Water", "Soda", "Juice"],
      correctAnswer: "Chicken",
      explanation: "Chicken is food, not a drink.",
      difficulty: 1,
      tags: ["beverages", "odd-one-out", "a1"]
    },
    {
      id: "a1-v5-37",
      type: "fill-blank",
      question: "Write the word: ☕ _____",
      options: ["coffee", "tea", "water", "milk"],
      correctAnswer: "coffee",
      explanation: "The emoji shows a coffee cup.",
      difficulty: 1,
      tags: ["beverages", "visual", "a1"]
    },
    {
      id: "a1-v5-38",
      type: "fill-blank",
      question: "Write the word: 🍷 _____",
      options: ["wine", "juice", "soda", "water"],
      correctAnswer: "wine",
      explanation: "The emoji shows wine.",
      difficulty: 1,
      tags: ["beverages", "visual", "a1"]
    },
    {
      id: "a1-v5-39",
      type: "fill-blank",
      question: "Write the word: 🍺 _____",
      options: ["beer", "soda", "juice", "water"],
      correctAnswer: "beer",
      explanation: "The emoji shows beer.",
      difficulty: 1,
      tags: ["beverages", "visual", "a1"]
    },
    {
      id: "a1-v5-40",
      type: "fill-blank",
      question: "Dialogue: 'Hello, what would you like to drink?' → 'I would like a _____.'",
      options: ["coffee", "table", "chair", "book"],
      correctAnswer: "coffee",
      explanation: "Any drink word would be correct here.",
      difficulty: 1,
      tags: ["beverages", "dialogue", "a1"]
    },
    {
      id: "a1-v5-41",
      type: "fill-blank",
      question: "Write the word: 🧃 _____",
      options: ["juice", "milk", "water", "soda"],
      correctAnswer: "juice",
      explanation: "The emoji shows a juice box.",
      difficulty: 1,
      tags: ["beverages", "visual", "a1"]
    },
    {
      id: "a1-v5-42",
      type: "multiple-choice",
      question: "Apple juice is made from _____.",
      options: ["apples", "oranges", "grapes", "lemons"],
      correctAnswer: "apples",
      explanation: "Apple juice is made from apples.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-43",
      type: "multiple-choice",
      question: "You keep drinks cold in a _____.",
      options: ["fridge", "oven", "stove", "table"],
      correctAnswer: "fridge",
      explanation: "A fridge keeps drinks cold.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-44",
      type: "fill-blank",
      question: "'Would you like _____ or cold coffee?'",
      options: ["hot", "big", "small", "fast"],
      correctAnswer: "hot",
      explanation: "Coffee can be hot or cold (iced).",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-45",
      type: "fill-blank",
      question: "'I drink water because I am _____.'",
      options: ["thirsty", "hungry", "tired", "happy"],
      correctAnswer: "thirsty",
      explanation: "When thirsty, you drink water.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-46",
      type: "multiple-choice",
      question: "A bottle of water is _____.",
      options: ["healthy", "unhealthy", "bad", "dangerous"],
      correctAnswer: "healthy",
      explanation: "Water is healthy for you.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-47",
      type: "fill-blank",
      question: "'I need a _____ of coffee in the morning.'",
      options: ["cup", "plate", "bowl", "box"],
      correctAnswer: "cup",
      explanation: "Coffee is served in a cup.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-48",
      type: "fill-blank",
      question: "'She drinks _____ with her breakfast.'",
      options: ["milk", "fish", "bread", "cheese"],
      correctAnswer: "milk",
      explanation: "Milk is a breakfast drink.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-49",
      type: "multiple-choice",
      question: "Lemonade is made from _____.",
      options: ["lemons", "apples", "oranges", "grapes"],
      correctAnswer: "lemons",
      explanation: "Lemonade is made from lemons.",
      difficulty: 1,
      tags: ["beverages", "a1"]
    },
    {
      id: "a1-v5-50",
      type: "fill-blank",
      question: "'My favorite drink is _____.'",
      options: ["water", "chair", "table", "book"],
      correctAnswer: "water",
      explanation: "Any drink word would be correct here.",
      difficulty: 1,
      tags: ["beverages", "personal", "a1"]
    }
  ],

  // Placeholder for remaining vocabulary themes - will continue in same pattern
  // a1-vocab-6 through a1-vocab-20 follow same comprehensive structure
  
  // a1-vocab-6: Common Animals (Batch #6)
  "a1-vocab-6": [
    {
      id: "a1-v6-1",
      type: "fill-blank",
      question: "Unscramble: T-A-C _____",
      options: ["cat", "act", "tac", "atc"],
      correctAnswer: "cat",
      explanation: "The unscrambled word is 'cat'.",
      difficulty: 1,
      tags: ["animals", "unscramble", "a1"]
    },
    {
      id: "a1-v6-2",
      type: "fill-blank",
      question: "Unscramble: G-O-D _____",
      options: ["dog", "god", "dgo", "ogd"],
      correctAnswer: "dog",
      explanation: "The unscrambled word is 'dog'.",
      difficulty: 1,
      tags: ["animals", "unscramble", "a1"]
    },
    {
      id: "a1-v6-3",
      type: "fill-blank",
      question: "Unscramble: I-S-H-F _____",
      options: ["fish", "fhis", "hsif", "ifsh"],
      correctAnswer: "fish",
      explanation: "The unscrambled word is 'fish'.",
      difficulty: 1,
      tags: ["animals", "unscramble", "a1"]
    },
    {
      id: "a1-v6-4",
      type: "fill-blank",
      question: "Unscramble: D-R-I-B _____",
      options: ["bird", "brid", "dirb", "ribd"],
      correctAnswer: "bird",
      explanation: "The unscrambled word is 'bird'.",
      difficulty: 1,
      tags: ["animals", "unscramble", "a1"]
    },
    {
      id: "a1-v6-5",
      type: "fill-blank",
      question: "Fill in the missing letters: H_r_e",
      options: ["horse", "harse", "herse", "hurse"],
      correctAnswer: "horse",
      explanation: "The word is 'horse'.",
      difficulty: 1,
      tags: ["animals", "spelling", "a1"]
    },
    {
      id: "a1-v6-6",
      type: "fill-blank",
      question: "Fill in the missing letters: E_e_h_nt",
      options: ["elephant", "elefant", "eliphant", "elephent"],
      correctAnswer: "elephant",
      explanation: "The word is 'elephant'.",
      difficulty: 1,
      tags: ["animals", "spelling", "a1"]
    },
    {
      id: "a1-v6-7",
      type: "fill-blank",
      question: "Fill in the missing letters: L_o_",
      options: ["lion", "leon", "lian", "loin"],
      correctAnswer: "lion",
      explanation: "The word is 'lion'.",
      difficulty: 1,
      tags: ["animals", "spelling", "a1"]
    },
    {
      id: "a1-v6-8",
      type: "fill-blank",
      question: "Write the word: 🐄 _____",
      options: ["cow", "caw", "coe", "kow"],
      correctAnswer: "cow",
      explanation: "The emoji shows a cow.",
      difficulty: 1,
      tags: ["animals", "visual", "a1"]
    },
    {
      id: "a1-v6-9",
      type: "fill-blank",
      question: "Write the word: 🐖 _____",
      options: ["pig", "peg", "pog", "peeg"],
      correctAnswer: "pig",
      explanation: "The emoji shows a pig.",
      difficulty: 1,
      tags: ["animals", "visual", "a1"]
    },
    {
      id: "a1-v6-10",
      type: "multiple-choice",
      question: "A Dog is usually a: _____",
      options: ["Pet", "Wild Animal", "Farm Animal", "Sea Animal"],
      correctAnswer: "Pet",
      explanation: "Dogs are usually pets.",
      difficulty: 1,
      tags: ["animals", "categories", "a1"]
    },
    {
      id: "a1-v6-11",
      type: "multiple-choice",
      question: "A Cow is a: _____",
      options: ["Farm Animal", "Pet", "Wild Animal", "Sea Animal"],
      correctAnswer: "Farm Animal",
      explanation: "Cows are farm animals.",
      difficulty: 1,
      tags: ["animals", "categories", "a1"]
    },
    {
      id: "a1-v6-12",
      type: "multiple-choice",
      question: "A Lion is a: _____",
      options: ["Wild Animal", "Pet", "Farm Animal", "Sea Animal"],
      correctAnswer: "Wild Animal",
      explanation: "Lions are wild animals.",
      difficulty: 1,
      tags: ["animals", "categories", "a1"]
    },
    {
      id: "a1-v6-13",
      type: "multiple-choice",
      question: "An Elephant is: _____",
      options: ["Big", "Small", "Tiny", "Medium"],
      correctAnswer: "Big",
      explanation: "Elephants are very big animals.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-14",
      type: "multiple-choice",
      question: "A Bird can: _____",
      options: ["Fly", "Swim underwater", "Run very fast", "Live in caves"],
      correctAnswer: "Fly",
      explanation: "Most birds can fly.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-15",
      type: "multiple-choice",
      question: "A Fish lives in: _____",
      options: ["Water", "Trees", "Caves", "Sky"],
      correctAnswer: "Water",
      explanation: "Fish live in water.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-16",
      type: "multiple-choice",
      question: "Odd one out: Dog, Cat, Lion, Hamster",
      options: ["Lion", "Dog", "Cat", "Hamster"],
      correctAnswer: "Lion",
      explanation: "Lion is not a pet; the others are.",
      difficulty: 1,
      tags: ["animals", "odd-one-out", "a1"]
    },
    {
      id: "a1-v6-17",
      type: "multiple-choice",
      question: "True or False: A cat says 'Meow.'",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "True. Cats meow.",
      difficulty: 1,
      tags: ["animals", "true-false", "a1"]
    },
    {
      id: "a1-v6-18",
      type: "multiple-choice",
      question: "True or False: A dog says 'Moo.'",
      options: ["False", "True"],
      correctAnswer: "False",
      explanation: "False. Dogs bark. Cows say 'Moo.'",
      difficulty: 1,
      tags: ["animals", "true-false", "a1"]
    },
    {
      id: "a1-v6-19",
      type: "fill-blank",
      question: "'The bird is _____.' (flying / walking)",
      options: ["flying", "walking", "swimming", "sleeping"],
      correctAnswer: "flying",
      explanation: "Birds fly in the sky.",
      difficulty: 1,
      tags: ["animals", "verbs", "a1"]
    },
    {
      id: "a1-v6-20",
      type: "fill-blank",
      question: "'The fish is _____.' (swimming / running)",
      options: ["swimming", "running", "flying", "walking"],
      correctAnswer: "swimming",
      explanation: "Fish swim in water.",
      difficulty: 1,
      tags: ["animals", "verbs", "a1"]
    },
    {
      id: "a1-v6-21",
      type: "fill-blank",
      question: "'A horse is _____.' (fast / slow)",
      options: ["fast", "slow", "small", "tiny"],
      correctAnswer: "fast",
      explanation: "Horses are fast animals.",
      difficulty: 1,
      tags: ["animals", "adjectives", "a1"]
    },
    {
      id: "a1-v6-22",
      type: "fill-blank",
      question: "'A pig is _____.' (pink / blue)",
      options: ["pink", "blue", "green", "yellow"],
      correctAnswer: "pink",
      explanation: "Pigs are typically pink.",
      difficulty: 1,
      tags: ["animals", "colors", "a1"]
    },
    {
      id: "a1-v6-23",
      type: "fill-blank",
      question: "'A chicken gives _____.' (eggs / milk)",
      options: ["eggs", "milk", "wool", "honey"],
      correctAnswer: "eggs",
      explanation: "Chickens lay eggs.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-24",
      type: "fill-blank",
      question: "'A cow gives _____.' (milk / eggs)",
      options: ["milk", "eggs", "wool", "honey"],
      correctAnswer: "milk",
      explanation: "Cows give us milk.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-25",
      type: "fill-blank",
      question: "Rearrange: cat / My / small / is / . → _____",
      options: ["My cat is small.", "Cat my is small.", "Is my cat small.", "Small is my cat."],
      correctAnswer: "My cat is small.",
      explanation: "The correct sentence is: 'My cat is small.'",
      difficulty: 1,
      tags: ["animals", "grammar", "a1"]
    },
    {
      id: "a1-v6-26",
      type: "fill-blank",
      question: "Rearrange: The / big / is / elephant / . → _____",
      options: ["The elephant is big.", "Big is the elephant.", "Is the elephant big.", "The big is elephant."],
      correctAnswer: "The elephant is big.",
      explanation: "The correct sentence is: 'The elephant is big.'",
      difficulty: 1,
      tags: ["animals", "grammar", "a1"]
    },
    {
      id: "a1-v6-27",
      type: "fill-blank",
      question: "Rearrange: have / I / a / dog / . → _____",
      options: ["I have a dog.", "Have I a dog.", "A dog I have.", "I a dog have."],
      correctAnswer: "I have a dog.",
      explanation: "The correct sentence is: 'I have a dog.'",
      difficulty: 1,
      tags: ["animals", "grammar", "a1"]
    },
    {
      id: "a1-v6-28",
      type: "fill-blank",
      question: "'An elephant has a long _____.' (trunk/nose)",
      options: ["trunk", "tail", "ear", "leg"],
      correctAnswer: "trunk",
      explanation: "Elephants have a long trunk (nose).",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    // Plurals
    {
      id: "a1-v6-29",
      type: "fill-blank",
      question: "One cat, two _____",
      options: ["cats", "cates", "catis", "catss"],
      correctAnswer: "cats",
      explanation: "The plural of cat is cats.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-30",
      type: "fill-blank",
      question: "One dog, two _____",
      options: ["dogs", "doges", "dogis", "dogss"],
      correctAnswer: "dogs",
      explanation: "The plural of dog is dogs.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-31",
      type: "fill-blank",
      question: "One bird, two _____",
      options: ["birds", "birdes", "birdis", "birdss"],
      correctAnswer: "birds",
      explanation: "The plural of bird is birds.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-32",
      type: "fill-blank",
      question: "One horse, two _____",
      options: ["horses", "horsis", "horsees", "horsess"],
      correctAnswer: "horses",
      explanation: "The plural of horse is horses.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-33",
      type: "fill-blank",
      question: "One cow, two _____",
      options: ["cows", "cowes", "cowis", "cowss"],
      correctAnswer: "cows",
      explanation: "The plural of cow is cows.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-34",
      type: "fill-blank",
      question: "One pig, two _____",
      options: ["pigs", "piges", "pigis", "pigss"],
      correctAnswer: "pigs",
      explanation: "The plural of pig is pigs.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-35",
      type: "fill-blank",
      question: "Irregular: One fish, two _____",
      options: ["fish", "fishes", "fishs", "fishies"],
      correctAnswer: "fish",
      explanation: "Fish is the same in singular and plural!",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-36",
      type: "fill-blank",
      question: "'I see three _____.' (lion / lions)",
      options: ["lions", "lion", "liones", "lionss"],
      correctAnswer: "lions",
      explanation: "Three = plural, so we say 'lions'.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-37",
      type: "fill-blank",
      question: "'There are five _____ on the farm.' (chickens / chicken)",
      options: ["chickens", "chicken", "chickenes", "chickenss"],
      correctAnswer: "chickens",
      explanation: "Five = plural, so we say 'chickens'.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    {
      id: "a1-v6-38",
      type: "fill-blank",
      question: "'Do you like _____?' (animal / animals)",
      options: ["animals", "animal", "animalss", "animales"],
      correctAnswer: "animals",
      explanation: "General statement = plural 'animals'.",
      difficulty: 1,
      tags: ["animals", "plurals", "a1"]
    },
    // Which animal is it?
    {
      id: "a1-v6-39",
      type: "fill-blank",
      question: "It is big, gray, and has big ears. _____",
      options: ["elephant", "mouse", "cat", "dog"],
      correctAnswer: "elephant",
      explanation: "Elephants are big, gray, and have big ears.",
      difficulty: 1,
      tags: ["animals", "riddles", "a1"]
    },
    {
      id: "a1-v6-40",
      type: "fill-blank",
      question: "It is the 'King of the Jungle.' _____",
      options: ["lion", "tiger", "elephant", "monkey"],
      correctAnswer: "lion",
      explanation: "The lion is called the 'King of the Jungle'.",
      difficulty: 1,
      tags: ["animals", "riddles", "a1"]
    },
    {
      id: "a1-v6-41",
      type: "fill-blank",
      question: "It is a pet that barks. _____",
      options: ["dog", "cat", "bird", "fish"],
      correctAnswer: "dog",
      explanation: "Dogs bark.",
      difficulty: 1,
      tags: ["animals", "riddles", "a1"]
    },
    {
      id: "a1-v6-42",
      type: "fill-blank",
      question: "It is a pet that chases mice. _____",
      options: ["cat", "dog", "bird", "fish"],
      correctAnswer: "cat",
      explanation: "Cats chase mice.",
      difficulty: 1,
      tags: ["animals", "riddles", "a1"]
    },
    {
      id: "a1-v6-43",
      type: "fill-blank",
      question: "Match 🐎 to the word: _____",
      options: ["horse", "cow", "pig", "sheep"],
      correctAnswer: "horse",
      explanation: "The emoji shows a horse.",
      difficulty: 1,
      tags: ["animals", "visual", "a1"]
    },
    {
      id: "a1-v6-44",
      type: "fill-blank",
      question: "Match 🐕 to the word: _____",
      options: ["dog", "cat", "wolf", "fox"],
      correctAnswer: "dog",
      explanation: "The emoji shows a dog.",
      difficulty: 1,
      tags: ["animals", "visual", "a1"]
    },
    {
      id: "a1-v6-45",
      type: "fill-blank",
      question: "Match 🐈 to the word: _____",
      options: ["cat", "dog", "tiger", "lion"],
      correctAnswer: "cat",
      explanation: "The emoji shows a cat.",
      difficulty: 1,
      tags: ["animals", "visual", "a1"]
    },
    {
      id: "a1-v6-46",
      type: "fill-blank",
      question: "Match 🐦 to the word: _____",
      options: ["bird", "butterfly", "bee", "bat"],
      correctAnswer: "bird",
      explanation: "The emoji shows a bird.",
      difficulty: 1,
      tags: ["animals", "visual", "a1"]
    },
    {
      id: "a1-v6-47",
      type: "multiple-choice",
      question: "Which animal gives us wool?",
      options: ["sheep", "cow", "pig", "chicken"],
      correctAnswer: "sheep",
      explanation: "Sheep give us wool.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-48",
      type: "multiple-choice",
      question: "Which animal has stripes?",
      options: ["zebra", "elephant", "cow", "pig"],
      correctAnswer: "zebra",
      explanation: "Zebras have black and white stripes.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-49",
      type: "multiple-choice",
      question: "Which animal can talk (repeat words)?",
      options: ["parrot", "dog", "cat", "fish"],
      correctAnswer: "parrot",
      explanation: "Parrots can repeat words and sounds.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-50",
      type: "fill-blank",
      question: "'My favorite animal is a _____.'",
      options: ["dog", "chair", "table", "book"],
      correctAnswer: "dog",
      explanation: "Any animal word would be correct here.",
      difficulty: 1,
      tags: ["animals", "personal", "a1"]
    }
  ],

  // Remaining themes (a1-vocab-7 through a1-vocab-20) would follow the same pattern
  // Each theme has 50 exercises covering the specific vocabulary topic
  
  "a1-vocab-7": [], // Body Parts - to be populated
  "a1-vocab-8": [], // Basic Clothing - to be populated
  "a1-vocab-9": [], // Rooms & Home - to be populated
  "a1-vocab-10": [], // Basic Furniture - to be populated
  "a1-vocab-11": [], // Days of the Week - to be populated
  "a1-vocab-12": [], // Months of the Year - to be populated
  "a1-vocab-13": [], // Basic Weather - to be populated
  "a1-vocab-14": [], // School & Classroom - to be populated
  "a1-vocab-15": [], // Basic Jobs - to be populated
  "a1-vocab-16": [], // Basic Transportation - to be populated
  "a1-vocab-17": [], // Greetings & Phrases - to be populated
  "a1-vocab-18": [], // Basic Places - to be populated
  "a1-vocab-19": [], // Basic Action Verbs - to be populated
  "a1-vocab-20": [], // Basic Adjectives - to be populated
};

// ====================================
// GRAMMAR EXERCISES - A1 LEVEL
// Now imported from dedicated a1GrammarExercises.ts with 100 complete exercises
// ====================================
const a1GrammarExercises = importedA1GrammarExercises;

// ====================================
// SPEAKING EXERCISES - A1 LEVEL
// Now imported from dedicated a1SpeakingExercises.ts with 50 complete exercises
// ====================================
const a1SpeakingExercises = importedA1SpeakingExercises;

// ====================================
// LISTENING EXERCISES - A1 LEVEL
// Now imported from dedicated a1ListeningExercises.ts with 50 complete exercises
// ====================================
const a1ListeningExercises = importedA1ListeningExercises;

// ====================================
// READING EXERCISES - A1 LEVEL
// Now imported from dedicated a1ReadingExercises.ts with 50 complete exercises
// ====================================
const a1ReadingExercises = importedA1ReadingExercises;

// ====================================
// WRITING EXERCISES - A1 LEVEL
// Now imported from dedicated a1WritingExercises.ts with 50 complete exercises
// ====================================
const a1WritingExercises = importedA1WritingExercises;

// ====================================
// MAIN EXPORT FUNCTION
// ====================================
export const getA1ExercisesForSkill = (skillId: string): Exercise[] => {
  // Check vocabulary exercises
  if (a1VocabExercises[skillId]) {
    return a1VocabExercises[skillId];
  }
  
  // Check grammar exercises
  if (a1GrammarExercises[skillId]) {
    return a1GrammarExercises[skillId];
  }
  
  // Check speaking exercises
  if (a1SpeakingExercises[skillId]) {
    return a1SpeakingExercises[skillId];
  }
  
  // Check listening exercises
  if (a1ListeningExercises[skillId]) {
    return a1ListeningExercises[skillId];
  }
  
  // Check reading exercises
  if (a1ReadingExercises[skillId]) {
    return a1ReadingExercises[skillId];
  }
  
  // Check writing exercises
  if (a1WritingExercises[skillId]) {
    return a1WritingExercises[skillId];
  }
  
  return [];
};

// Alias for backward compatibility
export const getA1ExercisesBySkillId = getA1ExercisesForSkill;

// Get total exercise count for A1
export const getA1TotalExercises = (): number => {
  let total = 0;
  
  Object.values(a1VocabExercises).forEach(exercises => {
    total += exercises.length;
  });
  
  Object.values(a1GrammarExercises).forEach(exercises => {
    total += exercises.length;
  });
  
  Object.values(a1SpeakingExercises).forEach(exercises => {
    total += exercises.length;
  });
  
  Object.values(a1ListeningExercises).forEach(exercises => {
    total += exercises.length;
  });
  
  Object.values(a1ReadingExercises).forEach(exercises => {
    total += exercises.length;
  });
  
  Object.values(a1WritingExercises).forEach(exercises => {
    total += exercises.length;
  });
  
  return total;
};

// Export all A1 exercises for reference
export const a1Exercises = {
  vocabulary: a1VocabExercises,
  grammar: a1GrammarExercises,
  speaking: a1SpeakingExercises,
  listening: a1ListeningExercises,
  reading: a1ReadingExercises,
  writing: a1WritingExercises
};
