import { StyleSheet, Text, View, Image, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
import React,{useContext} from 'react'
import CustomInput from '../shared/CustomInput';


export default function SignUpScreen() {

  return (
    <KeyboardAvoidingView style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.main}>
       <Text style={styles.title}>Create account</Text>     
       <CustomInput style={styles.input}
      
     
       placeholder='E-mail'/>
       <CustomInput style={styles.input}
       placeholder='password'
      
      
       secureTextEntry={true}/>
      <CustomInput style={styles.input}
       placeholder='Confirm Password'
      
       secureTextEntry={true}/>      
      <Pressable style={styles.button}
     >
        <Text style={styles.text}>Create Account</Text>
      </Pressable>
      </View> 
    </KeyboardAvoidingView>
  )}
const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center',
   },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%'
  },
  bg:{
    width: '100%',
    height: 350
  },
  title: {position: 'relative', 
  fontWeight: 'bold', 
  fontSize: 30, 
  top: 20,
   marginTop: 20, 
   marginBottom: 20,
   marginTop: 100,
},
    button: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#4285F4',
     paddingVertical: 10,
     paddingHorizontal: 20,
     borderRadius: 5,
     marginBottom: 15,
     minWidth: '70%',
     textAlign: 'center',
     justifyContent: 'center'
   },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});