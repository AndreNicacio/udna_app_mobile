import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Success from '../../assets/lottie/Success.json';
import ButtonRound from '../../components/ButtonRound';
import Container from '../../layouts/Container';

import styles from './styles';

const OnboardSuccess = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.topView}>
          <LottieView
            source={Success}
            autoPlay
            loop={false}
            style={styles.lottie}
          />
          <View style={styles.textView}>
            <Text style={styles.title}>
              Bem vindo(a) à uDNA!
            </Text>
            <Text style={styles.description}>
              Seu cadastro foi realizado com sucesso.
              Agora precisamos das suas informações de endereço para que você possa
              receber o nosso kit de autocoleta
              no momento em que realizar sua primera compra.
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <ButtonRound
            style={styles.button}
            color="white"
            text="Pular endereço"
            onPress={() => navigate('Home')}
          />
          <ButtonRound
            style={styles.button}
            text="Continuar"
            onPress={() => navigate('OnboardAddress')}
          />
        </View>
      </View>
    </Container>
  );
};

export default OnboardSuccess;
