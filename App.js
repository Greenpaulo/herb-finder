import React, { useState } from 'react';
import { AppNavigator } from "./routes/drawer";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import 'react-native-get-random-values';

const getFonts = () => Font.loadAsync({
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded){
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
