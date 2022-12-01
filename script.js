const poke_container =  document.getElementById('poke-container')
const pokemon_count = 151


const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

getPokemon()

const createPokemonCard = (pokemon) => {
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const poke_type = pokemon.types.map(type => type.type.name)

    const pokemonInnerHTML = `
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${poke_type}</span></small>
            </div>
    `
    pokemonElement.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonElement)

}
fetchPokemons()
