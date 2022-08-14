//verifies if the amount of characters is between 6 and 20
function amountOfCharacters(string) {
  return string.length >= 6 && string.length <= 20;
}

//verifies if it's a lowercase char
function isLowercase(charArray) {
  return charArray.some(i => i === i.toLowerCase());
}

//verifies if it's an uppercase char
function isUppercase(charArray) {
  return charArray.some(i => i === i.toUpperCase());
}

function isANumber(charArray) {
  return charArray.some(i => i === parseInt(i));
}

//verifies if there's 3 or more repeated letters in sequence
function repeatedChar(charArray) {
  let repeatedChar = 0;

  for (let i = 0; i < charArray.length - 1; i++) {
    charArray[i] === charArray[i + 1] ? repeatedChar += 1 : repeatedChar = 0;
    if (repeatedChar === 2) { return false };
  }

  return true;
}

//verifies the password
export function validatePassword(string) {
  const constraints = {
    characters: false,
    lowercase: false,
    uppercase: false,
    number: false,
    repeatedChar: false
  };

  const constraintKeys = Object.keys(constraints);
  const constraintValues = [];
  const charArray = Array.from(string);

  let totalModifications = 0;

  constraintValues.push(
    amountOfCharacters(string),
    isLowercase(charArray),
    isUppercase(charArray),
    isANumber(charArray),
    repeatedChar(charArray)
  );

  constraintKeys.forEach((item, i) => constraints[item] = values[i]);

  constraintValues.forEach(i => {
    if (i === false) totalModifications++;
  });

  const result = {
    totalModifications,
    constraintValues
  }

  return result;
}
