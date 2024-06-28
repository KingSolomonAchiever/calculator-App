let display = document.getElementById('inputdisplay');
function appendToDisplay(input){
    display.value = display.value + input;
};



function evaluateValues(){
    display.value = eval(display.value);
};


function clearscreen(){
display.value =  "";


}

function deletesingleDigit(){
    display.value = display.value.slice(0,-1);
}

