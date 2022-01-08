//start with a java generated display for welcome page and timer
var time = 100
var score = 0 
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

//quiz question objects:
const poser1 = {
    qq:"JavaScript was developed in which year?",
    a1:"1981", 
    a2:"1984",
    a3:"1985",
    a4:"1991",
    a5:"1995",
    key:"a5"
};
const poser2 = {
    q2:"What was the original name of JavaScript?",
    a1:"PumpkinSpice",
    a2:"Cocoa",
    a3:"Mocha",
    a4:"Toddy",
    a5:"Keurig"
};
const poser3 = {
    q3:"Who invented JavaScript?",
    a1:"Alan Turing",
    a2:"Claude Shannon",
    a3:"Ada Lovelace",
    a4:"Brendan Eich",
    a5:"Katherine Johnson"
};
const poser4 = {
    q4:"How Long did it take Brendan Eich to write JavaScript?",
    a1:"10 hours",
    a2:"10 days",
    a3:"10 weeks",
    a4:"11 weeks",
    a5:"10 months"
};
const poser5 = {
    q5:"JavaScript was written for what browser?",
    a1:"IBM Web Explorer",
    a2:"OS/2 Web Explorer",
    a3:"Apple Web Explorer",
    a4:"Microsoft Exporer",
    a5:"Netscape Navigator"
};
const poser6 = {
    q6:"Who currently maintains and develops JavaScript?",
    a1:"European Computer Manufacturer's Association (ECMA)",
    a2:"Cyberdyne Systems",
    a3:"Mozilla",
    a4:"WikiCode",
    a5:"Linux Support Community"
};

//array of the objects
var posers = [poser1, poser2, poser3, poser4, poser5, poser6];

//make the timer function
var tick = function() {
    if(time > 0) {
        setInterval(function() {
        timerL.textContent = "Time Remaining: " + time;
        time --;
        }, 1000);
        //endGame
        clearInterval(tick);
    }
};

//reset page text function
var clearText = function () {
    questionL.textContent = "";
    answerL1.textContent = "";
    answerL2.textContent = "";
    answerL3.textContent = "";
    answerL4.textContent = "";
    answerL5.textContent = "";
    buttonL.textContent = "";
};


//play the game
var quizzle = function () { 
    //reformatting page for test


    //diplay 
    for (var i = 0; i < posers.length; i++) if (1 > 0) {
        var cQ = 0;
        var rightO = function() {
            score++;
            scoreL.textContent = score + "/" + posers.length;
            clearText();
            setInterval(() => {
                questionL.textContent = "Right!";
                clearInterval(checkAwnser);
            }, 500);
            cQ++;
            }; 
        
        var wrongO = function() {
                runError();
                (time = time - 10);
                clearText();
                setInterval(() => {
                    questionL.textContent = "ERROR"
                    questionL.setAttribute ("style", "transform:rotate(180deg);");
                }, 500);
                questionL.setAttribute ("style", "transform:rotate(0deg);");
                cQ++;
            }; 

        var thisQuestion = posers[cQ];
             questionL.textContent = thisQuestion.qq;
             questionL.setAttribute = ("id", thisQuestion.key);
             answerL1.textContent = thisQuestion.a1;
             answerL1.addEventListener("mouseover", function( event ) { event.target.style.color = "white"; });
             answerL1.addEventListener("mouseout", function( event ) { event.target.style.color = "color=rgb(110, 253, 158)"; });
             answerL1.addEventListener("click", function (event) {
                 var answerTry = event.target.id
                 if(answerTry.matches(thisQuestion.key)) {rightO()} else {wrongO()};
             });
             answerL2.textContent = thisQuestion.a2;
             answerL2.addEventListener("mouseover", function( event ) { event.target.style.color = "white"; });
             answerL2.addEventListener("mouseout", function( event ) { event.target.style.color = "color=rgb(110, 253, 158)"; });
             answerL2.addEventListener("click", function (event) {
                var answerTry = event.target.id
                if(answerTry.matches(thisQuestion.key)) {rightO()} else {wrongO()};
            });
             answerL3.textContent = thisQuestion.a3;
             answerL3.addEventListener("mouseover", function( event ) { event.target.style.color = "white"; });
             answerL3.addEventListener("mouseout", function( event ) { event.target.style.color = "color=rgb(110, 253, 158)"; });
             answerL3.addEventListener("click", function (event) {
                var answerTry = event.target.id
                if(answerTry.matches(thisQuestion.key)) {rightO()} else {wrongO()};
            });
             answerL4.textContent = thisQuestion.a4;
             answerL4.addEventListener("mouseover", function( event ) { event.target.style.color = "white"; });
             answerL4.addEventListener("mouseout", function( event ) { event.target.style.color = "color=rgb(110, 253, 158)"; });
             answerL4.addEventListener("click", function (event) {
                var answerTry = event.target.id
                if(answerTry.matches(thisQuestion.key)) {rightO()} else {wrongO()};
            });
             answerL5.textContent = thisQuestion.a5;
             answerL5.addEventListener("mouseover", function( event ) { event.target.style.color = "white"; });
             answerL5.addEventListener("mouseout", function( event ) { event.target.style.color = "color=rgb(110, 253, 158)"; });
             answerL5.addEventListener("click", function (event) {
                var answerTry = event.target.id
                if(answerTry.matches(thisQuestion.key)) {rightO()} else {wrongO()};
            });
    }
};

// var endGame = function() {
// record score
// show end screen    
// };

var startTest = function() {
    tick();
    clearText();
    quizzle();
    
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
