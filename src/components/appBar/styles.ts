import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  titleWrapper: {
    marginTop: 10,
  },
  appTitle: {
    fontSize: 30,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  filterButton: {
    paddingLeft: 15,
  },
  selectIcon: {
    backgroundColor: COLORS.selectIcon,
  },
  unSelectIcon: {
    backgroundColor: COLORS.secondary,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
});
