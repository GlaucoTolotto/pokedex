export type AllPokemon = {
  count: number;
  next: string;
  previous: any;
  results: NameEUrl[];
};

type NameEUrl = {
  name: string;
  url: string;
};
