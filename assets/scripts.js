var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

document.getElementById("bnt-").addEventListener("click", function() {
    if (currentNumber >= -9){
     currentNumber = currentNumber - 1 ;
     currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber <= -1){
        document.getElementById("currentNumber").style.color = "red";
    }
    if (currentNumber >= 0){
        document.getElementById("currentNumber").style.color = "black";
        }
    }
)
document.getElementById("bnt+").addEventListener("click", function() {
    if (currentNumber <= 9){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;   
    }
    if (currentNumber >= 0){
        document.getElementById("currentNumber").style.color = "black";
    }
})

