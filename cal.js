function display(num){
    result.value+=num
    // result.value=result.value+num 
}


function allclear(){
    result.value=""
}

function evaluateexp(){
    // currentExp=result
    // result.value=eval(currentExp)
    result.value=eval(result.value)
}

function backspace(){
    // data=result.value 
    // s=data.slice(0,-1)
    // result.value.s 

    result.value=result.value.slice(0,-1)
}