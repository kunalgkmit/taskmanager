import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  appBarHome: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  appBarDrawer: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  titleWrapper: {
    marginTop: 10,
  },
  appTitle: {
    fontSize: 20,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '65%',
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
  drawerIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.secondary,
    marginTop: 10,
  },
  drawerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    gap: 13,
    marginLeft: 10,
  },
});
