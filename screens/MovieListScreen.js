import { StyleSheet, Text, View, Image, FlatList} from 'react-native'
import React,{useState, useEffect} from 'react'
import Stars from '../shared/Stars'

export default function MovieListScreen() {

  const [movies, setMovies] = useState('');
  
 
 
 useEffect(()=> {
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
  fetchPopularMovies();
}, []);

return (
  <View style={styles.container}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
      Most Popular Movies
    </Text>
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.item}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
            style={styles.poster}
          />
          <View>
          <Text style={styles.title}>{`${index + 1}. ${item.title}`}</Text>
          <Text>{item.vote_average/2}</Text>
          <Stars />
          
          </View>
          
        
        </View>
      )}
    />
  </View>
);
};


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
  }
});
