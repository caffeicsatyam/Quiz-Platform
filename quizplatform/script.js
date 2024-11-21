let countdown;
let timeRemaining = 10; // 10 seconds
const questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "What color do you get by mixing red and white?",
    "What is the largest mammal?",
    "What year did the Titanic sink?"
];
let currentQuestionIndex = 0;

const questionDisplay = document.getElementById('question');
const countdownDisplay = document.getElementById('countdown');

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function displayQuestion() {
    questionDisplay.textContent = questions[currentQuestionIndex];
}

function startTimer() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Move to the next question
            timeRemaining = 10; // Reset timer
            updateDisplay();
            displayQuestion();
            startTimer(); // Restart the timer for the next question
        }
    }, 1000);
}

// Initial setup
displayQuestion();
updateDisplay();
startTimer();
