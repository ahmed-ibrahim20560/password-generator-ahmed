// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  {
    let pwlength = parseInt(prompt("How many characters would you like your password to be? (Must be more than 8 and less than 128)"))
    if (pwlength < 8 || pwlength > 128) {
      alert("Invalid password length. Please make it between 8 and 128 characters!")
      return
    }

    let specialChar = confirm("Would you like to have special characters in your password")
    let numericChar = confirm("Would you like to have numbers in your password")
    let upperCaseChar = confirm("Would you like to have upper case characters in your password")
    let lowerCaseChar = confirm("Would you like to have lower case characters in your password")

    let pwOptions = {
      length: pwlength,
      special: specialChar,
      number: numericChar,
      upper: upperCaseChar,
      lower: lowerCaseChar,
    }
  }
  // MY OWN notes
  // make sure to use while loops instead of if statements so that the function doesn't end

  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
  // Prompts store data as strings, so need to parse into a number
  // If the user's input is out of range, either return out of the function or call the function again

  // Confirm which character sets to use
  // If the user answers false for all, either return out of the function or call the function again

  // Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  // Once character sets are selected, move on to generating random characters
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
}


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);