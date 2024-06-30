import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";
import COLORS from "./constants/COLORS";
import Header2 from "./Header2";
import ButtonChapter from "./components/ButtonChapter";
import { supabase } from "../lib/supabase";

const LandingPage = ({ route, navigation }: any) => {
  const [chapters, setChapters] = useState([]);
  // Inside LandingPage component
  // const { name, role } = route.params;

  // Now you can use 'name' and 'role' in your component logic
  // console.log('User name in LandingPage:', name);
  // console.log('User role in LandingPage:', role);

  useEffect(() => {
    fetchChapters();
  }, []);

  const fetchChapters = async () => {
    const { data, error } = await supabase.from('chapter').select();
    if (error) console.log("Data fetching error: ", error);
    else setChapters(data);
  };

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
                Which chapter do you want learn today?
              </Text>
            </View>

            {chapters.map((chapter, index) => (
              <ButtonChapter
                key={index}
                title={chapter.title}
                onPress={() => navigation.navigate('ActivityPage', { title: `Chapter ${index + 1} : ${chapter.title}` })}
                flashcardsAvailable={chapter.fc_exist}
                slideshowsAvailable={chapter.ss_exist}
                experimentsAvailable={chapter.exp_exist}
                onFlashcardsPress={handleFlashcardsPress}
                onSlideshowsPress={handleSlideshowsPress}
                onExperimentsPress={handleExperimentsPress}
              />
            ))}
          </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};
export default LandingPage;
