function reverseString(str){
    var reverse ="";
    for(var i = 0; i < str.length; i++){
var char = str[i];

reverse = char + reverse;

    }return reverse;
}var statement = "hello brother what are you doing.";
var output = reverseString(statement);
console.log(output);