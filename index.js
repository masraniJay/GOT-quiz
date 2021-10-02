var readlineSync = require('readline-sync');
var score = 0;
function play (question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log('You are right!');
    score++;
  }
  else{
    console.log('You are wrong!');
  }
  console.log('Your score is: ', score);
  console.log('---*---*---*---');
  console.log(' ');
}
var quiz = [{question:"How many sons Edard Stark has? ", answer:"3"}, {question:"What is Jon's real name? ", answer:"Aegon Targaryan"}, {question:"Who is the three-eyed raven? ", answer:"Brandon Stark"}, {question:"Who is the hand of the king at last? ", answer:"Tyrion Lannister"}, {question:"Who killed Joffery Baratheon? ", answer:"Littlefinger"}, {question:"Where was Barriston the bold killed? ", answer:"Mercia"}, {question:"Who won The Battle of Bastards? ", answer:"Jon"}]
var userName = readlineSync.question('What is your name? ');
console.log('Welocme ' + userName + ' to the quiz.')
for(i=0;i<=quiz.length-1;i++){
play(quiz[i].question,quiz[i].answer);
}
console.log('Thankyou for playing. Your final score is:', score);