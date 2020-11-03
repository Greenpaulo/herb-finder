import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const actionList = ({herbInfo}) => {

  const genKey = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return `${herbInfo.name}-${randomNumber}`
  };
  
  const getActions = () => {
    if (Object.keys(herbInfo).length !== 0 && herbInfo.constructor === Object){
      const actions = [];
      herbInfo.actionsIndications.map((actInd) => {
        actions.push(actInd.actions)
      })
      const mainActions = actions[0].split(", ", 3);
      return mainActions.map( action => (
        <Text style={styles.action} key={genKey()}>{action}</Text>
      ))
    }
  }
  
  return (
    <View style={styles.actions}>
      <Text style={styles.heading}>Actions:</Text>
      <View>{getActions()}</View>
    </View>
  )
};

const styles = StyleSheet.create({
  actions: {
    marginTop: 15,
    width: '100%'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
    

export default actionList;
