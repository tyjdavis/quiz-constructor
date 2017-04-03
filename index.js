

function Question (text, list_of_choices, correct_answer) {
  this.main = text;
  this.choices = list_of_choices;
  this.answer = correct_answer;
  this.userChoice = '';
  this.isCorrect = function () {
    if (this.userChoice === this.answer){
      return "Correct!"
    } else{
      return "No Sorry!"
    }
  }
}

let jsChoices = ['Bacon', 'Pickles', 'Pizza', 'A programming language'];

let firstQuestion = new Question("What is Javascript?", jsChoices, 'A programming language')

console.log(firstQuestion);


let source = document.querySelector("#quiz-question").innerHTML;
let template = Handlebars.compile(source);
let html = template(firstQuestion);
let destination = document.querySelector('.handlebars-demo');
destination.innerHTML = html;
