import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import herbalistAPI from '../api/theherbalist';
import Condition from '../components/condition';


export default function ConditionsScreen({ route, navigation}) {
  
  const [ conditions, setConditions ] = useState([]);
  
  const { category } = route.params;

  useEffect(() => {
    // Fetch the condition list for the category from The Herbalist API
    const getConditions = async () => {
      const response = await herbalistAPI.get(`/conditions?${category.keyword}`)
      const data = response.data;
      setConditions(data.conditions)
    }

    getConditions();
    return () => {
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={conditions}
        style={styles.conditionList}
        renderItem={({item, index}) => (
          <Condition navigation={navigation} condition={item} color={category.iconColor} />
        )}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31b526',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conditionList: {
    marginTop: 10,
    width: '80%'
  }
});
