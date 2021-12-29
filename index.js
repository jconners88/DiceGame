function rollDice(){
    document.getElementById("p1Dice").src = generateImagePath();
    document.getElementById("p2Dice").src = generateImagePath();
    if (determineNum1() > determineNum2()) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (determineNum1() < determineNum2()) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else if (determineNum1() === determineNum2()){
        document.querySelector("h1").innerHTML = "It's a draw!";
    }
    console.log("Good Test");

}

function genRand(){
    var randomNumber = Math.random()*6;
    var rand = Math.floor(randomNumber) + 1;
    return rand;
}

function generateImagePath(){
    var dicePath = "images/dice" + genRand() + ".png"
    return dicePath
}

function determineNum1(){
    var rand1 = document.getElementById("p1Dice").src;
    rand1 = rand1.slice((rand1.length - 5),(rand1.length - 4));
    return rand1;
}
function determineNum2(){
    var rand2 = document.getElementById("p2Dice").src;
    rand2 = rand2.slice((rand2.length - 5),(rand2.length - 4));
    return rand2;
}
