import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.text}>Hi, I'm Paul Bingham - A Web Developer and a Herbalist!</Text>
        <Text style={styles.text}>This mobile app was made to help people quickly find the herbs they need. It is built with React Native.</Text>
      </View>
        
      <Text style={styles.linksTitle}>Links</Text>
      
      <View style={styles.links}>
        
        <View style={styles.leftLink}>
          <TouchableOpacity onPress={() => Linking.openURL('https://blissful-sinoussi-d8e11c.netlify.app/')}>
            <Image 
              source={require('../assets/portfolio.png')}
              fadeDuration={0}
              style={styles.image}
              
            />
          </TouchableOpacity>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://blissful-sinoussi-d8e11c.netlify.app/')}>
            Portfolio
          </Text>
        </View>
        
        <View style={styles.rightLink}>
          <TouchableOpacity onPress={() => Linking.openURL('https://morning-depths-36159.herokuapp.com/')}>
            <Image
              source={require('../assets/the_herbalist.png')}
              fadeDuration={0}
              style={styles.image}
              
            />
          </TouchableOpacity>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://morning-depths-36159.herokuapp.com/')}>
            The Herbalist
          </Text>
        </View>
        
        <View style={styles.leftLink}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.journeytodev.org/')}>
            <Image
              source={require('../assets/journey_to_dev.png')}
              fadeDuration={0}
              style={styles.image}
              
            />
          </TouchableOpacity>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.journeytodev.org/')}>
            Journey To Dev
          </Text>
        </View>
        
        <View style={styles.rightLink}>
          <TouchableOpacity onPress={() => Linking.openURL('https://code-tunes.herokuapp.com/')}>
            <Image
              source={require('../assets/codetunes.png')}
              fadeDuration={0}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://code-tunes.herokuapp.com/')}>
            CodeTunes
          </Text>
        </View>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31b526',
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
    lineHeight: 28
  },
  links: {
    flex: 1,
    marginTop: 20,
    marginBottom: 45
  },
  linksTitle: {
    fontSize: 24,
    color: 'white',
    marginTop: 40,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  leftLink: {
    // flex: 1,
    height: 100,
    flexDirection: 'row',
    marginTop: 20,
    // alignItems: 'center'
  },
  rightLink: {
    // flex: 1,
    height: 100,
    flexDirection: 'row-reverse',
    marginTop: 20,
    // alignItems: 'center'
  },
  image: {
    maxWidth: 130,
    maxHeight: 130,
    borderRadius: 130/2,
    // overflow: 'hidden',
    // borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'purple'
  },
  linkText: {
    fontSize: 20,
    color: 'white',
    paddingVertical: 30,
    marginTop: 15,
    paddingHorizontal: 20 
  }
});
