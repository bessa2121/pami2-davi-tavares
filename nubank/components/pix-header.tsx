<<<<<<< HEAD
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PixHeader() {
    const router = useRouter();

    return (

        <View>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => router.back()}
            >
            <Feather name="x" size={26} color="white" />
            </TouchableOpacity>

=======
import { StyleSheet, Text, View } from 'react-native';

export default function PixHeader() {
    return (
        <View>
>>>>>>> 7b4caf0cb4dc971ca6cf54f27caded968303b6e7
            <Text style={styles.title}>Área Pix</Text>
            <Text style={styles.description}>Envie e receba pagamentos a qualquer hora e dia de semana, sem pagar nada por isso.</Text>
        </View>
    )
}

<<<<<<< HEAD
const styles = StyleSheet.create({
    title: {
        fontSize: 33,
        color: '#fff',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 27,
        color: '#ababab',
        marginTop: 10, 
    },
    closeButton: {
        marginBottom: 15,
  },
=======
const styles = StyleSheet.create ({
    title:{
        fontSize: 39,
        color: '#fff',
        fontWeight: 'bold'
    },
    description:{
        fontSize: 27,
        color: '#ababab'
    }
>>>>>>> 7b4caf0cb4dc971ca6cf54f27caded968303b6e7
})