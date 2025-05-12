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