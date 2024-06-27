function runGame(user_choice) {
    let cpu_choice = Math.floor(Math.random() * 3);
    
    if (cpu_choice === 0 ){
        document.getElementById("h1-cpu").src = "assets/images/rock.png"
        document.getElementById("h1-cpu").className = "rock"
    }else if(cpu_choice === 1 ){
        document.getElementById("h1-cpu").src = "assets/images/Paper.png"
        document.getElementById("h1-cpu").className = "paper"
    }else {
        document.getElementById("h1-cpu").src = "assets/images/scissors.png"
        document.getElementById("h1-cpu").className = "scissor"
    }

    if (user_choice === cpu_choice){
        document.getElementById("h1-result").innerHTML = "tie";
    }else if(user_choice === 0 && cpu_choice === 1){
        document.getElementById("h1-result").innerHTML = "Lose";
    }else if(user_choice === 1 && cpu_choice === 2){
        document.getElementById("h1-result").innerHTML = "Lose";
    }else if(user_choice === 2 && cpu_choice === 0){
        document.getElementById("h1-result").innerHTML = "Lose";
    }else {
        document.getElementById("h1-result").innerHTML = "Won"; 
    }

}