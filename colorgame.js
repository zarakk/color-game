let numSquares = 6;
let color = genRandomClrs(numSquares);
// [
//             "rgb(255, 0, 0)",
//             "rgb(255, 255, 0)",
//             "rgb(0, 255, 0)",
//             "rgb(0, 255, 255)",
//             "rgb(255, 0, 255)",
//             "rgb(0, 0, 255)"

        //    ]
let h1 = document.querySelector("h1");
let sqares = document.querySelectorAll(".square");
let generateRandomColors ;
let pickedColor = pickColor();
let colorDisplayed = document.querySelector("#colorDisplayed");
let messegeDisplay = document.querySelector("#messegeDisplay");
let resetBtn = document.querySelector("#resetBtn");
let easyBtn = document.querySelector(".mode");
let hardBtn = document.querySelector(".modeSelected");
//EASY AND HARD BUTTONS

easyBtn.addEventListener("click",function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  color = genRandomClrs(numSquares);
  pickedColor = pickColor();
  colorDisplayed.textContent = pickedColor;
  for (var i = 0; i < sqares.length; i++) {

  if(color[i]){  sqares[i].style.background = color[i];
  }else {
    sqares[i].style.display = "none";}
  }
});
hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  color = genRandomClrs(numSquares);
  pickedColor = pickColor();
  colorDisplayed.textContent = pickedColor;
  for (var i = 0; i < sqares.length; i++) {

     sqares[i].style.background = color[i];
    sqares[i].style.display = "block";
}
});


//////RESET BUTTOM
resetBtn.addEventListener("click",function(){
  //generate all new Colors
  color = genRandomClrs(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplayed to match pickedColor
  colorDisplayed.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  this.textContent = "New Colors";
  messegeDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < sqares.length; i++) {
    sqares[i].style.backgroundColor = color[i];
  }
});

colorDisplayed.textContent = pickedColor;
for (var i = 0; i < sqares.length; i++) {
  //add initial colors to square
  sqares[i].style.backgroundColor = color[i];
  //add click listeners to square
  sqares[i].addEventListener("click",function() {
    //grab color of picked square
  let  selectedColor = this.style.backgroundColor;
    //compare color
    if(selectedColor == pickedColor){
      resetBtn.textContent = "Play Again !";
    messegeDisplay.textContent = "Correct";
    changeAllColr(selectedColor);
    h1.style.backgroundColor = pickedColor;
    } else {
          console.log(selectedColor,pickedColor);
    this.style.backgroundColor = "#232323";
    messegeDisplay.textContent = "Try Again";
    }
  });
}
function changeAllColr(color) {
  for (var i = 0; i < sqares.length; i++) {
    sqares[i].style.backgroundColor = color;
  }
}
function pickColor() {
let randum = Math.floor(Math.random() * color.length);
return color[randum];
}
function genRandomClrs(num) {
  //make an array
  let arr = [];
  //push a random number into the array
for (var i = 0; i < num; i++) {
  arr.push(randomColor());
}
  //return the array
  return arr
}
function randomColor(){
  //random color from 0 - 255
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" +  r + ", " + g + ", " + b + ")";
}
