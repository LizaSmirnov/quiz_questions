
var startButton = document.querySelector("#startButton");
var scoreIncrease = document.querySelector(".score");
var questionContainer = document.getElementById('#questions-container');
var timeEl = document.querySelector("#timer");
var highScoreEl = document.querySelector(".centered");


// Listen for a click event on toggle switch
startButton.addEventListener("click", startGame)

function startGame(){
    startButton.style.display = "none"
    //highScoreEl.textContent= '';
 
    //questionContainer.classList.remove('hide')
    setTime();
}

var secondsStart = 10;

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
function sendMessage() {
    //questionContainer.classList.remove('hide');
    window.alert("You are done.");
    //go to high score page where they can add input
}
const questions = [
    {
        question: "What is 12*12?",
        answers: [
            {text: 144, correct:true},
            {text: 244, correct:false},
            {text: 124, correct:false},
            {text: 134, correct:false}
        ]
    },
    {
        question: "What is 6*8?",
        answers: [
            {text: 48, correct:true},
            {text: 44, correct:false},
            {text: 488, correct:false},
            {text: 88, correct:false}
        ]
    },
    {
        question: "What is 1*1?",
        answers: [
            {text: 1, correct:true},
            {text: 10, correct:false},
            {text: 11, correct:false},
            {text: 111, correct:false}
        ]
    },
    {
        question: "What is 1*12?",
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
    



