import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-fontawesome';
import { Home, SiteList, Blog } from './screens';

export default createBottomTabNavigator(
  {
    Home,
    Find: SiteList,
    Blog,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let name;
        if (routeName === 'Home') {
          name = 'home';
        } else if (routeName === 'Find') {
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
