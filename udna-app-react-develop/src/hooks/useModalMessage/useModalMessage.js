import React from 'react';
import { Text, View } from 'react-native';

import ButtonRound from '../../components/ButtonRound';
import { useModal } from '../../providers/ModalProvider';

import styles from './styles';

const useModalMessage = () => {
  const { modalRender, showModal, hideModal } = useModal();

  const showModalMessage = ({
    title,
    description,
    buttonText,
    buttonTextSecond,
    onPress,
    onPressSecond,
  }) => {
    modalRender(
      <View style={styles.container}>
        {title && (
        <Text style={styles.title}>
          {title}
        </Text>
        )}
        {description && (
        <Text style={styles.description}>
          {description}
        </Text>
        )}
        <View style={styles.buttonView}>
          <ButtonRound
            text={buttonText || 'Ok'}
            onPress={onPress || hideModal}
          />
          {!!buttonTextSecond
                && (
                <ButtonRound
                  color="white"
                  text={buttonTextSecond || 'Ok'}
                  onPress={onPressSecond || hideModal}
                  style={styles.button}
                />
                )}
        </View>
      </View>,
    );
    showModal();
  };

  const hideModalMessage = () => {
    hideModal();
  };

  return { showModalMessage, hideModalMessage };
};

export default useModalMessage;
