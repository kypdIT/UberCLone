import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyD0SaLFhSz55skGVOd7ZjUK3o1cFuP84w8';

const RouteMap = props => {
  const origin = {
    latitude: 10.787011183583429,
    longitude: 106.63759933376883,
  };

  const destination = {
    latitude: 10.788103591466193,
    longitude: 106.63856361068001,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 10.787011183583429,
        longitude: 106.63759933376883,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
