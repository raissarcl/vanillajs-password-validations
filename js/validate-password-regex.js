//verifies if the amount of characters is between 6 and 20 with regex
function amountOfCharactersRegex(string) {
  const re = /\w{6,20}/;

  return re.test(string);
}

//verifies if there's a lowercase char with regex
function lowercaseRegex(string) {
  const re = /[a-z]/;

  return re.test(string);
}

//verifies if there's an uppercase char with regex
function uppercaseRegex(string) {
  const re = /[A-Z]/;

  return re.test(string);
}

//verifies if there's a number with regex
function numberRegex(string) {
  const re = /\d/;

  return re.test(string);
}

//verifies if there's 3 or more repeated letters in sequence with regex
function repeatedCharRegex(string) {
  const re = /(\w)\1\1/;

  return !re.test(string);
}

//validates the password
export function validatePassword(string) {
  const constraints = [
    { characters: false },
    { lowercase: false },
    { uppercase: false },
    { number: false },
    { repeatedChar: false },
  ];

  const keys = constraints.map(i => Object.keys(i)[0]);
  const values = [];

  let totalModifications = 0;

  values.push(
    amountOfCharactersRegex(string),
    lowercaseRegex(string),
    uppercaseRegex(string),
    numberRegex(string),
    repeatedCharRegex(string)
  );

  constraints.forEach((item, i) => {
    item[keys[i]] = values[i];
  });

  values.forEach(i => {
    if (i === false) totalModifications++;
  });

  const result = [
    totalModifications,
    values
  ];

  return result;
}
