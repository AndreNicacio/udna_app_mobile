import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  lottie: {
    width: 200,
  },
  lottieView: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainerContent: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
  },
  subContainerView: {
    backgroundColor: colors.bg,
    width: '100%',
  },
});
