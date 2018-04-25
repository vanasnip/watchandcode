function _01(){
  // passing functions around
  function getRandomNumber(limit){
    return Math.floor(Math.random() * Math.floor(limit));
  }
  function logNumbers(n,func){
    for (var i=0;i<n+10;i++){
      console.log(func(i));
    }
  }
  logNumbers(getRandomNumber(100),getRandomNumber);
}
function _02(){
  setTimeout(function(){console.log('wake up Ivano')}, 5000)
}
function _03(){
  var students = ['johnathan','jenny','elliot'];
  function logname(name){
    console.log(name);
  }
  students.forEach(function(student){
    logname(student);
  });

  function custForEach(myArray,myFunction){
    for(var i=0;i<myArray.length;i++){
      myFunction('::::'+myArray[i]);
    };
  }
  custForEach(students,logname);
} //_03();
// functions that take other functions are higher order functions, 
// functions that are passed in to HOFunctions are callbacks
function _04(){
  var elems = document.getElementsByClassName('todo');
  console.log(elems[0]);
  if(elems.length > 0){
    for(var i=0;i<elems.length;i++){
      elems[i].addEventListener('click',function(e){console.log(e.srcElement.innerHTML)});
    };
  }
} //_04();
// Returning a value from a function:
function _05(){
  function multiplyTwoNumbers(x,y){return x*y;}
 var theProductOf2And10 = multiplyTwoNumbers(2,10);
  console.log(theProductOf2And10);
}

