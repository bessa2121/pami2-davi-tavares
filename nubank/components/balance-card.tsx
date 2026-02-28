import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function BalanceCard() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Saldo disponível</Text>

      <Text style={styles.value}>
        {visible ? 'R$ 3.250,00' : '••••••'}
      </Text>

      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text style={styles.toggle}>
          {visible ? 'Ocultar saldo' : 'Mostrar saldo'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: 'gray',
  },
  value: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  toggle: {
    color: '#820AD1',
    fontWeight: 'bold',
  },
});