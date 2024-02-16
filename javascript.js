//set up multiple choice questions
const questions=[
    {
        question:"Quotation marks enclose _ ",
        choices: [
            "strings",
            "objects",
            "numbers",
            "arrays",
            
        ], correctAnswerIndex:0,
    },

    {
        question:"What does HTML stand for?",
        choices: [
            "Helpful Text Maker Language",
            "Hyper Text Markup Language",
            "Hotmail",
            "Hotmail Type Markup Language",
            
        ], correctAnswerIndex:1,
    },

    {
        question:"An array is enclosed in _?",
        choices: [
            "curly brackets",
            "square brackets",
            "parentheses",
            "quotes",
            
        ], correctAnswerIndex: 1,
    },

    {
        question:"What static command prints a message to the console?",
        choices: [
            "print solution",
            "preview solution",
            "console.log()",
            "console.preview",
            
        ], correctAnswerIndex:2,
    },

    {
        question:"How do you start an HTML document?",
        choices: [
            "<HTML>",
            "title",
            "<!DOCTYPE html>",
            "introdution",
            
        ], correctAnswerIndex: 0,
    },

    {
        question:"What does CSS stand for?",
        choices: [
            "cascading style sheets",
            "html styling",
            "core styling sheet",
            "code style supply",
            
        ], correctAnswerIndex:0,
    },

    {
        question:"Curly braces enclose which type(s) of data?",
        choices: [
            "arrays",
            "null values",
            "booleans",
            "objects",
            
        ], correctAnswerIndex: 3,
    }
 ]


 //declare variables to keep track of the quiz's progess
 //how much total time (60seconds or one minute)
 //starting score
let currentQuestionIndex=0;
timeLeft=60; 
let score= 0;


//declare DOM 
const startButton= document.getElementById("startButton");
const questionsContainer= document.getElementById("questionsContainer");
const questionsText= document.getElementById("questionsText");
const choicesList= document.getElementById("choicesList");
const resultsContainer= document.getElementById("resultsContainer");
const resultsText= document.getElementById("resultsText");
const scoresContainer= document.getElementById("scoresContainer");
const scoresElement= document.getElementById("scoresElement");
const initialsInput= document.getElementById("initialsInput");
const saveButton= document.getElementById("saveButton");

//Add the event listeners for buttons
startButton.addEventListener("click", startQuiz);
choicesList.addEventListener("click", answerSelection);
saveButton.addEventListener("click", saveScore);

//function to begin!
function begin(){
    startTimer();
    displayQuestion();
    startButton.classList.add("hide");
    questionsContainer.classList.remove("hide");
}

//show questions //one at a time with answer selection
function showQuestion(){
resultsText.textContent= ";"
}

const currentQuestions= questions[currentQuestionIndex];
questionsText.textContent=currentQuestions.question;
choicesList.innerHTML= "";
currentQuestions.choices.forEach((choice=>{
    
    const choiceElement=document.createElement("li");
    choiceElement.textContent=choice;
    choicesList.appendChild(choiceElement);
})
)

//manage the answers selected
function answerSelection(event){
    const selectedAnswer=event.target;
    const selectedAnswerIndex= Array.from(choicesList.children).indexOf(selectedAnswer);
    const currentQuestion=questions[currentQuestionIndex];
    if (selectedAnswerIndex===currentQuestion.correctAnsweIndex){
        resultsText.textContent = "Correct!";
        score ++;
    }else{
        resultsText.textContent= "Wrong!" //remove time from timer if answer is wrong
        timeLeft -=10;
    }

    
}



