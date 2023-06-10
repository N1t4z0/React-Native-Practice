import React from "react";
import { viewPropTypes, StyleSheet, View, Text, Image, ImageBackground, Dimensions } from 'react-native'
import Constants from 'expo-constants';

const image = { uri: 'https://res.cloudinary.com/ds8n6d63e/image/upload/v1686335203/Trama_-_oscuro_biyywa.png' };
const { width, height } = Dimensions.get('window');

const Agregate = () => {
    return (
      <ImageBackground source={image} resizeMode='cover'>
<View style={styles.container}>
      <Text style={styles.text}> Agrega Links</Text>
        </View>
</ImageBackground>
        
    )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
    height: height,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color:'white'
  },
  buttonContainer: {
    marginLeft: 10,
  }
});

export default Agregate;