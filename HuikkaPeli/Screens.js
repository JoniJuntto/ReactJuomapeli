import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import { createTask } from './functions/taskFunction';

export function AddPlayersScreen({ navigation }) {

  const [pelaaja, setPelaaja] = useState('');
  const [data, setData] = useState([]);

  const addPlayer = () => {
    const text = (pelaaja);
    setData([...data, { key: text }]);
    setPelaaja('');
  };

  const CustomButton = props => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.button, ...props.style}}>
          <Text style={{...styles.buttonText, ...props.textStyling}}>
            {props.children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }



  return (
    <View>
      <View style={{alignItems: 'center', justifyContent: 'center',}}>
        <Image style={{width:400, height:250, resizeMode: 'contain', }} source={require('./pics/Huikkapullo.png')} />
      </View>

      <View style={styles.laatikko}>

      <View style={styles.inputFields}>
        <Text style={styles.textStyles}>Lisää pelaaja</Text>
        <TextInput style={{ height: 40, width:'30%', borderColor: 'gray', borderWidth: 1, marginTop:30 }} onChangeText={text => setPelaaja(text)} value={pelaaja} />
      </View>

      <View style= {styles.buttonContainer}>
        <CustomButton onPress={addPlayer}>Lisää pelaaja</CustomButton>
        <CustomButton onPress={() => navigation.navigate('Game', { list: data })}>Pelaajat lisätty</CustomButton>
      </View>

      </View>

      <View style={styles.lista}>
        <Text style={styles.textStyles}>Lisätty on jo</Text>
        <FlatList data={data} renderItem={({ item }) => <Text style={styles.textStyles}>{item.key}</ Text>} />
      </View>

      

    </View>
  );
}

{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN SCREENIN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }


export function GameScreen({ route, navigation }) {
  const { list } = route.params;
  const [randomPlayer, setRandomPlayer] = useState('');
  const [randomTask, setRandomTask] = useState('');
  const [textOnScreen, setTextOnScreen] = useState('');

  const makeDraw = () => {
    setRandomPlayer(list[Math.floor(Math.random() * list.length)]);
    setRandomTask(createTask);
    setTextOnScreen(randomPlayer.key + ' ' + randomTask)

    if(buttonUseText == "Aloita"){
      setButtonUseText("Uusi tehtävä")
    }

  }

  const CustomButton = props => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.button, ...props.style}}>
          <Text style={{...styles.buttonText, ...props.textStyling}}>
            {props.children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [buttonUseText, setButtonUseText]  = useState(() => {
    return "Aloita";
  });

  return (
    <View>
      <Image style={{width:400, height:210, resizeMode: 'contain', marginTop: 40 }} source={require('./pics/Huikkapullo.png')} />
      <View style={styles.peliStyle}>
        <CustomButton style={{marginBottom:40}} onPress={makeDraw} >{buttonUseText}</CustomButton>
        <Text style={styles.textStyles}>{textOnScreen}</Text>
      </View>
    </View>
  );
};

{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN SCREENIN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }

export function HitlerScreen({ route, navigation }) {

  const { list } = route.params;

  return(
    <View></View>
  );


}


{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN JUTTUJUTUN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '15%',
  },

  button: {
    backgroundColor: '#79a3b1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: 150,
    borderRadius: 25,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  buttonContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom:20
  },
  inputFields:{
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    
  },
  textStyles:{
    color: 'black',
    fontSize: 30,
    
  },
  lista:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginBottom: 10,
  },
  laatikko:{
    backgroundColor: '#79a3b1',
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 20
  },

  peliStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
  
});