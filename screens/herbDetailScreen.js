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

  const renderContraIndicationList = () => {
    if (herbInfo.contraIndications !== null &&
      herbInfo.contraIndications !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text>Contra-indications</Text>
          {renderContraIndications()}
        </View>
      )
    }
  }
  
  
  const renderContraIndications = () => {
    return herbInfo.contraIndications.map((contraIndication) => {
      return <Text>{contraIndication}</Text>
    })
  }

  const renderSafety = () => {
    if (herbInfo.safety !== null &&
      herbInfo.safety !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text>Safety </Text>
          <Text>{herbInfo.safety}</Text>
        </View>
      )
    }
  }

  const renderDosage = () => (
    <View style={styles.otherInfoSection}>
      <Text>Dosage</Text>
      <Text>{herbInfo.dosage}</Text>
    </View>
  )

  const renderBotanicalDescription = () => {
    if (herbInfo.botanicalDescription !== null &&
      herbInfo.botanicalDescription !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text>Botanical Description </Text>
          <Text>{herbInfo.botanicalDescription}</Text>
        </View>
      )
    }
  }

  const renderClinicalTrials = () => {
    if (herbInfo.clinicalTrials !== null &&
      herbInfo.clinicalTrials !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text>Clinical Trials</Text>
          {renderTrial()}
        </View>
      )
    }
  }

  const renderTrial = () => {
    return herbInfo.clinicalTrials.map((trial) => {
      return <Text>{trial}</Text>
    })
  }

  const renderExternalUsage = () => {
    if (herbInfo.externalUsage !== null &&
      herbInfo.externalUsage !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text>External Usage</Text>
          {renderUsage()}
        </View>
      )
    }
  }

  const renderUsage = () => {
    return herbInfo.externalUsage.map((usage) => {
      return <Text>{usage}</Text>
    })
  }

  const renderEnergeticUsage = () => {
    if (herbInfo.energeticUsage !== null &&
      herbInfo.energeticUsage !== undefined) {
      return (
        <View style={styles.otherInfoSection}>
          <Text>Other Traditional Usage</Text>
          {renderTradition()}
        </View>
      )
    }
  }

  const renderTradition = () => {
    return herbInfo.energeticUsage.map((usage) => {
      return <Text>{usage}</Text>
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
  },
  otherInfoSection: {
    margin: 20
  }
});
