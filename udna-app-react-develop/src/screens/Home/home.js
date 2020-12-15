import { useQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Freshchat } from 'react-native-freshchat-sdk';
import { useNavigation } from 'react-navigation-hooks';

import caixa from '../../assets/images/caixa.png';
import carta from '../../assets/images/enviar.png';
import evento from '../../assets/images/evento.png';
// import UDNAIcon from '../../assets/svg/UDNAIcon';
import { getUserCustomized, listCategorysCustomized, listKitsCustomized } from '../../graphql/queriesCustomized';
import Container from '../../layouts/Container';
import { useUser } from '../../providers/UserProvider';
import { FreshchatUserPropertiesService, FreshChatIdentifyService } from '../../services/freshchatService';
import { maskRemoveService } from '../../services/maskService';
import { mapStoreService } from '../../services/storeService';
import { mapUserService } from '../../services/userService';

import ActivateModal from './components/ActivateModal';
import ExamCard from './components/ExamCard';
import MyDna from './components/MyDna';
import Sugestions from './components/Sugestions';
import TestDna from './components/TestDna';
import styles from './styles';


const Home = () => {
  const { user, setUser } = useUser();
  const { navigate } = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const [codeValidation, setCodeValidation] = useState('');
  const [exam, setExam] = useState({});

  const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
    variables: { id: maskRemoveService(user.cpf) },
  });

  const { data: kitData } = useQuery(listKitsCustomized);

  const { data: categoriesData, loading: categoriesLoading } = useQuery(listCategorysCustomized);

  useEffect(() => {
    if (userData) {
      const mappedUser = mapUserService(userData.getUser);
      setUser(mappedUser);
      FreshchatUserPropertiesService(mappedUser);
      FreshChatIdentifyService(mappedUser);
    }
  }, [userData]);

  const validateCode = () => {
    if (kitData) {
      const codes = kitData.listKits.items;
      const validCodes = codes.map((elt) => {
        if (elt.status !== 'ACTIVATE') {
          return elt.id;
        }
        return '';
      });
      if (validCodes.includes(code) && categoriesData) {
        const selectedCode = codes.filter((elt) => elt.id === code)[0];
        const selectedCategory = mapStoreService(categoriesData, user)
          .filter((elt) => elt.id === selectedCode.categoryId)[0];
        const selectedExam = selectedCategory.exams
          .filter((elt) => elt.id === selectedCode.examId)[0];
        setExam({
          ...selectedExam,
          price: (Number(selectedExam.price) - 49.00).toFixed(2).toString(),
        });
        setCodeValidation('valid');
        return;
      }
      setCodeValidation('invalid');
    }
  };

  const kitActivation = () => {
    switch (codeValidation) {
      case 'valid':
        setIsModalVisible(false);
        setCode('');
        setCodeValidation('');
        navigate('ExamInfo', { exam, codeId: code });
        break;

      case 'invalid':
        setIsModalVisible(false);
        setCode('');
        setCodeValidation('');
        break;

      default:
        validateCode();
        break;
    }
  };

  const sugestions = [
    {
      title: 'Fale conosco',
      icon: carta,
      onPress: () => Freshchat.showConversations(),

    },
    {
      title: 'Ativar Kit',
      icon: caixa,
      onPress: () => setIsModalVisible(true),
    },
    {
      title: 'Agendamento',
      icon: evento,
      onPress: () => navigate('Consultation'),

    },
  ];

  const navigateToExam = () => {
    if (categoriesData) {
      const examInfo = categoriesData.listCategorys.items
        .filter((category) => category.id === '05')[0].exams.items
        .filter((elt) => elt.id === 'h-00')[0];
      navigate('ExamInfo', { exam: examInfo });
    }
  };

  return (
    <Container headerTitle="Principal" loading={userLoading || categoriesLoading}>
      <View style={styles.container}>
        <ExamCard
          name={user?.name?.split(' ')[0]}
          onPress={navigateToExam}
          style={styles.card}
        />
        <Sugestions sugestions={sugestions} />
        <ActivateModal
          isVisible={isModalVisible}
          code={code}
          codeValidation={codeValidation}
          onChangeCode={setCode}
          onPress={kitActivation}
          onPressSecond={() => setIsModalVisible(false)}
        />
      </View>
      <View style={styles.products}>
        <MyDna onPress={() => navigate('Store', { storeType: 2, storeTitle: 'Meu DNA' })} />
        {/* <View style={styles.floatIcon}>
              <UDNAIcon width={50} height={50} />
            </View> */}
        <TestDna onPress={() => navigate('Store', { storeType: 3, storeTitle: 'Testar DNA' })} />
      </View>
    </Container>
  );
};

export default Home;
