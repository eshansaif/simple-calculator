function calculate(x) {

    document.getElementById("input-field").value = document.getElementById("input-field").value +  x;
}

document.getElementById("equalBtn").addEventListener("click",function(){

    
    const displayValue = document.getElementById("input-field").value;
    document.getElementById("input-field").value = eval(displayValue);

    if(document.getElementById("input-field").value.length > 17){
        document.getElementById("input-field").value = eval(displayValue).toFixed(15);
    }

    try {
        eval('hoo bar');
      } catch (e) {
        console.error(e instanceof SyntaxError); 
        console.error(e.message);                
        console.error(e.name);                   
        console.error(e.fileName);               
        console.error(e.lineNumber);             
        console.error(e.columnNumber);           
        console.error(e.stack);                  
      }
})

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("input-field").value = "";
})


function backspace() {
    var value = document.getElementById("input-field").value;
    document.getElementById("input-field").value = value.substr(0, value.length - 1);
}

document.getElementById("backspace").addEventListener("click",function() {
    var value = document.getElementById("input-field").value;
    document.getElementById("input-field").value = value.substr(0, value.length - 1);
})
