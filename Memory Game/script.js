let startGame = false;
let totalTime = 0;
let timerDisplay = document.getElementById("timerDisplay");
let countDisplay = document.getElementById("countDisplay");
let counter = 0;
let card = ["😊","😊","🥶","🥶","😍","😍","😡","😡","😭","😭", "🙄","🙄","😂","😂","😴","😴"];
card.sort((a, b) => 0.5 - Math.random());
let click = 0;
// console.log(card);

for (let i = 0; i < card.length; i++) {
  let elementDiv = document.createElement("div");
  let elementFront = document.createElement("span");
  let elementBack = document.createElement("span");  //this element has array data...
  elementDiv.classList.add("card");
  elementFront.classList.add("card-front");
  elementBack.classList.add("card-back");
  elementBack.innerHTML = card[i];
  document.getElementById("squreBox").appendChild(elementDiv);
  elementDiv.appendChild(elementFront);
  elementDiv.appendChild(elementBack);
  elementDiv.addEventListener("click", function() {
    if (!elementDiv.classList.contains("matched")) {
      elementDiv.classList.add("flipped")
      isMatchItem(this);
    }
  });
}

function timeCount() {
  startGame = true;
  let IntervalLoop = setInterval(() => {
    timerDisplay.innerHTML = totalTime;
    totalTime++;
    if (totalTime === 6200) {
      alert("Time Is Over...");
      clearInterval(IntervalLoop);
      location.reload();
    }
  },1000)  
}

const isMatchItem = (event) => {
  if (!startGame) {
    timeCount();
  }
//   console.log("click on item, value are", event);
  let flipped = document.getElementsByClassName("flipped");
  if (flipped.length === 2) {
    counter += 1;
    countDisplay.innerHTML = counter;
    console.log(flipped[1].innerHTML, " ======", flipped[0].innerHTML);
    if (flipped[0].innerHTML === flipped[1].innerHTML) {
      console.log("MATCHH...");
    //   console.log(flipped[1], "======", flipped[0]);
      flipped[1].classList.add("matched");
      flipped[0].classList.add("matched");
      flipped[1].classList.remove("flipped");
      flipped[0].classList.remove("flipped");
      if (card.length === document.getElementsByClassName("matched").length) {
        setTimeout(function () {
            alert("You Win...");
            location.reload();
          }, 1000);
      }
    } else {
      console.log("TRY AGAIN...");
      setTimeout(function () {
        flipped[1].classList.remove("flipped");
        flipped[0].classList.remove("flipped");
      }, 500);
    }
  }
};