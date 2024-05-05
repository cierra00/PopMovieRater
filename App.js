import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreLogs(['You are initializing Firebase Auth for React Native without providing AsyncStorage']);
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useState} from 'react';
import AuthContext from './context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { AuthProvider } from './context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 




 
const StackNavigator = ()=>{
  return(
    <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          initialParams={{ setIsLoggedIn }}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          initialParams={{  setIsLoggedIn }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{  setIsLoggedIn }}
        />
      </Stack.Navigator>
      
  )
}
const DrawerNavigator = ()=>{
 return(
  <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitle: '' }} />
          <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ headerTitle: '' }}/>
          <Drawer.Screen name="Profile" component={ProfileScreen}  initialParams={{ setIsLoggedIn }}  options={{ headerTitle: '' }}/>
        <Drawer.Screen name="SignIn" component={SignInScreen}  initialParams={{ setIsLoggedIn }} options={{ headerTitle: '' , drawerItemStyle: {height: 0}}}/>
    </Drawer.Navigator> 
 )
}
  
  return (
  
    <AuthProvider>
      <NavigationContainer>
        
        {!isLoggedIn? <StackNavigator  /> : <DrawerNavigator />
    
    }
    
    </NavigationContainer>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})