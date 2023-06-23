let displayValue = "";
let decimalApplied = false;
let calculationDone = false;
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
    console.log(displayValue);
    inputArray = displayValue.split(/([+*/]|(?<=\d)-)/g);
    console.log(inputArray);
    while(inputArray.length > 1){
        for(let x = 0; x <= inputArray.length; x++){
            console.log("x = " + x + " ; Element: "+ inputArray[x]);
            if(inputArray[x] == "*"){
                inputArray[x-1] = multiply(Number(inputArray[x-1]), Number(inputArray[x+1]));
                inputArray.splice(x, 2);
                console.log(inputArray);
                x -= 1;
            }else if(inputArray[x] == "/"){
                inputArray[x-1] = divide(Number(inputArray[x-1]), Number(inputArray[x+1]));
                inputArray.splice(x, 2);
                console.log(inputArray);
                x -= 1;
            }
        }
        for(let x = 0; x <= inputArray.length; x++){
            console.log("x = " + x + " ; Element: "+ inputArray[x]);
            if(inputArray[x] == "+"){
                inputArray[x-1] = add(Number(inputArray[x-1]), Number(inputArray[x+1]));
                inputArray.splice(x, 2);
                console.log(inputArray);
                x -= 1;
            }else if(inputArray[x] == "-"){
                inputArray[x-1] = subtract(Number(inputArray[x-1]), Number(inputArray[x+1]));
                inputArray.splice(x, 2);
                console.log(inputArray);
                x -= 1;
            }
        }
    }
    document.querySelector(".display").textContent = displayValue + "=" + inputArray[0];
    displayValue = inputArray[0];
    calculationDone = true;
    console.log(displayValue);
}

function clickInput(input){
    if(calculationDone == true && (input == "*" || input == "/" || 
                                    input == "+" || input == "-")){
        calculationDone = false;
        document.querySelector(".display").textContent = displayValue + "";
    }else if(calculationDone == true && !isNaN(input)){
        calculationDone = false;
        document.querySelector(".display").textContent = "";
    }
    displayValue = displayValue + document.querySelector(".display").textContent;
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

function clearAll(){
    displayValue = "";
    decimalApplied = false;
    inputArray.length = 0;
    document.querySelector(".display").textContent = "";
}

function backspace(){
    displayValue = displayValue.slice(0, -1);
    document.querySelector(".display").textContent = displayValue;
}