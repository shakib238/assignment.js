var name = [2, 3, 4, 8, 9, 4, 9];
var uniqueName = [];

for(var i = 0; i < name.length; i++){

var element = name[i];
var index = uniqueName.indexOf(element);
if(index == -1){
    uniqueName.push(element);
}




}console.log(uniqueName);