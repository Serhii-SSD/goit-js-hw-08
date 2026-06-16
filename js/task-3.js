const inputer = document.querySelector('input#name-input');
const output = document.querySelector("span#name-output");
inputer.addEventListener("input", (event) => {
    const trimmed = event.currentTarget.value.trim();
if (trimmed === "") { output.textContent = "Anonymous" }
    else { output.textContent = trimmed }
});