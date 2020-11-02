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

  const [ herbInfo, setHerbInfo ] = useState({})

  useEffect(() => {
    // Make API request to fetch the herb info
    const getHerbInfo = async () => {
      const response = await herbalistAPI.get(`/herb/?${herb.item.replace(/\W/g, '')}`);
      const data = response.data;
      setHerbInfo(data)
    }
    getHerbInfo();
  }, [])

  // console.log(herbInfo.actionsIndications)

  

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
        <Text style={[styles.name, globalStyles.boldText]}>{herbInfo.name}</Text>
        <Text style={styles.title}>{herbInfo.title}</Text>
        {/* <Text style={styles.dosage}>{herbInfo.dosage}</Text> */}
        <ActionList herbInfo={herbInfo}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    paddingVertical: 40,
    paddingHorizontal: 25,
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
    borderRadius: 120/2
  },
  info: {
    marginLeft: 40,
  },
  name: {
    fontSize: 22,
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
