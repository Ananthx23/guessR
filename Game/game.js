let animalsInfo={
    "Big hairy and powerful animal":"bear",
    "King of the jungle":"lion",
    "A famous sports brand":"puma",
    "It always moves in pack":"wolf",
    "I have two sharp claw":"crab",
    "I am also found in IIT Madras":"Deer",
    "I am Found all over the world":"Duck"
}
animalKey=["Big hairy and powerful animal","King of the jungle","A famous sports brand","It always moves in pack","I have two sharp claw","I am also found in IIT Madras","I am Found all over the world"]
randNum=Math.floor(Math.random()*8);
randInfo=animalKey[randNum];
displayInfo=animalsInfo[randInfo];
let displayElement=document.getElementById("clue");
displayElement.append(randInfo);
function inputWord(){
    let firstLetter=document.getElementById("letter1").value;
    let secondLetter=document.getElementById("letter2").value;
    let thirdLetter=document.getElementById("letter3").value;
    let fourthLetter=document.getElementById("letter4").value;
    let finalWord=firstLetter+secondLetter+thirdLetter+fourthLetter;
    let resultVar=document.getElementById("result");
    if(finalWord==displayInfo){
        resultVar.innerText="Yayy!!You got it right!!";
    }
    else{
        resultVar.innerText="No problem, try again!";
    }
}