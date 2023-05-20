import React from 'react';
import { View, Text } from 'react-native';
import { colors, fonts } from '../../../assets/theme';
import Label from './Label';

const ValueBox = ({ value }) => {
  return (
    <View style={{
      gap: 10,
      borderWidth: 1,
      borderColor: '#D6C9B5',
      backgroundColor: colors.cream,
      padding: 12,
      paddingLeft: 18,
      paddingRight: 18,
      borderRadius: 10,
    }}>
      <Label value={value} style={{
        fontSize: fonts.regularText.fontSize,
        lineHeight: fonts.regularText.lineHeight,
        fontWeight: fonts.regularText.fontWeight,
        fontFamily: fonts.regularText.fontFamily,
        color: '#222222',
      }}/>
    </View>
  );
};

export default ValueBox;