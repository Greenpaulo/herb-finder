import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const actionList = ({herbInfo, herbName}) => {

  const genKey = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return `${herbInfo.name}-${randomNumber}`
  };
  
  const getActions = () => {
    if (Object.keys(herbInfo).length !== 0 && herbInfo.constructor === Object){
      // Check if the herb is Elderberry
      if (herbName=== 'Elderberry') {
        // Get the berry actions from the elder action array
        return generateActions(2);
      }
      return generateActions(0);
    }
  }

  const generateActions = (num) => {
    const actions = [];
    herbInfo.actionsIndications.map((actInd) => {
      actions.push(actInd.actions)
    })
    const mainActions = actions[num].split(", ", 3);
    return mainActions.map(action => {
      // Remove parenthesis description of actions
      if ((action.search("\\(")) !== -1) {
        action = action.split(" (")[0]
      }
      return <Text style={styles.action} key={genKey()}>{action}</Text>
    })
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
    width: '100%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
    

export default actionList;
