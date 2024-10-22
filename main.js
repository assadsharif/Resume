var signUpButton = document.querySelector('button a[href="#"]:first-of-type');
var signInButton = document.querySelector('button a[href="#"]:last-of-type');
signUpButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('SignUp button clicked! Redirecting to SignUp page...');
});
signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('SignIn button clicked! Redirecting to SignIn page...');
});
