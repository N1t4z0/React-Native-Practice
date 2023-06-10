import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/components/Main';

const image = {uri: 'https://res.cloudinary.com/ds8n6d63e/image/upload/v1686270788/removal.ai__tmp-6482730e5c76e_E737NX_eluiqj.png'}

export default function App() {
  return (
    <NavigationContainer><Main/></NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create ({
  img: {
    flex:1,
      backgroundColor: '#242424',
  }
})