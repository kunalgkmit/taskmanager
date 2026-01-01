import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appTitle: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  buttonStyle: {
    paddingTop: 15,
    position: 'absolute',
    right: 10,
  },
});
