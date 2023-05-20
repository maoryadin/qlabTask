import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Label from './Profile/ProfileRow/Label';
import { colors, fonts } from '../assets/theme';

const Map = ({lat,long}) => {
  const initialRegion = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <Label value={'Location'} style={{
        fontSize: fonts.smallTitle.fontSize,
        lineHeight: fonts.smallTitle.lineHeight,
        fontWeight: fonts.smallTitle.fontWeight,
        color: colors.black,
        fontFamily: fonts.smallTitle.fontFamily,
      }}/>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={{ latitude: lat, longitude: long }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  height: '100%',
  width: '100%',

  },
  map: {
    height: 300,
    width: '100%',
  },
});

export default Map;