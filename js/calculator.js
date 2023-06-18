let displayValue = "";
let decimalApplied = false;
let inputArray = [];

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(){
    //console.log(displayValue);
    inputArray = displayValue.split(/([+*/]|(?<=\d)-)/g);
    //console.log(inputArray);
    while(inputArray.length >1){
        inputArray.filter(x => {
            if(x == "*"){
                inputArray[inputArray.indexOf(x)-1] = multiply(Number(inputArray[inputArray.indexOf(x)-1]), 
                                                                Number(inputArray[inputArray.indexOf(x)+1]));
                inputArray.splice(inputArray.indexOf(x), 2);
                //console.log(inputArray);
            }else if(x == "/"){
                inputArray[inputArray.indexOf(x)-1] = divide(Number(inputArray[inputArray.indexOf(x)-1]), 
                                                                Number(inputArray[inputArray.indexOf(x)+1]));
                inputArray.splice(inputArray.indexOf(x), 2);
                //console.log(inputArray);
            }
        });
        inputArray.filter(x => {
            if(x == "+"){
                inputArray[inputArray.indexOf(x)-1] = add(Number(inputArray[inputArray.indexOf(x)-1]), 
                                                                Number(inputArray[inputArray.indexOf(x)+1]));
                inputArray.splice(inputArray.indexOf(x), 2);
                //console.log(inputArray);
            }else if(x == "-"){
                inputArray[inputArray.indexOf(x)-1] = subtract(Number(inputArray[inputArray.indexOf(x)-1]), 
                                                                Number(inputArray[inputArray.indexOf(x)+1]));
                inputArray.splice(inputArray.indexOf(x), 2);
                //console.log(inputArray);
            }
        });
    }
    document.querySelector(".display").textContent = displayValue + "=" + inputArray[0];
}

function clickInput(input){
    displayValue = document.querySelector(".display").textContent;
    //console.log(displayValue.charAt(displayValue.length-1));
    //console.log(displayValue.charCodeAt(displayValue.length-1));
    if(Number.isInteger(input)){
        document.querySelector(".display").textContent = document.querySelector(".display").textContent + input;
    }else if(((input == "+") || (input == "*") || (input == "/")) &&
            ((displayValue.charCodeAt(displayValue.length-1) >= 48) && 
            (displayValue.charCodeAt(displayValue.length-1) <= 57))){
        document.querySelector(".display").textContent = document.querySelector(".display").textContent + input;
        decimalApplied = false;
    }else if((input == "-") && (displayValue.charAt(displayValue.length-1) != ".") &&
            (displayValue.charAt(displayValue.length-1) != "-") &&
            (displayValue.charAt(displayValue.length-1) != "+")){
        document.querySelector(".display").textContent = document.querySelector(".display").textContent + input;
        decimalApplied = false;
    }else if ((input == ".") && (decimalApplied == false)){
        if((displayValue.charCodeAt(displayValue.length-1) >= 48) && 
            (displayValue.charCodeAt(displayValue.length-1) <= 57)){
            document.querySelector(".display").textContent = document.querySelector(".display").textContent + input;
        }else{
            document.querySelector(".display").textContent = document.querySelector(".display").textContent + "0" + input;
        }
        decimalApplied = true;
    }
    displayValue = document.querySelector(".display").textContent;
}