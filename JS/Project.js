let buttonstart = document.getElementById("start");
//  write from Mohhammed in log in psge 
function login() {
    // Your login logic here
   
    return true;
}

buttonstart.addEventListener("click", () => {
    if (!login()) {
        alert("Please login to start the quiz");
    } else {
        
        buttonstart.innerHTML = `<a href="/Html/Welcom.html">Start Quiz</a>`;
    }
});