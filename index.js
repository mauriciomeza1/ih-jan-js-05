// OBJETOS 
//NO PRIMITIVOS - COMPUESTOS POR PROPIEDADES Y VALORES
const mexico = {
    comida: "tacos" //Propiedad: comida  y Valor: tacos
}

console.log(mexico)

//DOT NOTATION -Acceder a las propiedades
console.log(mexico.comida)

//BRACKET NOTATION - Acceder a las propiedades
console.log(mexico["comida"])

const olympicRecords = {
    athletic100Men: "Justin Gatlin",
    athleticLongJumpMen: "Mike Powell",
    swimming200Men: "Michael Phelps",
    "swimming 200 Women": "Ariadna Titmus"
}

console.log(olympicRecords.athletic100Men)
console.log(olympicRecords["athletic100Men"])
console.log(olympicRecords["swimming 200 Women"])


// B. AGREGAR PROPIEDADES

const refresco = {
	nombre: "Coca cola",
	color: "Oscuro",
	precio: 12,
	tamanos: [600, 1000]
}

refresco.envase = "Plástico"

console.log("Objeto de refresco:", refresco)

refresco["competidor"] = "Pepsi"

console.log(refresco)