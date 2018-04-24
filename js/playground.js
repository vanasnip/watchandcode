function getRandomNumber(limit){
  return Math.floor(Math.random() * Math.floor(limit));
}

function logNumbers(n,func){
  for (var i=0;i<n+10;i++){
    console.log(func(i));
  }
}


logNumbers(getRandomNumber(100),getRandomNumber);


