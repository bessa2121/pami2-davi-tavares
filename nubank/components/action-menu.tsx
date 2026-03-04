import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
<<<<<<< HEAD
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
=======
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function ActionItem({ icon, label, onPress }: any) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.circle}>
        <Feather name={icon} size={22} color="white" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
>>>>>>> 7b4caf0cb4dc971ca6cf54f27caded968303b6e7
}

export default function ActionMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ActionItem 
<<<<<<< HEAD
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
=======
        onPress={() => router.push('/pix')} 
        icon="repeat" 
        label="Área Pix" 
      />
      <ActionItem icon="barcode" label="Pagar" />
      <ActionItem icon="grid" label="Pix QR" />
      <ActionItem icon="smartphone" label="Recarga" />
>>>>>>> 7b4caf0cb4dc971ca6cf54f27caded968303b6e7
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
