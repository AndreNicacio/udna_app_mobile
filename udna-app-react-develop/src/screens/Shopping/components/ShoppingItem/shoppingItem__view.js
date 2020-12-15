import propTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const ShoppingItemView = ({ title, status, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.name}>{title}</Text>
    <View style={[styles.statusView, { backgroundColor: status.color }]}>
      <Text style={styles.status}>{status.text}</Text>
    </View>
  </TouchableOpacity>
);

ShoppingItemView.propTypes = {
  title: propTypes.string,
  status: propTypes.shape({
    text: propTypes.string,
    color: propTypes.string,
  }),
  onPress: propTypes.func.isRequired,
};

ShoppingItemView.defaultProps = {
  title: '',
  status: {
    text: '',
    color: '',
  },
};

export default ShoppingItemView;
