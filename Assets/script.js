
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
let score = 0;
let secondsStart = 40;
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
startButton.addEventListener('click', startGame);
highScoreBtn.addEventListener('click',(highScoresPage));
 
function startGame(){
    startButton.style.visibility = 'hidden';
    highScoreBtn.style.visibility = 'hidden';
    userScore.style.visibility='hidden';
    highsScoreContainer.style.visibility='hidden';
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
        sendMessage();
        
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

const submitButton = document.querySelector('#submit-btn');
const inputInitials = document.querySelector('#initials-field')


submitButton.addEventListener("click", (saveHighScore));

// function putYourName(event) {
//     //prevent default behaviour of form submission
//     event.preventDefault();
  
//     //check for input
//     console.log(inputInitials.textContent);
//     if (inputInitials.textContent !== '') {
//         saveHighScore();
//     } else {
//         alert("Put your name please...");
//     }
//    };
  
   function saveHighScore(){
    var highScoresArr= [];
    highScoresArr = JSON.parse(localStorage.getItem('highScores-container')) || [];
    console.log(highScoresArr)
    var int = inputInitials.value;
    console.log(inputInitials.value)

    scoreObj = {
        int,
        score

    }
   highScoresArr.push(scoreObj);
   localStorage.setItem('userScore', JSONstringify(highScoresArr));
   printHighScores(highScoresArr);

   function printHighScores(highScoresArr) {
    // move to scoreBoard container 
    highScoreContainer.classList.add("hide");
    userScore.classList.remove("hide");

    // console.log(highScoresArr);
    highScoresArr.sort( (a, b) => b.score - a.score)
    highScoresArr.splice(10);
    
    // for each object created, make it a list and append
    highScoresArr.forEach(scoreObj => {
        const listItem = document.createElement('li');
        listItem.innerText = `${scoreObj.int}   -   ${scoreObj.score}`;
        listItem.classList.add('highScoresList');
        highScoresList.appendChild(listItem);
       })
}
}


    highScoreBtn.addEventListener('click',(highScoresPage)); 
    
    function highScoresPage() {
    startButton.style.visibility = 'hidden';
    highScoreBtn.style.visibility = 'hidden';
    userScore.style.visibility='visible';
    highsScoreContainer.style.visibility='hidden';
    questionContainer.style.visibility='hidden';
    timeEl.style.visibility = 'hidden';
    answerBtn.style.visibility = 'hidden';
    scoreNumber.style.visibility='hidden'; 
    
    scoreNumber.innerText ="[" + timeEl + "]";
    
};

  
  
  //     updatelistofNamesScores(listofNamesScores);
//     highsScoreContainer.style.display="visible";
  
//     renderLeaderboard();
//   }
  
//   //updates the leaderboard stored in local storage
//   function updateStoredLeaderboard(leaderboardItem) {
//     let leaderboardArray = getLeaderboard();
//     //append new leaderboard item to leaderboard array
//     leaderboardArray.push(leaderboardItem);
//     localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
//   }
  
//   //get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object using JSON.parse
//   function getLeaderboard() {
//     let storedLeaderboard = localStorage.getItem("leaderboardArray");
//     if (storedLeaderboard !== null) {
//       let leaderboardArray = JSON.parse(storedLeaderboard);
//       return leaderboardArray;
//     } else {
//       leaderboardArray = [];
//     }
//     return leaderboardArray;
//   }
  
  //display leaderboard on leaderboard card
//   function renderLeaderboard() {
//     let sortedLeaderboardArray = sortLeaderboard();
//     const highscoreList = document.querySelector("#highscore-container");
//     highscoreList.innerHTML = "";
//     for (let i = 0; i < sortedLeaderboardArray.length; i++) {
//       let leaderboardEntry = sortedLeaderboardArray[i];
//       let newListItem = document.createElement("li");
//       newListItem.textContent =
//         leaderboardEntry.initials + " - " + leaderboardEntry.score;
//       highscoreList.append(newListItem);
//     }
//   }
  