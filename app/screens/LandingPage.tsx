import React, { useState } from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";
import COLORS from "./constants/COLORS";
import Header2 from "./Header2";
import ButtonChapter from "./components/ButtonChapter";

const LandingPage = ({ navigation }: any) => {
  // Define the function handlers for the icons
  const handleFlashcardsPress = () => {
    console.log("Flashcards icon pressed");
    // Add your navigation logic or other actions here
  };

  const handleSlideshowsPress = () => {
    console.log("Slideshows icon pressed");
    // Add your navigation logic or other actions here
  };

  const handleExperimentsPress = () => {
    console.log("Experiments icon pressed");
    // Add your navigation logic or other actions here
  };

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
    },
  });

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
                  marginBottom: 30,
                }}
              >
                What do you want to do today?
              </Text>
            </View>

            <ButtonChapter
              title="1 Organisation of Plant Tissues and Growth"
              onPress={() => navigation.navigate('ActivityPage', { title: 'Chapter 1 : Organisation of Plant Tissues and Growth' })}              flashcardsAvailable={true}
              slideshowsAvailable={true}
              experimentsAvailable={true}
              onFlashcardsPress={handleFlashcardsPress}
              onSlideshowsPress={handleSlideshowsPress}
              onExperimentsPress={handleExperimentsPress}
            />

            <ButtonChapter
              title="2 Leaf Structure and Function"
              onPress={() => console.log("Chapter 1 button pressed")}
              flashcardsAvailable={true}
              slideshowsAvailable={true}
              experimentsAvailable={true}
              onFlashcardsPress={handleFlashcardsPress}
              onSlideshowsPress={handleSlideshowsPress}
              onExperimentsPress={handleExperimentsPress}
            />

            <ButtonChapter
              title="3 Nutrition of Plants"
              onPress={() => console.log("Chapter 1 button pressed")}
              flashcardsAvailable={true}
              slideshowsAvailable={true}
              experimentsAvailable={false}
              onFlashcardsPress={handleFlashcardsPress}
              onSlideshowsPress={handleSlideshowsPress}
              onExperimentsPress={handleExperimentsPress}
            />
          </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};
export default LandingPage;
