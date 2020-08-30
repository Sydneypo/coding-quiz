// variables
var questionDiv = document.querySelector("#question");
//questionDiv.addEventListener("click", selectAnswer);



var startQuiz = function(event) {
    var number = 75;
    var timerId = setInterval(function(){
        number--;
    document.getElementById("question").removeAttribute("hidden");
    document.getElementById("instructions").setAttribute("hidden", true);
    var numberSpan = document.querySelector("#number");
        numberSpan.textContent = number;
    if (number <= 0 || currentQuestion > questions.length - 1) {
        clearInterval(timerId);
        var getScore = document.getElementById("submit-info");
        getScore = document.createElement("ul");
        getScore.textContent = number;
        var timeLeft = document.getElementById("submit-info");
        timeLeft.appendChild(getScore);
        quizOver();
    }
    
    }, 1000);
}



var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

var selectAnswer = function(event) {
    var userAnswer = event.target.getAttribute("data-answer");
    console.log(event.target.getAttribute("data-answer"));
    var answerDiv = document.getElementById("userAnswer");
    if (userAnswer == questions[currentQuestion].correctAnswer) {  
        answerDiv.textContent = "Correct!";

    } else {
        answerDiv.textContent = "Wrong!";
    }

    currentQuestion++;
    displayCurrentQuestion();
}

questionDiv.addEventListener("click", selectAnswer);



var main = document.querySelector("main");


var submitButton = document.querySelector("#submit-info");
submitButton.addEventListener("click", function(event) {
    nameScoreField();
});

var nameScoreField = function(event) {
    var playerInitials = document.querySelector("input[name='playerInitials']").value;
        console.log(playerInitials);

    var createList = document.createElement("ul");
    createList.textContent = playerInitials;
    var viewHighScoresDiv = document.querySelector("#submit-info");
    viewHighScoresDiv.appendChild(createList);

    saveItems();
  
};

var quizOver = function(event) {
    document.getElementById("submit-info").removeAttribute("hidden");
    document.getElementById("userAnswer").setAttribute("hidden", true);
    saveItems();
};

// var saveValues = function(event) {
//     var savedInitials = document.querySelector("input[name='playerInitials']").value;
//     localStorage.setItem("Initials", savedInitials);
//     var newHighScore = timeLeft; 
//     localStorage.setItem("highScores", newHighScore);
    
// }
 


  




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
};

var saveItems = function() {
    var playerInitials = document.querySelector("input[name='playerInitials']").value
    localStorage.setItem("Initials", playerInitials);

};


var viewHighScores = function() {
    document.getElementById("playerName").setAttribute("hidden", true);
    document.getElementById("submitScores").setAttribute("hidden", true);

}





// click view high scores link and taken to a list of previous high scores
