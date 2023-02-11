//create the var for the quiz
var quizBody = document.querySelector("#quiz");
var resultsEl = document.querySelector("#result");
var finalScoreEl = document.querySelector("#finalScore");
var gameoverDiv = document.querySelector("#gameover");
var questionsEl = document.querySelector("#questions");
var timer = document.querySelector("#timer");
var startQuizButton = document.querySelector("#startbutton");
var startQuizDiv = document.querySelector("#startpage");

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// array of questions to generate for the quiz
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

    question: "What is the dark web used for?",
    choiceA: "illegal activity",
    choiceB: "To buy and sell things like amazon",
    choiceC: "we shouldn't be on it so I don't know",
    choiceD: "none of the above",
    correctAnswer: "c"},


{
  question: "What is used primarily to add styling to a web page?",
  choiceA: "HTML",
  choiceB: "CSS",
  choiceC: "Python",
  choiceD: "React.js",
  correctAnswer: "b"},
  {
  question: "When do we use https?",
  choiceA: "all the time",
  choiceB: "none of the time",
  choiceC: "On browser close",
  choiceD: "On computer restart",
  correctAnswer: "a"},  
  

  {
  question: "What do we use to add an image?",
  choiceA: "img href",
  choiceB: "img src",
  choiceC: "img class",
  choiceD: "id",
  correctAnswer: "b"},
      
  
  ];
        
// Creating a function to check the answer, so we can tell the correct scores at the end.

var finalQuestions = quizQuestions.length;

function checkAnswer(answer){
  correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestions){
        score++;
        
        currentQuestionIndex++;
        generateQuizQuestion();
       
    }else if (answer !== correct && currentQuestionIndex !== finalQuestions){
       
        currentQuestionIndex++;
        generateQuizQuestion();
        
    }else{
        showScore();
    }
}

// This button starts the quiz
startQuizButton.addEventListener("click",startQuiz);


//create more variables to create the rest of the quiz questions and end of quiz

var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

// Generating the questions and choices
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestions){
        return showScore();
    } 

//pull choices by running through the array
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

//Start quiz, hide the game over tag
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();
    
    // This button starts the quiz!
    startQuizButton.addEventListener("click",startQuiz);
    
    
    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}


var highscorepageContainer = document.querySelector("#showscorepageContainer");
var highestscoreDiv = document.querySelector("#scorePage");
var enterName = document.querySelector("#initials");
var highscoreDisplayName = document.querySelector("#highscore-initials");
var endGame = document.querySelector("#endGameButtons");
var scorebutton = document.querySelector("#submitScore");
var displayScore = document.querySelector("#highscore-score");

// This function is the end page screen that displays your score after either completeing the quiz or upon timer run out
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    enterName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// On click of the submit button, we run the function highscore that saves and stringifies the array of high scores already saved in local stoage
// as well as pushing the new user name and score into the array we are saving in local storage. Then it runs the function to show high scores.
scorebutton.addEventListener("click", function highscore(){
    
    
    if(enterName.value === "") {
        //alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = enterName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        gameoverDiv.style.display = "none";
        showscorepageContainer.style.display = "flex";
        highestscoreDiv.style.display = "block";
        endGameButtons.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

// This function clears the list for the high scores and generates a new high score list from local storage
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    displayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var nameSpans = document.createElement("li");
        var scoresSpan = document.createElement("li");
        nameSpans.textContent = highscores[i].name;
        scoresSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(nameSpans);
        displayScore.appendChild(scoresSpan);
    }
}

// This function displays the high scores page while hiding all of the other pages from 
function Highscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    showscorepageContainer.style.display = "flex";
    highestscoreDiv.style.display = "block";
    endGameButtons.style.display = "flex";

    generateHighscores();
}

// This function clears the local storage of the high scores as well as clearing the text from the high score board
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    displayScore.textContent = "";
}

// This will restart the quiz
function replayQuiz(){
    showscorepageContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}


