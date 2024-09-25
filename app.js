// Quiz categories with their respective questions, options, and correct answer index
let categories = {
    "Pipes and Cisterns": [
        // Each question has options and the correct answer (index in options array)
        { question: "Pipe A can fill a tank in 20 hours. How much time will it take for 2 pipes?", options: ["10", "20", "30", "40"], correct: 1 },
        { question: "Pipe B can empty the tank in 10 hours. How much time will it take for 3 pipes?", options: ["15", "25", "35", "45"], correct: 2 },
        { question: "Pipe C can fill a tank in 12 hours, while Pipe D can empty it in 15 hours. If both are opened together, how long will it take to fill the tank?", options: ["60", "45", "30", "36"], correct: 3 },
        { question: "Pipe A can fill the tank in 6 hours. If Pipe B, which can empty the tank in 12 hours, is opened after 2 hours, how much longer will it take to fill the tank?", options: ["8", "6", "12", "10"], correct: 0 },
        { question: "A pipe can fill a cistern in 8 hours, but due to a leakage, it takes 10 hours. How long will the leak take to empty the cistern?", options: ["40", "20", "30", "50"], correct: 1 },
        { question: "If two pipes A and B can fill a tank in 6 and 8 hours respectively, how long will they take if opened together?", options: ["3.43", "3", "4.36", "5"], correct: 0 },
        { question: "Pipe A fills the tank in 5 hours, and Pipe B can empty it in 10 hours. Both are opened together. How long will it take to fill the tank?", options: ["10", "15", "20", "30"], correct: 3 },
        { question: "Two pipes can fill a cistern in 12 minutes and 15 minutes, respectively. How much time will they take if both are opened together?", options: ["6", "7.5", "8", "9"], correct: 1 },
        { question: "A pipe fills a tank in 6 hours, but a second pipe empties it in 8 hours. Both are opened together. What is the net fill rate?", options: ["1/24", "1/12", "1/6", "1/8"], correct: 0 },
        { question: "Three pipes A, B, and C can fill a tank in 12, 15, and 20 hours, respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["3", "5", "4", "6"], correct: 2 },
    ],

    "Probability": [
        // Similar question structures for the "Probability" category
        { question: "What is the probability of getting a 6 on a die?", options: ["1/2", "1/6", "1/4", "1/3"], correct: 1 },
        { question: "What is the probability of drawing an Ace from a deck?", options: ["1/13", "1/52", "1/4", "1/26"], correct: 0 },
        { question: "What is the probability of drawing a red card from a deck of cards?", options: ["1/2", "1/3", "1/4", "1/8"], correct: 0 },
        { question: "What is the probability of getting heads in a single coin toss?", options: ["1/2", "1/3", "1/4", "1/6"], correct: 0 },
        { question: "Two dice are rolled. What is the probability of getting a sum of 7?", options: ["1/6", "1/36", "1/18", "1/12"], correct: 0 },
        { question: "If a bag contains 3 red and 2 blue balls, what is the probability of drawing a red ball?", options: ["1/2", "2/5", "3/5", "1/3"], correct: 2 },
        { question: "What is the probability of selecting a king from a deck of 52 cards?", options: ["1/13", "1/52", "1/4", "1/26"], correct: 0 },
        { question: "A coin is tossed twice. What is the probability of getting at least one heads?", options: ["1/2", "3/4", "1/4", "1/8"], correct: 1 },
        { question: "What is the probability of drawing a queen from a deck of cards?", options: ["1/13", "1/26", "1/52", "1/4"], correct: 0 },
        { question: "What is the probability of getting two tails when tossing two coins?", options: ["1/4", "1/2", "3/4", "1/8"], correct: 0 },
    ],

    // Additional categories omitted for brevity...
};

// State variables
let currentCategory = '';  // Stores the currently selected category
let currentQuestion = 0;   // Tracks the index of the current question
let score = 0;             // Stores the player's score
let timer;                 // Timer variable for tracking quiz time
let timeElapsed = 0;       // Elapsed time in seconds
let correctAnswers = 0;    // Tracks the number of correct answers

// Starts the quiz when the "Start Quiz" button is clicked
function startQuiz() {
    // Get the user's name from the input field
    const name = document.getElementById('user-name').value.trim();
    if (name === '') {
        // If no name is entered, show an error message
        document.getElementById('name-error').classList.remove('hidden');
        return;
    } else {
        // Hide the error message if the name is valid
        document.getElementById('name-error').classList.add('hidden');
    }

    // Hide the home page and display the quiz page
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');

    // Reset quiz state and start the timer
    resetQuiz();
    startTimer();
    showQuestion();
}

// Called when a category is selected, enabling the "Start Quiz" button
function selectCategory(category) {
    const name = document.getElementById('user-name').value.trim();
    if (name === '') {
        // Show error if no name is provided
        document.getElementById('name-error').classList.remove('hidden');
        return;
    } else {
        // Hide error message
        document.getElementById('name-error').classList.add('hidden');
    }

    // Store the selected category and show the start button
    currentCategory = category;
    document.getElementById('start-quiz-button').classList.remove('hidden');
}

// Displays the current question and options to the user
function showQuestion() {
    // Get the current question data based on category and question index
    const quizData = categories[currentCategory][currentQuestion];

    // Update question number and text
    document.getElementById('question-number').innerText = `Question ${currentQuestion + 1}`;
    document.getElementById('question-text').innerText = quizData.question;

    // Update the options for the question
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach((btn, index) => {
        btn.innerText = quizData.options[index];
        btn.disabled = false; // Enable buttons for the next question
        btn.style.backgroundColor = ''; // Reset button background color
    });

    // Hide the "Next Question" button initially
    document.getElementById('next-question').classList.add('hidden');
}

// Checks the selected answer and updates the score
function checkAnswer(selected) {
    // Get the current question data
    const quizData = categories[currentCategory][currentQuestion];
    const buttons = document.querySelectorAll('.options button');

    // Check if the selected answer is correct
    buttons[selected].style.backgroundColor = (selected === quizData.correct) ? '#5cb85c' : '#d9534f'; // Green for correct, red for incorrect

    // Update score if the answer is correct
    if (selected === quizData.correct) {
        score += 10;
        correctAnswers++;
    }
    
    // Disable all buttons and show the correct answer
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === quizData.correct) {
            btn.style.backgroundColor = '#5cb85c'; // Green for the correct answer
        }
    });
    
    // Update score display
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('next-question').classList.remove('hidden'); // Show the "Next Question" button
}

// Moves to the next question or shows the results if the quiz is finished
function nextQuestion() {
    if (currentQuestion < categories[currentCategory].length - 1) {
        // Move to the next question
        currentQuestion++;
        showQuestion();
    } else {
        // End quiz and show results
        clearInterval(timer); // Stop the timer
        showResults();
    }
}

// Displays the results at the end of the quiz
function showResults() {
    // Calculate quiz statistics
    const totalQuestions = categories[currentCategory].length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = (score / (totalQuestions * 10)) * 100;

    // Update the results page with the stats
    document.getElementById('result-time').innerText = `Time taken: ${Math.floor(timeElapsed / 60)} minutes ${timeElapsed % 60} seconds`;
    document.getElementById('result-attempts').innerText = `Questions attempted: ${totalQuestions}`;
    document.getElementById('result-correct').innerText = `Correct answers: ${correctAnswers}`;
    document.getElementById('result-wrong').innerText = `Incorrect answers: ${wrongAnswers}`;
    document.getElementById('result-score').innerText = `Final Score: ${scorePercentage.toFixed(2)}%`;

    // Hide quiz page and show results page
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('results-page').classList.remove('hidden');
}

// Restarts the quiz by resetting all state variables
function restartQuiz() {
    resetQuiz(); // Reset the quiz state
    showQuestion(); // Start from the first question
    document.getElementById('quiz-page').classList.remove('hidden');
    document.getElementById('results-page').classList.add('hidden');
    startTimer(); // Restart the timer
}

// Resets the quiz state to default
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    timeElapsed = 0;
    correctAnswers = 0;
    document.getElementById('score').innerText = `Score: 0`;
}

// Navigates back to the home page from the results page
function goToHome() {
    document.getElementById('results-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
    resetQuiz();
    clearInterval(timer); // Stop the timer when returning to home
}

// Starts the timer for tracking quiz duration
function startTimer() {
    // Clear any previous timer
    clearInterval(timer);
    timeElapsed = 0;

    // Increment the time every second and update the display
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById('timer').innerText = `Time: ${Math.floor(timeElapsed / 60)}m ${timeElapsed % 60}s`;
    }, 1000);
}
