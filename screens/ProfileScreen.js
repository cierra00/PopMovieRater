import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function ProfileScreen({navigation, route}) {
   
  return (
    <Text>Test</Text>
  //   <Tab.Navigator>
        
  //           <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
  //           <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
  //       </Tab.Navigator>
   )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})