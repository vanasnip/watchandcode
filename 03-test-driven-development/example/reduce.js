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



// Callback should not run on holes in the array 

// If initialValue, previousValue should be equal to initialValue.
// If initialValue, currentValue should be equal to first val in the array.
// If initialValue, callback will start at index 0.

// If no initialValue, previousValue will be equal to the first value in array.
// If no initialValue, currentValue will be equal to the second value in array.
// If no initialValue, callback will start at index 1.

// 
// // // // // Edge cases.
  // if array is empty and no initialValue provided
  // TypeError should be thrown.
  // reduce([],funciton(){}) ==> typeError
  //
  // if array has one element (regardless of position) and no initial value was provided,
  // or if initialValue is provided but the array is empty, the solo value would be returned, without calling callback
  // e.g:
  // reduce([,1],function(){})
  // returns 1 skip callback
  //
  // reduce([],function(){},3)
  // returns 3;
  //
  // reduce([,,,],function(){},6)
  // returns 6;
 
