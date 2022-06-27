function computerPlay(){
    const options = ['Rock', 'Papper', 'Scissors'];
    return options[Math.floor(Math.random()*3)];
}

console.log(computerPlay());