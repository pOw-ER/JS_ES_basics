function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

var emp1 = new Employee('yigit', 3000);
var emp2 = new Employee('can', 4000);

Employee.prototype.calculateSalary = function() {
  var month = new Date().getMonth() + 1;
  var tax = 0;
  var totalSalary = this.salary * month;
  if (totalSalary <= 20000) {
      tax = totalSalary * 0.2;
  }
  else if (totalSalary > 20000 && totalSalary <= 30000) {
      tax = totalSalary * 0.25;
  }
  else {
      tax = totalSalary * 0.3;
  }
  return {
      tax: tax,
      paid: totalSalary - tax
  }

}
console.log(emp1.calculateSalary());
console.log(emp2.calculateSalary());
