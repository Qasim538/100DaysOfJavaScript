const password = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

let timeout;

eyeIcon.addEventListener("click", () => {
    if (eyeIcon.classList.contains("fa-eye")) {
        password.setAttribute("type", "text");
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");

        // Clear any existing timeout to avoid conflicts
        if (timeout) {
            clearTimeout(timeout);
        }

        // Set a timeout to revert the changes after 5 seconds
        timeout = setTimeout(() => {
            password.setAttribute("type", "password");
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        }, 5000);
    } else {
        // Clear the timeout if the icon is clicked again before 5 seconds
        clearTimeout(timeout);
        password.setAttribute("type", "password");
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
});
