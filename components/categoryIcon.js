import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

export default function Category({ category, onPressHandler }) {
  // console.log(category.item.imgSrc)

  const iconBackground = {
    backgroundColor: category.item.iconColor
  }

  const iconSize = () => {
     return (category.item.margin ? 
    {
      width: category.item.width,
      height: category.item.height,
      marginTop: category.item.margin[0],
      marginRight: category.item.margin[1],
      marginBottom: category.item.margin[2],
      marginLeft: category.item.margin[3]
    }
    :
    {
      width: category.item.width,
      height: category.item.height,
    })
  }
  
  return (
    <View style={[styles.iconContainer, iconBackground]}>
      <TouchableOpacity onPress={() => onPressHandler(category.item)}>
        <Image
          source={category.item.imgSrc}
          fadeDuration={0}
          style={[styles.icon, iconSize()]}
        />
        <Text style={styles.iconText}>{category.item.title}</Text>
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
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  // icon: {
  //   marginRight: 
  // },

  iconText: {
    color: "white",
    textAlign: "center",
    fontSize: 12.5,
    marginBottom: 10
  }
});
