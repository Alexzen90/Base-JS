var my_object = {
    firstName: "Alexandre",
    lastName: "Porteron",
    options: {
        name: "Option 1",
        testing: true
    }
}

var my_tree = {
    firstName: "Alexandre",
    lastName: "Porteron",
    dateStart: 1910,
    dateEnd: 1943,
    children: [{
            firstName: "AlexJr",
            lastName: "Porteron",
            dateStart: 1930,
            dateEnd: 1973,
            children: []
        }]}

my_tree.children.push({
        firstName: "AlexJr2",
        lastName: "Porteron2",
        dateStart: 1935,
        dateEnd: 1979,
        children: []
    })

my_tree.children = []
console.log(my_tree)
console.log(my_tree.children.length)
//console.log(my_tree.children[0]["firstName"])
//console.log(my_object["options"])

//var tab = ["lastName", "firstName", "options"]
//console.log(my_object[tab[0]], my_object["firstName"])