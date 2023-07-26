
  if (localStorage.getItem("userInfo") == null) {
    localStorage.setItem("userInfo", "[]");
  }


const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{6,15}$/;

  const email = document.getElementById("email").value;
  const passwordInput = document.getElementById("new-password").value;
  const reenterPassword = document.getElementById("confirm-password").value;
  const nameInput = document.getElementById("name").value;

  if (!nameInput.match(namePattern)) {
    alert("Invalid name format!");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email format!");
    return;
  }
  // const registeredUsers = JSON.parse(localStorage.getItem("userInfo"));
  // const existingUser = registeredUsers.find(
  //   (user) => user.email === email.value
  // );
  // if (existingUser) {
  //   alert("Email already registered. Please use a different email.");
  //   return;
  // }

  if (!passwordInput.match(passwordPattern)) {
    alert(
      "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter!"
    );
    return;
  }

  if (passwordInput !== reenterPassword) {
    alert("Passwords do not match!");
    return;
  }

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let status = false;
  for (let i = 0; i < userInfo.length; i++) {
    if (email == userInfo[i].email) {
      alert("used email");
      status = true;
    }
  }
  if (status == false) {
    const newUser = {
      email: email,
      name: nameInput,
      password: passwordInput,
    };

    userInfo.push(newUser);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "/Html/login.html";
  }

  // registeredUsers.push(newUser);
  // console.log(registeredUsers);
  // Clear the form fields after submission
  //registerForm.reset();
  // localStorage.setItem("userInfo", JSON.stringify(registeredUsers));
});
//  const storeData=(localStorage.getItem('userInfo'))
//  console.log(storeData)

//console.log(JSON.stringify(registeredUsers));
