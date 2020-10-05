async function fn(){
  return "hello";
}

console.log(fn());

fn().then(res=>console.log(res))

var isError = false;

function getCategory(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      if (!isError){
        resolve('phone');
      }
      else{
        reject('error');
      }

    },1000);
  });
}

function getProducts(category){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`5 Products in ${category}`);
    },1000);
  });
}

getCategory()
    .then(getProducts)
    .then(res=>console.log(res)) // konsole : 5 products in phone (nach 2 sekunden )
    .catch(err=>console.log(err));


// mit await async

async function getProduct(){
  try{ // mit welchem code eine Fehler passieren könnte, schreiben wir in try
    let category = await getCategory();
    let result = await getProducts(category);
    console.log(result); // gleiche resultat
  }
  catch (error) {
    console.log(error);
  }

}


getProduct();
