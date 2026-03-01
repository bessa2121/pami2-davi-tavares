import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PixScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Área Pix</Text>

      <Text style={styles.subtitle}>
        Envie e receba pagamentos a qualquer hora do dia, sem pagar nada.
      </Text>

      <View style={styles.grid}>
        {['Transferir', 'Programar', 'Ler QR code',
          'Pix Copia e Cola', 'Cobrar', 'Depositar']
          .map((item, index) => (
            <TouchableOpacity key={index} style={styles.circle}>
              <Text style={styles.circleText}>{item}</Text>
            </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaa',
    marginTop: 10,
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  circle: {
    backgroundColor: '#1E1E1E',
    width: '48%',
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  circleText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});