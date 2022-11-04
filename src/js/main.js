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
  const screendataArray = [...screenDisplay.value];
  const lastDisplayItem = screendataArray[screendataArray.length - 1];

  // * Double Trouble FEATURE - Removes Duplicate Operator and Makes Working With (.,+,-,*,/) more flexible
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
  } else {
    screenDisplay.value += x;
    displaylocalStorageSTORE();
  }
}

const bracketOpen = () => {
  localStorage.setItem("bracket", "(");
};

const bracketClose = () => {
  localStorage.setItem("bracket", ")");
};

const bracketRemove = () => {
  localStorage.removeItem("bracket");
};

function bracket() {
  const screendataArray = [...screenDisplay.value];
  //inserts * if math operator is missing and bracket is closed or there is not any recorded bracket
  if (
    (localStorage.getItem("bracket") == ")" ||
      localStorage.getItem("bracket") == null) &&
    !["+", "-", "*", "/"].includes(
      screendataArray[screendataArray.length - 1]
    ) &&
    screendataArray.length != 0
  ) {
    screenDisplay.value += "*";
    displaylocalStorageSTORE();
  }

  //inserts bracket
  if (
    screendataArray.length == 0 ||
    localStorage.getItem("bracket") == ")" ||
    localStorage.getItem("bracket") == null
  ) {
    //open
    //when empty
    //when bracket closed
    //when bracket memory is null
    screenDisplay.value += "(";
    bracketOpen();
    displaylocalStorageSTORE();
  } else if (localStorage.getItem("bracket") == "(") {
    //closed
    //when bracket is open
    screenDisplay.value += ")";
    bracketClose();
    displaylocalStorageSTORE();
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
  bracketRemove();
  screenDisplay.value = "";
};
