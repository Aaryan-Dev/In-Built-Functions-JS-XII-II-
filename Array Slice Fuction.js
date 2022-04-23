// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function


function array(arr, x, y){ 

    if(x==null && y == null){
      console.log(arr);
    }
    
    
    
    else{
    
      if(x<0 && y==null){
       
            x = arr.length+x
        y = arr.length
      }
    
       if(x<0){
        x=0
      }
      if(y<0){
        y = arr.length+y
      }
      
    tag = [];
    for(i=x; i<y; i++){
    
      tag.push( arr[i]);
    }
     console.log(tag); 
      }
    }
    array(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, -1);
    