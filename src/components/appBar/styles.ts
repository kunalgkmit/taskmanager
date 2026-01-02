import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appTitle: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  buttonWrapper: {
    paddingTop: 45,
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    paddingBottom: 25,
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
