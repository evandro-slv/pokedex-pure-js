const pokemons = () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');

const pokemonUnit = id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

export { pokemons, pokemonUnit };
