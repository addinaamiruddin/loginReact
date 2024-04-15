import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from './constants/COLORS'
import Button from './components/Button';
import Checkbox from "expo-checkbox"
import { Ionicons } from "@expo/vector-icons";
import Header from './Header';

interface RouterProps {
    navigation : NavigationProp<any, any>
}

const SignUp = ({navigation}:any) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center'
    }})

    const [isChecked, setIsChecked] = useState(false);
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <><Header />
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, marginHorizontal: 22 }}>

          <View style={{ marginBottom: 12 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 8
            }}>Name</Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Enter your name'
                placeholderTextColor={COLORS.black}
                keyboardType='email-address'
                style={{
                  width: "100%"
                }} />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 8
            }}>Email address</Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Enter your email address'
                placeholderTextColor={COLORS.black}
                keyboardType='email-address'
                style={{
                  width: "100%"
                }} />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 8
            }}>Password</Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Enter your password'
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%"
                }} />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}

              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 8
            }}>4-Pin Security Number</Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Enter your 4-pin number'
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%"
                }} />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}

              </TouchableOpacity>
            </View>
          </View>

          <Button
            title="Sign Up"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }} />

          <View style={{ flexDirection: "row", justifyContent: "flex-start", marginVertical: 15 }}>
            <Pressable
              onPress={() => navigation.navigate("Login")} //to update
            >
              <Text style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}>Forgot Password?</Text>
            </Pressable>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Text style={{ fontSize: 16, color: COLORS.black, marginLeft: 6, marginBottom:100 }}>Already have an account?</Text>
            <Pressable
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}>Login Here!</Text>
            </Pressable>
          </View>

        </View>
      </SafeAreaView></>
      </ScrollView>
      
    )
};

export default SignUp;