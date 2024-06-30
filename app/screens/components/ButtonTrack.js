// ArrowButtonNext.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/COLORS';

const ButtonTrack = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DBE7C9', // Set the background color
    borderRadius: 5,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Adjust the horizontal padding
  },
  buttonText: {
    color: 'black', // Set the text color to black
    fontSize: 16,
  },
});

export default ButtonTrack;
