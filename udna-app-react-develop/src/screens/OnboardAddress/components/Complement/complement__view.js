import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const ComplementView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Se quiser, digite um complemento." />
      <TextInput
        label="Complemento"
        defaultValue={values.complement}
        placeholder="Casa, Apartamento, etc."
        onChangeText={handleChange('complement')}
        onBlur={handleBlur('complement')}
        error={touched.complement && errors.complement}
        style={styles.textInput}
      />
    </>
  );
};

export default ComplementView;
