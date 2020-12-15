import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';
import { masks } from '../../../../services/maskService';

import styles from './styles';

const CPFView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Para começar, nos diga qual é o seu cpf." />
      <TextInput
        label="CPF"
        defaultValue={values.cpf}
        placeholder="000.000.000-00"
        onChangeText={handleChange('cpf')}
        formatText={(value) => masks.cpf(value, values.cpf)}
        onBlur={handleBlur('cpf')}
        error={touched.cpf && errors.cpf}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

export default CPFView;
