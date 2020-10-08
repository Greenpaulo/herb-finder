import React, { useState }  from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryIcon from '../components/categoryIcon';


export default function HomeScreen({ navigation }) {
  
  const [ categories, setCategories ] = useState([
    { title: "Mental/Emotional", keyword: "mental", imgSrc: require("../assets/mental.png"), iconColor: "#9B69AE", width: 85, height: 85, margin: [0,0,5,10] },
    { title: "Skin", keyword: "skin", imgSrc: require("../assets/skin.png"), iconColor: "#F78930", width: 90, height: 90, margin: [0,10,0,0] },
    { title: "Joints/Muscles", keyword: "joints", imgSrc: require("../assets/joints.png"), iconColor: "#D7455C", width: 95, height: 95 },
    { title: 'Throat/Chest', keyword: 'throat', imgSrc: require("../assets/throat.png"), iconColor: "#2193CF", width: 95, height: 95 },
    { title: "Bladder/Urinary", keyword: "bladder", imgSrc: require("../assets/urinary.png"), iconColor: "#85BA48", width: 80, height: 80, margin: [0,0,4,8] },
    { title: "Digestion", keyword: "digestion", imgSrc: require("../assets/digestion.png"), iconColor: "#9B69AE", width: 90, height: 90 },
    { title: "Heart/Circulation", keyword: "heart", imgSrc: require("../assets/heart.png"), iconColor: "#D7455C", width: 90, height: 90, margin: [0,0,0,6] },
    { title: "Head", keyword: "head", imgSrc: require("../assets/head.png"), iconColor: "#F78930", width: 95, height: 95 },
    { title: "Women's Health", keyword: "womens", imgSrc: require("../assets/female.png"), iconColor: "#85BA48", width: 70, height: 70, margin: [0,0,5,10] },
    { title: "Men's Health", keyword: "mens", imgSrc: require("../assets/male.png"), iconColor: "#2193CF", width: 70, height: 70, margin: [0,0,7,0] }
  ]);

  const onPressHandler = (category) => {
    navigation.navigate('Conditions', { category: category })
  }

  return (
    <View style={styles.container}>

      <FlatList 
        contentContainerStyle={styles.iconList}
        data={categories}
        keyExtractor={(item, index) => index}
        renderItem= {( category ) => (
          <CategoryIcon category={category} onPressHandler={onPressHandler}/>
        )}
        numColumns={2}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#31b526',
  },
  iconList: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "space-around",
    alignContent: "space-around",
    alignItems: "center",
  }
});
