let userName = 'Mariana';
let randomNumber = 0;
let eightBall = '';
let userQuestion = 'Will covid-19 stabilize at the end of 2021? ';

userName ? console.log('Hello, Mariana') : console.log('Hello!');

console.log(userQuestion);

randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'I don\'t know';
        break
}
console.log(eightBall);






