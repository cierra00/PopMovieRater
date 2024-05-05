import { StyleSheet, Text, View, Image,ScrollView, Pressable } from 'react-native'
import React, {setState} from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function MovieDetailScreen({route}) {
  const {title, posterPath} = route.params;

  const handleFavorite =(e)=>{
        e.preventDefault();
        
  }
  return (
    <ScrollView >
     <View style={styles.container}>
     <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${posterPath}` }}
            style={styles.poster}
          />
          <Text>{title}</Text>
          <Pressable onPress={handleFavorite}><FontAwesome6 name="heart" size={28} color="red" /></Pressable>
          <Pressable><Fontisto name="heart" size={24} color="red" /></Pressable>
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
  },
  poster: {
   resizeMode:'contain',
    width: 200,
    height: 350,
    marginRight: 10,
  }
})