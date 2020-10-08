import React from 'react';
import { StyleSheet, Stylesheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({ navigation }) {

  const openMenu =() => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.hamburger}/>
      <View>
        <Text style={styles.headerText}>Herb Finder</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width:Dimensions.get('screen').width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B7B05',
  },
  headerText: {
    color: 'white',
    fontSize: 26
  },
  hamburger: {
    position: 'absolute',
    left: 16
  }
})