import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.taskDescription,
  },
  value: {
    fontSize: 18,
    color: COLORS.secondary,
  },
});
