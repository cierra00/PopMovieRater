import {createContext, useState, useEffect} from 'react';
import { createUserWithEmailAndPassword, signIn, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../firebase'; 
const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser]= useState(null);
  const [userId, setUserId] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('')
  


  const handleContainerPress = () => {
    Keyboard.dismiss(); 
  };

  const onSignIn = async () => {
    // e.preventDefault();
    try {
      await signIn(email, password);
      setEmail("");
      setPassword(""); 
      const currentUser = auth.currentUser;
      setUserId(currentUser.uid);  
      if(userId != undefined){
        console.log(`userIds: ${currentUser.uid}`); 
      }
     
    } catch (err) {
      console.error('Sign in failed:', err);
    }
  }
  
  const onForgotPassword = async (e)=>{
    e.preventDefault();
   try{
    await sendPasswordResetEmail(resetEmail);   
    setResetEmail(""); 
    console.log('forgot password pressed');
   } catch(err){
    console.error(err);
   }
  
  }
 
  
  const googleSignIn = () =>{
    // const signInWithGoogle =()=>{
    //   console.log(' google sign in pressed pressed');
    // }
    console.log('Google SignIn Fired')
  }
  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }

 const updateUser =  async(name, email)=>{
    return updateProfile(auth.currentUser, {
        name, email, displayName: name, 
    }).then(()=>{
        console.log(auth.currentUser.displayName, auth.currentUser.email)
    })
 }
 const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
   
 }

 const logOut = ()=>{
    return signOut(auth);
 }

/* Regeister Form*/



const onRegister = async ()=>{
 
  

  const data = {registerEmail, registerPassword, confirmPassword}
  console.log(data);
 if(registerPassword === confirmPassword){
  try{
    await createUser(registerEmail, registerPassword).then((userInfo)=>{
      const user = userInfo.user;
      console.log("test")
    })
    
    setRegisterEmail("")
    setRegisterPassword("")
   console.log('test')
    setConfirmPassword("")
   }
   catch(err){
    console.error(err);
   }
 } else {
  console.log(registerPassword);
  console.log(setConfirmPassword);
 }
}  

/* Reset Password */

const onReset = ()=>{
  console.warn('Password Requested');
}
const onReturn = ()=>{
  console.warn('Go back to Login');
}    
const getUser = ()=>{
  return auth.currentUser;
}



  

    return <AuthContext.Provider value={{handleContainerPress,
email, setEmail, password, setPassword, user, setUser, registerEmail, setRegisterEmail, googleSignIn,
confirmPassword, setConfirmPassword, resetEmail,setRegisterEmail, onSignIn, onForgotPassword, 
 updateUser, logOut, onRegister, onAuthStateChanged, onRegister, onReturn, onReset, signIn, getUser,
  registerPassword, setRegisterPassword
    }}>{children}</AuthContext.Provider>
}

export default AuthContext;