/* Ejemplo

let baseURL = "https://pokeapi.co/api/"
let version = "v2"
let apiURL = baseURL + version

let tipeNumber = 1
// El número del tipo que queramos ver, por ejemplo, "1", sería para ver los de lucha.
// Este número lo obtenemos a través de el pokemon que estemos viendo.
let pokemon = `/type/${tipeNumber}/`
// Si realizamos la llamada sin indicar el número, obtendremos únicamente todos los tipos existentes. Sin ningún detalle extra.

*/

export interface PokemonType {
  damage_relations: DamageRelations;
  game_indices: Index[];
  generation: Generation2;
  id: number;
  move_damage_class: MoveDamageClass;
  moves: Mfe[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: Pokemon[];
  sprites: Sprites;
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[];
  double_damage_to: DoubleDamageTo[];
  half_damage_from: HalfDamageFrom[];
  half_damage_to: HalfDamageTo[];
  no_damage_from: any[];
  no_damage_to: NoDamageTo[];
}

export interface DoubleDamageFrom {
  name: string;
  url: string;
}

export interface DoubleDamageTo {
  name: string;
  url: string;
}

export interface HalfDamageFrom {
  name: string;
  url: string;
}

export interface HalfDamageTo {
  name: string;
  url: string;
}

export interface NoDamageTo {
  name: string;
  url: string;
}

export interface Index {
  game_index: number;
  generation: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface Generation2 {
  name: string;
  url: string;
}

export interface MoveDamageClass {
  name: string;
  url: string;
}

export interface Mfe {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: Pokemon2;
  slot: number;
}

export interface Pokemon2 {
  name: string;
  url: string;
}

export interface Sprites {
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-ix': GenerationIx;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface GenerationIii {
  colosseum: Colosseum;
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-saphire': RubySaphire;
  xd: Xd;
}

export interface Colosseum {
  name_icon: string;
}

export interface Emerald {
  name_icon: string;
}

export interface FireredLeafgreen {
  name_icon: string;
}

export interface RubySaphire {
  name_icon: string;
}

export interface Xd {
  name_icon: string;
}

export interface GenerationIv {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  name_icon: string;
}

export interface HeartgoldSoulsilver {
  name_icon: string;
}

export interface Platinum {
  name_icon: string;
}

export interface GenerationIx {
  'scarlet-violet': ScarletViolet;
}

export interface ScarletViolet {
  name_icon: string;
}

export interface GenerationV {
  'black-2-white-2': Black2White2;
  'black-white': BlackWhite;
}

export interface Black2White2 {
  name_icon: string;
}

export interface BlackWhite {
  name_icon: string;
}

export interface GenerationVi {
  'omega-ruby-alpha-sapphire': OmegaRubyAlphaSapphire;
  'x-y': XY;
}

export interface OmegaRubyAlphaSapphire {
  name_icon: string;
}

export interface XY {
  name_icon: string;
}

export interface GenerationVii {
  'lets-go-pikachu-lets-go-eevee': LetsGoPikachuLetsGoEevee;
  'sun-moon': SunMoon;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

export interface LetsGoPikachuLetsGoEevee {
  name_icon: string;
}

export interface SunMoon {
  name_icon: string;
}

export interface UltraSunUltraMoon {
  name_icon: string;
}

export interface GenerationViii {
  'brilliant-diamond-and-shining-pearl': BrilliantDiamondAndShiningPearl;
  'legends-arceus': LegendsArceus;
  'sword-shield': SwordShield;
}

export interface BrilliantDiamondAndShiningPearl {
  name_icon: string;
}

export interface LegendsArceus {
  name_icon: string;
}

export interface SwordShield {
  name_icon: string;
}

export const EMPTY_POKEMON_TYPE: PokemonType = {
  id: 0,
  name: '',

  generation: {
    name: '',
    url: '',
  },
  move_damage_class: {
    name: '',
    url: '',
  },

  game_indices: [],
  moves: [],
  names: [],
  pokemon: [],
  past_damage_relations: [],

  damage_relations: {
    double_damage_from: [],
    double_damage_to: [],
    half_damage_from: [],
    half_damage_to: [],
    no_damage_from: [],
    no_damage_to: [],
  },

  sprites: {
    'generation-iii': null as any,
    'generation-iv': null as any,
    'generation-ix': null as any,
    'generation-v': null as any,
    'generation-vi': null as any,
    'generation-vii': null as any,
    'generation-viii': null as any,
  },
};
