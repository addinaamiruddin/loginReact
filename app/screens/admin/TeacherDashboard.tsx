import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import COLORS from "../constants/COLORS";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import Header3 from "../Header3";
import ButtonFeature from "../components/ButtonFeature";
import ButtonTrack from "../components/ButtonTrack";
import { supabase } from '../../lib/supabase';
import { Session } from "@supabase/supabase-js";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const TeacherDashboard = ({ navigation, session }: { navigation: any, session: Session }) => {

  console.log(session)

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const goToUserProfile = () => {
    navigation.navigate("UserProfile");
  };

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
    },
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.darkGrey,
      width: '100%',
      marginVertical: 10,
    },
    rectangle: {
      backgroundColor: COLORS.gray,
      margin: 35,
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
    },
    rectangle2: {
      backgroundColor: COLORS.gray,
      margin: 35,
      padding: 20,
      borderRadius: 20,
    },
    rectangle1: {
      backgroundColor: COLORS.gray,
      margin: 35,
      padding: 20,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around', // Evenly space buttons
      // paddingVertical: 10, // Add vertical padding to keep them inside the container
      flexWrap: 'wrap', // Allow wrapping if needed
    },
    editProfileIcon: {
      position: "absolute",
      top: 25,
      right: 25,
    },
    userDetails: {
      margin: 20,
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
      fontSize: 22,
      fontWeight: "bold",
      color: COLORS.black,
      marginTop: 10,
      alignSelf: "center",
    },
    newProgress: {
      flexDirection: 'row',
      justifyContent: 'space-around', // Evenly space buttons
      alignItems: 'center', // Center buttons vertically within the section
      // paddingVertical: 10, // Add vertical padding to keep them inside the container
      flexWrap: 'wrap', // Allow wrapping if needed
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
          <View style={styles.rectangle2}>
            {/* Edit Profile Icon */}
            <TouchableOpacity
              style={styles.editProfileIcon}
              onPress={goToUserProfile}
            >
              <FontAwesome name="edit" size={50} color={COLORS.black} />
            </TouchableOpacity>
            {/* User Details */}
            <View style={styles.userDetails}>
              <Text style={styles.userStatus}>Teacher</Text>
              <Text style={styles.userName}>Robin West</Text>
              <Text style={styles.email}>robinwest@gmail.com</Text>
            </View>
          </View>

          {/* Second Rectangle - Track Progress */}
          <Text style={styles.sectionTitle}>Track Progress</Text>

          <View style={styles.rectangle}>
            {/* Flashcards Progress */}
            <View style={styles.progressSection}>
              <ButtonFeature title="Flashcards" onPress={undefined} />
              <View style={styles.newProgress}>
                <ButtonTrack
                title="By Topic"
                onPress={() => navigation.navigate("ByTopic", { feature: "Flashcards" })}
              />
              <ButtonTrack
                title="By Class"
                onPress={() => navigation.navigate("ByClass", { feature: "Flashcards" })}
              />
              </View>              
            </View>
            <View style={styles.divider}></View>


            {/* Slideshows Progress */}
            <View style={styles.progressSection}>
              <ButtonFeature title="Slideshow" onPress={undefined} />
              <View style={styles.newProgress}>
                <ButtonTrack
                title="By Topic"
                onPress={() => navigation.navigate("ByTopic", { feature: "Slideshow" })}
              />
              <ButtonTrack
                title="By Class"
                onPress={() => navigation.navigate("ByClass", { feature: "Slideshow" })}
              />
              </View>
            </View>
            <View style={styles.divider}></View>

            {/* Experiment Simulation Progress */}
            <View style={styles.progressSection}>
              <ButtonFeature title="Experiment" onPress={undefined} />
              <View style={styles.newProgress}>
                <ButtonTrack
                title="By Topic"
                onPress={() => navigation.navigate("ByTopic", { feature: "Experiment" })}
              />
              <ButtonTrack
                title="By Class"
                onPress={() => navigation.navigate("ByClass", { feature: "Experiment" })}
              />
              </View>
              
            </View>
          </View>

          <Text style={styles.sectionTitle}>Content Management</Text>

          {/* Third rectangle */}
          <View style={styles.rectangle1}>
            <View style={styles.progressSection}>
              <ButtonFeature
                title="Flashcards"
                onPress={() => navigation.navigate("AddFC")} />
            </View>
            <View style={styles.progressSection}>
              <ButtonFeature
                title="Slideshow"
                onPress={() => navigation.navigate("AddSS")} />
            </View>
            <View style={styles.progressSection}>
              <ButtonFeature
                title="Experiment"
                onPress={() => navigation.navigate("AddES")} />
            </View>
          </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};

export default TeacherDashboard;
