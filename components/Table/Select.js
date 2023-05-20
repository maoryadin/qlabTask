import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Select = ({ options, value, onChange }) => {
  const handleOptionPress = (option) => {
    onChange(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            option === value && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(option)}
        >
          <Text
            style={[
              styles.optionText,
              option === value && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  option: {
    padding: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
  },
});

export default Select;