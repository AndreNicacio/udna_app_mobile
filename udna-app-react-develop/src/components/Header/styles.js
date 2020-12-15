import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 2,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    shadowColor: colors.gray3,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.5,
    width: '100%',
    zIndex: 100,
  },
  leftView: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    width: '30%',
  },
  middleView: {
    alignItems: 'center',
    width: '30%',
  },
  rightView: {
    alignItems: 'flex-end',
    paddingRight: 10,
    width: '30%',
  },
  title: {
    color: colors.gray1,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font18,
  },
});
