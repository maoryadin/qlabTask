import React from 'react';
import { Text } from 'react-native';

const Label = ({ value, style }) => {
  return (
    <Text style={style}>{value}</Text>
  );
};

export default Label;