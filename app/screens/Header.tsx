import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import headerImage from "../screens/assets/header.jpg";
import COLORS from "./constants/COLORS";

const Header = () => {
  const titlePart1 = "Welcome to Bio";
  const titlePart2 = "Engage!";

  return (
    <View style={styles.container}>
      {/* Use the imported image directly */}
      <Image source={headerImage} style={styles.image} />
      <Text style={styles.title}>
        <Text style={styles.titlePart1}>{titlePart1}</Text>
        <Text style={styles.titlePart2}>{titlePart2}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  image: {
    width: 600,
    height: 230,
    resizeMode: "cover",
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    flexDirection: "row", // Ensure the parts are displayed in a row
  },
  titlePart1: {
    color: COLORS.black, // Change color to black
  },
  titlePart2: {
    color: COLORS.primary, // Change color to green
  },
});

export default Header;
