// Sub Classes

// ES5

function PersonES5 (firstName,lastName){
  this.firstName=firstName;
  this.lastName=lastName;
}

PersonES5.prototype.sayHi = function(){
  return `Hello I'm ${this.firstName} ${this.lastName}`
}
// var enes = new PersonES5('enes','yilmaz');
// console.log(enes.sayHi());

function Customer (firstName,lastName,phone,username){
  PersonES5.call(this,firstName,lastName);
  this.phone = phone;
  this.username=username;
}

Customer.prototype = Object.create(PersonES5.prototype);

var customer = new Customer('enes','yilmaz','1234567','enesyilmaz60');

console.log(customer);
console.log(customer.sayHi());


// ES6

class PersonES6 {
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }

  sayHi(){
    return `Hello I'm ${this.firstName} ${this.lastName}`
  }
}

class CustomerES6 extends PersonES6{ //wir verbinden Person prototype mit CustomerES6 prototype, indem wir extends schreiben
  constructor(firstName,lastName,phone,username){
    super(firstName,lastName);
    this.phone=phone;
    this.username=username;
  }
  static getTotal(){
    return 1000;
  }
}
var büsra = new CustomerES6('büsra','yilmaz','123456678','boncukcan');

console.log(büsra.sayHi());
console.log(büsra);
//console.log(büsra.getTotal()); // geht nicht
console.log(CustomerES6.getTotal()); // das geht..
