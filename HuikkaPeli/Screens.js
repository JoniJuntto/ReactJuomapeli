import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';  


export function HomeScreen({ navigation }){

    const [pelaaja, setPelaaja] = useState('');
    const [data, setData] = useState([]);
    const [pelaajaNumero, setPelaajaNumero] = useState(() => {
        return 1;
    });
    
    const addPlayer = () =>{
        setPelaajaNumero(pelaajaNumero + 1);
        const text = (pelaaja);
        setData([...data, {key:text }]);
        setPelaaja('');
    };
  
  return(
        <View style={styles.container}>
            <Text>Pelaajan nimi:</Text>
            <View style={styles.inputStyle}>
                <TextInput style={styles.inputField} onChangeText={text => setPelaaja(text)} value={pelaaja} />
            </View>
            <Button title='Lisää pelaaja' onPress={addPlayer} /> 
            <Button onPress={()  => navigation.navigate('Settings', {list: data})}title="Pelaajat lisätty"/>
            <FlatList data={data} renderItem={({item}) => <Text>{item.key}</ Text>}/>
            
        </View>
  );}


  export function SettingsScreen({ route, navigation }) {
    const { list } = route.params;
    const tasks = ["Testi1", "testi2"];
    const [randomPlayer, setRandomPlayer] = useState('');
    const [randomTask, setRandomTask] = useState('');
    const [textOnScreen, setTextOnScreen] = useState('');

    const makeDraw = () => {
        setRandomPlayer(list[Math.floor(Math.random() * list.length)]);
        setRandomTask(tasks[Math.floor(Math.random() * tasks.length)]);
        setTextOnScreen(randomPlayer.key + ' ' + randomTask)
    }
  
    return (
      <View style={styles.container}>
        <Button onPress={makeDraw} title={'lol'}/>
        <Text>{textOnScreen}</Text>

      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        marginTop:100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputStyle:{
        margin:30,
        borderWidth:2,
        borderStyle: 'solid',
        width: 100,
        height: 30,
    }
  });