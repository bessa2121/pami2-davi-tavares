import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Barcode } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ActionItem({ icon, label, onPress }: any) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.circle}>
        {icon}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function ActionMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <ActionItem
        icon={<Feather name="command" size={22} color="white" />}
        label="Área Pix"
        onPress={() => router.push('/pix')}
      />

      <ActionItem
        icon={<Barcode size={22} color="white" />}
        label="Pagar"
        onPress={() => router.push('/payments')}
      />

      <ActionItem
        icon={<Feather name="grid" size={22} color="white" />}
        label="Pix QR"
      />

      <ActionItem
        icon={<Feather name="smartphone" size={22} color="white" />}
        label="Recarga"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    width: 80,
  },
  circle: {
    backgroundColor: '#2A2A2A',
    width: 65,
    height: 65,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
});
