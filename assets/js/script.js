// target html El 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const passwordLengthResult = document.getElementById('length-result');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}



// document.addEventListener("DOMContentLoaded", () => {
//     lengthEl.value = 16;
//     passwordLengthResult.innerText = 16;

//     let onLoadLength = lengthEl.value;
//     let onLoadLower = lowercaseEl.checked;
//     let onLoadUpper = uppercaseEl.checked;
//     let onLoadNumbers = numbersEl.checked;
//     let onLoadSymbols = symbolsEl.checked;
//     resultEl.value = generatePassword(onLoadLength, onLoadLower, onLoadUpper, onLoadNumbers, onLoadSymbols);
//   });

// // Eventlistener for length range
// lengthEl.addEventListener("change", (event) => {
//     passwordLengthResult.innerText = event.target.value
// });








generate.addEventListener("click", () =>{
    const length = +lengthEl.value;
    const hasLowercase = lowercaseEl.checked;
    const hasUppercase = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;
    
    resultEl.value = generatePassword(hasLowercase, hasUppercase, hasNumbers, hasSymbols, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}
//   let variationsCount = [lower, upper, number, symbol].length;

//   for (let i = 0; i < length; i += variationsCount) {
//     if (lower) {
//         generatedPassword += getRandomLower();
//       }
//     if (upper) {
//         generatedPassword += getRandomUpper();
//       }
//     if (number) {
//       generatedPassword += getRandomNumber();
//     }
//     if (symbol) {
//       generatedPassword += getRandomSymbol();
//     }
//   }

//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// }



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



