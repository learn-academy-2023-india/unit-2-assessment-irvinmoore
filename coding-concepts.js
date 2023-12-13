// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer: "India 2023"
// b) Verify and explain: "India", "2023" each word became an element in the array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: Hello, LEARN Student! 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: it will filter odd number only
// b) Verify and explain: 11, 13, 15, The filter method is used to create a new array with elements that satisfy a certain condition which is only odd numbers.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: languages/index 0 = JavaScript
// b) Verify and explain: JavaScript, (myCodingSkills.languages[0]) myCodingSkills => languages => [0] meaning the Zero index and that is JavaScript. Follow the drip.  

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George will appear somewhere
// b) Verify and explain: Learn { student: 'George', cohort: 'India', year: 2023 } Learn with brackets around (name) and the const having parent-heses (lol) and quotation marks around George. 

