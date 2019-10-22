let names = "Soo Sue Susan Soorim Serene"
let characters ="Souesnrim"

console.log(names);
console.log(characters);


//split() accepts a delimiter
// let charArray = characters.split('');
let namesArray = names.split(' '); //space is inside.

// console.log(charArray);
console.log(namesArray);

//--------------------------website----------



//console.log(characterlist.toUpperCase());
function generateURL(){
    let characterlist = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charArray = characterlist.split('');
    let randomString = '';
    for(let i = 0; i < 5; i++){
        let randomNum = Math.floor(Math.random()*charArray.length);
        
        let randomChar = charArray[randomNum];
        randomString+= randomChar;
        // console.log(randomNum);
        // console.log(randomChar);
    
        // randomString+=randomChar;
        // console.log(randomString);
    }
    let randomURL = `https://i.imgur.com/${randomString}.jpg`
    return randomURL;
}




// console.log(randomURL);

let container = document.querySelector('#container');
let boexes;
for(let i =0; i <20; i++){
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    boxes = container.querySelectorAll('div');
    boxes[i].classList.add('box');
}


for(let i =0; i <boxes.length; i++){

    let currBox = boxes[i];
    currBox.style.backgroundColor = 'red';
    currBox.innerHTML= generateURL();
    currBox.style.backgroundImage = `url('${generateURL()}')`;
}