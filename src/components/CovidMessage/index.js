import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if really nessery</Text>
      <Text style={styles.text}>
        Please don't open your MASK when go out home, when get in car, and when
        get out car.
      </Text>
      <Text style={styles.learnMore}>Learn MORE-></Text>
    </View>
  );
};

export default CovidMessage;
