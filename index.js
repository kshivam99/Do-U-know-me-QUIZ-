var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Shivam",
    score: 7,
  },

  {
    name: "Tony",
    score: 7,
  },
  ,

  {
    name: "Pepper",
    score: 6,
  }
]

// array of objects
var questions = [{
  question: "Where do I live?",
  answer: "Siliguri"
}, {
  question: "100000 Millions Dollars or IQ of Tony Stark, what would I choose, first or second?",
  answer: "second"
},
{
  question: "Why did I choose to do engineering? :p",
  answer: "to make iron man's suit"
},
{
  question: "Which is my Home State?",
  answer: "Bihar"
},
{
  question: "Which experience was the best 5 days of my life?",
  answer: "SSB Interview"
},
{
  question: "What do I mostly eat in Breakfast?",
  answer: "Chura Dahi"
},
{
  question: "What is my most favourite thing, second is coding :D?",
  answer: "Travelling"
}
];

function welcome() {
 var userName = readlineSync.question("Hey, What's your name? ");

  console.log("Welcome "+ userName + " to Do you know me QUIZ? Only A True Friend Will Pass This Quiz");
  console.log("-----------------------");
  console.log("So, here we go ->");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log("Correct Answer is " + answer);
    score--;
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("These are the High Scores:")
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


