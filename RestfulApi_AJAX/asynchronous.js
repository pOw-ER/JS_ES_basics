const first = ()=>{
  console.log('first');
  second();
}

const second=()=>{
  setTimeout(()=>{
    console.log('second');
  },2000)
  third();
}

const third = ()=>{
  console.log('third');
}

first();
// KONSOLE : first third nach 2 sekunden second
// asynchronous javascript (1- Callback 2- Promise 3- Async/Await)
// wenn der computer mit etwas beschäftigt ist, was etwas dauern kann, kann er gleichzeitig sich mit anderen Sachen beschäftigen.


