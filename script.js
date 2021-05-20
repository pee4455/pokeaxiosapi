let apiurl = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".pokemon-input");
let pokemonname = document.querySelector(".pokemon-name");
let pokemonimage = document.querySelector(".pokemon-image");

function getPokemondata() {
  axios
    .get(apiurl + input.value)
    .then(function (response) {
      pokemonname.innerHTML = response.data.forms[0].name;
      pokemonimage.src = response.data.sprites.front_default;
    })
    .catch(function (error) {
      pokemonname.innerHTML = "(error)";
      pokemonimage.src = "";
    });
}

let button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemondata);
