function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;

  if (!name || !email || !pass)
    return alert("Please fill all fields!");

  localStorage.setItem("user", JSON.stringify({ name, email, pass }));

  alert("Signup successful! Now Sign In.");
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user)
    return alert("No account found. Please Sign Up first!");

  if (email === user.email && pass === user.pass) {
    alert("Login successful!");
    window.location.href = "home.html"; // Next page
  } else {
    alert("Incorrect Email or Password");
  }
}
