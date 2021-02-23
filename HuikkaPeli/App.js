import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AddPlayersScreen, GameScreen, HitlerScreen, NavScreen } from './Screens';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


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
    else if (route.name==='Hitler'){
      return <Ionicons name="ios-game-controller-outline" size={24} color="black" />
    }


  }
});


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator  screenOptions={screenOptions}>
        <Stack.Screen name="Add Players" component={AddPlayersScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name='Hitler' component={HitlerScreen} />
        <Stack.Screen name='Navi' component={NavScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

