var products = [
  {id:1, name: 'Samsung S8', price:2000},
  {id:2, name: 'Samsung S7', price:1500},
  {id:3, name: 'Samsung S6', price:1000}
];

let added = true;

function addProduct (prd,callback){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      products.push(prd);
      let added = true;
      if (added){
        resolve();
      }
      else{
        reject('hata : 500');
      }
    },200);
  });
}

function getProducts(){
  setTimeout(()=>{
    products.forEach(p=>{
      console.log(p.name);
    });
  },1000);
}

// addProduct({id:4,name:'Samsung S5',price:500},getProducts);

addProduct({id:4,name:'Samsung S5',price:500}).then(getProducts).catch(function(err){
  console.log(err);
});

