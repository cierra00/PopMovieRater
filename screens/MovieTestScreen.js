import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ProfileScreen from '../screens/ProfileScreen'
import MovieListScreen from '../screens/MovieListScreen'
import MovieDetailScreen from '../screens/MovieDetailScreen'

const Stack = createStackNavigator();

const MovieTestScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieList" component={MovieListScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen}/>      
    </Stack.Navigator>
  );
}

export default MovieTestScreen;