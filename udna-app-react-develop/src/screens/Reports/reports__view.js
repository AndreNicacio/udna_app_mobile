import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import List from '../../components/List';
import { NUTRITIONAL_PROFILE, PROFESSIONAL_RECOMMENDATIONS, GENETIC_TESTS } from '../../constants/reports';
import Container from '../../layouts/Container';
import colors from '../../styles/colors';

import styles from './styles';

const ReportsView = ({
  loading,
  selectedType,
  reports,
  onChangeType,
  onChoiceReport,
}) => {
  const types = () => {
    const NP = NUTRITIONAL_PROFILE.split(' ');
    const PR = PROFESSIONAL_RECOMMENDATIONS.split(' ');
    const GT = GENETIC_TESTS.split(' ');

    return [{
      label: `${NP[0]} \n ${NP[1]}`,
      value: 0,
    }, {
      label: `${PR[0]} \n ${PR[1]}`,
      value: 1,
    }, {
      label: `${GT[0]} \n ${GT[1]}`,
      value: 2,
    }];
  };

  const textResponses = {
    0: 'Você não possui um Perfil Nutricional.',
    1: 'Você não possui nenhuma recomendação profissional.',
    2: 'Você não possui nenhum exame genético.',
  };
  return (
    <Container
      loading={loading}
      headerTitle="Resultados"
    >
      <SwitchSelector
        options={types()}
        initial={selectedType}
        onPress={onChangeType}
        textColor={colors.white}
        selectedColor={colors.white}
        buttonColor={colors.primary}
        backgroundColor={colors.purple1}
        borderColor={colors.transparent}
        fontSize={12}
        textStyle={styles.textSwitch}
        selectedTextStyle={styles.textSwitch}
        style={styles.switchSelector}
      />
      <View style={styles.container}>
        {reports[selectedType].list.length !== 0
          ? <List data={reports[selectedType].list} onPress={onChoiceReport} />
          : <Text style={styles.text}>{textResponses[selectedType]}</Text>}
      </View>
    </Container>
  );
};

ReportsView.propTypes = {
  loading: propTypes.bool.isRequired,
  selectedType: propTypes.number.isRequired,
  reports: propTypes.arrayOf(propTypes.shape({
    type: propTypes.string.isRequired,
    list: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      displayName: propTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired).isRequired,
  onChangeType: propTypes.func.isRequired,
  onChoiceReport: propTypes.func.isRequired,
};

export default ReportsView;
