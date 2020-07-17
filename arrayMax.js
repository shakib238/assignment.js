var marks = [81, 80, 11, 23, 28, 29, 39];
var max = marks[0];

for(var i = 0; i < marks.length; i++){

var element = marks[i];

if(element > max){

    max = element;
}
}console.log("Highest alue Is: ", max);