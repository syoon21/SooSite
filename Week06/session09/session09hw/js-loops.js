//1. name 6 times with a number on the end

for(let i = 0; i < 6; i++){
    console.log("Soo"+ i +"!");
}
//2. while-loop to print a string of incrementing numbers

let number = "";
let string = 0;
while(string < 10) {

    number += string; 
    console.log(number);
    string ++;
}

//3.pattern

let showthis = "";
for(let i = 0; i < 20; i++){
    if(i % 2 == 0){
        showthis += "+";
    }
    else {
        showthis += "-";
    }
}
console.log(showthis);

//4.stars

let star = "*"
for(let i =0; i<10; i++){
    for(let j =0; j < i ;j++){
        star += "*";
    }
    console.log(star);
    star = "*";
}