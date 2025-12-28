import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6A99D',
    top: 10,
    width: 350,
    margin: 10,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'brown',
  },
  wrapper: {
    backgroundColor: '#FFFECE',
    alignContent: 'flex-end',
    height: 170,
    borderRadius: 25,
    padding: 10,
    borderColor: 'brown',
    borderWidth: 1,
  },
  item: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
  },
  buttonContainer: {
    margin: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  textContainer: {
    margin: 5,
    marginLeft: 20,
  },
});
