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
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: '#7E60BF',
    borderRadius: 15,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: '#7E60BF',
    height: 23,
    width: 23,
    borderRadius: 20,
    margin: 2.5,
  },
});
