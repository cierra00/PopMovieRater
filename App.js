import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useState} from 'react';
import AuthContext from './context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { AuthProvider } from './context/AuthContext';

const Drawer = createDrawerNavigator();


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  
  return (
  
    <AuthProvider>
      <NavigationContainer>
        {!isLoggedIn? (<SignInScreen  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />): 
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitle: '' }} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ headerTitle: '' }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerTitle: '' }}/>
    </Drawer.Navigator> }
    
    </NavigationContainer>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})