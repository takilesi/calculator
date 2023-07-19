let operatorsAndNumbers = []; 
total = 0

let nums = document.querySelectorAll(".buttonNumbers");
for (i of nums) {
    i.addEventListener('click', function() {
        document.querySelector(".screen").innerHTML+=this.innerHTML; 
        operatorsAndNumbers.push(this.innerHTML);
  });
}

let ops = document.querySelectorAll(".fourOperations");
for (i of ops) {
    i.addEventListener('click', function() {
        document.querySelector(".screen").innerHTML+=this.innerHTML; 
        operatorsAndNumbers.push(this.innerHTML);
  });
}

const ac = () => {
    document.querySelector(".screen").innerHTML="";
    operatorsAndNumbers = []; 
    total = 0; 
}

const calculate = () => {

    total = parseInt(operatorsAndNumbers[0])
    for (i=0; i <  operatorsAndNumbers.length-1; i++) {
        if (operatorsAndNumbers[i] == "/" || 
            operatorsAndNumbers[i] == "+" ||
            operatorsAndNumbers[i] == "-" ||
            operatorsAndNumbers[i] == "*"  ) {
                if(operatorsAndNumbers[i] == "/"){
                    total = total / parseInt(operatorsAndNumbers[i+1])
                }
                else if(operatorsAndNumbers[i] == "+"){
                    total = total + parseInt(operatorsAndNumbers[i+1])
                }
                else if(operatorsAndNumbers[i] == "-"){
                    total = total - parseInt(operatorsAndNumbers[i+1])
                }
                else if(operatorsAndNumbers[i] == "*"){
                    total = total * parseInt(operatorsAndNumbers[i+1])
                }
            }
    }
    document.querySelector(".screen").innerHTML = total
}