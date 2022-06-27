function humanPlay(){
    const options = ['rock', 'papper', 'scissors'];
    const user = prompt('Enter rock, papper, scissors').toLowerCase();

    if(options.includes(user)){
        return user
    }
    else{
        return 'input not valid';
    }
}

function computerPlay(){
    const options = ['rock', 'papper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function singleRound(){
    const human = humanPlay();
    const computer = computerPlay();

    return `human: ${human}, computer: ${computer} \n${winningConditions(human, computer)}`;
}

function winningConditions(human, computer){
    if(human === computer){
        return "It's a draw!";
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

console.log(singleRound());