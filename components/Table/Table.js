import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Header from './Header';
import Row from './Row';
import Select from './Select';
import { Profile } from '../Profile/Profile';
import { usePagination } from '../../hooks/usePagination';

const Table = ({ data, headers }) => {
  // State to keep track of the selected profile
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  // Custom hook to handle pagination
  const { perPage, handlePerPageChange, currentData, 
    handleNextPage, handlePrevPage, currentPage, endIndex } = usePagination(data, 10);

  // Function to handle selecting a profile
  const handleProfileSelect = (rowData) => {
    setSelectedProfile(rowData);
  }

  // Function to handle closing the profile modal
  const handleCloseProfile = () => {
    setSelectedProfile(null);
  }

  // Component for the select dropdown to change the number of items per page
  const SelectContainer = ({ perPage, handlePerPageChange }) => {
    return (
      <View style={styles.selectContainer}>
        <Select options={[1, 2, 5, 10, 20, 50, 100]} value={perPage}
         onChange={handlePerPageChange} />
      </View>
    );
  };
  
  // Component for the previous and next page buttons
  const ButtonContainer = ({ handlePrevPage, handleNextPage, currentPage, endIndex, dataLength }) => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevPage}
         style={[styles.button, currentPage === 1 && styles.disabledButton,{}]}>
          <Text style={styles.buttonText}>Previous Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} style={[styles.button, endIndex >= dataLength && styles.disabledButton]}>
          <Text style={styles.buttonText}>Next Page</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  // Component for the profile modal
  const ProfileModal = ({ selectedProfile, handleCloseProfile }) => {
    return (
      <Modal visible={!!selectedProfile} animationType="slide">
        <View style={styles.modalContainer}>
          <Profile rowData={selectedProfile} onClose={handleCloseProfile} />
        </View>
      </Modal>
    );
  };

  // Render the table component
  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <ScrollView  directionalLockEnabled={true}
       contentContainerStyle={styles.scrollContainer}
       horizontal
      >
        <ScrollView directionalLockEnabled={true}>
        <View style={styles.tableContainer}>
          <Header headers={headers} />
          {currentData.map((rowData, index) => (
            <Row key={rowData.uuid} data={rowData} 
            id={currentPage === 1 ? index + 1 : (currentPage - 1) * perPage + index + 1}
             onSelect={handleProfileSelect} />
          ))}
        </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.bottomContainer}>
      <SelectContainer perPage={perPage} handlePerPageChange={handlePerPageChange} />
      <ButtonContainer handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} currentPage={currentPage} endIndex={endIndex} dataLength={data.length} />
      <ProfileModal selectedProfile={selectedProfile} handleCloseProfile={handleCloseProfile} />
      </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Styles for the table component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'column',
  },
  tableContainer: {
    borderColor: 'black',
  },
  bottomContainer: {
    marginTop: 20,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Table;
