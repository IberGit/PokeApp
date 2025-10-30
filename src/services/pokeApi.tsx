import axios from 'axios';

// La API de Pokémon
const BASE_URL = 'https://pokeapi.co/api/v2/';

// Crea la instancia de Axios con la configuración base
const pokeApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Opcional: tiempo de espera en ms
});

export default pokeApi;

export const getInitialPokemonList = async () => {
  try {
    const response = await pokeApi.get('pokemon?limit=151');

    return response.data;
  } catch (error) {
    console.error('Error fetching initial list:', error);
    throw error;
  }
};

export const getPokemonDetails = async ({
  nameOrId,
}: {
  nameOrId: string | number;
}) => {
  try {
    const response = await pokeApi.get(`pokemon/${nameOrId}`);
    console.log('getPokemonDetails response -> ', response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${nameOrId}:`, error);
    throw error;
  }
};
