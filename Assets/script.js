
var startButton = document.querySelector('#startButton');
var scoreNumber = document.querySelector('#score');
var questionContainer = document.querySelector('#questions-container');
var timeEl = document.querySelector('#timer');
var highsScoreContainer = document.querySelector('#hidescores')
var questionsEl = document.querySelector('#questions');
var highScoreBtn = document.querySelector('#highscores-link');
var answerBtn = document.querySelector('#answer-buttons');
var restartBtn = document.querySelector('#restart-btn');
var answers = Array.from(document.querySelector('.btn'));
let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let secondsStart = 10;

// Listen for a click event on toggle switch
startButton.addEventListener('click', startGame)
 
function startGame(){
    startButton.style.visibility = 'hidden';
    highScoreBtn.style.visibility = 'hidden';
    questionContainer.style.visibility='visible';
    timeEl.style.visibility = 'visible';
    answerBtn.style.visibility = 'visible';
    scoreNumber.style.visibility='visible';
    
    setTime();
    scoreTally();
}



function setTime() {
   
   
  var timerInterval = setInterval(function() {
    secondsStart--;
    timeEl.textContent = secondsStart + ' sec left';
    if(secondsStart === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval)
      sendMessage();
    }
  }, 1000);
//second one
}
// var score = 0
// function scoreTally {
//     if (console.log(questions[1].answers[0].correct) === true){
//         score++
//         scoreNumber.textContent = score;
//     }
//         else {
//             score--
//             scoreNumber.textContent = score;
//         }
//     }
function sendMessage() {
    timeEl.style.visibility='hidden';
    questionContainer.style.visibility='hidden';
    answerBtn.style.visibility = 'hidden';
    highsScoreContainer.style.visibility = 'visible';
   

    
    window.alert('You are done.');



    //go to high score page where they can add input
}
function highscore(){
var score = 0;
var highscore = localStorage.getItem('#highscore');

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem('#highscore', score);      
    }
}
else{
    localStorage.setItem('#highscore', score);
}
};














//Question const
const questions = [
    {
        question: 'What is 12*12?',
        answers: [
            {text: 144, correct:true},
            {text: 244, correct:false},
            {text: 124, correct:false},
            {text: 134, correct:false}
        ]
    },
    {
        question: 'What is 6*8?',
        answers: [
            {text: 48, correct:true},
            {text: 44, correct:false},
            {text: 488, correct:false},
            {text: 88, correct:false}
        ]
    },
    {
        question: 'What is 1*1?',
        answers: [
            {text: 1, correct:true},
            {text: 10, correct:false},
            {text: 11, correct:false},
            {text: 111, correct:false}
        ]
    },
    {
        question: 'What is 1*12?',
        answers: [
            {text: 12, correct:true},
            {text: 24, correct:false},
            {text: 14, correct:false},
            {text: 11, correct:false}
        ]
    }
];


  



    //button disappear
    //timer starts
    //quetions appear
    // var score = 0
    // if right score ++
    //if wrong prompt wrong
    // display messgae of score
    //store all scores in local storage
    //need to prevent refresh     event.preventDefault();
    



