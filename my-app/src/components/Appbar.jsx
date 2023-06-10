import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const image = { uri: 'https://res.cloudinary.com/ds8n6d63e/image/upload/v1686335203/Trama_-_oscuro_biyywa.png' };

const Appbar = ({  }) => {
  const navigation = useNavigation()
  return (

    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
     <View onPress={() => navigation.navigate('Home')}><Image source={require('./asa.png') }style={styles.tinyLogo}  />
     <Text style={styles.ext} onPress={() => navigation.navigate('Home')}>Inicio</Text>
     </View>
        
        <View style={styles.alignator}>
        <Icon name={'plus-thick'} size={40} color="white" onPress={() => navigation.navigate('Agregate')}/>
        <Text style={styles.text}>Agregar</Text>
        </View>
        <View style={styles.alignator}>
          <Icon name={'account'} size={40} color="white"onPress={() => navigation.navigate('Profile')}/>
         <Text style={styles.text}>Mi Perfil</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical:10,
  },
    text: {
     
      color:'white'
      
    },

    ext: {
     
      color:'white',
      marginTop:'10%',
      
    },
    buttonContainer: {
      marginLeft: 10,
      position:'relative',
      width:'80%',

      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:"center",
    },
    tinyLogo: {
      width: 32.5,
      height: 32.5,
      
    },  
    alignator:{
      alignItems:"center",
    },
      
  });

export default Appbar;
