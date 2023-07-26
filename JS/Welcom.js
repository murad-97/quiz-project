// let y = [
//     { name: "Mohammed Bani Salah", Password: "shatha1234" },
//     { name: "Sara", Password: "shatha1234" },
//     { name: "Lama", Password: "shatha1234" },
//     { name: "Shatha Rabdd", Password: "shatha1234" }
// ];

let startNow = document.getElementById("parag1");
let button = document.getElementById("start1");
let welcome = document.getElementById("Welcome");
let current = JSON.parse(localStorage.getItem("current"));
console.log(current);

// Display the name
// startNow.textContent = y[y.length - 1].name;

startNow.textContent = current.name;

if (localStorage.getItem("completedUsers") == null) {
  let completedUsers2 = [];
  localStorage.setItem("completedUsers", JSON.stringify(completedUsers2));
}

button.addEventListener("click", () => {
  let myArray = JSON.parse(localStorage.getItem("completedUsers"));
  let w = false;
  for (let i = 0; i < myArray.length; i++) {
    if (current.name == myArray[i]) {
      welcome.textContent = "You're complete it";
      setTimeout((  window.location.href = "/Html/result.html"),1000);
      w = true;
    }
  }

  if (w == false) {
    myArray.push(current.name);
    localStorage.setItem("completedUsers", JSON.stringify(myArray));
    window.location.href = "/Html/quiz.html"
  }
});
