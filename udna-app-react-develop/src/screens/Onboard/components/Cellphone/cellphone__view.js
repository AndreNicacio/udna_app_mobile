import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';
import { masks } from '../../../../services/maskService';

import styles from './styles';

const CellphoneView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Por fim, nos diga seu celular." />
      <TextInput
        label="Celular"
        defaultValue={values.cellphone}
        placeholder="(00) 00000-0000"
        onChangeText={handleChange('cellphone')}
        formatText={(value) => masks.cellphone(value, values.cellphone)}
        onBlur={handleBlur('cellphone')}
        error={touched.cellphone && errors.cellphone}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

export default CellphoneView;
