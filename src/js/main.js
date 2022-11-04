const screenDisplay = document.getElementById("screen-input-selector");
const dotbtnSelector = document.getElementById("dot-btn");

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
  const screendataArray = [...screenDisplay.value];
  const lastDisplayItem = screendataArray[screendataArray.length - 1];

  if (
    [".", "+", "-", "*", "/"].includes(x) &&
    (lastDisplayItem == "+" ||
      lastDisplayItem == "-" ||
      lastDisplayItem == "*" ||
      lastDisplayItem == "/" ||
      lastDisplayItem == ".")
  ) {
    console.log(lastDisplayItem);
    del();
    screenDisplay.value += x;
    displaylocalStorageSTORE();
    console.log("there is any restricted element at the end");
  } else {
    screenDisplay.value += x;
    displaylocalStorageSTORE();
    console.log("Else Running");
  }
}

//calculates the result on click on the (=) button using Function constructor
const result = () => {
  try {
    const inputData = localStorage.getItem("display");

    if (inputData != null) {
      //when inputdata and screendisplay value are same
      if (inputData == screenDisplay.value) {
        //when local storage has some value
        displaylocalStorageREMOVE();
        // screenDisplay.value = eval(localStorage.getItem("display"));
        screenDisplay.value = Function("return " + inputData)(); //using function constructor instead of EVAL function cause EVAL() executes the code it's passed with the privileges of the caller
        displaylocalStorageSTORE();
      } else {
        //when inputdata and screendisplay value are not same
        displaylocalStorageREMOVE();
        screenDisplay.value = Function("return " + screenDisplay.value)();
        displaylocalStorageSTORE();
      }
    } else {
      //when local storage is empty
      screenDisplay.value = Function("return " + screenDisplay.value)();
      displaylocalStorageSTORE();
    }
  } catch (error) {
    console.log(error);
    //! Alerts the input error
    swal("Invalid Input!", "Please Check Your Input Again", "error");
  }
};

//this function gives focus to input field and places cusrsor at the very end of the input field when input field has value in it and its cursor is at the very beginning due to previous deletion
//it is needed cause when the screen gets focused out then due to previous deletion the cursor may stay at the very first point which makes delete button funciton obsolete
const focusInitiate = () => {
  let screenPosition = screenDisplay.selectionStart;
  let tempDataArray = [...screenDisplay.value];
  if (screenPosition == 0 && tempDataArray.length != 0) {
    screenDisplay.focus();
    screenDisplay.setSelectionRange(tempDataArray.length, tempDataArray.length);
  }
};

//deletes data which is prior to the cursor position and keeps the cursor at the position where the number gets deleted
const deleteFeature = () => {
  let screenPosition = screenDisplay.selectionStart;
  if (screenPosition >= 1) {
    let screenDataArray = [...screenDisplay.value];

    if (screenPosition != 0) {
      //goes at the beginning the previous number of the cursor

      let remainingDataFirstPortion = screenDataArray.slice(
        0,
        screenPosition - 1
      );
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
    }
  }
};

//Deletes data from input field 1.Without cursor on the numbers from the last 2.With cursor on the numbers from the begining

const del = () => {
  screenDisplay.focus(); //this focus function is used to keep the cursor at its place after selecting the mouse pointer position and deleting manually
  focusInitiate();
  deleteFeature();
  screenDisplay.blur();
};

const reset = () => {
  displaylocalStorageREMOVE();
  screenDisplay.value = "";
};
