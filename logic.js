function submitForm() {
    // Resetting previous error messages
    resetErrorMessages();

    // Fetching form values
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    // var gender = document.querySelector('input[name="gender"]:checked');

    // Validating each field
    if (firstName.value === "" || firstName.value.length < 3) {
        displayErrorMessage("firstnameError", "First Name is required and must be of min 3 characters");
        return; 
    }
    
    if (lastName.value === "") {
        displayErrorMessage("lastnameError", "Last Name is required and must be of min 3 characters");
        return;
    }

    if (email.value === "") {
        displayErrorMessage("emailError", "Email Address is required");
        return;
    }

    // Validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        displayErrorMessage("emailError", "Please enter a valid email address");
        return;
    }

    if (dob.value === "") {
        displayErrorMessage("dobError", "Date of Birth is required");
        return;
    }

    // Validating date of birth
    var currentDate = new Date();
    var selectedDate = new Date(dob.value);

    if (selectedDate > currentDate) {
        displayErrorMessage("dobError", "Please enter a valid date of birth");
        return;
    }

    // if (!gender) {
    //     displayErrorMessage("genderError", "Gender is required");
    //     return;
    // }

    // If all validations pass, you can proceed with form submission or other actions
    alert("Form submitted successfully!");
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function resetErrorMessages() {
    // Resetting error messages for all fields
    var errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}
