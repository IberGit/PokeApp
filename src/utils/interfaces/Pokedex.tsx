export interface PokedexList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokedexResultItem[];
}

export interface PokedexResultItem {
  name: string;
  url: string;
}

export const EMPTY_POKEDEX: PokedexList = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
