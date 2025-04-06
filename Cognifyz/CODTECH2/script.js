const quizData = [
    {
        question: "🌍 What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "💻 Which programming language is mainly used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "📄 What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(button, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

function checkAnswer(button, correctAnswer) {
    const allOptions = document.querySelectorAll(".option");

    if (button.textContent === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    allOptions.forEach(option => option.disabled = true);
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionText.textContent = `🎉 Quiz Completed! 🎉`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreText.textContent = `🏆 Your Score: ${score} / ${quizData.length}`;
    scoreText.classList.remove("hidden");
}

loadQuestion();
