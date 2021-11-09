import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'; 
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../Services/api';
import {IPosition, IList} from '../../Types';

const List: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  const [position, setPosition] = useState<IPosition>({
    latitude: -23.673081449999998,
    longitude: -46.677047406643354,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });

  
  const [list, setList] = useState<IList[]>([]);

  const handlePosition = () => {
    setPosition({
      latitude: -23.673081449999998,
      longitude: -46.677047406643354,
      latitudeDelta: 0.0911,
      longitudeDelta: 0.0411,
    });
  }

  useEffect(() => {
    api.get('stores').then(
      response => {
        setList(response.data);
      }
    );
  }, []);

  return (
    <View style={styles.default}>
      <MapView
        style={styles.mapStyle}
        region={position}
      >
        {
          list.map(store => (
            <Marker
              key={store.id}
              coordinate={{
                latitude: store.localization.lat,
                longitude: store.localization.lng,
              }}
            >
            <Callout onPress={handlePosition}>
              <View>
                <Text>{store.label}</Text>
                <Image source={{uri: store.logo}}/>
              </View>
            </Callout>
          </Marker>
          ))
        }
      </MapView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#c73434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
});