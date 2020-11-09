// arrays in ES6

const boxes = document.querySelectorAll('.box');

// bei ES5
let boxesES5 = Array.prototype.slice.call(boxes);

boxesES5.forEach(function(box) {
  box.style.backgroundColor = 'green'
});
console.log(boxesES5);

// bei ES6
Array.from(boxes).forEach(box => box.style.backgroundColor='green');

// ES5
for (i=0;i<boxesES5.length;i++){
  if(boxesES5[i].className == 'box pt-5 blue'){ // Außer blue ändern sich die andere zwei Boxen
    continue; // wenn ich hier break schreiben wäre, wäre loop zu Ende und ändert sich nichts
  }
  boxesES5[i].textContent = "I'm changed";
  boxesES5[i].style.backgroundColor = 'blue';
};

//  ES6

var boxesES6 = Array.from(boxes);

for (let box of boxesES6){
  if (box.className == 'box pt-5 blue'){
    continue;
  }
  box.textContent = "I'm changed";
  box.style.backgroundColor = 'green'
};

// from methods

let arr = Array.from('JavaScript Kurse');

// console.log(arr);

const products = [
  {name:'Samsung S8', price : 3000},
  {name:'Samsung S8', price : 2700},
  {name:'Samsung S7', price : 2300},
  {name:'Samsung S6', price : 1900}
]

console.log(Array.from(products));
console.log(Array.from(products,prd => prd.name));
console.log(Array.from(products,prd => prd.price));
console.log(Array.from(products,prd => prd.name=='Samsung S8'));
console.log(products.find(prd=>prd.name=='Samsung S8'));
console.log(products.filter(prd=>prd.name=='Samsung S8')); // alle produckte, die als samsung s8 genannt sind
console.log(products.findIndex(prd=>prd.price==2300)); // die Index Nummer des Products, das 2300 € kostet
console.log(products.findIndex(prd=>prd.price==5000));// konsole = -1 das bedeutet : in unserem array gibt's kein Produkt, das 5000€ kostet


let numbers = ['a','b','c'];

let entries = numbers.entries(); // index nummer und value aller Elmente von numbers array
for (let i of entries){
  console.log(i);
}
let keys = numbers.keys(); // nur index nummer

for (let i of keys) {
  console.log(i);
}

values = numbers.values();

for (let i of values){
  console.log(i);
}

