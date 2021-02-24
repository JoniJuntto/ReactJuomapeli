import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function NavScreen({navigation}) {

  return (
    <View>
      <View style={styles.navigateContainer1}>

        <View style={styles.hitlerNav}>
          <Text style={styles.NavText} onPress={() => navigation.navigate('Hitler')}>Korttipeli</Text>
          <MaterialCommunityIcons name="cards" size={100} color="black" onPress={() => navigation.navigate('Hitler')} />
        </View>

        <View style={styles.taskNav}>
          <Text style={styles.NavText} onPress={() => navigation.navigate('Game')}>Huikkapeli</Text>
          <Entypo name="drink" size={100} color="black" onPress={() => navigation.navigate('Game')} />
        </View>

      </View>
      <View style={styles.navigateContainer2}>
        <View style={styles.tvtNav}>
          <Text style={styles.NavText} onPress={() => navigation.navigate('Totuudet')}>Totuudet</Text>
          <FontAwesome5 name="theater-masks" size={100} color="black" onPress={() => navigation.navigate('Totuudet')} />
        </View>
      </View>
    </View>
  );
}