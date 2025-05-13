## Blocking (Operaciones Bloqueantes)

Una operación bloqueante hace que Node.js no puede hacer nada más mientras espera a que termine una tarea.

Ejemplo de código bloqueante (Sync)

```js
const fs = require('fs');

// Lectura SÍNCRONA (Blocking)
const data = fs.readFileSync('archivo.txt', 'utf8');
console.log(data); // Se ejecuta después de leer el archivo
console.log("Este mensaje espera a que termine la lectura");
```

## Non-Blocking (Operaciones No Bloqueantes)

Una operación **no bloqueante** permite que Node.js **continúe ejecutando otro código** mientras espera a que se complete una tarea asíncrona mediante **(callbacks, promesas o async/await)**

Ejemplo de código no bloqueante (Async)

```js
const fs = require('fs');

// Lectura ASÍNCRONA (Non-Blocking)
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Se ejecuta cuando el archivo está listo
});
console.log("Este mensaje aparece primero, sin esperar la lectura");
```

##  ¿Cuándo usar Blocking y Non-Blocking?
**Usa Blocking (Sync)** solo en scripts simples donde la paralelización no importa (ej: un script de configuración inicial).

Usa **Non-Blocking (Async)** siempre que sea posible, especialmente en servidores y aplicaciones que manejan múltiples solicitudes.