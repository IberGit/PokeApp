import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Pokedex from '@screens/PokedexStack/Pokedex';
import Pokemon from '@screens/PokedexStack/Pokemon';
import PokeType from '@screens/PokedexStack/PokeType';

const Stack = createStackNavigator();
const PokedexStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="PokeType" component={PokeType} />
    </Stack.Navigator>
  );
};

export default PokedexStack;
