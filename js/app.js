const faqTogglers = [...document.querySelectorAll(".faq__toggler")];
const faqItems = [...document.querySelectorAll(".faq__body")];
const mobileNavToggler = document.querySelector(".mobile-nav__toggler");
const mobileNavDetails = document.querySelector(".mobile-nav__details");
const overlay = document.querySelector(".mobile-nav__overlay");
const body = document.querySelector("body");

function toggleQuestion() {
  let btnClicked = faqTogglers.indexOf(this);

  faqItems[btnClicked].classList.toggle("is-open");

  this.classList.toggle("is-rotated");
}

// set nav state
let isNavOpen = false;

const toggleNav = () => {
  if (!isNavOpen) {
    mobileNavToggler.innerHTML = `<img src="assets/icons/close.svg" alt="nav close icon" />`;
    mobileNavDetails.style.display = "flex";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    mobileNavToggler.innerHTML = `<img src="assets/icons/hamburger.svg" alt="nav open hamburger" />`;
    mobileNavDetails.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "scroll";
  }

  isNavOpen = !isNavOpen;
};

console.log(mobileNavDetails);

// Event Listeners

faqTogglers.forEach((toggle) =>
  toggle.addEventListener("click", toggleQuestion)
);

mobileNavToggler.addEventListener("click", toggleNav);
