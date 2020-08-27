var buttonEl = document.querySelector("#start");
var possibleAnswersEl = document.querySelector("#possible-answers");

buttonEl.addEventListener("click", generateQuizQuestion);


var generateQuizQuestion = function() {
    var quizQuestionEl = document.createElement("h2");
    quizQuestionEl.className = "data-answer";
    quizQuestionEl.textContent = "This is a new question.";
    possibleAnswersEl.appendChild(quizQuestionEl);
};


var quizQuestions = function() {
    var questions = [
        {
            q: "What house is Harry Potter sorted into?",
            a: [
                {
                    value: 1,
                    text: "Slytherin",
                },
                {
                    value: 2,
                    text: "Hufflepuff"
                },
                {
                    value: 3,
                    text: "Gryffindor"
                },
                {
                    value: 4,
                    text: "Ravenclaw"
                },
            ],
        }
    ]
};

