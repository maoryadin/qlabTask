import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Table from './components/Table/Table';
import { setData } from './store/reducers';
import { headers, data } from './data/mockData';
import { Provider } from 'react-redux';
import {store, persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {useFonts} from 'expo-font';
import { RootSiblingParent } from 'react-native-root-siblings';



const App = () => {
  const [fontsLoaded] = useFonts({
    'ComfortaaBold': require('./assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
    'Comfortaa': require('./assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
    'ComfortaaLight': require('./assets/fonts/Comfortaa/Comfortaa-Light.ttf'),
    'ComfortaaMedium': require('./assets/fonts/Comfortaa/Comfortaa-Medium.ttf'),
    'ComfortaaSemiBold': require('./assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'MontserratLight': require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'MontserratMedium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'MontserratSemiBold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),

  })
  const dispatch = useDispatch();
  const dataRedux = useSelector((state) => state.data);

  useEffect(() => {
    if (dataRedux.length === 0) {
      dispatch(setData(data));
      
    }

  }, []);

  if (dataRedux.length === 0 || !fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
          <Table headers={headers} data={dataRedux} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
const AppWrap = () => {
  return (
    <Provider store={store}>
     <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
     <RootSiblingParent>
      <App />
      </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};
export default AppWrap;