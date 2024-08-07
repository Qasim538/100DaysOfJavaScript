(function () {
  const items = document.querySelectorAll(".timeline li");

  function isElementInView(el) {
    let rect = el.getBoundingClientRect();
   return(
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function slideIn() {
  for (let i = 0; i < items.length; i++) {
    if (isElementInView(items[i])) {
      items[i].classList.add("slide-in") 
    } 
  }
}

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
})();