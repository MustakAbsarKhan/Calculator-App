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
const keypadSelector = document.getElementById("keypad-selector");

const buttons = document.querySelectorAll(".button");
const buttonSelector = [...buttons];

const bigbuttonDark = document.querySelectorAll(".big-button");
const bigbuttonDarkSelector = [...bigbuttonDark];

const bigbuttonEqual = document.querySelector(".big-button-equal");

//hides the inactive toggle buttons on click and stores the preference in the local storage for having it back after reload
toggleHide = (x) => {
  x == "toggle1"
    ? ((toggle1.style.opacity = "1"),
      (toggle2.style.opacity = "0"),
      (toggle3.style.opacity = "0"),
      localStorage.setItem("clicked", "toggle1"))
    : x == "toggle2"
    ? ((toggle1.style.opacity = "0"),
      (toggle2.style.opacity = "1"),
      (toggle3.style.opacity = "0"),
      localStorage.setItem("clicked", "toggle2"))
    : x == "toggle3"
    ? ((toggle1.style.opacity = "0"),
      (toggle2.style.opacity = "0"),
      (toggle3.style.opacity = "1"),
      localStorage.setItem("clicked", "toggle3"))
    : console.log("Infinity :)!!");
};

//theme 1 color customization
theme1 = () => {
  bodySelector.classList.remove("bg-[#E6E6E6]", "bg-[#17062A]");
  bodySelector.classList.add("bg-t1mainBG");

  texttopleftSelector.classList.remove("text-t2text1", "text-t3text1");
  texttopleftSelector.classList.add("text-t1text2");

  texttoprightSelector.classList.remove("text-t2text1", "text-t3text1");
  texttoprightSelector.classList.add("text-t1keyBG1");

  togglenumberSelector.classList.remove("text-t2text1", "text-t3text1");
  togglenumberSelector.classList.add("text-t1text2");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("theme2-toggle-color", "theme3-toggle-color");
    element.classList.add("theme1-toggle-color");
  });

  togglebarSelector.classList.remove("bg-[#D5CCCB]", "bg-[#1E0936]");
  togglebarSelector.classList.add("bg-t1toggleBG");

  screeninputSelector.classList.remove(
    "bg-t2screenBG",
    "text-t2text1",
    "bg-t3toggleKeypadScreenBG",
    "text-t3text1"
  );
  screeninputSelector.classList.add("bg-t1screenBG", "text-t1text2");

  keypadSelector.classList.remove(
    "bg-t2togglekpBG",
    "bg-t3toggleKeypadScreenBG"
  );
  keypadSelector.classList.add("bg-t1toggleBG");

  buttonSelector.map((selectedButton) => {
    selectedButton.classList.remove("theme2-btn", "theme3-btn");
    selectedButton.classList.add("theme1-btn");
  });

  bigbuttonDarkSelector.map((selectedButton) => {
    selectedButton.classList.remove("theme2-big-button", "theme3-big-button");
    selectedButton.classList.add("theme1-big-button");
  });

  bigbuttonEqual.classList.remove(
    "theme2-big-red-button",
    "theme3-big-red-button"
  );
  bigbuttonEqual.classList.add("theme1-big-red-button");
};

//theme 2 color customization
theme2 = () => {
  bodySelector.classList.remove("bg-t1mainBG", "bg-[#17062A]");
  bodySelector.classList.add("bg-[#E6E6E6");

  texttopleftSelector.classList.remove("text-t1text2", "text-t3text1");
  texttopleftSelector.classList.add("text-t2text1");

  texttoprightSelector.classList.remove("text-t1keyBG1", "text-t3text1");
  texttoprightSelector.classList.add("text-t2text1");

  togglenumberSelector.classList.remove("text-t1text2", "text-t3text1");
  togglenumberSelector.classList.add("text-t2text1");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("theme1-toggle-color", "theme3-toggle-color");
    element.classList.add("theme2-toggle-color");
  });

  togglebarSelector.classList.remove("bg-t1toggleBG", "bg-[#1E0936]");
  togglebarSelector.classList.add("bg-[#D5CCCB]");

  screeninputSelector.classList.remove(
    "bg-t1screenBG",
    "text-t1text2",
    "bg-t3toggleKeypadScreenBG",
    "text-t3text1"
  );
  screeninputSelector.classList.add("bg-t2screenBG", "text-t2text1");

  keypadSelector.classList.remove("bg-t1toggleBG", "bg-t3toggleKeypad");
  keypadSelector.classList.add("bg-t2togglekpBG");

  buttonSelector.map((selectedButton) => {
    selectedButton.classList.remove("theme1-btn", "theme3-btn");
    selectedButton.classList.add("theme2-btn");
  });

  bigbuttonDarkSelector.map((selectedButton) => {
    selectedButton.classList.remove("theme1-big-button", "theme3-big-button");
    selectedButton.classList.add("theme2-big-button");
  });

  bigbuttonEqual.classList.remove(
    "theme1-big-red-button",
    "theme3-big-red-button"
  );
  bigbuttonEqual.classList.add("theme2-big-red-button");
};

//theme 3 color customization
theme3 = () => {
  bodySelector.classList.remove("bg-[#E6E6E6", "bg-t1mainBG");
  bodySelector.classList.add("bg-[#17062A]");

  texttopleftSelector.classList.remove("text-t2text1", "text-t1text2");
  texttopleftSelector.classList.add("text-t3text1");

  texttoprightSelector.classList.remove("text-t2text1", "text-t1keyBG1");
  texttoprightSelector.classList.add("text-t3text1");

  togglenumberSelector.classList.remove("text-t2text1", "text-t1text2");
  togglenumberSelector.classList.add("text-t3text1");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("theme2-toggle-color", "theme1-toggle-color");
    element.classList.add("theme3-toggle-color");
  });

  togglebarSelector.classList.remove("bg-[#D5CCCB]", "bg-t1toggleBG");
  togglebarSelector.classList.add("bg-[#1E0936]");

  screeninputSelector.classList.remove(
    "bg-t2screenBG",
    "text-t2text1",
    "bg-t1screenBG",
    "text-t1text2"
  );
  screeninputSelector.classList.add(
    "bg-t3toggleKeypadScreenBG",
    "text-t3text1"
  );

  keypadSelector.classList.remove("bg-t1toggleBG", "bg-t2togglekpBG");
  keypadSelector.classList.add("bg-t3toggleKeypadScreenBG");

  buttonSelector.map((selectedButton) => {
    selectedButton.classList.remove("theme1-btn", "theme2-btn");
    selectedButton.classList.add("theme3-btn");
  });

  bigbuttonDarkSelector.map((selectedButton) => {
    selectedButton.classList.remove("theme1-big-button", "theme2-big-button");
    selectedButton.classList.add("theme3-big-button");
  });

  bigbuttonEqual.classList.remove(
    "theme1-big-red-button",
    "theme2-big-red-button"
  );
  bigbuttonEqual.classList.add("theme3-big-red-button");
};

//loads user preference after reload based on user's previous session
window.onload = () => {
  "toggle1" == localStorage.getItem("clicked")
    ? (toggleHide("toggle1"), theme1())
    : "toggle2" == localStorage.getItem("clicked")
    ? (toggleHide("toggle2"), theme2())
    : "toggle3" == localStorage.getItem("clicked")
    ? (toggleHide("toggle3"), theme3())
    : ((activeButton = "toggle1"), toggleHide("toggle1"), theme1());
};

// Theme 1 Toggle 1
toggle1.addEventListener("click", () => {
  const activeButton = "toggle1";
  toggleHide(activeButton);
  theme1();
});

//Theme 2 Toggle 2
toggle2.addEventListener("click", () => {
  const activeButton = "toggle2";
  toggleHide(activeButton);
  theme2();
});

// Theme 3 Toggle 3
toggle3.addEventListener("click", () => {
  const activeButton = "toggle3";
  toggleHide(activeButton);
  theme3();
});
