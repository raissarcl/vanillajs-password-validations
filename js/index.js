import { validatePassword } from "./validate-password-regex.js";

const inputText = document.querySelector("input");
const buttonRegex = document.querySelector("button");
const amountSpan = document.querySelector('.amount');
const answersSpan = Array.from(document.querySelectorAll('.constraint'));

buttonRegex.addEventListener("click", (e) => {

  e.preventDefault();

  const [totalModifications, values] = validatePassword(inputText.value);

  amountSpan.innerText = totalModifications.toString();

  answersSpan.forEach((item, i) => item.innerText = values[i]);
});

