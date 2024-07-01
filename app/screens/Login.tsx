import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../screens/constants/COLORS";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../screens/components/Button";
import Header from "../screens/Header";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }

    // Navigate based on password
    if (password === 'addina4study') {
      navigation.navigate('LandingPage');
    } else if (password === 'addina4work') {
      navigation.navigate('TeacherDashboard');
    } else {
      Alert.alert('Invalid password for navigation.'); // Extra check in case passwords are different.
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <>
          <Header />
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginVertical: 12,
                  color: COLORS.black,
                }}
              >
                Hi Welcome Back ! 👋
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                }}
              >
                Hello again you have been missed!
              </Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                }}
              >
                Email address
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor={COLORS.black}
                  keyboardType="email-address"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                }}
              >
                Password
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={!isPasswordShown}
                  style={{
                    width: "100%",
                  }}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 6,
              }}
            >
              <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.primary : undefined}
              />

              <Text>Remember Me</Text>
            </View>

            <Button
              onPress={() => signInWithEmail()}
              title="Login"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            ></View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22,
              }}
            >
              <Text style={{ fontSize: 16, color: COLORS.black }}>
                Don't have an account ?{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Signup")}>
                
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.primary,
                    fontWeight: "bold",
                    marginLeft: 6,
                  }}
                >
                  
                  Register
                </Text>
              </Pressable>
            </View>
          </View>
        </>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
