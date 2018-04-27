/*
 * Understanding this
 *
 */

// 5 Case # boom, get familiar


// CASE: 01

console.log('\n:::::::::::::::::::::::::CASE 01:::::::::::::::::::::::::');
console.log( 'In a regular function (or if you\'re not in a function at all), *this* points to the global object');

function logThis(){
  console.log(this);
}
console.log(logThis);

// CASE: 02 

console.log('\n:::::::::::::::::::::::::CASE 02:::::::::::::::::::::::::');
console.log('Case 02: What ever is to the right of the dot operator. eg whatTHISis.someFunctionUsingThis()');
  var myObj = {
    name : 'Ivano',
    whatIsThis : function(){
      console.log(this);
    }
  }


// CASE: 03
console.log('\n:::::::::::::::::::::::::CASE 03:::::::::::::::::::::::::');
function Person(name){
  // this = {}
  this.name = name
  // return this
}

// Calling the constructor function with the new keyword is correct form as it returns this
var ivan = new Person('Ivan');
console.log('called with new keyword | result:',ivan);


// Calling the constructor function without the new keyword is incorrect form as undefined is returned
var ivano = Person('Ivano');
console.log('called without new keyword | result:',ivano);

// CASE: 04
console.log('\n:::::::::::::::::::::::::CASE 04:::::::::::::::::::::::::');
console.log('When you explicilty set the value of this manually using bind, apply or call, it\'s all up to you');
// Regular function which would return the global object
// logThis();// browser: window, node global object 
// Bind
console.log('\n-_-_-Bind-_-_-');
console.log('method on functions, returns a copy of the function where *this* is set to the first argument passed into .bind()');
var newLogThis = logThis.bind({name:'Ivan'});
newLogThis();

console.log('\n-_-_-Apply & Call-_-_-');
console.log('method on functions that will change the *this* value inside a function and run it immediately');
console.log('apply:');
logThis.apply({name:'Ivano'});
console.log('call:');
logThis.call({name:'Ivano'});
console.log('Apply & Call are exactly the same when operating on functions that dont take any arguments');

console.log('\n-_-_-Diff Apply & Call-_-_-');
console.log('Apply & Call behave slightly differently on functions that take in arguments');
function argumentative_Log_This(greeting,name){
  console.log(greeting,name);
  console.log(this);
}
//argumentative_Log_This('Wagwan','Rudeboy');// Wagwan Rudboy, Global Object
console.log('\n-_-_-Apply-_-_-');
argumentative_Log_This.apply({name:'Ivano'},['hi','Ivano']);

console.log('\n-_-_-Call-_-_-');
argumentative_Log_This.call({name:'Ivano'},'hi','Ivano');

console.log('\nNote that a function returned from .bind (like`boundOnce` below), cannot be bound to a different `this` value ever again. In other words, functions can only be bound once.');
var boundOnce = logThis.bind({name:'The first time is forever'});

console.log('\n These attempts to change `this` are futile');
process.stdout.write('bind:');
boundOnce.bind({name: 'why even try?'})();
process.stdout.write('apply:');
boundOnce.apply({name: 'why even try?'});
process.stdout.write('call:');
boundOnce.call({name: 'why even try?'});

// CASE: 05
console.log('\n:::::::::::::::::::::::::CASE 05:::::::::::::::::::::::::');
console.log('In callback function, apply the above riles methodically');

/*
 * Case 1: The regular old default case
 */
function outerFunction(callback){
  callback();
}
// outerFunction(logThis); // window || global object

/*
 *Case 2: Call the callback as a method
 *(You'll probably NEVER see this, but I guess it's possible.)
 */
function callAsMethod(callback){
  var weirdObject = {
    name : 'Dont\'t do this in real life'
  };
  weirdObject.callback = callback;
  weirdObject.callback();
}
callAsMethod(logThis); // `weirdObject` will get logged 


/*
 * Case 3: Calling the callback as a constructor
 * (You'll also probably never see this. but in case you do..)
 */
function callAsConstructor(callback){
  new callback();
}
callAsConstructor(logThis); // {} empty Object of type logThis 

/*
 *  Case 4:Explicitly setting `this`.
 */

function callAndBindToIvan(callback){
  var boundCallback = callback.bind({name:'Ivano'});
  boundCallback();
}
callAndBindToIvan(logThis); // {name:'Ivano'}

// In a twist, we give `callAndBindToIvan` a function that's already been bound.
  var boundOne = logThis.bind({name:'The first time is forever'});
callAndBindToIvan(boundOnce); // {name:'The first time is forever'}
