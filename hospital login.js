// Function to validate the login form
function validateForm(event) {
    event.preventDefault();
    
    // Get form elements
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    // Reset error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    
    let isValid = true;
    
    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        usernameError.style.display = 'block';
        isValid = false;
    }
    
    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Here you would typically make an API call to your backend
        // For demonstration, we'll just show a success message
        alert('Login successful!');
        // You can redirect to the dashboard or home page
        // window.location.href = 'dashboard.html';
    }
    
    return false;
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add input event listeners for real-time validation
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    usernameInput.addEventListener('input', function() {
        const usernameError = document.getElementById('usernameError');
        if (this.value.trim() !== '') {
            usernameError.style.display = 'none';
        }
    });
    
    passwordInput.addEventListener('input', function() {
        const passwordError = document.getElementById('passwordError');
        if (this.value.trim() !== '') {
            passwordError.style.display = 'none';
        }
    });
});