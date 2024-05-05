import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import ReviewScreen from '../screens/ReviewScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieTestScreen from './MovieTestScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation, route}) {
   
  return (
    <Tab.Navigator>        
            <Tab.Screen name="MovieTest" component={MovieTestScreen} options={{ title: "Movies",tabBarIcon: ({ color, size }) => (
        <Ionicons name="film-outline" color={color} size={size} />
      ),
      headerShown: false }}/>
            <Tab.Screen name="AddReview" component={ReviewScreen} options={{ title: "Reviews", tabBarIcon: ({ color, size }) => (
        <Ionicons name="chatbox-ellipses-outline" color={color} size={size} />
      ),
      headerShown: false}}/>
            <Tab.Screen name="Favorites" navigation={navigation} component={FavoritesScreen} options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="heart-outline" color={color} size={size} />
      ),
      headerShown: false }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})