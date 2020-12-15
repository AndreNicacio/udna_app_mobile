import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const StreetView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Em qual rua você mora?" />
      <TextInput
        label="Rua"
        defaultValue={values.street}
        placeholder="Avenida Gerônimo Monteiro"
        onChangeText={handleChange('street')}
        onBlur={handleBlur('street')}
        error={touched.street && errors.street}
        autoCapitalize="sentences"
        style={styles.textInput}
      />
    </>
  );
};

export default StreetView;
