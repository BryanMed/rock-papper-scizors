function humanPlay(){
    const options = ['rock', 'papper', 'scissors'];
    const user = prompt('Enter rock, papper, scissors').toLowerCase();

    return user;
}

function computerPlay(){
    const options = ['rock', 'papper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function singleRound(){
    const human = humanPlay();
    const computer = computerPlay();

    return winningConditions(human, computer);
}

function winningConditions(human, computer){
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
    let humanWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 3; i++){
        let result = singleRound();
        if(result === 'computer wins'){
            computerWins++;
            console.log(`Round ${i+1} goes to Computer`);
        }
        else if(result === 'human wins'){
            humanWins++;
            console.log(`Round ${i+1} goes to Human`);
        }
        else{
            console.log('Its a draw');
        }
    }

    if(computerWins>humanWins){
        console.log('Computer is the winner');
    }
    else if(computerWins < humanWins){
        console.log('You are the winner bb');
    }
    else{
        console.log('Its a draaaw');
    }
}

game();