const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// sticky header

window.onscroll = () => {
  scrollProgress();
};

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll indicator

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progresssBar = document.querySelector(".progress");
  progresssBar.style.visibility = "visible";
  progresssBar.style.width = scrollPercentage + "%";

  // newsletter js

  const newsLetter = document.querySelector(".newsletter");
  if (scrollPercentage > 80) {
    newsLetter.style.transform = "translateX(0)";
  } else {
    newsLetter.style.transform = "translateX(-100%)";
  }

  document.querySelector(".fa-times").addEventListener("click", () => {
    newsLetter.style.transform = "translateX(-100%)";
  });
}
