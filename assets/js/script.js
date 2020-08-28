// variables
var questionDiv = document.querySelector("#question");
questionDiv.addEventListener("click", function(event) {
    console.log(event.target.getAttribute("data-answer"));
    currentQuestion++;
    displayCurrentQuestion();

});
 
var main = document.querySelector("main");
var initials = document.querySelector("#playerName");
var submitButton = document.querySelector("#submitScores");

// var savedScores = localStorage.getItem("highScores");
// if (savedScores != null) {console.log(savedScores)};




var savedInitials = localStorage.getItem("initials")
if (savedInitials != null) {
    console.log(savedInitials);
}

submitButton.addEventListener("click", function(){
    var newInitial = initials.value; 
    localStorage.setItem("initials", newInitial)
    // var newHighScore = timeLeft.value; 
    // localStorage.setItem("highScores", newHighScore)
})

var highScore = document.querySelector("#view-high-score");
console.log(highScore);

// set high score = time left 




var questions = [
    {
        question: "What house was Harry Potter sorted into?",
        answer: [
            {
                value: 1,
                text: "Slytherin",
            },
            {
                value: 2,
                text: "Hufflepuff",
            },
            {
                value: 3,
                text: "Gryffindor",
            },
            {
                value: 4,
                text: "Ravenclaw",
            },
        ],
        correctAnswer: 3
    },
    {
        question: "Who was Harry Potter's best friend?",
        answer: [
            {
                value: 1,
                text: "Cedric Diggory",
            },
            {
                value: 2,
                text: "Draco Malfoy",
            },
            {
                value: 3,
                text: "Professor Sprout",
            },
            {
                value: 4,
                text: "Ron Weasley",
            },
        ],
        correctAnswer: 4
    },
    {
        question: "What spell is used to fight dementors?",
        answer: [
            {
                value: 1,
                text: "Expecto Patronum",
            },
            {
                value: 2,
                text: "Wingardium Leviosa",
            },
            {
                value: 3,
                text: "Stupify",
            },
            {
                value: 4,
                text: "Alohamora",
            },
        ],
        correctAnswer: 1
    },
    {
        question: "What did Hermione Granger's parents do in the muggle world?",
        answer: [
            {
                value: 1,
                text: "Bankers",
            },
            {
                value: 2,
                text: "Dentists",
            },
            {
                value: 3,
                text: "Aurors",
            },
            {
                value: 4,
                text: "Lawyers",
            },
        ],
        correctAnswer: 2
    },
    {
        question: "Who killed Professor Dumbledore?",
        answer: [
            {
                value: 1,
                text: "Lucious Malfoy",
            },
            {
                value: 2,
                text: "Draco Malfoy",
            },
            {
                value: 3,
                text: "Professor Snape",
            },
            {
                value: 4,
                text: "Bellatrix Lastrange",
            },
        ],
        correctAnswer: 3
    },
];

// display current Question

var currentQuestion = 0;
displayCurrentQuestion();

function displayCurrentQuestion() {
    var question = questions[currentQuestion];
    console.log(question);
    questionDiv.innerHTML = "";
    var questionHeading = document.createElement("h3");
    questionHeading.textContent = question.question;
    questionDiv.appendChild(questionHeading);
    // display answers
    var answerOl = document.createElement("ol");
    for (var i = 0; i < question.answer.length; i++) {
        console.log(question.answer[i]);
        answerLi = document.createElement("li");
        answerLi.textContent = question.answer[i].text;
        answerLi.setAttribute("data-answer", question.answer[i].value);
        answerOl.appendChild(answerLi);
    // if user selected answer is wrong display "wrong" and deduct 5 seconds off timer 
    }
    questionDiv.appendChild(answerOl);
}


var number = 75;
var timerId = setInterval(function(){
    number--;
    var numberSpan = document.querySelector("#number");
    numberSpan.textContent = number;
    if (number <= 0) {
        clearInterval(timerId);
        console.log("timer stopped");
    }
}, 1000)

// click view high scores link and taken to a list of previous high scores



