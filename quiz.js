let option = document.querySelector(".option");
// let input = document.getElementById("first");

let qCount = 0;
let testCount = 0;
let next = document.querySelector(".next");
let title = document.querySelector("#h3");
function getquestions() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let dataObj = JSON.parse(this.responseText);
      display(dataObj[testCount][qCount]);
      next.addEventListener("click", () => {
        qCount++;
        if (testCount !== 2) {
          if (qCount === 5) {
            testCount++;
            qCount = 0;
          }
        } else {
          if (qCount === 10) {


          }
        }
        display(dataObj[testCount][qCount]);
        checkanswer();
      });
    }
  };
  request.open("GET", "message.json", true);
  request.send();
}

getquestions();

arrayOfAwnsers = [];
function checkanswer() {
  let input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      arrayOfAwnsers.push(input[i].value);
    }
  }
  console.log(qCount);
  console.log(testCount);
}



function display(arr) {
  title.innerHTML = `${arr.Question}`;
  option.innerHTML = `<div>
  <input
    name="option"
    id="first"
    type="radio"
    value="${arr.Answer[0].Answer}" />
  <span class="background">A</span>
  <label for="first">${arr.Answer[0].Answer}</label>
</div>
<div>
  <input
    name="option"
    id="second"
    type="radio"
    value=${arr.Answer[1].Answer} />
  <span class="background">B</span>
  <label for="second">${arr.Answer[1].Answer}</label>
</div>
<div>
  <input
    name="option"
    id="third"
    type="radio"
    value="${arr.Answer[2].Answer}" />
  <span class="background">C</span>
  <label for="third">${arr.Answer[2].Answer}</label>
</div>
<div>
  <input
    name="option"
    id="fourth"
    type="radio"
    value="${arr.Answer[3].Answer}" />
  <span class="background">D</span>
  <label for="fourth">${arr.Answer[3].Answer}</label>
</div>`;
}
