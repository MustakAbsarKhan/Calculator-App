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

const bracketOpen = () => {
  localStorage.setItem("bracket", "(");
};

const bracketClose = () => {
  localStorage.setItem("bracket", ")");
};

const bracketRemove = () => {
  localStorage.removeItem("bracket");
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

const customInput = (input, screenPosition) => {
  const currentarray = [...screenDisplay.value];

  if (
    [".", "+", "-", "*", "/"].includes(currentarray[screenPosition - 1]) &&
    ["+", "-", "*", "/"].includes(input)
  ) {
    if (screenPosition >= 1) {
      let screenDataArray = [...screenDisplay.value];
      //selects and stores the very first portion of the text
      let remainingDataFirstPortion = screenDataArray.slice(
        0,
        screenPosition - 1
      ); //selects and stores the rest of the portion of the text after cursor
      let remainingDataLastPortion = screenDataArray.slice(
        screenPosition,
        screenDataArray.length
      );

      const clearedArray = remainingDataFirstPortion.concat(input);

      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");
      displaylocalStorageSTORE();
      screenDisplay.setSelectionRange(screenPosition, screenPosition);
    }
  } else {
    if (screenPosition >= 1) {
      let screenDataArray = [...screenDisplay.value];

      //selects and stores the very first portion of the text
      let remainingDataFirstPortion = screenDataArray.slice(0, screenPosition); //selects and stores the rest of the portion of the text after cursor
      let remainingDataLastPortion = screenDataArray.slice(
        screenPosition,
        screenDataArray.length
      );

      const clearedArray = remainingDataFirstPortion.concat(input);
      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");
      displaylocalStorageSTORE();
      screenDisplay.setSelectionRange(screenPosition + 1, screenPosition + 1);
    }
  }
};

//takes and records(in the local storage) all the inputs from the user and displays it on the input screen
function input(x) {
  screenDisplay.focus(); //this focus function is used to keep the cursor at its place after selecting the mouse pointer position and deleting manually
  focusInitiate();

  let screenPosition = screenDisplay.selectionStart;
  let visbleDataArray = [...screenDisplay.value];

  if (visbleDataArray.length != screenPosition) {
    customInput(x, screenPosition);
  } else {
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
      del();
      screenDisplay.value += x;
      displaylocalStorageSTORE();
    } else {
      screenDisplay.value += x;
      displaylocalStorageSTORE();
    }
  }
  screenDisplay.blur();
}

//processes bracket input function
const bracketInitiate = () => {
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
  } else {
    //! Alerts the input error
    swal("Invalid Input!", "Please Check Your Input Again", "error");
    console.log("Bracket Position Error");
  }
};
// * Input Related Functions
//custom
const customBracketInitiate = () => {
  const starSet = () => {
    const screendataArray = [...screenDisplay.value];
    const screenPosition = screenDisplay.selectionStart;

    //inserts * if math operator is missing and bracket is closed or there is not any recorded bracket
    if (
      (localStorage.getItem("bracket") == ")" ||
        localStorage.getItem("bracket") == null) &&
      !["+", "-", "*", "/"].includes(screendataArray[screenPosition - 1]) &&
      screendataArray.length != 0 &&
      screenPosition != 0
    ) {
      //selects and stores the very first portion of the text
      let remainingDataFirstPortion = screendataArray.slice(0, screenPosition);

      //selects and stores the rest of the portion of the text after cursor
      let remainingDataLastPortion = screendataArray.slice(
        screenPosition,
        screendataArray.length
      );

      const clearedArray = remainingDataFirstPortion.concat("*");

      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");

      displaylocalStorageSTORE();
      screenDisplay.setSelectionRange(screenPosition + 1, screenPosition + 1);
    }
  };

  const customBracketPosition = () => {
    const screendataArray = [...screenDisplay.value];
    const screenPosition = screenDisplay.selectionStart;

    if (
      (screendataArray.length != screenPosition &&
        localStorage.getItem("bracket") == ")") ||
      localStorage.getItem("bracket") == null
    ) {
      //selects and stores the very first portion of the text
      let remainingDataFirstPortion = screendataArray.slice(0, screenPosition);
      //selects and stores the rest of the portion of the text after cursor
      let remainingDataLastPortion = screendataArray.slice(
        screenPosition,
        screendataArray.length
      );

      const clearedArray = remainingDataFirstPortion.concat("(");

      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");
      displaylocalStorageSTORE();
      bracketOpen();
      screenDisplay.setSelectionRange(screenPosition, screenPosition);
    } else if (
      localStorage.getItem("bracket") == "(" &&
      screendataArray.length != screenPosition &&
      !["+", "-", "*", "/"].includes(screendataArray[screenPosition])
    ) {
      //selects and stores the very first portion of the text
      let remainingDataFirstPortion = screendataArray.slice(0, screenPosition);
      //selects and stores the rest of the portion of the text after cursor
      let remainingDataLastPortion = screendataArray.slice(
        screenPosition,
        screendataArray.length
      );

      const clearedArray = remainingDataFirstPortion.concat(")*");

      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");
      displaylocalStorageSTORE();
      bracketClose();
      screenDisplay.setSelectionRange(screenPosition, screenPosition);
    } else if (
      localStorage.getItem("bracket") == "(" &&
      screendataArray.length != screenPosition
    ) {
      //selects and stores the very first portion of the text
      let remainingDataFirstPortion = screendataArray.slice(0, screenPosition);
      //selects and stores the rest of the portion of the text after cursor
      let remainingDataLastPortion = screendataArray.slice(
        screenPosition,
        screendataArray.length
      );

      const clearedArray = remainingDataFirstPortion.concat(")");
      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");
      displaylocalStorageSTORE();
      bracketClose();
      screenDisplay.setSelectionRange(screenPosition, screenPosition);
    }
  };

  starSet();
  customBracketPosition();
};

//inputs bracket
function bracket() {
  let screenPosition = screenDisplay.selectionStart;
  let visbleDataArray = [...screenDisplay.value];

  if (visbleDataArray.length == screenPosition) {
    screenDisplay.focus(); //this focus function is used to keep the cursor at its place after selecting the mouse pointer position and deleting manually
    focusInitiate();

    bracketInitiate();
  } else {
    customBracketInitiate();
  }

  screenDisplay.blur();
}

// * Result/Final Calculation related function

//adds multiplication sign where needed and helps the calculation process
const autoMultiply = () => {
  // * auto multiplication feature
  const screenItems = [...screenDisplay.value];
  let screenPosition = screenDisplay.selectionStart;

  screenItems.forEach((item, index) => {
    let indexno = index + 1;

    if (
      screenItems.length != indexno &&
      ![")", "+", "-", "*", "/"].includes(screenItems[index + 1]) &&
      item == ")"
    ) {
      let remainingDataFirstPortion = screenItems.slice(0, index + 1); //selects and stores the rest of the portion of the text after cursor

      let remainingDataLastPortion = screenItems.slice(
        index + 1,
        screenItems.length
      );

      const clearedArray = remainingDataFirstPortion.concat("*");
      const clearedArray1 = clearedArray.concat(remainingDataLastPortion);

      screenDisplay.value = clearedArray1.join("");
      displaylocalStorageSTORE();
      screenDisplay.setSelectionRange(screenPosition, screenPosition);
    } else {
      return;
    }
  });
};

//it is used to minimize the calculation complexity and to control the number of decimles
const calcMain = (x) => {
  const calculatedValue = Number(Function("return " + x)().toPrecision(4)); //using function constructor instead of EVAL function cause EVAL() executes the code it's passed with the privileges of the caller

  screenDisplay.value = calculatedValue; //using function constructor instead of EVAL function cause EVAL() executes the code it's passed with the privileges of the caller
};

//this function calculates the value
const CalcFun = () => {
  const inputData = localStorage.getItem("display");

  if (inputData != null) {
    //when inputdata and screendisplay value are same
    if (inputData == screenDisplay.value) {
      //when local storage has some value
      displaylocalStorageREMOVE();
      // screenDisplay.value = eval(localStorage.getItem("display"));
      calcMain(inputData);
      // screenDisplay.value = Function("return " + inputData)().toFixed(2); //using function constructor instead of EVAL function cause EVAL() executes the code it's passed with the privileges of the caller
      displaylocalStorageSTORE();
    } else {
      //when inputdata and screendisplay value are not same
      displaylocalStorageREMOVE();
      // screenDisplay.value = Function("return " + screenDisplay.value)().toFixed(2);
      calcMain(screenDisplay.value);

      displaylocalStorageSTORE();
    }
  } else {
    //when local storage is empty
    // screenDisplay.value = Function("return " + screenDisplay.value)().toFixed(2);
    calcMain(screenDisplay.value);

    displaylocalStorageSTORE();
  }
};

//calculates the result on click on the (=) button using Function constructor
const result = () => {
  focusInitiate();
  try {
    autoMultiply();
    CalcFun();
  } catch (error) {
    console.log(error);
    //! Alerts the input error
    swal("Invalid Input!", "Please Check Your Input Again", "error");
  }
  screenDisplay.blur();
};
