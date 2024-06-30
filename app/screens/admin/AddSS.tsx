import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import COLORS from "../constants/COLORS";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import Header3 from "../Header3";
import { supabase } from '../../lib/supabase';
import Button from "../components/Button";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const AddSS = ({ navigation }: any) => {
    const [slideshowQuestion, setSlideshowQuestion] = useState('');
    const [slideshowAnswer, setSlideshowAnswer] = useState('');
    const [selectedImage, setSelectedImage] = useState(null); // Store the selected image
    const [chapterName, setChapterName] = useState('');


  const goToUserProfile = () => {
    navigation.navigate("UserProfile");
  };

  const handleImageUpload = async () => {
    // Implement image upload logic here (e.g., send to backend and save to storage)
    // Once uploaded, get the image URL/path and store it in your state
    const imageUrl = 'https://example.com/path/to/uploaded/image.jpg';
    setSelectedImage(imageUrl);
  };

  const submitSlideshow = async () => {
    try {
      // Assuming you have a 'slideshows' table in your Supabase database
      const { data, error } = await supabase.from('slideshows').insert([
        { question: slideshowQuestion, answer: slideshowAnswer, image_url: selectedImage },
      ]);
      if (error) {
        console.error('Error inserting slideshow:', error.message);
      } else {
        console.log('Slideshow added into the database:', data);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
    },
    rectangle: {
      backgroundColor: COLORS.gray,
      margin: 20,
      padding: 20,
      borderRadius: 10,
    },
    editProfileIcon: {
      position: "absolute",
      top: 25,
      right: 25,
    },
    userDetails: {
      marginBottom: 20,
    },
    slideshowForm: {
        padding:10,
    },
    userStatus: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 5,
      color: COLORS.black,
    },
    email: {
      fontSize: 20,
      color: COLORS.black,
    },
    userName: {
      fontSize: 20,
      color: COLORS.black,
    },
    sectionTitle: {
      fontSize: 25,
      fontWeight: "bold",
      color: COLORS.black,
      marginTop: 20,
      alignSelf: "center",
    },
    sectionLabel: {
      fontSize: 22,
      marginBottom: 5,
      color: COLORS.black,
      fontWeight: "bold",
    },
    progressBar: {
      height: 20,
      marginTop: 10,
      marginBottom: 30,
    },
    flashcardForm: {
        padding:20,
        fontSize:14,
    },
    formContainer: {
        padding: 20,
      },
      input: {
        fontSize: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 5,
        padding: 10,
      },
      form:{
        backgroundColor:COLORS.gray,
        borderRadius:20,
        padding:20,
        borderColor:COLORS.black,
        alignItems:'center'
      }
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header3 navigation={navigation} />
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            
        {/* Flashcard Form */}
        <View style={styles.flashcardForm}>
            <Text style={styles.sectionLabel}>Add New Slideshow</Text>
            {/* Chapter Name Input */}
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
                Chapter Name :
              </Text>
        <TextInput
          style={styles.input}
          value={chapterName}
          onChangeText={setChapterName}
          style={{
            width: "100%",
            paddingVertical:10,
          }}
        />
        </View>
  
        <View style={styles.form}>
          <TextInput
              placeholder="Enter slideshow question"
              value={slideshowQuestion}
              onChangeText={setSlideshowQuestion}
            style={{
              width: "100%",
              padding: 10,
              marginTop:10,
              borderWidth: 1, // Add this line
              borderColor: "grey", // Add this line to set the outline color
              marginBottom:20,
              borderRadius:10
            }}
          />
  
          <TextInput
            placeholder="Enter slideshow answer"
            value={slideshowAnswer}
            onChangeText={setSlideshowAnswer}
            style={{
              width: "100%",
              padding: 10,
              borderWidth: 1, // Add this line
              borderColor: "grey", // Add this line to set the outline color
              marginBottom:20,
              borderRadius:10
            }}
          />
  
            <View style={{ width: '100%', alignItems:'center'}}>
            <Button onPress={handleImageUpload} title="Upload Image" style={{ width: '50%', marginBottom: 10 }} />
            {selectedImage && (
              <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
            )}
            <Button onPress={submitSlideshow} title="Submit Slideshow" style={{ width: '50%' }} />
</View>
        </View>
  
        </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};




export default AddSS;

