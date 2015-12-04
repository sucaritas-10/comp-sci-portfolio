// This is the inputs 
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

// 
button.addEventListener("click", doMath);

// This is the functions  
function doMath() {
    // This adds the numbers
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }   
    // This takes away numbers
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    // This times the numbers 
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This divides rwo numbers 
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This calculates the the sqrt root of the number 
    if (dropdown.value == "sqrt"){
        answer = Math.sqrt(parseInt(input1.value)) ;
        display.innerHTML = answer;
    }
    //This claculates the power of a number
     if (dropdown.value == "^"){
       answer = Math.pow(parseInt(input1.value), parseInt(input2.value));
       display.innerHTML = answer;
     }
}