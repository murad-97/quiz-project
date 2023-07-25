let answer = [
  [
    {
      id: 1,
      Question:
        "Mary is 16 years old. She is 4 times older than her brother. How old will Mary be when she is twice his age?",
      Answer: [
        { Answer: "That's impossible", value: 0 },
        { Answer: "20", value: 0 },
        { Answer: "24", value: 1 },
        { Answer: "28", value: 0 },
      ],
    },
    {
      id: 2,
      Question:
        "The store reduces the price of one product by 20 percent. How many percent do you need to raise to the percentage to get the original price?",
      Answer: [
        { Answer: "25", value: 1 },
        { Answer: "27", value: 0 },
        { Answer: "30", value: 0 },
        { Answer: "35", value: 0 },
      ],
    },
    {
      id: 3,
      Question:
        "There are 5 machines that make 5 parts in 5 minutes. How long does it take to make 100 parts on 100 machines?",
      Answer: [
        { Answer: "5", value: 1 },
        { Answer: "10", value: 0 },
        { Answer: "30", value: 0 },
        { Answer: "35", value: 0 },
      ],
    },
    {
      id: 4,
      Question:
        " There is a lake on the surface of which water lilies float. The number of lilies doubles daily. If it takes 48 days to completely occupy the entire area of the lake, how many days will it take to occupy the floor of the lake?",
      Answer: [
        { Answer: "47", value: 1 },
        { Answer: "46", value: 0 },
        { Answer: "96", value: 0 },
        { Answer: "108", value: 0 },
      ],
    },
    {
      id: 5,
      Question:
        "A car travels at a speed of 40 mph over a certain distance and then returns over the same distance at a speed of 60 mph. What is the average speed for the total journey?",
      Answer: [
        { Answer: "30 mph", value: 0 },
        { Answer: "40 mph", value: 0 },
        { Answer: "60 mph", value: 0 },
        { Answer: "48 mph", value: 1 },
      ],
    },
  ],
  [
    {
      id: 6,
      Question: "My sister and I __________ going to the park this afternoon.",
      Answer: [
        { Answer: "am", value: 1 },
        { Answer: "is", value: 0 },
        { Answer: "are", value: 0 },
        { Answer: "be", value: 0 },
      ],
    },
    {
      id: 7,
      Question:
        "The book was __________ interesting that I couldn't put it down.",
      Answer: [
        { Answer: "so", value: 1 },
        { Answer: "too", value: 0 },
        { Answer: "very", value: 0 },
        { Answer: "enough", value: 0 },
      ],
    },
    {
      id: 8,
      Question: "Identify the correct sentence:",
      Answer: [
        { Answer: "She don't like coffee.", value: 0 },
        { Answer: "They doesn't like coffee.", value: 0 },
        { Answer: "He doesn't like coffee.", value: 1 },
        { Answer: "You doesn't like coffee.", value: 0 },
      ],
    },
    {
      id: 9,
      Question: "Choose the synonym for 'abundant':",
      Answer: [
        { Answer: "Limited", value: 0 },
        { Answer: "Scarce", value: 0 },
        { Answer: "Plentiful", value: 1 },
        { Answer: "Small", value: 0 },
      ],
    },
    {
      id: 10,
      Question: "Select the correct form of the verb in the past tense:",
      Answer: [
        { Answer: "Runned", value: 0 },
        { Answer: "Running", value: 0 },
        { Answer: "Run", value: 1 },
        { Answer: "Runs", value: 0 },
      ],
    },
  ],
  [
    {
      id: 11,
      Question: "What does CSS stand for?",
      Answer: [
        { Answer: "Cascading Style Sheets", value: 1 },
        { Answer: "Creative Style Sheets", value: 0 },
        { Answer: "Colorful Style Sheets", value: 0 },
        { Answer: "Computer Style Sheets", value: 0 },
      ],
    },
    {
      id: 12,
      Question:
        "In CSS, which property is used to change the background color of an element?",
      Answer: [
        { Answer: "font-size", value: 0 },
        { Answer: "color", value: 0 },
        { Answer: "background-color", value: 1 },
        { Answer: "text-align", value: 0 },
      ],
    },
    {
      id: 13,
      Question: "Which of the following is NOT a data type in Python?",
      Answer: [
        { Answer: "int", value: 0 },
        { Answer: "str", value: 0 },
        { Answer: "bool", value: 0 },
        { Answer: "array", value: 1 },
      ],
    },
    {
      id: 14,
      Question: "What does HTML stand for?",
      Answer: [
        { Answer: "Hyperlink and Text Markup Language", value: 1 },
        { Answer: "Hypertext Markup Language", value: 0 },
        { Answer: "Hyper Transfer Markup Language", value: 0 },
        { Answer: "Home Text Markup Language", value: 0 },
      ],
    },
    {
      id: 15,
      Question:
        "Which CSS property is used to add rounded corners to an element?",
      Answer: [
        { Answer: "border-radius", value: 1 },
        { Answer: "rounded-corners", value: 0 },
        { Answer: "corner-radius", value: 0 },
        { Answer: "border-style", value: 0 },
      ],
    },
    {
      id: 16,
      Question: "What does the CSS property 'margin: 10px 5px' mean?",
      Answer: [
        {
          Answer:
            "Set a 10px margin on the top and a 5px margin on the bottom.",
          value: 1,
        },
        { Answer: "Set a 10px margin on all sides.", value: 0 },
        {
          Answer:
            "Set a 10px margin on the left and a 5px margin on the right.",
          value: 0,
        },
        {
          Answer: "Set a 10px margin on the top, bottom, left, and right.",
          value: 0,
        },
      ],
    },
    {
      id: 17,
      Question:
        "What is the correct syntax to declare a constant variable in Java?",
      Answer: [
        { Answer: "constant int x = 5", value: 1 },
        { Answer: "final int x = 5", value: 0 },
        { Answer: "const int x = 5", value: 0 },
        { Answer: "int final x = 5", value: 0 },
      ],
    },
    {
      id: 18,
      Question:
        "Which attribute is used to specify an alternate text for an image in HTML?",
      Answer: [
        { Answer: "src", value: 0 },
        { Answer: "alt", value: 1 },
        { Answer: "title", value: 0 },
        { Answer: "link", value: 0 },
      ],
    },

    {
      id: 19,
      Question:
        "Which property is used to change the font size of text in CSS?",
      Answer: [
        { Answer: "font-size", value: 1 },
        { Answer: "text-size", value: 0 },
        { Answer: "font-style", value: 0 },
        { Answer: "text-font", value: 0 },
      ],
    },
    {
      id: 20,
      Question:
        "What CSS property is used to add space between the elements' content and its border?",
      Answer: [
        { Answer: "padding", value: 1 },
        { Answer: "margin", value: 0 },
        { Answer: "border-spacing", value: 0 },
        { Answer: "space-between", value: 0 },
      ],
    },
  ],
];
var user_answer = JSON.parse(localStorage.getItem("current"));
console.log(user_answer.answer);
let user_answer_lenght = user_answer.answer.length;
// console.log(user_answer_lenght);
let time = document.querySelector("#time");
time.innerHTML = `${20 - +user_answer.time.slice(10, 12)}:${
  60 - +user_answer.time.slice(13)
}`;
document.getElementById(
  "Marks Scored"
).innerHTML = `Marks Scored : ${user_answer.mark}`;
let Final_mark = user_answer.mark;

function result(Final_mark) {
  let image_result = document.querySelector("#image-result");
  if (Final_mark >= 10) {
    let pass = document.getElementById("Final_mark");
    pass.innerHTML = "Congradulation";
    pass.style.color = "green";
  } else {
    let fail = document.getElementById("Final_mark");
    fail.innerHTML = "Failed";
    fail.style.color = "red";
    image_result.style = "display:none;";
  }
}
result(Final_mark);

/** round 1 ********************************************************* */
let correctAnswer = [];
function showanswer(answer) {
  document.getElementById("result_count").innerHTML = "";

  //to order the option A,B.C......
  function getLetterLabel(index) {
    return String.fromCharCode(65 + index);
  }

  answer.forEach((set, setIndex) => {
    // get Iq & ENG &tsch scetion
    console.log("set=", set);
    set.forEach((ele) => {
      // get Question and option in easch (Iq & ENG &tech) scetion
      console.log("ele =", ele);
      // enter inside the object

      let htmlContent = `
            <div >
              <h3 class="fw-500 fs-18 label-color-2">${ele.id}. ${ele.Question}</h3>
              <ul class="fs-16 label-color-1 lh-24 mb-0 mt-3 list-unstyled qz-ans-list">
              
            </div>
            `;

      ele.Answer.forEach((answer, answerIndex) => {
        const letterLabel = getLetterLabel(answerIndex);
        // enter inside the array for answer

        if (answer.value === 1) {
          correctAnswer.push(answer.Answer);

          htmlContent += `
                      <li class="mb-2 correct-answer">${answer.Answer}</li>
                  `;
          // fauls from JSON
        } else {
          htmlContent += `
                      <li class="mb-2 incorrect-answer">${answer.Answer}</li> 
                  `;
        }
      });

      htmlContent += `
              </ul>
          `;

      document.getElementById("result_count").innerHTML += htmlContent;
    });
  });
}
// showanswer(answer)
// console.log(  correctAnswer)

/************************* */
// add value for User_answer

function check_answer() {
  let li = document.querySelectorAll(".incorrect-answer");
  console.log(li);
  for (let j = 0; j < correctAnswer.length; j++) {
    correctAnswer[j];
    // console.log(correctAnswer[j])
    if (correctAnswer[j] === user_answer.answer[j]) {
      console.log(true);
    } else {
      console.log(false);
      li.forEach(function (ele) {
        if (ele.innerHTML === user_answer.answer[j])
          ele.style = " background-color:red";
      });
    }
  }
}
// check_answer();

const logoutFunction = () => {
  let logout_btn = document.getElementById("logout");
  logout_btn.addEventListener("click", function () {
    window.location.href = "/Html/Project.html";
  });
};

logoutFunction(); // Call the function to set up the event listener

let container = document.querySelector("#result_count");
console.log(container);
container.style = "display:none";
let ReviweAnswerbtn = document.getElementById("btn_ReviweAnswer");
ReviweAnswerbtn.addEventListener("click", () => {
  container.style = "display:block";
  showanswer(answer); // Call the showAnswer function when the button is clicked
  check_answer(); // Call the checkAnswer function when the button is clicked
});
