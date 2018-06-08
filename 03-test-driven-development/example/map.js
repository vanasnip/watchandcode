// Example 1:
//([1,2,3],function(){console.log('hi');});

//Example 2:
//map([1,2,3],function(number){console.log(number);});

//Example 3:
//map([1,2,3],function(number,index){
//console.log(index);
//})

//Example 4:
//map([1,2,3],function(number,index, originalArray){
//console.log(originalArray);
//})

// Example 5:
// map([1,2,3],funciton(){
//  console.log(this.name);
// },{name:'ivan'});

// Example 6:
// var testArray = [1,2,3];
// var mappedArray = map(testArray,function(){});
// testArray !== mappedArray

// Example 7
// var testArray = [1,2,3];
// var mappedArray = map(testArray,function(element){
//  return element > 1;
// });
// Expect mappedArray to be [false,true,true]


function map(originalArray, callback,optionalThisObject){
  let mappedArray = [];
  if(optionalThisObject){
    callback = callback.bind(optionalThisObject);
  }
  for(var i=0;i<originalArray.length;i++){
    if(i in originalArray){
      mappedArray[i] = callback(originalArray[i],i,originalArray);
    }
  }
  return mappedArray;
};
(function(){
  tests({
    'It should run the callback array.length times':function(){
      numberOfTimesCallbackHasRun = 0;
      map([1,2,3],function(){numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun,3);
    },
    'It should pass in the ith element as the first argument to the callback':function(){
      map([1],function(number){
        eq(number,1);
      });
    },
    'It should pass in the ith position as the second argument to the callback':function(){
      map([1],function(number,index){
        eq(index,0);
      });
    },
    'It should pass in the original array as the third argument to the callback':function(){
      let testArray = [1,2,3];
      map(testArray,function(number,index,originalArray){
        eq(originalArray,testArray);
      });
    },
    'It should accept a optional this object':function(){
      //pass in array, callback, optionalThisObject
      map(
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
      let mappedArray = map(testArray,function(){});
      // mappedArray is an array
      eq(Array.isArray(mappedArray),true);
      // testarray !== mappedArray
    },'It should return a new array, not the array being mapped.' : function(){
      let arrayBeingmapped = [];
      let mappedArray = map(arrayBeingmapped,function(){});
      eq(arrayBeingmapped !== mappedArray, true);

    },
    'It should return a new array that has values defined in the callback':function(){
      let mappedArray = map([1,2,3],function(number){
        return number * 3;
      });
      eq(mappedArray[0],3);
      eq(mappedArray[1],6);
      eq(mappedArray[2],9);
    },
    'It should return and array with only properties that are set and not undefined':function(){
      let mappedArray = map([1,,2],function(number){
        return number * number;
      });
      eq(mappedArray[0],1);
      eq(1 in mappedArray,false);
      eq(mappedArray[2],4);
    }
  });
}());

