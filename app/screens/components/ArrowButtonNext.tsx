// ArrowButtonNext.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/COLORS';

const ArrowButtonNext = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: 10,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ArrowButtonNext;
