// logic: when a number gets clicked on a temporary number


let opsNums = []; 
total = 0
tempNum = ""

let nums = document.querySelectorAll(".buttonNumbers");
for (i of nums) {
    i.addEventListener('click', function() {
        document.querySelector(".screen").innerHTML+=this.innerHTML;
        tempNum += "" + this.innerHTML

    });
}

let ops = document.querySelectorAll(".fourOperations");
for (i of ops) {
    i.addEventListener('click', function() {
        document.querySelector(".screen").innerHTML+=this.innerHTML; 
        total = parseFloat(tempNum)
        opsNums.push(total);
        opsNums.push(this.innerHTML);
        tempNum = 0; 
  });
}

const ac = () => {
    document.querySelector(".screen").innerHTML="";
    opsNums = []; 
    total = 0; 
    tempNum = 0; 
}

const calculate = () => {

    total = parseFloat(tempNum)
    opsNums.push(total);

    total = parseFloat(opsNums[0])
    for (i=0; i <  opsNums.length-1; i++) {
        if (opsNums[i] == "/" || 
            opsNums[i] == "+" ||
            opsNums[i] == "-" ||
            opsNums[i] == "*"  ) {
                if(opsNums[i] == "/"){
                    total = total / parseFloat(opsNums[i+1])
                }
                else if(opsNums[i] == "+"){
                    total = total + parseFloat(opsNums[i+1])
                }
                else if(opsNums[i] == "-"){
                    total = total - parseFloat(opsNums[i+1])
                }
                else if(opsNums[i] == "*"){
                    total = total * parseFloat(opsNums[i+1])
                }
            }
    }
    document.querySelector(".screen").innerHTML = total
}