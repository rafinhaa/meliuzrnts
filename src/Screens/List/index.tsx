import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Touchable} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, {Marker, Callout,} from 'react-native-maps';
import api from '../../Services/api';
import {IPosition, IList} from '../../Types';
import { useDispatch } from 'react-redux'; // Dispara uma action para o redux
import  setNewStoreID from '../../Store/Modules/ListDetails/Actions';
import { IGlobalStoreId } from '../../Store/Modules/ListDetails/Types';
import { useNavigation} from '@react-navigation/native';

const List: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  const dispatch = useDispatch(); // Dispara uma action para o redux
  const nav = useNavigation(); 
  const [position, setPosition] = useState<IPosition>({
    latitude: -23.673081449999998,
    longitude: -46.677047406643354,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });

  const [list, setList] = useState<IList[]>([]);

  const handleStoreDetails = (store:number, screen:any) => {
    const newStore: IGlobalStoreId = {
      store_id : store,
    }
    dispatch(setNewStoreID(newStore));
    nav.navigate(screen);
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
        testID="map-component"
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
            <Callout onPress={() => handleStoreDetails(store.id,'Details')}>
              <View style={styles.calloutStyle}>
                <Image source={{uri: store.logo}} style={styles.image}/>
                {/* <Text style={styles.calloutTitle} >{store.label}</Text> */}
                
                <TouchableOpacity 
                  onPress={() => handleStoreDetails(store.id,'Details')}
                >
                  <Text 
                    style={styles.seeMore}
                  >
                    Ver mais
                  </Text>
                </TouchableOpacity>
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
  calloutStyle: {
    padding: 15,
    alignItems: 'center',
  },
  calloutTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#c73434',
  },
  seeMore: {
    fontSize: 20,
    color: '#5f5dd1',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    padding: 10,
  },
});