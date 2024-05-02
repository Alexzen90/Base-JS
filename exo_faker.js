const { faker } = require('@faker-js/faker/locale/fr');

var peoples = []

for (var i = 0; i < 25; i++) {

    const gender = faker.person.sexType(true);
    const firstName = faker.person.firstName(gender);
    const lastName = faker.person.lastName(gender)
    var age = faker.number.int({ min: 18, max: 65 })

    peoples.push({
        firstName,
        lastName,
        gender,
        age
    })
}

var oldPeople = peoples.filter(e => (e.age > 45))



for (i = 0; i < oldPeople.length; i++)
  var sexe = 'Homme'
  var element = oldPeople[i]
  if (element.gender == 'female') {
    sexe = 'Femme'
  }




// console.log(peoples)
// console.log(oldPeople)
console.log("Plus de 45 ans:\n" + oldPeople[i].firstName, oldPeople[i].lastName, "-", sexe, "-", oldPeople[i].age)
  
  
  
  
  
  
  
  
  
  
  

  