import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { NavigationProp } from '@react-navigation/native';

import {
  EMPTY_POKEDEX,
  PokedexList,
  PokedexResultItem,
} from '@utils/interfaces/Pokedex';
import { EMPTY_POKEMON_BASE } from '@utils/interfaces/PokemonBase';
import { getInitialPokemonList } from '@services/pokeApi';
import PokedexItem from '@components/Pokedex/PokedexItem';

export default function Pokedex({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [pokedex, setPokedex] = useState<PokedexList>(EMPTY_POKEDEX);
  const [startAt, setStartAt] = useState<number>(0);
  const [limitedTo, setLimitedTo] = useState<number>(5);
  const [pagination, setPagination] = useState<number>(3);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getInitialPokemonList({
          offset: startAt,
          limit: limitedTo,
        });
        setPokedex(response);
      } catch (error) {
        console.log('Error -> ', error);
        setPokedex(EMPTY_POKEDEX);
      }
    };
    getData();
  }, [startAt, limitedTo]);
  return (
    <View style={styles.container}>
      {pokedex.results.length === 0 ? (
        <PokedexItem
          pokemon={{ ...EMPTY_POKEMON_BASE.pokemon, name: 'MissingNo' }}
          id={0}
        />
      ) : (
        <FlatList
          data={pokedex.results.slice(startAt, limitedTo)}
          keyExtractor={item => item.name}
          renderItem={({ item, index }) => {
            const pokemon: PokedexResultItem = item;
            return (
              <View style={styles.container}>
                <PokedexItem pokemon={pokemon} id={startAt + index + 1} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
