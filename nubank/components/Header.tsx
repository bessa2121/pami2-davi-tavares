import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Olá, Davi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#820AD1',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  greeting: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});