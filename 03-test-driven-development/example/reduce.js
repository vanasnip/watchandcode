/*
  // Prototype implementation
  // function reduce(array,callback,startingValue){
  //   let resultSoFar = startingValue;
  //   for(var i=0;i<array.length;i++){
  //     resultSoFar = callback(resultSoFar,array[i],i,array);
  //   }
  //   return resultSoFar;
  // }

  // Function signature
  // reduce(array,callback,initialValue]);

  // Callback parameters:
  // previousValue
  // currentValue
  // currentIndex
  // array

  // Return Value:
  // returns a single value

  // Requirements:




  // If initialValue, previousValue should start with initialValue.
  // If initialValue, currentValue should start with array[0].
  // If initialValue, callback will start at index 0.

  // If no initialValue, previousValue should start with array[0].
  // If no initialValue, currentValue should start with array[1].
  // If no initialValue, callback will start at index 1.

  // If no initialValue & array has one element, return the only element, without calling callback.
  // If initialValue & array is empty, return initialValue, without calling callback.

  // It should reduce.
  // If should exclude holes
  // Callback should not run on holes in the array.
  // If array is empty and no initalValue, throw TypeError.
  // If should pass array as fourth agument to callback.
  */
  function reduce(array,callback,initialValue){
    let startingIndex = 0;
    let resultSoFar = initialValue;
    // Detect is no initialValue.
      if(arguments.length < 3){
        if(Object.keys(array).length === 1){
          let setValIndex = Object.keys(array)[0];
          return array[setValIndex];
        } else if (Object.keys(array).length === 0){
          throw new TypeError('Reduce of empty array with no initial value');
        }
        let availableIndexes = Object.keys(array);
        resultSoFar = array[availableIndexes[startingIndex]];
        startingIndex = availableIndexes[1];
      } else {
        if(Object.keys(array).length === 0){return initialValue;}
      }
    for(var i=startingIndex;i<array.length;i++){
      if(i in array){
        resultSoFar = callback(resultSoFar,array[i],i,array);
      }
    }
    return resultSoFar;
  }
tests({
'If initialValue, callback should run array.length times.':function(){
  let numberOfTimesCallbackHasRun = 0;
  reduce([1],function(){
    numberOfTimesCallbackHasRun++;
  },0);//has a 3rd argument here.
    eq(numberOfTimesCallbackHasRun,1);
},
'If no initialValue, callback should run array.length - 1 times.':function(){
  fail();
  let numberOfTimesCallbackHasRun = 0;
  reduce([1],function(){
    numberOfTimesCallbackHasRun++;
  });
  eq(numberOfTimesCallbackHasRun,0);
},
'If initialValue, previousValue should start with initialValue.':function(){
  reduce([2],function(previousValue){
    eq(previousValue,0);
  },0);
},
'If initialValue, currentValue should start with array[0].':function(){
  reduce([3],function(previousValue,currentValue){
    eq(currentValue,3);
  },0)
},
'If initialValue, callback will start at index 0.':function(){
  reduce([1],function(previousValue,currentValue,currentIndex){
    eq(currentIndex,0);
  },0);
},
'If no initialValue, previousValue should start with array[0].':function(){
  reduce([1,2],function(previousValue){
    eq(previousValue,1);
  });

},
'If no initialValue, currentValue should start with array[1].':function(){
  reduce([1,2],function(previousValue,currentValue){
    eq(currentValue,2);
  });
},
'If no initialValue, callback will start at index 1.':function(){
  reduce([1,2],function(previousValue,currentValue,currentIndex){
    eq(currentIndex,1);
  });
},

'If no initialValue & array has one element, return the only element, without calling callback.':function(){
  let numberOfTimesCallbackHasRun = 0;
  let result = reduce([14],function(){numberOfTimesCallbackHasRun += 1;});
  eq(result,14);
  eq(numberOfTimesCallbackHasRun,0);

},
'If initialValue & array is empty, return initialValue, without calling callback.':function(){
  let numberOfTimesCallbackHasRun = 0;
  let result = reduce([,,,],function(){numberOfTimesCallbackHasRun += 1 },13);
  eq(result,13);
  eq(numberOfTimesCallbackHasRun,0);
},

'It should reduce.':function(){
  let sum = reduce([1,2,3],function(a,b){
    return a + b;
  },0);
  eq(sum,6);
},
'If initialValue it should exclude holes.':function(){
  let sum = reduce([,,1,2,,3],function(a,b){
    return a + b;
  },0);
  eq(sum,6);
},
'If no initialValue it should exclude holes.':function(){
  let sum = reduce([,,1,2,,3],function(a,b){
    return a + b;
  });
  eq(sum,6);
},
'Callback should not run on holes in the array.':function(){
  let numberOfTimesCallbackHasRun = 0;
  reduce([,,,2],function(){
    numberOfTimesCallbackHasRun += 1; 
  });
  eq(numberOfTimesCallbackHasRun,0);
},
'If array is empty and no initalValue, throw TypeError.':function(){
  let isTypeError = false;
  try{
    reduce([,,,], function(){});
  } catch(e){
    isTypeError = (e instanceof TypeError);
  }
  eq(isTypeError,true);
},
'It should pass array as fourth agument to callback.':function(){
  let myArray = [1,2,3,4];
  reduce(myArray,function(previousValue,currentValue,currentIndex,array){
    eq(Array.isArray(array),true);
    eq(array[0],1);
    eq(array[1],2);
    eq(array[3],4);
  })
},
});

