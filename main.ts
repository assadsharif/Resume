
const signUpButton = document.querySelector('button a[href="#"]:first-of-type') as HTMLAnchorElement;
const signInButton = document.querySelector('button a[href="#"]:last-of-type') as HTMLAnchorElement;


signUpButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  alert('SignUp button clicked! Redirecting to SignUp page...');
});

signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  alert('SignIn button clicked! Redirecting to SignIn page...');
});
 