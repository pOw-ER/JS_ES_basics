var p = new Promise(function(resolve,reject){
  if(true){
    resolve('success')
  }
  else{
    reject('Failure')
  }
});

p.then(function(data){
  console.log(data);
}).catch(function (error){
  console.log(error);
});

new Promise (function(resolve,reject){
  setTimeout(() => {
    resolve(5);
  }, 1000);
}).then(function(number){
  console.log(number); // 5
  return number*number;
}).then(function(number){
  console.log(number); // 25
  return number*number;
}).then(function(number){
  console.log(number); // 625
})

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject) => { // resolve basarili oldugunda reject basarisiz oldugunda ne yapacagimizi belirten fonksiyonlar
  if (isMomHappy){
    const phone = {
      name : 'IPhone 8',
      price : 4000,
      color : 'silver'
    }
    resolve (phone);
  }
  else {
    const error = new Error('Mom is not happy');
    reject(error);
  }
});

const showToFriends = function(phone){
  const message = "Hi friends this is my new phone " + phone.name;
  return Promise.resolve(message);
}

const askMom = function (){ // resolve then le reject catch ile cagiriliyor
  willGetNewPhone.then(showToFriends).then(message=>console.log(message)).catch(error=>{
    console.log(error);
  });
}

askMom();
