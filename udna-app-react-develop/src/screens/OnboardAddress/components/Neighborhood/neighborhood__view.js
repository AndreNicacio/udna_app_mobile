import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const NeighborhoodView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Em qual bairro você mora?" />
      <TextInput
        label="Bairro"
        defaultValue={values.neighborhood}
        placeholder="São Francisco"
        onChangeText={handleChange('neighborhood')}
        onBlur={handleBlur('neighborhood')}
        error={touched.neighborhood && errors.neighborhood}
        autoCapitalize="sentences"
        style={styles.textInput}
      />
    </>
  );
};

export default NeighborhoodView;
