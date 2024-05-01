import { StyleSheet, Text, View, KeyboardAvoidingView,Platform, TouchableWithoutFeedback, Keyboard,  Pressable, Image, getUser, currentUser } from 'react-native'
import bg from '../assets/login-img.jpg'
import { FontAwesome } from '@expo/vector-icons';
import CustomInput from '../shared/CustomInput';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';





export default function SignInScreen({isloggedIn, setIsLoggedIn}) {

  const {signInWithGoogle, onforgotPassword, onSignIn, onSignUp, email, setEmail, password, setPassword, getUser} = useContext(AuthContext);
// const { userId } = useContext(AuthContext);
const navigation = useNavigation();
  
const handleSignIn = async (e) => {
  e.preventDefault();
  try {
   await onSignIn();
    // navigation.navigate('HomeScreen')
  setIsLoggedIn(true);
  } catch (err) {
    console.error(err);
  }
};
  return (
    <KeyboardAvoidingView style={{flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <View style={styles.main}>       
       <Image source={bg}  style={styles.bg}/>
       <Text style={styles.title}>Movie Rating</Text>
       <Text>{`this is a user: ${currentUser}`}</Text>
      <CustomInput style={styles.input}
      value={email}
      setValue={setEmail}
       placeholder='Email'
      />
       <CustomInput style={styles.input}
       placeholder='Username'
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />
      <Pressable style={styles.button}
      onPress={handleSignIn}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>      
      <Pressable style={styles.button}      
      onPress={signInWithGoogle}>
       <View style={styles.iconContainer}>
       <FontAwesome name="google" size={24} color="white" />
       </View>
       <Text style={styles.text}>Sign in with Google</Text>
      </Pressable>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Pressable onPress={onSignUp}       >
        <Text style={{color: 'purple'}}>Sign Up</Text>
      </Pressable>
      <View style={{width: 20}} />
      <Pressable onPress={onforgotPassword}      >
        <Text style={{color: 'purple'}}>Forgot Password</Text>
      </Pressable>
      </View>      
    </View>   
    </KeyboardAvoidingView>)}
const styles = StyleSheet.create({
    container:{ flex: 1, alignItems: 'center', marginTop: 75},
    bg:{
      width: '60%',
      height: 200,
      marginTop: 130,
    },
    title:{
      fontWeight: 'bold',
      fontSize: 26,
      textAlign: 'center',
      marginTop: 10
    },
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
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  iconContainer: {
    marginRight: 10,
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
  }
})