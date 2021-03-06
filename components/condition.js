import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Condition({navigation, condition, color}){

  const bgColor = {
    backgroundColor: color
  }

  const pressHandler = () => {
    navigation.navigate('Herbs', {condition: condition})
  }

  return (
    <TouchableOpacity style={[styles.condition, bgColor]} onPress={pressHandler}>
      <Text style={styles.conditionText}>{condition.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  condition: {
    padding: 30,
    minWidth: '75%',
    marginVertical: 10,
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    // elevation: 10,
  },
  conditionText: {
    color: '#fff',
    fontSize: 20,
  }
});
