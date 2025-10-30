import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Button } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

export default function Pokemon({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text>Pokemon</Text>

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
