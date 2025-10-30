import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Button, Text } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import {
  EMPTY_POKEMON,
  Pokemon as intPokemon,
} from '@utils/interfaces/Pokemon';
import { getPokemonDetails } from '@services/pokeApi';

export default function Pokemon({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  const [pokemonDetails, setPokemonDetails] =
    useState<intPokemon>(EMPTY_POKEMON);
  const { pokeNameOrId } = route.params;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getPokemonDetails({
          nameOrId: pokeNameOrId,
        });
        setPokemonDetails(response);
      } catch (error) {
        console.log('Error -> ', error);
        setPokemonDetails({ ...EMPTY_POKEMON, name: 'No encontrado' });
      }
    };
    getData();
  }, [pokeNameOrId]);
  return (
    <View style={styles.container}>
      <Text>Pokemon: {pokeNameOrId}</Text>

      <View style={styles.container}>
        <Text variant="displaySmall">
          {pokemonDetails.name} - {pokemonDetails.abilities[0]?.ability?.name}
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
