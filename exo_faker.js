const { faker } = require('@faker-js/faker/locale/fr');
const _ = require("lodash")

var nombre_elements = 25
var age_min = 18
var age_max = 65

var tab = []

for (var i = 0; i < nombre_elements; i++) {
  let gender = faker.person.sexType()
  var obj = {
    firstName : faker.person.firstName(gender),
    lastName : faker.person.lastName(),
    age : _.random(age_min, age_max),   //faker.number.int({ min: 18, max: 65 })
    gender,
  }
    tab.push(obj)
}

var oldPeople = tab.filter(e => (e.age > 45))

function printPeople(tab) {
  for (let i = 0; i < oldPeople.length; i++) {
    var gender_fr = "Homme"
    var element = tab[i]
    if (element.gender === "female") {
      gender_fr = "Femme"
    }
    var text = `${element.firstName} ${element.lastName} - ${gender_fr} - ${element.age}`
    console.log(text)
  }
}

printPeople(oldPeople)

// console.log(oldPeople)



// for (i = 0; i < oldPeople.length; i++)
//   var sexe = 'Homme'
//   var element = oldPeople[i]
//   if (element.gender == 'female') {
//     sexe = 'Femme'
//   }




// // console.log(peoples)
// // console.log(oldPeople)
// console.log("Plus de 45 ans:\n" + oldPeople[i].firstName, oldPeople[i].lastName, "-", sexe, "-", oldPeople[i].age)
  
  
  
  
  
  
  
  
  
  
  

  