<<<<<<< HEAD
import {
  AntDesign,
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';

import { useRouter } from 'expo-router';
=======
>>>>>>> 7b4caf0cb4dc971ca6cf54f27caded968303b6e7
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PixHeader from '../components/pix-header';

export default function PixScreen() {
  const router = useRouter();

  const options = [
    { label: 'Transferir', lib: FontAwesome6, icon: 'money-bill-transfer' },
    { label: 'Programar', lib: AntDesign, icon: 'calendar' },
    { label: 'Ler QR code', lib: MaterialCommunityIcons, icon: 'qrcode' },
    { label: 'Pix Copia e Cola', lib: Feather, icon: 'copy' },
    { label: 'Cobrar', lib: MaterialIcons, icon: 'payments' },
    { label: 'Depositar', lib: MaterialCommunityIcons, icon: 'transfer-down' },
    { empty: true },
    { label: 'Pix por aproximação', lib: MaterialCommunityIcons, icon: 'wifi-arrow-left-right', isNew: true },
  ];

  return (
    <ScrollView style={styles.container}>
      <PixHeader />
      <View style={styles.grid}>

        {options.map((item, index) => {
          if (item.empty) {
            return <View key={index} style={styles.itemContainer} />;
          }

          const IconComponent = item.lib;

          return (
            <View key={index} style={styles.itemContainer}>

              <TouchableOpacity style={styles.circle}>
                <IconComponent
                  name={item.icon}
                  size={28}
                  color="white"
                />

                {item.isNew && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Novo</Text>
                  </View>
                )}

              </TouchableOpacity>

              <Text style={styles.label}>
                {item.label}
              </Text>

            </View>
          );
        })}
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
    paddingBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    rowGap: 35,
    marginTop: 30,
  },

  itemContainer: {
    alignItems: 'center',
    width: '33.33%',
  },

  circle: {
    backgroundColor: '#1E1E1E',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  label: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: '#8A05BE',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },

  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});