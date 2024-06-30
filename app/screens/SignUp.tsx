import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./components/Button";
import COLORS from "./constants/COLORS";
import Header from "./Header";
import { supabase } from "../lib/supabase";

interface SignUpProps {
  navigation: NavigationProp<any, any>;
}

const SignUp = ({ navigation }: SignUpProps) => {

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.log(error);
        alert("Sign-up failed: " + error.message);
      } else {
        alert("Sign-up successful.");
        // Navigate to the LandingPage upon successful sign-up
        navigation.navigate("LandingPage");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
      <>
        <Header />
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
                Name
              </Text>

              <View style={{ width: "100%", height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: "center", justifyContent: "center", paddingLeft: 22 }}>
                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor={COLORS.black}
                  style={{ width: "100%" }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
                Email address
              </Text>

              <View style={{ width: "100%", height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: "center", justifyContent: "center", paddingLeft: 22 }}>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor={COLORS.black}
                  keyboardType="email-address"
                  style={{ width: "100%" }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
                Password
              </Text>

              <View style={{ width: "100%", height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: "center", justifyContent: "center", paddingLeft: 22 }}>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={!isPasswordShown}
                  style={{ width: "100%" }}
                />

                <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={{ position: "absolute", right: 12 }}>
                  {isPasswordShown ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <Button
              title="Sign Up"
              onPress={signUp}
              filled
              style={{ marginTop: 18, marginBottom: 4 }}
            />

            <View style={{ flexDirection: "row", justifyContent: "flex-start", marginVertical: 15 }}>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "bold", marginLeft: 6 }}>
                  Forgot Password?
                </Text>
              </Pressable>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              <Text style={{ fontSize: 16, color: COLORS.black, marginLeft: 6, marginBottom: 100 }}>
                Already have an account?
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "bold", marginLeft: 6 }}>
                  Login Here!
                </Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};

export default SignUp;
