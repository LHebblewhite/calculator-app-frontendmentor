let firstVar = 0;
let secondVar = 0;
let operatorVar = "+";
let operatorSelected = false; 
let equalsSelected = false;
let outputNumber = 0; 

function numberPressed(num){
    if(operatorSelected){
        if (secondVar > 0) {
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
    if (equalsPressed){
        if(operatorVar == "+"){
            outputNumber = Number(firstVar) + Number(outputNumber);
        } else if (operatorVar == "-") {
            outputNumber = Number(firstVar) - Number(outputNumber);
        } else if (operatorVar == "/") {
            outputNumber = Number(firstVar) / Number(outputNumber);
        } else {
            outputNumber = Number(firstVar) * Number(outputNumber);
        }
    } else {
        outputNumber = secondVar;
    }
    
    document.getElementById("calcOutput").innerHTML = outputNumber;
}

function equalsPressed(){ 
    if (firstVar > 0){
        equalsSelected = true;
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
        secondVar = 0;       
        document.getElementById("calcOutput").innerHTML = outputNumber;
    }
}

function resetPressed(){ 
    firstVar = 0; 
    secondVar = 0; 
    operatorSelected = false;
    equalsSelected = true;
    outputNumber = firstVar; 
    document.getElementById("calcOutput").innerHTML = outputNumber;
}