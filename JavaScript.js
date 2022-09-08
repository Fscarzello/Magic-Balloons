let nombre;
let edad;

function solicitarNombre() {
  nombre = prompt("Ingrese su nombre de usuario");
  console.log(`Bienvenido ${nombre}`);
}

function solicitarEdad() {
  edad = Number(prompt("Ingrese su edad"));
}

solicitarNombre();
solicitarEdad();

if (edad >= 18) {
  alert(`Bienvenido a nuestra tienda`);
  let carrito = []
  let precioTotal = 0

  const productos = [
    {nombre:"Pack Vino", precio: 3200, descuento: 10},
    {nombre:"Vodka", precio: 2200, descuento: 5},
    {nombre:"Cerveza Ipa", precio: 900 , descuento: 15},
    {nombre:"Cerveza Busweiser", precio: 900 , descuento: 20},
    {nombre:"Vodka Absolut", precio: 2800, descuento: 0},
    {nombre:"Whisky Jack Daniel", precio: 4000, descuento: 10},
    {nombre:"Vodka Watermelon", precio: 1400, descuento: 5},
    {nombre:"Whisky", precio: 5400, descuento: 10 },
    {nombre:"Cerveza Patagonia", precio: 1000, descuento: 5},
  ]

  for (const producto of productos) {
    let eleccion = ""
    let cantidad = ""
    while (eleccion.toLowerCase() != "si" && eleccion.toLowerCase() != "no") {
      eleccion = prompt(`Desea agregar a su carrito el producto ${producto.nombre}?`)
    }
    if (eleccion.toLowerCase() == "si") {
      cantidad = Number(prompt("Que cantidad del producto desea comprar?"))
      carrito.push(producto)
      precioTotal += producto.precio * (100 - producto.descuento) / 100 * cantidad
      alert(`Se agregaron ${cantidad} de ${producto.nombre}`)
    }
  }


  alert(`Muchas gracias por tu compra! El precio total es ${precioTotal}`)

} else {
  alert(`No puede consumir alcohol con ${edad} años`);
}

