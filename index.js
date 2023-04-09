let firstVar = 0;
let secondVar = 0;
let operatorVar = "+";
let operatorSelected = false; 
let equalsSelected = false;
let equalsTotal = 0;
let outputNumber = 0; 

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