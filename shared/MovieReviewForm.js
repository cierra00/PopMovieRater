import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';

export default function MovieReviewForm({setSelectedMovie, selectedMovie, movies, comment, setComment}) {
  return (
    <ScrollView>
        <View style={{ flex: 1 }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Movie Reviews</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedMovie(value)}
        items={movies.map(movie => ({ label: movie.title, value: movie.id }))}
        value={selectedMovie}
        placeholder={{ label: 'Select a movie', value: null }}
        style={pickerSelectStyles}
      />
      <TextInput
        style={styles.textArea}
        multiline
        placeholder="Type in your Review Comments"
        value={comment}
        onChangeText={text => setComment(text)}
      />
      <Pressable style={Buttonstyles.defaultButton}>
        <Text>Submit Review</Text>
      </Pressable>
       </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textArea: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    padding: 10,
  },});
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  const Buttonstyles = StyleSheet.create({
    iosButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    androidButton: {
      backgroundColor: 'green',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    defaultButton: {
      backgroundColor: 'gray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });