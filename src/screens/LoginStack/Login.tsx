import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationProp } from '@react-navigation/native';

import { Button } from 'react-native-paper';

export default function Login({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('NewUser')}
      >
        Go to NewUser Screen
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
