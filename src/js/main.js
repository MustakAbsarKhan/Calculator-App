const screenDisplay = document.getElementById("screen-input-selector");

function input(x) {
  screenDisplay.value += x;
  localStorage.setItem("display", screenDisplay.value);
}

const result = () => {
  reset();
  screenDisplay.value = eval(localStorage.getItem("display"));
};

const del = () => {
  const screenDataArray = [...screenDisplay.value];
  screenDataArray.pop();
  screenDisplay.value = screenDataArray.join("");
};

const reset = () => {
  screenDisplay.value = "";
};
