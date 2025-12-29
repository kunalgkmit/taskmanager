import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDC1FF',
    top: 10,
    width: 350,
    margin: 10,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: '#EBEAFF',
    alignContent: 'flex-end',
    height: 170,
    borderRadius: 25,
    padding: 10,
    elevation: 10,
    shadowColor: 'grey',
  },
  item: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
  },
  buttonContainer: {
    margin: 10,
    flexDirection: 'row',
  },
  textContainer: {
    marginBottom: 40,
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
  checkBoxWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  priority: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 6,
    marginLeft: 'auto',
  },
});
