import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import HerbList from '../components/herbList'
import HerbCard from '../components/card';
import HerbFlatList from '../components/herbFlatList'

export default function HerbsScreen({ route }) {
  
  const herbs = route.params.condition.herbs

  console.log('from herbsScreen', herbs)
  
  return (
    <View style={styles.container}>
      <HerbFlatList herbs={herbs} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31b526',
  }
});
