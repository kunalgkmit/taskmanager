import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  appTitle: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  buttonWrapper: {
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 30,
    top: 10,
  },
  sortButton: {
    padding: 10,
  },
  filterButton: {
    padding: 10,
  },
  selectIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.selectIcon,
    borderRadius: 5,
  },
  unSelectIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.unselectIcon,
    borderRadius: 5,
  },
});
