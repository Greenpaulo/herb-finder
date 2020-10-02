import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

export default function Mental() {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("yes!")}>
        <Image
          source={require('../assets/mental.png')}
          fadeDuration={0}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    </View>
  )
}
