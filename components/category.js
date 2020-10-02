import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

export default function Category(condition) {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("heart!")}>
        <Image
          source={require('../assets/mental.png')}
          fadeDuration={0}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    </View>
  )
}
