import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { AntDesign } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('players.db');


export default function AddPlayersScreen({ navigation }) {

  const [pelaaja, setPelaaja] = useState('');
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists players (id integer primary key not null, nimi text);');
    });
    updateList();
  }, []);

  const saveItem = () => {
    db.transaction(tx => {
      tx.executeSql('insert into players (nimi) values (?);', [pelaaja]);
    }, null, updateList
    )
    setPelaaja('');
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from players;', [], (_, { rows }) =>
        setPlayerList(rows._array)
      );
    });
  }

  const deleteAll = () => {
    db.transaction(tx =>{
      tx.executeSql('delete from players');
        updateList();
    })
  }

  const pressed = () => {
    saveItem();
    updateList();
  }

  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Image style={styles.imageStyle} source={require('../pics/Huikkapullo.png')} />
      </View>


      <View style={styles.inputFields}>
        <TextInput style={styles.addPlayerInputStyle} onChangeText={text => setPelaaja(text)} value={pelaaja} />
        <AntDesign name="pluscircleo" size={34} color="black" onPress={pressed} style={{ marginTop: 30, marginLeft: 10 }} />
        <AntDesign name="login" size={34} style={{ marginTop: 30, marginLeft: 30 }} color="black" onPress={() => navigation.navigate('Valikko')} />
      </View>

      <View style={styles.buttonContainer}>
        
      </View>



      <View style={styles.lista}>
        <View style={styles.playerListAdd}>
        <Text style={styles.textStyles}>Pelaajat</Text>
        <AntDesign style={{marginTop: 0, marginLeft:20}} name="deleteusergroup" size={40} color="black" onPress={deleteAll} />
        </View>
        <FlatList data={playerList} renderItem={({ item }) => <Text style={styles.textStyles}>{item.nimi}</ Text>} />
      </View>



    </View>
  );
}