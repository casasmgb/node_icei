// ======== Optional Chaining vs Nullish Coalescing ========
// Cadena de opciones (Optional Chaining) (?.) y verificaicon de nulos (Nullish Coalescing) (??)
const usuario = { 
    perfil: { 
        nombre: "Alicia" 
    } 
};

// Sin optional chaining
const nombreUsuario = user && user.perfil && user.perfil.nombre;

// Con optional chaining
// const nombreUsuario = user?.perfil?.nombre; 




// ======== Falsely ======== 
// son aquellos que se evalúan como false en un contexto booleano (como una condición if)
if (null) {
  console.log("Esto NO se ejecuta");
} else {
  console.log("null es falsy"); 
}

let variableNoDefinida;
if (variableNoDefinida) {
  console.log("Esto NO se ejecuta");
} else {
  console.log("undefined es falsy"); 
}

if (0) {
  console.log("Esto NO se ejecuta (0 es falsy)");
} else {
  console.log("0 es falsy"); 
}

// console.log(0 ? 'Esto NO se ejecuta (0 es falsy)' : '0 es falsy')

if ("") {
  console.log("Esto NO se ejecuta");
} else {
  console.log("String vacío es falsy"); 
}

// Casos que NO son Falsy (pero pueden confundirse)
if ("0") {
  console.log("Esto SÍ se ejecuta ('0' es truthy)");
}

if ([]) {
  console.log("Array vacío es truthy"); 
}

if ({}) {
  console.log("Objeto vacío es truthy"); 
}


// Operadores útiles
// || (OR lógico): Devuelve el primer valor truthy.
const nombreValidado = "" || "Anónimo"; // "Anónimo"

// ?? (Nullish Coalescing): Solo considera null o undefined.
const edad = 0 ?? 18; // 0 (porque 0 no es null/undefined)