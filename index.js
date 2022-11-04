var randomnum1=Math.floor(Math.random()*100)%6+1;
var DiceImgRand = "dice"+randomnum1+".png";
var RandImgSrc="./images/"+DiceImgRand;
document.querySelectorAll("img")[0].setAttribute("src",RandImgSrc);

var randomnum2=Math.floor(Math.random()*100)%6+1;
var DiceImgRand2 = "dice"+randomnum2+".png";
var RandImgSrc2="./images/"+DiceImgRand2;
document.querySelectorAll("img")[1].setAttribute("src",RandImgSrc2);

if(randomnum1>randomnum2){
    document.querySelector("h3").innerHTML="Player 1 Wins!";
}
else if(randomnum1<randomnum2){
    document.querySelector("h3").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h3").innerHTML="Its a Tie!!";
}