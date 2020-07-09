/* eslint-disable no-undef */
'use strict';

let questions = [  //theme: geography
  { //welcome screen
    image: 'images/welcome.jpg',
    question: 'Welcome',
    answers: ['1', '2', '3', '4'],
    correctAnswer: '',
    buttonText: 'Start Game!'

  },
  { //question 1
    image: 'images/canada.jpg',
    question: 'Which if the following is a country?',
    answers: [
      'Illinois',
      'Africa',
      'Canada',
      'Fred'
    ],
    correctAnswer: 'Canada',
    buttonText: 'Submit'
  },
  {//question 2
    image: 'images/concord.jpg',
    question: 'What is the capital of New Hampshire?',
    answers: [
      'Manchester',
      'Nashua',
      'Concord',
      'Istanbul'
    ],
    correctAnswer: 'Concord',
    buttonText: 'Submit'
  },
  {//question 3
    image: 'images/Australia.jpg',
    question: 'Which of these is a country AND a continent?',
    answers: [
      'Australia',
      'Antarctica',
      'North America',
      'South America'
    ],
    correctAnswer: 'Australia',
    buttonText: 'Submit'
  },
  {//question 4
    image: 'images/russia.jpg',
    question: 'Which Country is the largest? (area)',
    answers: [
      'USA',
      'Canada',
      'Russia',
      'India'
    ],
    correctAnswer: 'Russia',
    buttonText: 'Submit'
  },
  {//quation 5
    image: 'images/china.jpg',
    question: 'Which country has the largest population?',
    answers: [
      'India',
      'Russia',
      'Japan',
      'China'
    ],
    correctAnswer: 'China',
    buttonText: 'Submit'
  },
  {//end screen
    image: 'images/thatsall.jpg',
    question: 'The End! Click to play again!',
    answers: ['','','',''],
    correctAnswer: '',
    buttonText: 'Play again!'
  }
];

const STORE = {
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
// -----
function main() {

  renderScreen(0);

}

let i = 0;

$('html').on('click', 'button', function(event) {
  event.preventDefault();
  let answer = $("input[name='option']:checked").val();
  
  if(!answer) {
    alert('Please select an answer from below');
  }
  
  else{ 
  console.log('worked', i);
  console.log(grader(i,answer));
  if (i<questions.length-1) i++;
  else i = 0;

  renderScreen(i);
  }
});

// ---

function renderScreen(i) {

  $('h1').html(`
  <div>
  Our Game
  </div>`);

  const template = `
  <div class="box">
    <div class="stats">
      <p>Question# ${i} of ${questions.length-1}</p>
      <p>Score: ${STORE.score}</p>
    </div>
    <div class="box"><img height = 300px width = 300px src="${questions[i].image}"></div>
    <div class="question">${questions[i].question}</div>
  <form>
    <div class= "answers">
      <input type="radio" id="optionA" name="option" value="${questions[i].answers[0]}">
      <label for="male">${questions[i].answers[0]}</label><br>
      <input type="radio" id="optionB" name="option" value="${questions[i].answers[1]}">
      <label for="female">${questions[i].answers[1]}</label><br>
      <input type="radio" id="optionC" name="option" value="${questions[i].answers[2]}">
      <label for="other">${questions[i].answers[2]}</label>
      <input type="radio" id="optionD" name="option" value="${questions[i].answers[3]}">
      <label for="other">${questions[i].answers[3]}</label>
    </div>
    <div>
      <button class="submit">${questions[i].buttonText}
      </button>
    </div>
  </form> 
</div>`;

  $('main').html(template);
}






function grader(i,answer) {
console.log(answer, questions[i].correctAnswer);

if (answer == questions[i].correctAnswer){
  STORE.score += 1 ;
  console.log(STORE.score);
  alert("Correct!");
}
else {
  alert(`Sorry the correct answer is: ${questions[i].correctAnswer}`);
}
  return (answer == questions[i].correctAnswer);
// return true/false
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


  function runningScore  - desplayed on all question screens
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