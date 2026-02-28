import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

export default function ActionButton({ title }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 8,
    elevation: 3,
  },
  text: {
    fontWeight: 'bold',
  },
});