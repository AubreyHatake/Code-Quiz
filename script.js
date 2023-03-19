// I need to create multiple buttons that will take the user to the next question wihtin the main container.
// this will be the main container variable 
var mainContainer = document.querySelector(".main-container")
// 1. start button
var button = document.querySelector(".button")
// 2. I need an array of questions to create functions that will show each question and choices after an event (click) happens
var questions = [
    {
        question: "Commanly used data types do NOT include:",
        choices: ["1. a boolean","2. string","3. alerts","4. numbers"],
        choice: "1. a boolean"

    },
    {
        question: "String values need to be enclosed with..",
        choices: ["1."," ", "2. ()", "3. []", "4. {}"],
        choice: "1.",""
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




//  I need to link highscores to the veiw highscores text on the top left of the page.
// I need to create a box to display the user's score 
// I need to create local storage to store all the highscores
// I need to create a interval timer for the enter quiz