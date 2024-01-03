const searchForm = document.querySelector("#search-form")
const searchInput = document.querySelector("#search-input")

const speechBtnDiv = document.querySelector("#speech-btn")
const micBtn = document.querySelector(".btn .fas")
const instruction = document.querySelector(".instruction")

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  // Check for browser support

  if (SpeechRecognition) {
    console.log("speech Recognition Supported");

    const recognition = new SpeechRecognition();
    micBtn.addEventListener("click", micBtnClicked);

    function micBtnClicked(e) {
      e.preventDefault();
      if (micBtn.classList.contains("fa-microphone")) {
        recognition.start();
      } else {
        recognition.stop();
      }
    }

// Start Speech Recognition

    recognition.addEventListener("start", () => {
      micBtn.classList.remove("fa-microphone");
      micBtn.classList.add("fa-microphone-slash");
      instruction.textContent = "Recording...";
      searchInput.focus();
      console.log("Speech Recognition Enabled")
    });
// Stop Speech Recognition
    recognition.addEventListener("end", () => {
      micBtn.classList.remove("fa-microphone-slash");
      micBtn.classList.add("fa-microphone");
      searchInput.focus();
      instruction.textContent = "Click the Mic icon to start";
      console.log("Speech Recognition Desabled")

    });

 // Result of Speech Recognition
 recognition.continuous = true;
 let content = ""
    recognition.addEventListener("result", (e) => {
      console.log(e);
      const current = e.resultIndex;
      const transcript = e.results[current][0].transcript;
      content += transcript;
      searchInput.value = content;
      searchInput.focus();

    });



  } else {
    console.log("speech Recognition NOT Supported");
    speechBtnDiv.style.visibility = "hidden"

  }