//ADD NUMBER

function addnum(number){
    let num = document.getElementById("num");
    num.value += number;
}

//CLEAR

function clr(){
    let num = document.getElementById("num");
    num.value = "";
    
}

//ADD

function plus(){
    let num = document.getElementById("num");
    num.value += "+";
}

//MINUS

function minus(){
    let num = document.getElementById("num");
    num.value += "-";
}

//MULTIPLY

function multiply(){
    let num = document.getElementById("num");
    num.value += "*";
}

//DIVIDE

function divide(){
    let num = document.getElementById("num");
    num.value += "/";
}

//EQUAL

function equal(){
    let num = document.getElementById("num");
    num.value = eval(num.value);
    
}


//DECIMAL POINT

function decimal() {
    let num = document.getElementById("num");
    num.value += ".";
}

//OPEN PARENTHESES

function openparenth(){
    let num = document.getElementById("num");
    num.value += "(";
}

//CLOSE PARENTHESES

function closeparenth(){
    let num = document.getElementById("num");
    num.value += ")";
}



// DELETE LAST CHARACTER
function deletechar() {
    let num = document.getElementById("num");
    let currentValue = num.value;
    if (currentValue.length > 0) {
        num.value = currentValue.slice(0, -1);
    }
}

