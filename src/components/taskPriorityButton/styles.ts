import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
  },
  radio: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: '#2C2C2E',
    borderRadius: 12.5,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: '#2C2C2E',
    height: 18,
    width: 18,
    borderRadius: 20,
    margin: 2.6,
  },
});
