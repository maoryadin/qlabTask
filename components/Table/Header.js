import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Importing the Cell component from the same directory
import Cell from './Cell';

// Importing the colors object from the theme file
import { colors } from '../../assets/theme';

// Defining the Header component
const Header = ({headers}) => {
  return (
    // A view container for the header cells
    <View style={styles.container}>
      {/* Mapping over the headers array to create a Cell component for each header */}
      {headers.map((header, index) => (
        <Cell key={index}>
          {/* Displaying the header text */}
          <Text style={{
            color: colors.white,
          }}>{header}</Text>
        </Cell>
      ))}
    </View>
  );
};

// Defining the styles for the Header component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'mediumseagreen',
  },
});

export default Header;
