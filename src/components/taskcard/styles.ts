import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 15,
    marginVertical: 10,
    width: 360,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    color: COLORS.taskDescription,
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
    color: COLORS.secondary,
    marginLeft: 'auto',
  },
  checkBoxInner: {
    borderRadius: 0,
    borderWidth: 2,
  },
  checkBoxIcon: {
    borderRadius: 0,
  },
  checkboxStyle: {
    marginBottom: 33,
  },
});
