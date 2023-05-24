// Prompts length of characters

// Prompts what kind of characters to use 
const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);

const lowerCaseArr = characterCodes.map(code => String.fromCharCode(code));
console.log(lowerCaseArr);

const upperCaseArr = lowerCaseArr.map(letter => letter.toUpperCase());
console.log(upperCaseArr)

const numericArr = [1,2,3,4,5,6,7,8,9,0];

const specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*']


// Randomizer function 
var generatePassword = (length, hasLowercase, hasUppercase, hasNumbers, hasSpecialChar) =>{
    var selectedChar = [
        ...(hasLowercase ? lowerCaseArr : []),
        ...(hasUppercase ? upperCaseArr : []),
        ...(hasNumbers ? numericArr : []),
        ...(hasSpecialChar? specialCharArr : []),
    ];

    let password = "";

    // console.log(selectedChar);
    // at least one character type must be selected 
    if(selectedChar.length === 0) return "";

    for(let i = 0; i < length; i++){
        const randomizer = Math.floor(Math.random() * selectedChar.length);
        password += selectedChar[randomizer];
    }
    return password;
}

console.log(generatePassword(12, false, false, false, false));

// generated password is displayed