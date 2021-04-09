import React from 'react';
import {Image, useWindowDimensions, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

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
            <Button 
                onPress={onButtonPress}
                titleStyle={{ color: '#bd06d1', fontSize: 20 }}
                type='outline'
                buttonStyle={{
                    borderColor: "#bd06d1"
                 }}
                 title={item.buttonText}
                />
            <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]}/>

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
        height: 90
    },
    title:{
        fontWeight:'800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign:'center',
    },
    description:{
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});

export default NavItem;