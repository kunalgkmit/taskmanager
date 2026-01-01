import { View, Text } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FloatingActionButton from '../floatingActionButton';
import { Button } from '../button';

interface FilterProps {
  filterMode: boolean;
  filterPress: () => void;
}

export default function AppBar({ filterPress, filterMode }: FilterProps) {
  const insets = useSafeAreaInsets();
  const getSafeAreaPadding = () => ({
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  });
  return (
    <View style={[styles.appBar, getSafeAreaPadding()]}>
      <Text style={styles.appTitle}>Task Manager</Text>
      <View style={styles.buttonStyle}>
        <Button
          title={`Filter ${filterMode ? 'ON' : 'OFF'}`}
          onPress={filterPress}
        />
      </View>
    </View>
  );
}
