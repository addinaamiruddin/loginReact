import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import COLORS from "../constants/COLORS";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { supabase } from '../../lib/supabase';
import Header3 from "../Header3";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const TeacherContent = ({ navigation }: any) => {
  const goToUserProfile = () => {
    navigation.navigate("UserProfile");
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
    progressSection: {
      marginBottom: 10,
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
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header3 navigation={navigation} />
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          {/* First Rectangle - User Details */}
          <View style={styles.rectangle}>
            {/* Edit Profile Icon */}
            <TouchableOpacity
              style={styles.editProfileIcon}
              onPress={goToUserProfile}
            >
              <FontAwesome name="edit" size={50} color={COLORS.black} />
            </TouchableOpacity>
            {/* User Details */}
            <View style={styles.userDetails}>
              <Text style={styles.userStatus}>User Status</Text>
              <Text style={styles.userName}>user name here</Text>
              <Text style={styles.email}>user email here</Text>
            </View>
          </View>

          {/* Second Rectangle - Progress */}
          <Text style={styles.sectionTitle}>Your Progress</Text>

          <View style={styles.rectangle}>
            {/* Flashcards Progress */}
            <View style={styles.progressSection}>
              <Text style={styles.sectionLabel}>Flashcards</Text>
              <ProgressBar
                progress={0.5}
                color={COLORS.primary}
                style={styles.progressBar}
              />
            </View>
            {/* Slideshows Progress */}
            <View style={styles.progressSection}>
              <Text style={styles.sectionLabel}>Slideshows</Text>
              <ProgressBar
                progress={0.7}
                color={COLORS.primary}
                style={styles.progressBar}
              />
            </View>
            {/* Experiment Simulation Progress */}
            <View style={styles.progressSection}>
              <Text style={styles.sectionLabel}>Experiment Simulation</Text>
              <ProgressBar
                progress={0.3}
                color={COLORS.primary}
                style={styles.progressBar}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};

export default TeacherContent;
