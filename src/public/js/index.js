import { validatePassword } from "./validate-password-regex.js";

const inputText = document.querySelector("input");
const buttonRegex = document.querySelector("button");
const amountSpan = document.querySelector('.amount');
const answersSpan = Array.from(document.querySelectorAll('.constraint'));

buttonRegex.addEventListener("click", e => {

  e.preventDefault();

  const [totalModifications, values] = validatePassword(inputText.value);
  const texts = values.map(i => i === true ? "passed" : "failed");

  amountSpan.innerText = totalModifications.toString();

  answersSpan.forEach((item, i) => {
    item.innerText = texts[i].toString().toUpperCase();
    texts[i] === "passed" ? item.style.color = "green" : item.style.color = "red";
  });

});

inputText.addEventListener("keyup", e => {
  e.preventDefault();

  if (e.code === "Enter") buttonRegex.click();
});

