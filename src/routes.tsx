import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import Home from './Screens/Home';
import Contact from './Screens/Contact';
import List from './Screens/List';


const Routes: React.FC = () => { 
  /* FC = Function Component, App é do tipo React.FC 
   * Stack.Navigator é um componente que vai controlar a navegação
   * Stack.Screen é um componente que vai controlar a tela
  */
  const Stack = createStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#c73434',
    alignItems: 'center',
    justifyContent: 'center',
  },
});