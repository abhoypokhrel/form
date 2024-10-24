document.getElementById('stylishForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous error messages
    const errorFields = ['firstName', 'lastName', 'email', 'phone', 'subject', 'password'];
    errorFields.forEach(field => {
        document.getElementById(`${field}Error`).innerText = '';
    });

    // Validate form fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;

    if (firstName === '') {
        document.getElementById('firstNameError').innerText = 'First Name is required.';
        isValid = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Last Name is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Email is not valid.';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').innerText = 'Phone Number is required.';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').innerText = 'Subject is required.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form data to a server here
    }
});
