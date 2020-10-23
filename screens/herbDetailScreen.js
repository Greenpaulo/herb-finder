import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { images } from '../styles/global';


export default function HerbDetailScreen({ route }) {
  
  const { herbInfo } = route.params
  
  const renderActionsIndications = () => {
    return herbInfo.actionsIndications.map((actInd) => {
      return (
        <View style={styles.actInd} key={uuidv4()}>
          <View style={styles.actionsContainer}>
            <Text style={[styles.textWhite, styles.heading]}>Actions</Text>
            <Text style={[styles.textWhite, styles.actions]}>{actInd.actions}</Text>
          </View>
          <View style={styles.indicationsContainer}>
            <Text style={[styles.textWhite, styles.heading]}>Indications</Text>
            {renderIndications(actInd)}
          </View>
        </View>
      )
    })
  }

  const renderIndications = (actInd) => {
    return actInd.indications.map(indication => {
      return (
        <View key={uuidv4()}>
          <Text style={[styles.textWhite, styles.indications]}>{indication}</Text>
        </View>
      )
    })
  }

  const renderContraIndicationList = () => {
    if (herbInfo.contraIndications !== null &&
      herbInfo.contraIndications !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text style={styles.sectionHeading}>Contra-indications</Text>
          {renderContraIndications()}
        </View>
      )
    }
  }
  
  
  const renderContraIndications = () => {
    return herbInfo.contraIndications.map((contraIndication) => {
      return <Text style={styles.paragraph} key={uuidv4()}>{contraIndication}</Text>
    })
  }

  const renderSafety = () => {
    if (herbInfo.safety !== null &&
      herbInfo.safety !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text style={styles.sectionHeading}>Safety </Text>
          <Text style={styles.paragraph}>{herbInfo.safety}</Text>
        </View>
      )
    }
  }

  const renderDosage = () => (
    <View style={styles.otherInfoSection}>
      <Text style={styles.sectionHeading}>Dosage</Text>
      <Text style={styles.paragraph}>{herbInfo.dosage}</Text>
    </View>
  )

  const renderBotanicalDescription = () => {
    if (herbInfo.botanicalDescription !== null &&
      herbInfo.botanicalDescription !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text style={styles.sectionHeading}>Botanical Description </Text>
          <Text style={styles.paragraph}>{herbInfo.botanicalDescription}</Text>
        </View>
      )
    }
  }

  const renderClinicalTrials = () => {
    if (herbInfo.clinicalTrials !== null &&
      herbInfo.clinicalTrials !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text style={styles.sectionHeading}>Clinical Trials</Text>
          {renderTrial()}
        </View>
      )
    }
  }

  const renderTrial = () => {
    return herbInfo.clinicalTrials.map((trial) => {
      return <Text style={styles.paragraph} key={uuidv4()}>{trial}</Text>
    })
  }

  const renderExternalUsage = () => {
    if (herbInfo.externalUsage !== null &&
      herbInfo.externalUsage !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text style={styles.sectionHeading}>External Usage</Text>
          {renderUsage()}
        </View>
      )
    }
  }

  const renderUsage = () => {
    return herbInfo.externalUsage.map((usage) => {
      return <Text style={styles.paragraph} key={uuidv4()}>{usage}</Text>
    })
  }

  const renderEnergeticUsage = () => {
    if (herbInfo.energeticUsage !== null &&
      herbInfo.energeticUsage !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text style={styles.sectionHeading}>Other Traditional Usage</Text>
          {renderTradition()}
        </View>
      )
    }
  }

  const renderTradition = () => {
    return herbInfo.energeticUsage.map((usage) => {
      return <Text style={styles.paragraph} key={uuidv4()}>{usage}</Text>
    })
  }

  
  
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      centerContent={true}
    >
      <View style={styles.imageContainer}>
        <Image
          source={images.herbs[herbInfo.name]}
          fadeDuration={0}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{herbInfo.title}</Text>
        <Text style={styles.name}>{herbInfo.name}</Text>
      </View>
      <View style={styles.actionsIndicationsSection}>
        {renderActionsIndications()}
      </View>
      <View style={styles.otherInfo}>
        <View>
          {renderContraIndicationList()}
          {renderSafety()}
          {renderDosage()}
          {renderBotanicalDescription()}
          {renderClinicalTrials()}
          {renderExternalUsage()}
          {renderEnergeticUsage()}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  imageContainer: {
    marginVertical: 20
  },

  image: {
    height: 240,
    width: 240,
    borderRadius: 240 / 2
  },

  titleContainer:{
    width: '100%'
  },

  title: {
    fontFamily: 'lato-bold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10
  },

  name: {
    fontFamily: 'lato-bold',
    fontSize: 24,
    textAlign: 'center',
  },

  actionsIndicationsSection: {
    marginVertical: 20,
    backgroundColor: '#31b526',
  },

  actInd: {
    marginHorizontal: 40,
    marginVertical: 20,
    // borderBottomWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#fff',
    // paddingBottom: 20
  },

  actionsContainer: {
    marginBottom: 20,
    color: '#fff'
  },

  indicationsContainer: {

  },

  actions: {
    fontSize: 16,
    lineHeight: 26
  },

  indications: {
    lineHeight: 20,
    marginBottom: 10
  },

  textWhite: {
    color: 'white'
  },

  heading: {
    fontFamily: 'lato-bold',
    fontSize: 24,
    marginBottom: 10
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10
  },

  otherInfoSection: {
    marginVertical: 20,
    marginHorizontal: 40,
  },

  sectionHeading: {
    fontSize: 22,
    fontFamily: 'lato-bold',
    marginBottom: 10
  }
});
