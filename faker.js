const { faker } = require('@faker-js/faker/locale/fr');

var people = [{
  firstName: "Edouard",
  lastName: "Luc"
}]

for (var i = 0; i < 25; i++) {
  var firstName = faker.person.firstName('male')
  var lastName = faker.person.lastName('male')
  people.push({
    firstName,
    lastName,
    email: faker.internet.email({firstName, lastName})
  })
}

console.log(people)