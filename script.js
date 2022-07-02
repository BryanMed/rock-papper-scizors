const buttons = document.querySelectorAll('button');
const gameWinnerPrompt = document.querySelector('.game-winner');
const roundWinnerPrompt = document.querySelector('.round-winner');
const score = document.querySelector('.score');

function computerPlay(){
    const options = ['rock', 'papper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function singleRound(human){
    return winningConditions(human, computerPlay());
}

const winningConditions = (human, computer) => {
    if(human === computer){
        return "draw";
    }
    else if(human === 'rock' && computer === 'papper'){
        return 'computer wins';
    }
    else if(human === 'papper' && computer === 'scissors'){
        return 'computer wins';
    }
    else if(human === 'scissors' && computer === 'rock'){
        return 'computer wins';
    }
    else{
        return 'human wins';
    }
}
    

function game(){
    
    let computerWins = 0;
    let humanWins = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        let roundWinner = winningConditions(button.id, computerPlay());

        if(roundWinner === 'computer wins'){
            computerWins++;
        }
        else if(roundWinner === 'human wins'){
            humanWins++;
        }

        if(computerWins === 3 || humanWins === 3){
            const winner = computerWins>humanWins ? 'Computer' : 'Human';
            roundWinnerPrompt.textContent = '';
            gameWinnerPrompt.textContent = `${winner} is the Winner`;
            buttons.forEach(button => {
                button.style.display = 'none';
        });
       }else{
        if(computerWins === 3 || humanWins === 3){
        const winner = computerWins>humanWins ? 'Computer' : 'Human';
        gameWinnerPrompt.textContent = `${winner} is the Winner`;
        roundWinnerPrompt.textContent = '';
        buttons.forEach(button => {
            button.style.display = 'none';
    });
   }   roundWinnerPrompt.textContent = `${roundWinner} this round`;
           score.textContent =`Human: ${humanWins} - Computer: ${computerWins}`;
       }
        
       });
    });
}



game(); 