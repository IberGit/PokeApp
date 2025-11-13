import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Button, Text } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import {
  EMPTY_POKEMON_BASE,
  PokemonBase as intPokemon,
} from '@utils/interfaces/PokemonBase';
import { getPokemon } from '@services/pokeApi';

export default function Pokemon({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  const [pokemonBase, setPokemonBase] =
    useState<intPokemon>(EMPTY_POKEMON_BASE);
  const { pokeNameOrId } = route.params;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getPokemon({
          nameOrId: pokeNameOrId,
          dataType: 'Base',
        });
        setPokemonBase(response);
      } catch (error) {
        console.log('Error -> ', error);
        setPokemonBase({ ...EMPTY_POKEMON_BASE, name: 'No encontrado' });
      }
    };
    getData();
  }, [pokeNameOrId]);

  return (
    <View style={styles.container}>
      <Text>Pokemon: {pokeNameOrId}</Text>

      <View style={styles.container}>
        <Text variant="displaySmall">
          {pokemonBase.name} - {pokemonBase.types[0].type.name}
        </Text>
      </View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Go back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
