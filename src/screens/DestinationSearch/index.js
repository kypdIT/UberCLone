import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

import PlaceRow from './PlaceRow';
import styles from './styles';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 10.799976856171751, lng: 106.65973436952268}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 10.787181412919804, lng: 106.63758727220495}},
};

const DestinationSearch = props => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    console.warn('checkNavigation is called');
    if (originPlace && destinationPlace) {
      console.warn('hello ORIGIN & DESTINATION');
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            console.log('ORIGINNNNNNNNNNNNN');
            console.warn('ORIGINNNNNNNNNNNNN');
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles={true}
          currentLocation={true}
          currentLocationLabel="Current Location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyD0SaLFhSz55skGVOd7ZjUK3o1cFuP84w8',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          suppressDefaultStyles={true}
          styles={{
            textInput: styles.textInput,
            container: {...styles.autocompleteContainer, top: 55},
            separator: styles.separator,
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyD0SaLFhSz55skGVOd7ZjUK3o1cFuP84w8',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        {/* Circle near Origin Input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destiantion Input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
