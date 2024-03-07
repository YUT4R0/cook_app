import { theme } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Animated, { BounceOutDown, SlideInDown } from 'react-native-reanimated';
import { Button } from '../Button';
import { styles } from './styles';

interface Props {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function SelectionModal({ onClear, onSearch, quantity }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons name='close' size={24} onPress={onClear} color={theme.colors.gray_400}/>
      </View>
      <Button title='Encontrar' onPress={onSearch} />
    </Animated.View>
  );
}
