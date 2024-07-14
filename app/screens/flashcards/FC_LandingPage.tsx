import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';
import ArrowButtonPrevious from '../components/ArrowButtonPrevious';
import FinishButton from '../components/FinishButton';

const FC_LandingPage = ({ navigation }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [viewedCards, setViewedCards] = useState(new Set());

  const flashcards = [
    { question: "What are permanent tissues?", answer: "Matured tissues that have undergone differentiation. Types: epidermis, ground, vascular." },
    { question: "Where are epidermis tissues found?", answer: "On the outer surface of stems, leaves, and roots of young plants." },
    { question: "What is the function of the cuticle in epidermis tissues?", answer: "Minimizes water loss, provides protection, prevents pathogen entry." },
    { question: "What are guard cells and their function?", answer: "Modified epidermal cells controlling stomata for photosynthesis." },
    { question: "What is the role of root hair cells?", answer: "Increase surface area for water and mineral absorption." }  
  ];;

  const currentFlashcard = flashcards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false); // Reset flip state for the next card
      setViewedCards(prevViewedCards => new Set(prevViewedCards).add(currentCardIndex + 1));
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false); // Reset flip state for the previous card
      setViewedCards(prevViewedCards => new Set(prevViewedCards).add(currentCardIndex - 1));
    }
  };

  const gotoGame = () => {
    navigation.navigate('MemoryGame');
  };

  const hasViewedAllCards = viewedCards.size === flashcards.length;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        <View style={styles.container}>
          <FinishButton navigation={navigation} />
          <Text style={styles.cardNum}>
            Card {currentCardIndex + 1} of {flashcards.length}
          </Text>
          <TouchableOpacity onPress={handleFlip} style={styles.card}>
            <Text style={styles.cardText}>
              {isFlipped ? currentFlashcard.answer : currentFlashcard.question}
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <ArrowButtonPrevious onPress={handlePreviousCard} />
            <ArrowButtonNext onPress={handleNextCard} />
          </View>
        </View>
        <Button
          title="Go to Memory Game"
          onPress={gotoGame}
          disabled={!hasViewedAllCards}
        />
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNum: {
    paddingBottom: 20,
  },
  card: {
    width: 400,
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    padding: 30,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default FC_LandingPage;
