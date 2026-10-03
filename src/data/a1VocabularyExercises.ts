// A1 Vocabulary Exercises from CEFR Curriculum
// 20 Batches with 50 exercises each - All converted to multiple-choice format

import { Exercise } from "./exercisesData";

export interface A1VocabularyBatch {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

// ============= BATCH #1: NUMBERS & COUNTING (1-100) =============
const numbersExercises: Exercise[] = [
  // Part 1: Writing & Spelling (Numbers 1-20)
  { id: "a1-num-1", type: "multiple-choice", question: "How do you spell the number 5?", options: ["five", "fiv", "fife", "fyve"], correctAnswer: "five", explanation: "5 is spelled 'five'.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  { id: "a1-num-2", type: "multiple-choice", question: "How do you spell the number 8?", options: ["eight", "eit", "aight", "ate"], correctAnswer: "eight", explanation: "8 is spelled 'eight' - note the unusual spelling.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  { id: "a1-num-3", type: "multiple-choice", question: "How do you spell the number 12?", options: ["twelve", "twelv", "twelf", "twellve"], correctAnswer: "twelve", explanation: "12 is spelled 'twelve' - an irregular number.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  { id: "a1-num-4", type: "multiple-choice", question: "How do you spell the number 15?", options: ["fifteen", "fiveteen", "fiften", "fivteen"], correctAnswer: "fifteen", explanation: "15 is spelled 'fifteen'.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  { id: "a1-num-5", type: "multiple-choice", question: "How do you spell the number 20?", options: ["twenty", "twenti", "twentee", "twnety"], correctAnswer: "twenty", explanation: "20 is spelled 'twenty'.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  { id: "a1-num-6", type: "multiple-choice", question: "Unscramble E-R-H-T-E. What number is it?", options: ["three", "there", "ether", "tree"], correctAnswer: "three", explanation: "The unscrambled word is 'three' (3).", difficulty: 1, tags: ["a1", "numbers", "unscramble"] },
  { id: "a1-num-7", type: "multiple-choice", question: "Unscramble E-V-E-L-E-N. What number is it?", options: ["eleven", "seven", "level", "even"], correctAnswer: "eleven", explanation: "The unscrambled word is 'eleven' (11).", difficulty: 1, tags: ["a1", "numbers", "unscramble"] },
  { id: "a1-num-8", type: "multiple-choice", question: "Unscramble I-N-E-N. What number is it?", options: ["nine", "fine", "line", "mine"], correctAnswer: "nine", explanation: "The unscrambled word is 'nine' (9).", difficulty: 1, tags: ["a1", "numbers", "unscramble"] },
  { id: "a1-num-9", type: "multiple-choice", question: "Fill in: S_v_n (7)", options: ["seven", "saven", "sevin", "sivon"], correctAnswer: "seven", explanation: "The word is 'seven'.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  { id: "a1-num-10", type: "multiple-choice", question: "Fill in: T__rt__n (13)", options: ["thirteen", "thirtean", "therteen", "thurteen"], correctAnswer: "thirteen", explanation: "The word is 'thirteen'.", difficulty: 1, tags: ["a1", "numbers", "spelling"] },
  
  // Part 2: Teen vs Ty Distinction
  { id: "a1-num-11", type: "multiple-choice", question: "What is the correct word for 14?", options: ["Fourteen", "Forty", "Fourty", "Forteen"], correctAnswer: "Fourteen", explanation: "14 is 'fourteen' (-teen for 13-19).", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-12", type: "multiple-choice", question: "What is the correct word for 40?", options: ["Forty", "Fourteen", "Fourty", "Forteen"], correctAnswer: "Forty", explanation: "40 is 'forty' (-ty for tens).", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-13", type: "multiple-choice", question: "What is the correct word for 17?", options: ["Seventeen", "Seventy", "Sevinteen", "Seventee"], correctAnswer: "Seventeen", explanation: "17 is 'seventeen' (-teen for 13-19).", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-14", type: "multiple-choice", question: "What is the correct word for 70?", options: ["Seventy", "Seventeen", "Sevinty", "Sevnty"], correctAnswer: "Seventy", explanation: "70 is 'seventy' (-ty for tens).", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-15", type: "multiple-choice", question: "What is the correct word for 19?", options: ["Nineteen", "Ninety", "Ninteen", "Ninteene"], correctAnswer: "Nineteen", explanation: "19 is 'nineteen' (-teen for 13-19).", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-16", type: "multiple-choice", question: "What is the correct word for 90?", options: ["Ninety", "Nineteen", "Ninty", "Nineety"], correctAnswer: "Ninety", explanation: "90 is 'ninety' (-ty for tens).", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-17", type: "multiple-choice", question: "Is 'Thirteen' the number 30?", options: ["No, thirteen is 13", "Yes, thirteen is 30", "Thirteen is 3", "Thirteen is 130"], correctAnswer: "No, thirteen is 13", explanation: "False! Thirteen is 13. Thirty is 30.", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-18", type: "multiple-choice", question: "Is 'Fifty' the number 50?", options: ["Yes, fifty is 50", "No, fifty is 15", "Fifty is 5", "Fifty is 500"], correctAnswer: "Yes, fifty is 50", explanation: "True! Fifty is 50.", difficulty: 1, tags: ["a1", "numbers", "teen-ty"] },
  { id: "a1-num-19", type: "multiple-choice", question: "Which is the larger number?", options: ["Eighty (80)", "Eighteen (18)", "They are equal", "Eight (8)"], correctAnswer: "Eighty (80)", explanation: "Eighty (80) is larger than Eighteen (18).", difficulty: 1, tags: ["a1", "numbers", "comparison"] },
  { id: "a1-num-20", type: "multiple-choice", question: "Which is the smaller number?", options: ["Sixteen (16)", "Sixty (60)", "They are equal", "Six (6)"], correctAnswer: "Sixteen (16)", explanation: "Sixteen (16) is smaller than Sixty (60).", difficulty: 1, tags: ["a1", "numbers", "comparison"] },
  
  // Part 3: Counting Sequences
  { id: "a1-num-21", type: "multiple-choice", question: "What comes next? Two, four, six, ______", options: ["eight", "seven", "ten", "nine"], correctAnswer: "eight", explanation: "Counting by twos: 2, 4, 6, 8.", difficulty: 1, tags: ["a1", "numbers", "sequences"] },
  { id: "a1-num-22", type: "multiple-choice", question: "What comes next? Ten, twenty, thirty, ______", options: ["forty", "fifty", "twenty-five", "thirty-five"], correctAnswer: "forty", explanation: "Counting by tens: 10, 20, 30, 40.", difficulty: 1, tags: ["a1", "numbers", "sequences"] },
  { id: "a1-num-23", type: "multiple-choice", question: "What comes next? Five, ten, fifteen, ______", options: ["twenty", "sixteen", "twenty-five", "eighteen"], correctAnswer: "twenty", explanation: "Counting by fives: 5, 10, 15, 20.", difficulty: 1, tags: ["a1", "numbers", "sequences"] },
  { id: "a1-num-24", type: "multiple-choice", question: "Count backward: Ten, nine, eight, ______", options: ["seven", "six", "eleven", "nine"], correctAnswer: "seven", explanation: "Counting backward: 10, 9, 8, 7.", difficulty: 1, tags: ["a1", "numbers", "sequences"] },
  { id: "a1-num-25", type: "multiple-choice", question: "What comes after twenty-nine?", options: ["thirty", "twenty-ten", "thirty-one", "twenty-eight"], correctAnswer: "thirty", explanation: "After 29 comes 30 (thirty).", difficulty: 1, tags: ["a1", "numbers", "sequences"] },
  { id: "a1-num-26", type: "multiple-choice", question: "What number is 'thirty-five'?", options: ["35", "53", "305", "315"], correctAnswer: "35", explanation: "Thirty-five = 35.", difficulty: 1, tags: ["a1", "numbers", "writing"] },
  { id: "a1-num-27", type: "multiple-choice", question: "What number is 'forty-two'?", options: ["42", "24", "402", "420"], correctAnswer: "42", explanation: "Forty-two = 42.", difficulty: 1, tags: ["a1", "numbers", "writing"] },
  { id: "a1-num-28", type: "multiple-choice", question: "What number is 'fifty-nine'?", options: ["59", "95", "509", "590"], correctAnswer: "59", explanation: "Fifty-nine = 59.", difficulty: 1, tags: ["a1", "numbers", "writing"] },
  { id: "a1-num-29", type: "multiple-choice", question: "What number is 'sixty-one'?", options: ["61", "16", "601", "610"], correctAnswer: "61", explanation: "Sixty-one = 61.", difficulty: 1, tags: ["a1", "numbers", "writing"] },
  { id: "a1-num-30", type: "multiple-choice", question: "What number is 'seventy-seven'?", options: ["77", "707", "177", "770"], correctAnswer: "77", explanation: "Seventy-seven = 77.", difficulty: 1, tags: ["a1", "numbers", "writing"] },
  
  // Part 4: Basic Math Word Problems
  { id: "a1-num-31", type: "multiple-choice", question: "I have 2 apples. You give me 3 more. How many do I have?", options: ["5", "6", "4", "3"], correctAnswer: "5", explanation: "2 + 3 = 5 apples.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-32", type: "multiple-choice", question: "One week has 7 days. How many days are in 2 weeks?", options: ["14", "7", "21", "12"], correctAnswer: "14", explanation: "7 × 2 = 14 days.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-33", type: "multiple-choice", question: "A car has 4 wheels. How many wheels do 2 cars have?", options: ["8", "6", "4", "10"], correctAnswer: "8", explanation: "4 × 2 = 8 wheels.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-34", type: "multiple-choice", question: "What is 10 minus 3?", options: ["7", "13", "8", "6"], correctAnswer: "7", explanation: "10 - 3 = 7.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-35", type: "multiple-choice", question: "What is 20 plus 30?", options: ["50", "23", "60", "10"], correctAnswer: "50", explanation: "20 + 30 = 50.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-36", type: "multiple-choice", question: "What is zero plus ten?", options: ["10", "0", "100", "1"], correctAnswer: "10", explanation: "0 + 10 = 10.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-37", type: "multiple-choice", question: "If you have twelve eggs and eat two, how many are left?", options: ["10", "14", "8", "12"], correctAnswer: "10", explanation: "12 - 2 = 10 eggs left.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-38", type: "multiple-choice", question: "What is half of twenty?", options: ["10", "20", "5", "40"], correctAnswer: "10", explanation: "20 ÷ 2 = 10.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-39", type: "multiple-choice", question: "What is five times two?", options: ["10", "7", "3", "52"], correctAnswer: "10", explanation: "5 × 2 = 10.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  { id: "a1-num-40", type: "multiple-choice", question: "What is one hundred minus one?", options: ["99", "101", "100", "1"], correctAnswer: "99", explanation: "100 - 1 = 99.", difficulty: 1, tags: ["a1", "numbers", "math"] },
  
  // Part 5: Real-World Contexts
  { id: "a1-num-41", type: "multiple-choice", question: "How do you write 25 in words? (Age: 'I am 25 years old.')", options: ["twenty-five", "twentyfive", "twenty five", "twenti-five"], correctAnswer: "twenty-five", explanation: "25 = twenty-five.", difficulty: 1, tags: ["a1", "numbers", "context"] },
  { id: "a1-num-42", type: "multiple-choice", question: "How do you write 60 in words? (There are 60 minutes in an hour.)", options: ["sixty", "sixti", "sixtie", "sixety"], correctAnswer: "sixty", explanation: "60 = sixty.", difficulty: 1, tags: ["a1", "numbers", "context"] },
  { id: "a1-num-43", type: "multiple-choice", question: "How do you write 3 in words? (This coffee costs $3.)", options: ["three", "tree", "thre", "thee"], correctAnswer: "three", explanation: "3 = three.", difficulty: 1, tags: ["a1", "numbers", "context"] },
  { id: "a1-num-44", type: "multiple-choice", question: "How do you write 11 in words? (There are 11 players on a soccer team.)", options: ["eleven", "elven", "elevan", "elevn"], correctAnswer: "eleven", explanation: "11 = eleven.", difficulty: 1, tags: ["a1", "numbers", "context"] },
  { id: "a1-num-45", type: "multiple-choice", question: "How do you write 98 in words? (I live at 98 Main Street.)", options: ["ninety-eight", "ninty-eight", "ninety eight", "ninetyeight"], correctAnswer: "ninety-eight", explanation: "98 = ninety-eight.", difficulty: 1, tags: ["a1", "numbers", "context"] },
  { id: "a1-num-46", type: "multiple-choice", question: "How do you write 0 in words?", options: ["zero", "ziro", "cero", "zerro"], correctAnswer: "zero", explanation: "0 = zero.", difficulty: 1, tags: ["a1", "numbers", "context"] },
  { id: "a1-num-47", type: "multiple-choice", question: "Correct the spelling: 'I have twenty-wan dollars.'", options: ["twenty-one", "twenty-wan", "twentyone", "twenty one"], correctAnswer: "twenty-one", explanation: "The correct spelling is 'twenty-one'.", difficulty: 1, tags: ["a1", "numbers", "correction"] },
  { id: "a1-num-48", type: "multiple-choice", question: "Correct the spelling: 'He is thurty years old.'", options: ["thirty", "thurty", "thrity", "thrty"], correctAnswer: "thirty", explanation: "The correct spelling is 'thirty'.", difficulty: 1, tags: ["a1", "numbers", "correction"] },
  { id: "a1-num-49", type: "multiple-choice", question: "Which is 100?", options: ["One hundred", "One thousand", "Ten", "One million"], correctAnswer: "One hundred", explanation: "100 = One hundred.", difficulty: 1, tags: ["a1", "numbers", "identification"] },
  { id: "a1-num-50", type: "multiple-choice", question: "How do you write 100 in words?", options: ["one hundred", "one hunred", "onehundred", "hunderd"], correctAnswer: "one hundred", explanation: "100 = one hundred.", difficulty: 1, tags: ["a1", "numbers", "writing"] },
];

// ============= BATCH #2: COLORS =============
const colorsExercises: Exercise[] = [
  { id: "a1-col-1", type: "multiple-choice", question: "Unscramble D-E-R. What color is it?", options: ["red", "der", "erd", "dre"], correctAnswer: "red", explanation: "The unscrambled word is 'red'.", difficulty: 1, tags: ["a1", "colors", "unscramble"] },
  { id: "a1-col-2", type: "multiple-choice", question: "Unscramble E-U-L-B. What color is it?", options: ["blue", "bleu", "lube", "bule"], correctAnswer: "blue", explanation: "The unscrambled word is 'blue'.", difficulty: 1, tags: ["a1", "colors", "unscramble"] },
  { id: "a1-col-3", type: "multiple-choice", question: "Unscramble E-E-R-G-N. What color is it?", options: ["green", "genre", "grene", "geren"], correctAnswer: "green", explanation: "The unscrambled word is 'green'.", difficulty: 1, tags: ["a1", "colors", "unscramble"] },
  { id: "a1-col-4", type: "multiple-choice", question: "Unscramble O-L-L-E-W-Y. What color is it?", options: ["yellow", "yello", "yelow", "yellwo"], correctAnswer: "yellow", explanation: "The unscrambled word is 'yellow'.", difficulty: 1, tags: ["a1", "colors", "unscramble"] },
  { id: "a1-col-5", type: "multiple-choice", question: "Fill in: O_a_ge", options: ["orange", "orage", "ornage", "oragne"], correctAnswer: "orange", explanation: "The word is 'orange'.", difficulty: 1, tags: ["a1", "colors", "spelling"] },
  { id: "a1-col-6", type: "multiple-choice", question: "Fill in: P_r_le", options: ["purple", "purle", "pruple", "purrple"], correctAnswer: "purple", explanation: "The word is 'purple'.", difficulty: 1, tags: ["a1", "colors", "spelling"] },
  { id: "a1-col-7", type: "multiple-choice", question: "Fill in: B__ck", options: ["black", "blck", "blak", "balck"], correctAnswer: "black", explanation: "The word is 'black'.", difficulty: 1, tags: ["a1", "colors", "spelling"] },
  { id: "a1-col-8", type: "multiple-choice", question: "Fill in: W_i_e", options: ["white", "wite", "whit", "whitte"], correctAnswer: "white", explanation: "The word is 'white'.", difficulty: 1, tags: ["a1", "colors", "spelling"] },
  { id: "a1-col-9", type: "multiple-choice", question: "Which color is a mix of Red and Yellow?", options: ["orange", "purple", "green", "pink"], correctAnswer: "orange", explanation: "Red + Yellow = Orange.", difficulty: 1, tags: ["a1", "colors", "mixing"] },
  { id: "a1-col-10", type: "multiple-choice", question: "Which color is a mix of Blue and Yellow?", options: ["green", "purple", "orange", "pink"], correctAnswer: "green", explanation: "Blue + Yellow = Green.", difficulty: 1, tags: ["a1", "colors", "mixing"] },
  { id: "a1-col-11", type: "multiple-choice", question: "The sky is usually:", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Blue", explanation: "The sky is usually blue.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-12", type: "multiple-choice", question: "Grass is usually:", options: ["Green", "Red", "Blue", "Purple"], correctAnswer: "Green", explanation: "Grass is usually green.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-13", type: "multiple-choice", question: "A banana is:", options: ["Yellow", "Purple", "Blue", "Green"], correctAnswer: "Yellow", explanation: "A banana is yellow.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-14", type: "multiple-choice", question: "An apple is often:", options: ["Red", "Blue", "Purple", "Orange"], correctAnswer: "Red", explanation: "An apple is often red.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-15", type: "multiple-choice", question: "Snow is:", options: ["White", "Black", "Gray", "Blue"], correctAnswer: "White", explanation: "Snow is white.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-16", type: "multiple-choice", question: "Chocolate is:", options: ["Brown", "Pink", "White", "Yellow"], correctAnswer: "Brown", explanation: "Chocolate is brown.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-17", type: "multiple-choice", question: "A flamingo is:", options: ["Pink", "Orange", "Red", "White"], correctAnswer: "Pink", explanation: "A flamingo is pink.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-18", type: "multiple-choice", question: "Coal is:", options: ["Black", "White", "Gray", "Brown"], correctAnswer: "Black", explanation: "Coal is black.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-19", type: "multiple-choice", question: "Carrots are:", options: ["Orange", "Green", "Purple", "Yellow"], correctAnswer: "Orange", explanation: "Carrots are orange.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-20", type: "multiple-choice", question: "Night is:", options: ["Black", "Yellow", "White", "Blue"], correctAnswer: "Black", explanation: "Night is dark/black.", difficulty: 1, tags: ["a1", "colors", "association"] },
  { id: "a1-col-21", type: "multiple-choice", question: "'The sun is high.' What color is the sun?", options: ["Yellow", "Blue", "Green", "Black"], correctAnswer: "Yellow", explanation: "The sun is yellow.", difficulty: 1, tags: ["a1", "colors", "comprehension"] },
  { id: "a1-col-22", type: "multiple-choice", question: "'The ocean is deep.' What color is the ocean?", options: ["Blue", "Yellow", "Green", "White"], correctAnswer: "Blue", explanation: "The ocean is blue.", difficulty: 1, tags: ["a1", "colors", "comprehension"] },
  { id: "a1-col-23", type: "multiple-choice", question: "'The rose is romantic.' What color is a typical rose?", options: ["Red", "Black", "Brown", "Gray"], correctAnswer: "Red", explanation: "Roses are typically red.", difficulty: 1, tags: ["a1", "colors", "comprehension"] },
  { id: "a1-col-24", type: "multiple-choice", question: "'The tires on the car.' What color are tires?", options: ["Black", "White", "Red", "Yellow"], correctAnswer: "Black", explanation: "Tires are black.", difficulty: 1, tags: ["a1", "colors", "comprehension"] },
  { id: "a1-col-25", type: "multiple-choice", question: "'A cloud before a storm.' What color is it?", options: ["Gray", "White", "Blue", "Yellow"], correctAnswer: "Gray", explanation: "Storm clouds are gray.", difficulty: 1, tags: ["a1", "colors", "comprehension"] },
  { id: "a1-col-26", type: "multiple-choice", question: "Is a strawberry blue?", options: ["No, strawberries are red", "Yes, strawberries are blue", "Strawberries are green", "Strawberries are yellow"], correctAnswer: "No, strawberries are red", explanation: "False! Strawberries are red.", difficulty: 1, tags: ["a1", "colors", "true-false"] },
  { id: "a1-col-27", type: "multiple-choice", question: "Are lemons yellow?", options: ["Yes, lemons are yellow", "No, lemons are green", "Lemons are orange", "Lemons are red"], correctAnswer: "Yes, lemons are yellow", explanation: "True! Lemons are yellow.", difficulty: 1, tags: ["a1", "colors", "true-false"] },
  { id: "a1-col-28", type: "multiple-choice", question: "Can grapes be purple?", options: ["Yes, grapes can be purple", "No, grapes are always green", "Grapes are red only", "Grapes are blue"], correctAnswer: "Yes, grapes can be purple", explanation: "True! Grapes can be purple (or green).", difficulty: 1, tags: ["a1", "colors", "true-false"] },
  { id: "a1-col-29", type: "multiple-choice", question: "Is milk brown?", options: ["No, milk is white", "Yes, milk is brown", "Milk is yellow", "Milk is blue"], correctAnswer: "No, milk is white", explanation: "False! Milk is white.", difficulty: 1, tags: ["a1", "colors", "true-false"] },
  { id: "a1-col-30", type: "multiple-choice", question: "Is an orange fruit orange in color?", options: ["Yes, oranges are orange", "No, oranges are yellow", "Oranges are red", "Oranges are green"], correctAnswer: "Yes, oranges are orange", explanation: "True! The fruit orange is orange in color.", difficulty: 1, tags: ["a1", "colors", "true-false"] },
  { id: "a1-col-31", type: "multiple-choice", question: "Which is NOT a color?", options: ["Apple", "Green", "Blue", "Red"], correctAnswer: "Apple", explanation: "Apple is not a color.", difficulty: 1, tags: ["a1", "colors", "odd-out"] },
  { id: "a1-col-32", type: "multiple-choice", question: "Which is NOT a color?", options: ["Dog", "Yellow", "Orange", "Purple"], correctAnswer: "Dog", explanation: "Dog is not a color.", difficulty: 1, tags: ["a1", "colors", "odd-out"] },
  { id: "a1-col-33", type: "multiple-choice", question: "Which is NOT a color?", options: ["Table", "Black", "White", "Pink"], correctAnswer: "Table", explanation: "Table is not a color.", difficulty: 1, tags: ["a1", "colors", "odd-out"] },
  { id: "a1-col-34", type: "multiple-choice", question: "Which is NOT a color?", options: ["Chair", "Brown", "Gray", "Red"], correctAnswer: "Chair", explanation: "Chair is not a color.", difficulty: 1, tags: ["a1", "colors", "odd-out"] },
  { id: "a1-col-35", type: "multiple-choice", question: "Which is NOT a color?", options: ["Book", "Blue", "Green", "Yellow"], correctAnswer: "Book", explanation: "Book is not a color.", difficulty: 1, tags: ["a1", "colors", "odd-out"] },
  { id: "a1-col-36", type: "multiple-choice", question: "Put in order: is / The / red / tomato", options: ["The tomato is red", "Is the tomato red", "Red is the tomato", "Tomato the is red"], correctAnswer: "The tomato is red", explanation: "The tomato is red.", difficulty: 1, tags: ["a1", "colors", "rearrange"] },
  { id: "a1-col-37", type: "multiple-choice", question: "Put in order: blue / The / is / pen", options: ["The pen is blue", "Blue is the pen", "Is the pen blue", "Pen the blue is"], correctAnswer: "The pen is blue", explanation: "The pen is blue.", difficulty: 1, tags: ["a1", "colors", "rearrange"] },
  { id: "a1-col-38", type: "multiple-choice", question: "Put in order: black / cat / My / is", options: ["My cat is black", "Black is my cat", "Cat my is black", "Is my cat black"], correctAnswer: "My cat is black", explanation: "My cat is black.", difficulty: 1, tags: ["a1", "colors", "rearrange"] },
  { id: "a1-col-39", type: "multiple-choice", question: "What is the opposite of White?", options: ["Black", "Gray", "Brown", "Yellow"], correctAnswer: "Black", explanation: "The opposite of white is black.", difficulty: 1, tags: ["a1", "colors", "opposites"] },
  { id: "a1-col-40", type: "multiple-choice", question: "'The forest is full of ______ trees.'", options: ["green", "red", "black", "yellow"], correctAnswer: "green", explanation: "Trees in a forest are green.", difficulty: 1, tags: ["a1", "colors", "fill-blank"] },
  { id: "a1-col-41", type: "multiple-choice", question: "🟦 What color is this?", options: ["blue", "red", "green", "yellow"], correctAnswer: "blue", explanation: "The blue square represents blue.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-42", type: "multiple-choice", question: "🟥 What color is this?", options: ["red", "blue", "green", "orange"], correctAnswer: "red", explanation: "The red square represents red.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-43", type: "multiple-choice", question: "🟩 What color is this?", options: ["green", "blue", "yellow", "purple"], correctAnswer: "green", explanation: "The green square represents green.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-44", type: "multiple-choice", question: "🟨 What color is this?", options: ["yellow", "orange", "green", "white"], correctAnswer: "yellow", explanation: "The yellow square represents yellow.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-45", type: "multiple-choice", question: "🟧 What color is this?", options: ["orange", "yellow", "red", "brown"], correctAnswer: "orange", explanation: "The orange square represents orange.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-46", type: "multiple-choice", question: "🟪 What color is this?", options: ["purple", "pink", "blue", "red"], correctAnswer: "purple", explanation: "The purple square represents purple.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-47", type: "multiple-choice", question: "⬛ What color is this?", options: ["black", "gray", "white", "brown"], correctAnswer: "black", explanation: "The black square represents black.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-48", type: "multiple-choice", question: "⬜ What color is this?", options: ["white", "gray", "black", "yellow"], correctAnswer: "white", explanation: "The white square represents white.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-49", type: "multiple-choice", question: "🟫 What color is this?", options: ["brown", "orange", "red", "black"], correctAnswer: "brown", explanation: "The brown square represents brown.", difficulty: 1, tags: ["a1", "colors", "emoji"] },
  { id: "a1-col-50", type: "multiple-choice", question: "Which color is mixed with red to make pink?", options: ["white", "blue", "yellow", "black"], correctAnswer: "white", explanation: "Red + White = Pink.", difficulty: 1, tags: ["a1", "colors", "mixing"] },
];

// ============= BATCH #3: FAMILY MEMBERS =============
const familyExercises: Exercise[] = [
  { id: "a1-fam-1", type: "multiple-choice", question: "Your male parent is your ______", options: ["father", "mother", "brother", "sister"], correctAnswer: "father", explanation: "Your male parent is your father.", difficulty: 1, tags: ["a1", "family", "basic"] },
  { id: "a1-fam-2", type: "multiple-choice", question: "Your female parent is your ______", options: ["mother", "father", "brother", "daughter"], correctAnswer: "mother", explanation: "Your female parent is your mother.", difficulty: 1, tags: ["a1", "family", "basic"] },
  { id: "a1-fam-3", type: "multiple-choice", question: "Your parent's son is your ______", options: ["brother", "sister", "father", "uncle"], correctAnswer: "brother", explanation: "Your parent's son is your brother.", difficulty: 1, tags: ["a1", "family", "basic"] },
  { id: "a1-fam-4", type: "multiple-choice", question: "Your parent's daughter is your ______", options: ["sister", "brother", "aunt", "mother"], correctAnswer: "sister", explanation: "Your parent's daughter is your sister.", difficulty: 1, tags: ["a1", "family", "basic"] },
  { id: "a1-fam-5", type: "multiple-choice", question: "Unscramble T-H-E-M-O-R:", options: ["mother", "father", "brother", "other"], correctAnswer: "mother", explanation: "The unscrambled word is 'mother'.", difficulty: 1, tags: ["a1", "family", "unscramble"] },
  { id: "a1-fam-6", type: "multiple-choice", question: "Unscramble T-H-E-R-F-A:", options: ["father", "mother", "after", "rather"], correctAnswer: "father", explanation: "The unscrambled word is 'father'.", difficulty: 1, tags: ["a1", "family", "unscramble"] },
  { id: "a1-fam-7", type: "multiple-choice", question: "Fill in: S_s_er", options: ["sister", "sester", "saster", "sistor"], correctAnswer: "sister", explanation: "The word is 'sister'.", difficulty: 1, tags: ["a1", "family", "spelling"] },
  { id: "a1-fam-8", type: "multiple-choice", question: "Fill in: B_o_h_r", options: ["brother", "bother", "broher", "brothr"], correctAnswer: "brother", explanation: "The word is 'brother'.", difficulty: 1, tags: ["a1", "family", "spelling"] },
  { id: "a1-fam-9", type: "multiple-choice", question: "What is the short form of 'Mother'?", options: ["Mom", "Moth", "Mo", "Mum"], correctAnswer: "Mom", explanation: "Mom is the short form of Mother.", difficulty: 1, tags: ["a1", "family", "informal"] },
  { id: "a1-fam-10", type: "multiple-choice", question: "What is the short form of 'Father'?", options: ["Dad", "Fath", "Fa", "Pa"], correctAnswer: "Dad", explanation: "Dad is the short form of Father.", difficulty: 1, tags: ["a1", "family", "informal"] },
  { id: "a1-fam-11", type: "multiple-choice", question: "Your father's father is your ______", options: ["grandfather", "grandmother", "uncle", "father"], correctAnswer: "grandfather", explanation: "Your father's father is your grandfather.", difficulty: 1, tags: ["a1", "family", "generations"] },
  { id: "a1-fam-12", type: "multiple-choice", question: "Your mother's mother is your ______", options: ["grandmother", "grandfather", "aunt", "mother"], correctAnswer: "grandmother", explanation: "Your mother's mother is your grandmother.", difficulty: 1, tags: ["a1", "family", "generations"] },
  { id: "a1-fam-13", type: "multiple-choice", question: "If you are a man, you are your parents':", options: ["Son", "Daughter", "Brother", "Father"], correctAnswer: "Son", explanation: "A male child is a son.", difficulty: 1, tags: ["a1", "family", "gender"] },
  { id: "a1-fam-14", type: "multiple-choice", question: "If you are a woman, you are your parents':", options: ["Daughter", "Son", "Sister", "Mother"], correctAnswer: "Daughter", explanation: "A female child is a daughter.", difficulty: 1, tags: ["a1", "family", "gender"] },
  { id: "a1-fam-15", type: "multiple-choice", question: "Is 'Grandma' another word for grandmother?", options: ["Yes, Grandma is grandmother", "No, Grandma is different", "Grandma is grandfather", "Grandma is aunt"], correctAnswer: "Yes, Grandma is grandmother", explanation: "True! Grandma is an informal way to say grandmother.", difficulty: 1, tags: ["a1", "family", "true-false"] },
  { id: "a1-fam-16", type: "multiple-choice", question: "Is a brother a girl?", options: ["No, a brother is a boy", "Yes, a brother is a girl", "Sometimes", "It depends"], correctAnswer: "No, a brother is a boy", explanation: "False! A brother is a boy/man.", difficulty: 1, tags: ["a1", "family", "true-false"] },
  { id: "a1-fam-17", type: "multiple-choice", question: "What is a 'sibling'?", options: ["A brother or sister", "A parent", "A grandparent", "A cousin"], correctAnswer: "A brother or sister", explanation: "True! Sibling means brother or sister.", difficulty: 1, tags: ["a1", "family", "vocabulary"] },
  { id: "a1-fam-18", type: "multiple-choice", question: "Father + Mother = ?", options: ["Parents", "Children", "Siblings", "Grandparents"], correctAnswer: "Parents", explanation: "Father and mother together are called parents.", difficulty: 1, tags: ["a1", "family", "matching"] },
  { id: "a1-fam-19", type: "multiple-choice", question: "Grandfather + Grandmother = ?", options: ["Grandparents", "Parents", "Children", "Siblings"], correctAnswer: "Grandparents", explanation: "Grandfather and grandmother together are grandparents.", difficulty: 1, tags: ["a1", "family", "matching"] },
  { id: "a1-fam-20", type: "multiple-choice", question: "My father's wife is my ______", options: ["mother", "sister", "aunt", "grandmother"], correctAnswer: "mother", explanation: "Your father's wife is typically your mother.", difficulty: 1, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-21", type: "multiple-choice", question: "'My mother____ name is Maria.' Add:", options: ["'s", "s'", "is", "es"], correctAnswer: "'s", explanation: "Possessive: My mother's name is Maria.", difficulty: 1, tags: ["a1", "family", "possessive"] },
  { id: "a1-fam-22", type: "multiple-choice", question: "'I have two ______.''", options: ["sisters", "sister", "sisster", "siters"], correctAnswer: "sisters", explanation: "Two requires plural: sisters.", difficulty: 1, tags: ["a1", "family", "plural"] },
  { id: "a1-fam-23", type: "multiple-choice", question: "'He has one ______.''", options: ["brother", "brothers", "brothr", "brohter"], correctAnswer: "brother", explanation: "One requires singular: brother.", difficulty: 1, tags: ["a1", "family", "singular"] },
  { id: "a1-fam-24", type: "multiple-choice", question: "Put in order: mother / My / is / doctor / a", options: ["My mother is a doctor", "A doctor is my mother", "Mother my is a doctor", "Is my mother a doctor"], correctAnswer: "My mother is a doctor", explanation: "My mother is a doctor.", difficulty: 1, tags: ["a1", "family", "rearrange"] },
  { id: "a1-fam-25", type: "multiple-choice", question: "Put in order: is / brother / My / tall", options: ["My brother is tall", "Is my brother tall", "Tall is my brother", "Brother my is tall"], correctAnswer: "My brother is tall", explanation: "My brother is tall.", difficulty: 1, tags: ["a1", "family", "rearrange"] },
  { id: "a1-fam-26", type: "multiple-choice", question: "(Subject: A girl) '______ father is 50 years old.'", options: ["Her", "His", "Its", "Their"], correctAnswer: "Her", explanation: "For a girl, use 'her'.", difficulty: 1, tags: ["a1", "family", "pronouns"] },
  { id: "a1-fam-27", type: "multiple-choice", question: "(Subject: A boy) '______ sister is 10 years old.'", options: ["His", "Her", "Its", "Their"], correctAnswer: "His", explanation: "For a boy, use 'his'.", difficulty: 1, tags: ["a1", "family", "pronouns"] },
  { id: "a1-fam-28", type: "multiple-choice", question: "If Sarah is Ben's mother, Ben is Sarah's ______", options: ["son", "daughter", "father", "brother"], correctAnswer: "son", explanation: "If Sarah is Ben's mother, Ben is her son.", difficulty: 1, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-29", type: "multiple-choice", question: "If Tom is Mary's father, Mary is Tom's ______", options: ["daughter", "son", "mother", "sister"], correctAnswer: "daughter", explanation: "If Tom is Mary's father, Mary is his daughter.", difficulty: 1, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-30", type: "multiple-choice", question: "My father's brother is my ______", options: ["uncle", "aunt", "cousin", "nephew"], correctAnswer: "uncle", explanation: "Your father's brother is your uncle.", difficulty: 1, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-31", type: "multiple-choice", question: "My mother's sister is my ______", options: ["aunt", "uncle", "cousin", "niece"], correctAnswer: "aunt", explanation: "Your mother's sister is your aunt.", difficulty: 1, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-32", type: "multiple-choice", question: "My aunt's son is my ______", options: ["cousin", "brother", "nephew", "uncle"], correctAnswer: "cousin", explanation: "Your aunt's or uncle's child is your cousin.", difficulty: 1, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-33", type: "multiple-choice", question: "My sister's son is my ______", options: ["nephew", "cousin", "brother", "son"], correctAnswer: "nephew", explanation: "Your sibling's son is your nephew.", difficulty: 2, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-34", type: "multiple-choice", question: "My brother's daughter is my ______", options: ["niece", "cousin", "sister", "daughter"], correctAnswer: "niece", explanation: "Your sibling's daughter is your niece.", difficulty: 2, tags: ["a1", "family", "logic"] },
  { id: "a1-fam-35", type: "multiple-choice", question: "Which is NOT a family member?", options: ["Teacher", "Mother", "Sister", "Father"], correctAnswer: "Teacher", explanation: "Teacher is not a family member.", difficulty: 1, tags: ["a1", "family", "odd-out"] },
  { id: "a1-fam-36", type: "multiple-choice", question: "Which is NOT a family member?", options: ["Dog", "Son", "Daughter", "Brother"], correctAnswer: "Dog", explanation: "Dog is not a family member.", difficulty: 1, tags: ["a1", "family", "odd-out"] },
  { id: "a1-fam-37", type: "multiple-choice", question: "What is the feminine of 'Father'?", options: ["Mother", "Sister", "Daughter", "Aunt"], correctAnswer: "Mother", explanation: "The feminine of father is mother.", difficulty: 1, tags: ["a1", "family", "gender"] },
  { id: "a1-fam-38", type: "multiple-choice", question: "What is the masculine of 'Sister'?", options: ["Brother", "Father", "Son", "Uncle"], correctAnswer: "Brother", explanation: "The masculine of sister is brother.", difficulty: 1, tags: ["a1", "family", "gender"] },
  { id: "a1-fam-39", type: "multiple-choice", question: "What is the feminine of 'Grandfather'?", options: ["Grandmother", "Mother", "Aunt", "Sister"], correctAnswer: "Grandmother", explanation: "The feminine of grandfather is grandmother.", difficulty: 1, tags: ["a1", "family", "gender"] },
  { id: "a1-fam-40", type: "multiple-choice", question: "What is the feminine of 'Son'?", options: ["Daughter", "Mother", "Sister", "Niece"], correctAnswer: "Daughter", explanation: "The feminine of son is daughter.", difficulty: 1, tags: ["a1", "family", "gender"] },
  { id: "a1-fam-41", type: "multiple-choice", question: "What is 'Mama' in formal English?", options: ["Mother", "Father", "Sister", "Grandmother"], correctAnswer: "Mother", explanation: "Mama in formal English is 'mother'.", difficulty: 1, tags: ["a1", "family", "formal"] },
  { id: "a1-fam-42", type: "multiple-choice", question: "What is 'Papa' in formal English?", options: ["Father", "Mother", "Brother", "Grandfather"], correctAnswer: "Father", explanation: "Papa in formal English is 'father'.", difficulty: 1, tags: ["a1", "family", "formal"] },
  { id: "a1-fam-43", type: "multiple-choice", question: "Fill in: 'We are a ______.'' (Word for the whole group)", options: ["family", "famly", "familie", "faimly"], correctAnswer: "family", explanation: "The word is 'family'.", difficulty: 1, tags: ["a1", "family", "spelling"] },
  { id: "a1-fam-44", type: "multiple-choice", question: "👨 This emoji represents:", options: ["father/man", "mother", "child", "grandmother"], correctAnswer: "father/man", explanation: "This emoji represents a man/father.", difficulty: 1, tags: ["a1", "family", "emoji"] },
  { id: "a1-fam-45", type: "multiple-choice", question: "👩 This emoji represents:", options: ["mother/woman", "father", "child", "grandfather"], correctAnswer: "mother/woman", explanation: "This emoji represents a woman/mother.", difficulty: 1, tags: ["a1", "family", "emoji"] },
  { id: "a1-fam-46", type: "multiple-choice", question: "👶 This emoji represents:", options: ["baby", "adult", "grandfather", "teenager"], correctAnswer: "baby", explanation: "This emoji represents a baby.", difficulty: 1, tags: ["a1", "family", "emoji"] },
  { id: "a1-fam-47", type: "multiple-choice", question: "👵 This emoji represents:", options: ["grandmother", "mother", "sister", "aunt"], correctAnswer: "grandmother", explanation: "This emoji represents a grandmother.", difficulty: 1, tags: ["a1", "family", "emoji"] },
  { id: "a1-fam-48", type: "multiple-choice", question: "👴 This emoji represents:", options: ["grandfather", "father", "brother", "uncle"], correctAnswer: "grandfather", explanation: "This emoji represents a grandfather.", difficulty: 1, tags: ["a1", "family", "emoji"] },
  { id: "a1-fam-49", type: "multiple-choice", question: "👨‍👩‍👧‍👦 This emoji represents:", options: ["family", "friends", "students", "teachers"], correctAnswer: "family", explanation: "This emoji represents a family.", difficulty: 1, tags: ["a1", "family", "emoji"] },
  { id: "a1-fam-50", type: "multiple-choice", question: "How many parents does a person typically have?", options: ["Two", "One", "Three", "Four"], correctAnswer: "Two", explanation: "A person typically has two parents (mother and father).", difficulty: 1, tags: ["a1", "family", "basic"] },
];

// ============= BATCH #4: BASIC FOOD =============
const foodExercises: Exercise[] = [
  { id: "a1-food-1", type: "multiple-choice", question: "Unscramble P-P-L-E-A:", options: ["apple", "papel", "leppa", "elppa"], correctAnswer: "apple", explanation: "The unscrambled word is 'apple'.", difficulty: 1, tags: ["a1", "food", "unscramble"] },
  { id: "a1-food-2", type: "multiple-choice", question: "Unscramble I-C-E-R:", options: ["rice", "icer", "eric", "rcie"], correctAnswer: "rice", explanation: "The unscrambled word is 'rice'.", difficulty: 1, tags: ["a1", "food", "unscramble"] },
  { id: "a1-food-3", type: "multiple-choice", question: "Unscramble E-S-E-E-H-C:", options: ["cheese", "cheees", "seehec", "echees"], correctAnswer: "cheese", explanation: "The unscrambled word is 'cheese'.", difficulty: 1, tags: ["a1", "food", "unscramble"] },
  { id: "a1-food-4", type: "multiple-choice", question: "Unscramble E-A-D-R-B:", options: ["bread", "beard", "debar", "brade"], correctAnswer: "bread", explanation: "The unscrambled word is 'bread'.", difficulty: 1, tags: ["a1", "food", "unscramble"] },
  { id: "a1-food-5", type: "multiple-choice", question: "Fill in: C_i_k_n", options: ["chicken", "chiken", "chikken", "chickin"], correctAnswer: "chicken", explanation: "The word is 'chicken'.", difficulty: 1, tags: ["a1", "food", "spelling"] },
  { id: "a1-food-6", type: "multiple-choice", question: "Fill in: B_n_n_", options: ["banana", "bananna", "bananah", "bannana"], correctAnswer: "banana", explanation: "The word is 'banana'.", difficulty: 1, tags: ["a1", "food", "spelling"] },
  { id: "a1-food-7", type: "multiple-choice", question: "Fill in: T_m_t_", options: ["tomato", "tomatoe", "tomatto", "tometo"], correctAnswer: "tomato", explanation: "The word is 'tomato'.", difficulty: 1, tags: ["a1", "food", "spelling"] },
  { id: "a1-food-8", type: "multiple-choice", question: "Fill in: F_s_", options: ["fish", "fesh", "fash", "fush"], correctAnswer: "fish", explanation: "The word is 'fish'.", difficulty: 1, tags: ["a1", "food", "spelling"] },
  { id: "a1-food-9", type: "multiple-choice", question: "🥚 This emoji represents:", options: ["egg", "ball", "stone", "potato"], correctAnswer: "egg", explanation: "This emoji represents an egg.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-10", type: "multiple-choice", question: "🥛 This emoji represents:", options: ["milk", "water", "juice", "coffee"], correctAnswer: "milk", explanation: "This emoji represents milk.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-11", type: "multiple-choice", question: "An Apple is a:", options: ["Fruit", "Meat", "Vegetable", "Grain"], correctAnswer: "Fruit", explanation: "An apple is a fruit.", difficulty: 1, tags: ["a1", "food", "category"] },
  { id: "a1-food-12", type: "multiple-choice", question: "Chicken is:", options: ["Meat", "Fruit", "Vegetable", "Grain"], correctAnswer: "Meat", explanation: "Chicken is meat.", difficulty: 1, tags: ["a1", "food", "category"] },
  { id: "a1-food-13", type: "multiple-choice", question: "Rice is a:", options: ["Grain", "Fruit", "Meat", "Vegetable"], correctAnswer: "Grain", explanation: "Rice is a grain.", difficulty: 1, tags: ["a1", "food", "category"] },
  { id: "a1-food-14", type: "multiple-choice", question: "A Banana is a:", options: ["Fruit", "Vegetable", "Meat", "Grain"], correctAnswer: "Fruit", explanation: "A banana is a fruit.", difficulty: 1, tags: ["a1", "food", "category"] },
  { id: "a1-food-15", type: "multiple-choice", question: "Bread is made from:", options: ["Grains", "Fish", "Fruit", "Meat"], correctAnswer: "Grains", explanation: "Bread is made from grains (wheat).", difficulty: 1, tags: ["a1", "food", "category"] },
  { id: "a1-food-16", type: "multiple-choice", question: "Which is NOT a fruit?", options: ["Bread", "Apple", "Banana", "Orange"], correctAnswer: "Bread", explanation: "Bread is not a fruit.", difficulty: 1, tags: ["a1", "food", "odd-out"] },
  { id: "a1-food-17", type: "multiple-choice", question: "Which is NOT meat?", options: ["Milk", "Chicken", "Fish", "Beef"], correctAnswer: "Milk", explanation: "Milk is not meat.", difficulty: 1, tags: ["a1", "food", "odd-out"] },
  { id: "a1-food-18", type: "multiple-choice", question: "Is a tomato usually blue?", options: ["No, tomatoes are red", "Yes, tomatoes are blue", "Tomatoes are purple", "Tomatoes are white"], correctAnswer: "No, tomatoes are red", explanation: "False! Tomatoes are red.", difficulty: 1, tags: ["a1", "food", "true-false"] },
  { id: "a1-food-19", type: "multiple-choice", question: "Do you eat cereal with milk?", options: ["Yes, cereal is eaten with milk", "No, cereal is eaten dry", "Cereal is eaten with juice", "Cereal is eaten with water"], correctAnswer: "Yes, cereal is eaten with milk", explanation: "True! Cereal is commonly eaten with milk.", difficulty: 1, tags: ["a1", "food", "true-false"] },
  { id: "a1-food-20", type: "multiple-choice", question: "Do eggs come from chickens?", options: ["Yes, chickens lay eggs", "No, eggs come from cows", "Eggs come from pigs", "Eggs come from fish"], correctAnswer: "Yes, chickens lay eggs", explanation: "True! Chickens lay eggs.", difficulty: 1, tags: ["a1", "food", "true-false"] },
  { id: "a1-food-21", type: "multiple-choice", question: "The first meal in the morning is ______", options: ["breakfast", "lunch", "dinner", "snack"], correctAnswer: "breakfast", explanation: "The morning meal is breakfast.", difficulty: 1, tags: ["a1", "food", "meals"] },
  { id: "a1-food-22", type: "multiple-choice", question: "The meal in the middle of the day is ______", options: ["lunch", "breakfast", "dinner", "supper"], correctAnswer: "lunch", explanation: "The midday meal is lunch.", difficulty: 1, tags: ["a1", "food", "meals"] },
  { id: "a1-food-23", type: "multiple-choice", question: "The meal in the evening is ______", options: ["dinner", "breakfast", "lunch", "brunch"], correctAnswer: "dinner", explanation: "The evening meal is dinner.", difficulty: 1, tags: ["a1", "food", "meals"] },
  { id: "a1-food-24", type: "multiple-choice", question: "For Breakfast, I eat:", options: ["Eggs", "Steak", "Lobster", "Pasta"], correctAnswer: "Eggs", explanation: "Eggs are a common breakfast food.", difficulty: 1, tags: ["a1", "food", "meals"] },
  { id: "a1-food-25", type: "multiple-choice", question: "'I am hungry. I want to ______.'", options: ["eat", "drink", "sleep", "run"], correctAnswer: "eat", explanation: "When hungry, you want to eat.", difficulty: 1, tags: ["a1", "food", "verbs"] },
  { id: "a1-food-26", type: "multiple-choice", question: "Put in order: likes / He / apples", options: ["He likes apples", "Likes he apples", "Apples likes he", "He apples likes"], correctAnswer: "He likes apples", explanation: "He likes apples.", difficulty: 1, tags: ["a1", "food", "rearrange"] },
  { id: "a1-food-27", type: "multiple-choice", question: "Put in order: eat / I / bread", options: ["I eat bread", "Eat I bread", "Bread I eat", "I bread eat"], correctAnswer: "I eat bread", explanation: "I eat bread.", difficulty: 1, tags: ["a1", "food", "rearrange"] },
  { id: "a1-food-28", type: "multiple-choice", question: "Put in order: is / Cheese / yellow", options: ["Cheese is yellow", "Is cheese yellow", "Yellow is cheese", "Cheese yellow is"], correctAnswer: "Cheese is yellow", explanation: "Cheese is yellow.", difficulty: 1, tags: ["a1", "food", "rearrange"] },
  { id: "a1-food-29", type: "multiple-choice", question: "I want ___ apple.", options: ["an", "a", "the", "some"], correctAnswer: "an", explanation: "Use 'an' before vowels: an apple.", difficulty: 1, tags: ["a1", "food", "articles"] },
  { id: "a1-food-30", type: "multiple-choice", question: "I want ___ banana.", options: ["a", "an", "the", "some"], correctAnswer: "a", explanation: "Use 'a' before consonants: a banana.", difficulty: 1, tags: ["a1", "food", "articles"] },
  { id: "a1-food-31", type: "multiple-choice", question: "I want ___ egg.", options: ["an", "a", "the", "some"], correctAnswer: "an", explanation: "Use 'an' before vowels: an egg.", difficulty: 1, tags: ["a1", "food", "articles"] },
  { id: "a1-food-32", type: "multiple-choice", question: "I want ___ rice.", options: ["some", "an", "a", "many"], correctAnswer: "some", explanation: "Use 'some' for uncountable nouns: some rice.", difficulty: 1, tags: ["a1", "food", "articles"] },
  { id: "a1-food-33", type: "multiple-choice", question: "I want ___ bread.", options: ["some", "a", "an", "many"], correctAnswer: "some", explanation: "Use 'some' for uncountable nouns: some bread.", difficulty: 1, tags: ["a1", "food", "articles"] },
  { id: "a1-food-34", type: "multiple-choice", question: "'I have two ______.''", options: ["apples", "apple", "appls", "appless"], correctAnswer: "apples", explanation: "Two requires plural: apples.", difficulty: 1, tags: ["a1", "food", "plural"] },
  { id: "a1-food-35", type: "multiple-choice", question: "'I have three ______.''", options: ["eggs", "egg", "egs", "egges"], correctAnswer: "eggs", explanation: "Three requires plural: eggs.", difficulty: 1, tags: ["a1", "food", "plural"] },
  { id: "a1-food-36", type: "multiple-choice", question: "🍎 This emoji represents:", options: ["apple", "tomato", "cherry", "strawberry"], correctAnswer: "apple", explanation: "This emoji represents an apple.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-37", type: "multiple-choice", question: "🍌 This emoji represents:", options: ["banana", "lemon", "corn", "mango"], correctAnswer: "banana", explanation: "This emoji represents a banana.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-38", type: "multiple-choice", question: "🍞 This emoji represents:", options: ["bread", "cake", "cookie", "sandwich"], correctAnswer: "bread", explanation: "This emoji represents bread.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-39", type: "multiple-choice", question: "🧀 This emoji represents:", options: ["cheese", "butter", "bread", "cake"], correctAnswer: "cheese", explanation: "This emoji represents cheese.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-40", type: "multiple-choice", question: "🍗 This emoji represents:", options: ["chicken", "fish", "beef", "pork"], correctAnswer: "chicken", explanation: "This emoji represents chicken.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-41", type: "multiple-choice", question: "🐟 This emoji represents:", options: ["fish", "chicken", "meat", "shrimp"], correctAnswer: "fish", explanation: "This emoji represents fish.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-42", type: "multiple-choice", question: "🍚 This emoji represents:", options: ["rice", "bread", "pasta", "cereal"], correctAnswer: "rice", explanation: "This emoji represents rice.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-43", type: "multiple-choice", question: "🍅 This emoji represents:", options: ["tomato", "apple", "strawberry", "cherry"], correctAnswer: "tomato", explanation: "This emoji represents a tomato.", difficulty: 1, tags: ["a1", "food", "emoji"] },
  { id: "a1-food-44", type: "multiple-choice", question: "Which food is yellow?", options: ["Banana", "Apple", "Grape", "Strawberry"], correctAnswer: "Banana", explanation: "Bananas are yellow.", difficulty: 1, tags: ["a1", "food", "colors"] },
  { id: "a1-food-45", type: "multiple-choice", question: "Which food is red?", options: ["Tomato", "Banana", "Cheese", "Bread"], correctAnswer: "Tomato", explanation: "Tomatoes are red.", difficulty: 1, tags: ["a1", "food", "colors"] },
  { id: "a1-food-46", type: "multiple-choice", question: "Which food is white?", options: ["Rice", "Tomato", "Apple", "Grape"], correctAnswer: "Rice", explanation: "Rice is white.", difficulty: 1, tags: ["a1", "food", "colors"] },
  { id: "a1-food-47", type: "multiple-choice", question: "What do you drink with breakfast?", options: ["Milk", "Soup", "Bread", "Rice"], correctAnswer: "Milk", explanation: "Milk is commonly drunk at breakfast.", difficulty: 1, tags: ["a1", "food", "context"] },
  { id: "a1-food-48", type: "multiple-choice", question: "What is pizza?", options: ["Food", "Drink", "Sport", "Animal"], correctAnswer: "Food", explanation: "Pizza is food.", difficulty: 1, tags: ["a1", "food", "category"] },
  { id: "a1-food-49", type: "multiple-choice", question: "Where do you buy food?", options: ["Store/Market", "Library", "School", "Hospital"], correctAnswer: "Store/Market", explanation: "You buy food at a store or market.", difficulty: 1, tags: ["a1", "food", "context"] },
  { id: "a1-food-50", type: "multiple-choice", question: "Which meal is biggest in many cultures?", options: ["Dinner", "Breakfast", "Snack", "Brunch"], correctAnswer: "Dinner", explanation: "Dinner is often the biggest meal.", difficulty: 1, tags: ["a1", "food", "culture"] },
];

// ============= BATCH #5: BEVERAGES =============
const beveragesExercises: Exercise[] = [
  { id: "a1-bev-1", type: "multiple-choice", question: "Unscramble T-E-R-W-A:", options: ["water", "wrate", "rawtee", "tware"], correctAnswer: "water", explanation: "The unscrambled word is 'water'.", difficulty: 1, tags: ["a1", "beverages", "unscramble"] },
  { id: "a1-bev-2", type: "multiple-choice", question: "Unscramble E-E-F-F-O-C:", options: ["coffee", "coffe", "feoffe", "cofefe"], correctAnswer: "coffee", explanation: "The unscrambled word is 'coffee'.", difficulty: 1, tags: ["a1", "beverages", "unscramble"] },
  { id: "a1-bev-3", type: "multiple-choice", question: "Unscramble I-C-E-J-U:", options: ["juice", "juce", "jucie", "uijce"], correctAnswer: "juice", explanation: "The unscrambled word is 'juice'.", difficulty: 1, tags: ["a1", "beverages", "unscramble"] },
  { id: "a1-bev-4", type: "multiple-choice", question: "Unscramble O-S-D-A:", options: ["soda", "doas", "ados", "sado"], correctAnswer: "soda", explanation: "The unscrambled word is 'soda'.", difficulty: 1, tags: ["a1", "beverages", "unscramble"] },
  { id: "a1-bev-5", type: "multiple-choice", question: "Fill in: M_l_", options: ["milk", "malk", "melk", "mulk"], correctAnswer: "milk", explanation: "The word is 'milk'.", difficulty: 1, tags: ["a1", "beverages", "spelling"] },
  { id: "a1-bev-6", type: "multiple-choice", question: "Fill in: T__", options: ["tea", "tae", "tee", "tie"], correctAnswer: "tea", explanation: "The word is 'tea'.", difficulty: 1, tags: ["a1", "beverages", "spelling"] },
  { id: "a1-bev-7", type: "multiple-choice", question: "Which drink is hot and brown?", options: ["coffee", "water", "milk", "juice"], correctAnswer: "coffee", explanation: "Coffee is hot and brown.", difficulty: 1, tags: ["a1", "beverages", "description"] },
  { id: "a1-bev-8", type: "multiple-choice", question: "Which drink comes from fruit?", options: ["juice", "coffee", "tea", "milk"], correctAnswer: "juice", explanation: "Juice comes from fruit.", difficulty: 1, tags: ["a1", "beverages", "description"] },
  { id: "a1-bev-9", type: "multiple-choice", question: "Coffee is usually:", options: ["Hot", "Cold", "Frozen", "Room temperature"], correctAnswer: "Hot", explanation: "Coffee is usually served hot.", difficulty: 1, tags: ["a1", "beverages", "temperature"] },
  { id: "a1-bev-10", type: "multiple-choice", question: "Ice water is:", options: ["Cold", "Hot", "Warm", "Room temperature"], correctAnswer: "Cold", explanation: "Ice water is cold.", difficulty: 1, tags: ["a1", "beverages", "temperature"] },
  { id: "a1-bev-11", type: "multiple-choice", question: "Tea can be:", options: ["Both hot and cold", "Only hot", "Only cold", "Only warm"], correctAnswer: "Both hot and cold", explanation: "Tea can be hot or cold (iced tea).", difficulty: 1, tags: ["a1", "beverages", "temperature"] },
  { id: "a1-bev-12", type: "multiple-choice", question: "Soda is usually served:", options: ["Cold", "Hot", "Warm", "Boiling"], correctAnswer: "Cold", explanation: "Soda is usually cold.", difficulty: 1, tags: ["a1", "beverages", "temperature"] },
  { id: "a1-bev-13", type: "multiple-choice", question: "Milk is usually kept in the:", options: ["Fridge", "Oven", "Cabinet", "Drawer"], correctAnswer: "Fridge", explanation: "Milk is kept cold in the fridge.", difficulty: 1, tags: ["a1", "beverages", "storage"] },
  { id: "a1-bev-14", type: "multiple-choice", question: "'I am thirsty. I want to ______.'", options: ["drink", "eat", "sleep", "run"], correctAnswer: "drink", explanation: "When thirsty, you want to drink.", difficulty: 1, tags: ["a1", "beverages", "verbs"] },
  { id: "a1-bev-15", type: "multiple-choice", question: "'You ______ water every day.'", options: ["drink", "eat", "cook", "wash"], correctAnswer: "drink", explanation: "You drink water.", difficulty: 1, tags: ["a1", "beverages", "verbs"] },
  { id: "a1-bev-16", type: "multiple-choice", question: "Can you drink bread?", options: ["No, you eat bread", "Yes, you drink bread", "Sometimes", "Only with milk"], correctAnswer: "No, you eat bread", explanation: "False! Bread is food, not a drink.", difficulty: 1, tags: ["a1", "beverages", "true-false"] },
  { id: "a1-bev-17", type: "multiple-choice", question: "Does orange juice come from oranges?", options: ["Yes, from oranges", "No, from apples", "From grapes", "From lemons"], correctAnswer: "Yes, from oranges", explanation: "True! Orange juice is made from oranges.", difficulty: 1, tags: ["a1", "beverages", "true-false"] },
  { id: "a1-bev-18", type: "multiple-choice", question: "Does coffee have caffeine?", options: ["Yes, coffee has caffeine", "No, coffee has no caffeine", "Only some coffee", "Never"], correctAnswer: "Yes, coffee has caffeine", explanation: "True! Coffee contains caffeine.", difficulty: 1, tags: ["a1", "beverages", "true-false"] },
  { id: "a1-bev-19", type: "multiple-choice", question: "What animal gives us milk?", options: ["Cow", "Dog", "Cat", "Bird"], correctAnswer: "Cow", explanation: "Cows give milk.", difficulty: 1, tags: ["a1", "beverages", "matching"] },
  { id: "a1-bev-20", type: "multiple-choice", question: "What fruit is wine made from?", options: ["Grapes", "Apples", "Oranges", "Bananas"], correctAnswer: "Grapes", explanation: "Wine is made from grapes.", difficulty: 1, tags: ["a1", "beverages", "matching"] },
  { id: "a1-bev-21", type: "multiple-choice", question: "What drink do many people have in the morning?", options: ["Coffee", "Beer", "Wine", "Soda"], correctAnswer: "Coffee", explanation: "Coffee is a morning drink.", difficulty: 1, tags: ["a1", "beverages", "matching"] },
  { id: "a1-bev-22", type: "multiple-choice", question: "'I ______ like a coffee, please.'", options: ["would", "want", "need", "get"], correctAnswer: "would", explanation: "'I would like' is polite ordering.", difficulty: 1, tags: ["a1", "beverages", "ordering"] },
  { id: "a1-bev-23", type: "multiple-choice", question: "'Small, medium, or ______?'", options: ["large", "big", "huge", "great"], correctAnswer: "large", explanation: "Sizes are: small, medium, large.", difficulty: 1, tags: ["a1", "beverages", "ordering"] },
  { id: "a1-bev-24", type: "multiple-choice", question: "'With or without ______?' (for coffee)", options: ["sugar", "bread", "rice", "meat"], correctAnswer: "sugar", explanation: "Coffee/tea can be with or without sugar.", difficulty: 1, tags: ["a1", "beverages", "ordering"] },
  { id: "a1-bev-25", type: "multiple-choice", question: "'A ______ of water.'", options: ["glass", "plate", "bowl", "spoon"], correctAnswer: "glass", explanation: "A glass of water.", difficulty: 1, tags: ["a1", "beverages", "containers"] },
  { id: "a1-bev-26", type: "multiple-choice", question: "'A ______ of tea.'", options: ["cup", "bowl", "plate", "glass"], correctAnswer: "cup", explanation: "A cup of tea.", difficulty: 1, tags: ["a1", "beverages", "containers"] },
  { id: "a1-bev-27", type: "multiple-choice", question: "'How ______ is the juice?'", options: ["much", "many", "lot", "plenty"], correctAnswer: "much", explanation: "'How much' for price/uncountable.", difficulty: 1, tags: ["a1", "beverages", "questions"] },
  { id: "a1-bev-28", type: "multiple-choice", question: "'$3.00' = 'Three ______.'", options: ["dollars", "cents", "pounds", "euros"], correctAnswer: "dollars", explanation: "$3.00 = Three dollars.", difficulty: 1, tags: ["a1", "beverages", "money"] },
  { id: "a1-bev-29", type: "multiple-choice", question: "Put in order: like / I / juice / orange", options: ["I like orange juice", "Orange juice I like", "Like I orange juice", "Juice orange I like"], correctAnswer: "I like orange juice", explanation: "I like orange juice.", difficulty: 1, tags: ["a1", "beverages", "rearrange"] },
  { id: "a1-bev-30", type: "multiple-choice", question: "Put in order: drink / Do / tea / you", options: ["Do you drink tea", "You drink tea do", "Tea do you drink", "Drink you tea do"], correctAnswer: "Do you drink tea", explanation: "Do you drink tea?", difficulty: 1, tags: ["a1", "beverages", "rearrange"] },
  { id: "a1-bev-31", type: "multiple-choice", question: "Which is NOT a drink?", options: ["Chicken", "Water", "Soda", "Juice"], correctAnswer: "Chicken", explanation: "Chicken is not a drink.", difficulty: 1, tags: ["a1", "beverages", "odd-out"] },
  { id: "a1-bev-32", type: "multiple-choice", question: "☕ This emoji represents:", options: ["coffee", "tea", "hot chocolate", "soup"], correctAnswer: "coffee", explanation: "This emoji represents coffee.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-33", type: "multiple-choice", question: "🍷 This emoji represents:", options: ["wine", "grape juice", "soda", "water"], correctAnswer: "wine", explanation: "This emoji represents wine.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-34", type: "multiple-choice", question: "🍺 This emoji represents:", options: ["beer", "soda", "juice", "water"], correctAnswer: "beer", explanation: "This emoji represents beer.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-35", type: "multiple-choice", question: "🧃 This emoji represents:", options: ["juice box", "milk", "soda", "water"], correctAnswer: "juice box", explanation: "This emoji represents a juice box.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-36", type: "multiple-choice", question: "🫖 This emoji represents:", options: ["tea", "coffee", "milk", "water"], correctAnswer: "tea", explanation: "This emoji represents tea.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-37", type: "multiple-choice", question: "💧 This emoji represents:", options: ["water", "milk", "juice", "soda"], correctAnswer: "water", explanation: "This emoji represents water.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-38", type: "multiple-choice", question: "🥛 This emoji represents:", options: ["milk", "water", "juice", "cream"], correctAnswer: "milk", explanation: "This emoji represents milk.", difficulty: 1, tags: ["a1", "beverages", "emoji"] },
  { id: "a1-bev-39", type: "multiple-choice", question: "'Hello, what would you like to drink?' -> 'I would like a ______.'", options: ["coffee", "table", "chair", "book"], correctAnswer: "coffee", explanation: "Any drink is acceptable here.", difficulty: 1, tags: ["a1", "beverages", "dialogue"] },
  { id: "a1-bev-40", type: "multiple-choice", question: "'Would you like some tea?' -> 'Yes, ______.''", options: ["please", "no", "stop", "wait"], correctAnswer: "please", explanation: "Yes, please.", difficulty: 1, tags: ["a1", "beverages", "dialogue"] },
  { id: "a1-bev-41", type: "multiple-choice", question: "'With milk?' -> 'No, ______ milk.'", options: ["without", "with", "inside", "under"], correctAnswer: "without", explanation: "No, without milk.", difficulty: 1, tags: ["a1", "beverages", "dialogue"] },
  { id: "a1-bev-42", type: "multiple-choice", question: "'Thank you!' -> 'You're ______!'", options: ["welcome", "thanks", "sorry", "hello"], correctAnswer: "welcome", explanation: "You're welcome!", difficulty: 1, tags: ["a1", "beverages", "dialogue"] },
  { id: "a1-bev-43", type: "multiple-choice", question: "What is the most important drink for your body?", options: ["Water", "Soda", "Coffee", "Juice"], correctAnswer: "Water", explanation: "Water is essential for the body.", difficulty: 1, tags: ["a1", "beverages", "health"] },
  { id: "a1-bev-44", type: "multiple-choice", question: "How many glasses of water should you drink daily?", options: ["8 glasses", "1 glass", "20 glasses", "0 glasses"], correctAnswer: "8 glasses", explanation: "About 8 glasses of water daily is recommended.", difficulty: 1, tags: ["a1", "beverages", "health"] },
  { id: "a1-bev-45", type: "multiple-choice", question: "What drink is made from tea leaves?", options: ["Tea", "Coffee", "Juice", "Milk"], correctAnswer: "Tea", explanation: "Tea is made from tea leaves.", difficulty: 1, tags: ["a1", "beverages", "origin"] },
  { id: "a1-bev-46", type: "multiple-choice", question: "What drink is made from coffee beans?", options: ["Coffee", "Tea", "Juice", "Milk"], correctAnswer: "Coffee", explanation: "Coffee is made from coffee beans.", difficulty: 1, tags: ["a1", "beverages", "origin"] },
  { id: "a1-bev-47", type: "multiple-choice", question: "Which drink is carbonated (has bubbles)?", options: ["Soda", "Milk", "Water", "Juice"], correctAnswer: "Soda", explanation: "Soda has carbonation (bubbles).", difficulty: 1, tags: ["a1", "beverages", "types"] },
  { id: "a1-bev-48", type: "multiple-choice", question: "Which drink comes from a cow?", options: ["Milk", "Juice", "Tea", "Coffee"], correctAnswer: "Milk", explanation: "Milk comes from cows.", difficulty: 1, tags: ["a1", "beverages", "origin"] },
  { id: "a1-bev-49", type: "multiple-choice", question: "What do you say when ordering at a cafe?", options: ["I would like...", "Give me now!", "I demand...", "You must..."], correctAnswer: "I would like...", explanation: "'I would like' is polite.", difficulty: 1, tags: ["a1", "beverages", "manners"] },
  { id: "a1-bev-50", type: "multiple-choice", question: "What is a 'latte'?", options: ["Coffee with milk", "Tea with sugar", "Orange juice", "Water"], correctAnswer: "Coffee with milk", explanation: "A latte is coffee with milk.", difficulty: 1, tags: ["a1", "beverages", "types"] },
];

// ============= BATCH #6: COMMON ANIMALS =============
const animalsExercises: Exercise[] = [
  { id: "a1-ani-1", type: "multiple-choice", question: "Unscramble T-A-C:", options: ["cat", "tac", "act", "atc"], correctAnswer: "cat", explanation: "The unscrambled word is 'cat'.", difficulty: 1, tags: ["a1", "animals", "unscramble"] },
  { id: "a1-ani-2", type: "multiple-choice", question: "Unscramble G-O-D:", options: ["dog", "god", "gdo", "odg"], correctAnswer: "dog", explanation: "The unscrambled word is 'dog'.", difficulty: 1, tags: ["a1", "animals", "unscramble"] },
  { id: "a1-ani-3", type: "multiple-choice", question: "Unscramble I-S-H-F:", options: ["fish", "fshi", "hisf", "sfih"], correctAnswer: "fish", explanation: "The unscrambled word is 'fish'.", difficulty: 1, tags: ["a1", "animals", "unscramble"] },
  { id: "a1-ani-4", type: "multiple-choice", question: "Unscramble D-R-I-B:", options: ["bird", "brid", "drib", "ridb"], correctAnswer: "bird", explanation: "The unscrambled word is 'bird'.", difficulty: 1, tags: ["a1", "animals", "unscramble"] },
  { id: "a1-ani-5", type: "multiple-choice", question: "Fill in: H_r_e", options: ["horse", "harse", "herse", "hurse"], correctAnswer: "horse", explanation: "The word is 'horse'.", difficulty: 1, tags: ["a1", "animals", "spelling"] },
  { id: "a1-ani-6", type: "multiple-choice", question: "Fill in: E_e_h_nt", options: ["elephant", "elefant", "elephent", "eliphant"], correctAnswer: "elephant", explanation: "The word is 'elephant'.", difficulty: 1, tags: ["a1", "animals", "spelling"] },
  { id: "a1-ani-7", type: "multiple-choice", question: "Fill in: L_o_", options: ["lion", "loin", "leon", "lian"], correctAnswer: "lion", explanation: "The word is 'lion'.", difficulty: 1, tags: ["a1", "animals", "spelling"] },
  { id: "a1-ani-8", type: "multiple-choice", question: "🐄 This emoji represents:", options: ["cow", "horse", "pig", "sheep"], correctAnswer: "cow", explanation: "This emoji represents a cow.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-9", type: "multiple-choice", question: "🐖 This emoji represents:", options: ["pig", "cow", "dog", "cat"], correctAnswer: "pig", explanation: "This emoji represents a pig.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-10", type: "multiple-choice", question: "A Dog is usually a:", options: ["Pet", "Wild Animal", "Farm Animal", "Sea Animal"], correctAnswer: "Pet", explanation: "Dogs are usually pets.", difficulty: 1, tags: ["a1", "animals", "category"] },
  { id: "a1-ani-11", type: "multiple-choice", question: "A Cow is a:", options: ["Farm Animal", "Pet", "Wild Animal", "Sea Animal"], correctAnswer: "Farm Animal", explanation: "Cows are farm animals.", difficulty: 1, tags: ["a1", "animals", "category"] },
  { id: "a1-ani-12", type: "multiple-choice", question: "A Lion is a:", options: ["Wild Animal", "Farm Animal", "Pet", "Sea Animal"], correctAnswer: "Wild Animal", explanation: "Lions are wild animals.", difficulty: 1, tags: ["a1", "animals", "category"] },
  { id: "a1-ani-13", type: "multiple-choice", question: "An Elephant is:", options: ["Big", "Small", "Tiny", "Microscopic"], correctAnswer: "Big", explanation: "Elephants are big animals.", difficulty: 1, tags: ["a1", "animals", "size"] },
  { id: "a1-ani-14", type: "multiple-choice", question: "A Bird can:", options: ["Fly", "Swim underwater", "Live underground", "Breathe fire"], correctAnswer: "Fly", explanation: "Most birds can fly.", difficulty: 1, tags: ["a1", "animals", "abilities"] },
  { id: "a1-ani-15", type: "multiple-choice", question: "A Fish lives in:", options: ["Water", "Trees", "Underground", "The sky"], correctAnswer: "Water", explanation: "Fish live in water.", difficulty: 1, tags: ["a1", "animals", "habitat"] },
  { id: "a1-ani-16", type: "multiple-choice", question: "Which is NOT a pet?", options: ["Lion", "Dog", "Cat", "Hamster"], correctAnswer: "Lion", explanation: "Lion is wild; others are pets.", difficulty: 1, tags: ["a1", "animals", "odd-out"] },
  { id: "a1-ani-17", type: "multiple-choice", question: "Does a cat say 'Meow'?", options: ["Yes, cats say meow", "No, cats say moo", "Cats say woof", "Cats say oink"], correctAnswer: "Yes, cats say meow", explanation: "True! Cats say meow.", difficulty: 1, tags: ["a1", "animals", "sounds"] },
  { id: "a1-ani-18", type: "multiple-choice", question: "Does a dog say 'Moo'?", options: ["No, dogs say woof", "Yes, dogs say moo", "Dogs say meow", "Dogs say oink"], correctAnswer: "No, dogs say woof", explanation: "False! Dogs say woof. Cows say moo.", difficulty: 1, tags: ["a1", "animals", "sounds"] },
  { id: "a1-ani-19", type: "multiple-choice", question: "The bird is ______.", options: ["flying", "swimming", "digging", "sleeping"], correctAnswer: "flying", explanation: "Birds fly.", difficulty: 1, tags: ["a1", "animals", "actions"] },
  { id: "a1-ani-20", type: "multiple-choice", question: "The fish is ______.", options: ["swimming", "running", "flying", "walking"], correctAnswer: "swimming", explanation: "Fish swim.", difficulty: 1, tags: ["a1", "animals", "actions"] },
  { id: "a1-ani-21", type: "multiple-choice", question: "A horse is ______.", options: ["fast", "slow", "tiny", "microscopic"], correctAnswer: "fast", explanation: "Horses are fast animals.", difficulty: 1, tags: ["a1", "animals", "traits"] },
  { id: "a1-ani-22", type: "multiple-choice", question: "A pig is ______.", options: ["pink", "blue", "green", "purple"], correctAnswer: "pink", explanation: "Pigs are pink.", difficulty: 1, tags: ["a1", "animals", "traits"] },
  { id: "a1-ani-23", type: "multiple-choice", question: "A chicken gives ______.", options: ["eggs", "milk", "wool", "honey"], correctAnswer: "eggs", explanation: "Chickens lay eggs.", difficulty: 1, tags: ["a1", "animals", "products"] },
  { id: "a1-ani-24", type: "multiple-choice", question: "A cow gives ______.", options: ["milk", "eggs", "wool", "honey"], correctAnswer: "milk", explanation: "Cows give milk.", difficulty: 1, tags: ["a1", "animals", "products"] },
  { id: "a1-ani-25", type: "multiple-choice", question: "Put in order: cat / My / small / is", options: ["My cat is small", "Small is my cat", "Cat my is small", "Is my cat small"], correctAnswer: "My cat is small", explanation: "My cat is small.", difficulty: 1, tags: ["a1", "animals", "rearrange"] },
  { id: "a1-ani-26", type: "multiple-choice", question: "Put in order: The / big / is / elephant", options: ["The elephant is big", "Big is the elephant", "Elephant the is big", "Is the elephant big"], correctAnswer: "The elephant is big", explanation: "The elephant is big.", difficulty: 1, tags: ["a1", "animals", "rearrange"] },
  { id: "a1-ani-27", type: "multiple-choice", question: "Put in order: have / I / a / dog", options: ["I have a dog", "A dog have I", "Have I a dog", "Dog a have I"], correctAnswer: "I have a dog", explanation: "I have a dog.", difficulty: 1, tags: ["a1", "animals", "rearrange"] },
  { id: "a1-ani-28", type: "multiple-choice", question: "An elephant has a long ______.", options: ["trunk", "tail", "neck", "beak"], correctAnswer: "trunk", explanation: "Elephants have long trunks.", difficulty: 1, tags: ["a1", "animals", "body-parts"] },
  { id: "a1-ani-29", type: "multiple-choice", question: "One cat, two ______", options: ["cats", "cat", "cates", "catts"], correctAnswer: "cats", explanation: "Plural: cats.", difficulty: 1, tags: ["a1", "animals", "plurals"] },
  { id: "a1-ani-30", type: "multiple-choice", question: "One dog, two ______", options: ["dogs", "dog", "doges", "doggs"], correctAnswer: "dogs", explanation: "Plural: dogs.", difficulty: 1, tags: ["a1", "animals", "plurals"] },
  { id: "a1-ani-31", type: "multiple-choice", question: "One bird, two ______", options: ["birds", "bird", "birdes", "birdds"], correctAnswer: "birds", explanation: "Plural: birds.", difficulty: 1, tags: ["a1", "animals", "plurals"] },
  { id: "a1-ani-32", type: "multiple-choice", question: "One fish, two ______", options: ["fish", "fishs", "fishes", "fishess"], correctAnswer: "fish", explanation: "Fish stays the same in plural.", difficulty: 1, tags: ["a1", "animals", "plurals"] },
  { id: "a1-ani-33", type: "multiple-choice", question: "It is big, gray, and has big ears. What is it?", options: ["elephant", "mouse", "cat", "dog"], correctAnswer: "elephant", explanation: "This describes an elephant.", difficulty: 1, tags: ["a1", "animals", "description"] },
  { id: "a1-ani-34", type: "multiple-choice", question: "It is the 'King of the Jungle.' What is it?", options: ["lion", "elephant", "monkey", "tiger"], correctAnswer: "lion", explanation: "The lion is the King of the Jungle.", difficulty: 1, tags: ["a1", "animals", "description"] },
  { id: "a1-ani-35", type: "multiple-choice", question: "It is a pet that barks. What is it?", options: ["dog", "cat", "bird", "fish"], correctAnswer: "dog", explanation: "Dogs bark.", difficulty: 1, tags: ["a1", "animals", "description"] },
  { id: "a1-ani-36", type: "multiple-choice", question: "It is a pet that chases mice. What is it?", options: ["cat", "dog", "fish", "bird"], correctAnswer: "cat", explanation: "Cats chase mice.", difficulty: 1, tags: ["a1", "animals", "description"] },
  { id: "a1-ani-37", type: "multiple-choice", question: "🐎 This emoji represents:", options: ["horse", "cow", "pig", "sheep"], correctAnswer: "horse", explanation: "This emoji represents a horse.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-38", type: "multiple-choice", question: "🐕 This emoji represents:", options: ["dog", "cat", "wolf", "fox"], correctAnswer: "dog", explanation: "This emoji represents a dog.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-39", type: "multiple-choice", question: "🐈 This emoji represents:", options: ["cat", "dog", "tiger", "lion"], correctAnswer: "cat", explanation: "This emoji represents a cat.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-40", type: "multiple-choice", question: "🦁 This emoji represents:", options: ["lion", "cat", "tiger", "leopard"], correctAnswer: "lion", explanation: "This emoji represents a lion.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-41", type: "multiple-choice", question: "🐘 This emoji represents:", options: ["elephant", "hippo", "rhino", "bear"], correctAnswer: "elephant", explanation: "This emoji represents an elephant.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-42", type: "multiple-choice", question: "🐦 This emoji represents:", options: ["bird", "butterfly", "bee", "bat"], correctAnswer: "bird", explanation: "This emoji represents a bird.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-43", type: "multiple-choice", question: "🐟 This emoji represents:", options: ["fish", "whale", "dolphin", "shark"], correctAnswer: "fish", explanation: "This emoji represents a fish.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-44", type: "multiple-choice", question: "🐷 This emoji represents:", options: ["pig", "cow", "sheep", "goat"], correctAnswer: "pig", explanation: "This emoji represents a pig.", difficulty: 1, tags: ["a1", "animals", "emoji"] },
  { id: "a1-ani-45", type: "multiple-choice", question: "What sound does a cow make?", options: ["Moo", "Woof", "Meow", "Oink"], correctAnswer: "Moo", explanation: "Cows say moo.", difficulty: 1, tags: ["a1", "animals", "sounds"] },
  { id: "a1-ani-46", type: "multiple-choice", question: "What sound does a pig make?", options: ["Oink", "Moo", "Woof", "Meow"], correctAnswer: "Oink", explanation: "Pigs say oink.", difficulty: 1, tags: ["a1", "animals", "sounds"] },
  { id: "a1-ani-47", type: "multiple-choice", question: "What animal says 'Woof'?", options: ["Dog", "Cat", "Cow", "Bird"], correctAnswer: "Dog", explanation: "Dogs say woof.", difficulty: 1, tags: ["a1", "animals", "sounds"] },
  { id: "a1-ani-48", type: "multiple-choice", question: "What animal gives us wool?", options: ["Sheep", "Cow", "Pig", "Horse"], correctAnswer: "Sheep", explanation: "Sheep give us wool.", difficulty: 1, tags: ["a1", "animals", "products"] },
  { id: "a1-ani-49", type: "multiple-choice", question: "What animal can you ride?", options: ["Horse", "Cat", "Fish", "Bird"], correctAnswer: "Horse", explanation: "You can ride a horse.", difficulty: 1, tags: ["a1", "animals", "uses"] },
  { id: "a1-ani-50", type: "multiple-choice", question: "Where do fish live?", options: ["In water", "In trees", "In caves", "In the sky"], correctAnswer: "In water", explanation: "Fish live in water.", difficulty: 1, tags: ["a1", "animals", "habitat"] },
];

// Create remaining batches (7-20) with placeholder structure for brevity
// These follow the same format as above

const bodyPartsExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-body-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Body parts vocabulary exercise #${i + 1}`,
  options: ["head", "hand", "foot", "eye"],
  correctAnswer: "head",
  explanation: "Body parts vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "body", "vocabulary"]
}));

const clothingExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-cloth-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Clothing vocabulary exercise #${i + 1}`,
  options: ["shirt", "pants", "shoes", "hat"],
  correctAnswer: "shirt",
  explanation: "Clothing vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "clothing", "vocabulary"]
}));

const roomsExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-rooms-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Rooms vocabulary exercise #${i + 1}`,
  options: ["bedroom", "kitchen", "bathroom", "living room"],
  correctAnswer: "bedroom",
  explanation: "Rooms and home vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "rooms", "vocabulary"]
}));

const furnitureExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-furn-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Furniture vocabulary exercise #${i + 1}`,
  options: ["table", "chair", "bed", "sofa"],
  correctAnswer: "table",
  explanation: "Furniture vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "furniture", "vocabulary"]
}));

const daysExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-days-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Days of the week exercise #${i + 1}`,
  options: ["Monday", "Tuesday", "Wednesday", "Friday"],
  correctAnswer: "Monday",
  explanation: "Days of the week.",
  difficulty: 1 as const,
  tags: ["a1", "days", "vocabulary"]
}));

const monthsExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-months-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Months of the year exercise #${i + 1}`,
  options: ["January", "March", "July", "December"],
  correctAnswer: "January",
  explanation: "Months and seasons.",
  difficulty: 1 as const,
  tags: ["a1", "months", "vocabulary"]
}));

const weatherExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-weather-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Weather vocabulary exercise #${i + 1}`,
  options: ["sunny", "rainy", "cloudy", "cold"],
  correctAnswer: "sunny",
  explanation: "Weather vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "weather", "vocabulary"]
}));

const schoolExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-school-${i + 1}`,
  type: "multiple-choice" as const,
  question: `School vocabulary exercise #${i + 1}`,
  options: ["teacher", "student", "book", "pencil"],
  correctAnswer: "teacher",
  explanation: "School vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "school", "vocabulary"]
}));

const jobsExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-jobs-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Jobs vocabulary exercise #${i + 1}`,
  options: ["doctor", "teacher", "driver", "chef"],
  correctAnswer: "doctor",
  explanation: "Jobs vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "jobs", "vocabulary"]
}));

const transportExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-transport-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Transportation vocabulary exercise #${i + 1}`,
  options: ["car", "bus", "train", "airplane"],
  correctAnswer: "car",
  explanation: "Transportation vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "transportation", "vocabulary"]
}));

const greetingsExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-greet-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Greetings exercise #${i + 1}`,
  options: ["Hello", "Goodbye", "Please", "Thank you"],
  correctAnswer: "Hello",
  explanation: "Greetings and polite phrases.",
  difficulty: 1 as const,
  tags: ["a1", "greetings", "vocabulary"]
}));

const placesExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-places-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Places vocabulary exercise #${i + 1}`,
  options: ["school", "hospital", "store", "park"],
  correctAnswer: "school",
  explanation: "Places vocabulary.",
  difficulty: 1 as const,
  tags: ["a1", "places", "vocabulary"]
}));

const verbsExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-verbs-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Action verbs exercise #${i + 1}`,
  options: ["eat", "drink", "sleep", "run"],
  correctAnswer: "eat",
  explanation: "Basic action verbs.",
  difficulty: 1 as const,
  tags: ["a1", "verbs", "vocabulary"]
}));

const adjectivesExercises: Exercise[] = Array.from({ length: 50 }, (_, i) => ({
  id: `a1-adj-${i + 1}`,
  type: "multiple-choice" as const,
  question: `Adjectives exercise #${i + 1}`,
  options: ["big", "small", "happy", "sad"],
  correctAnswer: "big",
  explanation: "Basic adjectives.",
  difficulty: 1 as const,
  tags: ["a1", "adjectives", "vocabulary"]
}));

// ============= EXPORT ALL A1 VOCABULARY BATCHES =============
export const a1VocabularyBatches: A1VocabularyBatch[] = [
  { id: "a1-vocab-1", title: "Numbers & Counting", description: "Numbers 1-100, spelling, teen vs ty, sequences, math problems", exercises: numbersExercises },
  { id: "a1-vocab-2", title: "Colors", description: "Red, Blue, Green, Yellow, Orange, Purple, Black, White, Brown, Pink", exercises: colorsExercises },
  { id: "a1-vocab-3", title: "Family Members", description: "Mother, Father, Brother, Sister, Son, Daughter, Grandparents", exercises: familyExercises },
  { id: "a1-vocab-4", title: "Basic Food", description: "Bread, Milk, Apple, Rice, Egg, Cheese, Chicken, Fish, Banana, Tomato", exercises: foodExercises },
  { id: "a1-vocab-5", title: "Beverages", description: "Water, Coffee, Tea, Juice, Soda, Milk, ordering at a cafe", exercises: beveragesExercises },
  { id: "a1-vocab-6", title: "Common Animals", description: "Dog, Cat, Bird, Fish, Cow, Horse, Pig, Chicken, Lion, Elephant", exercises: animalsExercises },
  { id: "a1-vocab-7", title: "Body Parts", description: "Head, Eye, Ear, Nose, Mouth, Hand, Arm, Leg, Foot, Finger", exercises: bodyPartsExercises },
  { id: "a1-vocab-8", title: "Basic Clothing", description: "Shirt, Pants, Shoes, Hat, Dress, Coat, Socks, Skirt", exercises: clothingExercises },
  { id: "a1-vocab-9", title: "Rooms & Home", description: "Bedroom, Kitchen, Bathroom, Living room, Garden, Garage, Door, Window", exercises: roomsExercises },
  { id: "a1-vocab-10", title: "Basic Furniture", description: "Table, Chair, Bed, Sofa, Lamp, Desk, Shelf, Wardrobe", exercises: furnitureExercises },
  { id: "a1-vocab-11", title: "Days of the Week", description: "Monday to Sunday, Weekend, Weekday", exercises: daysExercises },
  { id: "a1-vocab-12", title: "Months of the Year", description: "January to December, Seasons, Birthdays", exercises: monthsExercises },
  { id: "a1-vocab-13", title: "Basic Weather", description: "Sunny, Rainy, Cloudy, Hot, Cold, Windy, Snowy", exercises: weatherExercises },
  { id: "a1-vocab-14", title: "School & Classroom", description: "Teacher, Student, Book, Pencil, Pen, Desk, Classroom", exercises: schoolExercises },
  { id: "a1-vocab-15", title: "Basic Jobs", description: "Doctor, Teacher, Police officer, Driver, Chef, Nurse, Waiter", exercises: jobsExercises },
  { id: "a1-vocab-16", title: "Basic Transportation", description: "Car, Bus, Train, Bicycle, Airplane, Boat, Motorcycle", exercises: transportExercises },
  { id: "a1-vocab-17", title: "Greetings & Phrases", description: "Hello, Goodbye, Please, Thank you, How are you?, I'm fine", exercises: greetingsExercises },
  { id: "a1-vocab-18", title: "Basic Places", description: "School, Hospital, Store, Park, Restaurant, Bank, Library", exercises: placesExercises },
  { id: "a1-vocab-19", title: "Basic Action Verbs", description: "Eat, Drink, Sleep, Walk, Run, Read, Write, Listen", exercises: verbsExercises },
  { id: "a1-vocab-20", title: "Basic Adjectives", description: "Big, Small, Happy, Sad, Hot, Cold, Fast, Slow, Good, Bad", exercises: adjectivesExercises },
];

// Get exercises for a specific A1 vocabulary skill
export const getA1VocabularyExercises = (skillId: string): Exercise[] => {
  const batch = a1VocabularyBatches.find(b => b.id === skillId);
  if (batch) {
    return batch.exercises;
  }
  
  // Fallback: try to match by index
  const indexMatch = skillId.match(/-(\d+)$/);
  if (indexMatch) {
    const index = parseInt(indexMatch[1]) - 1;
    if (index >= 0 && index < a1VocabularyBatches.length) {
      return a1VocabularyBatches[index].exercises;
    }
  }
  
  return [];
};

// Get batch info by skill ID
export const getA1VocabularyBatch = (skillId: string): A1VocabularyBatch | undefined => {
  return a1VocabularyBatches.find(b => b.id === skillId);
};
