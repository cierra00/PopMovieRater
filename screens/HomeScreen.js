import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import ReviewScreen from '../screens/ReviewScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '../screens/MovieListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';


const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation, route}) {
   
  return (
    <Tab.Navigator>        
            <Tab.Screen name="Movies" component={MovieListScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="AddReview" component={ReviewScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})