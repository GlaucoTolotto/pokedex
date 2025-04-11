export type AllPokemon = {
  count: number;
  next: string;
  previous: any;
  results: PokemonsList[];
};

export type PokemonsList = {
  name: string;
  url: string;
};
