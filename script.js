(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-4YCPERINHU7C-2");
function login(event, form) {
  event.preventDefault(); // Prevent the form from submitting immediately

  let valid = true;

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Clear previous error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  // Validate email
  if (!email.value) {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!validateEmail(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate password
  if (!password.value) {
    passwordError.textContent = 'Password is required.';
    valid = false;
  }

  // If valid, redirect to the home page
  if (valid) {
    window.location.href='Homepage.html';
    var e = email.toString()
    //passing user and account objects:
   // let a = document.getElementById("email").value;
   // var b="";
   // b= a.substr(0,5);
aptrinsic("identify",
{
//User Fields
  "id": e, // Required for logged in app users
  "email": email,
},
{
//Account Fields
  "id":"IBM", //Required
  "name":"International Business Machine",
});
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
