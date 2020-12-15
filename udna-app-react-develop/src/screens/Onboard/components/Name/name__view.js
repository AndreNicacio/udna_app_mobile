import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const NameView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Agora digite seu nome completo." />
      <TextInput
        label="Nome completo"
        defaultValue={values.name}
        placeholder="João Carvalho"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        error={touched.name && errors.name}
        autoCapitalize="words"
        style={styles.textInput}
      />
    </>
  );
};

export default NameView;
