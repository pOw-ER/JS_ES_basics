// Classes

// ES5

var PersonES5 = function(name,job,yearOfbirth){
  this.name=name;
  this.job=job;
  this.yearOfbirth=yearOfbirth;
}

PersonES5.prototype.calculateAge = function(){
  return 2020 - this.yearOfbirth;
}
var enes = new PersonES5('enes','Web Entwickler',1990);

console.log(enes.calculateAge());


// ES6

class PersonES6 {
  constructor(name,job,yearOfBirth){
    this.name = name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
  }

  calculateAges(){
    return 2020-this.yearOfBirth;
  }
}

var büsra= new PersonES6('büsra','Mathlehrerin',1990);

console.log(büsra.calculateAges());



// PersonES5 und PersonES6 sind alle gleiche aber mit ES6 Class Method können wir alles einfacher schreiben und wie OOP benutzen
