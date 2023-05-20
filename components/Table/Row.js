import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateRow, deleteRow } from '../../store/reducers';
import femaleGender from '../../assets/gender/female.png';
import maleGender from '../../assets/gender/male.png';
import Cell from './Cell';
import { colors } from '../../assets/theme';
import { AsYouType, isValidPhoneNumber } from 'libphonenumber-js'
import { validatePhone, validateEmail, validateText } from '../../utils/validation';
import ShowToast from '../../utils/toast'
const Row = ({ data, id, onSelect }) => {

  const [editedCell, setEditedCell] = useState(['firstName', 'lastName', 'email', 'phone']);
  const [ignore, setIgnore] = useState(['uuid', 'latitude', 'longitude']);
  const [newData, setNewData] = useState({ ...data });

  const dispatch = useDispatch();

  const onEdit = (key, value) => {
    setNewData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };


  const onSave = () => {
    const isName = validateText(newData.firstName);
    const isLastName = validateText(newData.lastName);
    const isPhone = validatePhone(newData.phone);
    const isEmail = validateEmail(newData.email);
    if(isName && isLastName && isPhone && isEmail) {
      dispatch(updateRow(newData));
      ShowToast('The record has been updated successfully');
    } else {
      if(!isPhone) {
        ShowToast('Invalid phone number');
      }
      if(!isEmail) {
        ShowToast('Invalid email address');
      }
      if(!isName) {
        ShowToast('Invalid first name');
      }
      if(!isLastName) {
        ShowToast('Invalid last name');
      }
    }
  };

  const onDelete = () => {
    dispatch(deleteRow(newData.uuid));
    ShowToast('The record has been deleted successfully');
  };

  const renderCell = (key, value, index) => {

    if (ignore.some((item) => item === key)) {
      return null; 
    }
    if (editedCell.some((item) => item === key)) {
      return (
        <Cell key={index}>
          <TextInput value={value} onChangeText={(value) => onEdit(key, value)} />
        </Cell>
      );
    }
    if(key === 'gender') {
      const img = value === 'Male' ? maleGender : femaleGender;
      return (
        <Cell key={index}>
          <Image source={img}/>
        </Cell>
      )
    }
    return (
      <Cell key={index}>
        <Text>{value}</Text>
      </Cell>
    );
  };

  return (
    <View style={[styles.container,{
      backgroundColor: id % 2 === 0 ? '#f0f0f0' : '#ffffff',
    }]}>
      <Cell>
        <TouchableOpacity style={{
          padding: 10,
        }} onPress={() => onSelect(newData)}>
          <Text>{id}</Text>
        </TouchableOpacity>
      </Cell>
      {Object.entries(newData).map(([key, value], index) =>
        renderCell(key, value, index))
      }
      <Cell>
        <TouchableOpacity onPress={onSave} style={styles.updatebutton}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </Cell>
      <Cell>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </Cell>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  updatebutton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default Row;
