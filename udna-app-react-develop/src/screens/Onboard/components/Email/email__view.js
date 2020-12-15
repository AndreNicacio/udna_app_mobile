import React from 'react';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const EmailView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="E qual é o seu email ?" />
      <TextInput
        label="Email"
        defaultValue={values.email}
        placeholder="udna@udna.com.br"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={touched.email && errors.email}
        style={styles.textInput}
      />

      <TextInput
        label="Confirmação do email"
        defaultValue={values.emailConfirmation}
        placeholder="udna@udna.com.br"
        onChangeText={handleChange('emailConfirmation')}
        onBlur={handleBlur('emailConfirmation')}
        error={touched.emailConfirmation && errors.emailConfirmation}
        autoFocus={false}
        style={styles.textInput}
      />
    </>
  );
};

export default EmailView;
