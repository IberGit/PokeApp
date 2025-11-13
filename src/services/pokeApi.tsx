import axios from 'axios';

// La API de Pokémon
const BASE_URL = 'https://pokeapi.co/api/v2/';

// Crea la instancia de Axios con la configuración base
const pokeApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Opcional: tiempo de espera en ms
});

export default pokeApi;

export const getInitialPokemonList = async ({
  offset = 0,
  limit = 151,
}: {
  offset: number;
  limit: number;
}) => {
  try {
    const response = await pokeApi.get(
      `pokemon/?offset=${offset}&limit=${limit}`,
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching initial list:', error);
    throw error;
  }
};

export const getPokemon = async ({
  nameOrId,
  dataType,
}: {
  nameOrId: string | number;
  dataType: 'Base' | 'Details' | 'Specie';
}) => {
  try {
    const response = await pokeApi.get(
      dataType === 'Base'
        ? `pokemon-form/${nameOrId}`
        : dataType === 'Details'
        ? `pokemon/${nameOrId}`
        : `pokemon-species/${nameOrId}`,
    );
    console.log('getPokemonDetails response -> ', response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${nameOrId}:`, error);
    throw error;
  }
};
