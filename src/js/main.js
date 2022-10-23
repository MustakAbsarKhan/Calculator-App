const toggle1 = document.getElementById("tg1");
const toggle2 = document.getElementById("tg2");
const toggle3 = document.getElementById("tg3");
const toggleArray = [toggle1, toggle2, toggle3];

const bodySelector = document.getElementById("body-selector");
const texttopleftSelector = document.getElementById("text-top-left-selector");
const texttoprightSelector = document.getElementById("text-top-right-selector");
const togglenumberSelector = document.getElementById("toggle-number-selector");
const togglebarSelector = document.getElementById("toggle-bar-selector");
const screeninputSelector = document.getElementById("screen-input-selector");

toggle1.addEventListener("click", () => {
  console.log("toggle 1 clicked");
});

//Theme 2 toggle2
toggle2.addEventListener("click", () => {
  console.log("toggle 2 clicked");
  bodySelector.classList.remove("bg-t1mainBG");
  bodySelector.classList.add("bg-t2mainBG");

  texttopleftSelector.classList.remove("text-t1text2");
  texttopleftSelector.classList.add("text-t2text1");

  texttoprightSelector.classList.remove("text-t1keyBG1");
  texttoprightSelector.classList.add("text-t2text1");

  togglenumberSelector.classList.remove("text-t1text2");
  togglenumberSelector.classList.add("text-t2text1");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("bg-t1keySD1", "active:bg-t1keyBGT");
    element.classList.add("bg-t2keySD1", "active:bg-t2keyBGT");
  });

  togglebarSelector.classList.remove("bg-t1toggleBG");
  togglebarSelector.classList.add("bg-t2toggleBG");

  screeninputSelector.classList.remove("bg-t1screenBG", "text-t1text2");
  screeninputSelector.classList.add("t2screenBG", "t2text1");
});

toggle3.addEventListener("click", () => {
  console.log("toggle 3 clicked");
});

document.getElementsByClassName;
