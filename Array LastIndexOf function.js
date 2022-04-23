// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function array(arr, input){

    var y;
for(i=arr.length-1; i>=0; i--){
   if(arr[i] === input){
      console.log(i);
     break;
 }
}

}

array(["Dodo", 'Tiger', 'Penguin', "Penguin","Dodo"],"Penguin" );


let aar = ["Dodo", 'Tiger', 'Penguin', "Penguin","Dodo"]

console.log(aar[-2]);
