import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import Details from "./app/screens/Details";
import Welcome from "./app/screens/Welcome";
import Dashboard from "./app/screens/Dashboard";
import { useEffect, useState } from "react";
import LandingPage from "./app/screens/LandingPage";
import UserProfile from "./app/screens/UserProfile";
import ActivityPage from "./app/screens/ActivityPage";
import 'react-native-url-polyfill/auto'
import { supabase } from './app/lib/supabase'
import Auth from './app/components/Auth'
import Account from './app/components/Account'
import { Session } from '@supabase/supabase-js'
import Flashcards from "./app/screens/flashcards/Flashcards";
import FC_LandingPage from "./app/screens/flashcards/FC_LandingPage";
import SS_LandingPage from "./app/screens/slideshows/SS_LandingPage";
import ES_LandingPage from "./app/screens/experiment/ES_startexperiment";
import ES_procedure from "./app/screens/experiment/ES_procedure";
import ES_startexperiment from "./app/screens/experiment/ES_startexperiment";
import ES_experimentdetails from "./app/screens/experiment/ES_experimentdetails";
import AddFC from "./app/screens/admin/AddFC";
import TeacherContent from "./app/screens/admin/TeacherContent";
import AddSS from "./app/screens/admin/AddSS";
import TeacherDashboard from "./app/screens/admin/TeacherDashboard";
import ByClass from "./app/screens/admin/ByClass";
import ByTopic from "./app/screens/admin/ByTopic";
import AddES from "./app/screens/admin/AddES";
import ExperimentScreen from "./app/screens/experiment/ExperimentScreen";


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityPage"
          component={ActivityPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Flashcards"
          component={Flashcards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="openFlashcards"
          component={FC_LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="openSlideshows"
          component={SS_LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="openExperiment"
          component={ES_experimentdetails}
          options={{headerShown:false}}
          />
          <Stack.Screen 
          name="startExperiment"
          component={ES_startexperiment}
          options={{headerShown:false}}
          />
          <Stack.Screen 
          name="procedure"
          component={ES_procedure}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="AddFC"
          component={AddFC}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="TeacherContent"
          component={TeacherContent}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="AddSS"
          component={AddSS}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="AddES"
          component={AddES}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="TeacherDashboard"
          component={TeacherDashboard}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="ByClass"
          component={ByClass}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="ByTopic"
          component={ByTopic}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="ExperimentScreen"
          component={ExperimentScreen}
          options={{headerShown:false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


