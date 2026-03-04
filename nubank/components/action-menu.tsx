import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Barcode } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function ActionItem({ IconComponent, iconName, label, onPress }: any) {
  return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.circle}>
          <IconComponent name={iconName} size={22} color="white" />
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
      IconComponent={Feather}
      iconName="command"
      label="Área Pix"
      onPress={() => router.push('/pix')}
      />
      <ActionItem
      onPress={() => router.push('/payments')}
      IconComponent={Barcode}
      iconName={undefined} // Barcode não usa "name"
      label="Pagar" />
      <ActionItem 
        IconComponent={Feather}
        iconName="grid"
        label="Pix QR" />
      <ActionItem 
        IconComponent={Feather}
        iconName="smartphone"
        label="Recarga" />
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
