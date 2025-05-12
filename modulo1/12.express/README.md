# Ejemplo Completo para probar Servicios Web REST


crear una carpeta y posicionarte en ella desde la terminal

```
cd rest
```
inicia el proyecto rest, y completa los campos requeridos.

```
npm init
```

Ahora ya tienes creado el proyecto y debemos instalar dependencias y crear los archivos necesarios.

### Instalar dependencias
Instala express en el proyecto
```
npm i express
```

### Archivo Necesarios
Crea el archivo **app.js** dentro de la carpeta **rest**

y agrega este contenido

```js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos en memoria (simulación)
let products = [
 { id: 1, name: 'Laptop', price: 999 },
 { id: 2, name: 'Phone', price: 699 }
];

// GET (Todos los productos)
app.get('/api/products', (req, res) => {
 res.json(products);
});

// GET (Producto por ID)
app.get('/api/products/:id', (req, res) => {
 const product = products.find(p => p.id === parseInt(req.params.id));
 if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
 res.json(product);
});

// POST (Crear producto)
app.post('/api/products', (req, res) => {
 const newProduct = {
   id: products.length + 1,
   name: req.body.name,
   price: req.body.price
 };
 products.push(newProduct);
 res.status(201).json(newProduct);
});

// PUT (Actualizar producto)
app.put('/api/products/:id', (req, res) => {
 const product = products.find(p => p.id === parseInt(req.params.id));
 if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

 product.name = req.body.name || product.name;
 product.price = req.body.price || product.price;

 res.json(product);
});

// DELETE (Eliminar producto)
app.delete('/api/products/:id', (req, res) => {
 const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
 if (productIndex === -1) return res.status(404).json({ error: 'Producto no encontrado' });

 const deletedProduct = products.splice(productIndex, 1);
 res.json(deletedProduct[0]);
});

// Manejo de errores
app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar servidor
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### Ejecucion del codigo

Para ejecutar solamente usa este comando
```
node app.js
```

### Adición de hot reload
Instalamos el paquete de refrescado automático

```
npm i nodemon --save-dev
```

Modificamos el archivo ```package.json``` para configurar los scripts

```js
 "scripts": {
   "start": "node main.js",
   "dev": "nodemon main.js"
 }
```

creamos el archivo de configuración llamado ```nodemon.json```

```js
{
 "watch": ["./"],
 "ext": "js,json",
 "ignore": ["./tests/**/*"],
 "delay": "1000"
}
```

ahora podremos ejecutar con este comando

```
npm run dev
```

### Adición de pruebas unitarias
Para las pruebas unitarias instala **supertest** y **jest**

```
npm i supertest jest
```

luego crea el archivo de las pruebas con el nombre **test.js** y dentro pega este código

```js
const request = require('supertest');
const app = require('./app');


describe('API de Productos', () => {
 // GET Todos
 it('GET /api/products → Debe retornar todos los productos', async () => {
   const res = await request(app).get('/api/products');
   expect(res.statusCode).toEqual(200);
   expect(res.body).toBeInstanceOf(Array);
 });


 // POST Crear
 it('POST /api/products → Debe crear un producto', async () => {
   const newProduct = { name: 'Tablet', price: 299 };
   const res = await request(app)
     .post('/api/products')
     .send(newProduct);
   expect(res.statusCode).toEqual(201);
   expect(res.body).toHaveProperty('id');
 });


 // PUT Actualizar
 it('PUT /api/products/1 → Debe actualizar un producto', async () => {
   const updatedData = { name: 'Laptop Pro', price: 1299 };
   const res = await request(app)
     .put('/api/products/1')
     .send(updatedData);
   expect(res.statusCode).toEqual(200);
   expect(res.body.name).toBe('Laptop Pro');
 });


 // DELETE Eliminar
 it('DELETE /api/products/1 → Debe eliminar un producto', async () => {
   const res = await request(app).delete('/api/products/1');
   expect(res.statusCode).toEqual(200);
   expect(res.body).toHaveProperty('id');
 });
});
```

Las pruebas se pueden iniciar ejecutando el archivo de pruebas

```
npx jest test.js
```
