import React, { useState } from 'react';
import { useColorScheme, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import BottomTabNav from './BottomTabNav';
import LoginStack from './Stacks/LoginStack';

export default function Navigation() {
  const isDarkMode = useColorScheme() === 'dark';
  const [userIsLogged, setUserIsLogged] = useState<any>(true);
  //TODO -> LOAD USER FROM STORAGE WITH USE_EFFECT
  //TODO -> MAKE "LOADING" COMPONENT

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        {userIsLogged !== null ? (
          userIsLogged ? (
            <BottomTabNav />
          ) : (
            <LoginStack />
          )
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>Loading ...</Text>
          </View>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
