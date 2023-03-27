// Renvoie un tableau avec les pokémon de la taille id
function get_tailles(data, id){
  let pokemons = []
  for (const pokemon of data){
    taille=pokemon["taille"].substring(0,pokemon["taille"].length-2)
    taille.replace(",",".")
    if (id=='Petit'){
      if (parseFloat(taille)<1){
        pokemons.push(pokemon)
      }
    }
    else if (id=='Moyen'){
      if (parseFloat(taille)<2 && parseFloat(taille)>=1){
        pokemons.push(pokemon)
      }
    }
    else if (id=='Grand'){
      if (parseFloat(taille)>=2){
        pokemons.push(pokemon)
      }
    }
  }
  console.log(pokemons)
  return pokemons
}

// Trouver les pokémon à montrer en fonction du paramètre dans l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

// Remplir la page
document.querySelector("title").textContent += id
document.querySelector("h1").textContent = id
const pokemons = get_tailles(data, id)
let ul = document.querySelector('#liste-pokemon')
for (let pokemon of pokemons) {
  let div = document.createElement("div")
  div.setAttribute("class", "Pokemon")
  div.setAttribute("id", pokemon["nom"])
  let li = document.createElement("li")
  // La balise <li> contient un texte, un lien et une image
  li.innerHTML=`<a href="pokemon.html?id=${pokemon["nom"]}"><img src="img/${pokemon["png"]}" alt="${pokemon["nom"]}" height=200px class="imgp"></a>`
  let p = document.createElement("p")
  p.textContent = pokemon["nom"]
  p.setAttribute("class","nom")
  li.appendChild(p)
  div.appendChild(li)
  ul.appendChild(div)
}

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