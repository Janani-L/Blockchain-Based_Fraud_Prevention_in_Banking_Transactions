function validateLoginForm() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if login is a valid email or phone number (basic validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(login) && !phonePattern.test(login)) {
        errorMessage.textContent = "Please enter a valid email or 10-digit phone number.";
        return false;
    }

    // Validate password (at least 8 characters)
    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    // Clear error message if everything is valid
    errorMessage.textContent = "";

    // If valid, proceed with login (this is where you'd call your blockchain API for authentication)
    alert("Login successful!");

    return true;
}
