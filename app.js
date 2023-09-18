// this calculator currently cannot handle order of operations
// calculations execute in a linear fashion 
// e.g. 40+30/2 returns 35 not 55
// use Go Live in bottom corner of VSCode to run 

// settings for render.com instructions 
// https://community.render.com/t/how-to-host-a-simple-index-html-file-as-a-static-site/5734

let opsNums = []; 
total = 0
tempNum = ""

// every consecutive click on a number or decimal concatenates to tempNum
let nums = document.querySelectorAll(".buttonNumbers");
for (i of nums) {
    i.addEventListener('click', function() {
        document.querySelector(".screen").innerHTML+=this.innerHTML;
        tempNum += "" + this.innerHTML

    });
}

// clicking an operator...
// 1. set total to tempNum
// 2. push total to array
// 3. push operator to array
// 4. set tempNum to 0
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