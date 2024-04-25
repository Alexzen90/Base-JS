obj = [{
  firstname: "Alexandre",
  lastName: "Porteron",
  yearBORN: 1993,
}, {
  firstname: "David",
  lastName: "usssu",
  yearBORN: 1947,
  hobbies: "Dormir",
  job: "Professeur",
  yearDead: 2014
}]

for (i = 0; i < obj.length; i++) {
  var keys = Object.keys(obj[i])
  console.log("")
  var text = ""
  for (j = 0; j < keys.length; j++) {
    text += `${keys[j]} : ${obj[i][keys[j]]}`
    if (j + 1 != keys.length) {
      text += " / "
    }
  }
  console.log(text)
}