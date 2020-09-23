// Maps : key/value pairs (collection)

let val ;

const numbers = new Map();

numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'three');
numbers.set('four','four');

val = numbers ;
val = numbers.get(1); // konsole : one
val = numbers.get('2'); // konsole : two // get (key number oder index number)
val = numbers.get('four'); // konsole : four
val = numbers.size; // wie viel elemente hast numbers
val = numbers.has(1); // Konsole : true
val = numbers.has('one'); // konsole:false
val = numbers.delete('four'); // wir löschen das Element, dessen key 'four' ist
val = numbers.has('four'); // wir haben four schon gelöscht. deswegen konsole:false
// numbers.clear(); // das löscht alle elemente von numbers. Konsole : Map {} (0)
val = numbers;

console.log(val);

for (var [key,value] of numbers){
  console.log(key+' = '+value); // Konsole : 1 = one und so weiter
}
for (var [key,value] of numbers.entries()){
  console.log(key+' = '+value); // Konsole : 1 = one und so weiter
}
for (var key of numbers.keys()){
  console.log(key); // Konsole : 1 2 3  //  nur keys
}

numbers.forEach((key,value) => console.log(key+' - '+value)); // Konsole : one - 1 und so weiter

var first = new Map ([ // wir bilden ein neues Map Objekt
  [1,'one'],
  [2,'two'],
  [3,'three']
]);

var second = new Map ([// wir bilden ein neues Map Objekt
  [4,'four'],
  [5,'five']
]);

var merged = new Map ([...first,...second]); // wir fügen die beide Map Objekt zusammen.

console.log(merged);
