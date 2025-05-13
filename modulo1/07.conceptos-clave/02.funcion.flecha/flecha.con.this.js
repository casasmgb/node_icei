const persona = {
  nombre: "Alicia",
  saludar: function() {
    setTimeout(function() { // la funcion define un nuevo contexto
      console.log(`Hola, soy ${this.nombre}`); // Error: `this` no es la persona
    }, 1000);
  },
  saludarFlecha: function() {
    setTimeout(() => { // la funcion flecha no define un nuevo contexto
      console.log(`Hola, soy ${this.nombre}`); // Correcto: `this` se hereda del contexto
    }, 1000);
  }
};

persona.saludar();       // "Hola, soy undefined"
persona.saludarFlecha(); // "Hola, soy Alice"