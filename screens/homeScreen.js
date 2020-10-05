import React, { useState }  from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
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

  const onPressHandler = (category) => {
    navigation.navigate('Conditions', { category: category })
  }

  return (
    <View style={styles.container}>

      {/* <ScrollView style={styles.scrollView}>
        {categories.map((category) => {
          return (
            <CategoryIcon key={Math.random()} category={category} onPressHandler={onPressHandler} />
          )
        })}
      </ScrollView> */}

      <FlatList 
        contentContainerStyle={styles.iconList}
        // horizontal={true}
        data={categories}
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
