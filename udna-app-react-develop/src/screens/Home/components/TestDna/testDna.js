import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import ButtonRound from '../../../../components/ButtonRound';

import styles from './styles';

const TestDNA = ({
  onPress, style,
}) => (
  <View style={[styles.container, style]}>
    <ButtonRound color="white" text="Acessar" onPress={onPress} style={styles.button} />
    <View style={styles.topView}>
      <Text style={styles.title}>Testar DNA</Text>
      <Text style={styles.description}>Teste o seu DNA com possíveis familiares.</Text>
    </View>
  </View>
);

TestDNA.propTypes = {
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

TestDNA.defaultProps = {
  style: null,
};

export default TestDNA;
