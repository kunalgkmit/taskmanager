import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
  },
  contentWrapper: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonTextWrapper: {
    marginLeft: 30,
    height: '60%',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  textWrapper: {
    height: 45,
    justifyContent: 'space-between',
  },
  text: { color: COLORS.secondary, fontWeight: 'bold' },
  profileImage: { height: 70, width: 70, tintColor: COLORS.secondary },
  drawerItems: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
  },
  drawerItemIcon: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  drawerItemTitle: {
    marginLeft: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});
