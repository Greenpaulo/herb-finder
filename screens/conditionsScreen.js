import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import herbalistAPI from '../api/theherbalist';

export default function ConditionsScreen({ route, navigation}) {
  
  const [ conditions, setConditions ] = useState([]);
  
  const { category } = route.params;
  
  useEffect(() => {
    // Fetch the condition list for the category from The Herbalist API
    const getConditions = async () => {
      const response = await herbalistAPI.get(`/conditions?${category.keyword}`)
      const data = response.data;
      setConditions(data.conditions)
      console.log('ourDATA', data.conditions[0]);
    }

    getConditions();
    return () => {
    }
  }, [])


  return (
    <View style={styles.container}>
      <FlatList 
        data={conditions}
        renderItem={(condition) => (
          <Text>{condition.item.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
