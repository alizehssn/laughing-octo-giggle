//Variables:
const startButton = document.getElementById("startQuiz");
const nextButton = document.getElementById("nextQuestion");
const questionContainerElement = document.getElementById('question-container')
const questionEl = document.getElementById('question')
var submitButton = document.getElementById("submitQuiz");
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("countdown");
const startSeconds = 180 ;
let time = startSeconds * 60;
var timeLeft = 180;
var secondsDisplay = document.getElementById("seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var timeInterval = 0;
var score = 0;
var saveInitials = "";
const results = document.getElementById("results");
var initalsInput = document.getElementById("userInitals");
const question = document.getElementById("question");
const choiceA = document.querySelector("#A");
const choiceB = document.querySelector("#B");
const choiceC = document.querySelector("#C");
var currentQuestionIndex = 0;



//Array of Questions: 
const questions = [
    {
        question:'Inside which HTML element do we put the JavaScript?',
        choiceA: '<js>' ,
       choiceB: '<scripting>' ,
       choiceC: '<script>',
       answer: "C"
         
    },
    {
        question: 'Choose the correct JavaScript syntax to change the content of the following HTML code',
        choiceA: 'document.getElement(“mandolorian”).innerHTML=”I am a Mandolorian”;',
        choiceB: 'document.getElementById(“mandolorian”).innerHTML=”I am a Mandolorian”;',
        choiceC: 'document.getId(“mandolorian”)=”I am a mandolorian”;',
        answer: "B"
    },
    {
        question: 'What is the correct syntax for referring to an external script called “babyyoda.js?',
        choiceA:'<script src=”babyyoda.js”>',
        choiceB: '<script href=”babyyoda.js”>',
        choiceC:'<script ref=”babyyoda.js”>',
        answer: "A"
    },
    {
        question: 'The external JavaScript file must contain <script> tag. True or False?',
        choiceA: 'true',
        choiceB: 'false',
        answer: "B"
    },
    {
        question:'What is the correct syntax for adding comments in JavaScript?',
        choiceA:'<!–This is a comment–&gt',
        choiceB:' //This is a comment ',
        choiceC:'**This is a comment**',
        answer:"B"
    },
    {
        question:'How do you initialize an array in JavaScript?',
        choiceA:'<var Kardashians= “Kim1”, “Kourtney2”, “Khloe3” ',
        choiceB:' var Kardashians=(1=Kim1, 2=Kourtney2, 3=Khloe3)  ',
        choiceC:'var Kardashains=[“Kim1”, “Kourtney2”, “Khloe3”]',
        answer:"C"

    },
    {
        question:'Which of the following type of variable takes precedence over other if names are same?',
        choiceA:'global variable',
        choiceB:'local variable',
        choiceC:'target variable',
        answer:"B"
    },
    {
        question:'Which of the following is not a valid JavaScript variable name?',
        choiceA:'2chainz',
        choiceB:'FirstNameGreatest',
        choiceC: '_greatest_of_all_time',
        answer:"A"

    },
    {
        question:'Which of the following is the correct syntax to display "BabyYodaWantChickenNuggets" in an alert box?',
        choiceA:'alertbox(BabyYodaWantChickenNuggets");',
        choiceB:'msg(BabyYodaWantChickenNuggets");',
        choiceC:'alert(BabyYodaWantChickenNuggets");',
        answer:"C"

    },
    {
        question:'Which of the following is the correct syntax for creating a function named as BabyYodafunc',
        choiceA:'function= BabyYodafunc()',
        choiceB:'function BabyYodafunc()',
        choiceC:'function: BabyYodafunc()',
        answer:"B"

    }

]

//Functions:

function startCountdown() {
    timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft + " seconds left";
        timeLeft--;
    },1000)
}

    


    function startQuiz(){
        console.log('start quiz')
        startButton.classList.add('hide')
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        renderQuestion()
        startCountdown();
    }





    function checkAnswer(event){
       console.log("Checking Answer!")
       var q = questions[currentQuestionIndex]
       var correct = q.answer
       console.log("Correct!", correct);
       var clickValue = event.target.dataset.value;
       console.log(clickValue)
       if (correct === clickValue) {
           alert("question right!")
           score++
           console.log(score)
       }else {
           alert("question wrong :(")
          timeLeft= timeLeft - 50;
       }
       currentQuestionIndex++
    }



function renderQuestion(){
    if(currentQuestionIndex < 10) {
    let q = questions[currentQuestionIndex];
    questionEl.innerHTML =  q.question
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    scoreEl.textContent= "Your Score is: "+ score;
    }
    else {
     saveInitials  = prompt("You Finished!Type Initals to Submit Quiz!");
     clearInterval(timeInterval);
    }

}

//Saving Score and User Initals to Local Storage

function submitQuiz(){
    localStorage.setItem("initals", saveInitials);
    localStorage.setItem("score", score);
}




//EventListeners:
  
    startButton.addEventListener('click', startQuiz)

    submitButton.addEventListener('click', submitQuiz)

    nextButton.addEventListener('click' , () => {
        currentQuestionIndex++
        renderQuestion()
    })
    choiceA.addEventListener('click', clickChoiceA);
        function clickChoiceA(event){
            event.preventDefault();
            console.log("clicked buttonA", event)
            checkAnswer(event)
    
        }
           
    choiceB.addEventListener('click', clickChoiceB);
        function clickChoiceB(event){
            event.preventDefault();
            console.log("clicked buttonB", event)
            checkAnswer(event)
        }
        choiceC.addEventListener('click', clickChoiceC);
        function clickChoiceC(event){
            event.preventDefault();
            console.log("clicked buttonC", event)
            checkAnswer(event)
            renderQuestion()
        }
    







