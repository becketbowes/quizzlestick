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
    qq: "JavaScript was developed in which year?",
    a1: "1981",
    a2: "1984",
    a3: "1985",
    a4: "1991",
    a5: "1995",
    key: "1995"
};
const poser2 = {
    qq: "What was the original name of JavaScript?",
    a1: "PumpkinSpice",
    a2: "Cocoa",
    a3: "Mocha",
    a4: "Toddy",
    a5: "Keurig",
    key: "Mocha",
};
const poser3 = {
    qq: "Who invented JavaScript?",
    a1: "Alan Turing",
    a2: "Claude Shannon",
    a3: "Ada Lovelace",
    a4: "Brendan Eich",
    a5: "Katherine Johnson",
    key: "Brendan Eich",
};
const poser4 = {
    qq: "How Long did it take Brendan Eich to write JavaScript?",
    a1: "10 hours",
    a2: "10 days",
    a3: "10 weeks",
    a4: "11 weeks",
    a5: "10 months",
    key: "10 days",
};
const poser5 = {
    qq: "JavaScript was written for what browser?",
    a1: "IBM Web Explorer",
    a2: "OS/2 Web Explorer",
    a3: "Apple Web Explorer",
    a4: "Microsoft Exporer",
    a5: "Netscape Navigator",
    key: "Netscape Navigator",
};
const poser6 = {
    qq: "Who currently maintains and develops JavaScript?",
    a1: "European Computer Manufacturer's Association (ECMA)",
    a2: "Cyberdyne Systems",
    a3: "Mozilla",
    a4: "WikiCode",
    a5: "Linux Support Community",
    key: "Mozilla",
};

//array of the quiz question objects:
var posers = [poser1, poser2, poser3, poser4, poser5, poser6];
var riposters = ["1995", "Mocha", "Brendan Eich", "10 days", "Netscape Navigator", "Mozilla"]

//make the timer function
var tick = function () {
    setInterval(function () {
        time--;
        var minute = parseInt(time / 60);
        var second = parseInt(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});
        var clock = (minute + ":" + second);
        timerL.textContent = "Time Remaining: " + clock;
    }, 1000);
    if (time === 0 || time < 0) { 
        endGame();
    }
};

//make scorekeeper function
var tock = function () {
    scoreL.textContent = score + "/" + posers.length;
};

//reset page text function
var clearText = function () {
    questionL.textContent = "";
    answerL1.textContent = "";
    answerL1.removeEventListener("click", function (event) {
        if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
    });
    answerL2.textContent = "";
    answerL2.removeEventListener("click", function (event) {
        if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
    });
    answerL3.textContent = "";
    answerL3.removeEventListener("click", function (event) {
        if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
    });
    answerL4.textContent = "";
    answerL4.removeEventListener("click", function (event) {
        if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
    });
    answerL5.textContent = "";
    answerL5.removeEventListener("click", function (event) {
        if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
    });
    buttonL.textContent = "";
};

//play the game

//right answer function
var rightO = function () {
    //skip to next answer
    questionId++;
    //add to score and record it
    score++;
    scoreL.textContent = score + "/" + posers.length;
    //tell the user they got it right
    clearText();
    questionL.textContent = "Right!";
    //back to the puzzle
    setTimeout(() => {
        quizzle();
    }, 500);
};

//wrong answer function
var wrongO = function () {
    //skip to the next answer
    questionId++;
    //penalize the user
    (time = time - 10);
    //psychologically penalize the user
    clearText();
    var error = document.createElement("h2");
    error.textContent = "ERROR"
    quiz.appendChild(error);
    //back to the puzzle
    setTimeout(() => {
        error.textContent = "";
        quizzle();
    }, 500);
};

//endGame function (to be elaborated with score keeping and such)
var endGame = function () {
    clearText();
    timerL.textContent = "Time's Up!";
    questionL.textContent = "GAME OVER"
};

//question function
var quizzle = function () {
    if (time < 0 || questionId > posers.length) {
        endGame();
    } else {
        //call question object from array
        var thisQuestion = posers[questionId];
        //reformat text on page to question
        questionL.textContent = thisQuestion.qq;
        //...and awnser buttons
        answerL1.textContent = thisQuestion.a1;
        answerL1.addEventListener("click", function (event) {
            if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
        });
        answerL2.textContent = thisQuestion.a2;
        answerL2.addEventListener("click", function (event) {
            if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
        });
        answerL3.textContent = thisQuestion.a3;
        answerL3.addEventListener("click", function (event) {
            if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
        });
        answerL4.textContent = thisQuestion.a4;
        answerL4.addEventListener("click", function (event) {
            if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
        });
        answerL5.textContent = thisQuestion.a5;
        answerL5.addEventListener("click", function (event) {
            console.log(event.target.textContent);
            if (event.target.textContent === riposters[questionId]) { rightO(); } else { wrongO(); };
        });
    }
};

// record score
// show end screen    
// };

var startTest = function (event) {
    event.preventDefault()
    tick();
    tock();
    clearText();
    quizzle();
    setTimeout(() => {
        clearInterval(tick);
        endGame();
    }, parseInt(time * 1000));
};

buttonL.addEventListener("click", startTest);


//lookup rerendering
//put lis as hover over in css

//make an array1 of array2s with each array1 being a question containing an array2 of awnsers, one of which reads false.
//for loop the array1 through display on click
//generate a value for the return buttons depending on the true value of the array2
//onclick for the wrong value deducts time function, flashes error, goes to next array1
//onclick for the right value goes to next item in array1
//onclick to last array1 saves time as score.
//if high score, save initials, ask to play again
//else, return score, high score and ask to play again.
