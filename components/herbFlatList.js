import React from 'react'
import { Animated, FlatList } from 'react-native';
import HerbCard from './herbCard';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const y = new Animated.Value(0);
const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
  useNativeDriver: true,
});

export default function herbFlatList({herbs}) {
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={herbs}
      renderItem={(herb) => (
        <HerbCard herb={herb} y={y} />
      )}
      {...{ onScroll }}
    />
  )
}
