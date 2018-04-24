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
