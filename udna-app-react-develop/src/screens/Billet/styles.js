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
  code: {
    color: colors.primary,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font20,
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
    marginTop: 20,
  },
  topView: {
    alignItems: 'center',
    width: '100%',
  },
});
