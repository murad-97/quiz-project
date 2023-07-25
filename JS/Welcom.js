// let y = [
//     { name: "Mohammed Bani Salah", Password: "shatha1234" },
//     { name: "Sara", Password: "shatha1234" },
//     { name: "Lama", Password: "shatha1234" },
//     { name: "Shatha Rabdd", Password: "shatha1234" }
// ];

let startNow = document.getElementById("parag1");
let button = document.getElementById("start1");
let welcome = document.getElementById("Welcome");

window.addEventListener("load", () => {
    // Display the name 
    // startNow.textContent = y[y.length - 1].name;
    let currentUser = 'Shatha Rababah';
    startNow.textContent = currentUser;
    

    


    if (localStorage.getItem("completedUsers") == null) {
        let completedUsers2 = [];
        localStorage.setItem("completedUsers",JSON.stringify(completedUsers2));
    }


    


    button.addEventListener("click", () => {
        let myArray = JSON.parse(localStorage.getItem("completedUsers"));
        let w = false;
        for (let i = 0; i < myArray.length; i++) {
            if (currentUser == myArray[i]) {
                welcome.textContent = "You're complete it";
                window.location.href ="/Html/result.html";
                w = true
            }      
            
        }

        if (w == false) {
              myArray.push(currentUser);
                localStorage.setItem("completedUsers",JSON.stringify(myArray));
                window.location.href="/Html/quiz.html";
        }





        
        
        // if (x == y[y.length - 1].name) {
        //     completedUsers.push(x);
        //     localStorage.setItem("completedUsers1", JSON.stringify(completedUsers));
        //     button.innerHTML = `<a href="dhjs">kkf</a>`;
        //  
        //     button.style.display = "none";
        // }
    });
});