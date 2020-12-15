import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import ButtonRound from '../../../../components/ButtonRound';

import styles from './styles';

const MyDNA = ({
  onPress, style,
}) => (
  <View style={[styles.container, style]}>
    <ButtonRound text="Acessar" onPress={onPress} style={styles.button} />
    <View style={styles.topView}>
      <Text style={styles.title}>Meu DNA</Text>
      <Text style={styles.description}>Descubra os segredos do seu DNA.</Text>
    </View>
  </View>
);

MyDNA.propTypes = {
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

MyDNA.defaultProps = {
  style: null,
};

export default MyDNA;
