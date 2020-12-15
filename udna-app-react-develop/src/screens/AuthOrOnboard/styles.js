import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  description: {
    color: colors.gray2,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    marginTop: 10,
    textAlign: 'center',
    width: '80%',
  },
  topView: {
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
});
