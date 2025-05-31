import readline from 'readline';


const URL_BASE = "https://fakestoreapi.com/products";

const menu = `\tSeleccione opción:
1_ Ver listado completo
2_ Ver por ID
3_ Crear Producto
4_ Eliminar
5_ Salir`;

const lerline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pregunta = (query) => {
  return new Promise(resolve => {
    lerline.question(query, resolve);
  });
};


//Api Fakestore
const arg = process.argv.slice(2)
const URL= 'https://fakestoreapi.com/products';






if(arg[0] == 'GET' && arg[1] == 'products'){
fetch(url)
.then((response)=> response.json())
.then(data => console.log(data))
.catch(err => console.log('Hubo un error ', err))
}


/*
console.log(arg)
console.log(arg[0])
console.log(arg[1])

console.log(arg[2])
console.log(arg[3])
console.log(arg[4])
console.log(arg)*/

/*if (metodo === "get" && argumento === "products") {
  fetch(url + argumento)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
} else if (metodo === "get" && argumento.startsWith("products/")) {
  const id = argumento.slice(9);
  if (id) {
    fetch(url + 'products/' +id)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }else{
    console.error('Te falto el IDs')
  }*/