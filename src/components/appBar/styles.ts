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
  },
  sortButton: {
    paddingTop: 15,
    position: 'absolute',
    right: 60,
  },
  filterButton: {
    paddingTop: 15,
    position: 'absolute',
    right: 10,
  },
  selectIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'yellow',
    borderRadius: 8,
  },
  unSelectIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 8,
  },
});
