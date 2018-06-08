//implementation of array.length
function arrayLength(array){
  if(!Array.isArray(array)) return array + ' is not an array';
  let arrayCounter = 0;
  while(array[arrayCounter] !== undefined){
    arrayCounter += 1;
  }
  return arrayCounter;
}
(function(){
  tests({
    'it should check if argument is an array':function(){
      eq(arrayLength(42),'42 is not an array');
    },
    'It should return an integer':function(){
      eq(typeof arrayLength([1,2,3]),'number');
    },
    'It should return 0 for empty array':function(){
      eq(arrayLength([]), 0);
    },
    'It should return the total number of elements in the array':function(){
      eq(arrayLength([1,2,3]),3);
    }
  })
}());
