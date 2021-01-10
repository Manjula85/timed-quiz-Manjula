//Questions

var firstQuestion = {
    question: "Commonly used data types DO Not include:",
    ansOne: "string",
    ansTwo:"booleans",
    ansThree: "alerts",
    ansFour: "numbers",
    correctAns: 3
};

var secondQuestion = {
    question: "The condition in an if/else statement is enclosed with _____.",
    ansOne: "quotes",
    ansTwo:"curly brackets",
    ansThree: "parenthesis",
    ansFour: "square brackets",
    correctAns: 3
};

var thirdQuestion = {
    question: "Array in JavaScript can be used to store _____.",
    ansOne: "numbers and strings",
    ansTwo:"other arrays",
    ansThree: "booleans",
    ansFour: "all of the above",
    correctAns: 4
};

var fourthQuestion = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    ansOne: "commas",
    ansTwo:"curly brackets",
    ansThree: "quotes",
    ansFour: "parenthesis",
    correctAns: 3
};

var fourthQuestion = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    ansOne: "commas",
    ansTwo:"curly brackets",
    ansThree: "quotes",
    ansFour: "parenthesis",
    correctAns: 3
};

var fifthQuestion = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    ansOne: "JavaScript",
    ansTwo:"terminal/bash",
    ansThree: "for loops",
    ansFour: "console.log",
    correctAns: 4
};




var buttonStart = document.querySelector("#start");

//Centeral slot where all the coding goes
var multiSolutions = document.querySelector("center");


var startQuiz = function(studentQuestion){   

    //question
    var question = document.getElementById("main-content");  //h1 element
    question.textContent = studentQuestion.question;

    event.preventDefault();

    //multiple choice
    var buttonOne = document.createElement("button");
    buttonOne.classList = "btn btn-primary";
    buttonOne.textContent = "test"; //studentQuestion.ansOne;

    //multiSolutions.appendChild(buttonOne));

    multiSolutions.innerHTML = "<p>" + studentQuestion.ansOne + "</p>";
        
};

//Starting page for the quiz
var start = function(){
    var para = document.getElementById("descrip");
    para.remove();
    buttonStart.remove();
    startQuiz(firstQuestion);
};

buttonStart.addEventListener("click", start)


