let buttonstart = document.getElementById("start");
//  write from Mohhammed in log in psge 


function goToLogin() {
    window.location.href = "../Html/login.html";
}

function goToSignUp() {
    window.location.href = "../Html/register.html";
}

buttonstart.addEventListener("click", () => {
    // if (!login()) {
    //     buttonstart.innerHTML = `<a href="/Html/login.html">Start Quiz</a>`;
    // } else {
    //     buttonstart.innerHTML = `<a href="/Html/Welcom.html">Start Quiz</a>`;
    // }
    window.location.href = "/Html/login.html"
});