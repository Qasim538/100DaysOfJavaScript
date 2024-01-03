const toggleDarkMode = document.querySelector(".toggle-darkmode")
const toggleText = document.querySelector(".toggle-text")

let darkMode = localStorage.getItem("darkMode")

// set Dark Mode

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "Light";
    localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode

const desableDarkMode = () => {
    document.body.classList.remove("darkmode");
    toggleText.textContent = "Dark";
    localStorage.setItem("darkMode", null)
}

// Save DarkMode History

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        desableDarkMode()
    }
})