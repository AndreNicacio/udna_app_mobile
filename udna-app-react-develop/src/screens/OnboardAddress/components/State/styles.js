import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';

export default StyleSheet.create({
  dropdownContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  dropdownInput: {
    paddingTop: 20,
  },
});
