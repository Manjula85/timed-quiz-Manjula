//Questions

var firstQuestion = {
    question: "Commonly used data types DO Not include:",
    ansOne: "1. string",
    ansTwo:"2. booleans",
    ansThree: "3. alerts",
    ansFour: "4. numbers",
    correctAns: 3
};

var secondQuestion = {
    question: "The condition in an if/else statement is enclosed with _____.",
    ansOne: "1. quotes",
    ansTwo:"2. curly brackets",
    ansThree: "3. parenthesis",
    ansFour: "4. square brackets",
    correctAns: 3
};

var thirdQuestion = {
    question: "Array in JavaScript can be used to store _____.",
    ansOne: "1. numbers and strings",
    ansTwo:"2. other arrays",
    ansThree: "3. booleans",
    ansFour: "4. all of the above",
    correctAns: 4
};

var fourthQuestion = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    ansOne: "1. commas",
    ansTwo:"2. curly brackets",
    ansThree: "3. quotes",
    ansFour: "4. parenthesis",
    correctAns: 3
};

var fourthQuestion = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    ansOne: "1.commas",
    ansTwo:"2. curly brackets",
    ansThree: "3. quotes",
    ansFour: "4. parenthesis",
    correctAns: 3
};

var fifthQuestion = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    ansOne: "1. JavaScript",
    ansTwo:"2. terminal/bash",
    ansThree: "3. for loops",
    ansFour: "4. console.log",
    correctAns: 4
};

var buttonStart = document.querySelector("#start");

//Centeral slot where all the coding goes on the page
var multiSolutions = document.querySelector("#center");
//Where the buttons with the answers go
var listLocation = document.querySelector("#allOptions")

//Checking if the right answer was selected
var result = 0;

//identifying buttons

var startQuiz = function(studentQuestion){   

    //question
    var question = document.getElementById("main-content");  //h1 element
    question.textContent = studentQuestion.question;

    //multiple choice
    var listEl = document.createElement("li");
    listEl.classList = "list-group";

    event.preventDefault();

    //Q1
    var buttonOne = document.createElement("button");
    buttonOne.classList = "btn btn-primary mt-3 rounded .w-15";
    buttonOne.textContent = studentQuestion.ansOne;
    buttonOne.setAttribute("id",1);
    listEl.appendChild(buttonOne);
    listLocation.appendChild(listEl);

    //Q2
    var buttonTwo = document.createElement("button");
    buttonTwo.classList = "btn btn-primary mt-3 rounded .w-15";
    buttonTwo.textContent = studentQuestion.ansTwo;
    buttonTwo.setAttribute("id",2);
    listEl.appendChild(buttonTwo);
    listLocation.appendChild(listEl);

    //Q3
    var buttonThree = document.createElement("button");
    buttonThree.classList = "btn btn-primary mt-3 rounded .w-15";
    buttonThree.textContent = studentQuestion.ansThree;
    buttonThree.setAttribute("id",3);
    listEl.appendChild(buttonThree);
    listLocation.appendChild(listEl);

    //Q4
    var buttonFour = document.createElement("button");
    buttonFour.classList = "btn btn-primary mt-3 rounded .w-15";
    buttonFour.textContent = studentQuestion.ansFour;
    buttonFour.setAttribute("id",4);
    listEl.appendChild(buttonFour);
    listLocation.appendChild(listEl);


    //button click event 
    buttonOne.addEventListener("click",taskButtonHandler);
    buttonTwo.addEventListener("click",taskButtonHandler);
    buttonThree.addEventListener("click",taskButtonHandler);
    buttonFour.addEventListener("click",taskButtonHandler); 

};

var taskButtonHandler = function(event) {
    // get target element from event
    var targetEl = event.target;

    alert(targetEl.id);
 }
  

//checking solution
var checkingSolution = function(studentAnswer){

    //event.preventDefault();
    //Loading the second question here

    //var allQuestions = [firstQuestion,secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion];
    //to loop through each question and get the final result
    //i=1 because the first question has already been asked
/*
    for(var i=1; i<allQuestions.length; i++){
        startQuiz(i);
    };
*/
    var quizResult;
      
    /*
    if(parseInt(output) === studentAnswer.correctAns){
        quizResult = "Correct!";
        result++;   //Add to the total score
    }else{
        quizResult = "Wrong!"
    }*/

    //showing the result of the prevous page at the bottom 
}

//Timer function
var counter = 20;
var countDown = function(){
    //Right side 
    //var rightSide = document.querySelector();
    setInterval(countDown, 1000);

    //**************** Display the time at the top */
    var countDownClock = document.querySelector("#right");
    countDownClock.innerHTML = "Time: " + counter;

    counter--;
    if(counter === 0){
        //****** Go to final score ******/
        alert("blastoff");
        clearInterval(startCountDown);

        countDownClock.remove();
        //remove it and add up the score so far
    };
};

//Starting page for the quiz
var start = function(){

    //start the counter
    //countDown();

    //Remove intro page...
    var para = document.getElementById("descrip");
    para.remove();
    buttonStart.remove();
    //...and get the questions
    startQuiz(firstQuestion);
};

buttonStart.addEventListener("click", start);

/*
document.querySelector(".button").onclick = test;

var test = function(){
    alert("It's working");
}*/


