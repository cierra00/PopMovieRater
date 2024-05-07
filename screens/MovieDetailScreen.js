import { StyleSheet, Text, View, Image,ScrollView, Pressable, TextInput, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import {db} from '../firebase';
import {collection, addDoc, getDocs} from 'firebase/firestore';

export default function MovieDetailScreen({route}) {
  const {title,  overview, releaseDate, backdropPath, movieId, } = route.params;
  const [heartPressed, setHeartPressed] = useState(false);
  const [review, setReview] = useState('');
  const [reviewList, setReviewList] = useState([])
  const favCollectionRef = collection(db, "movies");
  const reviewCollectionRef = collection(db, "reviews");

  const handleContainerPress = () => {
    Keyboard.dismiss(); 
  };
  const handleFavorite =(e)=>{
        e.preventDefault();
        console.log('Favorite Pressed')
       if(!heartPressed){
        setHeartPressed(true);
        createFavorite();
       } else{
        setHeartPressed(false);
       }
  }
  const handleReview =(e)=>{
    e.preventDefault();
    console.log('review submited');
    createReview();
    setReview('');
    alert('Review Submited')
  }
  const createFavorite = async () =>{
    try{
      await addDoc(favCollectionRef, {movieId: movieId, 
        title: title, 
      imgPath: `https://image.tmdb.org/t/p/w500/${backdropPath}`, overview: overview,
      favorite: true 
    });
    }catch(err){console.error(err)}
  }
  const createReview = async () =>{
    try{
      await addDoc(reviewCollectionRef, {
        movieId: movieId, 
        title: title,  
        review: review      
    })
    } catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    const getReviewList = async () => {
      try {
        const data = await getDocs(reviewCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, // Assuming you want to include the document ID
        }));
        setReviewList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
  
    getReviewList();
  }, [reviewList]);

  return (
    <ScrollView >
     <View style={styles.container} onPress={handleContainerPress}>
     <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${backdropPath}` }}
            style={styles.poster}
          />
          <Text style={styles.Headertext}>{title}</Text>
          <Text style={styles.text}>{overview}</Text>
          <Pressable  style={styles.heart} onPress={handleFavorite}>{heartPressed?  <Fontisto name="heart" size={24} color="red" /> :<FontAwesome6 name="heart" size={24} color="red" />}</Pressable>
         
          <Text style={styles.reviewHeader}>Add Review</Text>
          <TextInput 
          placeholder='Add Your Review'
          multiline
          numberOfLines={10}
          value={review}
          onChangeText={setReview}
          style={styles.input}
          />
          <Pressable title="Submit Review" onPress={handleReview}  style={styles.button} >
            <Text style={styles.inputText}>
              Submit Review
            </Text>
          </Pressable>
          
          
     </View>
     <View style={{flex: 1, flexDirection: 'column', marginTop: 50, marginBottom: 40}}>
      <Text style={styles.reviewText}>{`Movie Reviews for: ${title}`}</Text>
     {reviewList && (
      reviewList.map((review, index) => { 
       if(movieId === review.movieId){
    return (      
     
     <View style={styles.review} key={index}>    
        <Text style={styles.reviewContent}>Review:</Text>
        <Text>{review.review}</Text>             
      </View> 
      
    );}
  })
)
}
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
   height: 500,
  },
  poster: {   
   resizeMode:'cover',
    width: '100%',
   height: '50%',
  
  },
  Headertext:{fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
text:{ width: '80%', marginTop: 10},
reviewHeader:{
  fontWeight: 'bold', marginTop: 30,
},
heart:{
  marginTop: 30,
},
input: {
  marginBottom: 20,
  width: 350,
  padding: 10,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  height: 50
  
},
button: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#4285F4',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginBottom: 50,
  minWidth: '70%',
  textAlign: 'center',
  justifyContent: 'center',
 
  height: 50,
  color: '#fff'

},
inputText: {
  color: '#fff',
  fontWeight: 'bold'
},
review:{
  marginTop: 70,
  flexDirection: 'row',
  marginLeft: 10
},
reviewText: {marginTop: 100, fontWeight: 'bold', paddingLeft: 20},
reviewContent: {
  fontWeight: 'bold',
  flexDirection: 'row',
  marginRight: 10,
  paddingHorizontal: 15,
}
})