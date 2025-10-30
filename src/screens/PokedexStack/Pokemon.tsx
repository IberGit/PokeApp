import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@react-native-vector-icons/fontawesome5';

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
      <FontAwesome5 name="comments" size={30} color="#900" iconType="solid" />

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
