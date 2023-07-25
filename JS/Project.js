let buttonstart = document.getElementById("start");
//  write from Mohhammed in log in psge 
function login() {
    // Your login logic here
   
    return false;
}

buttonstart.addEventListener("click", () => {
    if (!login()) {
        buttonstart.innerHTML = `<a href="/Html/login.html">Start Quiz</a>`;
    } else {
        buttonstart.innerHTML = `<a href="/Html/Welcom.html">Start Quiz</a>`;
    }
});