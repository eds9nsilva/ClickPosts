import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../pages/Welcome';
import {Home} from '../pages/Home';
import {Users} from '../pages/Users';
import {Post} from '../pages/Post';
import {ViewPost} from '../pages/ViewPost';
import { Edit } from '../pages/Edit';

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
          title: 'Selecionar o autor do post',
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
          title: 'Novo post',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000',
          },
        }}
      />
      <App.Screen
        name="ViewPost"
        component={ViewPost}
        options={{
          title: 'Postagem de usuário',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000',
          },
        }}
      />
       <App.Screen
        name="Edit"
        component={Edit}
        options={{
          title: 'Postagem de usuário',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000',
          },
        }}
      />
    </App.Navigator>
  );
};
