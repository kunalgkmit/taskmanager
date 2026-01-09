import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  userInput: {
    width: 260,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: 25,
    padding: 10,
  },
  priorityLabel: {
    marginRight: 'auto',
    marginLeft: 25,
  },
  inputLabel: {
    top: 20,
    marginRight: 'auto',
    marginLeft: 25,
  },
  errorLabel: {
    color: COLORS.error,
    marginRight: 'auto',
    marginLeft: 25,
    bottom: 20,
  },
  errorPriority: {
    color: COLORS.error,
    marginRight: 'auto',
    marginLeft: 25,
    bottom: 8,
  },
});
