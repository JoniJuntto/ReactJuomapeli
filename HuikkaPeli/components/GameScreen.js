import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { createTask } from '../functions/taskFunction';
import styles from '../styles';
import * as SQLite from 'expo-sqlite';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const db = SQLite.openDatabase('players.db');

export default function GameScreen({ navigation }) {
  
  const [playerList, setPlayerList] = useState([]);
  const [textOnScreen, setTextOnScreen] = useState('');

  const getPlayerList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from players;', [], (_, { rows }) =>
        setPlayerList(rows._array)
      );
    });
    
  }

  useEffect(() => {
    getPlayerList();
  }, []);

  const makeDraw = () => {
    if(playerList.length===0){
      setTextOnScreen('Lisää pelaajia aloitusnäytöllä')
    }
    else if(playerList.length>0){
      var randomPlayer = playerList[Math.floor(Math.random() * playerList.length)];
      var randomTask = createTask();
      setTextOnScreen(randomPlayer.nimi + ' ' + randomTask)
    }

  }

  return (
    <View>
      <View style={styles.peliStyle}>
      <Image style={styles.imageStyle} source={require('../assets/lapinakuvataustalogo.png')} />
        <Pressable onPress={makeDraw}>
          <MaterialCommunityIcons style={{marginBottom:20}} name="autorenew" size={40} color="#e817e8"  onPress={makeDraw}/>
        </Pressable>
      <Text style={styles.taskText}>{textOnScreen}</Text>
        
      </View>
    </View>
  );
};