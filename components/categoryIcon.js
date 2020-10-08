import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Category({ category, onPressHandler }) {
  // console.log(category.item.imgSrc)

  const iconBackground = {
    backgroundColor: category.item.iconColor
  }

  const iconSize = () => {
     if(category.item.margin){
       return {
         width: category.item.width,
         height: category.item.height,
         marginTop: category.item.margin[0],
         marginRight: category.item.margin[1],
         marginBottom: category.item.margin[2],
         marginLeft: category.item.margin[3]
       }
     } else {
       return {
         width: category.item.width,
         height: category.item.height,
       }
     }
  }
  
  return (
    <View style={[styles.iconContainer, iconBackground]}>
      <TouchableOpacity onPress={() => onPressHandler(category.item)}>
        <Image
          source={category.item.imgSrc}
          fadeDuration={0}
          style={[styles.icon, iconSize()]}
        />
        <Text style={[styles.iconText, globalStyles.boldText]}>{category.item.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 160/2,
    marginVertical: 15,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 10,
  },
  // icon: {
  //   marginRight: 
  // },

  iconText: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
    marginBottom: 10,
    // fontFamily: 'lato-bold'
  }
});
