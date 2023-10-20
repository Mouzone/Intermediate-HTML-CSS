document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const userPhoneInput = document.getElementById("user_phone");
    const userPasswordInput = document.getElementById("user_password");
    const confirmUserPasswordInput = document.getElementById("confirm_user_password");

    form.addEventListener("submit", function (event) {
        if (!isPhoneNumberValid(userPhoneInput.value)) {
            event.preventDefault(); // Prevent form submission if phone number is invalid
            userPhoneInput.classList.add(":invalid")
            return;
        }

        if (userPasswordInput.value !== confirmUserPasswordInput.value) {
            event.preventDefault(); // Prevent form submission if passwords do not match
            userPasswordInput.classList.add(":invalid")
            confirmUserPasswordInput.classList.add(":invalid")
            return;
            }
    });

    function isPhoneNumberValid(phoneNumber) {
        regex='/^\d{3}-\d{3}-\d{4}$/'
        if (regex.test(phoneNumber)) {
            return true
        } else {
            userPhoneInput.classList.add(":invalid")
            return false;
        }

    }
});
