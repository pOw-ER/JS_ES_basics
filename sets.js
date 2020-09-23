// Sets ( collection - unique values )

var val;

var mySet = new Set ();

mySet.add(1);
mySet.add(2);
mySet.add(2);// wir können keine gleiche Wert zweimal zufügen.
mySet.add('two');
mySet.add({a:1,b:2});
// mySet.delete(1); // zum Löschen
var obj = {a:1, b:2};
mySet.add(obj); // wir konnten zweimal gleiche Objekte zufügen, weil es hier zwei verschiedene Adresse oder name gibt.

for (let item of mySet){
  console.log(item);
}
for (let item of mySet.keys()){
  console.log(item); // es ist gleiche wie oben weil set hat nur einzige Wert
}
for (let item of mySet.values()){
  console.log(item); // es ist gleiche wie oben weil set hat nur einzige Wert. values=keys
}

console.log(val);
console.log(mySet);

console.log(Array.from(mySet)); // wir wandeln mySet von Objekt zu Array um

var mySet2 = new Set ([1,2,3,4]);

console.log(mySet2);

// intersect

// var intersect = new Set (Array.from(mySet).filter(x=>mySet2.has(x))); // mySet und mySet2 hat 2 geliche Werte und wir haben davon eine neue Set objekt gebildet.
var intersect = new Set ([...mySet].filter(x=>mySet2.has(x))); // beides geht wie oben die gleiche
console.log(intersect);

//difference

var difference = new Set ([...mySet].filter(x=>!mySet2.has(x))); // Filter method kommt with array, deswegen wandeln wir das Form zu Array mit ...
console.log(difference);
