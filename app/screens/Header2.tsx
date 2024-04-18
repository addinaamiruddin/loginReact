import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import headerImage from "../screens/assets/header.jpg";
import COLORS from "./constants/COLORS";
import userImage from "../screens/assets/user.png";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Header2 = ({ navigation }) => {
  // const navigation = useNavigation();

  const goToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const goToHome = () => {
    navigation.navigate("LandingPage");
  };

  const titlePart1 = "Bio";
  const titlePart2 = "Engage";

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image source={headerImage} style={styles.image} />

      {/* User Image - Clickable */}
      <TouchableOpacity
        style={styles.userImageContainer}
        onPress={goToDashboard}
      >
        <Image source={userImage} style={styles.userImage} />
      </TouchableOpacity>

      {/* Text Overlay */}
      <View style={styles.textOverlay}>
        <Text style={styles.title} onPress={goToHome}>
          {titlePart1}
          {titlePart2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative", // Ensure the container is relative for absolute positioning
  },
  image: {
    width: "100%", // Take full width of the container
    height: 250, // Adjust height as needed
    resizeMode: "cover",
    marginLeft: 60,
  },
  textOverlay: {
    position: "absolute",
    top: -60,
    left: -90,
    right: 80,
    bottom: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    flexDirection: "row",
    textAlign: "center",
    // fontFamily: "BeVietnamPro-ExtraBold",
  },
  titlePart2: {
    color: COLORS.white,
  },
  userImageContainer: {
    position: "absolute",
    bottom: 140, // Adjust to move the user image vertically
    right: 20, // Adjust to move the user image horizontally
  },
  userImage: {
    width: 65, // Adjust width as needed
    height: 65, // Adjust height as needed
    resizeMode: "cover",
    borderRadius: 25, // Make it a circle
  },
});

export default Header2;
