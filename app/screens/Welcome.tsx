import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "./constants/COLORS";
import Button from "./components/Button";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";

const Welcome = ({ navigation }: any) => {
  return (
    <>
      <Header />
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 100,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              New user?
            </Text>
          </View>

          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            style={{
              marginTop: 22,
              width: "100%",
              backgroundColor: COLORS.primary,
              color: COLORS.white,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              Already have an account?
            </Text>
          </View>
          <View>
            <Button
              title="Login"
              onPress={() => navigation.navigate("Login")}
              style={{
                marginTop: 22,
                width: "100%",
                backgroundColor: COLORS.primary,
                color: COLORS.white,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;
