import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createSent } from '../functions/createSent';

export default function StraightFace({ navigation }) {
  
  const [textOnScreen, setTextOnScreen] = useState('Aloita napauttamalla näyttöä');



  const makeDraw = () => {
      var randomSent = createSent();
      setTextOnScreen(randomSent)
  }

  return (
    <View>
      <TouchableOpacity onPress={makeDraw}>
      <View style={styles.peliStyle}>
      <Image style={styles.imageStyle} source={require('../assets/lapinakuvataustalogo.png')} />
      <Text style={styles.taskText}>{textOnScreen}</Text>
        
      </View>
      </TouchableOpacity>
    </View>
  );
};