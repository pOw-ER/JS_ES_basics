// destructuring
// destructuring assignment
var a,b,rest;

[a,b] = [10,20];

console.log(a); // Konsole : 10
console.log(b); // Konsole : 20


[a,b,...rest]=[10,20,30,40,50,60,70];

console.log(a); // Konsole : 10
console.log(b); // Konsole : 20
console.log(rest); // erschient als array auf der Konsole

({a,b} = {a:10,b:20});

console.log(a); // Konsole : 10
console.log(b); // Konsole : 20

({a,b,...rest} = {a:10,b:20,c:30,d:40,e:50,f:60,g:70});

console.log(rest); // erschient als object auf der Konsole

// array destructuring

const arrConfig = ['localhost',8000,900];

// var server = arrConfig[0]; // Bei ES5 schreiben wir so die Code
// var port = arrConfig[1];
// var timeout = arrConfig[2];

// console.log(server,port,timeout);

   // bei ES6 schreiben wir da noch leichter und kurzer

const [server,port,timeout] = arrConfig; // vernetzen wir beide zusammen. server gleich arrConfig[0] und so weiter
console.log(server,port,timeout);


// Object destructuring

 // bei ES5

const objConfig = {
  server1 : 'localhost',
  port1 : '8000',
  timeout1 : '900'
}
var server1 = objConfig.server1;
var port1 = objConfig.port1;
var timeout1 = objConfig.timeout1;

console.log(server1,port1,timeout1);

 // bei ES6

 const objConfig2 = {
  server2 : 'localhost',
  port2 : '8000',
  timeout2 : '900'
}
const {server2,port2,timeout2= 800,host=0001}= objConfig2; // wir haben schon die Wert von timeout, deswegen ignoriert sich JS 800. wir haben in unserem Object(objConfig2) kein Host und eine neu erstellt.

console.log(server2,port2,timeout2);
console.log(server2,port2,timeout2,host); // Konsole : localhost 8000 900 1


const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const [,,wed,,fri] = days; // Komma (,) bedeutet hier ein Element, erste Komma erste element von days, 2. Komma 2. element von days und so weiter.

console.log(wed,fri);
