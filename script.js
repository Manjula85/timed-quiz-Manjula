//Questions

var firstQuestion = {
    question: "(1)3 Commonly used data types DO Not include:",
    ansOne: "1. string",
    ansTwo:"2. booleans",
    ansThree: "3. alerts",
    ansFour: "4. numbers",
    correctAns: 3
};

var secondQuestion = {
    question: "(2)3 The condition in an if/else statement is enclosed with _____.",
    ansOne: "1. quotes",
    ansTwo:"2. curly brackets",
    ansThree: "3. parenthesis",
    ansFour: "4. square brackets",
    correctAns: 3
};

var thirdQuestion = {
    question: "(3)4 Array in JavaScript can be used to store _____.",
    ansOne: "1. numbers and strings",
    ansTwo:"2. other arrays",
    ansThree: "3. booleans",
    ansFour: "4. all of the above",
    correctAns: 4
};


var fourthQuestion = {
    question: "(4)3 String values must be enclosed within _____ when being assigned to variables.",
    ansOne: "1.commas",
    ansTwo:"2. curly brackets",
    ansThree: "3. quotes",
    ansFour: "4. parenthesis",
    correctAns: 3
};

var fifthQuestion = {
    question: "(5)4 A very useful tool used during development and debugging for printing content to the debugger is:",
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

//Keeping track of the questions
var nextQuestion = 0;

//So that I can show it at the bottom of the questions
var quizResult = 0;

//Final grade
var finalGrade = 0;

//for the timer
var startCountDown;

//Timer function
var counter = 5;

//checking solution
var checkingSolution = function(event){

    // get target element from event
    var targetEl = event.target.id;
    targetEl = parseInt(targetEl);

    //Keeping track of the questions
    nextQuestion++;   
    
    if(targetEl === quizAnswer){
        quizResult = "Correct!";
        finalGrade++;
        console.log("This is the Final grade stuff: "+ finalGrade);
    }else{
        quizResult = "Wrong!"
        //Penalize time for making an error!
        counter--;
    }

    //remove line (so there aren't multiples of them).
    line.remove();
    resOutput.remove();

    //Loading the second question here
    var allQuestions = [firstQuestion,secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion];

    //to loop through each question and get the final total
    if(nextQuestion < allQuestions.length){
        continueQuestions(allQuestions[nextQuestion]);
    }else{
        localStorage.setItem("Total",JSON.stringify(finalGrade));
        window.location.href = "grade.html";
    }
};

var startQuiz = function(studentQuestion){   

    //question
    var question = document.getElementById("main-content");  //middle div
    question.textContent = studentQuestion.question;

    //multiple choice
    var listEl = document.createElement("li");
    listEl.classList = "list-group";

    //event.preventDefault();

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

    //Pass correct answer
    quizAnswer = studentQuestion.correctAns;

    //button click event 
    buttonOne.addEventListener("click",checkingSolution);
    buttonTwo.addEventListener("click",checkingSolution);
    buttonThree.addEventListener("click",checkingSolution);
    buttonFour.addEventListener("click",checkingSolution); 
};

//Horizontal line
var line = document.createElement("hr");
line.className = "hrStyle";

var resOutput = document.createElement("li");
resOutput.className = "preResult";

//the rest of the quesitons
var continueQuestions = function(studentQuestion,lastAns){

    //question
    var question = document.getElementById("main-content");  //h1 element
    question.textContent = studentQuestion.question;

    //Q1
    var buttonOne = document.getElementById(1);
    buttonOne.textContent = studentQuestion.ansOne;

    //Q2    
    var buttonTwo = document.getElementById(2);
    buttonTwo.textContent = studentQuestion.ansTwo;

    //Q3
    var buttonThree = document.getElementById(3);
    buttonThree.textContent = studentQuestion.ansThree;

    //Q4
    var buttonFour = document.getElementById(4);
    buttonFour.textContent = studentQuestion.ansFour;

    //************************** */

    //The solution from the previous question

    //multiple choice
    var listEl = document.createElement("li");
    listEl.classList = "list-group";
    
    //Horizontal line creation
    listEl.appendChild(line);
    listLocation.appendChild(listEl);

    //result
    resOutput.textContent = quizResult;
    listEl.appendChild(resOutput);
    listLocation.appendChild(listEl);
  
    //************************** */

    //Pass correct answer
    quizAnswer = studentQuestion.correctAns;

    //button click event 
    buttonOne.addEventListener("click",checkingSolution);
    buttonTwo.addEventListener("click",checkingSolution);
    buttonThree.addEventListener("click",checkingSolution);
    buttonFour.addEventListener("click",checkingSolution);
}

var countDown = function(){
    //Right side 

    counter--;

    //**************** Display the time at the top */
    var countDownClock = document.querySelector("#right");
    countDownClock.innerHTML = "Time: " + counter;
    
    if(counter === 0){
        //Go to grades page immediately
        clearInterval(startCountDown);
        window.location.href="grade.html";
    };
};

//Starting page for the quiz
var start = function(){

    //start the counter
    startCountDown = setInterval(countDown, 1000);

    //Remove intro page...
    var para = document.getElementById("descrip");
    para.remove();
    buttonStart.remove();
    //...and get the questions
    startQuiz(firstQuestion);
};

buttonStart.addEventListener("click", start);




