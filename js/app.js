const faqTogglers = [...document.querySelectorAll(".faq__toggler")];
const faqItems = [...document.querySelectorAll(".faq__body")];

function toggleQuestion() {
  let btnClicked = faqTogglers.indexOf(this);

  faqItems[btnClicked].classList.toggle("is-open");

  this.classList.toggle("is-rotated");
}

faqTogglers.forEach((toggle) =>
  toggle.addEventListener("click", toggleQuestion)
);
