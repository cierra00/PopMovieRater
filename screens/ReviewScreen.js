import { StyleSheet, Text, View} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React,{useState, useEffect, useNavigation} from 'react'
import {auth} from '../firebase'; 
import Stars from '../shared/Stars'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MovieDetailScreen from './MovieDetailScreen';

import MovieReviewForm from '../shared/MovieReviewForm';

export default function ReviewScreen({navigation}) {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comment, setComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
 
 
 useEffect(()=> {
 
  fetchPopularMovies();
}, []);

 const fetchPopularMovies = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual TMDb API key
      const API_KEY = 'd8353dcaa6b589573747e5ada48834e6';
 
      // Construct the API request URL
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
 
      // Make the API call using fetch
      const response = await fetch(url);
 
      // Check if the request was successful
      if (response.ok) {
        // Extract movie data from the response
        const data = await response.json();
        const moviesData = data.results.slice(0, 100);
        
        setMovies(moviesData);
       console.log(movies)
      } else {
        console.log('Failed to fetch data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
return (
  <MovieReviewForm  setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie}
  movies={movies} comment={comment} setComment={setComment}  /> 
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 16,
    marginTop: 24,
  }
});
