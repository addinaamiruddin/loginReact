// TeacherClassProgressScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';
import {Picker} from '@react-native-picker/picker';
import Header3 from '../Header3';
import COLORS from '../constants/COLORS';
import ButtonFeature from '../components/ButtonFeature';


const mockStudentProgressData = [
    {
        studentName: 'Alice',
        progress: {
          flashcards: 80,
          slideshow: 70,
          experiment: 90,
        },
      },
      {
        studentName: 'Bob',
        progress: {
          flashcards: 60,
          slideshow: 50,
          experiment: 70,
        },
      },
];

const ByClass = ({ navigation, route }) => {
  const { feature } = route.params; // Get the feature name from route params// Simulate fetching data (you'll replace this with actual API calls)
    const [selectedChapter, setSelectedChapter] = useState('Photosynthesis');
    const [selectedFeature, setSelectedFeature] = useState('Flashcards');
    const [selectedTab, setSelectedTab] = useState("By Class"); // Initialize with "By Topic"

  
    const filteredStudentProgress = mockStudentProgressData.filter(
      (item) => item.progress[selectedFeature] && item.progress[selectedFeature] > 0
    );
  
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text>{item.studentName}</Text>
        <Text>Progress: {item.progress[selectedFeature]}%</Text>
      </View>
    );
  
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header3 navigation={navigation} />
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={styles.rectangle}>

        <Text style={styles.sectionTitle}>Track Progress</Text>
 
            <View style={styles.divider} />

            <View style={styles.container}>
        <Picker
          selectedValue={selectedChapter}
          onValueChange={(itemValue) => setSelectedChapter(itemValue)}
        >
          {/* Populate with actual chapters */}
          <Picker.Item label="Chapter 1 : Photosynthesis" value="Photosynthesis" />
          <Picker.Item label="Chapter 2 : Cell Division" value="Cell Division" />
          {/* Add more chapters */}
        </Picker>
  
        <Picker
          selectedValue={selectedFeature}
          onValueChange={(itemValue) => setSelectedFeature(itemValue)}
        >
          {/* Populate with actual features */}
          <Picker.Item label="Flashcards" value="flashcards" />
          <Picker.Item label="Slideshow" value="slideshow" />
          <Picker.Item label="Experiment" value="experiment" />
          {/* Add more features */}
        </Picker>
        <View style={styles.divider} />
  
        <FlatList
          data={filteredStudentProgress}
          renderItem={renderItem}
          keyExtractor={(item) => item.studentName}
        />
            </View>
          </View>
      </SafeAreaView>
      </>
    </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    rectangle: {
      backgroundColor: COLORS.gray,
      margin: 35,
      padding: 20,
      borderRadius: 20,
    },
    item: {
      marginBottom: 16,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: COLORS.black,
      marginTop: 10,
      alignSelf: "center",
      marginBottom:20,
    },
    selectedTab: {
      textDecorationLine:'underline',
      textDecorationColor:COLORS.black,
    },
    tabText: {
      color: COLORS.black,
    },
    containerA :{
      flexDirection: 'row',
      justifyContent:'center',
    },
    tabButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
      marginRight: 10,
    },
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.darkGrey,
      width: '100%',
      marginVertical: 10,
    },
  });
  
export default ByClass;
