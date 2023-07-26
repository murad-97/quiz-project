let option = document.querySelector(".option");
// let input = document.getElementById("first");
let container = document.querySelector(".container");
let qc = document.querySelector(".numofquestion2");
let allqc = document.querySelector(".numofquestion");
let titl = document.querySelector("#title");

let mark = 0;
let qCount = 0;
let testCount = 0;
let allQCount = 1;
let next = document.querySelector(".next");
let title = document.querySelector("#h3");
function getquestions() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let dataObj = JSON.parse(this.responseText);
      console.log(dataObj);
      display(dataObj[testCount][qCount]);
      allqc.innerHTML = `<i class="fa fa-question" aria-hidden="true"></i>${allQCount} of 20 Question`;
      questionCounter();

      next.addEventListener("click", () => {
        popup();
        let input = document.querySelectorAll("input");
        if (
          input[0].checked ||
          input[1].checked ||
          input[2].checked ||
          input[3].checked
        ) {
          qCount++;
          allQCount++;
          allqc.innerHTML =
            `<i class="fa fa-question" aria-hidden="true"></i>` +
            ` ${allQCount} of 20 Question`;
          if (testCount !== 2) {
            if (qCount === 5) {
              testCount++;
              qCount = 0;
            }
            checkanswer();
            questionCounter();
            display(dataObj[testCount][qCount]);
          } else {
            if (qCount === 10) {
              checkanswer();

              finished();
            } else if (qCount < 10) {
              questionCounter();
              checkanswer();
              display(dataObj[testCount][qCount]);
            }
          }
        } else {
          var modal = document.getElementById("myModal");

          var span = document.getElementsByClassName("close")[0];

          modal.style.display = "block";

          span.onclick = function () {
            modal.style.display = "none";
          };
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
        }
      });
    }
  };
  request.open("GET", "/Json/message.json", true);
  request.send();
}

getquestions();

function finished() {
  let time = document.querySelector(".time");
  container.innerHTML = `<h1 id="h1">you are finished</h1>
  <button id="finished">submit your answer</button>`;
  let finish = document.querySelector("#finished");
  finish.addEventListener("click", () => {
    let current = JSON.parse(localStorage.getItem("current"));
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(current);
    console.log(userInfo);
    userInfo.forEach((element) => {
      if (element.email === current.email) {
        element.answer = arrayOfAwnsers;
        current.answer = arrayOfAwnsers;
        element.mark = mark;
        current.mark = mark;
        element.time = time.textContent;
        current.time = time.textContent;
      }
    });

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("current", JSON.stringify(current));

    window.location.href = "../Html/result.html";
  });
}
arrayOfAwnsers = [];
function checkanswer() {
  let input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      arrayOfAwnsers.push(input[i].value);
      mark += parseInt(input[i].getAttribute("mark"));
    }
  }
}

function display(arr) {
  title.innerHTML = `${arr.Question}`;
  option.innerHTML = `<input type="radio" id="first" mark=${arr.Answer[0].value} name="option" value="${arr.Answer[0].Answer}">
  <label for="first">${arr.Answer[0].Answer}</label>
  <input type="radio" id="second" name="option" mark="${arr.Answer[1].value}" value="${arr.Answer[1].Answer}">
  <label for="second">${arr.Answer[1].Answer}</label>
  <input type="radio" id="third" name="option" mark="${arr.Answer[2].value}" value="${arr.Answer[2].Answer}">
  <label for="third">${arr.Answer[2].Answer}</label>
  <input type="radio" id="fourth" name="option" mark="${arr.Answer[3].value}" value="${arr.Answer[3].Answer}">
  <label for="fourth">${arr.Answer[3].Answer}</label>`;
}

function questionCounter() {
  if (testCount === 0) {
    qc.innerHTML = `<i class="fa fa-question" aria-hidden="true"></i>${
      qCount + 1
    } of 5`;
  } else if (testCount === 1) {
    qc.innerHTML = `<i class="fa fa-question" aria-hidden="true"></i>${
      qCount + 1
    } of 5`;
  } else if (testCount === 2) {
    qc.innerHTML = `<i class="fa fa-question" aria-hidden="true"></i>${
      qCount + 1
    } of 10`;
  }
}

function popup() {
  if (testCount === 0 && qCount === 4) {
    titl.innerHTML = "English Test";
    var modal1 = document.getElementById("myModal1");
    console.log(modal1);
    var span1 = document.getElementById("IQ");

    modal1.style.display = "block";

    span1.onclick = function () {
      modal1.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    };
  } else if (testCount === 1 && qCount === 4) {
    titl.innerHTML = "technical Test";
    var modal2 = document.getElementById("myModal2");

    var span2 = document.getElementById("technical");

    modal2.style.display = "block";

    span2.onclick = function () {
      modal2.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    };
  }
}

var time = document.querySelector(".time");

var sec = 1200,
  secpass,
  countDown = setInterval(function () {
    "use strict";

    secpass();
  }, 1000);

function secpass() {
  "use strict";

  var min = Math.floor(sec / 60),
    remSec = sec % 60;

  if (remSec < 10) {
    remSec = "0" + remSec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  time.innerHTML =
    `<i class="fa fa-clock-o" aria-hidden="true"></i>` +
    "Time left:" +
    min +
    ":" +
    remSec;

  if (sec > 0) {
    sec = sec - 1;
  } else {
    clearInterval(countDown);
  }
}
