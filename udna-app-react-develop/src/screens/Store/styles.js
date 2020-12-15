import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  categoryView: {
    marginBottom: 30,
  },
  choiceButtons: {
    marginTop: 20,
  },
  container: {
    marginTop: 20,
    width: '100%',
  },
  textEmpty: {
    alignSelf: 'center',
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 20,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
  },
});
