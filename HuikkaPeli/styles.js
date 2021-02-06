import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    }
    
  });