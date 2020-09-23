// Static Methods

class PersonES6 {
  constructor(name,job,yearOfBirth){
    this.name = name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
  }

  calculateAges(){
    return 2020-this.yearOfBirth;
  }

  static sayHi(){
    console.log('Hello there');
  }
}

var büsra= new PersonES6('büsra','Mathlehrerin',1990);

// console.log(büsra.calculateAges());

PersonES6.sayHi(); // Static Objekts können wir nicht mit instance verbinden, sondern mit class Objekt. büsra.sayHi() ist falsch.

class Point {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }

  static distance (a,b){ // wir können Static objekt benutzen, wenn wir ein Helfer Method bilden wollen, oder wenn wir mit Datenpool beschäftigen. Daten senden oder löschen usw.
    const dx = a.x-b.x;
    const dy = a.y-b.y;
    return Math.hypot(dx,dy); // Die Hypotenuse rechnen wir.
  }
}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2));
