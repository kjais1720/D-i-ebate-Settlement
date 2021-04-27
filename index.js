var name1=prompt("Name of player1");
var name2=prompt("Name of player2");
document.getElementsByTagName("p")[0].innerHTML=name1;
document.getElementsByTagName("p")[1].innerHTML=name2;

function rollDie(){
    var randomDice1;
    var randomDice2;
    randomDice1=Math.random()*6+1;
    randomDice1=Math.floor(randomDice1);

    randomDice2=Math.random()*6+1;
    randomDice2=Math.floor(randomDice2);
    

    var dice1="images/dice"+String(randomDice1)+".png";
    var dice2="images/dice"+String(randomDice2)+".png";

    document.getElementsByTagName("img")[0].classList.toggle("dice-roll");
    document.getElementsByTagName("img")[1].classList.toggle("dice-roll");

    

    setTimeout(function(){
        document.getElementsByTagName("img")[0].setAttribute("src",dice1);
        document.getElementsByTagName("img")[1].setAttribute("src",dice2);
    
    if(randomDice1 > randomDice2){
        document.querySelector("h1").innerHTML="🚩 "+name1+" wins!";
    }
    else if(randomDice1 < randomDice2){
        document.querySelector("h1").innerHTML=name2+" wins! 🚩";
    }
    else if (randomDice1===randomDice2){
        document.querySelector("h1").innerHTML="draw!!";
    }
    }, 5000);
    
}


