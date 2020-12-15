import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import DNALoading from '../../assets/lottie/DNALoading.json';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';

import styles from './styles';

const Container = ({
  statusBarColor,
  withoutHeader,
  headerTitle,
  headerTextButton,
  onPressBack,
  onPressRight,
  children,
  loading,
  scrollEnabled,
}) => (
  <>
    <StatusBar color={statusBarColor} />
    <SafeAreaView style={styles.container}>
      {!withoutHeader && (
      <Header
        title={headerTitle}
        textButton={headerTextButton}
        onPressLeft={onPressBack}
        onPressRight={onPressRight}
      />
      )}
      <ScrollView
        scrollEnabled={scrollEnabled}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.subContainerView}
        contentContainerStyle={styles.subContainerContent}
      >
        {!loading
          ? children
          : (
            <View style={styles.lottieView}>
              <LottieView
                source={DNALoading}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  </>
);

Container.propTypes = {
  statusBarColor: propTypes.string,
  withoutHeader: propTypes.bool,
  headerTitle: propTypes.string,
  headerTextButton: propTypes.string,
  onPressBack: propTypes.func,
  onPressRight: propTypes.func,
  children: propTypes.node,
  loading: propTypes.bool,
  scrollEnabled: propTypes.bool,
};

Container.defaultProps = {
  statusBarColor: 'bg',
  withoutHeader: false,
  headerTitle: '',
  headerTextButton: '',
  onPressBack: null,
  onPressRight: null,
  children: null,
  loading: false,
  scrollEnabled: true,
};

export default Container;
