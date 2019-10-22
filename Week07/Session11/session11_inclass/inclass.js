// alert("hey");

// console.log(window)

console.log("hey");

//switch statements
//functions
//classes
//scope
//arrays
//manipulating the Document Object Model


//lets start with function!
function addNums(num1,num2){
    // console.log(num1,num2);
    // return "Your added number =" + num1 +num2;
    return num1 +num2;
}

addNums(1,2);

let myAddedNumber = addNums(1,2);
console.log(myAddedNumber);

function addStringsToNumber(num){
    return "This is my fancy number: " + num;
}

let fancyNum = 10;
console.log(fancyNum);
fancyNum = addStringsToNumber(fancyNum);
console.log(fancyNum);

//scope!
for(let i = 0; i < 7; i++){
    console.log("first loop:" + i);
}
for(let i = 0; i < 7; i++){
    console.log(i);
}

//Arrays

let num = 2;
// let myNumArray = [1,2,3,4,5,6];
let animals = ['fish','cat','dog','horse'];
console.log(animals);

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}
////////////MANIPULATING THE DOM/////

let container = document.querySelector('.container')

for(let i =0; i<30; i++){

    let div = document.createElement('div');
    container.appendChild(div);

}
console.log(container);
let myDivs = container.querySelectorAll('div');
console.log(myDivs.length);

setInterval(function(){
    
    for(let i = 0; i < myDivs.length; i++){
        myDivs[i].classList.add('box');
        // myDivs[i].style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        myDivs[i].style.backgroundColor=`rgb(${Math.random()*255},255,255)`;


        myDivs[i].style.width=`${Math.random()*200}px`;
    }
},100);


// console.log(Math.floor(Math.random()*1000)); for whole number
console.log(Math.random()*1000); 

// // console.log("1:");
// // console.log(container);

// container.appendChild(div);

// console.log("2:");
// console.log(container);

// container.classList.add('box');



// // let innerDiv =document.querySelector('.container').querySelector('div');

// // let innerDiv =document.querySelector('.container').querySelector('div2');

// let innerDiv = container.querySelector('div');


// innerDiv.classList.add('box');

// // document.querySelector('.container')
// // .createElement('div');