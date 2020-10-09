import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import herbalistAPI from '../api/theherbalist';

export default function HerbCard({ herb }) {

  console.log('from herbCard', herb)

  const getHerbInfo = async () => {
    const response = await herbalistAPI.get('/herb/')
  }


  return (
    <View>
      <Text>Hello from herbCard</Text>
    </View>
  )
}
