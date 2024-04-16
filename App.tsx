import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Details from './app/screens/Details';
import Welcome from './app/screens/Welcome';
import Dashboard from './app/screens/Dashboard';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Sign Up' component={SignUp}/>
      <InsideStack.Screen name='Details' component={Details}/>

    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=> {
    onAuthStateChanged(FIREBASE_AUTH, (user)=> {
      console.log('user', user);
      setUser(user);
    });
  }, []);

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Welcome'
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown:false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}


