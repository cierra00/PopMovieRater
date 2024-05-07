import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import {Auth, db} from '../firebase';
import {getDocs, collection} from 'firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

export default function FavoritesScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [favList, setFavList] = useState([]);
  const widthPercentage = 0.6; // For example, 80% of the screen width
const width = screenWidth * widthPercentage;
 
  const moviesCollectionRef = collection(db, "movies");
  
  useEffect(() => {
    const getFavList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, // Assuming you want to include the document ID
        }));
        setFavList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
  
    getFavList();
  }, [favList]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites Screen</Text>
      <ScrollView>
  {favList.map((fav, index) => { 
    return (      
     <View style={styles.item} key={index}>     
          <Image
                  source={{ uri: fav.imgPath }}
                  style={styles.poster}
          />
          <View style={{flexDirection: 'column', width: width}}>            
          <Text style={styles.title}>{fav.title}</Text>
          <Text style={styles.text}>{fav.overview}</Text></View>       
      </View>
  
      
    );
  })}
</ScrollView>
    </View>
  )
}

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
    textAlign: 'center',
    marginBottom: 20,
  },
  text:{
    fontSize: 16,
  }
});
