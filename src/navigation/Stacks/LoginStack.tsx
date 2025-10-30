import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '@screens/LoginStack/Login';
import NewUser from '@screens/LoginStack/NewUser';

const Stack = createStackNavigator();
const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NewUser" component={NewUser} />
    </Stack.Navigator>
  );
};

export default LoginStack;
