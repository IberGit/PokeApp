/* Ejemplo

let baseURL = "https://pokeapi.co/api/"
let version = "v2"
let apiURL = baseURL + version

let dexNumber = 25 //El número del pokemon que queramos ver, por ejemplo, el de Pikachu
let pokemon = `/pokemon-form/${dexNumber}/`

*/
export interface PokemonBase {
  form_name: string;
  form_names: any[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: any[];
  order: number;
  pokemon: Pokemon;
  sprites: Sprites;
  types: Type[];
  version_group: VersionGroup;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export const EMPTY_POKEMON_BASE: PokemonBase = {
  form_name: '',
  name: '',

  form_names: [],
  names: [],
  types: [],

  form_order: 0,
  id: 0,
  order: 0,

  is_battle_only: false,
  is_default: false,
  is_mega: false,

  pokemon: {
    name: '',
    url: '',
  },
  version_group: {
    name: '',
    url: '',
  },

  sprites: {
    back_default: '',
    back_female: null,
    back_shiny: '',
    back_shiny_female: null,
    front_default: '',
    front_female: null,
    front_shiny: '',
    front_shiny_female: null,
  },
};
