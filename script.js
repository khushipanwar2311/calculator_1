document.getElementById("btn").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";}

else{
if(operator==="+"){
    result = num1+num2;
}
else if (operator === "-") {
    result = num1 - num2;}
    else if(operator==="*"){
        result = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
          result = "Cannot divide by zero";
        } else {
          result = num1 / num2;
        }


    }

}

document.getElementById("result").textContent = "Result: "+ result;



});