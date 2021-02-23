import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '15%',
    },
  
    button: {
      backgroundColor: '#79a3b1',
      paddingVertical: 10,
      marginTop: 30,
      width: 100,
      borderRadius: 10,
      margin:5,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    buttonText: {
      color: 'black',
      fontSize: 15,
    },
    buttonContainer:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputFields:{
      flexDirection: 'row',
      marginTop: 10,
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
    },
    imageStyle:{
    width:400,
    height:250, 
    resizeMode: 'contain', 
    },
    addPlayerInputStyle:{
    height: 40,
    width:'30%', 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginTop:30,
    marginLeft: 25
    },
    hitlerNav:{
      borderRadius:1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 30,
    },
    taskNav:{
      borderRadius:1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 30,
      borderStyle: 'solid',

    },
    navigateContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    NavText:{
      fontSize: 30,

    },
    taskText:{
      marginLeft:30,
      marginRight:30,
    }
    
  });