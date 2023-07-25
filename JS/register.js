const registeredUsers = [];
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;

  const email = document.getElementById("email").value;
  const passwordInput = document.getElementById("new-password").value;
  const reenterPassword = document.getElementById("confirm-password").value;
  const nameInput = document.getElementById("name").value;
  if (!nameInput.match(namePattern)) {
    alert("Invalid name format!");
    nameInput.value = "";
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email format!");
    email = "";
    return;
  }

  if (!passwordInput.match(passwordPattern)) {
    alert(
      "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter!"
    );
    passwordInput.value = "";
    return;
  }

  if (passwordInput !== reenterPassword) {
    alert("Passwords do not match!");
    reenterPassword.value = "";
    return;
  }

  const newUser = {
    email: email,
    name: nameInput,
    password: passwordInput,
  };
  registeredUsers.push(newUser);
  console.log(registeredUsers);
  // Clear the form fields after submission
  //registerForm.reset();
  localStorage.setItem("userInfo", JSON.stringify(registeredUsers));
  window.location.href = "/Html/login.html";
});
const storeData = localStorage.getItem("userInfo");
console.log(storeData);

//console.log(JSON.stringify(registeredUsers));
