let firstNum = "";
let secondNum = "";
let operator = "";
let numbers;
let currentDisplay = "";
const numberRegEx = /^\d{1}|[.]/;

// get all .btn elements in an array
const buttons = document.querySelectorAll(".btn");

// add an event listener to each button .btn
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(button.textContent);
    calculate(button.textContent);
  });
});

const calculate = (input) => {
  // check if input is number
  if (numberRegEx.exec(input)) {
    // if number add to display and store
    if (currentDisplay === "0") {
      currentDisplay = input;
    } else {
      currentDisplay += input;
    }
  } else if (input === "Ac") {
    // ALL CLEAR clear the display
    currentDisplay = "0";
  } else if (input === "C") {
    // Remove last digit
    currentDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
  } else {
    if (operator === "") {
      console.log("first num");
      operator = input;
      firstNum = currentDisplay;
      currentDisplay = firstNum + " " + input + " ";
    } else {
      if (input === "=") {
        // calculate result
        secondNum = currentDisplay.substring(currentDisplay.lastIndexOf(" "));

        switch (operator) {
          case "/": {
            currentDisplay = divNum(firstNum, secondNum);
            console.log(`Operator: ${input}`);
            break;
          }
          case "*": {
            currentDisplay = multNum(firstNum, secondNum);
            console.log(`Operator: ${input}`);
            break;
          }

          case "+": {
            currentDisplay = addNum(firstNum, secondNum);
            console.log(`Operator: ${input}`);
            break;
          }

          case "-": {
            currentDisplay = subNum(firstNum, secondNum);
            console.log(`Operator: ${input}`);
            break;
          }

          default: {
            break;
          }
        }
        operator = "";
        firstNum = "";
        secondNum = "";
      }
    }
  }
  updateDisplay(currentDisplay);
};

const updateDisplay = (text) => {
  document.querySelector(".calc-display").innerHTML = text;
};

const addNum = (num1, num2) => {
  return (Number(num1) + Number(num2)).toString();
};

const subNum = (num1, num2) => {
  return (Number(num1) - Number(num2)).toString();
};

const divNum = (num1, num2) => {
  return (Number(num1) / Number(num2)).toFixed(2).toString();
};

const multNum = (num1, num2) => {
  return (Number(num1) * Number(num2)).toString();
};
