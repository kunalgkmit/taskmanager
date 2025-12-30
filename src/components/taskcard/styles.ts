import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2E',
    borderRadius: 14,
    padding: 15,
    marginVertical: 10,
    width: 350,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    color: '#B0B0B0',
    fontSize: 13,
    lineHeight: 18,
  },
  textContent: {
    flex: 1,
    marginLeft: 5,
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  rowContent: {
    flexDirection: 'row',
  },
  priority: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 'auto',
  },
  checkBoxInner: {
    borderRadius: 0,
    borderWidth: 2,
    borderColor: 'black',
  },
  checkBoxIcon: {
    borderColor: 'green',
    borderRadius: 0,
  },
});
