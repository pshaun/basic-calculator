const input = document.querySelector("#input");
var inputString = ""
var firstOperand = "";
var currOperator = "";
var secondOperand = "";

function inputExpression(button){
    switch(button){
        case '+':
        case '-':
        case '*':
        case '/':
            if(firstOperand !== "" && secondOperand !== ""){ //Perform operation if 1st and 2nd operand already selected
                firstOperand = performOp(firstOperand, secondOperand, currOperator);
                secondOperand = "";
                inputString = firstOperand;
            }else{ //Store current input string into 1st operand, then set currOperator
                firstOperand = input.textContent;
                currOperator = button;
                console.log("currOperator = " + currOperator);
                inputString = firstOperand + button;
            }
            break;
        case '=':
            input.textContent = performOp(firstOperand, secondOperand, currOperator); //Perform operation with given params
            firstOperand = input.textContent;
            clear();
            return;
            break;
        case "clear":
            button = "";
            input.textContent = "0";
            clear();
            return;
            break;
        default:
            if(currOperator === ""){ //If no operator has been selected, store string into first input
                firstOperand += button;
                inputString = firstOperand;
                console.log("firstOperand = " +firstOperand);
            } else if (firstOperand !== "" && currOperator !== ""){
                secondOperand += button;
                inputString = firstOperand + currOperator + secondOperand;
                console.log("2nd = " + secondOperand);
            } else{ //If operator has been selected, store string into second input
                secondOperand += button;
                inputString += secondOperand;
                console.log("test3");
            }
            
    }

    input.textContent = inputString;
}

//clear inputs
function clear(){ 
    currOperator = "";
    firstOperand = "";
    secondOperand = "";
    button = "";
}

//Perform basic calculator operations
function performOp(a,b,operator){
    switch(operator){
        case '+':
            console.log(parseFloat(a)+parseFloat(b));
            return parseFloat(a)+parseFloat(b);
            break;
        case '-':
            console.log(parseFloat(a)-parseFloat(b));
            return parseFloat(a)-parseFloat(b);
            break;
        case '*':
            console.log(parseFloat(a)*parseFloat(b));
            return parseFloat(a)*parseFloat(b);
            break;
        case '/':
            console.log(parseFloat(a)/parseFloat(b));
            if(b === "0"){
                return "ERROR";
            }else{
                return parseFloat(a)/parseFloat(b);
            }
            break;
    }
}