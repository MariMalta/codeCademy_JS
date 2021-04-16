const getUserChoice = userInput => {
  if(userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else{
    return console.log('Error!');
  }
};

const getComputerChoice = () => {  
  let number = Math.floor(Math.random() * 3);
  switch(number){
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';      
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return console.log('It was a tie. )');
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return console.log('You won!!!');
    } else{
      return console.log('You lose, better luck next time.');
      }
    }
  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return console.log('You won!!!');
    } else{
      return console.log('You lose, better luck next time.');
      }
    }    
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return console.log('You won!!!');
    } else{
      return console.log('You lose, better luck next time.');
      }
    }        
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();

  determineWinner(userChoice, computerChoice);
 
}

playGame();




 