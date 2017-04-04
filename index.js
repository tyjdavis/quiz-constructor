function Question (text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;

  this.isCorrect = function (event) {
    let li = event.target;
    let answerSpace = li.parentElement.nextElementSibling;
    if (li.textContent === this.answer) {
      answerSpace.textContent = "Yup";
    } else {
      answerSpace.textContent = "Nope";
    }
  }
  this.display = function () {
    let source = document.querySelector('#question').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(this);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#quiz article:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
  }
}
let q1 = new Question('What is the JS term for a sequence of characters', ['a word', 'a string', 'a sequence', 'an array'], 'a string');
let q2 = new Question('What is the JS term for elements in an ordered collection', ['a word', 'a string', 'a sequence', 'an array'], 'an array');
[q1, q2].forEach(question => question.display());
