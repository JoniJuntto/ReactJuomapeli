import React, { useCallback, useEffect, useRef } from 'react';
import { Text, View, Linking, Image } from 'react-native';
import styles from '../styles';
import { FontAwesome } from '@expo/vector-icons';
import { Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';


export default function StartingScreen({ navigation }) {

    const url = "https://github.com/JoniJuntto/ReactJuomapeli/tree/main/HuikkaPeli";

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return (
        <View >
            <View>
                <Image style={styles.imageStyle} source={require('../assets/lapinakuvataustalogo.png')} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Button
                    titleStyle={{ color: 'white', fontSize: 30 }}
                    icon={<Icon style={{ marginLeft: 10 }} name="arrow-right" size={25} color="white" />}
                    iconRight
                    type='clear'
                    title="Pelaamaan"
                    onPress={() => navigation.navigate("Lisää pelaajia")}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginTop: 190, color: 'white' }}>Made by Huikka</Text>
                <SocialIcon
                    style={{ width: 350, marginTop: 10 }}
                    title='GitHub'
                    button
                    
                    type='github'
                    onPress={handlePress}
                />
            </View>
        </View>
    );
}