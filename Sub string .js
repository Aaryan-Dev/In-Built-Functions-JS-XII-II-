// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function


function string(str, x, y){

    if(y==null){
      y= str.length;
    }
      
    bag = "";
    for(i=x; i<y; i++){
        bag = bag + str[i];
    }
      console.log(bag);
    }
    
    string('Mozilla', 2);
      