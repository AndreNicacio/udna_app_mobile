import propTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import UDNAIcon from '../../assets/svg/UDNAIcon';
import colors from '../../styles/colors';
import Button from '../Button';

import styles from './styles';

const Header = ({
  title,
  textButton,
  onPressLeft,
  onPressRight,
}) => (
  <View style={styles.container}>
    <View style={styles.leftView}>
      {!!onPressLeft && (
      <TouchableOpacity>
        <Icon
          size={40}
          name="navigate-before"
          color={colors.gray1}
          onPress={onPressLeft}
        />
      </TouchableOpacity>
      )}
    </View>
    <View style={styles.middleView}>
      {!!title && (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
    <View style={styles.rightView}>
      {onPressRight ? (
        <Button
          text={textButton}
          onPress={onPressRight}
        />
      ) : <UDNAIcon />}
    </View>
  </View>
);

Header.propTypes = {
  title: propTypes.string,
  textButton: propTypes.string,
  onPressLeft: propTypes.func,
  onPressRight: propTypes.func,
};

Header.defaultProps = {
  title: '',
  textButton: '',
  onPressLeft: null,
  onPressRight: null,
};

export default Header;
