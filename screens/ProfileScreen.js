import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Pressable, Alert} from 'react-native';
import CustomInput from '../shared/CustomInput';
import AuthContext from '../context/AuthContext';
import {auth} from '../firebase';
import { updateCurrentUser } from 'firebase/auth';

const ProfileScreen = ({navigation, route}) => {
  const {setIsLoggedIn} = route.params;
  const {user, logOut} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  
const OnLogout =(e)=>{
e.preventDefault();
logOut();
setIsLoggedIn(false);

}
  const onEdit = async (e)=>{
    e.preventDefault();
    const data = {username, email, displayName} 
    console.log(data);
    try{
      await updateUser(username, email, displayName);
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <KeyboardAvoidingView style={{flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.main}>
     <Text style={styles.title}>Update Profile</Text>   
     
     <CustomInput style={styles.input}
     placeholder='Display Name'    
    />  
     <CustomInput style={styles.input}    
     placeholder='E-mail'/>
     
     <CustomInput style={styles.input}
     placeholder='password'    
     secureTextEntry={true}/>          
    <Pressable style={styles.button}
    onPress={onEdit}>
      <Text style={styles.text}>Update Profile</Text>
    </Pressable>
    <Pressable style={styles.button}
    onPress={()=>  navigation.navigate("Home")}>
      <Text style={styles.text}>Go Back</Text>
    </Pressable>
    <Pressable style={styles.button}
    onPress={OnLogout}>
      <Text style={styles.text}>Logout</Text>
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

export default ProfileScreen;