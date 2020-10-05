import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

export default function Category({category}) {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log(category.keyword)}>
        <Image
          source={require(category.imgSrc)}
          fadeDuration={0}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    </View>
  )
}
