let produit = {
  nom: "Balls",
  prix: 18,
  stock: 128,
  nombre_vendu: 45,
};

produit.gain = produit.nombre_vendu * produit.prix
console.log(produit)

produit.valeur_stock = produit.stock * produit.prix
console.log(produit)

console.log("Produit :", produit.nom, "/ Valeur du stock :", produit.valeur_stock, "/ Gain :", produit.gain)

produit.cost = 12
produit.total_cost = produit.cost * (produit.nombre_vendu + produit.stock)
console.log("Somme d'achat des produits : ", produit.total_cost)

let benefice_par_produit = produit.prix - produit.cost
console.log("Bénéfice par produit : ", benefice_par_produit)

let pourcentage_benefice = 100 * (benefice_par_produit/produit.prix)
console.log("Pourcentage de bénéfice par produit :", pourcentage_benefice +" ~", Math.round(pourcentage_benefice) + " %")