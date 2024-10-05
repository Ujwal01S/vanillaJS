
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

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '')
}

addBtn.addEventListener('click', add);


//What happend? (currentResult = currentResult + userInput.value;)
//the javascript always converts input element into string even you you write type to number
//so inorder to convert it to number you use parseInt or + 
//parseInt provide you with extra control we also have parseFloat