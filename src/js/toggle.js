const htmltagSelect = document.getElementById("htmlLine");
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
  htmltagSelect.classList.remove("dark");

  bodySelector.classList.remove("theme2-body", "theme3-body");
  bodySelector.classList.add("theme1-body");

  texttopleftSelector.classList.remove(
    "theme2-texttopleft",
    "theme3-texttopleft"
  );
  texttopleftSelector.classList.add("theme1-texttopleft");

  texttoprightSelector.classList.remove(
    "theme2-texttopleft",
    "theme3-texttopleft"
  );
  texttoprightSelector.classList.add("text-t1keyBG1");

  togglenumberSelector.classList.remove(
    "theme2-texttopleft",
    "theme3-texttopleft"
  );
  togglenumberSelector.classList.add("theme1-texttopleft");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("theme2-toggle-color", "theme3-toggle-color");
    element.classList.add("theme1-toggle-color");
  });

  togglebarSelector.classList.remove(
    "theme2-togglebarBG",
    "theme3-togglebarBG"
  );
  togglebarSelector.classList.add("theme1-togglebarBG");

  screeninputSelector.classList.remove(
    "theme2-screeninputSTYLE",
    "theme3-screeninputSTYLE"
  );
  screeninputSelector.classList.add("theme1-screeninputSTYLE");

  keypadSelector.classList.remove("theme2-keypadStyle", "theme3-keypadStyle");
  keypadSelector.classList.add("theme1-keypadStyle");

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
  htmltagSelect.classList.remove("dark");

  bodySelector.classList.remove("theme1-body", "theme3-body");
  bodySelector.classList.add("theme2-body");

  texttopleftSelector.classList.remove(
    "theme1-texttopleft",
    "theme3-texttopleft"
  );
  texttopleftSelector.classList.add("theme2-texttopleft");

  texttoprightSelector.classList.remove("text-t1keyBG1", "theme3-texttopleft");
  texttoprightSelector.classList.add("theme2-texttopleft");

  togglenumberSelector.classList.remove(
    "theme1-texttopleft",
    "theme3-texttopleft"
  );
  togglenumberSelector.classList.add("theme2-texttopleft");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("theme1-toggle-color", "theme3-toggle-color");
    element.classList.add("theme2-toggle-color");
  });

  togglebarSelector.classList.remove(
    "theme1-togglebarBG",
    "theme3-togglebarBG"
  );
  togglebarSelector.classList.add("theme2-togglebarBG");

  screeninputSelector.classList.remove(
    "theme1-screeninputSTYLE",
    "theme3-screeninputSTYLE"
  );
  screeninputSelector.classList.add("theme2-screeninputSTYLE");

  keypadSelector.classList.remove("theme1-keypadStyle", "theme3-keypadStyle");
  keypadSelector.classList.add("theme2-keypadStyle");

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
  bodySelector.classList.remove("theme2-body", "theme1-body");
  bodySelector.classList.add("theme3-body");

  texttopleftSelector.classList.remove(
    "theme2-texttopleft",
    "theme1-texttopleft"
  );
  texttopleftSelector.classList.add("theme3-texttopleft");

  texttoprightSelector.classList.remove("theme2-texttopleft", "text-t1keyBG1");
  texttoprightSelector.classList.add("theme3-texttopleft");

  togglenumberSelector.classList.remove(
    "theme2-texttopleft",
    "theme1-texttopleft"
  );
  togglenumberSelector.classList.add("theme3-texttopleft");

  //reduces time by looping and selecting each item of the array
  toggleArray.forEach((element) => {
    element.classList.remove("theme2-toggle-color", "theme1-toggle-color");
    element.classList.add("theme3-toggle-color");
  });

  togglebarSelector.classList.remove(
    "theme2-togglebarBG",
    "theme1-togglebarBG"
  );
  togglebarSelector.classList.add("theme3-togglebarBG");

  screeninputSelector.classList.remove(
    "theme1-screeninputSTYLE",
    "theme2-screeninputSTYLE"
  );
  screeninputSelector.classList.add("theme3-screeninputSTYLE");

  keypadSelector.classList.remove("theme1-keypadStyle", "theme2-keypadStyle");
  keypadSelector.classList.add("theme3-keypadStyle");

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

//first on load if it is user's first visit then the UI theme will respect user's OS preference
//if the user previously made any theme preference choice then the UI theme will load based on user's previous session
window.onload = () => {
  if (localStorage.getItem("clicked") == null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //activates during night mode
      htmltagSelect.classList.add("dark");
      const activeButton = "toggle3";
      toggleHide(activeButton);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      //activates during light mode
      const activeButton = "toggle2";
      toggleHide(activeButton);
      theme2();
    } else {
      //failsafe- if os can't determine
      const activeButton = "toggle1";
      toggleHide(activeButton);
      theme1();
    }
  } else {
    "toggle1" == localStorage.getItem("clicked")
      ? (toggleHide("toggle1"), theme1())
      : "toggle2" == localStorage.getItem("clicked")
      ? (toggleHide("toggle2"), theme2())
      : "toggle3" == localStorage.getItem("clicked")
      ? (toggleHide("toggle3"), theme3())
      : ((activeButton = "toggle1"), toggleHide("toggle1"), theme1());
  }

  //loading the value which were displayed before the reload.
  //window.onload overrides itself if called more than once. That's why this piece of code is written here instead of the main.js file where all the calculations are written
  displaylocalStorageDATA(); //function from main.js
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

//clears all local storage data saved from the active session
const resetdata = () => {
  localStorage.clear();
  console.log(
    "Local Storage data(for this site) is deleted with the double tap on the toggle buttons"
  );
};

// hard reset of local storage data on double click on toggle buttons
toggleArray.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.addEventListener("dblclick", () => {
      resetdata();
    });
  });
});
