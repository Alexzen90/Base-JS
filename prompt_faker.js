const prompt = require('prompt');
const { faker } = require('@faker-js/faker/locale/fr');

  //
  // Start the prompt
  //
  prompt.start();

  var schema = {
    properties: {
      nb_element: {
        description: "Combien d'éléments à créer ?",
        type: "number"
      },
      type: {
        description: "Doit-on générer des hommes ?",
        type: "boolean"
      }
    }
  }

  prompt.get(schema, function (err, result) {
    console.log(result['nb_element'])
    console.log(result['type'])
    var people = []
    for (var i = 0; i < result['nb_element']; i++) {
      var type = 'female'
      if(result['type']) {
        type = 'male'
      }
      var firstName = faker.person.firstName(type)
      var lastName = faker.person.lastName(type)
      people.push({
        firstName,
        lastName,
        email: faker.internet.email({firstName, lastName})
      })
    }
    console.log(people)
  });