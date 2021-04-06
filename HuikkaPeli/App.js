import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddPlayersScreen from './components/AddPlayerScreen';
import GameScreen from './components/GameScreen';
import HitlerScreen from './components/HitlerScreen';
import NavScreen from './components/NavScreen';
import TOT from './components/TOT';
import StartingScreen from './components/StartingScreen';


const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'black',
    card: 'purple',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};






const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Aloitus' component={StartingScreen}/>
        <Stack.Screen name="Lisää pelaajia" component={AddPlayersScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name='Hitler' component={HitlerScreen} />
        <Stack.Screen name='Valikko' component={NavScreen}/>
        <Stack.Screen name="Totuudet" component={TOT}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

