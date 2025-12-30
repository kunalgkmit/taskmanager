import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  userInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
    padding: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 5,
  },
  inputLabel: {
    top: 7,
    marginRight: 'auto',
    marginLeft: 20,
  },
  priorityErrorText: {
    color: 'red',
  },
});
