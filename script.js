document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    // Hardcoded password (replace with secure server-side validation)
    const correctPassword = "scambusters123";

    if (enteredPassword === correctPassword) {
        alert("Access granted!");
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYH_a1WojCnwy_qVJXPq5zR_ARUgpzcRdisZ66nmCsCnpubg/viewform?usp=header "; // Replace with the target site URL
    } else {
        alert("Incorrect password. Please try again.");
        passwordInput.value = ""; // Clear the password field
        passwordInput.focus(); // Focus back on the password field
    }
});
