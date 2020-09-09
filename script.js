const resultEl = document.getElementById("password");
const generateEl = document.getElementById("generate");
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;
let passwordLength;
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};
// generated click listener
generateEl.addEventListener('click', () => {
//passwor criteria
	passwordLength = prompt("Pass Word Length")

	if (passwordLength < 8 || passwordLength > 128) {
		alert("Pass Word must be between 8 to 128 ");
		resultEl = ("VOID");
	}
	
	confirmNumber = confirm("Will this contain numbers?")
	confirmCharacter = confirm("Will this contain Character?")
	confirmUppercase = confirm("Will this contain Uppercase?")
	confirmLowercase = confirm("Will this contain Lowercase?")
	var length = passwordLength;
	var hasUpper = confirmUppercase;
	var hasLower = confirmLowercase;
	var hasNumber = confirmNumber;
	var hasSymbol = confirmCharacter;
//result to be printed and the generated criteria
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});
//
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;

	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
		(item => Object.values(item)[0]);

	//returns an empty string if no criteria is selected 
	if (typesCount === 0) {
		return "";
	}

	// create a loop through the arrays for the length
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();

		});
	}
	// final password 
	var finalPassword = generatedPassword.slice(0, length);
	return finalPassword;

}
//random function generators
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}








