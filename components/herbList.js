import React from "react";
import { Animated, FlatList, Text, View, StyleSheet } from "react-native";

import Card from './card'
// import HerbCard from "./herbCard";

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function herbList({herbArray}) {

  console.log('hi')

  // Convert array into obj for flatlist usage
  const herbs = {...herbArray}

  // const y = new Animated.Value(0);
  // const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
  //   useNativeDriver: true,
  // });
  
  return (
    <FlatList
      style={styles.list}
      data={herbs}
      renderItem={(herb, index) => (
        <Card herb={herb[index]} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  list: {
    width: '100%',
    flex: 1
  }
});