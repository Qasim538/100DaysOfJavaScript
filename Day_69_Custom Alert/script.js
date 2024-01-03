const main = document.querySelector(".main")
const alertBox = document.querySelector(".alert")
const exclamtionIcon = document.querySelector(".fa-exclamation-circle")
const msg = document.querySelector(".msg")
const closeBtn = document.querySelector(".close-btn")
const closeIcon = document.querySelector(".fa-times")


// show alert class

class ShowAlert {
  constructor(state, borderColor, color) {
    this.state= state;
    this.borderColor = borderColor;
    this.color = color
  }

  trigger(message) {
    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamtionIcon.style.color = this.color;
    closeIcon.style.color = this.color;

    alertBox.classList.add("show")
    alertBox.classList.remove("hide")

    setTimeout(() => {
      alertBox.classList.remove("show")
      alertBox.classList.add("hide")
    },5000) 

    closeBtn.addEventListener("click", () => {
      alertBox.classList.remove("show")
      alertBox.classList.add("hide")
    })
  }
}


const warning = new ShowAlert("#ffdb9b", "#ffa502", "ce8500")
const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24")

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    danger.trigger("Alert: This is dangerous alert!")
  } else if ( e.target.classList.contains("btn-warning") ) {
    warning.trigger("Alert: This is Warning alert!")
  }
})
