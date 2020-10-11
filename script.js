let userScore = 0;
let computerScore= 0;
const userScore_li = document.getElementById("user_score");
const computerScore_li = document.getElementById("computer_score");
const scoreboard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result >p")
const rock_button =  document.getElementById("r");
const paper_button =  document.getElementById("p");
const scissors_button =  document.getElementById("s");

function getComputerChoice(){
  const choices = ["r","p","s"];
  const randomNumber = Math.floor(Math.random()* 3);
  return choices[randomNumber]
}

function convertToWord(letter){
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}



function win(userChoice, computerChoice){
  userScore++;
  userScore_li.innerHTML = userScore;
  computerScore_li.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}  Beats ${convertToWord(computerChoice)}. You Win`; 
}
function lost(userChoice,computerChoice){
  computerScore++;
  userScore_li.innerHTML = userScore;
  computerScore_li.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}  Loses To ${convertToWord(computerChoice)}. El Loser`;
}
function tie(userChoice,computerChoice){
  userScore_li.innerHTML = userScore;
  computerScore_li.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}  Ties ${convertToWord(computerChoice)}. Close One`;
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lost(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
    
  }
}


function main(){
  rock_button.addEventListener('click', function(){
   game("r");
    
})
  paper_button.addEventListener('click', function(){
   game("p");
   
})
  scissors_button.addEventListener('click', function(){
   game("s");
    
})
}

main();
