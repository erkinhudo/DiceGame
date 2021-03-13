var number1 = Math.floor(Math.random ()*6+1);
var number2 = Math.floor(Math.random ()*6+1);
randomNumber1 = number1;
randomNumber2 = number2;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 wins!" ;
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = " Draw!" ;;
}
else {
    document.querySelector("h1").innerHTML = " Player 2 wins!" ;
}
