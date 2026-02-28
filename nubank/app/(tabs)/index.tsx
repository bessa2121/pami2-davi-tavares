import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.user}>Olá, Davi</Text>
      </View>

      {/* SALDO */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo em conta</Text>
        <Text style={styles.balanceValue}>R$ 3.250,00</Text>
      </View>

      {/* AÇÕES */}
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/pix')}
        >
          <Text style={styles.actionText}>Área Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/payments')}
        >
          <Text style={styles.actionText}>Pagar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#820AD1',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  user: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  balanceContainer: {
    padding: 20,
  },
  balanceLabel: {
    color: '#aaa',
    fontSize: 16,
  },
  balanceValue: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});