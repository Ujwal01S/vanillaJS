
// // ---------------------Basics -------------------
// const defaultResult = 0;

// let currentResult = defaultResult;

// function add(num1, num2) {
//     let result = num1 + num2;
//     // alert('This is the'  + ' ' +result);
//     return result;
// }

// currentResult = add(1, 2);


// // defaultResult = (currentResult + 10) * 3/2 -1; 

// // currentResult = (currentResult + 10) * 3/2 -1;

// let currentResultString = '(' + currentResult + '+ 10) * 2/3 -1'; 

// outputResult(currentResult, currentResultString);
// // outputResult(defaultResult, currentResultString); => generated typeError

// // what do you learn ? => u can't assign new value to const value it will never change
// // when you assign default value to another let variable you assign copy of value of that variable
// // in above example currentResult copys value of variable defaultResult
// // currentResult = 0;












// ------------------------Executing functions indirectly

const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

function getUserInput (){
    return parseInt(userInput.value);
};

function createAndWriteOutput (operator, resultBeforeCalc, calcNumber ) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
};

function writeToLog(
   operationIdentifier,
   prevResult,
   operationNumber,
   newResult 
) {
    const logEntry = {
        operation : operationIdentifier,
        prevResult : prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


//What happend? (currentResult = currentResult + userInput.value;)
//the javascript always converts input element into string even you you write type to number
//so inorder to convert it to number you use parseInt or + 
//parseInt provide you with extra control we also have parseFloat