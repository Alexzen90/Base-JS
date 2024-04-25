var obj = [{           
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
          lastName: "Luc",
      }]
  }]
}]

function recursiveLoopSub(tab, indent, origin) {
  let space = ""
  for (j = 0; j < indent; j++) {
    space += "  "
  }

  for(let i = 0; i < tab.length; i++) {
      console.log(`${space} nom : ${tab[i].lastName} / prenom : ${tab[i].firstName} / origine : ${origin}`)
      if (tab[i].children && tab[i].children.length > 0)
          recursiveLoopSub(tab[i].children, indent + 1, origin + `${tab[i].firstName} ${tab[i].lastName} `)
  }
}

recursiveLoopSub(obj, 0, "- ")