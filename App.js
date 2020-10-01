import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Body from './components/body-svg'
import Heart from './components/heart-svg'
import Throat from './components/throat-svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Chebs!</Text>
      <Body />
      <Heart />
      <Throat />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
