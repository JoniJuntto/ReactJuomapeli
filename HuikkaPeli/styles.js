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
      color:'white',
      marginRight:60
      
    },
    textStyles:{
      color: 'white',
      fontSize: 25,
      
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
      marginTop: 10
    },
    imageStyle:{
    width:400,
    height:250, 
    resizeMode: 'contain', 
    },
    addPlayerInputStyle:{
    height: 40,
    width:'40%', 
    borderColor: 'white', 
    borderWidth: 1, 
    marginTop:30,
    marginLeft: 95,
    color:'white'
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
    navigateContainer1:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    NavText:{
      fontSize: 30,
      color:'white',

    },
    taskText:{
      marginLeft:10,
      marginRight:10,
      width: 300,
      height: 500,
      fontSize: 30,
      color:'white'
    },
    tvtNav:{
      borderRadius:1,
      marginLeft: 30,
      borderStyle: 'solid',
    },
    navigateContainer2:{
      marginTop: 50,
      
    },
    playerListAdd:{
      flexDirection: 'row',
    },
    StartTextHead:{
      alignItems:'center',
      justifyContent:'center',
      fontSize: 30,
      marginBottom: 30,
    },
    StartTextBread:{
      justifyContent: 'center',
      alignItems:'center',
    },
    StartScreenButtons:{
      justifyContent:'center',
      alignItems:'center',
      marginTop: 180,
      flexDirection:'row',

    }

    
  });