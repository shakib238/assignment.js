

function getArraySum(num){
var sum = 0;
for(var i = 0; i < num.length; i++){

    var element = num[i];
    sum = sum + element;
}
    return sum;
     } 
     
     var num = [12, 13, 32, 90, 99, 22, 39, 29];
var result = getArraySum(num);
console.log("sum of the value is: ", result);