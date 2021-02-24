import React, {useState} from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { FontAwesome } from '@expo/vector-icons'; 

export default function StartingScreen({navigation}){
    return(
        <View >
            <View style={styles.StartTextHead}>
                <Text style={{fontSize: 40}}>Tervetuloa</Text>
                <Text style={{fontSize: 20}}>Käyttöehdot</Text>
            </View>
            <View style={styles.StartTextBread}>
                <Text style={{marginBottom: 10, marginLeft:10, marginRight:10}}>Peli sisältää yhtenä aihepiirinä alkoholin, joten se on kielletty alle 18-vuotialta</Text>
                <Text style={{marginBottom: 10, marginLeft:10, marginRight:10}}>Peli on tällä hetkellä beta testauksessa, jonka vuoksi pelissä saattaa olla kiintoisia vikoja</Text>
                <Text style={{marginBottom: 10, marginLeft:10, marginRight:10}}>Pelin tekijä ei ota minkäänlaista vastuuta, siitä miten peliä käytetään, tai mihin pelaaminen johtaa</Text>
            </View>
            <View style={styles.StartScreenButtons}>
                <Text style={{fontSize:20, marginRight:20}} onPress={() => navigation.navigate("Lisää pelaajia")}>Hyväksyn</Text>
                <FontAwesome name="thumbs-o-up" size={24} color="black" />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{marginTop: 160}}>Made by Huikka</Text>
            </View>
        </View>
    );
}  