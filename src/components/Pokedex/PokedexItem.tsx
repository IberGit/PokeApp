import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { VStack } from '@components/IOSLikeStacks/VStack';
import { HStack } from '@components/IOSLikeStacks/HStack';
import { Text } from 'react-native-paper';
import { PokedexResultItem } from '@utils/interfaces/Pokedex';
import { Spacer } from '@components/IOSLikeStacks/Spacer';

export default function PokedexItem({
  pokemon,
  id,
  backgroundTop,
  backgroundBottom,
}: {
  pokemon: PokedexResultItem;
  id: number;
  backgroundTop?: `#${string}`;
  backgroundBottom?: `#${string}`;
}) {
  return (
    <View style={styles.outerContainer}>
      <VStack spacing={0} alignment="leading" style={{}}>
        <HStack
          style={StyleSheet.compose(
            styles.hStackTop,
            backgroundTop && {
              backgroundColor: backgroundTop,
            },
          )}
        >
          <Spacer />
          <Text variant="titleMedium">
            Name: {pokemon.name} - Number: {id}
          </Text>
          <Spacer />
        </HStack>
        <HStack
          alignment={'center'}
          style={StyleSheet.compose(
            styles.hStackBottom,
            backgroundBottom && {
              backgroundColor: backgroundBottom,
            },
          )}
        >
          <Spacer />
        </HStack>
      </VStack>
      <View style={styles.centerCircle}>
        <Image
          style={styles.pokeImage}
          resizeMode="stretch"
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'black',
    overflow: 'hidden',
  },
  hStackTop: {
    height: 60,
    backgroundColor: '#FF0000',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  hStackBottom: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  centerCircle: {
    position: 'absolute',
    left: '50%',
    marginLeft: -30,
    top: 30,
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 8,
    borderColor: 'black',
    overflow: 'hidden',
  },
  pokeImage: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});
