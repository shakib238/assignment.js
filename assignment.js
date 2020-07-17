function feetToMile(feet){

    var mile = feet/5280;
    return mile;  
  }var results = feetToMile(52800);
  
  
  console.log(results);



function woodCalculator(chair, table, bed){

    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;}
    var woodResutl = woodCalculator(10, 2, 1);
    console.log(woodResutl);







  function brickCalculator(stored) { if (stored <= 10)
{
var feet1 = stored * 15;
var brick = feet1 * 1000;


}else if (stored <= 20){
    var feet2 = stored * 12;
    var brick = feet2 * 1000;
}
else {
    var feet3 = stored * 3;
    var brick = feet3 * 1000;

}

return brick;
}
   
var first = brickCalculator(4);
console.log(first);











   function tinyFriend(names) {

    var tinyName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if(currentName > tinyName) {
            tinyName = currentName;
        }
    }
 } return tinyName;

    var smallestName = tinyFriend[2, 3, 4, 13, 20];

    console.log(smallestName);

    





   