export const padToThree = (number: number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

export const getPokemonImage = (url: string): {[key: string]: string} => {
  const pokemonNumber =
    url &&
    url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
  const pokemonImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`;
  return {uri: pokemonImageUrl};
};
