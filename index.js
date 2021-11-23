const pokemonAleat = () => {
    const numeroSort = Math.round(Math.random() * 150) + 1;
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroSort}`;
    return urlPokemon;
}

const mostraPokemon = (pokemon) => {
    const imagem = document.getElementById ("fotoPokemon");
    const nome = document.getElementById ("nomePokemon");

    imagem.src = pokemon.sprites.other["official-artwork"].front_default;
    nomePokemon.innerHTML = pokemon.name;

}

const iniciar = async () =>{
    const url = pokemonAleat();
    const response = await fetch(url);
    const result = await response.json();
    mostraPokemon(result);
    
}

document.addEventListener('DOMContentLoaded', iniciar);