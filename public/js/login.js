const loginFormHandler = async (event) => {
    event.preventDefault();

      // Collect values from the login form
     const email = document.querySelector('#email-login').value.trim();
     const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);
