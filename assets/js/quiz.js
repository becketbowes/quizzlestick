//start with a java generated display for welcome page and timer
var time = 300000
var body = document.body;
var header = document.createElement("header");
var scoreTime = document.createElement("ul");
var scoreL = document.createElement("li");
var ul2 = document.createElement("ul");
var timerL = document.createElement("li");
var section = document.createElement("section");
var quiz = document.createElement("ul");
var questionL = document.createElement("h1");
var answerL1 = document.createElement("li");
var answerL2 = document.createElement("li");
var answerL3 = document.createElement("li");
var answerL4 = document.createElement("li");
var answerL5 = document.createElement("li");
var buttonL = document.createElement("h1");

scoreL.textContent = "High Scores";
timerL.textContent = "Time"
questionL.textContent = "Coding History Challenge";
answerL1.textContent = "Try answering these questions about the history of coding within the time limit. You will be penalized 10 seconds for any wrong answers.";
answerL2.textContent = "";
answerL3.textContent = "";
answerL4.textContent = "";
answerL5.textContent = "";
buttonL.textContent = "< Start Quiz >";

body.appendChild(header);
header.appendChild(scoreTime)
scoreTime.appendChild(scoreL);
scoreTime.appendChild(timerL);
body.appendChild(section);
section.appendChild(quiz);
quiz.appendChild(questionL);
quiz.appendChild(answerL1);
quiz.appendChild(answerL2);
quiz.appendChild(answerL3);
quiz.appendChild(answerL4);
quiz.appendChild(answerL5);
quiz.appendChild(buttonL);

section.setAttribute("style", "padding: 100px 30%; align-content: center;")
buttonL.setAttribute("style", "font-weight:bold; text-decoration: underline;");

//make the timer function

var tick = function() {
        setInterval(function () {
        time = (time - 
            1)
        timerL.textContent = ("Time: " + time)
}, 1000);
};


// var tick = setInterval(function () {
//         for (var i = 0; i < time; i++) if (1 > 0) {
//             time = (time - 1);
//             timerL.textContent = ("Time: " + time);
//         }
// }, 1000);

// var tick = function() {
//     setInterval(tock(), 1000);
//     
// };

// var tock = function() {  
//     while (time > 0) {
//         this[time] = (time - 1000);
        
//     }
// };


// var tick = setInterval(function() {
//     while (time > 0) {
//         time = (time - 1);
//         timerL.textContent = ("Time: " + time);
//     }
// }, 1000);
// var tick = function() {
//     while (time > 0) {
//             setTimeout((time = time -1), 1000);
//             timerL.textContent = ("Time: " + time);
//         }
//     };


//     var milsec = 300000
//     var minSec = milsec / 100
//     var min = minSec / 60
    
//     for (var i = 0; i < 300000; i++)
//     var minSec = (setTimeout(-1, 10) + minSec);

//     var sec = (min%);
//     timerL.textContent = ("Time: " + min + ":" + sec);
// };

// var tick = function(time) {
//     for (var i = 0; i < time; i++)
//     if (time > 0) {
//         setTimeout(time -100, 100)
//         setTimeout(timerL.textContent = ("Time: " + time), 100);
//     }
// };

// var timesUp = function() {
// record score
// show end screen    
// };

var startTest = function() {
    tick();
    buttonL.removeEventListener("click", startTest);
    // setTimeout(timesUp, 3000000);
    // runQuestions();
};

buttonL.addEventListener("click", startTest);




//make an array1 of array2s with each array1 being a question containing an array2 of awnsers, one of which reads false.
//for loop the array1 through display on click
//generate a value for the return buttons depending on the true value of the array2
//onclick for the wrong value deducts time function, flashes error, goes to next array1
//onclick for the right value goes to next item in array1
//onclick to last array1 saves time as score.
//if high score, save initials, ask to play again
//else, return score, high score and ask to play again.