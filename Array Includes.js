// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

function what(arr,N){
  
    var isit = false;
    for(i=0; i<arr.length; i++){
       if(arr[i]==N){
          isit = true;
       }
    }
     console.log(isit);
    }
    
    what(['cat', 'dog', 'bat'], "bat");