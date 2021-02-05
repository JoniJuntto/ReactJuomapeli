import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddPlayersScreen, GameScreen, Header } from './Screens';
import { AntDesign, Ionicons } from '@expo/vector-icons';


const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#d0e8f2',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};



const screenOptions = ({ route }) => ({
  tabBarIcon: ({ }) => {


    if (route.name === 'Add players') {
      return <AntDesign name="adduser" size={24} color="black" />
    } else if (route.name === 'Game') {
      return <Ionicons name="ios-game-controller-outline" size={24} color="black" />
    }


  }
});



const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator  screenOptions={screenOptions}>
        <Tab.Screen name="Add players" component={AddPlayersScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

