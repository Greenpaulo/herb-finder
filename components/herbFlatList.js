import React from 'react'
import { Animated, FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import HerbCard from './herbCard';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const y = new Animated.Value(0);
const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
  useNativeDriver: true,
});

export default function herbFlatList({herbs, navigation}) {
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={herbs}
      renderItem={(herb) => (
        <HerbCard herb={herb} y={y} navigation={navigation} />
      )}
      keyExtractor={() => uuidv4()}
      {...{ onScroll }}
    />
  )
}
