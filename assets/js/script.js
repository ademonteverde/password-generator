// target html El 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const passwordLengthResult = document.getElementById('length-result');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');





document.addEventListener("DOMContentLoaded", () => {
    lengthEl.value = 20;
    passwordLengthResult.innerText = 20;

    let onLoadLength = passLength.value;
    let onLoadNumbers = includeNumbers.checked;
    let onLoadSymbols = includeSymbols.checked;
    result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength);
  });

// Eventlistener for length range
lengthEl.addEventListener("change", (event) => {
    passwordLengthResult.innerText = event.target.value
});








generateBtn.addEventListener("click", () =>{
    const length = lengthEl.value;
    const lowercase = lowercaseEl.checked;
    const uppercase = uppercaseEl.checked;
    const numbers = numbersEl.checked;
    const symbols = symbolsEl.checked;
    result.value = generatePassword(length, lowercase, uppercase, numbers, symbols);
});
function generatePassword(length, lower, upper, number, symbol) {
  let generatedPassword = "";
  let variationsCount = [lower, upper, number, symbol].length;

  for (let i = 0; i < length; i += variationsCount) {
    if (lower) {
        generatedPassword += getRandomLower();
      }
    if (upper) {
        generatedPassword += getRandomUpper();
      }
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}



