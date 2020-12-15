import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const CityView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Em qual cidade você mora?" />
      <TextInput
        label="Cidade"
        defaultValue={values.city}
        placeholder="Vitória"
        onChangeText={handleChange('city')}
        onBlur={handleBlur('city')}
        error={touched.city && errors.city}
        autoCapitalize="sentences"
        style={styles.textInput}
      />
    </>
  );
};

export default CityView;
