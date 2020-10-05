import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

export default function Category({ category, onPressHandler }) {
  // console.log(category.item.imgSrc)
  
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => onPressHandler(category.item)}>
        <Image
          source={category.item.imgSrc}
          fadeDuration={0}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 150,
    height: 150,
    // display: "inline",
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 150/2,
    marginVertical: 15,
    marginHorizontal: 15
  },
});
