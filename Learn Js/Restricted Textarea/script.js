const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = 250;

textarea.addEventListener("input", () => {
  let currentLength = textarea.value.length;

  counter.textContent = `${currentLength} / ${maxLength}`;

  if (currentLength >= maxLength) {
    textarea.classList.add("limit");
    counter.classList.add("limit");
    textarea.value = textarea.value.substring(0, maxLength); // Prevent extra input
  } else {
    textarea.classList.remove("limit");
    counter.classList.remove("limit");
  }
});
