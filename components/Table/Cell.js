import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
const Cell = ({ children }) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
 //   borderWidth: 1,
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
});

export default Cell;