// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("string Sentence", () => (
    it("is a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.",() => {
    
    })
))

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

expect(stringSentence(object1)).toEqual("15 is divisble by three")
expect(stringSentence(object2)).toEqual("0 is divisble by three")
expect(stringSentence(object3)).toEqual("-7 is not divisble by three")

// b) Create the function that makes the test pass.

const stringSentence = (object) => {
    if (object.number % 3 === 0){
        return `${object.number} is divisble by three`
    } else if (object.number % 3 !== 0){
        return `${object.number} is not divisble by three`
     }
    }


// Pseudo code: 
    // Function multiplyByThree(inputArray):
    // Initialize an empty array to store the result
    // resultArray = []
    // Loop through each element in the input array for each number in inputArray:
    // Multiply the current number by 3 and add it to the result array resultArray.append(number * 3)
    // Return the resulting array return resultArray


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("string Sentence", () => (
    it("is a function that takes in an array of words and returns an array with all the words capitalized.",() => {
    
    })
))

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

function capitalizeWords(inputArray) {
    const resultArray = [];
    for (const word of inputArray) {
        resultArray.push(capitalize(word));
    }
    return resultArray;
}
function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
}


// Pseudo code:
    // Function capitalizeWords(inputArray):
    // Initialize an empty array to store the result resultArray = []
    // Loop through each word in the input array for each word in inputArray:
    // Capitalize the current word and add it to the result array resultArray.append(capitalize(word))
    // Return the resulting array return resultArray
    // Function capitalize(word):
    // Capitalize the first letter of the word and return the result return word[0].toUpperCase() + word[1:]
