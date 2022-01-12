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



const schoolSystem = {
    schools: [
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };


  console.log(schoolSystem.schools[2].classRooms[0].students[0].firstName) // => Christop


  /* 
  Time to practice
    Retrieve the "Fake School 3" object
    Retrieve the teacher with the first name of "Nathanael"
    Retrieve the student with the first name of "Saul"
    Add a student with the name of Lucille D. Lozano to Fake School 2, in the first classroom.
  */

    console.log(schoolSystem.schools[2].name)
    console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName)
    console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName)

    schoolSystem.schools[1].classRooms[0].students.push({
        firstName: "Lucille D.", 
        lastName: "Lozano", 
        age: "n/a"
    })
    
    console.log(schoolSystem.schools[1].classRooms[0].students)