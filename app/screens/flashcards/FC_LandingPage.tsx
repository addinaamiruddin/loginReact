import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';
import ArrowButtonPrevious from '../components/ArrowButtonPrevious';
import FinishButton from '../components/FinishButton';

const FC_LandingPage = ({ navigation }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const flashcards = [
      {
        question : "What are permanent tissues?",
        answer : "Permanent tissues are matured tissues that have already undergone differentiation or are currently undergoing the differentiation process. They can be divided into three types: epidermis tissues, ground tissues, and vascular tissues."
      },
      {
        question : "Where are epidermis tissues found?",
        answer : "Epidermis tissues are found on the outer surface of stems, leaves, and roots of young plants."
      },
      {
        question : "What is the function of the cuticle in epidermis tissues?",
        answer: "The cuticle in epidermis tissues helps to minimize water loss through evaporation (transpiration), provide protection, and prevent the entry of pathogens."
      },
      {
        question : "What are guard cells and what is their function?",
        answer: "Guard cells are modified epidermal cells that control the opening and closing of stomata for photosynthesis."
      },
      {
        question : "What is the role of root hair cells?",
        answer: "Root hair cells help to increase the surface area for the absorption of water and mineral salts."
      },
      {
        question : "What are parenchyma tissues?",
        answer: "Parenchyma tissues are the simplest living cells that are not yet differentiated. They have thin cell walls and are arranged in a turgid state to provide support and maintain the shape of herbaceous plants."
      },
      {
        question : "List some functions of parenchyma tissues.",
        answer: "Parenchyma tissues carry out photosynthesis, store starch and glucose, are involved in gaseous exchange, and play a role in the repair and regeneration of plant tissues as well as the transport of the vascular system."
      },
      {
        question : "What are collenchyma tissues?",
        answer: "Collenchyma tissues are living cells that become flexible upon maturation. Their cell walls are made up of pectin and hemicellulose, and they are thicker than parenchyma cell walls."
      },
      {
        question : "What is the function of collenchyma tissues?",
        answer: "Collenchyma tissues provide mechanical support and elasticity to plants."
      },
      {
        question : "What are sclerenchyma tissues?",
        answer: "Sclerenchyma tissues are made up of matured dead cells with the thickest cell walls. They support and strengthen matured parts of the plant and help in the transport of water and nutrients."
      },
      {
        question : "Describe the xylem tissue.",
        answer: "Xylem tissue is made up of dead cells without cytoplasm. The cell walls contain lignin and are made up of hollow xylem vessels that extend from the roots to the leaves."
      },
      {
        question : "What is the primary function of xylem tissue?",
        answer: "Xylem tissue transports water and mineral salts from the roots to other parts of the plant."
      },
      {
        question : "Describe the phloem tissue.",
        answer: "Phloem tissue is made up of companion cells and sieve tubes, which are living cells that contain cytoplasm. Sieve tubes do not have a nucleus and ribosomes due to decomposition after maturation and are continuously arranged end to end."
      },
      {
        question : "What is the primary function of phloem tissue?",
        answer: "Phloem tissue transports glucose formed from photosynthesis from the leaves to the roots, fruits, and tubers to be stored."
      }
  ];

  const currentFlashcard = flashcards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false); // Reset flip state for the next card
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false); // Reset flip state for the previous card
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        
        <View style={styles.container}>
      <FinishButton navigation={navigation} /> {/* Add the FinishButton */}

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
    paddingBottom:20
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    padding:30
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
