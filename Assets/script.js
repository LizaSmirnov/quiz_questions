
var startButton = document.querySelector('#startButton');
var scoreNumber = document.querySelector('#score');
var questionContainer = document.querySelector('#questions-container');
var timeEl = document.querySelector('#timer');
var scoreContainer = document.querySelector('#score-container')
var questionsEl = document.querySelector('#questions');
var highScoreBtn = document.querySelector('#highscores-link');
var answerBtn = document.querySelector('#answer-buttons');
var restartBtn = document.querySelector('#restart-btn');
var answerButtons = document.querySelectorAll('.btn');
var message = document.querySelector('#message')
var userScore = document.querySelector('#highscores-container');
var initialsEl = document.querySelector('#initials-field');
var finalScore = document.querySelector('#your-score');
var backBtn = document.querySelector('#back-btn');


let currentQuestions = 0;
let currentAnswers = '';
let score = 0;
let secondsStart = 20;
let secondsPassed = 0;


//Question const
var questions = [
    {
        question: 'What is 12*12?',
        options: ['144','244','124','134'],
        answer: 'answer: 144'
        
    },
    {
        question: 'What is 6*8?',
        options: ['48','44','42','88'],
        answer: 'answer: 48'
    
    },
    {
        question: 'What is 1*1?',
        options: ['1','2','4','3'],
        answer: 'answer: 1'
    },
    {
        question: 'What is 1*12?',
        options: ['14','12','24','34'],
        answer: 'answer: 12'
    }
];



// Listen for a click event on toggle switch
startButton.addEventListener('click', startGame)
highScoreBtn.addEventListener('click', highScoresPage)

function firstPage(){
    userScore.style.visibility='hidden';
    startButton.style.visibility = 'visible';
    highScoreBtn.style.visibility = 'visible';
    h1.visibility='visible';
   
}

function startGame(){
    startButton.style.visibility = 'hidden';
    highScoreBtn.style.visibility = 'hidden';
    userScore.style.visibility='hidden';
    scoreContainer.style.visibility='hidden';
    questionContainer.style.visibility='visible';
    timeEl.style.visibility = 'visible';
    answerBtn.style.visibility = 'visible';
    scoreNumber.style.visibility='visible';

    scoreNumber.textContent = score
   
    
    setTime();
    generateQues();
}
//begin questions & display answer options
function generateQues(){
    questionsEl.textContent = questions[currentQuestions].question;//sets up question string
    
    // console.dir(answerButtons)

    for (var i = 0; i < questions.length; i++) {

        answerButtons[i].textContent =`${'answer'}: ${questions[currentQuestions].options[i]}`;

    }
}


//move to next question 
function nextQuestion() {
    currentQuestions++;
    if (currentQuestions < questions.length) {
        generateQues();
    } else {
        inputName();
        
    }
}
//checks if answer correct
function checkAnswer(answer) { 
    if (answer === questions[currentQuestions].answer) {
        score = score + 10;
        scoreNumber.textContent = score
        message.textContent ="Correct!";
    }
    else {
        secondsStart -= 10;
        message.textContent ="Nope wrong :'(";
    }
    
}
//event listen for when clicking answer buttons

for (var i= 0; i<answerButtons.length; i++){
    answerButtons[i].addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            // console.dir(event.target)
            checkAnswer(event.target.textContent);
            nextQuestion();
        }
    });

}
var timerInterval

function setTime() {
    timerInterval = setInterval(function() {
    secondsStart--;
    secondsPassed++;
    timeEl.textContent = secondsStart + ' sec left';
    if(secondsStart <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      inputName();
    }
  }, 1000);
}



function inputName() {
    timeEl.style.visibility='hidden';
    questionContainer.style.visibility='hidden';
    answerBtn.style.visibility = 'hidden';
    scoreContainer.style.visibility = 'visible';
    highScoreBtn.style.visibility = 'hidden';
    clearInterval(timerInterval);
    // putYourName();
}


 
// var initialsEl = document.getElementById('initials');
//   var initials = initialsEl.value;




var submitButton = document.querySelector('#submit-btn');
var initials = document.getElementById('initials-field')


console.log(initials, 'come on')
submitButton.addEventListener('click', (saveHighScore)

);
function saveHighScore(event){
    event.preventDefault();
    clearInterval(timerInterval);
 
       var scoreObj = {
        Name: initials.value,
        Score: scoreNumber.textContent
    }
    localStorage.setItem("scoreObj", JSON.stringify(scoreObj));
    console.log(scoreObj, 'score object');
    highScoresPage();
 
}




function highScoresPage() {

      
    startButton.style.visibility = 'hidden';
    highScoreBtn.style.visibility = 'hidden';
    userScore.style.visibility='visible';
    scoreContainer.style.visibility='hidden';
    questionContainer.style.visibility='hidden';
    timeEl.style.visibility = 'hidden';
    answerBtn.style.visibility = 'hidden';
    scoreNumber.style.visibility='hidden'; 

    var backBtn = document.querySelector('#back-btn');
    backBtn.addEventListener('click', (firstPage))
    
};

