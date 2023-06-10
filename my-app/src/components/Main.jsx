import React from "react";
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import Constants from 'expo-constants';
import Appbar from "./Appbar";
import Agregate from "./Agregate";
import Profile from "./Profile";
import Home from "./Home";

const image = { uri: 'https://res.cloudinary.com/ds8n6d63e/image/upload/v1686335203/Trama_-_oscuro_biyywa.png' };

const Stack = createNativeStackNavigator();



const Main = () => {
  return (
      
   
      <>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false,
                    
   }}>
          
          <Stack.Screen name="Agregate" component={Agregate} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
 <ImageBackground source={image} resizeMode='cover'> 
        <Appbar />
       </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonContainer: {
    marginLeft: 10,
  },
  img: {
    flex: 1,
    backgroundColor: '#242424',
  }
});

export default Main;
