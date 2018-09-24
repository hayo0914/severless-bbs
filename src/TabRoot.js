import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-fontawesome';
import { Home } from './screens';

export default createBottomTabNavigator(
  {
    Home,
    Threads: Home,
    Boards: Home,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let name;
        if (routeName === 'Home') {
          name = 'home';
        } else if (routeName === 'Threads') {
          name = 'globe';
        } else {
          name = 'plus-square';
        }
        return (
          <FontAwesome
            name={name}
            style={{ color: focused ? 'tomato' : 'gray' }}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
