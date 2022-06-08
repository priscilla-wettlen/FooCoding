/* eslint-disable */

/* 
  Call this function to get a JSON string of the data
  (simulates calling a server to retrieve data)
*/
function fetchPokemonData() {
  return '{"abilities":[{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3},{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1}],"base_experience":63,"forms":[{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-form/7/"}],"height":5,"held_items":[],"id":7,"is_default":true,"location_area_encounters":"https://pokeapi.co/api/v2/pokemon/7/encounters","name":"squirtle","order":10,"species":{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png","front_shiny_female":null},"stats":[{"base_stat":43,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":64,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":50,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":1,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":44,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}],"types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}],"weight":90}';
}

/* Code goes below */
const poke = JSON.parse(fetchPokemonData());
//console.log(poke);

let pokeSprites = []
pokeSprites = poke.sprites

const body = document.querySelector("body")
body.addEventListener("mousemove", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  body.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
});
const main = document.querySelector("main")
const imageContainer = document.createElement("div");
imageContainer.setAttribute("class", "imgContainer");
main.appendChild(imageContainer);








const front_default = document.createElement("img")
  front_default.setAttribute("src", pokeSprites.front_default)
  imageContainer.appendChild(front_default)

const back_default = document.createElement("img")
  back_default.setAttribute("src", pokeSprites.back_default)
imageContainer.appendChild(back_default)

const front_shiny = document.createElement("img")
  front_shiny.setAttribute("src", pokeSprites.front_shiny)
  imageContainer.appendChild(front_shiny)

const back_shiny = document.createElement("img")
  back_shiny.setAttribute("src", pokeSprites.back_shiny)
  imageContainer.appendChild(back_shiny)

const spinning = [
  { transform: 'rotate(180deg) scale(1)' },
  { transform: 'rotate(-180deg) scale(1)' }
];

const timing = {
  duration: 2000,
  iterations: 100,
}


const btn = document.createElement("input")
btn.setAttribute("class", ".party")
btn.setAttribute("type", "button")
btn.setAttribute("value", "PARTY!")
main.appendChild(btn)

btn.addEventListener('click', () => {
  front_default.animate(spinning, timing)
  back_default.animate(spinning, timing)
  front_shiny.animate(spinning, timing)
  back_shiny.animate(spinning, timing)
});



const song = document.createElement("audio");
song.setAttribute("src", "audio/pokemon_song.mp3")
song.setAttribute("controls", "controls")
song.setAttribute("autoplay", "false")

function playSong() {
  //song.play()
  main.appendChild(song)  

};

main.addEventListener('load', playSong());


















