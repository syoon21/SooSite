function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if(num == 0){
        return 'rock';
    }
    else if (num ==1){
        return 'paper';
    }
    else if (num ==2){
        return 'scissors';
    }
}


let computerChoice = getComputerChoice();
console.log(computerChoice);

function determineWinner(yourChoice, compChoice){
    if(yourChoice == 'bomb'){
        return 'the human won..but at what cost?'
    }

    if(yourChoice == compChoice){
        return 'the game was a tie';
    }

    if(yourChoice == 'rock'){
        if(compChoice == 'paper'){
            return 'the computer won';
        }
        else{
            return 'the human won'
        }
    }
    if(yourChoice == 'scissors'){
        if(compChoice == 'rock'){
            return 'the computer won';
        }
        else{
            return 'the human won'
        }
    }
    if(yourChoice == 'paper'){
        if(compChoice == 'scissors'){
            return 'the computer won';
        }
        else{
            return 'the human won'
        }
    }
    else{ return 'not an option..CHEATER!'}
}

let enterButton = document.querySelector('.enter')
enterButton.addEventListener('click',playGame);

function playGame(){
    let userinputField = document.querySelector('#input');
    let userChoice = userinputField,value;
    let computerChoice = getComputerChoice();
    console.log('human threw '+ userChoice);
    console.log('computer threw '+ userChoice);
    console.log(determineWinner(userChoice),computerChoice);

    let output = document.querySelector('#output');
    output.innerHTML=''
    output.innerHTML+='<p>human threw '+ userChoice + '</p>'
    output.innerHTML+='<p>computer threw'+ computerChoice + '</p>'
    output.innerHTML+='<p id ="Winner">' + determineWinner(userChoice, computerChoice) + '</p>'
    
}