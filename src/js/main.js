const screenDisplay = document.getElementById("screen-input-selector");

//Stores data in the local storage
const displaylocalStorageSTORE = () => {
  localStorage.setItem("display", screenDisplay.value);
};

//removes data from the local storage
const displaylocalStorageREMOVE = () => {
  localStorage.removeItem("display");
};

//Displays data from the local storage
const displaylocalStorageDATA = () => {
  screenDisplay.value = localStorage.getItem("display");
};

//takes and records(in the local storage) all the inputs from the user and displays it on the input screen
function input(x) {
  screenDisplay.value += x;
  displaylocalStorageSTORE();
}

//calculates the result on click on the (=) button using Function constructor
const result = () => {
  const inputData = localStorage.getItem("display");
  displaylocalStorageREMOVE();
  // screenDisplay.value = eval(localStorage.getItem("display"));
  screenDisplay.value = Function("return " + inputData)(); //using function constructor instead of EVAL function cause EVAL() executes the code it's passed with the privileges of the caller
  displaylocalStorageSTORE();
};

//Deletes data from input field 1.Without cursor on the numbers from the last 2.With cursor on the numbers from the begining
const del = () => {
  screenDisplay.focus();
  let screenDataArray = [...screenDisplay.value];
  let screenPosition = screenDisplay.selectionStart; //goes at the beginning the previous number of the cursor

  let remainingDataFirstPortion = screenDataArray.slice(0, screenPosition - 1);
  let remainingDataLastPortion = screenDataArray.slice(
    screenPosition,
    screenDataArray.length
  );
  const clearedArray = remainingDataFirstPortion.concat(
    remainingDataLastPortion
  );
  screenDisplay.value = clearedArray.join("");
  displaylocalStorageSTORE();
  screenDisplay.setSelectionRange(screenPosition - 1, screenPosition - 1);
};

const reset = () => {
  displaylocalStorageREMOVE();
  screenDisplay.value = "";
};
