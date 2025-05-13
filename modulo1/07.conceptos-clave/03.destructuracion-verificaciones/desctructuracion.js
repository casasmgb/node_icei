// ======== OBJETOS ======== 
const persona = { id: 1, nombre: "Alicia", edad: 30 };

// Sin desestructuración
const nombre = persona.nombre;

// Con desestructuración
// const { nombre, edad } = persona;

console.log(nombre); 




// ======== ARRAYS ======== 
const numeros = [1, 2, 3];

const [primero, , tercero] = numeros;
console.log(primero); 
console.log(tercero); 





// ======== OPERADORES Rest (...) y Spred ======== 
// Rest: Agrupar elementos restantes.

const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]

// Spread: Expandir elementos.
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
