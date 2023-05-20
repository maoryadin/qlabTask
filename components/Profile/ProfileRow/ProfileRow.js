import React from 'react';
import { View, Text } from 'react-native';
import Label from './Label';
import ValueBox from './ValueBox';
import { colors, fonts } from '../../../assets/theme';
const ProfileRow = ({ label, value }) => {
  return (
    <View style={{
      flexDirection: 'column',
      gap: 8,
      padding: 0,
      marginBottom: 16,
    }}>
      <Label value={label} style={{
        fontSize: fonts.smallTitle.fontSize,
        lineHeight: fonts.smallTitle.lineHeight,
        fontWeight: fonts.smallTitle.fontWeight,
        color: colors.black,
        fontFamily: fonts.smallTitle.fontFamily,

      }}/>
     <ValueBox value={value} /> 
    </View>
  );
};

export default ProfileRow;