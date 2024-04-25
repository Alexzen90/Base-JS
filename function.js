obj = {
  firstname: "Alexandre",
  lastName: "Porteron",
  yearBORN: 1993,
  prefColor: "red"
}

function getPropertyObject(object) {
  var objectKey = Object.keys(object)
  return objectKey.join(', ')
}

function printProperty(keys) {
  console.log("Propriétés sont :", keys)
}

printProperty(getPropertyObject(obj))

obj.age = 2024 - obj.yearBORN
obj.job = "Dev"

printProperty(getPropertyObject(obj))

var existing_keys = Object.keys(obj)
console.log(existing_keys)

for (i = 0; i < existing_keys.length; i++) {
  console.log("Propriété :", existing_keys[i], "/Valeur :", obj[existing_keys[i]])
}
