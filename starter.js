/*
  Under each of these prompts, write the line (or lines) of code that will execute the instructions
*/

// Create a variable called `name`, and set its value to your full name (first and last)
let name = 'Michael Sliwka'

// Print your name to the console, so it says "My name is (your name)"
console.log('My name is ' + name)

// Use a method to calculate the number of characters in your name, and put that number inside a variable called `charCount`
let charCount = name.length
// Print the number of characters in your name to the console, so it says "My name has (charCount) letters in it"
console.log('My name has ' + charCount + ' letters in it')
// Use a method to get only the first 3 letters of your name, and save it to a variable called `first3`
let first3 = name.slice(0, 3)

// Create another variable with only the last 3 letters of your name, called `last 3`
let last3 = name.slice(11, 15)

// Combine the first3 and last3 into a new variable called `nickName`
let nickName = first3 + last3

// Print your nickname to the console, so it says "My nickname is (nickName)"
console.log('My nickname is ' + first3 + last3)
// Create a variable called `weirdName` that replaces all instances of one letter in your name with a Z
let weirdName = name.replace('M', 'Z')
// Print your weirdName to the console, so it says "My weirdName is (weirdName)"
console.log('My weirdName is ' + weirdName)
/// ////////
// BONUS //
/// ////////

// Try to create the Pig Latin version of your name and print it to the console.
// As a reminder, pig latin takes any consonants at the beginning of your name, and moves them to the end
// of your name, with "-ay" at the end. So my Pig Latin name would be "Eansay"
