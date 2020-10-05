import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CategoryIcon from '../components/categoryIcon';


export default function HomeScreen({ navigation }) {
  
  const [ categories, setCategories ] = useState([
    { title: "Mental/Emotional", keyword: "mental", imgSrc: require("../assets/mental.png") },
    { title: "Skin", keyword: "skin", imgSrc: require("../assets/mental.png") },
    { title: "Joints/Muscles", keyword: "joints", imgSrc: require("../assets/mental.png") },
    { title: "Digestion", keyword: "digestion", imgSrc: require("../assets/mental.png") },
    { title: 'Throat/Chest', keyword: 'throat', imgSrc: require("../assets/mental.png") },
    { title: "Bladder/Urinary", keyword: "bladder", imgSrc: require("../assets/mental.png") },
    { title: "Heart/Circulation", keyword: "heart", imgSrc: require("../assets/mental.png") },
    { title: "Head", keyword: "head", imgSrc: require("../assets/mental.png") },
    { title: "Women's Health", keyword: "womens", imgSrc: require("../assets/mental.png") },
    { title: "Men's Health", keyword: "mens", imgSrc: require("../assets/mental.png") },
    { title: "Children/Babies", keyword: "children", imgSrc: require("../assets/mental.png") }
  ]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <FlatList 
        data={categories}
        renderItem= {({ category }) => (
          <CategoryIcon category={category}/>
        )}
      />

      <Button
        title="Go to Conditions"
        onPress={() => navigation.navigate('Conditions')}
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
