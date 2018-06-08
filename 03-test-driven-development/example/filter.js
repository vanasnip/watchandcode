// Example 1:
//([1,2,3],function(){console.log('hi');});

//Example 2:
//filter([1,2,3],function(number){console.log(number);});

//Example 3:
//filter([1,2,3],function(number,index){
//console.log(index);
//})

//Example 4:
//filter([1,2,3],function(number,index, originalArray){
//console.log(originalArray);
//})

// Example 5:
// filter([1,2,3],funciton(){
//  console.log(this.name);
// },{name:'ivan'});

// Example 6:
// var testArray = [1,2,3];
// var filteredArray = filter(testArray,function(){});
// testArray !== filteredArray

// Example 7
// var testArray = [1,2,3];
// var filteredArray = filter(testArray,function(element){
//  return element > 1;
// });
// Expect filteredArray to be [2,3]


function filter(originalArray, callback,optionalThisObject){
  let filteredArray = [];
  if(optionalThisObject){
    callback = callback.bind(optionalThisObject);
  }
  for(var i=0;i<originalArray.length;i++){
    if(callback(originalArray[i],i,originalArray)){
      filteredArray.push(originalArray[i]);
    }
  }
  return filteredArray;
};
(function(){
  tests({
    'It should run the callback array.length times':function(){
      numberOfTimesCallbackHasRun = 0;
      filter([1,2,3],function(){numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun,3);
    },
    'It should pass in the ith element as the first argument to the callback':function(){
      filter([1],function(number){
        eq(number,1);
      });
    },
    'It should pass in the ith position as the second argument to the callback':function(){
      filter([1],function(number,index){
        eq(index,0);
      });
    },
    'It should pass in the original array as the third argument to the callback':function(){
      let testArray = [1,2,3];
      filter(testArray,function(number,index,originalArray){
        eq(originalArray,testArray);
      });
    },
    'It should accept a optional this object':function(){
      //pass in array, callback, optionalThisObject
      filter(
        [1],
        function(){
          //inside of here, this should be equal to the configurable this object
          // this.descriptioin should be equal to the string'configurable this object'
          eq(this.description,'I should be accessible inside of the callback')
        },
        {description:'I should be accessible inside of the callback'}
      );
    },
    'It should return an array': function(){
      let testArray = [1,2,3];
      let filteredArray = filter(testArray,function(){});
      // filteredArray is an array
      eq(Array.isArray(filteredArray),true);
      // testarray !== filteredArray
    },'It should return a new array, not the array being filtered.' : function(){
      let arrayBeingFiltered = [];
      let filteredArray = filter(arrayBeingFiltered,function(){});
      eq(arrayBeingFiltered !== filteredArray, true);

    },
    'It should return a new array that only has elements where callback returns true':function(){
      let filteredArray = filter([1,2],function(number){
        return number > 1; 
      });
      eq(filteredArray.length,1);
      eq(filteredArray[0],2);
    }
  });

}());

