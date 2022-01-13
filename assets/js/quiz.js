//start with a java generated display for welcome page and timer
var time = 120;
var score = 0;
var questionId = 0;
var body = document.body;
var header = document.createElement("header");
var scoreTime = document.createElement("ul");
var scoreL = document.createElement("li");
var ul2 = document.createElement("ul");
var timerL = document.createElement("li");
var section = document.createElement("section");
var error = document.createElement("h2")
var quiz = document.createElement("ul");
var questionL = document.createElement("h1");
var answerL1 = document.createElement("li");
var answerL2 = document.createElement("li");
var answerL3 = document.createElement("li");
var answerL4 = document.createElement("li");
var answerL5 = document.createElement("li");
var buttonL = document.createElement("h1");
var cursor = document.createElement("p");

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
section.appendChild(error);
quiz.appendChild(questionL);
quiz.appendChild(answerL1);
quiz.appendChild(answerL2);
quiz.appendChild(answerL3);
quiz.appendChild(answerL4);
quiz.appendChild(answerL5);
quiz.appendChild(buttonL);

answerL1.setAttribute("class", "question");
answerL1.setAttribute("id", "1");
answerL2.setAttribute("class", "question");
answerL2.setAttribute("id", "2");
answerL3.setAttribute("class", "question");
answerL3.setAttribute("id", "3");
answerL4.setAttribute("class", "question");
answerL4.setAttribute("id", "4");
answerL5.setAttribute("class", "question");
answerL5.setAttribute("id", "5");
section.setAttribute("style", "padding: 100px 30%; align-content: center;")
buttonL.setAttribute("style", "font-weight:bold; text-decoration: underline;");

//quiz question objects:
const poser1 = {
    qq: "JavaScript was developed in which year?",
    a1: "1981",
    a2: "1984",
    a3: "1985",
    a4: "1991",
    a5: "1995"
};
const poser2 = {
    qq: "What was the original name of JavaScript?",
    a1: "PumpkinSpice",
    a2: "Cocoa",
    a3: "Mocha",
    a4: "Toddy",
    a5: "Keurig"
};
const poser3 = {
    qq: "Who invented JavaScript?",
    a1: "Alan Turing",
    a2: "Claude Shannon",
    a3: "Ada Lovelace",
    a4: "Brendan Eich",
    a5: "Katherine Johnson"
};
const poser4 = {
    qq: "How Long did it take Brendan Eich to write JavaScript?",
    a1: "10 hours",
    a2: "10 days",
    a3: "10 weeks",
    a4: "11 weeks",
    a5: "10 months"
};
const poser5 = {
    qq: "JavaScript was written for what browser?",
    a1: "IBM Web Explorer",
    a2: "OS/2 Web Explorer",
    a3: "Apple Web Explorer",
    a4: "Microsoft Exporer",
    a5: "Netscape Navigator"
};
const poser6 = {
    qq: "Who currently maintains and develops JavaScript?",
    a1: "European Computer Manufacturer's Association (ECMA)",
    a2: "Cyberdyne Systems",
    a3: "Mozilla",
    a4: "WikiCode",
    a5: "Linux Support Community",
};

//array of the quiz question objects:
var posers = [poser1, poser2, poser3, poser4, poser5, poser6];
var key = [5, 3, 4, 2, 5, 3]

//clockworks
var theInevitableHeatDeathOfTheUniverseManifest = setInterval(theInevitableInformationDeathOfTheUniverse, 1000);
var theInevitableInformationDeathOfTheUniverse = function () {
    time--;
    var minute = parseInt(time / 60);
    var second = parseInt(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    var clock = (minute + ":" + second);
    timerL.textContent = "Time Remaining: " + clock;
};
//make the timer function
var tick = function () {
    if (time < 0 || questionId >= posers.length) {
        theInevitableHeatDeathOfTheUniverseManifest();
    } else {
        endGame();
    }
};

//make scorekeeper function
var tock = function () {
    scoreL.textContent = score + "/" + posers.length;
};

//reset page text function
var clearQuiz = function () {
    questionL.textContent = "";
    answerL1.textContent = "";
    answerL2.textContent = "";
    answerL3.textContent = "";
    answerL4.textContent = "";
    answerL5.textContent = "";
    buttonL.textContent = "";
};

var clearAll = function () {
    scoreL.textContent = "";
    timerL.textContent = "";
    questionL.textContent = "";
    answerL1.textContent = "";
    answerL2.textContent = "";
    answerL3.textContent = "";
    answerL4.textContent = "";
    answerL5.textContent = "";
    buttonL.textContent = "";
    quiz.removeEventListener("click", function (event) {
        if (event.target.id == key[questionId]) {
            rightO();
        } else {
            wrongO();
        };
    });
};


//play the game

//right answer function
var rightO = function () {
    //reset questions
    clearQuiz();
    questionId++;
    //add to score and record it
    score++;
    scoreL.textContent = score + "/" + posers.length;
    //tell the user they got it right
    questionL.textContent = "Right!";
    //back to the puzzle
    setTimeout(() => {
        quizzle();
    }, 500);
};

//wrong answer function
var wrongO = function () {
    //reset questions
    clearQuiz();
    //skip to the next question/awnser object
    questionId++;
    //penalize the user
    (time = time - 10);
    //psychologically penalize the user
    error.textContent = "ERROR"
    quiz.appendChild(error);
    //back to the puzzle
    setTimeout(() => {
        error.textContent = "";
        quizzle();
    }, 500);
};

//question function
var quizzle = function () {
    if (time < 0 || questionId >= posers.length) {
        console.log(questionId);
        console.log(posers.length);
        endGame();
    } else {
        //call question object from array
        var thisQuestion = posers[questionId];
        //reformat text on page to question
        questionL.textContent = thisQuestion.qq;
        //...and awnser text
        answerL1.textContent = thisQuestion.a1;
        answerL2.textContent = thisQuestion.a2;
        answerL3.textContent = thisQuestion.a3;
        answerL4.textContent = thisQuestion.a4;
        answerL5.textContent = thisQuestion.a5;
    };
};

//end of game functions:
//record score and time
var scoreKeeping = function () {
    var quizEndTime = time;
    clearInterval(theInevitableHeatDeathOfTheUniverseManifest);
    questionL.textContent = "Please enter any three initials to save your score:";
    var initials = document.createElement("INPUT");
    answerL1.appendChild(initials);
    answerL2.textContent = (score + "/" + posers.length + " with " + quizEndTime + " seconds remaining");
    initials.setAttribute("type", "text");
    initials.setAttribute("id", "cursorfield");
};

//endGame function (to be elaborated with score keeping and such)
var endGame = function () {
    clearAll();
    timerL.textContent = "Game Over";
    setTimeout(scoreKeeping(), 1000);
    //scoreKeeping();
};


// record score
// show end screen    
// };

//set up the start text function elements
var startTest = function (event) {
    event.preventDefault()
    tick();
    tock();
    clearQuiz();
    setTimeout(() => {
        //add eventlistener to question area
        quiz.addEventListener("click", function (event) {
            if (event.target.id == key[questionId]) {
                rightO();
            } else {
                wrongO();
            };
        });
        //play the game don't let the game play you
        quizzle()
    }, 500);
};

buttonL.addEventListener("click", startTest);




//lookup rerendering
//put lis as hover over in css

//to do:
// fix hover element
// fix timer
// create save score
// finish end game, ask to play again? 
// make cursor element


// answerL1.addEventListener("input", function (event) {
//     var initial = (event.target.content);
//     console.log(event.target.textContent);
//     answerL1.insertBefore(initial);




//blinking cursor element
// var enterText = function () {
//     answerL1.setAttribute("id", "cursorfield")
//     answerL1.appendChild(cursor);
//     cursor.createElement("");
//     cursor.setAttribute("type", "text");
//     cursor.setAttribute("id", "cursor")
//         var cursor = true;
//         var blink = 500;
//     setInterval(() => {
//         if(cursor) {
//             document.getElementById("cursor").style.opacity = 0;
//             cursor = false;
//         } else {
//             document.getElementById("cursor").style.opacity = 1;
//             cursor = true;
//         }, blink);
// }

// var scoreKeeping = function() {
//     cursor.addEventListener("input", function (event) {
//         var initial = (event.target.content);
//         console.log(event.target.textContent);
//         answerL1.insertBefore(initial);
//         cursor.value = "";
// };
//     if ()
// }
