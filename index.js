let scoreWon = 0;
let scoreTie = 0;
let scoreLose = 0;

let gameEnded = false;

function runGame(user_choice) {
    if(gameEnded){
        scoreWon = 0;
        scoreTie = 0;
        scoreLose = 0;
        document.getElementById("gameEnd_img").src = "";
        gameEnded = false;
        document.getElementById("score").style.display = "flex";
    }

    let cpu_choice = Math.floor(Math.random() * 3);
    
    if (cpu_choice === 0 ){
        document.getElementById("img-cpu").src = "assets/images/rock.png"
        document.getElementById("img-cpu").className = "rock"
    }else if(cpu_choice === 1 ){
        document.getElementById("img-cpu").src = "assets/images/Paper.png"
        document.getElementById("img-cpu").className = "paper"
    }else {
        document.getElementById("img-cpu").src = "assets/images/scissors.png"
        document.getElementById("img-cpu").className = "scissor"
    }

    if (user_choice === cpu_choice){
        document.getElementById("h1-result").innerHTML = "tie";
        scoreTie += 1
    }else if(user_choice === 0 && cpu_choice === 1){
        document.getElementById("h1-result").innerHTML = "Lose";
        scoreLose += 1
    }else if(user_choice === 1 && cpu_choice === 2){
        document.getElementById("h1-result").innerHTML = "Lose";
        scoreLose += 1
    }else if(user_choice === 2 && cpu_choice === 0){
        document.getElementById("h1-result").innerHTML = "Lose";
        scoreLose += 1
    }else {
        document.getElementById("h1-result").innerHTML = "Won"; 
        scoreWon += 1;
    }

    document.getElementById("score_won").innerHTML ="Won:" + scoreWon.toString();
    document.getElementById("score_tie").innerHTML ="Tie:" + scoreTie.toString();
    document.getElementById("score_lost").innerHTML="Lost:" + scoreLose.toString();

    if(scoreWon === 6 && scoreLose < 6 && scoreTie < 6){
        // you won
        document.getElementById("gameEnd_img").src = "assets/images/champion-clipart.png";
        document.getElementById("gameEnd_img").className = "";
        gameEnded = true;
        document.getElementById("score").style.display = "none"
    }else if(scoreLose === 6 && scoreWon < 6 && scoreTie < 6){
        // you lost
        document.getElementById("gameEnd_img").className = "";
        document.getElementById("gameEnd_img").src = "assets/images/youlose.png";
        gameEnded = true;
        document.getElementById("score").style.display = "none"
    }else if (scoreTie === 6 && scoreLose < 6 && scoreWon < 6){
        document.getElementById("gameEnd_img").className = "tie_style";
        document.getElementById("gameEnd_img").src ="assets/images/tie.png";
        gameEnded = true;
        document.getElementById("score").style.display = "none"
    }

}