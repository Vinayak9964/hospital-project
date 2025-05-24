document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const errorElement = formGroup.querySelector('.error');
        errorElement.textContent = message;
    }

    // Remove error message
    function removeError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
    }

    // Validate email format
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate full name
        if (fullname.value.trim() === '') {
            showError(fullname, 'Full name is required');
            isValid = false;
        } else {
            removeError(fullname);
        }

        // Validate email
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            removeError(email);
        }

        // Validate password
        if (password.value === '') {
            showError(password, 'Password is required');
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            removeError(password);
        }

        // Validate confirm password
        if (confirmPassword.value === '') {
            showError(confirmPassword, 'Please confirm your password');
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            removeError(confirmPassword);
        }

        if (isValid) {
            // Here you would typically send the data to your server
            console.log('Form is valid, submitting...');
            // form.submit();
        }
    });

    // Real-time validation
    const inputs = [fullname, email, password, confirmPassword];
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            removeError(input);
        });
    });
});