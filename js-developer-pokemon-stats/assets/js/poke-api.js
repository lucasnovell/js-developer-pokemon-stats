
const pokeApi = {}
let pokemonId = 1

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    const statsNames = pokeDetail.stats.map((typeSlot) => typeSlot.stat.name)
    const [statName] = statsNames

    pokemon.statsNames = statsNames
    pokemon.statName = statName

    const statsValues = pokeDetail.stats.map((typeSlot) => typeSlot.base_stat)
    const [statValue] = statsValues

    pokemon.statsValues = statsValues
    pokemon.statValue = statValue

    return pokemon
}

pokeApi.getPokemonDetail = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}