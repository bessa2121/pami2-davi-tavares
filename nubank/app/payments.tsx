import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PayButtons from '../components/pay-buttons';
import PayHeader from '../components/pay-header';

export default function PaymentsScreen() {
  const router = useRouter();

  const options = [
    { label: 'Assistente de Pagamentos', icon: 'cash-sync' },
    { label: 'Débito Automático', icon: 'autorenew' },
    { label: 'Contas do Detran', icon: 'car' },
    { label: 'Pix por aproximação', icon: 'wifi' },
  ];

  return (
    <View style={styles.container}>
      <PayHeader />
      <PayButtons />

      <Text style={styles.section}>Mais opções</Text>

      {options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.listItem}>
          
          <View style={styles.leftContent}>
            <MaterialCommunityIcons 
              name={item.icon} 
              size={22} 
              color="white" 
              style={styles.icon}
            />
            <Text style={styles.listText}>{item.label}</Text>
          </View>

          <Feather name="chevron-right" size={22} color="#777" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  section: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 25,
    marginBottom: 10,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2C2C2E',
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 15,
  },

  listText: {
    color: 'white',
    fontSize: 16,
  },
});