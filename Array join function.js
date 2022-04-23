// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function

function array(arr, syl){
    bag = "";
    for(i=0; i<arr.length-1; i++){
       bag = (bag + arr[i] + syl);
    }
     bag = (bag + arr[i]);
    
    console.log(bag);
    
    }
    
    array( ['Fire', 'Air', 'Water'], '_');