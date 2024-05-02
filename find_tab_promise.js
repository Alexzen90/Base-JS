const prompt = require('prompt');
prompt.start();

var people = [{           // Recursivité en Javascript "parent-enfant"
  firstName: "Edouard",
  lastName: "Bernier",
  children: [{
      firstName: "Jean",
      lastName: "Bernier",
      children: [{
          firstName: "Junior",
          lastName: "Bernier",
          children: [{
              firstName: "Jordan",
              lastName: "Bernier"
          },
          {
              firstName: "Luc",
              lastName: "Bernier"
          }]
      }]
  },
  {
      firstName: "Sacha",
      lastName: "Bernier",
  },
  {
      firstName: "Laurent",
      lastName: "Bernier",
  },
  {
      firstName: "Raphael",
      lastName: "Bernier",
  }]
},
{
  firstName: "Jean",
  lastName: "Luc",
  children: [{
      firstName: "Richard",
      lastName: "Luc",
      children: [{
          firstName: "Roméo",
          lastName: "Luc"
      }]
  }]
}]

// Creer un prompt qui prendre le "firstName" et "lastName"
// Creer une fonction pour chercher dans
// tous les elements du tableau y compris children puis retourner le resultat dans une fonction promise avec resolve si personne trouvé et reject si aucune personne trouvé

var findRecursivityPeople = function(lastName, tab, path) {
  var table = []
  for (var i = 0; i < tab.length; i++) {
    var element = tab[i]
    if (element.lastName == lastName) {
      table.push({...element, parent: path+element.firstName+" "+element.lastName})
    }
    if (element.children) {
      var value = findRecursivityPeople(lastName, element.children, path+element.firstName+" "+element.lastName+'/')
      table = [...table, ...value]
    }
  }
  return table
}

var findPeople = function(lastName) {
  return new Promise((resolve, reject) => {
    var result = findRecursivityPeople(lastName, people, '')
    if (result) {
      resolve(result)
    }
    else
      reject('Not Found')
  })
}

prompt.get(['lastName'], function (err, result) {
  findPeople(result.lastName).then((value) => {
    console.log("Personne trouvée :",value.firstName, value.lastName, " / Parent : ", value.parent)
  }).catch ((err) => {
    console.log("Aucune personne trouvée :",err)
  })
});
