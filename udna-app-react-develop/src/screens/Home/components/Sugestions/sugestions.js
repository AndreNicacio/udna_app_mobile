/* eslint-disable react-native/no-inline-styles */
import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import DNALoading from '../../../../assets/lottie/DNALoading.json';

import styles from './styles';

const Sugestions = ({ sugestions }) => {
  const [loadingIcon, setLoadingIcon] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {sugestions.map((elt, index) => {
          if (elt) {
            return (
              <TouchableOpacity
                key={elt.title}
                onPress={elt.onPress}
                style={[styles.touchable,
                  {
                    marginLeft: index === 0 ? 0 : 20,
                  }]}
              >
                {elt.icon && (
                  <View style={styles.iconContainer}>
                    <Image
                      source={elt.icon}
                      style={styles.icon}
                      resizeMode="contain"
                      onLoadStart={() => setLoadingIcon(true)}
                      onLoadEnd={() => setLoadingIcon(false)}
                    />
                  </View>
                )}
                <Text style={styles.itemTitle}>{elt.title}</Text>
                {loadingIcon && (
                <LottieView
                  source={DNALoading}
                  autoPlay
                  loop
                  style={styles.loading}
                />
                )}
              </TouchableOpacity>
            );
          }
          return null;
        })}
      </ScrollView>
    </View>
  );
};

Sugestions.propTypes = {
  sugestions: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string,
    icon: propTypes.number,
    onPress: propTypes.func,
  })),
};

Sugestions.defaultProps = {
  sugestions: [],
};

export default Sugestions;
