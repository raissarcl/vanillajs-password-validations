//verifies if the amount of characters is between 6 and 20
function amountCharacters(string) {
  return string.length >= 6 && string.length <= 20;
}

//verifies if it's a lowercase char
function isLowercase(itemChar) {
  return itemChar === itemChar.toLowerCase();
}

//verifies if it's an uppercase char
function isUppercase(itemChar) {
  return itemChar === itemChar.toUpperCase();
}

function isANumber(itemChar) {
  return itemChar == parseInt(itemChar);
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
  const constraints = [
    { characters: false },
    { lowercase: false },
    { uppercase: false },
    { number: false },
    { repeatedChar: false }
  ];

  const keys = constraints.map(i => Object.keys(i)[0]);
  const charArray = Array.from(string);
  let totalModifications = 0;

  constraints[0].characters = amountCharacters(string);

  charArray.forEach(item => {
    if (!constraints[1].lowercase) constraints[1].lowercase = isLowercase(item);
    if (!constraints[2].uppercase) constraints[2].uppercase = isUppercase(item);
    if (!constraints[3].number) constraints[3].number = isANumber(item);
  });

  constraints[4].repeatedChar = repeatedChar(charArray);

  constraints.forEach((item, i) => {
    if (item[keys[i]] === false) totalModifications++;
  });

  const result = {
    totalModifications,
    constraints
  }

  return result;
}
