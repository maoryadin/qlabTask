import React from 'react';
import { View, Text, Image } from 'react-native';
import Label from '../ProfileRow/Label';
import maleGender from '../../../assets/gender/male.png';
import femaleGender from '../../../assets/gender/female.png';
import { colors, fonts } from '../../../assets/theme';

const genders = ['Male','Female']

const Button = ({ text,img, style, isSelected }) => {
  return (
      <View style={{
        backgroundColor: '#5385C0',
        borderColor: '#000000',
        borderWidth: isSelected ? 2 : 0,
        borderRadius: 10,
        height: 40,
        width: 87,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isSelected ? 1 : 0.3, // set opacity based on isSelected prop
        ...style,
      }}>
        <View style={{
          flexDirection: 'row',
          gap: 8,
        }}>
          <Image source={img}/>
          <Label value={text} style={{
            fontSize: fonts.regularText.fontSize,
            lineHeight: fonts.regularText.lineHeight,
            fontWeight: fonts.regularText.fontWeight,
            color: colors.white,
            fontFamily: fonts.regularText.fontFamily,
          }} />
        </View>
      </View>
  );
};

const Gender = ({ gender }) => {

  return (
   <View style={{gap:3, marginBottom:10}}>
    <Label value={'Gender'} style={{
      fontSize: fonts.smallTitle.fontSize,
      lineHeight: fonts.smallTitle.lineHeight,
      fontWeight: fonts.smallTitle.fontWeight,
      color: colors.black,
      fontFamily: fonts.smallTitle.fontFamily,
    }} />
    <View style={{
      flexDirection: 'row',
      gap: 5,
    }}>

    <Button text={'Male'}
    style={{backgroundColor:'#5385C0'}}
    img={maleGender}
    isSelected={gender === 'Male'} // pass isSelected based on gender prop
    />
    <Button text={'Female'}
    style={{backgroundColor:'#D856AC',
  }}
    img={femaleGender}
    isSelected={gender === 'Female'} // pass isSelected based on gender prop
    />
      </View>
    </View>
  );
};

export default Gender;