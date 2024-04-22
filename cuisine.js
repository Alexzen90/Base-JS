var recettes = [];

var data = [
  {
    type: "accompagnement",
    nom: "riz",
    ingredients: ["riz", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "puree",
    ingredients: ["pure", "lait", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "salade",
    ingredients: ["salade"],
    duration: 4,
    ustensile: ["saladier"],
  },
  {
    type: "accompagnement",
    nom: "frite",
    ingredients: ["patate", "huile"],
    duration: 13,
    ustensile: ["friteuse"],
  },
  {
    type: "assaisonnement",
    nom: "curry",
    ingredients: ["epice curry"],
    duration: 3,
    ustensile: [],
  },
  {
    type: "assaisonnement",
    nom: "tandoori",
    ingredients: ["epice tandoori"],
    duration: 3,
    ustensile: ["concaseur"],
  },
  {
    type: "assaisonnement",
    nom: "sauce forestier",
    ingredients: ["creme ", "champignon", "beurre", "eau"],
    duration: 3,
    ustensile: ["saladier", "mixeur"],
  },
  {
    type: "assaisonnement",
    nom: "paprika",
    ingredients: ["epice paprika"],
    duration: 3,
    ustensile: ["concaseur"],
  },
  {
    type: "plat",
    nom: "boeuf",
    ingredients: ["viande", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "poulet",
    ingredients: ["poulet", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "saumon",
    ingredients: ["saumon", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "steak hache",
    ingredients: ["steak hache", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
];

//La méthode "attendue" par Edouard je pense
var plats = [];
var assaisonnements = [];
var accompagnements = [];

for (i = 0; i < data.length; i++) {
  var element = data[i]; //Pas nécessaire mais plus pratique, remplacez element.type par data[i].type si ça vous perturbe
  if (element.type === "plat") {
    plats.push(element);
  } else if (element.type === "assaisonnement") {
    assaisonnements.push(element);
  } else {
    accompagnements.push(element);
  } //Pas besoin d'écrire la condition car c'est le cas qui s'éxecute si les 2 conditions en haut ne sont pas valides
}

//La méthode plus rapide avec la fonction .filter qui filtre les éléments "plats", "assaisonnements" et "accompagnements" de "data" et les mets dans un tableau de données
// var plats = data.filter(element => (element.type === "plat"))
// var assaisonnements = data.filter(element => (element.type === "assaisonnement"))
// var accompagnements = data.filter(element => (element.type === "accompagnement"))

for (i = 0; i < 10; i++) {
  var plat = plats[Math.floor(Math.random() * plats.length)];
  var assaisonnement =
    assaisonnements[Math.floor(Math.random() * assaisonnements.length)];
  var accompagnement =
    accompagnements[Math.floor(Math.random() * accompagnements.length)];

  var ingredients = [...plat.ingredients, ...assaisonnement.ingredients, ...accompagnement.ingredients];
  var ustensiles = [...plat.ustensile, ...assaisonnement.ustensile, ...accompagnement.ustensile,
  ];
  //  en utilisant le spread operator(...) je simplifie les boucles en commentaire ci-dessous  GROS GAIN DE TEMPS

  //  var ingredients = []
  /* for(j = 0; j < plat.ingredients.length - 1; j++) {
      ingredients.push(plat.ingredients[j])
    }
    for(j = 0; j < assaisonnement.ingredients.length - 1; j++) {
      ingredients.push(assaisonnement.ingredients[j])
    }
    for(j = 0; j < accompagnement.ingredients.length - 1; j++) {
      ingredients.push("" + accompagnement.ingredients[j])
    } */
  var duration = plat.duration + assaisonnement.duration + accompagnement.duration;
  var recette = {
    nom: `${plat.nom} ${assaisonnement.nom} ${accompagnement.nom}`,
    ingredients, //Ma variable a le meme nom que la propriété de mon objet donc je n'ai pas besoin d'écrire ingredients: ingredients    JS est smart
    duration, //Ma variable a le meme nom que la propriété de mon objet donc je n'ai pas besoin d'écrire duration: duration    JS est smart
    ustensiles, //Ma variable a le meme nom que la propriété de mon objet donc je n'ai pas besoin d'écrire ustensiles: ustensiles    JS est smart
  };
  recettes.push(recette);
}

console.log(recettes);
