import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/homeScreen";
import Conditions from "../screens/conditionsScreen";

const { Navigator, Screen } = createStackNavigator();

export default HomeStack = () => (
  <Navigator headerMode="screen">
    <Screen 
      name="Home" 
      component={Home}
      options={{ title: "Herb Finder"}} 
      />
    <Screen 
      name="Conditions" 
      component={Conditions} 
      options={({ route }) => ({ title: route.params.category.title })}/>
  </Navigator>
);

