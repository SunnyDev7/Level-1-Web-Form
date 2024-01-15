function submitForm() {
    // Resetting previous error messages
    resetErrorMessages();

    // Fetching form values
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var gender = document.getElementById("gender");

    // Validating each field
    if (firstName.value === "" || firstName.value.length < 3) {
        displayErrorMessage("firstnameError", "First Name is required and must be of min 3 characters");
        return; 
    }else {
        clearErrorMessage("firstnameError");
    }
    
    if (lastName.value === "" || firstName.value.length < 3) {
        displayErrorMessage("lastnameError", "Last Name is required and must be of min 3 characters");
        return;
    }else {
        clearErrorMessage("lastnameError");
    }

    if (email.value === "") {
        displayErrorMessage("emailError", "Email Address is required");
        return;
    }else {
        clearErrorMessage("emailError");
    }

    // Validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        displayErrorMessage("emailError", "Please enter a valid email address");
        return;
    } else {
        clearErrorMessage("emailError");
    }

    if (dob.value === "") {
        displayErrorMessage("dobError", "Date of Birth is required");
        return;
    } else {
        clearErrorMessage("dobError");
    }

    // Validating date of birth
    var currentDate = new Date();
    var selectedDate = new Date(dob.value);

    if (selectedDate > currentDate) {
        displayErrorMessage("dobError", "Please enter a valid date of birth");
        return;
    } else {
        clearErrorMessage("dobError");
    }

    if (gender.options[document.getElementById("gender").selectedIndex].textContent == " ") {
        displayErrorMessage("genderError", "Gender is a required field");
        return;
    } else {
        clearErrorMessage("genderError");
    }

    //If all the validation pass, store form values in local storage
    var data = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
        "dob": dob.value,
        "gender": gender.value
    };

    console.log("Form Data:", data)

    localStorage.setItem("data", JSON.stringify(data));

    alert("Form submitted successfully!");

    resetFormValues();
}

function resetFormValues() {
    // Resetting form values to empty state
    var form = document.querySelector('form');
    form.reset();
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrorMessage(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = ""; 
}

function resetErrorMessages() {
    // Resetting error messages for all fields
    var errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}