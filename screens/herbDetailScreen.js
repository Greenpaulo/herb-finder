import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { images } from '../styles/global';


export default function HerbDetailScreen({ route }) {

  
  const { herbInfo } = route.params
  
  console.log('from details', herbInfo)
  console.log(herbInfo.actionsIndications)

  const renderActionsIndications = () => {
    return herbInfo.actionsIndications.map((actInd) => {
      return (
        <View style={styles.actInd}>
          <View>
            <Text>Actions</Text>
            <Text>{actInd.actions}</Text>
          </View>
          <View>
            <Text>Indications</Text>
            {renderIndications(actInd)}
          </View>
        </View>
      )
    })
  }

  const renderIndications = (actInd) => {
    return actInd.indications.map(indication => {
      return (
        <View>
          <Text>{indication}</Text>
        </View>
      )
    })
  }
  
  return (
    <ScrollView style={styles.container}>
      <Image
        source={images.herbs[herbInfo.name]}
        fadeDuration={0}
        style={styles.image}
      />
      <Text>{herbInfo.title}</Text>
      <Text>{herbInfo.name}</Text>
      <View style={styles.actionsIndications}>
        {renderActionsIndications()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {

  },
  actionsIndications: {
    margin: 20
  },
  actInd: {
    margin: 20
  }
});
