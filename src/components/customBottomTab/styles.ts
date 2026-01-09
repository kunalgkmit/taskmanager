import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  name: { color: COLORS.primary },
  button: {
    alignItems: 'center',
    gap: 8,
  },
  imageHighlight: {
    width: 50,
    alignItems: 'center',
    borderRadius: 20,
    padding: 2,
  },
  title: {
    fontWeight: 'bold',
  },
});
