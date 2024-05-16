// const { faker } = require('@faker-js/faker');                          // Import faker
// const _ = require("lodash")                                                      // Import lodash

// tab_article = []                                                                 // Create array tab_article

// let number_element = 1000                                                         // Number of elements to create with the loop

// let price_min = 5.0                                                              // Price min variable
// let price_max = 6.0                                                              // Price max variable
// let stock_min = 0                                                                // Stock min variable
// let stock_max = 10                                                               // Stock max variable
// let interval_price = 5.5                                                         // Price interval variable
// let stock_alert = 3                                                              // Number stock in alert                                                              // Boolean for _.random of random number for price                                                                         

// for (let i = 0; i < number_element; i++) {                                       // Loop to create x articles
//     let obj = {                                                                  
//         name: faker.commerce.productName(),
//         description: faker.commerce.productDescription(),
//         department: faker.commerce.department(),
//         price: _.random(price_min, price_max, true).toFixed(2),
//         stock: _.random(stock_min, stock_max,),

//     }

//     tab_article.push(obj)                                                         // Push obj in the array tab_article
// }

// // console.log(tab_article)

// function printArticle(tab_article) {                                              // Function for display console.log
//     for (let i = 0; i < tab_article.length; i++){
//         var e = tab_article[i]
//         var text = `Nom: ${e.name} - Prix: ${e.price} - Catégorie: ${e.department} - Stock: ${e.stock}`
//         console.log(text)
//     }
// }

// let inStock_min = []                                                              // Create Array for article in stock and price upper 5,5€
// let inStock_max = []                                                              // Create Array for article in stock and price lower 5,5€

// for (let i = 0; i < tab_article.length; i++) {  //for (let item of tab_article)
//     let e = tab_article[i]                                                        // Loop and condition to push in the good array 
//     if (e.stock > 0 && e.price < interval_price) {
//         inStock_min.push(e)
//     }
//     else if (e.stock > 0 && e.price >= interval_price)
//         inStock_max.push(tab_article[i])
// }

// console.log("\nArticle en stock et à 5,5€ ou plus")                               // Display array instock_max
// printArticle(inStock_max)
// console.log("\nArticle en stock et à moins de 5,5€")                              // Display array instock_max
// printArticle(inStock_min)

// let stock_at_zero = []                                                            // Create array for when stock are at zero

// for (let i = 0; i < tab_article.length; i++) {                                    // Loop and condition to push that in the array stock_at_zero
//     if (tab_article[i].stock === 0)
//         stock_at_zero.push(tab_article[i])
// }

// console.log("\nArticle Stock à zéro")                                             // Display array stock_at_zero
// printArticle(stock_at_zero)

// let low_stock = []                                                                // Create array for articles in low stock

// for (let i = 0; i < tab_article.length; i++) {   
//     let e = tab_article[i]                                                        // Loop and condition to push that in the array low_stock
//     if (e.stock < stock_alert && e.stock > 0)
//         low_stock.push(e)
// }

// console.log("\nBientôt en rupture de stock")                                      // Display array low_stock
// printArticle(low_stock)

// let sorted_cat = _.sortBy(tab_article,                                            // Sort by department(alphabetically)
//     [function (o) { return o.department; }]);
// // console.log(sorted_cat)

// let all_cat = []
// for (let i = 0; i < sorted_cat.length; i++) {                                     // Push the departments in a new array
//   all_cat.push(sorted_cat[i].department)
// }



// let uniq = [ ...new Set(all_cat) ]                                                // Remove duplicates

// function dif_cat(uniq) {                                               
//     for (let i = 0; i < uniq.length; i++){
//         var e = uniq[i]
//         console.log(e)
//     }
// }

// console.log("\nLes différentes catégories sont :")
// dif_cat(uniq)

// function number_elements(all_cat) {
//     var counts = {};                                    // Create an empty object to store counts
//     all_cat.forEach(function(element) {
//         if (counts[element]) {                          // If element is already counted, increment its count
//             counts[element]++;
//         } else {
//             counts[element] = 1;                        // Otherwise, initialize its count to 1
//         }
//     });

//     for (var key in counts) {                           // Display the elements with their counts
//         console.log(key + ' - ' + counts[key] + " Produit(s) dans cette catégorie");
//     }
// }
 
// console.log("\nNombre d'éléments par catégories :")
// number_elements(all_cat)

///////////////////////////////////////////////////////////////////////////////////////////

const { faker } = require('@faker-js/faker');
const _ = require("lodash")

var nombre_elements = 10
var price_min = 5.0
var price_max = 6.0
var stock_min = 0
var stock_max = 10
var price_interval = 5.5
var stock_alert = 3

var products = []

for (var i = 0; i < nombre_elements; i++) {
    products.push({
        nom: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: Number(_.random(price_min, price_max, true).toFixed(2)),
        stock: _.random(stock_min, stock_max),
        departement: faker.commerce.department()
    })
}

products = products.map(function(e) { return {...e, value_stock: (e.price*e.stock).toFixed(2)} })


function printProduct(tab) {
    for (let item of tab) {
        var text = `${item.nom} - ${item.departement} - ${item.price}€ - ${item.stock}`
        text = item.value_stock ? text+` - Stock value : ${item.value_stock}€`: text
        console.log(text)
    }
}


var categories_and_quantity = {}

var in_stock_more_interval = products.filter(function(e) { return e.price >= price_interval && e.stock > 0 })
var in_stock_less_interval = products.filter(function(e) { return e.price < price_interval && e.stock > 0 })
var no_stock = products.filter(function(e) { return e.stock === 0 })
var re_stock_product = products.filter(function(e) { return e.stock < 3 })


var categories_and_quantity = _.groupBy(products, 'departement')


console.log(`\nProduit en stock et > ${price_interval}€`)
printProduct(in_stock_more_interval)
console.log(`\nProduit en stock et < ${price_interval}€`)
printProduct(in_stock_less_interval)
console.log("\nProduit en rupture de stock")
printProduct(no_stock)
console.log(`\nProduit en rupture de stock ou bientôt en rupture < ${stock_alert}`)
printProduct(re_stock_product)

console.log("\nCatégories existants avec nombre de produit par catégorie")
for (let item in categories_and_quantity) {
    console.log(`${item} - ${categories_and_quantity[item].length} produit(s) dans cette catégorie.`)}