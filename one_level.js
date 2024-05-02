var peoples = [
  {
      _id: 1001,
      username: "jeandupont",
      firstName: "Jean",
      lastName: "Dupont"
  },
  {
      _id: 1002,
      username: "louisbrocante",
      firstName: "Louis",
      lastName: "Brocante",
      parent: 1001
  },
  {
      _id: 1003,
      username: "julienrouget",
      firstName: "Julien",
      lastName: "Rouget",
      parent: 1002
  },
]

var people_transformer = []

for (i = 0; i < peoples.length; i++) {
  var element = peoples[i]
  if (element.parent)
    
}