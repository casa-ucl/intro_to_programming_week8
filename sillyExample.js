console.log("I'm coming from an external script!");

function myRec(val){
   console.log("Record is: " + val);
}
var testVals = [2, 3, 6, 209];
for(var i = 0; i < testVals.length; i++){
   myRec(testVals[i]);
}
