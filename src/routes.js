import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './services/navigation';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    >
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
