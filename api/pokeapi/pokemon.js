export const pokemons = async () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
export const pokemonUnit = async id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
export const parseName = name => name.charAt(0).toUpperCase() + name.slice(1);
