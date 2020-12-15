import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const NumberView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="E qual o número da sua casa ?" />
      <TextInput
        label="Número"
        defaultValue={values.number}
        placeholder="00"
        onChangeText={handleChange('number')}
        onBlur={handleBlur('number')}
        error={touched.number && errors.number}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

export default NumberView;
