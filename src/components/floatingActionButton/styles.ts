import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    left: 130,
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  image: { height: 30, width: 30 },
});
