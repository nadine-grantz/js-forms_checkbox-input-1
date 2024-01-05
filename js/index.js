console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);

  // const firstName = data.firstName;
  // event.target.element.firstName.focus; // setzt den curser nach dem submit wieder in den firstName

  // Lösungsvorschlag 1:
  // if (!tosCheckbox.checked) {
  //   showTosError();
  //   return;
  // } else {
  //   hideTosError();
  // }

  // Lösungsvorschlag 2:
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
  alert("Formular abgeschickt"); // es erscheint ein pop up für den user
});

hideTosError(); // die Message wird immer "versteckt"
