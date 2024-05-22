var obj = {
  a: 1,
  b: 3,
  c: { e : { f: { z: { y: 23 } } } }
}

// function returnEveryKey(object) {
//   var result = []
//   var keys = Object.keys(object)
//   for (var i =0; i < keys.length; i++){
//       var key = keys[i]
//       result.push(key)
//       console.log(key, object[key])

//       if (typeof object[key] === "object") {
//           var tab_sublevel = returnEveryKey(object[key])
//           result = [...result, ...tab_sublevel]
//       }
//   }
//   return result

// }

// returnEveryKey(obj)

// function someTableau(tableau) {
//   if (tableau.length == 0) 
//     return 0
//   return tableau[0] + someTableau(tableau.splice(1))
// }

// function lengthTableau(tableau) {
//   if (tableau.length == 0) 
//     return 0
//   return 1 + lengthTableau(tableau.splice(1))
// }

// console.log(someTableau([1, 2, 3, 4, 5])); // Devrait afficher 15
// console.log(lengthTableau([1, 2, 3, 4, 5])); // Devrait afficher 5

// function isPalindrome(s,i) {
//   return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
//  }

//  console.log(isPalindrome('eluparcettecrapule'));

 function isPalindrome1(str) {
  if (str.length <= 1)
    return true
  if (str[0] !== str[str.length -1])
    return false
  return isPalindrome1(str.slice(1, -1))
 }

 console.log(isPalindrome1('radar'));