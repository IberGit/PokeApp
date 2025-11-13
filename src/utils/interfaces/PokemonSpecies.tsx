// Interfaz principal para la Especie de Pokémon
export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: NamedAPIResource;
  egg_groups: NamedAPIResource[];
  evolution_chain: { url: string };
  evolves_from_species: NamedAPIResource | null;
  flavor_text_entries: FlavorTextEntry[];
  gender_rate: number;
  genera: Genus[];
  growth_rate: NamedAPIResource;
  habitat: NamedAPIResource | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: any[];
  order: number;
  pal_park_encounters: any[];
  pokedex_numbers: any[];
  shape: NamedAPIResource | null;
  varieties: any[];
}

// Interfaz base para todas las referencias de nombre/url (color, forma, grupo, etc.)
export interface NamedAPIResource {
  name: string;
  url: string;
}

// Interfaz para el texto de sabor (flavor text)
export interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

// Interfaz para el texto del género (genus)
export interface Genus {
  genus: string;
  language: NamedAPIResource;
}

export const EMPTY_POKEMON_SPECIES: PokemonSpecies = {
  base_happiness: 0,
  capture_rate: 0,
  gender_rate: 0,
  hatch_counter: 0,
  id: 0,
  order: 0,

  name: '',

  has_gender_differences: false,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,

  egg_groups: [],
  flavor_text_entries: [],
  genera: [],
  names: [],
  pal_park_encounters: [],
  pokedex_numbers: [],
  varieties: [],

  color: { name: '', url: '' },
  evolution_chain: { url: '' },
  growth_rate: { name: '', url: '' },

  // Objetos que pueden ser null
  evolves_from_species: null,
  habitat: null,
  shape: null,
};
