//Main constructor

function Question (text, answer) {
  this.text = text;
  this.answer = answer;
}




//Multiple Choice constructor

function MultipleChoiceQuestion (text, answer, choices) {
  Question.call(this, text, answer)
  this.choices = choices;
}

//isCorrect prototype

  MultipleChoiceQuestion.prototype.isCorrect = function (event) {
    let li = event.target;
    let answerSpace = li.parentElement.nextElementSibling;
    if (li.textContent === this.answer) {
      answerSpace.textContent = "Correct";
    } else {
      answerSpace.textContent = "Wrong";
    }
  }

//display prototype

  MultipleChoiceQuestion.prototype.display = function () {
    let source = document.querySelector('#multipleChoice').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(this);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#quiz article:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
  }



/*

//Short Answer constructor

function ShortAnswerQuestion (text, answer, blank) {
  Question.call(this, text, answer);
  this.blank = blank;
}

//isCorrect prototype

ShortAnswerQuestion.prototype.isCorrect = function (event) {
  let space = document.getElementById("text").value;
  let li = event.target;
  let answerSpace = li.nextElementSibling;
  if (space === this.answer) {
    answerSpace.textContent = "Yup";
  } else {
    answerSpace.textContent = "Try again...";
  }
}

//display prototype

ShortAnswerQuestion.prototype.display = function () {
  let source = document.querySelector('#shortAnswer').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(this);
  document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
  document.querySelector('#submit').addEventListener('click', this.isCorrect.bind(this));
}



//new constructors

let q1 = new MultipleChoiceQuestion('1. Where is the best place to insert the JavaScript <script> tag in your html?','the bottom of the <body> section', ['the bottom of <head> section', 'the bottom of the <body> section', 'the <title> section', 'does not matter']);
let q2 = new ShortAnswerQuestion('2. How many days did it take Brendan Eich to create JavaScript in 1995?','10');
[q1, q2].forEach(question => question.display());

*/



fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy')
.then(response => response.json())
.then(jsonData => jsonData.results) //returns an array of results
.then(getQuestionsFromAPI)
.then(displayQuestion)


function getQuestionsFromAPI (arr) {
return arr.map(function (object) {   //object is the elements within the array
  let choices = object.incorrect_answers;
  choices.push(object.correct_answer);
  let newQuestion = new MultipleChoiceQuestion(object.question, object.correct_answer, choices)
  return newQuestion;
})
}

function displayQuestion (arr) {
  arr.forEach(question => question.display());
}




let url = "http://putsreq.com/D0b3ymZkJOmQwdpvx9Tp";

function fetchInit (data) {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

let form = document.querySelector('form');
form.addEventListener('submit', function(event){
  event.preventDefault();
  let order = {
    userName: form.querySelector('input[name=firstName]').value,
    score: form.querySelector('input[name=score]').value,
    //soda: form.querySelector('input[name=drink]').value
  }
  fetch(url, fetchInit(order))
  .then(response => response.json())
  .then(jsonData => console.log(jsonData))
})
