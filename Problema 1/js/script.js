let nombre, apellido, categoria = '';
let edad = 0;
let porcentaje_descuento, valor_descuento, precio_total = 0.0;
let edad_valida = true
let precio_base = 18;
nombre = prompt("Ingrese su nombre amiguito xd");
apellido = prompt("Ingrese su apellido estimado ");
edad = Number(prompt("Ingrese su edad"));
if (edad >= 1 && edad <= 4)  { 
    porcentaje_descuento = 100;
    categoria = "niño";
}else if (edad >= 5 && edad <= 17){
    porcentaje_descuento = 50;
    categoria = "Adolecente";
}
else if (edad >= 18 && edad <= 64 ) {
    porcentaje_descuento = 0;
    categoria = "adulto";
}
else if (edad >= 65) {
    categoria = "Adulto mayor"; //(marjorie lo hizo)
    porcentaje_descuento = 90;
}
else{ 
    edad_valida = false     
      alert('la edad ingresada no es valida');
}
      
valor_descuento =(precio_base * porcentaje_descuento)/100
precio_total =  precio_base - valor_descuento

document.writeln('<div class="contenedor">');
document.writeln(`<h2>Resultado</h2>`);


document.writeln(`<h2>DATOS DEL CLIENTE</h2>`);

document.writeln(`<h3>Nombre y apellido: ${nombre} ${apellido}</h3>`);
document.writeln(`<h3>Edad: ${edad} años</h3>`);
document.writeln(`<h3>Categoria: ${categoria}</h3>`);

document.writeln(`<h2>DATOS DE COMPRA</h2>`);

document.writeln(`<h3> Precio de la entrada: ${precio_base}</h3>`);
document.writeln(`<h3> Descuento Aplicado: ${porcentaje_descuento}%</h3>`);
document.writeln(`<h3> Total descuento: ${valor_descuento} </h3>`)
document.writeln(`<h3> Precio total: ${precio_total} </h3>`)
document.writeln('</div>');

