import { StyleSheet } from 'react-native';

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
  errorMessage: {
    color: 'red',
    marginBottom: 5,
  },
  priorityLabel: {
    top: 7,
    marginRight: 'auto',
    marginLeft: 25,
  },
  inputLabel: {
    top: 20,
    marginRight: 'auto',
    marginLeft: 25,
  },
  errorLabel: {
    color: 'red',
    marginRight: 'auto',
    marginLeft: 25,
    bottom: 20,
  },
  errorPriority: {
    color: 'red',
    marginRight: 'auto',
    marginLeft: 25,
    bottom: 8,
  },
});
