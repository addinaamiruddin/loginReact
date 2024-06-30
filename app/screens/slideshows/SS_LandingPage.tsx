import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';
import ArrowButtonPrevious from '../components/ArrowButtonPrevious';
import { Slide } from 'react-slideshow-image';

const slides = [
  {
    id: 1,
    image: require('./images/chapter1_01.jpg'), // Replace with your image paths
    question: 'Where does the photosynthesis happen?',
    answer: 'palasade mesophyll',
  },
  {
    id: 2,
    image: require('./images/chapter1_02.jpg'), // Replace with your image paths
    question: 'Questions 2?',
    answer: 'answer2',
  },
  {
    id: 3,
    image: require('./images/chapter1_03.jpg'), // Replace with your image paths
    question: 'Questions 3?',
    answer: 'answer3',
  },
  {
    id: 4,
    image: require('./images/chapter1_04.jpg'), // Replace with your image paths
    question: 'Questions 4?',
    answer: 'answer4',
  },
  {
    id: 5,
    image: require('./images/chapter1_05.jpg'), // Replace with your image paths
    question: 'Questions 5?',
    answer: 'answer5',
  },
];

const SS_LandingPage = ({ navigation }) => {
  const [userAnswers, setUserAnswers] = useState(Array(slides.length).fill(''));
  const [activeSlide, setActiveSlide] = useState(0);

  const checkAnswer = () => {
    const userAnswer = userAnswers[activeSlide].trim().toLowerCase();
    const correctAnswer = slides[activeSlide].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      Alert.alert('Correct!', 'Great job! Your answer is correct.');
    } else {
      Alert.alert('Incorrect', `Oops! The correct answer is "${correctAnswer}".`);
    }
  };

  const handleNextSlide = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text>{item.question.replace('___', `____${activeSlide + 1}____`)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        value={userAnswers[activeSlide]}
        onChangeText={(text) => {
          const updatedAnswers = [...userAnswers];
          updatedAnswers[activeSlide] = text;
          setUserAnswers(updatedAnswers);
        }}
      />
      <TouchableOpacity onPress={checkAnswer} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        <View style={styles.container}>
          <Text style={{padding:10}} >Swipe for next slide</Text>
        <Carousel
          data={slides}
          renderItem={renderItem}
          sliderWidth={500}
          itemWidth={500}
          loop={false}
          autoplay={false} // Set this to false
          onSnapToItem={(index) => setActiveSlide(index)}
        />

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
  slide: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 500,
    height: 400,
    resizeMode:'contain'
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'green',
    margin:25,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default SS_LandingPage;
