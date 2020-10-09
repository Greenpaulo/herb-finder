import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import HerbCard from '../components/herbCard';

export default function HerbsScreen({ route }) {
  
  const herbs = route.params.condition.herbs
  
  console.log('herbs', herbs)
  
  return (
    <View>
      <FlatList 
        data={herbs}
        renderItem={(herb) => (
          <HerbCard herb={herb}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});
