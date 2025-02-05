document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    let valid = true;

    // Username Validation (Should not be empty)
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        valid = false;
    }

    // Email Validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email (e.g., user@example.com).";
        valid = false;
    }

    // Phone Number Validation (Only numbers, 10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
        valid = false;
    }

    // Password Validation (At least 7 characters, 1 uppercase, 1 digit, 1 special character)
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 7 characters, with 1 uppercase, 1 digit, and 1 special character (&, $, #, @).";
        valid = false;
    }

    // Confirm Password Validation (Should match password)
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});
