import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import herbalistAPI from '../api/theherbalist';
import { globalStyles, images } from '../styles/global';
import ActionList from './actionList';

const { width } = Dimensions.get("window");
// const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.9;
// export const CARD_HEIGHT = CARD_WIDTH * ratio;
export const CARD_HEIGHT = CARD_WIDTH * 0.6;


export default function HerbCard({ herb, navigation }) {

  // herbs[herbInfo.name]
  // console.log(herb.item.replace(/\W/g, ''))
  
  const getHerbParam = () => {
    const capitalizeFn = /(\b[a-z](?!\s))/g;
    // Replace dashes with spaces
    let herbParam = herb.item.replace(/-/g, ' ');
    // Capitalize the first letter of each word
    herbParam = herbParam.replace(capitalizeFn, function (x) { return x.toUpperCase(); });
    // Remove any spaces
    herbParam = herbParam.replace(/\W/g, '');
    // console.log('herbParam', herbParam);
    return herbParam;
  }
  
  const [ herbInfo, setHerbInfo ] = useState({})
  console.log(herbInfo.name)

  useEffect(() => {
    // Make API request to fetch the herb info
    const getHerbInfo = async () => {
      const response = await herbalistAPI.get(`/herb/?${getHerbParam()}`);
      const data = response.data;
      setHerbInfo(data)
      console.log(data)
    }
    getHerbInfo();
  }, [])

  const getSeperatedName = (name) => {
    // Need to shorten OregonGrapeRoot - too long for card
    if (name === 'OregonGrapeRoot') {
      name = 'OregonGrape'
    }
    if (name !== undefined) {
      // Add a space between capital letters
      return name.replace(/([A-Z])/g, ' $1').trim();
    }
  }

  const onPressHandler = () => {
    navigation.navigate('HerbDetails', {herbInfo : herbInfo})
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPressHandler}>
      <Image
        source={images.herbs[herbInfo.name]}
        fadeDuration={0}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={[styles.name, globalStyles.boldText]}>{getSeperatedName(herbInfo.name)}</Text>
        <Text style={styles.title}>{herbInfo.title}</Text>
        <ActionList herbInfo={herbInfo}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    paddingVertical: 30,
    paddingHorizontal: 20,
    // margin: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderRadius: 10,
    backgroundColor: '#eee',
    // flex: 1,
    flexDirection: 'row'
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 120/2,
    marginTop: 10
  },
  info: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    marginLeft: 2
  },
  dosage: {
    width: 100
  }
});
