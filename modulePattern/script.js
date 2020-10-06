
// // 1-) Global variable naming conflicts
// // script.js
// var name = 'Enes';


// // app.js

// var name = 'Yilmaz';

// console.log(name); // konsole : yilmaz (welche am Ende geschriben wurde )

// // 2-) Encapsulation
// // bu duurmu asmak icin public ve private class olarak kodlariz. private kendine has yapilar public acik  kod gibi
// var Counter = {
//   number:0,
//   increment : function (){
//     return ++ this.number;
//   },
//   decrement : function(){
//     return --this.number;
//   }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// console.log(Counter.decrement());
// Counter.number = 10; // biz bu degerin ortaya gelip numaramizi karistirmasini istemeyiz. cok kod yazarken boyle seyler göyden kacar ve hatayi bulmak zor olur
// console.log(Counter.increment());




// /// IIFE (Immediately Inkoved Function Expressions)
// (function(){
//   var name = 'Enes'; // spezielle Variable
// })();

// (function(){
//   var name = 'Yilmaz'; //spezielle Variable deswegen Konsole: Enes Yilmaz
// })();


// var Module = (function (){
//   // private members
//   let number = 0;
//   let increment = function (){
//     return ++number;
//   }
//   console.log(increment()); // 1
//   return {
//     // public members
//     increment
//   }
// })();


// // console.log(number); // undefined
// // console.log(increment());// undefined
// // console.log(Module.increment()); // undefined
// console.log(Module.increment()); // wenn wir in return schreibe dann das geht (konsole : 2)

var Module = (function (){
  var privateMethod = function(){

  };

  return {
    publicMethod : function(){

    },
    publicMethod2 : function(){

    }
  }
})();


Module.publicMethod();// bunu calistirabiliriz cunku return icine yazdik ve public oldu böylece
Module.privateMethod(); // bunu  calistiramayiz cünkü private kisimda ve disari acik degil
