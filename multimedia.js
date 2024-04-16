var data = {
    music: [],
    video: [],
    podcast: []
}

var min = 1451
var max = 54596

function createRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function createNumberBetweenValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min,)
}

for (var i = 0; i < 500; i++) {
    var language = "FR"
    if (i%2 !== 0) {
        language = "EN"
    }
    data.music.push({
        titre : createRandomString(createNumberBetweenValue(2, 8)),
        artiste : (Math.random() +1).toString(36).substr(2, 8),
        studio : (Math.random() +1).toString(36).substr(2, 8),
        language : language,
        time : Math.floor(Math.random() * (max - min) + min,),
        release : 1923+i,
        album : "Oasis"+i
})}

for (var i = 0; i < data.music.length; i++) {
    var music = data.music[i]
    console.log(`Titre : ${music.titre}` , `Artiste : ${music.artiste}` , `Studio : ${music.studio}` , `Langage : ${music.language}` , `Durée : ${music.time}` , `Release : ${music.release}` , `Album : ${music.album}`)
}

