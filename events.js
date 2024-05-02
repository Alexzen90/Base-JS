// console.log("Bienvenue")
// var calcul = 12/2*4

// console.log(calcul)
// setTimeout(function() {
//   try {
//   calcul = 4
//   console.log(calcul)
//   ds}
//   catch(err) {
//     console.log(err.name)
//   }
//   finally {
//     console.log("FIN")
//   }
// }, 3000)

function waiting(time) {
  return new Promise((resolve, reject) => {
    if (time > 100)
    setTimeout(() => {
      console.log("OK")
      resolve({succes: true})
  }, time)
    else
      reject({succes: false})
  })
}

waiting(100).then((value) => {
  console.log("Promise reussi :",value)
}).catch ((err) => {
  console.log("Promise échoue :",err)
})