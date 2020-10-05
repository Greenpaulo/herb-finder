import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Conditions({ route, navigation}) {
  
  const { category } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>{category.title}</Text>
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