let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/index.jpg") {
    myImage.setAttribute("src", "images/index2.jpg");
  } else {
    myImage.setAttribute("src", "images/index.jpg");
  }
};

let myBtn = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please, enter your name: ");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mizilla is cool, " + storedName;
}

myBtn.onclick = function() {
  setUserName();
};
