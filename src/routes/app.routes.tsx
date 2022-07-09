import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  )
}
