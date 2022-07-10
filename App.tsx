import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from './src/context/context';
import theme from './src/global/theme';
import { Routes } from './src/routes';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent style='light' />
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Routes />
        </ContextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
