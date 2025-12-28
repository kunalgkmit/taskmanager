import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
  },
  radio: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'black',
    height: 23,
    width: 23,
    borderRadius: 20,
    margin: 2.5,
  },
  touchableOpacity: {},
});
