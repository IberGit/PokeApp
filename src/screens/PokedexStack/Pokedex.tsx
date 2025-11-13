import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { NavigationProp } from '@react-navigation/native';

import { Text } from 'react-native-paper';
import { getInitialPokemonList } from '@services/pokeApi';
import { EMPTY_POKEDEX, PokedexList } from '@utils/interfaces/Pokedex';
import DemoResponse from '@services/pokedexApiDemoResponse.json';

export default function Pokedex({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [pokedex, setPokedex] = useState<PokedexList>(DemoResponse);
  /* const [pokedex, setPokedex] = useState<PokedexList>(EMPTY_POKEDEX);
  const [startAt, setStartAt] = useState<number>(0);
  const [LimitedTo, seLimitedTo] = useState<number>(20); */

  const getData = async ({
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
  //getData({ offset: startAt, limit: LimitedTo });
  return (
    <View style={styles.container}>
      <Text>
        Pokedex - Start: {pokedex?.results[0]?.name} - Lenght:{' '}
        {pokedex?.results.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##f0f0f0',
  },
});
