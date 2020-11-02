import React from 'react'
import { View, StyleSheet } from 'react-native'
import HerbFlatList from '../components/herbFlatList'

export default function HerbsScreen({ route, navigation }) {
  
  const herbs = route.params.condition.herbs

  return (
    <View style={styles.container}>
      <HerbFlatList herbs={herbs} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31b526',
  }
});
