import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HerbDetailScreen({ route }) {

  const { herbInfo } = route.params

  console.log('from details', herbInfo)

  return (
    <View style={styles.container}>
      <Text>Herb Detail Screen</Text>
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
