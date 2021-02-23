import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import { createTask } from './functions/taskFunction';
import { truths } from './functions/truths';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export function AddPlayersScreen({ navigation }) {

  const [pelaaja, setPelaaja] = useState('');
  const [data, setData] = useState([]);

  const addPlayer = () => {
    const text = (pelaaja);
    setData([...data, { key: text }]);
    setPelaaja('');
  };

  {/*Itsensä selittävä, luodaan CustomButton-komponentti funktiolla */ }
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
  }



  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Image style={styles.imageStyle} source={require('./pics/Huikkapullo.png')} />
      </View>


      <View style={styles.inputFields}>
        <TextInput style={styles.addPlayerInputStyle} onChangeText={text => setPelaaja(text)} value={pelaaja} />
        <AntDesign name="pluscircleo" size={24} color="black" onPress={addPlayer} style={{ marginTop: 30, marginLeft: 10 }} />

      </View>

      <View style={styles.buttonContainer}>
        <AntDesign name="login" size={50} style={{ marginTop: 20 }} color="black" onPress={() => navigation.navigate('Navi', { list: data })} />
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
    var randomPlayer = list[Math.floor(Math.random() * list.length)];
    var randomTask = createTask();
    setTextOnScreen(randomPlayer + ' ' + randomTask)

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

{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN SCREENIN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }

export function HitlerScreen() {

  const [deck, setDeck] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [cardImage, setCardImage] = useState('https://www.nicepng.com/png/detail/68-682542_free-ancient-playing-card-symbol-gr-dan-club.png');
  const [korttiTeksti, setKorttiTeksti] = useState('Aloita peli painamalla "Jaa kortti"')
  const getDeck = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    try {
      const response = await fetch(url);
      var data = await response.json();
      setDeck(data.deck_id);
      console.log('Deck created')
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
      console.log(data);
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


{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN JUTTUJUTUN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }

export function NavScreen({ route, navigation }) {

  const { list } = route.params;

  return (
    <View>
      <View style={styles.navigateContainer1}>

        <View style={styles.hitlerNav}>
          <Text style={styles.NavText} onPress={() => navigation.navigate('Hitler', { list: list })}>Korttipeli</Text>
          <MaterialCommunityIcons name="cards" size={100} color="black" onPress={() => navigation.navigate('Hitler', { list: list })} />
        </View>

        <View style={styles.taskNav}>
          <Text style={styles.NavText} onPress={() => navigation.navigate('Game', { list: list })}>Huikkapeli</Text>
          <Entypo name="drink" size={100} color="black" onPress={() => navigation.navigate('Game', { list: list })} />
        </View>

      </View>
      <View style={styles.navigateContainer2}>
        <View style={styles.tvtNav}>
          <Text style={styles.NavText} onPress={() => navigation.navigate('TotuusVaiTehtävä', { list: list })}>Totuudet</Text>
          <FontAwesome5 name="theater-masks" size={100} color="black" onPress={() => navigation.navigate('TotuusVaiTehtävä', { list: list })} />
        </View>
      </View>
    </View>
  );
}

{/*TÄMÄ ON VAIN ESITTÄMÄSSÄ EROTUSTA KAHDEN JUTTUJUTUN VÄLILLÄ ETTEI MULLE TULE HÄMMENNYS MAXIMUS*/ }

export function TOT({ navigation }) {

  const [totuus, setTotuus] = useState('');

  const getTotuus = () => {
    setTotuus(truths());
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
    <Text style={{width: 300, height: 400,fontSize: 30, marginLeft:40, marginRight: 40,}}>{totuus}</Text>
    <Button style={{marginTop: 50}} onPress={getTotuus} title='nappi' />
    </View>
  );
}