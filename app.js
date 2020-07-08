/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required

  questions: [  //theme: geography
    {
      question: 'Which if the following is a country?',
      answers: [
        'Illinois',
        'Africa',
        'Canada',
        'Fred'
      ],
      correctAnswer: 'Canada'
    },
    {
      question: 'What is the capital of New Hampshire?',
      answers: [
        'Manchester',
        'Nashua',
        'Concord',
        'Istanbul'
      ],
      correctAnswer: 'Concord'
    },
    {
      question: 'Which of these is a country AND a continent?',
      answers: [
        'Australia',
        'Antarctica',
        'North America',
        'South America'
      ],
      correctAnswer: 'Australia'
    },
    {
      question: 'Which Country is the largest? (area)',
      answers: [
        'USA',
        'Canada',
        'Russia',
        'India'
      ],
      correctAnswer: 'Russia'
    },
    {
      question: 'Which country has the largest population?',
      answers: [
        'India',
        'Russia',
        'Japan',
        'China'
      ],
      correctAnswer: 'China'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};



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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


/* HTML WireFrame */

function main(){

  renderScreen(welcome);

}

let welcome = `
<div class="box">
  <div class="stats">
    <p>Question# 1 of 5</p>
    <p>Score: 4 right, 3 wrong</p>
  </div>
  <div class="box"><img height = 200px width = 200px src="images/welcome.jpg"></div>
  <div class="questions">questions</div>
  <div class="answers">answers</div>
  <div>
    <button class="submit">Start Game!
    </button>
  </div>

</div>
`;

function renderScreen(screenType){
  $("h1").html(`
  <div>
  Our Game
  </div>`)
  $("main").html(screenType);

}

$(main)
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