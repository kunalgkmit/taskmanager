import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  taskCard: {
    backgroundColor: 'brown',
    padding: 5,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
  },
  userInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
  modalWrapper:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView:{
    backgroundColor:'white',
    padding:50,
    borderRadius:20,
    borderWidth:1
  }
});
