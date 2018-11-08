/* eslint-disable react/prop-types */
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Chats from 'screens/Chats';
import CurrentChat from 'screens/CurrentChat';
import Contacts from 'screens/Contacts';
import Icon from 'react-native-vector-icons/FontAwesome5';


const App = createBottomTabNavigator({
  Chats: {
    screen: createStackNavigator({
      Chats,
      CurrentChat,
    }),
    navigationOptions: {
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor }) => <Icon name="comments" size={16} color={tintColor} />,
    },
  },
  Contacts: {
    screen: createStackNavigator({
      Contacts,
    }),
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="users" size={16} color={tintColor} />,
    },
  },
});

export default App;
