var quizBody = document.querySelector(".quiz");
var timerforQuiz = document.querySelector (".timercount");
var startButton = document.querySelector(".start-button");
var gameStart= document.querySelector(".startgame");
var highscorepagediv = document.querySelector(".highscorepage");
var highscoreheaderdiv = document.querySelector(".highscoreheader");
var startpagediv = document.querySelector(".start");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var gameoverdiv= document.querySelector(".gameover");
var buttonsenddiv= document.querySelector(".buttonsend");
var submitscore = document.querySelector(".submit");
var highscoredisplay = document.querySelector(".Highscore!");
var gameoverDisplay= document.querySelector(".gameover");

var quizQuestions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
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
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "d"},
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
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"},
        
    
    ];


//function to generate quiz questions
function generatequizquestion() {
gameoverDisplay.style.display= "none";
if (currentQuestion===finalQuestionIndex){
    return showScore;
}

var currentQuestion=0;
var finalQuestionIndex = quizQuestions.length;
var timerInterval;

var currentQuestion = quizQuestions[currentQuestionIndex];
questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
buttonA.innerHTML = currentQuestion.choiceA;
buttonB.innerHTML = currentQuestion.choiceB;
buttonC.innerHTML = currentQuestion.choiceC;
buttonD.innerHTML = currentQuestion.choiceD;
}
startButton.addEventListener("click",startQuiz);

function startQuiz(){
    gameoverdiv.style.display = "none";
    gameStart.style.display = "none";
    generatequizquestion();

    //timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quiztimercount.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}

function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

