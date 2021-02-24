import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('players.db');


export default function HitlerScreen() {

  const [deck, setDeck] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [cardImage, setCardImage] = useState('https://simpleicon.com/wp-content/uploads/loading_1.png');
  const [korttiTeksti, setKorttiTeksti] = useState('Aloita peli painamalla "Jaa kortti"')
  const getDeck = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    try {
      const response = await fetch(url);
      var data = await response.json();
      setDeck(data.deck_id);
    } catch (error) {
      console.log('error', error);
    }

  }

  useEffect(() => { getDeck() }, []);

  const getText = (card) => {
    if (card == "ACE") {
      return "Anna 3"
    } else if (card == "2") {
      return "Ota 3"
    } else if (card == "3") {
      return "123"
    } else if (card == "4") {
      return "HITLER"
    } else if (card == "5") {
      return "HITLER"
    } else if (card == "6") {
      return "Kategoria"
    } else if (card == "7") {
      return "Vesiputous"
    } else if (card == "8") {
      return "Sääntö"
    } else if (card == "9") {
      return "Riimi"
    } else if (card == "10") {
      return "Kysymysmestari"
    } else if (card == "JACK") {
      return "Taukokortti"
    } else if (card == "QUEEN") {
      return "Huora"
    } else if (card == "KING") {
      return "Tarina"
    }
  }

  const drawCard = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/' + deck + '/draw/?count=1';

    try {
      const response = await fetch(url);
      var data = await response.json();
      if (data.remaining > 0) {
        setCardValue(data.cards[0].value);
        setCardImage(data.cards[0].image)
        const teksti = getText(data.cards[0].value);
        setKorttiTeksti(teksti);

      } else {
        console.log('kortit loppu')
        Alert.alert("kortit loppu :(")
      }
    } catch (error) {
      console.log('error', error);
    }

  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 350,
          height: 350,
          resizeMode: 'contain'
        }}
        source={{
          uri: cardImage,
        }} />
      <Text style={styles.textStyles}>{korttiTeksti}</Text>
      <Button onPress={drawCard} title='Jaa kortti' />
    </View>
  );


}