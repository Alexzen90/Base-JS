const { faker } = require('@faker-js/faker');                          // Import faker
const _ = require("lodash")                                                      // Import lodash

tab_article = []                                                                 // Create array tab_article

let number_element = 1000                                                         // Number of elements to create with the loop

let price_min = 5.0                                                              // Price min variable
let price_max = 6.0                                                              // Price max variable
let stock_min = 0                                                                // Stock min variable
let stock_max = 10                                                               // Stock max variable
let interval_price = 5.5                                                         // Price interval variable
let stock_alert = 3                                                              // Number stock in alert                                                              // Boolean for _.random of random number for price                                                                         

for (let i = 0; i < number_element; i++) {                                       // Loop to create x articles
    let obj = {                                                                  
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        department: faker.commerce.department(),
        price: _.random(price_min, price_max, true).toFixed(2),
        stock: _.random(stock_min, stock_max,),

    }

    tab_article.push(obj)                                                         // Push obj in the array tab_article
}

// console.log(tab_article)

function printArticle(tab_article) {                                              // Function for display console.log
    for (let i = 0; i < tab_article.length; i++){
        var e = tab_article[i]
        var text = `Nom: ${e.name} - Prix: ${e.price} - Catégorie: ${e.department} - Stock: ${e.stock}`
        console.log(text)
    }
}

let inStock_min = []                                                              // Create Array for article in stock and price upper 5,5€
let inStock_max = []                                                              // Create Array for article in stock and price lower 5,5€

for (let i = 0; i < tab_article.length; i++) {  
    let e = tab_article[i]                                                        // Loop and condition to push in the good array 
    if (e.stock > 0 && e.price < interval_price) {
        inStock_min.push(e)
    }
    else
        inStock_max.push(tab_article[i])
}

console.log("\nArticle en stock et à plus de 5,5€")                               // Display array instock_max
printArticle(inStock_max)
console.log("\nArticle en stock et à moins de 5,5€")                              // Display array instock_max
printArticle(inStock_min)

let stock_at_zero = []                                                            // Create array for when stock are at zero

for (let i = 0; i < tab_article.length; i++) {                                    // Loop and condition to push that in the array stock_at_zero
    if (tab_article[i].stock === 0)
        stock_at_zero.push(tab_article[i])
}

console.log("\nArticle Stock à zéro")                                             // Display array stock_at_zero
printArticle(stock_at_zero)

let low_stock = []                                                                // Create array for articles in low stock

for (let i = 0; i < tab_article.length; i++) {   
    let e = tab_article[i]                                                        // Loop and condition to push that in the array low_stock
    if (e.stock < stock_alert && e.stock > 0)
        low_stock.push(e)
}

console.log("\nBientôt en rupture de stock")                                      // Display array low_stock
printArticle(low_stock)

let sorted_cat = _.sortBy(tab_article,                                            // Sort by department(alphabetically)
    [function (o) { return o.department; }]);
// console.log(sorted_cat)

let all_cat = []
for (let i = 0; i < sorted_cat.length; i++) {                                     // Push the departments in a new array
  all_cat.push(sorted_cat[i].department)
}



let uniq = [ ...new Set(all_cat) ]                                                // Remove duplicates

function dif_cat(uniq) {                                               
    for (let i = 0; i < uniq.length; i++){
        var e = uniq[i]
        console.log(e)
    }
}

console.log("\nLes différentes catégories sont :")
dif_cat(uniq)

function number_elements(all_cat) {
    var counts = {};                                    // Create an empty object to store counts
    all_cat.forEach(function(element) {
        if (counts[element]) {                          // If element is already counted, increment its count
            counts[element]++;
        } else {
            counts[element] = 1;                        // Otherwise, initialize its count to 1
        }
    });

    for (var key in counts) {                           // Display the elements with their counts
        console.log(key + ' - ' + counts[key] + " Produit(s) dans cette catégorie");
    }
}
 
console.log("\nNombre d'éléments par catégories :")
number_elements(all_cat)