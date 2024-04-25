var people = [{           
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

// Function to print names recursively with proper indentation
function printNamesWithIndentation(people, level = 0) {
  people.forEach(person => {
    const { firstName, lastName, children } = person;
    const indent = "  ".repeat(level); 

    console.log(`${indent}firstName : ${firstName} / lastName : ${lastName}`);

    if (children && children.length > 0) {
      printNamesWithIndentation(children, level + 1);
    }
  });
}

printNamesWithIndentation(people);