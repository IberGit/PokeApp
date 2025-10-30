import React from 'react';
import Navigation from '@navigation/Navigation';
import {
  PaperProvider /* , MD3LightTheme as DefaultTheme */,
} from 'react-native-paper';

// Paper docs -> https://callstack.github.io/react-native-paper/

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
