import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/homeScreen";
import Conditions from "../screens/conditionsScreen";

const { Navigator, Screen } = createStackNavigator();

export default HomeStack = () => (
  <Navigator headerMode="screen">
    <Screen name="Home" component={Home} />
    <Screen name="Conditions" component={Conditions} />
  </Navigator>
);

