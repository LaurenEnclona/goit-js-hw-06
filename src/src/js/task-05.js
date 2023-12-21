// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// function handleInput(event) {
//   let inputValue = event.currentTarget.value.trim();
//   if (inputValue) {
//     outputEl.textContent = inputValue;
//   } else {
//     outputEl.textContent = 'Anonymous';
//   }
// }

// inputEl.addEventListener('input', handleInput);

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const outputElContent = outputEl.textContent;

inputEl.addEventListener("input", handleInput);

function handleInput(event) {
    let inputvalidation = 
        event.currentTarget.value > ""
        ? (outputEl.textContent = event.currentTarget.value)
        : (outputEl.textContent = outputElContent);

        return inputvalidation;
}