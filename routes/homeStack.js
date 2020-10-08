import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/homeScreen";
import Conditions from "../screens/conditionsScreen";
import Header from '../components/header';

const { Navigator, Screen } = createStackNavigator();

export default HomeStack = ({ navigation }) => (
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
    <Screen 
      name="Home" 
      component={Home}
      options={{ 
        headerTitle: () => <Header navigation={navigation} /> }}
      />
    <Screen 
      name="Conditions" 
      component={Conditions} 
      options={({ route }) => ({ title: route.params.category.title })}/>
  </Navigator>
);

