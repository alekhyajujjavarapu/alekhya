(function(n, t, a, e, co) {
  var i = "aptrinsic";
  n[i] = n[i] || function() {
    (n[i].q = n[i].q || []).push(arguments)
  };
  n[i].p = e;
  n[i].c = co;
  var r = t.createElement("script");
  r.async = !0;
  r.src = a + "?a=" + e;
  var c = t.getElementsByTagName("script")[0];
  c.parentNode.insertBefore(r, c);
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-4YCPERINHU7C-2");

function login(event, form) {
  event.preventDefault(); // Prevent the form from submitting immediately

  let valid = true;

  var email = document.getElementById('email').value;
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

  // If valid, proceed with identifying the user and redirecting to the home page
  if (valid) {
    // Extract email value correctly
    const emailValue = email.value;
    
    // Pass user and account objects to aptrinsic identify
    aptrinsic("identify",
      {
        // User Fields
        "id": email, // Required for logged in app users
        "email": email,
        "role": "support analyst",
      },
      {
        // Account Fields
        "id": "IBM", // Required
        "name": "International Business Machine",
        "healthScore": 90
      },
    );
    console.log("Identify call made with email:", email);
    //console.log("healthScore set to:", 90);

    // Redirect to the home page
    window.location.href = 'Homepage.html';
  }
}
function deleteAllCookies() {
  console.log("deleting cookies...");
  aptrinsic('reset');
  // counter = 0;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
//dup tag
// (function(n, t, a, e, co) {
//   var i = "aptrinsic";
//   n[i] = n[i] || function() {
//     (n[i].q = n[i].q || []).push(arguments)
//   };
//   n[i].p = e;
//   n[i].c = co;
//   var r = t.createElement("script");
//   r.async = !0;
//   r.src = a + "?a=" + e;
//   var c = t.getElementsByTagName("script")[0];
//   c.parentNode.insertBefore(r, c);
// })(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-4YCPERINHU7C-2");

function login(event, form) {
  event.preventDefault(); // Prevent the form from submitting immediately

  let valid = true;

  const email = document.getElementById('email').value;
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

  // If valid, proceed with identifying the user and redirecting to the home page
  if (valid) {
    // Extract email value correctly
    const emailValue = email.value;
    
    // Pass user and account objects to aptrinsic identify
    aptrinsic("identify",
      {
        // User Fields
        "id": email, // Required for logged in app users
        "email": email,
        "role": "support analyst",
      },
      {
        // Account Fields
        "id": "IBM", // Required
        "name": "International Business Machine",
        "healthScore": 90
      },
    );
    console.log("Identify call made with email:", emailValue);
    console.log("healthScore set to:", 90);

    // Redirect to the home page
    window.location.href = 'Homepage.html';
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

