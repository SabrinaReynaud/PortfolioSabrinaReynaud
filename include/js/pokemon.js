// Récupère l'id dans l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

// Renvoie le pokkémon en fontion de l'URL
function get_pokemon(data,id) {
  for (const pokemon of data) {
    if (pokemon['nom'] == id) {
      return pokemon
    }
  }
}

// Renvoie une chaîne de caractères avec chaque type du pokémon
// et un lien vers sa page
function format_types(types) {
  let str = "<b>Types : </b>"
  for (const type of types) {
    str += `<a href="type.html?id=${type}"><img src="img/${type}`+`.png" alt="${type}`+`.png" style="width: 12%;"></a> `
  }
  return str
}

// Renvoie une chaîne de caractères avec chaque évolution du pokémon
// et un lien vers sa page
function format_evolutions(evolutions,data,id) {
  str = "<b>Évolutions :</b>"
  for (const evolution of evolutions) {
    for (let pokemon of data){
      if (evolution==pokemon["nom"]){
        if (evolution!=evolutions[evolutions.length-1]){
          str += `<section class="evol"><a href="pokemon.html?id=${evolution}" class="evo"><img src="img/${pokemon["png"]}" alt="${pokemon["nom"]}" height=100px class="${pokemon["nom"]}" id="imgpe"> <br> ${evolution}</a></section> <img src="img/fleche_evo.png" height=100px class="img_fleche"> `
        }
        else {
          str += `<section class="evol"><a href="pokemon.html?id=${evolution}" class="evo"><img src="img/${pokemon["png"]}" alt="${pokemon["nom"]}" height=100px class="${pokemon["nom"]}" id="imgpe"> <br> ${evolution}</a></section>`
        }
      }
    }
  }
  return str
}

// Permet de changer la couleur dans les évolutions du pokemon actuel
function evo_actu(evolutions,id) {
  for (const evolution of evolutions) {
    if (id==evolution){
      document.querySelector(`img.${evolution}#imgpe`).setAttribute("id", "imgpokev")
    }
  }
}

// Remplir les informations sur le pokemon
const pokemon = get_pokemon(data,id)
document.querySelector("title").textContent += pokemon['nom']
document.querySelector("h1").textContent = pokemon['nom']
document.querySelector("div#description").innerHTML = `<p> ${pokemon['description']}</p>`
document.querySelector("div#image img").setAttribute("src", "img/" + pokemon["png"])
document.querySelector("#taille").innerHTML = "<b>Taille : </b>" + pokemon["taille"]
document.querySelector("#poids").innerHTML = "<b>Poids : </b>" + pokemon["poids"]
document.querySelector("#noms").innerHTML = `<b>Traductions : </b> Anglais : ${pokemon['nom_en']} ; Japonais : ${pokemon['nom_ja'][1]} (${pokemon['nom_ja'][0]})`
document.querySelector("#types").innerHTML = format_types(pokemon["type"])
document.querySelector("div#evolutions").innerHTML = format_evolutions(pokemon["evolutions"],data,id)
evo_actu(pokemon["evolutions"],id)

// Remplir le menu
//partie types
ul = document.querySelector('#liste-types')
for (let type of types) {
    let li = document.createElement("li")
    li.setAttribute("class", "types")
    li.innerHTML = `<a href="type.html?id=${type}"><img src="img/${type}`+`.png" alt="${type}`+`.png" style="width: 65%;"></a>` // innerHTML : https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML 
    ul.appendChild(li)
}
// partie évolutions
ul = document.querySelector('#liste-evolutions')
for (let evolutions of evolution) {
    let li = document.createElement("li")
    li.setAttribute("class", "evolutions")
    li.innerHTML = `<a href="evolution.html?id=${evolutions}">${evolutions}</a>`
    ul.appendChild(li)
}
// partie poids
ul = document.querySelector('#liste-poids')
for (let poids of Poids) {
    let li = document.createElement("li")
    li.setAttribute("class", "poids")
    li.innerHTML = `<a href="poids.html?id=${poids}">${poids}</a>`
    ul.appendChild(li)
}
// partie tailles
ul = document.querySelector('#liste-tailles')
for (let taille of tailles) {
    let li = document.createElement("li")
    li.setAttribute("class", "tailles")
    li.innerHTML = `<a href=tailles.html?id=${taille}>${taille}</a>`
    ul.appendChild(li)
}