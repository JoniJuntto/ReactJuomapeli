import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import { createTask } from '../functions/taskFunction';
import styles from '../styles';
import * as SQLite from 'expo-sqlite';

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

  useEffect(() => {getPlayerList();}, []);

  const makeDraw = () => {
    var randomPlayer = playerList[Math.floor(Math.random() * playerList.length)];
    var randomTask = createTask();
    setTextOnScreen(randomPlayer.nimi + ' ' + randomTask)

    if (buttonUseText == "Aloita") {
      setButtonUseText("Uusi tehtävä")
    }

  }

  const CustomButton = props => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={{ ...styles.buttonText, ...props.textStyling }}>
            {props.children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [buttonUseText, setButtonUseText] = useState(() => {
    return "Aloita";
  });

  return (
    <View>
      <View style={styles.peliStyle}>
        <Text style={styles.taskText}>{textOnScreen}</Text>
        <CustomButton style={{ marginBottom: 40 }} onPress={makeDraw} >{buttonUseText}</CustomButton>
      </View>
    </View>
  );
};