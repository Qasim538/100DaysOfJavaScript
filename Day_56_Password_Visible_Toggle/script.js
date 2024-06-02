const password = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

eyeIcon.addEventListener("click", () => {
    if (eyeIcon.classList.contains("fa-eye")) {
        password.setAttribute("type", "text");
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        // Change password input type back to password after 5 seconds
            password.setAttribute("type", "password");
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
});
