function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple email validation (you can extend this)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
        errorMessage.textContent = "Please enter a valid 10-digit phone number.";
        return false;
    }

    // Validate password length
    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    // Clear error message on successful validation
    errorMessage.textContent = "";

    // Submit form
    alert("Sign-up successful!");
    return true;
}
