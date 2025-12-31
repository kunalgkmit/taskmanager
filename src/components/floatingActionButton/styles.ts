import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 24,
    marginLeft: 115,
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  image: { height: 30, width: 30 },
});
