let firstVar = 0;
let secondVar = 0;
let operatorSelected = false; 
let resetSelected = false;
let outputNumber = 0; 

function numberPressed(num){
    if(operatorSelected){
        if (secondVar > 0) {
            secondVar = str(secondVar) + num;
        } else{
            secondVar = num;
        }
        outputNumber = secondVar
    } else {
        if (firstVar > 0){
            firstVar = str(secondVar) + num
        } else{
            firstVar = num;
        }
        outputNumber = firstVar
    }
    document.getElementById("calcOutput").innerHTML = outputNumber;
}