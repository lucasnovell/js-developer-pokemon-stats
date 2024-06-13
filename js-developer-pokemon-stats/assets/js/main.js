
const pokemonHtml = document.getElementById('content')

function convertPokemonToHtml(pokemon) {
    return `
        <section class="header ${pokemon.type}">
        <div class="info">
            <div class="pokemon-info">
                <h1 class="pokemon-name">${pokemon.name}</h1>
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </div>

            <div class="pokemon-id">
                <span>#${pokemon.number}</span>
            </div>
        </div>
        <div class="pokemon-photo">
            <button class="change-pokemon" onclick="previousPokemon()" type="button"> < </button>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
            <button class="change-pokemon" onclick="nextPokemon()" type="button"> > </button>
        </div>
    </section>
    <section class="pokemon-stats">
        <ol class="stats-names">
            ${pokemon.statsNames.map((statName) => `<li class="stat-name">${statName}</li>`).join('')}   
        </ol>

        <ol class="stats-values">
            ${pokemon.statsValues.map((statValue) => `
                <li>
                    <span class="stat-value"> ${statValue} </span>
                    <input class="stat-range" disabled type="range" min="0" max="200" value="${statValue}">
                </li>`).join('')}  
        </ol>
    </section>
    `
}

function loadPokemonHtml() {
    pokeApi.getPokemonDetail().then((pokemon) => {
        const newHtml = convertPokemonToHtml(pokemon)
        pokemonHtml.innerHTML = newHtml
    })
}

loadPokemonHtml()


function previousPokemon() {
    if (pokemonId == 1) {
        pokemonId = 151
        loadPokemonHtml()
    } else {
        pokemonId--
        loadPokemonHtml()
    }
}

function nextPokemon() {
    if (pokemonId == 151) {
        pokemonId = 1
        loadPokemonHtml()
    } else {
        pokemonId++
        loadPokemonHtml()
    }
}