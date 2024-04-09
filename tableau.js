let personnage = {
    firstName: "Alexandre",
    lastName: "Porteron",
    username: "Alexzen90",
    email: "aporteron90@gmail.com"
}

let voisin = personnage
console.log(personnage)
console.log(voisin)

personnage.username = "Zen"

console.log(personnage)
console.log(voisin)

voisin = {...personnage}

personnage.username = "AlexZen"

console.log(personnage)
console.log(voisin)
