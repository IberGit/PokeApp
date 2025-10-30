import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Button } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

export default function Pokedex({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Pokemon')}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
