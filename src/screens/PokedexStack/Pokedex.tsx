import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { Button, TextInput } from 'react-native-paper';
import { Text } from 'react-native-paper';

import { NavigationProp } from '@react-navigation/native';

export default function Pokedex({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [pokeNameOrId, setPokeNameOrId] = useState<string | number>('');
  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>

      <View style={styles.container}>
        <TextInput
          placeholder="Enter Pokemon name or number"
          onChangeText={text => setPokeNameOrId(text)}
        />
        <Button
          icon="camera"
          mode="contained"
          onPress={() =>
            navigation.navigate('Pokemon', { pokeNameOrId: pokeNameOrId })
          }
        >
          Go to Pokemon Screen
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('PokeType')}
        >
          Go to PokeType Screen
        </Button>
      </View>
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
