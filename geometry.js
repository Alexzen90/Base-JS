let rectangle = {
    x: 50,
    y: 120,
    Largeur: 30,
    Longueur: 70,
}

rectangle.perimetre = (rectangle.Largeur+rectangle.Longueur) *2

rectangle.unite = "cm"
rectangle.area = rectangle.Largeur * rectangle.Longueur
rectangle.diagonale = Math.sqrt(rectangle.Largeur**2 + rectangle.Longueur**2)

rectangle.diagonale = Number(rectangle.diagonale.toFixed(2))

//console.log("\nx:", rectangle.x, rectangle.unite,"\n"+"y:", rectangle.y, rectangle.unite,"\n"+"Perimetre:", rectangle.perimetre, rectangle.unite,"\n"+"Aire:", rectangle.area, rectangle.unite +2,"\n"+"Diagonal:", rectangle.diagonale, rectangle.unite, "\n")

let variableSimple1 = 12
let variableSimple2 = variableSimple1
variableSimple1 = 35

console.log("variableSimple1", variableSimple1)
console.log("variableSimple2", variableSimple2)

let variableComplexe1 = ["informatique", "sport", "television"]
let variableComplexe2 = variableComplexe1
let variableComplexe3 = [...variableComplexe1]

variableComplexe2.push("course")

console.log("variableComplexe1", variableComplexe1)
console.log("variableComplexe2", variableComplexe2)
console.log("variableComplexe3", variableComplexe3)