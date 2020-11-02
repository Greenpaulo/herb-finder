import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const actionList = ({herbInfo}) => {

  // console.log('prop', herbInfo)

  const getActions = () => {
    if (Object.keys(herbInfo).length !== 0 && herbInfo.constructor === Object){
      // console.log('info', herbInfo)
      const actions = [];
      herbInfo.actionsIndications.map((actInd) => {
        actions.push(actInd.actions)
      })
      // console.log('actions', actions);
      const mainActions = actions[0].split(", ", 3);
      console.log(mainActions)
      return mainActions.map( action => (
        <Text style={styles.action}>{action}</Text>
      ))
      // return mainActions;

    }
  }
   getActions()
  
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
    fontWeight: 'bold'
  }
});
    

export default actionList;
