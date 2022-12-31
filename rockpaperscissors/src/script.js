let answerOutput = document.querySelector(".answer-container");
let computerOutput = document.querySelector(".computer-answer");
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissor");
let allBtns = document.querySelector(".button-choices button");
let gameover = false;
let points;

/*Computer choices*/

function RandomComputerChoice() {
  const rock_paper_scissors_array = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * rock_paper_scissors_array.length);
  const ComputerChoice = rock_paper_scissors_array[index];

  /* MAKE THIS LESS UGLY!!!*/
  if (index === 0) {
    rockBtn.classList.add("green");
    rockBtn.classList.remove("orange", "blue");
    paperBtn.classList.remove("orange", "green", "blue");
    scissorsBtn.classList.remove("blue", "green", "orange");
  } else if (index === 1) {
    paperBtn.classList.add("blue");
    paperBtn.classList.remove("orange", "green");
    rockBtn.classList.remove("orange", "blue", "green");
    scissorsBtn.classList.remove("blue", "green", "orange");
  } else if (index === 2) {
    scissorsBtn.classList.add("orange");
    scissorsBtn.classList.remove("blue", "green");
    rockBtn.classList.remove("orange", "blue", "green");
    paperBtn.classList.remove("orange", "green", "blue");
  }

  let Computer = "The computers turn... " + ComputerChoice + " was chosen!";
  return Computer;
}

/*User Choice*/

function HumanChoice() {
  // let instruct = (document.querySelector(".instruction-container").innerHTML =
  //   "Your turn!");
  let choice;
  let allBtns = document
    .querySelector(".button-choices")
    .addEventListener("click", ($event) => {
      if ($event.target.matches("#choice")) {
        console.log("clicked");
        let choice = (answerOutput.innerHTML =
          "You chose " + $event.target.value + "!");
      }
      computerOutput.innerHTML = RandomComputerChoice();
    });
}

function PlayGame() {
  /*Implement this later.*/
}
