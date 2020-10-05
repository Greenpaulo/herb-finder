import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/aboutScreen";

const { Navigator, Screen } = createStackNavigator();

export default AboutStack = () => (
  <Navigator headerMode="screen">
    <Screen name="About" component={About} />
  </Navigator>
);

