import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen";
import ConditionsScreen from "../screens/conditionsScreen";
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
      component={HomeScreen}
      options={{ 
        headerTitle: () => <Header navigation={navigation} title='Herb Finder' />}}
      />
    <Screen 
      name="Conditions" 
      component={ConditionsScreen} 
      options={({ route }) => (
        { title: route.params.category.title,
          headerTintColor: '#fff' 
        }
      )}/>
  </Navigator>
);

