  // Example 1:
//forEach([1,2,3],function(){console.log('hi');});

//Example 2:
//forEach([1,2,3],function(number){console.log(number);});

//Example 3:
//forEach([1,2,3],function(number,index){
//console.log(index);
//})

//Example 4:
//forEach([1,2,3],function(number,index, originalArray){
//console.log(originalArray);
//})

function forEach(array,callback,optionalThisObject){
  //if configurabaleThisObject exists.
    if(optionalThisObject){
      //we want to bind optionalThisObject to the callback function. 
        callback = callback.bind(optionalThisObject);
    }
  for(let i=0;i<array.length;i++){
    // pass in index as the second argument
    callback(array[i],i,array);
  }
}

(function(){
  tests({
    'It should run the callback array.length times':function(){
      numberOfTimesCallbackHasRun = 0;
      forEach([1,2,3],function(){numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun,3);
    },
    'It should pass in the ith element as the first argument to the callback':function(){
      forEach([1],function(number){
        eq(number,1);
      });
    },
    'It should pass in the ith position as the second argument to the callback':function(){
      forEach([1],function(number,index){
        //index = 0;
        eq(index,0);
      });
    },
    'It should pass in the original array as the third argument to the callback':function(){
      let testArray = [1,2,3];
      forEach(testArray,function(number,index,originalArray){
        //index = 0;
        eq(originalArray,testArray);
      });
    },
    'It should accept a optional this object':function(){
      //pass in array, callback, optionalThisObject
      forEach(
        [1],
        function(){
          //inside of here, this should be equal to the configurable this object
          // this.descriptioin should be equal to the string'configurable this object'
          eq(this.description,'I should be accessible inside of the callback')
        },
        {description:'I should be accessible inside of the callback'}
      );
    }
  });

}());

