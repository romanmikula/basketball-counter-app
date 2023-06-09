/* 
1. assign buttons ids
2.Create a sum function 
2. create onclick event listeners for each button
3. check if the ck=clicking the button returns correct html element
4. render the total to the screen
*/

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

function add1Point() {
   homeCount ++;
   homeScore.textContent = homeCount;
}

function add2Point() {
    homeCount = homeCount + 2;
    homeScore.textContent = homeCount;
 }

 function add3Point() {
    homeCount = homeCount + 3;
    homeScore.textContent = homeCount;
 }


 function add1PointG() {
    guestCount ++;
    guestScore.textContent = guestCount;
 }
 
 function add2PointG() {
     guestCount = guestCount + 2;
     guestScore.textContent = guestCount;
  }
 
  function add3PointG() {
     guestCount = guestCount + 3;
     guestScore.textContent = guestCount;
  }

  function newGame() {
    
     homeScore.textContent = 0;
     guestScore.textContent = 0;

     homeCount = 0;
     guestCount = 0;
  }

  
function highlightLeader(homeCount, guestCount){
    if (homeCount > guestCount) {
        document.getElementsByClassName("score")[0].style.color = "blue";
    }
    
    else if (homeCount < guestCount) {
        document.getElementsByClassName("score")[1].style.color = "blue";
    }
}

  highlightLeader(homeCount, guestCount);