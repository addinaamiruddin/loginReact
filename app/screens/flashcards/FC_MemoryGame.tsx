import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Header2 from '../Header2';
import FinishButton from '../components/FinishButton';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const FC_MemoryGame = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const flashcards = [
    { question: "What are permanent tissues?", answer: "Matured tissues that have undergone differentiation. Types: epidermis, ground, vascular." },
    { question: "Where are epidermis tissues found?", answer: "On the outer surface of stems, leaves, and roots of young plants." },
    { question: "What is the function of the cuticle in epidermis tissues?", answer: "Minimizes water loss, provides protection, prevents pathogen entry." },
    { question: "What are guard cells and their function?", answer: "Modified epidermal cells controlling stomata for photosynthesis." },
    { question: "What is the role of root hair cells?", answer: "Increase surface area for water and mineral absorption." }  
  ];

  useEffect(() => {
    // Combine questions and answers into card pairs
    const pairs = flashcards.flatMap(card => [
      { id: `${card.question}-q`, content: card.question, type: 'question' },
      { id: `${card.question}-a`, content: card.answer, type: 'answer' },
    ]);
    // Shuffle cards
    setCards(shuffleArray(pairs));
  }, []);

  const handleCardPress = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];

    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;

      if (
        (firstCard.type === 'question' && secondCard.type === 'answer' && flashcards.some(fc => fc.question === firstCard.content && fc.answer === secondCard.content)) ||
        (firstCard.type === 'answer' && secondCard.type === 'question' && flashcards.some(fc => fc.question === secondCard.content && fc.answer === firstCard.content))
      ) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        setScore(score + 1);

        if (matchedCards.length + 2 === cards.length) {
          setIsGameCompleted(true);
          Alert.alert('Congratulations!', `You have matched all the cards. Your score is ${score + 1}.`);
        }

        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        <View style={styles.container}>
          <FinishButton navigation={navigation} />
          <Text style={styles.scoreText}>Score: {score}</Text>
          {isGameCompleted && (
            <Text style={styles.congratsText}>Congratulations! You have completed the game.</Text>
          )}
          <View style={styles.grid}>
            {cards.map((card, index) => (
              <TouchableOpacity
                key={card.id}
                style={[
                  styles.card,
                  flippedCards.includes(card) || matchedCards.includes(card.id) || isGameCompleted
                    ? styles.cardFlipped
                    : styles.cardHidden,
                  card.type === 'question' ? styles.questionCard : styles.answerCard
                ]}
                onPress={() => handleCardPress(card)}
              >
                <Text style={styles.cardText}>
                  {flippedCards.includes(card) || matchedCards.includes(card.id) || isGameCompleted
                    ? card.content
                    : '?'}
                </Text>
              </TouchableOpacity>
            ))}
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
    paddingLeft:30,
    paddingRight:30,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    height: 100,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  cardHidden: {
    backgroundColor: '#ddd',
  },
  cardFlipped: {
    backgroundColor: '#f9c2ff',
  },
  questionCard: {
    backgroundColor: '#C4EBF1',
  },
  answerCard: {
    backgroundColor: '#FFFFC2',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom:30
  },
});

export default FC_MemoryGame;
