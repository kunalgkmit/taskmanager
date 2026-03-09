import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
  },
  radio: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12.5,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: COLORS.primary,
    height: 18,
    width: 18,
    borderRadius: 20,
    margin: 2.6,
  },
  button: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
