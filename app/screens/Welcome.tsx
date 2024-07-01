import { View, Text } from "react-native";
import React from "react";
import COLORS from "./constants/COLORS";
import Button from "./components/Button";
import Header from "./Header";

const Welcome = ({ navigation }) => {
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
            onPress={() => navigation.navigate("Signup")}
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
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
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;
