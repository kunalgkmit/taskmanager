import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    margin: 3,
    width: 115,
    height: 40,
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 13,
  },
});
