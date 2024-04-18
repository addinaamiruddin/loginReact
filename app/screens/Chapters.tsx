import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Dummy data for the list of chapters
const chaptersData = [
  { id: '1', title: 'Chapter 1: Introduction' },
  { id: '2', title: 'Chapter 2: The Basics' },
  { id: '3', title: 'Chapter 3: Advanced Topics' },
  // Add more chapters as needed
];

const Flashcards = ({ navigation }) => {
  // Function to handle chapter selection
  const handleChapterPress = (chapterId) => {
    // Navigate to the selected chapter screen
    navigation.navigate('ChapterDetails', { chapterId });
  };

  // Render item for FlatList
  const renderChapterItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleChapterPress(item.id)}>
      <View style={styles.chapterItem}>
        <Text style={styles.chapterTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chaptersData}
        renderItem={renderChapterItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chapterList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chapterList: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  chapterItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Flashcards;
