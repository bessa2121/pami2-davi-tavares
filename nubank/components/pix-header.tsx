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

            <Text style={styles.title}>Área Pix</Text>
            <Text style={styles.description}>
                Envie e receba pagamentos a qualquer hora e dia de semana, sem pagar nada por isso.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 39,
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
    }
});
