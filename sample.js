var mainContainer = document.querySelector(".main-container");
var btn = document.querySelector(".btn");
var mainEl = document.querySelector(".main");
var timeEl = document.querySelector(".timer");
var currentQuestion = 0;
var time = 90;

var questions = [
    {
        question: "What is your name?",
        choices: ["Dennis", "Ken", "John", "paul"],
        choice: "Dennis"
    },
    {
        question: "What is your lastname?",
        choices: ["Dennis", "Ken", "Itua", "paul"],
        choice: "Itua"
    },
    {
        question: "What is your age?",
        choices: ["14", "9", "54", "18"],
        choice: "18"
    },
    {
        question: "What is the color of your car",
        choices: ["Pinks", "Black", "Sonic Grey", "Blue"],
        choice: "Sonic Grey"
    }
]
// in this function i am grabbing elements to hide when the addEventListener is ran. There is also a for loop to loop through the four choice buttons
function displayQuestions () {
    mainEl.classList.add("hide")
    displayTime();
    var getCurrQuest = questions[currentQuestion];
    var h1El = document.createElement("h1");
    h1El.innerHTML = getCurrQuest.question;
    mainContainer.appendChild(h1El);
    for (let i = 0; i < getCurrQuest.choices.length; i++) {
        var choicesBtn = document.createElement("button");
        choicesBtn.innerHTML = getCurrQuest.choices[i]
        mainContainer.appendChild(choicesBtn);
    }
    //console.log(getCurrQuest)
}

btn.addEventListener("click", displayQuestions);

function getChoices (event) {
    var getCurrQuest = questions[currentQuestion];
    var element = event.target.innerHTML;
    if(element) {
        currentQuestion++;
        console.log(currentQuestion)
        document.querySelector(".main-container").innerHTML = "";
        displayQuestions()
            if (element === getCurrQuest.choice) {
                time += 5;
                return null;
            } else {
                time -= 20;
                return null;
            }
    } 
}
// this function will create and display a timer that will work each time the user clicks a button 
function displayTime () {
    timeEl.innerHTML = `Timer: ${time}`;
    var timeInt = setInterval(() => {
        time--;
        //console.log(time);
        timeEl.innerHTML = `Timer: ${time}`;
        if (time <= 0) {
            timeEl.innerHTML = `Timer: ${0}`;
            clearInterval(timeInt);
        }
    }, 1000);
}



mainContainer.addEventListener("click", getChoices);
