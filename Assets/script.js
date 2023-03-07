
var startButton = document.querySelector('#startButton');
var scoreNumber = document.querySelector('#score');
var questionContainer = document.querySelector('#questions-container');
var timeEl = document.querySelector('#timer');
var highsScoreContainer = document.querySelector('#score-container')
var questionsEl = document.querySelector('#questions');
var highScoreBtn = document.querySelector('#highscores-link');
var answerBtn = document.querySelector('#answer-buttons');
var restartBtn = document.querySelector('#restart-btn');
var answerButtons = document.querySelectorAll('.btn');
var message = document.querySelector('#message')
var userScore = document.querySelector('#highscores-container');
var initialsEl = document.querySelector('#initials-field');
var finalScore = document.querySelector('#your-score');


let currentQuestions = 0;
let currentAnswers = '';
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
 
function startGame(){
    startButton.style.visibility = 'hidden';
    highScoreBtn.style.visibility = 'hidden';
    userScore.style.visibility='hidden';
    highsScoreContainer.style.visibility='hidden';
    questionContainer.style.visibility='visible';
    timeEl.style.visibility = 'visible';
    answerBtn.style.visibility = 'visible';
    scoreNumber.style.visibility='visible';
   
    
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
        clearInterval(timeEl);
    
        if ((secondsStart - secondsPassed) > 0)
            score += (secondsStart - secondsPassed);
        userScore.textContent = score;
        hide(questionContainer);
        show(userScore);
        timeEl.textContent = 0;
    }
}
//checks if answer correct
function checkAnswer(answer) { 
    let score = 0;
   scoreNumber.textContent = score
    if (answer === questions[currentQuestions].answer) {
        score += 10;
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


function setTime() {
    var timerInterval = setInterval(function() {
    secondsStart--;
    secondsPassed++;
    timeEl.textContent = secondsStart + ' sec left';
    if(secondsStart <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval)
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
    timeEl.style.visibility='hidden';
    questionContainer.style.visibility='hidden';
    answerBtn.style.visibility = 'hidden';
    highsScoreContainer.style.visibility = 'visible';
    window.alert('You are done.');
}
function youScoreSave(){
var finalScore = scoreNumber.textContent;

}














    //need to prevent refresh     event.preventDefault();
    



