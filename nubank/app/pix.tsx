import {
  AntDesign,
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';

import { useRouter } from 'expo-router';
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
