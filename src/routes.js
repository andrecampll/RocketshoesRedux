import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{ backgroundColor: '#7159c1' }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              size = 24;
              color = '#FFF';
  
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Carrinho') {
                iconName = 'shopping-basket';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Carrinho" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
