import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    borderWidth: 0.5,
    elevation: 3,
    marginHorizontal: 40,
    padding: 20,
    width: '80%',
    position: 'absolute',
    top: '25%',
  },
  modalName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowContent: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 20,
  },
  close: {
    marginLeft: 125,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    height: 40,
    width: 40,
  },
  blurBackground: {
    backgroundColor: COLORS.primary,
    flex: 1,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
