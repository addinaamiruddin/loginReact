import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FinishButton = ({ navigation }) => {
  const goToActivity = () => {
    navigation.navigate('ActivityPage');
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={goToActivity}
    >
      <Text style={styles.buttonText}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DBE7C9', // Background color
    borderRadius: 20, // Rounded to a circle
    width: 40, // Width of the button
    height: 40, // Height of the button
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10, // Adjust the margin
    position: 'absolute', // Absolute positioning for top-right placement
    top: 10, // Adjust top position
    right: 10, // Adjust right position
  },
  buttonText: {
    color: 'black', // Text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold font
  },
});

export default FinishButton;
