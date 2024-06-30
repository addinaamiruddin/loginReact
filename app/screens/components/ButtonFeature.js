// ArrowButtonNext.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/COLORS';

const ButtonFeature = ({ onPress, title }) => {
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
    backgroundColor: '#789461', // Set the background color
    borderRadius: 5,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25, // Adjust the horizontal padding
  },
  buttonText: {
    color: 'white', // Set the text color to white
    fontSize: 16,
  },
});

export default ButtonFeature;
