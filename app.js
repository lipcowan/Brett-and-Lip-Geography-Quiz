/* eslint-disable no-undef */

const STORE = {
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  questions: [
    //theme: geography
    {
      //welcome screen
      image: "images/welcome.jpg",
      question: "Welcome",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "",
      buttonText: "Start Game!",
    },
    {
      //question 1
      image: "images/canada.jpg",
      question: "Which of the following is a country?",
      answers: ["Illinois", "Africa", "Canada", "Fred"],
      correctAnswer: "Canada",
      buttonText: "Submit",
    },
    {
      //question 2
      image: "images/concord.jpg",
      question: "What is the capital of New Hampshire?",
      answers: ["Manchester", "Nashua", "Concord", "Istanbul"],
      correctAnswer: "Concord",
      buttonText: "Submit",
    },
    {
      //question 3
      image: "images/australia.jpg",
      question: "Which of these is a country AND a continent?",
      answers: ["Australia", "Antarctica", "North America", "South America"],
      correctAnswer: "Australia",
      buttonText: "Submit",
    },
    {
      //question 4
      image: "images/russia.jpg",
      question: "Which Country is the largest? (area)",
      answers: ["USA", "Canada", "Russia", "India"],
      correctAnswer: "Russia",
      buttonText: "Submit",
    },
    {
      //question 5
      image: "images/china.jpg",
      question: "Which country has the largest population?",
      answers: ["India", "Russia", "Japan", "China"],
      correctAnswer: "China",
      buttonText: "Submit",
    },
    {
      //end screen
      image: "images/thatsall.jpg",
      question: "The End! Click to play again!",
      answers: ["", "", "", ""],
      correctAnswer: "",
      buttonText: "Play again!",
    }
  ]
};

function main() {
  render(STORE.questionNumber, "welcome");
  eventListeners();
}
function eventListeners() {
  $("html").on("click", "#submitAnswer", function (event) {
    handleSubmitAnswerClicked(event);
  });
  $("html").on("click", "#nextQuestion", function (event) {
    handleNextQuestionClicked(event);
  });
  $("html").on("click", "#startGame", function (event) {
    handleStartGameClicked(event);
  });
  $("html").on("click", "#newGame", function (event) {
    handleNewGameClicked(event);
  });
}

function handleSubmitAnswerClicked(event) {
  event.preventDefault();
  let answer = $("input[name='option']:checked").val();
  if (!answer) alert("Please select an answer from below");
  if (grader(STORE.questionNumber, answer))
    render(STORE.questionNumber, "correct");
  else render(STORE.questionNumber, "incorrect");
}

function handleNextQuestionClicked(event) {
  event.preventDefault();
  STORE.questionNumber = STORE.questionNumber + 1;
  if (STORE.questionNumber < STORE.questions.length - 1)
    render(STORE.questionNumber, "question");
  else render(STORE.questionNumber, "end");
}

function handleStartGameClicked(event) {
  event.preventDefault();
  STORE.questionNumber = 1;
  render(STORE.questionNumber, "question");
}

function handleNewGameClicked(event) {
  event.preventDefault();
  STORE.questionNumber = 0;
  render(STORE.questionNumber, "welcome");
}

function render(i, screen) {
  $("h1").html(`Geography Quiz`);
  switch (screen) {
    case "welcome":
      $("main").html(getWelcome(i));
      break;
    case "question":
      $("main").html(getQuestion(i));
      break;
    case "correct":
      $("main").html(getRightAnswer(i));
      break;
    case "incorrect":
      $("main").html(getWrongAnswer(i));
      break;
    case "end":
      $("main").html(getEnd(i));
      break;
    default:
      $("main").html(getWelcome(i));
      break;
  }

  $("main").html();
}

function grader(i, answer) {
  console.log(answer, STORE.questions[i].correctAnswer);

  if (answer == STORE.questions[i].correctAnswer) {
    STORE.score = STORE.score + 1;
    console.log(STORE.score);
    //alert("Correct!");
  } else {
    //alert(`Sorry the correct answer is: ${questions[i].correctAnswer}`);
  }
  return answer == STORE.questions[i].correctAnswer;
  // return true/false
}

// ---

function getWelcome() {
  const welcomeScreen = `<div class="box">
  <div class="pictureBox"><img width= 300 src="images/welcome.jpg" alt="welcome"></div>
  <form>
  <div>
    <button id="startGame">Start Game!
    </button>
  </div>
</form> 
</div>`;

  return welcomeScreen;
}

function getQuestion(i) {
  const questionTemplate = `
<div class="box">
  <div class="stats">
    <p>Question# ${i} of ${STORE.questions.length - 2}</p>
    <p>Score: ${STORE.score}</p>
  </div>
  <div class="pictureBox"><img width= 300 src="images/question.jpg" alt="Question"></div>
  <div class="question">${STORE.questions[i].question}</div>
<form>
  <div class= "answers">
    <input type="radio" id="optionA" name="option" value="${
      STORE.questions[i].answers[0]
    }">
    <label for="optionA"> ${STORE.questions[i].answers[0]} </label><br>
    <input type="radio" id="optionB" name="option" value="${
      STORE.questions[i].answers[1]
    }">
    <label for="optionB"> ${STORE.questions[i].answers[1]} </label><br>
    <input type="radio" id="optionC" name="option" value="${
      STORE.questions[i].answers[2]
    }">
    <label for="optionC"> ${STORE.questions[i].answers[2]} </label>
    <input type="radio" id="optionD" name="option" value="${
      STORE.questions[i].answers[3]
    }">
    <label for="optionD"> ${STORE.questions[i].answers[3]} </label>
  </div>
  <div>
    <button id="submitAnswer">${STORE.questions[i].buttonText}
    </button>
  </div>
</form> 
</div>`;
  return questionTemplate;
}

function getRightAnswer(i) {
  const answerTemplate = `
  <div class="box">
    <div class="stats">
      <p>Question# ${i} of ${STORE.questions.length - 2}</p>
      <p>Score: ${STORE.score}</p>
    </div>
    <div class="pictureBox"><img width= 300 src="${STORE.questions[i].image}" alt="${
    STORE.questions[i].image
  }"></div>
    <div class="question correct">GREAT JOB! ${STORE.questions[i].correctAnswer} was the correct answer</div>
  <form>
    <div>
      <button id="nextQuestion">Next Question
      </button>
    </div>
  </form> 
  </div>`;
  return answerTemplate;
}

function getWrongAnswer(i) {
  const answerTemplate = `
  <div class="box">
    <div class="stats">
      <p>Question# ${i} of ${STORE.questions.length - 2}</p>
      <p>Score: ${STORE.score}</p>
    </div>
    <div class="pictureBox"><img width = 300 src="${STORE.questions[i].image}" alt="${
    STORE.questions[i].image
  }"></div>
    <div class="question incorrect">INCORRECT: The correct answer was ${
      STORE.questions[i].correctAnswer
    }</div>
  <form>
    <div>
      <button id="nextQuestion">Next Question
      </button>
    </div>
  </form> 
  </div>`;
  return answerTemplate;
}

function getEnd() {
  const endScreen = `
  <div class="box">
    <div class="stats">
      <p></p>
      <p>Score: ${STORE.score}/${STORE.questions.length - 2}</p>
    </div>
    <div class="pictureBox"><img width = 300 src="images/thatsall.jpg" alt="The End"></div>
    <div class="question">Congratulations! You've completed the quiz. You got ${STORE.score} questions right, would you like to take it again?</div>
  <form>
    <div>
      <button id="newGame">Start Over?
      </button>
    </div>
  </form> 
  </div>`;
  return endScreen;
}

$(main);

/*

function QuestionScreen

  function renderQuestions

  *multiple choice question  ---- keyboard accessible
    *A
    *B
    *C
    *D

  * submit button

  function quizGrader --- intermediate determines question correctness
    * correct answer --- "Congrats"
    * incorrect answer -- "Sorry - the correct answer was X"
  * pulling from a correctAnswers array


  function runningScore  - displayed on all question screens
   * correct answers / index#


  function endScreen
  * final score
  * "congrats yada yada"
  * play again button


** Variables ***********

Array of Question Objects  --- do we build a constructor like with LOTR?


currentQuestion

currentScore

  */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/* HTML WireFrame */

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */
