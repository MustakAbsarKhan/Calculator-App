const screenDisplay = document.getElementById("screen-input-selector");

const calculate = (input) => {
  capturedInput = screenDisplay.value += input;
};

const del = () => {
  const screenDataArray = [...screenDisplay.value];
  screenDataArray.pop();
  screenDisplay.value = screenDataArray.join("");
};

const reset = () => {
  screenDisplay.value = "";
};
