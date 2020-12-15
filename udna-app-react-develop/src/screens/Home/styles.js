import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  card: {
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
  },
  floatIcon: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 60,
    elevation: 2,
    height: 120,
    justifyContent: 'center',
    left: Dimensions.get('window').width / 2 - 70,
    position: 'absolute',
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    top: -30,
    width: 120,
    zIndex: 10,
  },
  products: {
    flex: 0.4,
    flexDirection: 'row',
  },
});
