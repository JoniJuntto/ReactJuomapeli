import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import { createTask } from './functions/taskFunction';
import styles from './styles';
import saannot from './kortti';

export function AddPlayersScreen({ navigation }) {

  const [pelaaja, setPelaaja] = useState('');
  const [data, setData] = useState([]);

  const addPlayer = () => {
    const text = (pelaaja);
    setData([...data, { key: text }]);
    setPelaaja('');
  };

  {/*Itsensä selittävä, luodaan CustomButton-komponentti funktiolla */}
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
        <Image style={styles.imageStyle} source={require('./pics/Huikkapullo.png')} />
      </View>

      <View style={styles.laatikko}>

      <View style={styles.inputFields}>
        <Text style={styles.textStyles}>Lisää pelaaja</Text>
        <TextInput style={styles.addPlayerInputStyle} onChangeText={text => setPelaaja(text)} value={pelaaja} />
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

{/*Tällä hetkellä Piccolo-vaikutteinen juomapeliscreeni*/ }
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

export function HitlerScreen() {

  const [deck, setDeck] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [cardImage, setCardImage] = useState('https://images.alko.fi/images/cs_srgb,f_auto,t_large/cdn/792244/koff.jpg');
  const [korttiTeksti, setKorttiTeksti] = useState('Aloita peli painamalla "Jaa kortti"')
  const getDeck = async () => {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    
    try {
      const response = await fetch(url);
      var data = await response.json();
      setDeck(data.deck_id);
      console.log('Deck created')
    }catch (error){
      console.log('error', error);
    }
    
  }



 
  useEffect(() => {getDeck()},[]);

  const getText = (card) =>{
    if(card == "1"){
      return "Kortti 1"
    }else if(card == "2"){
      return "Kortti 2"
    }else if(card == "3"){
      return "Kortti 3"
    }else if(card == "4"){
      return "Kortti 4"
    }else if(card == "5"){
      return "Kortti 5"
    }else if(card == "6"){
      return "Kortti 6"
    }else if(card == "7"){
      return "Kortti 7"
    }else if(card == "8"){
      return "Kortti 8"
    }else if(card == "9"){
      return "Kortti 9"
    }else if(card == "10"){
      return "Kortti 10"
    }else if(card == "JACK"){
      return "Kortti 11"
    }else if(card == "QUEEN"){
      return "Kortti 12"
    }else if(card == "KING"){
      return "Kortti 13"
    }else if(card == "ACE"){
      return "Kortti 14"
    }
  }

  const drawCard = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/' + deck + '/draw/?count=1';
      
      try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        if (data.remaining>0){
        setCardValue(data.cards[0].value);
        setCardImage(data.cards[0].image)
        const teksti = getText(data.cards[0].value);
        setKorttiTeksti(teksti);
        
        }else{
          console.log('kortit loppu')
          Alert.alert("kortit loppu :(")
        }
      }catch (error){
        console.log('error', error);
      }
      
    }

  return(
    <View style={styles.container}>
      <Image
        style={{
          width: 350,
          height: 350,
          resizeMode: 'contain'}}
        source={{
          uri: cardImage,
        }}/>
        <Text style={styles.textStyles}>{korttiTeksti}</Text>
        <Button onPress={drawCard} title='Jaa kortti'/>
    </View>
  );


}


{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN JUTTUJUTUN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }