let firstVar = 0;
let secondVar = 0;
let operatorVar = "+";
let operatorSelected = false; 
let equalsSelected = false;
let equalsTotal = 0;
let outputNumber = 0; 
let themeSlider = document.getElementById("themeSlider")

function numberPressed(num){
    if (operatorSelected){
        if (secondVar > 0){
            secondVar = String(secondVar) + num;
        } else{
            secondVar = num;
        }
        outputNumber = secondVar;
    } else {
        if (firstVar > 0){
            firstVar = String(firstVar) + num;
        } else{
            firstVar = num;
        }
        outputNumber = firstVar;
    }
    document.getElementById("calcOutput").innerHTML = outputNumber;
}

function deletePressed(){
    if ((operatorSelected) && (outputNumber != 0)) {
        secondVar = String(secondVar);
        secondVar.length > 1 ? secondVar = secondVar.substring(0, secondVar.length-1) : secondVar = 0; 
        outputNumber = secondVar;
    } else {
        firstVar = String(firstVar);
        firstVar.length > 1 ? firstVar = firstVar.substring(0, firstVar.length-1) : firstVar = 0;
        outputNumber = firstVar; 
    }
    document.getElementById("calcOutput").innerHTML = outputNumber;
}

function operatorPressed(op){
    operatorSelected = true;
    operatorVar = op; 
    outputNumber = secondVar;
    document.getElementById("calcOutput").innerHTML = outputNumber;
}

function equalsPressed(){ 
    if (secondVar > 0){
        equalsSelected = true;
        if (equalsTotal == 0){
            if(operatorVar == "+"){
                outputNumber = Number(firstVar) + Number(secondVar);
            } else if (operatorVar == "-") {
                outputNumber = Number(firstVar) - Number(secondVar);
            } else if (operatorVar == "/") {
                outputNumber = Number(firstVar) / Number(secondVar);
            } else {
                outputNumber = Number(firstVar) * Number(secondVar);
            }    
            firstVar = 0;
        } else { 
            if(operatorVar == "+"){
                outputNumber = equalsTotal + Number(secondVar);
            } else if (operatorVar == "-") {
                outputNumber = equalsTotal - Number(secondVar);
            } else if (operatorVar == "/") {
                outputNumber = equalsTotal / Number(secondVar);
            } else {
                outputNumber = equalsTotal * Number(secondVar);
            } 
        }
        secondVar = 0;
        equalsTotal = outputNumber;
        operatorSelected = false;      
        document.getElementById("calcOutput").innerHTML = outputNumber;
    }
}

function resetPressed(){ 
    firstVar = 0; 
    secondVar = 0; 
    equalsTotal = 0;
    operatorSelected = false;
    equalsSelected = false;
    outputNumber = firstVar; 
    document.getElementById("calcOutput").innerHTML = outputNumber;
}

themeSlider.oninput = function() {
    let mainBackgroundColor; 
    let sectionBackgroundColor;
    let screenBackgroundColor;
    let numberkeyColor; 
    let numberKeyShadowColor; 
    let resetAndDelButtonColor;
    let resetAndDelButtonShadowColor; 
    let equalsButtonColor; 
    let equalsButtonShadowColor;
    let headerAndOutputTextColor
    let numberTextColor; // Number buttons
    let equalsTextColor;
    //let otherTextColor;

    if(this.value == 1){
        mainBackgroundColor = "hsl(222, 26%, 31%)";
        sectionBackgroundColor = "hsl(223, 31%, 20%)";
        screenBackgroundColor = "hsl(224, 36%, 15%)";
        numberkeyColor = "hsl(30, 25%, 89%)";
        numberKeyShadowColor = "hsl(28, 16%, 65%)";
        resetAndDelButtonColor = "hsl(225, 21%, 49%)"; 
        resetAndDelButtonShadowColor = "hsl(224, 28%, 35%)";
        equalsButtonColor = "hsl(6, 63%, 50%)"; 
        equalsButtonShadowColor = "hsl(6, 70%, 34%)";
        headerAndOutputTextColor = "hsl(0, 0%, 100%)";
        numberTextColor = "hsl(221, 14%, 31%)"; 
        equalsTextColor = "hsl(0, 0%, 100%)";
        //otherTextColor = "hsl(0, 0%, 100%)"; 
    } else if (this.value == 2){
        mainBackgroundColor = "hsl(0, 0%, 90%)"; 
        sectionBackgroundColor = "hsl(0, 5%, 81%)";
        screenBackgroundColor = "hsl(0, 0%, 93%)";
        numberkeyColor = "hsl(45, 7%, 89%)";
        numberKeyShadowColor = "hsl(35, 11%, 61%)";
        resetAndDelButtonColor = "hsl(185, 42%, 37%)"; 
        resetAndDelButtonShadowColor = "hsl(185, 58%, 25%)";
        equalsButtonColor = "hsl(25, 98%, 40%)"; 
        equalsButtonShadowColor = "hsl(25, 99%, 27%)";
        headerAndOutputTextColor = "hsl(60, 10%, 19%)";
        numberTextColor = "hsl(60, 10%, 19%)"; 
        equalsTextColor = "hsl(0, 0%, 100%)";
        otherTextColor = "hsl(0, 0%, 100%)"; 
    } else {
        mainBackgroundColor = "hsl(268, 75%, 9%)"; 
        sectionBackgroundColor = "hsl(268, 71%, 12%)";
        screenBackgroundColor = "hsl(268, 71%, 12%)";
        numberkeyColor = "hsl(268, 47%, 21%)";
        numberKeyShadowColor = "hsl(290, 70%, 36%)";
        resetAndDelButtonColor = "hsl(281, 89%, 26%)"; 
        resetAndDelButtonShadowColor = "hsl(285, 91%, 52%)";
        equalsButtonColor = "hsl(176, 100%, 44%)"; 
        equalsButtonShadowColor = "hsl(177, 92%, 70%)";
        headerAndOutputTextColor = "hsl(52, 100%, 62%)";
        numberTextColor = "hsl(52, 100%, 62%)"; 
        equalsTextColor = "hsl(198, 20%, 13%)"
        otherTextColor = "hsl(0, 0%, 100%)"; 
    }
    document.body.style.backgroundColor = mainBackgroundColor; 
    document.getElementById("calcInput").style.backgroundColor = sectionBackgroundColor;
    document.getElementById("themeSelectorSliderContainer").style.backgroundColor
    document.getElementById("calcDisplay").style.backgroundColor = screenBackgroundColor;
    let elementList = document.getElementsByClassName("numAndOpButtons");
    for (var i=0; i < elementList.length; i++){
        elementList[i].style.backgroundColor = numberkeyColor;
        elementList[i].style.boxShadow = ("0px 5px " + numberKeyShadowColor);
    }
    elementList = document.getElementsByClassName("resetAndDeleteButton");
    for (var i=0; i < elementList.length; i++){
        elementList[i].style.backgroundColor = resetAndDelButtonColor;
        elementList[i].style.boxShadow = ("0px 5px " + resetAndDelButtonShadowColor);
    }
    document.getElementById("equalsButton").style.backgroundColor = equalsButtonColor;
    document.getElementById("equalsButton").style.boxShadow = ("0px 5px " + equalsButtonShadowColor);
    document.getElementById("title").style.backgroundColor = headerAndOutputTextColor;
    document.getElementById("calcOutput").style.backgroundColor = headerAndOutputTextColor;
    elementList = document.getElementsByClassName("numAndOpText");
    for (var i=0; i < elementList.length; i++){
        elementList[i].style.color = numberTextColor;
    }
    document.getElementById("equalsButtonText").style.color = equalsTextColor;

}