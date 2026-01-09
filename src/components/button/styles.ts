import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  modifyTask: {
    backgroundColor: COLORS.modifyButton,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    margin: 3,
    width: 115,
    height: 40,
  },
  deleteTask: {
    backgroundColor: COLORS.errorButton,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    margin: 3,
    width: 115,
    height: 40,
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.secondary,
    fontSize: 13,
  },
});
