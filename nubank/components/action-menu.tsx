import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

function ActionItem({ icon, label }: any) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.circle}>
        <Feather name={icon} size={22} color="white" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function ActionMenu() {
  return (
    <View style={styles.container}>
      <ActionItem icon="repeat" label="Área Pix e Transferir" />
      <ActionItem icon="barcode" label="Pagar" />
      <ActionItem icon="grid" label="Pix QR code" />
      <ActionItem icon="smartphone" label="Recarga" />
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