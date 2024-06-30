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

const AddFC = ({ navigation }: any) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [chapterName, setChapterName] = useState('');

  const goToUserProfile = () => {
    navigation.navigate("UserProfile");
  };

  const submitFlashcard = async(question, answer) => {
    try {
        // Assuming you have a 'flashcards' table in your Supabase database
        const { data,error } = await supabase.from('fc_flashcards').insert([
          { question:question, answer:answer }, // Insert the question and answer
        ]);
    
        if (error) {
          console.error('Error inserting flashcard:', error.message);
        } else {
          console.log('Flashcard added into the database:', data);
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
      alignSelf:'center'
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
    input: {
        fontSize:14,
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
            <Text style={styles.sectionLabel}>Add New Flashcards</Text>
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
            placeholder="Enter flashcard question"
            value={question}
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
            placeholder="Enter flashcard answer"
            value={answer}
            style={{
              width: "100%",
              padding: 10,
              borderWidth: 1, // Add this line
              borderColor: "grey", // Add this line to set the outline color
              marginBottom:20,
              borderRadius:10
            }}
          />

          <Button 
                onPress={()=>submitFlashcard(question, answer)} 
                title="Submit Flashcard"
                style={{
                  width: "40%",
                  margin:20,
                }}
            />
        </View>
  
        </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};

export default AddFC;
