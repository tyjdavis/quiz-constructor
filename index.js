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
      answerSpace.textContent = "Yup";
    } else {
      answerSpace.textContent = "Nope";
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
    answerSpace.textContent = "Nope";
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

let q1 = new MultipleChoiceQuestion('1. Where is the best place to insert the JavaScript script tag in html?','the bottom of the <body> section', ['the bottom of <head> section', 'the bottom of the <body> section', 'the <title> section', 'does not matter']);
let q2 = new ShortAnswerQuestion('2. What is your favorite thing about JavaScript?','nothing');
[q1, q2].forEach(question => question.display());
