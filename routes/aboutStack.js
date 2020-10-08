import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/aboutScreen";
import Header from "../components/header";

const { Navigator, Screen } = createStackNavigator();

export default AboutStack = ({ navigation }) => (
  <Navigator 
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2B7B05',
        height: 80
      },
      headerTitleAlign: 'center'
    }}
    >
    <Screen name="About" component={About} options={{
      headerTitle: () => <Header navigation={navigation} />
    }}/>
  </Navigator>
);

