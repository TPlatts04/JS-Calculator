// 1. Take user input -- COMPLETE
// 2. Cycle through operation choices and let user select -- COMPLETE
// 3. Keep asking user until they want operation to be completed
// 4. Calculate and output

const prompt = require("prompt-sync")();

const itemHolder = [];

const userInput = () => {
  let LOOP_CONDITION = true;
  while (LOOP_CONDITION){
    const askUserNum = prompt("Enter your number here: ");
    itemHolder.push(askUserNum);
    const reEnter = prompt("Would you like to add an operator? (Y/N) ").toUpperCase();
    if (reEnter === "Y") {
      const askUserOp = prompt("Enter your operator here (+, -, *, /) ")
      switch (askUserOp){
        case "+":
        case "-":
        case "/":
        case "*":
          itemHolder.push(askUserOp);
          break;
        default:
          console.log("Invalid operator, try again!")
          return;
      }
    }
    else {
      console.log(itemHolder);
      LOOP_CONDITION = false;
      calculate(userInput);
      break;
    }
  }
}

const calculate = (userInput) => {
  const newNumList = [...itemHolder];
  const calcConfirm = prompt("Would you like to calculate your equation? (Y/N) ").toUpperCase();
  if (calcConfirm === "Y"){
    const equationString = newNumList.join(" ");
    const calculation = eval(equationString);
    console.log(`Your equation is equal to: ${calculation}`);
  } 
  else {
    userInput();
  }
}

userInput();