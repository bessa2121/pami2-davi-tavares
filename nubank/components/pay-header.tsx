import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PayHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => router.back()}
      >
        <Feather name="x" size={26} color="white" />
      </TouchableOpacity>

      
      <Text style={styles.title}>Opções de pagamento</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  closeButton: {
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});