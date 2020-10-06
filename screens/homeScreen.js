import React, { useState }  from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import CategoryIcon from '../components/categoryIcon';


export default function HomeScreen({ navigation }) {
  
  const [ categories, setCategories ] = useState([
    { title: "Mental/Emotional", keyword: "mental", imgSrc: require("../assets/mental.png"), iconColor: "#9B69AE", width: 100, height: 100 },
    { title: "Skin", keyword: "skin", imgSrc: require("../assets/skin.png"), iconColor: "#F78930", width: 75, height: 75 },
    { title: "Joints/Muscles", keyword: "joints", imgSrc: require("../assets/joints.png"), iconColor: "#D7455C", width: 100, height: 100 },
    { title: 'Throat/Chest', keyword: 'throat', imgSrc: require("../assets/throat.png"), iconColor: "#2193CF", width: 100, height: 100 },
    { title: "Bladder/Urinary", keyword: "bladder", imgSrc: require("../assets/urinary.png"), iconColor: "#F78930", width: 100, height: 100 },
    { title: "Digestion", keyword: "digestion", imgSrc: require("../assets/mental.png"), iconColor: "##D7455C", width: 100, height: 100 },
    { title: "Heart/Circulation", keyword: "heart", imgSrc: require("../assets/mental.png"), iconColor: "#D7455C", width: 100, height: 100 },
    { title: "Head", keyword: "head", imgSrc: require("../assets/mental.png"), iconColor: "#F78930", width: 100, height: 100 },
    { title: "Women's Health", keyword: "womens", imgSrc: require("../assets/mental.png"), iconColor: "#F78930", width: 100, height: 100 },
    { title: "Men's Health", keyword: "mens", imgSrc: require("../assets/mental.png"), iconColor: "#F78930", width: 100, height: 100 },
    { title: "Children/Babies", keyword: "children", imgSrc: require("../assets/mental.png"), iconColor: "#F78930", width: 100, height: 100 }
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
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    backgroundColor: '#31b526',
    // paddingHorizontal: 20,
    // paddingTop: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // scrollView: {
  //   width: "100%",
  //   flex: 1,
  //   flexDirection: "row",
  //   backgroundColor: "black"
  // }
  iconList: {
    // flex: 1,
    // flexDirection: "row"
    width: "100%",
    // paddingLeft: 20,
    paddingTop: 20,
    justifyContent: "space-around",
    alignContent: "space-around",
    alignItems: "center",
    // backgroundColor: "black"
  }
});
