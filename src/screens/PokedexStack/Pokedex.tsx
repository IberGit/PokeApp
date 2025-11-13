import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { NavigationProp } from '@react-navigation/native';

import { getInitialPokemonList } from '@services/pokeApi';
import {
  EMPTY_POKEDEX,
  PokedexList,
  PokedexResultItem,
} from '@utils/interfaces/Pokedex';
import DemoResponse from '@services/pokedexApiDemoResponse.json';
import PokedexItem from '@components/Pokedex/PokedexItem';

export default function Pokedex({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [pokedex, setPokedex] = useState<PokedexList>(DemoResponse);
  const [startAt, setStartAt] = useState<number>(0);
  const [limitedTo, seLimitedTo] = useState<number>(20);

  /* const getData = async ({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }) => {
    try {
      const response = await getInitialPokemonList({
        offset: offset,
        limit: limit,
      });
      setPokedex(response);
    } catch (error) {
      console.log('Error -> ', error);
      setPokedex(EMPTY_POKEDEX);
    }
  };
  getData({ offset: startAt, limit: limitedTo }); */
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
