import { StyleSheet, Text, View } from 'react-native';

export default function PixHeader() {
    return (
        <View>
            <Text style={styles.title}>Área Pix</Text>
            <Text style={styles.description}>Envie e receba pagamentos a qualquer hora e dia de semana, sem pagar nada por isso.</Text>
        </View>
    )
}

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
})