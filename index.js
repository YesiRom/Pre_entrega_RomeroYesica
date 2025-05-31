const API_URL = 'http://fakestoreapi.com/products';
 
// Capturar argumentos de la terminal
const args = process.argv.slice(2);
const [method, endpoint, ...params] = args;
 
// Función para obtener todos los productos
const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener productos');
    const products = await response.json();
    console.log('Todos los productos:');
    console.table(products);
  } catch (error) {
    console.error(error.message);
  }
};
 
// Función para obtener un producto específico
const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Producto no encontrado');
    const product = await response.json();
    console.log('Producto encontrado:');
    console.table([product]);
  } catch (error) {
    console.error(error.message);
  }
};
 
// Función para crear un nuevo producto
const createProduct = async (title, price, category) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price: parseFloat(price), category })
    });
 
    if (!response.ok) throw new Error('Error al crear producto');
    const newProduct = await response.json();
    console.log('Producto creado:');
    console.table([newProduct]);
  } catch (error) {
    console.error(error.message);
  }
};
 
// Función para eliminar un producto
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error al eliminar producto');
    const deletedProduct = await response.json();
    console.log('Producto eliminado:');
    console.table([deletedProduct]);
  } catch (error) {
    console.error(error.message);
  }
};
 
 
// Manejo de comandos
switch (method.toUpperCase()) {
  case 'GET':
  case 'get':
    if (endpoint === 'products') {
      params[0] ? getProductById(params[0]) : getProducts();
    }
    break;
 
  case 'POST':
  case 'post':
    if (endpoint === 'products' && params.length === 3) {
      createProduct(...params);
    } else {
      console.log('Uso correcto: npm run start POST products <title> <price> <category>');
    }
    break;
 
  case 'DELETE':
  case 'delete':
    if (endpoint === 'products' && params[0]) {
      deleteProduct(params[0]);
    } else {
      console.log('Uso correcto: npm run start DELETE products/<id>');
    }
    break;
 
  default:
    console.log('Comando no reconocido. Uso:');
    console.log('npm run start GET products');
    console.log('npm run start GET products/<id>');
    console.log('npm run start POST products <title> <price> <category>');
    console.log('npm run start DELETE products/<id>');
}