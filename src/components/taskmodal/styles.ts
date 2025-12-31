import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0.5,
    elevation: 3,
    marginVertical: 210,
    marginHorizontal: 50,
    padding: 10,
  },
  modalName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowContent: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  close: {
    marginLeft: 100,
    height: 35,
    width: 40,
  },
});
