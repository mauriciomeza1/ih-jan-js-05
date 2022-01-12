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


// PROPIEDADES Y CICLOS
// OBJECT.KEYS() - Método que permite convertir las propiedades de un objetos en elementos de un arreglo

const arrRefresco = Object.keys(refresco)

console.log(arrRefresco)

// for ... in

// for (VARIABLE KEY in OBJECT)
for (let key in refresco ) {
	//console.log(`La propiedad es: ${key}`)
    //if(key === "competidor") console.log("Encontré la prop competidor")
    console.log(`La propiedad es ${key} y su valor es ${refresco[key]}`)
}


let estudiantesIH = [
	{
		name: "Leo",
		location: "Querétaro",
		weather: "Frijolito"
	},
	{
		name: "Joaquín",
		location: "Hidalgo",
		weather: "Frijolito duro"
	},
	{
		name: "Alan",
		location: "Atizapan",
		weather: "Frijolito poquito"
	},
	{
		name: "Alexis",
		location: "Aguascalientes",
		weather: "Frijolito poquito"
	}
]

//console.log(estudiantesIH[2].location)


// JS TRADICIONAL - ES5
estudiantesIH.push({
	name: "Emmanuel",
	location: "CDMX",
	weather: "Calorcito"
})


// JS MODERNO - ES6
estudiantesIH = [
	...estudiantesIH, // SPREAD OPERATOR
	{
		name: "Roman",
		location: "CDMX",
		weather: "Calorcito"
	}
]

console.log(estudiantesIH)



let menuDeLaSemana = [
    {
        desayuno: "Huevos rancheros",
        comida: "Pechuga de pollo",
        cena: "Lasagna"
    },
    {
        desayuno: "Yogurt con fruta",
        comida: "Carne asada",
        cena: "Tacos"
    },
    {
        desayuno: "Huevos revueltos",
        comida: "Ensalada césar",
        cena: "Enchiladas"
    },
    {
        desayuno: "Avena",
        comida: "Hamburguesa",
        cena: "Espaguetti"
    },
    {
        desayuno: "Jugo verde",
        comida: "Pollo frito",
        cena: "Pizza"
    }
]

console.log(menuDeLaSemana[0].cena)
console.log(menuDeLaSemana[4].desayuno)
console.log(menuDeLaSemana[2].comida)