document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const userPhoneInput = document.getElementById("user_phone");
        const userPasswordInput = document.getElementById("user_password");
        const confirmUserPasswordInput = document.getElementById("confirm_user_password");

        if (!isPhoneNumberValid(userPhoneInput.value)) {
            event.preventDefault(); // Prevent form submission if phone number is invalid
            userPhoneInput.classList.add("invalid");

            // Create and append the error message
            displayErrorMessage(userPhoneInput, 'Invalid phone number');

            return;
        } else {
            userPhoneInput.classList.remove("invalid");
            removeErrorMessage(userPhoneInput);
        }

        if (userPasswordInput.value !== confirmUserPasswordInput.value) {
            event.preventDefault(); // Prevent form submission if passwords do not match
            userPasswordInput.classList.add("invalid");
            confirmUserPasswordInput.classList.add("invalid");

            // Create and append the error message
            displayErrorMessage(userPasswordInput, 'Passwords do not match');

            return;
        } else {
            userPasswordInput.classList.remove("invalid");
            confirmUserPasswordInput.classList.remove("invalid");
            removeErrorMessage(userPasswordInput);
        }
    });

    function isPhoneNumberValid(phoneNumber) {
        // Implement phone number validation logic here
        // Return true if valid, false otherwise
        return /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber); // Assuming "###-###-####" format
    }

    function displayErrorMessage(inputElement, message) {
        const errorContainer = inputElement.parentElement.querySelector('.error-message');
        if (errorContainer) {
            errorContainer.textContent = message;
        } else {
            const error_message = document.createElement('div');
            error_message.classList.add('error-message');
            error_message.textContent = message;
            inputElement.parentElement.appendChild(error_message);
        }
    }

    function removeErrorMessage(inputElement) {
        const errorContainer = inputElement.parentElement.querySelector('.error-message');
        if (errorContainer) {
            errorContainer.remove();
        }
    }
});
