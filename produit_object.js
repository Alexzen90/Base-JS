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