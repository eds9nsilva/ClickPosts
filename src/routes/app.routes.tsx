import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../pages/Welcome';
import {Home} from '../pages/Home';
import {Users} from '../pages/Users';
import {Post} from '../pages/Post';
import { Edit } from '../pages/Edit';
import { UserDetails } from '../pages/UserDetails';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator initialRouteName="Welcome">
      <App.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <App.Screen name="Home" component={Home} options={{headerShown: false}} />
      <App.Screen
        name="Users"
        component={Users}
        options={{
          title: 'Select the author of the post',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#090F24',
          },

        }}
      />
      <App.Screen
        name="Post"
        component={Post}
        options={{
          title: 'New post',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#090F24',
          },
        }}
      />
      <App.Screen
        name="Edit"
        component={Edit}
        options={{
          title: 'User post',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#090F24',
          },
        }}
      />
       <App.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          title: 'User details',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#090F24',
          },
        }}
      />
    </App.Navigator>
  );
};
