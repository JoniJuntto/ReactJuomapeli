import React from 'react';
import {Image, useWindowDimensions, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NavItem({item}) {

    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    const onButtonPress = () =>{
        navigation.navigate(item.press)
    }

    return(
        <View style={[styles.container, {width}]}> 
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            
            <TouchableOpacity style={styles.image}  onPress={onButtonPress}>
                <Image source={item.image} style={{width, resizeMode:'contain'}}/>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create( {

    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        flex: 0.7,
        justifyContent:'center',
        marginTop:160
    },
    title:{
        fontWeight:'800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign:'center',
        marginTop:20
    },
    description:{
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
        fontSize: 18
    }
});

export default NavItem;