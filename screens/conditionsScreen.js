import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
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

  if ( conditions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  } else {
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
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31b526',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: "white",
    fontSize: 22 
  },
  conditionList: {
    marginTop: 10,
    width: '80%'
  }
});
