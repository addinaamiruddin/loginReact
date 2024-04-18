import React, { useState } from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";
import COLORS from "./constants/COLORS";
import Button from "./components/Button";
import Header2 from "./Header2";
import Dashboard from "./Dashboard";

const LandingPage = ({ navigation }: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
    },
  });

  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  marginVertical: 8,
                  alignSelf: "center",
                  marginTop: 50,
                }}
              >
                What do you want to do today?
              </Text>
            </View>

            <Button
              title="Flashcards"
              onPress={() => navigation.navigate("Chapters")}
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />

            <Button
              title="Slideshows"
              onPress={() => navigation.navigate("Chapters")}
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />

            <Button
              title="Experiment Simulation"
              onPress={() => navigation.navigate("Chapters")}
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
          </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};
export default LandingPage;
