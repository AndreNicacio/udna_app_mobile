import React from 'react';

import PasswordCondition from '../../../../components/PasswordCondition';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const PasswordView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="Agora precisamos que digite uma senha segura para você." />
      <PasswordCondition />
      <TextInput
        label="Senha"
        defaultValue={values.password}
        placeholder="******"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={touched.password && errors.password}
        secureTextEntry
        style={styles.textInput}
      />
      <TextInput
        label="Confirme sua senha"
        defaultValue={values.passwordConfirmation}
        placeholder="******"
        onChangeText={handleChange('passwordConfirmation')}
        onBlur={handleBlur('passwordConfirmation')}
        error={touched.passwordConfirmation && errors.passwordConfirmation}
        secureTextEntry
        autoFocus={false}
        style={styles.textInput}
      />
    </>
  );
};

export default PasswordView;
