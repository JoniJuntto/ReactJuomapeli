import React, { useState } from 'react';
import { Text, View} from 'react-native';
import { truths } from '../functions/truths';
import * as SQLite from 'expo-sqlite';
import {Button} from 'react-native-elements';

const db = SQLite.openDatabase('players.db');


export default function TOT({ navigation }) {

  const [totuus, setTotuus] = useState('');
  const [buttonUseText, setButtonUseText] = useState('Aloita')

  const getTotuus = () => {
    if (buttonUseText == "Aloita") {
      setButtonUseText("Seuraava")
    }
    setTotuus(truths());
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
    <Text style={{width: 300, height: 400,fontSize: 30, marginLeft:40, marginRight: 40, color:'white'}}>{totuus}</Text>
    <Button
          titleStyle={{ color: '#bd06d1', fontSize: 20 }}
          type='outline'
          title={buttonUseText}
          onPress={getTotuus}
          buttonStyle={{
            borderColor: "#bd06d1"
         }}
          
        />
    </View>
  );
}