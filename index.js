let firstName; // definition
let lastName; // definition
let age = 44; // declaration and defintion
let lightOn = true; // single = is assignment, double == is check

function lightSwitch() {
    if (lightOn == true) { // condition one
        lightOn = false
        console.log(lightOn) // logs to the console the state of lightOn
    }
    else { // condition two
        lightOn = true
        console.log(lightOn) // logs to the console the state of lightOn
    }
}

lightSwitch()
lightSwitch()
lightSwitch()

let numberOne;
let numberTwo;
let total;

function addition(numberOne, numberTwo) {
    total = numberOne + numberTwo
    console.log(total)
}

// console.log(Date())

addition(20, 30) // 50
addition(123, 56) // 179
addition(44, 45) // 89


// algorithm -> 


// declaration & definition
// variable: storage box. 
// firstName: Jacob
// lastName: Reilly-Cooper
// age: 44 
