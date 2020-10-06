import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

export default function Category({ category, onPressHandler }) {
  // console.log(category.item.imgSrc)

  const iconBackground = {
    backgroundColor: category.item.iconColor
  }

  const iconSize = {
    width: category.item.width,
    height: category.item.height
  }
  
  return (
    <View style={[styles.iconContainer, iconBackground]}>
      <TouchableOpacity onPress={() => onPressHandler(category.item)}>
        <Image
          source={category.item.imgSrc}
          fadeDuration={0}
          style={[styles.icon, iconSize]}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150/2,
    marginVertical: 15,
    marginHorizontal: 15
  },
  icon: {
    padding: 10
  }
});
