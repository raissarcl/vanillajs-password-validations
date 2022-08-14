import { validatePassword } from "./validate-password-regex.js";

const inputText = document.querySelector("input");
const buttonRegex = document.querySelector("button");
const amountSpan = document.querySelector('.amount');
const answersSpan = Array.from(document.querySelectorAll('.constraint'));

buttonRegex.addEventListener("click", e => {

  e.preventDefault();

  const [totalModifications, values] = validatePassword(inputText.value);
  const texts = values.map(i => {
    if (i === true) { return "passed" };
    if (i === false) { return "failed" };
    return i;
  });

  amountSpan.innerText = totalModifications.toString();

  answersSpan.forEach((item, i) => item.innerText = texts[i].toString().toUpperCase());
});

inputText.addEventListener("keyup", e => {
  e.preventDefault();

  if (e.code === "Enter") buttonRegex.click();
});

