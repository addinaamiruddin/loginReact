import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import COLORS from "../constants/COLORS";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import Header3 from "../Header3";
import ButtonFeature from "../components/ButtonFeature";
import ButtonTrack from "../components/ButtonTrack";
import { supabase } from '../../lib/supabase';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const mockStudentProgressData = [
  { topic: 'Photosynthesis', studentsStarted: 15 },
  { topic: 'Cell Division', studentsStarted: 10 },
  // Add more topics and data as needed
];

const ByTopic = ({ navigation, route }) => {
    const { feature } = route.params; // Get the feature name from route params
    console.log(feature);
    const [studentProgress, setStudentProgress] = useState([]);
    const [selectedTab, setSelectedTab] = useState("By Topic"); // Initialize with "By Topic"

  useEffect(() => {
    // Fetch student progress data here (e.g., from your API)
    setStudentProgress(mockStudentProgressData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.topic}</Text>
      <View style={styles.progressContainer}>
        <ProgressBar progress={0.6} color={COLORS.primary} />
        <Text style={styles.studentsStarted}>{item.studentsStarted}</Text>
      </View>
    </View>
  );

  return (
<ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header3 navigation={navigation} />
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={styles.rectangle}>
            <Text style={styles.sectionTitle}>Track Progress</Text>

            <View style={styles.containerA}>
                <ButtonFeature onPress={undefined} title={feature} />

            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setSelectedTab("By Topic")}
                style={[
                  styles.tabButton,
                  selectedTab === "By Topic" && styles.selectedTab,
                ]}
              >
                <Text style={styles.tabText}>By Topic</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedTab("By Class")}
                style={[
                  styles.tabButton,
                  selectedTab === "By Class" && styles.selectedTab,
                ]}
              >
                <Text style={styles.tabText}>By Class</Text>
              </TouchableOpacity>
            </View>
            </View>
            

            <View style={styles.divider} />
            <View style={styles.container}>
                <FlatList
              data={studentProgress}
              renderItem={renderItem}
              keyExtractor={(item) => item.topic}
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
    // flex: 1,
    // padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  rectangle: {
    backgroundColor: COLORS.gray,
    margin: 35,
    padding: 20,
    borderRadius: 20,
  },
  featureName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGrey,
    width: '100%',
    marginVertical: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  studentsStarted: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: 10,
    alignSelf: "center",
    marginBottom:20,
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
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
});

export default ByTopic;
