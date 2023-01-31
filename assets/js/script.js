
var quizBody = document.getElementById("quiz");
var timerforQuiz = document.getElementById ("timercount");
var startButton = document.getElementById("startbutton");


var startpagediv = document.getElementById("startpage");

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var questiondiv = document.querySelector("#question")
var gameoverdiv= document.querySelector("#gameover");
var buttonsenddiv= document.querySelector("#buttonsend");

var resultsdiv= document.querySelector("#results");

var quizQuestions = [{
    question: "The If/else statement is enclosed in?",
    choiceA: "square brackets",
    choiceB: "parentheses",
    choiceC: "curly brackets",
    choiceD: "quotes",
    correctAnswer: "c"},
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
   {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"},
    {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"},  
    {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"},
    {
    question: "What do we use to add an image?",
    choiceA: "img href",
    choiceB: "img src",
    choiceC: "img class",
    choiceD: "id",
    correctAnswer: "b"},
        
    
    ];

var questionIndex = 0;

// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
     
    }
  }, 1000);
}
countdown();


//function to generate quiz questions
function startQuiz(){ 
  console.log("hello");
  gameoverdiv.style.display = "none";
  startpagediv.style.display = "none";

  generateQuizQuestion();

}

function generateQuizQuestion() {
  var currentquestion = quizQuestions [questionIndex];
  questiondiv.textContent = currentquestion.question
  buttonA.textContent= currentquestion.choiceA
  buttonB.textContent = currentquestion.choiceB
  buttonC.textContent= currentquestion.choiceC
  buttonD.textContent = currentquestion.choiceD
}
function checkAnswer(choice) {
console.log(choice);
var answer = quizQuestions[questionIndex].correctAnswer

if (choice!== answer){
//subtracts 10 seconds from timer
  
}



questionIndex ++ 
generateQuizQuestion();

}


var finalquestion = 6;
var finalquestion = quizQuestions 