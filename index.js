function Question (text, list_of_choices, correct_answer) {
  this.main = text;
  this.choices = list_of_choices;
  this.answer = correct_answer;

//come back to below section
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

let firstQuestion = new Question("What is Javascript?", jsChoices, 'A programming language') //placeholder question



//printing to html

let source = document.querySelector("#quiz-question").innerHTML;
let template = Handlebars.compile(source);
let html = template(firstQuestion);
let destination = document.querySelector('.handlebars-demo');
destination.innerHTML = html;



function rightAnswer (event) {
  event.preventDefault();
  console.log('ok');
  let answer = document.querySelector('radio'); //not able to select individual answer with how it's set up in html
  console.log(answer)

}


let userClick = document.querySelector('form');
userClick.addEventListener("submit", rightAnswer)
