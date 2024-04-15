var formation = [
    {
        firstName: "Alexandre",
        lastName: "Porteron",
        age: 30,
        dateStart: 1993,
        lieu_de_naissance: "Troyes"
    }, 
    {
        firstName: "Manon",
        lastName: "Bourrey",
        age: 24,
        dateStart: 2000,
        lieu_de_naissance: "Belfort"
    }
]

for (var i = 0; i < 100; i++) {
formation.push({
  firstName: "Louis"+i,
  lastName: "Boisson"+i,
  age: 24+i,
  dateStart: 2000,
  lieu_de_naissance: "Dijon",
})
};

for (var i = 0; i < formation.length; i++) {
    if (formation[i].firstName === "Louis55") {
        console.log("\n" +"Prénom : " + formation[i].firstName + "\n" + "Nom : " + formation[i].lastName + "\n" + "Age : " + formation[i].age)
        console.log(`Il est à la position ${i} dans le tableau`)
}}

var table50 = []
for (var i = 0; i < formation.length; i++) {
    if (formation[i].age > 50) {
        table50.push({...formation[i]})
    }
}

var obj_formation = {}

for (var i = 0; i < formation.length; i++) {
    obj_formation[formation[i].firstName] = formation[i]
}

console.log(obj_formation['Louis55'])
//console.log(`J'ai ${table50.length} personnes qui ont plus de 50 ans dans mon tableau`)




// for (var i = 0; i < formation.length; i++) {
//     console.log("\n" +"Prénom : " + formation[i].firstName + "\n" + "Nom : " + formation[i].lastName + "\n" + "Age : " + formation[i].age)
//     console.log(`Il est à la position ${i} dans le tableau`)
// }
// for (var i = 0; i < formation.length; i++) {
//     console.log("\n" +"Prénom : " + formation[i].firstName + "\n" + "Nom : " + formation[i].lastName + "\n" + "Age : " + formation[i].age) //+ "Date de naissance : " + formation[i].dateStart + "\n" + "Lieu de naissance : " + formation[i].lieu_de_naissance)
//     console.log(`Il est à la position ${i} dans le tableau`)
// }

//console.log("\n" +"Prénom : " + formation[0].firstName + "\n" + "Nom : " + formation[0].lastName + "\n" + "Age : " + formation[0].age + "\n" + "Date de naissance : " + formation[0].dateStart + "\n" + "Lieu de naissance : " + formation[0].lieu_de_naissance)
//console.log("\n" +"Prénom : " + formation[1].firstName + "\n" + "Nom : " + formation[1].lastName + "\n" + "Age : " + formation[1].age + "\n" + "Date de naissance : " + formation[1].dateStart + "\n" + "Lieu de naissance : " + formation[1].lieu_de_naissance)

//console.log(`Il y a ${formation.length} personnes dans la formation`)