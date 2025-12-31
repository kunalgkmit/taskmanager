import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginBottom: 10,
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
});
