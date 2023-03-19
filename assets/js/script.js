// I need to create multiple buttons and variables that will take the user to the next question wihtin the main container.
var mainContainer = document.querySelector(".main-container")
var btn = document.querySelector(".button")
var mainEl = document.querySelector(".main")
var currentQuestion = 0;
var time = 60;
// I need an array of questions to create functions that will show each question and choices after an event (click) happens
var questions = [
    {
        question: "Commanly used data types do NOT include:",
        choices: ["1. a boolean","2. string","3. alerts","4. numbers"],
        choice: "1. a boolean"

    },
    {
        question: "String values need to be enclosed with..",
        choices: ["1. quotes ", "2. ()", "3. []", "4. {}"],
        choice: "1. quotes"
    },
    {
        question: "Array in JavaScript can be used to store _______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. boolean", "4. all of the above"],
        choice: "4. all of the above"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        choice: "2. curly brackets"
    }
];



// the purpose of this function is to get the questions to display after a click along with the choices. The for loop in this function is to activate the four choice buttons that display with each question. 
function displayQuestions () {
    mainEl.classList.add("hide")
    btn.classList.add("hide")
    var getCurrQuest = questions[currentQuestion];
    var h1El = document.createElement("h1");
    h1El.innerHTML = getCurrQuest.question;
    mainContainer.appendChild(h1El);
    for (let i = 0; i < getCurrQuest.choices.length; i++) {
        var choicesBtn = document.createElement("button");
        choicesBtn.innerHTML = getCurrQuest.choices[i]
        mainContainer.appendChild(choicesBtn);
    }
    
}

// document.choicesBtn.addClass("button");


btn.addEventListener("click", displayQuestions);

// This function will show the user a visable timer while they take the quiz
function displayTime () {
    timeEl.innerHTML = ('Timer' + time);
    
}
// in this function I am trying to get the page to go to the next question after a click has happened
function getChoices (event) {
    var getCurrQuest = questions[currentQuestion];
    var element = event.target.innerHTML;
    if(element) {
        currentQuestion++;
        console.log(currentQuestion)
        document.querySelector(".main-container").innerHTML = "";
        displayQuestions()
            if (element === getCurrQuest.choice) {
              // if the question is answered correctly then this alert will pop up 
                alert("good job!")
                return null;
            } else {
                // else is for if the question is answered incorrectly this alert will pop up
                alert("try harder :/")
                return null;
            }
    } 
}


mainContainer.addEventListener("click", getChoices);
//  I need to link highscores to the veiw highscores text on the top left of the page.
// I need to create a box to display the user's score 
// I need to create local storage to store all the highscores
// I need to create a interval timer for the enter quiz